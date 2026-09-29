import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushPerceptionAnalysis } from './SemrushPerceptionAnalysis';
describe('perception', () => {
  it('validates pagination and expands descriptions', async () => {
    render(<SemrushPerceptionAnalysis />);
    const input = screen.getByRole('textbox');
    await userEvent.clear(input);
    await userEvent.type(input, '30');
    expect(screen.getByRole('alert')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: /Comprehensive audit trails/ }));
    expect(screen.getByText('Descriptions by brand')).toBeInTheDocument();
  });
});
