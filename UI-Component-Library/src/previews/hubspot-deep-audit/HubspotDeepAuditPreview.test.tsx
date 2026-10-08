import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import vectorRaw from '../../content/vectors/hubspot-deep-audit.json?raw';
import { allComponents } from '../../utils/loadComponents';
import { previewRegistry } from '../registry';
import { sourceRegistry } from '../sourceRegistry';
import { hubspotDeepAuditIds, hubspotDeepAuditRecords } from './registry';
import rendererSource from './HubspotDeepAuditPreview.tsx?raw';

afterEach(() => cleanup());

describe('HubSpot deep component audit', () => {
  it('covers all 101 parent workflows with eight independent levels', () => {
    const hubspotRecords = allComponents.filter((entry) => entry.brand.startsWith('hubspot-'));
    const parents = hubspotRecords.filter((entry) => !entry.id.includes('-audit-'));
    const deep = hubspotRecords.filter((entry) => entry.id.includes('-audit-'));

    expect(parents).toHaveLength(101);
    expect(deep).toHaveLength(808);
    expect(hubspotDeepAuditRecords).toHaveLength(808);
    expect(hubspotDeepAuditIds).toHaveLength(808);

    for (const parent of parents) {
      const children = hubspotDeepAuditRecords.filter((record) => record.parentId === parent.id);
      expect(children, parent.id).toHaveLength(8);
      expect(new Set(children.map((record) => record.level))).toEqual(
        new Set(['screen', 'action', 'atomic', 'state', 'loading', 'empty', 'error', 'interaction'])
      );
    }
  });

  it('registers every deep component with fixtures and Code-tab sources', () => {
    for (const id of hubspotDeepAuditIds) {
      const preview = previewRegistry[id];
      expect(preview, id).toBeDefined();
      expect(sourceRegistry[id]?.files.length, id + ' source files').toBeGreaterThan(0);
      expect(preview.type, id).toBe('reconstructed');
      if (preview.type === 'reconstructed') {
        expect(preview.fixtures, id).toHaveLength(2);
        expect(preview.propsSchema.length, id).toBeGreaterThan(0);
      }
    }
  });

  it('keeps all 808 canonical and catalogue records in body parity', () => {
    const bodyWithoutFrontmatter = (raw: string) => raw.replace(/^---\n[\s\S]*?\n---\n/, '');

    for (const record of hubspotDeepAuditRecords) {
      const canonicalPath = path.resolve(
        process.cwd(),
        '..',
        'Research-Library',
        '04-Component-Library',
        record.brand,
        record.id + '.md'
      );
      const mirrorPath = path.resolve(
        process.cwd(),
        'src',
        'content',
        'brands',
        record.brand,
        'components',
        record.id + '.md'
      );
      expect(fs.existsSync(canonicalPath), canonicalPath).toBe(true);
      expect(fs.existsSync(mirrorPath), mirrorPath).toBe(true);
      const canonical = fs.readFileSync(canonicalPath, 'utf8');
      const mirror = fs.readFileSync(mirrorPath, 'utf8');
      expect(bodyWithoutFrontmatter(mirror), record.id).toBe(bodyWithoutFrontmatter(canonical));
      expect(mirror, record.id + ' presentation metadata').toMatch(/^status:|\nstatus:/m);
      expect(mirror, record.id + ' summary metadata').toMatch(/^summary:|\nsummary:/m);
    }
  });

  it('provides one vector record per parent and deep component', () => {
    const vectors = JSON.parse(vectorRaw) as {
      parent_workflows: number;
      deep_components: number;
      total_records: number;
      records: Array<{
        id: string;
        embed_text: string;
        embedding: { kind: string; dimensions: number; values: number[] };
      }>;
    };
    expect(vectors.parent_workflows).toBe(101);
    expect(vectors.deep_components).toBe(808);
    expect(vectors.total_records).toBe(909);
    expect(new Set(vectors.records.map((record) => record.id)).size).toBe(909);
    for (const record of vectors.records) {
      expect(record.embed_text.length, record.id).toBeGreaterThan(24);
      expect(record.embedding.kind).toBe('deterministic-local-feature-hash-v1');
      expect(record.embedding.dimensions).toBe(64);
      expect(record.embedding.values).toHaveLength(64);
    }
  });

  it('renders both fixtures for all 808 deep components', () => {
    let rendered = 0;
    for (const id of hubspotDeepAuditIds) {
      const preview = previewRegistry[id];
      expect(preview.type, id).toBe('reconstructed');
      if (preview.type !== 'reconstructed') continue;
      for (const fixture of preview.fixtures) {
        const { unmount } = render(<preview.Component {...fixture.props} />);
        expect(document.body.textContent?.trim().length, id + '/' + fixture.id).toBeGreaterThan(0);
        rendered += 1;
        unmount();
      }
    }
    expect(rendered).toBe(1616);
  });

  it('keeps error retry and fixture filtering local', async () => {
    const user = userEvent.setup();
    const preview = previewRegistry['hubspot-development-overview-audit-error'];
    expect(preview.type).toBe('reconstructed');
    if (preview.type !== 'reconstructed') return;
    render(<preview.Component {...preview.fixtures[0].props} />);

    await user.click(screen.getByRole('button', { name: 'Retry locally' }));
    expect(screen.getByRole('status')).toHaveTextContent('Nothing was sent to HubSpot');
    await user.type(
      screen.getByRole('textbox', { name: 'Filter fixture properties' }),
      'missing-value'
    );
    expect(screen.getByText('No fixture properties match this filter.')).toBeInTheDocument();
  });

  it('contains no provider networking primitive in the renderer', () => {
    expect(rendererSource).not.toMatch(/fetch\(|axios|XMLHttpRequest|sendBeacon|window\.location/);
  });
});
