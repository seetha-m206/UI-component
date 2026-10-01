# Freshservice reference extraction

Observed October 1, 2026 in the authenticated Freshservice Enterprise trial. This is a separate reference product from Freshdesk.

## Coverage

23 canonical records and mirrored UI records cover onboarding, global navigation, the empty ticket collection, an unsubmitted incident form, the sample dashboard boundary, knowledge-base empty views, report and folder catalogues, administration search and workflow inventory. Interactive previews use local state and explicitly labelled fixtures.

- [[freshservice-application-shell]] — Application Shell
- [[freshservice-sidebar-navigation]] — Sidebar Navigation
- [[freshservice-global-header]] — Global Header
- [[freshservice-trial-banner]] — Trial Banner
- [[freshservice-setup-checklist]] — Quick Setup Checklist
- [[freshservice-feature-accordion]] — Feature Discovery Accordion
- [[freshservice-create-menu]] — Create Action Menu
- [[freshservice-my-work-menu]] — My Work Menu
- [[freshservice-ticket-empty-state]] — Ticket Collection Empty State
- [[freshservice-new-incident-form]] — New Incident Form
- [[freshservice-template-picker]] — Empty Template Picker
- [[freshservice-cc-disclosure]] — Optional Cc Disclosure
- [[freshservice-status-priority-fields]] — Status and Priority Selectors
- [[freshservice-description-editor]] — Description Editor Toolbar
- [[freshservice-related-articles-empty]] — Related Articles Empty Panel
- [[freshservice-attachment-zone]] — Attachment Entry Zone
- [[freshservice-sample-dashboard]] — Sample Dashboard Boundary
- [[freshservice-knowledge-workspace]] — Knowledge Base Workspace
- [[freshservice-article-templates-empty]] — Article Templates Empty State
- [[freshservice-analytics-catalogue]] — Analytics Report Catalogue
- [[freshservice-report-sort-menu]] — Report Sort Menu
- [[freshservice-admin-settings-search]] — Administration Settings Search
- [[freshservice-workflow-inventory]] — Workflow Inventory and Subflows

## Evidence boundary

Provider screenshots and local fixture screenshots are separate and hash-indexed in UI-Component-Library/public/research/freshservice/capture-manifest.json. Native full-page screenshots can include blank overflow. DOM receipts supplement clipped regions. Private workflow inventory receipts contain an account member name and remain in Internal/scratch-2026-10/freshservice. The local author is fictional.

No provider data was created, imported, published or uploaded. No workflow was activated. No setting was saved. The Sample Dashboard was an image, not exercised metric widgets. Report names were curated definitions, not verified report output. Local sort and form behavior do not establish provider contracts.

## Canonical category coverage check

| Category | Observed patterns | Open equivalents |
| --- | --- | --- |
| Application Layout | Shell, sidebar, incident split layout, knowledge and workflow rails | Other module layouts and broad responsive behavior |
| Navigation | Menu launchers, collection navigation, workflow subviews | Actual report pagination and unseen module tabs |
| Actions | Text and icon buttons, Create menu, form footer | Completed actions, destructive controls and bulk changes |
| Forms | Text inputs, comboboxes, Cc disclosure, editor and attachment affordances, inactive workflow switches | Lookup results, real uploads and switch mutation behavior |
| Data Display | Cards, setup progress, sample image and curated report rows | Live metrics, calculations and populated ticket records |
| Feedback | Ticket, article, template, approval, review and subflow empty states | Server errors, confirmation dialogs and durable success |
| Search and Filtering | Admin search result, report sort options | Provider sorting results and wider search behavior |
| Enterprise Tables | Curated report and folder metadata tables | Pagination, row selection and actual report results |
| Notifications | Header entry only | Notification centre contents |
| Account/Settings | Categorized settings catalogue and workflow list | Settings forms, roles and permission differences |

## Validation

The dated verification report and acceptance ledger are in Internal/scratch-2026-10/freshservice. Local preview, source evidence, build and provider runtime observations are tracked separately.

## Pending by owner

1. Ours: Populated ticket details, replies, assignment, provider errors, execution, persistence and full accessibility remain unverified research gaps.
2. Ravi: An existing populated reference workspace is needed if those ticket flows should be inspected. No data creation is implied.
3. SE Ranking lane: Its pre-existing empty propsSchema registry finding remains open.
4. Lead: Freshdesk remains a separate, uninspected reference product.
