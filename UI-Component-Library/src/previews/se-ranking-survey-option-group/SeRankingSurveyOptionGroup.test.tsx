import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SeRankingSurveyOptionGroup } from './SeRankingSurveyOptionGroup';
describe('SeRankingSurveyOptionGroup', () => {
  it('selects one local option without submission', async () => {
    const user = userEvent.setup();
    render(<SeRankingSurveyOptionGroup />);
    await user.click(screen.getByRole('radio', { name: /AI search/i }));
    expect(screen.getByRole('status')).toHaveTextContent(/selected locally/i);
    expect(screen.getByRole('radio', { name: /AI search/i })).toBeChecked();
  });
});
