import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';
import { FramerRemaining } from './FramerRemaining';
import { framerRemainingPreviews } from './registry';
afterEach(cleanup);
describe('Framer remaining structures and local controls', () => {
  for (const [id, entry] of Object.entries(framerRemainingPreviews)) {
    if (entry.type !== 'reconstructed') continue;
    it.each(entry.fixtures)(`${id} $id evidence-labelled render`, (fixture) => {
      render(<entry.Component {...fixture.props} />);
      expect(screen.getByText('RECONSTRUCTION · fictional local data')).toBeInTheDocument();
      if (fixture.props.disabled) expect(document.querySelector('fieldset')).toBeDisabled();
    });
  }
  it('opens skills and simulates formatting selection', async () => {
    render(<FramerRemaining kind="skills" />);
    await userEvent.click(screen.getByRole('button', { name: /default Base instructions/ }));
    expect(screen.getByLabelText('Skill name')).toHaveValue('default');
    await userEvent.click(screen.getByRole('button', { name: 'Bold' }));
    expect(screen.getByRole('button', { name: 'Bold' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('status')).toHaveTextContent('No provider request');
  });
  it('switches usage to workspace credits', async () => {
    render(<FramerRemaining kind="usage" />);
    await userEvent.click(screen.getByRole('button', { name: 'Credits' }));
    expect(screen.getByText(/Credits are shared and limited/)).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Total bandwidth' })).not.toBeInTheDocument();
  });
  it('switches prices and retains enterprise annual label', async () => {
    render(<FramerRemaining kind="plans" />);
    await userEvent.click(screen.getByRole('button', { name: 'Switch to monthly' }));
    expect(screen.getByText('CA$20')).toBeInTheDocument();
    expect(screen.getByText('CA$60')).toBeInTheDocument();
    expect(screen.getByText('Annual only', { exact: true })).toBeInTheDocument();
    await userEvent.click(screen.getAllByRole('button', { name: 'Plan information' })[0]);
    expect(screen.getByRole('status')).toHaveTextContent('No provider request');
  });
  it.each(['plugins', 'commands'] as const)('%s palette filters and dismisses', async (kind) => {
    render(<FramerRemaining kind={kind} />);
    await userEvent.type(screen.getByLabelText('Palette search'), 'no-match');
    expect(screen.getByText('No search results')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Close' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Open palette' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
  it('fill edits are local and can close and reopen', async () => {
    render(<FramerRemaining kind="color" />);
    const input = screen.getByLabelText('HEX color');
    await userEvent.clear(input);
    await userEvent.type(input, 'FF0000');
    expect(input).toHaveValue('FF0000');
    await userEvent.click(screen.getByRole('button', { name: 'Close' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Open fill picker' }));
    expect(screen.getByLabelText('HEX color')).toHaveValue('FF0000');
  });
  it('summary row exposes only captured counts', () => {
    render(<FramerRemaining kind="row" />);
    expect(screen.getByRole('cell', { name: '11 headers' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: '11 values' })).toBeInTheDocument();
  });
  it('disabled billing switch prevents changes', async () => {
    render(<FramerRemaining kind="interval" disabled />);
    const button = screen.getByRole('button', { name: 'Switch to monthly' });
    await userEvent.click(button);
    expect(button).toBeDisabled();
    expect(button).toHaveTextContent('Switch to monthly');
  });
});
