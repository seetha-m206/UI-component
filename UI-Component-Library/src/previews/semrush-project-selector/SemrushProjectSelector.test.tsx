import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushProjectSelector } from './SemrushProjectSelector';
describe('SemrushProjectSelector', () => { it('switches between synthetic projects locally', async () => { render(<SemrushProjectSelector initialOpen />); await userEvent.click(screen.getByRole('option', { name: /Harbor Research/ })); expect(screen.getByRole('status')).toHaveTextContent('Harbor Research'); expect(screen.queryByRole('listbox')).not.toBeInTheDocument(); }); });
