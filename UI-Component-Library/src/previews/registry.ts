import { framerRemainingPreviews } from './framer-remaining/registry';
import { dudaPreviews } from './duda-shared/registry';
import { framerScreenPreviews } from './framer-screens/registry';
import { framerPrimaryPreviews } from './framer-primary/registry';
import { salesforcePreviews } from './salesforce-service-shared/registry';
import { freshservicePreviews } from './freshservice-shared/registry';
import { zendeskPreviews } from './zendesk/registry';
import { writesonicPreviews } from './writesonic-shared/registry';
import { ubersuggestPreviews } from './ubersuggest-shared/registry';
import { ubersuggestRemainingPreviews } from './ubersuggest-remaining/registry';
import { otterlyPreviews } from './otterly/registry';
import { hubspotPreviews } from './hubspot-shared/registry';
import { hubspotSuitePreviews } from './hubspot-suite-shared/registry';
import { pipedrivePreviews } from './pipedrive-shared/registry';
import { freshsalesPreviews } from './freshsales-shared/registry';
import { salesforceSalesPreviews } from './salesforce-sales-shared/registry';
import { wixPreviews } from './wix-shared/registry';
import { hostingerPreviews } from './hostinger-shared/registry';
import { zohoDeskPreviews } from './zoho-desk-shared/registry';
import { ToggleRadioSwitch } from './toggle-radio-switch/ToggleRadioSwitch';
import { YesNoToggleField } from './yes-no-toggle-field/YesNoToggleField';
import {
  fixtures as yesNoToggleFieldFixtures,
  propsSchema as yesNoToggleFieldPropsSchema,
} from './yes-no-toggle-field/fixtures';
import { previewConfig as yesNoToggleFieldConfig } from './yes-no-toggle-field/preview.config';
import { RatingStarField } from './rating-star-field/RatingStarField';
import {
  fixtures as ratingStarFieldFixtures,
  propsSchema as ratingStarFieldPropsSchema,
} from './rating-star-field/fixtures';
import { previewConfig as ratingStarFieldConfig } from './rating-star-field/preview.config';

import { ChoicesListEditor } from './choices-list-editor/ChoicesListEditor';
import {
  fixtures as choicesListEditorFixtures,
  propsSchema as choicesListEditorPropsSchema,
} from './choices-list-editor/fixtures';
import { previewConfig as choicesListEditorConfig } from './choices-list-editor/preview.config';

import { PublishToggleSwitch } from './publish-toggle-switch/PublishToggleSwitch';
import {
  fixtures as publishToggleSwitchFixtures,
  propsSchema as publishToggleSwitchPropsSchema,
} from './publish-toggle-switch/fixtures';
import { previewConfig as publishToggleSwitchConfig } from './publish-toggle-switch/preview.config';

import { UpgradeCtaButton } from './upgrade-cta-button/UpgradeCtaButton';
import {
  fixtures as upgradeCtaButtonFixtures,
  propsSchema as upgradeCtaButtonPropsSchema,
} from './upgrade-cta-button/fixtures';
import { previewConfig as upgradeCtaButtonConfig } from './upgrade-cta-button/preview.config';

import { CardListSelector } from './card-list-selector/CardListSelector';
import {
  fixtures as cardListSelectorFixtures,
  propsSchema as cardListSelectorPropsSchema,
} from './card-list-selector/fixtures';
import { previewConfig as cardListSelectorConfig } from './card-list-selector/preview.config';

import { ThemeIconButtonGroupSelector } from './theme-icon-button-group-selector/ThemeIconButtonGroupSelector';
import {
  fixtures as themeIconButtonGroupSelectorFixtures,
  propsSchema as themeIconButtonGroupSelectorPropsSchema,
} from './theme-icon-button-group-selector/fixtures';
import { previewConfig as themeIconButtonGroupSelectorConfig } from './theme-icon-button-group-selector/preview.config';

import { AnalyticsFeatureGate } from './analytics-feature-gate/AnalyticsFeatureGate';
import {
  fixtures as analyticsFeatureGateFixtures,
  propsSchema as analyticsFeatureGatePropsSchema,
} from './analytics-feature-gate/fixtures';
import { previewConfig as analyticsFeatureGateConfig } from './analytics-feature-gate/preview.config';

import { FormOverflowMenu } from './form-overflow-menu/FormOverflowMenu';
import {
  fixtures as formOverflowMenuFixtures,
  propsSchema as formOverflowMenuPropsSchema,
} from './form-overflow-menu/fixtures';
import { previewConfig as formOverflowMenuConfig } from './form-overflow-menu/preview.config';

import { SidebarSettingsSubnav } from './sidebar-settings-subnav/SidebarSettingsSubnav';
import {
  fixtures as sidebarSettingsSubnavFixtures,
  propsSchema as sidebarSettingsSubnavPropsSchema,
} from './sidebar-settings-subnav/fixtures';
import { previewConfig as sidebarSettingsSubnavConfig } from './sidebar-settings-subnav/preview.config';

import { EntriesFilterPanel } from './entries-filter-panel/EntriesFilterPanel';
import {
  fixtures as entriesFilterPanelFixtures,
  propsSchema as entriesFilterPanelPropsSchema,
} from './entries-filter-panel/fixtures';
import { previewConfig as entriesFilterPanelConfig } from './entries-filter-panel/preview.config';

import { RepeatableSubformInline } from './repeatable-subform-inline/RepeatableSubformInline';
import {
  fixtures as repeatableSubformInlineFixtures,
  propsSchema as repeatableSubformInlinePropsSchema,
} from './repeatable-subform-inline/fixtures';
import { previewConfig as repeatableSubformInlineConfig } from './repeatable-subform-inline/preview.config';

import { ThemeColorPickerGradient } from './theme-color-picker-gradient/ThemeColorPickerGradient';
import {
  fixtures as themeColorPickerGradientFixtures,
  propsSchema as themeColorPickerGradientPropsSchema,
} from './theme-color-picker-gradient/fixtures';
import { previewConfig as themeColorPickerGradientConfig } from './theme-color-picker-gradient/preview.config';

import { ThemeEditorSplitPaneShell } from './theme-editor-split-pane-shell/ThemeEditorSplitPaneShell';
import {
  fixtures as themeEditorSplitPaneShellFixtures,
  propsSchema as themeEditorSplitPaneShellPropsSchema,
} from './theme-editor-split-pane-shell/fixtures';
import { previewConfig as themeEditorSplitPaneShellConfig } from './theme-editor-split-pane-shell/preview.config';

import { AnalyticsDashboardKpiBarMap } from './analytics-dashboard-kpi-bar-map/AnalyticsDashboardKpiBarMap';
import {
  fixtures as analyticsDashboardKpiBarMapFixtures,
  propsSchema as analyticsDashboardKpiBarMapPropsSchema,
} from './analytics-dashboard-kpi-bar-map/fixtures';
import { previewConfig as analyticsDashboardKpiBarMapConfig } from './analytics-dashboard-kpi-bar-map/preview.config';

import { EntriesKanbanView } from './entries-kanban-view/EntriesKanbanView';
import {
  fixtures as entriesKanbanViewFixtures,
  propsSchema as entriesKanbanViewPropsSchema,
} from './entries-kanban-view/fixtures';
import { previewConfig as entriesKanbanViewConfig } from './entries-kanban-view/preview.config';

import { YesNoField } from './yes-no-field/YesNoField';
import {
  fixtures as yesNoFieldFixtures,
  propsSchema as yesNoFieldPropsSchema,
} from './yes-no-field/fixtures';
import { previewConfig as yesNoFieldConfig } from './yes-no-field/preview.config';

import { RatingField } from './rating-field/RatingField';
import {
  fixtures as ratingFieldFixtures,
  propsSchema as ratingFieldPropsSchema,
} from './rating-field/fixtures';
import { previewConfig as ratingFieldConfig } from './rating-field/preview.config';

import { ThemeDesignEditor } from './theme-design-editor/ThemeDesignEditor';
import {
  fixtures as themeDesignEditorFixtures,
  propsSchema as themeDesignEditorPropsSchema,
} from './theme-design-editor/fixtures';
import { previewConfig as themeDesignEditorConfig } from './theme-design-editor/preview.config';

import { MatrixChoicesField } from './matrix-choices-field/MatrixChoicesField';
import {
  fixtures as matrixChoicesFieldFixtures,
  propsSchema as matrixChoicesFieldPropsSchema,
} from './matrix-choices-field/fixtures';
import { previewConfig as matrixChoicesFieldConfig } from './matrix-choices-field/preview.config';

import { NewFormChooser } from './new-form-chooser/NewFormChooser';
import {
  fixtures as newFormChooserFixtures,
  propsSchema as newFormChooserPropsSchema,
} from './new-form-chooser/fixtures';
import { previewConfig as newFormChooserConfig } from './new-form-chooser/preview.config';

import { AnalyticsDeepInsightsDropoff } from './analytics-deep-insights-dropoff/AnalyticsDeepInsightsDropoff';
import {
  fixtures as analyticsDeepInsightsDropoffFixtures,
  propsSchema as analyticsDeepInsightsDropoffPropsSchema,
} from './analytics-deep-insights-dropoff/fixtures';
import { previewConfig as analyticsDeepInsightsDropoffConfig } from './analytics-deep-insights-dropoff/preview.config';

import { SmartScanAiField } from './smart-scan-ai-field/SmartScanAiField';
import {
  fixtures as smartScanAiFieldFixtures,
  propsSchema as smartScanAiFieldPropsSchema,
} from './smart-scan-ai-field/fixtures';
import { previewConfig as smartScanAiFieldConfig } from './smart-scan-ai-field/preview.config';

import { TypeformChoicesListEditor } from './typeform-choices-list-editor/TypeformChoicesListEditor';
import {
  fixtures as typeformChoicesListEditorFixtures,
  propsSchema as typeformChoicesListEditorPropsSchema,
} from './typeform-choices-list-editor/fixtures';
import { previewConfig as typeformChoicesListEditorConfig } from './typeform-choices-list-editor/preview.config';

import { TypeformContactsModule } from './typeform-contacts-module/TypeformContactsModule';
import {
  fixtures as typeformContactsModuleFixtures,
  propsSchema as typeformContactsModulePropsSchema,
} from './typeform-contacts-module/fixtures';
import { previewConfig as typeformContactsModuleConfig } from './typeform-contacts-module/preview.config';

import { TypeformAiChatToCreate } from './typeform-ai-chat-to-create/TypeformAiChatToCreate';
import {
  fixtures as typeformAiChatToCreateFixtures,
  propsSchema as typeformAiChatToCreatePropsSchema,
} from './typeform-ai-chat-to-create/fixtures';
import { previewConfig as typeformAiChatToCreateConfig } from './typeform-ai-chat-to-create/preview.config';

import { TypeformAutomationsBuilder } from './typeform-automations-builder/TypeformAutomationsBuilder';
import {
  fixtures as typeformAutomationsBuilderFixtures,
  propsSchema as typeformAutomationsBuilderPropsSchema,
} from './typeform-automations-builder/fixtures';
import { previewConfig as typeformAutomationsBuilderConfig } from './typeform-automations-builder/preview.config';

import { ZiaAiFormGenerator } from './zia-ai-form-generator/ZiaAiFormGenerator';
import {
  fixtures as ziaAiFormGeneratorFixtures,
  propsSchema as ziaAiFormGeneratorPropsSchema,
} from './zia-ai-form-generator/fixtures';
import { previewConfig as ziaAiFormGeneratorConfig } from './zia-ai-form-generator/preview.config';

import { PublishShareFlow } from './publish-share-flow/PublishShareFlow';
import {
  fixtures as publishShareFlowFixtures,
  propsSchema as publishShareFlowPropsSchema,
} from './publish-share-flow/fixtures';
import { previewConfig as publishShareFlowConfig } from './publish-share-flow/preview.config';

import { TypeformAnalyticsDashboard } from './typeform-analytics-dashboard/TypeformAnalyticsDashboard';
import {
  fixtures as typeformAnalyticsDashboardFixtures,
  propsSchema as typeformAnalyticsDashboardPropsSchema,
} from './typeform-analytics-dashboard/fixtures';
import { previewConfig as typeformAnalyticsDashboardConfig } from './typeform-analytics-dashboard/preview.config';

import { BuilderPreviewSettingsTabs } from './builder-preview-settings-tabs/BuilderPreviewSettingsTabs';
import {
  fixtures as builderPreviewSettingsTabsFixtures,
  propsSchema as builderPreviewSettingsTabsPropsSchema,
} from './builder-preview-settings-tabs/fixtures';
import { previewConfig as builderPreviewSettingsTabsConfig } from './builder-preview-settings-tabs/preview.config';

import { NotificationSettingsEditor } from './notification-settings-editor/NotificationSettingsEditor';
import {
  fixtures as notificationSettingsEditorFixtures,
  propsSchema as notificationSettingsEditorPropsSchema,
} from './notification-settings-editor/fixtures';
import { previewConfig as notificationSettingsEditorConfig } from './notification-settings-editor/preview.config';

import { CollaboratorPermissionsDialog } from './collaborator-permissions-dialog/CollaboratorPermissionsDialog';
import {
  fixtures as collaboratorPermissionsDialogFixtures,
  propsSchema as collaboratorPermissionsDialogPropsSchema,
} from './collaborator-permissions-dialog/fixtures';
import { previewConfig as collaboratorPermissionsDialogConfig } from './collaborator-permissions-dialog/preview.config';

import { TwoLineDropdownAndAccordion } from './two-line-dropdown-and-accordion/TwoLineDropdownAndAccordion';
import {
  fixtures as twoLineDropdownAndAccordionFixtures,
  propsSchema as twoLineDropdownAndAccordionPropsSchema,
} from './two-line-dropdown-and-accordion/fixtures';
import { previewConfig as twoLineDropdownAndAccordionConfig } from './two-line-dropdown-and-accordion/preview.config';

import { DestructiveConfirmModalComparison } from './destructive-confirm-modal-comparison/DestructiveConfirmModalComparison';
import {
  fixtures as destructiveConfirmModalComparisonFixtures,
  propsSchema as destructiveConfirmModalComparisonPropsSchema,
} from './destructive-confirm-modal-comparison/fixtures';
import { previewConfig as destructiveConfirmModalComparisonConfig } from './destructive-confirm-modal-comparison/preview.config';

import { ExportFilterCopyUtilityControls } from './export-filter-copy-utility-controls/ExportFilterCopyUtilityControls';
import {
  fixtures as exportFilterCopyUtilityControlsFixtures,
  propsSchema as exportFilterCopyUtilityControlsPropsSchema,
} from './export-filter-copy-utility-controls/fixtures';
import { previewConfig as exportFilterCopyUtilityControlsConfig } from './export-filter-copy-utility-controls/preview.config';

import { FileUploadField } from './file-upload-field/FileUploadField';
import {
  fixtures as fileUploadFieldFixtures,
  propsSchema as fileUploadFieldPropsSchema,
} from './file-upload-field/fixtures';
import { previewConfig as fileUploadFieldConfig } from './file-upload-field/preview.config';

import { TypeformFormModePicker } from './typeform-form-mode-picker/TypeformFormModePicker';
import {
  fixtures as typeformFormModePickerFixtures,
  propsSchema as typeformFormModePickerPropsSchema,
} from './typeform-form-mode-picker/fixtures';
import { previewConfig as typeformFormModePickerConfig } from './typeform-form-mode-picker/preview.config';

import { TypeformScoringOutcomeQuizEditor } from './typeform-scoring-outcome-quiz-editor/TypeformScoringOutcomeQuizEditor';
import {
  fixtures as typeformScoringOutcomeQuizEditorFixtures,
  propsSchema as typeformScoringOutcomeQuizEditorPropsSchema,
} from './typeform-scoring-outcome-quiz-editor/fixtures';
import { previewConfig as typeformScoringOutcomeQuizEditorConfig } from './typeform-scoring-outcome-quiz-editor/preview.config';

import { DocumentCanvasEditorShell } from './document-canvas-editor-shell/DocumentCanvasEditorShell';
import {
  fixtures as documentCanvasEditorShellFixtures,
  propsSchema as documentCanvasEditorShellPropsSchema,
} from './document-canvas-editor-shell/fixtures';
import { previewConfig as documentCanvasEditorShellConfig } from './document-canvas-editor-shell/preview.config';

import { RespondentRuntimeGuidedVsStandard } from './respondent-runtime-guided-vs-standard/RespondentRuntimeGuidedVsStandard';
import {
  fixtures as respondentRuntimeGuidedVsStandardFixtures,
  propsSchema as respondentRuntimeGuidedVsStandardPropsSchema,
} from './respondent-runtime-guided-vs-standard/fixtures';
import { previewConfig as respondentRuntimeGuidedVsStandardConfig } from './respondent-runtime-guided-vs-standard/preview.config';

import { PaperformYesNoField } from './paperform-yes-no-field/PaperformYesNoField';
import {
  fixtures as paperformYesNoFieldFixtures,
  propsSchema as paperformYesNoFieldPropsSchema,
} from './paperform-yes-no-field/fixtures';
import { previewConfig as paperformYesNoFieldConfig } from './paperform-yes-no-field/preview.config';

import { PaperformRatingField } from './paperform-rating-field/PaperformRatingField';
import {
  fixtures as paperformRatingFieldFixtures,
  propsSchema as paperformRatingFieldPropsSchema,
} from './paperform-rating-field/fixtures';
import { previewConfig as paperformRatingFieldConfig } from './paperform-rating-field/preview.config';

import { PaperformPaymentsProductsFields } from './paperform-payments-products-fields/PaperformPaymentsProductsFields';
import {
  fixtures as paperformPaymentsProductsFieldsFixtures,
  propsSchema as paperformPaymentsProductsFieldsPropsSchema,
} from './paperform-payments-products-fields/fixtures';
import { previewConfig as paperformPaymentsProductsFieldsConfig } from './paperform-payments-products-fields/preview.config';

import { PaperformCalculationFieldAiHelper } from './paperform-calculation-field-ai-helper/PaperformCalculationFieldAiHelper';
import {
  fixtures as paperformCalculationFieldAiHelperFixtures,
  propsSchema as paperformCalculationFieldAiHelperPropsSchema,
} from './paperform-calculation-field-ai-helper/fixtures';
import { previewConfig as paperformCalculationFieldAiHelperConfig } from './paperform-calculation-field-ai-helper/preview.config';

import { PaperformCustomPdfDesigner } from './paperform-custom-pdf-designer/PaperformCustomPdfDesigner';
import {
  fixtures as paperformCustomPdfDesignerFixtures,
  propsSchema as paperformCustomPdfDesignerPropsSchema,
} from './paperform-custom-pdf-designer/fixtures';
import { previewConfig as paperformCustomPdfDesignerConfig } from './paperform-custom-pdf-designer/preview.config';

import { PaperformSubmissionsResultsView } from './paperform-submissions-results-view/PaperformSubmissionsResultsView';
import {
  fixtures as paperformSubmissionsResultsViewFixtures,
  propsSchema as paperformSubmissionsResultsViewPropsSchema,
} from './paperform-submissions-results-view/fixtures';
import { previewConfig as paperformSubmissionsResultsViewConfig } from './paperform-submissions-results-view/preview.config';

import { PaperformQuestionVisibilityLogic } from './paperform-question-visibility-logic/PaperformQuestionVisibilityLogic';
import {
  fixtures as paperformQuestionVisibilityLogicFixtures,
  propsSchema as paperformQuestionVisibilityLogicPropsSchema,
} from './paperform-question-visibility-logic/fixtures';
import { previewConfig as paperformQuestionVisibilityLogicConfig } from './paperform-question-visibility-logic/preview.config';

import { PaperformAiCreate } from './paperform-ai-create/PaperformAiCreate';
import {
  fixtures as paperformAiCreateFixtures,
  propsSchema as paperformAiCreatePropsSchema,
} from './paperform-ai-create/fixtures';
import { previewConfig as paperformAiCreateConfig } from './paperform-ai-create/preview.config';

import { GoogleFormsFeedbackPatterns } from './google-forms-feedback-patterns/GoogleFormsFeedbackPatterns';
import {
  fixtures as googleFormsFeedbackPatternsFixtures,
  propsSchema as googleFormsFeedbackPatternsPropsSchema,
} from './google-forms-feedback-patterns/fixtures';
import { previewConfig as googleFormsFeedbackPatternsConfig } from './google-forms-feedback-patterns/preview.config';

import { PaperformFeedbackToastAlertEmptyLoading } from './paperform-feedback-toast-alert-empty-loading/PaperformFeedbackToastAlertEmptyLoading';
import {
  fixtures as paperformFeedbackToastAlertEmptyLoadingFixtures,
  propsSchema as paperformFeedbackToastAlertEmptyLoadingPropsSchema,
} from './paperform-feedback-toast-alert-empty-loading/fixtures';
import { previewConfig as paperformFeedbackToastAlertEmptyLoadingConfig } from './paperform-feedback-toast-alert-empty-loading/preview.config';

import { PaperformTooltip } from './paperform-tooltip/PaperformTooltip';
import {
  fixtures as paperformTooltipFixtures,
  propsSchema as paperformTooltipPropsSchema,
} from './paperform-tooltip/fixtures';
import { previewConfig as paperformTooltipConfig } from './paperform-tooltip/preview.config';

import { JotformStarRatingField } from './jotform-star-rating-field/JotformStarRatingField';
import {
  fixtures as jotformStarRatingFieldFixtures,
  propsSchema as jotformStarRatingFieldPropsSchema,
} from './jotform-star-rating-field/fixtures';
import { previewConfig as jotformStarRatingFieldConfig } from './jotform-star-rating-field/preview.config';

import { JotformScaleRatingField } from './jotform-scale-rating-field/JotformScaleRatingField';
import {
  fixtures as jotformScaleRatingFieldFixtures,
  propsSchema as jotformScaleRatingFieldPropsSchema,
} from './jotform-scale-rating-field/fixtures';
import { previewConfig as jotformScaleRatingFieldConfig } from './jotform-scale-rating-field/preview.config';

import { JotformInputTableField } from './jotform-input-table-field/JotformInputTableField';
import {
  fixtures as jotformInputTableFieldFixtures,
  propsSchema as jotformInputTableFieldPropsSchema,
} from './jotform-input-table-field/fixtures';
import { previewConfig as jotformInputTableFieldConfig } from './jotform-input-table-field/preview.config';

import { JotformAppShellDashboard } from './jotform-app-shell-dashboard/JotformAppShellDashboard';
import {
  fixtures as jotformAppShellDashboardFixtures,
  propsSchema as jotformAppShellDashboardPropsSchema,
} from './jotform-app-shell-dashboard/fixtures';
import { previewConfig as jotformAppShellDashboardConfig } from './jotform-app-shell-dashboard/preview.config';

import { JotformAppShellBuilder } from './jotform-app-shell-builder/JotformAppShellBuilder';
import {
  fixtures as jotformAppShellBuilderFixtures,
  propsSchema as jotformAppShellBuilderPropsSchema,
} from './jotform-app-shell-builder/fixtures';
import { previewConfig as jotformAppShellBuilderConfig } from './jotform-app-shell-builder/preview.config';

import { JotformAiFormGeneration } from './jotform-ai-form-generation/JotformAiFormGeneration';
import {
  fixtures as jotformAiFormGenerationFixtures,
  propsSchema as jotformAiFormGenerationPropsSchema,
} from './jotform-ai-form-generation/fixtures';
import { previewConfig as jotformAiFormGenerationConfig } from './jotform-ai-form-generation/preview.config';

import { JotformSignBuilder } from './jotform-sign-builder/JotformSignBuilder';
import {
  fixtures as jotformSignBuilderFixtures,
  propsSchema as jotformSignBuilderPropsSchema,
} from './jotform-sign-builder/fixtures';
import { previewConfig as jotformSignBuilderConfig } from './jotform-sign-builder/preview.config';

import { JotformTablesInlineEditAndViews } from './jotform-tables-inline-edit-and-views/JotformTablesInlineEditAndViews';
import {
  fixtures as jotformTablesInlineEditAndViewsFixtures,
  propsSchema as jotformTablesInlineEditAndViewsPropsSchema,
} from './jotform-tables-inline-edit-and-views/fixtures';
import { previewConfig as jotformTablesInlineEditAndViewsConfig } from './jotform-tables-inline-edit-and-views/preview.config';

import { JotformConditionalLogic } from './jotform-conditional-logic/JotformConditionalLogic';
import {
  fixtures as jotformConditionalLogicFixtures,
  propsSchema as jotformConditionalLogicPropsSchema,
} from './jotform-conditional-logic/fixtures';
import { previewConfig as jotformConditionalLogicConfig } from './jotform-conditional-logic/preview.config';

import { JotformSmartPdfForms } from './jotform-smart-pdf-forms/JotformSmartPdfForms';
import {
  fixtures as jotformSmartPdfFormsFixtures,
  propsSchema as jotformSmartPdfFormsPropsSchema,
} from './jotform-smart-pdf-forms/fixtures';
import { previewConfig as jotformSmartPdfFormsConfig } from './jotform-smart-pdf-forms/preview.config';

import { JotformAiAgents } from './jotform-ai-agents/JotformAiAgents';
import {
  fixtures as jotformAiAgentsFixtures,
  propsSchema as jotformAiAgentsPropsSchema,
} from './jotform-ai-agents/fixtures';
import { previewConfig as jotformAiAgentsConfig } from './jotform-ai-agents/preview.config';

import { JotformWorkflowsWorkflowBuilder } from './jotform-workflows-workflow-builder/JotformWorkflowsWorkflowBuilder';
import {
  fixtures as jotformWorkflowsWorkflowBuilderFixtures,
  propsSchema as jotformWorkflowsWorkflowBuilderPropsSchema,
} from './jotform-workflows-workflow-builder/fixtures';
import { previewConfig as jotformWorkflowsWorkflowBuilderConfig } from './jotform-workflows-workflow-builder/preview.config';

import { JotformBoards } from './jotform-boards/JotformBoards';
import {
  fixtures as jotformBoardsFixtures,
  propsSchema as jotformBoardsPropsSchema,
} from './jotform-boards/fixtures';
import { previewConfig as jotformBoardsConfig } from './jotform-boards/preview.config';

import { TypeformFeedbackPatterns } from './typeform-feedback-patterns/TypeformFeedbackPatterns';
import {
  fixtures as typeformFeedbackPatternsFixtures,
  propsSchema as typeformFeedbackPatternsPropsSchema,
} from './typeform-feedback-patterns/fixtures';
import { previewConfig as typeformFeedbackPatternsConfig } from './typeform-feedback-patterns/preview.config';

import { TypeformApplicationLayout } from './typeform-application-layout/TypeformApplicationLayout';
import {
  fixtures as typeformApplicationLayoutFixtures,
  propsSchema as typeformApplicationLayoutPropsSchema,
} from './typeform-application-layout/fixtures';
import { previewConfig as typeformApplicationLayoutConfig } from './typeform-application-layout/preview.config';

import { GoogleFormsAppShell } from './google-forms-app-shell/GoogleFormsAppShell';
import {
  fixtures as googleFormsAppShellFixtures,
  propsSchema as googleFormsAppShellPropsSchema,
} from './google-forms-app-shell/fixtures';
import { previewConfig as googleFormsAppShellConfig } from './google-forms-app-shell/preview.config';

import { GoogleFormsRatingField } from './google-forms-rating-field/GoogleFormsRatingField';
import {
  fixtures as googleFormsRatingFieldFixtures,
  propsSchema as googleFormsRatingFieldPropsSchema,
} from './google-forms-rating-field/fixtures';
import { previewConfig as googleFormsRatingFieldConfig } from './google-forms-rating-field/preview.config';

import { GoogleFormsLinearScaleField } from './google-forms-linear-scale-field/GoogleFormsLinearScaleField';
import {
  fixtures as googleFormsLinearScaleFieldFixtures,
  propsSchema as googleFormsLinearScaleFieldPropsSchema,
} from './google-forms-linear-scale-field/fixtures';
import { previewConfig as googleFormsLinearScaleFieldConfig } from './google-forms-linear-scale-field/preview.config';

import { GoogleFormsSectionBranching } from './google-forms-section-branching/GoogleFormsSectionBranching';
import {
  fixtures as googleFormsSectionBranchingFixtures,
  propsSchema as googleFormsSectionBranchingPropsSchema,
} from './google-forms-section-branching/fixtures';
import { previewConfig as googleFormsSectionBranchingConfig } from './google-forms-section-branching/preview.config';

import { PaperformSignaturePapersign } from './paperform-signature-papersign/PaperformSignaturePapersign';
import {
  fixtures as paperformSignaturePapersignFixtures,
  propsSchema as paperformSignaturePapersignPropsSchema,
} from './paperform-signature-papersign/fixtures';
import { previewConfig as paperformSignaturePapersignConfig } from './paperform-signature-papersign/preview.config';

import { GoogleFormsResponsesView } from './google-forms-responses-view/GoogleFormsResponsesView';
import {
  fixtures as googleFormsResponsesViewFixtures,
  propsSchema as googleFormsResponsesViewPropsSchema,
} from './google-forms-responses-view/fixtures';
import { previewConfig as googleFormsResponsesViewConfig } from './google-forms-responses-view/preview.config';

