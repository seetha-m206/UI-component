import { useState } from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Sidebar } from './Sidebar';

// The search input itself now lives in Header, not Sidebar (see Layout,
// which owns the shared `query` state) — this tiny harness stands in for
// that split so Sidebar can still be tested for search-driven behavior in
// isolation, without pulling in the whole Layout/Header tree.
function SidebarWithSearch() {
  const [query, setQuery] = useState('');
  return (
    <>
      <label htmlFor="test-search">Search components</label>
      <input id="test-search" value={query} onChange={(e) => setQuery(e.target.value)} />
      <Sidebar query={query} />
    </>
  );
}

// Catalogue groups now include helpdesk products before Forms. Tests of form
// brands open their group explicitly instead of relying on Forms sorting first.
async function openFormsGroup(user: ReturnType<typeof userEvent.setup>) {
  const button = screen.getByRole('button', { name: /^Forms$/ });
  if (button.getAttribute('aria-expanded') !== 'true') await user.click(button);
}

describe('Sidebar', () => {
  it('groups components by product (brand) first, then by UI category within each', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Sidebar query="" />
      </MemoryRouter>
    );
    await openFormsGroup(user);

    const nav = screen.getByRole('navigation', { name: 'Component library navigation' });
    expect(within(nav).getByRole('button', { name: /Zoho Forms/ })).toBeInTheDocument();
    expect(within(nav).getByRole('button', { name: /Typeform/ })).toBeInTheDocument();

    // Brand groups are collapsed by default (see the collapse/expand test
    // below) — expand both before checking their contents.
    await user.click(within(nav).getByRole('button', { name: /Zoho Forms/ }));
    await user.click(within(nav).getByRole('button', { name: /Typeform/ }));

    // Categories within a brand are collapsed independently too — expand
    // every "Actions" category button (one per brand) to reach the links.
    for (const button of within(nav).getAllByRole('button', { name: /Actions/ })) {
      await user.click(button);
    }

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

  it('brand sections are sorted alphabetically (Typeform before Zoho Forms)', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Sidebar query="" />
      </MemoryRouter>
    );
    await openFormsGroup(user);
    const nav = screen.getByRole('navigation', { name: 'Component library navigation' });
    const text = nav.textContent ?? '';
    expect(text.indexOf('Typeform')).toBeLessThan(text.indexOf('Zoho Forms'));
  });

  it('brand groups are collapsed by default and expand/collapse on click', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Sidebar query="" />
      </MemoryRouter>
    );
    await openFormsGroup(user);
    const nav = screen.getByRole('navigation', { name: 'Component library navigation' });
    const zohoButton = within(nav).getByRole('button', { name: /Zoho Forms/ });
    expect(zohoButton).toHaveAttribute('aria-expanded', 'false');
    expect(
      within(nav).queryByRole('link', { name: /Toggle \(Custom Radio-Styled Switch\)/ })
    ).not.toBeInTheDocument();

    await user.click(zohoButton);
    expect(zohoButton).toHaveAttribute('aria-expanded', 'true');
    await user.click(within(nav).getByRole('button', { name: /Actions/ }));
    expect(
      within(nav).getByRole('link', { name: /Toggle \(Custom Radio-Styled Switch\)/ })
    ).toBeInTheDocument();

    await user.click(zohoButton);
    expect(zohoButton).toHaveAttribute('aria-expanded', 'false');
    expect(
      within(nav).queryByRole('link', { name: /Toggle \(Custom Radio-Styled Switch\)/ })
    ).not.toBeInTheDocument();
  });

  it("opens the current page's own brand group and category by default, collapsing sibling categories", () => {
    render(
      <MemoryRouter initialEntries={['/zoho-forms/toggle-radio-switch']}>
        <Sidebar query="" />
      </MemoryRouter>
    );
    const nav = screen.getByRole('navigation', { name: 'Component library navigation' });
    expect(within(nav).getByRole('button', { name: /Zoho Forms/ })).toHaveAttribute(
      'aria-expanded',
      'true'
    );
    expect(within(nav).getByRole('button', { name: /Typeform/ })).toHaveAttribute(
      'aria-expanded',
      'false'
    );

    // "Actions" is toggle-radio-switch's own category — it should be open by
    // default, while a sibling category in the same brand stays collapsed.
    expect(within(nav).getByRole('button', { name: /Actions/ })).toHaveAttribute(
      'aria-expanded',
      'true'
    );
    expect(
      within(nav).getByRole('link', { name: /Toggle \(Custom Radio-Styled Switch\)/ })
    ).toBeInTheDocument();
  });

  it('category groups within an open brand collapse and expand independently on click', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/zoho-forms/toggle-radio-switch']}>
        <Sidebar query="" />
      </MemoryRouter>
    );
    const nav = screen.getByRole('navigation', { name: 'Component library navigation' });
    const actionsButton = within(nav).getByRole('button', { name: /Actions/ });
    expect(actionsButton).toHaveAttribute('aria-expanded', 'true');
    expect(
      within(nav).getByRole('link', { name: /Toggle \(Custom Radio-Styled Switch\)/ })
    ).toBeInTheDocument();

    await user.click(actionsButton);
    expect(actionsButton).toHaveAttribute('aria-expanded', 'false');
    expect(
      within(nav).queryByRole('link', { name: /Toggle \(Custom Radio-Styled Switch\)/ })
    ).not.toBeInTheDocument();

    await user.click(actionsButton);
    expect(actionsButton).toHaveAttribute('aria-expanded', 'true');
    expect(
      within(nav).getByRole('link', { name: /Toggle \(Custom Radio-Styled Switch\)/ })
    ).toBeInTheDocument();
  });

  it('nests form-builder brands under Forms independently of other product groups', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Sidebar query="" />
      </MemoryRouter>
    );
    await openFormsGroup(user);
    const nav = screen.getByRole('navigation', { name: 'Component library navigation' });
    const formsGroup = within(nav).getByRole('button', { name: /^Forms$/ });
    expect(formsGroup).toHaveAttribute('aria-expanded', 'true');
    // Brands are visible (even though each brand's own group is itself
    // collapsed by default) because the outer product group is open.
    expect(within(nav).getByRole('button', { name: /Zoho Forms/ })).toBeInTheDocument();
    expect(within(nav).getByRole('button', { name: /Typeform/ })).toBeInTheDocument();
    expect(within(nav).getByRole('button', { name: /Paperform/ })).toBeInTheDocument();
    expect(within(nav).getByRole('button', { name: /Google Forms/ })).toBeInTheDocument();
  });

  it('the product-category group collapses and expands on click, hiding every nested brand while closed', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Sidebar query="" />
      </MemoryRouter>
    );
    await openFormsGroup(user);
    const nav = screen.getByRole('navigation', { name: 'Component library navigation' });
    const formsGroup = within(nav).getByRole('button', { name: /^Forms$/ });
    expect(formsGroup).toHaveAttribute('aria-expanded', 'true');

    await user.click(formsGroup);
    expect(formsGroup).toHaveAttribute('aria-expanded', 'false');
    expect(within(nav).queryByRole('button', { name: /Zoho Forms/ })).not.toBeInTheDocument();

    await user.click(formsGroup);
    expect(formsGroup).toHaveAttribute('aria-expanded', 'true');
    expect(within(nav).getByRole('button', { name: /Zoho Forms/ })).toBeInTheDocument();
  });

  it('opens the Freshservice helpdesk group for a Freshservice route', () => {
    render(
      <MemoryRouter initialEntries={['/freshservice/freshservice-application-shell']}>
        <Sidebar query="" />
      </MemoryRouter>
    );
    const nav = screen.getByRole('navigation', { name: 'Component library navigation' });
    expect(
      within(nav).getByRole('button', { name: 'Customer Support / Helpdesk' })
    ).toHaveAttribute('aria-expanded', 'true');
    expect(within(nav).getByRole('button', { name: 'Freshservice' })).toHaveAttribute(
      'aria-expanded',
      'true'
    );
    expect(
      within(nav).getByRole('link', { name: /Freshservice Application Shell/ })
    ).toHaveAttribute('href', '/freshservice/freshservice-application-shell');
  });

  it('collapses entirely (inert, data-open=false) when the whole-sidebar toggle closes it', () => {
    render(
      <MemoryRouter>
        <Sidebar query="" open={false} />
      </MemoryRouter>
    );
    // role=navigation is excluded from the a11y tree while inert in some
    // environments, so query the element directly by its stable id.
    const nav = document.getElementById('primary-navigation');
    expect(nav).not.toBeNull();
    expect(nav).toHaveAttribute('data-open', 'false');
    expect(nav).toHaveAttribute('inert');
  });

  it('searching auto-expands every matching brand group regardless of collapse state', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <SidebarWithSearch />
      </MemoryRouter>
    );
    await openFormsGroup(user);
    const nav = screen.getByRole('navigation', { name: 'Component library navigation' });
    expect(within(nav).getByRole('button', { name: /Zoho Forms/ })).toHaveAttribute(
      'aria-expanded',
      'false'
    );

    await user.type(screen.getByLabelText('Search components'), 'Toggle');
    expect(
      within(nav).getByRole('link', { name: /Toggle \(Custom Radio-Styled Switch\)/ })
    ).toBeInTheDocument();
  });
});
