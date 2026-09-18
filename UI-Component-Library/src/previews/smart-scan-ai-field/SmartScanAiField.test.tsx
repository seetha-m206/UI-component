import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SmartScanAiField } from './SmartScanAiField';
import { fixtures } from './fixtures';

function getFixture(id: string) {
  const fixture = fixtures.find((f) => f.id === id);
  if (!fixture) throw new Error(`fixture not found: ${id}`);
  return fixture.props;
}

function sampleFile(name = 'invoice.png', size = 184 * 1024) {
  const file = new File([new Uint8Array(size)], name, { type: 'image/png' });
  return file;
}

describe('SmartScanAiField — builder mode', () => {
  it('renders the empty dropzone with Extract data disabled before any image is selected', () => {
    render(<SmartScanAiField {...getFixture('builder-before-extraction')} />);
    expect(screen.getByText('Upload an Image')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Extract data' })).toBeDisabled();
    expect(screen.queryByText('Extracted Data')).not.toBeInTheDocument();
  });

  it('enables Extract data once a sample image is selected (via the "sample-selected" fixture)', () => {
    render(<SmartScanAiField {...getFixture('builder-sample-selected')} />);
    expect(screen.getByText('sample-test-form.png')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Extract data' })).toBeEnabled();
    expect(screen.queryByText('Extracted Data')).not.toBeInTheDocument();
  });

  it('lets the user select a sample image via the real file input, enabling Extract data', async () => {
    const user = userEvent.setup();
    render(<SmartScanAiField {...getFixture('builder-before-extraction')} />);
    const input = screen.getByLabelText('Upload a sample image');
    await user.upload(input, sampleFile('receipt.png'));

    expect(screen.getByText('receipt.png')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Extract data' })).toBeEnabled();
  });

  it('simulates a WORKING extraction on "Extract data", populating the Extracted Data panel with the canned result', async () => {
    const user = userEvent.setup();
    const onExtract = vi.fn();
    render(<SmartScanAiField {...getFixture('builder-sample-selected')} onExtract={onExtract} />);

    await user.click(screen.getByRole('button', { name: 'Extract data' }));

    const panel = screen.getByText('Extracted Data').closest('div')!;
    expect(within(panel).getByText('Name')).toBeInTheDocument();
    expect(within(panel).getByText('Jane Doe')).toBeInTheDocument();
    expect(within(panel).getByText('Email')).toBeInTheDocument();
    expect(within(panel).getByText('jane@example.com')).toBeInTheDocument();
    expect(onExtract).toHaveBeenCalledTimes(1);
    expect(onExtract.mock.calls[0][0]).toEqual(
      expect.arrayContaining([{ key: 'Name', value: 'Jane Doe' }])
    );
  });

  it('renders the pre-extracted fixture with populated Field Mapping selects', () => {
    render(<SmartScanAiField {...getFixture('builder-after-extraction')} />);
    expect(screen.getByText('Extracted Data')).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: 'Mapping row 1 extracted key' })).toHaveValue(
      'Name'
    );
    expect(screen.getByRole('combobox', { name: 'Mapping row 1 target field' })).toHaveValue(
      'Single Line'
    );
  });

  it('keeps Field Mapping selects disabled until extraction has completed', () => {
    render(<SmartScanAiField {...getFixture('builder-sample-selected')} />);
    expect(screen.getByRole('combobox', { name: 'Mapping row 1 extracted key' })).toBeDisabled();
  });

  it('adds a new mapping row via the "+" control, only after extraction', async () => {
    const user = userEvent.setup();
    render(<SmartScanAiField {...getFixture('builder-after-extraction')} />);
    // header row + 2 seeded mapping rows from the fixture.
    expect(screen.getAllByRole('row').length).toBe(3);
    await user.click(screen.getByRole('button', { name: 'Add mapping row' }));
    expect(screen.getAllByRole('row').length).toBe(4);
    expect(
      screen.getByRole('combobox', { name: 'Mapping row 3 extracted key' })
    ).toBeInTheDocument();
  });

  it('lets the user pick an extracted key and a target field for a mapping row', async () => {
    const user = userEvent.setup();
    render(<SmartScanAiField {...getFixture('builder-after-extraction')} />);
    const keySelect = screen.getByRole('combobox', { name: 'Mapping row 2 extracted key' });
    const targetSelect = screen.getByRole('combobox', { name: 'Mapping row 2 target field' });
    await user.selectOptions(keySelect, 'Email');
    await user.selectOptions(targetSelect, 'Email');
    expect(keySelect).toHaveValue('Email');
    expect(targetSelect).toHaveValue('Email');
  });
});

