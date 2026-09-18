import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { RatingField, type RatingValue } from './RatingField';

function Controlled(props: {
  initial?: RatingValue;
  disabled?: boolean;
  required?: boolean;
  error?: string;
}) {
  const [value, setValue] = useState<RatingValue>(props.initial ?? null);
  return (
    <RatingField
      value={value}
      onChange={setValue}
      disabled={props.disabled}
      required={props.required}
      label="Rate your experience"
      error={
        props.required && value == null ? (props.error ?? 'This field is required.') : undefined
      }
    />
  );
}

describe('RatingField', () => {
  it('renders as an accessible radiogroup with 5 radio icons', () => {
    render(<Controlled />);
    expect(screen.getByRole('radiogroup', { name: 'Rate your experience' })).toBeInTheDocument();
    for (const label of ['1', '2', '3', '4', '5']) {
      expect(screen.getByRole('radio', { name: label })).toBeInTheDocument();
    }
  });

  it('hovering icon N marks icons 1..N as hovered/filled without committing a selection', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    const icon3 = screen.getByRole('radio', { name: '3' });
    await user.hover(icon3);

    expect(screen.getByRole('radio', { name: '1' })).toHaveAttribute('data-hovered', 'true');
    expect(screen.getByRole('radio', { name: '1' })).toHaveAttribute('data-filled', 'true');
    expect(screen.getByRole('radio', { name: '3' })).toHaveAttribute('data-hovered', 'true');
    expect(screen.getByRole('radio', { name: '4' })).toHaveAttribute('data-hovered', 'false');
    expect(screen.getByRole('radio', { name: '4' })).toHaveAttribute('data-filled', 'false');

    // Nothing is committed by hover alone.
    expect(screen.getByRole('radio', { name: '3' })).toHaveAttribute('aria-checked', 'false');

    await user.unhover(icon3);
    expect(screen.getByRole('radio', { name: '1' })).toHaveAttribute('data-hovered', 'false');
    expect(screen.getByRole('radio', { name: '1' })).toHaveAttribute('data-filled', 'false');
  });

  it('clicking commits the selection with aria-checked="true" on exactly one icon', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    await user.click(screen.getByRole('radio', { name: '3' }));

    expect(screen.getByRole('radio', { name: '1' })).toHaveAttribute('aria-checked', 'false');
    expect(screen.getByRole('radio', { name: '3' })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByRole('radio', { name: '4' })).toHaveAttribute('aria-checked', 'false');

    // Switching the selection moves it atomically.
    await user.click(screen.getByRole('radio', { name: '2' }));
    expect(screen.getByRole('radio', { name: '2' })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByRole('radio', { name: '3' })).toHaveAttribute('aria-checked', 'false');
  });

  it('clicking the already-selected icon again is a no-op (confirmed no deselect)', async () => {
    const user = userEvent.setup();
    render(<Controlled initial={3} />);
    await user.click(screen.getByRole('radio', { name: '3' }));
    expect(screen.getByRole('radio', { name: '3' })).toHaveAttribute('aria-checked', 'true');
  });

  it('supports keyboard: arrow keys roam focus without selecting, Space commits', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    const icon1 = screen.getByRole('radio', { name: '1' });
    icon1.focus();

    await user.keyboard('{ArrowRight}');
    expect(screen.getByRole('radio', { name: '2' })).toHaveFocus();
    // Arrow movement alone must not commit a selection.
    expect(screen.getByRole('radio', { name: '2' })).toHaveAttribute('aria-checked', 'false');
    expect(screen.getByRole('radio', { name: '1' })).toHaveAttribute('aria-checked', 'false');

    await user.keyboard(' ');
    expect(screen.getByRole('radio', { name: '2' })).toHaveAttribute('aria-checked', 'true');
  });

  it('cannot be changed or hovered when disabled', async () => {
    const user = userEvent.setup();
    render(<Controlled disabled initial={2} />);
    const icon4 = screen.getByRole('radio', { name: '4' });
    expect(icon4).toBeDisabled();

    await user.hover(icon4);
    expect(icon4).toHaveAttribute('data-hovered', 'false');

    await user.click(icon4);
    expect(screen.getByRole('radio', { name: '2' })).toHaveAttribute('aria-checked', 'true');
    expect(icon4).toHaveAttribute('aria-checked', 'false');
  });

  it('announces a required validation error accessibly and clears it once answered', async () => {
    const user = userEvent.setup();
    render(<Controlled required />);
    expect(screen.getByRole('alert')).toHaveTextContent('This field is required.');
    expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-invalid', 'true');

    await user.click(screen.getByRole('radio', { name: '4' }));
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});
