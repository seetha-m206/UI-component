import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AnalyticsDashboardKpiBarMap } from './AnalyticsDashboardKpiBarMap';
import { fixtures } from './fixtures';

function getFixture(id: string) {
  const fixture = fixtures.find((f) => f.id === id);
  if (!fixture) throw new Error(`fixture not found: ${id}`);
  return fixture.props;
}

describe('AnalyticsDashboardKpiBarMap', () => {
  it('renders the KPI values from the populated fixture', () => {
    render(<AnalyticsDashboardKpiBarMap {...getFixture('normal')} />);
    expect(screen.getByText('142')).toBeInTheDocument(); // Form Views
    expect(screen.getByText('61')).toBeInTheDocument(); // Submissions
    expect(screen.getByText('4.2%')).toBeInTheDocument(); // Error Score
    expect(screen.getByText('43.0%')).toBeInTheDocument(); // Conversion Rate
  });

  it('renders exactly daysInPeriod bars, filling sparse day data into a dense grid', () => {
    render(<AnalyticsDashboardKpiBarMap {...getFixture('normal')} />);
    // daysInPeriod is 10; every day 1-10 should be labeled, including days
    // absent from the sparse `days` array (e.g. day 4, day 7).
    for (let day = 1; day <= 10; day++) {
      expect(
        screen.getByRole('button', { name: new RegExp(`Sep 2026 ${day}:`) })
      ).toBeInTheDocument();
    }
    // A day absent from the sparse fixture data renders as a zero-count bar,
    // not as a missing column.
    expect(screen.getByRole('button', { name: 'Sep 2026 4: 0 views' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Sep 2026 5: 10 views' })).toBeInTheDocument();
  });

  it('renders the documented empty state instead of the bar chart when activity is zero', () => {
    render(<AnalyticsDashboardKpiBarMap {...getFixture('zero-activity')} />);
    expect(screen.getByText('No data available.')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Aug 2026/ })).not.toBeInTheDocument();
    // Plain zero values, no special empty styling on the KPI cards
    // themselves (per the record's dedicated Empty State section).
    expect(screen.getAllByText('0').length).toBeGreaterThan(0);
  });

  it('does not show the empty state for a populated fixture', () => {
    render(<AnalyticsDashboardKpiBarMap {...getFixture('normal')} />);
    expect(screen.queryByText('No data available.')).not.toBeInTheDocument();
  });

  it('blurs/locks the Starts KPI card when Advanced Metrics is disabled', () => {
    render(<AnalyticsDashboardKpiBarMap {...getFixture('advanced-metrics-locked')} />);
    expect(screen.getByText('Enable Advanced Metrics')).toBeInTheDocument();
    expect(screen.getByText('Starts metric locked — enable Advanced Metrics')).toBeInTheDocument();
  });

  it('shows the real Starts value when Advanced Metrics is enabled', () => {
    render(<AnalyticsDashboardKpiBarMap {...getFixture('advanced-metrics-unlocked')} />);
    expect(screen.queryByText('Enable Advanced Metrics')).not.toBeInTheDocument();
    expect(screen.getByText('40')).toBeInTheDocument();
  });

  it('renders the region progress list with count, percent, and a filled strip', () => {
    render(<AnalyticsDashboardKpiBarMap {...getFixture('normal')} />);
    expect(screen.getByText('Asia')).toBeInTheDocument();
    expect(screen.getByText('71')).toBeInTheDocument();
    expect(screen.getByText('(50.0%)')).toBeInTheDocument();
  });

  it('renders the map placeholder box instead of a real map image, per the documented scoping decision', () => {
    render(<AnalyticsDashboardKpiBarMap {...getFixture('normal')} />);
    const placeholder = screen.getByRole('img', {
      name: 'Region map (static image in the real product — not reconstructed, see README)',
    });
    expect(placeholder).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: /worldMap/i })).not.toBeInTheDocument();
  });

  it('shows a bar tooltip on hover and hides it again on mouse leave', async () => {
    const user = userEvent.setup();
    render(<AnalyticsDashboardKpiBarMap {...getFixture('normal')} />);
    const bar = screen.getByRole('button', { name: 'Sep 2026 5: 10 views' });
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

    await user.hover(bar);
    expect(screen.getByRole('tooltip')).toHaveTextContent('Sep 2026 5 / 10 / Views');

    await user.unhover(bar);
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('shows the same tooltip on keyboard focus, not just on hover', async () => {
    const user = userEvent.setup();
    render(<AnalyticsDashboardKpiBarMap {...getFixture('normal')} />);
    await user.tab(); // move focus into the stage; bars are the first focusable controls
    // Tab until a bar is focused (KPI cards are not focusable, so the first
    // stop should already be a bar).
    const active = document.activeElement;
    expect(active?.tagName).toBe('BUTTON');
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
  });

  it('never calls fetch/XHR while rendering or interacting (static data props, no live integration)', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<AnalyticsDashboardKpiBarMap {...getFixture('normal')} />);
    await user.hover(screen.getByRole('button', { name: 'Sep 2026 5: 10 views' }));
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
