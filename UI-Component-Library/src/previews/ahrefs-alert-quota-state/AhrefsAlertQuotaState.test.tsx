import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsAlertQuotaState } from './AhrefsAlertQuotaState';
describe('AhrefsAlertQuotaState', () => {
  it('renders the observed Ahrefs state', () => {
    render(<AhrefsAlertQuotaState />);
    expect(screen.getByText('maximum number of alerts', { exact: false })).toBeInTheDocument();
  });
});
