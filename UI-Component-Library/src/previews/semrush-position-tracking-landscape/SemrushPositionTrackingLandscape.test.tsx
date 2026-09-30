import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushPositionTrackingLandscape } from './SemrushPositionTrackingLandscape';
describe('SemrushPositionTrackingLandscape', () => {
  it('switches from Landscape to Overview without a provider action', async () => {
    render(<SemrushPositionTrackingLandscape />);
    await userEvent.click(screen.getByRole('tab', { name: 'Overview' }));
    expect(screen.getByRole('heading', { name: 'Rankings Overview' })).toBeInTheDocument();
  });
});
