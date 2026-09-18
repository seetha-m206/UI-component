import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

describe('rating-star-field reconstructed Preview harness', () => {
  it('is the first tab and shows the reconstruction notice, not the original Zoho source', async () => {
    render(
      <MemoryRouter initialEntries={['/zoho-forms/rating-star-field']}>
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

    const previewPanel = screen.getByRole('tabpanel', { name: 'Preview' });
    expect(
      within(previewPanel).queryByText(/export function RatingStarField/)
    ).not.toBeInTheDocument();
  });

  it('exposes viewport, component-state, enabled/disabled, and required/optional controls', () => {
    render(
      <MemoryRouter initialEntries={['/zoho-forms/rating-star-field']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('radiogroup', { name: 'Preview viewport' })).toBeInTheDocument();
    for (const v of ['Desktop', 'Tablet', 'Mobile']) {
      expect(screen.getByRole('radio', { name: v })).toBeInTheDocument();
    }
    expect(screen.getByRole('radiogroup', { name: 'Preview fixture' })).toBeInTheDocument();
    for (const state of [
      'Full 5-star rating',
      'Partial (2 of 5)',
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
      <MemoryRouter initialEntries={['/zoho-forms/rating-star-field']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('How would you rate our support team?')).toBeInTheDocument();
    await user.click(screen.getByRole('radio', { name: 'Partial (2 of 5)' }));
    expect(screen.getByText('How likely are you to recommend us to a friend?')).toBeInTheDocument();
  });

  it('the Disabled/Enabled toggle overrides interactivity live, independent of the selected fixture', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/zoho-forms/rating-star-field']}>
        <App />
      </MemoryRouter>
    );
    const star1 = () => screen.getByRole('radio', { name: '1 Star' });
    expect(star1()).not.toBeDisabled();

    const stateToggle = within(screen.getByRole('radiogroup', { name: 'State' }));
    await user.click(stateToggle.getByRole('radio', { name: 'Disabled' }));
    expect(star1()).toBeDisabled();

    await user.click(stateToggle.getByRole('radio', { name: 'Enabled' }));
    expect(star1()).not.toBeDisabled();
  });

  it('preview state survives switching to another tab and back (Tabs keeps panels mounted)', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/zoho-forms/rating-star-field']}>
        <App />
      </MemoryRouter>
    );
    await user.click(screen.getByRole('radio', { name: 'Unselected' }));
    await user.click(screen.getByRole('radio', { name: '4 Stars' }));
    expect(screen.getByRole('radio', { name: '4 Stars' })).toHaveAttribute('aria-checked', 'true');

    await user.click(screen.getByRole('tab', { name: 'Rules' }));
    await user.click(screen.getByRole('tab', { name: 'Preview' }));

    expect(screen.getByRole('radio', { name: '4 Stars' })).toHaveAttribute('aria-checked', 'true');
  });

  it('never calls fetch/XHR while interacting with the preview (no Zoho network requests)', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/zoho-forms/rating-star-field']}>
        <App />
      </MemoryRouter>
    );
    await user.click(screen.getByRole('radio', { name: '3 Stars' }));
    await user.click(screen.getByRole('radio', { name: 'Partial (2 of 5)' }));
    await user.click(screen.getByRole('radio', { name: 'Mobile' }));
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });

  it('logs no console errors while mounting and interacting with the preview', async () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/zoho-forms/rating-star-field']}>
        <App />
      </MemoryRouter>
    );
    await user.click(screen.getByRole('radio', { name: 'Required validation error' }));
    await user.click(screen.getByRole('radio', { name: '5 Stars' }));
    expect(errorSpy).not.toHaveBeenCalled();
    errorSpy.mockRestore();
  });
});
