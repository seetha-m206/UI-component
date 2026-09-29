import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { AhrefsTargetInputGroup } from './AhrefsTargetInputGroup';
describe('AhrefsTargetInputGroup', () => {
  it('accepts a fictional target and guards submission', async () => {
    render(<AhrefsTargetInputGroup />);
    await userEvent.type(screen.getByLabelText('Domain or path'), 'atlas.example');
    await userEvent.click(screen.getByRole('button', { name: 'Continue with target' }));
    expect(screen.getByRole('status')).toHaveTextContent(/No live target/i);
  });
});
