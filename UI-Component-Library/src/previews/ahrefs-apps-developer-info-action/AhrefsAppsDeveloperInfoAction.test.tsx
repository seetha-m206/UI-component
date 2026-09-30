import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsAppsDeveloperInfoAction } from './AhrefsAppsDeveloperInfoAction';
describe('AhrefsAppsDeveloperInfoAction', () => {
  it('guards developer navigation', () => {
    render(<AhrefsAppsDeveloperInfoAction />);
    fireEvent.click(screen.getByRole('button', { name: 'Developer information' }));
    expect(screen.getByRole('status')).toHaveTextContent(
      'Developer information needs live verification'
    );
  });
});
