import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushReportControlCluster } from './SemrushReportControlCluster';
describe('SemrushReportControlCluster', () => { it('changes report context locally', async () => { render(<SemrushReportControlCluster />); await userEvent.click(screen.getByRole('radio', { name: 'UK' })); expect(screen.getByRole('radio', { name: 'UK' })).toHaveAttribute('aria-checked', 'true'); await userEvent.selectOptions(screen.getByRole('combobox', { name: 'Device' }), 'Mobile'); expect(screen.getByRole('combobox', { name: 'Device' })).toHaveValue('Mobile'); }); });
