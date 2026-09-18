import { Link } from 'react-router-dom';
import type { ComponentEntry } from '@models/content.types';
import { extractCrossLinks, extractLimitations } from '@utils/evidenceExtraction';
import styles from './HumanView.module.css';

const EVIDENCE_REVIEW_NOTE: Record<string, string> = {
  documented: 'This record has not yet been reviewed against the live application.',
  source_reviewed:
    'This record came from direct inspection of the live application (DOM, network, and behavior), but has not been re-confirmed in a dedicated follow-up review pass.',
  reproduced_offline: 'This behavior has been reproduced outside the live application.',
  runtime_verified:
    'This record has been re-confirmed against the live application in a dedicated verification pass.',
  runtime_pending:
    'A dedicated verification pass against the live application is planned but not yet done.',
  historical_only:
    'This record describes a past state of the product and may no longer match the live application.',
  open_finding:
    'This record has at least one unresolved, unverified interaction — see Known Limitations below.',
  documentation_corrected:
    'This record was corrected after an earlier version was found to be inaccurate.',
};

interface HumanViewProps {
  entry: ComponentEntry;
}

export function HumanView({ entry }: HumanViewProps) {
  const { frontmatter, brand } = entry;
  const limitations = extractLimitations(entry.sections);
  const related = extractCrossLinks(entry);
  const group = frontmatter.ui_category.split('>')[0]?.trim() || frontmatter.ui_category;

  return (
    <div>
      <div className={styles.section}>
        <h3 className={styles.heading}>What this is</h3>
        <p className={styles.body}>{frontmatter.summary}</p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.heading}>Business purpose</h3>
        <p className={styles.body}>
          Part of {frontmatter.source_product}&rsquo;s {group} tooling. In plain terms: it enables{' '}
          {frontmatter.summary.charAt(0).toLowerCase() + frontmatter.summary.slice(1)}
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.heading}>Current status</h3>
        <div className={styles.statusRow}>
          <span className={`pill pill--${frontmatter.status}`}>{frontmatter.status}</span>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.heading}>Known limitations</h3>
        {limitations.length > 0 ? (
          <ul className={styles.limitationsList}>
            {limitations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className={styles.limitationsEmpty}>No limitations flagged in this record.</p>
        )}
      </div>

      <div className={styles.section}>
        <h3 className={styles.heading}>Related components</h3>
        {related.length > 0 ? (
          <div className={styles.relatedList}>
            {related.map((id) => (
              <Link key={id} to={`/${brand}/${id}`} className={styles.relatedLink}>
                {id}
              </Link>
            ))}
          </div>
        ) : (
          <p className={styles.note}>No related components linked from this record yet.</p>
        )}
        <p className={styles.note}>
          Screen-level and workflow-level context for this component lives in the underlying
          research library, outside this site.
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.heading}>Review &amp; evidence summary</h3>
        <p className={styles.body}>{EVIDENCE_REVIEW_NOTE[frontmatter.evidence_state]}</p>
        <p className={styles.note}>Last verified: {frontmatter.last_verified}</p>
      </div>
    </div>
  );
}
