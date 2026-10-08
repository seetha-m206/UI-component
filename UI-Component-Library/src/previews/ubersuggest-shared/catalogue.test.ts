/// <reference types="node" />
import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import matter from 'gray-matter';
import { getComponent, getProductGroup } from '../../utils/loadComponents';
import { ubersuggestPreviews } from './registry';
import { sourceRegistry } from '../sourceRegistry';

describe('Ubersuggest evidence and catalogue integration', () => {
  it('discovers all fifteen records under the existing SEO group', () => {
    expect(Object.keys(ubersuggestPreviews)).toHaveLength(15);
    expect(getProductGroup('ubersuggest')).toBe('SEO');
  });
  it.each(Object.keys(ubersuggestPreviews))(
    '%s has matching canonical evidence and all audience sections',
    (id) => {
      const entry = getComponent('ubersuggest', id);
      expect(entry?.frontmatter.evidence_state).toBe('source_reviewed');
      expect(entry?.frontmatter.status).toBe('partial');
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
      const canonical = matter(
        readFileSync(
          resolve(
            process.cwd(),
            '../Research-Library/04-Component-Library/ubersuggest',
            id + '.md'
          ),
          'utf8'
        )
      );
      const mirrored = matter(
        readFileSync(
          resolve(process.cwd(), 'src/content/brands/ubersuggest/components', id + '.md'),
          'utf8'
        )
      );
      // Formatting is presentation-only. Evidence prose and metadata must agree.
      expect(mirrored.content.replace(/\s+/g, ' ').trim()).toBe(
        canonical.content.replace(/\s+/g, ' ').trim()
      );
      const { status: _status, summary: _summary, ...sourceFields } = mirrored.data;
      expect(sourceFields).toEqual(canonical.data);
      expect(sourceRegistry[id].files.some((f) => f.fileName === 'fixtures.ts')).toBe(true);
      expect(
        sourceRegistry[id].files.some((f) => f.fileName === '../ubersuggest-shared/Ubersuggest.tsx')
      ).toBe(true);
      expect(
        ubersuggestPreviews[id].type === 'reconstructed' && ubersuggestPreviews[id].runtimeVerified
      ).toBe(false);
    }
  );
});
