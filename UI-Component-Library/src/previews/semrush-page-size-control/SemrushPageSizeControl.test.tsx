import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushPageSizeControl } from './SemrushPageSizeControl';
describe('SemrushPageSizeControl', () => { it('selects a page size', async () => { render(<SemrushPageSizeControl initiallyOpen />); await userEvent.click(screen.getByRole('option', { name: '50' })); expect(screen.getByRole('button', { name: /50/ })).toBeInTheDocument(); }); });
