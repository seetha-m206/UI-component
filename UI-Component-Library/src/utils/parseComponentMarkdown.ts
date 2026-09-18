import type { ComponentEntry, ComponentFrontmatter, ComponentSection } from '@models/content.types';

/**
 * Our source markdown uses a flat `key: "value"` frontmatter block (no nested YAML),
 * so a small hand-rolled parser avoids pulling in a full YAML/Node-oriented library
 * for the browser bundle.
 */
function parseFrontmatter(raw: string): { frontmatter: ComponentFrontmatter; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    throw new Error('Markdown file is missing a frontmatter block');
  }
  const [, frontmatterBlock, body] = match;
  const fields: Record<string, string> = {};
  for (const line of frontmatterBlock.split('\n')) {
    const fieldMatch = line.match(/^([a-zA-Z_]+):\s*(.*)\s*$/);
    if (fieldMatch) {
      // Values may be unquoted, double-quoted, or single-quoted (Prettier
      // normalizes markdown frontmatter to whichever quote style avoids
      // escaping an apostrophe in the value), so strip either quote pair.
      const quoted = fieldMatch[2].match(/^(['"])(.*)\1$/);
      fields[fieldMatch[1]] = quoted ? quoted[2] : fieldMatch[2];
    }
  }
  const frontmatter = {
    ...fields,
    evidence_state: fields.evidence_state || 'documented',
  } as unknown as ComponentFrontmatter;
  return { frontmatter, body };
}

/** Splits the markdown body into `## Heading` sections, dropping the leading `# Title` line. */
function splitSections(body: string): ComponentSection[] {
  const withoutTitle = body.replace(/^#\s+.*\n(.*\n)*?(?=##\s)/, '');
  const parts = withoutTitle.split(/\n(?=##\s)/).filter((p) => p.trim().length > 0);
  return parts.map((part) => {
    const headingMatch = part.match(/^##\s+(.*)/);
    return {
      heading: headingMatch ? headingMatch[1].trim() : 'Overview',
      bodyMarkdown: part.replace(/^##\s+.*\n?/, '').trim(),
    };
  });
}

export function parseComponentMarkdown(raw: string, id: string, brand: string): ComponentEntry {
  const { frontmatter, body } = parseFrontmatter(raw);
  return {
    id,
    brand,
    frontmatter,
    sections: splitSections(body),
    url: `/${brand}/${id}`,
  };
}
