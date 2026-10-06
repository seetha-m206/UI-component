---
component: "Zendesk Conversation Filter"
ui_category: "Search and Filtering > Conversation"
source_product: "Zendesk"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
status: "complete"
summary: "The conversation filter selects all, public or internal messages."
---

## Location

- **OBSERVATION:** Authenticated Zendesk at [the sampled screen](https://centiliohelp.zendesk.com/agent/tickets/1) on 2026-10-05.
- **RECOMMENDATION:** The conversation filter selects all, public or internal messages.

## Structure

- **OBSERVATION:** The menu showed All checked, Public messages and Internal notes. Selecting Internal notes showed the empty note message and Clear filter. All was restored.
- **RECONSTRUCTION:** The linked local preview uses fictional people, tickets, macros and timestamps. It is independent React code.

## Actions

| Action | Verified visible result |
| --- | --- |
| Authenticated screen interaction | **OBSERVATION:** The menu showed All checked, Public messages and Internal notes. Selecting Internal notes showed the empty note message and Clear filter. All was restored. |
| Local preview interaction | **RECONSTRUCTION:** Controls change only local React state. Consequential actions show an in-page guard and make no provider request. |

## Behavior & States

- **OBSERVATION:** The menu showed All checked, Public messages and Internal notes. Selecting Internal notes showed the empty note message and Clear filter. All was restored.
- **NOT OBSERVED:** The public-message-only content state was not exercised.
- **RECONSTRUCTION:** The preview represents the observed layout and states. Its data and responsive breakpoints are illustrative.

## Rules & Validation

- **OBSERVATION:** This inspection used safe navigation, menu opening and cancellation. It did not change Zendesk content or configuration.
- **NOT OBSERVED:** The public-message-only content state was not exercised.
- **RECONSTRUCTION:** No provider save, submit, delete, install or external navigation is implemented.

## Technical Data

- **OBSERVATION:** Private screenshot and accessibility snapshot were saved together. Combined SHA-256: `07ca6cca858fbfc9d9d9e1e0b04180552888d32f27c8ff9890e83cfe9b61237b`.
- **RECONSTRUCTION:** Preview source is `UI-Component-Library/src/previews/zendesk/ZendeskDeep.tsx` and `zendesk-deep.css`.

## Accessibility

- **OBSERVATION:** Sampled controls exposed labels, button and combobox roles, expanded states, and keyboard Space activation where inspected.
- **NOT OBSERVED:** A complete provider screen-reader, focus-order or assistive-technology audit.
- **RECONSTRUCTION:** The local preview uses native buttons, inputs and labelled controls.

## Cross-Component Pattern Note

- **RECOMMENDATION:** The conversation filter selects all, public or internal messages. Keep consequential actions separate from read-only inspection.
- Related: [[zendesk-ticket-workspace]], [[zendesk-application-shell]].

## Competitor Comparisons

- **NOT OBSERVED:** No same-day side-by-side comparison with another support product was performed for this component.

## Best Observed Approach

- **RECOMMENDATION:** Preserve the visible current state, then reveal a focused menu, drawer or detail view for the next action.

## Human Context

- **OBSERVATION:** The conversation filter selects all, public or internal messages.
- **NOT OBSERVED:** The public-message-only content state was not exercised.

## AI Context

- Product: Zendesk. Screen observation verified 2026-10-05. Artifact: `zendesk-conversation-filter`. Scope: `Search and Filtering > Conversation`.
- Preview: fictional local reconstruction. Provider mutation outcomes are outside this evidence.

## Sources

- **OBSERVATION:** [Authenticated Zendesk screen](https://centiliohelp.zendesk.com/agent/tickets/1), captured 2026-10-05.
- **OBSERVATION:** Private evidence: `Internal/scratch-2026-10/zendesk/evidence/deeper-2026-10-05/conversation-internal-notes-empty.ax.txt` and `conversation-internal-notes-empty.png`. Raw captures are not public assets.
- **RECONSTRUCTION:** [Local fictional preview screenshot](/evidence/zendesk/zendesk-conversation-filter.png).

## Second-Pass Flags

- **NOT OBSERVED:** The public-message-only content state was not exercised.
- The documented screen and interaction states are complete for this bounded record. This does not certify every provider outcome or entitlement.
