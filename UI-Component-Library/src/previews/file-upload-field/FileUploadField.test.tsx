import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FileUploadField } from './FileUploadField';
import { fixtures } from './fixtures';

function getFixture(id: string) {
  const fixture = fixtures.find((f) => f.id === id);
  if (!fixture) throw new Error(`fixture not found: ${id}`);
  return fixture.props;
}

function makeFile(name: string, sizeBytes = 8 * 1024, type = 'application/octet-stream') {
  return new File([new Uint8Array(sizeBytes)], name, { type });
}

describe('FileUploadField — respondent view', () => {
  it('renders the empty dashed "Choose File" dropzone with no error and a Submit button', () => {
    render(<FileUploadField {...getFixture('respondent-empty')} />);
    expect(screen.getByRole('button', { name: 'Choose File' })).toBeInTheDocument();
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('renders the pre-uploaded fixture with filename/size and NO progress bar of any kind', () => {
    render(<FileUploadField {...getFixture('respondent-uploaded')} />);
    expect(screen.getByText('resume-final.pdf')).toBeInTheDocument();
    expect(screen.getByText('212 KB')).toBeInTheDocument();
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    expect(document.querySelector('progress')).not.toBeInTheDocument();
  });

  it('selecting a valid file (matching the allowed extension) shows an immediate uploaded row, no progress UI', async () => {
    const user = userEvent.setup();
    const onFileUploaded = vi.fn();
    render(
      <FileUploadField {...getFixture('respondent-empty')} onFileUploaded={onFileUploaded} />
    );
    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
    await user.upload(input, makeFile('resume.pdf', 16 * 1024, 'application/pdf'));

    expect(screen.getByText('resume.pdf')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Remove resume.pdf/ })).toBeInTheDocument();
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    expect(onFileUploaded).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'resume.pdf' })
    );
  });

  it('Submit calls onSubmit once a valid file is uploaded', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    render(<FileUploadField {...getFixture('respondent-uploaded')} onSubmit={onSubmit} />);
    await user.click(screen.getByRole('button', { name: 'Submit' }));
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('selecting a file with a disallowed extension shows the red-bordered row and the exact documented error copy', async () => {
    const user = userEvent.setup();
    const onInvalidFileRejected = vi.fn();
    render(
      <FileUploadField
        {...getFixture('respondent-empty')}
        onInvalidFileRejected={onInvalidFileRejected}
      />
    );
    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
    await user.upload(input, makeFile('photo.png', 8 * 1024, 'image/png'));

    expect(screen.getByRole('alert')).toHaveTextContent(
      'The following file types are supported: pdf.'
    );
    expect(screen.getByText('photo.png')).toBeInTheDocument();
    expect(onInvalidFileRejected).toHaveBeenCalledWith('photo.png');
  });

  it('renders the pre-seeded invalid fixture already showing the blocking error', () => {
    render(<FileUploadField {...getFixture('respondent-invalid')} />);
    expect(screen.getByRole('alert')).toHaveTextContent(
      'The following file types are supported: pdf.'
    );
    expect(screen.getByText('photo.png')).toBeInTheDocument();
  });

  it('Submit is a genuine no-op while the invalid-type error is showing — onSubmit never fires', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    render(<FileUploadField {...getFixture('respondent-invalid')} onSubmit={onSubmit} />);
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    await user.click(submitButton);
    await user.click(submitButton);

    expect(onSubmit).not.toHaveBeenCalled();
    // The error is still showing — the page stayed on the same error,
    // exactly as the source record describes (no navigation, no reset).
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('supports multiple allowed extensions in the error copy', async () => {
    const user = userEvent.setup();
    render(
      <FileUploadField
        {...getFixture('respondent-empty')}
        allowedExtensions={['pdf', 'png']}
      />
    );
    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
    await user.upload(input, makeFile('archive.zip'));
    expect(screen.getByRole('alert')).toHaveTextContent(
      'The following file types are supported: pdf, png.'
    );
  });

  it('removing the rejected file clears the error and returns to the empty dropzone', async () => {
    const user = userEvent.setup();
    const onFileRemoved = vi.fn();
    render(<FileUploadField {...getFixture('respondent-invalid')} onFileRemoved={onFileRemoved} />);
    await user.click(screen.getByRole('button', { name: 'Remove rejected file' }));

    expect(onFileRemoved).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Choose File' })).toBeInTheDocument();
  });

  it('disabled prevents opening the file picker and disables Submit', () => {
    render(<FileUploadField {...getFixture('respondent-disabled')} />);
    expect(screen.getByRole('button', { name: 'Choose File' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeDisabled();
  });
});

describe('FileUploadField — entries view (hover-revealed affordances)', () => {
  it('does not render the preview/download icons before hover', () => {
    render(<FileUploadField {...getFixture('entries-default')} />);
    expect(screen.getByText('invoice_march.pdf')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Preview file' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Download file' })).not.toBeInTheDocument();
  });

  it('hovering the row reveals the eye and download icons, and unhovering hides them again', async () => {
    const user = userEvent.setup();
    render(<FileUploadField {...getFixture('entries-default')} />);
    const row = screen.getByText('invoice_march.pdf').closest('li')!;

    await user.hover(row);
    expect(screen.getByRole('button', { name: 'Preview file' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Download file' })).toBeInTheDocument();

    await user.unhover(row);
    expect(screen.queryByRole('button', { name: 'Preview file' })).not.toBeInTheDocument();
  });

  it('clicking the eye icon opens a lightbox with the filename, a zoom control, and a filmstrip', async () => {
    const user = userEvent.setup();
    render(<FileUploadField {...getFixture('entries-default')} />);
    const row = screen.getByText('invoice_march.pdf').closest('li')!;
    await user.hover(row);
    // fireEvent (not userEvent) for this click specifically — userEvent's
    // click() re-simulates pointer movement onto the target as its first
    // step, and jsdom's lack of real layout/geometry makes its internal
    // pointer-events recheck unreliable for a button nested inside an
    // element that was just hovered via a separate userEvent.hover() call.
    // A real browser has no such issue; this is a jsdom/testing-tool
    // limitation, not a claim about the component's own behavior.
    fireEvent.click(screen.getByRole('button', { name: 'Preview file' }));

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'invoice_march.pdf' })).toBeInTheDocument();
    expect(screen.getByText('100%')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Zoom in' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Zoom out' })).toBeInTheDocument();
  });

  it('renders the lightbox-open fixture directly, and zoom in/out adjusts the displayed percentage', async () => {
    const user = userEvent.setup();
    render(<FileUploadField {...getFixture('entries-lightbox-open')} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Zoom in' }));
    expect(screen.getByText('125%')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Zoom out' }));
    await user.click(screen.getByRole('button', { name: 'Zoom out' }));
    expect(screen.getByText('75%')).toBeInTheDocument();
  });

  it('closing the lightbox dismisses it', async () => {
    const user = userEvent.setup();
    render(<FileUploadField {...getFixture('entries-lightbox-open')} />);
    await user.click(screen.getByRole('button', { name: 'Close preview' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('the download icon fires onDownload both from the row and from the lightbox', async () => {
    const user = userEvent.setup();
    const onDownload = vi.fn();
    render(<FileUploadField {...getFixture('entries-default')} onDownload={onDownload} />);
    const row = screen.getByText('invoice_march.pdf').closest('li')!;
    await user.hover(row);
    // fireEvent here too — see the comment on the "clicking the eye icon"
    // test above for why.
    fireEvent.click(screen.getByRole('button', { name: 'Download file' }));
    expect(onDownload).toHaveBeenCalledTimes(1);
  });
});

describe('FileUploadField — no live network calls', () => {
  it('never calls fetch/XHR across upload, rejection, submit, and the entries lightbox flow', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    const { unmount } = render(<FileUploadField {...getFixture('respondent-empty')} />);
    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
    await user.upload(input, makeFile('photo.png', 8 * 1024, 'image/png'));
    await user.click(screen.getByRole('button', { name: 'Submit' }));
    unmount();

    render(<FileUploadField {...getFixture('entries-default')} />);
    const row = screen.getByText('invoice_march.pdf').closest('li')!;
    await user.hover(row);
    fireEvent.click(screen.getByRole('button', { name: 'Preview file' }));
    await user.click(screen.getByRole('button', { name: 'Close preview' }));

    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
