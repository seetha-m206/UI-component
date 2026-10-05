import { act, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { JotformAiAgents } from './JotformAiAgents';
import { fixtures } from './fixtures';

function getFixture(id: string) {
  const fixture = fixtures.find((f) => f.id === id);
  if (!fixture) throw new Error(`fixture not found: ${id}`);
  return fixture.props;
}

describe('JotformAiAgents', () => {
  it('starts on the prompt screen with no agent built yet', () => {
    render(<JotformAiAgents {...getFixture('prompt')} />);
    expect(screen.getByRole('textbox', { name: 'Describe your agent' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Create' })).toBeDisabled();
    expect(screen.queryByRole('tablist', { name: 'Agent builder mode' })).not.toBeInTheDocument();
  });

  it('renders the "generating" fixture as a frozen snapshot with no scheduled timer', async () => {
    vi.useFakeTimers();
    render(<JotformAiAgents {...getFixture('generating')} />);
    expect(screen.getByText('Crafting your perfect agent')).toBeInTheDocument();
    await act(async () => {
      vi.advanceTimersByTime(10000);
    });
    expect(screen.queryByRole('tablist', { name: 'Agent builder mode' })).not.toBeInTheDocument();
    vi.useRealTimers();
  });

  it('submitting a prompt runs the two-step generation sequence and lands on BUILD with a named agent', async () => {
    const user = userEvent.setup();
    const onAgentGenerated = vi.fn();
    render(
      <JotformAiAgents
        {...getFixture('prompt')}
        stepDelayMs={30}
        onAgentGenerated={onAgentGenerated}
      />
    );

    await user.type(
      screen.getByRole('textbox', { name: 'Describe your agent' }),
      'Create a Coffee Club loyalty assistant'
    );
    await user.click(screen.getByRole('button', { name: 'Create' }));

    expect(screen.getByText('Crafting your perfect agent')).toBeInTheDocument();

    expect(
      await screen.findByRole('tablist', { name: 'Agent builder mode' }, { timeout: 5000 })
    ).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'BUILD' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getAllByText('Ian: Coffee Club Loyalty Assistant').length).toBeGreaterThan(0);
    expect(onAgentGenerated).toHaveBeenCalledWith('Create a Coffee Club loyalty assistant');
  });

  it('the Create button is disabled for empty/whitespace-only input', async () => {
    const user = userEvent.setup();
    render(<JotformAiAgents {...getFixture('prompt')} />);
    const input = screen.getByRole('textbox', { name: 'Describe your agent' });
    await user.type(input, '   ');
    expect(screen.getByRole('button', { name: 'Create' })).toBeDisabled();
  });

  it('BUILD tab shows the live chat preview with a working quick-reply button and the CHANNELS sidebar', async () => {
    const user = userEvent.setup();
    render(<JotformAiAgents {...getFixture('build-generated-agent')} />);

    expect(screen.getByText(/Hi, I'm Ian/)).toBeInTheDocument();
    const channels = screen.getByLabelText('Channels');
    expect(within(channels).getByText('Chatbot')).toBeInTheDocument();
    expect(within(channels).getByText('WhatsApp')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Learn more' }));
    expect(
      screen.getByText('Coffee Club members earn 1 point per $1 spent, plus exclusive monthly perks.')
    ).toBeInTheDocument();
  });

  it('selecting a channel in the CHANNELS sidebar is purely visual (aria-pressed toggles, no navigation)', async () => {
    const user = userEvent.setup();
    render(<JotformAiAgents {...getFixture('build-generated-agent')} />);
    const instagram = screen.getByRole('button', { name: 'Instagram' });
    expect(instagram).toHaveAttribute('aria-pressed', 'false');
    await user.click(instagram);
    expect(instagram).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: 'Chatbot' })).toHaveAttribute('aria-pressed', 'false');
  });

  it('TRAIN tab -> FORMS lets you pick a fixture form, adding it to the connected list', async () => {
    const user = userEvent.setup();
    render(
      <JotformAiAgents
        {...getFixture('build-generated-agent')}
        initialTab="train"
        initialTrainSection="forms"
      />
    );

    expect(
      screen.getByText('Connect forms to your agent to use form data')
    ).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: '+ Add New Form' }));
    const picker = screen.getByRole('listbox', { name: 'Choose a form to connect' });
    await user.click(within(picker).getByText('Coffee Club Membership Signup'));

    expect(screen.getByText('Coffee Club Membership Signup')).toBeInTheDocument();
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('TRAIN tab -> WORKFLOWS shows the NEW badge', async () => {
    const user = userEvent.setup();
    render(<JotformAiAgents {...getFixture('build-generated-agent')} initialTab="train" />);
    await user.click(screen.getByRole('button', { name: /WORKFLOWS/ }));
    expect(screen.getByText('Create multi-step automations')).toBeInTheDocument();
  });

  it('PUBLISH tab shows both the paid Buy Number path and the free test-call path', async () => {
    const user = userEvent.setup();
    const onBuyNumber = vi.fn();
    const onTestCall = vi.fn();
    render(
      <JotformAiAgents
        {...getFixture('publish-phone-agent')}
        onBuyNumber={onBuyNumber}
        onTestCall={onTestCall}
      />
    );

    expect(
      screen.getByText('Buy an AI Agent Phone Number — Use for calls, starting from just $10/month')
    ).toBeInTheDocument();
    expect(screen.getByText('+1 601 843 6706')).toBeInTheDocument();
    expect(screen.getByText('01826')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Buy Number' }));
    expect(onBuyNumber).toHaveBeenCalledTimes(1);
    expect(screen.getByText(/Demo only — this would start checkout/)).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Make a Test Call' }));
    expect(onTestCall).toHaveBeenCalledTimes(1);
    expect(screen.getByText(/Demo only — no real call is placed/)).toBeInTheDocument();
  });

  it('the voice "Change" control cycles between the two canned voices', async () => {
    const user = userEvent.setup();
    render(<JotformAiAgents {...getFixture('publish-phone-agent')} />);
    expect(screen.getByText(/Liam — English, American, Male, Young/)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Change' }));
    expect(screen.getByText(/Maya — English, American, Female, Young/)).toBeInTheDocument();
  });

  it('never calls fetch/XHR across the full prompt -> generate -> BUILD/TRAIN/PUBLISH cycle', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<JotformAiAgents {...getFixture('prompt')} stepDelayMs={20} />);

    await user.type(
      screen.getByRole('textbox', { name: 'Describe your agent' }),
      'Create a loyalty agent'
    );
    await user.click(screen.getByRole('button', { name: 'Create' }));
    await screen.findByRole('tablist', { name: 'Agent builder mode' }, { timeout: 5000 });

    await user.click(screen.getByRole('tab', { name: 'TRAIN' }));
    await user.click(screen.getByRole('tab', { name: 'PUBLISH' }));
    await user.click(screen.getByRole('button', { name: 'Buy Number' }));

    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
