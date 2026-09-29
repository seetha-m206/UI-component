import { useState } from 'react';
import styles from '../semrush-shared.module.css';

export type SemrushAiSection = 'overview' | 'competitors' | 'prompts' | 'brand';
export interface SemrushAiVisibilityShellProps {
  initialSection?: SemrushAiSection;
  disabled?: boolean;
  onSectionChange?: (section: SemrushAiSection) => void;
}

const sectionLabels: Record<SemrushAiSection, string> = {
  overview: 'Visibility Overview',
  competitors: 'Competitor Research',
  prompts: 'Prompt Research',
  brand: 'Brand Performance',
};

export function SemrushAiVisibilityShell({
  initialSection = 'overview',
  disabled = false,
  onSectionChange,
}: SemrushAiVisibilityShellProps) {
  const [section, setSection] = useState(initialSection);
  const choose = (next: SemrushAiSection) => {
    if (!disabled) {
      setSection(next);
      onSectionChange?.(next);
    }
  };
  return (
    <div className={styles.root} data-disabled={disabled}>
      <header className={styles.topbar}>
        <strong className={styles.brand}>Semrush</strong>
        <span className={styles.crumb}>AI Toolkit / {sectionLabels[section]}</span>
        <div className={styles.actions}>
          <button className={styles.ghost} disabled={disabled}>
            How it works
          </button>
          <button className={styles.ghost} disabled={disabled}>
            Export PDF
          </button>
        </div>
      </header>
      <div className={styles.layout}>
        <nav className={styles.rail} aria-label="Product areas">
          {['Home', 'SEO', 'AI', 'Traffic', 'Local', 'Social'].map((item) => (
            <button
              key={item}
              className={`${styles.railButton} ${item === 'AI' ? styles.railButtonActive : ''}`}
              disabled={disabled}
            >
              {item}
            </button>
          ))}
        </nav>
        <aside className={styles.sidebar} aria-label="AI Toolkit navigation">
          <div className={styles.sidebarTitle}>AI Toolkit</div>
          <div className={styles.group}>AI Analysis</div>
          {(['overview', 'competitors', 'prompts'] as SemrushAiSection[]).map((item) => (
            <button
              key={item}
              className={`${styles.navItem} ${section === item ? styles.navActive : ''}`}
              aria-current={section === item ? 'page' : undefined}
              disabled={disabled}
              onClick={() => choose(item)}
            >
              {sectionLabels[item]}
            </button>
          ))}
          <div className={styles.group}>Brand Performance</div>
          <button
            className={`${styles.navItem} ${section === 'brand' ? styles.navActive : ''}`}
            aria-current={section === 'brand' ? 'page' : undefined}
            disabled={disabled}
            onClick={() => choose('brand')}
          >
            Brand Performance
          </button>
          {['Perception', 'Narrative Drivers', 'Questions'].map((item) => (
            <button key={item} className={styles.navItem} disabled={disabled}>
              {item}
            </button>
          ))}
          <div className={styles.group}>Boost & Monitor</div>
          {['Site Audit', 'Prompt Tracking', 'Content Creation'].map((item) => (
            <button key={item} className={styles.navItem} disabled={disabled}>
              {item}
            </button>
          ))}
        </aside>
        <main className={styles.main}>
          <p className={styles.subtle}>AI Toolkit</p>
          <h2 className={styles.pageTitle}>{sectionLabels[section]}</h2>
          <div className={styles.filterbar}>
            <input
              className={styles.input}
              aria-label="Domain"
              defaultValue="example.test"
              disabled={disabled}
            />
            <select className={styles.select} aria-label="Region" disabled={disabled}>
              <option>Worldwide</option>
              <option>United States</option>
            </select>
            <select className={styles.select} aria-label="AI platform" disabled={disabled}>
              <option>All AI platforms</option>
              <option>ChatGPT</option>
            </select>
          </div>
          <div className={styles.card}>
            <h3>{sectionLabels[section]}</h3>
            <p className={styles.subtle}>
              The selected workspace replaces the report body while the global product rail, AI
              section navigation, and analysis controls remain stable.
            </p>
            <div className={styles.empty}>
              {section === 'competitors'
                ? 'Add competitors to compare visibility.'
                : section === 'prompts'
                  ? 'Enter a topic to discover relevant prompts.'
                  : section === 'brand'
                    ? 'Brand insights and competitive benchmarks.'
                    : 'Visibility metrics, trends, topics, and cited sources.'}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
