import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { ThemeIconButtonGroupSelector, type ThemeIconOption } from './ThemeIconButtonGroupSelector';

const OPTIONS: ThemeIconOption[] = [
  { id: 'plain', icon: <svg />, label: 'Plain' },
  { id: 'left-banner', icon: <svg />, label: 'Left Banner' },
  { id: 'right-banner', icon: <svg />, label: 'Right Banner' },
];

function Controlled(props: {
  initial?: string | null;
  disabled?: boolean;
  variant?: 'tile' | 'icon';
}) {
  const [value, setValue] = useState<string | null>(props.initial ?? null);
  return (
    <ThemeIconButtonGroupSelector
      value={value}
      onChange={setValue}
      options={OPTIONS}
      disabled={props.disabled}
      variant={props.variant}
      label="Form Layout"
    />
  );
}

describe('ThemeIconButtonGroupSelector', () => {
  it('renders with proper ARIA radiogroup/radio roles — the deliberate accessibility fix over the source (which has zero ARIA attributes)', () => {
    render(<Controlled initial="plain" />);
    const group = screen.getByRole('radiogroup', { name: 'Form Layout' });
    expect(group).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Plain' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Left Banner' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Right Banner' })).toBeInTheDocument();
  });

  it('aria-checked correctly reflects the selected option and flips on click', async () => {
    const user = userEvent.setup();
    render(<Controlled initial="plain" />);
    const plain = screen.getByRole('radio', { name: 'Plain' });
    const leftBanner = screen.getByRole('radio', { name: 'Left Banner' });
    expect(plain).toHaveAttribute('aria-checked', 'true');
    expect(leftBanner).toHaveAttribute('aria-checked', 'false');

    await user.click(leftBanner);
    expect(leftBanner).toHaveAttribute('aria-checked', 'true');
    expect(plain).toHaveAttribute('aria-checked', 'false');
  });

  it('does not toggle off on re-clicking the selected option (no toggle-off behavior observed in the source)', async () => {
    const user = userEvent.setup();
    render(<Controlled initial="plain" />);
    const plain = screen.getByRole('radio', { name: 'Plain' });
    await user.click(plain);
    expect(plain).toHaveAttribute('aria-checked', 'true');
  });

  it('supports keyboard activation via Space/Enter (native button semantics)', async () => {
    const user = userEvent.setup();
    render(<Controlled initial="plain" />);
    const rightBanner = screen.getByRole('radio', { name: 'Right Banner' });
    rightBanner.focus();
    await user.keyboard(' ');
    expect(rightBanner).toHaveAttribute('aria-checked', 'true');
  });

  it('moves focus and selection with arrow keys, wrapping at the ends', async () => {
    const user = userEvent.setup();
    render(<Controlled initial="right-banner" />);
    const rightBanner = screen.getByRole('radio', { name: 'Right Banner' });
    const plain = screen.getByRole('radio', { name: 'Plain' });
    rightBanner.focus();
    await user.keyboard('{ArrowRight}');
    expect(plain).toHaveAttribute('aria-checked', 'true');
    expect(plain).toHaveFocus();
  });

  it('cannot be changed when disabled', async () => {
    const user = userEvent.setup();
    render(<Controlled disabled initial="plain" />);
    const leftBanner = screen.getByRole('radio', { name: 'Left Banner' });
    expect(leftBanner).toBeDisabled();
    await user.click(leftBanner);
    expect(screen.getByRole('radio', { name: 'Plain' })).toHaveAttribute('aria-checked', 'true');
  });

  it('renders the tile variant with a hover tooltip (title attribute) and the icon variant without one', () => {
    const { rerender } = render(<Controlled initial="plain" variant="tile" />);
    expect(screen.getByRole('radio', { name: 'Plain' })).toHaveAttribute('title', 'Plain');

    rerender(<Controlled initial="plain" variant="icon" />);
    expect(screen.getByRole('radio', { name: 'Plain' })).not.toHaveAttribute('title');
  });

  it('shows a visible focus outline via :focus-visible', () => {
    render(<Controlled initial="plain" />);
    const plain = screen.getByRole('radio', { name: 'Plain' });
    plain.focus();
    expect(plain).toHaveFocus();
  });
});
