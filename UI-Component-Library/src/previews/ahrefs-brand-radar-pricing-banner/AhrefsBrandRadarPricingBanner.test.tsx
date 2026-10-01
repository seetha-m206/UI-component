import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsBrandRadarPricingBanner } from './AhrefsBrandRadarPricingBanner';
describe('AhrefsBrandRadarPricingBanner', () => {
  it('guards pricing navigation', () => {
    render(<AhrefsBrandRadarPricingBanner />);
    fireEvent.click(screen.getByRole('button', { name: 'See pricing' }));
    expect(screen.getByRole('status')).toHaveTextContent(
      'Pricing navigation needs live verification'
    );
  });
});
