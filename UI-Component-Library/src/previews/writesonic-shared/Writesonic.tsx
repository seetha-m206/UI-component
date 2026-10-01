import { useId, useState } from 'react';
import type { KeyboardEvent, ReactNode } from 'react';
import styles from './writesonic.module.css';

export type Panel = 'Competitive analysis' | 'Citations' | 'Action items' | 'Answers';
export type Kind =
  | 'shell'
  | 'competitive'
  | 'citations'
  | 'actions'
  | 'answers'
  | 'header'
  | 'tabs'
  | 'metrics'
  | 'help'
  | 'competitors'
  | 'sentiment'
  | 'source'
  | 'recommendation'
  | 'answer'
  | 'disclosure'
  | 'footer'
  | 'gate';
export interface WritesonicProps {
  initialPanel?: Panel;
  state?: 'default' | 'loading' | 'empty' | 'error' | 'disabled';
  initialExpanded?: boolean;
  initialHelpOpen?: boolean;
  sentiment?: 'Positive' | 'Neutral' | 'Negative';
  brand?: string;
  disabled?: boolean;
}
const panels: Panel[] = ['Competitive analysis', 'Citations', 'Action items', 'Answers'];
const fictionalAnswer =
  'Northstar Workspace helps fictional teams organize approvals and shared documents. This invented response demonstrates a report card without reproducing a customer prompt. Teams in this example compare collaboration, review steps, and document access before choosing a tool. The response, topic, and provider attribution are illustrative only.';
const competitors = [
  { name: 'Northstar Workspace', visibility: '36%', voice: '40%', sentiment: 'Positive' as const },
  { name: 'Cedar Desk', visibility: '28%', voice: '32%', sentiment: 'Neutral' as const },
  { name: 'Beacon Suite', visibility: '20%', voice: '28%', sentiment: 'Neutral' as const },
];
const sources = [
  {
    title: 'Guides › Choosing collaboration software',
    url: 'research.example/collaboration',
    count: 3,
  },
  { title: 'Reviews › Team document tools', url: 'reviews.example/team-documents', count: 2 },
  { title: 'Library › Approval workflows', url: 'library.example/approvals', count: 1 },
];
const recommendations = [
  {
    kind: 'Content Gap',
    text: 'Create a comparison page that explains how Northstar Workspace handles document reviews. Use concrete examples and links to supporting material.',
    effort: 'High effort',
    impact: 'High impact',
  },
  {
    kind: 'Branded Trust Gap',
    text: 'Publish a concise methodology page with verifiable product information and customer-approved evidence.',
    effort: 'Medium effort',
    impact: 'High impact',
  },
];

