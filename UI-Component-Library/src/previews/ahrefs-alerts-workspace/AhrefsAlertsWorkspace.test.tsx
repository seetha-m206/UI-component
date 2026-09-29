import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsAlertsWorkspace } from './AhrefsAlertsWorkspace';
describe('AhrefsAlertsWorkspace', () => {
  it('renders the observed Ahrefs state', () => {
    render(<AhrefsAlertsWorkspace />);
    expect(screen.getByText('No results found', { exact: false })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('tab', { name: 'Mentions' }));
    expect(screen.getByRole('status')).toHaveTextContent('Showing Mentions alerts');
  });
});
