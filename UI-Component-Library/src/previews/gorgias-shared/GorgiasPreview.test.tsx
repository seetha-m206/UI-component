import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { GorgiasPreview } from './GorgiasPreview';

describe('GorgiasPreview', () => {
  it('renders the empty inbox without exposing provider ticket content', () => {
    render(<GorgiasPreview variant="inbox-empty" />);
    expect(screen.getByRole('heading', { name: 'No open tickets' })).toBeInTheDocument();
    expect(screen.queryByText(/@/)).not.toBeInTheDocument();
  });

  it('opens and dismisses the fictional search overlay', async () => {
    const user = userEvent.setup();
    render(<GorgiasPreview variant="application-shell" />);
    await user.click(screen.getByRole('button', { name: 'Open fictional search' }));
    expect(screen.getByRole('dialog', { name: 'Fictional global search' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: '×' }));
    expect(screen.queryByRole('dialog', { name: 'Fictional global search' })).not.toBeInTheDocument();
  });

  it('keeps provider-shaped actions local and guarded', async () => {
    const user = userEvent.setup();
    render(<GorgiasPreview variant="chat-channel-empty" />);
    await user.click(screen.getByRole('button', { name: '＋ New chat' }));
    expect(screen.getByRole('status')).toHaveTextContent('No chat channel was created.');
  });

  it('shows the disabled AI setup prerequisite', () => {
    render(<GorgiasPreview variant="ai-agent-boundary" />);
    expect(screen.getByRole('button', { name: 'Start setup' })).toBeDisabled();
    expect(screen.getByText(/connected commerce store/i)).toBeInTheDocument();
  });

  it('keeps inbox controls fictional and non-persistent', async () => {
    const user = userEvent.setup();
    render(<GorgiasPreview variant="inbox-controls" />);
    await user.click(screen.getByRole('button', { name: /add filter/i }));
    expect(screen.getByRole('status')).toHaveTextContent('No filter was added.');
  });

  it('does not submit the Gaia assistant', () => {
    render(<GorgiasPreview variant="gaia-assistant" />);
    expect(screen.getByRole('button', { name: 'Send' })).toBeDisabled();
    expect(screen.getByLabelText('Message Gaia')).toHaveValue('');
  });

  it('switches fictional workflow panels without provider writes', async () => {
    const user = userEvent.setup();
    render(<GorgiasPreview variant="workflow-controls" />);
    await user.click(screen.getAllByRole('button', { name: 'CSAT' })[1]);
    expect(screen.getByRole('heading', { name: 'Satisfaction survey' })).toBeInTheDocument();
  });

  it('omits account identifiers from channel settings', () => {
    const { container } = render(<GorgiasPreview variant="channel-settings" />);
    expect(container).not.toHaveTextContent('@');
    expect(screen.getByRole('heading', { name: 'Channel settings' })).toBeInTheDocument();
  });
});
