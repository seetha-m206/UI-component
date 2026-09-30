import { useId, useMemo, useState } from 'react';
import styles from './similarweb-onboarding.module.css';

export type SimilarwebOnboardingState = 'empty' | 'open' | 'filtered' | 'enabled-action';
export type SimilarwebOnboardingFocus = 'workspace' | 'combobox' | 'progress-action';

export interface SimilarwebOnboardingProps {
  initialState?: SimilarwebOnboardingState;
  focus?: SimilarwebOnboardingFocus;
  disabled?: boolean;
}

const marketingTitles = [
  'Marketing Acquisition',
  'Marketing Analyst',
  'Marketing Assistant',
  'Marketing Automation Manager',
  'Marketing Communications Manager',
  'Marketing Consultant',
  'Marketing Coordinator',
  'Marketing Director',
  'Marketing Executive',
  'Marketing Lead',
  'Marketing Manager',
  'Marketing Operations Analyst',
  'Marketing Operations Manager',
  'Marketing Operations Specialist',
  'Marketing Performance Analyst',
  'Marketing Research Analyst',
  'Marketing Specialist',
  'Marketing Strategist',
  'Chief Marketing Officer (CMO)',
  'Digital Marketing Manager',
  'Growth Marketing Manager',
  'Head Of Marketing',
  'Performance Marketing Manager',
  'Product Marketing Manager',
  'Vice President (VP) Of Marketing',
];

export function SimilarwebOnboarding({
  initialState = 'empty',
  focus = 'workspace',
  disabled = false,
}: SimilarwebOnboardingProps) {
  const listboxId = useId();
  const [query, setQuery] = useState(initialState === 'filtered' ? 'Marketing' : '');
  const [open, setOpen] = useState(initialState === 'open' || initialState === 'filtered');
  const [syntheticEnabled, setSyntheticEnabled] = useState(initialState === 'enabled-action');
  const [status, setStatus] = useState('');
  const results = useMemo(
    () =>
      query.trim()
        ? marketingTitles.filter((title) => title.toLowerCase().includes(query.toLowerCase()))
        : [],
    [query]
  );

  const clear = () => {
    setQuery('');
    setOpen(true);
    setSyntheticEnabled(false);
    setStatus('Search cleared locally. No onboarding answer was selected.');
  };

  return (
    <div className={styles.stage}>
      <section className={styles.phone} aria-label="Similarweb onboarding reconstruction">
        <header className={styles.header}>
          <button
            type="button"
            className={styles.back}
            aria-label="Back · needs verification"
            disabled={disabled}
            onClick={() => setStatus('Back navigation needs verification. No navigation occurred.')}
          >
            ‹
          </button>
          <div className={styles.progressTrack} aria-label="Onboarding progress: step 4 of 11">
            <span className={styles.progressFill} />
          </div>
          <span className={styles.progressText}>4/11</span>
        </header>

        <main className={styles.content}>
          <div className={focus === 'workspace' ? styles.focusRing : undefined}>
            <h1>What’s your job title?</h1>
            <p>This helps us find the best solution for your needs</p>
          </div>

          <div className={focus === 'combobox' ? styles.focusRing : undefined}>
            <label className={styles.srOnly} htmlFor="similarweb-job-title">
              Job title
            </label>
            <div className={styles.comboboxShell}>
              <input
                id="similarweb-job-title"
                role="combobox"
                aria-expanded={open}
                aria-controls={listboxId}
                aria-autocomplete="list"
                value={query}
                placeholder="Type here"
                disabled={disabled}
                onFocus={() => setOpen(true)}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setOpen(true);
                  setSyntheticEnabled(false);
                }}
              />
              {query ? (
                <button type="button" className={styles.clear} onClick={clear} disabled={disabled}>
                  Clear
                </button>
              ) : (
                <button
                  type="button"
                  className={styles.chevron}
                  aria-label="Open job-title options"
                  onClick={() => setOpen((value) => !value)}
                  disabled={disabled}
                >
                  ▾
                </button>
              )}
            </div>
            {open && (
              <ul id={listboxId} role="listbox" className={styles.listbox}>
                {results.length > 0 ? (
                  results.map((title) => (
                    <li role="option" aria-selected="false" key={title}>
                      <button
                        type="button"
                        disabled={disabled}
                        onClick={() => {
                          setQuery(title);
                          setOpen(false);
                          setSyntheticEnabled(true);
                          setStatus(
                            'Synthetic selected state. The live Similarweb selection and submission were not exercised.'
                          );
                        }}
                      >
                        {title}
                      </button>
                    </li>
                  ))
                ) : (
                  <li className={styles.searchHint}>Type to search</li>
                )}
              </ul>
            )}
          </div>
        </main>

        <footer className={focus === 'progress-action' ? styles.focusRing : undefined}>
          <button
            type="button"
            className={styles.next}
            disabled={disabled || !syntheticEnabled}
            onClick={() =>
              setStatus(
                'Next is guarded in this reconstruction. No Similarweb answer was submitted.'
              )
            }
          >
            Next <span aria-hidden="true">→</span>
          </button>
          {syntheticEnabled && (
            <p className={styles.synthetic}>Enabled state is synthetic and needs verification.</p>
          )}
        </footer>
      </section>
      <p className={styles.status} role="status">
        {status || 'Local reconstruction. No provider request or onboarding answer is submitted.'}
      </p>
    </div>
  );
}
