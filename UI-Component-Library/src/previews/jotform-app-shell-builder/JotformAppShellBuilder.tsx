import { useState } from 'react';
import styles from './JotformAppShellBuilder.module.css';

export type BuilderMode = 'build' | 'settings' | 'publish';

export interface JotformAppShellBuilderProps {
  disabled?: boolean;
  onModeChange?: (mode: BuilderMode) => void;
  onFieldSelect?: (fieldId: string | null) => void;
}

const SETTINGS_ITEMS = ['Form Settings', 'Conditions', 'Emails', 'Integrations', 'Thank You Page', 'Documents', 'Workflows'];
const PUBLISH_ITEMS = ['Quick Share', 'Embed', 'Platforms', 'Assign Form', 'Email', 'Prefill', 'AI Agents', 'PDF'];

/**
 * Reconstructed from JotForm's Form Builder shell (see
 * Research-Library/04-Component-Library/jotform/jotform-app-shell-builder.md,
 * P1, 2026-09-29).
 *
 * Confirmed and reproduced faithfully: a collapsible left field palette,
 * confirmed to scroll independently of the canvas (represented here as a
 * plain collapse toggle, not literal independent-scroll simulation); the
 * confirmed real finding that the right pane is a SINGLE shared slot with
 * two mutually-exclusive occupants — an AI copilot card when no field is
 * selected, a field Properties panel when one is — reproduced exactly via
 * one state variable, not two independently-toggleable panels. SETTINGS and
 * PUBLISH modes are reproduced reusing the same top-header + orange
 * mode-tab-bar pattern confirmed in the source, each adding its own
 * mode-specific left sub-nav rail rather than a distinct page header —
 * matching the source's own confirmed "no distinct page-header chrome"
 * finding across all three modes.
 *
 * Scope notes: the Classic-vs-Card layout choice, in-canvas field
 * drag-reordering, and the "Preview Form" toggle's actual behavior are not
 * reconstructed here — out of scope for this shell-level pass (this record
 * covers Classic layout's shell only, per the source record's own scope
 * note). No network calls are made by this client-side preview.
 */
export function JotformAppShellBuilder({
  disabled = false,
  onModeChange,
  onFieldSelect,
}: JotformAppShellBuilderProps) {
  const [mode, setMode] = useState<BuilderMode>('build');
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [selectedField, setSelectedField] = useState<string | null>(null);

  function selectMode(next: BuilderMode) {
    if (disabled) return;
    setMode(next);
    onModeChange?.(next);
  }

  function selectField(fieldId: string) {
    if (disabled) return;
    setSelectedField((current) => {
      const next = current === fieldId ? null : fieldId;
      onFieldSelect?.(next);
      return next;
    });
  }

  return (
    <div className={styles.root} data-disabled={disabled}>
      <header className={styles.topBar}>
        <span className={styles.brand}>▤ Form Builder ▾</span>
        <div className={styles.titleBlock}>
          <input
            className={styles.titleInput}
            defaultValue="Customer Feedback Survey"
            aria-label="Form title"
            disabled={disabled}
          />
          <span className={styles.autosave}>⟲ All changes saved at 10:24</span>
        </div>
        <span className={styles.topBarActions}>
          <button type="button" disabled={disabled}>
            Add Collaborators
          </button>
          <span className={styles.avatar}>A</span>
        </span>
      </header>

      <div className={styles.modeTabBar} role="tablist" aria-label="Builder mode">
        {(['build', 'settings', 'publish'] as BuilderMode[]).map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={mode === tab}
            className={mode === tab ? `${styles.modeTab} ${styles.modeTabActive}` : styles.modeTab}
            disabled={disabled}
            onClick={() => selectMode(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
        <label className={styles.previewToggle}>
          <input type="checkbox" disabled={disabled} /> Preview Form
        </label>
      </div>

      {mode === 'build' && (
        <div className={styles.buildBody}>
          <aside className={styles.palette} aria-label="Element palette">
            {paletteOpen ? (
              <>
                <div className={styles.paletteHeader}>
                  <span>BASIC</span>
                  <button type="button" onClick={() => setPaletteOpen(false)} disabled={disabled}>
                    ×
                  </button>
                </div>
                <ul className={styles.paletteList}>
                  <li>Full Name</li>
                  <li>Email</li>
                  <li>Single Choice</li>
                  <li>Star Rating</li>
                  <li>Input Table</li>
                </ul>
              </>
            ) : (
              <button
                type="button"
                className={styles.addElementPill}
                onClick={() => setPaletteOpen(true)}
                disabled={disabled}
              >
                Add Element +
              </button>
            )}
          </aside>

          <div className={styles.canvas} data-testid="builder-canvas">
            <div className={styles.canvasCard}>
              <p className={styles.canvasTitle}>Customer Feedback Survey</p>
              {['full-name', 'email', 'rating'].map((fieldId) => (
                <button
                  key={fieldId}
                  type="button"
                  className={
                    selectedField === fieldId ? `${styles.field} ${styles.fieldActive}` : styles.field
                  }
                  onClick={() => selectField(fieldId)}
                  disabled={disabled}
                  aria-label={`Configure ${fieldId} field`}
                >
                  {fieldId === 'full-name' ? 'Full Name' : fieldId === 'email' ? 'Email' : 'Star Rating'}
                  <span aria-hidden="true">⚙</span>
                </button>
              ))}
            </div>
          </div>

          <aside className={styles.rightPane} aria-label={selectedField ? 'Field properties' : 'AI copilot'}>
            {selectedField ? (
              <>
                <p className={styles.rightPaneTitle}>Properties</p>
                <div className={styles.propTabs}>
                  <span>GENERAL</span>
                  <span>OPTIONS</span>
                  <span>ADVANCED</span>
                </div>
              </>
            ) : (
              <>
                <p className={styles.rightPaneTitle}>Form Copilot</p>
                <div className={styles.copilotChips}>
                  <span>Customize thank you page</span>
                  <span>Create conditions</span>
                  <span>Suggest new questions</span>
                </div>
              </>
            )}
          </aside>
        </div>
      )}

      {mode === 'settings' && (
        <div className={styles.subNavBody}>
          <aside className={styles.subNavRail} aria-label="Settings navigation">
            {SETTINGS_ITEMS.map((item) => (
              <div key={item} className={styles.subNavItem}>
                {item}
              </div>
            ))}
          </aside>
          <div className={styles.subNavContent}>Settings content for the selected item.</div>
        </div>
      )}

      {mode === 'publish' && (
        <div className={styles.subNavBody}>
          <aside className={styles.subNavRail} aria-label="Publish navigation">
            {PUBLISH_ITEMS.map((item) => (
              <div key={item} className={styles.subNavItem}>
                {item}
              </div>
            ))}
          </aside>
          <div className={styles.subNavContent}>Publish content for the selected item.</div>
        </div>
      )}
    </div>
  );
}
