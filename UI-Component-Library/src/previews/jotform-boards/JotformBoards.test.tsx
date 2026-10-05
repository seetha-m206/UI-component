import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { JotformBoards } from './JotformBoards';

describe('JotformBoards', () => {
  it('shows all 4 named columns on the generic board ("+ CREATE" path)', () => {
    render(<JotformBoards initialMode="create" />);
    expect(screen.getByRole('heading', { name: 'Untitled Board' })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: 'Backlog' })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: 'Waiting' })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: 'In Progress' })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: 'Done' })).toBeInTheDocument();
  });

  it('shows demo task cards with a date chip and avatar placeholder on the generic board', () => {
    render(<JotformBoards initialMode="create" />);
    const backlog = screen.getByRole('region', { name: 'Backlog' });
    expect(within(backlog).getByText('Create new tasks on your board')).toBeInTheDocument();
    expect(within(backlog).getByText('Oct 5')).toBeInTheDocument();
  });

  it('shows exactly 1 column named "Completed" plus a "0 runs" counter on the workflow-scoped board', () => {
    render(<JotformBoards initialMode="workflow" />);
    expect(screen.getByRole('heading', { name: 'Workflow Board' })).toBeInTheDocument();
    expect(screen.getAllByRole('region')).toHaveLength(1);
    expect(screen.getByRole('region', { name: 'Completed' })).toBeInTheDocument();
    expect(screen.getByText('0 runs')).toBeInTheDocument();
  });

  it('renders no task cards on the workflow-scoped board', () => {
    render(<JotformBoards initialMode="workflow" />);
    const completed = screen.getByRole('region', { name: 'Completed' });
    expect(within(completed).queryByRole('list')).not.toBeInTheDocument();
    expect(within(completed).getByText('No runs yet')).toBeInTheDocument();
  });

  it('defaults to the generic "+ CREATE" board when no initialMode is given', () => {
    render(<JotformBoards />);
    expect(screen.getByRole('heading', { name: 'Untitled Board' })).toBeInTheDocument();
  });

  it('switching the mode toggle swaps the displayed structure from generic to workflow-scoped', async () => {
    const user = userEvent.setup();
    render(<JotformBoards initialMode="create" />);

    expect(screen.getByRole('heading', { name: 'Untitled Board' })).toBeInTheDocument();
    expect(screen.getAllByRole('region')).toHaveLength(4);

    const workflowToggle = screen.getByRole('radio', {
      name: 'Open via Workflow mode-switcher (workflow-scoped board)',
    });
    await user.click(workflowToggle);

    expect(screen.getByRole('heading', { name: 'Workflow Board' })).toBeInTheDocument();
    expect(screen.getAllByRole('region')).toHaveLength(1);
    expect(screen.getByRole('region', { name: 'Completed' })).toBeInTheDocument();
    expect(screen.getByText('0 runs')).toBeInTheDocument();
  });

  it('switching the mode toggle swaps the displayed structure from workflow-scoped back to generic', async () => {
    const user = userEvent.setup();
    render(<JotformBoards initialMode="workflow" />);

    expect(screen.getByRole('heading', { name: 'Workflow Board' })).toBeInTheDocument();

    const createToggle = screen.getByRole('radio', {
      name: 'Open via + CREATE (generic board)',
    });
    await user.click(createToggle);

    expect(screen.getByRole('heading', { name: 'Untitled Board' })).toBeInTheDocument();
    expect(screen.getAllByRole('region')).toHaveLength(4);
    expect(screen.queryByText('0 runs')).not.toBeInTheDocument();
  });

  it('the mode toggle is keyboard operable', async () => {
    const user = userEvent.setup();
    render(<JotformBoards initialMode="create" />);

    const createToggle = screen.getByRole('radio', {
      name: 'Open via + CREATE (generic board)',
    });
    const workflowToggle = screen.getByRole('radio', {
      name: 'Open via Workflow mode-switcher (workflow-scoped board)',
    });

    createToggle.focus();
    expect(createToggle).toHaveFocus();

    await user.tab();
    expect(workflowToggle).toHaveFocus();

    await user.keyboard('{Enter}');
    expect(screen.getByRole('heading', { name: 'Workflow Board' })).toBeInTheDocument();
  });
});
