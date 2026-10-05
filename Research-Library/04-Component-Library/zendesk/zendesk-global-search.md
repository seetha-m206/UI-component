---
component: "Zendesk Global Search"
ui_category: "Navigation > Search Dialog"
source_product: "Zendesk"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
---

## Location

- **OBSERVATION:** Authenticated Zendesk at [the sampled screen](https://centiliohelp.zendesk.com/agent/home/tickets) on 2026-10-05.
- **RECOMMENDATION:** The search dialog groups recently viewed items and query results by content type.

## Structure

- **OBSERVATION:** Search support opens the dialog. Entering refund showed ticket and article groups. Selecting Tickets exposed Assignee, Status, Support type and Updated facets. Status opened New, Open, In Progress, Pending, On-hold and Solved. Selecting Open produced a Status: Open chip.
- **RECONSTRUCTION:** The linked local preview uses fictional people, tickets, macros and timestamps. It is independent React code.

## Actions

| Action | Verified visible result |
| --- | --- |
| Authenticated screen interaction | **OBSERVATION:** Search support opens the dialog. Entering refund showed ticket and article groups. Selecting Tickets exposed Assignee, Status, Support type and Updated facets. Status opened New, Open, In Progress, Pending, On-hold and Solved. Selecting Open produced a Status: Open chip. |
| Local preview interaction | **RECONSTRUCTION:** Controls change only local React state. Consequential actions show an in-page guard and make no provider request. |

## Behavior & States

- **OBSERVATION:** Search support opens the dialog. Entering refund showed ticket and article groups. Selecting Tickets exposed Assignee, Status, Support type and Updated facets. Status opened New, Open, In Progress, Pending, On-hold and Solved. Selecting Open produced a Status: Open chip.
- **NOT OBSERVED:** The complete search results page was not reached. Result ranking and server semantics were not inspected.
- **RECONSTRUCTION:** The preview represents the observed layout and states. Its data and responsive breakpoints are illustrative.

## Rules & Validation

- **OBSERVATION:** This inspection used safe navigation, menu opening and cancellation. It did not change Zendesk content or configuration.
- **NOT OBSERVED:** The complete search results page was not reached. Result ranking and server semantics were not inspected.
- **RECONSTRUCTION:** No provider save, submit, delete, install or external navigation is implemented.

## Technical Data

- **OBSERVATION:** Private screenshot and accessibility snapshot were saved together. Combined SHA-256: `a7b5443a1d8b4b6eebfc37a574a157b87536e55ff1ce71717caaaf3b0349248f`.
- **RECONSTRUCTION:** Preview source is `UI-Component-Library/src/previews/zendesk/ZendeskDeep.tsx` and `zendesk-deep.css`.

## Accessibility

- **OBSERVATION:** Sampled controls exposed labels, button and combobox roles, expanded states, and keyboard Space activation where inspected.
- **NOT OBSERVED:** A complete provider screen-reader, focus-order or assistive-technology audit.
- **RECONSTRUCTION:** The local preview uses native buttons, inputs and labelled controls.

## Cross-Component Pattern Note

- **RECOMMENDATION:** The search dialog groups recently viewed items and query results by content type. Keep consequential actions separate from read-only inspection.
- Related: [[zendesk-ticket-workspace]], [[zendesk-application-shell]].

## Competitor Comparisons

- **NOT OBSERVED:** No same-day side-by-side comparison with another support product was performed for this component.

## Best Observed Approach

- **RECOMMENDATION:** Preserve the visible current state, then reveal a focused menu, drawer or detail view for the next action.

## Human Context

- **OBSERVATION:** The search dialog groups recently viewed items and query results by content type.
- **NOT OBSERVED:** The complete search results page was not reached. Result ranking and server semantics were not inspected.

## AI Context

- Product: Zendesk. Screen observation verified 2026-10-05. Artifact: `zendesk-global-search`. Scope: `Navigation > Search Dialog`.
- Preview: fictional local reconstruction. Provider mutation outcomes are outside this evidence.

## Sources

- **OBSERVATION:** [Authenticated Zendesk screen](https://centiliohelp.zendesk.com/agent/home/tickets), captured 2026-10-05.
- **OBSERVATION:** Private evidence: `Internal/scratch-2026-10/zendesk/evidence/deeper-2026-10-05/global-search-results.ax.txt` and `global-search-results.png`. Raw captures are not public assets.
- **RECONSTRUCTION:** [Local fictional preview screenshot](/evidence/zendesk/zendesk-global-search.png).

## Second-Pass Flags

- **NOT OBSERVED:** The complete search results page was not reached. Result ranking and server semantics were not inspected.
- The documented screen and interaction states are complete for this bounded record. This does not certify every provider outcome or entitlement.
