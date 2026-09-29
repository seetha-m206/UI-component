import styles from './ResearchCoveragePanel.module.css';

export interface CoverageItem {
  label: string;
  ready: boolean;
}

export interface ResearchCoveragePanelProps {
  category: string;
  product: string;
  status: 'complete' | 'partial' | 'incomplete';
  lastVerified: string;
  items: CoverageItem[];
}

const RING_RADIUS = 30;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

/**
 * Tracks how much of this library's own 10-part component-record anatomy
 * (Overview, Rules, Technical Data, Lessons, Comparisons, Sources,
 * Interactive preview, Code, Accessibility, Related components) has real
 * captured content for this specific record — computed live from actual
 * data (populated tabs, a registered preview/source entry, extracted
 * accessibility notes/cross-links), not a manually-maintained number.
 *
 * Deliberately NOT styled after Centilio UI OS's own "Page details"
 * sidebar (linear progress bar + vertical checklist) — this uses a radial
 * coverage ring as the focal element and a wrapped chip grid for captured
 * items instead, so the two sites read as distinct systems even though the
 * underlying idea (per-record completeness tracking) was borrowed.
 */
export function ResearchCoveragePanel({
  category,
  product,
  status,
  lastVerified,
  items,
}: ResearchCoveragePanelProps) {
  const readyCount = items.filter((item) => item.ready).length;
  const total = items.length;
  const percent = total === 0 ? 0 : Math.round((readyCount / total) * 100);
  const dashOffset = RING_CIRCUMFERENCE * (1 - percent / 100);

  return (
    <aside className={styles.panel} aria-label="Research coverage" data-status={status}>
      <div className={styles.headerRow}>
        <span className={styles.headerTitle}>Research coverage</span>
        <span className={`pill pill--${status}`}>{status}</span>
      </div>

      <div className={styles.ringRow}>
        <svg
          className={styles.ring}
          width="72"
          height="72"
          viewBox="0 0 72 72"
          role="progressbar"
          aria-valuenow={readyCount}
          aria-valuemin={0}
          aria-valuemax={total}
          aria-label="Captured evidence"
        >
          <circle
            className={styles.ringTrack}
            cx="36"
            cy="36"
            r={RING_RADIUS}
            fill="none"
            strokeWidth="6"
          />
          <circle
            className={styles.ringFill}
            cx="36"
            cy="36"
            r={RING_RADIUS}
            fill="none"
            strokeWidth="6"
            strokeDasharray={RING_CIRCUMFERENCE}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            transform="rotate(-90 36 36)"
          />
          <text x="36" y="41" textAnchor="middle" className={styles.ringLabel}>
            {percent}%
          </text>
        </svg>
        <div className={styles.ringCaption}>
          <span className={styles.ringCaptionValue}>
            {readyCount}/{total}
          </span>
          <span className={styles.ringCaptionText}>evidence captured</span>
        </div>
      </div>

      <dl className={styles.factList}>
        <div className={styles.factRow}>
          <dt>Category</dt>
          <dd>{category}</dd>
        </div>
        <div className={styles.factRow}>
          <dt>Product</dt>
          <dd>{product}</dd>
        </div>
        <div className={styles.factRow}>
          <dt>Verified</dt>
          <dd>{lastVerified}</dd>
        </div>
      </dl>

      <div className={styles.captured}>
        <span className={styles.fieldLabel}>Captured</span>
        <div className={styles.chipGrid}>
          {items.map((item) => (
            <span key={item.label} className={styles.chip} data-ready={item.ready}>
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
