import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TypeformAnalyticsDashboard } from './TypeformAnalyticsDashboard';
import { fixtures } from './fixtures';

function getFixture(id: string) {
  const fixture = fixtures.find((f) => f.id === id);
  if (!fixture) throw new Error(`fixture not found: ${id}`);
  return fixture.props;
}

describe('TypeformAnalyticsDashboard', () => {
  it('renders all 4 tabs with Form performance active by default', () => {
    render(<TypeformAnalyticsDashboard {...getFixture('form-performance-default')} />);
    expect(screen.getByRole('tab', { name: 'Form performance' })).toHaveAttribute(
      'aria-selected',
      'true'
    );
    expect(screen.getByRole('tab', { name: 'Smart Insights' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Response summary' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Responses' })).toBeInTheDocument();
  });

  it('shows the real captured KPI figures (8/5/2/40%/00:16) for the All time default', () => {
    render(<TypeformAnalyticsDashboard {...getFixture('form-performance-default')} />);
    expect(screen.getByRole('img', { name: 'Views: 8' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Starts: 5' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Submissions: 2' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Completion rate: 40%' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Time to complete: 00:16' })).toBeInTheDocument();
  });

  it('renders KPI bars as genuine SVG rect/line elements, not a table or canvas', () => {
    render(<TypeformAnalyticsDashboard {...getFixture('form-performance-default')} />);
    // Scoped to the visible Form performance tabpanel — the Response summary
    // tabpanel is always mounted (toggled via the `hidden` attribute, the
    // standard accessible-tabs pattern) and legitimately owns its own
    // <table> view, so a whole-container query for "table" would wrongly
    // flag that unrelated, hidden panel.
    const panel = screen.getByRole('tabpanel', { name: 'Form performance' });
    const svgs = panel.querySelectorAll('svg[class*="kpiTileChart"]');
    expect(svgs.length).toBeGreaterThanOrEqual(5);
    const rects = panel.querySelectorAll('svg rect');
    expect(rects.length).toBeGreaterThanOrEqual(5);
    expect(panel.querySelector('canvas')).not.toBeInTheDocument();
    expect(panel.querySelector('table')).not.toBeInTheDocument();
  });

  it('the drop-off funnel card is a static paywalled teaser with fixed numbers', () => {
    render(<TypeformAnalyticsDashboard {...getFixture('form-performance-default')} />);
    expect(screen.getByText('See where users drop off')).toBeInTheDocument();
    expect(screen.getByText('Question 2')).toBeInTheDocument();
    expect(screen.getByText('32% of respondents leave here')).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: 'Upgrade plan' }).length).toBeGreaterThan(0);
  });

  it('selecting a date-range preset updates the KPI values synchronously, with no fetch call', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<TypeformAnalyticsDashboard {...getFixture('form-performance-default')} />);

    await user.click(screen.getByRole('button', { name: /All time/ }));
    await user.click(screen.getByRole('option', { name: 'Today' }));

    // Synchronous update — no findBy/wait needed.
    expect(screen.getByRole('img', { name: 'Views: 0' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Completion rate: 0%' })).toBeInTheDocument();
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });

  it('the "Today" fixture starts on the zero-activity KPI state directly', () => {
    render(<TypeformAnalyticsDashboard {...getFixture('form-performance-today')} />);
    expect(screen.getByRole('button', { name: /Today/ })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Views: 0' })).toBeInTheDocument();
  });

  it('Smart Insights tab shows a paywalled placeholder with a diamond badge and Upgrade plan CTA, not real content', async () => {
    const user = userEvent.setup();
    render(<TypeformAnalyticsDashboard {...getFixture('form-performance-default')} />);
    await user.click(screen.getByRole('tab', { name: 'Smart Insights' }));

    expect(screen.getByRole('heading', { name: 'Smart Insights' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Upgrade plan' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: /Views:/ })).not.toBeInTheDocument();
  });

  it('smart-insights fixture mounts directly on that tab', () => {
    render(<TypeformAnalyticsDashboard {...getFixture('smart-insights')} />);
    expect(screen.getByRole('tab', { name: 'Smart Insights' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('heading', { name: 'Smart Insights' })).toBeInTheDocument();
  });

  it('Response summary defaults to a literal <table> view of the example question', () => {
    render(<TypeformAnalyticsDashboard {...getFixture('response-summary-table')} />);
    const table = screen.getByRole('table');
    expect(within(table).getByText('Social media')).toBeInTheDocument();
    expect(within(table).getByText('5')).toBeInTheDocument();
    expect(within(table).getByText('45.5%')).toBeInTheDocument();
  });

  it('clicking the Horizontal/Vertical view-toggle icons swaps the table for the SVG bar chart', async () => {
    const user = userEvent.setup();
    render(<TypeformAnalyticsDashboard {...getFixture('response-summary-table')} />);
    expect(screen.getByRole('table')).toBeInTheDocument();

    await user.click(screen.getByRole('radio', { name: 'Vertical' }));
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
    expect(screen.getByRole('img', { name: /How did you hear about us\?/ })).toBeInTheDocument();

    await user.click(screen.getByRole('radio', { name: 'Table' }));
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('response-summary-chart fixture mounts directly on the SVG chart view', () => {
    render(<TypeformAnalyticsDashboard {...getFixture('response-summary-chart')} />);
    expect(screen.getByRole('radio', { name: 'Vertical' })).toHaveAttribute('aria-checked', 'true');
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
  });

  it('Responses tab renders a simple placeholder table', async () => {
    const user = userEvent.setup();
    render(<TypeformAnalyticsDashboard {...getFixture('form-performance-default')} />);
    await user.click(screen.getByRole('tab', { name: 'Responses' }));
    expect(screen.getByText(/simplified placeholder/)).toBeInTheDocument();
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('never calls fetch/XHR while switching tabs, date ranges, and chart views', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<TypeformAnalyticsDashboard {...getFixture('form-performance-default')} />);

    await user.click(screen.getByRole('tab', { name: 'Response summary' }));
    await user.click(screen.getByRole('radio', { name: 'Horizontal' }));
    await user.click(screen.getByRole('tab', { name: 'Responses' }));
    await user.click(screen.getByRole('tab', { name: 'Form performance' }));
    await user.click(screen.getByRole('button', { name: /All time/ }));
    await user.click(screen.getByRole('option', { name: 'Last month' }));

    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
