import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { PipedrivePreview } from './PipedrivePreview';

describe('PipedrivePreview', () => {
  it('expands and collapses the fictional Setup Guide task group', async () => {
    const user = userEvent.setup();
    render(<PipedrivePreview variant="setup-task-group" />);
    expect(screen.getByText('Build your pipeline stages')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /Set up your sales process/ }));
    expect(screen.queryByText('Build your pipeline stages')).not.toBeInTheDocument();
  });

  it('guards More-menu destinations instead of navigating', async () => {
    const user = userEvent.setup();
    render(<PipedrivePreview variant="more-menu" initialState="open" />);
    await user.click(screen.getByRole('button', { name: /Import data/ }));
    expect(screen.getByRole('status')).toHaveTextContent('no provider navigation');
  });

  it('guards Quick Add creation paths', async () => {
    const user = userEvent.setup();
    render(<PipedrivePreview variant="quick-add-menu" initialState="open" />);
    await user.click(screen.getByRole('button', { name: /Deal/ }));
    expect(screen.getByRole('status')).toHaveTextContent('Deal was not opened');
  });

  it('uses fictional notification values and supports local close and reopen', async () => {
    const user = userEvent.setup();
    render(<PipedrivePreview variant="notifications-drawer" initialState="open" />);
    expect(screen.getByText('Fictional metrics only')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Close notifications' }));
    await user.click(screen.getByRole('button', { name: 'Open Notifications' }));
    expect(screen.getByRole('complementary', { name: 'Notifications' })).toBeInTheDocument();
  });

  it('keeps help actions inside explicit local boundaries', async () => {
    const user = userEvent.setup();
    render(<PipedrivePreview variant="quick-help-drawer" initialState="open" />);
    await user.click(screen.getByRole('button', { name: 'Chat with Pipedrive' }));
    expect(screen.getByRole('status')).toHaveTextContent('was not opened');
  });

  it('accepts fictional assistant text but never sends a prompt', async () => {
    const user = userEvent.setup();
    render(<PipedrivePreview variant="sales-assistant-panel" initialState="open" />);
    const send = screen.getByRole('button', { name: 'Send' });
    expect(send).toBeDisabled();
    await user.type(screen.getByPlaceholderText('Ask a question'), 'Summarize a fictional deal');
    expect(send).toBeEnabled();
    await user.click(send);
    expect(screen.getByRole('status')).toHaveTextContent('No AI prompt was sent');
  });

  it('renders a fictional pipeline board without provider sample data', () => {
    render(<PipedrivePreview variant="pipeline-onboarding-tooltip" />);
    expect(screen.getByRole('note')).toHaveTextContent('Your pipelines are ready');
    expect(screen.getByText('Maple Cloud Readiness')).toBeInTheDocument();
  });

  it('guards pipeline selector destinations', async () => {
    const user = userEvent.setup();
    render(<PipedrivePreview variant="pipeline-selector" initialState="open" />);
    await user.click(screen.getByRole('button', { name: 'New pipeline' }));
    expect(screen.getByRole('status')).toHaveTextContent('New pipeline was not opened');
  });

  it('exposes observed sort options without changing order', async () => {
    const user = userEvent.setup();
    render(<PipedrivePreview variant="deals-sort-menu" initialState="open" />);
    expect(screen.getByRole('option', { name: /Next activity/ })).toHaveAttribute(
      'aria-selected',
      'true'
    );
    await user.click(screen.getByRole('option', { name: 'Deal value' }));
    expect(screen.getByRole('status')).toHaveTextContent('Sort order was not changed');
  });

  it('keeps deal-card navigation and stage creation local', async () => {
    const user = userEvent.setup();
    render(<PipedrivePreview variant="pipeline-stage" />);
    await user.click(screen.getByRole('button', { name: 'Add deal to Proposal Made' }));
    expect(screen.getByRole('status')).toHaveTextContent('No deal form was opened');
    await user.click(screen.getByRole('button', { name: 'Maple Cloud Readiness' }));
    expect(
      screen.getByText('Deal detail navigation was not executed in this pipeline fixture.')
    ).toBeInTheDocument();
  });

  it('keeps deal outcome and stage actions local', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<PipedrivePreview variant="deal-detail-header" />);
    await user.click(screen.getByRole('button', { name: 'Won' }));
    expect(screen.getByRole('status')).toHaveTextContent('Won was not applied');
    rerender(<PipedrivePreview variant="deal-stage-progress" />);
    await user.click(screen.getByRole('button', { name: /Negotiations/ }));
    expect(screen.getByRole('status')).toHaveTextContent('stage was not changed');
  });

  it('switches fictional deal detail sections without editing a record', async () => {
    const user = userEvent.setup();
    render(<PipedrivePreview variant="deal-summary-panel" />);
    await user.click(screen.getByRole('button', { name: 'Details' }));
    expect(screen.getByRole('heading', { name: 'Details' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Edit section' }));
    expect(screen.getByRole('status')).toHaveTextContent('No record field was edited');
  });

  it('renders only fictional contacts and guards communication links', async () => {
    const user = userEvent.setup();
    render(<PipedrivePreview variant="contacts-people-list" />);
    expect(screen.getByText('Avery Morgan')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'avery@example.test' }));
    expect(screen.getByRole('status')).toHaveTextContent('No contact record or communication app');
  });

  it('cancels or guards contact column customization', async () => {
    const user = userEvent.setup();
    render(<PipedrivePreview variant="contacts-column-customizer" />);
    expect(screen.getByRole('dialog', { name: 'Customize columns' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(screen.getByRole('status')).toHaveTextContent('not saved');
  });

  it('renders fictional organizations and guards record navigation', async () => {
    const user = userEvent.setup();
    render(<PipedrivePreview variant="organizations-list" />);
    await user.click(screen.getByRole('button', { name: 'Lakeshore Analytics' }));
    expect(screen.getByRole('status')).toHaveTextContent('No organization or contact record');
  });

  it('keeps contact timeline controls local', async () => {
    const user = userEvent.setup();
    render(<PipedrivePreview variant="contacts-timeline" />);
    expect(screen.getByLabelText('Three month contact timeline')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Send group email' }));
    expect(screen.getByRole('status')).toHaveTextContent('No group email composer');
  });

  it('keeps activity completion and actions inside the fixture', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<PipedrivePreview variant="activities-list" />);
    await user.click(screen.getByRole('checkbox', { name: /Complete Platform decision/ }));
    expect(screen.getByRole('status')).toHaveTextContent('not persisted');
    rerender(<PipedrivePreview variant="activities-disclosure-menu" initialState="open" />);
    await user.click(screen.getByRole('button', { name: 'Restore data' }));
    expect(screen.getByRole('status')).toHaveTextContent('was not opened or changed');
  });

  it('guards calendar sync and activity records', async () => {
    const user = userEvent.setup();
    render(<PipedrivePreview variant="activity-calendar" />);
    await user.click(screen.getByRole('button', { name: 'Open calendar sync' }));
    expect(screen.getByRole('status')).toHaveTextContent('not opened or enabled');
  });

  it('renders fictional deal list and forecast without opening records', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<PipedrivePreview variant="deals-list" />);
    await user.click(screen.getByRole('button', { name: 'Northstar Platform Renewal' }));
    expect(screen.getByRole('status')).toHaveTextContent('No deal or related record');
    rerender(<PipedrivePreview variant="deals-forecast" />);
    await user.click(screen.getByRole('button', { name: /Northstar Platform Renewal/ }));
    expect(screen.getByRole('status')).toHaveTextContent('No deal was opened or moved');
  });

  it('preserves the observed archived-deals empty state', async () => {
    const user = userEvent.setup();
    render(<PipedrivePreview variant="deals-archive-empty-state" />);
    expect(screen.getByRole('heading', { name: /No archived deals/ })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'View active deals' }));
    expect(screen.getByRole('status')).toHaveTextContent('no provider route');
  });

  it('guards Projects onboarding and board actions', async () => {
    const user = userEvent.setup();
    render(<PipedrivePreview variant="projects-board" />);
    expect(screen.getByRole('dialog', { name: 'Welcome to Projects' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Get started' }));
    expect(screen.getByRole('status')).toHaveTextContent('Project setup was not started');
  });

  it('keeps Nova access management local', async () => {
    const user = userEvent.setup();
    render(<PipedrivePreview variant="nova-landing" />);
    await user.click(screen.getByRole('button', { name: 'Manage Nova access' }));
    expect(screen.getByRole('status')).toHaveTextContent('Nova access was not managed');
    await user.click(screen.getByRole('button', { name: 'Meeting platforms' }));
    expect(screen.getByText(/Google Meet, Zoom and Microsoft Teams/)).toBeInTheDocument();
  });

  it('guards Projects templates, archive and task actions', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<PipedrivePreview variant="projects-templates" />);
    await user.click(screen.getByRole('button', { name: '＋ Template' }));
    expect(screen.getByRole('status')).toHaveTextContent('No project template was created');
    rerender(<PipedrivePreview variant="projects-archive" />);
    expect(screen.getByRole('heading', { name: 'No archived projects found' })).toBeInTheDocument();
    rerender(<PipedrivePreview variant="projects-tasks" />);
    await user.click(screen.getByRole('button', { name: 'Complete Draft launch checklist' }));
    expect(screen.getByRole('status')).toHaveTextContent('Task completion was not persisted');
  });

  it('keeps add-on and product onboarding local', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<PipedrivePreview variant="campaigns-feature-wall" />);
    await user.click(screen.getByRole('button', { name: 'Get started for free' }));
    expect(screen.getByRole('status')).toHaveTextContent('No trial, add-on or billing');
    rerender(<PipedrivePreview variant="products-empty-state" />);
    await user.click(screen.getByRole('button', { name: 'Import products' }));
    expect(screen.getByRole('status')).toHaveTextContent('No product import');
  });

  it('guards Marketplace search and app installation paths', async () => {
    const user = userEvent.setup();
    render(<PipedrivePreview variant="marketplace-catalog" />);
    await user.click(screen.getByRole('button', { name: 'Nova' }));
    expect(screen.getByRole('status')).toHaveTextContent('No app detail or installation');
  });

  it('keeps Pulse Feed and onboarding controls local', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<PipedrivePreview variant="pulse-feed" />);
    expect(screen.getByText('No actions for today')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Opportunities' }));
    expect(screen.getByRole('status')).toHaveTextContent('not filtered or changed');
    rerender(<PipedrivePreview variant="pulse-scores-onboarding" />);
    await user.click(screen.getByRole('button', { name: 'Get started' }));
    expect(screen.getByRole('status')).toHaveTextContent('Score setup was not started');
    rerender(<PipedrivePreview variant="pulse-sequences-onboarding" />);
    await user.click(screen.getByRole('button', { name: 'Start from template' }));
    expect(screen.getByRole('status')).toHaveTextContent('Sequence setup was not started');
  });

  it('guards Data enrichment pricing', async () => {
    const user = userEvent.setup();
    render(<PipedrivePreview variant="data-enrichment-feature-wall" />);
    await user.click(screen.getByRole('button', { name: 'View pricing' }));
    expect(screen.getByRole('status')).toHaveTextContent('No pricing or purchase');
  });

  it('guards automation and automatic-assignment creation', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<PipedrivePreview variant="automations-landing" />);
    await user.click(screen.getByRole('button', { name: '＋ Automation' }));
    expect(screen.getByRole('status')).toHaveTextContent('No automation was created');
    rerender(<PipedrivePreview variant="automatic-assignment-landing" />);
    await user.click(screen.getByRole('button', { name: '＋ Rule' }));
    expect(screen.getByRole('status')).toHaveTextContent('No assignment rule was created');
  });

  it('guards document connection and import sources', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<PipedrivePreview variant="documents-landing" />);
    await user.click(screen.getByRole('button', { name: 'Connect cloud storage' }));
    expect(screen.getByRole('status')).toHaveTextContent('No cloud storage connection');
    rerender(<PipedrivePreview variant="import-data-landing" />);
    await user.click(screen.getByRole('button', { name: 'Get started' }));
    expect(screen.getByRole('status')).toHaveTextContent('No file chooser or import');
  });

  it('guards export generation and restore filtering', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<PipedrivePreview variant="export-data-landing" />);
    await user.click(screen.getByRole('button', { name: 'Export' }));
    expect(screen.getByRole('status')).toHaveTextContent('No export file was generated');
    rerender(<PipedrivePreview variant="restore-data-landing" />);
    await user.click(screen.getByRole('button', { name: 'Filter' }));
    expect(screen.getByRole('status')).toHaveTextContent('No restore filter');
  });

  it('guards AI, calling and product settings', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<PipedrivePreview variant="ai-settings" />);
    await user.click(screen.getByRole('button', { name: 'Beta program page' }));
    expect(screen.getByRole('status')).toHaveTextContent('Beta program was not opened');
    rerender(<PipedrivePreview variant="phone-calls-settings" />);
    await user.click(screen.getByRole('button', { name: 'Save settings' }));
    expect(screen.getByRole('status')).toHaveTextContent('Calling settings were not saved');
    rerender(<PipedrivePreview variant="products-settings" />);
    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(screen.getByRole('status')).toHaveTextContent('Product settings were not saved');
  });

  it('guards webhook and duplicate-management actions', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<PipedrivePreview variant="webhooks-empty-state" />);
    await user.click(screen.getByRole('button', { name: 'Add a webhook' }));
    expect(screen.getByRole('status')).toHaveTextContent('No webhook was created');
    rerender(<PipedrivePreview variant="merge-duplicates-empty-state" />);
    await user.click(screen.getByRole('button', { name: 'Edit matching rules' }));
    expect(screen.getByRole('status')).toHaveTextContent('Matching rules were not edited');
  });

  it('uses fictional app recommendations and blocks installation paths', async () => {
    const user = userEvent.setup();
    render(<PipedrivePreview variant="installed-apps-empty-state" />);
    expect(screen.getByText('Workflow Bridge')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'View Workflow Bridge' }));
    expect(screen.getByRole('status')).toHaveTextContent('No app detail or installation');
  });

  it('renders the observed Leads Inbox empty state without creating a lead', async () => {
    const user = userEvent.setup();
    render(<PipedrivePreview variant="leads-empty-state" />);
    expect(screen.getByRole('heading', { name: 'Add your first lead' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: '＋ Lead' }));
    expect(screen.getByRole('status')).toHaveTextContent('No lead form was opened');
  });

  it('guards Insights dashboard and AI report creation', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<PipedrivePreview variant="insights-empty-state" />);
    await user.click(screen.getByRole('button', { name: 'Generate report AI' }));
    expect(screen.getByRole('status')).toHaveTextContent('No AI report request was sent');
    rerender(<PipedrivePreview variant="insights-create-menu" initialState="open" />);
    await user.click(screen.getByRole('button', { name: 'Dashboard' }));
    expect(screen.getByRole('status')).toHaveTextContent('creation was not started');
  });

  it('keeps Sales Inbox mailbox setup local', async () => {
    const user = userEvent.setup();
    render(<PipedrivePreview variant="sales-inbox-onboarding" />);
    expect(screen.getByDisplayValue('you@example.test')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Get started' }));
    expect(screen.getByRole('status')).toHaveTextContent('No mailbox setup');
  });

  it('expands one fictional Sales Inbox FAQ at a time', async () => {
    const user = userEvent.setup();
    render(<PipedrivePreview variant="sales-inbox-faq" />);
    await user.click(screen.getByRole('button', { name: 'Privacy controls' }));
    expect(screen.getByText(/Choose private, shared/)).toBeInTheDocument();
    expect(screen.queryByText(/Connected conversations/)).not.toBeInTheDocument();
  });
});
