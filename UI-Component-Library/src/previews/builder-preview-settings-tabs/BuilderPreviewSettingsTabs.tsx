import { useId, useState } from 'react';
import styles from './BuilderPreviewSettingsTabs.module.css';

export interface BuilderNavItem {
  /** Stable identifier for the section (e.g. "builder", "settings", "audit"). */
  id: string;
  /** Visible left-rail label. */
  label: string;
}

export interface BuilderPreviewSettingsTabsProps {
  /** Ordered list of the 9 left-rail sections (Builder/Rules/Settings/Themes/Share/Integrations/Approvals/Analytics/Audit in the source). */
  items: BuilderNavItem[];
  /** id of the currently active left-rail item. */
  value: string;
  /**
   * Called with the clicked item's id. In the real product this is NOT a
   * client-side swap at all: clicking a left-rail item triggers a genuine
   * full-page reload (confirmed via a JS marker that was gone after
   * navigation). This reconstruction obviously cannot reload the page from
   * inside a SPA preview, so it only simulates the resulting visual
   * state — the active-item swap — and nothing more. There is also no
   * deselect/no-op guard here: a real `<a href>` click still fires (and
   * would still navigate) even when clicking the item that's already
   * active, so `onChange` fires unconditionally on every click.
   */
  onChange?: (id: string) => void;
  /**
   * Field labels on the current form. This ONLY drives what the Preview
   * overlay renders (empty-state vs. a field list) — it never disables the
   * left rail or the Preview button. The source record directly refutes
   * the hypothesis that Preview is disabled until the form has >=1 field:
   * on a zero-field form the button stayed fully clickable and opened an
   * overlay reading "This form is empty!" instead of being disabled.
   */
  fieldLabels: string[];
  /** Display-only form title shown in the top bar and inside the preview overlay. */
  formTitle?: string;
  /** Whether the Preview overlay starts open. Defaults to false. */
  initialPreviewOpen?: boolean;
  onPreviewOpenChange?: (open: boolean) => void;
}

/**
 * Reconstructed from Zoho Forms' form builder left-rail navigation
 * (Builder/Rules/Settings/Themes/Share/Integrations/Approvals/Analytics/
 * Audit) plus the structurally unrelated top-bar Preview button.
 *
 * Deliberate, documented fidelity choice: the source record confirms the
 * real left-rail `<ul><li><a href>` list, and the Preview button itself,
 * carry ZERO ARIA attributes at all — no `role="tablist"`/`role="tab"`, no
 * `aria-selected`/`aria-current`, no `aria-haspopup`/`aria-expanded`. Unlike
 * some other previews in this codebase (e.g. theme-icon-button-group-
 * selector), which add correct ARIA semantics as a documented FIX to a
 * confirmed accessibility gap, this reconstruction leaves that gap in
 * place on purpose — it is itself the finding being illustrated, not a
 * defect to quietly repair. The only concession to testability is a
 * `data-active` attribute on the active left-rail button, which is a
 * plain HTML data attribute (not an ARIA attribute) used purely as a
 * test/visual hook, exactly mirroring the source's own `class="select"`
 * visual-only toggle.
 */
export function BuilderPreviewSettingsTabs({
  items,
  value,
  onChange,
  fieldLabels,
  formTitle = 'Untitled Form',
  initialPreviewOpen = false,
  onPreviewOpenChange,
}: BuilderPreviewSettingsTabsProps) {
  const dialogHeadingId = useId();
  const [previewOpen, setPreviewOpen] = useState(initialPreviewOpen);

  function selectTab(id: string) {
    onChange?.(id);
  }

  function openPreview() {
    setPreviewOpen(true);
    onPreviewOpenChange?.(true);
  }

  function closePreview() {
    setPreviewOpen(false);
    onPreviewOpenChange?.(false);
  }

  return (
    <div className={styles.root}>
      <div className={styles.topBar}>
        <span className={styles.formTitle}>{formTitle}</span>
        {/*
          No aria-haspopup/aria-expanded here — the source DOM carries none
          either, and this button is confirmed to stay enabled regardless
          of fieldLabels (a zero-field form still opens a live overlay,
          it is never disabled).
        */}
        <button type="button" className={styles.previewButton} onClick={openPreview}>
          Preview
        </button>
      </div>

      {/*
        Bare <ul><li><button>> list standing in for the source's bare
        <ul><li><a href>> list — no role="tablist"/"tab", no aria-selected,
        no aria-current. Active state is a plain class swap, same as the
        source's class="select" toggle.
      */}
      <nav className={styles.leftRail} aria-label="Builder sections">
        <ul className={styles.list}>
          {items.map((item) => {
            const active = item.id === value;
            return (
              <li key={item.id} className={styles.listItem}>
                <button
                  type="button"
                  data-active={active ? 'true' : undefined}
                  className={active ? `${styles.link} ${styles.linkActive}` : styles.link}
                  onClick={() => selectTab(item.id)}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {previewOpen && (
        <div className={styles.overlay}>
          <div
            className={styles.deviceFrame}
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogHeadingId}
          >
            <div className={styles.deviceFrameHeader}>
              <span id={dialogHeadingId} className={styles.deviceFrameTitle}>
                Form Preview
              </span>
              <button
                type="button"
                className={styles.closeButton}
                aria-label="Close preview"
                onClick={closePreview}
              >
                &#10005;
              </button>
            </div>
            <div className={styles.deviceFrameBody}>
              {fieldLabels.length === 0 ? (
                <div className={styles.emptyState}>
                  <p className={styles.emptyStateText}>This form is empty!</p>
                  <button type="button" className={styles.submitPlaceholder} disabled>
                    Submit
                  </button>
                </div>
              ) : (
                <div className={styles.fieldsPreview}>
                  <p className={styles.previewFormTitle}>{formTitle}</p>
                  {fieldLabels.map((fieldLabel) => (
                    <div key={fieldLabel} className={styles.fieldRow}>
                      <span className={styles.fieldRowLabel}>{fieldLabel}</span>
                      <span className={styles.fieldInputPlaceholder} aria-hidden="true" />
                    </div>
                  ))}
                  <button type="button" className={styles.submitPlaceholder} disabled>
                    Submit
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
