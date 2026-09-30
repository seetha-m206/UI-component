import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsBrandRadarEmptyReports } from './AhrefsBrandRadarEmptyReports';
describe('AhrefsBrandRadarEmptyReports', () => {
  it('shows and guards the first-report action', () => {
    render(<AhrefsBrandRadarEmptyReports />);
    expect(screen.getByRole('heading', { name: 'Add your first report' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Report/ }));
    expect(screen.getByRole('status')).toHaveTextContent('Report creation needs live verification');
  });
});
