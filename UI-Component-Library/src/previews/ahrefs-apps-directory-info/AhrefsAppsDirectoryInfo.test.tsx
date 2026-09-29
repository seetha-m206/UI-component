import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsAppsDirectoryInfo } from './AhrefsAppsDirectoryInfo';
describe('AhrefsAppsDirectoryInfo', () => {
  it('renders the observed Ahrefs state', () => {
    render(<AhrefsAppsDirectoryInfo />);
    expect(screen.getByText('Ahrefs Data in SEO Tools', { exact: false })).toBeInTheDocument();
  });
});
