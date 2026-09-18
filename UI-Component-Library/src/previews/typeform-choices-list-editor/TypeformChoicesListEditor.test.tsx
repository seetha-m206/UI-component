import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import {
  TypeformChoicesListEditor,
  moveItem,
  type TypeformChoiceItem,
} from './TypeformChoicesListEditor';

function seed(...values: string[]): TypeformChoiceItem[] {
  return values.map((value, i) => ({ id: `c${i}`, value }));
}

function Controlled(props: { initial: TypeformChoiceItem[]; disabled?: boolean }) {
  const [choices, setChoices] = useState<TypeformChoiceItem[]>(props.initial);
  return (
    <TypeformChoicesListEditor choices={choices} onChange={setChoices} disabled={props.disabled} />
  );
}

/** A minimal fake DataTransfer — jsdom doesn't implement the real one. */
function fakeDataTransfer() {
  const store = new Map<string, string>();
  return {
    effectAllowed: '',
    dropEffect: '',
    files: [],
    items: [],
    types: [],
    setData: (format: string, data: string) => store.set(format, data),
    getData: (format: string) => store.get(format) ?? '',
    clearData: () => store.clear(),
  } as unknown as DataTransfer;
}

describe('moveItem (pure reorder helper, unit-tested directly)', () => {
  it('moves an item from one index to another, preserving the rest of the order', () => {
    expect(moveItem(['Red', 'Green', 'Blue'], 2, 0)).toEqual(['Blue', 'Red', 'Green']);
    expect(moveItem(['Blue', 'Red', 'Green'], 0, 2)).toEqual(['Red', 'Green', 'Blue']);
    expect(moveItem(['Green', 'Blue', 'Red'], 0, 2)).toEqual(['Blue', 'Red', 'Green']);
  });

  it('is a no-op for an out-of-range or identical index', () => {
    const list = ['Red', 'Green', 'Blue'];
    expect(moveItem(list, 1, 1)).toBe(list);
    expect(moveItem(list, -1, 1)).toBe(list);
    expect(moveItem(list, 0, 99)).toBe(list);
  });
});

