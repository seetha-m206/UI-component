import { render, screen } from '@testing-library/react'; import { describe, expect, it } from 'vitest'; import { SemrushStatusBadge } from './SemrushStatusBadge';
describe('SemrushStatusBadge', () => { it('exposes a textual status', () => { render(<SemrushStatusBadge tone="critical" />); expect(screen.getByRole('status')).toHaveTextContent('Critical'); }); });
