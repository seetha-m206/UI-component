import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushPaginationNavigator } from './SemrushPaginationNavigator';

describe('SemrushPaginationNavigator', () => {
  it('moves between locally reconstructed pages', async () => {
    render(<SemrushPaginationNavigator totalPages={3} />);
    await userEvent.click(screen.getByRole('button', { name: 'Next page' }));
    expect(screen.getByRole('status')).toHaveTextContent('Page 2 of 3');
    expect(screen.getByRole('button', { name: '2' })).toHaveAttribute('aria-current', 'page');
  });
});
