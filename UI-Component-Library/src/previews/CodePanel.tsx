import { useState } from 'react';
import type { SourceEntry } from './sourceRegistry';
import styles from './CodePanel.module.css';

interface CodePanelProps {
  entry: SourceEntry;
}

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard access can be denied by the browser; button simply stays
      // "Copy code" in that case, nothing else depends on this succeeding.
    }
  }

  return (
    <button type="button" className={styles.copyButton} onClick={handleCopy}>
      {copied ? 'Copied' : 'Copy code'}
    </button>
  );
}

export function CodePanel({ entry }: CodePanelProps) {
  return (
    <div>
      {entry.files.map((file) => (
        <div key={file.fileName} className={styles.file}>
          <div className={styles.fileName}>{file.fileName}</div>
          <div className={styles.codeBlock}>
            <CopyButton code={file.code} />
            <pre className={styles.pre}>
              <code>{file.code}</code>
            </pre>
          </div>
        </div>
      ))}
    </div>
  );
}
