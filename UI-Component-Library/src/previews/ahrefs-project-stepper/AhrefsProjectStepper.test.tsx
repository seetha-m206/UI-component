import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { AhrefsProjectStepper } from './AhrefsProjectStepper';
describe('AhrefsProjectStepper', () => {
  it('changes the local current step', async () => {
    render(<AhrefsProjectStepper />);
    await userEvent.click(screen.getByRole('button', { name: /Ownership/ }));
    expect(screen.getByRole('button', { name: /Ownership/ })).toHaveAttribute(
      'aria-current',
      'step'
    );
  });
});
