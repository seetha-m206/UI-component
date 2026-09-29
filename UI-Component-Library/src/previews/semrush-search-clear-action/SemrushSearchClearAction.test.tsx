import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushSearchClearAction } from './SemrushSearchClearAction';
describe('SemrushSearchClearAction', () => {
  it('applies and clears a query', async () => { render(<SemrushSearchClearAction />); await userEvent.type(screen.getByRole('textbox', { name: 'Search' }), 'none'); await userEvent.click(screen.getByRole('button', { name: 'Apply search' })); expect(screen.getByRole('status')).toHaveTextContent(/No results/i); await userEvent.click(screen.getByRole('button', { name: 'Clear filters' })); expect(screen.getByRole('textbox')).toHaveValue(''); });
});
