import { useMemo, useState } from 'react';
import styles from '../semrush-action-primitives.module.css';

export interface SemrushBacklinkAuditProjectsProps {
  loading?: boolean;
  empty?: boolean;
}

const projects = [
  { name: 'Northstar Docs', domain: 'docs.northstar.example' },
  { name: 'Atlas Store', domain: 'shop.atlas.example' },
];

export function SemrushBacklinkAuditProjects({ loading = false, empty = false }: SemrushBacklinkAuditProjectsProps) {
  const [query, setQuery] = useState('');
  const [notice, setNotice] = useState('No live action taken.');
  const rows = useMemo(() => (empty ? [] : projects.filter((item) => `${item.name} ${item.domain}`.toLowerCase().includes(query.toLowerCase()))), [empty, query]);
  return <div className={styles.stage}><section className={styles.workspace} aria-label="Backlink Audit projects specimen">
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb"><span>Home</span><span>›</span><span>SEO</span><span>›</span><strong>Backlink Audit</strong></nav>
    <div className={styles.workspaceHeader}><h2>Backlink Audit</h2><button className={`${styles.button} ${styles.primary}`} onClick={() => setNotice('Create SEO project is guarded · needs verification.')}>＋ Create SEO project</button></div>
    <label className={styles.search}><span aria-hidden="true">⌕</span><input aria-label="Project name or domain" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Project name or domain" /></label>
    <table className={styles.dataTable}><caption className={styles.srOnly}>Backlink Audit projects</caption><thead><tr><th>Projects ↑</th><th>Toxicity Score</th><th>Emails to send</th><th>To Follow Up</th><th>To Disavow</th></tr></thead><tbody>
      {loading ? Array.from({ length: 3 }).map((_, row) => <tr key={row}>{Array.from({ length: 5 }).map((__, cell) => <td key={cell}><div className={styles.skeleton} aria-label="Loading" /></td>)}</tr>) : rows.map((project) => <tr key={project.domain}><td><strong>{project.name}</strong><small>{project.domain}</small></td><td><button className={`${styles.button} ${styles.primary}`} onClick={() => setNotice(`${project.name} setup wizard opened locally.`)}>Set up</button></td><td>—</td><td>—</td><td>—</td></tr>)}
    </tbody></table>
    {!loading && rows.length === 0 && <div className={styles.empty}><strong>No matching projects</strong><small>Clear the local search to restore the fictional rows.</small><button className={`${styles.button} ${styles.secondary}`} onClick={() => setQuery('')}>Clear search</button></div>}
    <div className={styles.status} role="status">{notice}</div>
  </section></div>;
}