import { SemrushAiVisibilityShell } from './semrush-ai-visibility-shell/SemrushAiVisibilityShell';
import {
  fixtures as semrushAiVisibilityShellFixtures,
  propsSchema as semrushAiVisibilityShellPropsSchema,
} from './semrush-ai-visibility-shell/fixtures';
import { previewConfig as semrushAiVisibilityShellConfig } from './semrush-ai-visibility-shell/preview.config';
import { SemrushAiVisibilityLanding } from './semrush-ai-visibility-landing/SemrushAiVisibilityLanding';
import {
  fixtures as semrushAiVisibilityLandingFixtures,
  propsSchema as semrushAiVisibilityLandingPropsSchema,
} from './semrush-ai-visibility-landing/fixtures';
import { previewConfig as semrushAiVisibilityLandingConfig } from './semrush-ai-visibility-landing/preview.config';
import { SemrushSiteAuditProjects } from './semrush-site-audit-projects/SemrushSiteAuditProjects';
import {
  fixtures as semrushSiteAuditProjectsFixtures,
  propsSchema as semrushSiteAuditProjectsPropsSchema,
} from './semrush-site-audit-projects/fixtures';
import { previewConfig as semrushSiteAuditProjectsConfig } from './semrush-site-audit-projects/preview.config';
import { SemrushSiteAuditIssueDetail } from './semrush-site-audit-issue-detail/SemrushSiteAuditIssueDetail';
import {
  fixtures as semrushSiteAuditIssueDetailFixtures,
  propsSchema as semrushSiteAuditIssueDetailPropsSchema,
} from './semrush-site-audit-issue-detail/fixtures';
import { previewConfig as semrushSiteAuditIssueDetailConfig } from './semrush-site-audit-issue-detail/preview.config';
import { SemrushHomeFoldersWorkspace } from './semrush-home-folders-workspace/SemrushHomeFoldersWorkspace';
import {
  fixtures as semrushHomeFoldersWorkspaceFixtures,
  propsSchema as semrushHomeFoldersWorkspacePropsSchema,
} from './semrush-home-folders-workspace/fixtures';
import { previewConfig as semrushHomeFoldersWorkspaceConfig } from './semrush-home-folders-workspace/preview.config';
import { SemrushActionButton } from './semrush-action-button/SemrushActionButton';
import {
  fixtures as semrushActionButtonFixtures,
  propsSchema as semrushActionButtonPropsSchema,
} from './semrush-action-button/fixtures';
import { previewConfig as semrushActionButtonConfig } from './semrush-action-button/preview.config';
import { SemrushSearchClearAction } from './semrush-search-clear-action/SemrushSearchClearAction';
import {
  fixtures as semrushSearchClearActionFixtures,
  propsSchema as semrushSearchClearActionPropsSchema,
} from './semrush-search-clear-action/fixtures';
import { previewConfig as semrushSearchClearActionConfig } from './semrush-search-clear-action/preview.config';
import { SemrushDropdownFilterAction } from './semrush-dropdown-filter-action/SemrushDropdownFilterAction';
import {
  fixtures as semrushDropdownFilterActionFixtures,
  propsSchema as semrushDropdownFilterActionPropsSchema,
} from './semrush-dropdown-filter-action/fixtures';
import { previewConfig as semrushDropdownFilterActionConfig } from './semrush-dropdown-filter-action/preview.config';
import { SemrushContextActionMenu } from './semrush-context-action-menu/SemrushContextActionMenu';
import {
  fixtures as semrushContextActionMenuFixtures,
  propsSchema as semrushContextActionMenuPropsSchema,
} from './semrush-context-action-menu/fixtures';
import { previewConfig as semrushContextActionMenuConfig } from './semrush-context-action-menu/preview.config';
import { SemrushBulkSelectionActionBar } from './semrush-bulk-selection-action-bar/SemrushBulkSelectionActionBar';
import {
  fixtures as semrushBulkSelectionActionBarFixtures,
  propsSchema as semrushBulkSelectionActionBarPropsSchema,
} from './semrush-bulk-selection-action-bar/fixtures';
import { previewConfig as semrushBulkSelectionActionBarConfig } from './semrush-bulk-selection-action-bar/preview.config';
import { SemrushPageSizeControl } from './semrush-page-size-control/SemrushPageSizeControl';
import {
  fixtures as semrushPageSizeControlFixtures,
  propsSchema as semrushPageSizeControlPropsSchema,
} from './semrush-page-size-control/fixtures';
import { previewConfig as semrushPageSizeControlConfig } from './semrush-page-size-control/preview.config';
import { SemrushEntityCreationModal } from './semrush-entity-creation-modal/SemrushEntityCreationModal';
import {
  fixtures as semrushEntityCreationModalFixtures,
  propsSchema as semrushEntityCreationModalPropsSchema,
} from './semrush-entity-creation-modal/fixtures';
import { previewConfig as semrushEntityCreationModalConfig } from './semrush-entity-creation-modal/preview.config';
import { SemrushDisclosurePanel } from './semrush-disclosure-panel/SemrushDisclosurePanel';
import {
  fixtures as semrushDisclosurePanelFixtures,
  propsSchema as semrushDisclosurePanelPropsSchema,
} from './semrush-disclosure-panel/fixtures';
import { previewConfig as semrushDisclosurePanelConfig } from './semrush-disclosure-panel/preview.config';
import { SemrushReportTabs } from './semrush-report-tabs/SemrushReportTabs';
import {
  fixtures as semrushReportTabsFixtures,
  propsSchema as semrushReportTabsPropsSchema,
} from './semrush-report-tabs/fixtures';
import { previewConfig as semrushReportTabsConfig } from './semrush-report-tabs/preview.config';
import { SemrushProjectSelector } from './semrush-project-selector/SemrushProjectSelector';
import {
  fixtures as semrushProjectSelectorFixtures,
  propsSchema as semrushProjectSelectorPropsSchema,
} from './semrush-project-selector/fixtures';
import { previewConfig as semrushProjectSelectorConfig } from './semrush-project-selector/preview.config';
import { SemrushCampaignActionGroup } from './semrush-campaign-action-group/SemrushCampaignActionGroup';
import {
  fixtures as semrushCampaignActionGroupFixtures,
  propsSchema as semrushCampaignActionGroupPropsSchema,
} from './semrush-campaign-action-group/fixtures';
import { previewConfig as semrushCampaignActionGroupConfig } from './semrush-campaign-action-group/preview.config';
import { SemrushAsyncStatusState } from './semrush-async-status-state/SemrushAsyncStatusState';
import {
  fixtures as semrushAsyncStatusStateFixtures,
  propsSchema as semrushAsyncStatusStatePropsSchema,
} from './semrush-async-status-state/fixtures';
import { previewConfig as semrushAsyncStatusStateConfig } from './semrush-async-status-state/preview.config';
import { SemrushEmptyStateRecovery } from './semrush-empty-state-recovery/SemrushEmptyStateRecovery';
import {
  fixtures as semrushEmptyStateRecoveryFixtures,
  propsSchema as semrushEmptyStateRecoveryPropsSchema,
} from './semrush-empty-state-recovery/fixtures';
import { previewConfig as semrushEmptyStateRecoveryConfig } from './semrush-empty-state-recovery/preview.config';
import { SemrushHelpPopover } from './semrush-help-popover/SemrushHelpPopover';
import {
  fixtures as semrushHelpPopoverFixtures,
  propsSchema as semrushHelpPopoverPropsSchema,
} from './semrush-help-popover/fixtures';
import { previewConfig as semrushHelpPopoverConfig } from './semrush-help-popover/preview.config';
import { SemrushUtilityHeaderActions } from './semrush-utility-header-actions/SemrushUtilityHeaderActions';
import {
  fixtures as semrushUtilityHeaderActionsFixtures,
  propsSchema as semrushUtilityHeaderActionsPropsSchema,
} from './semrush-utility-header-actions/fixtures';
import { previewConfig as semrushUtilityHeaderActionsConfig } from './semrush-utility-header-actions/preview.config';
import { SemrushSortControl } from './semrush-sort-control/SemrushSortControl';
import {
  fixtures as semrushSortControlFixtures,
  propsSchema as semrushSortControlPropsSchema,
} from './semrush-sort-control/fixtures';
import { previewConfig as semrushSortControlConfig } from './semrush-sort-control/preview.config';
import { SemrushViewModeToggle } from './semrush-view-mode-toggle/SemrushViewModeToggle';
import {
  fixtures as semrushViewModeToggleFixtures,
  propsSchema as semrushViewModeTogglePropsSchema,
} from './semrush-view-mode-toggle/fixtures';
import { previewConfig as semrushViewModeToggleConfig } from './semrush-view-mode-toggle/preview.config';
import { SemrushCarouselControls } from './semrush-carousel-controls/SemrushCarouselControls';
import {
  fixtures as semrushCarouselControlsFixtures,
  propsSchema as semrushCarouselControlsPropsSchema,
} from './semrush-carousel-controls/fixtures';
import { previewConfig as semrushCarouselControlsConfig } from './semrush-carousel-controls/preview.config';
import { SemrushWarningQuotaDialog } from './semrush-warning-quota-dialog/SemrushWarningQuotaDialog';
import {
  fixtures as semrushWarningQuotaDialogFixtures,
  propsSchema as semrushWarningQuotaDialogPropsSchema,
} from './semrush-warning-quota-dialog/fixtures';
import { previewConfig as semrushWarningQuotaDialogConfig } from './semrush-warning-quota-dialog/preview.config';
import { SemrushResponseDetailModal } from './semrush-response-detail-modal/SemrushResponseDetailModal';
import {
  fixtures as semrushResponseDetailModalFixtures,
  propsSchema as semrushResponseDetailModalPropsSchema,
} from './semrush-response-detail-modal/fixtures';
import { previewConfig as semrushResponseDetailModalConfig } from './semrush-response-detail-modal/preview.config';
import { SemrushToastBanner } from './semrush-toast-banner/SemrushToastBanner';
import {
  fixtures as semrushToastBannerFixtures,
  propsSchema as semrushToastBannerPropsSchema,
} from './semrush-toast-banner/fixtures';
import { previewConfig as semrushToastBannerConfig } from './semrush-toast-banner/preview.config';
import { SemrushDateHistorySelector } from './semrush-date-history-selector/SemrushDateHistorySelector';
import {
  fixtures as semrushDateHistorySelectorFixtures,
  propsSchema as semrushDateHistorySelectorPropsSchema,
} from './semrush-date-history-selector/fixtures';
import { previewConfig as semrushDateHistorySelectorConfig } from './semrush-date-history-selector/preview.config';
import { SemrushCompetitorChips } from './semrush-competitor-chips/SemrushCompetitorChips';
import {
  fixtures as semrushCompetitorChipsFixtures,
  propsSchema as semrushCompetitorChipsPropsSchema,
} from './semrush-competitor-chips/fixtures';
import { previewConfig as semrushCompetitorChipsConfig } from './semrush-competitor-chips/preview.config';
import { SemrushFilterVisibilityControl } from './semrush-filter-visibility-control/SemrushFilterVisibilityControl';
import {
  fixtures as semrushFilterVisibilityControlFixtures,
  propsSchema as semrushFilterVisibilityControlPropsSchema,
} from './semrush-filter-visibility-control/fixtures';
import { previewConfig as semrushFilterVisibilityControlConfig } from './semrush-filter-visibility-control/preview.config';
import { SemrushMetricDistributionSwitch } from './semrush-metric-distribution-switch/SemrushMetricDistributionSwitch';
import {
  fixtures as semrushMetricDistributionSwitchFixtures,
  propsSchema as semrushMetricDistributionSwitchPropsSchema,
} from './semrush-metric-distribution-switch/fixtures';
import { previewConfig as semrushMetricDistributionSwitchConfig } from './semrush-metric-distribution-switch/preview.config';
import { SemrushRowOverflowMenu } from './semrush-row-overflow-menu/SemrushRowOverflowMenu';
import {
  fixtures as semrushRowOverflowMenuFixtures,
  propsSchema as semrushRowOverflowMenuPropsSchema,
} from './semrush-row-overflow-menu/fixtures';
import { previewConfig as semrushRowOverflowMenuConfig } from './semrush-row-overflow-menu/preview.config';
import { SemrushPaginationNavigator } from './semrush-pagination-navigator/SemrushPaginationNavigator';
import {
  fixtures as semrushPaginationNavigatorFixtures,
  propsSchema as semrushPaginationNavigatorPropsSchema,
} from './semrush-pagination-navigator/fixtures';
import { previewConfig as semrushPaginationNavigatorConfig } from './semrush-pagination-navigator/preview.config';
import { SemrushStatusBadge } from './semrush-status-badge/SemrushStatusBadge';
import {
  fixtures as semrushStatusBadgeFixtures,
  propsSchema as semrushStatusBadgePropsSchema,
} from './semrush-status-badge/fixtures';
import { previewConfig as semrushStatusBadgeConfig } from './semrush-status-badge/preview.config';
import { SemrushHealthScoreIndicator } from './semrush-health-score-indicator/SemrushHealthScoreIndicator';
import {
  fixtures as semrushHealthScoreIndicatorFixtures,
  propsSchema as semrushHealthScoreIndicatorPropsSchema,
} from './semrush-health-score-indicator/fixtures';
import { previewConfig as semrushHealthScoreIndicatorConfig } from './semrush-health-score-indicator/preview.config';
import { SemrushRowSelectionControl } from './semrush-row-selection-control/SemrushRowSelectionControl';
import {
  fixtures as semrushRowSelectionControlFixtures,
  propsSchema as semrushRowSelectionControlPropsSchema,
} from './semrush-row-selection-control/fixtures';
import { previewConfig as semrushRowSelectionControlConfig } from './semrush-row-selection-control/preview.config';
import { SemrushValidationField } from './semrush-validation-field/SemrushValidationField';
import {
  fixtures as semrushValidationFieldFixtures,
  propsSchema as semrushValidationFieldPropsSchema,
} from './semrush-validation-field/fixtures';
import { previewConfig as semrushValidationFieldConfig } from './semrush-validation-field/preview.config';
import { SemrushBacklinkAuditProjects } from './semrush-backlink-audit-projects/SemrushBacklinkAuditProjects';
import {
  fixtures as semrushBacklinkAuditProjectsFixtures,
  propsSchema as semrushBacklinkAuditProjectsPropsSchema,
} from './semrush-backlink-audit-projects/fixtures';
import { previewConfig as semrushBacklinkAuditProjectsConfig } from './semrush-backlink-audit-projects/preview.config';
import { SemrushBacklinkAuditSetupWizard } from './semrush-backlink-audit-setup-wizard/SemrushBacklinkAuditSetupWizard';
import {
  fixtures as semrushBacklinkAuditSetupWizardFixtures,
  propsSchema as semrushBacklinkAuditSetupWizardPropsSchema,
} from './semrush-backlink-audit-setup-wizard/fixtures';
import { previewConfig as semrushBacklinkAuditSetupWizardConfig } from './semrush-backlink-audit-setup-wizard/preview.config';
import { SemrushCampaignScopeRadioGroup } from './semrush-campaign-scope-radio-group/SemrushCampaignScopeRadioGroup';
import {
  fixtures as semrushCampaignScopeRadioGroupFixtures,
  propsSchema as semrushCampaignScopeRadioGroupPropsSchema,
} from './semrush-campaign-scope-radio-group/fixtures';
import { previewConfig as semrushCampaignScopeRadioGroupConfig } from './semrush-campaign-scope-radio-group/preview.config';
import { SemrushDomainCategoryCheckboxGroup } from './semrush-domain-category-checkbox-group/SemrushDomainCategoryCheckboxGroup';
import {
  fixtures as semrushDomainCategoryCheckboxGroupFixtures,
  propsSchema as semrushDomainCategoryCheckboxGroupPropsSchema,
} from './semrush-domain-category-checkbox-group/fixtures';
import { previewConfig as semrushDomainCategoryCheckboxGroupConfig } from './semrush-domain-category-checkbox-group/preview.config';
import { SemrushCountryTagSelector } from './semrush-country-tag-selector/SemrushCountryTagSelector';
import {
  fixtures as semrushCountryTagSelectorFixtures,
  propsSchema as semrushCountryTagSelectorPropsSchema,
} from './semrush-country-tag-selector/fixtures';
import { previewConfig as semrushCountryTagSelectorConfig } from './semrush-country-tag-selector/preview.config';
import { SemrushHelpSupportPanel } from './semrush-help-support-panel/SemrushHelpSupportPanel';
import {
  fixtures as semrushHelpSupportPanelFixtures,
  propsSchema as semrushHelpSupportPanelPropsSchema,
} from './semrush-help-support-panel/fixtures';
import { previewConfig as semrushHelpSupportPanelConfig } from './semrush-help-support-panel/preview.config';
import { SemrushShareFoldersDialog } from './semrush-share-folders-dialog/SemrushShareFoldersDialog';
import {
  fixtures as semrushShareFoldersDialogFixtures,
  propsSchema as semrushShareFoldersDialogPropsSchema,
} from './semrush-share-folders-dialog/fixtures';
import { previewConfig as semrushShareFoldersDialogConfig } from './semrush-share-folders-dialog/preview.config';
import { SemrushDomainOverviewEntry } from './semrush-domain-overview-entry/SemrushDomainOverviewEntry';
import {
  fixtures as semrushDomainOverviewEntryFixtures,
  propsSchema as semrushDomainOverviewEntryPropsSchema,
} from './semrush-domain-overview-entry/fixtures';
import { previewConfig as semrushDomainOverviewEntryConfig } from './semrush-domain-overview-entry/preview.config';
import { SemrushDomainAnalysisQueryBar } from './semrush-domain-analysis-query-bar/SemrushDomainAnalysisQueryBar';
import {
  fixtures as semrushDomainAnalysisQueryBarFixtures,
  propsSchema as semrushDomainAnalysisQueryBarPropsSchema,
} from './semrush-domain-analysis-query-bar/fixtures';
import { previewConfig as semrushDomainAnalysisQueryBarConfig } from './semrush-domain-analysis-query-bar/preview.config';
import { SemrushDomainScopeSelector } from './semrush-domain-scope-selector/SemrushDomainScopeSelector';
import {
  fixtures as semrushDomainScopeSelectorFixtures,
  propsSchema as semrushDomainScopeSelectorPropsSchema,
} from './semrush-domain-scope-selector/fixtures';
import { previewConfig as semrushDomainScopeSelectorConfig } from './semrush-domain-scope-selector/preview.config';
import { SemrushDomainOverviewReport } from './semrush-domain-overview-report/SemrushDomainOverviewReport';
import {
  fixtures as semrushDomainOverviewReportFixtures,
  propsSchema as semrushDomainOverviewReportPropsSchema,
} from './semrush-domain-overview-report/fixtures';
import { previewConfig as semrushDomainOverviewReportConfig } from './semrush-domain-overview-report/preview.config';
import { SemrushReportControlCluster } from './semrush-report-control-cluster/SemrushReportControlCluster';
import {
  fixtures as semrushReportControlClusterFixtures,
  propsSchema as semrushReportControlClusterPropsSchema,
} from './semrush-report-control-cluster/fixtures';
import { previewConfig as semrushReportControlClusterConfig } from './semrush-report-control-cluster/preview.config';
import { SemrushSearchTrendControls } from './semrush-search-trend-controls/SemrushSearchTrendControls';
import {
  fixtures as semrushSearchTrendControlsFixtures,
  propsSchema as semrushSearchTrendControlsPropsSchema,
} from './semrush-search-trend-controls/fixtures';
import { previewConfig as semrushSearchTrendControlsConfig } from './semrush-search-trend-controls/preview.config';
import { SemrushFeatureUpgradeGate } from './semrush-feature-upgrade-gate/SemrushFeatureUpgradeGate';
import {
  fixtures as semrushFeatureUpgradeGateFixtures,
  propsSchema as semrushFeatureUpgradeGatePropsSchema,
} from './semrush-feature-upgrade-gate/fixtures';
import { previewConfig as semrushFeatureUpgradeGateConfig } from './semrush-feature-upgrade-gate/preview.config';
import { SemrushReportRecoveryState } from './semrush-report-recovery-state/SemrushReportRecoveryState';
import {
  fixtures as semrushReportRecoveryStateFixtures,
  propsSchema as semrushReportRecoveryStatePropsSchema,
} from './semrush-report-recovery-state/fixtures';
import { previewConfig as semrushReportRecoveryStateConfig } from './semrush-report-recovery-state/preview.config';
import { SemrushAiVisibilityDashboard } from './semrush-ai-visibility-dashboard/SemrushAiVisibilityDashboard';
import {
  fixtures as semrushAiVisibilityDashboardFixtures,
  propsSchema as semrushAiVisibilityDashboardPropsSchema,
} from './semrush-ai-visibility-dashboard/fixtures';
import { previewConfig as semrushAiVisibilityDashboardConfig } from './semrush-ai-visibility-dashboard/preview.config';
import { SemrushAiCompetitorSetup } from './semrush-ai-competitor-setup/SemrushAiCompetitorSetup';
import {
  fixtures as semrushAiCompetitorSetupFixtures,
  propsSchema as semrushAiCompetitorSetupPropsSchema,
} from './semrush-ai-competitor-setup/fixtures';
import { previewConfig as semrushAiCompetitorSetupConfig } from './semrush-ai-competitor-setup/preview.config';
import { SemrushPromptResearchEntry } from './semrush-prompt-research-entry/SemrushPromptResearchEntry';
import {
  fixtures as semrushPromptResearchEntryFixtures,
  propsSchema as semrushPromptResearchEntryPropsSchema,
} from './semrush-prompt-research-entry/fixtures';
import { previewConfig as semrushPromptResearchEntryConfig } from './semrush-prompt-research-entry/preview.config';
import { SemrushBrandPerformanceInsights } from './semrush-brand-performance-insights/SemrushBrandPerformanceInsights';
import {
  fixtures as semrushBrandPerformanceInsightsFixtures,
  propsSchema as semrushBrandPerformanceInsightsPropsSchema,
} from './semrush-brand-performance-insights/fixtures';
import { previewConfig as semrushBrandPerformanceInsightsConfig } from './semrush-brand-performance-insights/preview.config';
import { SemrushReportFilterControls } from './semrush-report-filter-controls/SemrushReportFilterControls';
import {
  fixtures as semrushReportFilterControlsFixtures,
  propsSchema as semrushReportFilterControlsPropsSchema,
} from './semrush-report-filter-controls/fixtures';
import { previewConfig as semrushReportFilterControlsConfig } from './semrush-report-filter-controls/preview.config';
import { SemrushEvidenceAnswersDrawer } from './semrush-evidence-answers-drawer/SemrushEvidenceAnswersDrawer';
import {
  fixtures as semrushEvidenceAnswersDrawerFixtures,
  propsSchema as semrushEvidenceAnswersDrawerPropsSchema,
} from './semrush-evidence-answers-drawer/fixtures';
import { previewConfig as semrushEvidenceAnswersDrawerConfig } from './semrush-evidence-answers-drawer/preview.config';
import { SemrushPerceptionAnalysis } from './semrush-perception-analysis/SemrushPerceptionAnalysis';
import {
  fixtures as semrushPerceptionAnalysisFixtures,
  propsSchema as semrushPerceptionAnalysisPropsSchema,
} from './semrush-perception-analysis/fixtures';
import { previewConfig as semrushPerceptionAnalysisConfig } from './semrush-perception-analysis/preview.config';
import { SemrushNarrativeDrivers } from './semrush-narrative-drivers/SemrushNarrativeDrivers';
import {
  fixtures as semrushNarrativeDriversFixtures,
  propsSchema as semrushNarrativeDriversPropsSchema,
} from './semrush-narrative-drivers/fixtures';
import { previewConfig as semrushNarrativeDriversConfig } from './semrush-narrative-drivers/preview.config';
import { SemrushQuestionIntentAnalysis } from './semrush-question-intent-analysis/SemrushQuestionIntentAnalysis';
import {
  fixtures as semrushQuestionIntentAnalysisFixtures,
  propsSchema as semrushQuestionIntentAnalysisPropsSchema,
} from './semrush-question-intent-analysis/fixtures';
import { previewConfig as semrushQuestionIntentAnalysisConfig } from './semrush-question-intent-analysis/preview.config';
import { SemrushPositionTrackingProjects } from './semrush-position-tracking-projects/SemrushPositionTrackingProjects';
import {
  fixtures as semrushPositionTrackingProjectsFixtures,
  propsSchema as semrushPositionTrackingProjectsPropsSchema,
} from './semrush-position-tracking-projects/fixtures';
import { previewConfig as semrushPositionTrackingProjectsConfig } from './semrush-position-tracking-projects/preview.config';
import { SemrushTargetTypeFilter } from './semrush-target-type-filter/SemrushTargetTypeFilter';
import {
  fixtures as semrushTargetTypeFilterFixtures,
  propsSchema as semrushTargetTypeFilterPropsSchema,
} from './semrush-target-type-filter/fixtures';
import { previewConfig as semrushTargetTypeFilterConfig } from './semrush-target-type-filter/preview.config';
import { SemrushPositionTrackingDateRange } from './semrush-position-tracking-date-range/SemrushPositionTrackingDateRange';
import {
  fixtures as semrushPositionTrackingDateRangeFixtures,
  propsSchema as semrushPositionTrackingDateRangePropsSchema,
} from './semrush-position-tracking-date-range/fixtures';
import { previewConfig as semrushPositionTrackingDateRangeConfig } from './semrush-position-tracking-date-range/preview.config';
import { SemrushPositionTrackingLandscape } from './semrush-position-tracking-landscape/SemrushPositionTrackingLandscape';
import {
  fixtures as semrushPositionTrackingLandscapeFixtures,
  propsSchema as semrushPositionTrackingLandscapePropsSchema,
} from './semrush-position-tracking-landscape/fixtures';
import { previewConfig as semrushPositionTrackingLandscapeConfig } from './semrush-position-tracking-landscape/preview.config';
import { SemrushRankingsOverviewTable } from './semrush-rankings-overview-table/SemrushRankingsOverviewTable';
import {
  fixtures as semrushRankingsOverviewTableFixtures,
  propsSchema as semrushRankingsOverviewTablePropsSchema,
} from './semrush-rankings-overview-table/fixtures';
import { previewConfig as semrushRankingsOverviewTableConfig } from './semrush-rankings-overview-table/preview.config';
import { AhrefsDashboardWorkspace } from './ahrefs-dashboard-workspace/AhrefsDashboardWorkspace';
import {
  fixtures as ahrefsDashboardWorkspaceFixtures,
  propsSchema as ahrefsDashboardWorkspacePropsSchema,
} from './ahrefs-dashboard-workspace/fixtures';
import { previewConfig as ahrefsDashboardWorkspaceConfig } from './ahrefs-dashboard-workspace/preview.config';
import { AhrefsSiteExplorerEntry } from './ahrefs-site-explorer-entry/AhrefsSiteExplorerEntry';
import {
  fixtures as ahrefsSiteExplorerEntryFixtures,
  propsSchema as ahrefsSiteExplorerEntryPropsSchema,
} from './ahrefs-site-explorer-entry/fixtures';
import { previewConfig as ahrefsSiteExplorerEntryConfig } from './ahrefs-site-explorer-entry/preview.config';
import { AhrefsKeywordsExplorerAccessGate } from './ahrefs-keywords-explorer-access-gate/AhrefsKeywordsExplorerAccessGate';
import {
  fixtures as ahrefsKeywordsExplorerAccessGateFixtures,
  propsSchema as ahrefsKeywordsExplorerAccessGatePropsSchema,
} from './ahrefs-keywords-explorer-access-gate/fixtures';
import { previewConfig as ahrefsKeywordsExplorerAccessGateConfig } from './ahrefs-keywords-explorer-access-gate/preview.config';
import { AhrefsContentExplorerAccessGate } from './ahrefs-content-explorer-access-gate/AhrefsContentExplorerAccessGate';
import {
  fixtures as ahrefsContentExplorerAccessGateFixtures,
  propsSchema as ahrefsContentExplorerAccessGatePropsSchema,
} from './ahrefs-content-explorer-access-gate/fixtures';
import { previewConfig as ahrefsContentExplorerAccessGateConfig } from './ahrefs-content-explorer-access-gate/preview.config';
import { AhrefsSiteAuditEmptyState } from './ahrefs-site-audit-empty-state/AhrefsSiteAuditEmptyState';
import {
  fixtures as ahrefsSiteAuditEmptyStateFixtures,
  propsSchema as ahrefsSiteAuditEmptyStatePropsSchema,
} from './ahrefs-site-audit-empty-state/fixtures';
import { previewConfig as ahrefsSiteAuditEmptyStateConfig } from './ahrefs-site-audit-empty-state/preview.config';
import { AhrefsBrandRadarEntry } from './ahrefs-brand-radar-entry/AhrefsBrandRadarEntry';
import {
  fixtures as ahrefsBrandRadarEntryFixtures,
  propsSchema as ahrefsBrandRadarEntryPropsSchema,
} from './ahrefs-brand-radar-entry/fixtures';
import { previewConfig as ahrefsBrandRadarEntryConfig } from './ahrefs-brand-radar-entry/preview.config';
import { AhrefsAiContentHelperEntry } from './ahrefs-ai-content-helper-entry/AhrefsAiContentHelperEntry';
import {
  fixtures as ahrefsAiContentHelperEntryFixtures,
  propsSchema as ahrefsAiContentHelperEntryPropsSchema,
} from './ahrefs-ai-content-helper-entry/fixtures';
import { previewConfig as ahrefsAiContentHelperEntryConfig } from './ahrefs-ai-content-helper-entry/preview.config';
import { AhrefsSmmChannelOnboarding } from './ahrefs-smm-channel-onboarding/AhrefsSmmChannelOnboarding';
import {
  fixtures as ahrefsSmmChannelOnboardingFixtures,
  propsSchema as ahrefsSmmChannelOnboardingPropsSchema,
} from './ahrefs-smm-channel-onboarding/fixtures';
import { previewConfig as ahrefsSmmChannelOnboardingConfig } from './ahrefs-smm-channel-onboarding/preview.config';
import { AhrefsCompetitiveAnalysisAccessGate } from './ahrefs-competitive-analysis-access-gate/AhrefsCompetitiveAnalysisAccessGate';
import {
  fixtures as ahrefsCompetitiveAnalysisAccessGateFixtures,
  propsSchema as ahrefsCompetitiveAnalysisAccessGatePropsSchema,
} from './ahrefs-competitive-analysis-access-gate/fixtures';
import { previewConfig as ahrefsCompetitiveAnalysisAccessGateConfig } from './ahrefs-competitive-analysis-access-gate/preview.config';
import { AhrefsBatchAnalysisAccessGate } from './ahrefs-batch-analysis-access-gate/AhrefsBatchAnalysisAccessGate';
import {
  fixtures as ahrefsBatchAnalysisAccessGateFixtures,
  propsSchema as ahrefsBatchAnalysisAccessGatePropsSchema,
} from './ahrefs-batch-analysis-access-gate/fixtures';
import { previewConfig as ahrefsBatchAnalysisAccessGateConfig } from './ahrefs-batch-analysis-access-gate/preview.config';
import { AhrefsAiContentGraderPlanGate } from './ahrefs-ai-content-grader-plan-gate/AhrefsAiContentGraderPlanGate';
import {
  fixtures as ahrefsAiContentGraderPlanGateFixtures,
  propsSchema as ahrefsAiContentGraderPlanGatePropsSchema,
} from './ahrefs-ai-content-grader-plan-gate/fixtures';
import { previewConfig as ahrefsAiContentGraderPlanGateConfig } from './ahrefs-ai-content-grader-plan-gate/preview.config';
import { AhrefsActionButton } from './ahrefs-action-button/AhrefsActionButton';
import {
  fixtures as ahrefsActionButtonFixtures,
  propsSchema as ahrefsActionButtonPropsSchema,
} from './ahrefs-action-button/fixtures';
import { previewConfig as ahrefsActionButtonConfig } from './ahrefs-action-button/preview.config';
import { AhrefsTargetInputGroup } from './ahrefs-target-input-group/AhrefsTargetInputGroup';
import {
  fixtures as ahrefsTargetInputGroupFixtures,
  propsSchema as ahrefsTargetInputGroupPropsSchema,
} from './ahrefs-target-input-group/fixtures';
import { previewConfig as ahrefsTargetInputGroupConfig } from './ahrefs-target-input-group/preview.config';
import { AhrefsProjectStepper } from './ahrefs-project-stepper/AhrefsProjectStepper';
import {
  fixtures as ahrefsProjectStepperFixtures,
  propsSchema as ahrefsProjectStepperPropsSchema,
} from './ahrefs-project-stepper/fixtures';
import { previewConfig as ahrefsProjectStepperConfig } from './ahrefs-project-stepper/preview.config';
import { AhrefsProjectScopeForm } from './ahrefs-project-scope-form/AhrefsProjectScopeForm';
import {
  fixtures as ahrefsProjectScopeFormFixtures,
  propsSchema as ahrefsProjectScopeFormPropsSchema,
} from './ahrefs-project-scope-form/fixtures';
import { previewConfig as ahrefsProjectScopeFormConfig } from './ahrefs-project-scope-form/preview.config';
import { AhrefsAccessControlUpgradeModal } from './ahrefs-access-control-upgrade-modal/AhrefsAccessControlUpgradeModal';
import {
  fixtures as ahrefsAccessControlUpgradeModalFixtures,
  propsSchema as ahrefsAccessControlUpgradeModalPropsSchema,
} from './ahrefs-access-control-upgrade-modal/fixtures';
import { previewConfig as ahrefsAccessControlUpgradeModalConfig } from './ahrefs-access-control-upgrade-modal/preview.config';

