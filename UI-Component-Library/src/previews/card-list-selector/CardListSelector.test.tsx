import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { CardListSelector, type CardListSelectorItem } from './CardListSelector';

const ITEMS: CardListSelectorItem[] = [
  { id: 'share', icon: <span>S</span>, title: 'Share With', description: 'Share the form link.' },
  { id: 'embed', icon: <span>E</span>, title: 'Embed', description: 'Add this form to your site.' },
  {
    id: 'campaigns',
    icon: <span>C</span>,
    title: 'Email Campaigns',
    description: 'Send via email.',
  },
];

function Controlled(props: { initial?: string | null; disabled?: boolean }) {
  const [value, setValue] = useState<string | null>(props.initial ?? null);
  return (
    <CardListSelector
      items={ITEMS}
      value={value}
      onChange={setValue}
      disabled={props.disabled}
      label="Share this form"
    />
  );
}

describe('CardListSelector', () => {
  it('renders as an accessible radiogroup with one radio per card', () => {
    render(<Controlled />);
    expect(screen.getByRole('radiogroup', { name: 'Share this form' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /Share With/ })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /Embed/ })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /Email Campaigns/ })).toBeInTheDocument();
  });

  it('renders icon, title, and description for each card', () => {
    render(<Controlled />);
    expect(screen.getByText('Share With')).toBeInTheDocument();
    expect(screen.getByText('Share the form link.')).toBeInTheDocument();
  });

  it('selects a card on click', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    const embed = screen.getByRole('radio', { name: /Embed/ });
    await user.click(embed);
    expect(embed).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByRole('radio', { name: /Share With/ })).toHaveAttribute(
      'aria-checked',
      'false'
    );
  });

  it('re-clicking the already-selected card is a no-op, not a toggle-off (no observed deselect behavior)', async () => {
    const user = userEvent.setup();
    render(<Controlled initial="embed" />);
    const embed = screen.getByRole('radio', { name: /Embed/ });
    expect(embed).toHaveAttribute('aria-checked', 'true');
    await user.click(embed);
    expect(embed).toHaveAttribute('aria-checked', 'true');
  });

  it('supports keyboard activation via Space/Enter (native button semantics)', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    const share = screen.getByRole('radio', { name: /Share With/ });
    share.focus();
    await user.keyboard(' ');
    expect(share).toHaveAttribute('aria-checked', 'true');
  });

  it('moves focus and selection with arrow keys, clamped to the item range', async () => {
    const user = userEvent.setup();
    render(<Controlled initial="share" />);
    const share = screen.getByRole('radio', { name: /Share With/ });
    const embed = screen.getByRole('radio', { name: /Embed/ });
    share.focus();
    await user.keyboard('{ArrowDown}');
    expect(embed).toHaveAttribute('aria-checked', 'true');
    expect(embed).toHaveFocus();

    const campaigns = screen.getByRole('radio', { name: /Email Campaigns/ });
    campaigns.focus();
    await user.keyboard('{ArrowDown}');
    // Already at the last item; clamped, stays on the same card.
    expect(campaigns).toHaveAttribute('aria-checked', 'true');
  });

  it('cannot be changed when disabled', async () => {
    const user = userEvent.setup();
    render(<Controlled disabled initial="share" />);
    const embed = screen.getByRole('radio', { name: /Embed/ });
    expect(embed).toBeDisabled();
    await user.click(embed);
    expect(screen.getByRole('radio', { name: /Share With/ })).toHaveAttribute(
      'aria-checked',
      'true'
    );
  });

  it('renders a grid layout without changing the accessible structure', () => {
    render(<CardListSelector items={ITEMS} value={null} label="Choose an option" layout="grid" />);
    expect(screen.getByRole('radiogroup', { name: 'Choose an option' })).toBeInTheDocument();
    expect(screen.getAllByRole('radio')).toHaveLength(3);
  });
});
