---
component: "Contact record detail screen component"
ui_category: "CRM records > screen"
source_product: "Freshsales"
parent_workflow: "Contact record detail"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent screen-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Contact record detail screen component

## Evidence boundary

- **OBSERVED:** Screen-level composition, navigation regions and workflow layout.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **OBSERVED:** Record action bar and section navigation
- **OBSERVED:** Overview, details and activity regions
- **OBSERVED:** Search fields and activity filters

## User actions

- **OBSERVED:** Switch Details and Activities
- **OBSERVED:** Inspect activity outcomes
- **OBSERVED:** Do not email, call or update the record

## Network and API

- **OBSERVED:** GET /crm/sales/contacts/{id}/timeline_feeds?{query} -> 200. Request: none. Response: timeline feeds and meta. Trigger: Select Activities.
- **OBSERVED:** GET /crm/sales/contacts/{id}/activity_counts?{query} -> 200. Request: none. Response: activity counts. Trigger: Load activity filters.

## Registered fixture

- **RECONSTRUCTION:** Independent screen-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- CRM records workflow pattern for screen-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
