import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsDismissibleNoticeBanner } from './AhrefsDismissibleNoticeBanner';
describe('AhrefsDismissibleNoticeBanner', () => {
  it('dismisses and restores the notice locally', () => {
    render(<AhrefsDismissibleNoticeBanner />);
    fireEvent.click(screen.getByRole('button', { name: 'Dismiss SERP data notice' }));
    expect(screen.queryByLabelText('SERP data notice')).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Show SERP data notice' }));
    expect(screen.getByLabelText('SERP data notice')).toBeInTheDocument();
  });
});