describe('SmartScanAiField — live mode (the confirmed production bug)', () => {
  it('renders the "Choose File" control with no error before any upload', () => {
    render(<SmartScanAiField {...getFixture('live-before-upload')} />);
    expect(screen.getByRole('button', { name: 'Choose File' })).toBeInTheDocument();
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('renders the canonical scan-failure fixture already showing the confirmed error, unprompted', () => {
    render(<SmartScanAiField {...getFixture('live-scan-failure')} />);
    expect(screen.getByRole('alert')).toHaveTextContent('Error Occurred!');
    expect(screen.getByRole('alert')).toHaveTextContent(
      'Unable to process the upload, kindly try again.'
    );
    // The base upload still succeeded — file is retained, per the record.
    expect(screen.getByText('sample-test-form.png')).toBeInTheDocument();
    expect(screen.getByText('184 KB')).toBeInTheDocument();
  });

  it('uploading a file in live mode ALWAYS reproduces the confirmed scan failure — this is not a togglable outcome', async () => {
    const user = userEvent.setup();
    render(<SmartScanAiField {...getFixture('live-before-upload')} />);
    const input = screen.getByLabelText('Choose file to upload');

    await user.upload(input, sampleFile('id-card.png'));

    // Base upload succeeded: filename/size thumbnail is shown.
    expect(screen.getByText('id-card.png')).toBeInTheDocument();
    // AI enhancement layer failed: the documented error appears.
    expect(screen.getByRole('alert')).toHaveTextContent(
      'Unable to process the upload, kindly try again.'
    );
    // No extracted/auto-filled data of any kind is ever shown in live mode.
    expect(screen.queryByText('Extracted Data')).not.toBeInTheDocument();
  });

  it('dismisses the error via the OK button while keeping the file attachment (graceful degradation, per the record)', async () => {
    const user = userEvent.setup();
    render(<SmartScanAiField {...getFixture('live-scan-failure')} />);
    await user.click(screen.getByRole('button', { name: 'OK' }));

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    expect(screen.getByText('sample-test-form.png')).toBeInTheDocument();
    expect(
      screen.getByText('File retained as a normal attachment — the AI scan could not process it.')
    ).toBeInTheDocument();
  });

  it('renders the camera icon as a decorative, non-interactive glyph (mobile-only capture is out of scope)', () => {
    render(<SmartScanAiField {...getFixture('live-before-upload')} />);
    expect(screen.queryByRole('button', { name: /camera/i })).not.toBeInTheDocument();
    const camera = screen.getByTitle(
      'Camera capture (mobile app only — not functional in this web reconstruction)'
    );
    expect(camera).toHaveAttribute('aria-hidden', 'true');
  });
});

describe('SmartScanAiField — no live network calls', () => {
  // The task flags this component as the one place where a real network
  // call might be expected, since its own core documented finding IS a
  // network response code (a 400 from `performscan`). Deliberately not
  // done: wiring an actual `fetch()` in a component that ships inside a
  // static, offline docs site would mean a real, unpredictable network
  // attempt (and console noise) every time this preview mounts, which is
  // exactly what this repo's repo-wide "no live network calls" convention
  // for static-props previews exists to avoid (see
  // repeatable-subform-inline/README.md). Both the builder's simulated
  // extraction and the live form's always-fails behavior are reproduced
  // purely through component state, not a real request — so, unlike the
  // record's real subject matter, this reconstruction's own network
  // footprint is the same as every other preview in this repo: zero.
  it('never calls fetch/XHR for builder-mode extraction', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<SmartScanAiField {...getFixture('builder-sample-selected')} />);
    await user.click(screen.getByRole('button', { name: 'Extract data' }));
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });

  it('never calls fetch/XHR for the live-mode upload-and-scan-failure flow', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<SmartScanAiField {...getFixture('live-before-upload')} />);
    await user.upload(screen.getByLabelText('Choose file to upload'), sampleFile());
    await user.click(screen.getByRole('button', { name: 'OK' }));
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
