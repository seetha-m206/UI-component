import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GoogleFormsFeedbackPatterns } from './GoogleFormsFeedbackPatterns';

describe('GoogleFormsFeedbackPatterns', () => {
  it('cycles the save-status line through Saving… to All changes saved in Drive', async () => {
    const user = userEvent.setup();
    render(<GoogleFormsFeedbackPatterns />);
    await user.click(screen.getByRole('button', { name: 'Edit a field' }));
    expect(screen.getByText('Saving…')).toBeInTheDocument();
    await screen.findByText('All changes saved in Drive');
  });

  it('deleting a single question skips the modal entirely and shows an UNDO toast', async () => {
    const user = userEvent.setup();
    const onDeleteQuestion = vi.fn();
    render(<GoogleFormsFeedbackPatterns onDeleteQuestion={onDeleteQuestion} />);
    await user.click(screen.getByRole('button', { name: /Delete question/ }));
    expect(onDeleteQuestion).toHaveBeenCalled();
    expect(screen.getByText('Item deleted')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'UNDO' })).toBeInTheDocument();
    expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument();
  });

  it('deleting the whole form opens a confirmation modal before toasting', async () => {
    const user = userEvent.setup();
    const onDeleteForm = vi.fn();
    render(<GoogleFormsFeedbackPatterns onDeleteForm={onDeleteForm} />);
    await user.click(screen.getByRole('button', { name: 'Delete form (dashboard)' }));
    expect(screen.getByRole('heading', { name: 'Move to trash?' })).toBeInTheDocument();
    expect(onDeleteForm).not.toHaveBeenCalled();

    await user.click(screen.getByRole('button', { name: 'Move to trash' }));
    expect(onDeleteForm).toHaveBeenCalled();
    expect(screen.getByText('Moved to trash')).toBeInTheDocument();
  });

  it('deleting a section also opens a confirmation modal', async () => {
    const user = userEvent.setup();
    render(<GoogleFormsFeedbackPatterns />);
    await user.click(screen.getByRole('button', { name: 'Delete section' }));
    expect(screen.getByRole('heading', { name: 'Delete questions and section?' })).toBeInTheDocument();
  });

  it('submitting a blank required question shows a role="alert" inline error', async () => {
    const user = userEvent.setup();
    render(<GoogleFormsFeedbackPatterns />);
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Submit blank required question' }));
    expect(screen.getByRole('alert')).toHaveTextContent('This is a required question');
  });

  it('opening Responses shows a loading spinner before the empty state', async () => {
    const user = userEvent.setup();
    render(<GoogleFormsFeedbackPatterns />);
    await user.click(screen.getByRole('button', { name: 'Open Responses tab (0 responses)' }));
    expect(screen.getByText('Loading responses…')).toBeInTheDocument();
    await screen.findByText(/No responses\. Publish your form/);
  });

  it('unlinking the form gives no toast or banner — only a silent label swap', async () => {
    const user = userEvent.setup();
    const onUnlinkForm = vi.fn();
    render(<GoogleFormsFeedbackPatterns onUnlinkForm={onUnlinkForm} />);
    expect(screen.getByText(/View in Sheets/)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /Unlink form/ }));
    expect(onUnlinkForm).toHaveBeenCalled();
    expect(screen.getByText(/Link to Sheets/)).toBeInTheDocument();
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('disables every trigger when disabled', async () => {
    const user = userEvent.setup();
    const onDeleteQuestion = vi.fn();
    render(<GoogleFormsFeedbackPatterns disabled onDeleteQuestion={onDeleteQuestion} />);
    await user.click(screen.getByRole('button', { name: /Delete question/ }));
    expect(onDeleteQuestion).not.toHaveBeenCalled();
  });

  it('never calls fetch/XHR across any interaction (fully client-side, per the source record)', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<GoogleFormsFeedbackPatterns />);
    await user.click(screen.getByRole('button', { name: /Delete question/ }));
    await user.click(screen.getByRole('button', { name: 'Delete form (dashboard)' }));
    await user.click(screen.getByRole('button', { name: 'Move to trash' }));
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
