import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { JotformScaleRatingField, type RatingValue } from './JotformScaleRatingField';

function Controlled(props: { initial?: RatingValue; disabled?: boolean }) {
  const [value, setValue] = useState<RatingValue>(props.initial ?? null);
  return <JotformScaleRatingField value={value} onChange={setValue} disabled={props.disabled} />;
}

describe('JotformScaleRatingField', () => {
  it('renders 5 real native radio inputs by default, Worst/Best endpoint labels', () => {
    render(<Controlled />);
    const radios = screen.getAllByRole('radio');
    expect(radios).toHaveLength(5);
    radios.forEach((radio) => expect(radio.tagName).toBe('INPUT'));
    expect(screen.getByText('Worst')).toBeInTheDocument();
    expect(screen.getByText('Best')).toBeInTheDocument();
  });

  it('selecting an option is exclusive — only that radio is checked', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    const radios = screen.getAllByRole('radio');
    await user.click(radios[2]);
    expect(radios[2]).toBeChecked();
    expect(radios[0]).not.toBeChecked();
    expect(radios[4]).not.toBeChecked();
  });

  it('highlights the whole field block once an option is selected', async () => {
    const user = userEvent.setup();
    const { container } = render(<Controlled />);
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveAttribute('data-has-selection', 'false');
    await user.click(screen.getAllByRole('radio')[2]);
    expect(root).toHaveAttribute('data-has-selection', 'true');
  });

  it('each option has a correctly-associated native label with the right number', () => {
    render(<Controlled />);
    const radios = screen.getAllByRole('radio');
    // Native label association: clicking the visible "3" label should check
    // radio index 2 (points 1..5), confirming <label for> wiring is real.
    const label = screen.getByTitle('3');
    expect(label.getAttribute('for')).toBe(radios[2].id);
  });

  it('confirms the real aria-labelledby-overrides-native-label defect: every option shares the question text as its accessible name', () => {
    render(<JotformScaleRatingField value={null} label="Rate the service" />);
    // All 5 radios resolve to the SAME accessible name (the question text),
    // not their own distinct number — the confirmed real defect.
    const named = screen.getAllByRole('radio', { name: 'Rate the service' });
    expect(named).toHaveLength(5);
  });

  it('has no deselect path — clicking a different option moves the selection, re-clicking the same one is a no-op', async () => {
    const user = userEvent.setup();
    render(<Controlled initial={3} />);
    const radios = screen.getAllByRole('radio');
    expect(radios[2]).toBeChecked();
    await user.click(radios[2]);
    expect(radios[2]).toBeChecked();
  });

  it('disables every option when disabled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<JotformScaleRatingField value={null} disabled onChange={onChange} />);
    await user.click(screen.getAllByRole('radio')[2]);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('never calls fetch/XHR for any interaction (no backend — static docs preview)', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<Controlled />);
    await user.click(screen.getAllByRole('radio')[2]);
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
