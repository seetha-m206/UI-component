// Raw source of every preview component/stylesheet, keyed by the same `id`
// used in previewRegistry, for the Code tab. Vite's `?raw` import gives us
// the literal file text, not the compiled module.
const tsxModules = import.meta.glob(['/src/previews/*/*.tsx', '!/src/previews/*/*.test.tsx'], {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

const cssModules = import.meta.glob('/src/previews/*/*.module.css', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

const tsModules = import.meta.glob(['/src/previews/*/*.ts', '!/src/previews/*/*.test.ts'], {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

export interface SourceFile {
  fileName: string;
  code: string;
}

export interface SourceEntry {
  files: SourceFile[];
}

function collect(modules: Record<string, string>): Record<string, SourceFile[]> {
  const byId: Record<string, SourceFile[]> = {};
  for (const [path, code] of Object.entries(modules)) {
    const match = path.match(/\/previews\/([^/]+)\/([^/]+)$/);
    if (!match) continue;
    const [, id, fileName] = match;
    (byId[id] ??= []).push({ fileName, code });
  }
  return byId;
}

const tsxById = collect(tsxModules);
const cssById = collect(cssModules);
const tsById = collect(tsModules);

export const sourceRegistry: Record<string, SourceEntry> = Object.fromEntries(
  Array.from(
    new Set([...Object.keys(tsxById), ...Object.keys(cssById), ...Object.keys(tsById)])
  ).map((id) => [
    id,
    { files: [...(tsxById[id] ?? []), ...(tsById[id] ?? []), ...(cssById[id] ?? [])] },
  ])
);

// Freshservice wrappers share the implementation. Include it in every Code tab.
const freshserviceShared = sourceRegistry['freshservice-shared'];
if (freshserviceShared) {
  for (const [id, entry] of Object.entries(sourceRegistry)) {
    if (id.startsWith('freshservice-') && id !== 'freshservice-shared') {
      entry.files.push(
        ...freshserviceShared.files
          .filter((file) => file.fileName !== 'registry.ts')
          .map((file) => ({ ...file, fileName: '../freshservice-shared/' + file.fileName }))
      );
    }
  }
}
