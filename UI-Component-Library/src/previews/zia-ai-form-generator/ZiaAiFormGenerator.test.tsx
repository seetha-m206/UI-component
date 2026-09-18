import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ZiaAiFormGenerator } from './ZiaAiFormGenerator';
import { fixtures } from './fixtures';

function getFixture(id: string) {
  const fixture = fixtures.find((f) => f.id === id);
  if (!fixture) throw new Error(`fixture not found: ${id}`);
  return fixture.props;
}

describe('ZiaAiFormGenerator', () => {
  // Safety net: if a test using fake timers throws before its own
  // vi.useRealTimers() call, fake timers would otherwise leak into every
  // later test in this file — and since userEvent's internal delays need
  // real time to resolve, every subsequent `await user.X()` call would hang
  // for the full testTimeout instead of failing fast with a clear error.
  afterEach(() => {
    vi.useRealTimers();
  });


  it('starts closed, showing only the trigger button and no dialog', () => {
    render(<ZiaAiFormGenerator {...getFixture('closed')} />);
    expect(screen.getByRole('button', { name: /Generate with Zia AI/ })).toBeInTheDocument();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('clicking the trigger opens the prompt modal', async () => {
    const user = userEvent.setup();
    render(<ZiaAiFormGenerator {...getFixture('closed')} />);
    await user.click(screen.getByRole('button', { name: /Generate with Zia AI/ }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: 'Describe the form you want to create' })
    ).toBeInTheDocument();
  });

  it('"Generate Form" is disabled for empty/whitespace-only description', async () => {
    const user = userEvent.setup();
    render(<ZiaAiFormGenerator {...getFixture('prompt-empty')} />);
    const generateButton = screen.getByRole('button', { name: 'Generate Form' });
    expect(generateButton).toBeDisabled();
    await user.type(
      screen.getByRole('textbox', { name: 'Describe the form you want to create' }),
      '   '
    );
    expect(generateButton).toBeDisabled();
  });

  it('clicking a sample-prompt chip fills the description textarea', async () => {
    const user = userEvent.setup();
    render(<ZiaAiFormGenerator {...getFixture('prompt-empty')} />);
    await user.click(screen.getByRole('button', { name: 'Event registration form' }));
    expect(
      screen.getByRole('textbox', { name: 'Describe the form you want to create' })
    ).toHaveValue(
      'Create an event registration form that collects attendee name, email, and dietary preferences.'
    );
  });

  it('the "generating" fixture is a frozen snapshot with no scheduled timer', async () => {
    vi.useFakeTimers();
    render(<ZiaAiFormGenerator {...getFixture('generating')} />);
    // All 4 status lines are always rendered (each just carries a
    // done/active/pending data-status) — so presence of the last line's
    // text is not a useful signal. The frozen-snapshot claim is that the
    // FIRST line stays "active" and the LAST stays "pending" the whole time.
    expect(screen.getByText('Analyzing your request…').closest('li')).toHaveAttribute(
      'data-status',
      'active'
    );
    expect(screen.getByText("Here's your AI-generated form…").closest('li')).toHaveAttribute(
      'data-status',
      'pending'
    );
    await vi.advanceTimersByTimeAsync(10000);
    // Still frozen on the first status line — a fixture-driven mount
    // schedules no timer, so nothing should have advanced.
    expect(screen.getByText('Analyzing your request…').closest('li')).toHaveAttribute(
      'data-status',
      'active'
    );
    expect(screen.getByText("Here's your AI-generated form…").closest('li')).toHaveAttribute(
      'data-status',
      'pending'
    );
  });

  it('clicking Generate Form transitions through generating to a result with the default field set', async () => {
    const user = userEvent.setup();
    render(<ZiaAiFormGenerator {...getFixture('prompt-filled')} generationDelayMs={20} />);
    await user.click(screen.getByRole('button', { name: 'Generate Form' }));

    // Interim generating state, asserted synchronously right after the click.
    expect(screen.getByText('Analyzing your request…')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Create Form' })).not.toBeInTheDocument();

    expect(await screen.findByRole('button', { name: 'Create Form' })).toBeInTheDocument();
    expect(screen.getByText('Customer Feedback Survey')).toBeInTheDocument();
    expect(screen.getByText('How satisfied are you with our service?')).toBeInTheDocument();
  });

  it('the generated field list is fixed/canned regardless of the prompt text typed', async () => {
    const user = userEvent.setup();
    render(<ZiaAiFormGenerator {...getFixture('prompt-empty')} generationDelayMs={20} />);
    await user.type(
      screen.getByRole('textbox', { name: 'Describe the form you want to create' }),
      'Totally unrelated prompt about pizza toppings'
    );
    await user.click(screen.getByRole('button', { name: 'Generate Form' }));

    expect(await screen.findByText('Customer Feedback Survey')).toBeInTheDocument();
    expect(screen.getByText('How satisfied are you with our service?')).toBeInTheDocument();
  });

  it('clicking Regenerate replaces the entire field list rather than merging with it', async () => {
    const user = userEvent.setup();
    const onRegenerate = vi.fn();
    render(
      <ZiaAiFormGenerator {...getFixture('result')} generationDelayMs={20} onRegenerate={onRegenerate} />
    );

    // Starting (first-generation) field set.
    expect(screen.getByText('How satisfied are you with our service?')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Regenerate' }));
    // Mid-regeneration: back on the generating ladder.
    expect(screen.getByText('Analyzing your request…')).toBeInTheDocument();

    await screen.findByText('What could we improve?');
    // The old field is gone entirely — a full replace, not an append/merge.
    expect(screen.queryByText('How satisfied are you with our service?')).not.toBeInTheDocument();
    expect(screen.getByText('Would you recommend us to a friend?')).toBeInTheDocument();
    expect(onRegenerate).toHaveBeenCalledTimes(1);
  });

  it('the Regenerate panel is re-editable and its current description/tone carry into the next generation', async () => {
    const user = userEvent.setup();
    render(<ZiaAiFormGenerator {...getFixture('result')} generationDelayMs={20} />);

    const regenDescription = screen.getByRole('textbox', { name: 'Description' });
    await user.clear(regenDescription);
    await user.type(regenDescription, 'Create a totally different survey');
    expect(regenDescription).toHaveValue('Create a totally different survey');

    await user.click(screen.getByRole('button', { name: 'Regenerate' }));
    await screen.findByText('What could we improve?');
    // The edited description carries forward as the new "current" description.
    expect(screen.getByRole('textbox', { name: 'Description' })).toHaveValue(
      'Create a totally different survey'
    );
  });

  it('Regenerate is disabled when the description is cleared to empty', async () => {
    const user = userEvent.setup();
    render(<ZiaAiFormGenerator {...getFixture('result')} />);
    const regenDescription = screen.getByRole('textbox', { name: 'Description' });
    await user.clear(regenDescription);
    expect(screen.getByRole('button', { name: 'Regenerate' })).toBeDisabled();
  });

  it('"Create Form" fires onCreateForm and resets to closed with no confirmation', async () => {
    const user = userEvent.setup();
    const onCreateForm = vi.fn();
    render(<ZiaAiFormGenerator {...getFixture('result')} onCreateForm={onCreateForm} />);
    await user.click(screen.getByRole('button', { name: 'Create Form' }));

    expect(onCreateForm).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Generate with Zia AI/ })).toBeInTheDocument();
  });

  it('"Create Form" is not rendered while still generating', () => {
    render(<ZiaAiFormGenerator {...getFixture('generating')} />);
    expect(screen.queryByRole('button', { name: 'Create Form' })).not.toBeInTheDocument();
  });

  it('closing the modal via the X button resets to closed without calling onCreateForm', async () => {
    const user = userEvent.setup();
    const onCreateForm = vi.fn();
    render(<ZiaAiFormGenerator {...getFixture('result')} onCreateForm={onCreateForm} />);
    await user.click(screen.getByRole('button', { name: 'Close AI form generator' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(onCreateForm).not.toHaveBeenCalled();
  });

  it('Escape closes the modal the same way as the X button', async () => {
    const user = userEvent.setup();
    render(<ZiaAiFormGenerator {...getFixture('prompt-empty')} />);
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('the Content Tone dropdown defaults to Professional and can be changed', async () => {
    const user = userEvent.setup();
    render(<ZiaAiFormGenerator {...getFixture('prompt-empty')} />);
    const toneSelect = screen.getByRole('combobox', { name: 'Content Tone' });
    expect(toneSelect).toHaveValue('professional');
    await user.selectOptions(toneSelect, 'friendly');
    expect(toneSelect).toHaveValue('friendly');
  });

  it('never calls fetch/XHR across the full prompt -> generate -> regenerate -> create-form cycle', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<ZiaAiFormGenerator {...getFixture('closed')} generationDelayMs={20} />);

    await user.click(screen.getByRole('button', { name: /Generate with Zia AI/ }));
    await user.type(
      screen.getByRole('textbox', { name: 'Describe the form you want to create' }),
      'Build a form'
    );
    await user.click(screen.getByRole('button', { name: 'Generate Form' }));
    await screen.findByRole('button', { name: 'Create Form' });
    await user.click(screen.getByRole('button', { name: 'Regenerate' }));
    await screen.findByRole('button', { name: 'Create Form' });
    await user.click(screen.getByRole('button', { name: 'Create Form' }));

    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
