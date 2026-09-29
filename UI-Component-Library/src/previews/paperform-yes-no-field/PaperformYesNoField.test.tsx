import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { PaperformYesNoField, type PaperformYesNoValue } from './PaperformYesNoField';

function Controlled(props: {
  initial?: PaperformYesNoValue;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  activeColor?: string;
}) {
  const [value, setValue] = useState<PaperformYesNoValue>(props.initial ?? null);
  return (
    <PaperformYesNoField
      value={value}
      onChange={setValue}
      disabled={props.disabled}
      required={props.required}
      activeColor={props.activeColor}
      label="Q1 Do you like forms?"
      error={
        props.required && value == null ? (props.error ?? 'This field is required.') : undefined
      }
    />
  );
}

describe('PaperformYesNoField', () => {
  it('renders as an accessible radiogroup with working label association (no dangling ids)', () => {
    render(<Controlled />);
    const group = screen.getByRole('radiogroup', { name: 'Q1 Do you like forms?' });
    expect(group).toBeInTheDocument();
    // The fix: aria-labelledby points at a real, rendered element's id.
    const labelledBy = group.getAttribute('aria-labelledby');
    expect(labelledBy).toBeTruthy();
    expect(document.getElementById(labelledBy as string)).not.toBeNull();
    expect(screen.getByRole('radio', { name: 'Yes' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'No' })).toBeInTheDocument();
  });

  it('does not leave a dangling aria-describedby reference when there is no description', () => {
    render(<Controlled />);
    const group = screen.getByRole('radiogroup');
    expect(group).not.toHaveAttribute('aria-describedby');
  });

  it('clicking an option selects it', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    const yes = screen.getByRole('radio', { name: 'Yes' });
    await user.click(yes);
    expect(yes).toHaveAttribute('aria-checked', 'true');
  });

  it('re-clicking the already-selected option does not deselect it (confirmed no-op)', async () => {
    const user = userEvent.setup();
    render(<Controlled initial="no" />);
    const no = screen.getByRole('radio', { name: 'No' });
    expect(no).toHaveAttribute('aria-checked', 'true');
    await user.click(no);
    expect(no).toHaveAttribute('aria-checked', 'true');
  });

  it('Delete, Backspace, and Escape while focused never clear the selected answer', async () => {
    const user = userEvent.setup();
    render(<Controlled initial="yes" />);
    const yes = screen.getByRole('radio', { name: 'Yes' });
    yes.focus();

    await user.keyboard('{Delete}');
    expect(yes).toHaveAttribute('aria-checked', 'true');

    await user.keyboard('{Backspace}');
    expect(yes).toHaveAttribute('aria-checked', 'true');

    await user.keyboard('{Escape}');
    expect(yes).toHaveAttribute('aria-checked', 'true');
  });

  it('Arrow keys move focus between options WITHOUT changing selection', async () => {
    const user = userEvent.setup();
    render(<Controlled initial="yes" />);
    const yes = screen.getByRole('radio', { name: 'Yes' });
    const no = screen.getByRole('radio', { name: 'No' });
    yes.focus();

    await user.keyboard('{ArrowRight}');
    expect(no).toHaveFocus();
    // Selection unchanged — still Yes.
    expect(yes).toHaveAttribute('aria-checked', 'true');
    expect(no).toHaveAttribute('aria-checked', 'false');

    await user.keyboard('{ArrowLeft}');
    expect(yes).toHaveFocus();
    expect(yes).toHaveAttribute('aria-checked', 'true');
  });

  it('Space selects the focused option', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    const no = screen.getByRole('radio', { name: 'No' });
    no.focus();
    await user.keyboard(' ');
    expect(no).toHaveAttribute('aria-checked', 'true');
  });

  it('has fixed, non-roving tabindex: YES is always 0, NO is always -1, even when NO is selected', () => {
    render(<Controlled initial="no" />);
    const yes = screen.getByRole('radio', { name: 'Yes' });
    const no = screen.getByRole('radio', { name: 'No' });
    expect(yes).toHaveAttribute('tabindex', '0');
    expect(no).toHaveAttribute('tabindex', '-1');
  });

  it('has no Y/N letter-key shortcut at all', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    const no = screen.getByRole('radio', { name: 'No' });
    no.focus();
    await user.keyboard('y');
    expect(screen.getByRole('radio', { name: 'Yes' })).toHaveAttribute('aria-checked', 'false');
    expect(no).toHaveAttribute('aria-checked', 'false');
  });

  it('cannot be changed when disabled', async () => {
    const user = userEvent.setup();
    render(<Controlled disabled initial="yes" />);
    const no = screen.getByRole('radio', { name: 'No' });
    expect(no).toBeDisabled();
    await user.click(no);
    expect(no).toHaveAttribute('aria-checked', 'false');
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

  it('wires the selected fill color through a CSS custom property, not a hardcoded value', () => {
    const { container } = render(<Controlled initial="yes" activeColor="#7c3aed" />);
    const root = container.firstElementChild as HTMLElement;
    expect(root.style.getPropertyValue('--paperform-active-color')).toBe('#7c3aed');
  });
});
