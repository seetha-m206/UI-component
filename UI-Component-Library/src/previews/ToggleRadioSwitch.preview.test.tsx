import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Preview tab', () => {
  it('is shown first and active by default, and renders live interactive examples', async () => {
    render(
      <MemoryRouter initialEntries={['/zoho-forms/toggle-radio-switch']}>
        <App />
      </MemoryRouter>
    );

    const tabs = screen.getAllByRole('tab');
    expect(tabs[0]).toHaveTextContent('Preview');
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true');

    // No source/markdown/placeholder text — a live rendered example instead.
    // (Props/Endpoint also lists these titles in a table, so scope to headings.)
    expect(screen.getByRole('heading', { name: 'Disabled (default)' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Enabled' })).toBeInTheDocument();
    expect(screen.queryByText(/```/)).not.toBeInTheDocument();

    const enabledCard = screen.getByRole('heading', { name: 'Enabled' }).closest('section')!;
    const disableRadio = within(enabledCard).getByRole('radio', { name: 'Disable' });
    const enableRadio = within(enabledCard).getByRole('radio', { name: 'Enable' });
    expect(enableRadio).toBeChecked();
    expect(within(enabledCard).getByLabelText(/Save Button Label/)).toBeVisible();

    const user = userEvent.setup();
    await user.click(disableRadio);
    expect(disableRadio).toBeChecked();
    expect(enableRadio).not.toBeChecked();
  });

  // Note: as of this suite, every Zoho Forms component has a registered
  // preview, so there's no remaining real-data example of a component
  // lacking one to assert against. The underlying conditional (`previewEntry
  // ? [...] : []` in ComponentDetailPage.tsx) is simple and stays exercised
  // in the "present" direction by every test in this file and
  // ComponentDetailPage.audience.test.tsx.

  it('shows a Code tab with real component source and a working copy button', async () => {
    render(
      <MemoryRouter initialEntries={['/zoho-forms/toggle-radio-switch']}>
        <App />
      </MemoryRouter>
    );
    // userEvent.setup() installs its own Clipboard polyfill on navigator,
    // replacing anything defined beforehand, so the spy must attach to the
    // clipboard object it creates rather than pre-stubbing navigator.clipboard.
    const user = userEvent.setup();
    const writeText = vi.spyOn(navigator.clipboard, 'writeText').mockResolvedValue(undefined);

    await user.click(screen.getByRole('tab', { name: 'Code' }));

    expect(screen.getByText('ToggleRadioSwitch.tsx')).toBeInTheDocument();
    expect(screen.getByText(/export function ToggleRadioSwitch/)).toBeInTheDocument();

    await user.click(screen.getAllByRole('button', { name: 'Copy code' })[0]);
    expect(writeText).toHaveBeenCalledWith(
      expect.stringContaining('export function ToggleRadioSwitch')
    );
  });

  it('shows a Vector tab on every component page with structured JSON metadata', async () => {
    render(
      <MemoryRouter initialEntries={['/zoho-forms/toggle-radio-switch']}>
        <App />
      </MemoryRouter>
    );
    // Scoped to the page's own tablist (by its accessible name) rather than
    // screen.getAllByRole('tab') on the whole document: some reconstructed
    // preview components (e.g. theme-editor-split-pane-shell) render their
    // own internal tab-like icon strip, which would otherwise be picked up
    // too since Tabs keeps every panel mounted, not just the active one.
    const pageTabs = within(
      screen.getByRole('tablist', { name: 'Component documentation sections' })
    ).getAllByRole('tab');
    expect(pageTabs[pageTabs.length - 1]).toHaveTextContent('Vector');

    const user = userEvent.setup();
    await user.click(screen.getByRole('tab', { name: 'Vector' }));
    expect(screen.getByText('vector.json')).toBeInTheDocument();
    expect(screen.getByText(/"id": "zoho-forms\/toggle-radio-switch"/)).toBeInTheDocument();
  });
});