import { AhrefsBotAnalyticsEmptyState } from './ahrefs-bot-analytics-empty-state/AhrefsBotAnalyticsEmptyState';
import {
  fixtures as ahrefsBotAnalyticsEmptyStateFixtures,
  propsSchema as ahrefsBotAnalyticsEmptyStatePropsSchema,
} from './ahrefs-bot-analytics-empty-state/fixtures';
import { previewConfig as ahrefsBotAnalyticsEmptyStateConfig } from './ahrefs-bot-analytics-empty-state/preview.config';
import { AhrefsRankTrackerPlanGate } from './ahrefs-rank-tracker-plan-gate/AhrefsRankTrackerPlanGate';
import {
  fixtures as ahrefsRankTrackerPlanGateFixtures,
  propsSchema as ahrefsRankTrackerPlanGatePropsSchema,
} from './ahrefs-rank-tracker-plan-gate/fixtures';
import { previewConfig as ahrefsRankTrackerPlanGateConfig } from './ahrefs-rank-tracker-plan-gate/preview.config';
import { AhrefsPortfolioEmptyState } from './ahrefs-portfolio-empty-state/AhrefsPortfolioEmptyState';
import {
  fixtures as ahrefsPortfolioEmptyStateFixtures,
  propsSchema as ahrefsPortfolioEmptyStatePropsSchema,
} from './ahrefs-portfolio-empty-state/fixtures';
import { previewConfig as ahrefsPortfolioEmptyStateConfig } from './ahrefs-portfolio-empty-state/preview.config';
import { AhrefsReportBuilderEmptyState } from './ahrefs-report-builder-empty-state/AhrefsReportBuilderEmptyState';
import {
  fixtures as ahrefsReportBuilderEmptyStateFixtures,
  propsSchema as ahrefsReportBuilderEmptyStatePropsSchema,
} from './ahrefs-report-builder-empty-state/fixtures';
import { previewConfig as ahrefsReportBuilderEmptyStateConfig } from './ahrefs-report-builder-empty-state/preview.config';
import { AhrefsAlertsWorkspace } from './ahrefs-alerts-workspace/AhrefsAlertsWorkspace';
import {
  fixtures as ahrefsAlertsWorkspaceFixtures,
  propsSchema as ahrefsAlertsWorkspacePropsSchema,
} from './ahrefs-alerts-workspace/fixtures';
import { previewConfig as ahrefsAlertsWorkspaceConfig } from './ahrefs-alerts-workspace/preview.config';
import { AhrefsGbpMonitorAccessGate } from './ahrefs-gbp-monitor-access-gate/AhrefsGbpMonitorAccessGate';
import {
  fixtures as ahrefsGbpMonitorAccessGateFixtures,
  propsSchema as ahrefsGbpMonitorAccessGatePropsSchema,
} from './ahrefs-gbp-monitor-access-gate/fixtures';
import { previewConfig as ahrefsGbpMonitorAccessGateConfig } from './ahrefs-gbp-monitor-access-gate/preview.config';
import { AhrefsRankTable } from './ahrefs-rank-table/AhrefsRankTable';
import {
  fixtures as ahrefsRankTableFixtures,
  propsSchema as ahrefsRankTablePropsSchema,
} from './ahrefs-rank-table/fixtures';
import { previewConfig as ahrefsRankTableConfig } from './ahrefs-rank-table/preview.config';
import { AhrefsAppsDirectoryInfo } from './ahrefs-apps-directory-info/AhrefsAppsDirectoryInfo';
import {
  fixtures as ahrefsAppsDirectoryInfoFixtures,
  propsSchema as ahrefsAppsDirectoryInfoPropsSchema,
} from './ahrefs-apps-directory-info/fixtures';
import { previewConfig as ahrefsAppsDirectoryInfoConfig } from './ahrefs-apps-directory-info/preview.config';
import { AhrefsProjectViewRadioGroup } from './ahrefs-project-view-radio-group/AhrefsProjectViewRadioGroup';
import {
  fixtures as ahrefsProjectViewRadioGroupFixtures,
  propsSchema as ahrefsProjectViewRadioGroupPropsSchema,
} from './ahrefs-project-view-radio-group/fixtures';
import { previewConfig as ahrefsProjectViewRadioGroupConfig } from './ahrefs-project-view-radio-group/preview.config';

import { AhrefsAlertCategoryTabs } from './ahrefs-alert-category-tabs/AhrefsAlertCategoryTabs';
import {
  fixtures as ahrefsAlertCategoryTabsFixtures,
  propsSchema as ahrefsAlertCategoryTabsPropsSchema,
} from './ahrefs-alert-category-tabs/fixtures';
import { previewConfig as ahrefsAlertCategoryTabsConfig } from './ahrefs-alert-category-tabs/preview.config';
import { AhrefsAlertQuotaState } from './ahrefs-alert-quota-state/AhrefsAlertQuotaState';
import {
  fixtures as ahrefsAlertQuotaStateFixtures,
  propsSchema as ahrefsAlertQuotaStatePropsSchema,
} from './ahrefs-alert-quota-state/fixtures';
import { previewConfig as ahrefsAlertQuotaStateConfig } from './ahrefs-alert-quota-state/preview.config';
import { AhrefsEmptyResultsRow } from './ahrefs-empty-results-row/AhrefsEmptyResultsRow';
import {
  fixtures as ahrefsEmptyResultsRowFixtures,
  propsSchema as ahrefsEmptyResultsRowPropsSchema,
} from './ahrefs-empty-results-row/fixtures';
import { previewConfig as ahrefsEmptyResultsRowConfig } from './ahrefs-empty-results-row/preview.config';
import { AhrefsDateRangeFilter } from './ahrefs-date-range-filter/AhrefsDateRangeFilter';
import {
  fixtures as ahrefsDateRangeFilterFixtures,
  propsSchema as ahrefsDateRangeFilterPropsSchema,
} from './ahrefs-date-range-filter/fixtures';
import { previewConfig as ahrefsDateRangeFilterConfig } from './ahrefs-date-range-filter/preview.config';
import { AhrefsDomainSearchField } from './ahrefs-domain-search-field/AhrefsDomainSearchField';
import {
  fixtures as ahrefsDomainSearchFieldFixtures,
  propsSchema as ahrefsDomainSearchFieldPropsSchema,
} from './ahrefs-domain-search-field/fixtures';
import { previewConfig as ahrefsDomainSearchFieldConfig } from './ahrefs-domain-search-field/preview.config';
import { AhrefsExportAction } from './ahrefs-export-action/AhrefsExportAction';
import {
  fixtures as ahrefsExportActionFixtures,
  propsSchema as ahrefsExportActionPropsSchema,
} from './ahrefs-export-action/fixtures';
import { previewConfig as ahrefsExportActionConfig } from './ahrefs-export-action/preview.config';
import { AhrefsRankPagination } from './ahrefs-rank-pagination/AhrefsRankPagination';
import {
  fixtures as ahrefsRankPaginationFixtures,
  propsSchema as ahrefsRankPaginationPropsSchema,
} from './ahrefs-rank-pagination/fixtures';
import { previewConfig as ahrefsRankPaginationConfig } from './ahrefs-rank-pagination/preview.config';
import { AhrefsCreateEmptyStateAction } from './ahrefs-create-empty-state-action/AhrefsCreateEmptyStateAction';
import {
  fixtures as ahrefsCreateEmptyStateActionFixtures,
  propsSchema as ahrefsCreateEmptyStateActionPropsSchema,
} from './ahrefs-create-empty-state-action/fixtures';
import { previewConfig as ahrefsCreateEmptyStateActionConfig } from './ahrefs-create-empty-state-action/preview.config';
import { AhrefsDataTableHeader } from './ahrefs-data-table-header/AhrefsDataTableHeader';
import {
  fixtures as ahrefsDataTableHeaderFixtures,
  propsSchema as ahrefsDataTableHeaderPropsSchema,
} from './ahrefs-data-table-header/fixtures';
import { previewConfig as ahrefsDataTableHeaderConfig } from './ahrefs-data-table-header/preview.config';
import { AhrefsRankToolbar } from './ahrefs-rank-toolbar/AhrefsRankToolbar';
import {
  fixtures as ahrefsRankToolbarFixtures,
  propsSchema as ahrefsRankToolbarPropsSchema,
} from './ahrefs-rank-toolbar/fixtures';
import { previewConfig as ahrefsRankToolbarConfig } from './ahrefs-rank-toolbar/preview.config';
import { AhrefsProductNavigation } from './ahrefs-product-navigation/AhrefsProductNavigation';
import { fixtures as ahrefsProductNavigationFixtures } from './ahrefs-product-navigation/fixtures';
import { AhrefsWorkspaceMenuTrigger } from './ahrefs-workspace-menu-trigger/AhrefsWorkspaceMenuTrigger';
import { fixtures as ahrefsWorkspaceMenuTriggerFixtures } from './ahrefs-workspace-menu-trigger/fixtures';
import { AhrefsProductUpdatePanel } from './ahrefs-product-update-panel/AhrefsProductUpdatePanel';
import { fixtures as ahrefsProductUpdatePanelFixtures } from './ahrefs-product-update-panel/fixtures';
import { AhrefsCollectionNavigationRail } from './ahrefs-collection-navigation-rail/AhrefsCollectionNavigationRail';
import { fixtures as ahrefsCollectionNavigationRailFixtures } from './ahrefs-collection-navigation-rail/fixtures';
import { AhrefsWelcomeLearningPanel } from './ahrefs-welcome-learning-panel/AhrefsWelcomeLearningPanel';
import { fixtures as ahrefsWelcomeLearningPanelFixtures } from './ahrefs-welcome-learning-panel/fixtures';
import { AhrefsDismissibleNoticeBanner } from './ahrefs-dismissible-notice-banner/AhrefsDismissibleNoticeBanner';
import { fixtures as ahrefsDismissibleNoticeBannerFixtures } from './ahrefs-dismissible-notice-banner/fixtures';
import { AhrefsTutorialVideoCard } from './ahrefs-tutorial-video-card/AhrefsTutorialVideoCard';
import { fixtures as ahrefsTutorialVideoCardFixtures } from './ahrefs-tutorial-video-card/fixtures';
import { AhrefsBrandSetupMode } from './ahrefs-brand-setup-mode/AhrefsBrandSetupMode';
import { fixtures as ahrefsBrandSetupModeFixtures } from './ahrefs-brand-setup-mode/fixtures';
import { AhrefsContentDocumentSetup } from './ahrefs-content-document-setup/AhrefsContentDocumentSetup';
import { fixtures as ahrefsContentDocumentSetupFixtures } from './ahrefs-content-document-setup/fixtures';
import { AhrefsContentHelperTabs } from './ahrefs-content-helper-tabs/AhrefsContentHelperTabs';
import { fixtures as ahrefsContentHelperTabsFixtures } from './ahrefs-content-helper-tabs/fixtures';
import { AhrefsRankTrackerPlanActions } from './ahrefs-rank-tracker-plan-actions/AhrefsRankTrackerPlanActions';
import { fixtures as ahrefsRankTrackerPlanActionsFixtures } from './ahrefs-rank-tracker-plan-actions/fixtures';
import { AhrefsBrandRadarDemoLinks } from './ahrefs-brand-radar-demo-links/AhrefsBrandRadarDemoLinks';
import { fixtures as ahrefsBrandRadarDemoLinksFixtures } from './ahrefs-brand-radar-demo-links/fixtures';
import { AhrefsBrandRadarEmptyReports } from './ahrefs-brand-radar-empty-reports/AhrefsBrandRadarEmptyReports';
import { fixtures as ahrefsBrandRadarEmptyReportsFixtures } from './ahrefs-brand-radar-empty-reports/fixtures';
import { AhrefsContentCompetitorFields } from './ahrefs-content-competitor-fields/AhrefsContentCompetitorFields';
import { fixtures as ahrefsContentCompetitorFieldsFixtures } from './ahrefs-content-competitor-fields/fixtures';
import { AhrefsContentAllowanceActions } from './ahrefs-content-allowance-actions/AhrefsContentAllowanceActions';
import { fixtures as ahrefsContentAllowanceActionsFixtures } from './ahrefs-content-allowance-actions/fixtures';
import { AhrefsContentLocationSelect } from './ahrefs-content-location-select/AhrefsContentLocationSelect';
import { fixtures as ahrefsContentLocationSelectFixtures } from './ahrefs-content-location-select/fixtures';
import { AhrefsContentBrandKitSelect } from './ahrefs-content-brand-kit-select/AhrefsContentBrandKitSelect';
import { fixtures as ahrefsContentBrandKitSelectFixtures } from './ahrefs-content-brand-kit-select/fixtures';
import { AhrefsSmmAnnouncementBanner } from './ahrefs-smm-announcement-banner/AhrefsSmmAnnouncementBanner';
import { fixtures as ahrefsSmmAnnouncementBannerFixtures } from './ahrefs-smm-announcement-banner/fixtures';
import { AhrefsSmmChannelList } from './ahrefs-smm-channel-list/AhrefsSmmChannelList';
import { fixtures as ahrefsSmmChannelListFixtures } from './ahrefs-smm-channel-list/fixtures';
import { AhrefsSmmConnectAction } from './ahrefs-smm-connect-action/AhrefsSmmConnectAction';
import { fixtures as ahrefsSmmConnectActionFixtures } from './ahrefs-smm-connect-action/fixtures';
import { AhrefsAppsDeveloperInfoAction } from './ahrefs-apps-developer-info-action/AhrefsAppsDeveloperInfoAction';
import { fixtures as ahrefsAppsDeveloperInfoActionFixtures } from './ahrefs-apps-developer-info-action/fixtures';
import { AhrefsGuardedActionStatus } from './ahrefs-guarded-action-status/AhrefsGuardedActionStatus';
import { fixtures as ahrefsGuardedActionStatusFixtures } from './ahrefs-guarded-action-status/fixtures';
import { AhrefsAccessGateHero } from './ahrefs-access-gate-hero/AhrefsAccessGateHero';
import { fixtures as ahrefsAccessGateHeroFixtures } from './ahrefs-access-gate-hero/fixtures';
import { AhrefsTutorialReportPreview } from './ahrefs-tutorial-report-preview/AhrefsTutorialReportPreview';
import { fixtures as ahrefsTutorialReportPreviewFixtures } from './ahrefs-tutorial-report-preview/fixtures';
import { AhrefsTutorialFilterStrip } from './ahrefs-tutorial-filter-strip/AhrefsTutorialFilterStrip';
import { fixtures as ahrefsTutorialFilterStripFixtures } from './ahrefs-tutorial-filter-strip/fixtures';
import { AhrefsBrandRadarPricingBanner } from './ahrefs-brand-radar-pricing-banner/AhrefsBrandRadarPricingBanner';
import { fixtures as ahrefsBrandRadarPricingBannerFixtures } from './ahrefs-brand-radar-pricing-banner/fixtures';
import { AhrefsSmmCalendarPreview } from './ahrefs-smm-calendar-preview/AhrefsSmmCalendarPreview';
import { fixtures as ahrefsSmmCalendarPreviewFixtures } from './ahrefs-smm-calendar-preview/fixtures';
import { AhrefsProjectSetupCancelAction } from './ahrefs-project-setup-cancel-action/AhrefsProjectSetupCancelAction';
import { fixtures as ahrefsProjectSetupCancelActionFixtures } from './ahrefs-project-setup-cancel-action/fixtures';
import { propsSchema as ahrefsDeepPropsSchema } from './ahrefs-deep/fixtures';
import { previewConfig as ahrefsDeepConfig } from './ahrefs-deep/preview.config';
import { SimilarwebOnboardingWorkspace } from './similarweb-onboarding-workspace/SimilarwebOnboardingWorkspace';
import {
  fixtures as similarwebOnboardingWorkspaceFixtures,
  propsSchema as similarwebOnboardingWorkspacePropsSchema,
} from './similarweb-onboarding-workspace/fixtures';
import { previewConfig as similarwebOnboardingWorkspaceConfig } from './similarweb-onboarding-workspace/preview.config';
import { SimilarwebJobTitleCombobox } from './similarweb-job-title-combobox/SimilarwebJobTitleCombobox';
import {
  fixtures as similarwebJobTitleComboboxFixtures,
  propsSchema as similarwebJobTitleComboboxPropsSchema,
} from './similarweb-job-title-combobox/fixtures';
import { previewConfig as similarwebJobTitleComboboxConfig } from './similarweb-job-title-combobox/preview.config';
import { SimilarwebProgressAction } from './similarweb-progress-action/SimilarwebProgressAction';
import {
  fixtures as similarwebProgressActionFixtures,
  propsSchema as similarwebProgressActionPropsSchema,
} from './similarweb-progress-action/fixtures';
import { previewConfig as similarwebProgressActionConfig } from './similarweb-progress-action/preview.config';
import { SeRankingApplicationShell } from './se-ranking-application-shell/SeRankingApplicationShell';
import {
  fixtures as seRankingApplicationShellFixtures,
  propsSchema as seRankingApplicationShellPropsSchema,
} from './se-ranking-application-shell/fixtures';
import { previewConfig as seRankingApplicationShellConfig } from './se-ranking-application-shell/preview.config';
import { SeRankingProjectOverview } from './se-ranking-project-overview/SeRankingProjectOverview';
import {
  fixtures as seRankingProjectOverviewFixtures,
  propsSchema as seRankingProjectOverviewPropsSchema,
} from './se-ranking-project-overview/fixtures';
import { previewConfig as seRankingProjectOverviewConfig } from './se-ranking-project-overview/preview.config';
import { SeRankingKeywordResearchEntry } from './se-ranking-keyword-research-entry/SeRankingKeywordResearchEntry';
import {
  fixtures as seRankingKeywordResearchEntryFixtures,
  propsSchema as seRankingKeywordResearchEntryPropsSchema,
} from './se-ranking-keyword-research-entry/fixtures';
import { previewConfig as seRankingKeywordResearchEntryConfig } from './se-ranking-keyword-research-entry/preview.config';
import { SeRankingKeywordQueryBar } from './se-ranking-keyword-query-bar/SeRankingKeywordQueryBar';
import {
  fixtures as seRankingKeywordQueryBarFixtures,
  propsSchema as seRankingKeywordQueryBarPropsSchema,
} from './se-ranking-keyword-query-bar/fixtures';
import { previewConfig as seRankingKeywordQueryBarConfig } from './se-ranking-keyword-query-bar/preview.config';
import { SeRankingSurveyDialog } from './se-ranking-survey-dialog/SeRankingSurveyDialog';
import {
  fixtures as seRankingSurveyDialogFixtures,
  propsSchema as seRankingSurveyDialogPropsSchema,
} from './se-ranking-survey-dialog/fixtures';
import { previewConfig as seRankingSurveyDialogConfig } from './se-ranking-survey-dialog/preview.config';
import { SeRankingAuditToast } from './se-ranking-audit-toast/SeRankingAuditToast';
import {
  fixtures as seRankingAuditToastFixtures,
  propsSchema as seRankingAuditToastPropsSchema,
} from './se-ranking-audit-toast/fixtures';
import { previewConfig as seRankingAuditToastConfig } from './se-ranking-audit-toast/preview.config';
import { SeRankingKeyMetricsStrip } from './se-ranking-key-metrics-strip/SeRankingKeyMetricsStrip';
import {
  fixtures as seRankingKeyMetricsStripFixtures,
  propsSchema as seRankingKeyMetricsStripPropsSchema,
} from './se-ranking-key-metrics-strip/fixtures';
import { previewConfig as seRankingKeyMetricsStripConfig } from './se-ranking-key-metrics-strip/preview.config';
import { SeRankingAiEngineCards } from './se-ranking-ai-engine-cards/SeRankingAiEngineCards';
import {
  fixtures as seRankingAiEngineCardsFixtures,
  propsSchema as seRankingAiEngineCardsPropsSchema,
} from './se-ranking-ai-engine-cards/fixtures';
import { previewConfig as seRankingAiEngineCardsConfig } from './se-ranking-ai-engine-cards/preview.config';
import { SeRankingRankingsEmptyState } from './se-ranking-rankings-empty-state/SeRankingRankingsEmptyState';
import {
  fixtures as seRankingRankingsEmptyStateFixtures,
  propsSchema as seRankingRankingsEmptyStatePropsSchema,
} from './se-ranking-rankings-empty-state/fixtures';
import { previewConfig as seRankingRankingsEmptyStateConfig } from './se-ranking-rankings-empty-state/preview.config';
import { SeRankingAnnouncementBanner } from './se-ranking-announcement-banner/SeRankingAnnouncementBanner';
import {
  fixtures as seRankingAnnouncementBannerFixtures,
  propsSchema as seRankingAnnouncementBannerPropsSchema,
} from './se-ranking-announcement-banner/fixtures';
import { previewConfig as seRankingAnnouncementBannerConfig } from './se-ranking-announcement-banner/preview.config';
import { SeRankingFeatureCarousel } from './se-ranking-feature-carousel/SeRankingFeatureCarousel';
import {
  fixtures as seRankingFeatureCarouselFixtures,
  propsSchema as seRankingFeatureCarouselPropsSchema,
} from './se-ranking-feature-carousel/fixtures';
import { previewConfig as seRankingFeatureCarouselConfig } from './se-ranking-feature-carousel/preview.config';
import { SeRankingSetupActions } from './se-ranking-setup-actions/SeRankingSetupActions';
import {
  fixtures as seRankingSetupActionsFixtures,
  propsSchema as seRankingSetupActionsPropsSchema,
} from './se-ranking-setup-actions/fixtures';
import { previewConfig as seRankingSetupActionsConfig } from './se-ranking-setup-actions/preview.config';
import { SeRankingProjectPageHeader } from './se-ranking-project-page-header/SeRankingProjectPageHeader';
import {
  fixtures as seRankingProjectPageHeaderFixtures,
  propsSchema as seRankingProjectPageHeaderPropsSchema,
} from './se-ranking-project-page-header/fixtures';
import { previewConfig as seRankingProjectPageHeaderConfig } from './se-ranking-project-page-header/preview.config';
import { SeRankingRankingsFilters } from './se-ranking-rankings-filters/SeRankingRankingsFilters';
import {
  fixtures as seRankingRankingsFiltersFixtures,
  propsSchema as seRankingRankingsFiltersPropsSchema,
} from './se-ranking-rankings-filters/fixtures';
import { previewConfig as seRankingRankingsFiltersConfig } from './se-ranking-rankings-filters/preview.config';
import { SeRankingAuditLoadingPanel } from './se-ranking-audit-loading-panel/SeRankingAuditLoadingPanel';
import {
  fixtures as seRankingAuditLoadingPanelFixtures,
  propsSchema as seRankingAuditLoadingPanelPropsSchema,
} from './se-ranking-audit-loading-panel/fixtures';
import { previewConfig as seRankingAuditLoadingPanelConfig } from './se-ranking-audit-loading-panel/preview.config';
import { SeRankingAuditHealthScore } from './se-ranking-audit-health-score/SeRankingAuditHealthScore';
import {
  fixtures as seRankingAuditHealthScoreFixtures,
  propsSchema as seRankingAuditHealthScorePropsSchema,
} from './se-ranking-audit-health-score/fixtures';
import { previewConfig as seRankingAuditHealthScoreConfig } from './se-ranking-audit-health-score/preview.config';
import { SeRankingKeywordFileDrop } from './se-ranking-keyword-file-drop/SeRankingKeywordFileDrop';
import {
  fixtures as seRankingKeywordFileDropFixtures,
  propsSchema as seRankingKeywordFileDropPropsSchema,
} from './se-ranking-keyword-file-drop/fixtures';
import { previewConfig as seRankingKeywordFileDropConfig } from './se-ranking-keyword-file-drop/preview.config';
import { SeRankingSurveyOptionGroup } from './se-ranking-survey-option-group/SeRankingSurveyOptionGroup';
import {
  fixtures as seRankingSurveyOptionGroupFixtures,
  propsSchema as seRankingSurveyOptionGroupPropsSchema,
} from './se-ranking-survey-option-group/fixtures';
import { previewConfig as seRankingSurveyOptionGroupConfig } from './se-ranking-survey-option-group/preview.config';
import { SeRankingSurveyActionFooter } from './se-ranking-survey-action-footer/SeRankingSurveyActionFooter';
import {
  fixtures as seRankingSurveyActionFooterFixtures,
  propsSchema as seRankingSurveyActionFooterPropsSchema,
} from './se-ranking-survey-action-footer/fixtures';
import { previewConfig as seRankingSurveyActionFooterConfig } from './se-ranking-survey-action-footer/preview.config';
import { SeRankingAuditIssueReport } from './se-ranking-audit-issue-report/SeRankingAuditIssueReport';
import {
  fixtures as seRankingAuditIssueReportFixtures,
  propsSchema as seRankingAuditIssueReportPropsSchema,
} from './se-ranking-audit-issue-report/fixtures';
import { previewConfig as seRankingAuditIssueReportConfig } from './se-ranking-audit-issue-report/preview.config';
import { SeRankingKeywordAnalysisResult } from './se-ranking-keyword-analysis-result/SeRankingKeywordAnalysisResult';
import {
  fixtures as seRankingKeywordAnalysisResultFixtures,
  propsSchema as seRankingKeywordAnalysisResultPropsSchema,
} from './se-ranking-keyword-analysis-result/fixtures';
import { previewConfig as seRankingKeywordAnalysisResultConfig } from './se-ranking-keyword-analysis-result/preview.config';
import { SeRankingRankingsDetailReport } from './se-ranking-rankings-detail-report/SeRankingRankingsDetailReport';
import {
  fixtures as seRankingRankingsDetailReportFixtures,
  propsSchema as seRankingRankingsDetailReportPropsSchema,
} from './se-ranking-rankings-detail-report/fixtures';
import { previewConfig as seRankingRankingsDetailReportConfig } from './se-ranking-rankings-detail-report/preview.config';

import type { PreviewRegistry } from './types';

