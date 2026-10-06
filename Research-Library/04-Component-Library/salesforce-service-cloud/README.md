# Salesforce Service component research

Observed 2026-10-06 in the authenticated Salesforce Lightning Service area of a trial workspace. **Exact edition and full Service Cloud entitlement need verification.** The folder name follows the requested competitor lane.

Four bounded passes capture 117 components. The first 28 cover application layout, Cases, Knowledge, Quick Text, Notifications and Quick Settings. The continuation adds 47 across Messaging Sessions, Analytics, Automation, Contacts, Accounts and global utilities. The screen/action pass adds 25 components and a coverage map for 22 screen and workflow groups. The individual-control pass adds 17 source-bounded controls. All records are source-reviewed and partial. Raw screenshots and DOM remain private. Public images are fictional local reconstructions.

No Salesforce business record, persisted draft, setting, subscription or message was saved or submitted. Blank forms and temporary filter drafts were canceled. No commit, push or deployment was performed.

## Component index

| Component | Category | Provider receipt |
| --- | --- | --- |
| [Application Shell](salesforce-application-shell.md) | Application Layout > App Shell | `cases-baseline` |
| [Product Sidebar](salesforce-sidebar.md) | Application Layout > Sidebar | `cases-baseline` |
| [Global Header](salesforce-global-header.md) | Application Layout > Header | `cases-baseline` |
| [Main Content Area](salesforce-main-content.md) | Application Layout > Main Content Area | `case-filters` |
| [Cases Page Header](salesforce-page-header.md) | Application Layout > Page Header | `cases-baseline` |
| [Service Navigation](salesforce-service-navigation.md) | Navigation > Module Navigation | `cases-baseline` |
| [Trial Banner](salesforce-trial-banner.md) | Onboarding > Trial Banner | `cases-baseline` |
| [Cases Empty Table](salesforce-cases-empty-table.md) | Enterprise Tables > Empty Table | `cases-baseline` |
| [Case View Picker](salesforce-case-view-picker.md) | Search and Filtering > Saved Views | `case-view-picker` |
| [List View Controls](salesforce-list-view-controls.md) | Actions > Overflow Menu | `list-view-controls` |
| [List Display Menu](salesforce-display-menu.md) | Actions > View Switcher | `display-menu` |
| [Case Filter Drawer](salesforce-case-filters.md) | Search and Filtering > Filter Drawer | `case-filters` |
| [New Case Form](salesforce-new-case-form.md) | Forms > Record Modal | `new-case-form` |
| [Case Status Picker](salesforce-case-status-picker.md) | Forms > Dropdown | `case-status-options` |
| [Case Origin Picker](salesforce-case-origin-picker.md) | Forms > Dropdown | `case-origin-options` |
| [Case Priority Picker](salesforce-case-priority-picker.md) | Forms > Dropdown | `case-priority-options` |
| [Contact Lookup](salesforce-contact-lookup.md) | Forms > Relationship Lookup | `contact-lookup` |
| [Case Description Fields](salesforce-case-description.md) | Forms > Text Input and Text Area | `new-case-form` |
| [Case Notification Option](salesforce-case-notification-option.md) | Notifications > Delivery Option | `new-case-form` |
| [Notification Centre](salesforce-notifications.md) | Notifications > Notification Centre | `notifications-empty` |
| [Quick Settings Drawer](salesforce-quick-settings.md) | Account/Settings > Settings Navigation | `quick-settings` |
| [Knowledge Empty List](salesforce-knowledge-list.md) | Enterprise Tables > Article Inventory | `knowledge-list` |
| [New Knowledge Form](salesforce-new-knowledge-form.md) | Content Creation > Article Form | `new-knowledge-form` |
| [Article Visibility Controls](salesforce-article-visibility.md) | Forms > Visibility Controls | `new-knowledge-form` |
| [Quick Text Library](salesforce-quick-text-library.md) | Content Creation > Template Library | `quick-text-list` |
| [Quick Text Composer](salesforce-quick-text-form.md) | Content Creation > Reusable Message Composer | `new-quick-text` |
| [Merge Field Selector](salesforce-merge-field.md) | Content Creation > Merge Field | `quick-text-merge-options` |
| [Channel Transfer Lists](salesforce-channel-transfer.md) | Forms > Dual Listbox | `new-quick-text` |

