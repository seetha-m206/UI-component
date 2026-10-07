---
component: "Hostinger Profile Settings Navigation"
ui_category: "Navigation > Settings Sidebar"
source_product: "Hostinger Website Builder"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Hostinger Profile Settings Navigation

## Location

- **OBSERVED:** Authenticated `/profile/*` routes.

## Screenshot

- **NEEDS VERIFICATION:** The secondary navigation was visually inspected in session, but no durable provider screenshot was exported.

## Structure

- **OBSERVED:** Profile routes retained the global shell and breadcrumbs while adding a secondary navigation for account information, sharing, security, activity, notifications, and AI memory.

## Actions

- **OBSERVED:** Navigation among these routes updated the workspace and preserved the profile context.
- **NEEDS VERIFICATION:** Responsive collapse, unsaved-change guards, authorization filtering, focus movement, and deep-link recovery.

## Technical Data

- **OBSERVED / DOM:** Profile pages exposed breadcrumb semantics, route headings, and labelled navigation destinations.
- **NEEDS VERIFICATION:** Router implementation, transition handling, permission checks, and telemetry.

## Reconstruction Guidance

- **RECONSTRUCTION:** Use breadcrumbs for location and a persistent secondary menu for sibling settings pages.

## Sources

- **OBSERVED:** Authenticated Hostinger profile routes and `Internal/scratch-2026-10/hostinger/provider-observation.json`.
## Preview & Fixtures

- **RECONSTRUCTION:** Registered preview id `hostinger-profile-settings-navigation` uses fictional local data and sends no Hostinger request.
- `memory` — observed or observed-structure starting state.
- `sharing` — observed or observed-structure starting state.
- `notifications` — observed or observed-structure starting state.
- **OBSERVED:** Component-to-provider evidence and state provenance are indexed in `Internal/scratch-2026-10/hostinger/component-evidence-index.json`.
- **NEEDS VERIFICATION:** Fixture rendering proves the local reconstruction only. It does not prove provider-side results, persistence, validation, authorization, or visual pixel fidelity.
