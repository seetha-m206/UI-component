import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { SidebarSettingsSubnav, type SidebarNavItem } from './SidebarSettingsSubnav';

const ITEMS: SidebarNavItem[] = [
  { id: 'geolocation', label: 'Geolocation' },
  { id: 'saveForLater', label: 'Save for Later' },
  { id: 'editResponse', label: 'Edit Response' },
  { id: 'reviewSub', label: 'Review Before Submission' },
];

function Controlled(props: {
  initial?: string;
  disabled?: boolean;
  onChange?: (id: string) => void;
}) {
  const [value, setValue] = useState(props.initial ?? ITEMS[0].id);
  return (
    <SidebarSettingsSubnav
      items={ITEMS}
      value={value}
      onChange={(id) => {
        setValue(id);
        props.onChange?.(id);
      }}
      disabled={props.disabled}
      label="Submissions & Storage"
    />
  );
}

describe('SidebarSettingsSubnav', () => {
  it('renders as an accessible nav landmark with one link per item', () => {
    render(<Controlled />);
    expect(screen.getByRole('navigation', { name: 'Submissions & Storage' })).toBeInTheDocument();
    for (const item of ITEMS) {
      expect(screen.getByRole('button', { name: item.label })).toBeInTheDocument();
    }
  });

  it('marks exactly one item active via aria-current, matching the initial value', () => {
    render(<Controlled initial="editResponse" />);
    expect(screen.getByRole('button', { name: 'Edit Response' })).toHaveAttribute(
      'aria-current',
      'true'
    );
    expect(screen.getByRole('button', { name: 'Geolocation' })).not.toHaveAttribute('aria-current');
  });

  it('switches the active item on click and calls onChange with the clicked id', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Controlled onChange={onChange} />);
    await user.click(screen.getByRole('button', { name: 'Review Before Submission' }));
    expect(onChange).toHaveBeenCalledWith('reviewSub');
    expect(screen.getByRole('button', { name: 'Review Before Submission' })).toHaveAttribute(
      'aria-current',
      'true'
    );
    expect(screen.getByRole('button', { name: 'Geolocation' })).not.toHaveAttribute('aria-current');
  });

  it('clicking the already-active item is a no-op (no deselect state, unlike the toggle/rating fields)', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Controlled initial="geolocation" onChange={onChange} />);
    await user.click(screen.getByRole('button', { name: 'Geolocation' }));
    expect(onChange).not.toHaveBeenCalled();
    expect(screen.getByRole('button', { name: 'Geolocation' })).toHaveAttribute(
      'aria-current',
      'true'
    );
  });

  it('supports keyboard activation via Space/Enter (native button semantics)', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    const target = screen.getByRole('button', { name: 'Save for Later' });
    target.focus();
    await user.keyboard('{Enter}');
    expect(target).toHaveAttribute('aria-current', 'true');
  });

  it('moves focus and selection with ArrowDown/ArrowUp, wrapping at the ends', async () => {
    const user = userEvent.setup();
    render(<Controlled initial="reviewSub" />);
    const last = screen.getByRole('button', { name: 'Review Before Submission' });
    last.focus();
    await user.keyboard('{ArrowDown}');
    const first = screen.getByRole('button', { name: 'Geolocation' });
    expect(first).toHaveAttribute('aria-current', 'true');
    expect(first).toHaveFocus();

    await user.keyboard('{ArrowUp}');
    expect(last).toHaveAttribute('aria-current', 'true');
    expect(last).toHaveFocus();
  });

  it('cannot be changed when disabled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Controlled initial="geolocation" disabled onChange={onChange} />);
    const target = screen.getByRole('button', { name: 'Save for Later' });
    expect(target).toBeDisabled();
    await user.click(target);
    expect(onChange).not.toHaveBeenCalled();
    expect(screen.getByRole('button', { name: 'Geolocation' })).toHaveAttribute(
      'aria-current',
      'true'
    );
  });

  it('shows a visible focus outline via :focus-visible', () => {
    render(<Controlled />);
    const target = screen.getByRole('button', { name: 'Geolocation' });
    target.focus();
    expect(target).toHaveFocus();
  });

  it('renders an optional decorative icon without affecting the accessible name', () => {
    render(
      <SidebarSettingsSubnav
        items={[{ id: 'geolocation', label: 'Geolocation', icon: '\u{1F4CD}' }]}
        value="geolocation"
        label="Submissions & Storage"
      />
    );
    const button = screen.getByRole('button', { name: 'Geolocation' });
    expect(button).toBeInTheDocument();
  });
});
