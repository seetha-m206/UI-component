import { FreshserviceSampleDashboard } from '../freshservice-sample-dashboard/FreshserviceSampleDashboard';
import {
  fixtures as FreshserviceSampleDashboardFixtures,
  propsSchema as FreshserviceSampleDashboardProps,
} from '../freshservice-sample-dashboard/fixtures';
import { previewConfig as FreshserviceSampleDashboardConfig } from '../freshservice-sample-dashboard/preview.config';
import { FreshserviceKnowledgeWorkspace } from '../freshservice-knowledge-workspace/FreshserviceKnowledgeWorkspace';
import {
  fixtures as FreshserviceKnowledgeWorkspaceFixtures,
  propsSchema as FreshserviceKnowledgeWorkspaceProps,
} from '../freshservice-knowledge-workspace/fixtures';
import { previewConfig as FreshserviceKnowledgeWorkspaceConfig } from '../freshservice-knowledge-workspace/preview.config';
import { FreshserviceArticleTemplatesEmpty } from '../freshservice-article-templates-empty/FreshserviceArticleTemplatesEmpty';
import {
  fixtures as FreshserviceArticleTemplatesEmptyFixtures,
  propsSchema as FreshserviceArticleTemplatesEmptyProps,
} from '../freshservice-article-templates-empty/fixtures';
import { previewConfig as FreshserviceArticleTemplatesEmptyConfig } from '../freshservice-article-templates-empty/preview.config';
import { FreshserviceAnalyticsCatalogue } from '../freshservice-analytics-catalogue/FreshserviceAnalyticsCatalogue';
import {
  fixtures as FreshserviceAnalyticsCatalogueFixtures,
  propsSchema as FreshserviceAnalyticsCatalogueProps,
} from '../freshservice-analytics-catalogue/fixtures';
import { previewConfig as FreshserviceAnalyticsCatalogueConfig } from '../freshservice-analytics-catalogue/preview.config';
import { FreshserviceReportSortMenu } from '../freshservice-report-sort-menu/FreshserviceReportSortMenu';
import {
  fixtures as FreshserviceReportSortMenuFixtures,
  propsSchema as FreshserviceReportSortMenuProps,
} from '../freshservice-report-sort-menu/fixtures';
import { previewConfig as FreshserviceReportSortMenuConfig } from '../freshservice-report-sort-menu/preview.config';
import { FreshserviceAdminSettingsSearch } from '../freshservice-admin-settings-search/FreshserviceAdminSettingsSearch';
import {
  fixtures as FreshserviceAdminSettingsSearchFixtures,
  propsSchema as FreshserviceAdminSettingsSearchProps,
} from '../freshservice-admin-settings-search/fixtures';
import { previewConfig as FreshserviceAdminSettingsSearchConfig } from '../freshservice-admin-settings-search/preview.config';
import { FreshserviceWorkflowInventory } from '../freshservice-workflow-inventory/FreshserviceWorkflowInventory';
import {
  fixtures as FreshserviceWorkflowInventoryFixtures,
  propsSchema as FreshserviceWorkflowInventoryProps,
} from '../freshservice-workflow-inventory/fixtures';
import { previewConfig as FreshserviceWorkflowInventoryConfig } from '../freshservice-workflow-inventory/preview.config';
import type { PreviewRegistry } from '../types';
import { FreshserviceApplicationShell } from '../freshservice-application-shell/FreshserviceApplicationShell';
import {
  fixtures as FreshserviceApplicationShellFixtures,
  propsSchema as FreshserviceApplicationShellProps,
} from '../freshservice-application-shell/fixtures';
import { previewConfig as FreshserviceApplicationShellConfig } from '../freshservice-application-shell/preview.config';
import { FreshserviceSidebarNavigation } from '../freshservice-sidebar-navigation/FreshserviceSidebarNavigation';
import {
  fixtures as FreshserviceSidebarNavigationFixtures,
  propsSchema as FreshserviceSidebarNavigationProps,
} from '../freshservice-sidebar-navigation/fixtures';
import { previewConfig as FreshserviceSidebarNavigationConfig } from '../freshservice-sidebar-navigation/preview.config';
import { FreshserviceGlobalHeader } from '../freshservice-global-header/FreshserviceGlobalHeader';
import {
  fixtures as FreshserviceGlobalHeaderFixtures,
  propsSchema as FreshserviceGlobalHeaderProps,
} from '../freshservice-global-header/fixtures';
import { previewConfig as FreshserviceGlobalHeaderConfig } from '../freshservice-global-header/preview.config';
import { FreshserviceTrialBanner } from '../freshservice-trial-banner/FreshserviceTrialBanner';
import {
  fixtures as FreshserviceTrialBannerFixtures,
  propsSchema as FreshserviceTrialBannerProps,
} from '../freshservice-trial-banner/fixtures';
import { previewConfig as FreshserviceTrialBannerConfig } from '../freshservice-trial-banner/preview.config';
import { FreshserviceSetupChecklist } from '../freshservice-setup-checklist/FreshserviceSetupChecklist';
import {
  fixtures as FreshserviceSetupChecklistFixtures,
  propsSchema as FreshserviceSetupChecklistProps,
} from '../freshservice-setup-checklist/fixtures';
import { previewConfig as FreshserviceSetupChecklistConfig } from '../freshservice-setup-checklist/preview.config';
import { FreshserviceFeatureAccordion } from '../freshservice-feature-accordion/FreshserviceFeatureAccordion';
import {
  fixtures as FreshserviceFeatureAccordionFixtures,
  propsSchema as FreshserviceFeatureAccordionProps,
} from '../freshservice-feature-accordion/fixtures';
import { previewConfig as FreshserviceFeatureAccordionConfig } from '../freshservice-feature-accordion/preview.config';
import { FreshserviceCreateMenu } from '../freshservice-create-menu/FreshserviceCreateMenu';
import {
  fixtures as FreshserviceCreateMenuFixtures,
  propsSchema as FreshserviceCreateMenuProps,
} from '../freshservice-create-menu/fixtures';
import { previewConfig as FreshserviceCreateMenuConfig } from '../freshservice-create-menu/preview.config';
import { FreshserviceMyWorkMenu } from '../freshservice-my-work-menu/FreshserviceMyWorkMenu';
import {
  fixtures as FreshserviceMyWorkMenuFixtures,
  propsSchema as FreshserviceMyWorkMenuProps,
} from '../freshservice-my-work-menu/fixtures';
import { previewConfig as FreshserviceMyWorkMenuConfig } from '../freshservice-my-work-menu/preview.config';
import { FreshserviceTicketEmptyState } from '../freshservice-ticket-empty-state/FreshserviceTicketEmptyState';
import {
  fixtures as FreshserviceTicketEmptyStateFixtures,
  propsSchema as FreshserviceTicketEmptyStateProps,
} from '../freshservice-ticket-empty-state/fixtures';
import { previewConfig as FreshserviceTicketEmptyStateConfig } from '../freshservice-ticket-empty-state/preview.config';
import { FreshserviceNewIncidentForm } from '../freshservice-new-incident-form/FreshserviceNewIncidentForm';
import {
  fixtures as FreshserviceNewIncidentFormFixtures,
  propsSchema as FreshserviceNewIncidentFormProps,
} from '../freshservice-new-incident-form/fixtures';
import { previewConfig as FreshserviceNewIncidentFormConfig } from '../freshservice-new-incident-form/preview.config';
import { FreshserviceTemplatePicker } from '../freshservice-template-picker/FreshserviceTemplatePicker';
import {
  fixtures as FreshserviceTemplatePickerFixtures,
  propsSchema as FreshserviceTemplatePickerProps,
} from '../freshservice-template-picker/fixtures';
import { previewConfig as FreshserviceTemplatePickerConfig } from '../freshservice-template-picker/preview.config';
import { FreshserviceCcDisclosure } from '../freshservice-cc-disclosure/FreshserviceCcDisclosure';
import {
  fixtures as FreshserviceCcDisclosureFixtures,
  propsSchema as FreshserviceCcDisclosureProps,
} from '../freshservice-cc-disclosure/fixtures';
import { previewConfig as FreshserviceCcDisclosureConfig } from '../freshservice-cc-disclosure/preview.config';
import { FreshserviceStatusPriorityFields } from '../freshservice-status-priority-fields/FreshserviceStatusPriorityFields';
import {
  fixtures as FreshserviceStatusPriorityFieldsFixtures,
  propsSchema as FreshserviceStatusPriorityFieldsProps,
} from '../freshservice-status-priority-fields/fixtures';
import { previewConfig as FreshserviceStatusPriorityFieldsConfig } from '../freshservice-status-priority-fields/preview.config';
import { FreshserviceDescriptionEditor } from '../freshservice-description-editor/FreshserviceDescriptionEditor';
import {
  fixtures as FreshserviceDescriptionEditorFixtures,
  propsSchema as FreshserviceDescriptionEditorProps,
} from '../freshservice-description-editor/fixtures';
import { previewConfig as FreshserviceDescriptionEditorConfig } from '../freshservice-description-editor/preview.config';
import { FreshserviceRelatedArticlesEmpty } from '../freshservice-related-articles-empty/FreshserviceRelatedArticlesEmpty';
import {
  fixtures as FreshserviceRelatedArticlesEmptyFixtures,
  propsSchema as FreshserviceRelatedArticlesEmptyProps,
} from '../freshservice-related-articles-empty/fixtures';
import { previewConfig as FreshserviceRelatedArticlesEmptyConfig } from '../freshservice-related-articles-empty/preview.config';
import { FreshserviceAttachmentZone } from '../freshservice-attachment-zone/FreshserviceAttachmentZone';
import {
  fixtures as FreshserviceAttachmentZoneFixtures,
  propsSchema as FreshserviceAttachmentZoneProps,
} from '../freshservice-attachment-zone/fixtures';
import { previewConfig as FreshserviceAttachmentZoneConfig } from '../freshservice-attachment-zone/preview.config';

