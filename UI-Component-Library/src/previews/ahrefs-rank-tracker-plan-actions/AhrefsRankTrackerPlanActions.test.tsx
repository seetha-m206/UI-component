import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsRankTrackerPlanActions } from './AhrefsRankTrackerPlanActions';
describe('AhrefsRankTrackerPlanActions', () => {
  it('guards the observed upgrade action', () => {
    render(<AhrefsRankTrackerPlanActions />);
    fireEvent.click(screen.getByRole('button', { name: 'Upgrade' }));
    expect(screen.getByRole('status')).toHaveTextContent('Plan upgrade needs live verification');
  });
});
