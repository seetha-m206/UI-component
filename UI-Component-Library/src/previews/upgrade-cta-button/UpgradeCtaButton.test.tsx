import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { UpgradeCtaButton } from './UpgradeCtaButton';

describe('UpgradeCtaButton', () => {
  it('renders as a native button with the default captured label "Upgrade Now"', () => {
    render(<UpgradeCtaButton />);
    const button = screen.getByRole('button', { name: 'Upgrade Now' });
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');
    expect(button).toHaveAttribute('type', 'button');
  });

  it('renders custom label text', () => {
    render(<UpgradeCtaButton label="Unlock Premium" />);
    expect(screen.getByRole('button', { name: 'Unlock Premium' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Upgrade Now' })).not.toBeInTheDocument();
  });

  it('calls onClick when clicked, and never performs real navigation', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);

    render(<UpgradeCtaButton onClick={onClick} />);
    await user.click(screen.getByRole('button', { name: 'Upgrade Now' }));

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(openSpy).not.toHaveBeenCalled();

    openSpy.mockRestore();
  });

  it('is keyboard operable via native button semantics (Enter/Space activate it)', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<UpgradeCtaButton onClick={onClick} />);

    const button = screen.getByRole('button', { name: 'Upgrade Now' });
    button.focus();
    expect(button).toHaveFocus();

    await user.keyboard('{Enter}');
    expect(onClick).toHaveBeenCalledTimes(1);

    await user.keyboard(' ');
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it('is disabled and unclickable when disabled=true (flagged assumption, not observed in source)', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<UpgradeCtaButton disabled onClick={onClick} />);

    const button = screen.getByRole('button', { name: 'Upgrade Now' });
    expect(button).toBeDisabled();

    await user.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('renders only the button itself, with no surrounding content block', () => {
    render(<UpgradeCtaButton />);
    // Only the button itself is reconstructed here — the surrounding
    // paywall content block is explicitly out of scope (see README).
    expect(screen.getAllByRole('button')).toHaveLength(1);
  });
});
