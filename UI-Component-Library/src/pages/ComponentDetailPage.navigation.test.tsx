import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

// Regression test for a real bug found via manual browser testing: React
// Router reuses the same ComponentDetailPage instance when only the :id
// route param changes (client-side navigation between two different
// components), so every useState inside that tree — including a Preview
// fixture's live `value` state in ReconstructedPreviewPanel/FixtureStage —
// persisted stale across navigation and got handed to the WRONG component.
// Concretely: visiting theme-color-picker-gradient (value shape
// {mode, solidColor, ...}) then navigating to rating-star-field (value
// shape: number | null) crashed with "Objects are not valid as a React
// child". Fixed by keying the page root on `${brand}/${id}`.
describe('Navigating between two different component pages', () => {
  it('does not leak preview state from one component into another', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/zoho-forms/theme-color-picker-gradient']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', { name: 'Color Picker Popover + Gradient/Angle Controls' })
    ).toBeInTheDocument();

    // Navigate via a real sidebar link click — not a fresh render() call —
    // since the bug only manifests when the same component instance is reused.
    await user.click(screen.getByRole('link', { name: /Rating Field \(5-Star Selector\)/ }));

    expect(
      screen.getByRole('heading', { name: 'Rating Field (5-Star Selector)' })
    ).toBeInTheDocument();
    expect(screen.queryByText('Preview failed to load')).not.toBeInTheDocument();
    // The Rating preview should render its own real fixtures, not carry over
    // anything from the previous page.
    expect(screen.getByRole('radio', { name: '1 Star' })).toBeInTheDocument();
  });

  it('resets the active tab and Preview fixture selection when navigating to a different component', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/zoho-forms/theme-color-picker-gradient']}>
        <App />
      </MemoryRouter>
    );

    // Switch away from the default Preview tab and to a non-default fixture.
    await user.click(screen.getByRole('tab', { name: 'Rules' }));
    expect(screen.getByRole('tab', { name: 'Rules' })).toHaveAttribute('aria-selected', 'true');

    await user.click(screen.getByRole('link', { name: /Rating Field \(5-Star Selector\)/ }));

    // The new page should default back to Preview as the active tab, not
    // inherit "Rules" as active from the previous page's leftover state.
    expect(screen.getByRole('tab', { name: 'Preview' })).toHaveAttribute('aria-selected', 'true');
  });
});
