import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsContentAllowanceActions } from './AhrefsContentAllowanceActions';
describe('AhrefsContentAllowanceActions', () => {
  it('preserves allowance copy and guards AI writing', () => {
    render(<AhrefsContentAllowanceActions />);
    expect(screen.getByText('1 / 1 document available this month')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Ask Letaido/ }));
    expect(screen.getByRole('status')).toHaveTextContent(
      'Letaido AI writing needs live verification'
    );
  });
});
