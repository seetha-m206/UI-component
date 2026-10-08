---
component: "Mailbox connection onboarding atomic component"
ui_category: "Channels > atomic"
source_product: "Freshsales"
parent_workflow: "Mailbox connection onboarding"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent atomic-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Mailbox connection onboarding atomic component

## Evidence boundary

- **OBSERVED:** Small reusable controls, labels, rows, cards and inputs used by the workflow.
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

- **RECONSTRUCTION:** Independent atomic-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Channels workflow pattern for atomic-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