## Continuation component index

Provider receipts in this table belong to the private `remaining-20261006/provider/` batch.

| Component | Category | Provider receipt |
| --- | --- | --- |
| [Global Search Panel](salesforce-global-search-panel.md) | Search and Filtering > Global Search | `global-search` |
| [Messaging Sessions Inventory](salesforce-messaging-session-list.md) | Enterprise Tables > Empty Table | `messaging-views-loaded` |
| [Messaging View Picker](salesforce-messaging-view-picker.md) | Search and Filtering > Saved Views | `messaging-views-loaded` |
| [Analytics Workspace](salesforce-analytics-workspace.md) | Application Layout > Main Content Area | `analytics-home-loaded` |
| [Analytics For You Cards](salesforce-analytics-recommendations.md) | Analytics/Reporting > Recommendation Cards | `analytics-home-loaded` |
| [My Analytics Recents](salesforce-analytics-recents.md) | Enterprise Tables > Grouped Inventory | `analytics-home-loaded` |
| [Analytics Asset Browser](salesforce-analytics-browser.md) | Enterprise Tables > Asset Inventory | `analytics-browse` |
| [Analytics Creator Filter](salesforce-analytics-creator-filter.md) | Search and Filtering > Owner Filter | `analytics-creator-filter` |
| [Analytics Date Filter](salesforce-analytics-date-filter.md) | Search and Filtering > Date Filter | `analytics-date-filter` |
| [Analytics Create Menu](salesforce-analytics-create-menu.md) | Actions > Create Menu | `analytics-create-menu` |
| [Report Type Chooser](salesforce-report-type-chooser.md) | Forms > Type Selection Dialog | `report-type-chooser` |
| [Analytics Asset Actions](salesforce-analytics-asset-actions.md) | Actions > Overflow Menu | `analytics-report-actions` |
| [Service Analytics Collection](salesforce-service-collection.md) | Analytics/Reporting > Collection Cards | `analytics-service-collection` |
| [Case Report Viewer](salesforce-case-report-viewer.md) | Analytics/Reporting > Report Viewer | `case-report-viewer` |
| [Report Filter Drawer](salesforce-report-filter-drawer.md) | Search and Filtering > Filter Drawer | `case-report-filters` |
| [Service KPI Dashboard](salesforce-service-kpi-dashboard.md) | Analytics/Reporting > Dashboard | `service-kpi-dashboard-loaded` |
| [Expanded Dashboard Widget](salesforce-dashboard-expanded-widget.md) | Analytics/Reporting > Chart Detail Dialog | `dashboard-expanded-widget` |
| [Dashboard Actions](salesforce-dashboard-actions.md) | Actions > Overflow Menu | `dashboard-actions` |
| [Automation Overview](salesforce-automation-overview.md) | Application Layout > Main Content Area | `automation-home` |
| [Flow Inventory](salesforce-flow-inventory.md) | Enterprise Tables > Automation Inventory | `automation-flows` |
| [New Automation Chooser](salesforce-automation-type-chooser.md) | Forms > Type Selection Dialog | `new-automation-chooser` |
| [Triggered Automation Catalogue](salesforce-triggered-automation-catalogue.md) | Search and Filtering > Template Catalogue | `triggered-automation-types` |
| [Integration Connection Inventory](salesforce-integration-inventory.md) | Account/Settings > Integrations | `integrations-catalogue` |
| [Connector Catalogue](salesforce-connector-catalogue.md) | Search and Filtering > Integration Catalogue | `connector-picker` |
| [Flow Interview Monitor](salesforce-flow-monitor.md) | Enterprise Tables > Monitoring Table | `automation-monitor` |
| [Monitor Filter Drawer](salesforce-monitor-filter-drawer.md) | Search and Filtering > Filter Drawer | `automation-monitor-filters` |
| [Action Hub Inventory](salesforce-action-hub-inventory.md) | Enterprise Tables > Action Catalogue | `automation-action-types` |
| [Action Type Filter](salesforce-action-type-filter.md) | Search and Filtering > Type Filter | `automation-action-types` |
| [Action Usage Detail](salesforce-action-usage-detail.md) | Analytics/Reporting > Usage Detail | `automation-action-detail` |
| [Action Parameter Tables](salesforce-action-parameter-tables.md) | Enterprise Tables > Schema Table | `automation-action-parameters` |
| [Contacts Empty Inventory](salesforce-contacts-empty-table.md) | Enterprise Tables > Empty Table | `contacts-list` |
| [New Contact Form](salesforce-new-contact-form.md) | Forms > Record Modal | `new-contact-form-clear` |
| [Contact Salutation Picker](salesforce-contact-salutation-picker.md) | Forms > Dropdown | `contact-salutation` |
| [Contact Mailing Address](salesforce-contact-mailing-address.md) | Forms > Address Group | `contact-address-picker` |
| [Accounts Empty Inventory](salesforce-accounts-empty-table.md) | Enterprise Tables > Empty Table | `accounts-list` |
| [New Account Form](salesforce-new-account-form.md) | Forms > Record Modal | `new-account-form` |
| [Account Type Picker](salesforce-account-type-picker.md) | Forms > Dropdown | `account-type-picker` |
| [Account Address Groups](salesforce-account-address-groups.md) | Forms > Address Group | `new-account-form` |
| [To Do Utility Panel](salesforce-todo-utility-panel.md) | Application Layout > Utility Panel | `todo-panel` |
| [To Do Filter Dialog](salesforce-todo-filter-dialog.md) | Search and Filtering > Filter Dialog | `todo-filter-loaded` |
| [New Task Composer](salesforce-new-task-composer.md) | Forms > Task Composer | `new-task-composer` |
| [Task Due Date Picker](salesforce-task-date-picker.md) | Forms > Date Picker | `task-date-picker` |
| [Object Navigation Menu](salesforce-object-navigation-menu.md) | Navigation > Object Shortcuts | `object-navigation-menu-loaded` |
| [Guidance Center](salesforce-guidance-center.md) | Onboarding > Guidance Panel | `guidance-center` |
| [Help Agent Panel](salesforce-help-agent-panel.md) | Feedback > Help Panel | `help-menu` |
| [Agentforce Enablement Panel](salesforce-agentforce-enable-panel.md) | Onboarding > Feature Enablement | `agentforce-entry` |
| [In-App Guidance Callout](salesforce-in-app-guidance.md) | Onboarding > Walkthrough | `accounts-list` |

