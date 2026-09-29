import { useState } from 'react';
import { AhrefsExpandedShell, AhrefsGatePanel } from '../ahrefs-expanded/AhrefsExpandedShell';
import styles from '../ahrefs-expanded/ahrefs-expanded.module.css';
export interface AhrefsBatchAnalysisAccessGateProps {
  disabled?: boolean;
}
export function AhrefsBatchAnalysisAccessGate({
  disabled = false,
}: AhrefsBatchAnalysisAccessGateProps) {
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
        title="Batch Analysis"
        description="Get SEO metrics on hundreds of targets in seconds. The new Batch Analysis comes with an increased limit on number of targets and new filters!"
        actionLabel="See pricing"
        preview="batch"
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
