import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsTutorialVideoCard } from './AhrefsTutorialVideoCard';
describe('AhrefsTutorialVideoCard', () => {
  it('guards playback', () => {
    render(<AhrefsTutorialVideoCard />);
    fireEvent.click(screen.getByRole('button', { name: 'Play Projects tutorial' }));
    expect(screen.getByRole('status')).toHaveTextContent('needs live verification');
  });
});
