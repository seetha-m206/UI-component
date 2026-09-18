import { Link } from 'react-router-dom';
import { allComponents, getBrands, getGroup } from '@utils/loadComponents';
import styles from './OverviewPage.module.css';

export function OverviewPage() {
  const brands = getBrands();
  const grouped = new Map<string, typeof allComponents>();
  for (const entry of allComponents) {
    const group = getGroup(entry);
    if (!grouped.has(group)) grouped.set(group, []);
    grouped.get(group)!.push(entry);
  }
  const sortedGroups = Array.from(grouped.entries()).sort(([a], [b]) => a.localeCompare(b));

  return (
    <div>
      <div className={styles.hero}>
        <h1 className={styles.title}>UI Component Library</h1>
        <p>
          A cross-product catalogue of reusable UI components, reverse-engineered from live
          application exploration (DOM, CSS, JavaScript, network behavior) rather than marketing
          pages. Built from the methodology in{' '}
          <code>Complete Product Documentation &amp; Competitor Reverse-Engineering Task.md</code>{' '}
          and <code>seetha_research_library.md</code>. Each entry documents Product → Screen →
          Component → Action → Behavior → Technical Data, tagged as FACT/OBSERVATION per the
          library's evidence guidelines.
        </p>
        <p className={styles.meta}>
          {allComponents.length} component pages · {brands.length} product
          {brands.length === 1 ? '' : 's'} documented ({brands.join(', ')})
        </p>
      </div>

      {sortedGroups.map(([group, entries]) => (
        <div key={group} className={styles.groupSection}>
          <h2 className={styles.groupTitle}>{group}</h2>
          {entries.map((entry) => (
            <Link key={`${entry.brand}/${entry.id}`} to={entry.url} className={styles.row}>
              <span className={styles.rowTitle}>{entry.frontmatter.component}</span>
              <span className={styles.rowSummary}>{entry.frontmatter.summary}</span>
              {entry.frontmatter.status !== 'complete' && (
                <span className={`pill pill--${entry.frontmatter.status}`}>
                  {entry.frontmatter.status}
                </span>
              )}
              <span className={styles.rowBrand}>{entry.frontmatter.source_product}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
