import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushDomainOverviewEntry } from './SemrushDomainOverviewEntry';
describe('SemrushDomainOverviewEntry', () => { it('prefills the observed recent-query action locally', async () => { render(<SemrushDomainOverviewEntry />); await userEvent.click(screen.getByRole('button', { name: 'Analyze northstar.example' })); expect(screen.getByRole('textbox', { name: 'Enter domain, subdomain or URL' })).toHaveValue('northstar.example'); expect(screen.getByRole('button', { name: 'Search' })).toBeEnabled(); }); });
