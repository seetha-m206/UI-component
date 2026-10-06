---
component: "Zendesk Auto Assist Queue"
ui_category: "Application Layout > Agent Queue"
source_product: "Zendesk"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
---

## Location

- **OBSERVATION:** Authenticated Zendesk at [the sampled screen](https://centiliohelp.zendesk.com/agent/home/assist) on 2026-10-05.
- **RECOMMENDATION:** Auto assist has a dedicated Agent Home queue and empty state.

## Structure

- **OBSERVATION:** The queue showed zero tickets and the message No auto assist work, with the same queue-filter area and setup guide.
- **RECONSTRUCTION:** The linked local preview uses fictional people, tickets, macros and timestamps. It is independent React code.

## Actions

| Action | Verified visible result |
| --- | --- |
| Authenticated screen interaction | **OBSERVATION:** The queue showed zero tickets and the message No auto assist work, with the same queue-filter area and setup guide. |
| Local preview interaction | **RECONSTRUCTION:** Controls change only local React state. Consequential actions show an in-page guard and make no provider request. |

## Behavior & States

- **OBSERVATION:** The queue showed zero tickets and the message No auto assist work, with the same queue-filter area and setup guide.
- **NOT OBSERVED:** Populated queue and assist execution were not observed.
- **RECONSTRUCTION:** The preview represents the observed layout and states. Its data and responsive breakpoints are illustrative.

## Rules & Validation

- **OBSERVATION:** This inspection used safe navigation, menu opening and cancellation. It did not change Zendesk content or configuration.
- **NOT OBSERVED:** Populated queue and assist execution were not observed.
- **RECONSTRUCTION:** No provider save, submit, delete, install or external navigation is implemented.

## Technical Data

- **OBSERVATION:** Private screenshot and accessibility snapshot were saved together. Combined SHA-256: `9b647fd0f4e83d4c827ef7a33b0a0eecdc8758c632727077c154b6310501405c`.
- **RECONSTRUCTION:** Preview source is `UI-Component-Library/src/previews/zendesk/ZendeskDeep.tsx` and `zendesk-deep.css`.

## Accessibility

- **OBSERVATION:** Sampled controls exposed labels, button and combobox roles, expanded states, and keyboard Space activation where inspected.
- **NOT OBSERVED:** A complete provider screen-reader, focus-order or assistive-technology audit.
- **RECONSTRUCTION:** The local preview uses native buttons, inputs and labelled controls.

## Cross-Component Pattern Note

- **RECOMMENDATION:** Auto assist has a dedicated Agent Home queue and empty state. Keep consequential actions separate from read-only inspection.
- Related: [[zendesk-ticket-workspace]], [[zendesk-application-shell]].

## Competitor Comparisons

- **NOT OBSERVED:** No same-day side-by-side comparison with another support product was performed for this component.

## Best Observed Approach

- **RECOMMENDATION:** Preserve the visible current state, then reveal a focused menu, drawer or detail view for the next action.

## Human Context

- **OBSERVATION:** Auto assist has a dedicated Agent Home queue and empty state.
- **NOT OBSERVED:** Populated queue and assist execution were not observed.

## AI Context

- Product: Zendesk. Screen observation verified 2026-10-05. Artifact: `zendesk-agent-auto-assist`. Scope: `Application Layout > Agent Queue`.
- Preview: fictional local reconstruction. Provider mutation outcomes are outside this evidence.

## Sources

- **OBSERVATION:** [Authenticated Zendesk screen](https://centiliohelp.zendesk.com/agent/home/assist), captured 2026-10-05.
- **OBSERVATION:** Private evidence: `Internal/scratch-2026-10/zendesk/evidence/deeper-2026-10-05/auto-assist-empty.ax.txt` and `auto-assist-empty.png`. Raw captures are not public assets.
- **RECONSTRUCTION:** [Local fictional preview screenshot](/evidence/zendesk/zendesk-agent-auto-assist.png).

## Second-Pass Flags

- **NOT OBSERVED:** Populated queue and assist execution were not observed.
- The documented screen and interaction states are complete for this bounded record. This does not certify every provider outcome or entitlement.
