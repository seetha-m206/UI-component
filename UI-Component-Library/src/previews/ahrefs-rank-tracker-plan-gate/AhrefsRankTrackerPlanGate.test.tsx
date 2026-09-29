import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsRankTrackerPlanGate } from './AhrefsRankTrackerPlanGate';
describe('AhrefsRankTrackerPlanGate', () => {
  it('renders the observed Ahrefs state', () => {
    render(<AhrefsRankTrackerPlanGate />);
    expect(
      screen.getByText('Upgrade to unlock Rank Tracker', { exact: false })
    ).toBeInTheDocument();
  });
});
