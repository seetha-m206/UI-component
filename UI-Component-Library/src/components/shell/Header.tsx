import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { History, Moon, PanelLeft, PanelLeftClose, Search, Sun } from 'lucide-react';
import type { Theme } from '@hooks/useTheme';
import { getLastUpdated } from '@utils/loadComponents';
import styles from './Header.module.css';

interface HeaderProps {
  query: string;
  onQueryChange: (query: string) => void;
  theme: Theme;
  onToggleTheme: () => void;
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export function Header({
  query,
  onQueryChange,
  theme,
  onToggleTheme,
  sidebarOpen,
  onToggleSidebar,
}: HeaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  // Global "/" shortcut focuses search, unless the user is already typing
  // somewhere else — a real, working shortcut, not just a decorative hint.
  useEffect(() => {
    function handleGlobalKeyDown(event: KeyboardEvent) {
      if (event.key !== '/') return;
      const target = event.target as HTMLElement | null;
      const isTyping =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target?.isContentEditable;
      if (isTyping) return;
      event.preventDefault();
      inputRef.current?.focus();
    }
    document.addEventListener('keydown', handleGlobalKeyDown);
    return () => document.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Escape') {
      onQueryChange('');
      event.currentTarget.blur();
    }
  }

  return (
    <header className={styles.header}>
      <button
        type="button"
        className={styles.sidebarToggle}
        onClick={onToggleSidebar}
        aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
        aria-expanded={sidebarOpen}
        aria-controls="primary-navigation"
      >
        {sidebarOpen ? (
          <PanelLeftClose size={16} aria-hidden="true" />
        ) : (
          <PanelLeft size={16} aria-hidden="true" />
        )}
      </button>
      {/* aria-label keeps the link's accessible name stable even while the
          visible wordmark is collapsed away in icon-only (sidebar-closed)
          mode — the name must not disappear from the a11y tree. */}
      <NavLink to="/" className={styles.identity} aria-label="UI Library">
        <img src="/favicon.svg" width={20} height={20} alt="" className={styles.identityLogo} />
        <div className={styles.identityName} data-open={sidebarOpen}>
          UI Library
        </div>
      </NavLink>

      <div className={styles.searchWrap}>
        <label htmlFor="component-search" className="sr-only">
          Search components
        </label>
        <Search size={16} className={styles.searchIcon} aria-hidden="true" />
        <input
          ref={inputRef}
          id="component-search"
          type="search"
          className={styles.searchInput}
          placeholder="Search components…"
          aria-label="Search components"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        {query === '' && (
          <kbd className={styles.searchKbd} aria-hidden="true">
            /
          </kbd>
        )}
      </div>

      <span
        className={styles.lastUpdated}
        title="Most recent research capture across the library"
      >
        <History size={13} aria-hidden="true" />
        Updated {getLastUpdated()}
      </span>

      <button
        type="button"
        className={styles.themeToggle}
        onClick={onToggleTheme}
        aria-label="Toggle color theme"
      >
        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    </header>
  );
}
