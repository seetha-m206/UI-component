import { useId, useState } from 'react';
import styles from './ThemeEditorSplitPaneShell.module.css';

export interface ThemeConfigValue {
  /** Container background color, e.g. `#245ba7`. Mirrors the source's
   * `--form-cont-gradient-start-clr` custom property (simplified to a
   * single solid color here — no gradient/angle/opacity controls). */
  backgroundColor: string;
  /** CSS `font-family` value applied to the mock preview form. */
  fontFamily: string;
}

export type ThemeEditorTabId =
  | 'general'
  | 'welcome'
  | 'header'
  | 'fields'
  | 'container'
  | 'pages'
  | 'specialFields'
  | 'buttons'
  | 'progressBar';

interface TabDef {
  id: ThemeEditorTabId;
  label: string;
}

// Verbatim from the source record's icon-tab-menu DOM capture
// (`.zf-leftSmallTabMenu`): GENERAL, WELCOME PAGE, HEADER, FIELDS,
// CONTAINER, PAGES, SPECIAL FIELDS, BUTTONS, PROGRESS BAR.
const TABS: TabDef[] = [
  { id: 'general', label: 'General' },
  { id: 'welcome', label: 'Welcome Page' },
  { id: 'header', label: 'Header' },
  { id: 'fields', label: 'Fields' },
  { id: 'container', label: 'Container' },
  { id: 'pages', label: 'Pages' },
  { id: 'specialFields', label: 'Special Fields' },
  { id: 'buttons', label: 'Buttons' },
  { id: 'progressBar', label: 'Progress Bar' },
];

export const FONT_OPTIONS = [
  { id: 'inter', label: 'Inter (default)', value: "'Inter', system-ui, sans-serif" },
  { id: 'georgia', label: 'Georgia', value: "Georgia, 'Times New Roman', serif" },
  { id: 'courier', label: 'Courier New', value: "'Courier New', monospace" },
  { id: 'verdana', label: 'Verdana', value: 'Verdana, sans-serif' },
] as const;

export interface ThemeEditorSplitPaneShellProps {
  /** Current theme config (background color + font). Only the "Container"
   * background and a font choice are reconstructed — a small slice of the
   * real panel's many sections (Wallpaper, layout pickers, sliders, etc.),
   * enough to demonstrate the live-sync mechanism honestly. */
  value: ThemeConfigValue;
  onChange?: (value: ThemeConfigValue) => void;
  /** Whether the left config panel is folded away via the collapse
   * toggle (`#toggleDiv` in the source). Defaults to false (expanded). */
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  /** Disables every config control. Not an observed state in the source
   * record ("Disabled state: not observed") — included here only as a
   * reasonable assumption (e.g. while a save is in flight), flagged in
   * the README. */
  disabled?: boolean;
}

/**
 * Reconstructed from Zoho Forms' full-screen "Form Customization" theme
 * editor shell. Faithfully reconstructs the SHELL layout: a fixed-width
 * left config panel (icon tab strip + detail panel), a real collapse
 * toggle that does not cause the preview pane to reflow/resize into the
 * freed space (an observed, deliberate finding, not a bug), and a right
 * preview pane.
 *
 * Deliberate scope substitution (documented in this folder's README): the
 * source's preview pane is a same-origin `<iframe>` rendering the real
 * live form document, kept in sync by the parent writing CSS custom
 * properties directly onto the iframe's `<body>`. There is no real form
 * document to render here, so this reconstruction replaces the iframe
 * with a same-document mock form card, but still mirrors the *mechanism*:
 * config changes are pushed as CSS custom properties (`--preview-bg`,
 * `--preview-font-family`) onto a shared ancestor wrapper, exactly as the
 * source pushes values onto the iframe body rather than the visibly
 * changing element itself.
 */
