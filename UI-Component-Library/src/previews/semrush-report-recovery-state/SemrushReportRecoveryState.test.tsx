import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushReportRecoveryState } from './SemrushReportRecoveryState';
describe('SemrushReportRecoveryState', () => { it('moves through the local retry fixture', async () => { render(<SemrushReportRecoveryState />); await userEvent.click(screen.getByRole('button', { name: /Try again/ })); expect(await screen.findByRole('heading', { name: 'Report restored locally' })).toBeInTheDocument(); }); });
