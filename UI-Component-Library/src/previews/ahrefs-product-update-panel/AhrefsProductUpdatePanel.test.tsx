import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsProductUpdatePanel } from './AhrefsProductUpdatePanel';
describe('AhrefsProductUpdatePanel', () => {
  it('dismisses and reopens locally', () => {
    render(<AhrefsProductUpdatePanel />);
    fireEvent.click(screen.getByRole('button', { name: 'Dismiss product update' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Open product update' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});
