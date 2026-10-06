---
component: "Zendesk Ticket Resource Rail"
ui_category: "Application Layout > Context Rail"
source_product: "Zendesk"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
status: "complete"
summary: "The ticket rail swaps between related work, conversations, approvals, tasks and apps."
---

## Location

- **OBSERVATION:** Authenticated Zendesk at [the sampled screen](https://centiliohelp.zendesk.com/agent/tickets/1) on 2026-10-05.
- **RECOMMENDATION:** The ticket rail swaps between related work, conversations, approvals, tasks and apps.

## Structure

- **OBSERVATION:** Related tickets showed Merge suggestions and Similar resolved tickets with no suggestions. Side conversations and Tasks showed empty states. Apps showed marketplace suggestions.
- **RECONSTRUCTION:** The linked local preview uses fictional people, tickets, macros and timestamps. It is independent React code.

## Actions

| Action | Verified visible result |
| --- | --- |
| Authenticated screen interaction | **OBSERVATION:** Related tickets showed Merge suggestions and Similar resolved tickets with no suggestions. Side conversations and Tasks showed empty states. Apps showed marketplace suggestions. |
| Local preview interaction | **RECONSTRUCTION:** Controls change only local React state. Consequential actions show an in-page guard and make no provider request. |

## Behavior & States

- **OBSERVATION:** Related tickets showed Merge suggestions and Similar resolved tickets with no suggestions. Side conversations and Tasks showed empty states. Apps showed marketplace suggestions.
- **NOT OBSERVED:** Merge, side conversation, task-list creation and app installation were not executed.
- **RECONSTRUCTION:** The preview represents the observed layout and states. Its data and responsive breakpoints are illustrative.

## Rules & Validation

- **OBSERVATION:** This inspection used safe navigation, menu opening and cancellation. It did not change Zendesk content or configuration.
- **NOT OBSERVED:** Merge, side conversation, task-list creation and app installation were not executed.
- **RECONSTRUCTION:** No provider save, submit, delete, install or external navigation is implemented.

## Technical Data

- **OBSERVATION:** Private screenshot and accessibility snapshot were saved together. Combined SHA-256: `7ef51310b35cce7c10058362f54d1cd065f2dc54239c6222d72c70a4940220c4`.
- **RECONSTRUCTION:** Preview source is `UI-Component-Library/src/previews/zendesk/ZendeskDeep.tsx` and `zendesk-deep.css`.

## Accessibility

- **OBSERVATION:** Sampled controls exposed labels, button and combobox roles, expanded states, and keyboard Space activation where inspected.
- **NOT OBSERVED:** A complete provider screen-reader, focus-order or assistive-technology audit.
- **RECONSTRUCTION:** The local preview uses native buttons, inputs and labelled controls.

## Cross-Component Pattern Note

- **RECOMMENDATION:** The ticket rail swaps between related work, conversations, approvals, tasks and apps. Keep consequential actions separate from read-only inspection.
- Related: [[zendesk-ticket-workspace]], [[zendesk-application-shell]].

## Competitor Comparisons

- **NOT OBSERVED:** No same-day side-by-side comparison with another support product was performed for this component.

## Best Observed Approach

- **RECOMMENDATION:** Preserve the visible current state, then reveal a focused menu, drawer or detail view for the next action.

## Human Context

- **OBSERVATION:** The ticket rail swaps between related work, conversations, approvals, tasks and apps.
- **NOT OBSERVED:** Merge, side conversation, task-list creation and app installation were not executed.

## AI Context

- Product: Zendesk. Screen observation verified 2026-10-05. Artifact: `zendesk-ticket-resource-rail`. Scope: `Application Layout > Context Rail`.
- Preview: fictional local reconstruction. Provider mutation outcomes are outside this evidence.

## Sources

- **OBSERVATION:** [Authenticated Zendesk screen](https://centiliohelp.zendesk.com/agent/tickets/1), captured 2026-10-05.
- **OBSERVATION:** Private evidence: `Internal/scratch-2026-10/zendesk/evidence/deeper-2026-10-05/related-tickets.ax.txt` and `related-tickets.png`. Raw captures are not public assets.
- **RECONSTRUCTION:** [Local fictional preview screenshot](/evidence/zendesk/zendesk-ticket-resource-rail.png).

## Second-Pass Flags

- **NOT OBSERVED:** Merge, side conversation, task-list creation and app installation were not executed.
- The documented screen and interaction states are complete for this bounded record. This does not certify every provider outcome or entitlement.
