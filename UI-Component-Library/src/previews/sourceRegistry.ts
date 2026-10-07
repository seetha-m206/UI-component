import { framerRemainingPreviews } from './framer-remaining/registry';
import { dudaDefinitions } from './duda-shared/catalogue';
import { framerScreenPreviews } from './framer-screens/registry';
import { framerPrimaryPreviews } from './framer-primary/registry';
import { salesforceComponents } from './salesforce-service-shared/catalogue';
import { zohoDeskComponents } from './zoho-desk-shared/catalogue';
import { hostingerEntries } from './hostinger-shared/registry';
import { hubspotSuiteIds } from './hubspot-suite-shared/registry';
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

// The remaining HubSpot families share one fixture-driven renderer while every
// catalogue record keeps an independent preview entry and state set.
const hubspotSuiteShared = sourceRegistry['hubspot-suite-shared'];
if (hubspotSuiteShared) {
  for (const id of hubspotSuiteIds) {
    sourceRegistry[id] = {
      files: hubspotSuiteShared.files
        .filter((file) => file.fileName !== 'registry.ts')
        .map((file) => ({ ...file, fileName: '../hubspot-suite-shared/' + file.fileName })),
    };
  }
}

// Pipedrive records share one fictional reconstruction while keeping each
// reusable pattern independently addressable in the catalogue.
const pipedriveShared = sourceRegistry['pipedrive-shared'];
if (pipedriveShared) {
  const pipedriveIds = [
    'pipedrive-application-shell',
    'pipedrive-setup-guide-hero',
    'pipedrive-setup-guide-task-group',
    'pipedrive-setup-guide-task-row',
    'pipedrive-more-menu',
    'pipedrive-quick-add-menu',
    'pipedrive-notifications-drawer',
    'pipedrive-quick-help-drawer',
    'pipedrive-sales-assistant-panel',
    'pipedrive-avatar-coachmark',
    'pipedrive-deals-navigation',
    'pipedrive-import-banner',
    'pipedrive-pipeline-toolbar',
    'pipedrive-pipeline-selector',
    'pipedrive-deals-filter-menu',
    'pipedrive-deals-actions-menu',
    'pipedrive-deals-sort-menu',
    'pipedrive-pipeline-stage-column',
    'pipedrive-deal-card',
    'pipedrive-pipeline-onboarding-tooltip',
  ];
  for (const id of pipedriveIds) {
    sourceRegistry[id] = {
      files: pipedriveShared.files
        .filter((file) => file.fileName !== 'registry.ts')
        .map((file) => ({ ...file, fileName: '../pipedrive-shared/' + file.fileName })),
    };
  }
}

// Freshsales records share one fictional local reconstruction while each
// observed screen pattern remains independently addressable in the catalogue.
const freshsalesShared = sourceRegistry['freshsales-shared'];
if (freshsalesShared) {
  const freshsalesIds = [
    'freshsales-application-shell',
    'freshsales-contacts-workspace',
    'freshsales-filter-and-view-controls',
    'freshsales-accounts-workspace',
    'freshsales-deals-multi-view',
    'freshsales-contact-record',
    'freshsales-dashboard-sample-state',
    'freshsales-analytics-report-library',
    'freshsales-conversations-onboarding',
    'freshsales-sales-sequences-onboarding',
    'freshsales-workflow-template-library',
    'freshsales-admin-settings-catalogue',
    'freshsales-deal-record-detail',
    'freshsales-account-record-overview',
    'freshsales-deal-import-setup',
    'freshsales-roles-and-permissions',
    'freshsales-role-permission-matrix',
    'freshsales-contact-scoring-setup',
    'freshsales-freddy-ai-settings',
    'freshsales-plan-boundary-states',
    'freshsales-pipeline-stage',
    'freshsales-deal-card',
    'freshsales-loading-skeleton',
    'freshsales-saved-view-menu',
    'freshsales-filter-drawer',
    'freshsales-table-toolbar',
    'freshsales-record-action-bar',
    'freshsales-field-group',
    'freshsales-activity-card',
    'freshsales-import-dropzone',
    'freshsales-required-fields-popover',
    'freshsales-duplicate-option',
    'freshsales-license-banner',
    'freshsales-role-row',
    'freshsales-permission-row',
    'freshsales-signal-chip',
    'freshsales-feature-toggle',
    'freshsales-application-shell-loading',
    'freshsales-analytics-loading',
    'freshsales-workflow-loading',
    'freshsales-deals-loading',
    'freshsales-contact-activity-loading',
    'freshsales-deal-detail-loading',
  ];
  for (const id of freshsalesIds) {
    sourceRegistry[id] = {
      files: freshsalesShared.files
        .filter((file) => file.fileName !== 'registry.ts')
        .map((file) => ({ ...file, fileName: '../freshsales-shared/' + file.fileName })),
    };
  }
}

