import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsProjectViewRadioGroup } from './AhrefsProjectViewRadioGroup';
describe('AhrefsProjectViewRadioGroup', () => {
  it('renders the observed Ahrefs state', () => {
    render(<AhrefsProjectViewRadioGroup />);
    expect(screen.getByText('Project view', { exact: false })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('radio', { name: 'GSC Insights' }));
    expect(screen.getByRole('status')).toHaveTextContent('Selected: GSC Insights');
  });
});
