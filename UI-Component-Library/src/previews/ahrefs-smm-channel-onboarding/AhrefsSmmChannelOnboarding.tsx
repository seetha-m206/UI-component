import { useState } from 'react';
import styles from '../ahrefs-shared.module.css';

export interface AhrefsSmmChannelOnboardingProps {
  initialState?: 'default' | 'banner-dismissed';
  disabled?: boolean;
}
const tools = [
  'Dashboard',
  'Brand Radar',
  'AI Content Helper',
  'SMM',
  'Site Explorer',
  'Keywords Explorer',
];
const channels = ['in', '𝕏', 'f', '♪', '◎', '◎', '▶'];

export function AhrefsSmmChannelOnboarding({
  initialState = 'default',
  disabled = false,
}: AhrefsSmmChannelOnboardingProps) {
  const [banner, setBanner] = useState(initialState !== 'banner-dismissed');
  const [status, setStatus] = useState('');
  const guard = (action: string) => {
    if (!disabled)
      setStatus(
        `${action} needs verification. No social account, permission, post, or external action was run.`
      );
  };
  return (
    <div className={styles.root}>
      <div className={styles.appShell}>
        <header className={styles.header}>
          <nav className={styles.globalNav} aria-label="Ahrefs products">
            <strong className={styles.logo}>
              a<span>h</span>refs
            </strong>
            <button type="button" disabled={disabled} onClick={() => guard('All tools menu')}>
              ▦ All tools
            </button>
            <div className={styles.toolLinks}>
              {tools.map((tool) => (
                <button
                  type="button"
                  key={tool}
                  disabled={disabled}
                  className={tool === 'SMM' ? styles.activeTool : ''}
                  onClick={() => guard(`${tool} navigation`)}
                >
                  {tool}
                </button>
              ))}
              <button type="button" disabled={disabled} onClick={() => guard('More menu')}>
                More⌄
              </button>
            </div>
            <button
              className={styles.upgrade}
              type="button"
              disabled={disabled}
              onClick={() => guard('Upgrade navigation')}
            >
              ✦ Upgrade
            </button>
            <button
              className={styles.workspace}
              type="button"
              disabled={disabled}
              onClick={() => guard('Workspace menu')}
            >
              Atlas workspace⌄
            </button>
          </nav>
        </header>
        {banner && (
          <aside className={styles.infoBanner} aria-label="Product announcement">
            <strong>ⓘ YouTube Shorts is here.</strong> Schedule and publish Shorts alongside your
            other channels. What should we build next?{' '}
            <button type="button" disabled={disabled} onClick={() => guard('Feedback navigation')}>
              Share your feedback
            </button>
            <button
              className={styles.bannerClose}
              type="button"
              aria-label="Dismiss announcement"
              disabled={disabled}
              onClick={() => setBanner(false)}
            >
              ×
            </button>
          </aside>
        )}
        <main className={styles.smmMain}>
          <section aria-labelledby="smm-title">
            <h1 id="smm-title">Connect your first channel</h1>
            <p>Connect a social media channel to start managing your online presence.</p>
            <button
              className={styles.primaryAction}
              type="button"
              disabled={disabled}
              onClick={() => guard('Channel connection')}
            >
              ＋ Connect channel
            </button>
            <div className={styles.channelIcons} aria-label="Supported social channels">
              {channels.map((channel, index) => (
                <span key={`${channel}-${index}`}>{channel}</span>
              ))}
            </div>
            <div className={styles.calendarMock} aria-hidden="true">
              <div>Sun</div>
              <div>
                Mon
                <br />
                <b>● Ready or not…</b>
                <br />● Ready or not…
              </div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
            </div>
          </section>
          {status && (
            <p className={styles.explorerStatus} role="status">
              {status}
            </p>
          )}
        </main>
        <footer className={styles.footer}>
          <span>
            About · Team · Our data · Blog · Robot · Jobs · Plans &amp; pricing · API · Help ·
            Contact us
          </span>
          <span>English⌄ · Legal info</span>
        </footer>
        <button
          className={styles.help}
          type="button"
          aria-label="Open help"
          disabled={disabled}
          onClick={() => guard('Help')}
        >
          ?
        </button>
      </div>
    </div>
  );
}
