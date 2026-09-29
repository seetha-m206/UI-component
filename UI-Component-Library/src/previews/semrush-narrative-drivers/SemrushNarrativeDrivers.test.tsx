import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushNarrativeDrivers } from './SemrushNarrativeDrivers';
describe('narrative', () => {
  it('filters to an empty state and changes metrics', async () => {
    render(<SemrushNarrativeDrivers />);
    await userEvent.click(screen.getByRole('button', { name: 'Mentions' }));
    await userEvent.type(screen.getByPlaceholderText('Filter questions'), 'unmatched');
    expect(screen.getByText(/No questions match/)).toBeInTheDocument();
  });
});
