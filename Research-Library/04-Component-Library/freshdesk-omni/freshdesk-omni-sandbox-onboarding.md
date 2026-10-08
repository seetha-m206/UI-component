---
component: "Freshdesk Omni Sandbox Onboarding"
ui_category: "Support Operations > Sandbox"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed inactive sandbox onboarding without building or activating a replica."
---

# Freshdesk Omni Sandbox Onboarding

## Location

- **OBSERVED:** Admin → Support Operations → Sandbox.

## Structure

- **OBSERVED:** The page explained that a sandbox copies configuration, excludes confidential tickets and customer or contact data, uses sample data, and can be activated for testing.
- **RECONSTRUCTION:** The local fixture summarizes this boundary and keeps Build sandbox local only.

## Actions

- **NOT OBSERVED:** No sandbox was built, activated, populated, synchronized, or shared.

## Technical Data

- **OBSERVED / DOM:** Inactive state, Build sandbox action, configuration-copy explanation, data exclusions, sample-data note, and availability guidance were exposed.
- **NEEDS VERIFICATION:** Entitlement, copy fidelity, provisioning, activation, access, isolation, synchronization, and deletion.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni, 2026-10-08.
