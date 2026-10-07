import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { FreshsalesPreview } from './FreshsalesPreview';

describe('FreshsalesPreview', () => {
  it('switches between deal views without opening a provider record', async () => {
    const user = userEvent.setup();
    render(<FreshsalesPreview variant="deals-multi-view" initialState="pipeline" />);
    await user.click(screen.getByRole('button', { name: 'Table' }));
    expect(screen.getByRole('columnheader', { name: 'Deal name' })).toBeInTheDocument();
  });

  it('renders fictional contact data and guards communication actions', async () => {
    const user = userEvent.setup();
    render(<FreshsalesPreview variant="contact-record" />);
    await user.click(screen.getByRole('button', { name: 'Details' }));
    expect(screen.getByText('avery@example.test')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Email' }));
    expect(screen.getByRole('status')).toHaveTextContent('Email was not started');
  });

  it('switches admin sections while keeping actions local', async () => {
    const user = userEvent.setup();
    render(<FreshsalesPreview variant="admin-settings-catalogue" />);
    await user.click(screen.getByRole('button', { name: 'Teams' }));
    await user.click(screen.getByRole('button', { name: /^Roles/ }));
    expect(screen.getByRole('status')).toHaveTextContent('Roles was not opened or changed');
  });

  it('does not start mailbox authentication', async () => {
    const user = userEvent.setup();
    render(<FreshsalesPreview variant="conversations-onboarding" />);
    await user.click(screen.getByRole('button', { name: 'Gmail' }));
    expect(screen.getByRole('status')).toHaveTextContent('No mailbox connection or OAuth flow');
  });

  it('keeps deal import at a fictional step-one boundary', async () => {
    const user = userEvent.setup();
    render(<FreshsalesPreview variant="deal-import-setup" initialState="upload" />);
    await user.click(screen.getByRole('button', { name: 'Required fields' }));
    expect(screen.getByText('Deal value')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /Drop or upload/ }));
    expect(screen.getByRole('status')).toHaveTextContent('No file picker or upload');
  });

  it('switches between role permission groups without changing access', async () => {
    const user = userEvent.setup();
    render(<FreshsalesPreview variant="role-permission-matrix" />);
    await user.click(screen.getByRole('button', { name: 'Freddy' }));
    expect(screen.getByText('Access Freddy AI Agent')).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: 'Access Freddy AI Agent View' })).toBeDisabled();
  });

  it('renders both Freddy feature groups without submitting prompts', async () => {
    const user = userEvent.setup();
    render(<FreshsalesPreview variant="freddy-ai-settings" initialState="copilot" />);
    expect(screen.getByText('Generate Email Body')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Freddy Self Service' }));
    expect(screen.getByText('Answer generation')).toBeInTheDocument();
  });

  it('shows the observed upgrade boundary as disabled', () => {
    render(<FreshsalesPreview variant="plan-boundary-states" initialState="upgrade" />);
    expect(screen.getByRole('button', { name: 'Upgrade now' })).toBeDisabled();
  });

  it('renders an independent pipeline stage and guards its deal card', async () => {
    const user = userEvent.setup();
    render(<FreshsalesPreview variant="pipeline-stage" initialState="populated" />);
    await user.click(screen.getByRole('button', { name: /Northstar rollout/ }));
    expect(screen.getByRole('status')).toHaveTextContent('No deal was opened or moved');
  });

  it('expands and collapses the independent required-fields popover', async () => {
    const user = userEvent.setup();
    render(<FreshsalesPreview variant="required-fields-popover" initialState="collapsed" />);
    await user.click(screen.getByRole('button', { name: 'Required fields' }));
    expect(screen.getByText('Deal value')).toBeInTheDocument();
  });

  it('renders independent Freddy toggle availability states', () => {
    render(<FreshsalesPreview variant="feature-toggle" initialState="disabled" />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
    expect(screen.getByText('Conversational Actions')).toBeInTheDocument();
  });

  it('renders a named screen-level loading fixture', () => {
    render(<FreshsalesPreview variant="screen-loading-state" initialState="analytics" />);
    expect(screen.getByRole('status', { name: 'Loading analytics' })).toBeInTheDocument();
  });
});