export const previewRegistry: PreviewRegistry = {
  ...freshservicePreviews,
  ...zendeskPreviews,
  ...writesonicPreviews,
  ...otterlyPreviews,
  ...hubspotPreviews,
  ...hubspotSuitePreviews,
  ...pipedrivePreviews,
  ...freshsalesPreviews,
  ...salesforceSalesPreviews,
  ...wixPreviews,
  ...zohoDeskPreviews,
  ...ubersuggestPreviews,
  ...ubersuggestRemainingPreviews,
  'yes-no-toggle-field': {
    type: 'reconstructed',
    Component: YesNoToggleField,
    label: 'Reconstructed preview',
    evidence:
      'Captured DOM/CSS/JS in Technical Data (no authorized Zoho export available); keyboard behavior, exact "Yes"-selected color, and responsive breakpoints are clearly-flagged assumptions — see this preview\'s README.',
    runtimeVerified: false,
    fixtures: yesNoToggleFieldFixtures,
    config: yesNoToggleFieldConfig,
    propsSchema: yesNoToggleFieldPropsSchema,
  },
  'rating-star-field': {
    type: 'reconstructed',
    Component: RatingStarField,
    label: 'Reconstructed preview',
    evidence:
      "Captured DOM/CSS/JS in Technical Data (no authorized Zoho export available); hover-preview fill was inconclusive in the source and is intentionally not reconstructed, aria-checked is fixed to reflect real selection (a confirmed accessibility bug in the source), and responsive breakpoints are an assumption — see this preview's README.",
    runtimeVerified: false,
    fixtures: ratingStarFieldFixtures,
    config: ratingStarFieldConfig,
    propsSchema: ratingStarFieldPropsSchema,
  },
  'choices-list-editor': {
    type: 'reconstructed',
    Component: ChoicesListEditor,
    label: 'Reconstructed preview',
    evidence:
      "Captured DOM/CSS/JS in Technical Data (no authorized Zoho export available); minimum-choice guard styling, Enter-key commit ordering, and responsive breakpoints are flagged assumptions; toolbar controls (search/duplicate/shuffle/Import) and drag-reorder are intentionally not implemented since no drag-reorder exists in the real product — see this preview's README.",
    runtimeVerified: false,
    fixtures: choicesListEditorFixtures,
    config: choicesListEditorConfig,
    propsSchema: choicesListEditorPropsSchema,
  },
  'publish-toggle-switch': {
    type: 'reconstructed',
    Component: PublishToggleSwitch,
    label: 'Reconstructed preview',
    evidence:
      "Evidence base is thinner than the other toggles — no computed CSS was captured in the source (only a screenshot description); colors/sizing/transition are assumptions built from this site's design tokens, and the confirm-dialog's keyboard behavior was never observed — see this preview's README.",
    runtimeVerified: false,
    fixtures: publishToggleSwitchFixtures,
    config: publishToggleSwitchConfig,
    propsSchema: publishToggleSwitchPropsSchema,
  },
  'upgrade-cta-button': {
    type: 'reconstructed',
    Component: UpgradeCtaButton,
    label: 'Reconstructed preview',
    evidence:
      "Captured DOM/CSS/JS in Technical Data (no authorized Zoho export available); disabled-state styling and responsive behavior are assumptions; the real click's destination-URL routing, conditional reload-prompt modal, and analytics event are documented but deliberately not reconstructed — onClick is a plain callback with zero real navigation — see this preview's README.",
    runtimeVerified: false,
    fixtures: upgradeCtaButtonFixtures,
    config: upgradeCtaButtonConfig,
    propsSchema: upgradeCtaButtonPropsSchema,
  },
  'card-list-selector': {
    type: 'reconstructed',
    Component: CardListSelector,
    label: 'Reconstructed preview',
    evidence:
      "Captured DOM/CSS/JS in Technical Data (no authorized Zoho export available); the source record confirms this pattern is 3 independently-built lookalikes across different screens — this reconstruction represents the general pattern, not any one screen's exact instance. Icons are placeholders; hover styling and keyboard arrow navigation are assumptions — see this preview's README.",
    runtimeVerified: false,
    fixtures: cardListSelectorFixtures,
    config: cardListSelectorConfig,
    propsSchema: cardListSelectorPropsSchema,
  },
  'theme-icon-button-group-selector': {
    type: 'reconstructed',
    Component: ThemeIconButtonGroupSelector,
    label: 'Reconstructed preview',
    evidence:
      "Captured DOM/CSS/JS in Technical Data (no authorized Zoho export available), including byte-for-byte-identical CSS values across every group. The real markup has zero ARIA attributes at all — a confirmed accessibility gap — this reconstruction fixes it with proper radiogroup/radio semantics, documented as a deliberate deviation. Icon artwork and keyboard navigation are assumptions — see this preview's README.",
    runtimeVerified: false,
    fixtures: themeIconButtonGroupSelectorFixtures,
    config: themeIconButtonGroupSelectorConfig,
    propsSchema: themeIconButtonGroupSelectorPropsSchema,
  },
  'analytics-feature-gate': {
    type: 'reconstructed',
    Component: AnalyticsFeatureGate,
    label: 'Reconstructed preview',
    evidence:
      "Captured DOM/CSS/JS in Technical Data (no authorized Zoho export available); preserves the source's central finding that the blur+lock visual is genuinely ambiguous between a free opt-in toggle and an actual paywall. The paywall CTA's exact styling was never observed directly (borrowed from the sibling upgrade-cta-button, which shares the same handler) — see this preview's README.",
    runtimeVerified: false,
    fixtures: analyticsFeatureGateFixtures,
    config: analyticsFeatureGateConfig,
    propsSchema: analyticsFeatureGatePropsSchema,
  },
  'form-overflow-menu': {
    type: 'reconstructed',
    Component: FormOverflowMenu,
    label: 'Reconstructed preview',
    evidence:
      "Captured DOM/CSS/JS in Technical Data (no authorized Zoho export available); menu open mechanism and all keyboard navigation (arrow keys, Home/End, Escape) are added standard accessible-menu patterns, not verified reproductions — no keydown handler was captured in the source. Enable/Disable and Delete are left as callbacks rather than rebuilt confirmation modals — see this preview's README.",
    runtimeVerified: false,
    fixtures: formOverflowMenuFixtures,
    config: formOverflowMenuConfig,
    propsSchema: formOverflowMenuPropsSchema,
  },
  'sidebar-settings-subnav': {
    type: 'reconstructed',
    Component: SidebarSettingsSubnav,
    label: 'Reconstructed preview',
    evidence:
      "Captured DOM/CSS/JS in Technical Data (no authorized Zoho export available); the real product's confirmed dead-DOM-tree anomaly (two overlapping sidebar trees) is deliberately not reproduced — this renders a single clean tree. Hover styling, disabled styling, responsive behavior, and keyboard arrow navigation are assumptions — see this preview's README.",
    runtimeVerified: false,
    fixtures: sidebarSettingsSubnavFixtures,
    config: sidebarSettingsSubnavConfig,
    propsSchema: sidebarSettingsSubnavPropsSchema,
  },
  'entries-filter-panel': {
    type: 'reconstructed',
    Component: EntriesFilterPanel,
    label: 'Reconstructed preview',
    evidence:
      "Captured DOM/CSS/JS in Technical Data (no authorized Zoho export available); datatype-aware operator sets and the confirmed validation-error-on-empty-submit behavior are directly evidenced. The relative-date preset list is a representative subset (source capture was truncated), and the panel open/close animation is not implemented since the source left CSS-transition-vs-jQuery-animate unresolved — see this preview's README.",
    runtimeVerified: false,
    fixtures: entriesFilterPanelFixtures,
    config: entriesFilterPanelConfig,
    propsSchema: entriesFilterPanelPropsSchema,
  },
  'repeatable-subform-inline': {
    type: 'reconstructed',
    Component: RepeatableSubformInline,
    label: 'Reconstructed preview',
    evidence:
      'Source record is flagged an open finding — real "Add Entry" clicks in Zoho Forms Preview never produced a new row, and it is unresolved whether that was a targeting failure or a real app requirement. This reconstruction\'s add/remove-row behavior is a standard, reasonable assumption filling that gap, explicitly not a verified reproduction — see this preview\'s README.',
    runtimeVerified: false,
    fixtures: repeatableSubformInlineFixtures,
    config: repeatableSubformInlineConfig,
    propsSchema: repeatableSubformInlinePropsSchema,
  },
  'theme-color-picker-gradient': {
    type: 'reconstructed',
    Component: ThemeColorPickerGradient,
    label: 'Reconstructed preview',
    evidence:
      "Captured DOM/CSS/JS in Technical Data (no authorized Zoho export available); only externally observable UI/behavior is reconstructed, not the underlying zcolorpicker/zslider widget internals. The preset palette (only #FFFFFF was captured), angle control (native range input, not a drag dial), and gradient-stop editing model are documented assumptions — see this preview's README.",
    runtimeVerified: false,
    fixtures: themeColorPickerGradientFixtures,
    config: themeColorPickerGradientConfig,
    propsSchema: themeColorPickerGradientPropsSchema,
  },
  'theme-editor-split-pane-shell': {
    type: 'reconstructed',
    Component: ThemeEditorSplitPaneShell,
    label: 'Reconstructed preview',
    evidence:
      "Captured DOM/CSS/JS in Technical Data (no authorized Zoho export available); the real product's live-preview pane is a same-origin iframe synced via direct contentDocument writes — this cannot be reproduced without a real form document, so same-document React state is substituted while echoing the same CSS-custom-property-on-shared-ancestor mechanism. Only the General tab's controls are reconstructed — see this preview's README.",
    runtimeVerified: false,
    fixtures: themeEditorSplitPaneShellFixtures,
    config: themeEditorSplitPaneShellConfig,
    propsSchema: themeEditorSplitPaneShellPropsSchema,
  },
  'analytics-dashboard-kpi-bar-map': {
    type: 'reconstructed',
    Component: AnalyticsDashboardKpiBarMap,
    label: 'Reconstructed preview',
    evidence:
      "Captured DOM/CSS/JS in Technical Data (no authorized Zoho export available); KPI cards, the literal <table>-based bar chart, and the region progress-bar list are faithfully reconstructed. The region map itself is a static, non-data-driven PNG in the real product and is deliberately NOT reconstructed (a placeholder box explains why) — see this preview's README.",
    runtimeVerified: false,
    fixtures: analyticsDashboardKpiBarMapFixtures,
    config: analyticsDashboardKpiBarMapConfig,
    propsSchema: analyticsDashboardKpiBarMapPropsSchema,
  },
  'entries-kanban-view': {
    type: 'reconstructed',
    Component: EntriesKanbanView,
    label: 'Reconstructed preview',
    evidence:
      'Source record is an open finding — real card drag-and-drop was never verified in the actual product (synthetic drag gestures failed to register across two research passes). Rather than guess at unverified drag mechanics, this reconstruction offers an equivalent, keyboard-accessible "Move to..." control per card — see this preview\'s README.',
    runtimeVerified: false,
    fixtures: entriesKanbanViewFixtures,
    config: entriesKanbanViewConfig,
    propsSchema: entriesKanbanViewPropsSchema,
  },
  'yes-no-field': {
    type: 'reconstructed',
    Component: YesNoField,
    label: 'Reconstructed preview',
    evidence:
      "Captured DOM/CSS/JS in Technical Data (no authorized Typeform export available), including exact computed CSS values (colors, box-shadow specs, transition timing/easing) captured live via browser inspection. Confirmed real product differences from Zoho's equivalent are reproduced faithfully, not treated as gaps: no deselect once answered, and the advertised Y/N letter-key shortcuts are correctly NOT implemented (confirmed non-functional in the tested render mode) — see this preview's README.",
    runtimeVerified: false,
    fixtures: yesNoFieldFixtures,
    config: yesNoFieldConfig,
    propsSchema: yesNoFieldPropsSchema,
  },
  'rating-field': {
    type: 'reconstructed',
    Component: RatingField,
    label: 'Reconstructed preview',
    evidence:
      "Captured DOM/CSS/JS in Technical Data (no authorized Typeform export available), including exact opacity/color/transition values captured live. Unlike Zoho's Rating field, this component correctly implements a working hover fill-preview and correct aria-checked behavior — both confirmed real Typeform behavior, not embellishments — see this preview's README.",
    runtimeVerified: false,
    fixtures: ratingFieldFixtures,
    config: ratingFieldConfig,
    propsSchema: ratingFieldPropsSchema,
  },
  'theme-design-editor': {
    type: 'reconstructed',
    Component: ThemeDesignEditor,
    label: 'Reconstructed preview',
    evidence:
      "Captured DOM/CSS/JS in Technical Data (no authorized Typeform export available), including a confirmed full-page iframe scan finding no iframe renders form content — unlike the Zoho sibling, this reconstruction needs no iframe-substitution workaround. Color is applied via inline style as a simplification of the source's dynamically-hashed styled-components class mechanism; Logo/Buttons tabs are omitted (not deep-dived in the source) — see this preview's README.",
    runtimeVerified: false,
    fixtures: themeDesignEditorFixtures,
    config: themeDesignEditorConfig,
    propsSchema: themeDesignEditorPropsSchema,
  },
  'matrix-choices-field': {
    type: 'reconstructed',
    Component: MatrixChoicesField,
    label: 'Reconstructed preview',
    evidence:
      "Captured DOM/CSS/JS in Technical Data (no authorized Zoho export available); a genuine <table> grid with real-but-hidden radio inputs and a custom ::before/::after visual layer, reproduced faithfully including the exact rgb(46,183,159) dot color and the declared-but-inert (no-op) selection transition. Only the Radio sub-variant of Matrix Choices' 7 is reconstructed; row/column limits are left uncapped since no client-side ceiling was confirmed in the source — see this preview's README.",
    runtimeVerified: false,
    fixtures: matrixChoicesFieldFixtures,
    config: matrixChoicesFieldConfig,
    propsSchema: matrixChoicesFieldPropsSchema,
  },
  'new-form-chooser': {
    type: 'reconstructed',
    Component: NewFormChooser,
    label: 'Reconstructed preview',
    evidence:
      "Captured DOM/CSS/JS in Technical Data (no authorized Zoho export available). Reproduces both documented surfaces (the 7-card top-level overlay and the 3-card Create-From-Scratch sub-dialog) with a deliberate, evidence-faithful distinction: the sub-dialog's form-type cards get a real, confirmed-animating 0.2s linear selection transition, while the top-level cards get only a plain hover treatment since the source left their own transition's functional effect unconfirmed. Video previews are a labeled placeholder, not real video. See this preview's README, including its relationship to the separately-filed card-list-selector.",
    runtimeVerified: false,
    fixtures: newFormChooserFixtures,
    config: newFormChooserConfig,
    propsSchema: newFormChooserPropsSchema,
  },
  'analytics-deep-insights-dropoff': {
    type: 'reconstructed',
    Component: AnalyticsDeepInsightsDropoff,
    label: 'Reconstructed preview',
    evidence:
      "Captured DOM/CSS/JS in Technical Data (no authorized Zoho export available); reproduces the div-based percentage-bar pattern confirmed distinct from the Form Metrics dashboard's <table>-based chart, including the exact recorded Drop-off Count tooltip definition and the single-page form's documented 'No data available.' Page Metrics empty state. The month/year period selector is decorative (no live backend to refetch from) — see this preview's README.",
    runtimeVerified: false,
    fixtures: analyticsDeepInsightsDropoffFixtures,
    config: analyticsDeepInsightsDropoffConfig,
    propsSchema: analyticsDeepInsightsDropoffPropsSchema,
  },
  'smart-scan-ai-field': {
    type: 'reconstructed',
    Component: SmartScanAiField,
    label: 'Reconstructed preview',
    evidence:
      "Captured DOM/CSS/JS and Action→Result findings in Technical Data (no authorized Zoho export available). Builder-mode sample extraction is simulated as working (matching the confirmed-accurate source behavior); live-mode upload is hard-coded to always reproduce the confirmed HTTP-400 scan failure with the exact recorded error text, since that failure — not success — is what the source record actually observed on a published form. See this preview's README for why no real fetch() is wired despite the subject being a network failure.",
    runtimeVerified: false,
    fixtures: smartScanAiFieldFixtures,
    config: smartScanAiFieldConfig,
    propsSchema: smartScanAiFieldPropsSchema,
  },
  'typeform-choices-list-editor': {
    type: 'reconstructed',
    Component: TypeformChoicesListEditor,
    label: 'Reconstructed preview',
    evidence:
      "Captured DOM/CSS/JS in Technical Data (no authorized Typeform export available). Implements genuine working drag-to-reorder (native HTML5 drag events, no new dependency) plus a keyboard alternative, matching the source's confirmed-working dnd-kit-based reorder — a real, direct contrast with Zoho's choices-list-editor, which has none. The two unconfirmed per-row icon buttons from the source are deliberately not rendered — see this preview's README.",
    runtimeVerified: false,
    fixtures: typeformChoicesListEditorFixtures,
    config: typeformChoicesListEditorConfig,
    propsSchema: typeformChoicesListEditorPropsSchema,
  },
  'typeform-contacts-module': {
    type: 'reconstructed',
    Component: TypeformContactsModule,
    label: 'Reconstructed preview',
    evidence:
      "Captured DOM/Structure/Action→Result findings in Technical Data (no authorized Typeform export available). Reproduces the list view, empty-state recipe, Add-contact panel, detail slide-over, permissions popover (fixed/non-configurable, as confirmed), and settings modal. Deliberately preserves the record's documented field-set asymmetry between the Add-contact panel and the detail view rather than reconciling it for tidiness — see this preview's README. No live GraphQL integration; contacts are static fixture data.",
    runtimeVerified: false,
    fixtures: typeformContactsModuleFixtures,
    config: typeformContactsModuleConfig,
    propsSchema: typeformContactsModulePropsSchema,
  },
  'typeform-ai-chat-to-create': {
    type: 'reconstructed',
    Component: TypeformAiChatToCreate,
    label: 'Reconstructed preview',
    evidence:
      "Captured DOM/Network findings in Technical Data (no authorized Typeform export available). Reproduces the two-pane chat+Suggested-changes/Preview modal with a real timed generating→result transition, using the record's own verbatim-quoted action-text strings from its captured /copilot/transform-actions-tense payload. Generated content is fixed/canned regardless of prompt text — no real AI call — and multi-turn follow-up messages append to the thread but never trigger a second AI response, since that was never tested in the source. See this preview's README.",
    runtimeVerified: false,
    fixtures: typeformAiChatToCreateFixtures,
    config: typeformAiChatToCreateConfig,
    propsSchema: typeformAiChatToCreatePropsSchema,
  },
  'typeform-automations-builder': {
    type: 'reconstructed',
    Component: TypeformAutomationsBuilder,
    label: 'Reconstructed preview',
    evidence:
      'Captured DOM/Network findings in Technical Data (no authorized Typeform export available). The real product\'s canvas is React Flow (pan/zoom, general graph model); since the record only ever verified one linear chain topology, this reconstruction renders the chain as a plain vertical block stack joined by SVG connector lines — no graph library added — faithfully reproducing the confirmed mid-chain "+"-insertion behavior without overclaiming general graph-editor capability the source never exercised. Per-block removal is a flagged, reasonable addition, not confirmed in the source. See this preview\'s README for the full scoping rationale.',
    runtimeVerified: false,
    fixtures: typeformAutomationsBuilderFixtures,
    config: typeformAutomationsBuilderConfig,
    propsSchema: typeformAutomationsBuilderPropsSchema,
  },
  'zia-ai-form-generator': {
    type: 'reconstructed',
    Component: ZiaAiFormGenerator,
    label: 'Reconstructed preview',
    evidence:
      'Reconstructed from Zoho Forms\' "Generate with Zia AI" modal flow (captured DOM/Action findings in Technical Data; no authorized Zoho export available). Confirmed-real behavior reproduced faithfully: generation is single-shot and stateless — no conversation history is fed into either call — Regenerate performs a full field-list REPLACE rather than an incremental edit, and nothing becomes a real saved form until "Create Form" is clicked. This reconstruction\'s own assumptions, clearly not source-verified: the Content Tone dropdown\'s exact option labels (Professional/Friendly/Casual), the sample-prompt chip wording, the generated field labels/types/options, and the 4-line generating-ladder copy (the ladder mechanism and 4-step structure are per the task\'s own spec, not an independent source capture).',
    runtimeVerified: false,
    fixtures: ziaAiFormGeneratorFixtures,
    config: ziaAiFormGeneratorConfig,
    propsSchema: ziaAiFormGeneratorPropsSchema,
  },
  'publish-share-flow': {
    type: 'reconstructed',
    Component: PublishShareFlow,
    label: 'Reconstructed preview',
    evidence:
      "Reconstructed from Zoho Forms' Publish & Share flow (captured DOM/Rules findings in Technical Data; no authorized Zoho export available). Confirmed-real behavior reproduced faithfully: the Enable/Disable toggle on the Public panel IS the publish mechanism (there is no separate Publish button anywhere in the flow), the disable direction opens a confirmation dialog with the exact recorded warning copy, that dialog's \"Yes\" is a solid red destructive button as a deliberate, confirmed exception to this product's usual ghost/outline destructive-row styling (since it's a modal, not a menu item), re-enabling is direct/ungated with no dialog, and the iframe embed code is built client-side via plain string templating against a fixed permalink rather than fetched over the network. Only Share With → Public and Embed → iframe carry real detail content, as scoped; Specific Users/Groups/All Users, the other 5 Embed sub-types, and Email Campaigns/UTM Tracking/GTM & Custom Tracking render as labeled placeholder panes. This reconstruction's own assumptions: the fake permalink/short-URL strings, and which controls stay navigable while sharing is disabled (Share With's own sub-nav stays live; Embed's sub-nav and code pane lock along with the Public panel's own controls).",
    runtimeVerified: false,
    fixtures: publishShareFlowFixtures,
    config: publishShareFlowConfig,
    propsSchema: publishShareFlowPropsSchema,
  },
  'typeform-analytics-dashboard': {
    type: 'reconstructed',
    Component: TypeformAnalyticsDashboard,
    label: 'Reconstructed preview',
    evidence:
      "Reconstructed from Typeform's Results/Analytics dashboard (captured DOM findings in Technical Data; no authorized Typeform export available). Confirmed-real behavior reproduced faithfully: the Form performance KPI tiles and the Response summary chart are genuine hand-composed SVG <rect>/<line> primitives, NOT canvas and NOT a <table> — a deliberate, meaningful contrast with the Zoho sibling preview analytics-dashboard-kpi-bar-map, whose bar chart is a literal <table> matching that product's own confirmed DOM architecture; the date-range control re-filters the KPI tiles synchronously client-side with zero network round-trip or loading state; the \"See where users drop off\" funnel card is a static teaser with fixed non-live numbers even on this free-plan view (confirmed marketing chrome, not a scoping shortcut); Smart Insights is a paywalled placeholder with no real AI summary content; Response summary genuinely offers both a table view AND a real SVG chart view for the same data, switchable by the user; and no count-up/bar-grow-in entrance animation is applied anywhere — values render at final value immediately. This reconstruction's own assumptions: the exact KPI figures for date ranges other than all-time/last-week (today is zeroed; last-month/last-year mirror the same recorded activity), the funnel teaser's specific fake numbers, and the Response summary tab's example question/answer data (the real source didn't capture a literal example question).",
    runtimeVerified: false,
    fixtures: typeformAnalyticsDashboardFixtures,
    config: typeformAnalyticsDashboardConfig,
    propsSchema: typeformAnalyticsDashboardPropsSchema,
  },
  'builder-preview-settings-tabs': {
    type: 'reconstructed',
    Component: BuilderPreviewSettingsTabs,
    label: 'Reconstructed preview',
    evidence:
      "Captured DOM/Behavior findings in Technical Data (no authorized Zoho export available). Both controls carry zero ARIA attributes in the source — a confirmed accessibility gap reproduced faithfully here (not fixed, unlike some sibling previews), exposed only via a non-ARIA data-active attribute for testability. The left rail's real full-page-reload navigation cannot be reproduced in a SPA preview and is simulated as a visual-only active-item swap; the Preview overlay's own internal device-frame markup is this reconstruction's own reasonable build (not literally captured) but correctly stays enabled and shows the confirmed empty-state copy regardless of field count.",
    runtimeVerified: false,
    fixtures: builderPreviewSettingsTabsFixtures,
    config: builderPreviewSettingsTabsConfig,
    propsSchema: builderPreviewSettingsTabsPropsSchema,
  },
  'notification-settings-editor': {
    type: 'reconstructed',
    Component: NotificationSettingsEditor,
    label: 'Reconstructed preview',
    evidence:
      'Captured DOM/Actions/Network findings in Technical Data (no authorized Zoho export available). The confirmed no-op "Field Labels" popup, explicit-save modal, and chip-level email validation are reproduced faithfully with the record\'s exact token strings and banner copy. This reconstruction\'s own assumption: the per-token "question text" paired with each merge token is a representative placeholder — the source captured only the token strings themselves, not which literal form-question text was paired with each. No real POST .../notifications/email call is made; Save updates local state and fires a callback only.',
    runtimeVerified: false,
    fixtures: notificationSettingsEditorFixtures,
    config: notificationSettingsEditorConfig,
    propsSchema: notificationSettingsEditorPropsSchema,
  },
  'collaborator-permissions-dialog': {
    type: 'reconstructed',
    Component: CollaboratorPermissionsDialog,
    label: 'Reconstructed preview',
    evidence:
      'Captured DOM/Actions/Rules findings in Technical Data (no authorized Zoho export available). The autocomplete-restricted Share-With field, its exact client-side error copy, the Groups/All-Users no-dropdown fixed grants, the Super Admin row\'s structural absence of any action control, and the exact "no active Admins" blocking dialog copy are all reproduced faithfully. Two honestly-flagged gaps: Surface B\'s real Add-User final submit was deliberately never executed in the source (would send a real email/consume a seat), so this reconstruction fires a callback without appending a row rather than inventing the unconfirmed post-submit shape; and Change-Super-Admin\'s "an Admin already exists" branch was never exercised in the source either, so only the confirmed blocking branch is faithfully implemented — the other renders a clearly-labeled placeholder.',
    runtimeVerified: false,
    fixtures: collaboratorPermissionsDialogFixtures,
    config: collaboratorPermissionsDialogConfig,
    propsSchema: collaboratorPermissionsDialogPropsSchema,
  },
  'two-line-dropdown-and-accordion': {
    type: 'reconstructed',
    Component: TwoLineDropdownAndAccordion,
    label: 'Reconstructed preview',
    evidence:
      'Captured DOM/CSS/JS in Technical Data (no authorized Zoho export available), including the extracted jQuery toggleOfElemCont handler source confirming a genuine height (slideDown/slideUp) animation, content-height-scaled 400–800ms duration, distinct from the opacity-only fade documented elsewhere in this product. This reconstruction substitutes a fixed-duration CSS grid-template-rows transition for that per-pixel-scaled jQuery duration — a different mechanism that preserves the meaningful height-vs-opacity contrast without claiming the exact same timing curve. Keyboard navigation on the dropdown (arrow keys, Enter/Escape) is a standard-combobox assumption, not independently observed beyond mouse-click actions in the source.',
    runtimeVerified: false,
    fixtures: twoLineDropdownAndAccordionFixtures,
    config: twoLineDropdownAndAccordionConfig,
    propsSchema: twoLineDropdownAndAccordionPropsSchema,
  },
  'destructive-confirm-modal-comparison': {
    type: 'reconstructed',
    Component: DestructiveConfirmModalComparison,
    label: 'Reconstructed preview',
    evidence:
      "Captured DOM/CSS/JS in Technical Data (no authorized Zoho export available), including both close handlers' function source and a runtime check confirming ZFForm doesn't exist in the theme editor's execution context. The record's central finding — two independently-built modal systems, not a shared component — is reproduced structurally: Modal 1 gets a class-driven opacity/transform entrance (its activeAnimate pattern) while Modal 2 renders instantly with no scoped entrance transition, matching its confirmed generic transition: all; Modal 2's box-shadow/radius values are taken verbatim from the record. Modal 2's exact alert sentence and both modals' decorative icon styling are reasonable assumptions where the record describes structure but not exact wording/pixel values.",
    runtimeVerified: false,
    fixtures: destructiveConfirmModalComparisonFixtures,
    config: destructiveConfirmModalComparisonConfig,
    propsSchema: destructiveConfirmModalComparisonPropsSchema,
  },
  'export-filter-copy-utility-controls': {
    type: 'reconstructed',
    Component: ExportFilterCopyUtilityControls,
    label: 'Reconstructed preview',
    evidence:
      "Captured DOM/JS/network in Technical Data (no authorized Zoho export available), including the copy handler's live function source and confirmed zero-network behavior for the Export menu/CSV modal and copy field, vs. a real server round-trip for the status filter (this reconstruction only updates local state — no live network calls ship in this static docs site). The copy button uses navigator.clipboard.writeText instead of the record's confirmed legacy document.execCommand('copy') API — a disclosed substitution, not a claim about the real implementation — while reproducing its exact 600ms-shown + 600ms-fade confirmation timing. The CSV modal's daily-export-limit note wording is a placeholder (the record confirms the note exists but not its exact text), and \"Export as PDF\" is a callback only since its modal structure was never captured.",
    runtimeVerified: false,
    fixtures: exportFilterCopyUtilityControlsFixtures,
    config: exportFilterCopyUtilityControlsConfig,
    propsSchema: exportFilterCopyUtilityControlsPropsSchema,
  },
  'file-upload-field': {
    type: 'reconstructed',
    Component: FileUploadField,
    label: 'Reconstructed preview',
    evidence:
      "Captured DOM/network in Technical Data via an injected XHR interceptor (no authorized Zoho export available), including the confirmed upload-before-validation finding and the exact error copy pattern. No fake progress bar is shown (matches the confirmed single-tick, already-100% progress event for small files), and Submit is a genuine no-op while the type error shows, per the record. The Entries-side lightbox's zoom control, filmstrip, and hover-reveal mechanics are reconstructed from the record's structural description only (no screenshot was captured this pass), so exact zoom-step values and the lightbox's visual layout are reasonable assumptions, not confirmed measurements.",
    runtimeVerified: false,
    fixtures: fileUploadFieldFixtures,
    config: fileUploadFieldConfig,
    propsSchema: fileUploadFieldPropsSchema,
  },
  'typeform-form-mode-picker': {
    type: 'reconstructed',
    Component: TypeformFormModePicker,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, live exploration of Typeform\'s Form mode dropdown (toolbar + Form settings → General), free-plan account, 2026-09-18. The 4-option picker, the Lead-qualification → "Review your form" AI-drafted-rules canvas swap, the confirmed no-data-loss round trip back to Universal, and the paywalled/locked Knowledge-quiz and Match-quiz options are all directly observed. This reconstruction deliberately does NOT add a respondent-layout toggle — the record explicitly refutes the hypothesis that "Universal mode" controls respondent rendering; that refutation is structural to this preview, not an assumption.',
    runtimeVerified: false,
    fixtures: typeformFormModePickerFixtures,
    config: typeformFormModePickerConfig,
    propsSchema: typeformFormModePickerPropsSchema,
  },
  'typeform-scoring-outcome-quiz-editor': {
    type: 'reconstructed',
    Component: TypeformScoringOutcomeQuizEditor,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, live DOM/network inspection, 2026-09-18. Both modals\' non-React-Flow DOM shape (0 react-flow-classed elements/canvas vs. 41 on the underlying Logic tab), the shared "Delete all rules"/Cancel/Save footer, and the exact toast copy "Edits are always autosaved." are directly observed and reproduced verbatim. No network call is simulated, consistent with the source finding no HTTP mutation. Assumption flagged in code: the "Choose answers" chip format ("<question#> · <value>", e.g. "1 · 5") is inferred to match the record\'s single captured chip example, not independently confirmed as a general rule.',
    runtimeVerified: false,
    fixtures: typeformScoringOutcomeQuizEditorFixtures,
    config: typeformScoringOutcomeQuizEditorConfig,
    propsSchema: typeformScoringOutcomeQuizEditorPropsSchema,
  },
  'document-canvas-editor-shell': {
    type: 'reconstructed',
    Component: DocumentCanvasEditorShell,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, live DOM/network inspection, 2026-09-23, corrected 2026-09-23 by the respondent-runtime-guided-vs-standard record\'s retest (steady ~15s dirty-only autosave interval, not a per-keystroke debounce; a structural edit — insert/reorder/delete a card, insert a break — does NOT arm the save cycle by itself, with one CONFIRMED case of real data loss). This reconstruction deliberately reproduces that bug: a structural change never touches the visible save-status label, only a real text edit does, so "SAVED DRAFT" can show while a structural change is genuinely unpersisted. Assumptions, clearly scoped in code comments: a custom block model stands in for Draft.js (not a library reimplementation); drag-reorder is tested via accessible Move up/down controls (entries-kanban-view precedent) alongside a best-effort native HTML5 drag; the "+" gutter offers only the 2 confirmed quick-inserts; the left-rail outline, required-asterisk indicator, and the specific arrow-key-into-card keystroke-loss bug are explicitly not reconstructed.',
    runtimeVerified: false,
    fixtures: documentCanvasEditorShellFixtures,
    config: documentCanvasEditorShellConfig,
    propsSchema: documentCanvasEditorShellPropsSchema,
  },
  'respondent-runtime-guided-vs-standard': {
    type: 'reconstructed',
    Component: RespondentRuntimeGuidedVsStandard,
    label: 'Reconstructed preview',
    evidence:
      "OBSERVATION, live DOM/network inspection of the published form, 2026-09-23. Both modes rendering the same document, the sliding-window/auto-advance/Enter-advance guided behavior, the confirmed screenIndex/(N-1) progress calculation (0%→33%→67%→100%), the confirmed absence of any back-navigation control in guided mode, and standard mode's all-at-once/single-Submit rendering are all directly observed and reproduced. This preview's evidence reflects the corrected save-timing/data-loss understanding also carried in the document-canvas-editor-shell record (not that record's original, superseded claim). The publish-race bug and partial-answer network streaming are documented findings, not simulated here — no network calls are made by this client-side preview.",
    runtimeVerified: false,
    fixtures: respondentRuntimeGuidedVsStandardFixtures,
    config: respondentRuntimeGuidedVsStandardConfig,
    propsSchema: respondentRuntimeGuidedVsStandardPropsSchema,
  },
  'paperform-yes-no-field': {
    type: 'reconstructed',
    Component: PaperformYesNoField,
    label: 'Reconstructed preview',
    evidence:
      "OBSERVATION, live DOM/React/network inspection, 2026-09-23. No-deselect-once-answered, focus-only arrow keys (no selection change), fixed non-roving tabindex (YES=0/NO=-1 always), and the absence of any Y/N letter shortcut are all confirmed and reproduced faithfully as real product limitations, not bugs to fix. The selected-fill color is wired through a CSS custom property (default matching the tested theme's Active color) rather than hardcoded, structurally representing the confirmed \"follows the theme token\" finding. Deliberate fix, per this project's precedent (rating-star-field): the source's confirmed broken ARIA wiring (a label pointing at a nonexistent id, and a dangling aria-labelledby reference to an unrendered description element) is fixed here via a real, always-rendered label id and a describedby list that only joins ids that actually render — flagged as a deviation, not a silent correction.",
    runtimeVerified: false,
    fixtures: paperformYesNoFieldFixtures,
    config: paperformYesNoFieldConfig,
    propsSchema: paperformYesNoFieldPropsSchema,
  },
  'paperform-rating-field': {
    type: 'reconstructed',
    Component: PaperformRatingField,
    label: 'Reconstructed preview',
    evidence:
      "OBSERVATION, live DOM/React/network inspection, 2026-09-23. Confirmed and reproduced faithfully as real product behavior: hover preview follows max(hovered, selected) — hovering a star below the committed value shows no change; re-clicking the selected star is a no-op (no deselect); the fill is an opacity cross-fade (0.25s) between a filled and outline icon layer, not a color/clip swap; aria-checked is correctly wired to only the committed value, while a separate data-selected attribute (not reproduced from a literal source attribute name, but representing the confirmed hover-inclusive preview behavior) tracks the hover-inclusive fill. Deliberate fixes, per this project's established precedent (rating-star-field, paperform-yes-no-field): the source is confirmed to have zero keyboard support at all (not focusable, no handlers) and an unnamed radiogroup (no aria-labelledby/aria-label) — both fixed here via a roving tabindex with arrow-key focus movement + Space/Enter to select, and a real aria-labelledby linking the group to its visible label. The maxRating configurability (1-10) and the 5-icon choice (Heart/Star/Thumbs up/Users/Custom) are confirmed builder-config findings; only the Star icon is reconstructed here for scope.",
    runtimeVerified: false,
    fixtures: paperformRatingFieldFixtures,
    config: paperformRatingFieldConfig,
    propsSchema: paperformRatingFieldPropsSchema,
  },
  'paperform-payments-products-fields': {
    type: 'reconstructed',
    Component: PaperformPaymentsProductsFields,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, live DOM/network inspection of the builder and published respondent view, 2026-09-23. No comparison baseline exists anywhere in this library. Confirmed and reproduced faithfully: the read-only/editable Price toggle and the exact minimum-price warning copy; a live running total on the Submit button; a quantity spinner clamped to stock via the exact "You must select no more than N" blocking copy; native checkbox-based product selection (a real, confirmed difference from the custom div-radio pattern used by the Yes/No and Rating fields); and, most importantly, that Publish succeeds silently with the normal success toast even though no payment gateway is connected -- a confirmed real safety gap in the source product, deliberately not papered over with a warning this reconstruction would be inventing. The Manage Products modal, Choose Layout modal, and the full Custom Pricing Rules row-builder UI are summarized/simplified rather than exhaustively reconstructed, given their scope; the coupon table and pricing-rule row shown are representative examples, not the exact source data.',
    runtimeVerified: false,
    fixtures: paperformPaymentsProductsFieldsFixtures,
    config: paperformPaymentsProductsFieldsConfig,
    propsSchema: paperformPaymentsProductsFieldsPropsSchema,
  },
  'paperform-calculation-field-ai-helper': {
    type: 'reconstructed',
    Component: PaperformCalculationFieldAiHelper,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, live DOM/network inspection, 2026-09-23. Confirmed and reproduced faithfully: the CALCULATION/HOW TO USE tab split; a code pane evaluated live against sample field values (not real answers); an AI panel with a Fix action (shown only while the formula has a parse error) and a free-text prompt, both proposing a full-replacement formula with a pre-computed Result that is NOT applied to the code pane until Apply is clicked. The two AI responses this preview can produce are the source record\'s own verbatim captured exchanges (a real Fix of a stray leading "/", and a real "add a 10% discount over 5" prompt) -- not generated live, since no AI backend is available in a static preview site; any other prompt gets a clearly-labeled canned fallback rather than a fabricated AI response. The formula evaluator is this reconstruction\'s own small safe (no eval) arithmetic/IF() interpreter, built only to reproduce the two confirmed real results (152399025 and 137159122.5) -- not a reimplementation of Paperform\'s real engine, which supports a much larger spreadsheet-style function library documented in HOW TO USE but not executable here. The code pane is a plain textarea, not a Draft.js reimplementation, per this project\'s established scoping precedent (document-canvas-editor-shell reproduces Draft.js behavior, not the library itself).',
    runtimeVerified: false,
    fixtures: paperformCalculationFieldAiHelperFixtures,
    config: paperformCalculationFieldAiHelperConfig,
    propsSchema: paperformCalculationFieldAiHelperPropsSchema,
  },
  'paperform-custom-pdf-designer': {
    type: 'reconstructed',
    Component: PaperformCustomPdfDesigner,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, live DOM/network inspection, 2026-09-23. Confirmed and reproduced faithfully: this is another Draft.js-style document canvas (same editor family as document-canvas-editor-shell and the Calculation Editor\'s code pane, not a template-upload tool); the starter template\'s Summary config block (Public/Private/Custom/Receipt preset, Table/List layout); a genuinely working "+" gutter -> Insert answer picker that inserts a real merge chip on click -- the confirmed positive counter-example to Zoho\'s inert Field Labels popup (notification-settings-editor); the confirmed absence of the "/" slash-command menu in this specific Draft.js context, unlike the main form canvas. "Download sample" only fires a callback here -- the source record deliberately never clicked the real button either, since it triggers an actual file download, so whether/how a real sample PDF renders remains unconfirmed in both the source and this reconstruction.',
    runtimeVerified: false,
    fixtures: paperformCustomPdfDesignerFixtures,
    config: paperformCustomPdfDesignerConfig,
    propsSchema: paperformCustomPdfDesignerPropsSchema,
  },
  'paperform-submissions-results-view': {
    type: 'reconstructed',
    Component: PaperformSubmissionsResultsView,
    label: 'Reconstructed preview',
    evidence:
      "OBSERVATION, live DOM/network inspection, 2026-09-23, source_reviewed after a same-day PF9 follow-up. The original pass (PF8) was blocked: a real submission failed on Paperform's own account-level guard (owner email unverified, HTTP 400) -- reproduced here as the 'submissions-blocked' fixture (hasCompletedSubmission=false), including the confirmed 'SubmittedForm' analytics event that fires anyway roughly 1s after the rejection. PF9 verified the account owner's email and completed a real submission, confirmed and reproduced faithfully in the default fixture: Total 22.00, Customer '-', no Score column (scoring off), a PDFs menu with the two real confirmed options ('Download PDF summary', 'Submission Results'), and -- the single most important finding -- a 'Total Charged: 22.00' detail card shown with NO unpaid/no-gateway indicator anywhere, even though payment:null was confirmed in the submit payload (no gateway connected); this directly escalates paperform-payments-products-fields' own 'silent publish' finding into a confirmed live data-integrity problem, flagged inline via a warning badge rather than invented UI. The Submissions list fetch fires twice on mount with identical params, confirmed in PF9 to be specific to the editor's Results panel (the full app's own /submissions/table endpoint fires once) -- both endpoints are named correctly in the visible network log rather than collapsed into one generic entry. Export is confirmed CSV-only via a signed-URL click, not fetch/XHR -- reproduced as a toast note, not a real file download. The Partial Submissions detail view's real evaluated Calculation total (21.6, matching 6x4x0.9 from paperform-calculation-field-ai-helper's own confirmed discount formula, reconfirmed again on the completed submission) proving the engine runs on live respondent answers, not just editor sample values; the confirmed 'Last answered: Q1' display bug despite every field being answered; Products shown by SKU rather than name; Products/stock allocation (Test Mug 3/3/0 -> 3/2/1) confirmed to follow a real completed submission even with no payment taken; and the Reports -> Segments tab as the product's only real condition-based query builder (question/operator/value, And/Or), structurally separate from the plain search+date filter on the raw Submissions list -- nested condition groups are described in the source record but simplified to a flat And-chain here given scope.",
    runtimeVerified: false,
    fixtures: paperformSubmissionsResultsViewFixtures,
    config: paperformSubmissionsResultsViewConfig,
    propsSchema: paperformSubmissionsResultsViewPropsSchema,
  },
  'paperform-question-visibility-logic': {
    type: 'reconstructed',
    Component: PaperformQuestionVisibilityLogic,
    label: 'Reconstructed preview',
    evidence:
      "OBSERVATION, live DOM/network inspection, 2026-09-23 (PF10). No comparison baseline exists -- no Zoho Forms or Typeform conditional-logic component is documented in this library. Confirmed and reproduced faithfully: the visibility toggle opens the rule modal immediately; the condition grammar ([question][operator][value] + And/Or), the same primitive shared with paperform-payments-products-fields' Custom Pricing Rules and paperform-submissions-results-view's Report Segments (nested condition groups are described in the source record but simplified to a flat list here, matching the same scoping precedent used for those two records); Classic mode unmounts/remounts the dependent question from the DOM (not CSS-hidden) and retains its typed value across a hide cycle, per the default-on 'keeps answer when hidden' setting; Guided mode skips the dependent screen entirely and recalculates the progress percentage's denominator, both confirmed via the source record's own live testing. Two confirmed real product defects are deliberately reproduced, not silently fixed: changing the referenced question's type gives no warning and leaves the stale rule in place, and deleting the referenced question via the card gutter's 'Remove' control orphans the rule instantly with no confirmation dialog and no dependency check -- a materially less safe path than the Backspace-delete confirmation already confirmed for the same canvas in document-canvas-editor-shell, cross-linked directly in both records' Cross-Component Pattern Notes.",
    runtimeVerified: false,
    fixtures: paperformQuestionVisibilityLogicFixtures,
    config: paperformQuestionVisibilityLogicConfig,
    propsSchema: paperformQuestionVisibilityLogicPropsSchema,
  },
  'paperform-ai-create': {
    type: 'reconstructed',
    Component: PaperformAiCreate,
    label: 'Reconstructed preview',
    evidence:
      "OBSERVATION, live network inspection, 2026-09-23 (PF11). Confirmed and reproduced faithfully: the text-prompt path is conversational, not single-shot -- two rounds of AI-asked clarifying questions precede generation (reproduced as two chat-style steps, condensed from the source record's fuller question lists given scope), and the source capture's own generated result used the exact option values supplied in those rounds, reproduced verbatim in the text-path preview fixture; the image/PDF path skips clarification entirely and generates directly, reproduced with the source capture's own confirmed 7-field result (correct Date/Phone Number/Signature type inference) rather than a generic placeholder list; generation is confirmed poll-based (the client checks back every 2-3s in the source, reproduced here as a visible, timestamped poll log at a faster demo cadence, not a single immediate response like paperform-calculation-field-ai-helper's AI calls); an unrelated marketing survey pop-up ('How did you first hear about Paperform?') is confirmed to appear during the wait, reproduced as a dismissible dialog; and 'Continue in the editor' lands in the same normal builder view for both paths, matching the confirmed 'one real builder, no AI-only editing surface' pattern shared with zia-ai-form-generator and typeform-ai-chat-to-create. The 'Request changes' box is rendered but inert, matching that it was never exercised in the source capture -- not invented functionality.",
    runtimeVerified: false,
    fixtures: paperformAiCreateFixtures,
    config: paperformAiCreateConfig,
    propsSchema: paperformAiCreatePropsSchema,
  },
  'google-forms-feedback-patterns': {
    type: 'reconstructed',
    Component: GoogleFormsFeedbackPatterns,
    label: 'Reconstructed preview',
    evidence:
      "OBSERVATION, live exploration across the form builder, published /viewform, and forms.google.com dashboard, via direct interaction, screenshots, and DOM/ARIA inspection (getComputedStyle, getAttribute('role'/'aria-live'), data-tooltip/aria-label queries), 2026-09-28 (GF10). Confirmed and reproduced faithfully: two distinct, easily-conflated notification mechanisms — a persistent save-status line and a snackbar toast — both confirmed to carry no role/aria-live and, per the source's own direct timing test (on-screen unchanged after 17+ seconds and an in-app tab switch), neither auto-dismisses on any observed timer; reproduced here with no auto-dismiss timer on the toast, matching that finding, rather than a conventional timed toast. The confirmed scope-of-consequence modal-gating rule (single-question delete skips any modal; whole-form and whole-section deletes both open one) is reproduced exactly. The inline required-field error correctly uses role=\"alert\", the one Feedback element in the source confirmed to get accessibility right. \"Unlink form\" is reproduced as genuinely silent, per the confirmed finding of zero feedback for that action. The visual tooltip bubble itself could not be observed in the source (a captured automation limitation, not a confirmed absence) and is not reconstructed — this preview does not attempt to simulate hover-tooltip behavior for Google Forms' icon-only controls.",
    runtimeVerified: false,
    fixtures: googleFormsFeedbackPatternsFixtures,
    config: googleFormsFeedbackPatternsConfig,
    propsSchema: googleFormsFeedbackPatternsPropsSchema,
  },
  'paperform-feedback-toast-alert-empty-loading': {
    type: 'reconstructed',
    Component: PaperformFeedbackToastAlertEmptyLoading,
    label: 'Reconstructed preview',
    evidence:
      "OBSERVATION, live exploration of Paperform's dashboard, Submissions inbox, Billing, and Submissions detail panel, via DOM/computed-style inspection, 2026-09-28 (PF14). Confirmed and reproduced faithfully: exactly one toast component (PFToast — full-width, bottom-anchored, no close button, auto-dismissing after a few seconds, confirmed via its captured post-dismiss computed style of bottom:-100px/opacity:0) reserved for success/status confirmations only — no error-toast path exists, confirmed by two separate invalid-input tests in the source producing inline messaging instead, neither reproduced as a toast option here. The two destructive-confirm modals are reproduced as visibly, structurally different components matching the source's DOM evidence: a titled MUI-style dialog (submission delete) vs. a title-less bespoke pill-button dialog (form delete) — and the confirmed real asymmetry that form-delete gives ZERO post-confirm feedback while form-restore DOES toast is reproduced deliberately, not smoothed over. The Alert/upsell modal (icon-eyebrow + headline + two asymmetric CTAs) and the skeleton-block loading state (submission detail panel) are both reproduced as the source described them.",
    runtimeVerified: false,
    fixtures: paperformFeedbackToastAlertEmptyLoadingFixtures,
    config: paperformFeedbackToastAlertEmptyLoadingConfig,
    propsSchema: paperformFeedbackToastAlertEmptyLoadingPropsSchema,
  },
  'paperform-tooltip': {
    type: 'reconstructed',
    Component: PaperformTooltip,
    label: 'Reconstructed preview',
    evidence:
      "OBSERVATION, live exploration of two icon-only info affordances in Paperform's document-canvas builder config drawer, via zoomed-screenshot hover targeting (tested twice per icon) and DOM inspection confirming a MuiPopover-paper element (not MuiTooltip), 2026-09-28 (PF14). Confirmed and reproduced faithfully: hovering either icon triggers nothing at all — no tooltip appears on hover in this reconstruction either, matching the source's confirmed (not merely unobserved) absence of a hover-reveal interaction; clicking opens a click-anchored popover with the source's own verbatim captured copy for both icons, dismissed by a document-level click-away listener rather than a hover-out or timeout, matching MUI Popover's default dismiss behavior.",
    runtimeVerified: false,
    fixtures: paperformTooltipFixtures,
    config: paperformTooltipConfig,
    propsSchema: paperformTooltipPropsSchema,
  },
  'jotform-star-rating-field': {
    type: 'reconstructed',
    Component: JotformStarRatingField,
    label: 'Reconstructed preview',
    evidence:
      "OBSERVATION, live interaction with a test form at form.jotform.com/262714734595062, DOM/ARIA inspection via injected JavaScript, and real pointer/keyboard events via browser automation, 2026-09-30 (JF1, part of this library's first 5-way rating-field comparison). Confirmed and reproduced faithfully: a cumulative 'filled up to N' visual on both hover (a distinct preview state) and commit (a third, visually separate state), paired with a genuinely EXCLUSIVE aria-checked (only the clicked star reports true) — resolving Zoho's rating-star-field's confirmed aria-checked-never-flips bug. Arrow keys commit immediately, no separate activation step. The confirmed real bug is reproduced deliberately, not silently fixed: a mouse click updates aria-checked/the committed value correctly but leaves the roving tabindex on the originally-focusable star, only re-syncing once an arrow key is pressed. Re-clicking the already-selected star is reproduced per the source's own flagged, not-fully-confirmed finding (decrements by one rather than a clean no-op or deselect) — the source record itself flags this as needing manual (non-automated) re-verification, a caveat preserved here rather than asserted as fully settled.",
    runtimeVerified: false,
    fixtures: jotformStarRatingFieldFixtures,
    config: jotformStarRatingFieldConfig,
    propsSchema: jotformStarRatingFieldPropsSchema,
  },
  'jotform-scale-rating-field': {
    type: 'reconstructed',
    Component: JotformScaleRatingField,
    label: 'Reconstructed preview',
    evidence:
      "OBSERVATION, live interaction with a test form at form.jotform.com/262714734595062, DOM/ARIA inspection via injected JavaScript, and real pointer events via browser automation, 2026-09-30 (JF1, companion to jotform-star-rating-field). Confirmed and reproduced faithfully: genuine NATIVE <input type=\"radio\"> elements (not a custom ARIA widget, unlike this product's own sibling Star Rating field), each with a real <label for> per option, giving correct exclusive selection and keyboard operability for free — the only rating-field implementation across all five products in this comparison set confirmed to use native radio markup. The confirmed accessibility defect is reproduced exactly, not smoothed over: each input also carries an explicit aria-labelledby pointing at the shared question text, which takes accessible-name precedence over the native label per spec — this preview sets both the correct per-option <label for> AND the group-pointing aria-labelledby on every input, so the override is directly demonstrable (all five options resolve to the same accessible name in a role query) rather than only inferable from markup. Selecting an option highlights the whole field block, not just the chosen circle, matching the confirmed panel-highlight behavior.",
    runtimeVerified: false,
    fixtures: jotformScaleRatingFieldFixtures,
    config: jotformScaleRatingFieldConfig,
    propsSchema: jotformScaleRatingFieldPropsSchema,
  },
  'jotform-input-table-field': {
    type: 'reconstructed',
    Component: JotformInputTableField,
    label: 'Reconstructed preview',
    evidence:
      "OBSERVATION, live interaction with a test form at form.jotform.com/262731344959062 (Input Table field added 2026-10-05), both in the Form Builder canvas and on the live published public form, DOM/ARIA inspection via injected JavaScript, and real pointer/keyboard events via browser automation, 2026-10-05 (JF3). Confirmed and reproduced faithfully: a genuine semantic <table> with real <th scope=\"row\"/\"col\"> headers (not a div-grid) and a per-cell aria-label composed from both row and column axes. The confirmed real defect is reproduced deliberately, not smoothed over: every cell gets its own unique `name` rather than one shared per row, so exclusivity here is entirely React-state-managed (matching the source's confirmed 'JavaScript-managed, not native-browser-managed' finding) and no arrow-key row navigation exists, matching the real product. The Required 'every row' validation flow reproduces the confirmed un-scoped error styling (every cell gets the red outline on a blocked submit, not just the incomplete row) and the working 'See Errors' jump-to-first-invalid-row control. The default template reproduces the confirmed real mismatch — every column, including one labeled to imply free text, defaults to the radio input type.",
    runtimeVerified: false,
    fixtures: jotformInputTableFieldFixtures,
    config: jotformInputTableFieldConfig,
    propsSchema: jotformInputTableFieldPropsSchema,
  },
  'jotform-app-shell-dashboard': {
    type: 'reconstructed',
    Component: JotformAppShellDashboard,
    label: 'Reconstructed preview',
    evidence:
      "OBSERVATION, live, logged-in exploration of app.jotform.com's My Workspace dashboard, fresh account with zero existing forms, via Claude browser extension, 2026-09-29 (P1 companion record). Confirmed and reproduced faithfully: a real docked, non-collapsing left sidebar (All/Shared with me/Assigned to me/Sent/Continue Filling/Team Workspaces) — a stronger navigation surface than Google Forms' own dashboard, which has no docked sidebar at all; a top header carrying the broader product-marketing nav (Templates/Integrations/Products/Support/Enterprise/Pricing) confirmed absent from the builder's own header (see the sibling jotform-app-shell-builder preview); and the confirmed real pattern that selecting a form row's checkbox swaps the toolbar row for a contextual selection action bar rather than opening a separate panel, reproduced exactly via one piece of state. No dedicated page-header chrome was found on the dashboard — reproduced by deliberately not adding an H1 above the list. The '+ CREATE' 6-option chooser and the Products mega-menu are reproduced only as inert triggers, not full flyouts — out of scope for this shell-level pass.",
    runtimeVerified: false,
    fixtures: jotformAppShellDashboardFixtures,
    config: jotformAppShellDashboardConfig,
    propsSchema: jotformAppShellDashboardPropsSchema,
  },
  'jotform-app-shell-builder': {
    type: 'reconstructed',
    Component: JotformAppShellBuilder,
    label: 'Reconstructed preview',
    evidence:
      "OBSERVATION, live, logged-in exploration of the JotForm form builder (Classic layout) across BUILD/SETTINGS/PUBLISH modes, via Claude browser extension, 2026-09-29 (P1 companion record). Confirmed and reproduced faithfully: a collapsible left field palette; the confirmed real finding that the right pane is a SINGLE shared slot with two mutually-exclusive occupants (an AI Form Copilot card when no field is selected, a field Properties panel when one is) — reproduced via one state variable, not two independently-toggleable panels; and SETTINGS/PUBLISH modes reusing the same top-header + orange mode-tab-bar pattern with their own mode-specific left sub-nav rail rather than a distinct page header, matching the source's own confirmed 'no distinct page-header chrome across any of the three modes' finding — only the form's own editable title serves as a heading anywhere in the shell. Scope: Classic layout's shell only (the source record's own stated scope) — the Classic-vs-Card layout choice itself, in-canvas field drag-reordering, and the 'Preview Form' toggle's actual behavior are not reconstructed.",
    runtimeVerified: false,
    fixtures: jotformAppShellBuilderFixtures,
    config: jotformAppShellBuilderConfig,
    propsSchema: jotformAppShellBuilderPropsSchema,
  },
  'jotform-ai-form-generation': {
    type: 'reconstructed',
    Component: JotformAiFormGeneration,
    label: 'Reconstructed preview',
    evidence:
      "OBSERVATION, live testing session against a Coffee Shop Feedback Form, DOM/network inspection via browser automation, 2026-10-05 (JF5). Confirmed and reproduced faithfully: 'Describe your form' generates directly into the builder with no staging/review step; Form Copilot shares the same underlying conversation as the generation prompt, confirmed via the generation turn appearing as the first message in the Copilot's own chat history; free-text edits apply immediately with an on-canvas 'Adding...' toast and a chat reply carrying its own per-turn '↺ Undo' link; the 'Suggest new questions' suggested-action chip inserts a human-in-the-loop checkbox-review step (an 'Add question →' button disabled until ≥1 item is checked) rather than applying directly, a confirmed real nuance not shared by free-text prompts in the same panel. Scope reduction, clearly disclosed: no real AI call is made — generation and edits are produced from small canned/keyword-matched responses, not a live model.",
    runtimeVerified: false,
    fixtures: jotformAiFormGenerationFixtures,
    config: jotformAiFormGenerationConfig,
    propsSchema: jotformAiFormGenerationPropsSchema,
  },
  'jotform-sign-builder': {
    type: 'reconstructed',
    Component: JotformSignBuilder,
    label: 'Reconstructed preview',
    evidence:
      "OBSERVATION, live testing session building a minimal signable lease document in Jotform Sign, 2026-10-05 (JF6). Confirmed and reproduced faithfully: a green BUILD/SETTINGS/SEND mode-tab bar distinct from Form Builder's orange; a document-local, named signer-role system ('Me' plus custom roles like 'Tenant/Lessee', each independently editable/deletable via an 'Assign field to:' popover); a SEND tab with per-role Name/Email rows and a 'Signing order' toggle (off by default = any order). Deliberate, confirmed-necessary scope reduction: 'Send to Sign' never dispatches anything — it only shows a demo disclaimer — because the source record itself confirmed the real product has no sandbox/dry-run send mode at all, so simulating a real send here would misrepresent that finding.",
    runtimeVerified: false,
    fixtures: jotformSignBuilderFixtures,
    config: jotformSignBuilderConfig,
    propsSchema: jotformSignBuilderPropsSchema,
  },
  'jotform-tables-inline-edit-and-views': {
    type: 'reconstructed',
    Component: JotformTablesInlineEditAndViews,
    label: 'Reconstructed preview',
    evidence:
      "OBSERVATION, live testing session against 3 real test submissions in Jotform Tables, 2026-10-05 (JF7). Confirmed and reproduced faithfully: Short Text/Email/Single Choice cells are fully inline-editable directly in the grid (click to select, click again to edit); the confirmed real Star Rating grid-cell non-editability is reproduced deliberately as a genuine no-op, not smoothed over — clicking a star in the grid never changes the rating, matching the source's own repeated multi-coordinate retest, while the row-detail 'View' panel DOES let you change it, operating on the same underlying row state the grid reads. Calendar and Boards views both genuinely reflow the same row data (not separate/sample content), with Boards' 'from a field' auto-column-generation matching the confirmed finding. Scope reduction, clearly disclosed: the computed-column demo shows one combined arithmetic path rather than the source's two independent AI-Columns/Formula paths.",
    runtimeVerified: false,
    fixtures: jotformTablesInlineEditAndViewsFixtures,
    config: jotformTablesInlineEditAndViewsConfig,
    propsSchema: jotformTablesInlineEditAndViewsPropsSchema,
  },
  'jotform-conditional-logic': {
    type: 'reconstructed',
    Component: JotformConditionalLogic,
    label: 'Reconstructed preview',
    evidence:
      "OBSERVATION, live testing session building a field-level conditional-logic rule on the Coffee Shop Feedback Form, 2026-10-05 (JF8). Confirmed and reproduced faithfully: all 9 real action types are rendered verbatim in the Add Condition picker (Show/Hide Field is the one made interactive, per the source's own test scope — the other 8 are genuine disabled buttons for structural fidelity, not omitted); respondent-facing visibility change is an instant CSS display toggle, not an animated reveal, confirmed via the source's own DOM/MutationObserver evidence; a hidden field's value persists across a hide/re-show cycle; deleting a field a condition depends on is unblocked at delete-time but surfaces an explicit, persistent 'MISSING FIELD' / error state afterward, with the dependent field failing open (becoming permanently visible) — the most distinctive confirmed finding in the source record, reproduced exactly including the verbatim error copy.",
    runtimeVerified: false,
    fixtures: jotformConditionalLogicFixtures,
    config: jotformConditionalLogicConfig,
    propsSchema: jotformConditionalLogicPropsSchema,
  },
  'jotform-smart-pdf-forms': {
    type: 'reconstructed',
    Component: JotformSmartPdfForms,
    label: 'Reconstructed preview',
    evidence:
      "OBSERVATION, live testing session uploading a custom-built test PDF through Smart PDF Forms, 2026-10-05 (JF9). Confirmed and reproduced faithfully: a dark-navy UPLOAD/BUILD/SETTINGS/PUBLISH mode bar distinct from every other Jotform product shell; strong field-type inference (a compound Full Name field correctly split into First/Last sub-inputs, a correctly-typed Email field, genuine date-picker fields); the confirmed real semantic quirk that two independently-labeled checkbox lines get merged into ONE multi-select field rather than staying as two separate booleans, reproduced deliberately rather than 'fixed'; and the standout round-trip-fidelity finding — the split name is correctly re-merged into one line in the output 'Preview PDF', and a signed signature gets an unprompted 'Signed at: {timestamp}' audit stamp. Scope reduction, clearly disclosed: the upload step is fully simulated (a timed pipeline animation followed by a hardcoded fixture result), not real file parsing.",
    runtimeVerified: false,
    fixtures: jotformSmartPdfFormsFixtures,
    config: jotformSmartPdfFormsConfig,
    propsSchema: jotformSmartPdfFormsPropsSchema,
  },
  'jotform-ai-agents': {
    type: 'reconstructed',
    Component: JotformAiAgents,
    label: 'Reconstructed preview',
    evidence:
      "OBSERVATION, live testing session generating 'Ian: Coffee Club Loyalty Assistant' via Jotform AI Agents, 2026-10-05 (JF10, 3 of 4 — Apps not yet filed). Confirmed and reproduced faithfully: a purple-to-blue BUILD/TRAIN/PUBLISH shell unique among every Jotform product observed in this library; an AI-generated human-persona title/greeting rather than the user's literal prompt text (a naming convention distinct from every other JotForm product tested); TRAIN → FORMS as a real coupling point to existing forms. The standout confirmed finding — the PUBLISH tab's Phone Agent channel showing a real, named price ('starting from just $10/month') alongside a free 'Make a Test Call' path using a shared number + extension, letting the feature be trialed before purchase — is reproduced with a demo-only 'Buy Number' action that never initiates a real charge.",
    runtimeVerified: false,
    fixtures: jotformAiAgentsFixtures,
    config: jotformAiAgentsConfig,
    propsSchema: jotformAiAgentsPropsSchema,
  },
  'jotform-workflows-workflow-builder': {
    type: 'reconstructed',
    Component: JotformWorkflowsWorkflowBuilder,
    label: 'Reconstructed preview',
    evidence:
      "OBSERVATION, live testing session building a Form-triggered workflow bound to the 'Coffee Club Signup' form, 2026-10-05 (JF10, 2 of 4 — Apps not yet filed). Confirmed and reproduced faithfully: a mandatory 'Start Point' trigger-selection step (Form/Schedule/Integrations/Email/Webhook) gating the rest of the builder, with 'Next' disabled until a trigger is chosen; a vertical flowchart/pipeline canvas distinct from both the flat Conditions rule list and the Form Builder's field palette; a chainable 'Add Element Here' step picker supporting multiple sequential steps. A teal/dark-green BUILD/SETTINGS/PUBLISH mode bar, distinct from every other Jotform product's accent color, per the confirmed per-product color-coding pattern already established across this library's JotForm captures. Scope reduction, clearly disclosed: only the Form trigger type gets a fully interactive config step, matching the source record's own test depth.",
    runtimeVerified: false,
    fixtures: jotformWorkflowsWorkflowBuilderFixtures,
    config: jotformWorkflowsWorkflowBuilderConfig,
    propsSchema: jotformWorkflowsWorkflowBuilderPropsSchema,
  },
  'jotform-boards': {
    type: 'reconstructed',
    Component: JotformBoards,
    label: 'Reconstructed preview',
    evidence:
      "OBSERVATION, live testing session directly comparing Jotform Boards opened via '+ CREATE' versus via the Workflow Builder's own mode-switcher, 2026-10-05 (JF10, 4 of 4 — Apps not yet filed). Confirmed and reproduced faithfully, and this IS the record's central finding: the two entry points do NOT produce the same screen — '+ CREATE' yields a generic 'Untitled Board' with 4 conventional Kanban columns (Backlog/Waiting/In Progress/Done) and sample onboarding cards, while the Workflow Builder's mode-switcher auto-provisions a structurally different 'Workflow Board' with exactly one 'Completed' column and a '0 runs' counter — confirmed via distinct board IDs in the source, not just visual impression. This preview makes that structural contrast the visual centerpiece via a toggle between the two states.",
    runtimeVerified: false,
    fixtures: jotformBoardsFixtures,
    config: jotformBoardsConfig,
    propsSchema: jotformBoardsPropsSchema,
  },
  'typeform-feedback-patterns': {
    type: 'reconstructed',
    Component: TypeformFeedbackPatterns,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, live trace on a real Typeform account (admin.typeform.com), directly triggering transient/status UI (copying a link, deleting a form vs. a question, hovering toolbar icons, visiting three zero-data surfaces, cold-reloading the builder), 2026-09-28 (AL2). Confirmed and reproduced faithfully: a stark severity gap in destructive-confirm coverage — whole-form delete opens a real dialog-role modal (title phrased as a question, itemized bulleted consequences, a separate bolded irreversibility line, a genuine red "Delete" button, an in-place "Deleting..." loading label) confirmed via the accessibility tree, while deleting a single question gives NO modal, NO toast, and NO undo at all, verified twice in the source on both an original and a duplicated question. The confirmed silent failure — a syntactically valid but unreachable webhook URL passes client-side validation, the dialog closes as if successful, and the webhook is never actually persisted, with zero user-facing signal — is reproduced via a hardcoded URL-substring match rather than a real network attempt (no network calls are made by this client-side preview). The success toast (bottom-right, green check, explicit close, confirmed auto-dismiss bracketed to 4-6s via timed screenshots in the source) is reproduced on a fixed timer within that window. The three confirmed-distinct empty states (illustrated+link+single-CTA; text-only+dual-CTA; icon+instructional-heading+single-CTA) are reproduced with the source\'s own verbatim captured copy.',
    runtimeVerified: false,
    fixtures: typeformFeedbackPatternsFixtures,
    config: typeformFeedbackPatternsConfig,
    propsSchema: typeformFeedbackPatternsPropsSchema,
  },
  'typeform-application-layout': {
    type: 'reconstructed',
    Component: TypeformApplicationLayout,
    label: 'Reconstructed preview',
    evidence:
      "OBSERVATION, live trace on a real Typeform account (admin.typeform.com), navigating all five workspace tabs and all three form-builder tabs, inspecting the DOM/accessibility tree at each stop and testing collapse/expand and drag-reorder affordances directly, 2026-09-28 (AL1). Confirmed and reproduced faithfully: NO single persistent sidebar — each of Forms/Contacts/Automations (reconstructed here; Insights and Research Flow are noted as an open gap and left as inert labels) renders a genuinely different sidebar, reproduced with real content swaps rather than one shared component restyled; the builder's Content/Workflow/Connect tabs each define a structurally distinct main-content shell (a Pages outline rail + re-rendering canvas + settings panel, vs. a flow-diagram canvas with a fixed Actions panel and no left rail, vs. a filterable integration list with no left rail); the confirmed real finding that the 'Hide question panel' toggle collapses the RIGHT settings panel, not the left Pages rail; and the confirmed naming correction that the builder's single top-bar action is 'Share,' not an assumed 'Publish.' The floating 'Ask Typeform AI' / 'Chat to create' input is reproduced as the one element persisting across every shell and tab tested — the source's own strongest 'most persistent element' finding. The Pages rail's confirmed full keyboard-accessible drag-reorder (space bar to pick up, arrow keys to move, per an explicit screen-reader hint in the source) is represented here only as a native `draggable` attribute on each row, not a full keyboard-reorder implementation — out of scope for this structural/shell pass, consistent with how document-canvas-editor-shell scoped its own drag-and-drop reconstruction. The AI generation modal itself, Insights, and Research Flow are not reconstructed — see [[typeform-ai-chat-to-create]] for the modal.",
    runtimeVerified: false,
    fixtures: typeformApplicationLayoutFixtures,
    config: typeformApplicationLayoutConfig,
    propsSchema: typeformApplicationLayoutPropsSchema,
  },
  'google-forms-app-shell': {
    type: 'reconstructed',
    Component: GoogleFormsAppShell,
    label: 'Reconstructed preview',
    evidence:
      "OBSERVATION, live, logged-in exploration of the forms.google.com dashboard and the form builder via injected JavaScript (getComputedStyle/getBoundingClientRect) and the accessibility-tree dump (read_page), 2026-09-28 (GF9). Confirmed and reproduced faithfully: no single persistent top bar shared across screens (only the brand icon and account avatar carry over — reproduced by rendering two genuinely distinct header markups per screen, not one shared shell component); no docked sidebar on the dashboard, only a hamburger-triggered fixed-position overlay drawer (280px, confirmed via computed style) that floats over the content and closes on Escape/outside-click; the builder's 2-row sticky header plus a conditional row-3 unpublished banner; and — the centerpiece finding — 'Total points: 0' is confirmed NOT tab-conditional, staying visible identically across Questions/Responses/Settings, reproduced here as always-rendered regardless of active tab (a real, if minor, inconsistency in the source). The sticky-header-over-independently-scrolling-canvas structure (confirmed in the source by a direct scroll test, not inferred from CSS) is reproduced with a real internal scroll container. The response-count badge (5) and 'X responses' heading text reuse the source's own captured values. Template gallery, Preview/Theme/Share dialogs, and the Responses tab's Summary/Question/Individual sub-tabs (already covered by google-forms-responses-view) are out of scope for this structural/shell pass and are not reconstructed.",
    runtimeVerified: false,
    fixtures: googleFormsAppShellFixtures,
    config: googleFormsAppShellConfig,
    propsSchema: googleFormsAppShellPropsSchema,
  },
  'google-forms-rating-field': {
    type: 'reconstructed',
    Component: GoogleFormsRatingField,
    label: 'Reconstructed preview',
    evidence:
      "OBSERVATION, live DOM/ARIA/CSS inspection via injected JavaScript while driving real mouse/keyboard input on the live /viewform page, 2026-09-24 (no authorized Google export available). Confirmed-real behavior reproduced faithfully, not fixed: NO hover-preview-fill exists at all (confirmed two ways in the source — hovering never changes any icon's fill state, only a faint generic highlight appears), a genuine fourth distinct aria-checked pattern where clicking icon N marks icons 1..N aria-checked=true simultaneously (non-exclusive 'fill' semantics on a role=\"radio\" set, not classic single-exclusive-radio), clicking the already-selected icon deselects everything and toggles a 'Clear selection' text link (the only one of the four library rating fields with a confirmed working deselect, on both click and Space), Left/Right arrow keys commit the value immediately with wraparound (no separate confirm step, unlike this project's paperform-rating-field sibling which only moves focus on arrow keys), Enter is a confirmed no-op, and there is NO role=\"radiogroup\" and no group-level accessible name anywhere — each icon's own aria-label is just the bare number, not tied to the question text, arguably a step worse than paperform-rating-field's merely-unnamed-group gap. Per the source record's own finding, this deliberately follows the SAME precedent paperform-rating-field itself set (document, don't silently fix, an unnamed group) rather than the accessibility-fix precedent used by some other sibling previews. The fill visual is a simplified filled/outline icon swap with transition:none (confirmed transition-duration:0s in the source, which uses a shared SVG-sprite crop mechanism not reproduced literally here). Only the star icon style was CSS/DOM-inspected in the source; heart/thumbs-up icon paths in this preview are this reconstruction's own placeholder artwork, not independently verified to share the same sprite mechanism.",
    runtimeVerified: false,
    fixtures: googleFormsRatingFieldFixtures,
    config: googleFormsRatingFieldConfig,
    propsSchema: googleFormsRatingFieldPropsSchema,
  },
  'google-forms-linear-scale-field': {
    type: 'reconstructed',
    Component: GoogleFormsLinearScaleField,
    label: 'Reconstructed preview',
    evidence:
      "OBSERVATION, live DOM/ARIA inspection via injected JavaScript while driving real clicks on the live /viewform page, 2026-09-25 (no authorized Google export available). No direct sibling record exists — the comparison in the source is internal, against this product's own Rating field ([[google-forms-rating-field]]), confirmed to be a genuinely separate component (different CSS class, Od2TWd hYsg7c vs. p8oyLd) rather than the same widget skinned two ways. Confirmed-real behavior reproduced faithfully: a genuine role=\"radiogroup\" WITH a correct aria-labelledby resolving to the actual question text (a stark, confirmed contrast with the Rating field's total absence of any group name); selection is exclusive (aria-checked=true on exactly one option, the opposite of Rating's cumulative fill); clicking the already-selected option once is a visual no-op with no deselect. The centerpiece of this preview is the confirmed, reproducible ARIA bug: a SECOND click on the same already-selected option leaves it still visually selected but flips aria-checked to false on every option, including the visually-selected one — re-verified seconds apart in the source with no change, i.e. a permanent stale disagreement, not a momentary render-timing artifact (unlike a separate settling-lag quirk noted for Rating, which always resolved correctly a moment later). This reconstruction models that as two deliberately-separable pieces of state (visual `value` vs. `ariaCheckedValue`) and surfaces the live aria-checked value in a visible debug readout plus a `title` attribute on the stale option, so the bug is directly demonstrable rather than only inferable from markup. Endpoint-only labeling (exactly two, min/max) and the fixed min (0 or 1) / max (2-10) dropdown ranges are reproduced as confirmed; no CSS fill-mechanism detail was independently traced in the source for this component (out of scope there), so the filled-circle styling here is a plain, undocumented assumption, not a captured value.",
    runtimeVerified: false,
    fixtures: googleFormsLinearScaleFieldFixtures,
    config: googleFormsLinearScaleFieldConfig,
    propsSchema: googleFormsLinearScaleFieldPropsSchema,
  },
  'google-forms-section-branching': {
    type: 'reconstructed',
    Component: GoogleFormsSectionBranching,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, live logged-in exploration + network diffing of Google Forms via Claude browser extension, 2026-09-25. Confirmed and reproduced faithfully: branching exists at both a per-option destination dropdown (once "Go to section based on answer" is on) and a per-section footer, both offering an identical destination set including earlier/current sections with no loop validation; on the published /viewform, picking "Yes, skip to section 3" performs a real navigation jump straight to Section 3 with Section 2 never rendered at all, reproduced here as Section 2 genuinely never mounting in React state rather than being hidden with CSS; the Back button is skip-aware, returning directly to Section 1 (not Section 2) with the prior answer still shown selected, matching the source record\'s confirmed finding that the back stack respects the branch actually taken; and deleting the referenced Section 3 shows only the generic delete confirmation with no mention of the two rules pointing at it, after which the per-option dropdown silently resets its display value to "Continue to next section" with no error state or broken-reference indicator — reproduced deliberately as a real confirmed anti-pattern, not fixed. Deliberately simplified rather than invented: only the two confirmed options/destinations from the source\'s actual 3-section test tree are modeled (not the full N-section list a real form editor would offer), the exact save-request/network capture (POST .../save, the naLogImpressions/font-getmetadata 404s, the long-lived /bind channel) documented in the source\'s Technical Data section is not reproduced since it is a network trace rather than an interactive UI behavior, and forward/backward loop navigation mid-response is not built since the source record explicitly marks it "not tested end-to-end."',
    runtimeVerified: false,
    fixtures: googleFormsSectionBranchingFixtures,
    config: googleFormsSectionBranchingConfig,
    propsSchema: googleFormsSectionBranchingPropsSchema,
  },
  'paperform-signature-papersign': {
    type: 'reconstructed',
    Component: PaperformSignaturePapersign,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, live exploration + DOM/network inspection of Paperform via Claude browser extension, 2026-09-24. No comparison baseline exists — neither Zoho Forms nor Typeform documents an e-signature hand-off feature. Confirmed and reproduced faithfully: the Signature field is draw-only with no type-to-sign toggle anywhere in the builder or rendered DOM; drawing a stroke reveals a "CONFIRM SIGNATURE" footer with clear (↻) and confirm (✓) controls; confirming is a real network round trip (simulated here with a timeout) showing a transient "Signature still uploading" message before settling into a single redraw (pencil) icon, clearing the required-field error and flipping the Submit label from "Please finish the form — $20.00" to "Submit — $20.00"; Submit with nothing drawn is correctly blocked client-side with "This question is required," reproduced exactly since the source explicitly contrasts this with Price/Products fields elsewhere in the same form that publish and submit fine with no gateway; the Papersign hand-off starts with the confirmed empty state and "New document +" button, then the mapping step\'s per-signer Name/Email dropdowns pull from the form\'s own question list, matching the source\'s confirmed finding that recipient metadata (not document prose) is populated this way; and "Send Test" reproduces, as a flagged UI warning rather than a real send, the source\'s confirmed real-send gate quoting its exact captioned copy ("You must have submitted the form to be able to test") plus the explicit "no non-live test mode" finding, alongside a static callout for the confirmed absence of any status feedback loop back into Submissions (no "pending signature" badge, no link out). Deliberately simplified rather than invented: no real canvas/drawing API is wired (a "Simulate: draw a stroke" button stands in, as the task explicitly scoped); the separate Papersign document editor app (its own Draft.js-style canvas, slash-menu, and {{ }} merge-variable autocomplete, reached in a new browser tab per the source) is not reconstructed, only its hand-off configuration surface on the form side; and no real POST/send request is ever fired by the Send Test button, consistent with this project\'s standing rule against real sends already followed in the original research pass.',
    runtimeVerified: false,
    fixtures: paperformSignaturePapersignFixtures,
    config: paperformSignaturePapersignConfig,
    propsSchema: paperformSignaturePapersignPropsSchema,
  },
  'google-forms-responses-view': {
    type: 'reconstructed',
    Component: GoogleFormsResponsesView,
    label: 'Reconstructed preview',
    evidence:
      "OBSERVATION, live network inspection via read_network_requests while switching tabs, 2026-09-23. Confirmed and reproduced faithfully: Summary, Question, and Individual are three genuinely separate on-demand fetches, not one shared initial load — reproduced as a visible, accumulating network log naming the real confirmed endpoints (aggregatestatistics / getresponseclusters / getsingleresponse) rather than a single generic 'loading' state; the Summary tab's per-question chart type is keyed to the question type (pie for Multiple choice with a Copy chart button, bar for Linear scale, a plain scrollable pill list for Short answer with explicitly no Copy chart button); the confirmed per-question-answered (not per-respondent-total) count quirk is reproduced exactly as captured in the source's own accidental test -- the Multiple choice question shows 4 responses while Feedback/Satisfaction show 2, since one fixture respondent predates those questions; and the Individual tab's read-only rendered response reuses the graded-response layout (a points badge, a jump-to-N field, prev/next paging, a per-question points-override input, and an 'Add individual feedback' private-comment affordance), with a response that predates a question rendering blank rather than hidden, matching the confirmed source behavior. Filter/search is deliberately absent everywhere in this reconstruction, matching the confirmed real absence in the source product. The linked Google Sheet's own real-time sync mechanism (left genuinely unresolved in the source record) is not reconstructed here at all, since it was never confirmed to work a specific way.",
    runtimeVerified: false,
    fixtures: googleFormsResponsesViewFixtures,
    config: googleFormsResponsesViewConfig,
    propsSchema: googleFormsResponsesViewPropsSchema,
  },
  'semrush-ai-visibility-shell': {
    type: 'reconstructed',
    Component: SemrushAiVisibilityShell,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Semrush AI Toolkit inspection in the Codex in-app browser, 2026-09-29. Reproduces the two-level global and section navigation, persistent report controls, and local workspace switching. Responsive collapse is an explicit approximation. No account data or network actions are included.',
    runtimeVerified: true,
    fixtures: semrushAiVisibilityShellFixtures,
    config: semrushAiVisibilityShellConfig,
    propsSchema: semrushAiVisibilityShellPropsSchema,
  },
  'semrush-ai-visibility-landing': {
    type: 'reconstructed',
    Component: SemrushAiVisibilityLanding,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Semrush AI Visibility landing-page review, 2026-09-29. Reproduces the domain-entry CTA, last-checked history, benefit and capability cards, coming-soon state, independent multi-open FAQ rows, repeated bottom CTA, and trust strip using synthetic values. Live CTA submission was deliberately not tested.',
    runtimeVerified: true,
    fixtures: semrushAiVisibilityLandingFixtures,
    config: semrushAiVisibilityLandingConfig,
    propsSchema: semrushAiVisibilityLandingPropsSchema,
  },
  'semrush-site-audit-projects': {
    type: 'reconstructed',
    Component: SemrushSiteAuditProjects,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Semrush Site Audit project-list review, 2026-09-29. Reproduces the two-level shell, project search and no-results state, Last Update sort transition, metric grid, page-limit warning, read-only audit settings menu, creation modal, horizontal overflow, and page-size menu using synthetic projects only. No project, audit, rerun, cancellation, setting change, email, export, or deep-link navigation was submitted.',
    runtimeVerified: true,
    fixtures: semrushSiteAuditProjectsFixtures,
    config: semrushSiteAuditProjectsConfig,
    propsSchema: semrushSiteAuditProjectsPropsSchema,
  },
  'semrush-site-audit-issue-detail': {
    type: 'reconstructed',
    Component: SemrushSiteAuditIssueDetail,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Semrush Site Audit issue-detail review, 2026-09-29. Reproduces the audit header, issue explanation, remediation disclosure, Issues and Hidden states, synthetic search empty state, advanced filters, row selection, affected-page grid, project selector, and pagination options. Live rerun, export, share, settings, send, exclude, hide, project creation, external navigation, filter submission, and report navigation were deliberately not executed.',
    runtimeVerified: true,
    fixtures: semrushSiteAuditIssueDetailFixtures,
    config: semrushSiteAuditIssueDetailConfig,
    propsSchema: semrushSiteAuditIssueDetailPropsSchema,
  },
  'semrush-home-folders-workspace': {
    type: 'reconstructed',
    Component: SemrushHomeFoldersWorkspace,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Semrush Home Folders review, 2026-09-29. Reproduces the global analyzer, product rail, recommendation cards, folder search and empty state, ownership and tag filters, collapsible controls, metric cards, transient SEO table loading, seven-column grid, guarded settings menu, create-folder modal, and monitoring card using synthetic values. Share, creation, pinning, deletion, setup, analysis submission, project navigation, and metric navigation were deliberately not executed.',
    runtimeVerified: true,
    fixtures: semrushHomeFoldersWorkspaceFixtures,
    config: semrushHomeFoldersWorkspaceConfig,
    propsSchema: semrushHomeFoldersWorkspacePropsSchema,
  },
  'semrush-action-button': {
    type: 'reconstructed',
    Component: SemrushActionButton,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, action hierarchy consolidated from authenticated Semrush Home, AI Visibility, and Site Audit screens, 2026-09-29. Primary, secondary, ghost, icon, guarded-danger, disabled, and clearly synthetic loading/success states are isolated here. No live action is submitted.',
    runtimeVerified: true,
    fixtures: semrushActionButtonFixtures,
    config: semrushActionButtonConfig,
    propsSchema: semrushActionButtonPropsSchema,
  },
  'semrush-search-clear-action': {
    type: 'reconstructed',
    Component: SemrushSearchClearAction,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, search, clear, no-results, and recovery behavior consolidated from authenticated Semrush Folders, Site Audit projects, and Site Audit issue detail, 2026-09-29. Uses synthetic values and local state only.',
    runtimeVerified: true,
    fixtures: semrushSearchClearActionFixtures,
    config: semrushSearchClearActionConfig,
    propsSchema: semrushSearchClearActionPropsSchema,
  },
  'semrush-dropdown-filter-action': {
    type: 'reconstructed',
    Component: SemrushDropdownFilterAction,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, dropdown filter triggers consolidated from authenticated Semrush Folders ownership and tags controls plus Site Audit advanced filters, 2026-09-29. Filter application remains guarded because live submission was not tested.',
    runtimeVerified: true,
    fixtures: semrushDropdownFilterActionFixtures,
    config: semrushDropdownFilterActionConfig,
    propsSchema: semrushDropdownFilterActionPropsSchema,
  },
  'semrush-context-action-menu': {
    type: 'reconstructed',
    Component: SemrushContextActionMenu,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Semrush Folders settings menu review, 2026-09-29. Reproduces Share, Pin, Tags, Settings, and Delete as an independent action surface. All selections remain local and are marked needs verification.',
    runtimeVerified: true,
    fixtures: semrushContextActionMenuFixtures,
    config: semrushContextActionMenuConfig,
    propsSchema: semrushContextActionMenuPropsSchema,
  },
  'semrush-bulk-selection-action-bar': {
    type: 'reconstructed',
    Component: SemrushBulkSelectionActionBar,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Semrush Site Audit issue-detail row selection, 2026-09-29. Reproduces selected-count feedback, Deselect all, and guarded Hide as an independent reusable action bar.',
    runtimeVerified: true,
    fixtures: semrushBulkSelectionActionBarFixtures,
    config: semrushBulkSelectionActionBarConfig,
    propsSchema: semrushBulkSelectionActionBarPropsSchema,
  },
  'semrush-page-size-control': {
    type: 'reconstructed',
    Component: SemrushPageSizeControl,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Semrush Site Audit project and issue pagination controls, 2026-09-29. Reproduces page status and the observed 10, 20, 50, and 100 rows-per-page options.',
    runtimeVerified: true,
    fixtures: semrushPageSizeControlFixtures,
    config: semrushPageSizeControlConfig,
    propsSchema: semrushPageSizeControlPropsSchema,
  },
  'semrush-entity-creation-modal': {
    type: 'reconstructed',
    Component: SemrushEntityCreationModal,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Semrush Home Create Folder modal review, 2026-09-29. Reproduces website selection, optional name, share-after-create control, Create, Cancel, and close using fictional suggestions. Creation was not submitted. The error fixture is explicitly synthetic.',
    runtimeVerified: true,
    fixtures: semrushEntityCreationModalFixtures,
    config: semrushEntityCreationModalConfig,
    propsSchema: semrushEntityCreationModalPropsSchema,
  },
  'semrush-disclosure-panel': {
    type: 'reconstructed',
    Component: SemrushDisclosurePanel,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, independent disclosure behavior consolidated from the Semrush AI Visibility landing FAQ, AI Visibility recommendation section, and Site Audit How to fix guidance, 2026-09-29. Multiple FAQ items can remain open. No navigation or live mutation is performed.',
    runtimeVerified: true,
    fixtures: semrushDisclosurePanelFixtures,
    config: semrushDisclosurePanelConfig,
    propsSchema: semrushDisclosurePanelPropsSchema,
  },
  'semrush-report-tabs': {
    type: 'reconstructed',
    Component: SemrushReportTabs,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, report tab families consolidated from authenticated Semrush Site Audit and AI Visibility screens, 2026-09-29. Selection changes locally while report navigation and request behavior remain marked needs verification.',
    runtimeVerified: true,
    fixtures: semrushReportTabsFixtures,
    config: semrushReportTabsConfig,
    propsSchema: semrushReportTabsPropsSchema,
  },
  'semrush-project-selector': {
    type: 'reconstructed',
    Component: SemrushProjectSelector,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Semrush Site Audit project selector review, 2026-09-29. Reproduces a compact project list and guarded create-project action with fictional project names only. Live project switching was not executed.',
    runtimeVerified: true,
    fixtures: semrushProjectSelectorFixtures,
    config: semrushProjectSelectorConfig,
    propsSchema: semrushProjectSelectorPropsSchema,
  },
  'semrush-campaign-action-group': {
    type: 'reconstructed',
    Component: SemrushCampaignActionGroup,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Semrush Site Audit campaign header review, 2026-09-29. Rerun, PDF, Export, Share, and Settings are isolated as a grouped action surface. Every action stops at a local needs-verification status.',
    runtimeVerified: true,
    fixtures: semrushCampaignActionGroupFixtures,
    config: semrushCampaignActionGroupConfig,
    propsSchema: semrushCampaignActionGroupPropsSchema,
  },
  'semrush-async-status-state': {
    type: 'reconstructed',
    Component: SemrushAsyncStatusState,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, loading transitions consolidated from authenticated Semrush AI Visibility, Home Folders, and Site Audit screens, 2026-09-29. Loading remains distinct from empty and settled data. The error fixture is explicitly synthetic.',
    runtimeVerified: true,
    fixtures: semrushAsyncStatusStateFixtures,
    config: semrushAsyncStatusStateConfig,
    propsSchema: semrushAsyncStatusStatePropsSchema,
  },
  'semrush-empty-state-recovery': {
    type: 'reconstructed',
    Component: SemrushEmptyStateRecovery,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, empty and recovery states consolidated from authenticated Semrush Site Audit search, Hidden issues, and AI Visibility country reports, 2026-09-29. Recovery remains local and uses synthetic values.',
    runtimeVerified: true,
    fixtures: semrushEmptyStateRecoveryFixtures,
    config: semrushEmptyStateRecoveryConfig,
    propsSchema: semrushEmptyStateRecoveryPropsSchema,
  },
  'semrush-help-popover': {
    type: 'reconstructed',
    Component: SemrushHelpPopover,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, contextual help consolidated from authenticated Semrush target and update-date controls, 2026-09-29. Target and update-frequency popovers were opened and dismissed. Methodology content is a compact reconstruction of the separately observed methodology dialog.',
    runtimeVerified: true,
    fixtures: semrushHelpPopoverFixtures,
    config: semrushHelpPopoverConfig,
    propsSchema: semrushHelpPopoverPropsSchema,
  },
  'semrush-utility-header-actions': {
    type: 'reconstructed',
    Component: SemrushUtilityHeaderActions,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, utility actions consolidated from authenticated Semrush Home and Site Audit headers, 2026-09-29. Feedback, notifications, help, invite, and account affordances were visible but their destinations were not tested. Badge values and menu contents are synthetic.',
    runtimeVerified: true,
    fixtures: semrushUtilityHeaderActionsFixtures,
    config: semrushUtilityHeaderActionsConfig,
    propsSchema: semrushUtilityHeaderActionsPropsSchema,
  },
  'semrush-sort-control': {
    type: 'reconstructed',
    Component: SemrushSortControl,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Semrush Site Audit Last Update sorting, 2026-09-29. The direction label changed from ascending to descending and row order reversed. This independent fixture uses fictional rows and local state.',
    runtimeVerified: true,
    fixtures: semrushSortControlFixtures,
    config: semrushSortControlConfig,
    propsSchema: semrushSortControlPropsSchema,
  },
  'semrush-view-mode-toggle': {
    type: 'reconstructed',
    Component: SemrushViewModeToggle,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Semrush Home Folders card and SEO table switch, 2026-09-29. The same folder identities and metrics persisted across both representations. This fixture keeps the collection local and synthetic.',
    runtimeVerified: true,
    fixtures: semrushViewModeToggleFixtures,
    config: semrushViewModeToggleConfig,
    propsSchema: semrushViewModeTogglePropsSchema,
  },
  'semrush-carousel-controls': {
    type: 'reconstructed',
    Component: SemrushCarouselControls,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, recommendation cards and forward paging consolidated from authenticated Semrush Home and AI Visibility screens, 2026-09-29. The independent reconstruction adds explicit previous, next, position, and boundary states without external navigation.',
    runtimeVerified: true,
    fixtures: semrushCarouselControlsFixtures,
    config: semrushCarouselControlsConfig,
    propsSchema: semrushCarouselControlsPropsSchema,
  },
  'semrush-warning-quota-dialog': {
    type: 'reconstructed',
    Component: SemrushWarningQuotaDialog,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, warning and quota dialogs consolidated from authenticated Semrush Site Audit crawl coverage and AI Visibility tracked-brand limits, 2026-09-29. Target-change warning text came from the observed edit-target modal. Live-impact actions remain disabled.',
    runtimeVerified: true,
    fixtures: semrushWarningQuotaDialogFixtures,
    config: semrushWarningQuotaDialogConfig,
    propsSchema: semrushWarningQuotaDialogPropsSchema,
  },
  'semrush-response-detail-modal': {
    type: 'reconstructed',
    Component: SemrushResponseDetailModal,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Semrush AI Visibility full-response overlay, 2026-09-29. The live modal transitioned from loading to prompt metadata, brand tags, answer text, and grouped sources. All fixture content and domains are fictional.',
    runtimeVerified: true,
    fixtures: semrushResponseDetailModalFixtures,
    config: semrushResponseDetailModalConfig,
    propsSchema: semrushResponseDetailModalPropsSchema,
  },
  'semrush-toast-banner': {
    type: 'reconstructed',
    Component: SemrushToastBanner,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, feedback patterns consolidated from authenticated Semrush informational notices, crawl-limit feedback, and locally observed successful state changes, 2026-09-29. Success, informational, and warning copy use fictional data. The error and retry path is explicitly synthetic. No live request is issued.',
    runtimeVerified: true,
    fixtures: semrushToastBannerFixtures,
    config: semrushToastBannerConfig,
    propsSchema: semrushToastBannerPropsSchema,
  },
  'semrush-date-history-selector': {
    type: 'reconstructed',
    Component: SemrushDateHistorySelector,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Semrush AI Visibility historical update selector, 2026-09-29. The selector distinguishes the current snapshot from historical dates. Dates and availability in this independent fixture are fictional and local-only.',
    runtimeVerified: true,
    fixtures: semrushDateHistorySelectorFixtures,
    config: semrushDateHistorySelectorConfig,
    propsSchema: semrushDateHistorySelectorPropsSchema,
  },
  'semrush-competitor-chips': {
    type: 'reconstructed',
    Component: SemrushCompetitorChips,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, competitor chips and owned-domain distinction consolidated from authenticated Semrush Brand Performance and competitor setup screens, 2026-09-29. All names are fictional. Removal and restoration change local state only.',
    runtimeVerified: true,
    fixtures: semrushCompetitorChipsFixtures,
    config: semrushCompetitorChipsConfig,
    propsSchema: semrushCompetitorChipsPropsSchema,
  },
  'semrush-filter-visibility-control': {
    type: 'reconstructed',
    Component: SemrushFilterVisibilityControl,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Semrush Site Audit Show filters and Hide filters behavior, 2026-09-29. This independent fixture demonstrates retained staged values without applying a live filter request.',
    runtimeVerified: true,
    fixtures: semrushFilterVisibilityControlFixtures,
    config: semrushFilterVisibilityControlConfig,
    propsSchema: semrushFilterVisibilityControlPropsSchema,
  },
  'semrush-metric-distribution-switch': {
    type: 'reconstructed',
    Component: SemrushMetricDistributionSwitch,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, analytic metric switching consolidated from authenticated Semrush Brand Performance insight cards, 2026-09-29. The same fictional brand identities persist while the displayed measure changes locally.',
    runtimeVerified: true,
    fixtures: semrushMetricDistributionSwitchFixtures,
    config: semrushMetricDistributionSwitchConfig,
    propsSchema: semrushMetricDistributionSwitchPropsSchema,
  },
  'semrush-row-overflow-menu': {
    type: 'reconstructed',
    Component: SemrushRowOverflowMenu,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, row and entity overflow actions consolidated from authenticated Semrush project and folder collections, 2026-09-29. Opening, Escape dismissal, and a fictional local report action are exercised. Rename and Settings remain guarded. Delete remains disabled and needs verification.',
    runtimeVerified: true,
    fixtures: semrushRowOverflowMenuFixtures,
    config: semrushRowOverflowMenuConfig,
    propsSchema: semrushRowOverflowMenuPropsSchema,
  },
  'semrush-pagination-navigator': {
    type: 'reconstructed',
    Component: SemrushPaginationNavigator,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Semrush Site Audit pagination review, 2026-09-29. A named pagination region, page status, and disabled single-page textbox were directly observed. Multi-page previous, next, and numbered navigation fixtures are accessible reconstructions and explicitly marked needs verification.',
    runtimeVerified: true,
    fixtures: semrushPaginationNavigatorFixtures,
    config: semrushPaginationNavigatorConfig,
    propsSchema: semrushPaginationNavigatorPropsSchema,
  },
  'semrush-status-badge': {
    type: 'reconstructed',
    Component: SemrushStatusBadge,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, status language consolidated from authenticated Semrush Site Audit health, issue severity, setup, and loading surfaces, 2026-09-29. Labels are paired with color and programmatic status semantics. Fixture copy and values are synthetic.',
    runtimeVerified: true,
    fixtures: semrushStatusBadgeFixtures,
    config: semrushStatusBadgeConfig,
    propsSchema: semrushStatusBadgePropsSchema,
  },
  'semrush-health-score-indicator': {
    type: 'reconstructed',
    Component: SemrushHealthScoreIndicator,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, score presentation consolidated from authenticated Semrush Site Health and AI Visibility metric surfaces, 2026-09-29. Score, loading, and unavailable states are kept distinct. Values and thresholds are fictional and need product-contract verification before reuse.',
    runtimeVerified: true,
    fixtures: semrushHealthScoreIndicatorFixtures,
    config: semrushHealthScoreIndicatorConfig,
    propsSchema: semrushHealthScoreIndicatorPropsSchema,
  },
  'semrush-row-selection-control': {
    type: 'reconstructed',
    Component: SemrushRowSelectionControl,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Semrush Site Audit affected-page row selection, 2026-09-29. Single-row selection and the resulting selected-count action bar were directly observed. Select-all, multi-row, and indeterminate behavior are accessible reconstructions marked needs verification.',
    runtimeVerified: true,
    fixtures: semrushRowSelectionControlFixtures,
    config: semrushRowSelectionControlConfig,
    propsSchema: semrushRowSelectionControlPropsSchema,
  },
  'semrush-validation-field': {
    type: 'reconstructed',
    Component: SemrushValidationField,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, text-field structure consolidated from authenticated Semrush AI Visibility domain entry and Site Audit project creation, 2026-09-29. Empty, populated, required, and disabled states are local fixtures. The invalid state and its copy are synthetic and explicitly marked needs verification.',
    runtimeVerified: true,
    fixtures: semrushValidationFieldFixtures,
    config: semrushValidationFieldConfig,
    propsSchema: semrushValidationFieldPropsSchema,
  },
  'semrush-backlink-audit-projects': {
    type: 'reconstructed',
    Component: SemrushBacklinkAuditProjects,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Semrush Backlink Audit project collection reviewed 2026-09-30. Breadcrumbs, search, create action, sortable project table, setup actions, single-page pagination, and table skeleton were directly observed. All fixture entities are fictional. Create and setup remain local-only.',
    runtimeVerified: true,
    fixtures: semrushBacklinkAuditProjectsFixtures,
    config: semrushBacklinkAuditProjectsConfig,
    propsSchema: semrushBacklinkAuditProjectsPropsSchema,
  },
  'semrush-backlink-audit-setup-wizard': {
    type: 'reconstructed',
    Component: SemrushBacklinkAuditSetupWizard,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated four-step Semrush Backlink Audit Settings modal reviewed 2026-09-30. Campaign scope, optional brand names, domain categories, target countries, close behavior, and guarded Start action were directly observed. No audit was started.',
    runtimeVerified: true,
    fixtures: semrushBacklinkAuditSetupWizardFixtures,
    config: semrushBacklinkAuditSetupWizardConfig,
    propsSchema: semrushBacklinkAuditSetupWizardPropsSchema,
  },
  'semrush-campaign-scope-radio-group': {
    type: 'reconstructed',
    Component: SemrushCampaignScopeRadioGroup,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, Semrush Backlink Audit Campaign Scope radio group reviewed 2026-09-30. Four mutually exclusive scope variants and adjacent backlink and domain counts were visible. Values and entities in this fixture are fictional.',
    runtimeVerified: true,
    fixtures: semrushCampaignScopeRadioGroupFixtures,
    config: semrushCampaignScopeRadioGroupConfig,
    propsSchema: semrushCampaignScopeRadioGroupPropsSchema,
  },
  'semrush-domain-category-checkbox-group': {
    type: 'reconstructed',
    Component: SemrushDomainCategoryCheckboxGroup,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, Semrush Backlink Audit domain-category step reviewed 2026-09-30. Checked and unchecked options, Clear all, and disabled Restore default states were visible. Fixture changes are local and no audit was started.',
    runtimeVerified: true,
    fixtures: semrushDomainCategoryCheckboxGroupFixtures,
    config: semrushDomainCategoryCheckboxGroupConfig,
    propsSchema: semrushDomainCategoryCheckboxGroupPropsSchema,
  },
  'semrush-country-tag-selector': {
    type: 'reconstructed',
    Component: SemrushCountryTagSelector,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, Semrush Backlink Audit target-country step reviewed 2026-09-30. Removable selected tags, searchable expanded multi-select, selected options, and unselected options were visible. Limit behavior is reconstructed and marked needs verification.',
    runtimeVerified: true,
    fixtures: semrushCountryTagSelectorFixtures,
    config: semrushCountryTagSelectorConfig,
    propsSchema: semrushCountryTagSelectorPropsSchema,
  },
  'semrush-help-support-panel': {
    type: 'reconstructed',
    Component: SemrushHelpSupportPanel,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Semrush Help & Support side panel reviewed 2026-09-30. Open and close, help search, clear search, article results, getting-started cards, resource links, and Contact support were observed. Contact and external navigation remain guarded.',
    runtimeVerified: true,
    fixtures: semrushHelpSupportPanelFixtures,
    config: semrushHelpSupportPanelConfig,
    propsSchema: semrushHelpSupportPanelPropsSchema,
  },
  'semrush-share-folders-dialog': {
    type: 'reconstructed',
    Component: SemrushShareFoldersDialog,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Semrush Share folders dialog reviewed 2026-09-30. Folder count and searchable multi-select, email-address area, Viewer and Editor permission options, close, and Share action were observed. No recipient was entered and nothing was shared.',
    runtimeVerified: true,
    fixtures: semrushShareFoldersDialogFixtures,
    config: semrushShareFoldersDialogConfig,
    propsSchema: semrushShareFoldersDialogPropsSchema,
  },
  'semrush-domain-overview-entry': {
    type: 'reconstructed',
    Component: SemrushDomainOverviewEntry,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, Authenticated Domain Overview entry screen. Search and demo actions were not submitted. Reviewed 2026-09-30.',
    runtimeVerified: true,
    fixtures: semrushDomainOverviewEntryFixtures,
    config: semrushDomainOverviewEntryConfig,
    propsSchema: semrushDomainOverviewEntryPropsSchema,
  },
  'semrush-domain-analysis-query-bar': {
    type: 'reconstructed',
    Component: SemrushDomainAnalysisQueryBar,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, Authenticated persistent query bar with domain, clear, scope, and Analyze controls. Analyze remains guarded. Reviewed 2026-09-30.',
    runtimeVerified: true,
    fixtures: semrushDomainAnalysisQueryBarFixtures,
    config: semrushDomainAnalysisQueryBarConfig,
    propsSchema: semrushDomainAnalysisQueryBarPropsSchema,
  },
  'semrush-domain-scope-selector': {
    type: 'reconstructed',
    Component: SemrushDomainScopeSelector,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, Authenticated Root Domain menu expanded to show Exact URL, Subdomain, and Subfolder. Provider recalculation was not exercised. Reviewed 2026-09-30.',
    runtimeVerified: true,
    fixtures: semrushDomainScopeSelectorFixtures,
    config: semrushDomainScopeSelectorConfig,
    propsSchema: semrushDomainScopeSelectorPropsSchema,
  },
  'semrush-domain-overview-report': {
    type: 'reconstructed',
    Component: SemrushDomainOverviewReport,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, Authenticated Domain Overview report with loading, populated, gated, sparse-data, and error evidence. Values are fictional. Reviewed 2026-09-30.',
    runtimeVerified: true,
    fixtures: semrushDomainOverviewReportFixtures,
    config: semrushDomainOverviewReportConfig,
    propsSchema: semrushDomainOverviewReportPropsSchema,
  },
  'semrush-report-control-cluster': {
    type: 'reconstructed',
    Component: SemrushReportControlCluster,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, Authenticated country, device, date, and currency filter cluster. Unopened menus are marked needs verification in the record. Reviewed 2026-09-30.',
    runtimeVerified: true,
    fixtures: semrushReportControlClusterFixtures,
    config: semrushReportControlClusterConfig,
    propsSchema: semrushReportControlClusterPropsSchema,
  },
  'semrush-search-trend-controls': {
    type: 'reconstructed',
    Component: SemrushSearchTrendControls,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, Authenticated time range, aggregation, series, note, mode, and export controls. No export or provider request was triggered. Reviewed 2026-09-30.',
    runtimeVerified: true,
    fixtures: semrushSearchTrendControlsFixtures,
    config: semrushSearchTrendControlsConfig,
    propsSchema: semrushSearchTrendControlsPropsSchema,
  },
  'semrush-feature-upgrade-gate': {
    type: 'reconstructed',
    Component: SemrushFeatureUpgradeGate,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, Authenticated Growth report selection exposed the Guru plan gate. Upgrade was not opened. Reviewed 2026-09-30.',
    runtimeVerified: true,
    fixtures: semrushFeatureUpgradeGateFixtures,
    config: semrushFeatureUpgradeGateConfig,
    propsSchema: semrushFeatureUpgradeGatePropsSchema,
  },
  'semrush-report-recovery-state': {
    type: 'reconstructed',
    Component: SemrushReportRecoveryState,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, Authenticated recoverable Something went wrong report state with Try again. Retry was not exercised. Reviewed 2026-09-30.',
    runtimeVerified: true,
    fixtures: semrushReportRecoveryStateFixtures,
    config: semrushReportRecoveryStateConfig,
    propsSchema: semrushReportRecoveryStatePropsSchema,
  },
  'semrush-position-tracking-projects': {
    type: 'reconstructed',
    Component: SemrushPositionTrackingProjects,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Semrush Position Tracking campaign collection reviewed 2026-09-30. Search, clear, AI Search, SEO, Last 30 days, loading, resolved data, and campaign navigation were exercised. Creation and setup remain guarded.',
    runtimeVerified: true,
    fixtures: semrushPositionTrackingProjectsFixtures,
    config: semrushPositionTrackingProjectsConfig,
    propsSchema: semrushPositionTrackingProjectsPropsSchema,
  },
  'semrush-target-type-filter': {
    type: 'reconstructed',
    Component: SemrushTargetTypeFilter,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Position Tracking All targets, AI Search, and SEO radio states reviewed 2026-09-30. AI Search changed metric headers from keywords to prompts. Provider persistence remains unverified.',
    runtimeVerified: true,
    fixtures: semrushTargetTypeFilterFixtures,
    config: semrushTargetTypeFilterConfig,
    propsSchema: semrushTargetTypeFilterPropsSchema,
  },
  'semrush-position-tracking-date-range': {
    type: 'reconstructed',
    Component: SemrushPositionTrackingDateRange,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Position Tracking date presets reviewed 2026-09-30. Last 30 days was selected and loading-to-resolved behavior was observed. Other result ranges remain needs verification.',
    runtimeVerified: true,
    fixtures: semrushPositionTrackingDateRangeFixtures,
    config: semrushPositionTrackingDateRangeConfig,
    propsSchema: semrushPositionTrackingDateRangePropsSchema,
  },
  'semrush-position-tracking-landscape': {
    type: 'reconstructed',
    Component: SemrushPositionTrackingLandscape,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Position Tracking Landscape and Overview reports reviewed 2026-09-30. Report navigation, loading hierarchy, KPI cards, narrative summary, and Rankings Overview structure were observed. All fixture data is fictional.',
    runtimeVerified: true,
    fixtures: semrushPositionTrackingLandscapeFixtures,
    config: semrushPositionTrackingLandscapeConfig,
    propsSchema: semrushPositionTrackingLandscapePropsSchema,
  },
  'semrush-rankings-overview-table': {
    type: 'reconstructed',
    Component: SemrushRankingsOverviewTable,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Position Tracking Rankings Overview reviewed 2026-09-30. Search, filters, metric tabs, checkbox selection, sortable headers, and loading rows were observed. Provider mutations and export remain guarded.',
    runtimeVerified: true,
    fixtures: semrushRankingsOverviewTableFixtures,
    config: semrushRankingsOverviewTableConfig,
    propsSchema: semrushRankingsOverviewTablePropsSchema,
  },
  'ahrefs-dashboard-workspace': {
    type: 'reconstructed',
    Component: AhrefsDashboardWorkspace,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs empty-dashboard review in the Codex in-app browser, 2026-09-29. Reproduces the global product navigation, synthetic workspace selector, universal target bar, education banner, project collection rail, first-project empty state, tutorial media, product update, and help launcher. All submissions and unverified navigation remain local-only.',
    runtimeVerified: true,
    fixtures: ahrefsDashboardWorkspaceFixtures,
    config: ahrefsDashboardWorkspaceConfig,
    propsSchema: ahrefsDashboardWorkspacePropsSchema,
  },
  'ahrefs-site-explorer-entry': {
    type: 'reconstructed',
    Component: AhrefsSiteExplorerEntry,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Site Explorer entry review in the Codex in-app browser, 2026-09-29. Reproduces the global product navigation, dated SERP data-quality notice, centered domain-analysis form, footer, product update, and help launcher. All submissions and unverified navigation remain local-only.',
    runtimeVerified: true,
    fixtures: ahrefsSiteExplorerEntryFixtures,
    config: ahrefsSiteExplorerEntryConfig,
    propsSchema: ahrefsSiteExplorerEntryPropsSchema,
  },
  'ahrefs-keywords-explorer-access-gate': {
    type: 'reconstructed',
    Component: AhrefsKeywordsExplorerAccessGate,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Keywords Explorer access-gate review in the Codex in-app browser, 2026-09-29. Reproduces the shared product navigation, centered product promise, pricing CTA, and large tutorial-video surface. Pricing, live media playback, account actions, and full keyword-research runtime were deliberately not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsKeywordsExplorerAccessGateFixtures,
    config: ahrefsKeywordsExplorerAccessGateConfig,
    propsSchema: ahrefsKeywordsExplorerAccessGatePropsSchema,
  },
  'ahrefs-content-explorer-access-gate': {
    type: 'reconstructed',
    Component: AhrefsContentExplorerAccessGate,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Content Explorer access-gate review in the Codex in-app browser, 2026-09-29. Reproduces the shared product navigation, content-research promise, pricing CTA, and tutorial-video surface. Pricing, live media playback, account actions, and the full content-research runtime were deliberately not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsContentExplorerAccessGateFixtures,
    config: ahrefsContentExplorerAccessGateConfig,
    propsSchema: ahrefsContentExplorerAccessGatePropsSchema,
  },
  'ahrefs-site-audit-empty-state': {
    type: 'reconstructed',
    Component: AhrefsSiteAuditEmptyState,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Site Audit empty-state review in the Codex in-app browser, 2026-09-29. Reproduces the shared product navigation, first-project message and CTA, footer, Bot Analytics product update, and help launcher. Project creation, crawling, settings, update navigation, and external destinations were deliberately not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsSiteAuditEmptyStateFixtures,
    config: ahrefsSiteAuditEmptyStateConfig,
    propsSchema: ahrefsSiteAuditEmptyStatePropsSchema,
  },
  'ahrefs-brand-radar-entry': {
    type: 'reconstructed',
    Component: AhrefsBrandRadarEntry,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Brand Radar 2.0 entry review in the Codex in-app browser, 2026-09-29. Reproduces website or manual setup, guarded analysis, demo links, empty reports, and the shared shell. No brand analysis, report save, pricing, quota, or external action was run.',
    runtimeVerified: true,
    fixtures: ahrefsBrandRadarEntryFixtures,
    config: ahrefsBrandRadarEntryConfig,
    propsSchema: ahrefsBrandRadarEntryPropsSchema,
  },
  'ahrefs-ai-content-helper-entry': {
    type: 'reconstructed',
    Component: AhrefsAiContentHelperEntry,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs AI Content Helper entry review in the Codex in-app browser, 2026-09-29. Reproduces document inputs, location and brand-kit controls, competitor entry, monthly allowance, section tabs, and first-document state. No document, AI writing, quota, pricing, or external action was run.',
    runtimeVerified: true,
    fixtures: ahrefsAiContentHelperEntryFixtures,
    config: ahrefsAiContentHelperEntryConfig,
    propsSchema: ahrefsAiContentHelperEntryPropsSchema,
  },
  'ahrefs-smm-channel-onboarding': {
    type: 'reconstructed',
    Component: AhrefsSmmChannelOnboarding,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Social Media Manager first-channel onboarding review in the Codex in-app browser, 2026-09-29. Reproduces the YouTube Shorts announcement, connection CTA, supported-channel row, illustrative calendar, footer, and help launcher. No social account, OAuth permission, post, feedback, or external action was run.',
    runtimeVerified: true,
    fixtures: ahrefsSmmChannelOnboardingFixtures,
    config: ahrefsSmmChannelOnboardingConfig,
    propsSchema: ahrefsSmmChannelOnboardingPropsSchema,
  },
  'ahrefs-competitive-analysis-access-gate': {
    type: 'reconstructed',
    Component: AhrefsCompetitiveAnalysisAccessGate,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs review in the Codex in-app browser, 2026-09-29. Competitive Analysis pricing gate and tutorial report preview. Pricing and live competitor analysis were not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsCompetitiveAnalysisAccessGateFixtures,
    config: ahrefsCompetitiveAnalysisAccessGateConfig,
    propsSchema: ahrefsCompetitiveAnalysisAccessGatePropsSchema,
  },
  'ahrefs-batch-analysis-access-gate': {
    type: 'reconstructed',
    Component: AhrefsBatchAnalysisAccessGate,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs review in the Codex in-app browser, 2026-09-29. Batch Analysis pricing gate and illustrative metrics table. Pricing, target upload, filters, export, quota, and live metrics were not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsBatchAnalysisAccessGateFixtures,
    config: ahrefsBatchAnalysisAccessGateConfig,
    propsSchema: ahrefsBatchAnalysisAccessGatePropsSchema,
  },
  'ahrefs-ai-content-grader-plan-gate': {
    type: 'reconstructed',
    Component: AhrefsAiContentGraderPlanGate,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs review in the Codex in-app browser, 2026-09-29. AI Content Grader experimental Enterprise-only availability state. No grading form, AI processing, entitlement, or pricing flow was exercised.',
    runtimeVerified: true,
    fixtures: ahrefsAiContentGraderPlanGateFixtures,
    config: ahrefsAiContentGraderPlanGateConfig,
    propsSchema: ahrefsAiContentGraderPlanGatePropsSchema,
  },
  'ahrefs-action-button': {
    type: 'reconstructed',
    Component: AhrefsActionButton,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs review in the Codex in-app browser, 2026-09-29. Independent Ahrefs primary, secondary, ghost, loading, and disabled action treatment reconstructed from authenticated screens. Actions stay local-only.',
    runtimeVerified: true,
    fixtures: ahrefsActionButtonFixtures,
    config: ahrefsActionButtonConfig,
    propsSchema: ahrefsActionButtonPropsSchema,
  },
  'ahrefs-target-input-group': {
    type: 'reconstructed',
    Component: AhrefsTargetInputGroup,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs review in the Codex in-app browser, 2026-09-29. Independent Ahrefs protocol, target text input, scope, and submit group reconstructed from Site Explorer and project setup. No live target was submitted.',
    runtimeVerified: true,
    fixtures: ahrefsTargetInputGroupFixtures,
    config: ahrefsTargetInputGroupConfig,
    propsSchema: ahrefsTargetInputGroupPropsSchema,
  },
  'ahrefs-project-stepper': {
    type: 'reconstructed',
    Component: AhrefsProjectStepper,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs review in the Codex in-app browser, 2026-09-29. Independent four-step project setup progress control for Scope, Web Analytics, Ownership, and Site Audit. Step changes are local-only.',
    runtimeVerified: true,
    fixtures: ahrefsProjectStepperFixtures,
    config: ahrefsProjectStepperConfig,
    propsSchema: ahrefsProjectStepperPropsSchema,
  },
  'ahrefs-project-scope-form': {
    type: 'reconstructed',
    Component: AhrefsProjectScopeForm,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs review in the Codex in-app browser, 2026-09-29. Authenticated project Scope form with target, name, folder, sharing, Boost, Continue, and guarded access modal. No project was created.',
    runtimeVerified: true,
    fixtures: ahrefsProjectScopeFormFixtures,
    config: ahrefsProjectScopeFormConfig,
    propsSchema: ahrefsProjectScopeFormPropsSchema,
  },
  'ahrefs-access-control-upgrade-modal': {
    type: 'reconstructed',
    Component: AhrefsAccessControlUpgradeModal,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs review in the Codex in-app browser, 2026-09-29. Independent Enterprise access-control upgrade modal opened from project sharing settings. Pricing and permission changes were not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsAccessControlUpgradeModalFixtures,
    config: ahrefsAccessControlUpgradeModalConfig,
    propsSchema: ahrefsAccessControlUpgradeModalPropsSchema,
  },
  'ahrefs-bot-analytics-empty-state': {
    type: 'reconstructed',
    Component: AhrefsBotAnalyticsEmptyState,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Bot Analytics empty state review in the Codex in-app browser, 2026-09-29. Live account, pricing, quota, provider, export, and persistence actions were not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsBotAnalyticsEmptyStateFixtures,
    config: ahrefsBotAnalyticsEmptyStateConfig,
    propsSchema: ahrefsBotAnalyticsEmptyStatePropsSchema,
  },
  'ahrefs-rank-tracker-plan-gate': {
    type: 'reconstructed',
    Component: AhrefsRankTrackerPlanGate,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Rank Tracker plan gate review in the Codex in-app browser, 2026-09-29. Live account, pricing, quota, provider, export, and persistence actions were not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsRankTrackerPlanGateFixtures,
    config: ahrefsRankTrackerPlanGateConfig,
    propsSchema: ahrefsRankTrackerPlanGatePropsSchema,
  },
  'ahrefs-portfolio-empty-state': {
    type: 'reconstructed',
    Component: AhrefsPortfolioEmptyState,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Portfolio empty state review in the Codex in-app browser, 2026-09-29. Live account, pricing, quota, provider, export, and persistence actions were not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsPortfolioEmptyStateFixtures,
    config: ahrefsPortfolioEmptyStateConfig,
    propsSchema: ahrefsPortfolioEmptyStatePropsSchema,
  },
  'ahrefs-report-builder-empty-state': {
    type: 'reconstructed',
    Component: AhrefsReportBuilderEmptyState,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Report Builder empty state review in the Codex in-app browser, 2026-09-29. Live account, pricing, quota, provider, export, and persistence actions were not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsReportBuilderEmptyStateFixtures,
    config: ahrefsReportBuilderEmptyStateConfig,
    propsSchema: ahrefsReportBuilderEmptyStatePropsSchema,
  },
  'ahrefs-alerts-workspace': {
    type: 'reconstructed',
    Component: AhrefsAlertsWorkspace,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Alerts workspace review in the Codex in-app browser, 2026-09-29. Live account, pricing, quota, provider, export, and persistence actions were not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsAlertsWorkspaceFixtures,
    config: ahrefsAlertsWorkspaceConfig,
    propsSchema: ahrefsAlertsWorkspacePropsSchema,
  },
  'ahrefs-gbp-monitor-access-gate': {
    type: 'reconstructed',
    Component: AhrefsGbpMonitorAccessGate,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs GBP Monitor access gate review in the Codex in-app browser, 2026-09-29. Live account, pricing, quota, provider, export, and persistence actions were not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsGbpMonitorAccessGateFixtures,
    config: ahrefsGbpMonitorAccessGateConfig,
    propsSchema: ahrefsGbpMonitorAccessGatePropsSchema,
  },
  'ahrefs-rank-table': {
    type: 'reconstructed',
    Component: AhrefsRankTable,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Ahrefs Rank table review in the Codex in-app browser, 2026-09-29. Live account, pricing, quota, provider, export, and persistence actions were not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsRankTableFixtures,
    config: ahrefsRankTableConfig,
    propsSchema: ahrefsRankTablePropsSchema,
  },
  'ahrefs-apps-directory-info': {
    type: 'reconstructed',
    Component: AhrefsAppsDirectoryInfo,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Apps directory information review in the Codex in-app browser, 2026-09-29. Live account, pricing, quota, provider, export, and persistence actions were not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsAppsDirectoryInfoFixtures,
    config: ahrefsAppsDirectoryInfoConfig,
    propsSchema: ahrefsAppsDirectoryInfoPropsSchema,
  },
  'ahrefs-project-view-radio-group': {
    type: 'reconstructed',
    Component: AhrefsProjectViewRadioGroup,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Project view radio group review in the Codex in-app browser, 2026-09-29. Live account, pricing, quota, provider, export, and persistence actions were not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsProjectViewRadioGroupFixtures,
    config: ahrefsProjectViewRadioGroupConfig,
    propsSchema: ahrefsProjectViewRadioGroupPropsSchema,
  },
  'ahrefs-alert-category-tabs': {
    type: 'reconstructed',
    Component: AhrefsAlertCategoryTabs,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Alert category tabs review on 2026-09-29. Reconstructed and locally verified on 2026-09-30 after the live Ahrefs session returned to sign-in. Provider-impacting behavior was not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsAlertCategoryTabsFixtures,
    config: ahrefsAlertCategoryTabsConfig,
    propsSchema: ahrefsAlertCategoryTabsPropsSchema,
  },
  'ahrefs-alert-quota-state': {
    type: 'reconstructed',
    Component: AhrefsAlertQuotaState,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Alert quota state review on 2026-09-29. Reconstructed and locally verified on 2026-09-30 after the live Ahrefs session returned to sign-in. Provider-impacting behavior was not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsAlertQuotaStateFixtures,
    config: ahrefsAlertQuotaStateConfig,
    propsSchema: ahrefsAlertQuotaStatePropsSchema,
  },
  'ahrefs-empty-results-row': {
    type: 'reconstructed',
    Component: AhrefsEmptyResultsRow,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Empty results row review on 2026-09-29. Reconstructed and locally verified on 2026-09-30 after the live Ahrefs session returned to sign-in. Provider-impacting behavior was not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsEmptyResultsRowFixtures,
    config: ahrefsEmptyResultsRowConfig,
    propsSchema: ahrefsEmptyResultsRowPropsSchema,
  },
  'ahrefs-date-range-filter': {
    type: 'reconstructed',
    Component: AhrefsDateRangeFilter,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Date range filter review on 2026-09-29. Reconstructed and locally verified on 2026-09-30 after the live Ahrefs session returned to sign-in. Provider-impacting behavior was not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsDateRangeFilterFixtures,
    config: ahrefsDateRangeFilterConfig,
    propsSchema: ahrefsDateRangeFilterPropsSchema,
  },
  'ahrefs-domain-search-field': {
    type: 'reconstructed',
    Component: AhrefsDomainSearchField,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Domain search field review on 2026-09-29. Reconstructed and locally verified on 2026-09-30 after the live Ahrefs session returned to sign-in. Provider-impacting behavior was not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsDomainSearchFieldFixtures,
    config: ahrefsDomainSearchFieldConfig,
    propsSchema: ahrefsDomainSearchFieldPropsSchema,
  },
  'ahrefs-export-action': {
    type: 'reconstructed',
    Component: AhrefsExportAction,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Export action review on 2026-09-29. Reconstructed and locally verified on 2026-09-30 after the live Ahrefs session returned to sign-in. Provider-impacting behavior was not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsExportActionFixtures,
    config: ahrefsExportActionConfig,
    propsSchema: ahrefsExportActionPropsSchema,
  },
  'ahrefs-rank-pagination': {
    type: 'reconstructed',
    Component: AhrefsRankPagination,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Rank pagination review on 2026-09-29. Reconstructed and locally verified on 2026-09-30 after the live Ahrefs session returned to sign-in. Provider-impacting behavior was not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsRankPaginationFixtures,
    config: ahrefsRankPaginationConfig,
    propsSchema: ahrefsRankPaginationPropsSchema,
  },
  'ahrefs-create-empty-state-action': {
    type: 'reconstructed',
    Component: AhrefsCreateEmptyStateAction,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Create empty-state action review on 2026-09-29. Reconstructed and locally verified on 2026-09-30 after the live Ahrefs session returned to sign-in. Provider-impacting behavior was not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsCreateEmptyStateActionFixtures,
    config: ahrefsCreateEmptyStateActionConfig,
    propsSchema: ahrefsCreateEmptyStateActionPropsSchema,
  },
  'ahrefs-data-table-header': {
    type: 'reconstructed',
    Component: AhrefsDataTableHeader,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Data table header review on 2026-09-29. Reconstructed and locally verified on 2026-09-30 after the live Ahrefs session returned to sign-in. Provider-impacting behavior was not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsDataTableHeaderFixtures,
    config: ahrefsDataTableHeaderConfig,
    propsSchema: ahrefsDataTableHeaderPropsSchema,
  },
  'ahrefs-rank-toolbar': {
    type: 'reconstructed',
    Component: AhrefsRankToolbar,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Rank toolbar review on 2026-09-29. Reconstructed and locally verified on 2026-09-30 after the live Ahrefs session returned to sign-in. Provider-impacting behavior was not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsRankToolbarFixtures,
    config: ahrefsRankToolbarConfig,
    propsSchema: ahrefsRankToolbarPropsSchema,
  },
  'ahrefs-product-navigation': {
    type: 'reconstructed',
    Component: AhrefsProductNavigation,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Dashboard and tool-entry reviews on 2026-09-29. Independent local extraction verified on 2026-09-30 while the live Ahrefs session was signed out. Menu and provider navigation outcomes remain unverified.',
    runtimeVerified: true,
    fixtures: ahrefsProductNavigationFixtures,
    config: ahrefsDeepConfig,
    propsSchema: ahrefsDeepPropsSchema,
  },
  'ahrefs-workspace-menu-trigger': {
    type: 'reconstructed',
    Component: AhrefsWorkspaceMenuTrigger,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, closed workspace-menu trigger observed in authenticated Ahrefs headers on 2026-09-29. Expanded menu content was not preserved, so activation stays locally guarded.',
    runtimeVerified: true,
    fixtures: ahrefsWorkspaceMenuTriggerFixtures,
    config: ahrefsDeepConfig,
    propsSchema: ahrefsDeepPropsSchema,
  },
  'ahrefs-product-update-panel': {
    type: 'reconstructed',
    Component: AhrefsProductUpdatePanel,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Dashboard product-update review on 2026-09-29. Dismissal is local and reversible. Try now and Learn more outcomes were not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsProductUpdatePanelFixtures,
    config: ahrefsDeepConfig,
    propsSchema: ahrefsDeepPropsSchema,
  },
  'ahrefs-collection-navigation-rail': {
    type: 'reconstructed',
    Component: AhrefsCollectionNavigationRail,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Dashboard collection rail review on 2026-09-29. Search and selection are local. Account, settings, creation, collapse, and persistence outcomes were not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsCollectionNavigationRailFixtures,
    config: ahrefsDeepConfig,
    propsSchema: ahrefsDeepPropsSchema,
  },
  'ahrefs-welcome-learning-panel': {
    type: 'reconstructed',
    Component: AhrefsWelcomeLearningPanel,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Dashboard welcome and learning-resources review on 2026-09-29. Dismissal is local. Video and learning destinations were not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsWelcomeLearningPanelFixtures,
    config: ahrefsDeepConfig,
    propsSchema: ahrefsDeepPropsSchema,
  },
  'ahrefs-dismissible-notice-banner': {
    type: 'reconstructed',
    Component: AhrefsDismissibleNoticeBanner,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Site Explorer dated SERP notice on 2026-09-29. The message is point-in-time evidence and is not asserted as current on 2026-09-30. Dismissal is local.',
    runtimeVerified: true,
    fixtures: ahrefsDismissibleNoticeBannerFixtures,
    config: ahrefsDeepConfig,
    propsSchema: ahrefsDeepPropsSchema,
  },
  'ahrefs-tutorial-video-card': {
    type: 'reconstructed',
    Component: AhrefsTutorialVideoCard,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Dashboard project-setup tutorial card on 2026-09-29. Playback, analytics, and player behavior were not exercised and remain locally guarded.',
    runtimeVerified: true,
    fixtures: ahrefsTutorialVideoCardFixtures,
    config: ahrefsDeepConfig,
    propsSchema: ahrefsDeepPropsSchema,
  },
  'ahrefs-brand-setup-mode': {
    type: 'reconstructed',
    Component: AhrefsBrandSetupMode,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Brand Radar setup review on 2026-09-29. Conditional fields switch locally. Analysis, reports, pricing, and demo navigation were not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsBrandSetupModeFixtures,
    config: ahrefsDeepConfig,
    propsSchema: ahrefsDeepPropsSchema,
  },
  'ahrefs-content-document-setup': {
    type: 'reconstructed',
    Component: AhrefsContentDocumentSetup,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs AI Content Helper document setup on 2026-09-29. Competitor fields add locally. Document creation, AI writing, quotas, validation, pricing, and network requests were not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsContentDocumentSetupFixtures,
    config: ahrefsDeepConfig,
    propsSchema: ahrefsDeepPropsSchema,
  },
  'ahrefs-content-helper-tabs': {
    type: 'reconstructed',
    Component: AhrefsContentHelperTabs,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs AI Content Helper Documents and Brand kits Beta tabs on 2026-09-29. Selection changes locally. Creation, AI, and persistence behavior were not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsContentHelperTabsFixtures,
    config: ahrefsDeepConfig,
    propsSchema: ahrefsDeepPropsSchema,
  },
  'ahrefs-rank-tracker-plan-actions': {
    type: 'reconstructed',
    Component: AhrefsRankTrackerPlanActions,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Rank Tracker plan gate on 2026-09-29. Upgrade, pricing, entitlement, and navigation outcomes were not exercised. Locally guarded while signed out on 2026-09-30.',
    runtimeVerified: true,
    fixtures: ahrefsRankTrackerPlanActionsFixtures,
    config: ahrefsDeepConfig,
    propsSchema: ahrefsDeepPropsSchema,
  },
  'ahrefs-brand-radar-demo-links': {
    type: 'reconstructed',
    Component: AhrefsBrandRadarDemoLinks,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Brand Radar entry on 2026-09-29. Demo loading and analysis results were not opened and remain locally guarded.',
    runtimeVerified: true,
    fixtures: ahrefsBrandRadarDemoLinksFixtures,
    config: ahrefsDeepConfig,
    propsSchema: ahrefsDeepPropsSchema,
  },
  'ahrefs-brand-radar-empty-reports': {
    type: 'reconstructed',
    Component: AhrefsBrandRadarEmptyReports,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Brand Radar MY REPORTS empty state on 2026-09-29. Report creation, saving, and refresh behavior were not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsBrandRadarEmptyReportsFixtures,
    config: ahrefsDeepConfig,
    propsSchema: ahrefsDeepPropsSchema,
  },
  'ahrefs-content-competitor-fields': {
    type: 'reconstructed',
    Component: AhrefsContentCompetitorFields,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs AI Content Helper competitor field on 2026-09-29. Additional local rows are synthetic. Validation, analysis, and persistence were not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsContentCompetitorFieldsFixtures,
    config: ahrefsDeepConfig,
    propsSchema: ahrefsDeepPropsSchema,
  },
  'ahrefs-content-allowance-actions': {
    type: 'reconstructed',
    Component: AhrefsContentAllowanceActions,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs AI Content Helper action and allowance row on 2026-09-29. Displayed allowance and pricing are historical screen copy. Document, AI, quota, and billing actions were not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsContentAllowanceActionsFixtures,
    config: ahrefsDeepConfig,
    propsSchema: ahrefsDeepPropsSchema,
  },
  'ahrefs-content-location-select': {
    type: 'reconstructed',
    Component: AhrefsContentLocationSelect,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs AI Content Helper United States default on 2026-09-29. Additional options are synthetic fixtures. Provider options and persistence remain unverified.',
    runtimeVerified: true,
    fixtures: ahrefsContentLocationSelectFixtures,
    config: ahrefsDeepConfig,
    propsSchema: ahrefsDeepPropsSchema,
  },
  'ahrefs-content-brand-kit-select': {
    type: 'reconstructed',
    Component: AhrefsContentBrandKitSelect,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs AI Content Helper Not selected brand-kit default on 2026-09-29. Atlas voice is fictional. Provider brand kits and persistence remain unverified.',
    runtimeVerified: true,
    fixtures: ahrefsContentBrandKitSelectFixtures,
    config: ahrefsDeepConfig,
    propsSchema: ahrefsDeepPropsSchema,
  },
  'ahrefs-smm-announcement-banner': {
    type: 'reconstructed',
    Component: AhrefsSmmAnnouncementBanner,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs SMM YouTube Shorts announcement on 2026-09-29. Dismissal is local. Feedback navigation and persistence were not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsSmmAnnouncementBannerFixtures,
    config: ahrefsDeepConfig,
    propsSchema: ahrefsDeepPropsSchema,
  },
  'ahrefs-smm-channel-list': {
    type: 'reconstructed',
    Component: AhrefsSmmChannelList,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, seven social-channel marks in authenticated Ahrefs SMM onboarding on 2026-09-29. Accessible names are inferred and local selection is synthetic. No connection or OAuth occurred.',
    runtimeVerified: true,
    fixtures: ahrefsSmmChannelListFixtures,
    config: ahrefsDeepConfig,
    propsSchema: ahrefsDeepPropsSchema,
  },
  'ahrefs-smm-connect-action': {
    type: 'reconstructed',
    Component: AhrefsSmmConnectAction,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs SMM first-channel onboarding on 2026-09-29. Connection and OAuth behavior were not exercised and remain locally guarded.',
    runtimeVerified: true,
    fixtures: ahrefsSmmConnectActionFixtures,
    config: ahrefsDeepConfig,
    propsSchema: ahrefsDeepPropsSchema,
  },
  'ahrefs-apps-developer-info-action': {
    type: 'reconstructed',
    Component: AhrefsAppsDeveloperInfoAction,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Apps directory information screen on 2026-09-29. Destination, API requirements, and external navigation were not opened.',
    runtimeVerified: true,
    fixtures: ahrefsAppsDeveloperInfoActionFixtures,
    config: ahrefsDeepConfig,
    propsSchema: ahrefsDeepPropsSchema,
  },
  'ahrefs-guarded-action-status': {
    type: 'reconstructed',
    Component: AhrefsGuardedActionStatus,
    label: 'Reconstructed preview',
    evidence:
      'RECONSTRUCTION, library safety feedback used when an observed Ahrefs provider outcome was not exercised. This is not claimed as a source-product component and sends no request.',
    runtimeVerified: true,
    fixtures: ahrefsGuardedActionStatusFixtures,
    config: ahrefsDeepConfig,
    propsSchema: ahrefsDeepPropsSchema,
  },
  'ahrefs-access-gate-hero': {
    type: 'reconstructed',
    Component: AhrefsAccessGateHero,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs access-gate screens on 2026-09-29. Entitlement, submission, navigation, and provider outcomes were not exercised and remain locally guarded.',
    runtimeVerified: true,
    fixtures: ahrefsAccessGateHeroFixtures,
    config: ahrefsDeepConfig,
    propsSchema: ahrefsDeepPropsSchema,
  },
  'ahrefs-tutorial-report-preview': {
    type: 'reconstructed',
    Component: AhrefsTutorialReportPreview,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, illustrative report inside authenticated Ahrefs access-gate education on 2026-09-29. Fictional local rows are not account data or a functioning report.',
    runtimeVerified: true,
    fixtures: ahrefsTutorialReportPreviewFixtures,
    config: ahrefsDeepConfig,
    propsSchema: ahrefsDeepPropsSchema,
  },
  'ahrefs-tutorial-filter-strip': {
    type: 'reconstructed',
    Component: AhrefsTutorialFilterStrip,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, filter labels inside authenticated Ahrefs access-gate education on 2026-09-29. They remain non-interactive because source filter behavior was not exercised.',
    runtimeVerified: true,
    fixtures: ahrefsTutorialFilterStripFixtures,
    config: ahrefsDeepConfig,
    propsSchema: ahrefsDeepPropsSchema,
  },
  'ahrefs-brand-radar-pricing-banner': {
    type: 'reconstructed',
    Component: AhrefsBrandRadarPricingBanner,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs Brand Radar pricing notice on 2026-09-29. The notice is point-in-time evidence and pricing navigation was not opened.',
    runtimeVerified: true,
    fixtures: ahrefsBrandRadarPricingBannerFixtures,
    config: ahrefsDeepConfig,
    propsSchema: ahrefsDeepPropsSchema,
  },
  'ahrefs-smm-calendar-preview': {
    type: 'reconstructed',
    Component: AhrefsSmmCalendarPreview,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, decorative calendar inside authenticated Ahrefs SMM onboarding on 2026-09-29. The accessible local illustration exposes no account, schedule, or publish action.',
    runtimeVerified: true,
    fixtures: ahrefsSmmCalendarPreviewFixtures,
    config: ahrefsDeepConfig,
    propsSchema: ahrefsDeepPropsSchema,
  },
  'ahrefs-project-setup-cancel-action': {
    type: 'reconstructed',
    Component: AhrefsProjectSetupCancelAction,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Ahrefs project-setup header on 2026-09-29. Cancellation and navigation outcomes were not exercised and remain locally guarded.',
    runtimeVerified: true,
    fixtures: ahrefsProjectSetupCancelActionFixtures,
    config: ahrefsDeepConfig,
    propsSchema: ahrefsDeepPropsSchema,
  },
  'semrush-ai-visibility-dashboard': {
    type: 'reconstructed',
    Component: SemrushAiVisibilityDashboard,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated one-screen Semrush Visibility Overview interaction review, 2026-09-29. Reproduces metric and range transitions, country and chart empty states, LLM distribution, collapsible recommendations, the How It Works drawer, five topic/source views, prompt rows, and a full-response modal with synthetic values.',
    runtimeVerified: true,
    fixtures: semrushAiVisibilityDashboardFixtures,
    config: semrushAiVisibilityDashboardConfig,
    propsSchema: semrushAiVisibilityDashboardPropsSchema,
  },
  'semrush-ai-competitor-setup': {
    type: 'reconstructed',
    Component: SemrushAiCompetitorSetup,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Semrush Competitor Research inspection, 2026-09-29. Reproduces the owned-domain anchor, four competitor slots, Analyze and Clear actions, empty state, and a clearly synthetic comparison-result fixture. A real comparison was deliberately not submitted, so result values and API behavior remain not observed.',
    runtimeVerified: true,
    fixtures: semrushAiCompetitorSetupFixtures,
    config: semrushAiCompetitorSetupConfig,
    propsSchema: semrushAiCompetitorSetupPropsSchema,
  },
  'semrush-prompt-research-entry': {
    type: 'reconstructed',
    Component: SemrushPromptResearchEntry,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Semrush Prompt Research entry inspection, 2026-09-29. Reproduces the topic entry, guarded Analyze action, and three explanatory benefits. The preview confirms locally and does not spend quota or send a request.',
    runtimeVerified: true,
    fixtures: semrushPromptResearchEntryFixtures,
    config: semrushPromptResearchEntryConfig,
    propsSchema: semrushPromptResearchEntryPropsSchema,
  },
  'semrush-brand-performance-insights': {
    type: 'reconstructed',
    Component: SemrushBrandPerformanceInsights,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated inspection of an existing Semrush Brand Performance report, 2026-09-29. Reproduces competitor chips, filters, insight-first hierarchy, sentiment versus share-of-voice chart, and summary cards. All names and values are fictional.',
    runtimeVerified: true,
    fixtures: semrushBrandPerformanceInsightsFixtures,
    config: semrushBrandPerformanceInsightsConfig,
    propsSchema: semrushBrandPerformanceInsightsPropsSchema,
  },
  'semrush-report-filter-controls': {
    type: 'reconstructed',
    Component: SemrushReportFilterControls,
    label: 'Reconstructed preview',
    runtimeVerified: true,
    evidence:
      'OBSERVATION, authenticated Semrush Brand Performance reports, 2026-09-29. Reproduces the grouped brand selector, target-edit warning, competitor tags, platform and historical-date menus, contextual help, methodology dialog, and quota modal using synthetic values.',
    fixtures: semrushReportFilterControlsFixtures,
    config: semrushReportFilterControlsConfig,
    propsSchema: semrushReportFilterControlsPropsSchema,
  },
  'semrush-evidence-answers-drawer': {
    type: 'reconstructed',
    Component: SemrushEvidenceAnswersDrawer,
    label: 'Reconstructed preview',
    runtimeVerified: true,
    evidence:
      'OBSERVATION, authenticated Semrush Perception interaction, 2026-09-29. Reproduces the Show answers drawer, scope selector, answer paging, sources, brand mentions, close control and loading-to-content hierarchy. Fixtures are fictional.',
    fixtures: semrushEvidenceAnswersDrawerFixtures,
    config: semrushEvidenceAnswersDrawerConfig,
    propsSchema: semrushEvidenceAnswersDrawerPropsSchema,
  },
  'semrush-perception-analysis': {
    type: 'reconstructed',
    Component: SemrushPerceptionAnalysis,
    label: 'Reconstructed preview',
    runtimeVerified: true,
    evidence:
      'OBSERVATION, authenticated Semrush Perception report, 2026-09-29. Reproduces chart range and legend controls, AI overview loading, feature heatmap, branded modes, expandable descriptors, pagination and invalid-page status with synthetic data.',
    fixtures: semrushPerceptionAnalysisFixtures,
    config: semrushPerceptionAnalysisConfig,
    propsSchema: semrushPerceptionAnalysisPropsSchema,
  },
  'semrush-narrative-drivers': {
    type: 'reconstructed',
    Component: SemrushNarrativeDrivers,
    label: 'Reconstructed preview',
    runtimeVerified: true,
    evidence:
      'OBSERVATION, authenticated Semrush Narrative Drivers report, 2026-09-29. Reproduces platform metric tabs, answer/citation modes, filterable expandable question rows, empty state and strategic opportunity cards with synthetic data.',
    fixtures: semrushNarrativeDriversFixtures,
    config: semrushNarrativeDriversConfig,
    propsSchema: semrushNarrativeDriversPropsSchema,
  },
  'semrush-question-intent-analysis': {
    type: 'reconstructed',
    Component: SemrushQuestionIntentAnalysis,
    label: 'Reconstructed preview',
    runtimeVerified: true,
    evidence:
      'OBSERVATION, authenticated Semrush Questions report, 2026-09-29. Reproduces topic distribution, query intent analysis, topic-level question examples and strategic opportunity hierarchy with synthetic data.',
    fixtures: semrushQuestionIntentAnalysisFixtures,
    config: semrushQuestionIntentAnalysisConfig,
    propsSchema: semrushQuestionIntentAnalysisPropsSchema,
  },
  'similarweb-onboarding-workspace': {
    type: 'reconstructed',
    Component: SimilarwebOnboardingWorkspace,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Similarweb account onboarding step 4 of 11 in the Codex in-app browser, 2026-09-30. The product workspace remained gated. No onboarding answer was selected or submitted.',
    runtimeVerified: false,
    fixtures: similarwebOnboardingWorkspaceFixtures,
    config: similarwebOnboardingWorkspaceConfig,
    propsSchema: similarwebOnboardingWorkspacePropsSchema,
  },
  'similarweb-job-title-combobox': {
    type: 'reconstructed',
    Component: SimilarwebJobTitleCombobox,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Similarweb job-title selector review in the Codex in-app browser, 2026-09-30. Empty, open, Marketing-filtered, and clear states were exercised. Selection and submission need verification.',
    runtimeVerified: false,
    fixtures: similarwebJobTitleComboboxFixtures,
    config: similarwebJobTitleComboboxConfig,
    propsSchema: similarwebJobTitleComboboxPropsSchema,
  },
  'similarweb-progress-action': {
    type: 'reconstructed',
    Component: SimilarwebProgressAction,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, disabled Similarweb Next action at onboarding step 4 of 11 in the Codex in-app browser, 2026-09-30. Enabled styling and behavior are synthetic, guarded, and need verification.',
    runtimeVerified: false,
    fixtures: similarwebProgressActionFixtures,
    config: similarwebProgressActionConfig,
    propsSchema: similarwebProgressActionPropsSchema,
  },
  'se-ranking-application-shell': {
    type: 'reconstructed',
    Component: SeRankingApplicationShell,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated SE Ranking Project Overview, Keyword Research, AI Search, setup, and Rankings screens, 2026-10-01. The account menu and its seven actions were observed open.',
    runtimeVerified: true,
    fixtures: seRankingApplicationShellFixtures,
    config: seRankingApplicationShellConfig,
    propsSchema: seRankingApplicationShellPropsSchema,
  },
  'se-ranking-project-overview': {
    type: 'reconstructed',
    Component: SeRankingProjectOverview,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated centilio.com Project Overview, 2026-09-30. Reproduces visible metric, AI-engine, empty, and loading states without changing provider data.',
    runtimeVerified: false,
    fixtures: seRankingProjectOverviewFixtures,
    config: seRankingProjectOverviewConfig,
    propsSchema: seRankingProjectOverviewPropsSchema,
  },
  'se-ranking-keyword-research-entry': {
    type: 'reconstructed',
    Component: SeRankingKeywordResearchEntry,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated SE Ranking Keyword Research entry screen, 2026-09-30. No keyword, file, survey answer, or Analyze request was submitted.',
    runtimeVerified: false,
    fixtures: seRankingKeywordResearchEntryFixtures,
    config: seRankingKeywordResearchEntryConfig,
    propsSchema: seRankingKeywordResearchEntryPropsSchema,
  },
  'se-ranking-keyword-query-bar': {
    type: 'reconstructed',
    Component: SeRankingKeywordQueryBar,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Keyword Research, 2026-10-01. The searchable country database, India selection, populated query, enabled Analyze, result route, and 1/10 account limit were observed.',
    runtimeVerified: true,
    fixtures: seRankingKeywordQueryBarFixtures,
    config: seRankingKeywordQueryBarConfig,
    propsSchema: seRankingKeywordQueryBarPropsSchema,
  },
  'se-ranking-survey-dialog': {
    type: 'reconstructed',
    Component: SeRankingSurveyDialog,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated SE Ranking acquisition survey, 2026-09-30. The live close control did not dismiss and no answer, Skip, or Complete action was submitted.',
    runtimeVerified: false,
    fixtures: seRankingSurveyDialogFixtures,
    config: seRankingSurveyDialogConfig,
    propsSchema: seRankingSurveyDialogPropsSchema,
  },
  'se-ranking-audit-toast': {
    type: 'reconstructed',
    Component: SeRankingAuditToast,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated SE Ranking audit-complete notification for centilio.com with Health Score 80, 2026-09-30. Review navigation was not exercised.',
    runtimeVerified: false,
    fixtures: seRankingAuditToastFixtures,
    config: seRankingAuditToastConfig,
    propsSchema: seRankingAuditToastPropsSchema,
  },
  'se-ranking-key-metrics-strip': {
    type: 'reconstructed',
    Component: SeRankingKeyMetricsStrip,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Project Overview, 2026-10-01. Current values and the metric settings panel with five selected and two unselected options were observed.',
    runtimeVerified: true,
    fixtures: seRankingKeyMetricsStripFixtures,
    config: seRankingKeyMetricsStripConfig,
    propsSchema: seRankingKeyMetricsStripPropsSchema,
  },
  'se-ranking-ai-engine-cards': {
    type: 'reconstructed',
    Component: SeRankingAiEngineCards,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Project Overview and AI Search Overview, 2026-10-01. Current engine values, new-tab drill-down, presence definitions, competitor controls, and topic data were observed.',
    runtimeVerified: true,
    fixtures: seRankingAiEngineCardsFixtures,
    config: seRankingAiEngineCardsConfig,
    propsSchema: seRankingAiEngineCardsPropsSchema,
  },
  'se-ranking-rankings-empty-state': {
    type: 'reconstructed',
    Component: SeRankingRankingsEmptyState,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated SE Ranking Project Overview, 2026-09-30. Add keywords was not exercised and remains guarded locally.',
    runtimeVerified: false,
    fixtures: seRankingRankingsEmptyStateFixtures,
    config: seRankingRankingsEmptyStateConfig,
    propsSchema: seRankingRankingsEmptyStatePropsSchema,
  },
  'se-ranking-announcement-banner': {
    type: 'reconstructed',
    Component: SeRankingAnnouncementBanner,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated SE Ranking workshop banner, 2026-09-30. Register was not exercised. Dismiss and restore are local-only fixture states.',
    runtimeVerified: false,
    fixtures: seRankingAnnouncementBannerFixtures,
    config: seRankingAnnouncementBannerConfig,
    propsSchema: seRankingAnnouncementBannerPropsSchema,
  },
  'se-ranking-feature-carousel': {
    type: 'reconstructed',
    Component: SeRankingFeatureCarousel,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Keyword Research entry, 2026-10-01. Forward paging was exercised through 1–2, 2–3, and 3–4 of 4, with a bounded end state.',
    runtimeVerified: true,
    fixtures: seRankingFeatureCarouselFixtures,
    config: seRankingFeatureCarouselConfig,
    propsSchema: seRankingFeatureCarouselPropsSchema,
  },
  'se-ranking-setup-actions': {
    type: 'reconstructed',
    Component: SeRankingSetupActions,
    label: 'Reconstructed preview',
    evidence:
      'OBSERVATION, authenticated Project Overview, 2026-10-01. AI setup opened the Search engines screen in a new tab, and the analytics widget exposed Google Analytics, Search Console, and Matomo choices.',
    runtimeVerified: true,
    fixtures: seRankingSetupActionsFixtures,
    config: seRankingSetupActionsConfig,
    propsSchema: seRankingSetupActionsPropsSchema,
  },
  'se-ranking-project-page-header': {
    type: 'reconstructed',
    Component: SeRankingProjectPageHeader,
    label: 'Live-evidence reconstruction',
    runtimeVerified: true,
    evidence:
      'OBSERVATION, authenticated SE Ranking Project Overview, 2026-10-01. All eleven Widgets controls were observed, Insights was hidden and restored, Content was reordered above Insights with reload persistence, and the original order was restored.',
    fixtures: seRankingProjectPageHeaderFixtures,
    config: seRankingProjectPageHeaderConfig,
    propsSchema: seRankingProjectPageHeaderPropsSchema,
  },
  'se-ranking-rankings-filters': {
    type: 'reconstructed',
    Component: SeRankingRankingsFilters,
    label: 'Live-evidence reconstruction',
    runtimeVerified: true,
    evidence:
      'OBSERVATION, authenticated SE Ranking Project Overview, 2026-10-01. Google India EN and all eight date options were observed. Past 7 days produced a loading state, then Past 30 days was restored.',
    fixtures: seRankingRankingsFiltersFixtures,
    config: seRankingRankingsFiltersConfig,
    propsSchema: seRankingRankingsFiltersPropsSchema,
  },
  'se-ranking-audit-loading-panel': {
    type: 'reconstructed',
    Component: SeRankingAuditLoadingPanel,
    label: 'Live-evidence reconstruction',
    runtimeVerified: true,
    evidence:
      'OBSERVATION, authenticated Website Audit, 2026-10-01. Launch confirmation, active crawl counters, successful completion, and the completed-report Retry boundary were observed. A failure-specific Retry label remains unavailable.',
    fixtures: seRankingAuditLoadingPanelFixtures,
    config: seRankingAuditLoadingPanelConfig,
    propsSchema: seRankingAuditLoadingPanelPropsSchema,
  },
  'se-ranking-audit-health-score': {
    type: 'reconstructed',
    Component: SeRankingAuditHealthScore,
    label: 'Live-evidence reconstruction',
    runtimeVerified: true,
    evidence:
      'OBSERVATION, authenticated Website Audit, 2026-10-01. Health Score 80 Strong, Recommended 90+, 1,600 issues, and View all issues navigation were observed.',
    fixtures: seRankingAuditHealthScoreFixtures,
    config: seRankingAuditHealthScoreConfig,
    propsSchema: seRankingAuditHealthScorePropsSchema,
  },
  'se-ranking-keyword-file-drop': {
    type: 'reconstructed',
    Component: SeRankingKeywordFileDrop,
    label: 'Live-evidence reconstruction',
    runtimeVerified: true,
    evidence:
      'OBSERVATION, authenticated Rankings import, 2026-10-01. TXT selection, processing, success, the .csv/.txt restriction, and duplicate detection were exercised. Re-entering the tracked keyword produced Duplicates found: 1, and Yes, remove duplicates produced Added keywords: 0 while the limit remained 1/750.',
    fixtures: seRankingKeywordFileDropFixtures,
    config: seRankingKeywordFileDropConfig,
    propsSchema: seRankingKeywordFileDropPropsSchema,
  },
  'se-ranking-survey-option-group': {
    type: 'reconstructed',
    Component: SeRankingSurveyOptionGroup,
    label: 'Live-evidence reconstruction',
    runtimeVerified: true,
    evidence:
      'OBSERVATION, authenticated acquisition survey, 2026-10-01. All eleven options, Other selection, and its conditional answer field were observed live.',
    fixtures: seRankingSurveyOptionGroupFixtures,
    config: seRankingSurveyOptionGroupConfig,
    propsSchema: seRankingSurveyOptionGroupPropsSchema,
  },
  'se-ranking-survey-action-footer': {
    type: 'reconstructed',
    Component: SeRankingSurveyActionFooter,
    label: 'Live-evidence reconstruction',
    runtimeVerified: true,
    evidence:
      'OBSERVATION, authenticated acquisition survey, 2026-10-01. Complete dismissed the survey, which remained absent after reload and on a later revisit. Skip persistence cannot be replayed in this account.',
    fixtures: seRankingSurveyActionFooterFixtures,
    config: seRankingSurveyActionFooterConfig,
    propsSchema: seRankingSurveyActionFooterPropsSchema,
  },
  'se-ranking-audit-issue-report': {
    type: 'reconstructed',
    Component: SeRankingAuditIssueReport,
    label: 'Live-evidence reconstruction',
    runtimeVerified: true,
    evidence:
      'OBSERVATION, authenticated Website Audit Issue Report, 2026-10-01. Current, Fixed, New, All Tracked, and Turned Off scopes, category totals, issue counts, and the subscription gate were observed.',
    fixtures: seRankingAuditIssueReportFixtures,
    config: seRankingAuditIssueReportConfig,
    propsSchema: seRankingAuditIssueReportPropsSchema,
  },
  'se-ranking-keyword-analysis-result': {
    type: 'reconstructed',
    Component: SeRankingKeywordAnalysisResult,
    label: 'Live-evidence reconstruction',
    runtimeVerified: true,
    evidence:
      'OBSERVATION, authenticated Keyword Research, 2026-10-01. The India database selector, centilio Analyze action, collection-in-progress message, 1/10 limit, report sections, disabled zero-result actions, and final no-results state were observed.',
    fixtures: seRankingKeywordAnalysisResultFixtures,
    config: seRankingKeywordAnalysisResultConfig,
    propsSchema: seRankingKeywordAnalysisResultPropsSchema,
  },
  'se-ranking-rankings-detail-report': {
    type: 'reconstructed',
    Component: SeRankingRankingsDetailReport,
    label: 'Live-evidence reconstruction',
    runtimeVerified: true,
    evidence:
      'OBSERVATION, authenticated Rankings detailed report, 2026-10-01. Limits, toolbar actions, position filters, insights, summary metrics, imported keyword row, and the Rankings table guide at step 1 of 5 were observed.',
    fixtures: seRankingRankingsDetailReportFixtures,
    config: seRankingRankingsDetailReportConfig,
    propsSchema: seRankingRankingsDetailReportPropsSchema,
  },
  'toggle-radio-switch': {
    Component: ToggleRadioSwitch,
    examples: [
      {
        title: 'Disabled (default)',
        description:
          'Observed default state on a fresh form: Save & Resume off, dependent options hidden.',
        props: { initialEnabled: false },
      },
      {
        title: 'Enabled',
        description: 'Selecting Enable reveals the dependent "Save Button Label" field (required).',
        props: { initialEnabled: true },
      },
    ],
  },
};

// Salesforce-only addition. Preserve all pre-existing registry entries.
Object.assign(previewRegistry, salesforcePreviews);

Object.assign(previewRegistry, framerPrimaryPreviews);

Object.assign(previewRegistry, hostingerPreviews);

Object.assign(previewRegistry, framerScreenPreviews);

Object.assign(previewRegistry, dudaPreviews);

Object.assign(previewRegistry, framerRemainingPreviews);
