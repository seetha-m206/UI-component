import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { JotformConditionalLogic, type ConditionRule } from './JotformConditionalLogic';

const SHOW_DRINK_IF_VISITS: ConditionRule = {
  id: 'rule-1',
  ifFieldId: 'source',
  operator: 'Is Equal To',
  value: 'Yes',
  action: 'Show',
  targetFieldId: 'target',
};

describe('JotformConditionalLogic', () => {
  it('shows an empty state and the "+ Add Condition" button when no rules exist', () => {
    render(<JotformConditionalLogic />);
    expect(screen.getByText('No conditions yet.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '+ Add Condition' })).toBeInTheDocument();
  });

  it('adding a condition via the picker: opens the 9-type picker, only Show/Hide Field is enabled, and saving creates a rule summary card', async () => {
    const user = userEvent.setup();
    render(<JotformConditionalLogic />);

    await user.click(screen.getByRole('button', { name: '+ Add Condition' }));
    expect(screen.getByRole('dialog', { name: 'Add Condition' })).toBeInTheDocument();

    // Full 9-action picker is present for structural fidelity...
    expect(screen.getByRole('button', { name: /Update\/Calculate Field/ })).toBeDisabled();
    expect(screen.getByRole('button', { name: /Run Workflow/ })).toBeDisabled();
    const showHideButton = screen.getByRole('button', { name: /Show\/Hide Field/ });
    expect(showHideButton).toBeEnabled();

    // ...but only Show/Hide Field opens the IF/DO editor.
    await user.click(showHideButton);
    expect(
      screen.getByRole('dialog', { name: 'Show/Hide Field condition editor' })
    ).toBeInTheDocument();

    // Defaults: IF "Do you visit our coffee shop?" Is Equal To "Yes"
    // DO Show "What is your favorite drink?" — just Save it as-is.
    await user.click(screen.getByRole('button', { name: 'Save' }));

    expect(
      screen.getByText(
        'IF "Do you visit our coffee shop?" Is Equal To "Yes" THEN Show "What is your favorite drink?"'
      )
    ).toBeInTheDocument();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('live preview: toggling the source field instantly shows/hides the target field (no saved rule = always visible)', async () => {
    const user = userEvent.setup();
    render(<JotformConditionalLogic />);
    const container = screen.getByTestId('target-field-container');
    expect(container).toHaveStyle({ display: 'flex' });

    await user.click(screen.getByRole('radio', { name: 'No' }));
    expect(container).toHaveStyle({ display: 'flex' });
  });

  it('live preview with a saved rule: target field is hidden until the source answer matches, then snaps visible with no transition styling applied', async () => {
    const user = userEvent.setup();
    render(<JotformConditionalLogic initialRules={[SHOW_DRINK_IF_VISITS]} />);
    const container = screen.getByTestId('target-field-container');

    // Rule is "Show ... IF Is Equal To Yes" -> hidden by default (unanswered).
    expect(container).toHaveStyle({ display: 'none' });

    await user.click(screen.getByRole('radio', { name: 'Yes' }));
    expect(container).toHaveStyle({ display: 'flex' });

    await user.click(screen.getByRole('radio', { name: 'No' }));
    expect(container).toHaveStyle({ display: 'none' });
  });

  it('stale-value persistence: a value typed while visible survives a hide -> re-show cycle', async () => {
    const user = userEvent.setup();
    render(<JotformConditionalLogic initialRules={[SHOW_DRINK_IF_VISITS]} />);

    await user.click(screen.getByRole('radio', { name: 'Yes' }));
    const drinkInput = screen.getByLabelText('What is your favorite drink?');
    await user.type(drinkInput, 'Cappuccino');
    expect(drinkInput).toHaveValue('Cappuccino');

    await user.click(screen.getByRole('radio', { name: 'No' }));
    expect(screen.getByTestId('target-field-container')).toHaveStyle({ display: 'none' });

    await user.click(screen.getByRole('radio', { name: 'Yes' }));
    expect(screen.getByTestId('target-field-container')).toHaveStyle({ display: 'flex' });
    expect(screen.getByLabelText('What is your favorite drink?')).toHaveValue('Cappuccino');
  });

  it('delete-field flow: deleting the source field shows the MISSING FIELD error on the rule and makes the respondent-facing target field fail open (permanently visible)', async () => {
    const user = userEvent.setup();
    render(<JotformConditionalLogic initialRules={[SHOW_DRINK_IF_VISITS]} />);

    const container = screen.getByTestId('target-field-container');
    expect(container).toHaveStyle({ display: 'none' });

    await user.click(
      screen.getByRole('button', { name: 'Delete field: "Do you visit our coffee shop?" (demo)' })
    );

    expect(screen.getByText('MISSING FIELD')).toBeInTheDocument();
    expect(
      screen.getByText(
        'ERROR: One or more fields have been deleted which are required by this condition.'
      )
    ).toBeInTheDocument();

    // Source field itself disappears from the respondent preview (deleted)...
    expect(screen.queryByRole('radio', { name: 'Yes' })).not.toBeInTheDocument();
    // ...and the broken rule fails open: target is now permanently visible.
    expect(container).toHaveStyle({ display: 'flex' });
  });

  it('a broken rule card still exposes a "Delete rule" control, and rules list reflects removal', async () => {
    const user = userEvent.setup();
    render(<JotformConditionalLogic initialRules={[SHOW_DRINK_IF_VISITS]} />);
    const card = screen.getByTestId('rule-rule-1');
    await user.click(within(card).getByRole('button', { name: 'Delete rule' }));
    expect(screen.queryByTestId('rule-rule-1')).not.toBeInTheDocument();
    expect(screen.getByText('No conditions yet.')).toBeInTheDocument();
  });

  it('disables all interactive controls when disabled is true', () => {
    render(<JotformConditionalLogic initialRules={[SHOW_DRINK_IF_VISITS]} disabled />);
    expect(screen.getByRole('button', { name: '+ Add Condition' })).toBeDisabled();
    screen.getAllByRole('radio').forEach((radio) => expect(radio).toBeDisabled());
    expect(screen.getByLabelText('What is your favorite drink?')).toBeDisabled();
  });
});
