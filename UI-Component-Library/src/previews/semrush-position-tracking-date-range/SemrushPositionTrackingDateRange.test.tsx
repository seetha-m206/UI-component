import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushPositionTrackingDateRange } from './SemrushPositionTrackingDateRange';
describe('SemrushPositionTrackingDateRange', () => {
  it('selects an observed date range locally', async () => {
    render(<SemrushPositionTrackingDateRange />);
    await userEvent.selectOptions(
      screen.getByRole('combobox', { name: 'Date range' }),
      'Last 30 days'
    );
    expect(screen.getByRole('status')).toHaveTextContent('Last 30 days selected');
  });
});
