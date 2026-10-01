import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsWorkspaceMenuTrigger } from './AhrefsWorkspaceMenuTrigger';
describe('AhrefsWorkspaceMenuTrigger', () => {
  it('guards the unobserved menu outcome', () => {
    render(<AhrefsWorkspaceMenuTrigger />);
    fireEvent.click(screen.getByRole('button', { name: /Atlas workspace/ }));
    expect(screen.getByRole('status')).toHaveTextContent('needs live verification');
  });
});
