import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { PaperformRatingField, type RatingValue } from './PaperformRatingField';

function Controlled(props: {
  initial?: RatingValue;
  disabled?: boolean;
  required?: boolean;
  maxRating?: number;
}) {
  const [value, setValue] = useState<RatingValue>(props.initial ?? null);
  return (
    <PaperformRatingField
      value={value}
      onChange={setValue}
      disabled={props.disabled}
      required={props.required}
      maxRating={props.maxRating}
      label="Q4 Rate us"
      error={props.required && value == null ? 'This field is required.' : undefined}
    />
  );
}

describe('PaperformRatingField', () => {
  it('renders as an accessible radiogroup with working label association (a deliberate fix over the source, which has none)', () => {
    render(<Controlled />);
    expect(screen.getByRole('radiogroup', { name: 'Q4 Rate us' })).toBeInTheDocument();
    for (const label of ['1', '2', '3', '4', '5']) {
      expect(screen.getByRole('radio', { name: label })).toBeInTheDocument();
    }
  });

  it('selecting a star sets aria-checked on exactly that star, matching the confirmed-correct source behavior', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    await user.click(screen.getByRole('radio', { name: '3' }));
    expect(screen.getByRole('radio', { name: '3' })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByRole('radio', { name: '1' })).toHaveAttribute('aria-checked', 'false');
    expect(screen.getByRole('radio', { name: '5' })).toHaveAttribute('aria-checked', 'false');
  });

  it('fills every star up to the selected value via data-selected, independent of aria-checked', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    await user.click(screen.getByRole('radio', { name: '3' }));
    expect(screen.getByRole('radio', { name: '1' })).toHaveAttribute('data-selected', 'true');
    expect(screen.getByRole('radio', { name: '3' })).toHaveAttribute('data-selected', 'true');
    expect(screen.getByRole('radio', { name: '4' })).toHaveAttribute('data-selected', 'false');
  });

  it('clicking the already-selected star again is a no-op (confirmed: no deselect, unlike a toggle-off pattern)', async () => {
    const user = userEvent.setup();
    render(<Controlled initial={3} />);
    await user.click(screen.getByRole('radio', { name: '3' }));
    expect(screen.getByRole('radio', { name: '3' })).toHaveAttribute('aria-checked', 'true');
  });

  it('hover preview extends the fill upward but never below the committed value (confirmed max(hovered, selected) rule)', async () => {
    const user = userEvent.setup();
    render(<Controlled initial={3} />);
    // Hovering a lower star than the committed value: no visible change.
    await user.hover(screen.getByRole('radio', { name: '1' }));
    expect(screen.getByRole('radio', { name: '3' })).toHaveAttribute('data-selected', 'true');
    expect(screen.getByRole('radio', { name: '1' })).toHaveAttribute('data-selected', 'true');
    expect(screen.getByRole('radio', { name: '2' })).toHaveAttribute('data-selected', 'true');

    // Hovering a higher star: preview extends past the committed value.
    await user.hover(screen.getByRole('radio', { name: '5' }));
    expect(screen.getByRole('radio', { name: '4' })).toHaveAttribute('data-selected', 'true');
    expect(screen.getByRole('radio', { name: '5' })).toHaveAttribute('data-selected', 'true');
    // aria-checked is unaffected by hover — only the committed value.
    expect(screen.getByRole('radio', { name: '5' })).toHaveAttribute('aria-checked', 'false');
    expect(screen.getByRole('radio', { name: '3' })).toHaveAttribute('aria-checked', 'true');
  });

  it('hover preview reverts to the committed value on mouse leave', async () => {
    const user = userEvent.setup();
    render(<Controlled initial={2} />);
    await user.hover(screen.getByRole('radio', { name: '5' }));
    expect(screen.getByRole('radio', { name: '5' })).toHaveAttribute('data-selected', 'true');
    await user.unhover(screen.getByRole('radiogroup'));
    expect(screen.getByRole('radio', { name: '5' })).toHaveAttribute('data-selected', 'false');
    expect(screen.getByRole('radio', { name: '2' })).toHaveAttribute('data-selected', 'true');
  });

  it('supports keyboard: arrow keys move focus only, Space/Enter selects the focused star (a deliberate fix — the source has zero keyboard support at all)', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    const star1 = screen.getByRole('radio', { name: '1' });
    star1.focus();
    await user.keyboard('{ArrowRight}');
    expect(screen.getByRole('radio', { name: '2' })).toHaveFocus();
    // Moving focus alone must not select anything.
    expect(screen.getByRole('radio', { name: '2' })).toHaveAttribute('aria-checked', 'false');
    await user.keyboard(' ');
    expect(screen.getByRole('radio', { name: '2' })).toHaveAttribute('aria-checked', 'true');
  });

  it('respects a configured maxRating other than 5', () => {
    render(<Controlled maxRating={10} />);
    expect(screen.getAllByRole('radio')).toHaveLength(10);
    expect(screen.getByRole('radio', { name: '10' })).toBeInTheDocument();
  });

  it('cannot be changed when disabled', async () => {
    const user = userEvent.setup();
    render(<Controlled disabled initial={2} />);
    await user.click(screen.getByRole('radio', { name: '4' }));
    expect(screen.getByRole('radio', { name: '2' })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByRole('radio', { name: '4' })).toHaveAttribute('aria-checked', 'false');
  });

  it('announces a required validation error accessibly', () => {
    render(<Controlled required />);
    expect(screen.getByRole('alert')).toHaveTextContent('This field is required.');
    expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-invalid', 'true');
  });
});
