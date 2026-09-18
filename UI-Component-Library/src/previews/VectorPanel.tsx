import { useState } from 'react';
import type { ComponentEntry } from '@models/content.types';
import { extractCrossLinks } from '@utils/evidenceExtraction';
import styles from './CodePanel.module.css';

interface VectorPanelProps {
  entry: ComponentEntry;
}

function buildVectorRecord(entry: ComponentEntry) {
  const { frontmatter } = entry;
  const group = frontmatter.ui_category?.split('>')[0]?.trim() || 'Uncategorized';
  const tags = Array.from(
    new Set(
      [
        ...frontmatter.ui_category.split('>').map((s) => s.trim()),
        frontmatter.source_product,
        frontmatter.status,
      ]
        .filter(Boolean)
        .map((tag) => tag.toLowerCase().replace(/\s+/g, '-'))
    )
  );

  return {
    id: `${entry.brand}/${entry.id}`,
    brand: entry.brand,
    group,
    summary: frontmatter.summary,
    tags,
    status: frontmatter.status,
    evidence_state: frontmatter.evidence_state,
    last_verified: frontmatter.last_verified,
    related_components: extractCrossLinks(entry),
    embed_text: `${frontmatter.source_product} — ${frontmatter.component} (${frontmatter.ui_category}): ${frontmatter.summary}`,
  };
}

export function VectorPanel({ entry }: VectorPanelProps) {
  const record = buildVectorRecord(entry);
  const json = JSON.stringify(record, null, 2);
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(json);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard access can be denied; button just stays as-is.
    }
  }

  return (
    <div className={styles.file}>
      <div className={styles.fileName}>vector.json</div>
      <div className={styles.codeBlock}>
        <button type="button" className={styles.copyButton} onClick={handleCopy}>
          {copied ? 'Copied' : 'Copy JSON'}
        </button>
        <pre className={styles.pre}>
          <code>{json}</code>
        </pre>
      </div>
    </div>
  );
}
