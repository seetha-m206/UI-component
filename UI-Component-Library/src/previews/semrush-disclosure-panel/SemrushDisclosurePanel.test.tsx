import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushDisclosurePanel } from './SemrushDisclosurePanel';
describe('SemrushDisclosurePanel', () => { it('supports independent multi-open disclosures', async () => { render(<SemrushDisclosurePanel />); const coverage = screen.getByRole('button', { name: /Which AI platforms/ }); const updates = screen.getByRole('button', { name: /How often/ }); await userEvent.click(coverage); await userEvent.click(updates); expect(coverage).toHaveAttribute('aria-expanded', 'true'); expect(updates).toHaveAttribute('aria-expanded', 'true'); expect(screen.getByRole('region', { name: 'Which AI platforms are covered?' })).toBeInTheDocument(); expect(screen.getByRole('region', { name: 'How often is the data updated?' })).toBeInTheDocument(); }); });
