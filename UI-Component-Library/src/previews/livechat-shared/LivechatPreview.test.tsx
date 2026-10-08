import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { LivechatPreview } from './LivechatPreview';
import { livechatPreviews } from './registry';

describe('LiveChat safe local reconstruction', () => {
  it('registers every observed LiveChat record', () => {
    expect(Object.keys(livechatPreviews)).toHaveLength(88);
  });

  it('renders every registered LiveChat fixture', () => {
    for (const [id, preview] of Object.entries(livechatPreviews)) {
      if (preview.type !== 'reconstructed') continue;
      const Component = preview.Component;
      const fixture = preview.fixtures[0];
      const view = render(<Component {...fixture.props} />);
      expect(view.container.textContent, id).toBeTruthy();
      view.unmount();
    }
  });

  it('expands integrations without contacting the provider', async () => {
    const fetch = vi.fn();
    vi.stubGlobal('fetch', fetch);
    const user = userEvent.setup();
    render(<LivechatPreview variant="installation-gate" />);
    await user.click(screen.getByRole('button', { name: /More integrations/ }));
    expect(screen.getByRole('region', { name: 'Website integrations' })).toBeVisible();
    await user.click(screen.getByRole('button', { name: 'Connect with Webflow' }));
    expect(screen.getByRole('status')).toHaveTextContent('Webflow was not connected');
    expect(fetch).not.toHaveBeenCalled();
  });

  it('keeps invitation submission local and guarded', async () => {
    const fetch = vi.fn();
    vi.stubGlobal('fetch', fetch);
    const user = userEvent.setup();
    render(<LivechatPreview variant="developer-invite" />);
    const send = screen.getByRole('button', { name: 'Send invite' });
    expect(send).toBeDisabled();
    await user.type(
      screen.getByRole('textbox', { name: 'Developer email' }),
      'developer@example.invalid'
    );
    await user.click(send);
    expect(screen.getByRole('status')).toHaveTextContent('No invitation was sent');
    expect(fetch).not.toHaveBeenCalled();
  });

  it('filters global search with only local state', async () => {
    const user = userEvent.setup();
    render(<LivechatPreview variant="global-search" />);
    await user.type(screen.getByRole('textbox', { name: 'Search LiveChat' }), 'Reports');
    expect(screen.getByRole('button', { name: 'Reports — Navigate' })).toBeVisible();
  });

  it('switches widget customization panels without contacting the provider', async () => {
    const fetch = vi.fn();
    vi.stubGlobal('fetch', fetch);
    const user = userEvent.setup();
    render(<LivechatPreview variant="widget-customization" />);
    await user.click(screen.getByRole('button', { name: 'Position' }));
    expect(screen.getByText('Always visible')).toBeVisible();
    expect(fetch).not.toHaveBeenCalled();
  });

  it('keeps newly observed screen controls inside the local fixture', async () => {
    const fetch = vi.fn();
    vi.stubGlobal('fetch', fetch);
    const user = userEvent.setup();
    render(<LivechatPreview variant="livechat-report-export-control" />);
    await user.click(screen.getByRole('button', { name: 'Export CSV' }));
    expect(screen.getByRole('status')).toHaveTextContent(
      'Export CSV stayed inside this fictional fixture.'
    );
    expect(fetch).not.toHaveBeenCalled();
  });
});
