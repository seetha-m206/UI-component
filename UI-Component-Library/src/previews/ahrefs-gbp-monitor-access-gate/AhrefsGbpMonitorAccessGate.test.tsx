import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsGbpMonitorAccessGate } from './AhrefsGbpMonitorAccessGate';
describe('AhrefsGbpMonitorAccessGate', () => {
  it('renders the observed Ahrefs state', () => {
    render(<AhrefsGbpMonitorAccessGate />);
    expect(
      screen.getByText('Protect your Google Business Profiles', { exact: false })
    ).toBeInTheDocument();
  });
});
