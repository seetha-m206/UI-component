import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsContentLocationSelect } from './AhrefsContentLocationSelect';
describe('AhrefsContentLocationSelect', () => {
  it('changes the local location state', () => {
    render(<AhrefsContentLocationSelect />);
    fireEvent.change(screen.getByLabelText('Location'), { target: { value: 'Canada' } });
    expect(screen.getByText('Selected location: Canada')).toBeInTheDocument();
  });
});
