# HubSpot Service Hub reference for Centilio Care

**OBSERVED · 2026-10-05:** Authenticated inspection of the shared HubSpot application shell, notification drawer, the Service navigation group, the empty Inbox, the empty Tickets board, My open tickets and Unassigned tickets. The portal contained no conversations or tickets in these views. The first-run CRM index dialog was visible on Tickets and closed with keyboard Space. The Inbox offered an unconfigured channel setup state.

**OBSERVED:** Global search showed Help Desk and Knowledge Base as Service Hub Professional features in this portal. Those destinations led to upgrade URLs, so their working screens, controls and outcomes are **NOT OBSERVED**. The accessible Inbox is a separate product area and must not be presented as the Professional Help Desk.

**OBSERVED:** Safe interactions expanded the global More > Service menu, Inbox disclosures, Tickets object and add menus, view settings, advanced and quick filters, pipeline selector, automation drawer and notification drawer. Table and board layouts were inspected for Unassigned tickets. Searches, page visits and disclosure actions were read-only. No ticket, conversation, form, channel, automation, filter, setting or subscription was created or changed.

**OBSERVED · 2026-10-06:** A second shared-shell pass captured the global Create menu, contextual Help Center, Marketplace menu, Breeze Assistant empty state, Calling upgrade gate and the reversible collapsed Tickets header. The Unassigned Ticket owner quick filter directly exposed value Unassigned with operator “is unknown”. No object creation, support chat, Academy content, marketplace destination, assistant prompt, dictation, call or upgrade action was started.

**OBSERVED · 2026-10-06:** A third reversible-state pass captured the compact saved-view selector, the Manage navigation instructional modal and the untouched New-column status-details panel. The selector exposed search, three pinned views and All views. The navigation modal exposed help controls, a video and a grouping tip. The status panel warned that changes apply across HubSpot and showed untouched fields, 18 colors, disabled Save and Cancel. No view, navigation preference, status name, description, color or sort choice was changed.

**OBSERVED · 2026-10-06:** A settings pass captured All Views, Ticket Object Setup, Pipeline Settings, Record Customization, Preview Customization and Index Customization. The settings contained populated configuration metadata, including four Support Pipeline stages, default record and preview layouts, preview-card choices and account-default pinned views. No object property, association, creation form, automation, pipeline, stage, layout, card, audience assignment or default view was changed.

**OBSERVED · 2026-10-06:** A focused action pass captured the disabled pipeline Delete action, the Open and Closed stage-type disclosure, locked record and preview Default view actions, and the populated Ticket record-page editor. The editor showed its header actions, layout columns, default cards, tab controls, and Set conditional logic and Remove card menu. No option, card, tab, layout or saved setting was changed.

**NOT OBSERVED:** Provider submission, validation, notifications, errors, populated tables, replies, assignments, settings persistence, exports and mobile layouts. A visible affordance does not establish a successful action. The browser screenshots were visually inspected during this session but have not been saved as durable source files, so these records do not claim archived screenshots or a pixel-level design inventory.

## Coverage

| Area | Observed | Needs verification |
| --- | --- | --- |
| Application Layout | Header, left navigation, main content frame, Tickets and Inbox headings | Responsive behavior, keyboard traversal, shell persistence |
| Navigation | Global More > Service group, Inbox view groups, global tool search, Marketplace menu, compact saved-view selector and navigation-management guide | Destination screens, view switching, navigation switching, all Service entries and persistence |
| Feedback | Empty Inbox, empty Tickets board, Help Center, Calling gate, automation access notice and Notifications zero-unread drawer | Support outcomes, eligible-plan calling, populated notifications and error/success states |
| Actions | Global Create, Inbox Actions, Tickets object selector, Add tickets, automation drawer, pipeline and stage disclosures, locked customization actions and record-card actions | Creation, import, assistant execution, automation, deletion, editing and export outcomes |
| AI | Breeze empty state, route-aware ticket suggestions, shortcuts, composer controls and disabled Send | Prompt responses, tools, artifacts, memories, dictation and persistence |
| Search and Filtering | Sort and owner filters, advanced grouped rules, Priority values, Create date operators, pipeline selector, My open and Unassigned saved views | Applied values, date picker, changed results and persistence |
| Data Display | Empty Tickets board columns, Unassigned board/list layouts, zero counts and untouched board-column status details | Populated cards, records, table rows, status saving and drag behavior |
| Account / Settings | Ticket view settings, All Views, Object Setup, Pipeline Settings, Record, Preview and Index Customization, plus the Ticket record-page editor | Preview editor, validation, permissions, save outcomes and settings persistence |

Thirty canonical records are in this folder with thirty presentation mirrors under `UI-Component-Library/src/content/brands/hubspot-service-hub/components/`. All thirty records link to reconstructed previews through the shared `UI-Component-Library/src/previews/hubspot-shared/` implementation.

## Local fixture coverage

**RECONSTRUCTION · 2026-10-06:** The catalogue provides fictional, local-only action states for all thirty records. Shared shell and Tickets fixtures cover view management, object setup, the four-stage Support Pipeline, its observed action disclosures, customization view actions and the Ticket record-page editor.

**RECONSTRUCTION:** Fixture actions change React state only. Create, import, connect-channel, pipeline-change and workflow actions return a visible guard message. They never call HubSpot, reuse account data or present a synthetic provider success state.

**NEEDS VERIFICATION:** Local runtime tests and catalogue rendering verify the reconstruction. They do not promote unexecuted HubSpot outcomes to OBSERVED. Narrow previews intentionally preserve horizontally scrollable board/table content because responsive provider behavior was not observed.

The dated local acceptance ledger is `Internal/scratch-2026-10/hubspot-service-hub/acceptance-ledger.json` and the implementation hashes are recorded in `fixture-inventory.json` beside it.

1. Ours: Continue safe provider observation of populated or reversible states when they become available, then revise fixtures only where new evidence supports it.
2. Lead: Decide whether authenticated Professional access is available for Help Desk and Knowledge Base.
3. Ours: Archive durable provider screenshots only if requested and safe to retain.
