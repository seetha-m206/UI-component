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

  it('shows the observed range and country empty states', async () => {
    const user = userEvent.setup();
    render(<SemrushAiVisibilityDashboard />);
    await user.click(screen.getByRole('tab', { name: 'AI Visibility' }));
    await user.click(screen.getByRole('button', { name: '1M' }));
    expect(screen.getByText('We have no data to show')).toBeInTheDocument();
    await user.selectOptions(screen.getByRole('combobox', { name: 'Region' }), 'United States');
    expect(screen.getByText('Your brand is not present on AI platforms yet')).toBeInTheDocument();
  });

  it('opens the how-it-works drawer and expands an explanation', async () => {
    const user = userEvent.setup();
    render(<SemrushAiVisibilityDashboard />);
    await user.click(screen.getByRole('button', { name: 'How it works' }));
    expect(screen.getByRole('dialog', { name: 'How it works' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'How is the data calculated?' }));
    expect(screen.getByText(/combines topic coverage/i)).toBeInTheDocument();
  });

  it('exposes recommendations and all captured topic/source views', async () => {
    render(<SemrushAiVisibilityDashboard />);
    expect(screen.getByText("What's Next?")).toBeInTheDocument();
    await userEvent.click(screen.getByRole('tab', { name: 'Cited Sources' }));
    expect(screen.getByRole('tab', { name: 'Cited Sources' })).toHaveAttribute(
      'aria-selected',
      'true'
    );
    expect(screen.getByText('workflow-automation.example')).toBeInTheDocument();
  });

  it('switches to prompts and opens the read-only response modal', async () => {
    const user = userEvent.setup();
    render(<SemrushAiVisibilityDashboard />);
    await user.click(screen.getByRole('radio', { name: 'Prompts 2' }));
    await user.click(screen.getAllByRole('button', { name: 'View full response' })[0]);
    expect(screen.getByRole('dialog', { name: 'Prompt response' })).toBeInTheDocument();
    expect(screen.getByText('example.test/guide')).toBeInTheDocument();
  });

  it('switches the LLM distribution metric', async () => {
    const user = userEvent.setup();
    render(<SemrushAiVisibilityDashboard />);
    await user.click(screen.getByRole('radio', { name: 'Cited Pages' }));
    expect(screen.getByRole('radio', { name: 'Cited Pages' })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByText('100%')).toBeInTheDocument();
  });
});
