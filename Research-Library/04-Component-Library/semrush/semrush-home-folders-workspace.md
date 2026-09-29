---
component: Semrush Home Folders Workspace
ui_category: 'Application Layout > Cross-Product Workspace'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Authenticated Semrush Home workspace with global analysis entry, product navigation, recommendation cards, searchable folders, ownership and tag filters, metric cards, SEO table mode, guarded settings, creation modal, and monitoring affordance.
---

# Component: Semrush Home Folders Workspace

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Product:** Semrush authenticated Home.
- **Observed screen:** Folders workspace at the `/home/` route.
- **Evidence boundary:** The live screen exposed account-specific domains, folder identifiers, campaign identifiers, project metrics, timestamps, and website suggestions. Those values remain session-only. The reconstruction uses fictional `.example` domains and synthetic metrics.

## Structure

Global analyzer → account navigation → product rail → recommended toolkits carousel → Folders title and actions → collapsible search and filter row → folder metric cards or SEO table → per-folder settings → Domains for monitoring → feedback, footer, notifications, and help affordances.

## Actions

| Reusable component | States and controls | Safe interaction tested | Observed result |
|---|---|---|---|
| Global analyzer | Website or keyword combobox and Analyze | Inspected only | Submission and target routing need verification |
| Recommendation strip | Product cards and scroll-right control | Inspected only | Cards link to toolkits and apps |
| Filter visibility | Hide and Show control | Toggled both ways | Search, ownership, tags, and view switch were removed and restored without removing folder content |
| Folder search | Empty, populated, clearable, no-results | Entered a synthetic non-match and cleared | Replaced folders with No results found, explanatory copy, and Clear filters |
| Ownership filter | Collapsed and expanded combobox | Opened and dismissed | Offered Owned by me and Shared with me |
| Tag filter | Collapsed and expanded combobox | Opened and dismissed | Displayed No tags here yet for the observed account state |
| View switch | Folder cards, loading table, settled table | Toggled on and off | Changed the same folder collection from metric cards to a seven-column SEO grid |
| Folder metric card | Identity, AI Visibility, Mentions, Site Health, Visibility, Organic Traffic, Organic Keywords, Backlinks, and optional Local metrics | Inspected only | Each available metric exposed a detail link or setup state |
| SEO table | Folder, Site Health, Visibility, Toxic Domains, Ideas to Do, Backlink Prospects, Organic Sessions, Settings | Toggled into view | Displayed a transient loading state before settled values and Set up actions |
| Folder settings | Collapsed and expanded menu | Opened and dismissed | Exposed Share, Pin, Tags, Settings, and Delete |
| Create Folder | Closed, modal, website suggestions | Opened website choices, then cancelled | Exposed Website, Add a competitor, Name, Share once created, Create, Cancel, and close |
| Domains for monitoring | Collapsed card and Open | Inspected only | Destination and resulting state need verification |

## Behavior & States

- Search filters the folder collection immediately and adds a clear-input control.
- No-results feedback remains inside the Folders surface and offers one-step recovery.
- Ownership and Tags use separate comboboxes. The observed Tags list was empty.
- The filter row can be collapsed independently of folder content.
- Card view combines cross-product performance metrics for each folder.
- Table view is explicitly labeled SEO only and uses a transient loading state before rendering seven SEO columns.
- Folder settings place collaborative, organizational, configuration, and destructive actions in one menu.
- Create Folder requires a Website selection, offers a Name field, and includes an optional share-after-creation checkbox.
- Cancelling the modal created no folder.
- The reconstruction keeps all data fictional and all risky actions disabled or locally guarded.

### State fixtures

| Fixture | Purpose | Evidence status |
|---|---|---|
| Folder cards | Default recommendations, filters, cross-product metrics, and monitoring card | Observed with synthetic values |
| Search empty | Synthetic non-match, explanation, and Clear filters | Observed |
| Ownership menu | Owned by me and Shared with me options | Observed |
| No tags | Empty tag popover | Observed |
| Table loading | Transient loading cells after enabling SEO table mode | Observed |
| SEO table | Seven-column settled grid with setup states | Observed |
| Folder settings | Share, Pin, Tags, Settings, and Delete menu | Observed, actions not executed |
| Create folder | Website selector, name, share checkbox, Create, Cancel, and close | Observed, creation not submitted |
| Filters hidden | Folder content with the control row collapsed | Observed |
| Disabled | Non-interactive design-system override | Synthetic preview state |

## Rules & Validation

- Never copy live domains, folder ids, campaign ids, project ids, metrics, timestamps, or suggestion values into fixtures.
- Keep Share, Pin, Settings changes, Delete, Create, Setup, Analyze, project navigation, and metric navigation guarded until their contracts and permissions are verified.
- Preserve the same folder identity and metric meaning across card and table representations.
- Keep loading distinct from missing, zero, and Set up states.
- Do not label unavailable integrations as zero.
- Give every menu, switch, filter, folder, and recovery control a descriptive accessible name.
- Keep Delete visually and semantically distinct from read-only menu actions.
- Treat Share once created as an external access change that requires explicit authorization.

