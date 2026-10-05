---
component: "Freshservice Knowledge Base Workspace"
ui_category: "Application Layout > Workspace Shell"
source_product: "Freshservice"
last_verified: "2026-10-01"
evidence_state: "source_reviewed"
status: "complete"
summary: "A knowledge-base navigation rail with distinct empty article, approval and review views."
---

# Component: Freshservice Knowledge Base Workspace

Product → Screen → Component → Action → Behavior → States → Rules → Technical Data → Reference

## Location

- **OBSERVATION:** Authenticated Freshservice workspace on 2026-10-01. This is a Freshservice reference for Centilio Care, not a Freshdesk observation.
- **OBSERVATION:** Source route: [Freshservice Knowledge Base Workspace](https://centilio.freshservice.com/a/solutions/articles/filters/all_articles).
- **RECONSTRUCTION:** Local React state. No provider requests or durable changes.

## Screenshot

![Observed Freshservice Knowledge Base Workspace](/research/freshservice/source/knowledge-base-empty.png)

- **OBSERVATION:** Native source capture. The browser may include overflow or blank canvas in full-page captures. The DOM receipts supplement clipped regions.
- **RECONSTRUCTION:** [Local preview screenshot](/research/freshservice/fixtures/freshservice-knowledge-workspace.png) shows a fictional fixture.

## Structure

- **OBSERVATION:** All Articles, Article Templates, Approvals and Articles to review navigation was exercised. All Articles showed Create your first article. Approvals showed No approvals found. Review showed No articles to review. Categories Default Category and IT and Trash were visible.

## Actions

| Action | Result or boundary |
| --- | --- |
| Read and navigate captured views | Local navigation switches between captured empty states. Create, Import, category and sample-data actions only display a boundary notice. |
| Consequential or uninspected action | Local boundary notice and no request |

## Behavior & States

- **OBSERVATION:** All Articles, Article Templates, Approvals and Articles to review navigation was exercised. All Articles showed Create your first article. Approvals showed No approvals found. Review showed No articles to review. Categories Default Category and IT and Trash were visible.
- **RECONSTRUCTION:** Local navigation switches between captured empty states. Create, Import, category and sample-data actions only display a boundary notice.
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

- **RECOMMENDATION:** A knowledge-base navigation rail with distinct empty article, approval and review views. The source screenshot records what was seen. The interactive fixture allows safe examination of the reusable pattern.

## AI Context

- **FACT:** Product identity is Freshservice, inspected on October 1, 2026.
- **RECONSTRUCTION:** Fixtures are isolated examples. Report names can be observed vendor definitions while dates and authors are fictional.
- **RECOMMENDATION:** Read the component-specific gaps before generating production contracts from the preview.

## Cross-Component Pattern Note

- **RECOMMENDATION:** Combine with [[freshservice-application-shell]] and [[freshservice-sidebar-navigation]]. Reuse captured states without treating action affordances as verified action completion.

## Competitor Comparisons

- **NOT OBSERVED:** No Freshdesk comparison was verified. No comparative ranking is established by this record.

## Best Observed Approach

- **RECOMMENDATION:** A knowledge-base navigation rail with distinct empty article, approval and review views. Preserve source attribution and fixture boundaries when adapting the pattern.

## Needs Verification

- **NOT OBSERVED / NEEDS VERIFICATION:** Article creation, editing, publishing, import, category contents and actual approval or review actions were not observed.
- **NOT OBSERVED / NEEDS VERIFICATION:** Provider responsive behavior and assistive-technology interaction remain unverified for knowledge base workspace.

## Sources

- **OBSERVATION:** [Authenticated Freshservice source](https://centilio.freshservice.com/a/solutions/articles/filters/all_articles), inspected 2026-10-01.
- **OBSERVATION:** [Source screenshot](/research/freshservice/source/knowledge-base-empty.png) and [capture manifest](/research/freshservice/capture-manifest.json).
- **OBSERVATION:** Private DOM receipts in `Internal/scratch-2026-10/freshservice/`.
- **RECONSTRUCTION:** Local preview source and fixtures in this library.
