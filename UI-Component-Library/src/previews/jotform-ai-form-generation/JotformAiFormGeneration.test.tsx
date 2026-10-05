import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { JotformAiFormGeneration } from './JotformAiFormGeneration';
import { fixtures } from './fixtures';

function getFixture(id: string) {
  const fixture = fixtures.find((f) => f.id === id);
  if (!fixture) throw new Error(`Missing fixture: ${id}`);
  return fixture.props;
}

describe('JotformAiFormGeneration', () => {
  it('generates a populated form directly from an initial prompt, with no staging step', async () => {
    const user = userEvent.setup();
    render(<JotformAiFormGeneration />);

    const textarea = screen.getByLabelText('Describe your form');
    await user.type(
      textarea,
      'Create a customer feedback form for a coffee shop, asking about visit frequency, favorite drink, and a 5-star rating.'
    );
    await user.click(screen.getByRole('button', { name: /generate form/i }));

    // Directly lands in the builder with fields placed — no review screen.
    expect(
      await screen.findByText('Coffee Shop Feedback Form', undefined, { timeout: 2000 })
    ).toBeInTheDocument();
    expect(screen.getByText('How often do you visit?')).toBeInTheDocument();
    expect(screen.getByText("What's your favorite drink?")).toBeInTheDocument();
    expect(screen.getByText('Rate your overall experience')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit Feedback' })).toBeInTheDocument();
  });

  it('applies a free-text Form Copilot edit immediately with an on-canvas toast and a chat reply carrying Undo', async () => {
    const user = userEvent.setup();
    render(<JotformAiFormGeneration {...getFixture('generated-with-chat-history')} />);

    const composer = screen.getByLabelText('Ask Copilot');
    await user.type(composer, 'Add a field asking for their phone number');
    await user.click(screen.getByRole('button', { name: 'Send' }));

    expect(await screen.findByText(/Adding 'Phone Number'…/)).toBeInTheDocument();
    expect(await screen.findByText("I've added a phone number field to the form.")).toBeInTheDocument();
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument();
  });

  it('reverts a turn\'s change when its Undo link is clicked', async () => {
    const user = userEvent.setup();
    render(<JotformAiFormGeneration {...getFixture('generated-with-chat-history')} />);

    // The fixture's fourth seeded turn added the Email Address field.
    expect(screen.getByLabelText('Email Address *')).toBeInTheDocument();

    const turn = screen.getByTestId('turn-seed-turn-4');
    await user.click(within(turn).getByRole('button', { name: '↺ Undo' }));

    expect(screen.queryByLabelText('Email Address *')).not.toBeInTheDocument();
    expect(within(turn).getByRole('button', { name: 'Undone' })).toBeDisabled();
  });

  it('requires at least one checked question before "Add question" is enabled, then applies the selection on confirm', async () => {
    const user = userEvent.setup();
    render(<JotformAiFormGeneration {...getFixture('suggested-questions-checklist-open')} />);

    const addButton = screen.getByRole('button', { name: 'Add question →' });
    expect(addButton).toBeDisabled();

    await user.click(screen.getByRole('checkbox', { name: 'What could we improve?' }));
    expect(addButton).toBeEnabled();

    await user.click(addButton);

    expect(
      await screen.findByText(
        "I've added the short text question to your form and placed it before the submit button.",
        undefined,
        { timeout: 2000 }
      )
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'What could we improve?' })).toBeInTheDocument();
  });

  it('does not apply "Suggest new questions" directly — it opens a checklist rather than editing the form', async () => {
    const user = userEvent.setup();
    render(<JotformAiFormGeneration {...getFixture('generated-with-chat-history')} />);

    await user.click(screen.getByRole('button', { name: 'Suggestions' }));
    await user.click(screen.getByRole('menuitem', { name: 'Suggest new questions' }));

    expect(
      screen.getByText('You can select from the questions below to add to your form.')
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add question →' })).toBeDisabled();
  });

  it('disables every interactive control when disabled is true', () => {
    render(<JotformAiFormGeneration {...getFixture('disabled')} />);
    expect(screen.getByRole('button', { name: /generate form/i })).toBeDisabled();
    expect(screen.getByLabelText('Describe your form')).toBeDisabled();
  });
});
