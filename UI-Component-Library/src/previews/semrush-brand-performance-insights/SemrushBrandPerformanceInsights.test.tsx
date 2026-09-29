import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushBrandPerformanceInsights } from './SemrushBrandPerformanceInsights';
describe('SemrushBrandPerformanceInsights', () => {
  it('removes a competitor chip locally', async () => {
    render(<SemrushBrandPerformanceInsights />);
    await userEvent.click(screen.getByRole('button', { name: 'Remove Orbit' }));
    expect(screen.queryByRole('button', { name: 'Remove Orbit' })).not.toBeInTheDocument();
  });
});
