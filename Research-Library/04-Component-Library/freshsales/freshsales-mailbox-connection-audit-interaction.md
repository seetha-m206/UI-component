---
component: "Mailbox connection onboarding interaction component"
ui_category: "Channels > interaction"
source_product: "Freshsales"
parent_workflow: "Mailbox connection onboarding"
last_verified: "2026-10-08"
evidence_state: "reconstructed"
status: "partial"
summary: "Independent interaction-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Mailbox connection onboarding interaction component

## Evidence boundary

- **RECONSTRUCTION:** Overlay, menu, drawer, tab or view transition exercised without a provider write.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **RECONSTRUCTION:** Connection instructions
- **RECONSTRUCTION:** Provider selection cards
- **RECONSTRUCTION:** Guarded continue boundary

## User actions

- **BOUNDARY:** Inspect available providers
- **BOUNDARY:** Keep OAuth unstarted
- **BOUNDARY:** Do not transmit mailbox credentials

## Network and API

- **OBSERVED:** GET /crm/sales/settings/email -> 200. Request: none. Response: mailbox settings shell. Trigger: Open mailbox settings.

## Registered fixture

- **RECONSTRUCTION:** Independent interaction-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Channels workflow pattern for interaction-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
