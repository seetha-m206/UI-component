import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushActionButton } from './SemrushActionButton';
describe('SemrushActionButton', () => {
  it('moves through a local loading and success state', async () => { render(<SemrushActionButton />); await userEvent.click(screen.getByRole('button', { name: 'Run analysis' })); expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true'); await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent(/completed locally/i)); });
  it('guards a destructive action', async () => { render(<SemrushActionButton label="Delete" variant="danger" />); await userEvent.click(screen.getByRole('button', { name: 'Delete' })); expect(screen.getByRole('status')).toHaveTextContent(/needs verification/i); });
});
