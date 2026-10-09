---
component: Apollo Layout Picker
ui_category: 'Navigation > Searchable Layout Picker'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Searchable popover with System, Your layouts and Starred tabs, new-layout callout, preset rows and guarded creation.
---

# Component: Apollo Layout Picker

## Location

- **Product:** Apollo authenticated Home.
- **Observed trigger:** Getting started combobox near the page header.

## Structure

Search field → System, Your layouts and Starred tabs → informational callout → preset list → Create new action.

## Behavior & States

- The trigger exposed combobox semantics and the current Getting started value.
- Opening did not change the selected layout.
- System was selected by default.
- Getting started was checked. Other observed rows included Generate Pipeline and Win & Close.
- Search, tab changes, layout selection, Switch and Create new were not executed against Apollo.
- The reconstruction permits local tab changes only.

## Rules & Validation

- Do not select, star, switch or create a provider layout during observation.
- Preserve the selected layout when dismissing without action.
- Separate provider presets from user-authored and starred layouts.
- Treat Create new as a provider write that needs explicit authorization.

## Technical Data

- **OBSERVED:** Popover opened below the page-level combobox.
- **OBSERVED:** Search placeholder was `Search layouts`.
- **OBSERVED:** Tabs were System, Your layouts and Starred.
- **OBSERVED:** Callout stated that the new layout of the page was being viewed and exposed Switch.
- **NOT OBSERVED:** Search results, non-System inventories, selection persistence, creation form, validation and limits.
- **NEEDS VERIFICATION:** Duplicate layout handling, sharing, starring, permissions and responsive placement.

## Accessibility

The trigger exposed combobox and expanded state. A reusable picker should connect the combobox to a named listbox and make the selected preset programmatically explicit.

## Sources

- **OBSERVATION:** Authenticated layout popover, opened and dismissed on 2026-10-09.
- **RECONSTRUCTION:** Local tabs with provider switching and creation disabled.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-layout-picker.png).
- **OBSERVED:** Provider screenshots were displayed transiently only and are not retained.

## Cross-Component Pattern Note

- **RECONSTRUCTION:** Reuse explicit empty, disabled and plan-gated states while keeping consequential provider actions inert.
- **RECONSTRUCTION:** Related records: [[apollo-job-change-alerts-paywall]] and [[apollo-license-settings]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-layout-picker.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.
