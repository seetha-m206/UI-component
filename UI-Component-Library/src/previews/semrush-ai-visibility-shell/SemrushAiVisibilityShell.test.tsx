import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { SemrushAiVisibilityShell } from './SemrushAiVisibilityShell';
describe('SemrushAiVisibilityShell', () => {
  it('switches AI workspaces locally', async () => {
    const onChange = vi.fn();
    render(<SemrushAiVisibilityShell onSectionChange={onChange} />);
    await userEvent.click(screen.getByRole('button', { name: 'Competitor Research' }));
    expect(onChange).toHaveBeenCalledWith('competitors');
    expect(
      screen.getByRole('heading', { name: 'Competitor Research', level: 2 })
    ).toBeInTheDocument();
  });
});
