import { useState } from 'react';
import { AlertTriangle, Bot, CheckCircle2, CircleDashed, Filter, Search, Sparkles } from 'lucide-react';
import styles from './intercom-fin-deep-audit.module.css';

export interface IntercomFinAuditRecord {
  id: string;
  parentTitle: string;
  level: string;
  category: string;
  observed: boolean;
  summary: string;
  actions: readonly string[];
  states: readonly string[];
  screenshot: string | null;
}

export function IntercomFinDeepAuditPreview({ record, mode = 'evidence', disabled = false }: { record: IntercomFinAuditRecord; mode?: 'evidence' | 'boundary'; disabled?: boolean }) {
  const [notice, setNotice] = useState(mode === 'boundary' ? 'Provider writes are blocked in this fictional fixture.' : '');
  const act = (label: string) => setNotice(`${label} changed this local preview only.`);
  return <div className={styles.root}>
    <header><span className={styles.mark}>I</span><strong>{record.parentTitle}</strong><span className={styles.badge}>FICTIONAL FIXTURE</span></header>
    <div className={styles.body}>
      <aside>{['Home','Inbox','Fin AI Agent','Knowledge','Reports','Contacts'].map((label, index) => <button key={label} aria-pressed={index === 2} onClick={() => act(label)} disabled={disabled}>{index === 2 ? <Bot /> : <span />}{label}</button>)}</aside>
      <main>
        <div className={styles.title}><div><small>{record.category}</small><h2>{record.parentTitle}</h2><p>{record.summary}</p></div><button disabled={disabled} onClick={() => act('Operator')}><Sparkles /> Operator</button></div>
        {record.level === 'loading' ? <section className={styles.loading}><CircleDashed /><i /><i /><i /></section> :
         record.level === 'empty' ? <section className={styles.empty}><Search /><h3>No fictional records yet</h3><p>This local state never queries Intercom.</p></section> :
         record.level === 'error' ? <section className={styles.error}><AlertTriangle /><h3>Provider error not observed</h3><p>This boundary is an explicit reconstruction.</p></section> :
         record.level === 'atomic' ? <section className={styles.chips}>{['Button','Field','Menu','Card','Row','Badge'].map(x => <button key={x} disabled={disabled} onClick={() => act(x)}>{x}</button>)}</section> :
         record.level === 'state' ? <section className={styles.states}>{['Default','Selected','Disabled','Expanded'].map((x,i) => <button key={x} disabled={disabled || i===2} aria-pressed={i===1} onClick={() => act(x)}>{x}</button>)}</section> :
         record.level === 'action' ? <section className={styles.actions}>{record.actions.map(x => <button key={x} disabled={disabled} onClick={() => act(x.split('|').pop() || 'Action')}>{x.split('|').pop()}</button>)}</section> :
         record.level === 'interaction' ? <section className={styles.interaction}><button aria-expanded="true" disabled={disabled} onClick={() => act('Filter')}><Filter /> Filters</button><div><input aria-label="Search fictional options" placeholder="Search" /><button disabled={disabled} onClick={() => act('Fictional option')}>Fictional option</button><button disabled>Provider write disabled</button></div></section> :
         <section className={styles.canvas}><div className={styles.toolbar}><input aria-label="Search fictional data" placeholder="Search" disabled /><button disabled={disabled} onClick={() => act('Local action')}>Local action</button></div><div className={styles.cards}>{record.states.slice(0,3).map(x => <article key={x}><CheckCircle2 /><span>{x.split('|').pop()}</span></article>)}</div></section>}
        {record.screenshot && <details><summary>Observed screenshot reference</summary><img src={record.screenshot} alt={`${record.parentTitle} observed authenticated state`} /></details>}
        <div className={styles.notice} role="status">{notice || 'Explore safely. All controls remain local.'}</div>
      </main>
    </div>
  </div>;
}
