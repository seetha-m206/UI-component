---
component: "Freshdesk Omni Quick Automations"
ui_category: "Workflows > Quick Automations"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed a configured quick-automation table and supported action guidance without changing a rule."
---

# Freshdesk Omni Quick Automations

## Location

- **OBSERVED:** Admin → Workflows → Quick Automations.

## Structure

- **OBSERVED:** The page described time-based actions for real-time channels, showed New rule, a configured rule row, enabled state, and supported actions including delay notices, reassignment, fallback routing, follow-up, load reduction, and delay tracking.
- **RECONSTRUCTION:** The local fixture replaces the provider rule with a fictional Chat welcome rule.

## Actions

- **NOT OBSERVED:** No rule, source, action, trigger, menu, enabled state, or navigation destination was opened or changed.

## Technical Data

- **OBSERVED / DOM:** Table structure, one configured row, enabled switch, side guidance, and cross-channel automation link were exposed.
- **NEEDS VERIFICATION:** Rule editor, timing, execution, delivery, reassignment, fallback behavior, and persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni, 2026-10-08.
