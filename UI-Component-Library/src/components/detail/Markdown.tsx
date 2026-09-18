import { marked } from 'marked';
import { useMemo } from 'react';

/**
 * Renders trusted, first-party markdown content authored by this repo's own
 * research records — never render arbitrary/user-supplied markdown through this.
 */
export function Markdown({ source }: { source: string }) {
  const html = useMemo(() => marked.parse(source, { async: false }) as string, [source]);
  // eslint-disable-next-line react/no-danger
  return <div className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />;
}
