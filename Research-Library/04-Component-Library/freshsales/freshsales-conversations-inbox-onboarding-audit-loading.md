---
component: "Conversations inbox onboarding loading component"
ui_category: "Channels > loading"
source_product: "Freshsales"
parent_workflow: "Conversations inbox onboarding"
last_verified: "2026-10-08"
evidence_state: "reconstructed"
status: "partial"
summary: "Independent loading-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Conversations inbox onboarding loading component

## Evidence boundary

- **RECONSTRUCTION:** Loading presentation isolated from the completed workflow.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **RECONSTRUCTION:** Inbox navigation shell
- **RECONSTRUCTION:** Connect your Inbox heading
- **RECONSTRUCTION:** Email-provider chooser cards

## User actions

- **BOUNDARY:** Inspect provider options
- **BOUNDARY:** Keep account connection unstarted
- **BOUNDARY:** Preserve the onboarding state

## Network and API

- **OBSERVED:** GET /crm/sales/conversations/awaiting_response -> 200. Request: none. Response: HTML document. Trigger: Initial navigation.
- **OBSERVED:** GET /crm/sales/conversations?{query} -> 200. Request: none. Response: conversations[], meta.is_last_page. Trigger: Load conversation state.

## Registered fixture

- **RECONSTRUCTION:** Independent loading-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Channels workflow pattern for loading-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