## Coverage and remaining work

- **OBSERVED:** All five required application-layout categories, module navigation, list menus, filter drawer, zero-row table, labelled forms, modal cancellation, required markers, defaults, dropdown options, notification empty state, settings navigation, Knowledge list/form and Quick Text library/composer.
- **OBSERVED:** Remaining Service tabs and companion Automation navigation. Messaging list and view picker, populated Analytics asset catalogue, Service collection, zero-result case reports, zero/empty KPI widgets, new-report chooser, flow inventory and new-automation chooser, integration inventory and connector catalogue, monitor and filters, populated Action Hub definitions and parameter tables, Contacts and Accounts blank forms, To Do list/filter/task/calendar, global search, guidance, Help and the untouched Agentforce enablement gate.
- **RECONSTRUCTION:** Local form edits, validation messages, channel transfers, asset and connector filters, tabs, calendar navigation, selection, modal focus management and guarded action feedback. None establishes a provider outcome.
- **NOT OBSERVED:** Populated case detail and reply composer, case assignment or merge, populated messaging conversations, existing flow detail and execution history, report builder and populated case report rows, pagination, file uploads, rich-text formatting, error responses, permission outcomes, provider mobile behavior and saved state.
- **NEEDS VERIFICATION:** Exact Salesforce edition and entitlement. An empty filtered or recently viewed list is not proof that the whole product has no records.
- **Ours:** Continue those surfaces one at a time when safe evidence is available. Keep all provider mutations and publication out of scope.

## Local preview and evidence

