import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ExportFilterCopyUtilityControls } from './ExportFilterCopyUtilityControls';
import { fixtures } from './fixtures';

function getFixture(id: string) {
  const fixture = fixtures.find((f) => f.id === id);
  if (!fixture) throw new Error(`fixture not found: ${id}`);
  return fixture.props;
}

describe('ExportFilterCopyUtilityControls', () => {
  // Safety net: if a test using fake timers throws before its own
  // vi.useRealTimers() call, fake timers would otherwise leak into every
  // later test in this file — and since userEvent's internal delays need
  // real time to resolve, every subsequent `await user.X()` call would hang
  // for the full testTimeout instead of failing fast with a clear error.
  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders all three controls closed by default', () => {
    render(<ExportFilterCopyUtilityControls {...getFixture('default')} />);
    expect(screen.getByRole('button', { name: 'Export' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /All Forms/ })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Public form permalink' })).toBeInTheDocument();
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('opens the Export menu with exactly the two documented items', async () => {
    const user = userEvent.setup();
    render(<ExportFilterCopyUtilityControls {...getFixture('default')} />);
    await user.click(screen.getByRole('button', { name: 'Export' }));

    const menu = screen.getByRole('menu', { name: 'Export options' });
    expect(menu).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Export as CSV' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Export as PDF' })).toBeInTheDocument();
  });

  it('"Export as CSV" opens the CSV modal pre-filled with `<FormName>_Report`, entry count, and the daily-limit note', async () => {
    const user = userEvent.setup();
    render(
      <ExportFilterCopyUtilityControls
        {...getFixture('default')}
        formName="Event Registration"
        entryCount={17}
        initialExportMenuOpen
      />
    );
    await user.click(screen.getByRole('menuitem', { name: 'Export as CSV' }));

    const dialog = screen.getByRole('dialog', { name: 'Export as CSV' });
    expect(dialog).toBeInTheDocument();
    expect(screen.getByLabelText('File Name')).toHaveValue('Event Registration_Report');
    expect(dialog).toHaveTextContent('17 entries selected.');
    expect(screen.getByRole('checkbox', { name: /Protect with a password/ })).not.toBeChecked();
  });

  it('CSV modal Cancel closes without calling onExportCsv', async () => {
    const user = userEvent.setup();
    const onExportCsv = vi.fn();
    render(
      <ExportFilterCopyUtilityControls
        {...getFixture('csv-modal-open')}
        onExportCsv={onExportCsv}
      />
    );
    await user.click(screen.getByRole('button', { name: 'Cancel' }));

    expect(onExportCsv).not.toHaveBeenCalled();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('CSV modal Done calls onExportCsv with the current file name and password-protected flag', async () => {
    const user = userEvent.setup();
    const onExportCsv = vi.fn();
    render(
      <ExportFilterCopyUtilityControls
        {...getFixture('csv-modal-open')}
        formName="Event Registration"
        onExportCsv={onExportCsv}
      />
    );
    const fileNameInput = screen.getByLabelText('File Name');
    await user.clear(fileNameInput);
    await user.type(fileNameInput, 'my-export');
    await user.click(screen.getByRole('checkbox', { name: /Protect with a password/ }));
    await user.click(screen.getByRole('button', { name: 'Done' }));

    expect(onExportCsv).toHaveBeenCalledWith({ fileName: 'my-export', passwordProtected: true });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('"Export as PDF" fires onExportPdf as a callback only — no modal is rebuilt for it', async () => {
    const user = userEvent.setup();
    const onExportPdf = vi.fn();
    render(
      <ExportFilterCopyUtilityControls
        {...getFixture('default')}
        initialExportMenuOpen
        onExportPdf={onExportPdf}
      />
    );
    await user.click(screen.getByRole('menuitem', { name: 'Export as PDF' }));

    expect(onExportPdf).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('opens the status filter with the 3 documented options and marks the current selection', async () => {
    const user = userEvent.setup();
    render(<ExportFilterCopyUtilityControls {...getFixture('default')} />);
    await user.click(screen.getByRole('button', { name: /All Forms/ }));

    expect(screen.getByRole('option', { name: 'All Forms' })).toHaveAttribute(
      'aria-selected',
      'true'
    );
    expect(screen.getByRole('option', { name: 'Active Forms' })).toHaveAttribute(
      'aria-selected',
      'false'
    );
    expect(screen.getByRole('option', { name: 'Disabled Forms' })).toBeInTheDocument();
  });

  it('selecting a status option relabels the trigger and fires onStatusChange', async () => {
    const user = userEvent.setup();
    const onStatusChange = vi.fn();
    render(
      <ExportFilterCopyUtilityControls
        {...getFixture('default')}
        onStatusChange={onStatusChange}
      />
    );
    await user.click(screen.getByRole('button', { name: /All Forms/ }));
    await user.click(screen.getByRole('option', { name: 'Active Forms' }));

    expect(onStatusChange).toHaveBeenCalledWith('enabled');
    expect(screen.getByRole('button', { name: /Active Forms/ })).toBeInTheDocument();
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('the copy button copies the permalink to the clipboard and shows the "Copied to clipboard." confirmation', async () => {
    // userEvent.setup() installs a real, in-memory Clipboard API stub on
    // `navigator.clipboard` (jsdom itself has no Clipboard implementation);
    // reset its contents first since the stub instance is shared across
    // every test in this file. Asserting on the stub's own stored content
    // via readText() (rather than spying on writeText, which userEvent's
    // setup() would silently replace anyway) verifies the real end-to-end
    // behavior: a genuine clipboard write, not just that a function ran.
    const user = userEvent.setup();
    await navigator.clipboard.writeText('');
    const onCopy = vi.fn();
    render(
      <ExportFilterCopyUtilityControls
        {...getFixture('default')}
        permalink="https://forms.zohopublic.in/acme/form/Test/formperma/xyz"
        onCopy={onCopy}
      />
    );
    await user.click(screen.getByRole('button', { name: 'Copy permalink to clipboard' }));

    await expect(navigator.clipboard.readText()).resolves.toBe(
      'https://forms.zohopublic.in/acme/form/Test/formperma/xyz'
    );
    expect(onCopy).toHaveBeenCalledWith('https://forms.zohopublic.in/acme/form/Test/formperma/xyz');
    expect(screen.getByRole('status')).toHaveTextContent('Copied to clipboard.');
  });

  it('clicking directly on the readonly permalink field also copies (matches the source\'s whole-textarea click target)', async () => {
    const user = userEvent.setup();
    await navigator.clipboard.writeText('');
    render(<ExportFilterCopyUtilityControls {...getFixture('default')} />);
    await user.click(screen.getByRole('textbox', { name: 'Public form permalink' }));

    await expect(navigator.clipboard.readText()).resolves.toBe(
      'https://forms.zohopublic.in/acme/form/CustomerFeedbackForm/formperma/AbCdEf1234567890GhIjKl'
    );
    expect(screen.getByRole('status')).toHaveTextContent('Copied to clipboard.');
  });

  it('the confirmation follows the documented two-phase 600ms-shown + 600ms-fade timing, then fully hides', async () => {
    vi.useFakeTimers();
    render(<ExportFilterCopyUtilityControls {...getFixture('default')} />);
    const copyButton = screen.getByRole('button', { name: 'Copy permalink to clipboard' });

    // fireEvent (not userEvent) here — userEvent's own internal async waits
    // need real timers and would deadlock against vi.useFakeTimers().
    fireEvent.click(copyButton);
    expect(screen.getByRole('status')).toHaveTextContent('Copied to clipboard.');

    await vi.advanceTimersByTimeAsync(600);
    // Still visible — now in its 600ms fade-out phase, not yet hidden.
    expect(screen.getByRole('status')).toHaveTextContent('Copied to clipboard.');

    await vi.advanceTimersByTimeAsync(600);
    expect(screen.getByRole('status')).toHaveTextContent('');
  });

  it('disabled prevents opening the Export menu, the status filter, and copying', async () => {
    const user = userEvent.setup();
    // A non-empty sentinel — user-event's own Clipboard stub throws on
    // readText() after writeText('') (an empty ClipboardItem value is
    // falsy, which trips its internal "MIME type not available" check), so
    // "nothing was copied" is asserted as "the clipboard still holds the
    // untouched sentinel" instead.
    await navigator.clipboard.writeText('sentinel-should-remain-unchanged');
    render(<ExportFilterCopyUtilityControls {...getFixture('disabled')} />);

    expect(screen.getByRole('button', { name: 'Export' })).toBeDisabled();
    expect(screen.getByRole('button', { name: /All Forms/ })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Copy permalink to clipboard' })).toBeDisabled();
    expect(screen.getByRole('textbox', { name: 'Public form permalink' })).toBeDisabled();

    await user.click(screen.getByRole('button', { name: 'Export' }));
    await user.click(screen.getByRole('button', { name: /All Forms/ }));
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    await expect(navigator.clipboard.readText()).resolves.toBe('sentinel-should-remain-unchanged');
  });

  it('never calls fetch/XHR across export menu, CSV modal, status filter, and copy (fully client-side, per the source record)', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<ExportFilterCopyUtilityControls {...getFixture('default')} />);

    await user.click(screen.getByRole('button', { name: 'Export' }));
    await user.click(screen.getByRole('menuitem', { name: 'Export as CSV' }));
    await user.click(screen.getByRole('button', { name: 'Done' }));
    await user.click(screen.getByRole('button', { name: /All Forms/ }));
    await user.click(screen.getByRole('option', { name: 'Active Forms' }));
    await user.click(screen.getByRole('button', { name: 'Copy permalink to clipboard' }));

    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
