import {
  buildChangelog,
  buildSourcePaths,
  extractAccessibilityNotes,
  extractCrossLinks,
  extractEndpoints,
  extractLimitations,
} from './evidenceExtraction';
import type { ComponentEntry, ComponentFrontmatter } from '@models/content.types';

function makeEntry(sections: { heading: string; bodyMarkdown: string }[]): ComponentEntry {
  const frontmatter: ComponentFrontmatter = {
    component: 'Test Component',
    ui_category: 'Actions/Controls > Toggle',
    source_product: 'Zoho Forms',
    last_verified: '2026-09-16',
    status: 'complete',
    summary: 'A test component.',
    evidence_state: 'source_reviewed',
  };
  return {
    id: 'test-component',
    brand: 'zoho-forms',
    frontmatter,
    sections,
    url: '/zoho-forms/test-component',
  };
}

describe('extractCrossLinks', () => {
  it('finds unique [[links]] and excludes self-references', () => {
    const entry = makeEntry([
      {
        heading: 'Lessons',
        bodyMarkdown: 'See [[other-component]] and [[another-one]] and [[other-component]] again.',
      },
      { heading: 'Sources', bodyMarkdown: 'Self-link [[test-component]] should be excluded.' },
    ]);
    expect(extractCrossLinks(entry)).toEqual(['another-one', 'other-component']);
  });
});

describe('extractEndpoints', () => {
  it('pulls captured method+URL patterns out of backticked text', () => {
    const sections = [
      { heading: 'Technical Data', bodyMarkdown: 'Fires `PUT /account/form/settings/x` on save.' },
    ];
    expect(extractEndpoints(sections)).toEqual(['PUT /account/form/settings/x']);
  });

  it('returns an empty list when no endpoint is captured', () => {
    expect(
      extractEndpoints([{ heading: 'Technical Data', bodyMarkdown: 'No network calls observed.' }])
    ).toEqual([]);
  });
});

describe('extractAccessibilityNotes', () => {
  it('surfaces sentences mentioning aria or accessibility', () => {
    const sections = [
      {
        heading: 'Behavior & States',
        bodyMarkdown:
          'The control has a border. The aria-checked attribute never flips to true. Nothing else here.',
      },
    ];
    expect(extractAccessibilityNotes(sections)).toEqual([
      'The aria-checked attribute never flips to true.',
    ]);
  });

  it('returns an empty list when nothing mentions accessibility', () => {
    expect(
      extractAccessibilityNotes([{ heading: 'Rules', bodyMarkdown: 'Just a plain rule.' }])
    ).toEqual([]);
  });
});

describe('extractLimitations', () => {
  it('pulls lines carrying known gap markers', () => {
    const sections = [
      {
        heading: 'Sources',
        bodyMarkdown:
          '- Loading state: not observed\n- Fully documented and confirmed.\n- TODO: second pass needed.',
      },
    ];
    const result = extractLimitations(sections);
    expect(result).toContain('Loading state: not observed');
    expect(result).toContain('TODO: second pass needed.');
    expect(result).not.toContain('Fully documented and confirmed.');
  });
});

describe('buildSourcePaths', () => {
  it('always includes the research record path, and preview files when registered', () => {
    const entry = makeEntry([]);
    const withoutPreview = buildSourcePaths(entry);
    expect(withoutPreview).toEqual([
      {
        label: 'Research record',
        path: 'Research-Library/04-Component-Library/zoho-forms/test-component.md',
      },
    ]);

    const withPreview = buildSourcePaths(entry, { files: [{ fileName: 'Test.tsx', code: '' }] });
    expect(withPreview).toHaveLength(2);
    expect(withPreview[1]).toEqual({
      label: 'Preview source',
      path: 'src/previews/test-component/Test.tsx',
    });
  });
});

describe('buildChangelog', () => {
  it('derives a single entry from last_verified, not a real revision history', () => {
    const entry = makeEntry([]);
    const changelog = buildChangelog(entry.frontmatter);
    expect(changelog).toHaveLength(1);
    expect(changelog[0].date).toBe('2026-09-16');
  });
});
