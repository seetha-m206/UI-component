import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsContentHelperTabs } from './AhrefsContentHelperTabs';
describe('AhrefsContentHelperTabs', () => {
  it('switches between observed local empty panels', () => {
    render(<AhrefsContentHelperTabs />);
    fireEvent.click(screen.getByRole('tab', { name: /Brand kits/ }));
    expect(screen.getByRole('heading', { name: 'Add your first brand kit' })).toBeInTheDocument();
  });
});
