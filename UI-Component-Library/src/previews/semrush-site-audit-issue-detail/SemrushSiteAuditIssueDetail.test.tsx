import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushSiteAuditIssueDetail } from './SemrushSiteAuditIssueDetail';

describe('SemrushSiteAuditIssueDetail', () => {
  it('expands remediation guidance and preserves the issue context', async () => {
    render(<SemrushSiteAuditIssueDetail />);
    await userEvent.click(screen.getByRole('button', { name: /How to fix/ }));
    const panel = screen.getByLabelText('How to fix this issue');
    expect(panel).toHaveTextContent(/Meta tags, Indexability, Content/i);
    expect(panel).toHaveTextContent(/concise, relevant h1/i);
  });

  it('moves through loading to the hidden empty state', async () => {
    render(<SemrushSiteAuditIssueDetail />);
    await userEvent.click(screen.getByRole('tab', { name: /Hidden/ }));
    expect(screen.getByText('Loading…')).toBeInTheDocument();
    await waitFor(() => expect(screen.getByText('No hidden issues')).toBeInTheDocument());
  });

  it('applies and clears a synthetic search without live navigation', async () => {
    render(<SemrushSiteAuditIssueDetail />);
    const search = screen.getByPlaceholderText('Search');
    await userEvent.type(search, 'no-match-example.invalid');
    await userEvent.click(screen.getByRole('button', { name: 'Search' }));
    expect(screen.getByText('Nothing found')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Clear filters' }));
    expect(screen.getByText('Northstar — Search visibility workspace')).toBeInTheDocument();
  });

  it('adds and clears an advanced filter condition', async () => {
    render(<SemrushSiteAuditIssueDetail initialState="advanced-filters" />);
    const dialog = screen.getByRole('dialog', { name: 'Advanced filters' });
    await userEvent.click(within(dialog).getByRole('button', { name: 'Add condition' }));
    expect(within(dialog).getAllByRole('combobox')).toHaveLength(4);
    await userEvent.click(within(dialog).getByRole('button', { name: 'Clear all' }));
    expect(screen.queryByRole('dialog', { name: 'Advanced filters' })).not.toBeInTheDocument();
  });

  it('shows and clears the row-selection bulk bar', async () => {
    render(<SemrushSiteAuditIssueDetail />);
    await userEvent.click(screen.getByRole('checkbox', { name: 'Select Northstar homepage' }));
    const bar = screen.getByRole('region', { name: 'Selected issue rows' });
    expect(bar).toHaveTextContent(/1 row selected/i);
    await userEvent.click(within(bar).getByRole('button', { name: 'Deselect all' }));
    expect(screen.queryByRole('region', { name: 'Selected issue rows' })).not.toBeInTheDocument();
  });

  it('guards untested header actions locally', async () => {
    render(<SemrushSiteAuditIssueDetail />);
    await userEvent.click(screen.getByRole('button', { name: /Rerun campaign/ }));
    expect(screen.getByRole('status')).toHaveTextContent(/was not run/i);
  });
});
