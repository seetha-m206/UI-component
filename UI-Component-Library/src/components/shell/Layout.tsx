import type { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import styles from './Layout.module.css';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.shell}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Sidebar />
      <main id="main-content" className={styles.main}>
        {children}
      </main>
    </div>
  );
}
