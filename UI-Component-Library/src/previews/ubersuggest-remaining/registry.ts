import type { PreviewRegistry } from '../types';
import { sourceRegistry } from '../sourceRegistry';
import { UbersuggestAiKeywordOverview as C0 } from '../ubersuggest-ai-keyword-overview/UbersuggestAiKeywordOverview';
import { fixtures as f0, propsSchema as p0 } from '../ubersuggest-ai-keyword-overview/fixtures';
import { previewConfig as c0 } from '../ubersuggest-ai-keyword-overview/preview.config';
import { UbersuggestBulkAnalysis as C1 } from '../ubersuggest-bulk-analysis/UbersuggestBulkAnalysis';
import { fixtures as f1, propsSchema as p1 } from '../ubersuggest-bulk-analysis/fixtures';
import { previewConfig as c1 } from '../ubersuggest-bulk-analysis/preview.config';
import { UbersuggestAiPromptIdeas as C2 } from '../ubersuggest-ai-prompt-ideas/UbersuggestAiPromptIdeas';
import { fixtures as f2, propsSchema as p2 } from '../ubersuggest-ai-prompt-ideas/fixtures';
import { previewConfig as c2 } from '../ubersuggest-ai-prompt-ideas/preview.config';
import { UbersuggestKeywordLists as C3 } from '../ubersuggest-keyword-lists/UbersuggestKeywordLists';
import { fixtures as f3, propsSchema as p3 } from '../ubersuggest-keyword-lists/fixtures';
import { previewConfig as c3 } from '../ubersuggest-keyword-lists/preview.config';
import { UbersuggestSiteAuditEntry as C4 } from '../ubersuggest-site-audit-entry/UbersuggestSiteAuditEntry';
import { fixtures as f4, propsSchema as p4 } from '../ubersuggest-site-audit-entry/fixtures';
import { previewConfig as c4 } from '../ubersuggest-site-audit-entry/preview.config';
import { UbersuggestRankTracking as C5 } from '../ubersuggest-rank-tracking/UbersuggestRankTracking';
import { fixtures as f5, propsSchema as p5 } from '../ubersuggest-rank-tracking/fixtures';
import { previewConfig as c5 } from '../ubersuggest-rank-tracking/preview.config';
import { UbersuggestProjectSetup as C6 } from '../ubersuggest-project-setup/UbersuggestProjectSetup';
import { fixtures as f6, propsSchema as p6 } from '../ubersuggest-project-setup/fixtures';
import { previewConfig as c6 } from '../ubersuggest-project-setup/preview.config';
import { UbersuggestPixelPlanGate as C7 } from '../ubersuggest-pixel-plan-gate/UbersuggestPixelPlanGate';
import { fixtures as f7, propsSchema as p7 } from '../ubersuggest-pixel-plan-gate/fixtures';
import { previewConfig as c7 } from '../ubersuggest-pixel-plan-gate/preview.config';
import { UbersuggestAiVisibilitySetup as C8 } from '../ubersuggest-ai-visibility-setup/UbersuggestAiVisibilitySetup';
import { fixtures as f8, propsSchema as p8 } from '../ubersuggest-ai-visibility-setup/fixtures';
import { previewConfig as c8 } from '../ubersuggest-ai-visibility-setup/preview.config';
import { UbersuggestTrafficOverview as C9 } from '../ubersuggest-traffic-overview/UbersuggestTrafficOverview';
import { fixtures as f9, propsSchema as p9 } from '../ubersuggest-traffic-overview/fixtures';
import { previewConfig as c9 } from '../ubersuggest-traffic-overview/preview.config';
import { UbersuggestKeywordCoverage as C10 } from '../ubersuggest-keyword-coverage/UbersuggestKeywordCoverage';
import { fixtures as f10, propsSchema as p10 } from '../ubersuggest-keyword-coverage/fixtures';
import { previewConfig as c10 } from '../ubersuggest-keyword-coverage/preview.config';
import { UbersuggestTopPages as C11 } from '../ubersuggest-top-pages/UbersuggestTopPages';
import { fixtures as f11, propsSchema as p11 } from '../ubersuggest-top-pages/fixtures';
import { previewConfig as c11 } from '../ubersuggest-top-pages/preview.config';
import { UbersuggestContentIdeas as C12 } from '../ubersuggest-content-ideas/UbersuggestContentIdeas';
import { fixtures as f12, propsSchema as p12 } from '../ubersuggest-content-ideas/fixtures';
import { previewConfig as c12 } from '../ubersuggest-content-ideas/preview.config';
import { UbersuggestBacklinksEntry as C13 } from '../ubersuggest-backlinks-entry/UbersuggestBacklinksEntry';
import { fixtures as f13, propsSchema as p13 } from '../ubersuggest-backlinks-entry/fixtures';
import { previewConfig as c13 } from '../ubersuggest-backlinks-entry/preview.config';
import { UbersuggestBacklinkOpportunity as C14 } from '../ubersuggest-backlink-opportunity/UbersuggestBacklinkOpportunity';
import { fixtures as f14, propsSchema as p14 } from '../ubersuggest-backlink-opportunity/fixtures';
import { previewConfig as c14 } from '../ubersuggest-backlink-opportunity/preview.config';
import { UbersuggestContentStudioBoundary as C15 } from '../ubersuggest-content-studio-boundary/UbersuggestContentStudioBoundary';
import {
  fixtures as f15,
  propsSchema as p15,
} from '../ubersuggest-content-studio-boundary/fixtures';
import { previewConfig as c15 } from '../ubersuggest-content-studio-boundary/preview.config';
import { UbersuggestAiChatEntry as C16 } from '../ubersuggest-ai-chat-entry/UbersuggestAiChatEntry';
import { fixtures as f16, propsSchema as p16 } from '../ubersuggest-ai-chat-entry/fixtures';
import { previewConfig as c16 } from '../ubersuggest-ai-chat-entry/preview.config';
import { UbersuggestIntegrationsCatalogue as C17 } from '../ubersuggest-integrations-catalogue/UbersuggestIntegrationsCatalogue';
import {
  fixtures as f17,
  propsSchema as p17,
} from '../ubersuggest-integrations-catalogue/fixtures';
import { previewConfig as c17 } from '../ubersuggest-integrations-catalogue/preview.config';
import { UbersuggestIntegrationGuides as C18 } from '../ubersuggest-integration-guides/UbersuggestIntegrationGuides';
import { fixtures as f18, propsSchema as p18 } from '../ubersuggest-integration-guides/fixtures';
import { previewConfig as c18 } from '../ubersuggest-integration-guides/preview.config';
import { UbersuggestMcpSetup as C19 } from '../ubersuggest-mcp-setup/UbersuggestMcpSetup';
import { fixtures as f19, propsSchema as p19 } from '../ubersuggest-mcp-setup/fixtures';
import { previewConfig as c19 } from '../ubersuggest-mcp-setup/preview.config';
import { UbersuggestBulkKeywordEditor as C20 } from '../ubersuggest-bulk-keyword-editor/UbersuggestBulkKeywordEditor';
import { fixtures as f20, propsSchema as p20 } from '../ubersuggest-bulk-keyword-editor/fixtures';
import { previewConfig as c20 } from '../ubersuggest-bulk-keyword-editor/preview.config';
import { UbersuggestListCreateDialog as C21 } from '../ubersuggest-list-create-dialog/UbersuggestListCreateDialog';
import { fixtures as f21, propsSchema as p21 } from '../ubersuggest-list-create-dialog/fixtures';
import { previewConfig as c21 } from '../ubersuggest-list-create-dialog/preview.config';
import { UbersuggestDomainScopeSelector as C22 } from '../ubersuggest-domain-scope-selector/UbersuggestDomainScopeSelector';
import { fixtures as f22, propsSchema as p22 } from '../ubersuggest-domain-scope-selector/fixtures';
import { previewConfig as c22 } from '../ubersuggest-domain-scope-selector/preview.config';
import { UbersuggestTrackingFilterPanel as C23 } from '../ubersuggest-tracking-filter-panel/UbersuggestTrackingFilterPanel';
import { fixtures as f23, propsSchema as p23 } from '../ubersuggest-tracking-filter-panel/fixtures';
import { previewConfig as c23 } from '../ubersuggest-tracking-filter-panel/preview.config';
import { UbersuggestTrackingDatePicker as C24 } from '../ubersuggest-tracking-date-picker/UbersuggestTrackingDatePicker';
import { fixtures as f24, propsSchema as p24 } from '../ubersuggest-tracking-date-picker/fixtures';
import { previewConfig as c24 } from '../ubersuggest-tracking-date-picker/preview.config';
import { UbersuggestTrackingKeywordDialog as C25 } from '../ubersuggest-tracking-keyword-dialog/UbersuggestTrackingKeywordDialog';
import {
  fixtures as f25,
  propsSchema as p25,
} from '../ubersuggest-tracking-keyword-dialog/fixtures';
import { previewConfig as c25 } from '../ubersuggest-tracking-keyword-dialog/preview.config';
import { UbersuggestTrackingBulkActions as C26 } from '../ubersuggest-tracking-bulk-actions/UbersuggestTrackingBulkActions';
import { fixtures as f26, propsSchema as p26 } from '../ubersuggest-tracking-bulk-actions/fixtures';
import { previewConfig as c26 } from '../ubersuggest-tracking-bulk-actions/preview.config';
import { UbersuggestVisibilityTopicEditor as C27 } from '../ubersuggest-visibility-topic-editor/UbersuggestVisibilityTopicEditor';
import {
  fixtures as f27,
  propsSchema as p27,
} from '../ubersuggest-visibility-topic-editor/fixtures';
import { previewConfig as c27 } from '../ubersuggest-visibility-topic-editor/preview.config';
import { UbersuggestCompetitorTokenEditor as C28 } from '../ubersuggest-competitor-token-editor/UbersuggestCompetitorTokenEditor';
import {
  fixtures as f28,
  propsSchema as p28,
} from '../ubersuggest-competitor-token-editor/fixtures';
import { previewConfig as c28 } from '../ubersuggest-competitor-token-editor/preview.config';
import { UbersuggestIntegrationClientTabs as C29 } from '../ubersuggest-integration-client-tabs/UbersuggestIntegrationClientTabs';
import {
  fixtures as f29,
  propsSchema as p29,
} from '../ubersuggest-integration-client-tabs/fixtures';
import { previewConfig as c29 } from '../ubersuggest-integration-client-tabs/preview.config';
import { UbersuggestUpgradeDialog as C30 } from '../ubersuggest-upgrade-dialog/UbersuggestUpgradeDialog';
import { fixtures as f30, propsSchema as p30 } from '../ubersuggest-upgrade-dialog/fixtures';
import { previewConfig as c30 } from '../ubersuggest-upgrade-dialog/preview.config';
import { UbersuggestAccountMenu as C31 } from '../ubersuggest-account-menu/UbersuggestAccountMenu';
import { fixtures as f31, propsSchema as p31 } from '../ubersuggest-account-menu/fixtures';
import { previewConfig as c31 } from '../ubersuggest-account-menu/preview.config';
export const ubersuggestRemainingPreviews: PreviewRegistry = {
  'ubersuggest-ai-keyword-overview': {
    type: 'reconstructed',
    Component: C0,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f0,
    propsSchema: p0,
    config: c0,
  },
  'ubersuggest-bulk-analysis': {
    type: 'reconstructed',
    Component: C1,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f1,
    propsSchema: p1,
    config: c1,
  },
  'ubersuggest-ai-prompt-ideas': {
    type: 'reconstructed',
    Component: C2,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f2,
    propsSchema: p2,
    config: c2,
  },
  'ubersuggest-keyword-lists': {
    type: 'reconstructed',
    Component: C3,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f3,
    propsSchema: p3,
    config: c3,
  },
  'ubersuggest-site-audit-entry': {
    type: 'reconstructed',
    Component: C4,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f4,
    propsSchema: p4,
    config: c4,
  },
  'ubersuggest-rank-tracking': {
    type: 'reconstructed',
    Component: C5,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f5,
    propsSchema: p5,
    config: c5,
  },
  'ubersuggest-project-setup': {
    type: 'reconstructed',
    Component: C6,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f6,
    propsSchema: p6,
    config: c6,
  },
  'ubersuggest-pixel-plan-gate': {
    type: 'reconstructed',
    Component: C7,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f7,
    propsSchema: p7,
    config: c7,
  },
  'ubersuggest-ai-visibility-setup': {
    type: 'reconstructed',
    Component: C8,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f8,
    propsSchema: p8,
    config: c8,
  },
  'ubersuggest-traffic-overview': {
    type: 'reconstructed',
    Component: C9,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f9,
    propsSchema: p9,
    config: c9,
  },
  'ubersuggest-keyword-coverage': {
    type: 'reconstructed',
    Component: C10,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f10,
    propsSchema: p10,
    config: c10,
  },
  'ubersuggest-top-pages': {
    type: 'reconstructed',
    Component: C11,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f11,
    propsSchema: p11,
    config: c11,
  },
  'ubersuggest-content-ideas': {
    type: 'reconstructed',
    Component: C12,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f12,
    propsSchema: p12,
    config: c12,
  },
  'ubersuggest-backlinks-entry': {
    type: 'reconstructed',
    Component: C13,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f13,
    propsSchema: p13,
    config: c13,
  },
  'ubersuggest-backlink-opportunity': {
    type: 'reconstructed',
    Component: C14,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f14,
    propsSchema: p14,
    config: c14,
  },
  'ubersuggest-content-studio-boundary': {
    type: 'reconstructed',
    Component: C15,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f15,
    propsSchema: p15,
    config: c15,
  },
  'ubersuggest-ai-chat-entry': {
    type: 'reconstructed',
    Component: C16,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f16,
    propsSchema: p16,
    config: c16,
  },
  'ubersuggest-integrations-catalogue': {
    type: 'reconstructed',
    Component: C17,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f17,
    propsSchema: p17,
    config: c17,
  },
  'ubersuggest-integration-guides': {
    type: 'reconstructed',
    Component: C18,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f18,
    propsSchema: p18,
    config: c18,
  },
  'ubersuggest-mcp-setup': {
    type: 'reconstructed',
    Component: C19,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f19,
    propsSchema: p19,
    config: c19,
  },
  'ubersuggest-bulk-keyword-editor': {
    type: 'reconstructed',
    Component: C20,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f20,
    propsSchema: p20,
    config: c20,
  },
  'ubersuggest-list-create-dialog': {
    type: 'reconstructed',
    Component: C21,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f21,
    propsSchema: p21,
    config: c21,
  },
  'ubersuggest-domain-scope-selector': {
    type: 'reconstructed',
    Component: C22,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f22,
    propsSchema: p22,
    config: c22,
  },
  'ubersuggest-tracking-filter-panel': {
    type: 'reconstructed',
    Component: C23,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f23,
    propsSchema: p23,
    config: c23,
  },
  'ubersuggest-tracking-date-picker': {
    type: 'reconstructed',
    Component: C24,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f24,
    propsSchema: p24,
    config: c24,
  },
  'ubersuggest-tracking-keyword-dialog': {
    type: 'reconstructed',
    Component: C25,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f25,
    propsSchema: p25,
    config: c25,
  },
  'ubersuggest-tracking-bulk-actions': {
    type: 'reconstructed',
    Component: C26,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f26,
    propsSchema: p26,
    config: c26,
  },
  'ubersuggest-visibility-topic-editor': {
    type: 'reconstructed',
    Component: C27,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f27,
    propsSchema: p27,
    config: c27,
  },
  'ubersuggest-competitor-token-editor': {
    type: 'reconstructed',
    Component: C28,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f28,
    propsSchema: p28,
    config: c28,
  },
  'ubersuggest-integration-client-tabs': {
    type: 'reconstructed',
    Component: C29,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f29,
    propsSchema: p29,
    config: c29,
  },
  'ubersuggest-upgrade-dialog': {
    type: 'reconstructed',
    Component: C30,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f30,
    propsSchema: p30,
    config: c30,
  },
  'ubersuggest-account-menu': {
    type: 'reconstructed',
    Component: C31,
    label: 'Observed-state reconstruction',
    evidence:
      'Observed provider scope with fictional values. Local reconstruction browser verified on 2026-09-30. Provider submissions remain untested under the user instruction.',
    runtimeVerified: true,
    fixtures: f31,
    propsSchema: p31,
    config: c31,
  },
};
const shared = sourceRegistry['ubersuggest-remaining'].files.filter((f) =>
  ['Remaining.tsx', 'remaining.module.css'].includes(f.fileName)
);
for (const id of Object.keys(ubersuggestRemainingPreviews)) {
  sourceRegistry[id] = {
    files: [
      ...sourceRegistry[id].files.filter(
        (f) => !f.fileName.startsWith('../ubersuggest-remaining/')
      ),
      ...shared.map((f) => ({ fileName: '../ubersuggest-remaining/' + f.fileName, code: f.code })),
    ],
  };
}
