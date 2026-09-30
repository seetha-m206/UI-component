import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsSmmChannelList } from './AhrefsSmmChannelList';
describe('AhrefsSmmChannelList', () => {
  it('selects a local channel without connecting it', () => {
    render(<AhrefsSmmChannelList />);
    fireEvent.click(screen.getByRole('button', { name: 'YouTube' }));
    expect(screen.getByText('Selected channel: YouTube')).toBeInTheDocument();
  });
});
