import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { JotformStarRatingField, type RatingValue } from './JotformStarRatingField';

function Controlled(props: { initial?: RatingValue; disabled?: boolean }) {
  const [value, setValue] = useState<RatingValue>(props.initial ?? null);
  return <JotformStarRatingField value={value} onChange={setValue} disabled={props.disabled} />;
}

describe('JotformStarRatingField', () => {
  it('renders as an accessible radiogroup with 5 radio stars by default', () => {
    render(<Controlled />);
    expect(screen.getByRole('radiogroup')).toBeInTheDocument();
    expect(screen.getAllByRole('radio')).toHaveLength(5);
  });

  it('clicking a star commits an exclusive aria-checked value (only that star true)', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    await user.click(screen.getByRole('radio', { name: '3 stars' }));
    expect(screen.getByRole('radio', { name: '3 stars' })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByRole('radio', { name: '1 star' })).toHaveAttribute('aria-checked', 'false');
    expect(screen.getByRole('radio', { name: '5 stars' })).toHaveAttribute('aria-checked', 'false');
  });

  it('shows cumulative fill up to the committed value', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    await user.click(screen.getByRole('radio', { name: '3 stars' }));
    expect(screen.getByRole('radio', { name: '1 star' })).toHaveAttribute('data-fill-state', 'committed');
    expect(screen.getByRole('radio', { name: '3 stars' })).toHaveAttribute('data-fill-state', 'committed');
    expect(screen.getByRole('radio', { name: '4 stars' })).toHaveAttribute('data-fill-state', 'empty');
  });

  it('arrow keys commit the value immediately, no separate activation step', async () => {
    const user = userEvent.setup();
    render(<Controlled initial={2} />);
    const star2 = screen.getByRole('radio', { name: '2 stars' });
    star2.focus();
    await user.keyboard('{ArrowRight}');
    expect(screen.getByTestId('committed-value')).toHaveTextContent('3');
    expect(screen.getByRole('radio', { name: '3 stars' })).toHaveAttribute('aria-checked', 'true');
  });

  it('re-clicking the already-selected star decrements the value (confirmed real quirk, reproduced not smoothed over)', async () => {
    const user = userEvent.setup();
    render(<Controlled initial={3} />);
    await user.click(screen.getByRole('radio', { name: '3 stars' }));
    expect(screen.getByTestId('committed-value')).toHaveTextContent('2');
  });

  it('confirms the real tabindex/mouse-click desync bug: a mouse click does not move the roving tabindex', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    await user.click(screen.getByRole('radio', { name: '4 stars' }));
    // aria-checked correctly follows the click...
    expect(screen.getByRole('radio', { name: '4 stars' })).toHaveAttribute('aria-checked', 'true');
    // ...but the roving tabindex stays on the original default star (1), not star 4.
    expect(screen.getByRole('radio', { name: '1 star' })).toHaveAttribute('tabindex', '0');
    expect(screen.getByRole('radio', { name: '4 stars' })).toHaveAttribute('tabindex', '-1');
  });

  it('a keyboard interaction DOES re-sync the roving tabindex to the active star', async () => {
    const user = userEvent.setup();
    render(<Controlled initial={1} />);
    const star1 = screen.getByRole('radio', { name: '1 star' });
    star1.focus();
    await user.keyboard('{ArrowRight}');
    expect(screen.getByRole('radio', { name: '2 stars' })).toHaveAttribute('tabindex', '0');
  });

  it('disables every star when disabled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<JotformStarRatingField value={null} disabled onChange={onChange} />);
    await user.click(screen.getByRole('radio', { name: '3 stars' }));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('never calls fetch/XHR for any interaction (no backend — static docs preview)', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<Controlled />);
    await user.click(screen.getByRole('radio', { name: '3 stars' }));
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
