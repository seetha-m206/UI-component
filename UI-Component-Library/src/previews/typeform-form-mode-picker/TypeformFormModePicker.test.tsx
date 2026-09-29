import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TypeformFormModePicker } from './TypeformFormModePicker';
import { fixtures } from './fixtures';

function getFixture(id: string) {
  const fixture = fixtures.find((f) => f.id === id);
  if (!fixture) throw new Error(`fixture not found: ${id}`);
  return fixture.props;
}

describe('TypeformFormModePicker', () => {
  it('starts on Universal mode showing the ordinary question canvas, not the review screen', () => {
    render(<TypeformFormModePicker {...getFixture('universal')} />);
    expect(screen.getByText('What is your full name?')).toBeInTheDocument();
    expect(screen.queryByText('Review your form')).not.toBeInTheDocument();
  });

  it('opens the mode menu with exactly 4 options, two of them locked', async () => {
    const user = userEvent.setup();
    render(<TypeformFormModePicker {...getFixture('universal')} />);

    await user.click(screen.getByRole('button', { name: /Form mode/ }));

    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(4);
    expect(screen.getByRole('option', { name: /Universal/ })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /Lead qualification/ })).toBeInTheDocument();
    const knowledgeQuiz = screen.getByRole('option', { name: /Knowledge quiz/ });
    const matchQuiz = screen.getByRole('option', { name: /Match quiz/ });
    expect(knowledgeQuiz).toHaveAttribute('aria-disabled', 'true');
    expect(matchQuiz).toHaveAttribute('aria-disabled', 'true');
  });

  it('selecting "Lead qualification" replaces the canvas with the AI-drafted review screen', async () => {
    const user = userEvent.setup();
    const onModeChange = vi.fn();
    render(
      <TypeformFormModePicker {...getFixture('universal')} onModeChange={onModeChange} />
    );

    await user.click(screen.getByRole('button', { name: /Form mode/ }));
    await user.click(screen.getByRole('option', { name: /Lead qualification/ }));

    expect(onModeChange).toHaveBeenCalledWith('lead_qualification');
    expect(screen.getByRole('heading', { name: 'Review your form' })).toBeInTheDocument();
    expect(screen.queryByText('Rating')).not.toBeInTheDocument();
    // The same 4 questions now surface as AI-drafted rule rows.
    expect(screen.getByText('What is your full name?')).toBeInTheDocument();
    expect(screen.getAllByText('AI-drafted rule')).toHaveLength(4);
  });

  it('switching back to Universal restores the ordinary canvas with no data loss (round trip)', async () => {
    const user = userEvent.setup();
    render(<TypeformFormModePicker {...getFixture('round-trip-start')} />);

    await user.click(screen.getByRole('button', { name: /Form mode/ }));
    await user.click(screen.getByRole('option', { name: /Lead qualification/ }));
    expect(screen.getByRole('heading', { name: 'Review your form' })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /Form mode/ }));
    await user.click(screen.getByRole('option', { name: /^Universal/ }));

    expect(screen.queryByRole('heading', { name: 'Review your form' })).not.toBeInTheDocument();
    // All 4 questions and the ending are intact, exactly as the source record confirmed.
    expect(screen.getByText('What is your full name?')).toBeInTheDocument();
    expect(screen.getByText('How satisfied are you with our product?')).toBeInTheDocument();
    expect(screen.getByText('Would you recommend us to a friend?')).toBeInTheDocument();
    expect(screen.getByText('Any other comments?')).toBeInTheDocument();
    expect(screen.getByText('Thank you screen')).toBeInTheDocument();
  });

  it('clicking a locked option (Knowledge quiz) is a no-op: no mode switch, canvas unchanged', async () => {
    const user = userEvent.setup();
    const onModeChange = vi.fn();
    render(
      <TypeformFormModePicker {...getFixture('universal')} onModeChange={onModeChange} />
    );

    await user.click(screen.getByRole('button', { name: /Form mode/ }));
    await user.click(screen.getByRole('option', { name: /Knowledge quiz/ }));

    expect(onModeChange).not.toHaveBeenCalled();
    expect(screen.getByText('What is your full name?')).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Review your form' })).not.toBeInTheDocument();
  });

  it('clicking a locked option (Match quiz) is also a no-op', async () => {
    const user = userEvent.setup();
    const onModeChange = vi.fn();
    render(
      <TypeformFormModePicker {...getFixture('universal')} onModeChange={onModeChange} />
    );

    await user.click(screen.getByRole('button', { name: /Form mode/ }));
    await user.click(screen.getByRole('option', { name: /Match quiz/ }));

    expect(onModeChange).not.toHaveBeenCalled();
  });

  it('Escape closes the menu and returns focus to the trigger', async () => {
    const user = userEvent.setup();
    render(<TypeformFormModePicker {...getFixture('universal')} />);

    const trigger = screen.getByRole('button', { name: /Form mode/ });
    await user.click(trigger);
    expect(screen.getByRole('listbox')).toBeInTheDocument();

    await user.keyboard('{Escape}');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    expect(document.activeElement).toBe(trigger);
  });

  it('disabled prevents the menu from opening at all', async () => {
    const user = userEvent.setup();
    render(<TypeformFormModePicker {...getFixture('disabled')} />);

    const trigger = screen.getByRole('button', { name: /Form mode/ });
    expect(trigger).toBeDisabled();
    await user.click(trigger);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('the Lead qualification fixture starts directly on the review screen', () => {
    render(<TypeformFormModePicker {...getFixture('lead-qualification')} />);
    expect(screen.getByRole('heading', { name: 'Review your form' })).toBeInTheDocument();
  });
});
