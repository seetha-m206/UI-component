import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { FreshserviceDeep } from './FreshserviceDeep';

afterEach(() => vi.unstubAllGlobals());

describe('Freshservice deep capture boundaries', () => {
  it('keeps article authoring local and guards Save', async () => {
    const fetch = vi.fn();
    vi.stubGlobal('fetch', fetch);
    const user = userEvent.setup();
    render(<FreshserviceDeep variant="article-editor" />);
    await user.type(screen.getByPlaceholderText('Enter Title'), 'Fictional password reset guide');
    await user.selectOptions(screen.getByLabelText('Type'), 'Workaround');
    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(screen.getByPlaceholderText('Enter Title')).toHaveValue(
      'Fictional password reset guide'
    );
    expect(screen.getByLabelText('Type')).toHaveValue('Workaround');
    expect(screen.getByRole('status')).toHaveTextContent('No request was sent');
    expect(fetch).not.toHaveBeenCalled();
  });

  it('expands the full local formatting tool set', async () => {
    const user = userEvent.setup();
    render(<FreshserviceDeep variant="article-formatting-toolbar" initialExpanded={false} />);
    expect(
      screen.queryByRole('button', { name: 'Freddy writing assistant' })
    ).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'More' }));
    expect(screen.getByRole('button', { name: 'Freddy writing assistant' })).toBeVisible();
  });

  it('moves through the local category step without confirming a provider location', async () => {
    const user = userEvent.setup();
    render(<FreshserviceDeep variant="article-location-picker" />);
    const next = screen.getByRole('button', { name: 'Next' });
    expect(next).toBeDisabled();
    await user.click(screen.getByRole('button', { name: /Default Category/ }));
    await user.click(next);
    expect(screen.getByText('No folder was observed in this empty workspace.')).toBeVisible();
  });

  it('reveals subflow description and guards creation', async () => {
    const fetch = vi.fn();
    vi.stubGlobal('fetch', fetch);
    const user = userEvent.setup();
    render(<FreshserviceDeep variant="subflow-create-drawer" />);
    await user.click(screen.getByRole('button', { name: '+ Add description' }));
    expect(screen.getByLabelText('Description')).toBeVisible();
    await user.selectOptions(screen.getByLabelText('Module *'), 'Inventory');
    await user.click(screen.getByRole('button', { name: 'Create' }));
    expect(screen.getByRole('status')).toHaveTextContent('No request was sent');
    expect(fetch).not.toHaveBeenCalled();
  });

  it('changes report pages only in the reconstruction', async () => {
    const user = userEvent.setup();
    render(<FreshserviceDeep variant="report-detail" />);
    await user.click(screen.getByRole('button', { name: 'Article Insights' }));
    expect(screen.getByRole('button', { name: 'Article Insights' })).toHaveAttribute(
      'aria-current',
      'page'
    );
    expect(screen.getByText('Total Views')).toBeVisible();
  });

  it('guards workflow activation and export', async () => {
    const fetch = vi.fn();
    vi.stubGlobal('fetch', fetch);
    const user = userEvent.setup();
    const { rerender } = render(<FreshserviceDeep variant="workflow-canvas" />);
    await user.click(screen.getByRole('button', { name: 'Activate' }));
    expect(screen.getByRole('status')).toHaveTextContent('No request was sent');
    rerender(<FreshserviceDeep variant="report-export-settings" />);
    await user.click(screen.getAllByRole('button', { name: 'Download file' })[1]);
    expect(screen.getByRole('status')).toHaveTextContent('No request was sent');
    expect(fetch).not.toHaveBeenCalled();
  });
});
