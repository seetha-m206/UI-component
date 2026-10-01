import { useState } from 'react';
import styles from './se-ranking-controls.module.css';

export function SeRankingProjectPageHeader({ initialMenuOpen = false }: { initialMenuOpen?: boolean }) {
  const [open, setOpen] = useState(initialMenuOpen);
  const [status, setStatus] = useState('');
  return (
    <section className={styles.pageHeader} aria-label="Project page header">
      <nav aria-label="Breadcrumb"><button type="button" onClick={() => setStatus('Project breadcrumb navigation is guarded locally.')}>centilio.com</button><span>›</span><span>Project Overview</span></nav>
      <div><div><h1>Overview</h1><p>centilio.com</p></div><button type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>Widgets ▾</button></div>
      {open && <div className={styles.menu} role="menu"><p>Reconstructed menu · needs verification</p>{['Add widget', 'Arrange widgets', 'Reset layout'].map((item) => <button role="menuitem" type="button" key={item} onClick={() => setStatus(`${item} is guarded locally. No layout change was saved.`)}>{item}</button>)}</div>}
      <p role="status" className={styles.status}>{status}</p>
    </section>
  );
}

export function SeRankingRankingsFilters({ initiallyOpen = '' }: { initiallyOpen?: '' | 'engine' | 'range' }) {
  const [open, setOpen] = useState(initiallyOpen);
  const [engine, setEngine] = useState('Google');
  const [range, setRange] = useState('Last 7 days');
  const [status, setStatus] = useState('');
  const select = (kind: 'engine' | 'range', value: string) => { if (kind === 'engine') setEngine(value); else setRange(value); setOpen(''); setStatus(`${value} selected locally. Live filtering needs verification.`); };
  return (
    <section className={styles.filters} aria-label="Rankings filters">
      <h2>Rankings</h2>
      <div className={styles.filterControl}><button type="button" aria-expanded={open === 'engine'} onClick={() => setOpen(open === 'engine' ? '' : 'engine')}>{engine} ▾</button>{open === 'engine' && <div role="menu" className={styles.menu}><p>Reconstructed options</p>{['Google', 'Bing'].map((value) => <button role="menuitem" type="button" key={value} onClick={() => select('engine', value)}>{value}</button>)}</div>}</div>
      <div className={styles.filterControl}><button type="button" aria-expanded={open === 'range'} onClick={() => setOpen(open === 'range' ? '' : 'range')}>{range} ▾</button>{open === 'range' && <div role="menu" className={styles.menu}><p>Reconstructed options</p>{['Last 7 days', 'Last 30 days', 'Last 3 months'].map((value) => <button role="menuitem" type="button" key={value} onClick={() => select('range', value)}>{value}</button>)}</div>}</div>
      <p role="status" className={styles.status}>{status || 'Filter menu contents need live verification.'}</p>
    </section>
  );
}

export function SeRankingAuditLoadingPanel({ stalled = false }: { stalled?: boolean }) {
  const [status, setStatus] = useState('');
  return (
    <section className={styles.auditCard} aria-label="Website Audit loading">
      <header><h2>Website Audit</h2><span>{stalled ? 'Taking longer than expected' : 'Loading'}</span></header>
      <div className={styles.auditSkeleton}><i /><i /><i /></div>
      {stalled && <button type="button" onClick={() => setStatus('Retry is local only. No audit request was sent.')}>Retry</button>}
      <p role="status" className={styles.status}>{status || (stalled ? 'Synthetic stalled specimen · needs verification.' : 'Observed loading presentation.')}</p>
    </section>
  );
}

export function SeRankingAuditHealthScore({ score = 80, disabled = false }: { score?: number; disabled?: boolean }) {
  const [status, setStatus] = useState('');
  return (
    <section className={styles.auditCard} aria-label="Website Audit score">
      <header><h2>Website Audit</h2></header>
      <div className={styles.score}><strong>{score}</strong><span>Health Score</span></div>
      <button type="button" disabled={disabled} onClick={() => setStatus('Review issues is guarded locally. No provider navigation occurred.')}>Review issues</button>
      <p role="status" className={styles.status}>{status || 'Observed score summary with guarded review action.'}</p>
    </section>
  );
}

export type DropState = 'empty' | 'drag-active' | 'with-text' | 'disabled';

export function SeRankingKeywordFileDrop({ initialState = 'empty' }: { initialState?: DropState }) {
  const [value, setValue] = useState(initialState === 'with-text' ? 'seo software' : '');
  const [status, setStatus] = useState('');
  const disabled = initialState === 'disabled';
  return (
    <section className={`${styles.dropField} ${initialState === 'drag-active' ? styles.dragActive : ''}`} aria-label="Keyword or file input">
      <label htmlFor="se-ranking-keyword-file">Enter keywords or drop a TXT/CSV file</label>
      <input id="se-ranking-keyword-file" disabled={disabled} value={value} placeholder="Enter keywords or drop a TXT/CSV file" onChange={(event) => { setValue(event.target.value); setStatus('Keyword text is stored only in this local fixture.'); }} />
      <button type="button" disabled={disabled} onClick={() => setStatus('File selection is disabled in this local reconstruction.')}>Choose file</button>
      <p role="status" className={styles.status}>{status || (initialState === 'drag-active' ? 'Synthetic drag-active state · no file is uploaded.' : 'Local input. No keyword or file is submitted.')}</p>
    </section>
  );
}

const surveyOptions = ['Organic search (Google, Bing)', 'AI search (ChatGPT, AI Mode etc.)', 'Social media (LinkedIn, YouTube etc.)', 'Paid ad (Google ad, Social ad, etc.)', 'Friends or colleagues', 'Article or blog post', 'Planable', 'SE Ranking webinar or podcast', 'Influencer', 'Conference or meetup', 'Other'];

export function SeRankingSurveyOptionGroup({ initialSelection = '', disabled = false }: { initialSelection?: string; disabled?: boolean }) {
  const [selection, setSelection] = useState(initialSelection);
  return (
    <fieldset className={styles.optionGroup} disabled={disabled}><legend>How did you hear about us?</legend>{surveyOptions.map((option) => <label key={option}><input type="radio" name="survey-source" checked={selection === option} onChange={() => setSelection(option)} />{option}</label>)}<p role="status" className={styles.status}>{selection ? `${selection} selected locally. No response was submitted.` : 'No response selected.'}</p></fieldset>
  );
}

export function SeRankingSurveyActionFooter({ hasSelection = false, disabled = false }: { hasSelection?: boolean; disabled?: boolean }) {
  const [status, setStatus] = useState('');
  return (
    <section className={styles.surveyFooter} aria-label="Survey actions"><button type="button" disabled={disabled} onClick={() => setStatus('Skip is guarded locally. No survey event was sent.')}>Skip</button><button type="button" disabled={disabled || !hasSelection} onClick={() => setStatus('Complete is guarded locally. No survey response was sent.')}>Complete</button><p role="status" className={styles.status}>{status || (hasSelection ? 'Synthetic enabled Complete state · needs verification.' : 'Observed no-selection action state.')}</p></section>
  );
}
