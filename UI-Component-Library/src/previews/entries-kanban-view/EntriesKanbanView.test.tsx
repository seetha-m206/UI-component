import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { EntriesKanbanView, type KanbanCard, type KanbanColumn } from './EntriesKanbanView';

const COLUMNS: KanbanColumn[] = [
  { id: 'first-choice', name: 'First Choice', colorIndex: 1 },
  { id: 'second-choice', name: 'Second Choice', colorIndex: 2 },
  { id: 'third-choice', name: 'Third Choice', colorIndex: 3 },
];

function initialCards(): KanbanCard[] {
  return [
    {
      id: 'entry-1',
      columnId: 'first-choice',
      title: 'First Choice',
      fields: [{ label: 'Single Line', value: 'Ananya Rao' }],
    },
    {
      id: 'entry-2',
      columnId: 'second-choice',
      title: 'Second Choice',
      fields: [{ label: 'Single Line', value: 'Devesh Patel' }],
    },
  ];
}

function Controlled(props: { disabled?: boolean; cards?: KanbanCard[] }) {
  const [cards, setCards] = useState<KanbanCard[]>(props.cards ?? initialCards());
  return (
    <EntriesKanbanView
      columns={COLUMNS}
      cards={cards}
      disabled={props.disabled}
      onMoveCard={(cardId, newColumnId) => {
        setCards((prev) =>
          prev.map((card) => (card.id === cardId ? { ...card, columnId: newColumnId } : card))
        );
      }}
    />
  );
}

function getColumn(name: string) {
  return screen.getByRole('region', { name }) as HTMLElement;
}

describe('EntriesKanbanView', () => {
  it('renders one column per group with its cards', () => {
    render(<Controlled />);
    expect(screen.getByRole('region', { name: 'First Choice' })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: 'Second Choice' })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: 'Third Choice' })).toBeInTheDocument();
    expect(within(getColumn('First Choice')).getByText('Ananya Rao')).toBeInTheDocument();
    expect(within(getColumn('Second Choice')).getByText('Devesh Patel')).toBeInTheDocument();
  });

  it('shows the "No Entries" placeholder for an empty column', () => {
    render(<Controlled />);
    expect(within(getColumn('Third Choice')).getByText('No Entries')).toBeInTheDocument();
    expect(within(getColumn('Third Choice')).getByRole('status')).toBeInTheDocument();
  });

  it('moves a card to another column via the "Move to…" control, updating counts', async () => {
    const user = userEvent.setup();
    render(<Controlled />);

    expect(within(getColumn('First Choice')).getByText('Ananya Rao')).toBeInTheDocument();
    expect(within(getColumn('Third Choice')).getByText('No Entries')).toBeInTheDocument();

    const card = screen.getByText('Ananya Rao').closest('li') as HTMLElement;
    const moveSelect = within(card).getByRole('combobox', { name: /Move to…/ });
    await user.selectOptions(moveSelect, 'Third Choice');

    expect(within(getColumn('First Choice')).getByText('No Entries')).toBeInTheDocument();
    expect(within(getColumn('Third Choice')).getByText('Ananya Rao')).toBeInTheDocument();
  });

  it("only offers the other columns as move targets, not the card's own column", async () => {
    render(<Controlled />);
    const card = screen.getByText('Ananya Rao').closest('li') as HTMLElement;
    const moveSelect = within(card).getByRole('combobox', { name: /Move to…/ });
    const optionLabels = within(moveSelect)
      .getAllByRole('option')
      .map((option) => option.textContent);
    expect(optionLabels).toEqual(['Move to…', 'Second Choice', 'Third Choice']);
  });

  it("disables every card's move control when disabled is true", () => {
    render(<Controlled disabled />);
    const card = screen.getByText('Ananya Rao').closest('li') as HTMLElement;
    const moveSelect = within(card).getByRole('combobox', { name: /Move to…/ });
    expect(moveSelect).toBeDisabled();
  });

  it('is fully keyboard operable: Tab reaches the move control and arrow keys change its value', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    const card = screen.getByText('Ananya Rao').closest('li') as HTMLElement;
    const moveSelect = within(card).getByRole('combobox', {
      name: /Move to…/,
    }) as HTMLSelectElement;

    moveSelect.focus();
    expect(moveSelect).toHaveFocus();

    await user.selectOptions(moveSelect, 'Second Choice');
    expect(within(getColumn('Second Choice')).getAllByText('Ananya Rao')[0]).toBeInTheDocument();
  });
});
