import { useId, useState } from 'react';
import styles from './ThemeDesignEditor.module.css';

/** Static, pre-built font catalog — mirrors the source record's finding that
 * font-family is applied via a finite set of pre-shipped `.font-{name}`
 * classes (confirmed literal for `.font-georgia`), not a freely-typed value. */
export type FontId = 'system' | 'georgia' | 'arial';

const FONT_OPTIONS: { id: FontId; label: string }[] = [
  { id: 'system', label: 'System font' },
  { id: 'georgia', label: 'Georgia' },
  { id: 'arial', label: 'Arial' },
];

// Maps each FontId to the CSS Module class that carries its font-family rule
// — the reconstruction's stand-in for the source's static `.font-georgia`
// class-swap mechanism (see README, "static class swap" vs. "dynamic hashed
// class" below).
const FONT_CLASS: Record<FontId, string> = {
  system: styles.fontSystem,
  georgia: styles.fontGeorgia,
  arial: styles.fontArial,
};

export type FontSize = 'sm' | 'md' | 'lg';

const SIZE_OPTIONS: { id: FontSize; label: string }[] = [
  { id: 'sm', label: 'Sm' },
  { id: 'md', label: 'Md' },
  { id: 'lg', label: 'Lg' },
];

const SIZE_PX: Record<FontSize, number> = { sm: 16, md: 20, lg: 26 };

export interface ThemeValue {
  fontFamily: FontId;
  /** Question-title text color. Source mechanism: a freshly-hashed
   * styled-components class per value. Simplified here to an inline style /
   * CSS custom property (see README) — the point being demonstrated is that
   * color is a *different* mechanism from font-family, not a literal
   * reproduction of hashed class names. */
  fontColor: string;
  fontSize: FontSize;
  backgroundColor: string;
}

export type ThemeTabId = 'logo' | 'font' | 'buttons' | 'background';

interface TabDef {
  id: ThemeTabId;
  label: string;
  implemented: boolean;
}

// Verbatim tab order from the source record's popover capture: Logo, Font,
// Buttons, Background. Only Font and Background were actually traced this
// pass; Logo/Buttons render a "not reconstructed" note rather than invented
// controls.
const TABS: TabDef[] = [
  { id: 'logo', label: 'Logo', implemented: false },
  { id: 'font', label: 'Font', implemented: true },
  { id: 'buttons', label: 'Buttons', implemented: false },
  { id: 'background', label: 'Background', implemented: true },
];

export type ThemeEditorView = 'editor' | 'confirmClose' | 'closed';

export interface ThemeDesignEditorProps {
  /** Current DRAFT theme value — mirrors the source's finding that every
   * property change is applied live to the shared canvas the instant it is
   * made, with no separate "apply" step and (before Save) zero network
   * activity. */
  value: ThemeValue;
  onChange?: (value: ThemeValue) => void;
  /** Called when "Save changes" is clicked (or confirmed from the exit
   * modal). In the source this fires a real network write; this
   * reconstruction makes no network calls — Save only clears the pending
   * in-memory dirty state, matching the record's confirmed
   * "client-side-until-Save" behavior. */
  onSave?: (value: ThemeValue) => void;
  /** Called once the popover has actually closed (after a plain close, a
   * discard, or a save-then-close). */
  onClose?: () => void;
  /** The last-SAVED baseline theme, used to compute dirty state and as the
   * Revert target. Defaults to `value` at mount (a clean starting state) if
   * omitted — pass a different value here to start a fixture already dirty. */
  initialSavedValue?: ThemeValue;
  initialTab?: ThemeTabId;
  /** Lets a fixture open directly onto the exit-confirmation sub-view or the
   * fully-closed placeholder, to demonstrate those states without requiring
   * a click first. */
  initialView?: ThemeEditorView;
  disabled?: boolean;
}

const SAMPLE_TITLE = 'What is your favorite way to give feedback?';

