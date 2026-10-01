import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';

function renderHeader(overrides: Partial<React.ComponentProps<typeof Header>> = {}) {
  const onQueryChange = vi.fn();
  const onToggleTheme = vi.fn();
  const onToggleSidebar = vi.fn();
  render(
    <MemoryRouter>
      <Header
        query=""
        onQueryChange={onQueryChange}
        theme="light"
        onToggleTheme={onToggleTheme}
        sidebarOpen
        onToggleSidebar={onToggleSidebar}
        {...overrides}
      />
    </MemoryRouter>
  );
  return { onQueryChange, onToggleTheme, onToggleSidebar };
}

describe('Header', () => {
  it('renders the brand identity as a link to home', () => {
    renderHeader();
    expect(screen.getByRole('link', { name: /UI Library/ })).toHaveAttribute('href', '/');
  });

  it('typing in the search box calls onQueryChange', async () => {
    const user = userEvent.setup();
    const { onQueryChange } = renderHeader();
    await user.type(screen.getByLabelText('Search components'), 'a');
    expect(onQueryChange).toHaveBeenCalledWith('a');
  });

  it('pressing "/" anywhere on the page focuses the search input', async () => {
    const user = userEvent.setup();
    renderHeader();
    const input = screen.getByLabelText('Search components');
    expect(input).not.toHaveFocus();
    await user.keyboard('/');
    expect(input).toHaveFocus();
  });

  it('the "/" shortcut does not fire while already typing in another input', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <input aria-label="Other field" />
        <Header
          query=""
          onQueryChange={vi.fn()}
          theme="light"
          onToggleTheme={vi.fn()}
          sidebarOpen
          onToggleSidebar={vi.fn()}
        />
      </MemoryRouter>
    );
    const otherField = screen.getByLabelText('Other field');
    await user.click(otherField);
    await user.keyboard('/');
    expect(screen.getByLabelText('Search components')).not.toHaveFocus();
    expect(otherField).toHaveValue('/');
  });

  it('shows the theme toggle and fires onToggleTheme on click, with the icon reflecting the current theme', async () => {
    const user = userEvent.setup();
    const { onToggleTheme } = renderHeader({ theme: 'light' });
    const button = screen.getByRole('button', { name: 'Toggle color theme' });
    await user.click(button);
    expect(onToggleTheme).toHaveBeenCalledTimes(1);
  });

  it('renders a sidebar toggle wired to onToggleSidebar, with aria state reflecting open/closed', async () => {
    const user = userEvent.setup();
    const { onToggleSidebar } = renderHeader({ sidebarOpen: true });
    const toggle = screen.getByRole('button', { name: 'Collapse sidebar' });
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(toggle).toHaveAttribute('aria-controls', 'primary-navigation');
    await user.click(toggle);
    expect(onToggleSidebar).toHaveBeenCalledTimes(1);
  });

  it('shows the expand label and collapsed aria state when the sidebar is closed', () => {
    renderHeader({ sidebarOpen: false });
    expect(screen.getByRole('button', { name: 'Expand sidebar' })).toHaveAttribute(
      'aria-expanded',
      'false'
    );
  });

  it('pressing Escape in the search box clears the query and blurs it', async () => {
    const user = userEvent.setup();
    const { onQueryChange } = renderHeader({ query: 'something' });
    const input = screen.getByLabelText('Search components');
    input.focus();
    await user.keyboard('{Escape}');
    expect(onQueryChange).toHaveBeenCalledWith('');
  });
});
