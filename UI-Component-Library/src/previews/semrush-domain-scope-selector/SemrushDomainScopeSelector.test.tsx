import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushDomainScopeSelector } from './SemrushDomainScopeSelector';
describe('SemrushDomainScopeSelector', () => { it('opens and selects a domain scope locally', async () => { render(<SemrushDomainScopeSelector />); await userEvent.click(screen.getByRole('button', { name: /Root Domain/ })); await userEvent.click(screen.getByRole('option', { name: /Subfolder/ })); expect(screen.getByRole('button', { name: /Subfolder/ })).toHaveAttribute('aria-expanded', 'false'); }); });
