import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PaperformTooltip } from './PaperformTooltip';

describe('PaperformTooltip', () => {
  it('hovering the info icon reveals nothing (confirmed absence of a hover tooltip)', async () => {
    const user = userEvent.setup();
    render(<PaperformTooltip />);
    await user.hover(screen.getByRole('button', { name: 'More info about columns' }));
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('clicking the info icon reveals a popover with the exact captured copy', async () => {
    const user = userEvent.setup();
    render(<PaperformTooltip />);
    await user.click(screen.getByRole('button', { name: 'More info about columns' }));
    expect(screen.getByRole('tooltip')).toHaveTextContent(
      "Two questions must be next to each other for this to be enabled. Columns aren't visible in the editor."
    );
  });

  it('the second icon has its own independent popover copy', async () => {
    const user = userEvent.setup();
    render(<PaperformTooltip />);
    await user.click(screen.getByRole('button', { name: 'More info about question visibility' }));
    expect(screen.getByRole('tooltip')).toHaveTextContent('Question is always visible.');
  });

  it('clicking away dismisses the open popover', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <PaperformTooltip />
        <button type="button">Elsewhere</button>
      </div>
    );
    await user.click(screen.getByRole('button', { name: 'More info about columns' }));
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Elsewhere' }));
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('clicking the same icon twice toggles the popover closed', async () => {
    const user = userEvent.setup();
    render(<PaperformTooltip />);
    const icon = screen.getByRole('button', { name: 'More info about columns' });
    await user.click(icon);
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
    await user.click(icon);
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('opening one icon closes the other (only one popover open at a time)', async () => {
    const user = userEvent.setup();
    render(<PaperformTooltip />);
    await user.click(screen.getByRole('button', { name: 'More info about columns' }));
    await user.click(screen.getByRole('button', { name: 'More info about question visibility' }));
    expect(screen.getAllByRole('tooltip')).toHaveLength(1);
    expect(screen.getByRole('tooltip')).toHaveTextContent('Question is always visible.');
  });

  it('does not open when disabled', async () => {
    const user = userEvent.setup();
    render(<PaperformTooltip disabled />);
    await user.click(screen.getByRole('button', { name: 'More info about columns' }));
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('never calls fetch/XHR for any interaction (no backend — static docs preview)', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<PaperformTooltip />);
    await user.click(screen.getByRole('button', { name: 'More info about columns' }));
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
