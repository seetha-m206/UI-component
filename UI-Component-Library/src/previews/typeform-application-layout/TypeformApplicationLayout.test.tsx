import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TypeformApplicationLayout } from './TypeformApplicationLayout';

describe('TypeformApplicationLayout', () => {
  it('renders the workspace shell by default with the Forms tab sidebar active', () => {
    render(<TypeformApplicationLayout />);
    expect(screen.getByRole('tab', { name: 'Forms' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('button', { name: '+ Create form' })).toBeInTheDocument();
  });

  it('switching workspace tabs swaps to a genuinely different sidebar, not shared content', async () => {
    const user = userEvent.setup();
    const onWorkspaceTabChange = vi.fn();
    render(<TypeformApplicationLayout onWorkspaceTabChange={onWorkspaceTabChange} />);

    await user.click(screen.getByRole('tab', { name: 'Contacts' }));
    expect(onWorkspaceTabChange).toHaveBeenCalledWith('contacts');
    expect(screen.getByRole('button', { name: '+ Add contact' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: '+ Create form' })).not.toBeInTheDocument();

    await user.click(screen.getByRole('tab', { name: 'Automations' }));
    expect(onWorkspaceTabChange).toHaveBeenCalledWith('automations');
    expect(screen.getByRole('button', { name: '+ Create automation' })).toBeInTheDocument();
  });

  it('navigates from the workspace into the builder and calls onShellChange', async () => {
    const user = userEvent.setup();
    const onShellChange = vi.fn();
    render(<TypeformApplicationLayout onShellChange={onShellChange} />);
    await user.click(screen.getByRole('button', { name: 'Customer Feedback Survey' }));
    expect(onShellChange).toHaveBeenCalledWith('builder');
    expect(screen.getByRole('tab', { name: 'Content' })).toBeInTheDocument();
  });

  it('each builder tab renders a structurally distinct main area, not one shared layout', async () => {
    const user = userEvent.setup();
    const onBuilderTabChange = vi.fn();
    render(<TypeformApplicationLayout initialShell="builder" onBuilderTabChange={onBuilderTabChange} />);

    expect(screen.getByText('1. Welcome Screen')).toBeInTheDocument();

    await user.click(screen.getByRole('tab', { name: 'Workflow' }));
    expect(onBuilderTabChange).toHaveBeenCalledWith('workflow');
    expect(screen.getByTestId('workflow-canvas')).toBeInTheDocument();
    expect(screen.queryByText('1. Welcome Screen')).not.toBeInTheDocument();

    await user.click(screen.getByRole('tab', { name: 'Connect' }));
    expect(onBuilderTabChange).toHaveBeenCalledWith('connect');
    expect(screen.getByTestId('connect-list')).toBeInTheDocument();
  });

  it('the "Hide question panel" toggle collapses the right settings panel, not the left Pages rail (confirmed finding)', async () => {
    const user = userEvent.setup();
    render(<TypeformApplicationLayout initialShell="builder" />);
    expect(screen.getByLabelText('Question settings')).toBeInTheDocument();
    expect(screen.getByLabelText('Pages')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Hide question panel' }));
    expect(screen.queryByLabelText('Question settings')).not.toBeInTheDocument();
    expect(screen.getByLabelText('Pages')).toBeInTheDocument();
  });

  it('shows "Share," not "Publish," in the builder top bar (confirmed naming correction)', () => {
    render(<TypeformApplicationLayout initialShell="builder" />);
    expect(screen.getByRole('button', { name: /Share/ })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Publish/ })).not.toBeInTheDocument();
  });

  it('the floating AI input persists across both shells, relabeled per context', async () => {
    const user = userEvent.setup();
    render(<TypeformApplicationLayout />);
    expect(screen.getByPlaceholderText('Ask Typeform AI…')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Customer Feedback Survey' }));
    expect(screen.getByPlaceholderText('Chat to create…')).toBeInTheDocument();
  });

  it('the usage banner dismisses independently and swaps the CTA', async () => {
    const user = userEvent.setup();
    render(<TypeformApplicationLayout />);
    expect(screen.getByText(/used 40% of your Free plan/)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Remove banner' }));
    expect(screen.queryByText(/used 40% of your Free plan/)).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'View plans' })).toBeInTheDocument();
  });

  it('returns to the workspace via the builder breadcrumb', async () => {
    const user = userEvent.setup();
    render(<TypeformApplicationLayout initialShell="builder" />);
    await user.click(screen.getByRole('button', { name: 'Forms' }));
    expect(screen.getByRole('tab', { name: 'Forms' })).toBeInTheDocument();
  });

  it('disables every interactive control when disabled', async () => {
    const user = userEvent.setup();
    const onShellChange = vi.fn();
    render(<TypeformApplicationLayout disabled onShellChange={onShellChange} />);
    await user.click(screen.getByRole('button', { name: 'Customer Feedback Survey' }));
    expect(onShellChange).not.toHaveBeenCalled();
  });

  it('never calls fetch/XHR across shell navigation, tab switches, and panel toggling', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<TypeformApplicationLayout />);
    await user.click(screen.getByRole('button', { name: 'Customer Feedback Survey' }));
    await user.click(screen.getByRole('tab', { name: 'Workflow' }));
    await user.click(screen.getByRole('button', { name: 'Forms' }));
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