describe('TypeformChoicesListEditor', () => {
  it('renders live, sequential letter badges (A, B, C…) reflecting current order', () => {
    render(<Controlled initial={seed('Red', 'Green', 'Blue')} />);
    expect(screen.getByRole('textbox', { name: 'Choice A text' })).toHaveValue('Red');
    expect(screen.getByRole('textbox', { name: 'Choice B text' })).toHaveValue('Green');
    expect(screen.getByRole('textbox', { name: 'Choice C text' })).toHaveValue('Blue');
  });

  it('appends a new, auto-focused empty row on "Add choice" — no dialog', async () => {
    const user = userEvent.setup();
    render(<Controlled initial={seed('Red', 'Green')} />);
    await user.click(screen.getByRole('button', { name: 'Add choice' }));

    const inputs = screen.getAllByRole('textbox');
    expect(inputs).toHaveLength(3);
    expect((inputs[2] as HTMLInputElement).value).toBe('');
    expect(inputs[2]).toHaveFocus();
  });

  it('deletes a row instantly on the delete icon, with no confirmation prompt, and re-letters the rest', async () => {
    const user = userEvent.setup();
    render(<Controlled initial={seed('Red', 'Green', 'Blue')} />);
    await user.click(screen.getByRole('button', { name: 'Delete choice B' }));

    expect(screen.queryByDisplayValue('Green')).not.toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Choice A text' })).toHaveValue('Red');
    expect(screen.getByRole('textbox', { name: 'Choice B text' })).toHaveValue('Blue');
  });

  it('has no minimum-choice guard — deleting down to zero choices is allowed', async () => {
    const user = userEvent.setup();
    render(<Controlled initial={seed('Only option')} />);
    await user.click(screen.getByRole('button', { name: 'Delete choice A' }));
    expect(screen.queryAllByRole('textbox')).toHaveLength(0);
  });

  it('commits an edited value on blur', async () => {
    const user = userEvent.setup();
    render(<Controlled initial={seed('Red')} />);
    const input = screen.getByRole('textbox', { name: 'Choice A text' });
    await user.clear(input);
    await user.type(input, 'Crimson');
    await user.tab();
    expect(screen.getByDisplayValue('Crimson')).toBeInTheDocument();
  });

  it("reorders correctly via native drag-and-drop, matching the record's three confirmed test drags", () => {
    render(<Controlled initial={seed('Red', 'Green', 'Blue')} />);
    const rows = screen.getAllByRole('textbox').map((input) => input.closest('li')!);

    // Drag "Blue" (index 2) to the top (index 0) -> Blue/Red/Green.
    const dataTransfer = fakeDataTransfer();
    fireEvent.dragStart(rows[2], { dataTransfer });
    fireEvent.dragOver(rows[0], { dataTransfer });
    fireEvent.drop(rows[0], { dataTransfer });
    fireEvent.dragEnd(rows[2], { dataTransfer });

    expect(screen.getByRole('textbox', { name: 'Choice A text' })).toHaveValue('Blue');
    expect(screen.getByRole('textbox', { name: 'Choice B text' })).toHaveValue('Red');
    expect(screen.getByRole('textbox', { name: 'Choice C text' })).toHaveValue('Green');
  });

  it('reorders correctly via the ArrowUp/ArrowDown keyboard alternative on the drag handle', async () => {
    const user = userEvent.setup();
    render(<Controlled initial={seed('Red', 'Green', 'Blue')} />);

    const handleB = screen.getByRole('button', { name: 'Drag handle for choice 2 of 3' });
    handleB.focus();
    await user.keyboard('{ArrowUp}');

    // Green (was B) moves above Red -> Green/Red/Blue.
    expect(screen.getByRole('textbox', { name: 'Choice A text' })).toHaveValue('Green');
    expect(screen.getByRole('textbox', { name: 'Choice B text' })).toHaveValue('Red');
    expect(screen.getByRole('textbox', { name: 'Choice C text' })).toHaveValue('Blue');

    // Focus follows the moved row's handle, so another ArrowUp keeps working.
    expect(screen.getByRole('button', { name: 'Drag handle for choice 1 of 3' })).toHaveFocus();
  });

  it('does not move past the first/last position with the keyboard alternative', async () => {
    const user = userEvent.setup();
    render(<Controlled initial={seed('Red', 'Green')} />);
    const handleA = screen.getByRole('button', { name: 'Drag handle for choice 1 of 2' });
    handleA.focus();
    await user.keyboard('{ArrowUp}');
    expect(screen.getByRole('textbox', { name: 'Choice A text' })).toHaveValue('Red');
    expect(screen.getByRole('textbox', { name: 'Choice B text' })).toHaveValue('Green');
  });

  it('only renders the drag handle and delete icon per row — no unconfirmed icon buttons', () => {
    render(<Controlled initial={seed('Red', 'Green')} />);
    const row = screen.getByRole('textbox', { name: 'Choice A text' }).closest('li')!;
    const buttons = Array.from(row.querySelectorAll('button'));
    expect(buttons).toHaveLength(2);
    expect(buttons.map((b) => b.getAttribute('aria-label'))).toEqual([
      'Drag handle for choice 1 of 2',
      'Delete choice A',
    ]);
  });

  it('prevents typing, add, delete, and reorder when disabled', async () => {
    const user = userEvent.setup();
    render(<Controlled initial={seed('Red', 'Green')} disabled />);
    expect(screen.getByRole('textbox', { name: 'Choice A text' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Add choice' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Delete choice A' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Drag handle for choice 1 of 2' })).toBeDisabled();

    await user.click(screen.getByRole('button', { name: 'Add choice' }));
    expect(screen.getAllByRole('textbox')).toHaveLength(2);

    const row = screen.getByRole('textbox', { name: 'Choice A text' }).closest('li')!;
    expect(row).toHaveAttribute('draggable', 'false');
  });

  it('never calls fetch/XHR for any interaction (no backend — static docs preview)', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<Controlled initial={seed('Red', 'Green', 'Blue')} />);

    await user.click(screen.getByRole('button', { name: 'Add choice' }));
    await user.click(screen.getByRole('button', { name: 'Delete choice A' }));
    const handle = screen.getByRole('button', { name: 'Drag handle for choice 1 of 3' });
    handle.focus();
    await user.keyboard('{ArrowDown}');

    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
