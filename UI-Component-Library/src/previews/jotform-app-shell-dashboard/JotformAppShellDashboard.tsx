import { useState } from 'react';
import styles from './JotformAppShellDashboard.module.css';

export type SidebarSection = 'all' | 'shared' | 'assigned' | 'sent' | 'continue';

export interface JotformAppShellDashboardProps {
  disabled?: boolean;
  onSectionChange?: (section: SidebarSection) => void;
  onCreateOpen?: () => void;
  onSelectionChange?: (selected: boolean) => void;
}

const SECTIONS: { id: SidebarSection; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'shared', label: 'Shared with me' },
  { id: 'assigned', label: 'Assigned to me' },
  { id: 'sent', label: 'Sent' },
  { id: 'continue', label: 'Continue Filling' },
];

/**
 * Reconstructed from JotForm's My Workspace dashboard shell (see
 * Research-Library/04-Component-Library/jotform/jotform-app-shell-dashboard.md,
 * P1, 2026-09-29).
 *
 * Confirmed and reproduced faithfully: a real docked, non-collapsing left
 * sidebar (confirmed distinct from Google Forms' hamburger-overlay-only
 * dashboard) with a flat un-grouped item list; a top header carrying the
 * broader product-marketing nav (Templates/Integrations/Products/Support/
 * Enterprise/Pricing) which the builder shell drops entirely (see the sibling
 * preview); and the confirmed real pattern that selecting a form row's
 * checkbox SWAPS the toolbar row for a contextual selection action bar
 * rather than opening a separate panel, reproduced here exactly. No
 * dedicated page-header chrome exists — reproduced by deliberately NOT
 * adding an H1 above the list, matching the source's own confirmed finding.
 *
 * Scope notes: the "+ CREATE" 6-option chooser overlay and the Products
 * mega-menu are reproduced only as inert triggers (onCreateOpen callback),
 * not full flyouts — out of scope for this shell-level pass. No network
 * calls are made by this client-side preview.
 */
export function JotformAppShellDashboard({
  disabled = false,
  onSectionChange,
  onCreateOpen,
  onSelectionChange,
}: JotformAppShellDashboardProps) {
  const [activeSection, setActiveSection] = useState<SidebarSection>('all');
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [showPromoBanner, setShowPromoBanner] = useState(true);

  function selectSection(section: SidebarSection) {
    if (disabled) return;
    setActiveSection(section);
    onSectionChange?.(section);
  }

  function toggleRow(id: string) {
    if (disabled) return;
    setSelectedRows((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      onSelectionChange?.(next.size > 0);
      return next;
    });
  }

  const hasSelection = selectedRows.size > 0;
  const forms = ['Customer Feedback', 'Event RSVP', 'Order Form'];

  return (
    <div className={styles.root} data-disabled={disabled}>
      {showPromoBanner && (
        <div className={styles.campaignBanner}>
          <span>TODAY ONLY / SAVE 50%</span>
          <button type="button" onClick={() => setShowPromoBanner(false)} disabled={disabled}>
            Save Now
          </button>
        </div>
      )}

      <header className={styles.topBar}>
        <span className={styles.brand}>▤ My Workspace ▾</span>
        <nav className={styles.topNav} aria-label="Product navigation">
          <span>Templates</span>
          <span>Integrations</span>
          <button
            type="button"
            className={styles.linkButton}
            onClick={() => onCreateOpen?.()}
            disabled={disabled}
          >
            Products
          </button>
          <span>Support</span>
          <span>Enterprise</span>
          <span>Pricing</span>
        </nav>
        <span className={styles.avatar}>A</span>
      </header>

      <div className={styles.body}>
        <aside className={styles.sidebar} aria-label="Workspace navigation">
          <div className={styles.sidebarSectionLabel}>My Workspace</div>
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              type="button"
              className={
                activeSection === section.id ? `${styles.navItem} ${styles.navItemActive}` : styles.navItem
              }
              disabled={disabled}
              onClick={() => selectSection(section.id)}
            >
              {section.label}
            </button>
          ))}
          <div className={styles.sidebarSectionLabel}>Team Workspaces</div>
          <button type="button" className={styles.navItem} disabled={disabled}>
            + Create team
          </button>
          <div className={styles.sidebarFooter}>
            <div className={styles.crossSellCard}>Connect to Jotform Sign</div>
          </div>
        </aside>

        <div className={styles.mainContent}>
          {hasSelection ? (
            <div className={styles.selectionToolbar} role="toolbar" aria-label="Selection actions">
              <span>{selectedRows.size} selected</span>
              <button type="button" disabled={disabled}>
                Submissions
              </button>
              <button type="button" disabled={disabled}>
                Label as
              </button>
              <button type="button" disabled={disabled}>
                Delete
              </button>
            </div>
          ) : (
            <div className={styles.toolbar}>
              <button
                type="button"
                className={styles.createButton}
                onClick={() => onCreateOpen?.()}
                disabled={disabled}
              >
                + CREATE
              </button>
              <span className={styles.toolbarRight}>
                <select aria-label="Filter" disabled={disabled}>
                  <option>Filter</option>
                </select>
                <select aria-label="Sort by last activity" disabled={disabled}>
                  <option>Last Activity</option>
                </select>
                <input type="search" placeholder="Search" aria-label="Search forms" disabled={disabled} />
              </span>
            </div>
          )}

          <ul className={styles.formList}>
            {forms.map((name) => (
              <li key={name} className={styles.formRow}>
                <input
                  type="checkbox"
                  aria-label={`Select ${name}`}
                  checked={selectedRows.has(name)}
                  disabled={disabled}
                  onChange={() => toggleRow(name)}
                />
                <span className={styles.formName}>{name}</span>
                <span className={styles.formMeta}>12 submissions · edited 2d ago</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
