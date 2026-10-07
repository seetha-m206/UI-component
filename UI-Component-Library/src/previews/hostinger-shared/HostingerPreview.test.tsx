import { cleanup, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createElement } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { HostingerPreview } from './HostingerPreview';
import { hostingerEntries, hostingerPreviews } from './registry';

const componentModules = import.meta.glob('/src/content/brands/hostinger/components/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

afterEach(() => cleanup());

const registeredFixtures = Object.entries(hostingerPreviews).flatMap(([componentId, preview]) => {
  if (preview.type !== 'reconstructed') return [];
  return preview.fixtures.map((fixture) => ({ componentId, preview, fixture }));
});

describe('Hostinger shared component previews', () => {
  it('registers one runtime-verified preview for every Hostinger component record', () => {
    const recordIds = Object.keys(componentModules)
      .map((path) => path.split('/').pop()?.replace(/\.md$/, '') || '')
      .sort();
    const previewIds = Object.keys(hostingerPreviews).sort();
    expect(hostingerEntries).toHaveLength(18);
    expect(Object.keys(hostingerPreviews)).toHaveLength(18);
    expect(previewIds).toEqual(recordIds);
    expect(registeredFixtures).toHaveLength(46);
    expect(
      Object.values(hostingerPreviews).every(
        (preview) => preview.type === 'reconstructed' && preview.runtimeVerified
      )
    ).toBe(true);
  });

  it.each(registeredFixtures)(
    'renders $componentId / $fixture.id with fictional data and no private provider identifier',
    ({ preview, fixture }) => {
      if (preview.type !== 'reconstructed') throw new Error('Expected reconstructed preview');
      const { container } = render(createElement(preview.Component, fixture.props));
      const rendered = container.textContent || '';
      expect(rendered.length).toBeGreaterThan(fixture.id === 'closed' ? 4 : 35);
      expect(rendered).not.toMatch(/seetha|centilio\.com|659.?444.?4429/i);
      cleanup();
    }
  );

  it('shows the observed search Agent fallback and closes locally', async () => {
    const user = userEvent.setup();
    render(<HostingerPreview variant="global-search" initialState="no-route" />);
    expect(screen.getByRole('button', { name: /Ask Hostinger Agent about/ })).toBeVisible();
    await user.click(screen.getByRole('button', { name: 'Search' }));
    expect(screen.queryByRole('dialog', { name: 'Global search' })).not.toBeInTheDocument();
  });

  it('switches website filters and account-sharing direction locally', async () => {
    const user = userEvent.setup();
    const { rerender } = render(
      <HostingerPreview variant="website-filter" initialState="ai-builder" />
    );
    await user.click(screen.getByRole('button', { name: 'Web Apps' }));
    expect(screen.getByRole('heading', { name: 'Deploy your web app' })).toBeVisible();
    rerender(<HostingerPreview variant="account-sharing" initialState="request" />);
    await user.click(screen.getByRole('tab', { name: 'Give access' }));
    expect(screen.getByRole('tab', { name: 'Give access' })).toHaveAttribute(
      'aria-selected',
      'true'
    );
    expect(screen.getByRole('heading', { name: 'Give access' })).toBeVisible();
  });

  it('guards consequential actions inside the local preview', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<HostingerPreview variant="memory-consent" />);
    await user.click(screen.getByRole('button', { name: 'Turn on memory' }));
    expect(screen.getByRole('status')).toHaveTextContent('Memory was not enabled');
    rerender(<HostingerPreview variant="plan-comparison" />);
    const cards = screen.getAllByRole('article');
    await user.click(within(cards[0]).getByRole('button', { name: 'Choose plan' }));
    expect(screen.getByRole('status')).toHaveTextContent('Plan selection is disabled');
  });

  it('keeps mandatory notification controls disabled while allowing local-only changes', async () => {
    const user = userEvent.setup();
    render(<HostingerPreview variant="notification-matrix" initialState="mandatory" />);
    expect(screen.getByRole('checkbox', { name: 'Security alerts Email' })).toBeDisabled();
    await user.click(screen.getByRole('checkbox', { name: 'Marketing tips SMS' }));
    expect(screen.getByRole('status')).toHaveTextContent('local fixture only');
  });
});
