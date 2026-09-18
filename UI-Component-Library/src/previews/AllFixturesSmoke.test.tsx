import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { previewRegistry } from './registry';
import { allComponents } from '@utils/loadComponents';

// Comprehensive check: mount every registered preview and click through
// every one of its fixtures/examples, asserting the ErrorBoundary fallback
// ("Preview failed to load") never appears and no console.error fires.
// Unlike the per-component test files, this exercises ALL fixtures for ALL
// components in one pass, not just the ones each component's own test
// happened to select.
describe('Every registered preview renders every fixture without error', () => {
  for (const [id, entry] of Object.entries(previewRegistry)) {
    const fixtureOrExampleCount =
      entry.type === 'reconstructed' ? entry.fixtures.length : entry.examples.length;

    it(`"${id}" mounts all ${fixtureOrExampleCount} state(s) cleanly`, async () => {
      const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      // The registry is keyed only by content id, not brand — the same id
      // could theoretically exist under more than one brand, so look up the
      // real brand from the content entries rather than assuming zoho-forms
      // (which broke once Typeform components were registered too).
      const contentEntry = allComponents.find((c) => c.id === id);
      expect(contentEntry, `no content entry found for registry key "${id}"`).toBeDefined();

      render(
        <MemoryRouter initialEntries={[contentEntry!.url]}>
          <App />
        </MemoryRouter>
      );

      if (entry.type === 'reconstructed') {
        // Click through every "Component state" fixture button, checking
        // for the failure fallback after each one.
        const fixtureButtons = screen
          .getAllByRole('radio')
          .filter((el) => entry.fixtures.some((f) => f.title === el.textContent));
        const { default: userEvent } = await import('@testing-library/user-event');
        const user = userEvent.setup();
        for (const button of fixtureButtons) {
          await user.click(button);
          expect(
            screen.queryByText('Preview failed to load'),
            `"${id}" fixture "${button.textContent}" triggered the error boundary`
          ).not.toBeInTheDocument();
        }
      } else {
        // Static examples are all rendered simultaneously (no state switch).
        expect(
          screen.queryByText('Preview failed to load'),
          `"${id}" triggered the error boundary on initial render`
        ).not.toBeInTheDocument();
      }

      expect(
        errorSpy,
        `"${id}" logged a console.error during preview interaction`
      ).not.toHaveBeenCalled();
      errorSpy.mockRestore();
    });
  }
});
