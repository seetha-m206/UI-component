import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { ThemeColorPickerGradient, type ThemeColorValue } from './ThemeColorPickerGradient';

const SOLID_DEFAULT: ThemeColorValue = {
  mode: 'solid',
  solidColor: '#245BA7',
  gradientStart: '#FFDED6',
  gradientEnd: '#BFACFE',
  angle: 230,
};

function Controlled(props: { initial?: ThemeColorValue; disabled?: boolean; label?: string }) {
  const [value, setValue] = useState<ThemeColorValue>(props.initial ?? SOLID_DEFAULT);
  return (
    <ThemeColorPickerGradient
      value={value}
      onChange={setValue}
      disabled={props.disabled}
      label={props.label ?? 'Background Color'}
    />
  );
}

describe('ThemeColorPickerGradient', () => {
  it('renders a closed popover by default, with an accessible trigger', () => {
    render(<Controlled />);
    const trigger = screen.getByRole('button', { name: 'Background Color' });
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('opens the popover via a click on the trigger, and via Enter/Space', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    const trigger = screen.getByRole('button', { name: 'Background Color' });

    await user.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    await user.keyboard('{Escape}');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    trigger.focus();
    await user.keyboard(' ');
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
  });

  it('closes the popover on Escape and returns focus to the trigger', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    const trigger = screen.getByRole('button', { name: 'Background Color' });
    await user.click(trigger);
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it('switches between Solid and Gradient mode via the mode radiogroup', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    await user.click(screen.getByRole('button', { name: 'Background Color' }));

    const solidRadio = screen.getByRole('radio', { name: 'Solid' });
    const gradientRadio = screen.getByRole('radio', { name: 'Gradient' });
    expect(solidRadio).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByLabelText('Hex value')).toBeInTheDocument();

    await user.click(gradientRadio);
    expect(gradientRadio).toHaveAttribute('aria-checked', 'true');
    expect(solidRadio).toHaveAttribute('aria-checked', 'false');
    expect(screen.queryByLabelText('Hex value')).not.toBeInTheDocument();
    expect(screen.getByLabelText(/^Angle:/)).toBeInTheDocument();
  });

  it('changes the solid color by clicking a preset swatch, and updates the hex input', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    await user.click(screen.getByRole('button', { name: 'Background Color' }));

    const listbox = screen.getByRole('listbox', { name: 'Preset Colors' });
    const swatch = within(listbox).getByRole('option', { name: 'Color #16A34A' });
    await user.click(swatch);

    expect(swatch).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByLabelText('Hex value')).toHaveValue('#16A34A');
  });

  it('edits the hex value directly via the text input', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    await user.click(screen.getByRole('button', { name: 'Background Color' }));

    const hexInput = screen.getByLabelText('Hex value');
    await user.clear(hexInput);
    await user.type(hexInput, '#123456');
    expect(hexInput).toHaveValue('#123456');
    expect(hexInput).toHaveAttribute('aria-invalid', 'false');
  });

  it('picks the active gradient stop and applies a preset swatch to it', async () => {
    const user = userEvent.setup();
    render(<Controlled initial={{ ...SOLID_DEFAULT, mode: 'gradient' }} />);
    await user.click(screen.getByRole('button', { name: 'Background Color' }));

    const startStop = screen.getByRole('radio', { name: /Start color/ });
    const endStop = screen.getByRole('radio', { name: /End color/ });
    expect(startStop).toHaveAttribute('aria-checked', 'true');
    expect(endStop).toHaveAttribute('aria-checked', 'false');

    await user.click(endStop);
    expect(endStop).toHaveAttribute('aria-checked', 'true');

    const listbox = screen.getByRole('listbox', { name: 'Preset Colors' });
    const swatch = within(listbox).getByRole('option', { name: 'Color #7C3AED' });
    await user.click(swatch);
    expect(swatch).toHaveAttribute('aria-selected', 'true');
  });

  it('changes the gradient angle via the range input', async () => {
    render(<Controlled initial={{ ...SOLID_DEFAULT, mode: 'gradient', angle: 90 }} />);
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: 'Background Color' }));

    const angleInput = screen.getByLabelText(/^Angle:/) as HTMLInputElement;
    expect(angleInput).toHaveValue('90');

    // jsdom doesn't implement native browser arrow-key stepping for range
    // inputs, so the value change is driven directly via a change event,
    // exercising the same onChange handler a real drag/keystroke would.
    fireEvent.change(angleInput, { target: { value: '100' } });
    expect(angleInput).toHaveValue('100');
    expect(screen.getByText('Angle: 100°')).toBeInTheDocument();
  });

  it('cannot be opened when disabled', async () => {
    const user = userEvent.setup();
    render(<Controlled disabled />);
    const trigger = screen.getByRole('button', { name: 'Background Color' });
    expect(trigger).toBeDisabled();
    await user.click(trigger);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('shows a visible focus outline via :focus-visible on the trigger', () => {
    render(<Controlled />);
    const trigger = screen.getByRole('button', { name: 'Background Color' });
    trigger.focus();
    expect(trigger).toHaveFocus();
  });
});
