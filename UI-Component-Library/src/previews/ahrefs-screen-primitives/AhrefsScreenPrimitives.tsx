import { useState } from 'react';
import styles from './ahrefs-screen-primitives.module.css';

export interface AhrefsScreenPrimitiveProps {
  disabled?: boolean;
}

function Status({ value }: { value: string }) {
  return value ? (
    <p className={styles.status} role="status">
      {value}
    </p>
  ) : null;
}

function useGuard(disabled = false) {
  const [status, setStatus] = useState('');
  return {
    status,
    guard: (action: string) => {
      if (!disabled)
        setStatus(`${action} needs live verification. No Ahrefs account action was run.`);
    },
  };
}

export function AhrefsRankTrackerPlanActions({ disabled = false }: AhrefsScreenPrimitiveProps) {
  const { status, guard } = useGuard(disabled);
  return (
    <section className={styles.stage} aria-label="Rank Tracker plan actions">
      <div className={styles.gateCard}>
        <span className={styles.icon} aria-hidden="true">
          ↗
        </span>
        <h2>Track your rankings</h2>
        <p>Monitor rankings over time and chart performance against competitors.</p>
        <div className={styles.actions}>
          <button
            className={styles.primary}
            type="button"
            disabled={disabled}
            onClick={() => guard('Plan upgrade')}
          >
            Upgrade
          </button>
          <button type="button" disabled={disabled} onClick={() => guard('Learn more navigation')}>
            Learn more
          </button>
        </div>
      </div>
      <Status value={status} />
    </section>
  );
}

export function AhrefsBrandRadarDemoLinks({ disabled = false }: AhrefsScreenPrimitiveProps) {
  const { status, guard } = useGuard(disabled);
  return (
    <section className={styles.stage} aria-label="Brand Radar demo links">
      <p className={styles.demoLinks}>Try demo:</p>
      <div className={styles.linkStack}>
        <button type="button" disabled={disabled} onClick={() => guard('PlayStation demo')}>
          PlayStation vs Xbox, Nintendo
        </button>
        <button type="button" disabled={disabled} onClick={() => guard('Salesforce demo')}>
          Salesforce vs HubSpot, Zoho
        </button>
      </div>
      <Status value={status} />
    </section>
  );
}

export function AhrefsBrandRadarEmptyReports({ disabled = false }: AhrefsScreenPrimitiveProps) {
  const { status, guard } = useGuard(disabled);
  return (
    <section className={styles.stage} aria-labelledby="brand-reports-title">
      <small className={styles.eyebrow}>MY REPORTS</small>
      <div className={styles.emptyCard}>
        <span className={styles.icon} aria-hidden="true">
          ▥
        </span>
        <h2 id="brand-reports-title">Add your first report</h2>
        <p>Save your setup and revisit whenever you need latest results.</p>
        <button
          className={styles.primary}
          type="button"
          disabled={disabled}
          onClick={() => guard('Report creation')}
        >
          ＋ Report
        </button>
      </div>
      <Status value={status} />
    </section>
  );
}

export function AhrefsContentCompetitorFields({ disabled = false }: AhrefsScreenPrimitiveProps) {
  const [count, setCount] = useState(1);
  return (
    <section className={styles.stage} aria-label="Content competitor fields">
      <div className={styles.formCard}>
        {Array.from({ length: count }, (_, index) => (
          <label key={index}>
            Competitor {index + 1}
            <input disabled={disabled} placeholder="Enter URL you want to compete with" />
          </label>
        ))}
        <button
          type="button"
          disabled={disabled || count >= 3}
          onClick={() => setCount((value) => Math.min(3, value + 1))}
        >
          ＋ Add competitor
        </button>
        <p className={styles.helper}>Up to 3 locally reconstructed competitor rows.</p>
      </div>
    </section>
  );
}

export function AhrefsContentAllowanceActions({ disabled = false }: AhrefsScreenPrimitiveProps) {
  const { status, guard } = useGuard(disabled);
  return (
    <section className={styles.stage} aria-label="Content allowance actions">
      <div className={styles.allowanceRow}>
        <button
          className={styles.primary}
          type="button"
          disabled={disabled}
          onClick={() => guard('Document creation')}
        >
          Create document
        </button>
        <button type="button" disabled={disabled} onClick={() => guard('Letaido AI writing')}>
          ◇ Ask Letaido to write it
        </button>
        <span>1 / 1 document available this month</span>
        <button type="button" disabled={disabled} onClick={() => guard('Plan upgrade')}>
          Get more from $99/mo
        </button>
      </div>
      <Status value={status} />
    </section>
  );
}

