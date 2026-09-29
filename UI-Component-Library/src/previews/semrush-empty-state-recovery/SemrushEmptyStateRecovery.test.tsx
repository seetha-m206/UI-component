import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushEmptyStateRecovery } from './SemrushEmptyStateRecovery';
describe('SemrushEmptyStateRecovery', () => { it('recovers locally from a search empty state', async () => { render(<SemrushEmptyStateRecovery />); expect(screen.getByText('Nothing found')).toBeInTheDocument(); await userEvent.click(screen.getByRole('button', { name: 'Show all projects' })); expect(screen.getByRole('status')).toHaveTextContent(/Results restored locally/i); }); });
