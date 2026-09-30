import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushPositionTrackingProjects } from './SemrushPositionTrackingProjects';
describe('SemrushPositionTrackingProjects', () => {
  it('filters projects and exposes a clear action', async () => {
    render(<SemrushPositionTrackingProjects />);
    const input = screen.getByRole('textbox', { name: 'Project name or domain' });
    await userEvent.type(input, 'maple');
    expect(screen.getAllByText('mapleleaf.example')).toHaveLength(2);
    expect(screen.queryByText('northstar.example')).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Clear project search' }));
    expect(screen.getAllByText('northstar.example')).toHaveLength(2);
  });
});
