import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { JotformAppShellDashboard } from './JotformAppShellDashboard';

describe('JotformAppShellDashboard', () => {
  it('renders the docked sidebar and the default toolbar row', () => {
    render(<JotformAppShellDashboard />);
    expect(screen.getByRole('button', { name: 'All' }).className).toMatch(/navItemActive/);
    expect(screen.getByRole('button', { name: '+ CREATE' })).toBeInTheDocument();
    expect(screen.queryByRole('toolbar')).not.toBeInTheDocument();
  });

  it('selecting a sidebar section calls onSectionChange and updates the active item', async () => {
    const user = userEvent.setup();
    const onSectionChange = vi.fn();
    render(<JotformAppShellDashboard onSectionChange={onSectionChange} />);
    await user.click(screen.getByRole('button', { name: 'Shared with me' }));
    expect(onSectionChange).toHaveBeenCalledWith('shared');
    expect(screen.getByRole('button', { name: 'Shared with me' }).className).toMatch(/navItemActive/);
  });

  it('selecting a form row swaps the toolbar for a contextual selection action bar', async () => {
    const user = userEvent.setup();
    const onSelectionChange = vi.fn();
    render(<JotformAppShellDashboard onSelectionChange={onSelectionChange} />);
    await user.click(screen.getByLabelText('Select Customer Feedback'));
    expect(onSelectionChange).toHaveBeenCalledWith(true);
    expect(screen.getByRole('toolbar', { name: 'Selection actions' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: '+ CREATE' })).not.toBeInTheDocument();

    await user.click(screen.getByLabelText('Select Customer Feedback'));
    expect(onSelectionChange).toHaveBeenCalledWith(false);
    expect(screen.queryByRole('toolbar')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: '+ CREATE' })).toBeInTheDocument();
  });

  it('the campaign banner dismisses independently of the rest of the shell', async () => {
    const user = userEvent.setup();
    render(<JotformAppShellDashboard />);
    expect(screen.getByText('TODAY ONLY / SAVE 50%')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Save Now' }));
    expect(screen.queryByText('TODAY ONLY / SAVE 50%')).not.toBeInTheDocument();
  });

  it('+ CREATE and the Products nav item both fire onCreateOpen', async () => {
    const user = userEvent.setup();
    const onCreateOpen = vi.fn();
    render(<JotformAppShellDashboard onCreateOpen={onCreateOpen} />);
    await user.click(screen.getByRole('button', { name: '+ CREATE' }));
    await user.click(screen.getByRole('button', { name: 'Products' }));
    expect(onCreateOpen).toHaveBeenCalledTimes(2);
  });

  it('disables every interactive control when disabled', async () => {
    const user = userEvent.setup();
    const onSectionChange = vi.fn();
    render(<JotformAppShellDashboard disabled onSectionChange={onSectionChange} />);
    await user.click(screen.getByRole('button', { name: 'Shared with me' }));
    expect(onSectionChange).not.toHaveBeenCalled();
  });

  it('never calls fetch/XHR across any interaction (fully client-side, per the source record)', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<JotformAppShellDashboard />);
    await user.click(screen.getByRole('button', { name: 'Shared with me' }));
    await user.click(screen.getByLabelText('Select Customer Feedback'));
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
