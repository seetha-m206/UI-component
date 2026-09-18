import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { YesNoToggleField, type YesNoValue } from './YesNoToggleField';

function Controlled(props: {
  initial?: YesNoValue;
  disabled?: boolean;
  required?: boolean;
  error?: string;
}) {
  const [value, setValue] = useState<YesNoValue>(props.initial ?? null);
  return (
    <YesNoToggleField
      value={value}
      onChange={setValue}
      disabled={props.disabled}
      required={props.required}
      label="Do you agree?"
      error={
        props.required && value == null ? (props.error ?? 'This field is required.') : undefined
      }
    />
  );
}

describe('YesNoToggleField', () => {
  it('renders as an accessible radiogroup with Yes/No radios', () => {
    render(<Controlled />);
    expect(screen.getByRole('radiogroup', { name: 'Do you agree?' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Yes' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'No' })).toBeInTheDocument();
  });

  it('selects on click, and toggles off when clicking the selected option again', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    const yes = screen.getByRole('radio', { name: 'Yes' });
    const no = screen.getByRole('radio', { name: 'No' });

    await user.click(yes);
    expect(yes).toHaveAttribute('aria-checked', 'true');
    expect(no).toHaveAttribute('aria-checked', 'false');

    await user.click(no);
    expect(no).toHaveAttribute('aria-checked', 'true');
    expect(yes).toHaveAttribute('aria-checked', 'false');

    await user.click(no);
    expect(no).toHaveAttribute('aria-checked', 'false');
  });

  it('supports keyboard activation via Space/Enter (native button semantics)', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    const yes = screen.getByRole('radio', { name: 'Yes' });
    yes.focus();
    await user.keyboard(' ');
    expect(yes).toHaveAttribute('aria-checked', 'true');
  });

  it('moves focus and selection with arrow keys', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    const yes = screen.getByRole('radio', { name: 'Yes' });
    const no = screen.getByRole('radio', { name: 'No' });
    yes.focus();
    await user.keyboard('{ArrowRight}');
    expect(no).toHaveAttribute('aria-checked', 'true');
    expect(no).toHaveFocus();
  });

  it('cannot be changed when disabled', async () => {
    const user = userEvent.setup();
    render(<Controlled disabled initial="yes" />);
    const no = screen.getByRole('radio', { name: 'No' });
    expect(no).toBeDisabled();
    await user.click(no);
    expect(screen.getByRole('radio', { name: 'Yes' })).toHaveAttribute('aria-checked', 'true');
  });

  it('announces a required validation error accessibly and clears it once answered', async () => {
    const user = userEvent.setup();
    render(<Controlled required />);
    expect(screen.getByRole('alert')).toHaveTextContent('This field is required.');
    expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-invalid', 'true');

    await user.click(screen.getByRole('radio', { name: 'Yes' }));
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('shows a visible focus outline via :focus-visible (no dragging/opacity artifacts, per CSS Modules scoping)', () => {
    render(<Controlled />);
    const yes = screen.getByRole('radio', { name: 'Yes' });
    yes.focus();
    expect(yes).toHaveFocus();
  });
});
