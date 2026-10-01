import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { UbersuggestPreview } from './Ubersuggest';
import { ubersuggestPreviews } from './registry';

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe('Ubersuggest observed patterns and provider boundary', () => {
  it('renders a dashboard empty state with illustrations rather than live report tables', () => {
    render(<UbersuggestPreview kind="dashboard" />);
    expect(
      screen.getByRole('heading', {
        name: 'Add your domain to start growing your traffic',
      })
    ).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Ubersuggest products' })).toBeInTheDocument();
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(5);
  });
  it('supports simultaneous navigation groups without submitting destinations', async () => {
    render(<UbersuggestPreview kind="navigation" />);
    await userEvent.click(screen.getByRole('button', { name: 'Research Topics' }));
    expect(screen.getByRole('button', { name: 'Research Topics' })).toHaveAttribute(
      'aria-expanded',
      'true'
    );
    expect(screen.getByRole('button', { name: 'Analyze and Audit' })).toHaveAttribute(
      'aria-expanded',
      'true'
    );
    await userEvent.click(screen.getByRole('button', { name: 'Keyword Ideas' }));
    expect(screen.getByRole('status')).toHaveTextContent(/not submitted.*NEEDS VERIFICATION/);
    await userEvent.click(screen.getByRole('button', { name: 'Research Topics' }));
    expect(screen.queryByRole('button', { name: 'Keyword Ideas' })).not.toBeInTheDocument();
  });
  it('uses keyword count for readiness and never sends an enabled search', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    render(<UbersuggestPreview kind="keywords" />);
    const query = screen.getByRole('textbox', { name: 'Add up to 3 keywords' });
    expect(screen.getByRole('button', { name: 'Search' })).toBeDisabled();
    fireEvent.change(query, { target: { value: 'ceramic mugs, travel cups,' } });
    expect(screen.getByText('Discover new keywords (2/3 Keywords Added)')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeEnabled();
    fireEvent.change(query, { target: { value: 'tea tins, coffee pots,' } });
    expect(screen.getByText('Discover new keywords (3/3 Keywords Added)')).toBeInTheDocument();
    expect(screen.queryByText('coffee pots')).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Search' }));
    expect(screen.getByRole('status')).toHaveTextContent('Search was not submitted');
    expect(fetchSpy).not.toHaveBeenCalled();
    for (const name of ['ceramic mugs', 'travel cups', 'tea tins'])
      await userEvent.click(screen.getByRole('button', { name: `Remove ${name}` }));
    expect(screen.getByRole('button', { name: 'Search' })).toBeDisabled();
  });
  it('switches website and keyword modes without mixing readiness', async () => {
    render(<UbersuggestPreview kind="keywords" initialState="filled" />);
    await userEvent.click(screen.getByRole('button', { name: 'Search by Website' }));
    expect(screen.getByRole('button', { name: 'Search by Website' })).toHaveAttribute(
      'aria-pressed',
      'true'
    );
    expect(screen.getByRole('button', { name: 'Search' })).toBeDisabled();
    await userEvent.type(screen.getByRole('combobox', { name: 'Your Website' }), 'atlas.example');
    expect(screen.getByRole('button', { name: 'Search' })).toBeEnabled();
    await userEvent.click(screen.getByRole('button', { name: 'Search by Keywords' }));
    expect(screen.getByRole('button', { name: 'Remove ceramic mugs' })).toBeInTheDocument();
  });
  it('filters locales, shows no results, commits active option with Tab and restores on Escape', async () => {
    render(<UbersuggestPreview kind="locale" />);
    const input = screen.getByRole('combobox', { name: 'Language *' });
    fireEvent.change(input, { target: { value: 'zzzz-no-language' } });
    expect(screen.getByRole('listbox', { name: 'Language *' })).toHaveTextContent(
      'No results found'
    );
    fireEvent.keyDown(input, { key: 'Escape' });
    expect(input).toHaveValue('English');
    expect(input).toHaveAttribute('aria-expanded', 'false');
    fireEvent.change(input, { target: { value: 'Afrikaans' } });
    fireEvent.keyDown(input, { key: 'Tab' });
    expect(input).toHaveValue('Afrikaans');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });
  it('keeps current interface language disabled and guards alternate language selection', async () => {
    render(<UbersuggestPreview kind="language" />);
    await userEvent.click(screen.getByRole('button', { name: /^EN/ }));
    expect(screen.getByRole('menuitem', { name: 'English (EN)' })).toBeDisabled();
    await userEvent.click(screen.getByRole('menuitem', { name: 'French (FR)' }));
    expect(screen.getByRole('status')).toHaveTextContent(
      'Language change to French (FR) was not submitted'
    );
    expect(screen.getByRole('button', { name: /^EN/ })).toHaveFocus();
  });
  it('opens help with keyboard navigation, dismisses with Escape, and guards support', async () => {
    render(<UbersuggestPreview kind="help" />);
    const trigger = screen.getByRole('button', { name: /Need Help/ });
    await userEvent.click(trigger);
    await userEvent.keyboard('{ArrowDown}');
    expect(screen.getByRole('menuitem', { name: 'Contact support' })).toHaveFocus();
    await userEvent.keyboard('{Escape}');
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
    await userEvent.click(trigger);
    await userEvent.click(screen.getByRole('menuitem', { name: 'Contact support' }));
    expect(screen.getByRole('status')).toHaveTextContent('Contact support was not submitted');
  });
  it('traps focus in reconstructed mobile dialog and returns it after Escape', async () => {
    render(<UbersuggestPreview kind="mobile" />);
    const trigger = screen.getByRole('button', { name: /Menu/ });
    await userEvent.click(trigger);
    const dialog = screen.getByRole('dialog', { name: 'Sidebar' });
    expect(within(dialog).getByRole('button', { name: /Add Project/ })).toHaveFocus();
    await userEvent.keyboard('{Shift>}{Tab}{/Shift}');
    expect(within(dialog).getByRole('button', { name: 'Close menu' })).toHaveFocus();
    await userEvent.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });
  it('labels website validation synthetic and prevents submission', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    render(<UbersuggestPreview kind="website" />);
    await userEvent.click(screen.getByRole('button', { name: 'Add Website' }));
    expect(screen.getByRole('alert')).toHaveTextContent('Live validation NOT OBSERVED');
    await userEvent.type(
      screen.getByRole('textbox', { name: 'Enter your website' }),
      'atlas.example'
    );
    await userEvent.click(screen.getByRole('button', { name: 'Add Website' }));
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    expect(fetchSpy).not.toHaveBeenCalled();
  });
  it('dismisses only the local offer and labels persistence unobserved', async () => {
    render(<UbersuggestPreview kind="offer" />);
    await userEvent.click(screen.getByRole('button', { name: 'Close banner' }));
    expect(screen.queryByRole('region', { name: 'Promotional offer' })).not.toBeInTheDocument();
    expect(screen.getByText(/dismissal persistence is NOT OBSERVED/)).toBeInTheDocument();
  });
  it('does not fabricate alternate service content or account menus', async () => {
    const first = render(<UbersuggestPreview kind="services" initialState="open" />);
    await userEvent.click(screen.getByRole('menuitem', { name: 'Creative' }));
    expect(screen.getByRole('status')).toHaveTextContent(
      'Creative category content was not submitted'
    );
    first.unmount();
    render(<UbersuggestPreview kind="account" />);
    await userEvent.click(screen.getByRole('button', { name: 'Account menu' }));
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent('Account menu was not submitted');
  });
  it('makes simulated errors explicit and recovers locally', async () => {
    render(<UbersuggestPreview kind="keywords" initialState="error" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Provider errors NOT OBSERVED');
    await userEvent.click(screen.getByRole('button', { name: 'Retry locally' }));
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeDisabled();
  });
  it.each(Object.entries(ubersuggestPreviews))(
    'all fixtures for %s render and disabled controls cannot act',
    (id, entry) => {
      if (entry.type !== 'reconstructed') throw new Error(id);
      for (const fixture of entry.fixtures) {
        const view = render(<entry.Component {...fixture.props} />);
        expect(screen.getByRole('status')).toHaveTextContent(
          'No provider action has been submitted'
        );
        if (fixture.id === 'disabled')
          for (const control of view.container.querySelectorAll('button,input'))
            expect(control).toBeDisabled();
        expect(view.container.querySelector('a[href]')).toBeNull();
        view.unmount();
      }
    }
  );
});
