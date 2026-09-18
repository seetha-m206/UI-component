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

export function getGroup(entry: ComponentEntry): string {
  return entry.frontmatter.ui_category?.split('>')[0]?.trim() || 'Uncategorized';
}

/** Derives a display label from a brand slug (e.g. "zoho-forms" -> "Zoho Forms").
 * Generic on purpose — new brands need no code change to get a sensible label. */
export function getBrandLabel(brand: string): string {
  return brand
    .split('-')
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : word))
    .join(' ');
}
