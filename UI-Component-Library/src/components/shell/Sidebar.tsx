import { useMemo, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { allComponents, getBrandLabel, getGroup } from '@utils/loadComponents';
import { extractCrossLinks, extractLimitations } from '@utils/evidenceExtraction';
import type { ComponentEntry } from '@models/content.types';
import styles from './Sidebar.module.css';

function matches(haystack: string, needle: string): boolean {
  return haystack.toLowerCase().includes(needle.toLowerCase());
}

export function Sidebar() {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = useMemo(() => {
    if (!query.trim()) return allComponents;
    return allComponents.filter((entry) => {
      const { component, ui_category, source_product, summary, evidence_state } = entry.frontmatter;
      const findings = extractLimitations(entry.sections).join(' ');
      const related = extractCrossLinks(entry).join(' ');
      return [
        component,
        ui_category,
        source_product,
        summary,
        entry.id,
        evidence_state,
        findings,
        related,
      ]
        .filter(Boolean)
        .some((field) => matches(field, query));
    });
  }, [query]);

  // Top-level grouping is by product (brand) — this site spans multiple
  // products now, so a component listed under "Zoho Forms" should never mix
  // with one from "Typeform" at the same nav level. Within each brand,
  // components are further grouped by UI category, same as before.
  const groupedByBrand = useMemo(() => {
    const brandMap = new Map<string, Map<string, ComponentEntry[]>>();
    for (const entry of filtered) {
      const brandLabel = getBrandLabel(entry.brand);
      const category = getGroup(entry);
      if (!brandMap.has(brandLabel)) brandMap.set(brandLabel, new Map());
      const categoryMap = brandMap.get(brandLabel)!;
      if (!categoryMap.has(category)) categoryMap.set(category, []);
      categoryMap.get(category)!.push(entry);
    }
    return Array.from(brandMap.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([brandLabel, categoryMap]) => ({
        brandLabel,
        categories: Array.from(categoryMap.entries()).sort(([a], [b]) => a.localeCompare(b)),
      }));
  }, [filtered]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Escape') {
      setQuery('');
    }
  }

  return (
    <nav className={styles.sidebar} aria-label="Component library navigation">
      <NavLink to="/" className={styles.identity}>
        <div className={styles.identityOrg}>Seetha Research Library</div>
        <div className={styles.identityName}>UI Component Library</div>
      </NavLink>

      <div className={styles.searchWrap}>
        <label htmlFor="component-search" className="sr-only">
          Search components
        </label>
        <input
          ref={inputRef}
          id="component-search"
          type="search"
          className={styles.searchInput}
          placeholder="Search components…"
          aria-label="Search components"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? `${styles.topLink} ${styles.navLinkActive}` : styles.topLink
        }
      >
        Overview
      </NavLink>

      {groupedByBrand.length === 0 && (
        <p className={styles.emptyState}>No components match “{query}”.</p>
      )}

      {groupedByBrand.map(({ brandLabel, categories }) => (
        <div key={brandLabel} className={styles.brandGroup}>
          <div className={styles.brandLabel}>{brandLabel}</div>
          {categories.map(([category, entries]) => (
            <div key={category} className={styles.categoryGroup}>
              <div className={styles.groupLabel}>{category}</div>
              {entries.map((entry) => (
                <NavLink
                  key={`${entry.brand}/${entry.id}`}
                  to={entry.url}
                  className={({ isActive }) =>
                    isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
                  }
                >
                  <span>{entry.frontmatter.component}</span>
                  {entry.frontmatter.status !== 'complete' && (
                    <span className={`pill pill--${entry.frontmatter.status}`}>
                      {entry.frontmatter.status}
                    </span>
                  )}
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      ))}
    </nav>
  );
}
