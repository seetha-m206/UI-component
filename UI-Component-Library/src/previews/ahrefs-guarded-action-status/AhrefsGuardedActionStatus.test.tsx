import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsGuardedActionStatus } from './AhrefsGuardedActionStatus';
describe('AhrefsGuardedActionStatus', () => {
  it('announces the unverified provider boundary', () => {
    render(<AhrefsGuardedActionStatus />);
    fireEvent.click(screen.getByRole('button', { name: 'Try guarded action' }));
    expect(screen.getByRole('status')).toHaveTextContent('Provider action needs live verification');
  });
});
