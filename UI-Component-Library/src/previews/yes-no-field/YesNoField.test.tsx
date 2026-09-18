import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { YesNoField, type YesNoValue } from './YesNoField';

function Controlled(props: {
  initial?: YesNoValue;
  disabled?: boolean;
  required?: boolean;
  error?: string;
}) {
  const [value, setValue] = useState<YesNoValue>(props.initial ?? null);
  return (
    <YesNoField
      value={value}
      onChange={setValue}
      disabled={props.disabled}
      required={props.required}
      label="Do you agree to the terms and conditions?"
      error={
        props.required && value == null ? (props.error ?? 'This field is required.') : undefined
      }
    />
  );
}

describe('YesNoField', () => {
  it('renders as an accessible radiogroup with Yes/No radios', () => {
    render(<Controlled />);
    expect(
      screen.getByRole('radiogroup', { name: 'Do you agree to the terms and conditions?' })
    ).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /Yes/ })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /No/ })).toBeInTheDocument();
  });

  it('clicking an option selects it', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    const yes = screen.getByRole('radio', { name: /Yes/ });
    await user.click(yes);
    expect(yes).toHaveAttribute('aria-checked', 'true');
    expect(yes).toHaveAttribute('data-state', 'checked');
  });

  it('clicking the already-selected option is a no-op (confirmed: no deselect)', async () => {
    const user = userEvent.setup();
    render(<Controlled initial="yes" />);
    const yes = screen.getByRole('radio', { name: /Yes/ });
    expect(yes).toHaveAttribute('aria-checked', 'true');
    await user.click(yes);
    // Still checked — unlike the Zoho sibling, re-clicking never clears it.
    expect(yes).toHaveAttribute('aria-checked', 'true');
    expect(yes).toHaveAttribute('data-state', 'checked');
  });

  it('Space selects the focused option', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    const no = screen.getByRole('radio', { name: /No/ });
    no.focus();
    await user.keyboard(' ');
    expect(no).toHaveAttribute('aria-checked', 'true');
  });

  it('ArrowDown/ArrowUp move focus without changing selection', async () => {
    const user = userEvent.setup();
    render(<Controlled initial="yes" />);
    const yesOption = screen.getByRole('radio', { name: /Yes/ });
    const noOption = screen.getByRole('radio', { name: /No/ });
    yesOption.focus();

    await user.keyboard('{ArrowDown}');
    expect(noOption).toHaveFocus();
    // Selection is unchanged — still Yes, not No.
    expect(yesOption).toHaveAttribute('aria-checked', 'true');
    expect(noOption).toHaveAttribute('aria-checked', 'false');

    await user.keyboard('{ArrowUp}');
    expect(yesOption).toHaveFocus();
    expect(yesOption).toHaveAttribute('aria-checked', 'true');
  });

  it('does not implement Y/N letter-key shortcuts (confirmed non-functional in source)', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    const no = screen.getByRole('radio', { name: /No/ });
    no.focus();
    await user.keyboard('y');
    // Pressing "y" must not select "Yes" — no letter-key handling exists.
    expect(screen.getByRole('radio', { name: /Yes/ })).toHaveAttribute('aria-checked', 'false');
    expect(no).toHaveAttribute('aria-checked', 'false');
  });

  it('cannot be changed when disabled', async () => {
    const user = userEvent.setup();
    render(<Controlled disabled initial="yes" />);
    const no = screen.getByRole('radio', { name: /No/ });
    expect(no).toBeDisabled();
    await user.click(no);
    expect(no).toHaveAttribute('aria-checked', 'false');
    expect(screen.getByRole('radio', { name: /Yes/ })).toHaveAttribute('aria-checked', 'true');
  });

  it('announces a required validation error accessibly and clears it once answered', async () => {
    const user = userEvent.setup();
    render(<Controlled required />);
    expect(screen.getByRole('alert')).toHaveTextContent('This field is required.');
    expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-invalid', 'true');

    await user.click(screen.getByRole('radio', { name: /Yes/ }));
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});
