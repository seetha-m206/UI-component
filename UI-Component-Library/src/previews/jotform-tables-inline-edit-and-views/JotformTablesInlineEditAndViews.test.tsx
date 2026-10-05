import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { JotformTablesInlineEditAndViews } from './JotformTablesInlineEditAndViews';

describe('JotformTablesInlineEditAndViews', () => {
  it('Short Text cell is inline-editable: click to select, click again to edit, type, Tab commits', async () => {
    const user = userEvent.setup();
    render(<JotformTablesInlineEditAndViews />);

    const cellButton = screen.getByRole('button', { name: 'Favorite Drink, row Cappuccino' });
    await user.click(cellButton); // select
    await user.click(cellButton); // enter edit mode

    const input = screen.getByRole('textbox', { name: 'Favorite Drink, row Cappuccino' });
    await user.clear(input);
    await user.type(input, 'Mocha');
    await user.tab(); // commits

    expect(
      screen.getByRole('button', { name: 'Favorite Drink, row Mocha' })
    ).toHaveTextContent('Mocha');
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
  });

  it('Single Choice cell opens a real dropdown of the field\'s options on the second click', async () => {
    const user = userEvent.setup();
    render(<JotformTablesInlineEditAndViews />);

    const cellButton = screen.getByRole('button', { name: 'Visit Frequency, row Cappuccino' });
    await user.click(cellButton);
    await user.click(cellButton);

    const dropdown = screen.getByRole('combobox', { name: 'Visit Frequency, row Cappuccino' });
    expect(within(dropdown).getByRole('option', { name: 'Rarely' })).toBeInTheDocument();
    expect(within(dropdown).getByRole('option', { name: 'Weekly' })).toBeInTheDocument();
    expect(within(dropdown).getByRole('option', { name: 'Daily' })).toBeInTheDocument();
    expect(dropdown).toHaveValue('Weekly');
  });

  it('Star Rating grid-cell click is a confirmed no-op — clicking it never changes the displayed rating', async () => {
    const user = userEvent.setup();
    render(<JotformTablesInlineEditAndViews />);

    const ratingCell = screen.getByRole('button', {
      name: 'Satisfaction, row Cappuccino (read-only in this view — rating 4 of 5)',
    });

    await user.click(ratingCell); // select
    await user.click(ratingCell); // "click again" — a real text/choice cell would enter edit mode here
    await user.click(ratingCell); // a third click, matching the source's own 3-click re-test

    expect(
      screen.getByRole('button', {
        name: 'Satisfaction, row Cappuccino (read-only in this view — rating 4 of 5)',
      })
    ).toBeInTheDocument();
    // No edit affordance of any kind should ever appear for this column.
    expect(screen.queryByRole('slider')).not.toBeInTheDocument();
  });

  it('the row-detail "View" panel DOES let you change the Star Rating', async () => {
    const user = userEvent.setup();
    render(<JotformTablesInlineEditAndViews />);

    await user.click(screen.getAllByRole('button', { name: 'View' })[0]);

    expect(screen.getByRole('dialog', { name: '1 of 3 Entries' })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Set rating to 2 stars' }));

    // The grid cell behind the panel reflects the same row state.
    expect(
      screen.getByRole('button', {
        name: 'Satisfaction, row Cappuccino (read-only in this view — rating 2 of 5)',
      })
    ).toBeInTheDocument();
  });

  it('switching to Boards view groups the same row data by the Visit Frequency field', async () => {
    const user = userEvent.setup();
    render(<JotformTablesInlineEditAndViews />);

    await user.click(screen.getByRole('tab', { name: 'Boards' }));

    const board = screen.getByRole('region', { name: 'Boards view' });
    expect(within(board).getByText('Cappuccino')).toBeInTheDocument();
    expect(within(board).getByText('Espresso')).toBeInTheDocument();
    expect(within(board).getByText('Iced Latte')).toBeInTheDocument();

    const dailyColumn = within(board).getByRole('region', { name: 'Daily column' }) as HTMLElement;
    expect(within(dailyColumn).getByText('Espresso')).toBeInTheDocument();
    expect(within(dailyColumn).queryByText('Cappuccino')).not.toBeInTheDocument();
  });

  it('switching to Calendar view lists the same three rows under a date heading', async () => {
    const user = userEvent.setup();
    render(<JotformTablesInlineEditAndViews />);

    await user.click(screen.getByRole('tab', { name: 'Calendar' }));

    const calendar = screen.getByRole('region', { name: 'Calendar view' });
    expect(within(calendar).getByText('Oct 5, 2026')).toBeInTheDocument();
    expect(within(calendar).getByText('Cappuccino')).toBeInTheDocument();
    expect(within(calendar).getByText('Espresso')).toBeInTheDocument();
    expect(within(calendar).getByText('Iced Latte')).toBeInTheDocument();
  });

  it('"+ Add Computed Column" appends a Qty - Reorder arithmetic column over the same rows', async () => {
    const user = userEvent.setup();
    render(<JotformTablesInlineEditAndViews />);

    await user.click(screen.getByRole('button', { name: '+ Add Computed Column' }));

    expect(screen.getByText('32')).toBeInTheDocument(); // 42 - 10 (Cappuccino row)
    expect(screen.getByText('100')).toBeInTheDocument(); // 125 - 25 (Espresso row)
    expect(screen.getByText('13')).toBeInTheDocument(); // 18 - 5 (Iced Latte row)
    expect(screen.getByRole('button', { name: 'Computed column added' })).toBeDisabled();
  });
});
