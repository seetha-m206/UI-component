---
component: "Freshservice Report Sort Menu"
ui_category: "Search and Filtering > Sort Control"
source_product: "Freshservice"
last_verified: "2026-10-01"
evidence_state: "source_reviewed"
---

# Component: Freshservice Report Sort Menu

Product → Screen → Component → Action → Behavior → States → Rules → Technical Data → Reference

## Location

- **OBSERVATION:** Authenticated Freshservice workspace on 2026-10-01. This is a Freshservice reference for Centilio Care, not a Freshdesk observation.
- **OBSERVATION:** Source route: [Freshservice Report Sort Menu](https://centilio.freshservice.com/analytics).
- **RECONSTRUCTION:** Local React state. No provider requests or durable changes.

## Screenshot

![Observed Freshservice Report Sort Menu](/research/freshservice/source/analytics-sort-menu.png)

- **OBSERVATION:** Native source capture. The browser may include overflow or blank canvas in full-page captures. The DOM receipts supplement clipped regions.
- **RECONSTRUCTION:** [Local preview screenshot](/research/freshservice/fixtures/freshservice-report-sort-menu.png) shows a fictional fixture.

## Structure

- **OBSERVATION:** The provider popover exposed Name, Location, Created By, Created Date, Last Modified by, Last modified date, Ascending and Descending. Last modified date and Descending were selected. The heading-like trigger exposed button behavior.

## Actions

| Action | Result or boundary |
| --- | --- |
| Read and navigate captured views | The provider menu was opened and closed without changing its selection. The local control uses labelled radio inputs and supports Escape with focus restoration. |
| Consequential or uninspected action | Local boundary notice and no request |

## Behavior & States

- **OBSERVATION:** The provider popover exposed Name, Location, Created By, Created Date, Last Modified by, Last modified date, Ascending and Descending. Last modified date and Descending were selected. The heading-like trigger exposed button behavior.
- **RECONSTRUCTION:** The provider menu was opened and closed without changing its selection. The local control uses labelled radio inputs and supports Escape with focus restoration.
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

- **RECOMMENDATION:** A compact sorting popover that separates field selection from direction. The source screenshot records what was seen. The interactive fixture allows safe examination of the reusable pattern.

## AI Context

- **FACT:** Product identity is Freshservice, inspected on October 1, 2026.
- **RECONSTRUCTION:** Fixtures are isolated examples. Report names can be observed vendor definitions while dates and authors are fictional.
- **RECOMMENDATION:** Read the component-specific gaps before generating production contracts from the preview.

## Cross-Component Pattern Note

- **RECOMMENDATION:** Combine with [[freshservice-application-shell]] and [[freshservice-sidebar-navigation]]. Reuse captured states without treating action affordances as verified action completion.

## Competitor Comparisons

- **NOT OBSERVED:** No Freshdesk comparison was verified. No comparative ranking is established by this record.

## Best Observed Approach

- **RECOMMENDATION:** A compact sorting popover that separates field selection from direction. Preserve source attribution and fixture boundaries when adapting the pattern.

## Needs Verification

- **NOT OBSERVED / NEEDS VERIFICATION:** Provider sort selection, ordering after selection, persistence, focus trapping and keyboard arrow navigation were not observed.
- **NOT OBSERVED / NEEDS VERIFICATION:** Provider responsive behavior and assistive-technology interaction remain unverified for report sort menu.

## Sources

- **OBSERVATION:** [Authenticated Freshservice source](https://centilio.freshservice.com/analytics), inspected 2026-10-01.
- **OBSERVATION:** [Source screenshot](/research/freshservice/source/analytics-sort-menu.png) and [capture manifest](/research/freshservice/capture-manifest.json).
- **OBSERVATION:** Private DOM receipts in `Internal/scratch-2026-10/freshservice/`.
- **RECONSTRUCTION:** Local preview source and fixtures in this library.
