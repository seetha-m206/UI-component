import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PaperformSignaturePapersign } from './PaperformSignaturePapersign';

describe('PaperformSignaturePapersign', () => {
  it('renders the Signature Field tab by default with an empty canvas', () => {
    render(<PaperformSignaturePapersign />);
    expect(screen.getByText('SIGN HERE')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Simulate: draw a stroke' })).toBeInTheDocument();
  });

  it('Submit with nothing drawn is blocked: shows "This question is required" and relabels the button', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    render(<PaperformSignaturePapersign onSubmit={onSubmit} />);
    await user.click(screen.getByRole('button', { name: /Submit/ }));
    expect(screen.getByRole('alert')).toHaveTextContent('This question is required');
    expect(
      screen.getByRole('button', { name: 'Please finish the form — $20.00' }),
    ).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('drawing a stroke reveals the CONFIRM SIGNATURE footer with clear and confirm controls', async () => {
    const user = userEvent.setup();
    render(<PaperformSignaturePapersign />);
    await user.click(screen.getByRole('button', { name: 'Simulate: draw a stroke' }));
    expect(screen.getByText('CONFIRM SIGNATURE')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Clear signature' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Confirm signature' })).toBeInTheDocument();
  });

  it(
    'confirming shows a transient "still uploading" state, then settles into the confirmed redraw state and clears the required error, allowing Submit',
    async () => {
      const user = userEvent.setup();
      const onSubmit = vi.fn();
      render(<PaperformSignaturePapersign onSubmit={onSubmit} />);

      await user.click(screen.getByRole('button', { name: 'Simulate: draw a stroke' }));
      await user.click(screen.getByRole('button', { name: 'Confirm signature' }));
      expect(screen.getByRole('status')).toHaveTextContent('Signature still uploading…');

      const redrawButton = await screen.findByRole(
        'button',
        { name: 'Redraw signature' },
        { timeout: 3000 },
      );
      expect(redrawButton).toBeInTheDocument();
      expect(screen.queryByRole('status')).not.toBeInTheDocument();

      await user.click(screen.getByRole('button', { name: 'Submit — $20.00' }));
      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    },
    10000,
  );

  it('Papersign Hand-off: starts empty with "New document +", then reveals field mapping', async () => {
    const user = userEvent.setup();
    render(<PaperformSignaturePapersign initialTab="papersign-handoff" />);
    expect(
      screen.getByText('Send a document to be signed automatically from new submissions'),
    ).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'New document +' }));
    expect(screen.getByLabelText('Signer 1 Name mapping')).toBeInTheDocument();
    expect(screen.getByLabelText('Signer 1 Email mapping')).toBeInTheDocument();
  });

  it('Send Test shows the confirmed "no sandbox/dry-run" warning callout instead of performing a real send', async () => {
    const user = userEvent.setup();
    render(<PaperformSignaturePapersign initialTab="papersign-handoff" />);
    await user.click(screen.getByRole('button', { name: 'New document +' }));
    await user.click(screen.getByRole('button', { name: 'Send Test' }));
    const warning = screen.getByRole('alert');
    expect(warning).toHaveTextContent(/NOT a sandbox\/dry-run/);
    expect(warning).toHaveTextContent(
      /You must have submitted the form to be able to test/,
    );
    expect(warning).toHaveTextContent(/there is no non-live test mode/);
  });

  it('shows the confirmed "no status feedback loop back into Submissions" note', () => {
    render(<PaperformSignaturePapersign initialTab="papersign-handoff" />);
    expect(
      screen.getByText(/no link out to Papersign/),
    ).toBeInTheDocument();
  });
});
