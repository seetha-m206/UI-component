import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushAiVisibilityDashboard } from './SemrushAiVisibilityDashboard';
describe('SemrushAiVisibilityDashboard', () => {
  it('changes the trend metric', async () => {
    render(<SemrushAiVisibilityDashboard />);
    await userEvent.click(screen.getByRole('tab', { name: 'Monthly Audience' }));
    expect(screen.getByText('8.4K')).toBeInTheDocument();
  });
});
