---
component: "Freshservice Workflow Inventory and Subflows"
ui_category: "Application Layout > Workspace Shell"
source_product: "Freshservice"
last_verified: "2026-10-01"
evidence_state: "source_reviewed"
status: "complete"
summary: "A workflow inventory with module navigation, inactive rows and a reusable-subflow empty state."
---

# Component: Freshservice Workflow Inventory and Subflows

Product → Screen → Component → Action → Behavior → States → Rules → Technical Data → Reference

## Location

- **OBSERVATION:** Authenticated Freshservice workspace on 2026-10-01. This is a Freshservice reference for Centilio Care, not a Freshdesk observation.
- **OBSERVATION:** Source route: [Freshservice Workflow Inventory and Subflows](https://centilio.freshservice.com/ws/2/admin/automators).
- **RECONSTRUCTION:** Local React state. No provider requests or durable changes.

## Screenshot

![Observed Freshservice Workflow Inventory and Subflows](/research/freshservice/source/workflow-subflows-empty.png)

- **OBSERVATION:** Native source capture. The browser may include overflow or blank canvas in full-page captures. The DOM receipts supplement clipped regions.
- **RECONSTRUCTION:** [Local preview screenshot](/research/freshservice/fixtures/freshservice-workflow-inventory.png) shows a fictional fixture.

- **OBSERVATION:** The source screenshot shows Subflows. The event inventory receipt remains private because it contains an account member name. That name is not used in local fixtures.

## Structure

- **OBSERVATION:** Tickets contained Event Based Workflows, Scheduled Workflows and Subflows links. Nine event workflows were listed with switches off. Scheduled Workflows showed one record. Subflows showed No subflows created yet and Create subflow. No switches or creation controls were activated.

## Actions

| Action | Result or boundary |
| --- | --- |
| Read and navigate captured views | Event and Subflows navigation is reconstructed locally. Event rows are a three-row subset with a fictional author. Activation remains off and displays a guarded notice. Scheduled-workflow detail remains guarded. |
| Consequential or uninspected action | Local boundary notice and no request |

## Behavior & States

- **OBSERVATION:** Tickets contained Event Based Workflows, Scheduled Workflows and Subflows links. Nine event workflows were listed with switches off. Scheduled Workflows showed one record. Subflows showed No subflows created yet and Create subflow. No switches or creation controls were activated.
- **RECONSTRUCTION:** Event and Subflows navigation is reconstructed locally. Event rows are a three-row subset with a fictional author. Activation remains off and displays a guarded notice. Scheduled-workflow detail remains guarded.
- **RECONSTRUCTION:** No artificial success, error or loading states are presented as observed provider behavior.

## Rules & Validation

- **RECONSTRUCTION:** No create, publish, import, activate, dismiss-setting or configuration action is sent to Freshservice.
- **RECOMMENDATION:** Keep empty collections, sample illustrations and curated report definitions distinguishable from live workspace records.

## Technical Data

- **OBSERVATION / DOM:** Rendered accessibility and DOM snapshots established labels, headings, navigation and selected states. Analytics uses a separate freshservice-us.freshreports.com iframe. No iframe service contract is inferred.
- **OBSERVATION / CSS:** Visual structure is supported by the source screenshot. No new computed-style measurement was taken for this screen. Earlier incident style samples are not evidence of this module's implementation.
- **NOT OBSERVED / JavaScript and Network:** Provider handlers, private state, authorization, payload schemas and persistence were not inspected for this component.
- **RECONSTRUCTION:** Shared local implementation is `src/previews/freshservice-shared/FreshserviceMore.tsx` and `freshserviceMore.module.css`. The Code tab includes shared files and per-component fixtures.
- **NOT OBSERVED / Motion:** Animation timings and reduced-motion provider behavior were not measured.

## Accessibility

- **OBSERVATION:** Visible control names and roles were captured. This is not a full accessibility audit.
- **RECONSTRUCTION:** Native labelled buttons, radio inputs, table headings, current-page navigation and live boundary notices support keyboard use. The local implementation does not establish provider accessibility conformance.

## Human Context

- **RECOMMENDATION:** A workflow inventory with module navigation, inactive rows and a reusable-subflow empty state. The source screenshot records what was seen. The interactive fixture allows safe examination of the reusable pattern.

## AI Context

- **FACT:** Product identity is Freshservice, inspected on October 1, 2026.
- **RECONSTRUCTION:** Fixtures are isolated examples. Report names can be observed vendor definitions while dates and authors are fictional.
- **RECOMMENDATION:** Read the component-specific gaps before generating production contracts from the preview.

## Cross-Component Pattern Note

- **RECOMMENDATION:** Combine with [[freshservice-application-shell]] and [[freshservice-sidebar-navigation]]. Reuse captured states without treating action affordances as verified action completion.

## Competitor Comparisons

- **NOT OBSERVED:** No Freshdesk comparison was verified. No comparative ranking is established by this record.

## Best Observed Approach

- **RECOMMENDATION:** A workflow inventory with module navigation, inactive rows and a reusable-subflow empty state. Preserve source attribution and fixture boundaries when adapting the pattern.

## Needs Verification

- **NOT OBSERVED / NEEDS VERIFICATION:** Workflow builders, scheduling, activation, execution logs, reorder behavior, runtime side effects and subflow creation were not observed.
- **NOT OBSERVED / NEEDS VERIFICATION:** Provider responsive behavior and assistive-technology interaction remain unverified for workflow inventory and subflows.

## Sources

- **OBSERVATION:** [Authenticated Freshservice source](https://centilio.freshservice.com/ws/2/admin/automators), inspected 2026-10-01.
- **OBSERVATION:** [Source screenshot](/research/freshservice/source/workflow-subflows-empty.png) and [capture manifest](/research/freshservice/capture-manifest.json).
- **OBSERVATION:** Private DOM receipts in `Internal/scratch-2026-10/freshservice/`.
- **RECONSTRUCTION:** Local preview source and fixtures in this library.
