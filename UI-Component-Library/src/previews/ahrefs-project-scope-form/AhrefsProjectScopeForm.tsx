import { useState } from 'react';
import styles from '../ahrefs-expanded/ahrefs-expanded.module.css';
import { AhrefsExpandedShell } from '../ahrefs-expanded/AhrefsExpandedShell';
export interface AhrefsProjectScopeFormProps {
  initialState?: 'default' | 'filled' | 'access-modal';
  disabled?: boolean;
}
export function AhrefsProjectScopeForm({
  initialState = 'default',
  disabled = false,
}: AhrefsProjectScopeFormProps) {
  const [target, setTarget] = useState(initialState === 'filled' ? 'atlas.example' : '');
  const [name, setName] = useState(initialState === 'filled' ? 'Atlas Project' : '');
  const [modal, setModal] = useState(initialState === 'access-modal');
  const [status, setStatus] = useState('');
  const guard = (action: string) => {
    if (!disabled)
      setStatus(`${action} needs verification. No project, access, or external action was run.`);
  };
  return (
    <AhrefsExpandedShell minimal disabled={disabled} onGuard={guard}>
      <nav className={styles.stepper} aria-label="Project setup progress">
        {['Scope', 'Web Analytics', 'Ownership', 'Site Audit'].map((label, index) => (
          <button
            key={label}
            type="button"
            disabled={disabled}
            className={index === 0 ? styles.current : ''}
            onClick={() => guard(`${label} step`)}
          >
            <b>{index + 1}</b>
            {label}
          </button>
        ))}
      </nav>
      <main className={styles.formMain}>
        <h1>Create a project</h1>
        <p>Set up your website to start analyzing it.</p>
        <label className={styles.formField}>
          Scope
          <div className={styles.targetGroup}>
            <button type="button" disabled={disabled} onClick={() => guard('Protocol selector')}>
              http + https⌄
            </button>
            <input
              aria-label="Domain or path"
              value={target}
              placeholder="Domain or path"
              disabled={disabled}
              onChange={(event) => setTarget(event.target.value)}
            />
            <button type="button" disabled={disabled} onClick={() => guard('Scope selector')}>
              Subdomains⌄
            </button>
          </div>
        </label>
        <p className={styles.helpText}>
          We recommend using “http + https” with the non-www version of your domain for the most
          complete backlink profile and accurate tracking data.
        </p>
        <label className={styles.formField}>
          Project name
          <input
            value={name}
            disabled={disabled}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <button
          className={styles.ghost}
          type="button"
          disabled={disabled}
          onClick={() => guard('Boost information')}
        >
          Unlock advanced capabilities with <strong>Boost</strong>
        </button>
        <label className={styles.formField}>
          Folder
          <select disabled={disabled} defaultValue="None">
            <option>None</option>
          </select>
        </label>
        <div className={styles.accessRow}>
          <span>♣ Shared with all workspace members</span>
          <button type="button" disabled={disabled} onClick={() => setModal(true)}>
            Manage access
          </button>
        </div>
        {status && (
          <p className={styles.status} role="status">
            {status}
          </p>
        )}
      </main>
      <div className={styles.formActions}>
        <button
          className={styles.primary}
          type="button"
          disabled={disabled}
          onClick={() => guard('Continue project setup')}
        >
          Continue
        </button>
      </div>
      {modal && (
        <div className={styles.backdrop}>
          <section
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="scope-access-title"
          >
            <button
              className={styles.modalClose}
              type="button"
              aria-label="Close access-control modal"
              disabled={disabled}
              onClick={() => setModal(false)}
            >
              ×
            </button>
            <h2 id="scope-access-title">Upgrade to unlock access control</h2>
            <p>Manage project access for selected workspace members on an Enterprise plan.</p>
            <button
              className={styles.primary}
              type="button"
              disabled={disabled}
              onClick={() => guard('Upgrade plan')}
            >
              Upgrade plan
            </button>
          </section>
        </div>
      )}
    </AhrefsExpandedShell>
  );
}
