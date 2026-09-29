import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushReportTabs } from './SemrushReportTabs';
describe('SemrushReportTabs', () => { it('changes selection without navigating', async () => { render(<SemrushReportTabs kind="site-audit" initialTab="Issues" />); await userEvent.click(screen.getByRole('tab', { name: 'Progress' })); expect(screen.getByRole('tab', { name: 'Progress' })).toHaveAttribute('aria-selected', 'true'); expect(screen.getByRole('status')).toHaveTextContent(/needs verification/i); }); });
