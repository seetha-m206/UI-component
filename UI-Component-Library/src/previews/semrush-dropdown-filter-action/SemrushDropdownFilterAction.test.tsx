import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushDropdownFilterAction } from './SemrushDropdownFilterAction';
describe('SemrushDropdownFilterAction', () => {
  it('opens an ownership list', async () => { render(<SemrushDropdownFilterAction />); await userEvent.click(screen.getByRole('combobox', { name: 'Ownership' })); expect(screen.getByRole('listbox', { name: 'Ownership options' })).toHaveTextContent(/Shared with me/i); });
  it('exposes advanced filter fields', () => { render(<SemrushDropdownFilterAction variant="advanced" initiallyOpen />); expect(screen.getByRole('dialog', { name: 'Advanced filters' })).toBeInTheDocument(); expect(screen.getByRole('combobox', { name: 'Filter operator' })).toHaveValue('Include'); });
});
