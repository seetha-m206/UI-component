import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsProjectSetupCancelAction } from './AhrefsProjectSetupCancelAction';
describe('AhrefsProjectSetupCancelAction', () => {
  it('guards cancellation without leaving the preview', () => {
    render(<AhrefsProjectSetupCancelAction />);
    fireEvent.click(screen.getByRole('button', { name: /Cancel/ }));
    expect(screen.getByRole('status')).toHaveTextContent(
      'Cancel project setup needs live verification'
    );
  });
});
