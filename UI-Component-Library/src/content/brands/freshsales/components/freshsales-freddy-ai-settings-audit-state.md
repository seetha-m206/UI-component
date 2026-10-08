---
component: "Freddy AI settings state component"
ui_category: "AI configuration > state"
source_product: "Freshsales"
parent_workflow: "Freddy AI settings"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent state-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Freddy AI settings state component

## Evidence boundary

- **OBSERVED:** Selected, disabled, expanded and default visual states.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **OBSERVED:** Self Service and AI Copilot groups
- **OBSERVED:** Feature rows and toggle controls
- **OBSERVED:** Beta and entitlement labels

## User actions

- **OBSERVED:** Inspect toggle state
- **OBSERVED:** Switch fixture state locally
- **OBSERVED:** Do not enable AI or submit a prompt

## Network and API

- **OBSERVED:** GET /crm/sales/settings/freddy?{query} -> 200. Request: none. Response: feature configuration schema. Trigger: Load Freddy settings.

## Registered fixture

- **RECONSTRUCTION:** Independent state-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- AI configuration workflow pattern for state-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
