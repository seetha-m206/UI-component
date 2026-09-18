import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { vi } from 'vitest';
import { AnalyticsFeatureGate, type GateType } from './AnalyticsFeatureGate';

function Controlled(props: {
  initialLocked?: boolean;
  gateType: GateType;
  disabled?: boolean;
  onUnlock?: (gateType: GateType) => void;
}) {
  const [locked, setLocked] = useState(props.initialLocked ?? true);
  return (
    <AnalyticsFeatureGate
      locked={locked}
      gateType={props.gateType}
      disabled={props.disabled}
      label="Advanced Metrics"
      description="Track submission counts by device and how long users take to complete your form."
      onUnlock={(gateType) => {
        props.onUnlock?.(gateType);
        if (gateType === 'free-toggle') {
          setLocked(false);
        }
      }}
    />
  );
}

describe('AnalyticsFeatureGate', () => {
  it('renders the blurred content and the lock overlay when locked', () => {
    render(<Controlled gateType="free-toggle" />);
    expect(screen.getByRole('region', { name: 'Advanced Metrics' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Enable Advanced Metrics' })).toBeInTheDocument();
    // Underlying data is present in the DOM (blurred, not hidden from the layout).
    expect(screen.getByText('Single Line')).toBeInTheDocument();
  });

  it('renders unblurred content with no overlay when unlocked', () => {
    render(<Controlled gateType="free-toggle" initialLocked={false} />);
    expect(screen.queryByRole('region', { name: 'Advanced Metrics' })).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'Enable Advanced Metrics' })
    ).not.toBeInTheDocument();
    expect(screen.getByText('Single Line')).toBeInTheDocument();
  });

  it('free-toggle: clicking the CTA opens a confirmation modal, not an instant unlock', async () => {
    const user = userEvent.setup();
    const onUnlock = vi.fn();
    render(<Controlled gateType="free-toggle" onUnlock={onUnlock} />);

    await user.click(screen.getByRole('button', { name: 'Enable Advanced Metrics' }));
    expect(screen.getByRole('dialog', { name: 'Enable Advanced Metrics' })).toBeInTheDocument();
    expect(onUnlock).not.toHaveBeenCalled();
    // Still locked while the modal is open.
    expect(screen.getByRole('region', { name: 'Advanced Metrics' })).toBeInTheDocument();
  });

  it('free-toggle: confirming "Enable" in the modal calls onUnlock and unlocks the content', async () => {
    const user = userEvent.setup();
    const onUnlock = vi.fn();
    render(<Controlled gateType="free-toggle" onUnlock={onUnlock} />);

    await user.click(screen.getByRole('button', { name: 'Enable Advanced Metrics' }));
    await user.click(screen.getByRole('button', { name: 'Enable' }));

    expect(onUnlock).toHaveBeenCalledWith('free-toggle');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.queryByRole('region', { name: 'Advanced Metrics' })).not.toBeInTheDocument();
  });

  it('free-toggle: "Cancel" closes the modal without calling onUnlock, and returns focus to the CTA', async () => {
    const user = userEvent.setup();
    const onUnlock = vi.fn();
    render(<Controlled gateType="free-toggle" onUnlock={onUnlock} />);

    const cta = screen.getByRole('button', { name: 'Enable Advanced Metrics' });
    await user.click(cta);
    await user.click(screen.getByRole('button', { name: 'Cancel' }));

    expect(onUnlock).not.toHaveBeenCalled();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(cta).toHaveFocus();
  });

  it('free-toggle: Escape closes the modal without calling onUnlock', async () => {
    const user = userEvent.setup();
    const onUnlock = vi.fn();
    render(<Controlled gateType="free-toggle" onUnlock={onUnlock} />);

    await user.click(screen.getByRole('button', { name: 'Enable Advanced Metrics' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    await user.keyboard('{Escape}');

    expect(onUnlock).not.toHaveBeenCalled();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('paywall: clicking the CTA calls onUnlock immediately, with no modal, and stays locked', async () => {
    const user = userEvent.setup();
    const onUnlock = vi.fn();
    render(<Controlled gateType="paywall" onUnlock={onUnlock} />);

    await user.click(screen.getByRole('button', { name: 'Upgrade Now' }));

    expect(onUnlock).toHaveBeenCalledWith('paywall');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    // Paywall clicks never unlock the gate by themselves (real product behavior).
    expect(screen.getByRole('region', { name: 'Advanced Metrics' })).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent(/redirecting to upgrade/i);
  });

  it('performs no real navigation on the paywall CTA', async () => {
    const user = userEvent.setup();
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);
    render(<Controlled gateType="paywall" />);

    await user.click(screen.getByRole('button', { name: 'Upgrade Now' }));
    expect(openSpy).not.toHaveBeenCalled();

    openSpy.mockRestore();
  });

  it('the same blur+lock overlay markup is used for both gate types (the documented ambiguity)', () => {
    const { unmount } = render(<Controlled gateType="free-toggle" />);
    const freeToggleTitle = screen.getByText('Advanced Metrics');
    expect(freeToggleTitle).toBeInTheDocument();
    unmount();

    render(<Controlled gateType="paywall" />);
    // Same overlay region role/label shape, only the CTA differs.
    expect(screen.getByRole('region', { name: 'Advanced Metrics' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Upgrade Now' })).toBeInTheDocument();
  });

  it('disables the CTA button and blocks interaction when disabled', async () => {
    const user = userEvent.setup();
    const onUnlock = vi.fn();
    render(<Controlled gateType="free-toggle" disabled onUnlock={onUnlock} />);

    const cta = screen.getByRole('button', { name: 'Enable Advanced Metrics' });
    expect(cta).toBeDisabled();
    await user.click(cta);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(onUnlock).not.toHaveBeenCalled();
  });

  it('is keyboard operable: the CTA is a real focusable button activated by Enter/Space', async () => {
    const user = userEvent.setup();
    render(<Controlled gateType="free-toggle" />);

    const cta = screen.getByRole('button', { name: 'Enable Advanced Metrics' });
    cta.focus();
    expect(cta).toHaveFocus();
    await user.keyboard('{Enter}');
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('moves focus to the "Enable" button when the confirmation modal opens', async () => {
    const user = userEvent.setup();
    render(<Controlled gateType="free-toggle" />);

    await user.click(screen.getByRole('button', { name: 'Enable Advanced Metrics' }));
    expect(screen.getByRole('button', { name: 'Enable' })).toHaveFocus();
  });
});
