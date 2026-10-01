import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsSmmAnnouncementBanner } from './AhrefsSmmAnnouncementBanner';
describe('AhrefsSmmAnnouncementBanner', () => {
  it('dismisses and restores locally', () => {
    render(<AhrefsSmmAnnouncementBanner />);
    fireEvent.click(screen.getByRole('button', { name: 'Dismiss announcement' }));
    expect(screen.queryByText(/YouTube Shorts is here/)).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Show announcement' }));
    expect(screen.getByText(/YouTube Shorts is here/)).toBeInTheDocument();
  });
});
