import { useState } from 'react';
import { livechatExtendedScreen, type LivechatExtendedVariant } from './LivechatExtendedData';
import styles from './livechat.module.css';

export function LivechatExtendedPreview({ variant }: { variant: LivechatExtendedVariant }) {
  const screen = livechatExtendedScreen(variant);
  const [notice, setNotice] = useState('');
  return (
    <div className={styles.productLayout}>
      <nav className={styles.subnav} aria-label={`${screen.section} section`}>
        <b>{screen.section}</b>
        <span aria-current="page">Observed screen</span>
        <span>Read-only receipt</span>
        <span>Fictional preview</span>
      </nav>
      <main className={styles.deepContent}>
        <p className={styles.eyebrow}>{screen.route}</p>
        <header className={styles.pageHeading}>
          <div>
            <h1>{screen.title}</h1>
            <p>{screen.summary}</p>
          </div>
          <span className={styles.evidencePill}>Observed 8 Oct 2026</span>
        </header>
        <section className={styles.screenPanel} aria-label="Reconstructed visible evidence">
          <p>{screen.state}</p>
          <div className={styles.evidenceTags}>
            {screen.assertions.map((assertion) => (
              <span key={assertion}>{assertion}</span>
            ))}
          </div>
          {screen.controls.length > 0 ? (
            <div className={styles.controlGrid}>
              {screen.controls.map((control) => (
                <button
                  type="button"
                  key={control}
                  onClick={() => setNotice(`${control} stayed inside this fictional fixture.`)}
                >
                  {control}
                </button>
              ))}
            </div>
          ) : (
            <p className={styles.muted}>No consequential control was exercised.</p>
          )}
        </section>
        {notice && (
          <p className={styles.boundary} role="status">
            {notice}
          </p>
        )}
      </main>
    </div>
  );
}
