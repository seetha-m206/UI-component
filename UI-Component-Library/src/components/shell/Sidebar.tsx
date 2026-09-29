import { useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Boxes, ChevronDown, ChevronRight, Layers } from 'lucide-react';
import { allComponents, getBrandLabel, getGroup, getProductGroup } from '@utils/loadComponents';
import { extractCrossLinks, extractLimitations } from '@utils/evidenceExtraction';
import type { ComponentEntry } from '@models/content.types';
import styles from './Sidebar.module.css';

function matches(haystack: string, needle: string): boolean {
  return haystack.toLowerCase().includes(needle.toLowerCase());
}

interface SidebarProps {
  /** Owned by Layout and shared with Header's search input, so both stay in sync. */
  query: string;
}

export function Sidebar({ query }: SidebarProps) {
  const location = useLocation();

  const currentEntry = useMemo(() => {
    const [, brand, id] = location.pathname.split('/');
    if (!brand || !id) return null;
    return allComponents.find((e) => e.brand === brand && e.id === id) ?? null;
  }, [location.pathname]);

  const currentProductGroup = currentEntry ? getProductGroup(currentEntry.brand) : null;
  const currentBrandLabel = currentEntry ? getBrandLabel(currentEntry.brand) : null;
  const currentCategory = currentEntry ? getGroup(currentEntry) : null;

  // Only the product group, brand group, and UI-category group containing
  // the current page are open by default; everything else is collapsed
  // until clicked. Toggling a group flips it relative to that default
  // rather than tracking "open" directly, so navigating to a new page
  // re-derives the right default on every render with no effect needed to
  // keep it in sync with the route — this same pattern is reused at all
  // three nesting levels (product group -> brand -> UI category) so a new
  // brand added to a product group doesn't dump every other brand's items
  // into view at once, and a new product group added later behaves the
  // same way brands already do.
  const [toggledGroups, setToggledGroups] = useState<Set<string>>(new Set());
  const [toggledBrands, setToggledBrands] = useState<Set<string>>(new Set());
  const [toggledCategories, setToggledCategories] = useState<Set<string>>(new Set());

  function toggleGroup(groupLabel: string) {
    setToggledGroups((prev) => {
      const next = new Set(prev);
      if (next.has(groupLabel)) next.delete(groupLabel);
      else next.add(groupLabel);
      return next;
    });
  }

  function toggleBrand(brandLabel: string) {
    setToggledBrands((prev) => {
      const next = new Set(prev);
      if (next.has(brandLabel)) next.delete(brandLabel);
      else next.add(brandLabel);
      return next;
    });
  }

  function toggleCategory(key: string) {
    setToggledCategories((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

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

  // Top-level grouping is by product category (e.g. "Forms") — this library
  // is meant to keep growing into more brands, so brands sharing a category
  // (every current one is a form builder) nest under one collapsible group
  // instead of flooding the sidebar with an ever-longer flat brand list.
  // Within each product group, brands still group separately (a component
  // under "Zoho Forms" never mixes with one from "Typeform"), and within
  // each brand, components are further grouped by UI category, same as
  // before this change.
  const groupedByProductGroup = useMemo(() => {
    const groupMap = new Map<string, Map<string, Map<string, ComponentEntry[]>>>();
    for (const entry of filtered) {
      const groupLabel = getProductGroup(entry.brand);
      const brandLabel = getBrandLabel(entry.brand);
      const category = getGroup(entry);
      if (!groupMap.has(groupLabel)) groupMap.set(groupLabel, new Map());
      const brandMap = groupMap.get(groupLabel)!;
      if (!brandMap.has(brandLabel)) brandMap.set(brandLabel, new Map());
      const categoryMap = brandMap.get(brandLabel)!;
      if (!categoryMap.has(category)) categoryMap.set(category, []);
      categoryMap.get(category)!.push(entry);
    }
    return Array.from(groupMap.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([groupLabel, brandMap]) => ({
        groupLabel,
        brands: Array.from(brandMap.entries())
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([brandLabel, categoryMap]) => ({
            brandLabel,
            categories: Array.from(categoryMap.entries()).sort(([a], [b]) => a.localeCompare(b)),
          })),
      }));
  }, [filtered]);

  return (
    <nav className={styles.sidebar} aria-label="Component library navigation">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? `${styles.topLink} ${styles.navLinkActive}` : styles.topLink
        }
      >
        Overview
      </NavLink>

      {groupedByProductGroup.length === 0 && (
        <p className={styles.emptyState}>No components match “{query}”.</p>
      )}

      {groupedByProductGroup.map(({ groupLabel, brands }) => {
        // While searching, force every matching product group open — a
        // collapsed group would otherwise hide the very results the search
        // found. Otherwise, only the group containing the current page (or
        // the sole group, while there's only one) opens by default.
        const groupDefaultOpen = groupLabel === currentProductGroup || groupedByProductGroup.length === 1;
        const groupOpen =
          query.trim() !== ''
            ? true
            : toggledGroups.has(groupLabel)
              ? !groupDefaultOpen
              : groupDefaultOpen;
        return (
          <div key={groupLabel} className={styles.productGroup}>
            <button
              type="button"
              className={styles.productGroupLabel}
              onClick={() => toggleGroup(groupLabel)}
              aria-expanded={groupOpen}
            >
              {groupOpen ? (
                <ChevronDown size={14} className={styles.productGroupChevron} aria-hidden="true" />
              ) : (
                <ChevronRight size={14} className={styles.productGroupChevron} aria-hidden="true" />
              )}
              <Boxes size={14} className={styles.productGroupIcon} aria-hidden="true" />
              {groupLabel}
            </button>
            {groupOpen &&
              brands.map(({ brandLabel, categories }) => {
                const brandDefaultOpen = brandLabel === currentBrandLabel;
                const brandOpen =
                  query.trim() !== ''
                    ? true
                    : toggledBrands.has(brandLabel)
                      ? !brandDefaultOpen
                      : brandDefaultOpen;
                return (
                  <div key={brandLabel} className={styles.brandGroup}>
                    <button
                      type="button"
                      className={styles.brandLabel}
                      onClick={() => toggleBrand(brandLabel)}
                      aria-expanded={brandOpen}
                    >
                      {brandOpen ? (
                        <ChevronDown size={14} className={styles.brandChevron} aria-hidden="true" />
                      ) : (
                        <ChevronRight size={14} className={styles.brandChevron} aria-hidden="true" />
                      )}
                      <Layers size={14} className={styles.brandIcon} aria-hidden="true" />
                      {brandLabel}
                    </button>
                    {brandOpen &&
                      categories.map(([category, entries]) => {
                        const categoryKey = `${brandLabel}::${category}`;
                        const categoryDefaultOpen =
                          brandLabel === currentBrandLabel && category === currentCategory;
                        const categoryOpen =
                          query.trim() !== ''
                            ? true
                            : toggledCategories.has(categoryKey)
                              ? !categoryDefaultOpen
                              : categoryDefaultOpen;
                        return (
                          <div key={category} className={styles.categoryGroup}>
                            <button
                              type="button"
                              className={styles.categoryLabel}
                              onClick={() => toggleCategory(categoryKey)}
                              aria-expanded={categoryOpen}
                            >
                              {categoryOpen ? (
                                <ChevronDown
                                  size={12}
                                  className={styles.categoryChevron}
                                  aria-hidden="true"
                                />
                              ) : (
                                <ChevronRight
                                  size={12}
                                  className={styles.categoryChevron}
                                  aria-hidden="true"
                                />
                              )}
                              <span>{category}</span>
                            </button>
                            {categoryOpen &&
                              entries.map((entry) => (
                                <NavLink
                                  key={`${entry.brand}/${entry.id}`}
                                  to={entry.url}
                                  className={({ isActive }) =>
                                    isActive
                                      ? `${styles.navLink} ${styles.navLinkActive}`
                                      : styles.navLink
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
                        );
                      })}
                  </div>
                );
              })}
          </div>
        );
      })}
    </nav>
  );
}
