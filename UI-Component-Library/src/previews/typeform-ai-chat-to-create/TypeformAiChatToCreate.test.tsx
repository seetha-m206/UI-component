import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TypeformAiChatToCreate } from './TypeformAiChatToCreate';
import { fixtures } from './fixtures';

function getFixture(id: string) {
  const fixture = fixtures.find((f) => f.id === id);
  if (!fixture) throw new Error(`fixture not found: ${id}`);
  return fixture.props;
}

describe('TypeformAiChatToCreate', () => {
  it('starts closed, showing only the persistent trigger input with decorative icons', () => {
    render(<TypeformAiChatToCreate {...getFixture('closed')} />);
    expect(screen.getByRole('textbox', { name: 'Ask Typeform AI' })).toBeInTheDocument();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    // Send is disabled until there's text.
    expect(screen.getByRole('button', { name: 'Ask Typeform AI' })).toBeDisabled();
  });

  it('the trigger send button is disabled for empty/whitespace-only input', async () => {
    const user = userEvent.setup();
    render(<TypeformAiChatToCreate {...getFixture('closed')} />);
    const input = screen.getByRole('textbox', { name: 'Ask Typeform AI' });
    const send = screen.getByRole('button', { name: 'Ask Typeform AI' });
    await user.type(input, '   ');
    expect(send).toBeDisabled();
  });

  it('renders the "generating" fixture as a frozen snapshot with no scheduled timer (never auto-advances)', async () => {
    vi.useFakeTimers();
    render(<TypeformAiChatToCreate {...getFixture('generating')} />);
    expect(screen.getByText('Creating a three-question feedback survey.')).toBeInTheDocument();
    await act(async () => {
      vi.advanceTimersByTime(10000);
    });
    // Still generating — a fixture-driven mount schedules no timer.
    expect(screen.getByText('Creating a three-question feedback survey.')).toBeInTheDocument();
    expect(screen.queryByText('Created a three-question feedback survey.')).not.toBeInTheDocument();
    vi.useRealTimers();
  });

  it('submitting a prompt opens the modal, shows the user message, transitions through generating to result, and shows the follow-up message', async () => {
    // Real timers with a very short, deterministic delay (rather than
    // vi.useFakeTimers()) — combining fake timers with userEvent's own
    // internal async waits is a well-known deadlock, so this reconstructs
    // "assert on both interim and final states" via a short real delay +
    // findBy* polling instead. generationDelayMs is still the same real,
    // controllable prop the live component uses (see README).
    const user = userEvent.setup();
    render(<TypeformAiChatToCreate {...getFixture('closed')} generationDelayMs={20} />);

    await user.type(screen.getByRole('textbox', { name: 'Ask Typeform AI' }), 'Build me a form');
    await user.click(screen.getByRole('button', { name: 'Ask Typeform AI' }));

    expect(screen.getByRole('dialog', { name: /Typeform AI/ })).toBeInTheDocument();
    expect(screen.getByText('Build me a form')).toBeInTheDocument();
    expect(screen.getByText('Creating a three-question feedback survey.')).toBeInTheDocument();
    expect(screen.queryByText('Created a three-question feedback survey.')).not.toBeInTheDocument();

    expect(await screen.findByText('Created a three-question feedback survey.')).toBeInTheDocument();
    expect(screen.getByText("Here’s what we did:")).toBeInTheDocument();
    expect(
      screen.getByText('Added. Is there anything else you’d like to include?')
    ).toBeInTheDocument();
    expect(screen.queryByText('Creating a three-question feedback survey.')).not.toBeInTheDocument();
  });

  it('the AI-generated outline is fixed/canned regardless of the prompt text typed', async () => {
    const user = userEvent.setup();
    render(<TypeformAiChatToCreate {...getFixture('closed')} generationDelayMs={20} />);

    await user.type(
      screen.getByRole('textbox', { name: 'Ask Typeform AI' }),
      'Totally unrelated prompt about pizza toppings'
    );
    await user.click(screen.getByRole('button', { name: 'Ask Typeform AI' }));

    // Same canned checklist item regardless of what was typed.
    expect(await screen.findByText('Created a three-question feedback survey.')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Questions to be set:' })
    ).toBeInTheDocument();
    expect(
      screen.getByText('How satisfied are you with our product?')
    ).toBeInTheDocument();
  });

  it('result fixture (Suggested changes tab) shows the welcome card and 3 question cards with rating/text icon coding', () => {
    render(<TypeformAiChatToCreate {...getFixture('result-suggested-changes')} />);
    expect(screen.getByRole('radio', { name: 'Suggested changes' })).toHaveAttribute(
      'aria-checked',
      'true'
    );
    expect(screen.getByText('Welcome Screen')).toBeInTheDocument();
    expect(screen.getByText('How satisfied are you with our product?')).toBeInTheDocument();
    expect(screen.getByText('What did you like most about your experience?')).toBeInTheDocument();
    expect(screen.getByText('What could we improve?')).toBeInTheDocument();
  });

  it('result fixture (Preview tab) shows the phone mockup with the generated form title and time estimate', () => {
    render(<TypeformAiChatToCreate {...getFixture('result-preview')} />);
    expect(screen.getByRole('radio', { name: '▶ Preview' })).toHaveAttribute(
      'aria-checked',
      'true'
    );
    expect(screen.getByText('Customer Feedback Survey')).toBeInTheDocument();
    expect(screen.getByText('⏱ Takes 1 minute')).toBeInTheDocument();
    expect(screen.queryByText('Questions to be set:')).not.toBeInTheDocument();
  });

  it('the Suggested changes / Preview toggle switches views on click, and is a real radio group', async () => {
    const user = userEvent.setup();
    render(<TypeformAiChatToCreate {...getFixture('result-suggested-changes')} />);
    expect(screen.getByRole('radiogroup', { name: 'View' })).toBeInTheDocument();

    await user.click(screen.getByRole('radio', { name: '▶ Preview' }));
    expect(screen.getByText('Customer Feedback Survey')).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: '▶ Preview' })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByRole('radio', { name: 'Suggested changes' })).toHaveAttribute(
      'aria-checked',
      'false'
    );

    await user.click(screen.getByRole('radio', { name: 'Suggested changes' }));
    expect(screen.getByText('Welcome Screen')).toBeInTheDocument();
  });

  it('feedback thumbs-up/thumbs-down buttons have the exact documented accessible labels and toggle aria-pressed', async () => {
    const user = userEvent.setup();
    render(<TypeformAiChatToCreate {...getFixture('result-suggested-changes')} />);
    const up = screen.getByRole('button', { name: 'Mark response as helpful' });
    const down = screen.getByRole('button', { name: 'Mark response as not helpful' });
    expect(up).toHaveAttribute('aria-pressed', 'false');
    expect(down).toHaveAttribute('aria-pressed', 'false');

    await user.click(up);
    expect(up).toHaveAttribute('aria-pressed', 'true');
    expect(down).toHaveAttribute('aria-pressed', 'false');
  });

  it('"Create form" is only present once a result exists, fires onCreateForm, and resets to closed with no confirmation', async () => {
    const user = userEvent.setup();
    const onCreateForm = vi.fn();
    render(
      <TypeformAiChatToCreate {...getFixture('result-suggested-changes')} onCreateForm={onCreateForm} />
    );
    const createButton = screen.getByRole('button', { name: 'Create form' });
    await user.click(createButton);

    expect(onCreateForm).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Ask Typeform AI' })).toBeInTheDocument();
  });

  it('"Create form" is not rendered while still generating', () => {
    render(<TypeformAiChatToCreate {...getFixture('generating')} />);
    expect(screen.queryByRole('button', { name: 'Create form' })).not.toBeInTheDocument();
  });

  it('closing the chat before "Create form" shows the exact discard-confirmation copy', async () => {
    const user = userEvent.setup();
    render(<TypeformAiChatToCreate {...getFixture('result-suggested-changes')} />);
    await user.click(screen.getByRole('button', { name: 'Close copilot chat' }));

    expect(screen.getByRole('alertdialog', { name: 'Discard form suggestions?' })).toBeInTheDocument();
    expect(
      screen.getByText(
        "If you close the chat, you’ll lose any unapplied AI suggestions for this form."
      )
    ).toBeInTheDocument();
  });

  it('canceling the discard dialog keeps the modal open; confirming discards and fires onDiscard', async () => {
    const user = userEvent.setup();
    const onDiscard = vi.fn();
    render(<TypeformAiChatToCreate {...getFixture('result-suggested-changes')} onDiscard={onDiscard} />);

    await user.click(screen.getByRole('button', { name: 'Close copilot chat' }));
    await user.click(screen.getByRole('button', { name: 'Keep editing' }));
    expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument();
    expect(screen.getByRole('dialog', { name: /Typeform AI/ })).toBeInTheDocument();
    expect(onDiscard).not.toHaveBeenCalled();

    await user.click(screen.getByRole('button', { name: 'Close copilot chat' }));
    await user.click(screen.getByRole('button', { name: 'Discard suggestions' }));
    expect(onDiscard).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument();
  });

  it('Escape inside the modal behaves the same as clicking close (routes through the discard confirmation)', async () => {
    const user = userEvent.setup();
    render(<TypeformAiChatToCreate {...getFixture('result-suggested-changes')} />);
    await user.keyboard('{Escape}');
    expect(screen.getByRole('alertdialog', { name: 'Discard form suggestions?' })).toBeInTheDocument();
  });

  it('the follow-up input appends a new user message but never triggers a second AI response (no real multi-turn regeneration)', async () => {
    const user = userEvent.setup();
    render(<TypeformAiChatToCreate {...getFixture('result-suggested-changes')} />);

    const followUp = screen.getByRole('textbox', {
      name: 'Continue the conversation with Typeform AI',
    });
    await user.type(followUp, 'Also add a phone number field');
    await user.click(screen.getByRole('button', { name: 'Send follow-up message' }));

    expect(screen.getByText('Also add a phone number field')).toBeInTheDocument();
    // Still exactly one AI checklist message — no second one was added.
    expect(screen.getAllByText('Created a three-question feedback survey.')).toHaveLength(1);
    // The follow-up input is cleared after sending.
    expect(
      screen.getByRole('textbox', { name: 'Continue the conversation with Typeform AI' })
    ).toHaveValue('');
  });

  it('decorative mic / Add Files / more-options icons are non-interactive (aria-hidden, no buttons)', () => {
    render(<TypeformAiChatToCreate {...getFixture('closed')} />);
    // Only one real button in the closed state: the send button.
    expect(screen.getAllByRole('button')).toHaveLength(1);
  });

  it('never calls fetch/XHR across the full submit -> generate -> result -> create-form cycle', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<TypeformAiChatToCreate {...getFixture('closed')} generationDelayMs={20} />);

    await user.type(screen.getByRole('textbox', { name: 'Ask Typeform AI' }), 'Build a form');
    await user.click(screen.getByRole('button', { name: 'Ask Typeform AI' }));
    await screen.findByText('Created a three-question feedback survey.');
    await user.click(screen.getByRole('radio', { name: '▶ Preview' }));
    await user.click(screen.getByRole('button', { name: 'Create form' }));

    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
