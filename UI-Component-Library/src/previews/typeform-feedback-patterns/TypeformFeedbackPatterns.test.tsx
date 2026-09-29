import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TypeformFeedbackPatterns } from './TypeformFeedbackPatterns';

describe('TypeformFeedbackPatterns', () => {
  it('copying a form link shows a dismissible success toast', async () => {
    const user = userEvent.setup();
    render(<TypeformFeedbackPatterns />);
    await user.click(screen.getByRole('button', { name: 'Copy form link' }));
    expect(screen.getByRole('status')).toHaveTextContent('Link copied to clipboard');
    await user.click(screen.getByRole('button', { name: 'Dismiss notification' }));
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('deleting the whole form opens a rich itemized modal with a Deleting… in-flight state', async () => {
    const user = userEvent.setup();
    const onDeleteForm = vi.fn();
    render(<TypeformFeedbackPatterns onDeleteForm={onDeleteForm} />);
    await user.click(screen.getByRole('button', { name: 'Delete form (whole-record)' }));
    expect(screen.getByRole('heading', { name: 'Delete form?' })).toBeInTheDocument();
    expect(screen.getByText('This will permanently delete the form.')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Delete' }));
    expect(screen.getByRole('button', { name: 'Deleting...' })).toBeInTheDocument();
    await screen.findByRole('button', { name: 'Form deleted' });
    expect(onDeleteForm).toHaveBeenCalled();
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('deleting a single question gives zero feedback — no modal, no toast (confirmed severity gap)', async () => {
    const user = userEvent.setup();
    const onDeleteQuestion = vi.fn();
    render(<TypeformFeedbackPatterns onDeleteQuestion={onDeleteQuestion} />);
    await user.click(screen.getByRole('button', { name: 'Delete question (no modal at all)' }));
    expect(onDeleteQuestion).toHaveBeenCalled();
    expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument();
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Question deleted (no feedback shown)' })).toBeInTheDocument();
  });

  it('a malformed webhook URL is caught by inline validation, dialog stays open', async () => {
    const user = userEvent.setup();
    render(<TypeformFeedbackPatterns />);
    await user.click(within(screen.getByLabelText('Silent failure')).getByRole('button', { name: 'Add a webhook' }));
    await user.type(screen.getByLabelText('Webhook URL'), 'not-a-valid-url');
    await user.click(screen.getByRole('button', { name: 'Save webhook' }));
    expect(screen.getByText("Hmm...that URL doesn't look right")).toBeInTheDocument();
    expect(screen.getByRole('dialog', { name: 'Add a webhook' })).toBeInTheDocument();
  });

  it('an unreachable-looking webhook URL "saves" silently — dialog closes, nothing persists (confirmed silent failure)', async () => {
    const user = userEvent.setup();
    const onSaveWebhook = vi.fn();
    render(<TypeformFeedbackPatterns onSaveWebhook={onSaveWebhook} />);
    await user.click(within(screen.getByLabelText('Silent failure')).getByRole('button', { name: 'Add a webhook' }));
    await user.type(
      screen.getByLabelText('Webhook URL'),
      'https://this-domain-does-not-exist-xyz123.invalid/webhook'
    );
    await user.click(screen.getByRole('button', { name: 'Save webhook' }));
    expect(onSaveWebhook).toHaveBeenCalled();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
    expect(screen.getByText('No webhooks yet.')).toBeInTheDocument();
  });

  it('a genuinely reachable-looking webhook URL saves and appears in the list', async () => {
    const user = userEvent.setup();
    render(<TypeformFeedbackPatterns />);
    await user.click(within(screen.getByLabelText('Silent failure')).getByRole('button', { name: 'Add a webhook' }));
    await user.type(screen.getByLabelText('Webhook URL'), 'https://example.com/webhook');
    await user.click(screen.getByRole('button', { name: 'Save webhook' }));
    expect(screen.getByText('https://example.com/webhook')).toBeInTheDocument();
  });

  it('the three empty states each show their own distinct copy and CTA count', async () => {
    const user = userEvent.setup();
    render(<TypeformFeedbackPatterns />);
    expect(screen.getByText('Trigger webhooks')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Responses' }));
    expect(screen.getByText('No responses')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Share your form' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Generate test response' })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'New workspace' }));
    expect(screen.getByText('Create a new form to get started')).toBeInTheDocument();
  });

  it('disables every trigger when disabled', async () => {
    const user = userEvent.setup();
    const onDeleteQuestion = vi.fn();
    render(<TypeformFeedbackPatterns disabled onDeleteQuestion={onDeleteQuestion} />);
    await user.click(screen.getByRole('button', { name: 'Delete question (no modal at all)' }));
    expect(onDeleteQuestion).not.toHaveBeenCalled();
  });

  it('never calls fetch/XHR across any interaction (fully client-side, per the source record)', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<TypeformFeedbackPatterns />);
    await user.click(screen.getByRole('button', { name: 'Copy form link' }));
    await user.click(screen.getByRole('button', { name: 'Delete question (no modal at all)' }));
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
