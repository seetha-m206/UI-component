import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsTutorialReportPreview } from './AhrefsTutorialReportPreview';
describe('AhrefsTutorialReportPreview', () => {
  it('renders the illustrative report only', () => {
    render(<AhrefsTutorialReportPreview />);
    expect(screen.getByLabelText('Illustrative report rows')).toBeInTheDocument();
    expect(screen.getAllByText('Target').length).toBeGreaterThan(0);
  });
});
