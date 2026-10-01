---
component: "Freshservice Analytics Report Catalogue"
ui_category: "Enterprise Tables > Data Table"
source_product: "Freshservice"
last_verified: "2026-10-01"
evidence_state: "source_reviewed"
---

# Component: Freshservice Analytics Report Catalogue

Product → Screen → Component → Action → Behavior → States → Rules → Technical Data → Reference

## Location

- **OBSERVATION:** Authenticated Freshservice workspace on 2026-10-01. This is a Freshservice reference for Centilio Care, not a Freshdesk observation.
- **OBSERVATION:** Source route: [Freshservice Analytics Report Catalogue](https://centilio.freshservice.com/analytics).
- **RECONSTRUCTION:** Local React state. No provider requests or durable changes.

## Screenshot

![Observed Freshservice Analytics Report Catalogue](/research/freshservice/source/analytics-catalogue.png)

- **OBSERVATION:** Native source capture. The browser may include overflow or blank canvas in full-page captures. The DOM receipts supplement clipped regions.
- **RECONSTRUCTION:** [Local preview screenshot](/research/freshservice/fixtures/freshservice-analytics-catalogue.png) shows a fictional fixture.

## Structure

- **OBSERVATION:** Analytics was embedded in an iframe titled Analytics with id fv-frame. All reports showed ten system-curated report definitions. Switching to Folders showed four curated folders. Report contents were not opened.

## Actions

| Action | Result or boundary |
| --- | --- |
| Read and navigate captured views | Reports and Folders was exercised in the provider. Local names match observed catalogue definitions and dates are fictional. Name sorting works locally. Other metadata fields expose selection only. Report opening, page changes, creation and favorite actions were not exercised. |
| Consequential or uninspected action | Local boundary notice and no request |

## Behavior & States

- **OBSERVATION:** Analytics was embedded in an iframe titled Analytics with id fv-frame. All reports showed ten system-curated report definitions. Switching to Folders showed four curated folders. Report contents were not opened.
- **RECONSTRUCTION:** Reports and Folders was exercised in the provider. Local names match observed catalogue definitions and dates are fictional. Name sorting works locally. Other metadata fields expose selection only. Report opening, page changes, creation and favorite actions were not exercised.
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

- **RECOMMENDATION:** A report catalogue with a Reports and Folders switch, metadata columns and curated entries. The source screenshot records what was seen. The interactive fixture allows safe examination of the reusable pattern.

## AI Context

- **FACT:** Product identity is Freshservice, inspected on October 1, 2026.
- **RECONSTRUCTION:** Fixtures are isolated examples. Report names can be observed vendor definitions while dates and authors are fictional.
- **RECOMMENDATION:** Read the component-specific gaps before generating production contracts from the preview.

## Cross-Component Pattern Note

- **RECOMMENDATION:** Combine with [[freshservice-application-shell]] and [[freshservice-sidebar-navigation]]. Reuse captured states without treating action affordances as verified action completion.

## Competitor Comparisons

- **NOT OBSERVED:** No Freshdesk comparison was verified. No comparative ranking is established by this record.

## Best Observed Approach

- **RECOMMENDATION:** A report catalogue with a Reports and Folders switch, metadata columns and curated entries. Preserve source attribution and fixture boundaries when adapting the pattern.

## Needs Verification

- **NOT OBSERVED / NEEDS VERIFICATION:** Actual report output, calculations, data freshness, provider sorting, pagination, favorites, sharing and report creation were not observed.
- **NOT OBSERVED / NEEDS VERIFICATION:** Provider responsive behavior and assistive-technology interaction remain unverified for analytics report catalogue.

## Sources

- **OBSERVATION:** [Authenticated Freshservice source](https://centilio.freshservice.com/analytics), inspected 2026-10-01.
- **OBSERVATION:** [Source screenshot](/research/freshservice/source/analytics-catalogue.png) and [capture manifest](/research/freshservice/capture-manifest.json).
- **OBSERVATION:** Private DOM receipts in `Internal/scratch-2026-10/freshservice/`.
- **RECONSTRUCTION:** Local preview source and fixtures in this library.
