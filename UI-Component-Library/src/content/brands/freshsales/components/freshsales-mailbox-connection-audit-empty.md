---
component: "Mailbox connection onboarding empty component"
ui_category: "Channels > empty"
source_product: "Freshsales"
parent_workflow: "Mailbox connection onboarding"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent empty-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Mailbox connection onboarding empty component

## Evidence boundary

- **OBSERVED:** No-content or onboarding presentation isolated from the populated workflow.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **OBSERVED:** Connection instructions
- **OBSERVED:** Provider selection cards
- **OBSERVED:** Guarded continue boundary

## User actions

- **OBSERVED:** Inspect available providers
- **OBSERVED:** Keep OAuth unstarted
- **OBSERVED:** Do not transmit mailbox credentials

## Network and API

- **OBSERVED:** GET /crm/sales/settings/email -> 200. Request: none. Response: mailbox settings shell. Trigger: Open mailbox settings.

## Registered fixture

- **RECONSTRUCTION:** Independent empty-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Channels workflow pattern for empty-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
