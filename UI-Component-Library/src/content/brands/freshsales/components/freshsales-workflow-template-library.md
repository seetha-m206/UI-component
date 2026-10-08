---
component: "Freshsales Workflow Template Library"
ui_category: "Automation > Workflow Templates"
source_product: "Freshsales"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Authenticated-source Freshsales pattern with fictional local fixtures and provider outcomes left unverified."
---

# Freshsales Workflow Template Library

## Location

- **OBSERVED:** Admin Settings > Workflows in an account with zero configured workflows.

## Structure

- **OBSERVED:** Template categories for Get started, Qualify leads, Close deals, and Increase productivity; workflow status counts; plan-usage banner; search; template cards; Create workflow action; and explanatory media.
- **OBSERVED:** Get-started cards covered welcome email, LinkedIn connection, deal creation for qualified leads, deal follow-up, won-deal notification, and contract renewal.

## Actions

- **OBSERVED:** The page automatically resolved from All workflows to templates. No template or workflow creation was started.

## Behavior & States

- **OBSERVED:** The initial list showed skeleton rows before redirecting to the empty-account template state.
- **RECONSTRUCTION:** Local Use template controls are guarded and inert.

## Technical Data

- **OBSERVED / DOM:** Category/status counts, plan usage, search, template buttons, and links were accessible.
- **NEEDS VERIFICATION:** Trigger/action builder, ordering, activation, rollback, conflicts, execution logs, permissions, and errors.

## Sources

- **OBSERVED:** Authenticated Freshsales Workflows, 2026-10-07.
