import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { levels, runtimeErrors, workflows } from './freshsales-workflows.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const appRoot = resolve(here, '..');
const repoRoot = resolve(appRoot, '..');
const canonicalRoot = resolve(repoRoot, 'Research-Library/04-Component-Library/freshsales');
const mirrorRoot = resolve(appRoot, 'src/content/brands/freshsales/components');
const generatedPath = resolve(appRoot, 'src/previews/freshsales-deep-audit/generated.ts');
const vectorPath = resolve(appRoot, 'src/content/brands/freshsales/vector-index.json');
const receiptRoot = resolve(repoRoot, 'Internal/scratch-2026-10/freshsales');
const lastVerified = '2026-10-08';

const summaries = {
  screen: 'Screen-level composition, navigation regions and workflow layout.',
  action: 'Visible action controls and the boundary before consequential provider behavior.',
  atomic: 'Small reusable controls, labels, rows, cards and inputs used by the workflow.',
  state: 'Selected, disabled, expanded and default visual states.',
  loading: 'Loading presentation isolated from the completed workflow.',
  empty: 'No-content or onboarding presentation isolated from the populated workflow.',
  error: 'Error boundary. No user-facing provider error was manufactured or claimed as observed.',
  interaction: 'Overlay, menu, drawer, tab or view transition exercised without a provider write.',
};

const records = workflows.flatMap((workflow) =>
  levels.map((level) => {
    const observed = workflow.observedLevels.includes(level);
    const id = `freshsales-${workflow.id}-audit-${level}`;
    const state = observed ? 'OBSERVED' : 'RECONSTRUCTION';
    return {
      id,
      brand: 'Freshsales',
      parentId: `freshsales-${workflow.id}`,
      parentTitle: workflow.title,
      level,
      component: `${workflow.title} ${level} component`,
      category: workflow.category,
      product: 'Freshsales Suite',
      lastVerified,
      evidenceState: observed ? 'source_reviewed' : 'reconstructed',
      observed,
      summary: summaries[level],
      observations: workflow.dom.map((detail) => `${state}|${detail}`),
      actions: workflow.actions.map((detail) => `${observed ? 'OBSERVED' : 'BOUNDARY'}|${detail}`),
      dom: workflow.dom.map((detail) => ({ state, detail })),
      network: workflow.network.map(
        ([method, path, status, requestShape, responseShape, trigger]) => ({
          state: 'OBSERVED',
          detail: `${method} ${path} -> ${status}. Request: ${requestShape}. Response: ${responseShape}. Trigger: ${trigger}.`,
        })
      ),
      networkContracts: workflow.network.map(
        ([method, path, status, requestShape, responseShape, trigger]) => ({
          method,
          path,
          status: Number(status),
          request_shape: requestShape,
          response_shape: responseShape,
          trigger,
        })
      ),
      fixture: {
        workflow: workflow.title,
        component_level: level,
        evidence: observed ? 'Provider structure observed' : 'Explicit fictional reconstruction',
        identity: 'Northstar Works',
        safety: 'Local interaction only',
      },
    };
  })
);

function markdown(record) {
  const tag = record.observed ? 'OBSERVED' : 'RECONSTRUCTION';
  const dom = record.dom.map((item) => `- **${item.state}:** ${item.detail}`).join('\n');
  const actions = record.actions
    .map((item) => `- **${item.split('|')[0]}:** ${item.split('|').slice(1).join('|')}`)
    .join('\n');
  const network = record.network.map((item) => `- **${item.state}:** ${item.detail}`).join('\n');
  return `---\ncomponent: "${record.component}"\nui_category: "${record.category} > ${record.level}"\nsource_product: "Freshsales"\nparent_workflow: "${record.parentTitle}"\nlast_verified: "${record.lastVerified}"\nevidence_state: "${record.evidenceState}"\nstatus: "partial"\nsummary: "Independent ${record.level}-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."\n---\n\n# ${record.component}\n\n## Evidence boundary\n\n- **${tag}:** ${record.summary}\n- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.\n- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.\n\n## DOM structure\n\n${dom}\n\n## User actions\n\n${actions}\n\n## Network and API\n\n${network}\n\n## Registered fixture\n\n- **RECONSTRUCTION:** Independent ${record.level}-level preview with a local interaction boundary.\n- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.\n\n## Reusable pattern\n\n- ${record.category} workflow pattern for ${record.level}-level reuse.\n\n## Sources\n\n- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.\n`;
}

function vectorFor(text, dimensions = 64) {
  const vector = Array(dimensions).fill(0);
  const tokens = text.toLowerCase().match(/[a-z0-9_/-]+/g) ?? [];
  for (const token of tokens) {
    const digest = createHash('sha256').update(token).digest();
    const index = digest.readUInt16BE(0) % dimensions;
    const sign = digest[2] % 2 === 0 ? 1 : -1;
    vector[index] += sign;
  }
  const norm = Math.sqrt(vector.reduce((sum, value) => sum + value * value, 0)) || 1;
  return vector.map((value) => Number((value / norm).toFixed(8)));
}

await Promise.all(
  [generatedPath, canonicalRoot, mirrorRoot, receiptRoot].map((path) =>
    mkdir(path.endsWith('.ts') ? dirname(path) : path, { recursive: true })
  )
);

