import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushEvidenceAnswersDrawer } from './SemrushEvidenceAnswersDrawer';
describe('drawer', () => {
  it('opens, pages and closes', async () => {
    render(<SemrushEvidenceAnswersDrawer />);
    await userEvent.click(screen.getByRole('button', { name: 'Show answers' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Next' }));
    expect(screen.getByText('2 of 2')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Close answers' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