## Technical Data

- **OBSERVED:** The authenticated screen is titled Semrush Folders: Take control of your data.
- **OBSERVED:** The product rail links to Home, SEO, AI, Traffic and Market, Local, Content, Ad, AI PR, Social, Reports, and Apps.
- **OBSERVED:** The filter surface exposed one text field, an unlabeled ownership combobox, a Tags combobox, and a switch named Table view (SEO only).
- **OBSERVED:** The ownership options were Owned by me and Shared with me.
- **OBSERVED:** The Tags popover displayed No tags here yet.
- **OBSERVED:** Search added a Clear control and produced No results found, Try to modify your search to view results, and Clear filters.
- **OBSERVED:** The Create Folder control had a 6 px computed border radius and 14 px computed font.
- **OBSERVED:** The table is a `DIV` exposed as `role=grid`, with CSS Grid display and a 12 px computed font.
- **OBSERVED:** Seven named table headers were Folder, Site Health, Visibility, Toxic Domains, Ideas to Do, Backlink Prospects, and Organic Sessions.
- **OBSERVED:** Switching to table mode first exposed Loading cells, then Set up controls for unconfigured tools.
- **OBSERVED:** The settings menu exposed Share, Pin, Tags, Settings, and Delete.
- **OBSERVED:** The Create folder dialog exposed a Website combobox, website suggestions, Name textbox, Share once created checkbox, Create, Cancel, and Close.
- **NOT OBSERVED:** Analyze submission, recommendation navigation, Share, folder creation, competitor addition, share-after-create, Pin, Tags modification, Settings modification, Delete, Set up actions, domain monitoring, folder navigation, metric navigation, feedback submission, invitations, notifications, and help-panel behavior.
- **NOT OBSERVED:** Create validation, duplicate handling, folder limits, confirmation dialogs, permission enforcement, request payloads, server errors, persistence, and network requests.
- **INFERENCE:** Card and table modes are two representations of the same folder dataset because switching retained the same folder identities and shared metrics.
- **RECOMMENDATION:** Centilio Seek should use this workspace pattern to summarize multi-provider visibility, health, traffic, keywords, links, and setup state while separating viewing from collaboration and destructive controls.

## Accessibility

- The live product navigation is represented through link lists and a menu bar.
- Ownership and Tags expose expanded-state combobox semantics.
- The view control exposes switch semantics and its current boolean state.
- Table mode exposes grid, row, gridcell, and columnheader semantics.
- Search empty state includes readable explanation and a keyboard-operable recovery action.
- The Create folder surface is a named modal dialog with labeled Website and Name fields.
- The live ownership combobox lacked a useful accessible name in the captured tree. A reusable implementation should label it explicitly.
- Settings and filter menus still need keyboard-only Escape, focus return, and focus-order verification.
- Metric changes and warning states must not rely on color alone.

## Cross-Component Pattern Note

The global navigation is broader than [[semrush-ai-visibility-shell]] because it spans the entire Semrush product suite. Its folder-level Site Health links lead into [[semrush-site-audit-projects]] and [[semrush-site-audit-issue-detail]]. Filter and grid behaviors complement [[semrush-report-filter-controls]].

## Competitor Comparisons

| Product | Comparable pattern | Strength | Open question |
|---|---|---|---|
| Semrush | Cross-product Folders workspace | Gives one account-level view of AI, SEO, traffic, keyword, backlink, local, and setup status | Permissions, destructive confirmations, folder limits, and responsive behavior remain unverified |
| Centilio Seek | Proposed multi-site search intelligence workspace | Can unify provider evidence and action readiness while keeping source and verification state explicit | Final providers, quotas, ownership, collaboration, and authorization rules remain open |

## Best Observed Approach

Use a single cross-product workspace that can switch between approachable metric cards and a dense SEO grid. Keep search and filters reversible, distinguish loading from not configured, and require a separate permissioned step for sharing, creation, configuration, or deletion.

## Sources

- **OBSERVATION:** Authenticated Semrush Home Folders review, 2026-09-29.
- **OBSERVATION:** Accessibility and DOM captures for global navigation, recommendation cards, search empty state, ownership and tag filters, view switch, card metrics, grid headers, loading transition, settings menu, and creation modal.
- **OBSERVATION:** Screenshot of the default Folders card workspace.
- **RECONSTRUCTION:** Local React preview uses fictional projects and local-only interactions. No live analysis, share, creation, pin, tag, setting, delete, setup, navigation, feedback, invitation, or monitoring action was submitted.
