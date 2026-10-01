import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SeRankingSurveyDialog } from './SeRankingSurveyDialog';
describe('SeRankingSurveyDialog', () => {
  it('keeps submission guarded in the local fixture', async () => {
    const user = userEvent.setup();
    render(<SeRankingSurveyDialog />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    await user.click(screen.getByRole('radio', { name: /organic search/i }));
    await user.click(screen.getByRole('button', { name: 'Complete' }));
    expect(screen.getByRole('status')).toHaveTextContent(/No survey response was sent/i);
  });
});

describe('SeRankingSurveyDialog closed fixture', () => {
  it('can start closed and reopen locally', async () => {
    const user = userEvent.setup();
    render(<SeRankingSurveyDialog initiallyOpen={false} />);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Open survey specimen' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});
