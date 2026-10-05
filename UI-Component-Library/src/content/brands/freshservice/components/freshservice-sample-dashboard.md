---
component: "Freshservice Sample Dashboard Boundary"
ui_category: "Data Display > Dashboard"
source_product: "Freshservice"
last_verified: "2026-10-01"
evidence_state: "source_reviewed"
status: "complete"
summary: "A sample-data notice above a static dashboard image, with guarded tour and dismissal controls."
---

# Component: Freshservice Sample Dashboard Boundary

Product → Screen → Component → Action → Behavior → States → Rules → Technical Data → Reference

## Location

- **OBSERVATION:** Authenticated Freshservice workspace on 2026-10-01. This is a Freshservice reference for Centilio Care, not a Freshdesk observation.
- **OBSERVATION:** Source route: [Freshservice Sample Dashboard Boundary](https://centilio.freshservice.com/a/dashboard/default).
- **RECONSTRUCTION:** Local React state. No provider requests or durable changes.

## Screenshot

![Observed Freshservice Sample Dashboard Boundary](/research/freshservice/source/sample-dashboard.png)

- **OBSERVATION:** Native source capture. The browser may include overflow or blank canvas in full-page captures. The DOM receipts supplement clipped regions.
- **RECONSTRUCTION:** [Local preview screenshot](/research/freshservice/fixtures/freshservice-sample-dashboard.png) shows a fictional fixture.

## Structure

- **OBSERVATION:** The provider displayed Sample Dashboard and an image labelled Dashboard preview. It explicitly identified the dashboard as sample data. How it works and Dismiss were visible and untouched.

## Actions

| Action | Result or boundary |
| --- | --- |
| Read and navigate captured views | Tour and dismissal were not activated. The local illustration contains no operational metrics. |
| Consequential or uninspected action | Local boundary notice and no request |

## Behavior & States

- **OBSERVATION:** The provider displayed Sample Dashboard and an image labelled Dashboard preview. It explicitly identified the dashboard as sample data. How it works and Dismiss were visible and untouched.
- **RECONSTRUCTION:** Tour and dismissal were not activated. The local illustration contains no operational metrics.
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

- **RECOMMENDATION:** A sample-data notice above a static dashboard image, with guarded tour and dismissal controls. The source screenshot records what was seen. The interactive fixture allows safe examination of the reusable pattern.

## AI Context

- **FACT:** Product identity is Freshservice, inspected on October 1, 2026.
- **RECONSTRUCTION:** Fixtures are isolated examples. Report names can be observed vendor definitions while dates and authors are fictional.
- **RECOMMENDATION:** Read the component-specific gaps before generating production contracts from the preview.

## Cross-Component Pattern Note

- **RECOMMENDATION:** Combine with [[freshservice-application-shell]] and [[freshservice-sidebar-navigation]]. Reuse captured states without treating action affordances as verified action completion.

## Competitor Comparisons

- **NOT OBSERVED:** No Freshdesk comparison was verified. No comparative ranking is established by this record.

## Best Observed Approach

- **RECOMMENDATION:** A sample-data notice above a static dashboard image, with guarded tour and dismissal controls. Preserve source attribution and fixture boundaries when adapting the pattern.

## Needs Verification

- **NOT OBSERVED / NEEDS VERIFICATION:** Actual dashboard widgets, metric calculations, drill-down and the persistence of dismissal were not observed.
- **NOT OBSERVED / NEEDS VERIFICATION:** Provider responsive behavior and assistive-technology interaction remain unverified for sample dashboard boundary.

## Sources

- **OBSERVATION:** [Authenticated Freshservice source](https://centilio.freshservice.com/a/dashboard/default), inspected 2026-10-01.
- **OBSERVATION:** [Source screenshot](/research/freshservice/source/sample-dashboard.png) and [capture manifest](/research/freshservice/capture-manifest.json).
- **OBSERVATION:** Private DOM receipts in `Internal/scratch-2026-10/freshservice/`.
- **RECONSTRUCTION:** Local preview source and fixtures in this library.
