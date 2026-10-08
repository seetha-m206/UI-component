---
component: "Freshdesk Omni Ticket Templates"
ui_category: "Administration > Ticket Templates"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed the ticket templates read-only with consequential actions left untouched."
---

# Freshdesk Omni Ticket Templates

## Location

- **OBSERVED:** Admin → Agent Productivity → Ticket Templates.

## Structure

- **OBSERVED:** The page explained pre-filled tickets and outbound emails, offered New Template and showed one template row with clone, edit and overflow actions.
- **RECONSTRUCTION:** The local fixture uses a fictional return template and neutral priority copy.

## Actions

- **NOT OBSERVED:** No template was opened, created, cloned, edited or deleted.

## Technical Data

- **OBSERVED / DOM:** Introduction, template title, description and row actions were exposed.
- **NEEDS VERIFICATION:** Template fields, outbound-email behavior, permissions, cloning and persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni ticket templates, 2026-10-08.
