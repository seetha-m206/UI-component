import { useState } from 'react';
import styles from '../semrush-shared.module.css';

export type ReportControlState =
  | 'default'
  | 'brand-menu'
  | 'target-dialog'
  | 'platform-menu'
  | 'date-menu'
  | 'target-tip'
  | 'date-tip'
  | 'data-dialog'
  | 'quota-dialog';

export interface SemrushReportFilterControlsProps {
  disabled?: boolean;
  quotaFull?: boolean;
  initialState?: ReportControlState;
}

const competitors = ['Orbit', 'Beacon', 'Summit', 'Harbor'];
const platforms = ['All AI Platforms', 'Google AI Mode', 'ChatGPT', 'Perplexity', 'Gemini'];
const history = ['Sep 15, 2026', 'Sep 6, 2026', 'Aug 30, 2026', 'Aug 23, 2026'];

export function SemrushReportFilterControls({
  disabled = false,
  quotaFull = true,
  initialState = 'default',
}: SemrushReportFilterControlsProps) {
  const [visibleCompetitors, setVisibleCompetitors] = useState(competitors);
  const [openState, setOpenState] = useState<ReportControlState>(initialState);
  const [platform, setPlatform] = useState(platforms[0]);
  const [date, setDate] = useState('Sep 22, 2026');
  const [notice, setNotice] = useState('');

  const close = () => setOpenState('default');
  const toggle = (state: ReportControlState) =>
    setOpenState((current) => (current === state ? 'default' : state));

  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <div className={styles.actions}>
          <div>
            <h2 className={styles.pageTitle}>Brand Performance: northstar.example</h2>
            <button className={styles.inlineLink} type="button" disabled={disabled} aria-expanded={openState === 'target-dialog'} onClick={() => toggle('target-dialog')}>
              Target: Worldwide · English
            </button>
            <button className={styles.infoButton} type="button" aria-label="About target location" aria-expanded={openState === 'target-tip'} disabled={disabled} onClick={() => toggle('target-tip')}>
              i
            </button>
          </div>
          <div className={styles.actions}>
            <button className={styles.ghost} type="button" disabled={disabled} onClick={() => setNotice('Export was not run in this reconstruction.')}>
              Export to PDF
            </button>
            <button className={styles.primary} type="button" disabled={disabled} onClick={() => quotaFull ? setOpenState('quota-dialog') : setNotice('Brand profile setup would open. This local fixture creates nothing.')}>
              Add brand profile <strong>{quotaFull ? '1/1' : '1/3'}</strong>
            </button>
          </div>
        </div>

        <section className={styles.controlCard} aria-label="Report controls">
          <div className={styles.controlGrid}>
            <div className={styles.filterField}>
              <span className={styles.controlLabel}>Brand profile</span>
              <button className={styles.filterButton} type="button" aria-haspopup="listbox" aria-expanded={openState === 'brand-menu'} disabled={disabled} onClick={() => toggle('brand-menu')}>
                northstar.example <span>⌄</span>
              </button>
              {openState === 'brand-menu' && (
                <div className={styles.floatingMenu} role="listbox" aria-label="Brand profiles">
                  <span className={styles.menuHeading}>Brand profiles</span>
                  <span className={styles.menuHeading}>My Own · 1/1</span>
                  <button type="button" role="option" aria-selected="true" onClick={close}>
                    <strong>northstar.example</strong><small>Worldwide · English</small>
                  </button>
                  <span className={styles.menuHeading}>Demo report</span>
                  <button type="button" role="option" aria-selected="false" onClick={close}>
                    <strong>demo.example</strong><small>Worldwide · English</small>
                  </button>
                  <button type="button" disabled>Add brand profile · Add-on</button>
                </div>
              )}
            </div>

            <div className={styles.filterField}>
              <span className={styles.controlLabel}>AI platform</span>
              <button className={styles.filterButton} type="button" aria-haspopup="listbox" aria-expanded={openState === 'platform-menu'} disabled={disabled} onClick={() => toggle('platform-menu')}>
                {platform} <span>⌄</span>
              </button>
              {openState === 'platform-menu' && (
                <div className={styles.floatingMenu} role="listbox" aria-label="AI platforms">
                  {platforms.map((option) => (
                    <button type="button" role="option" aria-selected={platform === option} key={option} onClick={() => { setPlatform(option); close(); }}>
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.filterField}>
              <span className={styles.controlLabel}>Update date</span>
              <div className={styles.actions}>
                <button className={styles.filterButton} type="button" aria-haspopup="listbox" aria-expanded={openState === 'date-menu'} disabled={disabled} onClick={() => toggle('date-menu')}>
                  {date} <span>⌄</span>
                </button>
                <button className={styles.infoButton} type="button" aria-label="About last update date" aria-expanded={openState === 'date-tip'} disabled={disabled} onClick={() => toggle('date-tip')}>i</button>
              </div>
              {openState === 'date-menu' && (
                <div className={styles.floatingMenu} role="listbox" aria-label="Historical data">
                  <span className={styles.menuHeading}>Most recent update</span>
                  <button type="button" role="option" aria-selected={date === 'Sep 22, 2026'} onClick={() => { setDate('Sep 22, 2026'); close(); }}>Sep 22, 2026</button>
                  <span className={styles.menuHeading}>Historical data</span>
                  {history.map((option) => (
                    <button type="button" role="option" aria-selected={date === option} key={option} onClick={() => { setDate(option); close(); }}>{option}</button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className={styles.tagList} aria-label="Competitor filters">
            <span className={`${styles.tag} ${styles.chipActive}`}>Northstar <small>you</small></span>
            {visibleCompetitors.map((name) => (
              <span className={styles.tag} key={name}>
                {name}
                <button type="button" aria-label={`Remove ${name}`} disabled={disabled} onClick={() => setVisibleCompetitors((items) => items.filter((item) => item !== name))}>×</button>
              </span>
            ))}
          </div>

          <button className={styles.ghost} type="button" aria-expanded={openState === 'data-dialog'} disabled={disabled} onClick={() => toggle('data-dialog')}>How we gather data</button>

          {openState === 'target-tip' && <div className={styles.popover} role="tooltip">Target location and language shape how AI responses are analyzed. A new target requires a new brand profile.</div>}
          {openState === 'date-tip' && <div className={styles.popover} role="tooltip">Data is updated approximately every 7 days.</div>}
          {notice && <p role="status" className={`${styles.status} ${styles.statusLoading}`}>{notice}</p>}
        </section>

        {openState === 'target-dialog' && (
          <div className={`${styles.drawerBackdrop} ${styles.centerBackdrop}`}>
            <section className={styles.responseModal} role="dialog" aria-modal="true" aria-label="Edit brand profile">
              <div className={styles.drawerHeader}><h3>Edit brand profile</h3><button className={styles.ghost} type="button" aria-label="Close" onClick={close}>×</button></div>
              <p className={`${styles.status} ${styles.statusError}`}>Applying changes starts a new analysis run and stops collecting data for the current target. The live screen also showed a temporary profile-edit lockout.</p>
              <label className={styles.dialogField}>Domain<input className={styles.input} value="northstar.example" readOnly /></label>
              <label className={styles.dialogField}>Target location<select className={styles.select} defaultValue="Worldwide"><option>Worldwide</option><option>United States</option></select></label>
              <label className={styles.dialogField}>Target language<select className={styles.select} defaultValue="English"><option>English</option><option>French</option></select></label>
              <div className={styles.actions}><button type="button" className={styles.button} disabled>Apply · needs verification</button><button type="button" className={styles.ghost} onClick={close}>Cancel</button></div>
            </section>
          </div>
        )}

        {openState === 'data-dialog' && (
          <div className={`${styles.drawerBackdrop} ${styles.centerBackdrop}`}>
            <section className={styles.responseModal} role="dialog" aria-modal="true" aria-label="Where data comes from">
              <div className={styles.drawerHeader}><h3>Where’s your data coming from</h3><button className={styles.ghost} type="button" aria-label="Close" onClick={close}>×</button></div>
              <ol className={styles.dataSteps}>
                <li><strong>Collecting questions</strong><p>Identify branded and non-branded questions related to the selected brand.</p></li>
                <li><strong>Running questions through AI</strong><p>Run the relevant questions across supported AI platforms during each update.</p></li>
                <li><strong>Turning answers into reports</strong><p>Generate performance, perception, narrative, and question views.</p></li>
                <li><strong>Delivering recommendations</strong><p>Turn the report evidence into clear strategic next steps.</p></li>
              </ol>
              <p className={styles.subtle}>Updates run automatically about every 7 days.</p>
            </section>
          </div>
        )}

        {openState === 'quota-dialog' && (
          <div className={`${styles.drawerBackdrop} ${styles.centerBackdrop}`}>
            <section className={styles.quotaModal} role="dialog" aria-modal="true" aria-label="Tracked brand limit">
              <div className={styles.drawerHeader}><h3>Want to track more brands?</h3><button className={styles.ghost} type="button" aria-label="Close" onClick={close}>×</button></div>
              <p>You’ve reached the tracked brands limit. Add another domain to monitor a new brand, location, or language.</p>
              <button className={styles.primary} type="button" disabled>Analyze more brands · needs verification</button>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}
