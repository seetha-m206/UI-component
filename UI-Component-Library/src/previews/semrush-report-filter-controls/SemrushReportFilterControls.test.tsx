import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushReportFilterControls } from './SemrushReportFilterControls';
describe('SemrushReportFilterControls', () => {
  it('removes competitor tags and opens the tracked-brand limit modal', async () => {
    render(<SemrushReportFilterControls />);
    await userEvent.click(screen.getByRole('button', { name: 'Remove Orbit' }));
    expect(screen.queryByText('Orbit')).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: /Add brand profile/ }));
    expect(screen.getByRole('dialog', { name: 'Tracked brand limit' })).toBeInTheDocument();
    expect(screen.getByText(/reached the tracked brands limit/i)).toBeInTheDocument();
  });

  it('opens and cancels the target editor without applying changes', async () => {
    render(<SemrushReportFilterControls />);
    await userEvent.click(screen.getByRole('button', { name: /Target: Worldwide/ }));
    expect(screen.getByRole('dialog', { name: 'Edit brand profile' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Apply/ })).toBeDisabled();
    await userEvent.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(screen.queryByRole('dialog', { name: 'Edit brand profile' })).not.toBeInTheDocument();
  });

  it('switches synthetic platform and historical-date options', async () => {
    render(<SemrushReportFilterControls />);
    await userEvent.click(screen.getByRole('button', { name: /All AI Platforms/ }));
    await userEvent.click(screen.getByRole('option', { name: 'ChatGPT' }));
    expect(screen.getByRole('button', { name: /ChatGPT/ })).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: /Sep 22, 2026/ }));
    await userEvent.click(screen.getByRole('option', { name: 'Sep 15, 2026' }));
    expect(screen.getByRole('button', { name: /Sep 15, 2026/ })).toBeInTheDocument();
  });

  it('shows help text and the data-methodology dialog', async () => {
    render(<SemrushReportFilterControls />);
    await userEvent.click(screen.getByRole('button', { name: 'About last update date' }));
    expect(screen.getByRole('tooltip')).toHaveTextContent(/every 7 days/i);
    await userEvent.click(screen.getByRole('button', { name: 'How we gather data' }));
    expect(screen.getByRole('dialog', { name: 'Where data comes from' })).toBeInTheDocument();
  });
});
