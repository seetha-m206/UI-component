import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsExportAction } from './AhrefsExportAction';
describe('AhrefsExportAction', () => {
  it('renders the observed Ahrefs state', () => {
    render(<AhrefsExportAction />);
    expect(screen.getByText('Export', { exact: false })).toBeInTheDocument();
  });
});
