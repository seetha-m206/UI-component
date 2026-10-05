import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { JotformInputTableField } from './JotformInputTableField';

describe('JotformInputTableField', () => {
  it('renders a genuine table with scoped row/column headers', () => {
    render(<JotformInputTableField />);
    const table = screen.getByRole('table');
    expect(table.tagName).toBe('TABLE');
    expect(within(table).getByText('Service Quality')).toBeInTheDocument();
    expect(within(table).getByText('Not Satisfied')).toBeInTheDocument();
  });

  it('gives each cell a composed aria-label from both row and column', () => {
    render(<JotformInputTableField />);
    expect(
      screen.getByRole('radio', { name: 'Service Quality Not Satisfied' })
    ).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Cleanliness Satisfied' })).toBeInTheDocument();
  });

  it('selecting a cell in a row deselects any other selection in that same row (JS-managed exclusivity)', async () => {
    const user = userEvent.setup();
    render(<JotformInputTableField />);
    const notSatisfied = screen.getByRole('radio', { name: 'Service Quality Not Satisfied' });
    const satisfied = screen.getByRole('radio', { name: 'Service Quality Satisfied' });

    await user.click(notSatisfied);
    expect(notSatisfied).toBeChecked();

    await user.click(satisfied);
    expect(satisfied).toBeChecked();
    expect(notSatisfied).not.toBeChecked();
  });

  it('each cell has its own unique name — not grouped per row — so this is not a native radiogroup', () => {
    render(<JotformInputTableField />);
    const a = screen.getByRole('radio', { name: 'Service Quality Not Satisfied' });
    const b = screen.getByRole('radio', { name: 'Service Quality Somewhat Satisfied' });
    expect(a).toHaveAttribute('name');
    expect(b).toHaveAttribute('name');
    expect(a.getAttribute('name')).not.toBe(b.getAttribute('name'));
  });

  it('blocks submission and shows the error banner when a row is left unanswered under "every row" required mode', async () => {
    const user = userEvent.setup();
    render(<JotformInputTableField requiredMode="every-row" />);
    await user.click(screen.getByRole('button', { name: 'Submit' }));

    expect(
      screen.getByText('There is (1) error on this page. Please correct it before moving on.')
    ).toBeInTheDocument();
    expect(screen.getByText('⊘ Every row is required.')).toBeInTheDocument();
  });

  it('allows submission once every row has at least one radio selection', async () => {
    const user = userEvent.setup();
    render(
      <JotformInputTableField
        rows={['Only Row']}
        columns={['A', 'B']}
        requiredMode="every-row"
      />
    );
    await user.click(screen.getByRole('radio', { name: 'Only Row A' }));
    await user.click(screen.getByRole('button', { name: 'Submit' }));

    expect(screen.getByText('Thank You! Your submission has been received.')).toBeInTheDocument();
    expect(
      screen.queryByText('There is (1) error on this page. Please correct it before moving on.')
    ).not.toBeInTheDocument();
  });

  it('"+add row" appends a new, immediately interactive row', async () => {
    const user = userEvent.setup();
    render(<JotformInputTableField rows={['Only Row']} columns={['A']} />);
    await user.click(screen.getByRole('button', { name: '+ add row' }));
    expect(screen.getByText('New Row 1')).toBeInTheDocument();
  });

  it('removes a row instantly on its × control, with no confirmation modal', async () => {
    const user = userEvent.setup();
    render(<JotformInputTableField rows={['Row One', 'Row Two']} columns={['A']} />);
    await user.click(screen.getByRole('button', { name: 'Remove row Row One' }));
    expect(screen.queryByText('Row One')).not.toBeInTheDocument();
    expect(screen.getByText('Row Two')).toBeInTheDocument();
  });

  it('a text-type column renders a textbox, not a radio, for that cell', () => {
    render(
      <JotformInputTableField
        rows={['Row']}
        columns={['Pick', 'Notes']}
        columnTypes={['radio', 'text']}
      />
    );
    expect(screen.getByRole('textbox', { name: 'Row Notes' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Row Pick' })).toBeInTheDocument();
  });

  it('disables every control when disabled is true', () => {
    render(<JotformInputTableField disabled />);
    expect(screen.getByRole('button', { name: 'Submit' })).toBeDisabled();
    expect(screen.getByRole('button', { name: '+ add row' })).toBeDisabled();
    screen.getAllByRole('radio').forEach((radio) => expect(radio).toBeDisabled());
  });
});
