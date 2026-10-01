/// <reference types="node" />
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import matter from 'gray-matter';
import { describe, expect, it } from 'vitest';
import { freshservicePreviews } from './registry';
import { sourceRegistry } from '../sourceRegistry';
import { getComponent, getProductGroup } from '../../utils/loadComponents';
import { extractLimitations } from '../../utils/evidenceExtraction';

describe('Freshservice evidence catalogue', () => {
  it('registers 23 distinct records under the helpdesk category', () => {
    expect(Object.keys(freshservicePreviews)).toHaveLength(23);
    expect(getProductGroup('freshservice')).toBe('Customer Support / Helpdesk');
  });
  it.each(Object.keys(freshservicePreviews))(
    '%s preserves source identity and mirrored evidence',
    (id) => {
      const record = getComponent('freshservice', id)!;
      expect(record.frontmatter.source_product).toBe('Freshservice');
      expect(record.frontmatter.evidence_state).toBe('source_reviewed');
      expect(record.frontmatter.status).toBe('partial');
      const a = matter(
        readFileSync(
          resolve('../Research-Library/04-Component-Library/freshservice', id + '.md'),
          'utf8'
        )
      );
      const b = matter(
        readFileSync(resolve('src/content/brands/freshservice/components', id + '.md'), 'utf8')
      );
      expect(a.content).toBe(b.content);
      expect(a.content).toContain('not a Freshdesk observation');
      for (const section of [
        'Screenshot',
        'Actions',
        'Technical Data',
        'Human Context',
        'AI Context',
        'Needs Verification',
        'Sources',
      ])
        expect(record.sections.some((s) => s.heading === section)).toBe(true);
      expect(extractLimitations(record.sections).length).toBeGreaterThan(0);
      for (const match of a.content.matchAll(/\]\((\/research\/[^)]+)\)/g))
        expect(existsSync(resolve('public' + match[1]))).toBe(true);
      expect(
        sourceRegistry[id].files.some(
          (f) => f.fileName === '../freshservice-shared/Freshservice.tsx'
        )
      ).toBe(true);
      expect(
        sourceRegistry[id].files.some(
          (f) => f.fileName === '../freshservice-shared/freshservice.module.css'
        )
      ).toBe(true);
    }
  );
});
