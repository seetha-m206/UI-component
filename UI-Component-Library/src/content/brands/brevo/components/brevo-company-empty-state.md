---
component: "Brevo Company Empty State"
ui_category: "CRM > Company Inventory"
source_product: "Brevo"
last_verified: "2026-10-09"
evidence_state: "source_reviewed"
status: "complete"
summary: "Authenticated Brevo company empty state reconstructed with fictional data and guarded actions."
---

# Component: Brevo Company Empty State

## Location

- **OBSERVATION:** CRM Companies.

## Screenshot

![Fictional local preview](/research/brevo/fixtures/brevo-company-empty-state.png)

## Structure

- **OBSERVATION:** Import and create actions, saved-view tab, filters, column customization, search and illustrated zero-state.
- **RECONSTRUCTION:** The local preview uses fictional account, contact, usage, time and business data.

## Behavior

- **OBSERVATION:** The component was visible and inspectable in the authenticated Brevo interface.
- **RECONSTRUCTION:** Local controls change fixture state only and never call Brevo.

## Actions

- **OBSERVATION:** Review the empty inventory.
- **NOT OBSERVED:** Company creation, import and filter persistence.

## States

- **OBSERVATION:** The described authenticated state was visible on 2026-10-09.
- **RECONSTRUCTION:** The preview includes a safe default state with provider-changing controls disabled.
- **NEEDS VERIFICATION:** Provider persistence, authorization, error, loading, responsive and consequential outcome behavior.

## Rules and Validation

- **RECONSTRUCTION:** Campaign, contact, import, send, connect, publish, upload, AI, settings, billing, upgrade and delete actions are disabled where present.

## Human Context

- **RECOMMENDATION:** Preserve clear task grouping, explicit empty-state guidance and direct plan boundaries without obscuring the primary user goal.

## AI Context

- **OBSERVATION:** Brevo exposes AI entry points in the global header and selected creation surfaces.
- **NOT OBSERVED:** No prompt was submitted and no generated result, model contract, persistence or entitlement behavior was exercised.
- **RECOMMENDATION:** Treat AI controls as executable provider actions and require an explicit confirmation boundary before generation.

## Technical Data

- **OBSERVATION:** Route family and visible semantic labels were retained without query strings, payloads, tokens, opaque identifiers, credential values or account identity.
- **INFERENCE:** Visual grouping suggests a reusable product component and does not establish a provider API contract.

## Lessons

- **RECOMMENDATION:** Pair dense operational surfaces with bounded onboarding and keep consequential actions visually distinct.

## Sources

- **OBSERVATION:** Authenticated Brevo interface, 2026-10-09.
- **NOT OBSERVED:** Company creation, import and filter persistence.
