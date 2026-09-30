import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsAlertCategoryTabs } from './AhrefsAlertCategoryTabs';
describe('AhrefsAlertCategoryTabs', () => {
  it('renders the observed Ahrefs state', () => {
    render(<AhrefsAlertCategoryTabs />);
    expect(screen.getByText('Showing Backlinks alerts', { exact: false })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('tab', { name: 'Mentions' }));
    expect(screen.getByRole('status')).toHaveTextContent('Showing Mentions alerts');
  });
});
