import { useState } from 'react';
import styles from './Tabs.module.css';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

export function Tabs({ items, idPrefix }: { items: TabItem[]; idPrefix: string }) {
  const [activeId, setActiveId] = useState(items[0]?.id);

  function handleKeyDown(event: React.KeyboardEvent, index: number) {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    const delta = event.key === 'ArrowRight' ? 1 : -1;
    const nextIndex = (index + delta + items.length) % items.length;
    setActiveId(items[nextIndex].id);
    document.getElementById(`${idPrefix}-tab-${items[nextIndex].id}`)?.focus();
  }

  return (
    <div>
      <div className={styles.track} role="tablist" aria-label="Component documentation sections">
        {items.map((item, index) => (
          <button
            key={item.id}
            id={`${idPrefix}-tab-${item.id}`}
            role="tab"
            type="button"
            aria-selected={activeId === item.id}
            aria-controls={`${idPrefix}-panel-${item.id}`}
            tabIndex={activeId === item.id ? 0 : -1}
            className={activeId === item.id ? `${styles.tab} ${styles.tabActive}` : styles.tab}
            onClick={() => setActiveId(item.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            {item.label}
          </button>
        ))}
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          id={`${idPrefix}-panel-${item.id}`}
          role="tabpanel"
          aria-labelledby={`${idPrefix}-tab-${item.id}`}
          hidden={activeId !== item.id}
          className={styles.panel}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}
