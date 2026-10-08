import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const appRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const repoRoot = path.resolve(appRoot, '..');
const canonicalRoot = path.join(repoRoot, 'Research-Library', '04-Component-Library');
const mirrorRoot = path.join(appRoot, 'src', 'content', 'brands');
const generatedRoot = path.join(appRoot, 'src', 'previews', 'hubspot-deep-audit');
const vectorRoot = path.join(appRoot, 'src', 'content', 'vectors');
const evidenceRoot = path.join(
  repoRoot,
  'Internal',
  'scratch-2026-10',
  'hubspot-deep-component-audit'
);
const marker = '<!-- GENERATED: hubspot-deep-audit-v1 -->';
const levels = ['screen', 'action', 'atomic', 'state', 'loading', 'empty', 'error', 'interaction'];

function frontmatterValue(raw, key) {
  const match = raw.match(new RegExp('^' + key + ':\\s*["\\x27]?(.+?)["\\x27]?\\s*$', 'm'));
  return match?.[1]?.replace(/["']$/, '').trim() || '';
}

function section(raw, names) {
  for (const name of names) {
    const heading = '## ' + name;
    const start = raw.split('\n').findIndex((line) => line.trim() === heading);
    if (start < 0) continue;
    const lines = raw.split('\n');
    let end = lines.length;
    for (let index = start + 1; index < lines.length; index += 1) {
      if (lines[index].startsWith('## ')) {
        end = index;
        break;
      }
    }
    const body = lines
      .slice(start + 1, end)
      .join('\n')
      .trim();
    if (body) return body;
  }
  return '';
}

function cleanLines(value, limit = 8) {
  return value
    .split('\n')
    .map((line) =>
      line
        .replace(/^\s*[-*]\s*/, '')
        .replace(/^\s*\|/, '')
        .replace(/\|\s*$/, '')
        .replace(/\*\*/g, '')
        .replace(/\s+/g, ' ')
        .trim()
    )
    .filter((line) => line && !/^[-| :]+$/.test(line))
    .slice(0, limit);
}

function escapeValue(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function titleFromId(value) {
  return value
    .replace(/^hubspot-/, '')
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function evidenceTag(text) {
  if (/NOT OBSERVED|NOT ACTIVATED|NEEDS VERIFICATION/i.test(text)) return 'NOT OBSERVED';
  if (/\bOBSERVED\b|\bFACT\b|\b(?:GET|POST|PUT|PATCH|DELETE)\s+\//.test(text)) return 'OBSERVED';
  if (/RECONSTRUCTION|fictional|synthetic/i.test(text)) return 'RECONSTRUCTION';
  return 'NOT OBSERVED';
}

function observedFor(level, corpus) {
  const rules = {
    screen: /\bOBSERVED\b|\bFACT\b/,
    action: /\bActions?\b|SAFE ACTION|NOT ACTIVATED/i,
    atomic: /DOM|button|input|table|card|menu|drawer|selector|field|heading/i,
    state: /States?|selected|disabled|expanded|collapsed|active|locked|gate/i,
    loading: /loading|skeleton|spinner|progress/i,
    empty: /empty|no records|no results|zero count|not created|not configured/i,
    error: /error|failed|failure|retry|unavailable|invalid/i,
    interaction: /clicked|opened|closed|switch|toggle|filter|search|dismissed|Escape/i,
  };
  return rules[level].test(corpus);
}

function levelSummary(parent, level, observed) {
  const labels = {
    screen: 'screen composition and workflow boundary',
    action: 'user actions and guarded outcomes',
    atomic: 'reusable controls, fields, menus, cards, rows, and semantic roles',
    state: 'visible selection, entitlement, disabled, expanded, and status states',
    loading: 'loading, progress, pending, and stalled states',
    empty: 'empty, first-run, zero-result, and unconfigured states',
    error: 'error, unavailable, validation, retry, and failure states',
    interaction: 'local interaction transitions and state changes',
  };
  const suffix = observed
    ? ' Derived from the authored observation record.'
    : ' The source record does not directly observe this state, so the fixture is a labelled local reconstruction.';
  return (
    (observed ? 'Evidence-backed ' : 'Evidence-bounded ') +
    labels[level] +
    ' for ' +
    parent.title +
    '.' +
    suffix
  );
}

function evidenceForLevel(parent, level) {
  const corpus = [
    parent.structure,
    parent.actions,
    parent.states,
    parent.technical,
    parent.boundary,
  ].join('\n');
  const observed = observedFor(level, corpus);
  const map = {
    screen: cleanLines(parent.structure || parent.screen, 8),
    action: cleanLines(parent.actions, 10),
    atomic: cleanLines([parent.structure, parent.technical].join('\n'), 10),
    state: cleanLines(parent.states || parent.screen, 10),
    loading: cleanLines(corpus, 24).filter((line) =>
      /loading|skeleton|spinner|progress|pending|stalled/i.test(line)
    ),
    empty: cleanLines(corpus, 24).filter((line) =>
      /empty|no records|no results|zero|not created|not configured/i.test(line)
    ),
    error: cleanLines(corpus, 24).filter((line) =>
      /error|failed|failure|retry|unavailable|invalid/i.test(line)
    ),
    interaction: cleanLines([parent.actions, parent.states].join('\n'), 10),
  };
  const observations = map[level].length
    ? map[level]
    : [
        (observed ? 'OBSERVED' : 'NOT OBSERVED') +
          ': The authored parent record does not provide a more specific ' +
          level +
          ' description.',
      ];
  return { observed, observations };
}

function networkEvidence(parent) {
  const lines = cleanLines([parent.technical, parent.actions, parent.boundary].join('\n'), 40)
    .filter((line) =>
      /network|api|request|response|endpoint|GET |POST |PATCH |PUT |DELETE |route/i.test(line)
    )
    .slice(0, 8);
  return lines.length
    ? lines.map((line) => ({ state: evidenceTag(line), detail: line }))
    : [
        {
          state: 'NOT OBSERVED',
          detail:
            'No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.',
        },
      ];
}

function domEvidence(parent, observations) {
  const lines = cleanLines([parent.structure, parent.technical].join('\n'), 40)
    .filter((line) =>
      /DOM|button|input|table|card|menu|drawer|selector|field|heading|role|link|tab|checkbox/i.test(
        line
      )
    )
    .slice(0, 10);
  return lines.length
    ? lines.map((line) => ({ state: evidenceTag(line), detail: line }))
    : observations
        .slice(0, 4)
        .map((line) => ({
          state: 'NOT OBSERVED',
          detail: 'Semantic DOM detail not independently captured. Source context: ' + line,
        }));
}

function fixtureFor(parent, level, observed, observations) {
  const fixture = {
    workflow: parent.id,
    component_level: level,
    evidence_state: observed ? 'source_reviewed' : 'reconstructed',
    data_scope: 'fictional_local_only',
    status: observed ? 'documented' : 'not_observed',
  };
  if (level === 'loading')
    fixture.progress = observed ? 'documented loading state' : 'synthetic pending state';
  if (level === 'empty') fixture.result_count = '0';
  if (level === 'error')
    fixture.error_message = observed ? observations[0] : 'Fictional retryable error';
  if (level === 'action') fixture.last_action = 'none';
  if (level === 'interaction') fixture.interaction_result = 'local guard';
  if (level === 'atomic') fixture.control_count = String(Math.max(1, observations.length));
  if (level === 'state') fixture.selected_state = observed ? 'documented' : 'synthetic';
  if (level === 'screen') fixture.layout = parent.category.split('>')[0]?.trim() || 'workspace';
  return fixture;
}

function renderEvidence(items) {
  return items.map((item) => '- **' + item.state + ':** ' + item.detail).join('\n');
}

function renderRecord(record, mirror) {
  const fields = [
    '---',
    'component: "' + escapeValue(record.component) + '"',
    'ui_category: "' + escapeValue(record.category) + '"',
    'source_product: "' + escapeValue(record.product) + '"',
    'last_verified: "' + record.lastVerified + '"',
    'evidence_state: "' + record.evidenceState + '"',
  ];
  if (mirror) {
    fields.push('status: "' + (record.observed ? 'complete' : 'partial') + '"');
    fields.push('summary: "' + escapeValue(record.summary) + '"');
  }
  fields.push('parent_workflow: "' + record.parentId + '"');
  fields.push('component_level: "' + record.level + '"');
  fields.push('---');
  const structure = record.observations
    .map((line) => '- **' + (record.observed ? 'OBSERVED' : 'NOT OBSERVED') + ':** ' + line)
    .join('\n');
  const actions = record.actions.map((line) => '- ' + line).join('\n');
  const yaml = Object.entries(record.fixture)
    .map(([key, value]) => key + ': "' + escapeValue(value) + '"')
    .join('\n');
  return (
    fields.join('\n') +
    '\n\n# ' +
    record.component +
    '\n\n' +
    marker +
    '\n\n## Location\n\n- **SOURCE REVIEWED:** Derived from [' +
    record.parentTitle +
    '](./' +
    record.parentId +
    '.md).\n- **COMPONENT LEVEL:** ' +
    record.level +
    '.' +
    '\n\n## Structure\n\n' +
    structure +
    '\n\n## Actions\n\n' +
    actions +
    '\n\n## Behavior & States\n\n- **DOCUMENTED:** Independently addressable as ' +
    record.id +
    '.\n- **' +
    (record.observed ? 'OBSERVED' : 'RECONSTRUCTION') +
    ':** ' +
    record.summary +
    '\n- **GUARD:** All fixture actions change local preview state only.' +
    '\n\n## Technical Data\n\n### DOM Structure\n\n' +
    renderEvidence(record.dom) +
    '\n\n### Network / API\n\n' +
    renderEvidence(record.network) +
    '\n\n## Fictional Local Fixture\n\n~~~yaml\n' +
    yaml +
    '\n~~~' +
    '\n\n## Evidence Boundary\n\n- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.\n- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.\n- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.' +
    '\n\n## Cross-Component Pattern Note\n\n- Parent workflow: ' +
    record.parentId +
    '.\n- Reusable level: ' +
    record.level +
    '.\n- Sibling audit records share this parent and differ by component level.' +
    '\n\n## Sources\n\n- Authored parent record: Research-Library/04-Component-Library/' +
    record.brand +
    '/' +
    record.parentId +
    '.md.\n- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.\n'
  );
}

function featureHash(text, dimensions = 64) {
  const vector = Array(dimensions).fill(0);
  for (const token of text.toLowerCase().match(/[a-z0-9]+/g) || []) {
    const digest = crypto.createHash('sha256').update(token).digest();
    vector[digest.readUInt32BE(0) % dimensions] += digest[4] % 2 === 0 ? 1 : -1;
  }
  const magnitude = Math.sqrt(vector.reduce((sum, value) => sum + value * value, 0)) || 1;
  return vector.map((value) => Number((value / magnitude).toFixed(6)));
}

const brands = fs
  .readdirSync(canonicalRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && entry.name.startsWith('hubspot-'))
  .map((entry) => entry.name)
  .sort();
const parents = [];
for (const brand of brands) {
  const directory = path.join(canonicalRoot, brand);
  for (const fileName of fs
    .readdirSync(directory)
    .filter((name) => name.endsWith('.md'))
    .sort()) {
    const raw = fs.readFileSync(path.join(directory, fileName), 'utf8');
    if (fileName === 'README.md' || raw.includes(marker)) continue;
    const id = fileName.replace(/\.md$/, '');
    const mirrorPath = path.join(mirrorRoot, brand, 'components', fileName);
    const mirror = fs.existsSync(mirrorPath) ? fs.readFileSync(mirrorPath, 'utf8') : raw;
    const title = frontmatterValue(raw, 'component') || titleFromId(id);
    parents.push({
      id,
      brand,
      title,
      category: frontmatterValue(raw, 'ui_category') || 'HubSpot > Workflow',
      product: frontmatterValue(raw, 'source_product') || 'HubSpot',
      lastVerified: frontmatterValue(raw, 'last_verified') || '2026-10-08',
      summary:
        frontmatterValue(mirror, 'summary') ||
        'Authored HubSpot workflow record for ' + title + '.',
      structure: section(raw, ['Structure']),
      screen: section(raw, ['Screen, Actions & States']),
      actions: section(raw, ['Actions', 'Screen, Actions & States']),
      states: section(raw, ['Behavior & States', 'Screen, Actions & States']),
      technical: section(raw, ['Technical Data']),
      boundary: section(raw, ['Evidence Boundary', 'AI Context']),
    });
  }
}

const deepRecords = [];
for (const parent of parents) {
  const network = networkEvidence(parent);
  for (const level of levels) {
    const evidence = evidenceForLevel(parent, level);
    const actions = cleanLines(parent.actions, 10);
    const record = {
      id: parent.id + '-audit-' + level,
      brand: parent.brand,
      parentId: parent.id,
      parentTitle: parent.title,
      level,
      component:
        parent.title + ' — ' + level.charAt(0).toUpperCase() + level.slice(1) + ' Component',
      category: 'Deep Audit > ' + level.charAt(0).toUpperCase() + level.slice(1) + ' Level',
      product: parent.product,
      lastVerified: parent.lastVerified,
      evidenceState: evidence.observed ? 'source_reviewed' : 'runtime_pending',
      observed: evidence.observed,
      summary: levelSummary(parent, level, evidence.observed),
      observations: evidence.observations,
      actions: actions.length
        ? actions
        : ['No safe user action was documented for the parent workflow.'],
      dom: domEvidence(parent, evidence.observations),
      network,
      fixture: fixtureFor(parent, level, evidence.observed, evidence.observations),
    };
    deepRecords.push(record);
    const canonicalPath = path.join(canonicalRoot, parent.brand, record.id + '.md');
    const mirrorPath = path.join(mirrorRoot, parent.brand, 'components', record.id + '.md');
    fs.mkdirSync(path.dirname(mirrorPath), { recursive: true });
    fs.writeFileSync(canonicalPath, renderRecord(record, false));
    fs.writeFileSync(mirrorPath, renderRecord(record, true));
  }
}

fs.mkdirSync(generatedRoot, { recursive: true });
fs.writeFileSync(
  path.join(generatedRoot, 'generated.ts'),
  '// Generated by scripts/generate-hubspot-deep-audit.mjs. Do not edit by hand.\n' +
    'export const hubspotDeepAuditRecords = ' +
    JSON.stringify(deepRecords, null, 2).replace(/<\//g, '<\\/') +
    ' as const;\n' +
    'export const hubspotDeepAuditIds = hubspotDeepAuditRecords.map((record) => record.id);\n'
);

const parentVectors = parents.map((parent) => ({
  id: parent.brand + '/' + parent.id,
  brand: parent.brand,
  catalogue_id: parent.id,
  component: parent.title,
  group: parent.category.split('>')[0]?.trim() || 'HubSpot',
  component_level: 'workflow',
  parent_workflow: parent.id,
  summary: parent.summary,
  status: 'complete',
  evidence_state: 'source_reviewed',
  last_verified: parent.lastVerified,
  tags: ['hubspot', 'workflow', parent.brand, parent.category.toLowerCase().replace(/\s+/g, '-')],
  related_components: levels.map((level) => parent.id + '-audit-' + level),
}));
const childVectors = deepRecords.map((record) => ({
  id: record.brand + '/' + record.id,
  brand: record.brand,
  catalogue_id: record.id,
  component: record.component,
  group: 'Deep Audit',
  component_level: record.level,
  parent_workflow: record.parentId,
  summary: record.summary,
  status: record.observed ? 'complete' : 'partial',
  evidence_state: record.evidenceState,
  last_verified: record.lastVerified,
  tags: [
    'hubspot',
    'deep-audit',
    record.level,
    record.brand,
    record.observed ? 'observed' : 'reconstruction',
  ],
  related_components: [record.parentId].concat(
    levels
      .filter((level) => level !== record.level)
      .map((level) => record.parentId + '-audit-' + level)
  ),
}));
const vectors = parentVectors.concat(childVectors).map((record) => {
  const embedText = [
    record.component,
    record.group,
    record.component_level,
    record.summary,
    record.tags.join(' '),
  ].join(' | ');
  return {
    ...record,
    embed_text: embedText,
    embedding: {
      kind: 'deterministic-local-feature-hash-v1',
      dimensions: 64,
      values: featureHash(embedText),
      limitation:
        'Local normalized token feature hash. This is not a provider or semantic-model embedding.',
    },
  };
});
fs.mkdirSync(vectorRoot, { recursive: true });
fs.writeFileSync(
  path.join(vectorRoot, 'hubspot-deep-audit.json'),
  JSON.stringify(
    {
      generated_at: '2026-10-08',
      contract: 'hubspot-deep-audit-vector-v1',
      parent_workflows: parents.length,
      deep_components: deepRecords.length,
      total_records: vectors.length,
      records: vectors,
    },
    null,
    2
  ) + '\n'
);

fs.mkdirSync(evidenceRoot, { recursive: true });
fs.writeFileSync(
  path.join(evidenceRoot, 'workflow-matrix.json'),
  JSON.stringify(
    {
      generated_at: '2026-10-08',
      parent_workflows: parents.length,
      component_levels: levels,
      deep_components: deepRecords.length,
      observed_by_level: Object.fromEntries(
        levels.map((level) => [
          level,
          deepRecords.filter((record) => record.level === level && record.observed).length,
        ])
      ),
      workflows: parents.map((parent) => ({
        id: parent.id,
        brand: parent.brand,
        title: parent.title,
        last_verified: parent.lastVerified,
        structure_lines: cleanLines(parent.structure || parent.screen, 100).length,
        action_lines: cleanLines(parent.actions, 100).length,
        state_lines: cleanLines(parent.states, 100).length,
        dom_evidence: domEvidence(parent, cleanLines(parent.structure || parent.screen, 4)),
        network_evidence: networkEvidence(parent),
        deep_component_ids: levels.map((level) => parent.id + '-audit-' + level),
      })),
    },
    null,
    2
  ) + '\n'
);

console.log(
  JSON.stringify(
    {
      parent_workflows: parents.length,
      component_levels: levels.length,
      deep_components: deepRecords.length,
      vectors: vectors.length,
    },
    null,
    2
  )
);
