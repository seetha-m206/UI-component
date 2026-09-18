import type { EvidenceState } from '@models/content.types';
import styles from './EvidenceBanner.module.css';

const EVIDENCE_LABELS: Record<EvidenceState, string> = {
  documented: 'Documented',
  source_reviewed: 'Source reviewed',
  reproduced_offline: 'Reproduced offline',
  runtime_verified: 'Runtime verified',
  runtime_pending: 'Runtime pending',
  historical_only: 'Historical only',
  open_finding: 'Open finding',
  documentation_corrected: 'Documentation corrected',
};

interface EvidenceBannerProps {
  evidenceState: EvidenceState;
}

export function EvidenceBanner({ evidenceState }: EvidenceBannerProps) {
  return (
    <div className={styles.banner} role="note">
      <span className={styles.stateLabel}>{EVIDENCE_LABELS[evidenceState]}</span>
      <span className={styles.disclaimer}>
        Documentation reflects a point-in-time capture and does not certify current production
        behavior.
      </span>
      {evidenceState === 'open_finding' && (
        <div className={styles.openFinding} role="alert">
          Open finding: at least one interaction in this record could not be verified. See Known
          Limitations for details.
        </div>
      )}
    </div>
  );
}
