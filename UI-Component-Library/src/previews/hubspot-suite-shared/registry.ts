import type { PreviewConfig, PreviewRegistry } from '../types';
import {
  HubspotSuitePreview,
  type HubspotFixtureField,
  type HubspotSuiteRecord,
} from './HubspotSuitePreview';

const modules = import.meta.glob('/src/content/brands/hubspot-*/components/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

const config: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1180 },
    { id: 'narrow', label: 'Narrow', width: 390 },
  ],
  toggles: [
    { id: 'disabled', label: 'Fixture controls', onLabel: 'Disabled', offLabel: 'Enabled' },
  ],
};

const salesFixtures: Record<string, Record<string, string>> = {
  'hubspot-sales-application-shell': {
    account: 'Northstar Growth Studio',
    user: 'Avery Chen',
    setup_progress: '2 of 5 complete',
    status: 'active',
  },
  'hubspot-crm-index-workspace': {
    object: 'Contacts',
    saved_view: 'Northstar prospects',
    records: '3 fictional contacts',
    status: 'populated',
  },
  'hubspot-crm-record-detail-workspace': {
    contact: 'Morgan Lee',
    company: 'Alder and Pine Ltd',
    lifecycle_stage: 'marketing qualified lead',
    status: 'active',
  },
  'hubspot-deal-pipeline-board': {
    pipeline: 'Northstar new business',
    deal: 'Alder expansion',
    amount: 'CAD 24000',
    status: 'proposal sent',
  },
  'hubspot-deal-stage-editor': {
    pipeline: 'Northstar new business',
    stage: 'Solution review',
    probability: '60 percent',
    status: 'unsaved local change',
  },
  'hubspot-crm-automation-drawer': {
    object: 'Contact',
    suggestion: 'Assign follow-up owner',
    trigger: 'lifecycle stage changed',
    status: 'locked',
  },
  'hubspot-crm-index-filtering-and-view-settings': {
    view: 'Northstar priority accounts',
    owner: 'Example owner',
    filters: '2 active filters',
    status: 'local preview',
  },
  'hubspot-segments-workspace': {
    segment: 'Northstar renewal cohort',
    object: 'Contacts',
    members: '42 fictional records',
    status: 'draft',
  },
  'hubspot-segments-analysis-dashboard': {
    segment: 'Northstar renewal cohort',
    conversion_rate: '18 percent',
    active_members: '42',
    status: 'sample analytics',
  },
  'hubspot-tasks-workspace': {
    task: 'Review Alder renewal brief',
    assignee: 'Morgan Lee',
    due: '2026-11-05',
    status: 'not started',
  },
  'hubspot-meetings-activity-workspace': {
    meeting: 'Northstar discovery call',
    attendee: 'Avery Chen',
    duration: '30 minutes',
    status: 'scheduled',
  },
  'hubspot-sales-calendar-and-scheduling': {
    calendar: 'Northstar sales calendar',
    booking_page: 'Discovery meeting',
    timezone: 'America Toronto',
    status: 'available',
  },
  'hubspot-sales-activity-feed': {
    event: 'Alder proposal viewed',
    contact: 'Morgan Lee',
    occurred: '10 minutes ago',
    status: 'unread',
  },
  'hubspot-sales-entitlement-gates': {
    feature: 'Sales workspace',
    required_plan: 'Sales Hub Professional',
    trial_started: 'false',
    status: 'locked',
  },
  'hubspot-start-guide-goal-checklist': {
    goal: 'Build a repeatable sales process',
    completed_steps: '2',
    total_steps: '5',
    status: 'in progress',
  },
};

