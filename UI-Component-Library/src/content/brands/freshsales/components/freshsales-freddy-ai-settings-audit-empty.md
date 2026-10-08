---
component: "Freddy AI settings empty component"
ui_category: "AI configuration > empty"
source_product: "Freshsales"
parent_workflow: "Freddy AI settings"
last_verified: "2026-10-08"
evidence_state: "reconstructed"
status: "partial"
summary: "Independent empty-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Freddy AI settings empty component

## Evidence boundary

- **RECONSTRUCTION:** No-content or onboarding presentation isolated from the populated workflow.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **RECONSTRUCTION:** Self Service and AI Copilot groups
- **RECONSTRUCTION:** Feature rows and toggle controls
- **RECONSTRUCTION:** Beta and entitlement labels

## User actions

- **BOUNDARY:** Inspect toggle state
- **BOUNDARY:** Switch fixture state locally
- **BOUNDARY:** Do not enable AI or submit a prompt

## Network and API

- **OBSERVED:** GET /crm/sales/settings/freddy?{query} -> 200. Request: none. Response: feature configuration schema. Trigger: Load Freddy settings.

## Registered fixture

- **RECONSTRUCTION:** Independent empty-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- AI configuration workflow pattern for empty-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
