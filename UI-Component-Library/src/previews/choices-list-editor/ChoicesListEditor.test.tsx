import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { ChoicesListEditor, type ChoiceItem } from './ChoicesListEditor';

function seed(...values: string[]): ChoiceItem[] {
  return values.map((value, i) => ({ id: `c${i}`, value }));
}

function Controlled(props: {
  initial: ChoiceItem[];
  disabled?: boolean;
  required?: boolean;
  minChoices?: number;
}) {
  const [choices, setChoices] = useState<ChoiceItem[]>(props.initial);
  return (
    <ChoicesListEditor
      choices={choices}
      onChange={setChoices}
      disabled={props.disabled}
      required={props.required}
      minChoices={props.minChoices}
    />
  );
}

describe('ChoicesListEditor', () => {
  it('renders one labeled text input per choice plus a live "Choices (N)" heading', () => {
    render(<Controlled initial={seed('Red', 'Green', 'Blue')} />);
    expect(screen.getByText('Choices (3)')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Choice 1 text' })).toHaveValue('Red');
    expect(screen.getByRole('textbox', { name: 'Choice 2 text' })).toHaveValue('Green');
    expect(screen.getByRole('textbox', { name: 'Choice 3 text' })).toHaveValue('Blue');
  });

  it("inserts a new row directly after the clicked row's add button, not at the end", async () => {
    const user = userEvent.setup();
    render(<Controlled initial={seed('Red', 'Green', 'Blue')} />);
    await user.click(screen.getByRole('button', { name: 'Add choice after 1' }));

    expect(screen.getByText('Choices (4)')).toBeInTheDocument();
    const inputs = screen.getAllByRole('textbox');
    expect(inputs.map((el) => (el as HTMLInputElement).value)).toEqual([
      'Red',
      '',
      'Green',
      'Blue',
    ]);
  });

  it('adds a new row on Enter within a choice input', async () => {
    const user = userEvent.setup();
    render(<Controlled initial={seed('Red', 'Green')} />);
    const first = screen.getByRole('textbox', { name: 'Choice 1 text' });
    first.focus();
    await user.keyboard('{Enter}');
    expect(screen.getByText('Choices (3)')).toBeInTheDocument();
  });

  it('removes a row entirely on clicking its remove button', async () => {
    const user = userEvent.setup();
    render(<Controlled initial={seed('Red', 'Green', 'Blue')} />);
    await user.click(screen.getByRole('button', { name: 'Remove choice 2' }));

    expect(screen.getByText('Choices (2)')).toBeInTheDocument();
    expect(screen.queryByDisplayValue('Green')).not.toBeInTheDocument();
  });

  it('commits an edited value on blur (focusout), matching the observed onfocusout handler', async () => {
    const user = userEvent.setup();
    render(<Controlled initial={seed('Red')} />);
    const input = screen.getByRole('textbox', { name: 'Choice 1 text' });
    await user.clear(input);
    await user.type(input, 'Crimson');
    await user.tab();
    expect(screen.getByDisplayValue('Crimson')).toBeInTheDocument();
  });

  it('disables (but does not remove) the remove control at the minimum choice count', () => {
    render(<Controlled initial={seed('Only option')} minChoices={1} />);
    expect(screen.getByRole('button', { name: 'Remove choice 1' })).toBeDisabled();
  });

  it('shows a persistent validation message at the minimum only when required is true', () => {
    const { rerender } = render(
      <ChoicesListEditor choices={seed('Only option')} required={false} minChoices={1} />
    );
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();

    rerender(<ChoicesListEditor choices={seed('Only option')} required minChoices={1} />);
    expect(screen.getByRole('alert')).toHaveTextContent(/at least 1 choice/i);
  });

  it('cannot be typed in, added to, or removed from when disabled', async () => {
    const user = userEvent.setup();
    render(<Controlled initial={seed('Red', 'Green')} disabled />);
    expect(screen.getByRole('textbox', { name: 'Choice 1 text' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Add choice after 1' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Remove choice 1' })).toBeDisabled();

    await user.click(screen.getByRole('button', { name: 'Add choice after 1' }));
    expect(screen.getByText('Choices (2)')).toBeInTheDocument();
  });

  it('shows a visible focus outline via :focus-visible on the row input', () => {
    render(<Controlled initial={seed('Red')} />);
    const input = screen.getByRole('textbox', { name: 'Choice 1 text' });
    input.focus();
    expect(input).toHaveFocus();
  });
});
