---
component: "Hostinger To-do Notification Panel"
ui_category: "Notifications > Task Panel"
source_product: "Hostinger Website Builder"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Unread task panel with bulk read, item actions, supporting copy, and a primary task action."
---

# Hostinger To-do Notification Panel

## Location

- **OBSERVED:** Global hPanel header on the authenticated Home route.

## Screenshot

- **NEEDS VERIFICATION:** The open panel was visually inspected in session, but no durable provider screenshot was exported.

## Structure

- **OBSERVED:** The header button included an unread count. The panel contained a title, `Mark all as read`, one unread task, item-level more actions, supporting copy, and a primary task action.
- **OBSERVED / CSS SAMPLE:** The panel measured 440 by 226 px with a 24 px radius, light-grey background, and 8 px by 24 px shadow.

## Actions

- **OBSERVED:** The panel opened and closed without changing task state.
- **NEEDS VERIFICATION:** Mark-read behavior, item dismissal, task completion, badge updates, and error states.

## Technical Data

- **OBSERVED / DOM:** The panel rendered as a dialog with buttons for bulk read, item actions, and the task call to action.
- **NEEDS VERIFICATION:** Persistence, notification APIs, read receipts, and analytics.

## Reconstruction Guidance

- **RECONSTRUCTION:** Keep unread state, explanatory copy, and one clear task action together. Do not reuse the observed private task data.

## Sources

- **OBSERVED:** Authenticated Hostinger hPanel and `Internal/scratch-2026-10/hostinger/individual-component-evidence.json`.
## Preview & Fixtures

- **RECONSTRUCTION:** Registered preview id `hostinger-todo-notification-panel` uses fictional local data and sends no Hostinger request.
- `unread` — observed or observed-structure starting state.
- `read` — local-only guard or reconstruction state.
- `closed` — observed or observed-structure starting state.
- **OBSERVED:** Component-to-provider evidence and state provenance are indexed in `Internal/scratch-2026-10/hostinger/component-evidence-index.json`.
- **NEEDS VERIFICATION:** Fixture rendering proves the local reconstruction only. It does not prove provider-side results, persistence, validation, authorization, or visual pixel fidelity.
