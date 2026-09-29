import { useState } from 'react';
import styles from '../semrush-action-primitives.module.css';

export type ActionButtonVariant = 'primary' | 'secondary' | 'ghost' | 'icon' | 'danger';
export type ActionButtonState = 'default' | 'loading' | 'success' | 'guarded';
export interface SemrushActionButtonProps { label?: string; variant?: ActionButtonVariant; initialState?: ActionButtonState; disabled?: boolean; }

export function SemrushActionButton({ label = 'Run analysis', variant = 'primary', initialState = 'default', disabled = false }: SemrushActionButtonProps) {
  const [state, setState] = useState(initialState);
  const activate = () => {
    if (disabled || state === 'loading') return;
    if (state === 'guarded' || variant === 'danger') { setState('guarded'); return; }
    setState('loading');
    window.setTimeout(() => setState('success'), 260);
  };
  const className = `${styles.button} ${styles[variant]}`;
  return <div className={styles.stage}><section className={styles.card} aria-label="Action button specimen"><h3>Action button</h3><div className={styles.row}><button className={className} type="button" disabled={disabled || state === 'loading'} aria-busy={state === 'loading'} onClick={activate}>{state === 'loading' && <span className={styles.spinner} aria-hidden="true" />}{variant === 'icon' ? <><span aria-hidden="true">⚙</span><span className={styles.srOnly}>{label}</span></> : label}</button></div>{state === 'success' && <p className={`${styles.status} ${styles.success}`} role="status">Action completed locally.</p>}{state === 'guarded' && <p className={styles.status} role="status">This action needs verification before it can run.</p>}</section></div>;
}
