import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushTargetTypeFilter } from './SemrushTargetTypeFilter';
describe('SemrushTargetTypeFilter', () => {
  it('switches between keyword and prompt contexts', async () => {
    render(<SemrushTargetTypeFilter />);
    await userEvent.click(screen.getByRole('radio', { name: 'AI Search' }));
    expect(screen.getByRole('status')).toHaveTextContent('Prompt columns active');
    await userEvent.click(screen.getByRole('radio', { name: 'SEO' }));
    expect(screen.getByRole('status')).toHaveTextContent('Keyword columns active');
  });
});
