import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushDomainAnalysisQueryBar } from './SemrushDomainAnalysisQueryBar';
describe('SemrushDomainAnalysisQueryBar', () => { it('clears the query and disables Analyze', async () => { render(<SemrushDomainAnalysisQueryBar />); await userEvent.click(screen.getByRole('button', { name: 'Clear domain' })); expect(screen.getByRole('button', { name: 'Analyze' })).toBeDisabled(); }); });
