import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsAccessGateHero } from './AhrefsAccessGateHero';
describe('AhrefsAccessGateHero', () => {
  it('guards the start action', () => {
    render(<AhrefsAccessGateHero />);
    fireEvent.click(screen.getByRole('button', { name: 'Start analysis' }));
    expect(screen.getByRole('status')).toHaveTextContent('Start analysis needs live verification');
  });
});
