---
component: "Freddy AI settings atomic component"
ui_category: "AI configuration > atomic"
source_product: "Freshsales"
parent_workflow: "Freddy AI settings"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent atomic-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Freddy AI settings atomic component

## Evidence boundary

- **OBSERVED:** Small reusable controls, labels, rows, cards and inputs used by the workflow.
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

- **RECONSTRUCTION:** Independent atomic-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- AI configuration workflow pattern for atomic-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
