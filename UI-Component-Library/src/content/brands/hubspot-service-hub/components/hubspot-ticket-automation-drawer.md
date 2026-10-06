---
component: "HubSpot Ticket Automation Drawer"
ui_category: "Actions > Workflow Builder"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
status: "partial"
summary: "Entitlement-gated ticket automation drawer with disabled suggested workflow cards."
---

# HubSpot Ticket Automation Drawer

## Screen level

- **OBSERVED:** Automate Tickets opened as a right drawer. Automate your workflows carried a lock, and the drawer stated that suggested automations are available at Starter.
- **OBSERVED:** Three disabled suggestions covered team notification, default lead status and follow-up email patterns.

## Action level

| Control | Observed behavior |
| --- | --- |
| Automate | Keyboard Space opened the drawer. |
| Workflow CTA and cards | Not activated. |
| Route reload | Reset the open drawer without provider mutation. |

## Evidence boundary

- **NOT OBSERVED:** Paid-plan experience, workflow editor, save, activation or execution.
- **NEEDS VERIFICATION:** Durable screenshot and eligible-plan behavior.
- **SOURCE:** Authenticated HubSpot Tickets index, inspected 2026-10-05.
