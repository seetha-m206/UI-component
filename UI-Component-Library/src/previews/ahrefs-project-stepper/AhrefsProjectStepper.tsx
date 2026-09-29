import { useState } from 'react';
import styles from '../ahrefs-expanded/ahrefs-expanded.module.css';
export interface AhrefsProjectStepperProps {
  initialStep?: 1 | 2 | 3 | 4;
  disabled?: boolean;
}
const steps = ['Scope', 'Web Analytics', 'Ownership', 'Site Audit'] as const;
export function AhrefsProjectStepper({
  initialStep = 1,
  disabled = false,
}: AhrefsProjectStepperProps) {
  const [step, setStep] = useState(initialStep);
  return (
    <div className={styles.root}>
      <div className={styles.primitiveStage}>
        <nav className={styles.stepper} aria-label="Project setup progress">
          {steps.map((label, index) => (
            <button
              key={label}
              type="button"
              disabled={disabled}
              className={step === index + 1 ? styles.current : ''}
              aria-current={step === index + 1 ? 'step' : undefined}
              onClick={() => setStep((index + 1) as 1 | 2 | 3 | 4)}
            >
              <b>{index + 1}</b>
              {label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
