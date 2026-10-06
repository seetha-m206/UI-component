---
component: "Zendesk Ticket Actions Menu"
ui_category: "Actions > Ticket Menu"
source_product: "Zendesk"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
status: "complete"
summary: "Ticket Actions opens a menu of consequential ticket controls."
---

## Location

- **OBSERVATION:** Authenticated Zendesk at [the sampled screen](https://centiliohelp.zendesk.com/agent/tickets/1) on 2026-10-05.
- **RECOMMENDATION:** Ticket Actions opens a menu of consequential ticket controls.

## Structure

- **OBSERVATION:** Keyboard Space opened Create as macro, Merge into another ticket, Print ticket, Suspend user, Mark as spam and Delete.
- **RECONSTRUCTION:** The linked local preview uses fictional people, tickets, macros and timestamps. It is independent React code.

## Actions

| Action | Verified visible result |
| --- | --- |
| Authenticated screen interaction | **OBSERVATION:** Keyboard Space opened Create as macro, Merge into another ticket, Print ticket, Suspend user, Mark as spam and Delete. |
| Local preview interaction | **RECONSTRUCTION:** Controls change only local React state. Consequential actions show an in-page guard and make no provider request. |

## Behavior & States

- **OBSERVATION:** Keyboard Space opened Create as macro, Merge into another ticket, Print ticket, Suspend user, Mark as spam and Delete.
- **NOT OBSERVED:** None of these provider actions was executed.
- **RECONSTRUCTION:** The preview represents the observed layout and states. Its data and responsive breakpoints are illustrative.

## Rules & Validation

- **OBSERVATION:** This inspection used safe navigation, menu opening and cancellation. It did not change Zendesk content or configuration.
- **NOT OBSERVED:** None of these provider actions was executed.
- **RECONSTRUCTION:** No provider save, submit, delete, install or external navigation is implemented.

## Technical Data

- **OBSERVATION:** Private screenshot and accessibility snapshot were saved together. Combined SHA-256: `27f2a724ca8c73ad068d80f36a2de4aaa512cfa792343a4012769e6ed0351170`.
- **RECONSTRUCTION:** Preview source is `UI-Component-Library/src/previews/zendesk/ZendeskDeep.tsx` and `zendesk-deep.css`.

## Accessibility

- **OBSERVATION:** Sampled controls exposed labels, button and combobox roles, expanded states, and keyboard Space activation where inspected.
- **NOT OBSERVED:** A complete provider screen-reader, focus-order or assistive-technology audit.
- **RECONSTRUCTION:** The local preview uses native buttons, inputs and labelled controls.

## Cross-Component Pattern Note

- **RECOMMENDATION:** Ticket Actions opens a menu of consequential ticket controls. Keep consequential actions separate from read-only inspection.
- Related: [[zendesk-ticket-workspace]], [[zendesk-application-shell]].

## Competitor Comparisons

- **NOT OBSERVED:** No same-day side-by-side comparison with another support product was performed for this component.

## Best Observed Approach

- **RECOMMENDATION:** Preserve the visible current state, then reveal a focused menu, drawer or detail view for the next action.

## Human Context

- **OBSERVATION:** Ticket Actions opens a menu of consequential ticket controls.
- **NOT OBSERVED:** None of these provider actions was executed.

## AI Context

- Product: Zendesk. Screen observation verified 2026-10-05. Artifact: `zendesk-ticket-actions`. Scope: `Actions > Ticket Menu`.
- Preview: fictional local reconstruction. Provider mutation outcomes are outside this evidence.

## Sources

- **OBSERVATION:** [Authenticated Zendesk screen](https://centiliohelp.zendesk.com/agent/tickets/1), captured 2026-10-05.
- **OBSERVATION:** Private evidence: `Internal/scratch-2026-10/zendesk/evidence/deeper-2026-10-05/ticket-actions-menu.ax.txt` and `ticket-actions-menu.png`. Raw captures are not public assets.
- **RECONSTRUCTION:** [Local fictional preview screenshot](/evidence/zendesk/zendesk-ticket-actions.png).

## Second-Pass Flags

- **NOT OBSERVED:** None of these provider actions was executed.
- The documented screen and interaction states are complete for this bounded record. This does not certify every provider outcome or entitlement.
