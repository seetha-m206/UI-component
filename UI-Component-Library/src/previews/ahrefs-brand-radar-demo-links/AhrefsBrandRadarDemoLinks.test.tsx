import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsBrandRadarDemoLinks } from './AhrefsBrandRadarDemoLinks';
describe('AhrefsBrandRadarDemoLinks', () => {
  it('guards a demo action', () => {
    render(<AhrefsBrandRadarDemoLinks />);
    fireEvent.click(screen.getByRole('button', { name: /PlayStation/ }));
    expect(screen.getByRole('status')).toHaveTextContent(
      'PlayStation demo needs live verification'
    );
  });
});
