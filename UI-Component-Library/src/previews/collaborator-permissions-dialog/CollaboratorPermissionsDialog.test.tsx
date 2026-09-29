import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CollaboratorPermissionsDialog } from './CollaboratorPermissionsDialog';
import { fixtures } from './fixtures';

function getFixture(id: string) {
  const fixture = fixtures.find((f) => f.id === id);
  if (!fixture) throw new Error(`fixture not found: ${id}`);
  return fixture.props;
}

describe('CollaboratorPermissionsDialog', () => {
  it('renders Surface A with the Specific Users form and a 3-tier Permission dropdown', () => {
    render(<CollaboratorPermissionsDialog {...getFixture('surface-a-specific-users')} />);
    expect(screen.getByRole('tab', { name: /Share.*Specific Users/ })).toHaveAttribute(
      'aria-selected',
      'true'
    );
    const select = screen.getByLabelText('Permission') as HTMLSelectElement;
    expect(select.options).toHaveLength(3);
    expect(select.options[0].textContent).toContain('Submit Form');
    expect(select.options[2].textContent).toContain('Modify Form, Entries, Reports');
  });

  it('typing an email that matches an org account shows it as a selectable suggestion', async () => {
    const user = userEvent.setup();
    render(<CollaboratorPermissionsDialog {...getFixture('surface-a-specific-users')} />);
    await user.type(screen.getByLabelText('Share With'), 'priya');
    expect(screen.getByRole('option', { name: 'priya@zohoforms.example.com' })).toBeInTheDocument();
  });

  it('typing an email that matches no org account shows "No more email addresses"', async () => {
    const user = userEvent.setup();
    render(<CollaboratorPermissionsDialog {...getFixture('surface-a-specific-users')} />);
    await user.type(screen.getByLabelText('Share With'), 'nobody-here');
    expect(screen.getByText('No more email addresses')).toBeInTheDocument();
  });

  it('clicking Share with an unmatched/unchosen email shows the exact client-side error and never calls onShare', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    const onShare = vi.fn();
    render(<CollaboratorPermissionsDialog {...getFixture('surface-a-specific-users')} onShare={onShare} />);
    await user.type(screen.getByLabelText('Share With'), 'nobody-here');
    await user.click(screen.getByRole('button', { name: 'Share' }));
    expect(screen.getByRole('alert')).toHaveTextContent('Please choose an email address.');
    expect(onShare).not.toHaveBeenCalled();
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });

  it('choosing a suggested account and sharing calls onShare with the selected permission tier', async () => {
    const user = userEvent.setup();
    const onShare = vi.fn();
    render(<CollaboratorPermissionsDialog {...getFixture('surface-a-specific-users')} onShare={onShare} />);
    await user.type(screen.getByLabelText('Share With'), 'priya');
    await user.click(screen.getByRole('option', { name: 'priya@zohoforms.example.com' }));
    await user.selectOptions(screen.getByLabelText('Permission'), 'modify');
    await user.click(screen.getByRole('button', { name: 'Share' }));
    expect(onShare).toHaveBeenCalledWith(
      expect.objectContaining({ email: 'priya@zohoforms.example.com', permission: 'modify' })
    );
  });

  it('the Groups sub-tab has no Permission dropdown — a fixed grant only', () => {
    render(<CollaboratorPermissionsDialog {...getFixture('surface-a-groups')} />);
    expect(screen.queryByLabelText('Permission')).not.toBeInTheDocument();
    expect(screen.getByText(/Permission: Submit Form \(fixed/)).toBeInTheDocument();
  });

  it('the All Users sub-tab shows an org confirmation chip and no Permission dropdown', () => {
    render(<CollaboratorPermissionsDialog {...getFixture('surface-a-all-users')} />);
    expect(screen.getByText('zohoforms')).toBeInTheDocument();
    expect(screen.queryByLabelText('Permission')).not.toBeInTheDocument();
  });

  it('switching to Surface B shows the header stat tiles matching the source trial-org numbers (3/1/0/2)', async () => {
    const user = userEvent.setup();
    render(<CollaboratorPermissionsDialog {...getFixture('surface-b-trial-org-no-admin')} />);
    await user.click(screen.getByRole('tab', { name: /Setup.*Users/ }));
    expect(screen.getByText('User Management')).toBeInTheDocument();
    const tiles = ['3', '1', '0', '2'];
    for (const value of tiles) {
      expect(screen.getByText(value)).toBeInTheDocument();
    }
  });

  it('the Super Admin row has no edit/delete action control at all', async () => {
    const user = userEvent.setup();
    render(<CollaboratorPermissionsDialog {...getFixture('surface-b-trial-org-no-admin')} />);
    await user.click(screen.getByRole('tab', { name: /Setup.*Users/ }));
    const row = screen.getByText('owner@zohoforms.example.com').closest('tr')!;
    expect(within(row).queryByRole('button')).not.toBeInTheDocument();
  });

  it('the Admin filter tab shows "You have not added an admin" when zero Admin-role users exist', async () => {
    const user = userEvent.setup();
    render(<CollaboratorPermissionsDialog {...getFixture('surface-b-trial-org-no-admin')} />);
    await user.click(screen.getByRole('tab', { name: /Setup.*Users/ }));
    await user.click(screen.getByRole('tab', { name: 'Admin' }));
    expect(screen.getByText('You have not added an admin')).toBeInTheDocument();
  });

  it('Change Super Admin with zero Admin-tier users blocks with the exact recorded copy and a single OK', async () => {
    const user = userEvent.setup();
    render(<CollaboratorPermissionsDialog {...getFixture('surface-b-trial-org-no-admin')} />);
    await user.click(screen.getByRole('tab', { name: /Setup.*Users/ }));
    await user.click(screen.getByRole('button', { name: 'Change Super Admin' }));
    expect(
      screen.getByText(
        'Only an active Admin can be assigned as a Super Admin. Currently, there are no active Admins.'
      )
    ).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: 'OK' })).toHaveLength(1);
    await user.click(screen.getByRole('button', { name: 'OK' }));
    expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument();
  });

  it('Change Super Admin when an Admin exists takes the unconfirmed placeholder branch and fires onChangeSuperAdmin', async () => {
    const user = userEvent.setup();
    const onChangeSuperAdmin = vi.fn();
    render(
      <CollaboratorPermissionsDialog
        {...getFixture('surface-b-with-admin')}
        onChangeSuperAdmin={onChangeSuperAdmin}
      />
    );
    await user.click(screen.getByRole('tab', { name: /Setup.*Users/ }));
    await user.click(screen.getByRole('button', { name: 'Change Super Admin' }));
    expect(screen.queryByText(/Currently, there are no active Admins/)).not.toBeInTheDocument();
    expect(onChangeSuperAdmin).toHaveBeenCalledTimes(1);
  });

  it('"+ Add User" opens a modal with a free-text email field and no role selector', async () => {
    const user = userEvent.setup();
    render(<CollaboratorPermissionsDialog {...getFixture('surface-b-trial-org-no-admin')} />);
    await user.click(screen.getByRole('tab', { name: /Setup.*Users/ }));
    await user.click(screen.getByRole('button', { name: '+ Add User' }));
    const dialog = screen.getByRole('dialog', { name: 'Add User' });
    expect(dialog).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    expect(within(dialog).queryByRole('combobox')).not.toBeInTheDocument();
    expect(within(dialog).queryByText(/^role$/i)).not.toBeInTheDocument();
  });

  it('submitting Add User fires onAddUser but does not append a row (post-submit shape is unconfirmed in the source)', async () => {
    const user = userEvent.setup();
    const onAddUser = vi.fn();
    render(<CollaboratorPermissionsDialog {...getFixture('surface-b-trial-org-no-admin')} onAddUser={onAddUser} />);
    await user.click(screen.getByRole('tab', { name: /Setup.*Users/ }));
    await user.click(screen.getByRole('button', { name: '+ Add User' }));
    await user.type(screen.getByLabelText('Email Address'), 'newuser@zohoforms.example.com');
    await user.click(screen.getByRole('button', { name: 'Add' }));
    expect(onAddUser).toHaveBeenCalledWith('newuser@zohoforms.example.com');
    expect(screen.queryByRole('dialog', { name: 'Add User' })).not.toBeInTheDocument();
    expect(screen.queryByText('newuser@zohoforms.example.com')).not.toBeInTheDocument();
  });

  it('never calls fetch/XHR across the full Share-With-invalid-email attempt', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<CollaboratorPermissionsDialog {...getFixture('surface-a-specific-users')} />);
    await user.type(screen.getByLabelText('Share With'), 'random text');
    await user.click(screen.getByRole('button', { name: 'Share' }));
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