Open the catalogue at `http://localhost:3000/salesforce-service-cloud/salesforce-service-kpi-dashboard` while the local dev server is running. Each component has its own catalogue route, source record and fictional screenshot. All 117 screenshots are now verified viewport captures, so long forms continue below the image. Mobile breakpoints are local reconstruction choices, not provider mobile observations.

The acceptance ledger and detailed validation receipts remain in `Internal/scratch-2026-10/salesforce-service-cloud/`. Original first-batch receipts and superseded images are preserved privately. The first 28 public images were recaptured after the continuation audit found unreliable blank full-page pixels. Source-reviewed and partial remain the correct record status because provider persistence and unavailable populated states are unverified.

## Method lesson

Provider UI state can lag immediately after keyboard activation. Read the resulting DOM or wait for a specific observed dialog before capturing. A successful tool call or changed URL alone is insufficient evidence of a fully loaded screen. Preserve visible empty-state and affordance evidence without inferring record-level behavior.

Wait for loading placeholders to settle before reporting a zero-row state. Action Hub first displayed zero, then loaded a populated catalogue. If full-page browser capture produces blank or scaled pixels, use a visually verified viewport capture and state the limitation. Guarded-action notices must appear inside open dialogs.

## Screen and action continuation — 6 October 2026

25 additional components bring the catalogue to 100. Related dropdown states remain within their parent record. Existing full-screen compositions are reused instead of counted twice.

[Screen and action coverage map](../../02-Competitor-Products/customer-support-helpdesk/salesforce-service-screens-and-actions.md) maps the Service workspace and companion Automation area, including the explicit gaps.

| Component | Group |
| --- | --- |
| [List Sharing Settings](salesforce-list-sharing-dialog.md) | Account/Settings > Sharing Dialog |
| [Case Chart Empty Drawer](salesforce-case-chart-drawer.md) | Analytics/Reporting > Chart Drawer |
| [New List Chart Form](salesforce-list-chart-form.md) | Forms > Chart Configuration |
| [Case Filter Criterion Editor](salesforce-case-filter-editor.md) | Search and Filtering > Filter Editor |
| [Unsaved Filter Actions](salesforce-filter-draft-actions.md) | Actions > Draft Toolbar |
| [Filter Logic Editor](salesforce-filter-logic-editor.md) | Search and Filtering > Boolean Logic |
| [Column Text Menu](salesforce-column-text-menu.md) | Actions > Column Menu |
| [Case Toolbar Overflow](salesforce-case-toolbar-overflow.md) | Actions > Overflow Menu |
| [Bulk Selection Error Toast](salesforce-bulk-selection-toast.md) | Feedback > Error Toast |
| [Service Navigation Editor](salesforce-service-navigation-editor.md) | Navigation > Customization Dialog |
| [Navigation Item Catalogue](salesforce-navigation-item-catalogue.md) | Navigation > Item Selection |
| [Analytics Favorites Screen](salesforce-analytics-favorites-screen.md) | Application Layout > Main Content Area |
| [Manage Collections Dialog](salesforce-manage-collections-dialog.md) | Account/Settings > Collection Preferences |
| [New Collection Dialog](salesforce-new-collection-dialog.md) | Forms > Collection Dialog |
| [Collection Color Picker](salesforce-collection-color-picker.md) | Forms > Color Picker |
| [Analytics Bulk Action Guidance](salesforce-analytics-bulk-guidance.md) | Onboarding > Action Guidance |
| [Analytics Keyword Results Screen](salesforce-analytics-keyword-results.md) | Enterprise Tables > Search Results |
| [Add to Collections Dialog](salesforce-add-to-collections-dialog.md) | Forms > Collection Membership |
| [Report Get URL Dialog](salesforce-report-url-dialog.md) | Actions > Share Dialog |
| [Analytics Asset Details Drawer](salesforce-analytics-asset-details.md) | Application Layout > Detail Drawer |
| [Select Fields to Display](salesforce-list-field-display.md) | Forms > Dual Listbox |
| [New List View Dialog](salesforce-new-list-view.md) | Forms > Saved View Dialog |
| [Clone List View Dialog](salesforce-clone-list-view.md) | Forms > Saved View Dialog |
| [Rename List View Dialog](salesforce-rename-list-view.md) | Forms > Saved View Dialog |
| [Profile and Density Popover](salesforce-profile-popover.md) | Account/Settings > Profile Menu |