export function AhrefsContentLocationSelect({ disabled = false }: AhrefsScreenPrimitiveProps) {
  const [location, setLocation] = useState('United States');
  return (
    <section className={styles.stage}>
      <label className={styles.selectField}>
        Location
        <select
          disabled={disabled}
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        >
          <option>United States</option>
          <option>Canada</option>
          <option>United Kingdom</option>
        </select>
      </label>
      <p className={styles.selection}>Selected location: {location}</p>
    </section>
  );
}

export function AhrefsContentBrandKitSelect({ disabled = false }: AhrefsScreenPrimitiveProps) {
  const [brandKit, setBrandKit] = useState('Not selected');
  return (
    <section className={styles.stage}>
      <label className={styles.selectField}>
        Brand kit
        <select
          disabled={disabled}
          value={brandKit}
          onChange={(event) => setBrandKit(event.target.value)}
        >
          <option>Not selected</option>
          <option>Atlas voice</option>
        </select>
      </label>
      <p className={styles.selection}>Selected brand kit: {brandKit}</p>
    </section>
  );
}

export function AhrefsSmmAnnouncementBanner({ disabled = false }: AhrefsScreenPrimitiveProps) {
  const [visible, setVisible] = useState(true);
  const { status, guard } = useGuard(disabled);
  return (
    <section className={styles.stage}>
      {visible ? (
        <aside className={styles.banner} aria-label="Product announcement">
          <div>
            <strong>ⓘ YouTube Shorts is here.</strong>
            <p>
              Schedule and publish Shorts alongside your other channels. What should we build next?
            </p>
          </div>
          <button type="button" disabled={disabled} onClick={() => guard('Feedback navigation')}>
            Share your feedback
          </button>
          <button
            className={styles.close}
            type="button"
            aria-label="Dismiss announcement"
            disabled={disabled}
            onClick={() => setVisible(false)}
          >
            ×
          </button>
        </aside>
      ) : (
        <button type="button" disabled={disabled} onClick={() => setVisible(true)}>
          Show announcement
        </button>
      )}
      <Status value={status} />
    </section>
  );
}

const channels = ['LinkedIn', 'X', 'Facebook', 'TikTok', 'Instagram', 'Threads', 'YouTube'];
export function AhrefsSmmChannelList({ disabled = false }: AhrefsScreenPrimitiveProps) {
  const [active, setActive] = useState('LinkedIn');
  return (
    <section className={styles.stage} aria-labelledby="supported-channels-title">
      <h2 id="supported-channels-title">Supported social channels</h2>
      <div className={styles.channels}>
        {channels.map((channel) => (
          <button
            type="button"
            key={channel}
            disabled={disabled}
            aria-pressed={active === channel}
            onClick={() => setActive(channel)}
          >
            {channel}
          </button>
        ))}
      </div>
      <p className={styles.selection}>Selected channel: {active}</p>
    </section>
  );
}

export function AhrefsSmmConnectAction({ disabled = false }: AhrefsScreenPrimitiveProps) {
  const { status, guard } = useGuard(disabled);
  return (
    <section className={styles.stage} aria-labelledby="connect-channel-title">
      <div className={styles.connectCard}>
        <h2 id="connect-channel-title">Connect your first channel</h2>
        <p>Connect a social media channel to start managing your online presence.</p>
        <button
          className={styles.primary}
          type="button"
          disabled={disabled}
          onClick={() => guard('Channel connection')}
        >
          ＋ Connect channel
        </button>
      </div>
      <Status value={status} />
    </section>
  );
}

