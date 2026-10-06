# Zoho Desk component extraction

**60 partial screen-level and action-level component records across the authenticated passes, 2026-10-06.**

The inspected product was authenticated Zoho Desk on `desk.zoho.in`. Ravi asked to continue after authentication. The passes cover Tickets, Knowledge Base, Community, Customers, Analytics, Activities, queues, notifications, Contracts, Social, Chat, Instant Messaging, Team Feeds, Tags and Scheduled Replies.

Each record separates **OBSERVED**, **RECONSTRUCTION**, **NOT OBSERVED** and **NEEDS VERIFICATION**. `status: partial` reflects unexercised provider behavior. All 60 records now have interactive React previews backed by fictional local data. The previews reproduce documented states without claiming provider outcomes.

## Evidence and privacy

Private source screenshots and hashes are under `Internal/scratch-2026-10/zoho-desk/` at the repository root. `provider-observation.json` maps accepted receipts to records. Incorrectly targeted or incomplete captures are explicitly excluded. Provider screenshots and account data are not copied into the public catalogue.

Canonical records mirror into `UI-Component-Library/src/content/brands/zoho-desk/components/`. The catalogue discovers these Markdown files automatically. Fictional local states are in [fictional-fixtures.json](fictional-fixtures.json).

No create, submit, save, send, delete, upload, purchase or settings action was executed. No commit, push or deployment was performed. Passive provider read receipts and telemetry were not audited. Source data must not be reused as fixture content.

## Component index

