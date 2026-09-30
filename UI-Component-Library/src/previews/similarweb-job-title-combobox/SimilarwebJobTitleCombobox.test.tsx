import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SimilarwebJobTitleCombobox } from './SimilarwebJobTitleCombobox';

describe('SimilarwebJobTitleCombobox', () => {
  it('filters and clears local job-title results', async () => {
    const user = userEvent.setup();
    render(<SimilarwebJobTitleCombobox />);
    const combobox = screen.getByRole('combobox', { name: 'Job title' });
    await user.type(combobox, 'Marketing');
    expect(screen.getByRole('option', { name: 'Marketing Manager' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Clear' }));
    expect(combobox).toHaveValue('');
    expect(screen.getByText('Type to search')).toBeInTheDocument();
  });
});
