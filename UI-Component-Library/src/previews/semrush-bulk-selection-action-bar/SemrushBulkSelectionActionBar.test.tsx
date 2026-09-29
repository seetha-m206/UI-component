import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushBulkSelectionActionBar } from './SemrushBulkSelectionActionBar';
describe('SemrushBulkSelectionActionBar', () => { it('clears selection without running the bulk mutation', async () => { render(<SemrushBulkSelectionActionBar />); expect(screen.getByRole('button', { name: /Hide/ })).toBeDisabled(); await userEvent.click(screen.getByRole('button', { name: 'Deselect all' })); expect(screen.getByRole('status')).toHaveTextContent(/Selection cleared/i); }); });
