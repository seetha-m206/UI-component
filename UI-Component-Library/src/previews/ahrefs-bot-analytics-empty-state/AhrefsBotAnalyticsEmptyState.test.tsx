import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsBotAnalyticsEmptyState } from './AhrefsBotAnalyticsEmptyState';
describe('AhrefsBotAnalyticsEmptyState', () => {
  it('renders the observed Ahrefs state', () => {
    render(<AhrefsBotAnalyticsEmptyState />);
    expect(
      screen.getByText('No projects available for Bot Analytics', { exact: false })
    ).toBeInTheDocument();
  });
});
