import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsSmmConnectAction } from './AhrefsSmmConnectAction';
describe('AhrefsSmmConnectAction', () => {
  it('guards channel connection', () => {
    render(<AhrefsSmmConnectAction />);
    fireEvent.click(screen.getByRole('button', { name: /Connect channel/ }));
    expect(screen.getByRole('status')).toHaveTextContent(
      'Channel connection needs live verification'
    );
  });
});
