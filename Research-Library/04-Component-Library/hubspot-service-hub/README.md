# HubSpot Service Hub reference for Centilio Care

**OBSERVED · 2026-10-05:** Authenticated inspection of the shared HubSpot application shell, notification drawer, the Service navigation group, the empty Inbox, the empty Tickets board, My open tickets and Unassigned tickets. The portal contained no conversations or tickets in these views. The first-run CRM index dialog was visible on Tickets and closed with keyboard Space. The Inbox offered an unconfigured channel setup state.

**OBSERVED:** Global search showed Help Desk and Knowledge Base as Service Hub Professional features in this portal. Those destinations led to upgrade URLs, so their working screens, controls and outcomes are **NOT OBSERVED**. The accessible Inbox is a separate product area and must not be presented as the Professional Help Desk.

**OBSERVED:** Safe interactions expanded the global More > Service menu, Inbox disclosures, Tickets object and add menus, view settings, advanced and quick filters, pipeline selector, automation drawer and notification drawer. Table and board layouts were inspected for Unassigned tickets. Searches, page visits and disclosure actions were read-only. No ticket, conversation, form, channel, automation, filter, setting or subscription was created or changed.

**NOT OBSERVED:** Provider submission, validation, notifications, errors, populated tables, replies, assignments, settings persistence, exports and mobile layouts. A visible affordance does not establish a successful action. The browser screenshots were visually inspected during this session but have not been saved as durable source files, so these records do not claim archived screenshots or a pixel-level design inventory.

## Coverage

| Area | Observed | Needs verification |
| --- | --- | --- |
| Application Layout | Header, left navigation, main content frame, Tickets and Inbox headings | Responsive behavior, keyboard traversal, shell persistence |
| Navigation | Global More > Service group, Inbox view groups, global tool search | Navigation activation for all Service entries, pinned state persistence |
| Feedback | Empty Inbox, empty Tickets board, CRM index introduction, Inbox notices, automation access notice and Notifications zero-unread drawer | Populated notifications, read/trash behavior, loading/error/success states |
| Actions | Inbox Actions menu, Tickets object selector, Add tickets menu and automation drawer | Creation, import, automation and export outcomes |
| Search and Filtering | Sort and owner filters, advanced grouped rules, Priority values, Create date operators, pipeline selector, My open and Unassigned saved views | Applied values, date picker, changed results and persistence |
| Data Display | Empty Tickets board columns, Unassigned board/list layouts and zero counts | Populated cards, records, table rows and drag behavior |
| Account / Settings | Ticket view settings drawer, Inbox Settings and Tickets Settings links | Editable custom view, sharing, cloning, export and settings changes |

Eleven canonical records are in this folder. Eleven presentation mirrors under `UI-Component-Library/src/content/brands/hubspot-service-hub/components/` are documentation only. No fictional interactive preview has been built in this batch. The dated local acceptance ledger is `Internal/scratch-2026-10/hubspot-service-hub/acceptance-ledger.json`.

1. Ours: Continue safe action-level observation of populated or reversible states when they become available.
2. Lead: Decide whether authenticated Professional access is available for Help Desk and Knowledge Base.
3. Ours: Build fictional local previews only after the corresponding source states are documented.
