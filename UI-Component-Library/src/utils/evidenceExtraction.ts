import type { ComponentEntry, ComponentFrontmatter, ComponentSection } from '@models/content.types';
import type { SourceEntry } from '../previews/sourceRegistry';

/** Every `[[other-id]]` cross-link referenced anywhere in this record's body. */
export function extractCrossLinks(entry: ComponentEntry): string[] {
  const linkPattern = /\[\[([^\]]+)\]\]/g;
  const found = new Set<string>();
  for (const section of entry.sections) {
    for (const match of section.bodyMarkdown.matchAll(linkPattern)) {
      if (match[1] !== entry.id) found.add(match[1]);
    }
  }
  return Array.from(found).sort();
}

/** Network endpoint patterns already captured in Technical Data (e.g. `` `GET /form/{id}/settings` ``). */
export function extractEndpoints(sections: ComponentSection[]): string[] {
  const endpointPattern = /`((?:GET|POST|PUT|DELETE|PATCH)\s+[^`]+)`/g;
  const found = new Set<string>();
  for (const section of sections) {
    for (const match of section.bodyMarkdown.matchAll(endpointPattern)) {
      found.add(match[1].trim());
    }
  }
  return Array.from(found);
}

/** Sentences already mentioning aria attributes or accessibility findings, wherever they live in the record. */
export function extractAccessibilityNotes(sections: ComponentSection[]): string[] {
  const notes: string[] = [];
  for (const section of sections) {
    const sentences = section.bodyMarkdown.split(/(?<=[.!?])\s+/);
    for (const sentence of sentences) {
      if (/aria|accessib/i.test(sentence)) {
        notes.push(sentence.trim());
      }
    }
  }
  return notes;
}

const LIMITATION_MARKERS = [
  'not observed',
  'NOT OBSERVED',
  'TODO',
  'not yet researched',
  'flagged incomplete',
  'second pass',
  'not deep-dived',
  'not separately captured',
  'not directly captured',
  'not independently tested',
];

/** Bullet-ish lines already carrying one of this record's own gap/TODO markers. */
export function extractLimitations(sections: ComponentSection[]): string[] {
  const found = new Set<string>();
  for (const section of sections) {
    const lines = section.bodyMarkdown.split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      if (
        LIMITATION_MARKERS.some((marker) => trimmed.toLowerCase().includes(marker.toLowerCase()))
      ) {
        found.add(trimmed.replace(/^[-*]\s*/, ''));
      }
    }
  }
  return Array.from(found);
}

export interface SourcePath {
  label: string;
  path: string;
}

/** This record's own repo path, plus any registered live-preview source files. */
export function buildSourcePaths(entry: ComponentEntry, sourceEntry?: SourceEntry): SourcePath[] {
  const paths: SourcePath[] = [
    {
      label: 'Research record',
      path: `Research-Library/04-Component-Library/${entry.brand}/${entry.id}.md`,
    },
  ];
  if (sourceEntry) {
    for (const file of sourceEntry.files) {
      paths.push({ label: 'Preview source', path: `src/previews/${entry.id}/${file.fileName}` });
    }
  }
  return paths;
}

export interface ChangelogEntry {
  date: string;
  note: string;
}

/** No real revision history is tracked yet — this is a single derived entry, not a manual changelog. */
export function buildChangelog(frontmatter: ComponentFrontmatter): ChangelogEntry[] {
  return [
    {
      date: frontmatter.last_verified,
      note: 'Record authored/last verified from live-app research. No further revisions tracked yet.',
    },
  ];
}
