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

type EvidenceTier = 'good' | 'neutral' | 'caution' | 'flag';

const EVIDENCE_TIER: Record<EvidenceState, EvidenceTier> = {
  documented: 'neutral',
  source_reviewed: 'good',
  runtime_verified: 'good',
  reproduced_offline: 'caution',
  runtime_pending: 'caution',
  historical_only: 'caution',
  open_finding: 'flag',
  documentation_corrected: 'flag',
};

interface EvidenceBannerProps {
  evidenceState: EvidenceState;
}

export function EvidenceBanner({ evidenceState }: EvidenceBannerProps) {
  const tier = EVIDENCE_TIER[evidenceState];
  const tierClass: Record<EvidenceTier, string> = {
    good: styles.tierGood,
    neutral: '',
    caution: styles.tierCaution,
    flag: styles.tierFlag,
  };

  return (
    <div className={styles.banner} role="note">
      <span className={`${styles.stateLabel} ${tierClass[tier]}`}>
        {EVIDENCE_LABELS[evidenceState]}
      </span>
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
