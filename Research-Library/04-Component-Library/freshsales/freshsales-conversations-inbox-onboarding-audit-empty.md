---
component: "Conversations inbox onboarding empty component"
ui_category: "Channels > empty"
source_product: "Freshsales"
parent_workflow: "Conversations inbox onboarding"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent empty-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Conversations inbox onboarding empty component

## Evidence boundary

- **OBSERVED:** No-content or onboarding presentation isolated from the populated workflow.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **OBSERVED:** Inbox navigation shell
- **OBSERVED:** Connect your Inbox heading
- **OBSERVED:** Email-provider chooser cards

## User actions

- **OBSERVED:** Inspect provider options
- **OBSERVED:** Keep account connection unstarted
- **OBSERVED:** Preserve the onboarding state

## Network and API

- **OBSERVED:** GET /crm/sales/conversations/awaiting_response -> 200. Request: none. Response: HTML document. Trigger: Initial navigation.
- **OBSERVED:** GET /crm/sales/conversations?{query} -> 200. Request: none. Response: conversations[], meta.is_last_page. Trigger: Load conversation state.

## Registered fixture

- **RECONSTRUCTION:** Independent empty-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Channels workflow pattern for empty-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
