import { cleanup, render, screen, within } from '@testing-library/react';
import { createElement } from 'react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { WixPreview } from './WixPreview';
import { wixPreviews } from './registry';

const reconstructedPreviews = Object.entries(wixPreviews).flatMap(([componentId, preview]) =>
  preview.type === 'reconstructed' ? [{ componentId, preview }] : [],
);

const registeredFixtureStates = reconstructedPreviews.flatMap(({ componentId, preview }) =>
  preview.fixtures.map((fixture) => ({ componentId, preview, fixture })),
);

describe('WixPreview', () => {
  it('switches the reconstructed real-time zero-state tabs locally', async () => {
    const user = userEvent.setup();
    render(<WixPreview variant="realtime-analytics" />);
    await user.click(screen.getByRole('tab', { name: /Live visitors/ }));
    expect(screen.getByRole('tab', { name: /Live visitors/ })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('img', { name: 'No live visitors' })).toBeInTheDocument();
  });

  it('opens and cancels the analytics date-range disclosure', async () => {
    const user = userEvent.setup();
    render(<WixPreview variant="analytics-date-range" />);
    expect(screen.getByRole('dialog', { name: 'Analytics date range' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(screen.queryByRole('dialog', { name: 'Analytics date range' })).not.toBeInTheDocument();
  });

  it('guards traffic AI actions', async () => {
    const user = userEvent.setup();
    render(<WixPreview variant="traffic-overview" />);
    await user.click(screen.getByRole('button', { name: 'Ask AI' }));
    expect(screen.getByRole('status')).toHaveTextContent('No analytics question was sent');
  });

  it('keeps SEO contextual help actions local', async () => {
    const user = userEvent.setup();
    render(<WixPreview variant="seo-help-menu" />);
    await user.click(screen.getByRole('menuitem', { name: 'Hire an expert' }));
    expect(screen.getByRole('status')).toHaveTextContent('Hire an expert was not opened');
  });

  it('uses fictional contact data and guards create actions', async () => {
    const user = userEvent.setup();
    render(<WixPreview variant="contact-create-menu" />);
    expect(screen.getByText('ava.morgan@example.invalid')).toBeInTheDocument();
    await user.click(screen.getByRole('menuitem', { name: 'Create with AI · BETA' }));
    expect(screen.getByRole('status')).toHaveTextContent('No provider request was sent');
  });

  it('filters the fictional contacts table locally', async () => {
    const user = userEvent.setup();
    render(<WixPreview variant="contacts-workspace" />);
    await user.type(screen.getByRole('textbox', { name: 'Search contacts' }), 'missing');
    expect(screen.getByText('No fictional contacts match this search.')).toBeInTheDocument();
  });

  it('guards installed-app deletion and editor actions', async () => {
    const user = userEvent.setup();
    render(<WixPreview variant="installed-app-actions" />);
    const drawer = screen.getByRole('complementary', { name: 'Wix Portfolio actions' });
    await user.click(within(drawer).getByRole('button', { name: 'Delete app' }));
    expect(screen.getByRole('status')).toHaveTextContent('Delete app was not executed');
    await user.click(within(drawer).getByRole('button', { name: 'Open in Editor' }));
    expect(screen.getByRole('status')).toHaveTextContent('Open in Editor was not opened');
  });

  it('renders the observed primary-screen fixtures and guards gated actions', async () => {
    const user = userEvent.setup();
    render(<WixPreview variant="forms-submissions" />);
    expect(screen.getByRole('heading', { name: 'Forms and Submissions' })).toBeInTheDocument();
    expect(screen.getByText('0/4 FORMS')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Create Website Form' }));
    expect(screen.getByRole('status')).toHaveTextContent('sends no Wix request');
  });

  it('preserves the settings taxonomy captured from the primary screen', () => {
    render(<WixPreview variant="settings-overview" />);
    expect(screen.getByRole('heading', { name: 'Finance & payments' })).toBeInTheDocument();
    expect(screen.getByText(/Roles & permissions/)).toBeInTheDocument();
    expect(screen.getByText(/Custom code/)).toBeInTheDocument();
  });

  it('registers a runtime-verified preview for every Wix component record', () => {
    expect(Object.keys(wixPreviews)).toHaveLength(46);
    expect(registeredFixtureStates).toHaveLength(51);
    expect(reconstructedPreviews).toHaveLength(46);
    expect(reconstructedPreviews.every(({ preview }) => preview.runtimeVerified)).toBe(true);
  });

  it.each(registeredFixtureStates)(
    'renders $componentId / $fixture.id without private provider identifiers',
    ({ preview, fixture }) => {
      const { container } = render(createElement(preview.Component, fixture.props));
      const rendered = container.textContent || '';
      expect(rendered.length).toBeGreaterThan(40);
      expect(rendered).not.toMatch(/[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|@sessions\.ca|seethalakshmi6/i);
      cleanup();
    },
  );

  it('initializes the registered Live visitors fixture in its declared state', () => {
    const preview = wixPreviews['wix-realtime-analytics'];
    if (preview.type !== 'reconstructed') throw new Error('Real-time Analytics preview is not reconstructed');
    const fixture = preview.fixtures.find((item) => item.id === 'live');
    if (!fixture) throw new Error('Live visitors fixture is missing');
    render(createElement(preview.Component, fixture.props));
    expect(screen.getByRole('tab', { name: /Live visitors/ })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('img', { name: 'No live visitors' })).toBeInTheDocument();
  });
});