export const freshservicePreviews: PreviewRegistry = {
  'freshservice-sample-dashboard': {
    type: 'reconstructed',
    Component: FreshserviceSampleDashboard,
    label: 'Observed Freshservice structure with fictional local behavior',
    evidence:
      'Authenticated Freshservice observed October 1, 2026. Provider changes and unexercised controls remain unverified.',
    runtimeVerified: false,
    fixtures: FreshserviceSampleDashboardFixtures,
    propsSchema: FreshserviceSampleDashboardProps,
    config: FreshserviceSampleDashboardConfig,
  },
  'freshservice-knowledge-workspace': {
    type: 'reconstructed',
    Component: FreshserviceKnowledgeWorkspace,
    label: 'Observed Freshservice structure with fictional local behavior',
    evidence:
      'Authenticated Freshservice observed October 1, 2026. Provider changes and unexercised controls remain unverified.',
    runtimeVerified: false,
    fixtures: FreshserviceKnowledgeWorkspaceFixtures,
    propsSchema: FreshserviceKnowledgeWorkspaceProps,
    config: FreshserviceKnowledgeWorkspaceConfig,
  },
  'freshservice-article-templates-empty': {
    type: 'reconstructed',
    Component: FreshserviceArticleTemplatesEmpty,
    label: 'Observed Freshservice structure with fictional local behavior',
    evidence:
      'Authenticated Freshservice observed October 1, 2026. Provider changes and unexercised controls remain unverified.',
    runtimeVerified: false,
    fixtures: FreshserviceArticleTemplatesEmptyFixtures,
    propsSchema: FreshserviceArticleTemplatesEmptyProps,
    config: FreshserviceArticleTemplatesEmptyConfig,
  },
  'freshservice-analytics-catalogue': {
    type: 'reconstructed',
    Component: FreshserviceAnalyticsCatalogue,
    label: 'Observed Freshservice structure with fictional local behavior',
    evidence:
      'Authenticated Freshservice observed October 1, 2026. Provider changes and unexercised controls remain unverified.',
    runtimeVerified: false,
    fixtures: FreshserviceAnalyticsCatalogueFixtures,
    propsSchema: FreshserviceAnalyticsCatalogueProps,
    config: FreshserviceAnalyticsCatalogueConfig,
  },
  'freshservice-report-sort-menu': {
    type: 'reconstructed',
    Component: FreshserviceReportSortMenu,
    label: 'Observed Freshservice structure with fictional local behavior',
    evidence:
      'Authenticated Freshservice observed October 1, 2026. Provider changes and unexercised controls remain unverified.',
    runtimeVerified: false,
    fixtures: FreshserviceReportSortMenuFixtures,
    propsSchema: FreshserviceReportSortMenuProps,
    config: FreshserviceReportSortMenuConfig,
  },
  'freshservice-admin-settings-search': {
    type: 'reconstructed',
    Component: FreshserviceAdminSettingsSearch,
    label: 'Observed Freshservice structure with fictional local behavior',
    evidence:
      'Authenticated Freshservice observed October 1, 2026. Provider changes and unexercised controls remain unverified.',
    runtimeVerified: false,
    fixtures: FreshserviceAdminSettingsSearchFixtures,
    propsSchema: FreshserviceAdminSettingsSearchProps,
    config: FreshserviceAdminSettingsSearchConfig,
  },
  'freshservice-workflow-inventory': {
    type: 'reconstructed',
    Component: FreshserviceWorkflowInventory,
    label: 'Observed Freshservice structure with fictional local behavior',
    evidence:
      'Authenticated Freshservice observed October 1, 2026. Provider changes and unexercised controls remain unverified.',
    runtimeVerified: false,
    fixtures: FreshserviceWorkflowInventoryFixtures,
    propsSchema: FreshserviceWorkflowInventoryProps,
    config: FreshserviceWorkflowInventoryConfig,
  },
  'freshservice-application-shell': {
    type: 'reconstructed',
    Component: FreshserviceApplicationShell,
    label: 'Observed Freshservice structure with fictional local behavior',
    evidence:
      'Authenticated Freshservice observed October 1, 2026. Local interactions are reconstructions. Provider submission, persistence and unexercised controls remain unverified.',
    runtimeVerified: false,
    fixtures: FreshserviceApplicationShellFixtures,
    config: FreshserviceApplicationShellConfig,
    propsSchema: FreshserviceApplicationShellProps,
  },
  'freshservice-sidebar-navigation': {
    type: 'reconstructed',
    Component: FreshserviceSidebarNavigation,
    label: 'Observed Freshservice structure with fictional local behavior',
    evidence:
      'Authenticated Freshservice observed October 1, 2026. Local interactions are reconstructions. Provider submission, persistence and unexercised controls remain unverified.',
    runtimeVerified: false,
    fixtures: FreshserviceSidebarNavigationFixtures,
    config: FreshserviceSidebarNavigationConfig,
    propsSchema: FreshserviceSidebarNavigationProps,
  },
  'freshservice-global-header': {
    type: 'reconstructed',
    Component: FreshserviceGlobalHeader,
    label: 'Observed Freshservice structure with fictional local behavior',
    evidence:
      'Authenticated Freshservice observed October 1, 2026. Local interactions are reconstructions. Provider submission, persistence and unexercised controls remain unverified.',
    runtimeVerified: false,
    fixtures: FreshserviceGlobalHeaderFixtures,
    config: FreshserviceGlobalHeaderConfig,
    propsSchema: FreshserviceGlobalHeaderProps,
  },
  'freshservice-trial-banner': {
    type: 'reconstructed',
    Component: FreshserviceTrialBanner,
    label: 'Observed Freshservice structure with fictional local behavior',
    evidence:
      'Authenticated Freshservice observed October 1, 2026. Local interactions are reconstructions. Provider submission, persistence and unexercised controls remain unverified.',
    runtimeVerified: false,
    fixtures: FreshserviceTrialBannerFixtures,
    config: FreshserviceTrialBannerConfig,
    propsSchema: FreshserviceTrialBannerProps,
  },
  'freshservice-setup-checklist': {
    type: 'reconstructed',
    Component: FreshserviceSetupChecklist,
    label: 'Observed Freshservice structure with fictional local behavior',
    evidence:
      'Authenticated Freshservice observed October 1, 2026. Local interactions are reconstructions. Provider submission, persistence and unexercised controls remain unverified.',
    runtimeVerified: false,
    fixtures: FreshserviceSetupChecklistFixtures,
    config: FreshserviceSetupChecklistConfig,
    propsSchema: FreshserviceSetupChecklistProps,
  },
  'freshservice-feature-accordion': {
    type: 'reconstructed',
    Component: FreshserviceFeatureAccordion,
    label: 'Observed Freshservice structure with fictional local behavior',
    evidence:
      'Authenticated Freshservice observed October 1, 2026. Local interactions are reconstructions. Provider submission, persistence and unexercised controls remain unverified.',
    runtimeVerified: false,
    fixtures: FreshserviceFeatureAccordionFixtures,
    config: FreshserviceFeatureAccordionConfig,
    propsSchema: FreshserviceFeatureAccordionProps,
  },
  'freshservice-create-menu': {
    type: 'reconstructed',
    Component: FreshserviceCreateMenu,
    label: 'Observed Freshservice structure with fictional local behavior',
    evidence:
      'Authenticated Freshservice observed October 1, 2026. Local interactions are reconstructions. Provider submission, persistence and unexercised controls remain unverified.',
    runtimeVerified: false,
    fixtures: FreshserviceCreateMenuFixtures,
    config: FreshserviceCreateMenuConfig,
    propsSchema: FreshserviceCreateMenuProps,
  },
  'freshservice-my-work-menu': {
    type: 'reconstructed',
    Component: FreshserviceMyWorkMenu,
    label: 'Observed Freshservice structure with fictional local behavior',
    evidence:
      'Authenticated Freshservice observed October 1, 2026. Local interactions are reconstructions. Provider submission, persistence and unexercised controls remain unverified.',
    runtimeVerified: false,
    fixtures: FreshserviceMyWorkMenuFixtures,
    config: FreshserviceMyWorkMenuConfig,
    propsSchema: FreshserviceMyWorkMenuProps,
  },
  'freshservice-ticket-empty-state': {
    type: 'reconstructed',
    Component: FreshserviceTicketEmptyState,
    label: 'Observed Freshservice structure with fictional local behavior',
    evidence:
      'Authenticated Freshservice observed October 1, 2026. Local interactions are reconstructions. Provider submission, persistence and unexercised controls remain unverified.',
    runtimeVerified: false,
    fixtures: FreshserviceTicketEmptyStateFixtures,
    config: FreshserviceTicketEmptyStateConfig,
    propsSchema: FreshserviceTicketEmptyStateProps,
  },
  'freshservice-new-incident-form': {
    type: 'reconstructed',
    Component: FreshserviceNewIncidentForm,
    label: 'Observed Freshservice structure with fictional local behavior',
    evidence:
      'Authenticated Freshservice observed October 1, 2026. Local interactions are reconstructions. Provider submission, persistence and unexercised controls remain unverified.',
    runtimeVerified: false,
    fixtures: FreshserviceNewIncidentFormFixtures,
    config: FreshserviceNewIncidentFormConfig,
    propsSchema: FreshserviceNewIncidentFormProps,
  },
  'freshservice-template-picker': {
    type: 'reconstructed',
    Component: FreshserviceTemplatePicker,
    label: 'Observed Freshservice structure with fictional local behavior',
    evidence:
      'Authenticated Freshservice observed October 1, 2026. Local interactions are reconstructions. Provider submission, persistence and unexercised controls remain unverified.',
    runtimeVerified: false,
    fixtures: FreshserviceTemplatePickerFixtures,
    config: FreshserviceTemplatePickerConfig,
    propsSchema: FreshserviceTemplatePickerProps,
  },
  'freshservice-cc-disclosure': {
    type: 'reconstructed',
    Component: FreshserviceCcDisclosure,
    label: 'Observed Freshservice structure with fictional local behavior',
    evidence:
      'Authenticated Freshservice observed October 1, 2026. Local interactions are reconstructions. Provider submission, persistence and unexercised controls remain unverified.',
    runtimeVerified: false,
    fixtures: FreshserviceCcDisclosureFixtures,
    config: FreshserviceCcDisclosureConfig,
    propsSchema: FreshserviceCcDisclosureProps,
  },
  'freshservice-status-priority-fields': {
    type: 'reconstructed',
    Component: FreshserviceStatusPriorityFields,
    label: 'Observed Freshservice structure with fictional local behavior',
    evidence:
      'Authenticated Freshservice observed October 1, 2026. Local interactions are reconstructions. Provider submission, persistence and unexercised controls remain unverified.',
    runtimeVerified: false,
    fixtures: FreshserviceStatusPriorityFieldsFixtures,
    config: FreshserviceStatusPriorityFieldsConfig,
    propsSchema: FreshserviceStatusPriorityFieldsProps,
  },
  'freshservice-description-editor': {
    type: 'reconstructed',
    Component: FreshserviceDescriptionEditor,
    label: 'Observed Freshservice structure with fictional local behavior',
    evidence:
      'Authenticated Freshservice observed October 1, 2026. Local interactions are reconstructions. Provider submission, persistence and unexercised controls remain unverified.',
    runtimeVerified: false,
    fixtures: FreshserviceDescriptionEditorFixtures,
    config: FreshserviceDescriptionEditorConfig,
    propsSchema: FreshserviceDescriptionEditorProps,
  },
  'freshservice-related-articles-empty': {
    type: 'reconstructed',
    Component: FreshserviceRelatedArticlesEmpty,
    label: 'Observed Freshservice structure with fictional local behavior',
    evidence:
      'Authenticated Freshservice observed October 1, 2026. Local interactions are reconstructions. Provider submission, persistence and unexercised controls remain unverified.',
    runtimeVerified: false,
    fixtures: FreshserviceRelatedArticlesEmptyFixtures,
    config: FreshserviceRelatedArticlesEmptyConfig,
    propsSchema: FreshserviceRelatedArticlesEmptyProps,
  },
  'freshservice-attachment-zone': {
    type: 'reconstructed',
    Component: FreshserviceAttachmentZone,
    label: 'Observed Freshservice structure with fictional local behavior',
    evidence:
      'Authenticated Freshservice observed October 1, 2026. Local interactions are reconstructions. Provider submission, persistence and unexercised controls remain unverified.',
    runtimeVerified: false,
    fixtures: FreshserviceAttachmentZoneFixtures,
    config: FreshserviceAttachmentZoneConfig,
    propsSchema: FreshserviceAttachmentZoneProps,
  },
};
