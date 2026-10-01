import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SimilarwebProgressAction } from './SimilarwebProgressAction';

describe('SimilarwebProgressAction', () => {
  it('keeps the observed empty-state action disabled', () => {
    render(<SimilarwebProgressAction />);
    expect(screen.getByRole('button', { name: /Next/ })).toBeDisabled();
  });

  it('guards the synthetic enabled action locally', async () => {
    const user = userEvent.setup();
    render(<SimilarwebProgressAction initialState="enabled-action" />);
    await user.click(screen.getByRole('button', { name: /Next/ }));
    expect(screen.getByRole('status')).toHaveTextContent('No Similarweb answer was submitted');
  });
});
