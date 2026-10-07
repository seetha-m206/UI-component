import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';
import { FramerPrimary } from './FramerPrimary';
import { framerPrimaryPreviews } from './registry';

afterEach(cleanup);
describe('Framer individual fictional fixtures', () => {
  for (const [id, entry] of Object.entries(framerPrimaryPreviews)) {
    if (entry.type !== 'reconstructed') continue;
    it.each(entry.fixtures)(`${id}: $id renders an explicit reconstruction`, fixture => {
      render(<entry.Component {...fixture.props} />);
      expect(screen.getByText('RECONSTRUCTION · fictional local fixture')).toBeInTheDocument();
      expect(entry.propsSchema.length).toBeGreaterThan(0);
    });
  }
  it('search enters no results and clears back to the fictional project', async () => {
    render(<FramerPrimary kind="search" />); const user = userEvent.setup();
    await user.type(screen.getByLabelText('Search projects'), 'absent');
    expect(screen.getByText('No results')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Clear search filter' }));
    expect(screen.getByText('Northstar Landing')).toBeInTheDocument();
  });
  it('selects a card locally without navigation', async () => {
    render(<FramerPrimary kind="card" />);
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('status')).toHaveTextContent('local simulation only');
  });
  it('mode choice closes the menu and disables current mode', async () => {
    render(<FramerPrimary kind="mode" initialState="open" />);
    expect(screen.getByRole('menuitem', { name: /Canvas/ })).toBeDisabled();
    await userEvent.click(screen.getByRole('menuitem', { name: /CMS/ }));
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: /CMS/ })).toBeInTheDocument();
  });
  it('insertion category reveals empty Collections without inserting', async () => {
    render(<FramerPrimary kind="insert" />);
    await userEvent.click(screen.getByRole('button', { name: 'Collections ›' }));
    expect(screen.getByText(/Generate a new collection/)).toBeInTheDocument();
  });
  it('layout menu closes with Escape from the focused item', () => {
    render(<FramerPrimary kind="layout" initialState="open" />);
    fireEvent.keyDown(screen.getByRole('menuitem', { name: /Stack/ }), { key: 'Escape' });
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });
  it('dimension field reports reconstructed validation on blur', () => {
    render(<FramerPrimary kind="dimension" />);
    fireEvent.change(screen.getByLabelText('Breakpoint width'), { target: { value: '-1' } });
    fireEvent.blur(screen.getByLabelText('Breakpoint width'));
    expect(screen.getByRole('alert')).toHaveTextContent('Reconstructed validation');
  });
  it('prompt submission is simulated and clears draft', async () => {
    render(<FramerPrimary kind="prompt" />); const user = userEvent.setup();
    expect(screen.getByRole('button', { name: 'Send' })).toBeDisabled();
    await user.type(screen.getByLabelText('Prompt'), 'Fictional request');
    await user.click(screen.getByRole('button', { name: 'Send' }));
    expect(screen.getByRole('status')).toHaveTextContent('Prompt simulated');
    expect(screen.getByLabelText('Prompt')).toHaveValue('');
  });
  it('locale confirmation requires selection then dismisses locally', async () => {
    render(<FramerPrimary kind="locale" />); const user = userEvent.setup();
    expect(screen.getByRole('button', { name: 'Confirm' })).toBeDisabled();
    await user.selectOptions(screen.getByLabelText('Default language'), 'French');
    await user.click(screen.getByRole('button', { name: 'Confirm' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent('simulated');
  });
  it('reopens dismissed locale and supports cancellation', async () => {
    render(<FramerPrimary kind="locale" initialState="closed" />); const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: 'Add locale' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
  it('usage has accessible fictional allowance', () => {
    render(<FramerPrimary kind="usage" initialState="partial" />);
    expect(screen.getByRole('progressbar', { name: 'Words used' })).toHaveAttribute('value', '2000');
  });
  it('SEO overrides update preview and empty fields inherit defaults', async () => {
    render(<FramerPrimary kind="seo" />); const user = userEvent.setup();
    await user.type(screen.getByLabelText('Page title'), 'Northstar');
    expect(screen.getByRole('heading', { name: 'Northstar' })).toBeInTheDocument();
    await user.clear(screen.getByLabelText('Page title'));
    expect(screen.getByRole('heading', { name: 'My Framer Site' })).toBeInTheDocument();
  });
  it('gate action only reports information locally', async () => {
    render(<FramerPrimary kind="gate" initialState="upgrade" />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
    await userEvent.click(screen.getByRole('button', { name: 'Upgrade' }));
    expect(screen.getByRole('status')).toHaveTextContent('local simulation only');
  });
  it('viewport dimensions affect local page and reset restores width', async () => {
    render(<FramerPrimary kind="viewport" initialState="narrow" />);
    expect(screen.getByLabelText('Fictional page viewport')).toHaveStyle({ width: '390px' });
    await userEvent.click(screen.getByRole('button', { name: 'Reset preview' }));
    expect(screen.getByLabelText('Preview width')).toHaveValue('1088');
  });
  it('disabled toggle prevents local submission', () => {
    render(<FramerPrimary kind="prompt" initialState="draft" disabled />);
    expect(screen.getByLabelText('Prompt')).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Send' })).toBeDisabled();
  });
});
