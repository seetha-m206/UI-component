import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { PublishToggleSwitch, type PublishStatus } from './PublishToggleSwitch';

function Controlled(props: { initial?: PublishStatus; disabled?: boolean; description?: string }) {
  const [status, setStatus] = useState<PublishStatus>(props.initial ?? 'disabled');
  return (
    <PublishToggleSwitch
      status={status}
      onChange={setStatus}
      disabled={props.disabled}
      label="Share Publicly"
      description={props.description}
    />
  );
}

describe('PublishToggleSwitch', () => {
  it('renders as an accessible switch with the given label', () => {
    render(<Controlled />);
    expect(screen.getByRole('switch', { name: 'Share Publicly' })).toBeInTheDocument();
  });

  it('reflects the current status via aria-checked', () => {
    render(<Controlled initial="enabled" />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
  });

  it('enabling (Disabled -> Enabled) is direct with no confirmation gate', async () => {
    const user = userEvent.setup();
    render(<Controlled initial="disabled" />);
    const toggle = screen.getByRole('switch');
    expect(toggle).toHaveAttribute('aria-checked', 'false');

    await user.click(toggle);

    expect(toggle).toHaveAttribute('aria-checked', 'true');
    expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument();
  });

  it('disabling (Enabled -> Disabled) opens a confirm dialog instead of changing immediately', async () => {
    const user = userEvent.setup();
    render(<Controlled initial="enabled" />);
    const toggle = screen.getByRole('switch');

    await user.click(toggle);

    expect(toggle).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByRole('alertdialog')).toBeInTheDocument();
    expect(
      screen.getByText(/This form will no longer be accessible through its Permalink URL/)
    ).toBeInTheDocument();
  });

  it('confirming the dialog ("Yes") applies the disable and closes it', async () => {
    const user = userEvent.setup();
    render(<Controlled initial="enabled" />);
    await user.click(screen.getByRole('switch'));

    await user.click(screen.getByRole('button', { name: 'Yes' }));

    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false');
    expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument();
  });

  it('cancelling the dialog ("No") leaves the switch Enabled', async () => {
    const user = userEvent.setup();
    render(<Controlled initial="enabled" />);
    await user.click(screen.getByRole('switch'));

    await user.click(screen.getByRole('button', { name: 'No' }));

    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
    expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument();
  });

  it('Escape in the dialog cancels, same as clicking "No"', async () => {
    const user = userEvent.setup();
    render(<Controlled initial="enabled" />);
    await user.click(screen.getByRole('switch'));
    expect(screen.getByRole('alertdialog')).toBeInTheDocument();

    await user.keyboard('{Escape}');

    expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument();
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
  });

  it('supports keyboard activation via Space/Enter (native button semantics)', async () => {
    const user = userEvent.setup();
    render(<Controlled initial="disabled" />);
    const toggle = screen.getByRole('switch');
    toggle.focus();
    await user.keyboard(' ');
    expect(toggle).toHaveAttribute('aria-checked', 'true');
  });

  it('moves focus into the dialog and back to the switch on cancel', async () => {
    const user = userEvent.setup();
    render(<Controlled initial="enabled" />);
    const toggle = screen.getByRole('switch');
    toggle.focus();

    await user.keyboard(' ');
    expect(screen.getByRole('button', { name: 'No' })).toHaveFocus();

    await user.keyboard('{Escape}');
    expect(toggle).toHaveFocus();
  });

  it('cannot be changed when disabled (locked)', async () => {
    const user = userEvent.setup();
    render(<Controlled initial="enabled" disabled />);
    const toggle = screen.getByRole('switch');
    expect(toggle).toBeDisabled();

    await user.click(toggle);

    expect(toggle).toHaveAttribute('aria-checked', 'true');
    expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument();
  });

  it('renders optional description text when provided', () => {
    render(<Controlled description="Public users can access this form and submit responses." />);
    expect(
      screen.getByText('Public users can access this form and submit responses.')
    ).toBeInTheDocument();
  });
});
