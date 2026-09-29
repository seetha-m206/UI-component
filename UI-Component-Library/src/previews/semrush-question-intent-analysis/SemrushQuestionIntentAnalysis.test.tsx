import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushQuestionIntentAnalysis } from './SemrushQuestionIntentAnalysis';
describe('questions', () => {
  it('updates the active topic and intent', async () => {
    render(<SemrushQuestionIntentAnalysis />);
    await userEvent.click(screen.getByRole('button', { name: 'Security & compliance' }));
    expect(screen.getByRole('heading', { name: 'Security & compliance' })).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: /Comparison/ }));
    expect(screen.getByRole('status')).toHaveTextContent('Comparison is the active');
  });
});
