import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { N8nPreview } from './N8nPreview';
import { n8nEntries } from './registry';

describe('N8nPreview', () => {
  it('excludes observed account and instance identity', () => {
    const { container } = render(<N8nPreview variant="cloud-admin-dashboard" />);
    expect(container).not.toHaveTextContent('@centilio.com');
    expect(container).toHaveTextContent('Northstar Automation');
  });

  it('keeps provider-write actions disabled', () => {
    render(<N8nPreview variant="instance-mcp-settings" />);
    expect(screen.getByRole('button', { name: 'Enable MCP access' })).toBeDisabled();
  });

  it('renders a local-only template interaction', async () => {
    const user = userEvent.setup();
    render(<N8nPreview variant="template-catalogue" />);
    await user.click(screen.getByRole('button', { name: /Back up workflows/i }));
    expect(screen.getByRole('status')).toHaveTextContent('fictional fixture');
  });

  it('keeps unobserved builder entry disabled', () => {
    render(<N8nPreview variant="workflow-builder-boundary" />);
    expect(screen.getByRole('button', { name: 'Provider fixture required' })).toBeDisabled();
  });

  it('registers every screen and individual component preview', () => {
    expect(n8nEntries).toHaveLength(58);
    expect(new Set(n8nEntries.map(([id]) => id)).size).toBe(58);
  });

  it('renders an isolated component with provider actions disabled', () => {
    render(<N8nPreview variant="assistant-permission-selector" />);
    expect(screen.getByRole('button', { name: /Workflows/ })).toBeDisabled();
    expect(screen.getByText('INDIVIDUAL COMPONENT')).toBeInTheDocument();
  });
});
