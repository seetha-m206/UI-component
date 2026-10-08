import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { previewRegistry } from './registry';
import { allComponents } from '@utils/loadComponents';

export function registerAllFixturesSmokeShard(shardIndex: number, shardCount: number) {
  const entries = Object.entries(previewRegistry).filter(
    (_entry, index) => index % shardCount === shardIndex
  );

  describe(`Every registered preview renders every fixture without error (shard ${shardIndex + 1}/${shardCount})`, () => {
    for (const [id, entry] of entries) {
      const fixtureOrExampleCount =
        entry.type === 'reconstructed' ? entry.fixtures.length : entry.examples.length;

      it(`"${id}" mounts all ${fixtureOrExampleCount} state(s) cleanly`, async () => {
        const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

        const contentEntry = allComponents.find((component) => component.id === id);
        expect(contentEntry, `no content entry found for registry key "${id}"`).toBeDefined();

        render(
          <MemoryRouter initialEntries={[contentEntry!.url]}>
            <App />
          </MemoryRouter>
        );

        if (entry.type === 'reconstructed') {
          const fixtureButtons = screen
            .getAllByRole('radio')
            .filter((element) =>
              entry.fixtures.some((fixture) => fixture.title === element.textContent)
            );
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
}
