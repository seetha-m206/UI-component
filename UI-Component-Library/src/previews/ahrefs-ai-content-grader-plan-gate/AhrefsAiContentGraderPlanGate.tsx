import { useState } from 'react';
import { AhrefsExpandedShell, AhrefsGatePanel } from '../ahrefs-expanded/AhrefsExpandedShell';
import styles from '../ahrefs-expanded/ahrefs-expanded.module.css';
export interface AhrefsAiContentGraderPlanGateProps {
  disabled?: boolean;
}
export function AhrefsAiContentGraderPlanGate({
  disabled = false,
}: AhrefsAiContentGraderPlanGateProps) {
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
        title="AI Content Grader"
        description="Outrank competitors with AI-driven content insights. This tool is currently in an experimental phase and is only available on an Enterprise plan."
        actionLabel={undefined}
        preview="none"
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
