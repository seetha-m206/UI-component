import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PaperformCustomPdfDesigner } from './PaperformCustomPdfDesigner';

describe('PaperformCustomPdfDesigner', () => {
  it('renders the empty Custom PDFs list by default', () => {
    render(<PaperformCustomPdfDesigner />);
    expect(screen.getByText('No custom PDFs yet.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add PDF +' })).toBeInTheDocument();
  });

  it('clicking Add PDF opens the designer and fires onAddPdf', async () => {
    const user = userEvent.setup();
    const onAddPdf = vi.fn();
    render(<PaperformCustomPdfDesigner onAddPdf={onAddPdf} />);
    await user.click(screen.getByRole('button', { name: 'Add PDF +' }));
    expect(onAddPdf).toHaveBeenCalledTimes(1);
    expect(screen.getByText('Here are your results')).toBeInTheDocument();
  });

  it('the starter template includes the Summary config block with a Preset and a Layout radiogroup', () => {
    render(<PaperformCustomPdfDesigner initialView="designer" />);
    expect(screen.getByRole('group', { name: 'Submission Summary' })).toBeInTheDocument();
    expect(screen.getByRole('radiogroup', { name: 'Summary Layout' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Table' })).toBeChecked();
  });

  it('"+ Insert answer" opens a field picker that inserts a real merge chip on click', async () => {
    const user = userEvent.setup();
    render(<PaperformCustomPdfDesigner initialView="designer" />);
    await user.click(screen.getByRole('button', { name: '+ Insert answer' }));
    expect(screen.getByRole('listbox', { name: 'Insert answer' })).toBeInTheDocument();
    await user.click(screen.getByRole('option', { name: 'Q3 Your name' }));
    expect(screen.getByText('Q3 Your name')).toBeInTheDocument();
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('the field picker includes system pseudo-fields alongside real questions', async () => {
    const user = userEvent.setup();
    render(<PaperformCustomPdfDesigner initialView="designer" />);
    await user.click(screen.getByRole('button', { name: '+ Insert answer' }));
    expect(screen.getByRole('option', { name: 'Submitted At' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Total Amount' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Submission ID' })).toBeInTheDocument();
  });

  it('typing "/" in the designer canvas is confirmed a literal character, not a slash-menu trigger', async () => {
    const user = userEvent.setup();
    render(<PaperformCustomPdfDesigner initialView="designer" />);
    const slashInput = screen.getByLabelText(/confirmed no slash-menu/);
    await user.type(slashInput, '/');
    expect(slashInput).toHaveValue('/');
    expect(screen.queryByRole('listbox', { name: /slash/i })).not.toBeInTheDocument();
  });

  it('"Download sample" fires a callback and does not navigate or throw', async () => {
    const user = userEvent.setup();
    const onDownloadSample = vi.fn();
    render(<PaperformCustomPdfDesigner initialView="designer" onDownloadSample={onDownloadSample} />);
    await user.click(screen.getByRole('button', { name: 'Download sample' }));
    expect(onDownloadSample).toHaveBeenCalledTimes(1);
  });

  it('"Back to editor" returns to the Custom PDFs list', async () => {
    const user = userEvent.setup();
    render(<PaperformCustomPdfDesigner initialView="designer" />);
    await user.click(screen.getByRole('button', { name: '← Back to editor' }));
    expect(screen.getByText('No custom PDFs yet.')).toBeInTheDocument();
  });
});
