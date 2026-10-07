import { parseComponentMarkdown } from './parseComponentMarkdown';
import type { ComponentEntry } from '@models/content.types';

// Eagerly import every component markdown file across every brand folder as raw text.
const modules = import.meta.glob('/src/content/brands/*/components/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

function loadAllComponents(): ComponentEntry[] {
  const entries: ComponentEntry[] = [];
  for (const [path, raw] of Object.entries(modules)) {
    const match = path.match(/\/brands\/([^/]+)\/components\/([^/]+)\.md$/);
    if (!match) continue;
    const [, brand, id] = match;
    entries.push(parseComponentMarkdown(raw, id, brand));
  }
  return entries.sort((a, b) => a.frontmatter.component.localeCompare(b.frontmatter.component));
}

export const allComponents = loadAllComponents();

export function getBrands(): string[] {
  return Array.from(new Set(allComponents.map((c) => c.brand))).sort();
}

export function getComponentsByBrand(brand: string): ComponentEntry[] {
  return allComponents.filter((c) => c.brand === brand);
}

export function getComponent(brand: string, id: string): ComponentEntry | undefined {
  return allComponents.find((c) => c.brand === brand && c.id === id);
}

/**
 * Display-level canonicalization of UI-category group names. Records are
 * captured across many sessions (and machines), so trivially-equivalent
 * spellings of the same group drift apart ("Account / Settings" vs
 * "Account and Settings", "Analytics/Reporting" vs "Analytics & Reporting").
 * This folds only unambiguous synonyms for presentation — the records'
 * own `ui_category` frontmatter is never rewritten (per the standing
 * "relabel categories, keep leaf names" decision), so Research-Library
 * stays the untouched source of truth.
 */
const GROUP_ALIASES: Record<string, string> = {
  'Account / Settings': 'Account & Settings',
  'Account/Settings': 'Account & Settings',
  'Account and Settings': 'Account & Settings',
  Analytics: 'Analytics & Reporting',
  'Analytics/Reporting': 'Analytics & Reporting',
  'Actions & Controls': 'Actions',
  'Feedback & Status': 'Feedback',
  'Feedback and Status': 'Feedback',
  Filters: 'Filtering',
  Input: 'Inputs',
  'Search and Discovery': 'Search & Discovery',
  'Search and Filtering': 'Search & Filtering',
  'Filtering & Search': 'Search & Filtering',
};

export function getGroup(entry: ComponentEntry): string {
  const raw = entry.frontmatter.ui_category?.split('>')[0]?.trim() || 'Uncategorized';
  return GROUP_ALIASES[raw] ?? raw;
}

/** Derives a display label from a brand slug (e.g. "zoho-forms" -> "Zoho Forms").
 * Generic on purpose — new brands need no code change to get a sensible label. */
export function getBrandLabel(brand: string): string {
  return brand
    .split('-')
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : word))
    .join(' ');
}

/**
 * Product-category grouping, one level above brand — e.g. every current
 * brand (Zoho Forms, Typeform, Paperform, Google Forms) is a form builder,
 * so they all group under "Forms" in the sidebar. This library is expected
 * to keep growing into more brands (see Research-Library's own product
 * categories in `00-Framework/category-taxonomy.md` §1), so this map is the
 * one place to add a new brand's group — a brand left unmapped falls into
 * "Other" rather than being silently misgrouped or crashing.
 */
const PRODUCT_GROUP_MAP: Record<string, string> = {
  pipedrive: 'CRM & Sales',
  freshsales: 'CRM & Sales',
  'salesforce-sales-cloud': 'CRM & Sales',
  duda: 'Website Builders',
  framer: 'Website Builders',
  hostinger: 'Website Builders',
  wix: 'Website Builders',
  'zoho-desk': 'Customer Support / Helpdesk',
  'salesforce-service-cloud': 'Customer Support / Helpdesk',
  freshservice: 'Customer Support / Helpdesk',
  'hubspot-service-hub': 'Customer Support / Helpdesk',
  zendesk: 'Customer Support / Helpdesk',
  writesonic: 'SEO & AI Search',
  otterly: 'SEO & AI Search',
  ubersuggest: 'SEO & AI Search',
  ahrefs: 'SEO & AI Search',
  'google-forms': 'Forms',
  jotform: 'Forms',
  paperform: 'Forms',
  'se-ranking': 'SEO & AI Search',
  semrush: 'SEO & AI Search',
  similarweb: 'SEO & AI Search',
  typeform: 'Forms',
  'zoho-forms': 'Forms',
};

export function getProductGroup(brand: string): string {
  return PRODUCT_GROUP_MAP[brand] ?? 'Other';
}

/**
 * The most recent `last_verified` date across every component record —
 * i.e. when the library's research content was last updated. Dates are
 * ISO `YYYY-MM-DD` strings, so plain string comparison orders correctly.
 */
export function getLastUpdated(): string {
  let latest = '';
  for (const entry of allComponents) {
    const date = entry.frontmatter.last_verified;
    if (date && date > latest) latest = date;
  }
  return latest;
}
