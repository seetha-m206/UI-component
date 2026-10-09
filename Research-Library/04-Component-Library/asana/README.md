# Asana Component Catalogue

Authenticated research performed on 2026-10-08 and 2026-10-09. Provider screenshots, workspace identity, user identity, email addresses, object IDs and exact live task content are intentionally not retained. Local previews use fictional data and do not contact Asana. The provider pass used one private disposable project and included one AI teammate suggestion analysis that returned no suggestions.

| Component | Evidence boundary |
| --- | --- |
| [Application shell](asana-application-shell.md) | OBSERVED authenticated shell |
| [Global create menu](asana-global-create-menu.md) | OBSERVED open menu, no item activated |
| [Home dashboard](asana-home-dashboard.md) | OBSERVED widget layout |
| [Home My tasks widget](asana-home-my-tasks-widget.md) | OBSERVED tab and empty state |
| [Home timeframe menu](asana-home-timeframe-menu.md) | OBSERVED open menu |
| [Home widget gallery](asana-home-widget-gallery.md) | OBSERVED open drawer, no widget added |
| [My tasks list](asana-my-tasks-list.md) | OBSERVED grouped table |
| [My tasks view controls](asana-my-tasks-view-controls.md) | OBSERVED filter, sort, group and options panels |
| [Projects directory](asana-projects-directory.md) | OBSERVED directory and templates |
| [Projects filter popover](asana-projects-filter-popover.md) | OBSERVED owner filter, identity omitted |
| [Inbox activity](asana-inbox-activity.md) | OBSERVED activity view |
| [Portfolios preview](asana-portfolios-preview.md) | OBSERVED provider-presented example, not account data |
| [Project board](asana-project-board.md) | OBSERVED populated board structure |
| [Project view tabs](asana-project-view-tabs.md) | OBSERVED available project views |
| [Board toolbar](asana-board-toolbar.md) | OBSERVED toolbar controls, no selection applied |
| [Board task card](asana-board-task-card.md) | OBSERVED card anatomy, no task changed |
| [Default-view onboarding](asana-default-view-onboarding.md) | OBSERVED modal, Continue not activated |
| [AI Teammates hub](asana-ai-teammates-hub.md) | OBSERVED tabs and empty states, no AI run |
| [Workflow library](asana-workflow-library.md) | OBSERVED seven organization workflow hubs |
| [Strategy goals](asana-strategy-goals.md) | OBSERVED provider-presented example |
| [Strategy reporting](asana-strategy-reporting.md) | OBSERVED provider-presented dashboard example |
| [Strategy resourcing](asana-strategy-resourcing.md) | OBSERVED provider-presented capacity example |
| [Knowledge meetings](asana-knowledge-meetings.md) | OBSERVED coming-soon screen |
| [Knowledge pages](asana-knowledge-pages.md) | OBSERVED empty introduction screen |
| [People directory](asana-people-directory.md) | OBSERVED profile and teams, identity omitted |
| [Project overview](asana-project-overview.md) | OBSERVED overview modules |
| [Project list](asana-project-list.md) | OBSERVED grouped treegrid |
| [Project timeline](asana-project-timeline.md) | OBSERVED dated timeline |
| [Project dashboard](asana-project-dashboard.md) | OBSERVED KPIs and chart widgets |
| [Project calendar](asana-project-calendar.md) | OBSERVED month grid and dated tasks |
| [Dash assistant](asana-dash-assistant.md) | OBSERVED entry panel, no prompt sent |
| [Help center](asana-help-center.md) | OBSERVED help dialog |
| [Settings dialog](asana-settings-dialog.md) | OBSERVED settings categories, values unchanged |
| [Project actions menu](asana-project-actions-menu.md) | OBSERVED menu only |
| [Project customize panel](asana-project-customize-panel.md) | OBSERVED feature categories only |
| [New project flow](asana-new-project-flow.md) | OBSERVED disposable private-project creation |
| [Project view picker](asana-project-view-picker.md) | OBSERVED thirteen selectable views |
| [Task lifecycle](asana-task-lifecycle.md) | OBSERVED disposable create, edit, move and complete workflow |
| [Project Gantt](asana-project-gantt.md) | OBSERVED Gantt controls and task row |
| [Project Workload](asana-project-workload.md) | OBSERVED workload scale and unassigned capacity |
| [Project Timesheets](asana-project-timesheets.md) | OBSERVED entitlement state, no plan change |
| [Project Files](asana-project-files.md) | OBSERVED file controls and page card, no upload |
| [Project Messages](asana-project-messages.md) | OBSERVED empty state, no message sent |
| [Project Embed](asana-project-embed.md) | OBSERVED source catalogue, no connection |
| [Project Page](asana-project-page.md) | OBSERVED disposable title, body and autosave |
| [Project custom field](asana-project-custom-field.md) | OBSERVED project-only field creation |
| [Project form builder](asana-project-form-builder.md) | OBSERVED unpublished organization-only draft |
| [Project automation builder](asana-project-automation-builder.md) | OBSERVED blank draft builder, no publication |
| [Project Emails](asana-project-emails.md) | OBSERVED task-intake settings, address omitted |
| [Project Apps catalogue](asana-project-apps-catalogue.md) | OBSERVED categories and representative cards, no connection |
| [Project task types](asana-project-task-types.md) | OBSERVED default types and Create new entry |
| [Project Bundles](asana-project-bundles.md) | OBSERVED entitlement state, no sales contact |
| [Project status templates](asana-project-status-templates.md) | OBSERVED creation and library choices |
| [AI teammate suggestion result](asana-ai-teammate-suggestion-result.md) | OBSERVED provider analysis returned no suggestions |
| [Project settings](asana-project-settings.md) | OBSERVED details, dependencies, scheduling and notifications |
| [Project permissions](asana-project-permissions.md) | OBSERVED enterprise-gated controls |
| [Project appearance picker](asana-project-appearance-picker.md) | OBSERVED color, icon and upload tabs |
| [Project duplicate and template dialogs](asana-project-duplicate-template-dialogs.md) | OBSERVED reuse options, no object created |
| [Project portfolio assignment](asana-project-portfolio-assignment.md) | OBSERVED empty selection dialog |
| [Project import, export and sync](asana-project-import-export-sync.md) | OBSERVED formats and destinations, no transfer |
| [Project status update](asana-project-status-update.md) | OBSERVED composer, no post or recipients |
| [Project sharing](asana-project-sharing.md) | OBSERVED private membership controls, identity omitted |
| [Project tab catalogue](asana-project-tab-catalogue.md) | OBSERVED popular and other tab choices |
| [Project page actions](asana-project-page-actions.md) | OBSERVED menu, destructive actions untouched |
| [Global More menu](asana-global-more-menu.md) | OBSERVED StackAI handoff and navigation customization entry |

## Boundary

- **OBSERVED:** Visible provider UI plus bounded writes inside one clearly named private disposable research project.
- **RECONSTRUCTION:** Fictional local previews under `src/previews/asana-shared/`.
- **NOT OBSERVED:** Real-work mutation, invitations, external sharing, billing, exports, account integrations, automation publication, successful AI suggestion or teammate execution, permission changes and external delivery.