// Salesforce Sales records share one fictional local reconstruction while each
// observed screen pattern remains independently addressable in the catalogue.
const salesforceSalesShared = sourceRegistry['salesforce-sales-shared'];
if (salesforceSalesShared) {
  const salesforceSalesIds = [
    'salesforce-sales-application-shell',
    'salesforce-sales-object-list-workspace',
    'salesforce-sales-new-lead-form',
    'salesforce-sales-new-contact-form',
    'salesforce-sales-new-account-form',
    'salesforce-sales-new-opportunity-form',
    'salesforce-sales-new-product-wizard',
    'salesforce-sales-new-event-form',
    'salesforce-sales-new-task-form',
    'salesforce-sales-opportunity-kanban',
    'salesforce-sales-calendar-week',
    'salesforce-sales-todo-utility',
    'salesforce-sales-analytics-collection',
    'salesforce-sales-performance-dashboard',
    'salesforce-sales-forecast-report',
    'salesforce-sales-quotes-access-boundary',
    'salesforce-sales-leads-import-flow',
    'salesforce-sales-invoice-list',
    'salesforce-sales-agentforce-enable-panel',
    'salesforce-sales-quick-settings',
  ];
  for (const id of salesforceSalesIds) {
    sourceRegistry[id] = {
      files: salesforceSalesShared.files
        .filter((file) => file.fileName !== 'registry.ts')
        .map((file) => ({ ...file, fileName: '../salesforce-sales-shared/' + file.fileName })),
    };
  }
}

// Wix records share a fictional local reconstruction. Expose the shared
// implementation in each Wix component Code tab.
const wixShared = sourceRegistry['wix-shared'];
if (wixShared) {
  const wixIds = [
    'wix-dashboard-application-shell',
    'wix-setup-checklist',
    'wix-quick-actions-catalog',
    'wix-analytics-highlights',
    'wix-ai-site-design-entry',
    'wix-template-gallery-and-responsive-preview',
    'wix-realtime-analytics',
    'wix-traffic-overview',
    'wix-analytics-date-range',
    'wix-seo-geo-overview',
    'wix-seo-help-menu',
    'wix-contacts-workspace',
    'wix-contact-create-menu',
    'wix-manage-apps',
    'wix-installed-app-actions-drawer',
    'wix-behavior-overview',
    'wix-marketing-overview',
    'wix-session-recordings-gate',
    'wix-insights-benchmarks',
    'wix-home-dashboard',
    'wix-inbox-setup',
    'wix-automations-workspace',
    'wix-forms-submissions',
    'wix-website-overview-and-utility-menus',
    'wix-site-speed-analysis',
    'wix-uptime-security-gate',
    'wix-mobile-app-overview',
    'wix-symphony-agent-entry',
    'wix-design-agent-entry',
    'wix-getting-paid-overview',
    'wix-payments-plan-gate',
    'wix-receipts-empty-state',
    'wix-point-of-sale-entry',
    'wix-settings-and-seo-workspace',
    'wix-app-market-entry',
    'wix-marketing-agent-loading',
    'wix-portfolio-projects-loading',
    'wix-portfolio-collections-loading',
    'wix-portfolio-integrations-loading',
    'wix-logo-brand-loading',
    'wix-hopp-loading',
    'wix-all-reports-loading',
    'wix-sales-overview-loading',
    'wix-catalog-loading',
    'wix-pos-checkout-entry',
    'wix-business-email-domain-gate',
  ];
  for (const id of wixIds) {
    sourceRegistry[id] = {
      files: wixShared.files
        .filter((file) => file.fileName !== 'registry.ts')
        .map((file) => ({ ...file, fileName: '../wix-shared/' + file.fileName })),
    };
  }
}

// Hostinger records share one fictional reconstruction while retaining an
// independent preview and fixture set for every component record.
const hostingerShared = sourceRegistry['hostinger-shared'];
if (hostingerShared) {
  for (const [id] of hostingerEntries) {
    sourceRegistry[id] = {
      files: hostingerShared.files.map((file) => ({
        ...file,
        fileName: '../hostinger-shared/' + file.fileName,
      })),
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

const framerPrimarySource = sourceRegistry['framer-primary'];
if (framerPrimarySource) {
  for (const id of Object.keys(framerPrimaryPreviews))
    sourceRegistry[id] = {
      files: framerPrimarySource.files.map((file) => ({
        ...file,
        fileName: '../framer-primary/' + file.fileName,
      })),
    };
}

const framerScreenSource = sourceRegistry['framer-screens'];
if (framerScreenSource) {
  for (const id of Object.keys(framerScreenPreviews))
    sourceRegistry[id] = {
      files: [
        ...framerScreenSource.files.map((file) => ({
          ...file,
          fileName: '../framer-screens/' + file.fileName,
        })),
        ...(framerPrimarySource?.files ?? []).map((file) => ({
          ...file,
          fileName: '../framer-primary/' + file.fileName,
        })),
      ],
    };
}

// Every Duda Code tab includes the shared renderer, styles, fixture definitions and registry.
const dudaShared = sourceRegistry['duda-shared'];
if (dudaShared) {
  for (const def of dudaDefinitions)
    sourceRegistry[def.id] = {
      files: dudaShared.files.map((file) => ({
        ...file,
        fileName: '../duda-shared/' + file.fileName,
      })),
    };
}

const framerRemainingSource = sourceRegistry['framer-remaining'];
if (framerRemainingSource) {
  for (const id of Object.keys(framerRemainingPreviews))
    sourceRegistry[id] = {
      files: framerRemainingSource.files.map((file) => ({
        ...file,
        fileName: '../framer-remaining/' + file.fileName,
      })),
    };
}
