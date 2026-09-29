import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushPromptResearchEntry } from './SemrushPromptResearchEntry';
describe('SemrushPromptResearchEntry', () => {
  it('keeps research in the local preview', async () => {
    render(<SemrushPromptResearchEntry />);
    await userEvent.type(screen.getByLabelText('Topic'), 'analytics');
    await userEvent.click(screen.getByRole('button', { name: 'Analyze' }));
    expect(screen.getByRole('status')).toHaveTextContent('No Semrush query');
  });
});
