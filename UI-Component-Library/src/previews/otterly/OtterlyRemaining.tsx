import { useState } from 'react';
import styles from './otterly.module.css';

export type OtterlyRemainingVariant =
  | 'date-range' | 'tags-empty' | 'tag-dialog' | 'prompt-create'
  | 'data-source' | 'workspace-usage' | 'workspace-create'
  | 'team-invite' | 'api-keys-empty';

const colors = ['Magenta', 'Blue', 'Cyan', 'Light blue', 'Gold', 'Green'];
const presets = ['Month to date', 'Last month', 'Last 14 days', 'Last 30 days', 'Last 60 days', 'Last 90 days'];

export function OtterlyRemaining({ variant }: { variant: OtterlyRemainingVariant }) {
  const [notice, setNotice] = useState('');
  const [dialogOpen, setDialogOpen] = useState(variant === 'tag-dialog' || variant === 'workspace-create' || variant === 'team-invite');
  const [color, setColor] = useState('');
  const [name, setName] = useState('');
  const [prompts, setPrompts] = useState(['']);
  const [datePreset, setDatePreset] = useState('Last 14 days');
  const [dateOpen, setDateOpen] = useState(true);
  const action = (label: string) => setNotice(`${label} · fictional local preview only`);
  const frame = (title: string, body: React.ReactNode) => <section className={styles.frame}>
    <div className={styles.kicker}>OtterlyAI pattern · fictional data</div><h2>{title}</h2>{body}
    {notice && <p className={styles.notice} role="status">{notice}</p>}
  </section>;

  if (variant === 'date-range') return frame('Report date range picker', <>
    <button type="button" aria-expanded={dateOpen} onClick={() => setDateOpen(!dateOpen)}>{datePreset} ⌄</button>
    {dateOpen && <div className={styles.dateGrid}>
      <div>{presets.map((preset) => <button type="button" key={preset} className={preset === datePreset ? styles.active : ''}
        onClick={() => { setDatePreset(preset); setDateOpen(false); }}>{preset}</button>)}</div>
      {['Sep 2026', 'Oct 2026'].map((month) => <div className={styles.card} key={month}>
        <strong>{month}</strong><div className={styles.days}>{Array.from({ length: 28 }, (_, i) => <span key={i}>{i + 1}</span>)}</div>
      </div>)}
    </div>}
    <p className={styles.note}>The provider showed a two-month calendar. Dates here are illustrative and do not change a report.</p>
  </>);

  if (variant === 'tags-empty' || variant === 'tag-dialog') return frame('Manage tags', <>
    <div className={styles.toolbar}><input aria-label="Search by tag name" type="search" placeholder="Search by tag name" />
      <button type="button" className={styles.primary} onClick={() => setDialogOpen(true)}>Create Tag</button></div>
    <div className={styles.tableWrap}><table><thead><tr><th>Tag</th><th>Color</th><th>Prompts connected</th></tr></thead></table></div>
    <div className={styles.empty}>No data</div>
    {dialogOpen && <div className={styles.dialog} role="dialog" aria-label="Create tag">
      <div className={styles.footer}><strong>Create tag</strong><button type="button" aria-label="Close" onClick={() => setDialogOpen(false)}>×</button></div>
      <label>Name<input aria-label="Tag name" value={name} onChange={(event) => setName(event.target.value)} /></label>
      <label>Color<select aria-label="Tag color" value={color} onChange={(event) => setColor(event.target.value)}>
        <option value="">Select color</option>{colors.map((item) => <option key={item}>{item}</option>)}</select></label>
      <div className={styles.footer}><button type="button" onClick={() => setDialogOpen(false)}>Cancel</button>
        <button type="button" className={styles.primary} disabled={!name || !color} onClick={() => action('Create tag')}>Create</button></div>
    </div>}
  </>);

  if (variant === 'prompt-create') return frame('Add Prompts', <>
    <p>Enter prompts individually or use the visible import entry.</p>
    {prompts.map((prompt, index) => <div className={styles.row} key={index}>
      <input aria-label={`Prompt ${index + 1}`} placeholder="Type here" value={prompt}
        onChange={(event) => setPrompts(prompts.map((value, i) => i === index ? event.target.value : value))} />
      <button type="button" aria-label={`Remove prompt ${index + 1}`} onClick={() => setPrompts(prompts.length === 1 ? [''] : prompts.filter((_, i) => i !== index))}>×</button>
      <button type="button" aria-label="Add another prompt" onClick={() => setPrompts([...prompts, ''])}>+</button>
    </div>)}
    <button type="button" onClick={() => action('Import from file entry')}>Import from file</button>
    <div className={styles.footer}><button type="button" onClick={() => action('Cancel')}>Cancel</button>
      <button type="button" className={styles.primary} disabled={!prompts.some(Boolean)} onClick={() => action('Save prompts')}>Save prompts</button></div>
    <div className={styles.card}>Need help creating effective prompts? <button type="button" onClick={() => action('AI Prompt Research')}>AI Prompt Research</button></div>
  </>);

  if (variant === 'data-source') return frame('Add data source', <>
    <p>Analyze website traffic to understand AI visits and usage.</p>
    <div className={styles.card}><label>Logs provider<select disabled aria-label="Logs provider"><option>Select provider</option></select></label>
      <small>Provider options and connection steps were not exposed in this observed state.</small></div>
  </>);

  if (variant === 'workspace-usage') return frame('Workspace usage and allocations', <>
    <div className={styles.card}><h3>Usage Overview</h3><p>Track total resources, assignments, and usage.</p>
      <strong>Prompts</strong><progress value={3} max={10} aria-label="Prompts used" />
      <span>3 used · 10 assigned · 0 unassigned</span><strong>GEO URL audits</strong>
      <progress value={0} max={20} aria-label="GEO URL audits used" /><span>0 used · 20 assigned · 0 unassigned</span></div>
    <div className={styles.card}><div className={styles.footer}><strong>Manage workspace allocations</strong>
      <button type="button" onClick={() => action('Manage workspaces entry')}>Manage workspaces</button></div>
      <div className={styles.tableWrap}><table><thead><tr><th>Workspace</th><th>Assigned prompts</th><th>Assigned GEO URL audits</th></tr></thead>
      <tbody><tr><td>Northstar Workspace</td><td>10</td><td>20</td></tr></tbody></table></div></div>
  </>);

  if (variant === 'workspace-create') return frame('New Workspace entry', <>
    <button type="button" onClick={() => setDialogOpen(true)}>+ New Workspace</button>
    {dialogOpen && <div className={styles.dialog} role="dialog" aria-label="Add new workspace">
      <div className={styles.footer}><strong>Add new workspace</strong><button type="button" aria-label="Close" onClick={() => setDialogOpen(false)}>×</button></div>
      <label>Workspace Name<input aria-label="Workspace Name" value={name} onChange={(event) => setName(event.target.value)} /></label>
      <div className={styles.empty}>Image/Icon for Workspace<br /><small>Drag & Drop or Choose file to upload</small></div>
      <div className={styles.footer}><button type="button" onClick={() => setDialogOpen(false)}>Cancel</button>
        <button type="button" className={styles.primary} disabled={!name} onClick={() => action('Next workspace step')}>Next</button></div>
    </div>}
  </>);

  if (variant === 'team-invite') return frame('Team management invite', <>
    <div className={styles.tableWrap}><table><thead><tr><th>User</th><th>Email</th><th>Role</th><th>Status</th><th>Workspaces</th></tr></thead></table></div>
    <button type="button" onClick={() => setDialogOpen(true)}>Invite Team Member</button>
    {dialogOpen && <div className={styles.dialog} role="dialog" aria-label="Invite new team member">
      <div className={styles.footer}><strong>Invite new team member</strong><button type="button" aria-label="Close" onClick={() => setDialogOpen(false)}>×</button></div>
      <label>Email<input type="email" aria-label="Invite email" placeholder="teammate@example.com" /></label>
      <label>Role<select aria-label="Invite role"><option>Member</option><option>Admin</option></select></label>
      <label>Workspace<select aria-label="Invite workspace"><option>Select</option><option>Northstar Workspace</option></select></label>
      <div className={styles.footer}><button type="button" onClick={() => setDialogOpen(false)}>Cancel</button><button type="button" disabled>Send invite</button></div>
    </div>}
  </>);

  return frame('API keys empty state', <>
    <p>Create and manage API keys to integrate report data into workflows.</p>
    <div className={styles.empty}><strong>No API keys yet</strong><p>You do not have any API keys.</p>
      <button type="button" onClick={() => action('Create key entry')}>Create key</button></div>
  </>);
}
