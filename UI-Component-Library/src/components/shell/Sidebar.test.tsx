import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  it('groups components by product (brand) first, then by UI category within each', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    const nav = screen.getByRole('navigation', { name: 'Component library navigation' });
    expect(within(nav).getByText('Zoho Forms')).toBeInTheDocument();
    expect(within(nav).getByText('Typeform')).toBeInTheDocument();

    // A Zoho Forms component link and a Typeform component link should both
    // be reachable, and neither brand's components should be mixed under a
    // shared category heading the way the old ui_category-only grouping did.
    expect(
      within(nav).getByRole('link', { name: /Toggle \(Custom Radio-Styled Switch\)/ })
    ).toHaveAttribute('href', '/zoho-forms/toggle-radio-switch');
    expect(
      within(nav).getByRole('link', { name: /Yes\/No Field \(Radix RadioGroup\)/ })
    ).toHaveAttribute('href', '/typeform/yes-no-field');
  });

  it('brand sections are sorted alphabetically (Typeform before Zoho Forms)', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    const nav = screen.getByRole('navigation', { name: 'Component library navigation' });
    const text = nav.textContent ?? '';
    expect(text.indexOf('Typeform')).toBeLessThan(text.indexOf('Zoho Forms'));
  });
});
