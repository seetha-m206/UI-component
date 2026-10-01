import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsTutorialFilterStrip } from './AhrefsTutorialFilterStrip';
describe('AhrefsTutorialFilterStrip', () => {
  it('renders the observed illustrative filters as non-actions', () => {
    render(<AhrefsTutorialFilterStrip />);
    expect(screen.getByText('Monthly volume⌄')).toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
