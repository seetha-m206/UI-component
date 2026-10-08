---
component: "Freshdesk Omni SLA Policies"
ui_category: "Administration > SLA Policies"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed the sla policies read-only with consequential actions left untouched."
---

# Freshdesk Omni SLA Policies

## Location

- **OBSERVED:** Admin → Workflows → SLA Policies.

## Structure

- **OBSERVED:** The page showed Add policy, first-match guidance, two enabled immutable default policy cards, ordering information, and guidance for SLA policy, multiple policies and reminders.
- **RECONSTRUCTION:** The local fixture preserves two generic default policies without provider-specific timings.

## Actions

- **NOT OBSERVED:** No policy was added, opened, reordered, edited, enabled, disabled or deleted.

## Technical Data

- **OBSERVED / DOM:** Policy cards, enabled state, ordering, overflow actions and guidance were exposed.
- **NEEDS VERIFICATION:** Targets, conditions, reminders, escalation behavior, business-hour calculation and persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni sla policies, 2026-10-08.