function Sentiment({ value = 'Neutral' }: { value?: WritesonicProps['sentiment'] }) {
  return (
    <span className={styles.sentiment} data-tone={value}>
      <span className={styles.meter} aria-hidden="true" />
      <span>{value}</span>
    </span>
  );
}
function ReportHeader({ brand }: { brand: string }) {
  return (
    <header className={styles.reportHeader}>
      <div className={styles.engines} aria-label="Report platforms">
        <span>Gemini</span>
        <span>Google</span>
        <span>ChatGPT</span>
      </div>
      <h2>
        AI Search Report for <span>{brand}</span>
      </h2>
      <p>Created by analysing 25 answers across 3 AI platforms and 25 prompts</p>
    </header>
  );
}
function ReportTabs({
  value,
  onChange,
  disabled,
  groupId,
}: {
  value: Panel;
  onChange: (p: Panel) => void;
  disabled: boolean;
  groupId: string;
}) {
  const [focus, setFocus] = useState(value);
  function keys(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % panels.length;
    else if (event.key === 'ArrowLeft') next = (index + panels.length - 1) % panels.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = panels.length - 1;
    else return;
    event.preventDefault();
    setFocus(panels[next]);
    event.currentTarget.parentElement
      ?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
      [next]?.focus();
  }
  return (
    <div role="tablist" aria-label="AI Search Report sections" className={styles.tabs}>
      {panels.map((p, i) => (
        <button
          type="button"
          role="tab"
          key={p}
          id={groupId + '-tab-' + i}
          aria-controls={groupId + '-panel-' + i}
          aria-selected={value === p}
          tabIndex={focus === p ? 0 : -1}
          disabled={disabled}
          onFocus={() => setFocus(p)}
          onKeyDown={(e) => keys(e, i)}
          onClick={() => onChange(p)}
        >
          {p}
        </button>
      ))}
    </div>
  );
}
function Help({
  label,
  initialOpen = false,
  disabled = false,
}: {
  label: string;
  initialOpen?: boolean;
  disabled?: boolean;
}) {
  const id = useId();
  const [open, setOpen] = useState(initialOpen);
  return (
    <span className={styles.helpWrap}>
      <button
        type="button"
        className={styles.help}
        aria-label={'About ' + label}
        aria-expanded={open}
        aria-controls={id}
        disabled={disabled}
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => {
          if (e.key === 'Escape') setOpen(false);
        }}
      >
        ⓘ
      </button>
      {open && (
        <span role="tooltip" id={id} className={styles.tooltip}>
          Local explanatory fixture. The provider help trigger was observed, but its opened text was
          not verified.
        </span>
      )}
    </span>
  );
}
function Metrics({ helpOpen, disabled }: { helpOpen: boolean; disabled: boolean }) {
  return (
    <div className={styles.metrics}>
      {[
        ['AI Visibility', '36%', '9 of 25 answers'],
        ['Share of voice', '40%', 'Rank #1 of 3 competitors'],
        ['Citation share', '24%', '6 of 25 cited answers'],
      ].map(([label, value, detail], i) => (
        <article className={styles.metric} key={label}>
          <div>
            {label} <Help label={label} initialOpen={helpOpen && i === 0} disabled={disabled} />
          </div>
          <strong>
            <span className={styles.ring} aria-hidden="true" />
            {value}
          </strong>
          <small>{detail}</small>
        </article>
      ))}
    </div>
  );
}
function CompetitorTable({ sentiment }: { sentiment?: WritesonicProps['sentiment'] }) {
  return (
    <div className={styles.tableScroll}>
      <table>
        <caption>Your AI visibility and share of voice against competitors</caption>
        <thead>
          <tr>
            {['#', 'Brand', 'AI Visibility', 'Share of voice', 'Sentiment'].map((h) => (
              <th key={h} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {competitors.map((r, i) => (
            <tr key={r.name}>
              <td>{i + 1}</td>
              <td>
                <span className={styles.avatar} aria-hidden="true">
                  {r.name[0]}
                </span>
                {r.name}
                {i === 0 && <span className={styles.you}>You</span>}
              </td>
              <td>{r.visibility}</td>
              <td>{r.voice}</td>
              <td>
                <Sentiment value={i === 0 ? (sentiment ?? r.sentiment) : r.sentiment} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function SourceRows({
  single,
  onGuard,
  disabled = false,
}: {
  single?: boolean;
  disabled?: boolean;
  onGuard: (text: string) => void;
}) {
  return (
    <div className={styles.tableScroll}>
      <table>
        <caption>Top pages that were cited in AI answers</caption>
        <thead>
          <tr>
            <th scope="col">Page</th>
            <th scope="col">Citing answers</th>
          </tr>
        </thead>
        <tbody>
          {(single ? sources.slice(0, 1) : sources).map((row) => (
            <tr key={row.url}>
              <td>
                <div className={styles.sourceTitle}>
                  <span className={styles.avatar} aria-hidden="true">
                    ↗
                  </span>
                  {row.title}
                </div>
                <a
                  href={'https://' + row.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled={disabled}
                  tabIndex={disabled ? -1 : 0}
                  onClick={(e) => {
                    e.preventDefault();
                    if (!disabled)
                      onGuard('Source link preview only. No external page was opened.');
                  }}
                >
                  {row.url}
                </a>
              </td>
              <td>{row.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function Recommendation({ index = 0 }: { index?: number }) {
  const item = recommendations[index];
  return (
    <article className={styles.recommendation}>
      <span className={styles.actionIcon} aria-hidden="true">
        ✦
      </span>
      <div>
        <h3>{item.kind}</h3>
        <p>{item.text}</p>
        <div className={styles.badges}>
          <span>{item.effort}</span>
          <span>{item.impact}</span>
        </div>
      </div>
    </article>
  );
}
function Disclosure({
  initialExpanded = false,
  disabled = false,
}: {
  initialExpanded?: boolean;
  disabled?: boolean;
}) {
  const [expanded, setExpanded] = useState(initialExpanded);
  const id = useId();
  return (
    <>
      <p id={id} className={!expanded ? styles.clamped : undefined}>
        {fictionalAnswer}
      </p>
      <button
        type="button"
        className={styles.textButton}
        aria-expanded={expanded}
        disabled={disabled}
        aria-controls={id}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'View less' : 'View more…'}
      </button>
    </>
  );
}
function AnswerCard({
  expanded = false,
  disabled = false,
}: {
  expanded?: boolean;
  disabled?: boolean;
}) {
  return (
    <article className={styles.answer}>
      <div className={styles.answerMeta}>
        <strong>ChatGPT</strong>
        <span>Visible: No</span>
      </div>
      <h3>Which collaboration tools fit a small fictional team?</h3>
      <Disclosure initialExpanded={expanded} disabled={disabled} />
      <p className={styles.topic}>Topic: Collaboration software</p>
    </article>
  );
}
function Gate({
  text,
  disabled,
  onGuard,
}: {
  text: string;
  disabled: boolean;
  onGuard: (text: string) => void;
}) {
  return (
    <button
      type="button"
      className={styles.gate}
      disabled={disabled}
      onClick={() =>
        onGuard(
          'Stopped locally. Plan, purchase, account and unlock actions require separate authorization. No provider action ran.'
        )
      }
    >
      {text} <span aria-hidden="true">→</span>
    </button>
  );
}
function Footer({
  panel,
  onChange,
  onGuard,
  disabled,
}: {
  panel: Panel;
  onChange: (p: Panel) => void;
  onGuard: (text: string) => void;
  disabled: boolean;
}) {
  const i = panels.indexOf(panel);
  return (
    <footer className={styles.footer}>
      <button
        type="button"
        disabled={disabled}
        onClick={() =>
          i > 0
            ? onChange(panels[i - 1])
            : onGuard('Earlier onboarding is outside this local report fixture.')
        }
      >
        Back
      </button>
      <button
        type="button"
        className={styles.primary}
        disabled={disabled}
        onClick={() =>
          i < 3
            ? onChange(panels[i + 1])
            : onGuard('View Plans is guarded locally. No subscription or payment flow opened.')
        }
      >
        {i === 3 ? 'View Plans' : 'Continue'}
      </button>
    </footer>
  );
}
export function WritesonicPreview({
  kind,
  initialPanel,
  state = 'default',
  initialExpanded = false,
  initialHelpOpen = false,
  sentiment = 'Neutral',
  brand = 'Northstar Workspace',
  disabled = false,
}: WritesonicProps & { kind: Kind }) {
  const defaultPanel: Panel =
    kind === 'citations'
      ? 'Citations'
      : kind === 'actions'
        ? 'Action items'
        : kind === 'answers'
          ? 'Answers'
          : 'Competitive analysis';
  const [panel, setPanel] = useState(initialPanel ?? defaultPanel);
  const [localState, setLocalState] = useState(state);
  const [notice, setNotice] = useState('');
  const instanceId = useId();
  const isDisabled = disabled || localState === 'disabled';
  const screen = ['shell', 'competitive', 'citations', 'actions', 'answers'].includes(kind);
  const guard = (text: string) => setNotice(text);
  function reportBody(): ReactNode {
    if (panel === 'Competitive analysis')
      return (
        <>
          <Metrics helpOpen={initialHelpOpen} disabled={isDisabled} />
          <section className={styles.bodyCard}>
            <CompetitorTable sentiment={sentiment} />
            <Gate
              text="See how you rank amongst your competitors"
              disabled={isDisabled}
              onGuard={guard}
            />
          </section>
        </>
      );
    if (panel === 'Citations')
      return (
        <section className={styles.bodyCard}>
          <SourceRows onGuard={guard} disabled={isDisabled} />
          <Gate text="Access complete citation report" disabled={isDisabled} onGuard={guard} />
        </section>
      );
    if (panel === 'Action items')
      return (
        <section className={styles.bodyCard}>
          <h3>Recommended actions to improve your AI visibility</h3>
          <Recommendation />
          <Recommendation index={1} />
          <Gate text="View 2+ action items" disabled={isDisabled} onGuard={guard} />
        </section>
      );
    return (
      <section className={styles.bodyCard}>
        <h3>AI Answers for prompts we ran</h3>
        <AnswerCard expanded={initialExpanded} disabled={isDisabled} />
        <AnswerCard disabled={isDisabled} />
        <Gate text="Unlock all answers" disabled={isDisabled} onGuard={guard} />
      </section>
    );
  }
  function specimen(): ReactNode {
    if (screen)
      return (
        <>
          <div className={styles.topbar}>
            <strong>
              <span>〰</span> Writesonic
            </strong>
            <button
              type="button"
              disabled={isDisabled}
              onClick={() => guard('Log out is guarded. The local preview stays open.')}
            >
              ↪ Log out
            </button>
          </div>
          <div className={styles.report}>
            <ReportHeader brand={brand} />
            <ReportTabs
              value={panel}
              onChange={setPanel}
              disabled={isDisabled}
              groupId={instanceId}
            />
            <div
              role="tabpanel"
              id={instanceId + '-panel-' + panels.indexOf(panel)}
              aria-labelledby={instanceId + '-tab-' + panels.indexOf(panel)}
            >
              {reportBody()}
            </div>
            <Footer panel={panel} onChange={setPanel} onGuard={guard} disabled={isDisabled} />
          </div>
        </>
      );
    switch (kind) {
      case 'header':
        return <ReportHeader brand={brand} />;
      case 'tabs':
        return (
          <>
            <ReportTabs
              value={panel}
              onChange={setPanel}
              disabled={isDisabled}
              groupId={instanceId}
            />
            <div
              role="tabpanel"
              id={instanceId + '-panel-' + panels.indexOf(panel)}
              aria-labelledby={instanceId + '-tab-' + panels.indexOf(panel)}
              className={styles.miniPanel}
            >
              {panel} selected · fictional panel
            </div>
          </>
        );
      case 'metrics':
        return <Metrics helpOpen={initialHelpOpen} disabled={isDisabled} />;
      case 'help':
        return (
          <div className={styles.miniPanel}>
            AI Visibility{' '}
            <Help label="AI Visibility" initialOpen={initialHelpOpen} disabled={isDisabled} />
          </div>
        );
      case 'competitors':
        return <CompetitorTable sentiment={sentiment} />;
      case 'sentiment':
        return (
          <div className={styles.miniPanel}>
            <Sentiment value={sentiment} />
          </div>
        );
      case 'source':
        return <SourceRows single onGuard={guard} disabled={isDisabled} />;
      case 'recommendation':
        return <Recommendation />;
      case 'answer':
        return <AnswerCard expanded={initialExpanded} disabled={isDisabled} />;
      case 'disclosure':
        return (
          <div className={styles.answer}>
            <Disclosure initialExpanded={initialExpanded} disabled={isDisabled} />
          </div>
        );
      case 'footer':
        return (
          <>
            <p className={styles.miniPanel}>Current report step: {panel}</p>
            <Footer panel={panel} onChange={setPanel} onGuard={guard} disabled={isDisabled} />
          </>
        );
      case 'gate':
        return (
          <div className={styles.miniPanel}>
            <Gate text="Unlock all answers" disabled={isDisabled} onGuard={guard} />
          </div>
        );
    }
  }
  return (
    <div className={styles.root}>
      <div className={styles.evidence}>
        FICTIONAL DATA · LOCAL RECONSTRUCTION
        {localState !== 'default'
          ? ' · SIMULATED ' + localState.toUpperCase() + ' STATE, NOT OBSERVED LIVE'
          : ''}
      </div>
      {localState === 'loading' ? (
        <div role="status" className={styles.state}>
          <div className={styles.skeleton} />
          <div className={styles.skeleton} />
          Loading fixture only
          <button type="button" onClick={() => setLocalState('default')}>
            Show local sample
          </button>
        </div>
      ) : localState === 'empty' ? (
        <div className={styles.state}>
          <h3>No sample results</h3>
          <p>This empty state is a local fixture and was not observed in Writesonic.</p>
          <button type="button" onClick={() => setLocalState('default')}>
            Load fictional sample
          </button>
        </div>
      ) : localState === 'error' ? (
        <div role="alert" className={styles.state}>
          <h3>Example report unavailable</h3>
          <p>Simulated error. Retry restores fictional data without a network request.</p>
          <button
            type="button"
            onClick={() => {
              setLocalState('default');
              setNotice('Fictional sample restored locally. No provider success is implied.');
            }}
          >
            Retry locally
          </button>
        </div>
      ) : (
        specimen()
      )}
      {notice && (
        <div role="status" className={styles.notice}>
          <p>{notice}</p>
          <button type="button" aria-label="Dismiss local notice" onClick={() => setNotice('')}>
            ×
          </button>
        </div>
      )}
    </div>
  );
}
