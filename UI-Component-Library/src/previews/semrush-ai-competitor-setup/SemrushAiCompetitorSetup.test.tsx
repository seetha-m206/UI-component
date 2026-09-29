import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { SemrushAiCompetitorSetup } from './SemrushAiCompetitorSetup';
describe('SemrushAiCompetitorSetup', () => {
  it('analyzes locally without fetch', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    render(<SemrushAiCompetitorSetup />);
    await userEvent.type(screen.getByLabelText('Competitor 1'), 'rival.test');
    await userEvent.click(screen.getByRole('button', { name: 'Analyze' }));
    expect(screen.getByRole('status')).toHaveTextContent('Comparison ready');
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