export function AhrefsAppsDeveloperInfoAction({ disabled = false }: AhrefsScreenPrimitiveProps) {
  const { status, guard } = useGuard(disabled);
  return (
    <section className={styles.stage} aria-labelledby="developer-info-title">
      <div className={styles.infoCard}>
        <span className={styles.icon} aria-hidden="true">
          ↗
        </span>
        <h2 id="developer-info-title">Ahrefs Data in SEO Tools</h2>
        <p>Get Ahrefs backlinks data in other SEO tools.</p>
        <button
          className={styles.primary}
          type="button"
          disabled={disabled}
          onClick={() => guard('Developer information')}
        >
          Developer information
        </button>
      </div>
      <Status value={status} />
    </section>
  );
}

export function AhrefsGuardedActionStatus({ disabled = false }: AhrefsScreenPrimitiveProps) {
  const { status, guard } = useGuard(disabled);
  return (
    <section className={styles.stage} aria-labelledby="guarded-status-title">
      <div className={styles.guardCard}>
        <h2 id="guarded-status-title">Provider-impacting action</h2>
        <p>Use a reversible local message when the observed source outcome was not exercised.</p>
        <button type="button" disabled={disabled} onClick={() => guard('Provider action')}>
          Try guarded action
        </button>
      </div>
      <Status value={status} />
    </section>
  );
}

export function AhrefsAccessGateHero({ disabled = false }: AhrefsScreenPrimitiveProps) {
  const { status, guard } = useGuard(disabled);
  return (
    <section className={styles.stage} aria-labelledby="access-gate-title">
      <div className={styles.gateCard}>
        <h2 id="access-gate-title">Competitive Analysis</h2>
        <p>Compare your target with competitors and review shared search-performance patterns.</p>
        <button
          className={styles.primary}
          type="button"
          disabled={disabled}
          onClick={() => guard('Start analysis')}
        >
          Start analysis
        </button>
      </div>
      <Status value={status} />
    </section>
  );
}

export function AhrefsTutorialReportPreview() {
  return (
    <section className={styles.stage} aria-labelledby="tutorial-report-title">
      <div className={styles.reportPreview}>
        <div className={styles.previewToolbar}>
          <strong>ahrefs</strong>
          <i />
          <i />
          <i />
        </div>
        <h2 id="tutorial-report-title" className={styles.srOnly}>
          Tutorial report preview
        </h2>
        <div className={styles.previewTable} aria-label="Illustrative report rows">
          {Array.from({ length: 28 }, (_, index) => (
            <span key={index} className={(index + 1) % 7 === 0 ? styles.highlightCell : ''}>
              {index % 7 === 0 ? 'Target' : index % 5 === 0 ? '42,680' : '—'}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AhrefsTutorialFilterStrip() {
  return (
    <section className={styles.stage} aria-label="Tutorial filter strip">
      <div className={styles.filterStrip}>
        <span>Monthly volume⌄</span>
        <span>United States⌄</span>
        <span>＋ More filters</span>
      </div>
    </section>
  );
}

export function AhrefsBrandRadarPricingBanner({ disabled = false }: AhrefsScreenPrimitiveProps) {
  const { status, guard } = useGuard(disabled);
  return (
    <section className={styles.stage}>
      <aside className={styles.banner} aria-label="Brand Radar pricing notice">
        <div>
          <strong>New:</strong>
          <p>Track your own prompts to monitor brand mentions in AI responses.</p>
        </div>
        <button type="button" disabled={disabled} onClick={() => guard('Pricing navigation')}>
          See pricing
        </button>
      </aside>
      <Status value={status} />
    </section>
  );
}

export function AhrefsSmmCalendarPreview() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return (
    <section className={styles.stage} aria-labelledby="calendar-preview-title">
      <div className={styles.calendarPreview}>
        <h2 id="calendar-preview-title" className={styles.srOnly}>
          Social publishing calendar preview
        </h2>
        {days.map((day) => (
          <div key={day}>
            <strong>{day}</strong>
            {day === 'Mon' && (
              <>
                <span>● Ready or not…</span>
                <span>● Ready or not…</span>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export function AhrefsProjectSetupCancelAction({ disabled = false }: AhrefsScreenPrimitiveProps) {
  const { status, guard } = useGuard(disabled);
  return (
    <section className={styles.stage}>
      <div className={styles.projectHeader}>
        <strong className={styles.wordmark}>ahrefs</strong>
        <button type="button" disabled={disabled} onClick={() => guard('Cancel project setup')}>
          × Cancel
        </button>
      </div>
      <Status value={status} />
    </section>
  );
}
