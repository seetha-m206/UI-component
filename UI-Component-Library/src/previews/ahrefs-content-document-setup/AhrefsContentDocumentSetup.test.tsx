import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsContentDocumentSetup } from './AhrefsContentDocumentSetup';
describe('AhrefsContentDocumentSetup', () => {
  it('adds local competitor fields and guards submission', () => {
    render(<AhrefsContentDocumentSetup />);
    fireEvent.click(screen.getByRole('button', { name: /Add competitor/ }));
    expect(screen.getByText('Competitor 2')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Create document' }));
    expect(screen.getByRole('status')).toHaveTextContent('needs live verification');
  });
});
