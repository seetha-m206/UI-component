---
component: "Zendesk Admin Macro Editor"
ui_category: "Forms > Macro Editor"
source_product: "Zendesk"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
status: "complete"
summary: "Existing and new macro screens expose name, availability and a list of ticket actions."
---

## Location

- **OBSERVATION:** Authenticated Zendesk at [the sampled screen](https://centiliohelp.zendesk.com/admin/workspaces/agent-workspace/macros/new) on 2026-10-05.
- **RECOMMENDATION:** Existing and new macro screens expose name, availability and a list of ticket actions.

## Structure

- **OBSERVATION:** An existing macro had name, description, availability, two action rows, placeholders, Cancel and disabled Save. Actions offered Clone, Deactivate and disabled Delete. New macro started with blank name and disabled Create. Add action exposed a typed action list. Cancelling an unsaved added action showed an Unsaved changes confirmation, and discarding returned to the list.
- **RECONSTRUCTION:** The linked local preview uses fictional people, tickets, macros and timestamps. It is independent React code.

## Actions

| Action | Verified visible result |
| --- | --- |
| Authenticated screen interaction | **OBSERVATION:** An existing macro had name, description, availability, two action rows, placeholders, Cancel and disabled Save. Actions offered Clone, Deactivate and disabled Delete. New macro started with blank name and disabled Create. Add action exposed a typed action list. Cancelling an unsaved added action showed an Unsaved changes confirmation, and discarding returned to the list. |
| Local preview interaction | **RECONSTRUCTION:** Controls change only local React state. Consequential actions show an in-page guard and make no provider request. |

## Behavior & States

- **OBSERVATION:** An existing macro had name, description, availability, two action rows, placeholders, Cancel and disabled Save. Actions offered Clone, Deactivate and disabled Delete. New macro started with blank name and disabled Create. Add action exposed a typed action list. Cancelling an unsaved added action showed an Unsaved changes confirmation, and discarding returned to the list.
- **NOT OBSERVED:** No macro was saved, cloned, deactivated or executed. Required-field validation beyond disabled initial Create was not tested.
- **RECONSTRUCTION:** The preview represents the observed layout and states. Its data and responsive breakpoints are illustrative.

## Rules & Validation

- **OBSERVATION:** This inspection used safe navigation, menu opening and cancellation. It did not change Zendesk content or configuration.
- **NOT OBSERVED:** No macro was saved, cloned, deactivated or executed. Required-field validation beyond disabled initial Create was not tested.
- **RECONSTRUCTION:** No provider save, submit, delete, install or external navigation is implemented.

## Technical Data

- **OBSERVATION:** Private screenshot and accessibility snapshot were saved together. Combined SHA-256: `7ddbbc648d25777b594c6f60786dcae85f7ea99bff680a40377aa28277edd48e`.
- **RECONSTRUCTION:** Preview source is `UI-Component-Library/src/previews/zendesk/ZendeskDeep.tsx` and `zendesk-deep.css`.

## Accessibility

- **OBSERVATION:** Sampled controls exposed labels, button and combobox roles, expanded states, and keyboard Space activation where inspected.
- **NOT OBSERVED:** A complete provider screen-reader, focus-order or assistive-technology audit.
- **RECONSTRUCTION:** The local preview uses native buttons, inputs and labelled controls.

## Cross-Component Pattern Note

- **RECOMMENDATION:** Existing and new macro screens expose name, availability and a list of ticket actions. Keep consequential actions separate from read-only inspection.
- Related: [[zendesk-ticket-workspace]], [[zendesk-application-shell]].

## Competitor Comparisons

- **NOT OBSERVED:** No same-day side-by-side comparison with another support product was performed for this component.

## Best Observed Approach

- **RECOMMENDATION:** Preserve the visible current state, then reveal a focused menu, drawer or detail view for the next action.

## Human Context

- **OBSERVATION:** Existing and new macro screens expose name, availability and a list of ticket actions.
- **NOT OBSERVED:** No macro was saved, cloned, deactivated or executed. Required-field validation beyond disabled initial Create was not tested.

## AI Context

- Product: Zendesk. Screen observation verified 2026-10-05. Artifact: `zendesk-admin-macro-editor`. Scope: `Forms > Macro Editor`.
- Preview: fictional local reconstruction. Provider mutation outcomes are outside this evidence.

## Sources

- **OBSERVATION:** [Authenticated Zendesk screen](https://centiliohelp.zendesk.com/admin/workspaces/agent-workspace/macros/new), captured 2026-10-05.
- **OBSERVATION:** Private evidence: `Internal/scratch-2026-10/zendesk/evidence/deeper-2026-10-05/admin-macro-new-action-options.ax.txt` and `admin-macro-new-action-options.png`. Raw captures are not public assets.
- **OBSERVATION:** Additional macro screen/action captures: `admin-macro-editor.ax.txt` and `admin-macro-editor.png`, `admin-macro-editor-actions.ax.txt` and `admin-macro-editor-actions.png`, `admin-macro-editor-availability.ax.txt` and `admin-macro-editor-availability.png`, `admin-macro-new.ax.txt` and `admin-macro-new.png`, `admin-macro-unsaved.ax.txt` and `admin-macro-unsaved.png`. The private source-manifest contains individual SHA-256 hashes.
- **RECONSTRUCTION:** [Local fictional preview screenshot](/evidence/zendesk/zendesk-admin-macro-editor.png).
- **RECONSTRUCTION:** [Local blank macro form](/evidence/zendesk/zendesk-admin-macro-new.png).
- **RECONSTRUCTION:** [Local macro action rows](/evidence/zendesk/zendesk-admin-macro-actions.png).

## Second-Pass Flags

- **NOT OBSERVED:** No macro was saved, cloned, deactivated or executed. Required-field validation beyond disabled initial Create was not tested.
- The documented screen and interaction states are complete for this bounded record. This does not certify every provider outcome or entitlement.
