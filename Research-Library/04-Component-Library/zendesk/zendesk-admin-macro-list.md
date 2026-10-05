---
component: "Zendesk Admin Macro Inventory"
ui_category: "Enterprise Tables > Macro Inventory"
source_product: "Zendesk"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
---

## Location

- **OBSERVATION:** Authenticated Zendesk at [the sampled screen](https://centiliohelp.zendesk.com/admin/workspaces/agent-workspace/macros) on 2026-10-05.
- **RECOMMENDATION:** The Admin Center macro inventory combines search, filters, columns and existing macro rows.

## Structure

- **OBSERVATION:** The list showed 2 active macros. Filter opened Status and Available for controls. Status offered All statuses, Active and Inactive. Availability offered All shared macros, All agents, You and Individual agents. The column menu exposed created, updated, availability and usage windows. Actions offered Manage settings.
- **RECONSTRUCTION:** The linked local preview uses fictional people, tickets, macros and timestamps. It is independent React code.

## Actions

| Action | Verified visible result |
| --- | --- |
| Authenticated screen interaction | **OBSERVATION:** The list showed 2 active macros. Filter opened Status and Available for controls. Status offered All statuses, Active and Inactive. Availability offered All shared macros, All agents, You and Individual agents. The column menu exposed created, updated, availability and usage windows. Actions offered Manage settings. |
| Local preview interaction | **RECONSTRUCTION:** Controls change only local React state. Consequential actions show an in-page guard and make no provider request. |

## Behavior & States

- **OBSERVATION:** The list showed 2 active macros. Filter opened Status and Available for controls. Status offered All statuses, Active and Inactive. Availability offered All shared macros, All agents, You and Individual agents. The column menu exposed created, updated, availability and usage windows. Actions offered Manage settings.
- **NOT OBSERVED:** Filter application, column persistence, bulk changes and macro usage counts over time were not tested.
- **RECONSTRUCTION:** The preview represents the observed layout and states. Its data and responsive breakpoints are illustrative.

## Rules & Validation

- **OBSERVATION:** This inspection used safe navigation, menu opening and cancellation. It did not change Zendesk content or configuration.
- **NOT OBSERVED:** Filter application, column persistence, bulk changes and macro usage counts over time were not tested.
- **RECONSTRUCTION:** No provider save, submit, delete, install or external navigation is implemented.

## Technical Data

- **OBSERVATION:** Private screenshot and accessibility snapshot were saved together. Combined SHA-256: `f6dcedf4f48208fffe10a3384b171221dec8861c85fa31035848835384a21c56`.
- **RECONSTRUCTION:** Preview source is `UI-Component-Library/src/previews/zendesk/ZendeskDeep.tsx` and `zendesk-deep.css`.

## Accessibility

- **OBSERVATION:** Sampled controls exposed labels, button and combobox roles, expanded states, and keyboard Space activation where inspected.
- **NOT OBSERVED:** A complete provider screen-reader, focus-order or assistive-technology audit.
- **RECONSTRUCTION:** The local preview uses native buttons, inputs and labelled controls.

## Cross-Component Pattern Note

- **RECOMMENDATION:** The Admin Center macro inventory combines search, filters, columns and existing macro rows. Keep consequential actions separate from read-only inspection.
- Related: [[zendesk-ticket-workspace]], [[zendesk-application-shell]].

## Competitor Comparisons

- **NOT OBSERVED:** No same-day side-by-side comparison with another support product was performed for this component.

## Best Observed Approach

- **RECOMMENDATION:** Preserve the visible current state, then reveal a focused menu, drawer or detail view for the next action.

## Human Context

- **OBSERVATION:** The Admin Center macro inventory combines search, filters, columns and existing macro rows.
- **NOT OBSERVED:** Filter application, column persistence, bulk changes and macro usage counts over time were not tested.

## AI Context

- Product: Zendesk. Screen observation verified 2026-10-05. Artifact: `zendesk-admin-macro-list`. Scope: `Enterprise Tables > Macro Inventory`.
- Preview: fictional local reconstruction. Provider mutation outcomes are outside this evidence.

## Sources

- **OBSERVATION:** [Authenticated Zendesk screen](https://centiliohelp.zendesk.com/admin/workspaces/agent-workspace/macros), captured 2026-10-05.
- **OBSERVATION:** Private evidence: `Internal/scratch-2026-10/zendesk/evidence/deeper-2026-10-05/admin-macros-list.ax.txt` and `admin-macros-list.png`. Raw captures are not public assets.
- **OBSERVATION:** Additional macro screen/action captures: `admin-macros-filter.ax.txt` and `admin-macros-filter.png`, `admin-macros-status-options.ax.txt` and `admin-macros-status-options.png`, `admin-macros-available-options.ax.txt` and `admin-macros-available-options.png`, `admin-macros-actions.ax.txt` and `admin-macros-actions.png`, `admin-macros-columns.ax.txt` and `admin-macros-columns.png`. The private source-manifest contains individual SHA-256 hashes.
- **RECONSTRUCTION:** [Local fictional preview screenshot](/evidence/zendesk/zendesk-admin-macro-list.png).
- **RECONSTRUCTION:** [Local macro filter preview](/evidence/zendesk/zendesk-admin-macro-filter.png).

## Second-Pass Flags

- **NOT OBSERVED:** Filter application, column persistence, bulk changes and macro usage counts over time were not tested.
- The documented screen and interaction states are complete for this bounded record. This does not certify every provider outcome or entitlement.
