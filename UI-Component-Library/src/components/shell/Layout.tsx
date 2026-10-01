import { useState, type ReactNode } from 'react';
import { useTheme } from '@hooks/useTheme';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import styles from './Layout.module.css';

const SIDEBAR_STORAGE_KEY = 'ui-library-sidebar';

function getInitialSidebarOpen(): boolean {
  try {
    return localStorage.getItem(SIDEBAR_STORAGE_KEY) !== 'closed';
  } catch {
    return true;
  }
}

export function Layout({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(getInitialSidebarOpen);
  const { theme, toggleTheme } = useTheme();

  function toggleSidebar() {
    setSidebarOpen((open) => {
      const next = !open;
      try {
        localStorage.setItem(SIDEBAR_STORAGE_KEY, next ? 'open' : 'closed');
      } catch {
        /* localStorage may be unavailable — the toggle still works per-session */
      }
      return next;
    });
  }

  return (
    <div className={styles.shell}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header
        query={query}
        onQueryChange={setQuery}
        theme={theme}
        onToggleTheme={toggleTheme}
        sidebarOpen={sidebarOpen}
        onToggleSidebar={toggleSidebar}
      />
      <div className={styles.body}>
        <Sidebar query={query} open={sidebarOpen} />
        <main id="main-content" className={styles.main}>
          {children}
        </main>
      </div>
    </div>
  );
}