| Component | Category | Evidence |
|---|---|---|
| [Zoho Desk Application Shell](zoho-desk-application-shell.md) | Application Layout > Application shell | OBSERVED structure, partial behavior |
| [Zoho Desk Ticket Sidebar](zoho-desk-ticket-sidebar.md) | Application Layout > Left sidebar | OBSERVED structure, partial behavior |
| [Zoho Desk Global Header](zoho-desk-global-header.md) | Application Layout > Header | OBSERVED structure, partial behavior |
| [Zoho Desk Main Content Area](zoho-desk-main-content-area.md) | Application Layout > Main content area | OBSERVED structure, partial behavior |
| [Zoho Desk Ticket Page Header](zoho-desk-ticket-page-header.md) | Application Layout > Page header | OBSERVED structure, partial behavior |
| [Zoho Desk Ticket List Row](zoho-desk-ticket-list-row.md) | Enterprise Tables > Entries list | OBSERVED structure, partial behavior |
| [Zoho Desk Ticket View Picker](zoho-desk-ticket-view-picker.md) | Search and Filtering > Saved views | OBSERVED structure, partial behavior |
| [Zoho Desk Ticket Filter Panel](zoho-desk-ticket-filter-panel.md) | Search and Filtering > Filter panel | OBSERVED structure, partial behavior |
| [Zoho Desk Status Filter](zoho-desk-status-filter.md) | Search and Filtering > Categorical filter | OBSERVED structure, partial behavior |
| [Zoho Desk Date Filter Presets](zoho-desk-date-filter-presets.md) | Search and Filtering > Date presets | OBSERVED structure, partial behavior |
| [Zoho Desk Saved Filter Empty State](zoho-desk-saved-filter-empty.md) | Feedback > Empty state | OBSERVED structure, partial behavior |
| [Zoho Desk Ticket Layout Menu](zoho-desk-ticket-layout-menu.md) | Navigation > View mode selector | OBSERVED structure, partial behavior |
| [Zoho Desk Ticket Sort Menu](zoho-desk-ticket-sort-menu.md) | Search and Filtering > Sort control | OBSERVED structure, partial behavior |
| [Zoho Desk Quick Action Menu](zoho-desk-quick-action-menu.md) | Actions > Action menu | OBSERVED structure, partial behavior |
| [Zoho Desk Global Search Overlay](zoho-desk-global-search.md) | Search and Filtering > Global search | OBSERVED structure, partial behavior |
| [Zoho Desk Ticket Form](zoho-desk-ticket-form.md) | Application Layout > Form shell | OBSERVED structure, partial behavior |
| [Zoho Desk Template Picker Empty State](zoho-desk-template-picker-empty.md) | Feedback > Empty state | OBSERVED structure, partial behavior |
| [Zoho Desk Description Editor](zoho-desk-description-editor.md) | Content Creation > Rich text editor | OBSERVED structure, partial behavior |
| [Zoho Desk Editor Insert Menu](zoho-desk-editor-insert-menu.md) | Content Creation > Insert menu | OBSERVED structure, partial behavior |
| [Zoho Desk Priority Select](zoho-desk-priority-select.md) | Forms > Dropdown | OBSERVED structure, partial behavior |
| [Zoho Desk Channel Select](zoho-desk-channel-select.md) | Forms > Searchable dropdown | OBSERVED structure, partial behavior |
| [Zoho Desk Due Date and Time Picker](zoho-desk-due-date-picker.md) | Forms > Date picker | OBSERVED structure, partial behavior |
| [Zoho Desk Attachment Upload Surface](zoho-desk-attachment-upload.md) | Forms > File upload | OBSERVED structure, partial behavior |
| [Zoho Desk Contact Context Empty State](zoho-desk-contact-context-empty.md) | Feedback > Contextual empty state | OBSERVED structure, partial behavior |
| [Zoho Desk Contact Picker](zoho-desk-contact-picker.md) | Forms > Record selection dialog | OBSERVED structure, partial behavior |
| [Zoho Desk Form Action Footer](zoho-desk-form-action-footer.md) | Actions > Action bar | OBSERVED structure, partial behavior |
| [Zoho Desk Ticket Detail Workspace](zoho-desk-ticket-detail-workspace.md) | Application Layout > Split-pane shell | OBSERVED structure, partial behavior |
| [Zoho Desk Ticket Properties Panel](zoho-desk-ticket-properties-panel.md) | Application Layout > Context panel | OBSERVED structure, partial behavior |
| [Zoho Desk Ticket Detail Tabs](zoho-desk-ticket-detail-tabs.md) | Navigation > Tabs | OBSERVED structure, partial behavior |
| [Zoho Desk Reply Action Menu](zoho-desk-reply-action-menu.md) | Actions > Split button | OBSERVED structure, partial behavior |
| [Zoho Desk Ticket Action Menu](zoho-desk-ticket-action-menu.md) | Actions > Record action menu | OBSERVED structure, partial behavior |
| [Zoho Desk Ticket Attachment Empty State](zoho-desk-ticket-attachment-empty.md) | Feedback > Empty state | OBSERVED structure, partial behavior |
| [Zoho Desk Knowledge Base Onboarding](zoho-desk-knowledge-base-onboarding.md) | Content Creation > Knowledge base onboarding | OBSERVED empty onboarding, partial behavior |
| [Zoho Desk Community Topic List](zoho-desk-community-topic-list.md) | Community > Topic list | OBSERVED populated list, provider values redacted |
| [Zoho Desk Customer Contact List](zoho-desk-customer-contact-list.md) | Customer Management > Contact list | OBSERVED populated list, provider values redacted |
| [Zoho Desk Analytics Overview Dashboard](zoho-desk-analytics-overview-dashboard.md) | Analytics > Support overview | OBSERVED point-in-time dashboard, fictional metrics |
| [Zoho Desk Activities Empty State](zoho-desk-activities-empty-state.md) | Feedback > Empty state | OBSERVED empty state, creation unexecuted |
| [Zoho Desk Ticket Queue Empty States](zoho-desk-ticket-queue-empty-states.md) | Feedback > Queue empty states | OBSERVED Agent and Team queue states |
| [Zoho Desk Notifications Drawer](zoho-desk-notifications-drawer.md) | Notifications > Notification centre | OBSERVED populated drawer, provider values redacted |
| [Zoho Desk Contracts Empty State](zoho-desk-contracts-empty-state.md) | Customer Management > Contracts | OBSERVED empty state, creation unexecuted |
| [Zoho Desk Social Onboarding](zoho-desk-social-onboarding.md) | Channels > Social onboarding | OBSERVED onboarding, integration unexecuted |
| [Zoho Desk Chat Onboarding](zoho-desk-chat-onboarding.md) | Channels > Live chat onboarding | OBSERVED onboarding and credential notice |
| [Zoho Desk Instant Messaging Onboarding](zoho-desk-im-onboarding.md) | Channels > Messaging onboarding | OBSERVED onboarding, channel setup unexecuted |
| [Zoho Desk Team Feeds](zoho-desk-team-feeds.md) | Collaboration > Activity feed | OBSERVED populated feed, provider values redacted |
| [Zoho Desk Tagged Tickets Empty State](zoho-desk-tagged-tickets-empty.md) | Search and Filtering > Tag view | OBSERVED empty tag view, provider tag redacted |
| [Zoho Desk Scheduled Replies Empty State](zoho-desk-scheduled-replies-empty.md) | Communication > Scheduled replies | OBSERVED onboarding, enablement unexecuted |
| [Zoho Desk Contracts List Toolbar](zoho-desk-contracts-list-toolbar.md) | Enterprise Tables > List toolbar | OBSERVED controls, outcomes unexecuted |
| [Zoho Desk Contract Create Action](zoho-desk-contract-create-action.md) | Actions > Primary creation action | OBSERVED action, creation unexecuted |
| [Zoho Desk Social Connect Action](zoho-desk-social-connect-action.md) | Actions > Integration activation | OBSERVED action, connection unexecuted |
| [Zoho Desk Social Workflow Map](zoho-desk-social-workflow-map.md) | Content Display > Process map | OBSERVED static onboarding diagram |
| [Zoho Desk Chat Enable Action](zoho-desk-chat-enable-action.md) | Actions > Integration activation | OBSERVED action, enablement unexecuted |
| [Zoho Desk Chat Credential Notice](zoho-desk-chat-credential-notice.md) | Feedback > Integration notice | OBSERVED authorization warning |
| [Zoho Desk Messaging Channel List](zoho-desk-im-channel-list.md) | Channels > Channel inventory | OBSERVED supported channel labels |
| [Zoho Desk Messaging Onboarding Actions](zoho-desk-im-onboarding-actions.md) | Actions > Onboarding actions | OBSERVED actions, outcomes unexecuted |
| [Zoho Desk Team Feed Tabs](zoho-desk-team-feed-tabs.md) | Navigation > Feed tabs | OBSERVED tab labels, filtering unexecuted |
| [Zoho Desk Team Feed Composer](zoho-desk-team-feed-composer.md) | Collaboration > Post composer | OBSERVED composer, posting unexecuted |
| [Zoho Desk Team Feed Ticket Actions](zoho-desk-team-feed-ticket-actions.md) | Actions > Inline record actions | OBSERVED Reply, Comment and Close Ticket actions |
| [Zoho Desk Tag View Toolbar](zoho-desk-tag-view-toolbar.md) | Search and Filtering > Tag toolbar | OBSERVED controls, edits unexecuted |
| [Zoho Desk Scheduled Replies Toolbar](zoho-desk-scheduled-replies-toolbar.md) | Enterprise Tables > List toolbar | OBSERVED filter and sort controls |
| [Zoho Desk Scheduled Replies Enable Action](zoho-desk-scheduled-replies-enable-action.md) | Actions > Feature activation | OBSERVED action, enablement unexecuted |

