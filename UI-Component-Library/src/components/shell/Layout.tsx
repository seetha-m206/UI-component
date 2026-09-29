import { useState, type ReactNode } from 'react';
import { useTheme } from '@hooks/useTheme';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import styles from './Layout.module.css';

export function Layout({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState('');
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.shell}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header query={query} onQueryChange={setQuery} theme={theme} onToggleTheme={toggleTheme} />
      <div className={styles.body}>
        <Sidebar query={query} />
        <main id="main-content" className={styles.main}>
          {children}
        </main>
      </div>
    </div>
  );
}
