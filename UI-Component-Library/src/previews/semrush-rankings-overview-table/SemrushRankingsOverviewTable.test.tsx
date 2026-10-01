import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushRankingsOverviewTable } from './SemrushRankingsOverviewTable';
describe('SemrushRankingsOverviewTable', () => {
  it('filters synthetic ranking rows', async () => {
    render(<SemrushRankingsOverviewTable />);
    await userEvent.type(screen.getByRole('textbox', { name: 'Search keywords' }), 'dashboard');
    expect(screen.getByText('rank tracking dashboard')).toBeInTheDocument();
    expect(screen.queryByText('local seo platform')).not.toBeInTheDocument();
  });
});
