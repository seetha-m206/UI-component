---
component: "Zendesk Notifications Drawer"
ui_category: "Notifications > Header Drawer"
source_product: "Zendesk"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
---

## Location

- **OBSERVATION:** Authenticated Zendesk at [the sampled screen](https://centiliohelp.zendesk.com/agent/home/tickets) on 2026-10-05.
- **RECOMMENDATION:** The header notification drawer has settings, mute choices and a 30-day empty state.

## Structure

- **OBSERVATION:** The drawer showed no notifications from the past 30 days. Mute notifications offered 30 minutes, 1 hour, 2 hours and until tomorrow. The menu was dismissed without selecting.
- **RECONSTRUCTION:** The linked local preview uses fictional people, tickets, macros and timestamps. It is independent React code.

## Actions

| Action | Verified visible result |
| --- | --- |
| Authenticated screen interaction | **OBSERVATION:** The drawer showed no notifications from the past 30 days. Mute notifications offered 30 minutes, 1 hour, 2 hours and until tomorrow. The menu was dismissed without selecting. |
| Local preview interaction | **RECONSTRUCTION:** Controls change only local React state. Consequential actions show an in-page guard and make no provider request. |

## Behavior & States

- **OBSERVATION:** The drawer showed no notifications from the past 30 days. Mute notifications offered 30 minutes, 1 hour, 2 hours and until tomorrow. The menu was dismissed without selecting.
- **NOT OBSERVED:** Notification delivery, settings navigation and muting effect were not verified.
- **RECONSTRUCTION:** The preview represents the observed layout and states. Its data and responsive breakpoints are illustrative.

## Rules & Validation

- **OBSERVATION:** This inspection used safe navigation, menu opening and cancellation. It did not change Zendesk content or configuration.
- **NOT OBSERVED:** Notification delivery, settings navigation and muting effect were not verified.
- **RECONSTRUCTION:** No provider save, submit, delete, install or external navigation is implemented.

## Technical Data

- **OBSERVATION:** Private screenshot and accessibility snapshot were saved together. Combined SHA-256: `0debd4fb766e4d9c01423b94a74b0eee92b962d508b691f1165d1de03c44cb1f`.
- **RECONSTRUCTION:** Preview source is `UI-Component-Library/src/previews/zendesk/ZendeskDeep.tsx` and `zendesk-deep.css`.

## Accessibility

- **OBSERVATION:** Sampled controls exposed labels, button and combobox roles, expanded states, and keyboard Space activation where inspected.
- **NOT OBSERVED:** A complete provider screen-reader, focus-order or assistive-technology audit.
- **RECONSTRUCTION:** The local preview uses native buttons, inputs and labelled controls.

## Cross-Component Pattern Note

- **RECOMMENDATION:** The header notification drawer has settings, mute choices and a 30-day empty state. Keep consequential actions separate from read-only inspection.
- Related: [[zendesk-ticket-workspace]], [[zendesk-application-shell]].

## Competitor Comparisons

- **NOT OBSERVED:** No same-day side-by-side comparison with another support product was performed for this component.

## Best Observed Approach

- **RECOMMENDATION:** Preserve the visible current state, then reveal a focused menu, drawer or detail view for the next action.

## Human Context

- **OBSERVATION:** The header notification drawer has settings, mute choices and a 30-day empty state.
- **NOT OBSERVED:** Notification delivery, settings navigation and muting effect were not verified.

## AI Context

- Product: Zendesk. Screen observation verified 2026-10-05. Artifact: `zendesk-notifications-drawer`. Scope: `Notifications > Header Drawer`.
- Preview: fictional local reconstruction. Provider mutation outcomes are outside this evidence.

## Sources

- **OBSERVATION:** [Authenticated Zendesk screen](https://centiliohelp.zendesk.com/agent/home/tickets), captured 2026-10-05.
- **OBSERVATION:** Private evidence: `Internal/scratch-2026-10/zendesk/evidence/deeper-2026-10-05/notifications-mute-menu.ax.txt` and `notifications-mute-menu.png`. Raw captures are not public assets.
- **RECONSTRUCTION:** [Local fictional preview screenshot](/evidence/zendesk/zendesk-notifications-drawer.png).

## Second-Pass Flags

- **NOT OBSERVED:** Notification delivery, settings navigation and muting effect were not verified.
- The documented screen and interaction states are complete for this bounded record. This does not certify every provider outcome or entitlement.
