---
component: "Conversation automations settings screen component"
ui_category: "Automation > screen"
source_product: "Freshsales"
parent_workflow: "Conversation automations settings"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent screen-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Conversation automations settings screen component

## Evidence boundary

- **OBSERVED:** Screen-level composition, navigation regions and workflow layout.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **OBSERVED:** Conversation automation navigation
- **OBSERVED:** Rule list or onboarding region
- **OBSERVED:** Create automation boundary

## User actions

- **OBSERVED:** Inspect automation categories
- **OBSERVED:** Select a local card
- **OBSERVED:** Do not activate messaging rules

## Network and API

- **OBSERVED:** GET /crm/sales/settings/conversation_automations?{query} -> 200. Request: none. Response: conversation automation configuration. Trigger: Load conversation automations.

## Registered fixture

- **RECONSTRUCTION:** Independent screen-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Automation workflow pattern for screen-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
