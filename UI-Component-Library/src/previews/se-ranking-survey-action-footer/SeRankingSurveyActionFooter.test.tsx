import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SeRankingSurveyActionFooter } from './SeRankingSurveyActionFooter';
describe('SeRankingSurveyActionFooter', () => {
  it('records the observed completion behavior', async () => {
    const user = userEvent.setup();
    render(<SeRankingSurveyActionFooter hasSelection />);
    await user.click(screen.getByRole('button', { name: 'Complete' }));
    expect(screen.getByRole('status')).toHaveTextContent(/reload persistence were verified/i);
  });

  it('shows the persisted-completion boundary', () => {
    render(<SeRankingSurveyActionFooter persistedDismissal />);
    expect(screen.getByRole('button', { name: 'Skip' })).toBeDisabled();
    expect(screen.getByRole('status')).toHaveTextContent(/cannot be replayed/i);
  });
});
