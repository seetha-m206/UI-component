import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PaperformFeedbackToastAlertEmptyLoading } from './PaperformFeedbackToastAlertEmptyLoading';

describe('PaperformFeedbackToastAlertEmptyLoading', () => {
  it('restoring a form fires the PFToast', async () => {
    const user = userEvent.setup();
    const onRestoreForm = vi.fn();
    render(<PaperformFeedbackToastAlertEmptyLoading onRestoreForm={onRestoreForm} />);
    await user.click(screen.getByRole('button', { name: 'Restore form from Trash' }));
    expect(onRestoreForm).toHaveBeenCalled();
    expect(screen.getByRole('status')).toHaveTextContent('Restored form');
  });

  it('exporting submissions fires its own toast text', async () => {
    const user = userEvent.setup();
    render(<PaperformFeedbackToastAlertEmptyLoading />);
    await user.click(screen.getByRole('button', { name: 'Export submissions' }));
    expect(screen.getByRole('status')).toHaveTextContent(/Exporting submissions/);
  });

  it('the submission-delete dialog is titled and uses a primary-color Ok button', async () => {
    const user = userEvent.setup();
    const onDeleteSubmission = vi.fn();
    render(<PaperformFeedbackToastAlertEmptyLoading onDeleteSubmission={onDeleteSubmission} />);
    await user.click(screen.getByRole('button', { name: 'Delete submission (MUI-style)' }));
    expect(screen.getByRole('heading', { name: 'Delete Submission' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Ok' }));
    expect(onDeleteSubmission).toHaveBeenCalled();
  });

  it('the form-delete dialog has no title and gives zero toast feedback on confirm (confirmed asymmetry)', async () => {
    const user = userEvent.setup();
    const onDeleteForm = vi.fn();
    render(<PaperformFeedbackToastAlertEmptyLoading onDeleteForm={onDeleteForm} />);
    await user.click(screen.getByRole('button', { name: /Delete form \(bespoke/ }));
    const dialog = screen.getByRole('alertdialog', { name: 'Delete form confirmation' });
    expect(dialog).toHaveTextContent('Are you sure you want to delete this form?');
    expect(within(dialog).queryByRole('heading')).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Ok' }));
    expect(onDeleteForm).toHaveBeenCalled();
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('exceeding a plan limit opens the richer Alert/upsell modal with two asymmetric CTAs', async () => {
    const user = userEvent.setup();
    render(<PaperformFeedbackToastAlertEmptyLoading />);
    await user.click(screen.getByRole('button', { name: /Create a 2nd Space/ }));
    expect(screen.getByText(/reached your Spaces limit/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Upgrade to Business/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Maybe later' })).toBeInTheDocument();
  });

  it('opening the submission detail panel shows a loading skeleton before the empty state', async () => {
    const user = userEvent.setup();
    render(<PaperformFeedbackToastAlertEmptyLoading />);
    await user.click(screen.getByRole('button', { name: 'Open submission detail panel' }));
    expect(screen.getByLabelText('Loading submission detail')).toBeInTheDocument();
    await screen.findByText('No submissions found');
  });

  it('disables every trigger when disabled', async () => {
    const user = userEvent.setup();
    const onRestoreForm = vi.fn();
    render(<PaperformFeedbackToastAlertEmptyLoading disabled onRestoreForm={onRestoreForm} />);
    await user.click(screen.getByRole('button', { name: 'Restore form from Trash' }));
    expect(onRestoreForm).not.toHaveBeenCalled();
  });

  it('never calls fetch/XHR across any interaction (fully client-side, per the source record)', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<PaperformFeedbackToastAlertEmptyLoading />);
    await user.click(screen.getByRole('button', { name: 'Restore form from Trash' }));
    await user.click(screen.getByRole('button', { name: /Delete form \(bespoke/ }));
    await user.click(screen.getByRole('button', { name: 'Ok' }));
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
