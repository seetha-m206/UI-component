import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { JotformSignBuilder } from './JotformSignBuilder';

describe('JotformSignBuilder', () => {
  it('starts on BUILD mode with two color-coded signature blocks', () => {
    render(<JotformSignBuilder />);
    expect(screen.getByRole('tab', { name: 'BUILD' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByTestId('sign-canvas')).toBeInTheDocument();
    expect(screen.getByTestId('signature-block-field-landlord')).toHaveAttribute(
      'data-color',
      'orange'
    );
    expect(screen.getByTestId('signature-block-field-tenant')).toHaveAttribute(
      'data-color',
      'purple'
    );
  });

  it('clicking a role badge opens the "Assign field to:" popover listing existing roles', async () => {
    const user = userEvent.setup();
    render(<JotformSignBuilder />);
    await user.click(screen.getByRole('button', { name: 'Me ▾' }));
    expect(screen.getByText('Assign field to:')).toBeInTheDocument();
    const popover = screen.getByRole('menu', { name: 'Assign field to' });
    expect(within(popover).getByRole('menuitem', { name: 'Me' })).toBeInTheDocument();
    expect(within(popover).getByRole('menuitem', { name: 'Tenant/Lessee' })).toBeInTheDocument();
    expect(within(popover).getByRole('button', { name: 'Delete role Tenant/Lessee' })).toBeInTheDocument();
  });

  it('"+ Add new role" adds a role, available in the popover list immediately', async () => {
    const user = userEvent.setup();
    render(<JotformSignBuilder />);
    await user.click(screen.getByRole('button', { name: 'Me ▾' }));
    await user.click(screen.getByRole('button', { name: '+ Add new role' }));
    await user.type(screen.getByLabelText('New role name'), 'Co-Signer');
    await user.click(screen.getByRole('button', { name: 'Add' }));

    const popover = screen.getByRole('menu', { name: 'Assign field to' });
    expect(within(popover).getByRole('menuitem', { name: 'Co-Signer' })).toBeInTheDocument();
  });

  it('a newly added role is reflected in the SEND tab signer count', async () => {
    const user = userEvent.setup();
    render(<JotformSignBuilder />);
    await user.click(screen.getByRole('button', { name: 'Me ▾' }));
    await user.click(screen.getByRole('button', { name: '+ Add new role' }));
    await user.type(screen.getByLabelText('New role name'), 'Co-Signer');
    await user.click(screen.getByRole('button', { name: 'Add' }));

    await user.click(screen.getByRole('tab', { name: 'SEND' }));
    expect(screen.getByText('Manage Signers (3)')).toBeInTheDocument();
  });

  it('SEND tab shows the correct signer count for the default two roles', async () => {
    const user = userEvent.setup();
    render(<JotformSignBuilder />);
    await user.click(screen.getByRole('tab', { name: 'SEND' }));
    expect(screen.getByText('Manage Signers (2)')).toBeInTheDocument();
    expect(screen.getByLabelText('Me signer name')).toBeInTheDocument();
    expect(screen.getByLabelText('Tenant/Lessee signer email')).toBeInTheDocument();
  });

  it('Signing order toggle flips from off (any order) to on', async () => {
    const user = userEvent.setup();
    render(<JotformSignBuilder />);
    await user.click(screen.getByRole('tab', { name: 'SEND' }));
    const toggle = screen.getByRole('checkbox', { name: /Signing order/ });
    expect(toggle).not.toBeChecked();
    expect(screen.getByText(/any order/)).toBeInTheDocument();

    await user.click(toggle);
    expect(toggle).toBeChecked();
    expect(screen.getByText(/signers sign in listed order/)).toBeInTheDocument();
  });

  it('"Send to Sign" never fires a real send — it only shows the demo disclaimer', async () => {
    const user = userEvent.setup();
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const onSendAttempt = vi.fn();
    render(<JotformSignBuilder onSendAttempt={onSendAttempt} />);
    await user.click(screen.getByRole('tab', { name: 'SEND' }));

    expect(screen.queryByText(/reconstructed demo/)).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Send to Sign' }));

    expect(onSendAttempt).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('status')).toHaveTextContent(/reconstructed demo — no email is sent/);
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });

  it('switching to SETTINGS shows its own sub-nav rail', async () => {
    const user = userEvent.setup();
    const onModeChange = vi.fn();
    render(<JotformSignBuilder onModeChange={onModeChange} />);
    await user.click(screen.getByRole('tab', { name: 'SETTINGS' }));
    expect(onModeChange).toHaveBeenCalledWith('settings');
    expect(screen.getByLabelText('Sign Builder settings navigation')).toBeInTheDocument();
  });

  it('disables every interactive control when disabled', async () => {
    const user = userEvent.setup();
    const onModeChange = vi.fn();
    render(<JotformSignBuilder disabled onModeChange={onModeChange} />);
    await user.click(screen.getByRole('tab', { name: 'SEND' }));
    expect(onModeChange).not.toHaveBeenCalled();
  });
});
