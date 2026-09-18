import { Link } from 'react-router-dom';
import type { ComponentEntry } from '@models/content.types';
import type { PreviewEntry } from '../../previews/types';
import {
  buildChangelog,
  buildSourcePaths,
  extractAccessibilityNotes,
  extractCrossLinks,
  extractEndpoints,
} from '@utils/evidenceExtraction';
import type { SourceEntry } from '../../previews/sourceRegistry';
import styles from './TechnicalExtras.module.css';

export function PropsEndpointPanel({
  entry,
  previewEntry,
}: {
  entry: ComponentEntry;
  previewEntry?: PreviewEntry;
}) {
  if (previewEntry?.type === 'reconstructed') {
    return (
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Required</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {previewEntry.propsSchema.map((field) => (
            <tr key={field.name}>
              <td>
                <code className={styles.code}>{field.name}</code>
              </td>
              <td>
                <code className={styles.code}>{field.type}</code>
              </td>
              <td>{field.required ? 'Yes' : 'No'}</td>
              <td>{field.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  if (previewEntry) {
    return (
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Example</th>
            <th>Props</th>
          </tr>
        </thead>
        <tbody>
          {previewEntry.examples.map((example) => (
            <tr key={example.title}>
              <td>{example.title}</td>
              <td>
                <code className={styles.code}>{JSON.stringify(example.props)}</code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  const endpoints = extractEndpoints(entry.sections);
  return (
    <div>
      <p className={styles.empty}>
        No live preview registered for this pattern — no importable props to document (this record
        documents a third-party competitor UI, not our own component source).
      </p>
      {endpoints.length > 0 ? (
        <>
          <p>Endpoint(s) observed in Technical Data:</p>
          <ul className={styles.list}>
            {endpoints.map((endpoint) => (
              <li key={endpoint}>
                <code className={styles.code}>{endpoint}</code>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className={styles.empty}>No network endpoint captured in this record.</p>
      )}
    </div>
  );
}

export function AccessibilityPanel({ entry }: { entry: ComponentEntry }) {
  const notes = extractAccessibilityNotes(entry.sections);
  if (notes.length === 0) {
    return (
      <p className={styles.empty}>
        No accessibility-specific findings captured this pass — flagged as an open coverage gap.
      </p>
    );
  }
  return (
    <ul className={styles.list}>
      {notes.map((note) => (
        <li key={note}>{note}</li>
      ))}
    </ul>
  );
}

export function ChangelogPanel({ entry }: { entry: ComponentEntry }) {
  const entries = buildChangelog(entry.frontmatter);
  return (
    <div>
      {entries.map((change) => (
        <div key={change.date} className={styles.entry}>
          <div className={styles.entryDate}>{change.date}</div>
          <div>{change.note}</div>
        </div>
      ))}
      <p className={styles.empty}>
        No manual revision history tracked yet — this entry is derived from the record&rsquo;s own
        last-verified date, not a real changelog.
      </p>
    </div>
  );
}

export function SourceFilesPanel({
  entry,
  sourceEntry,
}: {
  entry: ComponentEntry;
  sourceEntry?: SourceEntry;
}) {
  const paths = buildSourcePaths(entry, sourceEntry);
  return (
    <ul className={styles.list}>
      {paths.map((p) => (
        <li key={p.path}>
          <strong>{p.label}:</strong> <code className={styles.code}>{p.path}</code>
        </li>
      ))}
    </ul>
  );
}

export function RelatedComponentsPanel({ entry }: { entry: ComponentEntry }) {
  const related = extractCrossLinks(entry);
  if (related.length === 0) {
    return <p className={styles.empty}>No related components linked from this record yet.</p>;
  }
  return (
    <ul className={styles.list}>
      {related.map((id) => (
        <li key={id}>
          <Link to={`/${entry.brand}/${id}`}>{id}</Link>
        </li>
      ))}
    </ul>
  );
}
