---
component: "Zendesk Approval Request Form"
ui_category: "Forms > Approval Request"
source_product: "Zendesk"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
---

## Location

- **OBSERVATION:** Authenticated Zendesk at [the sampled screen](https://centiliohelp.zendesk.com/agent/tickets/1) on 2026-10-05.
- **RECOMMENDATION:** The approval entry opens approver, subject and description fields.

## Structure

- **OBSERVATION:** The empty approval rail offered Create approval request. Opening it showed Approver, Subject, Description, Cancel and Send approval request. Cancel returned to the empty state.
- **RECONSTRUCTION:** The linked local preview uses fictional people, tickets, macros and timestamps. It is independent React code.

## Actions

| Action | Verified visible result |
| --- | --- |
| Authenticated screen interaction | **OBSERVATION:** The empty approval rail offered Create approval request. Opening it showed Approver, Subject, Description, Cancel and Send approval request. Cancel returned to the empty state. |
| Local preview interaction | **RECONSTRUCTION:** Controls change only local React state. Consequential actions show an in-page guard and make no provider request. |

## Behavior & States

- **OBSERVATION:** The empty approval rail offered Create approval request. Opening it showed Approver, Subject, Description, Cancel and Send approval request. Cancel returned to the empty state.
- **NOT OBSERVED:** Approver search, validation, send and downstream approval behavior were not verified.
- **RECONSTRUCTION:** The preview represents the observed layout and states. Its data and responsive breakpoints are illustrative.

## Rules & Validation

- **OBSERVATION:** This inspection used safe navigation, menu opening and cancellation. It did not change Zendesk content or configuration.
- **NOT OBSERVED:** Approver search, validation, send and downstream approval behavior were not verified.
- **RECONSTRUCTION:** No provider save, submit, delete, install or external navigation is implemented.

## Technical Data

- **OBSERVATION:** Private screenshot and accessibility snapshot were saved together. Combined SHA-256: `f140d64df6fdfac2665eef19c6e579058711780d35a7b998c1535f365ea7dd7a`.
- **RECONSTRUCTION:** Preview source is `UI-Component-Library/src/previews/zendesk/ZendeskDeep.tsx` and `zendesk-deep.css`.

## Accessibility

- **OBSERVATION:** Sampled controls exposed labels, button and combobox roles, expanded states, and keyboard Space activation where inspected.
- **NOT OBSERVED:** A complete provider screen-reader, focus-order or assistive-technology audit.
- **RECONSTRUCTION:** The local preview uses native buttons, inputs and labelled controls.

## Cross-Component Pattern Note

- **RECOMMENDATION:** The approval entry opens approver, subject and description fields. Keep consequential actions separate from read-only inspection.
- Related: [[zendesk-ticket-workspace]], [[zendesk-application-shell]].

## Competitor Comparisons

- **NOT OBSERVED:** No same-day side-by-side comparison with another support product was performed for this component.

## Best Observed Approach

- **RECOMMENDATION:** Preserve the visible current state, then reveal a focused menu, drawer or detail view for the next action.

## Human Context

- **OBSERVATION:** The approval entry opens approver, subject and description fields.
- **NOT OBSERVED:** Approver search, validation, send and downstream approval behavior were not verified.

## AI Context

- Product: Zendesk. Screen observation verified 2026-10-05. Artifact: `zendesk-approval-request`. Scope: `Forms > Approval Request`.
- Preview: fictional local reconstruction. Provider mutation outcomes are outside this evidence.

## Sources

- **OBSERVATION:** [Authenticated Zendesk screen](https://centiliohelp.zendesk.com/agent/tickets/1), captured 2026-10-05.
- **OBSERVATION:** Private evidence: `Internal/scratch-2026-10/zendesk/evidence/deeper-2026-10-05/approval-form.ax.txt` and `approval-form.png`. Raw captures are not public assets.
- **RECONSTRUCTION:** [Local fictional preview screenshot](/evidence/zendesk/zendesk-approval-request.png).

## Second-Pass Flags

- **NOT OBSERVED:** Approver search, validation, send and downstream approval behavior were not verified.
- The documented screen and interaction states are complete for this bounded record. This does not certify every provider outcome or entitlement.
