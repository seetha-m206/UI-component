import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushAiVisibilityLanding } from './SemrushAiVisibilityLanding';

describe('SemrushAiVisibilityLanding', () => {
  it('edits the synthetic domain while guarding the CTA from network behavior', async () => {
    render(<SemrushAiVisibilityLanding />);
    const input = screen.getByRole('textbox', { name: 'Primary website domain' });
    await userEvent.type(input, 'atlas.example');
    expect(input).toHaveValue('atlas.example');
    await userEvent.click(screen.getByRole('button', { name: 'Get started' }));
    expect(screen.getByRole('status')).toHaveTextContent(/analysis was not started/i);
  });

  it('allows multiple FAQ items to remain expanded independently', async () => {
    render(<SemrushAiVisibilityLanding />);
    const first = screen.getByRole('button', { name: /What is the AI SEO Toolkit/ });
    const second = screen.getByRole('button', { name: /How does it work/ });
    await userEvent.click(first);
    await userEvent.click(second);
    expect(first).toHaveAttribute('aria-expanded', 'true');
    expect(second).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText(/collects relevant AI-platform queries/i)).toBeInTheDocument();
  });

  it('preserves a documented multi-open fixture', () => {
    render(<SemrushAiVisibilityLanding initialState="faq-multiple" />);
    expect(screen.getByRole('button', { name: /What is the AI SEO Toolkit/ })).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('button', { name: /How does it work/ })).toHaveAttribute('aria-expanded', 'true');
  });

  it('disables all interactive controls through the design-system override', () => {
    render(<SemrushAiVisibilityLanding disabled />);
    expect(screen.getAllByRole('button').every((button) => button.hasAttribute('disabled'))).toBe(true);
    expect(screen.getAllByRole('textbox').every((input) => input.hasAttribute('disabled'))).toBe(true);
  });
});
