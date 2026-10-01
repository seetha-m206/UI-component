import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsContentCompetitorFields } from './AhrefsContentCompetitorFields';
describe('AhrefsContentCompetitorFields', () => {
  it('adds reversible local competitor rows', () => {
    render(<AhrefsContentCompetitorFields />);
    fireEvent.click(screen.getByRole('button', { name: /Add competitor/ }));
    expect(screen.getByLabelText('Competitor 2')).toBeInTheDocument();
  });
});
