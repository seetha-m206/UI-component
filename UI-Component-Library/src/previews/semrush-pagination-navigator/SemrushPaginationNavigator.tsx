import { useState } from 'react';
import styles from '../semrush-action-primitives.module.css';

export interface SemrushPaginationNavigatorProps {
  initialPage?: number;
  totalPages?: number;
  disabled?: boolean;
}

export function SemrushPaginationNavigator({ initialPage = 1, totalPages = 5, disabled = false }: SemrushPaginationNavigatorProps) {
  const safeTotal = Math.max(1, totalPages);
  const [page, setPage] = useState(Math.min(Math.max(1, initialPage), safeTotal));
  const pages = Array.from({ length: Math.min(safeTotal, 5) }, (_, index) => index + 1);

  return (
    <div className={styles.stage}>
      <section className={styles.card} aria-label="Pagination navigator specimen">
        <h3>Report pagination</h3>
        <nav className={styles.pageNavigator} aria-label="Pagination">
          <button type="button" aria-label="Previous page" disabled={disabled || page === 1} onClick={() => setPage((value) => Math.max(1, value - 1))}>‹</button>
          {pages.map((number) => (
            <button key={number} type="button" aria-current={page === number ? 'page' : undefined} disabled={disabled} onClick={() => setPage(number)}>{number}</button>
          ))}
          <button type="button" aria-label="Next page" disabled={disabled || page === safeTotal} onClick={() => setPage((value) => Math.min(safeTotal, value + 1))}>›</button>
          <span className={styles.pageSummary} role="status">Page {page} of {safeTotal}</span>
        </nav>
        {safeTotal > 1 && <p className={styles.muted}>Multi-page behavior is reconstructed and needs verification.</p>}
      </section>
    </div>
  );
}
