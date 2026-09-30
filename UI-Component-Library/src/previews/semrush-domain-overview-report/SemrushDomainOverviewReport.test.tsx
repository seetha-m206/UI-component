import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushDomainOverviewReport } from './SemrushDomainOverviewReport';
describe('SemrushDomainOverviewReport', () => { it('opens the observed gated Growth report state', async () => { render(<SemrushDomainOverviewReport />); await userEvent.click(screen.getByRole('tab', { name: 'Growth report' })); expect(screen.getByRole('heading', { name: 'Get more with Guru plan' })).toBeInTheDocument(); }); });
