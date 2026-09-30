import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsContentBrandKitSelect } from './AhrefsContentBrandKitSelect';
describe('AhrefsContentBrandKitSelect', () => {
  it('changes the synthetic brand-kit state', () => {
    render(<AhrefsContentBrandKitSelect />);
    fireEvent.change(screen.getByLabelText('Brand kit'), { target: { value: 'Atlas voice' } });
    expect(screen.getByText('Selected brand kit: Atlas voice')).toBeInTheDocument();
  });
});
