import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PaperformAiCreate } from './PaperformAiCreate';

describe('PaperformAiCreate', () => {
  it('renders the landing screen with a prompt textarea and an image/PDF attach option', () => {
    render(<PaperformAiCreate />);
    expect(screen.getByLabelText('Describe the form you want to create')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Attach a PDF or image' })).toBeInTheDocument();
  });

  it('the text path is conversational: Generate leads to two rounds of clarifying questions before generation', async () => {
    const user = userEvent.setup();
    render(<PaperformAiCreate />);
    await user.click(screen.getByRole('button', { name: 'Generate' }));
    expect(screen.getByText(/Round 1/)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Answer & continue' }));
    expect(screen.getByText(/Round 2/)).toBeInTheDocument();
  });

  it('the image path skips clarifying questions entirely and goes straight to generating', async () => {
    const user = userEvent.setup();
    render(<PaperformAiCreate />);
    await user.click(screen.getByRole('button', { name: 'Attach a PDF or image' }));
    expect(screen.queryByText(/Round 1/)).not.toBeInTheDocument();
    expect(screen.getByText(/Generating your form/)).toBeInTheDocument();
  });

  it('generation is poll-based: the network log grows over multiple poll entries, not one immediate response', async () => {
    render(<PaperformAiCreate initialStep="generating" initialPath="image" />);
    expect(await screen.findByText(/poll #1/)).toBeInTheDocument();
    expect(await screen.findByText(/poll #2/, {}, { timeout: 2000 })).toBeInTheDocument();
  });

  it('a marketing survey pop-up appears during generation and can be dismissed', async () => {
    const user = userEvent.setup();
    render(<PaperformAiCreate initialStep="generating" initialPath="image" />);
    expect(
      await screen.findByRole('dialog', { name: 'How did you first hear about Paperform?' }, { timeout: 2000 })
    ).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Dismiss survey' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('the text-path preview shows fields using the exact clarified option values', () => {
    render(<PaperformAiCreate initialStep="preview" initialPath="text" />);
    expect(screen.getByText(/Daily \/ A few times a week \/ Monthly/)).toBeInTheDocument();
    expect(screen.getByText(/Espresso \/ Flat white \/ Filter coffee/)).toBeInTheDocument();
  });

  it('the image-path preview shows all 7 fields with correct inferred types', () => {
    render(<PaperformAiCreate initialStep="preview" initialPath="image" />);
    expect(screen.getByText('Date — Start date')).toBeInTheDocument();
    expect(screen.getByText('Phone Number — Contact number')).toBeInTheDocument();
    expect(screen.getByText('Signature')).toBeInTheDocument();
  });

  it('"Continue in the editor" fires the callback and lands in the same builder with no AI-only surface', async () => {
    const user = userEvent.setup();
    const onContinueInEditor = vi.fn();
    render(<PaperformAiCreate initialStep="preview" onContinueInEditor={onContinueInEditor} />);
    await user.click(screen.getByRole('button', { name: 'Continue in the editor' }));
    expect(onContinueInEditor).toHaveBeenCalledTimes(1);
    expect(screen.getByText(/No separate AI-only editing surface/)).toBeInTheDocument();
  });
});