## Coverage against the canonical checklist

| Category | Captured in this pass | Still unobserved or unverified |
|---|---|---|
| Application Layout | Shell, sidebar, header, main content, page header, form and detail panes | Responsive behavior, resizing and saved preferences |
| Navigation | Module links, grouped view chooser, detail tabs, form breadcrumb | Pagination, steps, keyboard navigation, full view inventory |
| Actions | Split add/reply controls, menu, form footer, record overflow, feed actions and guarded channel activation | Outcomes, destructive confirmations, bulk actions and integrations |
| Forms | Blank text fields, dropdowns, due-date picker, upload surface, record picker | Required-field validation, checkbox/switch/radio flows, uploads, persistence |
| Data Display | List row, avatar, context cards, grouped properties, community and contact rows, KPI cards and a chart | Drill-down, refresh semantics and responsive states |
| Feedback | Empty states, popovers, contact overlay, transient loading, and empty Activities and queue screens | Toasts, alerts, confirmation dialogs and errors |
| Search and Filtering | Global search scope, filter sidebar, presets and sorting | Actual search/filter results, chips, saved filters and persistence |
| Enterprise Tables | Classic entries list and layout menu | Actual Table View, pagination and row selection |
| Notifications | Populated drawer, tabs, read action and settings entry | Read transitions, settings, delivery and deep links |
| Account/Settings | Setup entry visible only | Settings layout and configuration require the production-org sandbox guard |

No missing item is claimed to be absent from Zoho Desk. It was simply outside this bounded observation pass.

## Remaining screen families

1. Ours: Keyboard, focus, contrast and responsive accessibility checks remain a separate pass.
2. Ravi or lead: Setup inspection requires the production-org sandbox guard.
3. Ravi or lead: Any future request to exercise mutation-dependent behavior requires a separately approved safe test scope. Such behavior remains NOT OBSERVED here.
