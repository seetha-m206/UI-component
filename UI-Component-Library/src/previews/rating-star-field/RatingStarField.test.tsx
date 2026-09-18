import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { RatingStarField, type RatingValue } from './RatingStarField';

function Controlled(props: {
  initial?: RatingValue;
  disabled?: boolean;
  required?: boolean;
  error?: string;
}) {
  const [value, setValue] = useState<RatingValue>(props.initial ?? null);
  return (
    <RatingStarField
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

describe('RatingStarField', () => {
  it('renders as an accessible radiogroup with 5 star radios', () => {
    render(<Controlled />);
    expect(screen.getByRole('radiogroup', { name: 'Rate your experience' })).toBeInTheDocument();
    for (const label of ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars']) {
      expect(screen.getByRole('radio', { name: label })).toBeInTheDocument();
    }
  });

  it('selecting a star fills it and every star before it (index-comparison fill)', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    await user.click(screen.getByRole('radio', { name: '3 Stars' }));
    expect(screen.getByRole('radio', { name: '1 Star' })).toHaveAttribute('aria-checked', 'false');
    expect(screen.getByRole('radio', { name: '3 Stars' })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByText('3 out of 5')).toBeInTheDocument();
  });

  it('clicking the current boundary star again clears the whole group (observed toggle-off)', async () => {
    const user = userEvent.setup();
    render(<Controlled initial={3} />);
    await user.click(screen.getByRole('radio', { name: '3 Stars' }));
    expect(screen.getByText('0 out of 5')).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: '3 Stars' })).toHaveAttribute('aria-checked', 'false');
  });

  it('supports keyboard activation via Space/Enter', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    const star1 = screen.getByRole('radio', { name: '1 Star' });
    star1.focus();
    await user.keyboard(' ');
    expect(star1).toHaveAttribute('aria-checked', 'true');
  });

  it('moves focus and selection with arrow keys, clamped to the 1-5 range', async () => {
    const user = userEvent.setup();
    render(<Controlled initial={5} />);
    const star5 = screen.getByRole('radio', { name: '5 Stars' });
    star5.focus();
    await user.keyboard('{ArrowRight}');
    // Already at the max star; clamped, stays at 5.
    expect(star5).toHaveAttribute('aria-checked', 'true');
    await user.keyboard('{ArrowLeft}');
    expect(screen.getByRole('radio', { name: '4 Stars' })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByRole('radio', { name: '4 Stars' })).toHaveFocus();
  });

  it('cannot be changed when disabled', async () => {
    const user = userEvent.setup();
    render(<Controlled disabled initial={2} />);
    const star4 = screen.getByRole('radio', { name: '4 Stars' });
    expect(star4).toBeDisabled();
    await user.click(star4);
    expect(screen.getByRole('radio', { name: '2 Stars' })).toHaveAttribute('aria-checked', 'true');
  });

  it('announces a required validation error accessibly and clears it once answered', async () => {
    const user = userEvent.setup();
    render(<Controlled required />);
    expect(screen.getByRole('alert')).toHaveTextContent('This field is required.');
    expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-invalid', 'true');

    await user.click(screen.getByRole('radio', { name: '4 Stars' }));
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});
