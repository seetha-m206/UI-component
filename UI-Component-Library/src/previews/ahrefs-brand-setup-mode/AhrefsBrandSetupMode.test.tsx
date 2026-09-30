import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsBrandSetupMode } from './AhrefsBrandSetupMode';
describe('AhrefsBrandSetupMode', () => {
  it('switches modes locally and guards analysis', () => {
    render(<AhrefsBrandSetupMode />);
    fireEvent.click(screen.getByRole('button', { name: 'Add brand and competitors manually' }));
    expect(screen.getByPlaceholderText('Competitor names')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Analyze/ }));
    expect(screen.getByRole('status')).toHaveTextContent('needs live verification');
  });
});
