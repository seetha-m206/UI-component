import { useState } from 'react';
import styles from './remaining.module.css';
export type RemainingKind =
  | 'skills'
  | 'usage'
  | 'headers'
  | 'multisite'
  | 'redirects'
  | 'firewall'
  | 'files'
  | 'plans'
  | 'plugins'
  | 'commands'
  | 'branches'
  | 'color'
  | 'toolbar'
  | 'period'
  | 'interval'
  | 'row'
  | 'upgrade';
export interface RemainingProps {
  kind: RemainingKind;
  initialState?: string;
  disabled?: boolean;
}
const formats = ['Link', 'Bold', 'Italic', 'Blockquote', 'Numbered list', 'Bulleted list', 'Code'];
const commands = [
  'Create web page',
  'New agent',
  'Publish website',
  'See version history',
  'Invite collaborators',
  'Browse plugins',
];
const plugins = [
  'Google Sheets',
  'Dither',
  'CMS Export',
  'Renamer',
  'ASCII',
  'Notion',
  'Search Console',
  'Phosphor',
  'HubSpot',
  'CSV Import',
  'Redirect Sync',
  'Code Versions',
];
const gateCopy: Record<string, string> = {
  redirects: 'Redirect existing URLs to new ones to maintain search engine ranking.',
  firewall: 'Redirect or block visitors based on their location.',
  files:
    'Upload well-known files like robots.txt, security.txt, and llms.txt, or serve a static file on a fixed URL.',
  branches: 'Branches let you explore changes, share previews, and publish when you’re ready.',
  upgrade: 'This action requires an upgraded plan.',
};
export function FramerRemaining({
  kind,
  initialState = 'default',
  disabled = false,
}: RemainingProps) {
  const [section, setSection] = useState(initialState === 'credits' ? 'Credits' : 'Bandwidth');
  const [detail, setDetail] = useState(initialState === 'detail');
  const [query, setQuery] = useState(initialState === 'empty' ? 'fictional-no-match' : '');
  const [monthly, setMonthly] = useState(initialState === 'monthly');
  const [period, setPeriod] = useState(
    initialState === 'previous' ? 'September 2026' : 'October 2026'
  );
  const [format, setFormat] = useState(initialState === 'bold' ? 'Bold' : '');
  const [hex, setHex] = useState('FFFFFF');
  const [alpha, setAlpha] = useState('100');
  const [mode, setMode] = useState(initialState === 'gradient' ? 'Linear gradient' : 'Solid');
  const [closed, setClosed] = useState(initialState === 'closed');
  const [notice, setNotice] = useState(
    initialState === 'information' ? 'Fictional local information state. No provider request.' : ''
  );
  const notify = (action: string) =>
    setNotice(`${action} — fictional local simulation. No provider request.`);
  const toolbar = (
    <div className={styles.toolbar} role="toolbar" aria-label="Skill formatting">
      {formats.map((item) => (
        <button
          type="button"
          key={item}
          aria-pressed={format === item}
          onClick={() => {
            setFormat(item);
            notify(`${item} formatting selection`);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
  const interval = (
    <button onClick={() => setMonthly((v) => !v)}>
      Switch to {monthly ? 'yearly' : 'monthly'}
    </button>
  );
  const periodControl = (
    <label>
      Usage month
      <select aria-label="Usage month" value={period} onChange={(e) => setPeriod(e.target.value)}>
        <option>October 2026</option>
        <option>September 2026</option>
        <option>August 2026</option>
      </select>
    </label>
  );
  return (
    <section className={styles.root} aria-label={`Framer ${kind} reconstruction`}>
      <p className={styles.badge}>RECONSTRUCTION · fictional local data</p>
      <fieldset disabled={disabled}>
        {kind === 'skills' && (
          <>
            <div className={styles.row}>
              <h2>Skills</h2>
              <button onClick={() => notify('New skill information')}>New skill information</button>
            </div>
            <button className={styles.full} onClick={() => setDetail((v) => !v)}>
              default <small>Base instructions that are always applied</small>
            </button>
            {detail && (
              <div className={styles.panel}>
                <label>
                  Name
                  <input aria-label="Skill name" value="default" readOnly />
                </label>
                <label>
                  Description
                  <textarea defaultValue="Base instructions that are always applied" readOnly />
                </label>
                <h3>Content</h3>
                {toolbar}
                <label>
                  Skill content
                  <textarea
                    aria-label="Skill content"
                    placeholder="Write or type @ to add references…"
                  />
                </label>
                <p>
                  Local draft only. Formatting controls simulate selection, not rich-text editing.
                </p>
              </div>
            )}
          </>
        )}
        {kind === 'toolbar' && (
          <>
            {toolbar}
            <label>
              Local content
              <textarea aria-label="Local content" placeholder="Fictional instructions…" />
            </label>
            <p>Formatting feedback is simulated. No real skill is edited.</p>
          </>
        )}
        {kind === 'usage' && (
          <>
            <h2>Usage</h2>
            {periodControl}
            <div className={styles.row}>
              {['Bandwidth', 'Credits'].map((item) => (
                <button key={item} aria-pressed={section === item} onClick={() => setSection(item)}>
                  {item}
                </button>
              ))}
            </div>
            {section === 'Bandwidth' ? (
              <>
                <p>Usage is calculated monthly. You’ll be notified when you go over the limit.</p>
                <button onClick={() => notify('Agent analysis entry')}>
                  Analyze usage information
                </button>
                <div className={styles.panel}>
                  <h3>Total bandwidth</h3>
                  <p>Plan limit 1 GB · Over limit</p>
                  <p>No data for the selected month</p>
                </div>
              </>
            ) : (
              <p>
                Credits are shared and limited at the workspace level. Workspace usage information
                is a separate destination.
              </p>
            )}
          </>
        )}
        {kind === 'period' && (
          <>
            {periodControl}
            <p>{period}: No data for the selected month.</p>
            <p>
              Previous months are reconstructed fixture options, not observed provider outcomes.
            </p>
          </>
        )}
        {kind === 'interval' && (
          <>
            {interval}
            <p>{monthly ? 'Per month' : 'Per month, billed yearly'}</p>
            <p>Local comparison state only.</p>
          </>
        )}
        {kind === 'plans' && (
          <>
            <h2>Plans</h2>
            {interval}
            <p className={styles.muted}>
              Amounts below reproduce the 7 October 2026 CA$ UI snapshot. They are not a current
              offer.
            </p>
            <div className={styles.cards}>
              {[
                [
                  'Basic',
                  monthly ? '20' : '14',
                  '1,000 monthly credits · 2 CMS collections · 50 GB bandwidth · 30 site pages · Password protect · Localization add-on',
                ],
                [
                  'Pro',
                  monthly ? '60' : '41',
                  '3,000 monthly credits · 10 CMS collections · 100 GB bandwidth · 150 site pages · Branching · Staging · A/B testing and advanced hosting add-ons',
                ],
                [
                  'Enterprise',
                  'Custom',
                  ' Custom limits · Unlimited editors · Uptime guarantee · Enterprise security, SOC 2 Type 2, ISO 27001, SCIM, SSO labels',
                ],
              ].map(([name, price, copy]) => (
                <article key={name}>
                  <h3>{name}</h3>
                  <strong>{price === 'Custom' ? price : `CA$${price}`}</strong>
                  <p>
                    {name === 'Enterprise'
                      ? 'Annual only'
                      : monthly
                        ? 'Per month'
                        : 'Per month, billed yearly'}
                  </p>
                  {name !== 'Enterprise' && (
                    <p>
                      Free custom domain · 2× credits first month{monthly ? ' · Annual only' : ''}
                    </p>
                  )}
                  <p>{copy}</p>
                  <button onClick={() => notify(`${name} plan information`)}>
                    Plan information
                  </button>
                </article>
              ))}
            </div>
            <p>Additional editor snapshot: CA${monthly ? '40' : '27'} / month.</p>
          </>
        )}
        {(kind === 'headers' || kind === 'multisite' || kind === 'row') && (
          <>
            <div className={styles.row}>
              <h2>{kind === 'multisite' ? 'Multi-site' : 'Headers'}</h2>
              <span>Upgrade</span>
              <button onClick={() => notify('Add rule information')}>Add information</button>
            </div>
            <p>
              {kind === 'multisite'
                ? 'Rewrite origins to host multiple sites under the same domain. Changes take effect after publishing.'
                : 'Configure custom HTTP headers for security settings like X-Frame-Options or similar policies.'}
            </p>
            <div className={styles.table}>
              <table>
                <thead>
                  <tr>
                    <th>Path</th>
                    {kind === 'multisite' ? (
                      <th>Target</th>
                    ) : (
                      <>
                        <th>Name</th>
                        <th>Value</th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Default</td>
                    {kind === 'multisite' ? (
                      <td>Sample Landing</td>
                    ) : (
                      <>
                        <td>11 headers</td>
                        <td>11 values</td>
                      </>
                    )}
                  </tr>
                </tbody>
              </table>
            </div>
            {kind === 'row' && (
              <p>Summary row exposes counts only. Header names and values were not captured.</p>
            )}
          </>
        )}
        {gateCopy[kind] && (
          <>
            {closed ? (
              <button onClick={() => setClosed(false)}>Open {kind} panel</button>
            ) : (
              <div className={styles.panel}>
                <div className={styles.row}>
                  <h2>
                    {kind === 'branches' ? 'Branches' : kind[0].toUpperCase() + kind.slice(1)}
                  </h2>
                  {kind === 'branches' && <button onClick={() => setClosed(true)}>Close</button>}
                </div>
                <p>{gateCopy[kind]}</p>
                <button onClick={() => notify('Upgrade information')}>Upgrade information</button>
                {kind !== 'branches' && (
                  <button onClick={() => notify('Learn more information')}>
                    Learn more information
                  </button>
                )}
              </div>
            )}
          </>
        )}
        {(kind === 'plugins' || kind === 'commands') &&
          (closed ? (
            <button onClick={() => setClosed(false)}>Open palette</button>
          ) : (
            <div
              className={styles.panel}
              role="dialog"
              aria-label={kind === 'plugins' ? 'Plugin browser' : 'Quick actions'}
            >
              <div className={styles.row}>
                <h2>{kind === 'plugins' ? 'Plugins' : 'Quick actions'}</h2>
                <button onClick={() => setClosed(true)}>Close</button>
              </div>
              <label>
                Search
                <input
                  aria-label="Palette search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search…"
                />
              </label>
              {(kind === 'plugins' ? plugins : commands).filter((item) =>
                item.toLowerCase().includes(query.toLowerCase())
              ).length === 0 && <p>No search results</p>}
              <div className={styles.list}>
                {(kind === 'plugins' ? plugins : commands)
                  .filter((item) => item.toLowerCase().includes(query.toLowerCase()))
                  .map((item) => (
                    <button key={item} onClick={() => notify(`${item} information`)}>
                      {item}
                    </button>
                  ))}
              </div>
              {kind === 'plugins' && (
                <button onClick={() => notify('Marketplace information')}>
                  Browse marketplace information
                </button>
              )}
              {query && (
                <button
                  onClick={() =>
                    notify(
                      kind === 'plugins'
                        ? 'Create plugins information'
                        : 'Tutorials and Learn information'
                    )
                  }
                >
                  {kind === 'plugins'
                    ? 'Create plugins information'
                    : 'Watch tutorials and Learn information'}
                </button>
              )}
            </div>
          ))}
        {kind === 'color' && (
          <>
            {closed ? (
              <button onClick={() => setClosed(false)}>Open fill picker</button>
            ) : (
              <div className={styles.panel} role="dialog" aria-label="Fill">
                <div className={styles.row}>
                  <h2>Fill</h2>
                  <button onClick={() => setClosed(true)}>Close</button>
                </div>
                <div className={styles.toolbar}>
                  {['Solid', 'Linear gradient', 'Radial gradient', 'Conic gradient', 'Image'].map(
                    (item) => (
                      <button key={item} aria-pressed={mode === item} onClick={() => setMode(item)}>
                        {item}
                      </button>
                    )
                  )}
                </div>
                <div
                  className={styles.swatch}
                  style={{
                    background:
                      mode === 'Solid' && /^[0-9a-f]{6}$/i.test(hex)
                        ? '#' + hex
                        : 'linear-gradient(90deg,#6a3fba,#09f)',
                  }}
                />
                <div className={styles.row}>
                  <label>
                    HEX
                    <input
                      aria-label="HEX color"
                      value={hex}
                      onChange={(e) => setHex(e.target.value)}
                    />
                  </label>
                  <label>
                    Alpha
                    <input
                      aria-label="Alpha"
                      value={alpha}
                      onChange={(e) => setAlpha(e.target.value)}
                    />
                  </label>
                  <label>
                    Format
                    <select>
                      <option>HEX</option>
                      <option>RGB</option>
                      <option>HSL</option>
                      <option>P3</option>
                    </select>
                  </label>
                </div>
                <button onClick={() => notify('Sample color information')}>
                  Sample color information
                </button>
                <button onClick={() => notify('New style information')}>
                  New style information
                </button>
                <p>Local color changes are reconstructed. No project fill or style is saved.</p>
              </div>
            )}
          </>
        )}
      </fieldset>
      {notice && (
        <p role="status" className={styles.notice}>
          {notice}
        </p>
      )}
    </section>
  );
}