function themeEqual(a: ThemeValue, b: ThemeValue): boolean {
  return (
    a.fontFamily === b.fontFamily &&
    a.fontColor === b.fontColor &&
    a.fontSize === b.fontSize &&
    a.backgroundColor === b.backgroundColor
  );
}

/**
 * Reconstructed from Typeform's builder "Design" popover (Font + Background
 * scope). Unlike the Zoho Forms sibling (`theme-editor-split-pane-shell`),
 * the source component has NO iframe and NO separate preview pane to
 * substitute — the source record confirms a full-page iframe scan found
 * none rendering form content, i.e. the builder canvas and the "preview"
 * are the same DOM tree. This reconstruction can therefore drive the mock
 * canvas below directly from the same React state as the popover controls,
 * a more literal reconstruction than the Zoho sibling could achieve (see
 * this folder's README for the full contrast).
 */
export function ThemeDesignEditor({
  value,
  onChange,
  onSave,
  onClose,
  initialSavedValue,
  initialTab = 'font',
  initialView = 'editor',
  disabled = false,
}: ThemeDesignEditorProps) {
  const [savedValue, setSavedValue] = useState<ThemeValue>(initialSavedValue ?? value);
  const [activeTab, setActiveTab] = useState<ThemeTabId>(initialTab);
  const [view, setView] = useState<ThemeEditorView>(initialView);
  const panelId = useId();
  const titleId = useId();

  const isDirty = !themeEqual(value, savedValue);

  function update(patch: Partial<ThemeValue>) {
    if (disabled) return;
    onChange?.({ ...value, ...patch });
  }

  function handleSave() {
    if (disabled) return;
    onSave?.(value);
    setSavedValue(value);
  }

  function handleRevert() {
    if (disabled) return;
    onChange?.(savedValue);
  }

  function handleCloseClick() {
    if (isDirty) {
      setView('confirmClose');
    } else {
      setView('closed');
      onClose?.();
    }
  }

  function handleDiscardAndClose() {
    onChange?.(savedValue);
    setView('closed');
    onClose?.();
  }

  function handleSaveAndClose() {
    onSave?.(value);
    setSavedValue(value);
    setView('closed');
    onClose?.();
  }

  function handleReopen() {
    setView('editor');
  }

  const activeTabDef = TABS.find((t) => t.id === activeTab) ?? TABS[1];
  const fontClass = FONT_CLASS[value.fontFamily];

  return (
    <div className={styles.root}>
      <div className={styles.stageArea}>
        {view !== 'closed' ? (
          <div
            id={panelId}
            className={styles.popover}
            role="dialog"
            aria-labelledby={titleId}
            aria-modal="false"
          >
            {view === 'confirmClose' ? (
              <div className={styles.confirmView}>
                <h3 className={styles.confirmTitle}>Save changes to theme?</h3>
                <p className={styles.confirmBody}>
                  You made changes to this theme, but you haven&apos;t saved them.
                </p>
                <div className={styles.confirmActions}>
                  <button
                    type="button"
                    className={styles.secondaryBtn}
                    onClick={handleDiscardAndClose}
                  >
                    Discard changes
                  </button>
                  <button type="button" className={styles.primaryBtn} onClick={handleSaveAndClose}>
                    Save theme
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className={styles.popoverHeader}>
                  <span id={titleId} className={styles.popoverTitle}>
                    Design › Custom theme
                  </span>
                  <button
                    type="button"
                    className={styles.closeBtn}
                    aria-label="Close design editor"
                    onClick={handleCloseClick}
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>

                <div className={styles.tabStrip} role="tablist" aria-label="Design editor sections">
                  {TABS.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      id={`${panelId}-tab-${tab.id}`}
                      aria-selected={activeTab === tab.id}
                      aria-controls={`${panelId}-panel-${tab.id}`}
                      className={
                        activeTab === tab.id
                          ? `${styles.tabButton} ${styles.tabButtonActive}`
                          : styles.tabButton
                      }
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div
                  className={styles.detailPanel}
                  role="tabpanel"
                  id={`${panelId}-panel-${activeTab}`}
                  aria-labelledby={`${panelId}-tab-${activeTab}`}
                >
                  {!activeTabDef.implemented ? (
                    <p className={styles.notImplemented}>
                      Not reconstructed in this preview — the source record only glanced at this tab
                      and did not trace its behavior (see README).
                    </p>
                  ) : activeTab === 'font' ? (
                    <div className={styles.controls}>
                      <label className={styles.controlRow} htmlFor={`${panelId}-font-family`}>
                        <span className={styles.controlLabel}>Font family</span>
                        <select
                          id={`${panelId}-font-family`}
                          className={styles.select}
                          value={value.fontFamily}
                          disabled={disabled}
                          onChange={(event) => update({ fontFamily: event.target.value as FontId })}
                        >
                          {FONT_OPTIONS.map((opt) => (
                            <option key={opt.id} value={opt.id}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </label>

                      <label className={styles.controlRow} htmlFor={`${panelId}-font-color`}>
                        <span className={styles.controlLabel}>Font color</span>
                        <input
                          id={`${panelId}-font-color`}
                          type="color"
                          className={styles.colorSwatch}
                          value={value.fontColor}
                          disabled={disabled}
                          onChange={(event) => update({ fontColor: event.target.value })}
                        />
                      </label>

                      <div className={styles.controlRow}>
                        <span className={styles.controlLabel}>Size</span>
                        <div
                          className={styles.sizeGroup}
                          role="radiogroup"
                          aria-label="Question title size"
                        >
                          {SIZE_OPTIONS.map((opt) => (
                            <button
                              key={opt.id}
                              type="button"
                              role="radio"
                              aria-checked={value.fontSize === opt.id}
                              disabled={disabled}
                              className={
                                value.fontSize === opt.id
                                  ? `${styles.sizeButton} ${styles.sizeButtonActive}`
                                  : styles.sizeButton
                              }
                              onClick={() => update({ fontSize: opt.id })}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.controls}>
                      <label className={styles.controlRow} htmlFor={`${panelId}-bg-color`}>
                        <span className={styles.controlLabel}>Background color</span>
                        <input
                          id={`${panelId}-bg-color`}
                          type="color"
                          className={styles.colorSwatch}
                          value={value.backgroundColor}
                          disabled={disabled}
                          onChange={(event) => update({ backgroundColor: event.target.value })}
                        />
                      </label>
                    </div>
                  )}
                </div>

                <div className={styles.footer}>
                  {isDirty && (
                    <button
                      type="button"
                      className={styles.revertBtn}
                      disabled={disabled}
                      onClick={handleRevert}
                    >
                      Revert
                    </button>
                  )}
                  <button
                    type="button"
                    className={styles.primaryBtn}
                    disabled={disabled}
                    onClick={handleSave}
                  >
                    Save changes
                  </button>
                </div>
              </>
            )}
          </div>
        ) : (
          <div className={styles.closedPlaceholder}>
            <button type="button" className={styles.secondaryBtn} onClick={handleReopen}>
              Open Design editor
            </button>
          </div>
        )}

        {/* No iframe / no separate preview pane in the source — this mock
            canvas is driven by the exact same `value` state as the popover
            controls above, same document, same React tree. */}
        <div
          className={styles.canvas}
          style={{ backgroundColor: value.backgroundColor } as React.CSSProperties}
        >
          <div className={styles.canvasLabel}>Canvas (live, same document)</div>
          <p
            className={`${styles.canvasTitle} ${fontClass}`}
            style={
              {
                color: value.fontColor,
                fontSize: `${SIZE_PX[value.fontSize]}px`,
              } as React.CSSProperties
            }
          >
            {SAMPLE_TITLE}
          </p>
        </div>
      </div>
    </div>
  );
}
