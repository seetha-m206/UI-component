import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

describe('yes-no-toggle-field reconstructed Preview harness', () => {
  it('is the first tab and shows the reconstruction notice, not the original Zoho source', async () => {
    render(
      <MemoryRouter initialEntries={['/zoho-forms/yes-no-toggle-field']}>
        <App />
      </MemoryRouter>
    );
    const tabs = screen.getAllByRole('tab');
    expect(tabs[0]).toHaveTextContent('Preview');
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true');

    expect(
      screen.getByText(/Reconstructed interactive preview based on documented Zoho Forms behavior/)
    ).toBeInTheDocument();
    expect(screen.getByText(/This is not the original Zoho source component/)).toBeInTheDocument();
    // No raw source/code inside the Preview tabpanel specifically — the real
    // source legitimately lives in the (separately mounted) Code tabpanel.
    const previewPanel = screen.getByRole('tabpanel', { name: 'Preview' });
    expect(
      within(previewPanel).queryByText(/export function YesNoToggleField/)
    ).not.toBeInTheDocument();
  });

  it('exposes viewport, component-state, enabled/disabled, and required/optional controls', () => {
    render(
      <MemoryRouter initialEntries={['/zoho-forms/yes-no-toggle-field']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('radiogroup', { name: 'Preview viewport' })).toBeInTheDocument();
    for (const v of ['Desktop', 'Tablet', 'Mobile']) {
      expect(screen.getByRole('radio', { name: v })).toBeInTheDocument();
    }
    expect(screen.getByRole('radiogroup', { name: 'Preview fixture' })).toBeInTheDocument();
    for (const state of [
      'Yes selected',
      'No selected',
      'Unselected',
      'Required validation error',
      'Disabled by default',
      'Long label',
    ]) {
      expect(screen.getByRole('radio', { name: state })).toBeInTheDocument();
    }
    expect(screen.getByRole('radiogroup', { name: 'State' })).toBeInTheDocument();
    expect(screen.getByRole('radiogroup', { name: 'Validation' })).toBeInTheDocument();
  });

  it('switching the component-state control swaps the rendered fixture', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/zoho-forms/yes-no-toggle-field']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Do you agree to the terms and conditions?')).toBeInTheDocument();
    await user.click(screen.getByRole('radio', { name: 'No selected' }));
    expect(screen.getByText('Would you like to receive marketing emails?')).toBeInTheDocument();
  });

  it('the Disabled/Enabled toggle overrides interactivity live, independent of the selected fixture', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/zoho-forms/yes-no-toggle-field']}>
        <App />
      </MemoryRouter>
    );
    // Start on a non-disabled fixture; radios should be enabled.
    const yesRadio = () => screen.getByRole('radio', { name: 'Yes' });
    expect(yesRadio()).not.toBeDisabled();

    const stateToggle = within(screen.getByRole('radiogroup', { name: 'State' }));
    await user.click(stateToggle.getByRole('radio', { name: 'Disabled' }));
    expect(yesRadio()).toBeDisabled();

    await user.click(stateToggle.getByRole('radio', { name: 'Enabled' }));
    expect(yesRadio()).not.toBeDisabled();
  });

  it('preview state survives switching to another tab and back (Tabs keeps panels mounted)', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/zoho-forms/yes-no-toggle-field']}>
        <App />
      </MemoryRouter>
    );
    await user.click(screen.getByRole('radio', { name: 'Unselected' }));
    await user.click(screen.getByRole('radio', { name: 'No' }));
    expect(screen.getByRole('radio', { name: 'No' })).toHaveAttribute('aria-checked', 'true');

    await user.click(screen.getByRole('tab', { name: 'Rules' }));
    await user.click(screen.getByRole('tab', { name: 'Preview' }));

    expect(screen.getByRole('radio', { name: 'No' })).toHaveAttribute('aria-checked', 'true');
  });

  it('never calls fetch/XHR while interacting with the preview (no Zoho network requests)', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/zoho-forms/yes-no-toggle-field']}>
        <App />
      </MemoryRouter>
    );
    await user.click(screen.getByRole('radio', { name: 'Yes' }));
    await user.click(screen.getByRole('radio', { name: 'No selected' }));
    await user.click(screen.getByRole('radio', { name: 'Mobile' }));
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });

  it('logs no console errors while mounting and interacting with the preview', async () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/zoho-forms/yes-no-toggle-field']}>
        <App />
      </MemoryRouter>
    );
    await user.click(screen.getByRole('radio', { name: 'Required validation error' }));
    await user.click(screen.getByRole('radio', { name: 'Yes' }));
    expect(errorSpy).not.toHaveBeenCalled();
    errorSpy.mockRestore();
  });
});
