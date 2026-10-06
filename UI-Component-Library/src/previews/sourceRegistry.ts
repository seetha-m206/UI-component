import { salesforceComponents } from './salesforce-service-shared/catalogue';
import { zohoDeskComponents } from './zoho-desk-shared/catalogue';
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

// HubSpot records share one fictional reconstruction while keeping independent
// fixture sets and evidence boundaries in the preview registry.
const hubspotShared = sourceRegistry['hubspot-shared'];
if (hubspotShared) {
  const hubspotIds = [
    'hubspot-application-shell',
    'hubspot-inbox-empty-state',
    'hubspot-inbox-view-and-actions',
    'hubspot-tickets-empty-board',
    'hubspot-tickets-filtered-empty',
    'hubspot-ticket-object-and-add-menus',
    'hubspot-ticket-view-settings',
    'hubspot-ticket-filter-controls',
    'hubspot-ticket-automation-drawer',
    'hubspot-unassigned-ticket-view',
    'hubspot-notifications-drawer',
    'hubspot-global-create-menu',
    'hubspot-contextual-help-center',
    'hubspot-marketplace-menu',
    'hubspot-breeze-assistant',
    'hubspot-calling-access-gate',
    'hubspot-ticket-collapsible-header',
    'hubspot-ticket-compact-view-selector',
    'hubspot-navigation-manager-guide',
    'hubspot-ticket-status-details-panel',
    'hubspot-ticket-views-manager',
    'hubspot-ticket-object-setup',
    'hubspot-ticket-pipeline-settings',
    'hubspot-ticket-pipeline-actions-menu',
    'hubspot-ticket-stage-type-menu',
    'hubspot-ticket-record-customization',
    'hubspot-ticket-preview-customization',
    'hubspot-ticket-index-customization',
    'hubspot-ticket-customization-view-actions',
    'hubspot-ticket-record-layout-editor',
  ];
  for (const id of hubspotIds) {
    sourceRegistry[id] = {
      files: hubspotShared.files
        .filter((file) => file.fileName !== 'registry.ts')
        .map((file) => ({ ...file, fileName: '../hubspot-shared/' + file.fileName })),
    };
  }
}

// Expose the shared fictional Salesforce implementation in every component Code tab.
const salesforceShared = sourceRegistry['salesforce-service-shared'];
if (salesforceShared) {
  for (const { id } of salesforceComponents) {
    sourceRegistry[id] = {
      files: salesforceShared.files
        .filter((file) => !['registry.ts', 'standalone.tsx'].includes(file.fileName))
        .map((file) => ({ ...file, fileName: '../salesforce-service-shared/' + file.fileName })),
    };
  }
}

// Expose the shared fictional Zoho Desk implementation in every component Code tab.
const zohoDeskShared = sourceRegistry['zoho-desk-shared'];
if (zohoDeskShared) {
  for (const { id } of zohoDeskComponents) {
    sourceRegistry[id] = {
      files: zohoDeskShared.files
        .filter((file) => file.fileName !== 'registry.ts')
        .map((file) => ({ ...file, fileName: '../zoho-desk-shared/' + file.fileName })),
    };
  }
}
