---
component: "Freshdesk Omni Omniroute"
ui_category: "Workflows > Omniroute"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed the empty agent-load view and routing guidance without changing workload or assignment settings."
---

# Freshdesk Omni Omniroute

## Location

- **OBSERVED:** Admin → Workflows → Omniroute.

## Structure

- **OBSERVED:** The page showed Agent load settings, Queues, Assignment preferences and Group routing methods tabs, group filter, agent search, Default load, an empty table, and detailed routing guidance.
- **RECONSTRUCTION:** The local fixture keeps the empty view and uses fictional search and filter state.

## Actions

- **NOT OBSERVED:** No load, queue, priority, idle timeout, fallback, group method, agent availability, or assignment setting was changed.

## Technical Data

- **OBSERVED / DOM:** Four tabs, filter, search, default-load action, empty state, and side guidance were exposed.
- **NEEDS VERIFICATION:** Load editing, queue creation, fallback matching, assignment ordering, idle behavior, routing consequences, and persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni, 2026-10-08.
