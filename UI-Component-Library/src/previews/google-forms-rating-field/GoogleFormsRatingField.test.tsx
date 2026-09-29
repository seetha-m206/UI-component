import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { GoogleFormsRatingField, type RatingValue } from './GoogleFormsRatingField';

function Controlled(props: { initial?: RatingValue; disabled?: boolean; maxValue?: number }) {
  const [value, setValue] = useState<RatingValue>(props.initial ?? null);
  return (
    <GoogleFormsRatingField
      value={value}
      onChange={setValue}
      disabled={props.disabled}
      maxValue={props.maxValue}
      label="Rate your experience"
    />
  );
}

describe('GoogleFormsRatingField', () => {
  it('has no role="radiogroup" and no group-level accessible name (confirmed real defect, reproduced not fixed)', () => {
    render(<Controlled />);
    expect(screen.queryByRole('radiogroup')).not.toBeInTheDocument();
    for (const label of ['1', '2', '3', '4', '5']) {
      expect(screen.getByRole('radio', { name: label })).toBeInTheDocument();
    }
  });

  it('clicking icon 3 marks icons 1-3 aria-checked=true simultaneously (non-exclusive fill semantics)', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    await user.click(screen.getByRole('radio', { name: '3' }));
    expect(screen.getByRole('radio', { name: '1' })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByRole('radio', { name: '2' })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByRole('radio', { name: '3' })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByRole('radio', { name: '4' })).toHaveAttribute('aria-checked', 'false');
    expect(screen.getByRole('radio', { name: '5' })).toHaveAttribute('aria-checked', 'false');
  });

  it('clicking the already-selected icon deselects everything back to unchecked', async () => {
    const user = userEvent.setup();
    render(<Controlled initial={3} />);
    await user.click(screen.getByRole('radio', { name: '3' }));
    for (const label of ['1', '2', '3', '4', '5']) {
      expect(screen.getByRole('radio', { name: label })).toHaveAttribute('aria-checked', 'false');
    }
  });

  it('shows a "Clear selection" link only once something is selected, and it deselects', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    expect(screen.queryByText('Clear selection')).not.toBeInTheDocument();
    await user.click(screen.getByRole('radio', { name: '4' }));
    expect(screen.getByText('Clear selection')).toBeInTheDocument();
    await user.click(screen.getByText('Clear selection'));
    expect(screen.queryByText('Clear selection')).not.toBeInTheDocument();
    expect(screen.getByRole('radio', { name: '4' })).toHaveAttribute('aria-checked', 'false');
  });

  it('Right arrow moves and commits the value immediately, with wraparound from the max icon', async () => {
    const user = userEvent.setup();
    render(<Controlled initial={5} />);
    screen.getByRole('radio', { name: '5' }).focus();
    await user.keyboard('{ArrowRight}');
    // Wraps to icon 1, and commits immediately (no separate confirm step).
    expect(screen.getByRole('radio', { name: '1' })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByRole('radio', { name: '2' })).toHaveAttribute('aria-checked', 'false');
    expect(screen.getByRole('radio', { name: '1' })).toHaveFocus();
  });

  it('Left arrow from icon 1 wraps to the max icon and fills all icons up to it', async () => {
    const user = userEvent.setup();
    render(<Controlled initial={1} maxValue={5} />);
    screen.getByRole('radio', { name: '1' }).focus();
    await user.keyboard('{ArrowLeft}');
    expect(screen.getByRole('radio', { name: '5' })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByRole('radio', { name: '3' })).toHaveAttribute('aria-checked', 'true');
  });

  it('Space on the selected icon deselects, same as a click', async () => {
    const user = userEvent.setup();
    render(<Controlled initial={2} />);
    screen.getByRole('radio', { name: '2' }).focus();
    await user.keyboard(' ');
    expect(screen.getByRole('radio', { name: '2' })).toHaveAttribute('aria-checked', 'false');
    expect(screen.getByRole('radio', { name: '1' })).toHaveAttribute('aria-checked', 'false');
  });

  it('Enter is a no-op and leaves the rating unchanged', async () => {
    const user = userEvent.setup();
    render(<Controlled initial={3} />);
    screen.getByRole('radio', { name: '3' }).focus();
    await user.keyboard('{Enter}');
    expect(screen.getByRole('radio', { name: '3' })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByRole('radio', { name: '2' })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByRole('radio', { name: '4' })).toHaveAttribute('aria-checked', 'false');
  });

  it('hover previews nothing — no icon changes aria-checked or filled state on hover alone', async () => {
    const user = userEvent.setup();
    render(<Controlled initial={2} />);
    await user.hover(screen.getByRole('radio', { name: '5' }));
    expect(screen.getByRole('radio', { name: '5' })).toHaveAttribute('aria-checked', 'false');
    expect(screen.getByRole('radio', { name: '3' })).toHaveAttribute('aria-checked', 'false');
    expect(screen.getByRole('radio', { name: '2' })).toHaveAttribute('aria-checked', 'true');
  });

  it('respects a configured maxValue other than 5', () => {
    render(<Controlled maxValue={3} />);
    expect(screen.getAllByRole('radio')).toHaveLength(3);
  });

  it('cannot be changed when disabled', async () => {
    const user = userEvent.setup();
    render(<Controlled disabled initial={2} />);
    await user.click(screen.getByRole('radio', { name: '4' }));
    expect(screen.getByRole('radio', { name: '2' })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByRole('radio', { name: '4' })).toHaveAttribute('aria-checked', 'false');
  });
});
