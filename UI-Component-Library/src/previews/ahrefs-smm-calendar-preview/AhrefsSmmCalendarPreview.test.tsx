import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsSmmCalendarPreview } from './AhrefsSmmCalendarPreview';
describe('AhrefsSmmCalendarPreview', () => {
  it('renders seven illustrative days without publishing actions', () => {
    render(<AhrefsSmmCalendarPreview />);
    expect(screen.getByText('Sun')).toBeInTheDocument();
    expect(screen.getByText('Sat')).toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
