---
component: "Freshservice Subflow Create Drawer"
ui_category: "Customer Support > Helpdesk > Reusable workflow form"
source_product: "Freshservice"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
status: "complete"
---

# Component: Freshservice Subflow Create Drawer

Product → Screen → Component → Action → Behavior → States → Rules → Technical Data → Reference

## Location

- **OBSERVATION:** Authenticated Freshservice screen inspected on 2026-10-05. This is a Freshservice reference for Centilio Care, not a Freshdesk observation.
- **OBSERVATION:** Source route: [Freshservice Subflow Create Drawer](https://centilio.freshservice.com/a/admin/workflows/automator/subflows).
- **RECONSTRUCTION:** Local React state using fictional content. No provider requests or durable changes.

## Screenshot

![Observed Freshservice Subflow Create Drawer](/research/freshservice/source/subflow-create-default.png)

- **OBSERVATION:** Native source capture. Private DOM receipts remain in `Internal/scratch-2026-10/freshservice/deep-2026-10-05/`.
- **RECONSTRUCTION:** [Local preview screenshot](/research/freshservice/fixtures/freshservice-subflow-create-drawer.png) is a fictional fixture.

## Structure

- **OBSERVATION:** Create subflow showed required Title and Module controls, optional Description, and Tickets, Problems, Changes, Releases, Alerts, Tasks and Inventory module choices. Create was not exercised.

## Actions

| Action | Result or boundary |
| --- | --- |
| Local inputs, selections and disclosures | Update only the reconstruction state |
| Save, create, activate, apply, send, download or other consequential action | Boundary notice. No provider request |

## Behavior & States

- **OBSERVATION:** Create subflow showed required Title and Module controls, optional Description, and Tickets, Problems, Changes, Releases, Alerts, Tasks and Inventory module choices. Create was not exercised.
- **RECONSTRUCTION:** The fixture reproduces the visible structure and safe local state changes.
- **NOT OBSERVED:** Provider completion, validation responses, permissions, persistence and downstream effects were not exercised.

## Rules & Validation

- **RECONSTRUCTION:** Consequential controls are guarded. No provider create, save, activation, filter application, delivery or download occurs.
- **RECOMMENDATION:** Keep source observation, local behavior and unverified provider execution visibly distinct.

## Technical Data

- **OBSERVATION / DOM:** Visible labels, roles, options and selected states were captured from the authenticated UI.
- **NOT OBSERVED / JavaScript and Network:** Private handlers, payload contracts, authorization and persistence were not inspected.
- **RECONSTRUCTION:** Shared implementation is `src/previews/freshservice-shared/FreshserviceDeep.tsx` with component-specific wrapper and fixtures.
- **NOT OBSERVED / Motion:** Timing and reduced-motion behavior were not measured.

## Accessibility

- **OBSERVATION:** Visible control names and roles were captured. This is not a full accessibility audit.
- **RECONSTRUCTION:** Native labelled controls, keyboard-operable local state and a live boundary notice are provided.

## Human Context

- **RECOMMENDATION:** Use this record to inspect the reusable workflow form pattern while preserving action and evidence boundaries.

## AI Context

- **FACT:** Product identity is Freshservice, inspected on October 5, 2026.
- **RECONSTRUCTION:** People, inputs and writable values in the fixture are fictional.
- **RECOMMENDATION:** Do not infer provider action success from the interactive local fixture.

## Cross-Component Pattern Note

- **RECOMMENDATION:** Pair with the related Freshservice screen records. Treat shared visual patterns as observations and action results as separate evidence.

## Competitor Comparisons

- **NOT OBSERVED:** No Freshdesk behavior was inspected and no comparative ranking is established.

## Best Observed Approach

- **RECOMMENDATION:** Preserve the clear grouping of controls, progressive disclosure and explicit state labels shown in this source pattern.

## Related Components

- **RECOMMENDATION:** Compare [[freshservice-workflow-inventory]] for adjacent structure and evidence boundaries.
- **RECOMMENDATION:** Compare [[freshservice-workflow-canvas]] for adjacent structure and evidence boundaries.

## Needs Verification

- **NOT OBSERVED / NEEDS VERIFICATION:** Provider action completion, error states, permission variants, responsive behavior and assistive-technology behavior remain unverified.

## Sources

- **OBSERVATION:** [Authenticated Freshservice source](https://centilio.freshservice.com/a/admin/workflows/automator/subflows), inspected 2026-10-05.
- **OBSERVATION:** [Source screenshot](/research/freshservice/source/subflow-create-default.png) and [capture manifest](/research/freshservice/capture-manifest.json).
- **RECONSTRUCTION:** Local preview source and fixtures in this library.
