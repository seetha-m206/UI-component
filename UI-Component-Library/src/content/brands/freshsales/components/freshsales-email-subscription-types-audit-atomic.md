---
component: "Email subscription types atomic component"
ui_category: "Marketing compliance > atomic"
source_product: "Freshsales"
parent_workflow: "Email subscription types"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent atomic-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Email subscription types atomic component

## Evidence boundary

- **OBSERVED:** Small reusable controls, labels, rows, cards and inputs used by the workflow.
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

- **RECONSTRUCTION:** Independent atomic-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Marketing compliance workflow pattern for atomic-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
