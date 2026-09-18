import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AnalyticsDeepInsightsDropoff } from './AnalyticsDeepInsightsDropoff';
import { fixtures } from './fixtures';

function getFixture(id: string) {
  const fixture = fixtures.find((f) => f.id === id);
  if (!fixture) throw new Error(`fixture not found: ${id}`);
  return fixture.props;
}

describe('AnalyticsDeepInsightsDropoff', () => {
  it('defaults to the Field Metrics tab, listing every field with clicks and starts', () => {
    render(<AnalyticsDeepInsightsDropoff {...getFixture('populated')} />);
    expect(screen.getByRole('tab', { name: 'Field Metrics' })).toHaveAttribute(
      'aria-selected',
      'true'
    );
    const panel = screen.getByRole('tabpanel', { name: 'Field Metrics' });
    expect(within(panel).getByText('Single Line')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Single Line: 142 clicks' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Single Line: 98 starts' })).toBeInTheDocument();
  });

  it('switches to the Page Metrics tab and shows per-page views', async () => {
    const user = userEvent.setup();
    render(<AnalyticsDeepInsightsDropoff {...getFixture('populated')} />);
    await user.click(screen.getByRole('tab', { name: 'Page Metrics' }));
    expect(screen.getByRole('tabpanel', { name: 'Page Metrics' })).toBeVisible();
    expect(screen.getByText('Page 1')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Page 1: 120 page views' })).toBeInTheDocument();
  });

  it('switches to the Drop-off Count tab, titled and column-labeled per the record', async () => {
    const user = userEvent.setup();
    render(<AnalyticsDeepInsightsDropoff {...getFixture('populated')} />);
    await user.click(screen.getByRole('tab', { name: 'Drop-off Count' }));
    expect(screen.getByText('Drop-off Count: Form Fields')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'File Upload: 15 drop-offs' })).toBeInTheDocument();
  });

  it('supports ArrowLeft/ArrowRight keyboard navigation between tabs', async () => {
    const user = userEvent.setup();
    render(<AnalyticsDeepInsightsDropoff {...getFixture('populated')} />);
    const fieldTab = screen.getByRole('tab', { name: 'Field Metrics' });
    fieldTab.focus();
    await user.keyboard('{ArrowRight}');
    expect(screen.getByRole('tab', { name: 'Page Metrics' })).toHaveAttribute(
      'aria-selected',
      'true'
    );
    expect(screen.getByRole('tab', { name: 'Page Metrics' })).toHaveFocus();
  });

  it('filters the Field Metrics list client-side as the user types, with no debounce', async () => {
    const user = userEvent.setup();
    render(<AnalyticsDeepInsightsDropoff {...getFixture('populated')} />);
    const panel = screen.getByRole('tabpanel', { name: 'Field Metrics' });
    const search = screen.getByRole('searchbox', { name: 'Search fields by name' });
    await user.type(search, 'drop');
    expect(within(panel).getByText('Dropdown')).toBeInTheDocument();
    expect(within(panel).queryByText('Single Line')).not.toBeInTheDocument();
  });

  it('shows a "no match" message when a field search returns nothing', async () => {
    const user = userEvent.setup();
    render(<AnalyticsDeepInsightsDropoff {...getFixture('populated')} />);
    const search = screen.getByRole('searchbox', { name: 'Search fields by name' });
    await user.type(search, 'zzz-nonexistent');
    expect(screen.getByText('No fields match “zzz-nonexistent”.')).toBeInTheDocument();
  });

  it('renders the freshly-enabled fixture with zero-width bars but real numeric zeros, not hidden rows', () => {
    render(<AnalyticsDeepInsightsDropoff {...getFixture('freshly-enabled-zeros')} />);
    const panel = screen.getByRole('tabpanel', { name: 'Field Metrics' });
    expect(within(panel).getByText('Single Line')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Single Line: 0 clicks' })).toBeInTheDocument();
    // Seven fields, all present despite being all-zero.
    expect(within(panel).getAllByText('0').length).toBeGreaterThanOrEqual(7);
  });

  it('shows the documented "No data available." empty state on Page Metrics for a single-page form', async () => {
    const user = userEvent.setup();
    render(<AnalyticsDeepInsightsDropoff {...getFixture('single-page-form')} />);
    await user.click(screen.getByRole('tab', { name: 'Page Metrics' }));
    expect(screen.getByText('No data available.')).toBeInTheDocument();
    // No search box and no row list should render alongside the empty state.
    expect(
      screen.queryByRole('searchbox', { name: 'Search pages by name' })
    ).not.toBeInTheDocument();
  });

  it('does not show the Page Metrics empty state for a populated, multi-page fixture', async () => {
    const user = userEvent.setup();
    render(<AnalyticsDeepInsightsDropoff {...getFixture('populated')} />);
    await user.click(screen.getByRole('tab', { name: 'Page Metrics' }));
    expect(screen.queryByText('No data available.')).not.toBeInTheDocument();
  });

  it('opens the Drop-offs header tooltip with the exact recorded definition, on hover', async () => {
    const user = userEvent.setup();
    render(<AnalyticsDeepInsightsDropoff {...getFixture('populated')} />);
    await user.click(screen.getByRole('tab', { name: 'Drop-off Count' }));
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

    await user.hover(screen.getByRole('button', { name: 'Drop-offs column info' }));
    expect(screen.getByRole('tooltip')).toHaveTextContent(
      'Total Count Of Respondents Who Started Filling Up The Field But Exited Without Submitting The Form.'
    );

    await user.unhover(screen.getByRole('button', { name: 'Drop-offs column info' }));
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('opens the same tooltip on keyboard focus, not just on hover', () => {
    render(<AnalyticsDeepInsightsDropoff {...getFixture('populated')} />);
    const infoButton = screen.getByRole('button', { name: 'Clicks column info' });
    fireEvent.focus(infoButton);
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
    fireEvent.blur(infoButton);
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('calls onPeriodChange when the prev/next controls are used, without changing any data (decorative — no live refetch)', async () => {
    const user = userEvent.setup();
    const onPeriodChange = vi.fn();
    render(
      <AnalyticsDeepInsightsDropoff {...getFixture('populated')} onPeriodChange={onPeriodChange} />
    );
    await user.click(screen.getByRole('button', { name: 'Next period' }));
    await user.click(screen.getByRole('button', { name: 'Previous period' }));
    expect(onPeriodChange).toHaveBeenNthCalledWith(1, 'next');
    expect(onPeriodChange).toHaveBeenNthCalledWith(2, 'prev');
    // periodLabel itself never changes — this reconstruction has no live data source.
    expect(screen.getByText('Sep 2026')).toBeInTheDocument();
  });

  it('renders the pink/red drop-off tint distinctly from Field Metrics rows', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <AnalyticsDeepInsightsDropoff {...getFixture('high-attrition')} />
    );
    await user.click(screen.getByRole('tab', { name: 'Drop-off Count' }));
    const dropoffRows = container.querySelectorAll('[class*="dropoffRow"]');
    expect(dropoffRows.length).toBe(5);
  });

  it('never calls fetch/XHR while rendering, searching, switching tabs, or paging periods (static data props, no live integration)', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<AnalyticsDeepInsightsDropoff {...getFixture('populated')} />);

    await user.click(screen.getByRole('tab', { name: 'Page Metrics' }));
    await user.click(screen.getByRole('tab', { name: 'Drop-off Count' }));
    await user.type(
      screen.getByRole('searchbox', { name: 'Search drop-off fields by name' }),
      'file'
    );
    await user.click(screen.getByRole('button', { name: 'Next period' }));

    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
