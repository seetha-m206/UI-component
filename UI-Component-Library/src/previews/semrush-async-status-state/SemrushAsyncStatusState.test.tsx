import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SemrushAsyncStatusState } from './SemrushAsyncStatusState';
describe('SemrushAsyncStatusState', () => { it('announces loading without confusing it with empty data', () => { render(<SemrushAsyncStatusState />); expect(screen.getByRole('status')).toHaveAttribute('aria-busy', 'true'); expect(screen.queryByText(/No results/i)).not.toBeInTheDocument(); }); it('labels the unobserved error fixture as synthetic', () => { render(<SemrushAsyncStatusState state="error" />); expect(screen.getByRole('alert')).toHaveTextContent(/Synthetic error fixture/i); }); });
