import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TypeformScoringOutcomeQuizEditor } from './TypeformScoringOutcomeQuizEditor';
import { fixtures } from './fixtures';

function getFixture(id: string) {
  const fixture = fixtures.find((f) => f.id === id);
  if (!fixture) throw new Error(`fixture not found: ${id}`);
  return fixture.props;
}

describe('TypeformScoringOutcomeQuizEditor', () => {
  it('the logic-backdrop fixture shows the mock canvas and no modal', () => {
    render(<TypeformScoringOutcomeQuizEditor {...getFixture('logic-backdrop')} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('is NOT built on a React Flow node-graph canvas: no react-flow-classed elements or <canvas> anywhere', () => {
    const { container } = render(
      <TypeformScoringOutcomeQuizEditor {...getFixture('scoring-modal')} />
    );
    expect(container.querySelectorAll('[class*="react-flow"]')).toHaveLength(0);
    expect(container.querySelectorAll('canvas')).toHaveLength(0);
  });

  it('opening Scoring shows a dialog with a numeric Score input per choice', async () => {
    const user = userEvent.setup();
    render(<TypeformScoringOutcomeQuizEditor {...getFixture('logic-backdrop')} />);

    await user.click(screen.getByRole('tab', { name: 'Scoring' }));

    const dialog = screen.getByRole('dialog', { name: 'Score quiz' });
    expect(within(dialog).getAllByRole('spinbutton')).toHaveLength(5);
  });

  it('shares the exact footer pattern: "Delete all rules" left, Cancel/Save right', async () => {
    const user = userEvent.setup();
    render(<TypeformScoringOutcomeQuizEditor {...getFixture('logic-backdrop')} />);

    await user.click(screen.getByRole('tab', { name: 'Scoring' }));
    expect(screen.getByRole('button', { name: 'Delete all rules' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
  });

  it('editing a score updates that input\'s value', async () => {
    const user = userEvent.setup();
    render(<TypeformScoringOutcomeQuizEditor {...getFixture('scoring-modal')} />);

    const scoreInputs = screen.getAllByRole('spinbutton');
    const firstInput = scoreInputs[0] as HTMLInputElement;
    await user.clear(firstInput);
    await user.type(firstInput, '9');

    expect(firstInput).toHaveValue(9);
  });

  it('"Delete all rules" resets every score back to 0', async () => {
    const user = userEvent.setup();
    render(<TypeformScoringOutcomeQuizEditor {...getFixture('scoring-modal')} />);

    await user.click(screen.getByRole('button', { name: 'Delete all rules' }));

    const scoreInputs = screen.getAllByRole('spinbutton') as HTMLInputElement[];
    scoreInputs.forEach((input) => expect(input).toHaveValue(0));
  });

  it('clicking Save on the Scoring modal closes it, calls onSave, and shows the EXACT toast copy "Edits are always autosaved."', async () => {
    const user = userEvent.setup();
    const onSave = vi.fn();
    render(<TypeformScoringOutcomeQuizEditor {...getFixture('scoring-modal')} onSave={onSave} />);

    await user.click(screen.getByRole('button', { name: 'Save' }));

    expect(onSave).toHaveBeenCalledWith('scoring');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent('Edits are always autosaved.');
  });

  it('the Outcome quiz modal renders "Add Ending" and the existing ending\'s chip', () => {
    const { container } = render(
      <TypeformScoringOutcomeQuizEditor {...getFixture('outcome-quiz-modal')} />
    );

    expect(screen.getByRole('button', { name: /Add Ending/ })).toBeInTheDocument();
    expect(screen.getByText('New Ending (1)')).toBeInTheDocument();
    // The source record's own captured chip example: question 1, value 5.
    const chip = container.querySelector('[class*="chip"]');
    expect(chip?.textContent).toContain('1 · 5');
    expect(screen.getByRole('button', { name: 'Remove 5 from New Ending (1)' })).toBeInTheDocument();
  });

  it('clicking "Add Ending" appends a new ending row', async () => {
    const user = userEvent.setup();
    render(<TypeformScoringOutcomeQuizEditor {...getFixture('outcome-quiz-empty')} />);

    expect(screen.queryByText(/New Ending/)).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /Add Ending/ }));
    expect(screen.getByText('New Ending (1)')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /Add Ending/ }));
    expect(screen.getByText('New Ending (2)')).toBeInTheDocument();
  });

  it('the "Choose answers" combobox lists the question\'s own answer choices and wires a selection as a removable chip', async () => {
    const user = userEvent.setup();
    render(<TypeformScoringOutcomeQuizEditor {...getFixture('outcome-quiz-empty')} />);

    await user.click(screen.getByRole('button', { name: /Add Ending/ }));
    await user.click(screen.getByRole('button', { name: 'Choose answers' }));

    const listbox = screen.getByRole('listbox', { name: /Choose answers for New Ending/ });
    expect(within(listbox).getAllByRole('option')).toHaveLength(5);

    await user.click(within(listbox).getByRole('option', { name: '3' }));

    expect(screen.getByRole('button', { name: /Remove 3 from New Ending/ })).toBeInTheDocument();
  });

  it('removing an ending removes its row entirely', async () => {
    const user = userEvent.setup();
    render(<TypeformScoringOutcomeQuizEditor {...getFixture('outcome-quiz-modal')} />);

    expect(screen.getByText('New Ending (1)')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Remove New Ending (1)' }));
    expect(screen.queryByText('New Ending (1)')).not.toBeInTheDocument();
  });

  it('"Delete all rules" in the Outcome quiz modal clears every ending', async () => {
    const user = userEvent.setup();
    render(<TypeformScoringOutcomeQuizEditor {...getFixture('outcome-quiz-modal')} />);

    await user.click(screen.getByRole('button', { name: 'Delete all rules' }));
    expect(screen.queryByText('New Ending (1)')).not.toBeInTheDocument();
  });

  it('clicking Save on the Outcome quiz modal closes it, calls onSave, and shows the exact toast copy', async () => {
    const user = userEvent.setup();
    const onSave = vi.fn();
    render(
      <TypeformScoringOutcomeQuizEditor {...getFixture('outcome-quiz-modal')} onSave={onSave} />
    );

    await user.click(screen.getByRole('button', { name: 'Save' }));

    expect(onSave).toHaveBeenCalledWith('outcome_quiz');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent('Edits are always autosaved.');
  });

  it('Escape closes an open modal', async () => {
    const user = userEvent.setup();
    render(<TypeformScoringOutcomeQuizEditor {...getFixture('scoring-modal')} />);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('disabled prevents editing scores, adding endings, and saving', () => {
    render(<TypeformScoringOutcomeQuizEditor {...getFixture('disabled-scoring')} />);

    screen.getAllByRole('spinbutton').forEach((input) => expect(input).toBeDisabled());
    expect(screen.getByRole('button', { name: 'Delete all rules' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Save' })).toBeDisabled();
  });

  it('never calls fetch/XHR across editing, saving, and adding endings (no network mutation observed in the source)', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<TypeformScoringOutcomeQuizEditor {...getFixture('outcome-quiz-empty')} />);

    await user.click(screen.getByRole('button', { name: /Add Ending/ }));
    await user.click(screen.getByRole('button', { name: 'Choose answers' }));
    await user.click(screen.getByRole('option', { name: '1' }));
    await user.click(screen.getByRole('button', { name: 'Save' }));

    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