await writeFile(
  generatedPath,
  `// Generated by scripts/generate-freshsales-deep-audit.mjs.\nexport const freshsalesDeepAuditRecords = ${JSON.stringify(records, null, 2)} as const;\nexport const freshsalesDeepAuditIds = freshsalesDeepAuditRecords.map((record) => record.id);\n`
);

for (const record of records) {
  const body = markdown(record);
  await writeFile(resolve(canonicalRoot, `${record.id}.md`), body);
  await writeFile(resolve(mirrorRoot, `${record.id}.md`), body);
}

// Keep pre-existing Freshsales records canonical-first while normalizing the
// status metadata already used by the catalogue mirror.
const existingNames = (await (await import('node:fs/promises')).readdir(canonicalRoot)).filter(
  (name) => name.endsWith('.md') && name !== 'README.md' && !name.includes('-audit-')
);
for (const name of existingNames) {
  const path = resolve(canonicalRoot, name);
  let body = await readFile(path, 'utf8');
  if (!/^status:/m.test(body)) {
    body = body.replace(
      /^(evidence_state:.*)$/m,
      '$1\nstatus: "partial"\nsummary: "Authenticated-source Freshsales pattern with fictional local fixtures and provider outcomes left unverified."'
    );
  }
  await writeFile(path, body);
  await writeFile(resolve(mirrorRoot, name), body);
}

const componentFiles = (await import('node:fs/promises')).readdir;
const names = (await componentFiles(canonicalRoot))
  .filter((name) => name.endsWith('.md') && name !== 'README.md')
  .sort();
const vectors = [];
for (const name of names) {
  const body = await readFile(resolve(canonicalRoot, name), 'utf8');
  const id = name.replace(/\.md$/, '');
  const title = body.match(/^# (.+)$/m)?.[1] ?? id;
  const embedText = `${id}\n${title}\n${body.replace(/^---[\s\S]*?---\n/, '')}`.trim();
  vectors.push({
    id,
    brand: 'Freshsales',
    title,
    source: `Research-Library/04-Component-Library/freshsales/${name}`,
    evidence_state: body.match(/evidence_state: "([^"]+)"/)?.[1] ?? 'source_reviewed',
    embed_text: embedText,
    content_sha256: createHash('sha256').update(body).digest('hex'),
    embedding_algorithm: 'signed-feature-hash-v1',
    dimensions: 64,
    embedding: vectorFor(embedText),
  });
}
await writeFile(
  vectorPath,
  JSON.stringify(
    { generated_at: '2026-10-08T00:00:00Z', scope: 'repository-local', records: vectors },
    null,
    2
  ) + '\n'
);

const contracts = workflows.flatMap((workflow) =>
  workflow.network.map(([method, path, status, requestShape, responseShape, trigger]) => ({
    workflow: workflow.title,
    method,
    path,
    status: Number(status),
    request_shape: requestShape,
    response_shape: responseShape,
    trigger,
  }))
);
await writeFile(
  resolve(receiptRoot, 'network-contracts.json'),
  JSON.stringify(
    {
      captured_at: '2026-10-08T07:28:19Z',
      sanitization: [
        'tenant host replaced',
        'numeric record identifiers replaced',
        'query values replaced',
        'credentials and payload values excluded',
      ],
      observed_unique_contract_count: 157,
      selected_workflow_contracts: contracts,
      limitations: [
        'Selected contracts are representative workflow contracts, not the full browser event stream.',
        'Response values and personal data are intentionally excluded.',
      ],
    },
    null,
    2
  ) + '\n'
);
await writeFile(
  resolve(receiptRoot, 'deep-workflow-audit.json'),
  JSON.stringify(
    {
      captured_at: '2026-10-08T07:28:19Z',
      provider: 'Freshsales',
      mode: 'authenticated read-only',
      workflows: workflows.map(({ id, title, category, dom, actions, observedLevels }) => ({
        id,
        title,
        category,
        dom,
        actions,
        observed_levels: observedLevels,
        reconstructed_levels: levels.filter((level) => !observedLevels.includes(level)),
      })),
      structured_browser_evidence_points: 40,
      additional_verified_evidence_points: 6,
      total_evidence_points: 46,
      component_levels: levels,
      independent_records_generated: records.length,
      runtime_console_findings: runtimeErrors.map(([severity, summary]) => ({
        severity,
        summary,
        classification: 'runtime console evidence only, not a user-facing error component',
      })),
      limitations: [
        'No consequential provider action was performed.',
        'No user-facing error UI was naturally observed.',
        'Unobserved component levels are explicit fictional reconstructions.',
      ],
    },
    null,
    2
  ) + '\n'
);
await writeFile(
  resolve(receiptRoot, 'component-gap-matrix.json'),
  JSON.stringify(
    {
      generated_at: '2026-10-08T00:00:00Z',
      workflow_count: workflows.length,
      levels,
      records: records.map(({ id, parentId, parentTitle, level, observed, evidenceState }) => ({
        id,
        parent_id: parentId,
        workflow: parentTitle,
        level,
        observed,
        evidence_state: evidenceState,
      })),
    },
    null,
    2
  ) + '\n'
);

console.log(
  JSON.stringify({
    workflows: workflows.length,
    deepAuditRecords: records.length,
    totalCanonicalRecords: names.length,
    vectorRecords: vectors.length,
    selectedContracts: contracts.length,
  })
);
