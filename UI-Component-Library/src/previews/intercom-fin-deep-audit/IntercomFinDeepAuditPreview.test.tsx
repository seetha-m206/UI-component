import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import vectors from '../../content/vectors/intercom-fin-deep-audit.json';
import { previewRegistry } from '../registry';
import { IntercomFinDeepAuditPreview } from './IntercomFinDeepAuditPreview';
import { intercomFinAuditIds, intercomFinAuditRecords } from './registry';

describe('Intercom and Fin deep audit', () => {
  it('registers eight independent levels for every observed workflow', () => {
    expect(intercomFinAuditRecords).toHaveLength(440);
    expect(intercomFinAuditIds).toHaveLength(440);
    const workflows = new Set(intercomFinAuditRecords.map((record) => record.parentId));
    expect(workflows.size).toBe(55);
    for (const workflow of workflows) {
      expect(intercomFinAuditRecords.filter((record) => record.parentId === workflow)).toHaveLength(8);
    }
  });

  it('makes every record independently previewable', () => {
    for (const id of intercomFinAuditIds) expect(previewRegistry[id]).toBeDefined();
  });

  it('labels unobserved provider errors as reconstruction boundaries', () => {
    const record = intercomFinAuditRecords.find((item) => item.level === 'error')!;
    render(<IntercomFinDeepAuditPreview record={record} />);
    expect(screen.getByText('Provider error not observed')).toBeInTheDocument();
    expect(screen.getByText('This boundary is an explicit reconstruction.')).toBeInTheDocument();
  });

  it('keeps interaction controls local', async () => {
    const user = userEvent.setup();
    const record = intercomFinAuditRecords.find((item) => item.level === 'interaction')!;
    render(<IntercomFinDeepAuditPreview record={record} />);
    await user.click(screen.getByRole('button', { name: 'Fictional option' }));
    expect(screen.getByRole('status')).toHaveTextContent('changed this local preview only');
  });

  it('builds one normalized repository-local vector per workflow and deep component', () => {
    expect(vectors.records).toHaveLength(495);
    expect(new Set(vectors.records.map((record) => record.id)).size).toBe(495);
    for (const record of vectors.records) {
      expect(record.embedding.kind).toBe('deterministic-local-feature-hash-v1');
      expect(record.embedding.values).toHaveLength(64);
      const norm = Math.sqrt(record.embedding.values.reduce((sum, value) => sum + value * value, 0));
      expect(norm).toBeCloseTo(1, 5);
    }
  });
});