export function ThemeEditorSplitPaneShell({
  value,
  onChange,
  collapsed = false,
  onCollapsedChange,
  disabled = false,
}: ThemeEditorSplitPaneShellProps) {
  const [activeTab, setActiveTab] = useState<ThemeEditorTabId>('general');
  const panelId = useId();
  const titleId = useId();

  function setColor(color: string) {
    if (disabled) return;
    onChange?.({ ...value, backgroundColor: color });
  }

  function setFont(fontFamily: string) {
    if (disabled) return;
    onChange?.({ ...value, fontFamily });
  }

  function toggleCollapsed() {
    onCollapsedChange?.(!collapsed);
  }

  const activeTabDef = TABS.find((t) => t.id === activeTab) ?? TABS[0];

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <span id={titleId} className={styles.headerTitle}>
          Form Customization
        </span>
      </div>

      <div className={styles.shell}>
        <div
          id={panelId}
          className={styles.configPanel}
          data-collapsed={collapsed}
          aria-hidden={collapsed}
        >
          <div
            className={styles.tabStrip}
            role="tablist"
            aria-orientation="vertical"
            aria-label="Theme editor sections"
          >
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`${panelId}-tab-${tab.id}`}
                aria-selected={activeTab === tab.id}
                aria-controls={`${panelId}-panel-${tab.id}`}
                tabIndex={collapsed ? -1 : undefined}
                className={
                  activeTab === tab.id
                    ? `${styles.tabButton} ${styles.tabButtonActive}`
                    : styles.tabButton
                }
                onClick={() => setActiveTab(tab.id)}
              >
                <span className={styles.tabIcon} aria-hidden="true" />
                <span className={styles.tabLabel}>{tab.label}</span>
              </button>
            ))}
          </div>

          <div
            className={styles.detailPanel}
            role="tabpanel"
            id={`${panelId}-panel-${activeTab}`}
            aria-labelledby={`${panelId}-tab-${activeTab}`}
          >
            <h3 className={styles.detailTitle}>{activeTabDef.label}</h3>
            {activeTab === 'general' ? (
              <div className={styles.controls}>
                <label className={styles.controlRow} htmlFor={`${panelId}-color`}>
                  <span className={styles.controlLabel}>Background</span>
                  <input
                    id={`${panelId}-color`}
                    type="color"
                    className={styles.colorSwatch}
                    value={value.backgroundColor}
                    disabled={disabled}
                    tabIndex={collapsed ? -1 : undefined}
                    onChange={(event) => setColor(event.target.value)}
                  />
                </label>
                <label className={styles.controlRow} htmlFor={`${panelId}-font`}>
                  <span className={styles.controlLabel}>Font</span>
                  <select
                    id={`${panelId}-font`}
                    className={styles.fontSelect}
                    value={value.fontFamily}
                    disabled={disabled}
                    tabIndex={collapsed ? -1 : undefined}
                    onChange={(event) => setFont(event.target.value)}
                  >
                    {FONT_OPTIONS.map((opt) => (
                      <option key={opt.id} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            ) : (
              <p className={styles.notImplemented}>
                Not reconstructed in this preview — see README (scope limited to the Container
                background + Font controls needed to demonstrate live sync).
              </p>
            )}
          </div>
        </div>

        <button
          type="button"
          className={styles.toggleBtn}
          aria-expanded={!collapsed}
          aria-controls={panelId}
          aria-label={collapsed ? 'Expand configuration panel' : 'Collapse configuration panel'}
          onClick={toggleCollapsed}
        >
          <span
            aria-hidden="true"
            className={collapsed ? styles.chevronRight : styles.chevronLeft}
          />
        </button>

        <div
          className={styles.previewPane}
          style={
            {
              '--preview-bg': value.backgroundColor,
              '--preview-font-family': value.fontFamily,
            } as React.CSSProperties
          }
        >
          <div className={styles.previewLabel}>Preview</div>
          <div className={styles.mockFormCard}>
            <h2 className={styles.mockFormTitle}>Contact Us</h2>
            <label className={styles.mockFieldLabel} htmlFor={`${panelId}-mock-field`}>
              Full Name
            </label>
            <input
              id={`${panelId}-mock-field`}
              className={styles.mockFieldInput}
              type="text"
              placeholder="Jane Doe"
              readOnly
              tabIndex={-1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
