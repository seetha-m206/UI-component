import { useState } from 'react';
import { AhrefsExpandedShell, AhrefsGatePanel } from '../ahrefs-expanded/AhrefsExpandedShell';
import styles from '../ahrefs-expanded/ahrefs-expanded.module.css';
export interface AhrefsCompetitiveAnalysisAccessGateProps {
  disabled?: boolean;
}
export function AhrefsCompetitiveAnalysisAccessGate({
  disabled = false,
}: AhrefsCompetitiveAnalysisAccessGateProps) {
  const [status, setStatus] = useState('');
  const guard = (action: string) => {
    if (!disabled)
      setStatus(
        `${action} needs verification. No pricing, quota, analysis, or external action was run.`
      );
  };
  return (
    <AhrefsExpandedShell disabled={disabled} onGuard={guard}>
      <AhrefsGatePanel
        title="Competitive Analysis"
        description="See how your competitors' websites are performing in comparison to yours."
        actionLabel="See pricing"
        preview="report"
        disabled={disabled}
        onGuard={guard}
      />
      {status && (
        <p className={styles.status} role="status">
          {status}
        </p>
      )}
    </AhrefsExpandedShell>
  );
}
