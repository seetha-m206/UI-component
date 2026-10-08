---
component: "Freshdesk Omni Audit Log"
ui_category: "Administration > Audit Log"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed the audit log read-only with consequential actions left untouched."
---

# Freshdesk Omni Audit Log

## Location

- **OBSERVED:** Admin → Account → Audit Log.

## Structure

- **OBSERVED:** A populated table exposed Export, Filters and columns for actor, event, changed object and details across created, updated and published events.
- **RECONSTRUCTION:** The local fixture contains fictional actors, entities and details, and excludes provider IP addresses, identities, account data and timestamps.

## Actions

- **NOT OBSERVED:** No actor, entity, row, filter or export was opened.

## Technical Data

- **OBSERVED / DOM:** Event types, object categories, detail summaries and toolbar controls were exposed.
- **NEEDS VERIFICATION:** Filtering, pagination, retention, export contents, IP handling, detail views and permissions.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni audit log, 2026-10-08.
