---
component: "Email subscription types action component"
ui_category: "Marketing compliance > action"
source_product: "Freshsales"
parent_workflow: "Email subscription types"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent action-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Email subscription types action component

## Evidence boundary

- **OBSERVED:** Visible action controls and the boundary before consequential provider behavior.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **OBSERVED:** Subscription-type cards
- **OBSERVED:** Status and description rows
- **OBSERVED:** Create and edit boundaries

## User actions

- **OBSERVED:** Inspect subscription types
- **OBSERVED:** Select a local card
- **OBSERVED:** Do not change consent configuration

## Network and API

- **OBSERVED:** GET /crm/marketer/email-types?{query} -> 200. Request: none. Response: email_types[]. Trigger: Load subscription types.

## Registered fixture

- **RECONSTRUCTION:** Independent action-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Marketing compliance workflow pattern for action-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
