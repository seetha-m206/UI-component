import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GoogleFormsAppShell } from './GoogleFormsAppShell';

describe('GoogleFormsAppShell', () => {
  it('renders the dashboard by default with no sidebar and a hamburger-triggered overlay drawer', async () => {
    const user = userEvent.setup();
    render(<GoogleFormsAppShell />);

    expect(screen.getByText('Recent forms')).toBeInTheDocument();
    expect(screen.queryByRole('menu', { name: 'Main menu' })).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Main menu' }));
    expect(screen.getByRole('menu', { name: 'Main menu' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Forms' })).toBeInTheDocument();
  });

  it('closes the overlay drawer on Escape', async () => {
    const user = userEvent.setup();
    render(<GoogleFormsAppShell />);
    await user.click(screen.getByRole('button', { name: 'Main menu' }));
    const drawer = screen.getByRole('menu', { name: 'Main menu' });
    drawer.focus();
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('menu', { name: 'Main menu' })).not.toBeInTheDocument();
  });

  it('navigates from the dashboard into the builder and calls onScreenChange', async () => {
    const user = userEvent.setup();
    const onScreenChange = vi.fn();
    render(<GoogleFormsAppShell onScreenChange={onScreenChange} />);
    await user.click(screen.getByRole('button', { name: 'Customer Feedback' }));
    expect(onScreenChange).toHaveBeenCalledWith('builder');
    expect(screen.getByRole('tab', { name: 'Questions' })).toBeInTheDocument();
  });

  it("shows 'Total points: 0' identically across every builder tab (confirmed not tab-conditional)", async () => {
    const user = userEvent.setup();
    render(<GoogleFormsAppShell initialScreen="builder" />);
    expect(screen.getByText('Total points: 0')).toBeInTheDocument();
    await user.click(screen.getByRole('tab', { name: 'Settings' }));
    expect(screen.getByText('Total points: 0')).toBeInTheDocument();
    await user.click(screen.getByRole('tab', { name: /Responses/ }));
    expect(screen.getByText('Total points: 0')).toBeInTheDocument();
  });

  it('switches the builder tab body on click and calls onTabChange', async () => {
    const user = userEvent.setup();
    const onTabChange = vi.fn();
    render(<GoogleFormsAppShell initialScreen="builder" onTabChange={onTabChange} />);
    expect(screen.getByTestId('builder-canvas')).toBeInTheDocument();

    await user.click(screen.getByRole('tab', { name: /Responses/ }));
    expect(onTabChange).toHaveBeenCalledWith('responses');
    expect(screen.getByText('5 responses')).toBeInTheDocument();

    await user.click(screen.getByRole('tab', { name: 'Settings' }));
    expect(onTabChange).toHaveBeenCalledWith('settings');
  });

  it('shows the response-count badge on the Responses tab', () => {
    render(<GoogleFormsAppShell initialScreen="builder" />);
    const responsesTab = screen.getByRole('tab', { name: /Responses/ });
    expect(responsesTab).toHaveTextContent('5');
  });

  it('shows the unpublished banner only when the form is unpublished, and toggling the pill flips it', async () => {
    const user = userEvent.setup();
    const onPublishedChange = vi.fn();
    render(
      <GoogleFormsAppShell initialScreen="builder" initialPublished onPublishedChange={onPublishedChange} />
    );
    expect(screen.queryByRole('status')).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Published' }));
    expect(onPublishedChange).toHaveBeenCalledWith(false);
    expect(screen.getByRole('status')).toHaveTextContent(/isn't accepting responses/);

    await user.click(screen.getByRole('button', { name: 'Unpublished' }));
    expect(onPublishedChange).toHaveBeenCalledWith(true);
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('the banner\'s "Manage" link also republishes the form', async () => {
    const user = userEvent.setup();
    render(<GoogleFormsAppShell initialScreen="builder" initialPublished={false} />);
    expect(screen.getByRole('status')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Manage' }));
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('returns to the dashboard via the "Forms Home" control in the builder', async () => {
    const user = userEvent.setup();
    render(<GoogleFormsAppShell initialScreen="builder" />);
    await user.click(screen.getByRole('button', { name: 'Forms Home' }));
    expect(screen.getByText('Recent forms')).toBeInTheDocument();
  });

  it('disables every interactive control when disabled', async () => {
    const user = userEvent.setup();
    const onScreenChange = vi.fn();
    render(<GoogleFormsAppShell disabled onScreenChange={onScreenChange} />);
    await user.click(screen.getByRole('button', { name: 'Main menu' }));
    expect(screen.queryByRole('menu', { name: 'Main menu' })).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Customer Feedback' }));
    expect(onScreenChange).not.toHaveBeenCalled();
  });

  it('never calls fetch/XHR across screen navigation, tab switches, and publish toggling', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<GoogleFormsAppShell initialScreen="dashboard" />);
    await user.click(screen.getByRole('button', { name: 'Customer Feedback' }));
    await user.click(screen.getByRole('tab', { name: /Responses/ }));
    await user.click(screen.getByRole('button', { name: 'Published' }));
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