## Individual control continuation — 6 October 2026

17 independently mountable controls were separated from observed parent compositions. The source states below were inspected without provider writes. Preview interactions use fictional local state.

| Individual component | Parent composition | Private source receipt |
| --- | --- | --- |
| [Chart Type Picker](salesforce-chart-type-picker.md) | [salesforce-list-chart-form](salesforce-list-chart-form.md) | `screens-actions-20261006/provider/list-chart-type-options` |
| [Chart Aggregate Type Picker](salesforce-chart-aggregate-picker.md) | [salesforce-list-chart-form](salesforce-list-chart-form.md) | `screens-actions-20261006/provider/list-chart-aggregate-options` |
| [Chart Grouping Field Picker](salesforce-chart-grouping-picker.md) | [salesforce-list-chart-form](salesforce-list-chart-form.md) | `screens-actions-20261006/provider/list-chart-grouping-options` |
| [Case Filter Field Picker](salesforce-filter-field-picker.md) | [salesforce-case-filter-editor](salesforce-case-filter-editor.md) | `screens-actions-20261006/provider/case-filter-field-options` |
| [Case Filter Operator Picker](salesforce-filter-operator-picker.md) | [salesforce-case-filter-editor](salesforce-case-filter-editor.md) | `screens-actions-20261006/provider/case-filter-operator-options` |
| [Visible Field Transfer Controls](salesforce-visible-field-transfer.md) | [salesforce-list-field-display](salesforce-list-field-display.md) | `screens-actions-20261006/provider/list-field-display-dialog` |
| [Navigation Reorder Item](salesforce-navigation-reorder-item.md) | [salesforce-service-navigation-editor](salesforce-service-navigation-editor.md) | `screens-actions-20261006/provider/service-navigation-editor` |
| [Analytics Asset Type Tabs](salesforce-analytics-type-tabs.md) | [salesforce-analytics-keyword-results](salesforce-analytics-keyword-results.md) | `screens-actions-20261006/provider/analytics-keyword-results` |
| [Analytics Report Result Row](salesforce-analytics-report-row.md) | [salesforce-analytics-keyword-results](salesforce-analytics-keyword-results.md) | `screens-actions-20261006/provider/analytics-keyword-results` |
| [Analytics Bulk Selection Bar](salesforce-analytics-bulk-selector.md) | [salesforce-analytics-keyword-results](salesforce-analytics-keyword-results.md) | `screens-actions-20261006/provider/analytics-keyword-results` |
| [Collection Show and Pin Controls](salesforce-collection-display-toggle.md) | [salesforce-manage-collections-dialog](salesforce-manage-collections-dialog.md) | `screens-actions-20261006/provider/manage-collections-dialog` |
| [Collection Color Swatches](salesforce-collection-color-swatch.md) | [salesforce-collection-color-picker](salesforce-collection-color-picker.md) | `screens-actions-20261006/provider/collection-color-picker` |
| [Report Copy Link Control](salesforce-report-copy-link.md) | [salesforce-report-url-dialog](salesforce-report-url-dialog.md) | `screens-actions-20261006/provider/report-get-url-dialog` |
| [Case Table Sort Header](salesforce-case-sort-header.md) | [salesforce-cases-empty-table](salesforce-cases-empty-table.md) | `provider/cases-baseline` |
| [Case Column Width Handle](salesforce-case-column-resize.md) | [salesforce-cases-empty-table](salesforce-cases-empty-table.md) | `provider/cases-baseline` |
| [Case Select All Checkbox](salesforce-case-select-all.md) | [salesforce-cases-empty-table](salesforce-cases-empty-table.md) | `provider/cases-baseline` |
| [Task Status and Priority Controls](salesforce-task-state-controls.md) | [salesforce-new-task-composer](salesforce-new-task-composer.md) | `remaining-20261006/provider/new-task-composer` |
