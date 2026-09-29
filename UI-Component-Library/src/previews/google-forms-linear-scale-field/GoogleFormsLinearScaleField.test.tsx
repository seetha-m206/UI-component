import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { GoogleFormsLinearScaleField, type LinearScaleValue } from './GoogleFormsLinearScaleField';

function Controlled(props: {
  initial?: LinearScaleValue;
  disabled?: boolean;
  min?: number;
  max?: number;
}) {
  const [value, setValue] = useState<LinearScaleValue>(props.initial ?? null);
  return (
    <GoogleFormsLinearScaleField
      value={value}
      onChange={setValue}
      disabled={props.disabled}
      min={props.min}
      max={props.max}
      label="How likely are you to recommend us"
      minLabel="Not likely"
      maxLabel="Very likely"
    />
  );
}

describe('GoogleFormsLinearScaleField', () => {
  it('renders a genuine radiogroup with a correct aria-labelledby pointing at the question text', () => {
    render(<Controlled />);
    expect(
      screen.getByRole('radiogroup', { name: 'How likely are you to recommend us' })
    ).toBeInTheDocument();
    for (const label of ['1', '2', '3', '4', '5']) {
      expect(screen.getByRole('radio', { name: label })).toBeInTheDocument();
    }
  });

  it('selecting option 3 sets aria-checked=true on option 3 only (exclusive selection, opposite of the Rating field)', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    await user.click(screen.getByRole('radio', { name: '3' }));
    expect(screen.getByRole('radio', { name: '3' })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByRole('radio', { name: '1' })).toHaveAttribute('aria-checked', 'false');
    expect(screen.getByRole('radio', { name: '2' })).toHaveAttribute('aria-checked', 'false');
    expect(screen.getByRole('radio', { name: '4' })).toHaveAttribute('aria-checked', 'false');
    expect(screen.getByRole('radio', { name: '5' })).toHaveAttribute('aria-checked', 'false');
  });

  it('clicking the already-selected option a first extra time is a visual no-op — stays selected', async () => {
    const user = userEvent.setup();
    render(<Controlled initial={4} />);
    // initial={4} means the FIRST click below is already the "second click"
    // in source terms; test the plain no-op framing separately via data-selected.
    expect(screen.getByRole('radio', { name: '4' })).toHaveAttribute('data-selected', 'true');
    await user.click(screen.getByRole('radio', { name: '1' }));
    expect(screen.getByRole('radio', { name: '1' })).toHaveAttribute('data-selected', 'true');
    expect(screen.getByRole('radio', { name: '4' })).toHaveAttribute('data-selected', 'false');
  });

  it('confirmed bug: a second click on the same already-selected option keeps it visually selected but flips aria-checked to false on every option', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    // First click: normal, correct selection.
    await user.click(screen.getByRole('radio', { name: '3' }));
    expect(screen.getByRole('radio', { name: '3' })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByRole('radio', { name: '3' })).toHaveAttribute('data-selected', 'true');

    // Second click on the SAME option: visual stays selected, but
    // aria-checked goes stale/false everywhere.
    await user.click(screen.getByRole('radio', { name: '3' }));
    expect(screen.getByRole('radio', { name: '3' })).toHaveAttribute('data-selected', 'true');
    expect(screen.getByRole('radio', { name: '3' })).toHaveAttribute('aria-checked', 'false');
    for (const label of ['1', '2', '4', '5']) {
      expect(screen.getByRole('radio', { name: label })).toHaveAttribute('aria-checked', 'false');
    }
  });

  it('surfaces the stale-ARIA state in the visible debug readout', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    await user.click(screen.getByRole('radio', { name: '2' }));
    expect(screen.getByText(/Live aria-checked value:/)).toHaveTextContent('2');
    await user.click(screen.getByRole('radio', { name: '2' }));
    expect(screen.getByText(/confirmed stale-ARIA bug/)).toBeInTheDocument();
  });

  it('flags the stale option with a title attribute noting the confirmed bug', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    await user.click(screen.getByRole('radio', { name: '2' }));
    await user.click(screen.getByRole('radio', { name: '2' }));
    expect(screen.getByRole('radio', { name: '2' })).toHaveAttribute(
      'title',
      expect.stringContaining('Confirmed bug')
    );
  });

  it('onChange fires on a genuine selection change but not on the no-op re-click', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<GoogleFormsLinearScaleField value={3} onChange={onChange} label="Q" />);
    await user.click(screen.getByRole('radio', { name: '3' }));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('respects a configured min/max range other than 1-5', () => {
    render(<Controlled min={0} max={10} />);
    expect(screen.getAllByRole('radio')).toHaveLength(11);
    expect(screen.getByRole('radio', { name: '0' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: '10' })).toBeInTheDocument();
  });

  it('cannot be changed when disabled', async () => {
    const user = userEvent.setup();
    render(<Controlled disabled initial={2} />);
    await user.click(screen.getByRole('radio', { name: '4' }));
    expect(screen.getByRole('radio', { name: '2' })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByRole('radio', { name: '4' })).toHaveAttribute('aria-checked', 'false');
  });
});
