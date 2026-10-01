/// <reference types="node" />
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import matter from 'gray-matter';
import { ubersuggestRemainingPreviews } from './registry';
import { sourceRegistry } from '../sourceRegistry';
import { getComponent } from '../../utils/loadComponents';
import { extractLimitations } from '../../utils/evidenceExtraction';
describe('remaining Ubersuggest scope and evidence consistency', () => {
  it('contains 33 independent screen and action records', () =>
    expect(Object.keys(ubersuggestRemainingPreviews)).toHaveLength(33));
  it.each(Object.keys(ubersuggestRemainingPreviews))(
    '%s is discovered and mirrors canonical evidence',
    (id) => {
      const entry = getComponent('ubersuggest', id);
      expect(entry).toBeDefined();
      expect(entry?.frontmatter.status).toBe('complete');
      expect(entry?.frontmatter.evidence_state).toBe('source_reviewed');
      expect(
        extractLimitations(entry!.sections).some((line) =>
          line.startsWith('Not observed beyond this scope:')
        )
      ).toBe(true);
      expect(
        extractLimitations(entry!.sections).some((line) =>
          line.includes('Network behavior is outside')
        )
      ).toBe(true);
      const canonical = matter(
        readFileSync(
          resolve('../Research-Library/04-Component-Library/ubersuggest', id + '.md'),
          'utf8'
        )
      );
      const mirrored = matter(
        readFileSync(resolve('src/content/brands/ubersuggest/components', id + '.md'), 'utf8')
      );
      expect(canonical.content.replace(/\s+/g, ' ')).toEqual(mirrored.content.replace(/\s+/g, ' '));
      expect(canonical.content).toContain('Completion meaning');
      expect(canonical.content).toContain('observe without submitting');
      expect(canonical.content).not.toMatch(/seetha\.lakshmi|__hstc|__hsfp/);
      for (const heading of [
        'Location',
        'Structure',
        'Actions',
        'Behavior & States',
        'Rules & Validation',
        'Technical Data',
        'Accessibility',
        'Human View',
        'AI Context',
        'Sources',
      ])
        expect(entry?.sections.some((s) => s.heading === heading)).toBe(true);
      expect(
        sourceRegistry[id].files.some(
          (f) => f.fileName === '../ubersuggest-remaining/Remaining.tsx'
        )
      ).toBe(true);
    }
  );
});
