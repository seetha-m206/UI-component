import type { PreviewEntry } from './types';
import { PreviewBoundary } from './PreviewBoundary';
import { ReconstructedPreviewPanel } from './ReconstructedPreviewPanel';
import styles from './PreviewPanel.module.css';

interface PreviewPanelProps {
  entry: PreviewEntry;
  componentName: string;
  sourceProduct: string;
}

export function PreviewPanel({ entry, componentName, sourceProduct }: PreviewPanelProps) {
  if (entry.type === 'reconstructed') {
    return (
      <ReconstructedPreviewPanel entry={entry} componentName={componentName} sourceProduct={sourceProduct} />
    );
  }

  const { Component, examples } = entry;

  return (
    <div className={styles.grid}>
      {examples.map((example) => (
        <section key={example.title} className={styles.exampleCard}>
          <h3 className={styles.exampleTitle}>{example.title}</h3>
          {example.description && <p className={styles.exampleDesc}>{example.description}</p>}
          <div className={styles.stage}>
            <PreviewBoundary componentName={componentName} exampleTitle={example.title}>
              <Component {...example.props} />
            </PreviewBoundary>
          </div>
        </section>
      ))}
    </div>
  );
}
