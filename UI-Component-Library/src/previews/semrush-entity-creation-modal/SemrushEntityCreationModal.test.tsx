import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushEntityCreationModal } from './SemrushEntityCreationModal';
describe('SemrushEntityCreationModal', () => {
  it('opens website suggestions and cancels safely', async () => { render(<SemrushEntityCreationModal />); await userEvent.click(screen.getByRole('combobox', { name: 'Website' })); expect(screen.getByRole('listbox', { name: 'Website suggestions' })).toBeInTheDocument(); await userEvent.click(screen.getByRole('button', { name: 'Cancel' })); expect(screen.getByRole('status')).toHaveTextContent(/No data was created/i); });
  it('labels the synthetic validation fixture', () => { render(<SemrushEntityCreationModal initialState="validation-error" />); expect(screen.getByRole('alert')).toHaveTextContent(/Synthetic validation state/i); });
});
