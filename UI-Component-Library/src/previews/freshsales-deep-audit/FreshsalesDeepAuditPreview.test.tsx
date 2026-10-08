import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { previewRegistry } from '../registry';
import { FreshsalesDeepAuditPreview } from './FreshsalesDeepAuditPreview';
import { freshsalesDeepAuditIds, freshsalesDeepAuditRecords } from './registry';
import vectors from '../../content/brands/freshsales/vector-index.json';

describe('Freshsales deep audit', () => {
  it('registers eight independent levels for every workflow', () => {
    expect(freshsalesDeepAuditRecords).toHaveLength(240);
    expect(freshsalesDeepAuditIds).toHaveLength(240);
    const workflows = new Set(freshsalesDeepAuditRecords.map((record) => record.parentId));
    expect(workflows.size).toBe(30);
    for (const workflow of workflows) {
      expect(
        freshsalesDeepAuditRecords.filter((record) => record.parentId === workflow)
      ).toHaveLength(8);
    }
  });

  it('makes every record independently previewable', () => {
    for (const id of freshsalesDeepAuditIds) expect(previewRegistry[id]).toBeDefined();
  });

  it('keeps unobserved error UI explicitly reconstructed', () => {
    const record = freshsalesDeepAuditRecords.find((item) => item.level === 'error')!;
    render(<FreshsalesDeepAuditPreview record={record} />);
    expect(screen.getByText('User-facing error was not observed')).toBeInTheDocument();
    expect(screen.getByText('Reconstruction')).toBeInTheDocument();
  });

  it('keeps interactions local', async () => {
    const user = userEvent.setup();
    const record = freshsalesDeepAuditRecords.find((item) => item.level === 'interaction')!;
    render(<FreshsalesDeepAuditPreview record={record} />);
    await user.click(screen.getByRole('button', { name: 'View options' }));
    expect(screen.getByRole('status')).toHaveTextContent('Nothing was sent to Freshsales');
  });

  it('has one normalized repository-local vector per Freshsales record', () => {
    expect(vectors.scope).toBe('repository-local');
    expect(vectors.records).toHaveLength(283);
    expect(new Set(vectors.records.map((record) => record.id)).size).toBe(283);
    for (const record of vectors.records) {
      expect(record.embedding_algorithm).toBe('signed-feature-hash-v1');
      expect(record.embedding).toHaveLength(64);
      const norm = Math.sqrt(record.embedding.reduce((sum, value) => sum + value * value, 0));
      expect(norm).toBeCloseTo(1, 5);
    }
  });
});
