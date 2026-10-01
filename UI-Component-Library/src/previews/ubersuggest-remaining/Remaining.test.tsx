import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { Remaining } from './Remaining';
import { ubersuggestRemainingPreviews } from './registry';
afterEach(cleanup);
const button = (name: string) => screen.getByRole('button', { name });

describe('observed Ubersuggest remaining action behavior', () => {
  it('preserves all 51 bulk tokens and explains the provider first-50 boundary', () => {
    render(<Remaining kind="bulk" />);
    expect(button('Analyze Keywords')).toBeDisabled();
    fireEvent.change(screen.getByRole('textbox', { name: 'Add keywords or competitors' }), {
      target: { value: Array.from({ length: 51 }, (_, i) => `term ${i + 1}`).join('\n') },
    });
    expect(screen.getAllByRole('button', { name: /^Remove term/ })).toHaveLength(51);
    expect(button('Analyze 50 Keywords')).toBeEnabled();
    expect(screen.getByRole('alert')).toHaveTextContent('only the first 50');
    fireEvent.click(button('Clear All'));
    expect(button('Analyze Keywords')).toBeDisabled();
  });
  it('opens the CSV gate and cancels without enabling uploads', () => {
    render(<Remaining kind="control-bulk" />);
    fireEvent.click(screen.getByRole('switch', { name: 'Upload CSV File' }));
    expect(screen.getByRole('dialog')).toHaveAccessibleName('Upgrade to add keywords by CSV');
    fireEvent.click(button('Cancel'));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByRole('switch')).not.toBeChecked();
  });
  it('enforces the observed competitor cap and removes named tokens', () => {
    render(<Remaining kind="control-competitors" />);
    fireEvent.change(screen.getByRole('textbox', { name: 'Add keywords or competitors' }), {
      target: { value: 'a.example,b.example,c.example,d.example,e.example,f.example,' },
    });
    expect(screen.getAllByRole('button', { name: /^Remove / })).toHaveLength(5);
    expect(screen.getByRole('alert')).toHaveTextContent('5 competitor maximum');
    fireEvent.click(button('Remove a.example'));
    expect(screen.getAllByRole('button', { name: /^Remove / })).toHaveLength(4);
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
  it('keeps Create list guarded and preserves observed empty readiness', () => {
    render(<Remaining kind="control-list" />);
    expect(button('Create list')).toBeEnabled();
    fireEvent.change(screen.getByRole('textbox', { name: 'List name' }), {
      target: { value: 'Fictional list' },
    });
    fireEvent.click(button('Create list'));
    expect(screen.getByRole('status')).toHaveTextContent('was not submitted');
    fireEvent.click(button('Cancel'));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
  it('records AI keyword required-field feedback on blur', () => {
    render(<Remaining kind="ai-overview" />);
    const input = screen.getByRole('textbox', { name: 'Enter a keyword' });
    expect(button('✦ AI Search')).toBeDisabled();
    fireEvent.change(input, { target: { value: 'ceramic mugs' } });
    expect(button('✦ AI Search')).toBeEnabled();
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.blur(input);
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a keyword');
  });
  it('does not invent client domain validation on project setup', () => {
    render(<Remaining kind="project" />);
    expect(button('Start Analysis')).toBeDisabled();
    fireEvent.change(screen.getByRole('textbox', { name: 'Enter your Website URL' }), {
      target: { value: 'not a domain' },
    });
    expect(button('Start Analysis')).toBeEnabled();
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    fireEvent.click(button('Start Analysis'));
    expect(screen.getByRole('status')).toHaveTextContent('No provider data changed');
  });
  it.each(['Position', 'Volume', 'SEO Difficulty'])(
    '%s preset changes draft readiness and clear state',
    (name) => {
      render(<Remaining kind="control-filters" initialState={name} />);
      const dialog = screen.getByRole('dialog');
      expect(within(dialog).getByRole('button', { name: 'Apply' })).toBeDisabled();
      fireEvent.click(within(dialog).getAllByRole('radio')[0]);
      expect(within(dialog).getByRole('button', { name: 'Apply' })).toBeEnabled();
      fireEvent.click(within(dialog).getByRole('button', { name: 'Clear All' }));
      expect(within(dialog).getByRole('button', { name: 'Apply' })).toBeDisabled();
    }
  );
  it.each(['Change', 'Search Intent'])('%s supports independent multi-select drafts', (name) => {
    render(<Remaining kind="control-filters" initialState={name} />);
    const checks = screen.getAllByRole('checkbox');
    fireEvent.click(checks[0]);
    fireEvent.click(checks[1]);
    expect(checks[0]).toBeChecked();
    expect(checks[1]).toBeChecked();
    fireEvent.click(button('Clear All'));
    expect(checks[0]).not.toBeChecked();
  });
  it('opens custom dates with empty disabled Apply and supports local cancellation', () => {
    render(<Remaining kind="control-dates" initialState="open" />);
    expect(button('All time')).toBeVisible();
    fireEvent.click(screen.getByRole('switch', { name: 'Custom range' }));
    expect(button('Apply')).toBeDisabled();
    expect(button('August 1, 2026')).toBeVisible();
    expect(button('September 30, 2026')).toBeVisible();
    fireEvent.click(button('Cancel'));
    expect(screen.getByRole('switch')).toBeVisible();
  });
  it('retains disabled tracking submission even with pasted draft keywords', () => {
    render(<Remaining kind="control-tracking-dialog" initialState="bulk" />);
    expect(button('Start Tracking')).toBeDisabled();
    expect(screen.getAllByRole('button', { name: /^Remove ceramic|^Remove travel/ })).toHaveLength(
      2
    );
    fireEvent.click(screen.getByRole('switch', { name: 'Upload CSV File' }));
    expect(button('Upload')).toBeVisible();
    fireEvent.click(button('Upload'));
    expect(screen.getByRole('status')).toHaveTextContent('was not submitted');
    expect(button('Start Tracking')).toBeDisabled();
    fireEvent.click(button('Cancel'));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
  it.each(['export', 'copy'])('keeps zero-row %s menu actions disabled', (state) => {
    render(<Remaining kind="control-bulk-menu" initialState={state} />);
    expect(screen.getAllByRole('menuitem')).toHaveLength(2);
    for (const item of screen.getAllByRole('menuitem')) expect(item).toBeDisabled();
    expect(button('Remove Selected')).toBeDisabled();
  });
  it('adds an empty topic and retains observed disabled Search AI', () => {
    render(<Remaining kind="control-topics" initialState="added" />);
    expect(screen.getAllByRole('textbox', { name: 'Topic *' })).toHaveLength(2);
    fireEvent.click(button('Add Topic'));
    expect(screen.getAllByRole('textbox', { name: 'Topic *' })).toHaveLength(3);
    expect(button('Search AI')).toBeDisabled();
  });
  it('switches all observed setup tabs without connecting any client', () => {
    render(<Remaining kind="control-setup-tabs" />);
    for (const name of ['Claude Code', 'Cursor', 'Codex', 'Windsurf', 'Other', 'Claude']) {
      fireEvent.click(screen.getByRole('tab', { name }));
      expect(screen.getByRole('tab', { name })).toHaveAttribute('aria-selected', 'true');
      expect(screen.getByRole('tabpanel', { name })).toBeVisible();
    }
    fireEvent.click(button('Open setup destination'));
    expect(screen.getByRole('status')).toHaveTextContent('not submitted');
  });
  it('dismisses standalone plan gate and reopens it', () => {
    render(<Remaining kind="control-upgrade" />);
    fireEvent.click(button('Cancel'));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    fireEvent.click(button('Open upgrade dialog'));
    expect(screen.getByRole('dialog')).toBeVisible();
  });
  it('supports draft-only chat and clearing without sending', () => {
    render(<Remaining kind="chat" />);
    expect(button('Send')).toBeDisabled();
    fireEvent.change(screen.getByRole('textbox', { name: 'Message' }), {
      target: { value: 'fictional SEO question' },
    });
    fireEvent.click(button('Send'));
    expect(screen.getByRole('status')).toHaveTextContent('not submitted');
    fireEvent.click(button('New chat'));
    expect(screen.getByRole('textbox', { name: 'Message' })).toHaveValue('');
  });
  it('gives modals local Escape dismissal and keyboard focus containment', () => {
    render(<Remaining kind="control-list" />);
    const dialog = screen.getByRole('dialog');
    fireEvent.keyDown(dialog, { key: 'Tab' });
    expect(button('Close')).toHaveFocus();
    button('Create list').focus();
    fireEvent.keyDown(dialog, { key: 'Tab' });
    expect(button('Close')).toHaveFocus();
    fireEvent.keyDown(dialog, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
describe('observed fixture inventory', () => {
  for (const [id, entry] of Object.entries(ubersuggestRemainingPreviews)) {
    if (entry.type !== 'reconstructed') continue;
    it(id + ' renders every declared state', () => {
      for (const fixture of entry.fixtures) {
        const { container, unmount } = render(<entry.Component {...fixture.props} />);
        expect(container.querySelector('[data-ubersuggest-remaining]')).not.toBeNull();
        expect(container.textContent).not.toMatch(/Synthetic error|NOT OBSERVED error/);
        unmount();
      }
    });
  }
});
