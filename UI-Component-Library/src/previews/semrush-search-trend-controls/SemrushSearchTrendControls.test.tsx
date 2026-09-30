import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushSearchTrendControls } from './SemrushSearchTrendControls';
describe('SemrushSearchTrendControls', () => { it('updates range and series visibility locally', async () => { render(<SemrushSearchTrendControls />); await userEvent.click(screen.getByRole('tab', { name: '1M' })); expect(screen.getByRole('tab', { name: '1M' })).toHaveAttribute('aria-selected', 'true'); await userEvent.click(screen.getByRole('checkbox', { name: 'Paid Traffic' })); expect(screen.getByRole('checkbox', { name: 'Paid Traffic' })).not.toBeChecked(); }); });