function frontmatterValue(raw: string, key: string) {
  const match = raw.match(new RegExp(`^${key}:\\s*["']?(.+?)["']?\\s*$`, 'm'));
  return match?.[1]?.replace(/["']$/, '').trim() || '';
}

function section(raw: string, heading: string) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return raw.match(new RegExp(`^## ${escaped}\\s*$([\\s\\S]*?)(?=^## |$)`, 'm'))?.[1]?.trim() || '';
}

function formatLabel(key: string) {
  return key.replace(/[._-]+/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function parseFixture(raw: string): HubspotFixtureField[] {
  const fixture = section(raw, 'Fictional Local Fixture');
  const block = fixture.match(/```ya?ml\s*([\s\S]*?)```/i)?.[1] || '';
  const fields: HubspotFixtureField[] = [];
  let parent = '';
  for (const line of block.split('\n')) {
    if (!line.trim() || /^\s*#/.test(line)) continue;
    const match = line.match(/^(\s*)([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!match) continue;
    const [, indent, key, rawValue] = match;
    if (!rawValue.trim()) {
      parent = key;
      continue;
    }
    const path = indent.length > 0 && parent ? `${parent}.${key}` : key;
    if (indent.length === 0) parent = '';
    fields.push({
      key: path,
      label: formatLabel(path),
      value: rawValue.replace(/^['"]|['"]$/g, ''),
    });
  }
  return fields;
}

function salesFixture(id: string): HubspotFixtureField[] {
  return Object.entries(
    salesFixtures[id] || {
      record: 'Northstar fictional record',
      status: 'local preview',
    }
  ).map(([key, value]) => ({ key, label: formatLabel(key), value }));
}

function reconstructBoundary(raw: string) {
  const direct = raw.match(/^- \*\*RECONSTRUCTION:\*\*\s*(.+)$/m)?.[1];
  return direct || 'This preview uses fictional local data and does not perform provider actions.';
}

function actionLabels(raw: string) {
  const actionSection = section(raw, 'Screen, Actions & States') || section(raw, 'Actions');
  const labels = Array.from(
    actionSection.matchAll(/^- \*\*(?:NOT ACTIVATED|OBSERVED|SAFE ACTION):\*\*\s*(.+)$/gm)
  )
    .flatMap((match) => match[1].split(/,| and /))
    .map((value) => value.replace(/\.$/, '').trim())
    .filter((value) => value.length > 2 && value.length < 72)
    .slice(0, 5);
  return labels.length ? labels : ['Open details', 'Review state', 'Create new'];
}

function statusFrom(fields: HubspotFixtureField[]) {
  const status = fields.find((field) =>
    /(^|\.)(status|entitlement|state|tier_status|connection_state|tracking_state)$/.test(field.key)
  )?.value;
  return status || 'local fixture';
}

function parseRecord(path: string, raw: string): HubspotSuiteRecord | null {
  const match = path.match(/\/brands\/(hubspot-[^/]+)\/components\/([^/]+)\.md$/);
  if (
    !match ||
    match[1] === 'hubspot-service-hub' ||
    raw.includes('GENERATED: hubspot-deep-audit-v1')
  )
    return null;
  const [, brand, id] = match;
  const parsedFields = parseFixture(raw);
  const fields = parsedFields.length ? parsedFields : salesFixture(id);
  return {
    id,
    brand,
    title: frontmatterValue(raw, 'component') || formatLabel(id),
    category: frontmatterValue(raw, 'ui_category') || 'HubSpot workspace',
    product: frontmatterValue(raw, 'source_product') || 'HubSpot',
    summary:
      frontmatterValue(raw, 'summary') ||
      'Authenticated screen pattern reconstructed with fictional local data.',
    status: statusFrom(fields),
    fields,
    actions: actionLabels(raw),
    reconstruction: reconstructBoundary(raw),
  };
}

export const hubspotSuiteRecords = Object.entries(modules)
  .map(([path, raw]) => parseRecord(path, raw))
  .filter((record): record is HubspotSuiteRecord => Boolean(record))
  .sort((a, b) => a.id.localeCompare(b.id));

export const hubspotSuiteIds = hubspotSuiteRecords.map((record) => record.id);

export const hubspotSuitePreviews: PreviewRegistry = Object.fromEntries(
  hubspotSuiteRecords.map((record) => [
    record.id,
    {
      type: 'reconstructed',
      Component: HubspotSuitePreview,
      label: 'Authenticated HubSpot screen reconstructed with fictional local data',
      evidence: `Observed ${record.product} screen structure and documented fixture boundary. Local runtime only.`,
      runtimeVerified: true,
      fixtures: [
        {
          id: 'documented',
          title: `Documented ${record.status.replace(/_/g, ' ')} state`,
          props: { record, mode: 'documented' },
        },
        {
          id: 'guarded',
          title: 'Guarded action state',
          props: { record, mode: 'guarded' },
        },
      ],
      config,
      propsSchema: [
        {
          name: 'record',
          type: 'HubspotSuiteRecord',
          required: true,
          description: 'Fictional screen descriptor derived from the catalogue fixture.',
        },
        {
          name: 'mode',
          type: 'documented | guarded',
          required: false,
          description: 'Selects the documented fixture or its local guarded-action state.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          description: 'Disables all local fixture controls.',
        },
      ],
    },
  ])
);
