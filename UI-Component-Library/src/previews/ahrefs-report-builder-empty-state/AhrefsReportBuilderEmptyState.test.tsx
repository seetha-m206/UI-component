import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsReportBuilderEmptyState } from './AhrefsReportBuilderEmptyState';
describe('AhrefsReportBuilderEmptyState', () => {
  it('renders the observed Ahrefs state', () => {
    render(<AhrefsReportBuilderEmptyState />);
    expect(screen.getByText('Create your first report', { exact: false })).toBeInTheDocument();
  });
});
