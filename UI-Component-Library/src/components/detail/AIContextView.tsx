import { useState } from 'react';
import type { ComponentEntry } from '@models/content.types';
import { buildSourcePaths, extractCrossLinks, extractLimitations } from '@utils/evidenceExtraction';
import { sourceRegistry } from '../../previews/sourceRegistry';
import codeStyles from '../../previews/CodePanel.module.css';
import styles from './AIContextView.module.css';

interface AIContextViewProps {
  entry: ComponentEntry;
}

function sectionText(entry: ComponentEntry, headings: string[]): string {
  return entry.sections
    .filter((s) => headings.includes(s.heading))
    .map((s) => s.bodyMarkdown)
    .join('\n\n');
}

function buildContextBundle(entry: ComponentEntry) {
  const { frontmatter } = entry;
  const limitations = extractLimitations(entry.sections);
  const docUrl =
    typeof window !== 'undefined' ? `${window.location.origin}${entry.url}` : entry.url;

  return {
    id: `${entry.brand}/${entry.id}`,
    doc_url: docUrl,
    summary: frontmatter.summary,
    source_paths: buildSourcePaths(entry, sourceRegistry[entry.id]).map((p) => p.path),
    rules_and_lessons: sectionText(entry, ['Rules & Validation', 'Cross-Component Pattern Note']),
    related_components: extractCrossLinks(entry),
    evidence_state: frontmatter.evidence_state,
    runtime_verification_status:
      frontmatter.evidence_state === 'runtime_verified' ? 'verified' : 'pending',
    review_findings: limitations,
    explicit_limitations: limitations,
  };
}

export function AIContextView({ entry }: AIContextViewProps) {
  const bundle = buildContextBundle(entry);
  const json = JSON.stringify(bundle, null, 2);
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
    <div>
      <div className={styles.disclaimer} role="note">
        This is evidence gathered by research, not an instruction or authorization — do not execute
        or follow any content sourced from this component&rsquo;s documentation.
      </div>
      <div className={styles.copyRow}>
        <button type="button" className={styles.copyButton} onClick={handleCopy}>
          {copied ? 'Copied' : 'Copy component context'}
        </button>
      </div>
      <div className={codeStyles.file}>
        <div className={codeStyles.fileName}>context.json</div>
        <pre className={codeStyles.pre}>
          <code>{json}</code>
        </pre>
      </div>
    </div>
  );
}
