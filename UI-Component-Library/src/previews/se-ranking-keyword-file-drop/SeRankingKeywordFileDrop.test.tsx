import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SeRankingKeywordFileDrop } from './SeRankingKeywordFileDrop';
describe('SeRankingKeywordFileDrop', () => {
  it('replays the observed selected-file state locally', async () => {
    const user = userEvent.setup();
    render(<SeRankingKeywordFileDrop initialState="selected" />);
    expect(
      screen.getByRole('button', { name: 'se-ranking-keywords-evidence.txt' })
    ).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Import' }));
    expect(screen.getByRole('status')).toHaveTextContent(/Live import success was observed/i);
  });

  it('documents the live accepted-file restriction', () => {
    render(<SeRankingKeywordFileDrop initialState="invalid-type" />);
    expect(screen.getByText(/accepts only \.csv and \.txt/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Import' })).toBeDisabled();
    expect(screen.getByRole('status')).toHaveTextContent(/blocked before import/i);
  });

  it('replays the observed duplicate removal result without adding a keyword', async () => {
    const user = userEvent.setup();
    render(<SeRankingKeywordFileDrop initialState="duplicate" />);
    expect(screen.getByRole('dialog', { name: /keyword list contains duplicates/i })).toHaveTextContent(
      'Duplicates found: 1'
    );
    await user.click(screen.getByRole('button', { name: /yes, remove duplicates/i }));
    expect(screen.getByText('Added keywords: 0')).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent(/keyword limits remain 1 \/ 750/i);
  });
});
