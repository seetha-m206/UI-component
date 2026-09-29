import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PaperformSubmissionsResultsView } from './PaperformSubmissionsResultsView';

describe('PaperformSubmissionsResultsView', () => {
  it('renders the real populated submission row by default (PF9)', () => {
    render(<PaperformSubmissionsResultsView reproduceDuplicateFetch={false} />);
    expect(screen.getByRole('tab', { name: 'Submissions', selected: true })).toBeInTheDocument();
    expect(screen.getByText('22.00')).toBeInTheDocument();
    expect(screen.queryByText('No Submissions')).not.toBeInTheDocument();
  });

  it('expanding the submission row shows the Total Charged card with no unpaid indicator, and the confirmed IP/device metadata', async () => {
    const user = userEvent.setup();
    render(<PaperformSubmissionsResultsView reproduceDuplicateFetch={false} />);
    await user.click(screen.getByRole('button', { name: /test@example.com/ }));
    expect(screen.getByText(/Total Charged: 22.00/)).toBeInTheDocument();
    expect(screen.getByText(/no unpaid indicator shown/)).toBeInTheDocument();
    expect(screen.getByText(/IP Address/)).toBeInTheDocument();
  });

  it('the PDFs menu offers the two confirmed real options', async () => {
    const user = userEvent.setup();
    render(<PaperformSubmissionsResultsView reproduceDuplicateFetch={false} />);
    await user.click(screen.getByRole('button', { name: '⋮' }));
    expect(screen.getByRole('menuitem', { name: 'Download PDF summary' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Submission Results' })).toBeInTheDocument();
  });

  it('falls back to the original PF8 blocked-submission empty state when hasCompletedSubmission is false', () => {
    render(<PaperformSubmissionsResultsView reproduceDuplicateFetch={false} hasCompletedSubmission={false} />);
    expect(screen.getByText('No Submissions')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit test response/ })).toBeInTheDocument();
  });

  it('clicking the demo submit button on the blocked fixture shows the confirmed 400 email-verification block', async () => {
    const user = userEvent.setup();
    const onSubmitAttempt = vi.fn();
    render(
      <PaperformSubmissionsResultsView
        reproduceDuplicateFetch={false}
        hasCompletedSubmission={false}
        onSubmitAttempt={onSubmitAttempt}
      />
    );
    await user.click(screen.getByRole('button', { name: /Submit test response/ }));
    expect(onSubmitAttempt).toHaveBeenCalledTimes(1);
    expect(
      screen.getByText(/Forms can't be submitted until the owner's email address has been verified/)
    ).toBeInTheDocument();
  });

  it('logs the confirmed duplicate GET .../submissions call on mount, naming the editor Results panel', async () => {
    render(<PaperformSubmissionsResultsView />);
    expect(await screen.findByText(/duplicate — same params/)).toBeInTheDocument();
    expect(screen.getAllByText(/editor Results panel/).length).toBeGreaterThan(0);
  });

  it('Export All shows a toast confirming CSV-only delivery via a signed-URL click', async () => {
    const user = userEvent.setup();
    const onExportClick = vi.fn();
    render(<PaperformSubmissionsResultsView reproduceDuplicateFetch={false} onExportClick={onExportClick} />);
    await user.click(screen.getByRole('button', { name: 'Export All' }));
    expect(onExportClick).toHaveBeenCalledTimes(1);
    expect(screen.getByText(/confirmed CSV only, delivered via a signed-URL click/)).toBeInTheDocument();
  });

  it('switching to Partial Submissions and expanding a row shows the Last-answered bug and live Calculation total', async () => {
    const user = userEvent.setup();
    render(<PaperformSubmissionsResultsView reproduceDuplicateFetch={false} />);
    await user.click(screen.getByRole('tab', { name: 'Partial Submissions' }));
    expect(screen.getByText('Q1', { selector: 'td' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: '▸' }));
    expect(screen.getByText('21.6')).toBeInTheDocument();
    expect(screen.getByText('dlf3j × 1')).toBeInTheDocument();
  });

  it('Products tab shows stock allocated by the completed submission (3/2/1), with a Reset control', async () => {
    const user = userEvent.setup();
    render(<PaperformSubmissionsResultsView reproduceDuplicateFetch={false} />);
    await user.click(screen.getByRole('tab', { name: 'Products' }));
    expect(screen.getByRole('cell', { name: 'Test Mug' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeInTheDocument();
  });

  it('Products tab shows unallocated stock (3/3/0) when hasCompletedSubmission is false, matching PF8', async () => {
    const user = userEvent.setup();
    render(<PaperformSubmissionsResultsView reproduceDuplicateFetch={false} hasCompletedSubmission={false} />);
    await user.click(screen.getByRole('tab', { name: 'Products' }));
    expect(screen.queryByRole('button', { name: 'Reset' })).not.toBeInTheDocument();
  });

  it('Reports tab lets you add condition rules to the Segments query builder', async () => {
    const user = userEvent.setup();
    render(<PaperformSubmissionsResultsView reproduceDuplicateFetch={false} />);
    await user.click(screen.getByRole('tab', { name: 'Reports' }));
    expect(screen.queryByLabelText('Question')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: '+ Add Rule' }));
    expect(screen.getByLabelText('Question')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: '+ Add Rule' }));
    expect(screen.getByText('And')).toBeInTheDocument();
  });
});
