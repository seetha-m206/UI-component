---
component: "Freshservice Knowledge Drafts Folder"
ui_category: "Customer Support > Helpdesk > Knowledge"
source_product: "Freshservice"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
status: "complete"
---

# Component: Freshservice Knowledge Drafts Folder

Product → Screen → Component → Action → Behavior → States → Rules → Technical Data → Reference

## Location

- **OBSERVATION:** Authenticated Freshservice screen inspected on 2026-10-05. This is a Freshservice reference for Centilio Care, not a Freshdesk observation.
- **OBSERVATION:** Source route: [Freshservice Knowledge Drafts Folder](https://centilio.freshservice.com/a/solutions/categories/41000063795/folders/41000065493).
- **RECONSTRUCTION:** Local React state using fictional content. No provider requests or durable changes.

## Screenshot

![Fictional local preview](/research/freshservice/fixtures/freshservice-knowledge-folder.png)

- **OBSERVATION:** Native source screenshot and DOM receipt were captured privately at `Internal/scratch-2026-10/freshservice/deep-2026-10-05/knowledge-drafts-folder.png` and `knowledge-drafts-folder.dom.txt`. Their hashes are indexed in the capture manifest. Source material is kept out of the public catalogue because account-specific information may be visible.
- **RECONSTRUCTION:** The screenshot above is a local fictional fixture, not a source screenshot.

## Structure

- **OBSERVATION:** The Drafts folder is empty, counts zero folders and articles, and states Visible to All and Managed by All Groups.

## Actions

| Action | Result or boundary |
| --- | --- |
| Observed safe action | The overflow exposes View on Portal. Its destination was not exercised. |
| Local inputs, selections and disclosures | Update only the reconstruction state |
| Save, create, activate, apply, upload, delete or other consequential action | Boundary notice or disabled control. No provider request |

## Behavior & States

- **OBSERVATION:** The Drafts folder is empty, counts zero folders and articles, and states Visible to All and Managed by All Groups.
- **RECONSTRUCTION:** The fixture reproduces the bounded visible structure and safe local state changes.
- **NOT OBSERVED:** Provider completion, validation responses, permissions, persistence and downstream effects were not exercised.

## Rules & Validation

- **RECONSTRUCTION:** Consequential controls are guarded. No provider create, save, activation, import, upload or filter application occurs.
- **RECOMMENDATION:** Keep source observation, local behavior and unverified provider execution visibly distinct.

## Technical Data

- **OBSERVATION / DOM:** Visible labels, roles, options and selected states were captured from the authenticated UI.
- **NOT OBSERVED / JavaScript and Network:** Private handlers, payload contracts, authorization and persistence were not inspected.
- **RECONSTRUCTION:** Shared implementation is `src/previews/freshservice-shared/FreshserviceAdminKnowledge.tsx` with component-specific wrapper and fixtures.
- **NOT OBSERVED / Motion:** Timing and reduced-motion behavior were not measured.

## Accessibility

- **OBSERVATION:** Visible control names and roles were captured. This is not a full accessibility audit.
- **RECONSTRUCTION:** Native labelled controls, keyboard-operable local state and a live boundary notice are provided.

## Human Context

- **RECOMMENDATION:** Use this record to inspect the knowledge drafts folder pattern while preserving action and evidence boundaries.

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

- **RECOMMENDATION:** Compare [[freshservice-knowledge-category]] for adjacent structure and evidence boundaries.

## Needs Verification

- **NOT OBSERVED / NEEDS VERIFICATION:** Provider action completion, error states, permission variants, responsive behavior and assistive-technology behavior remain unverified.

## Sources

- **OBSERVATION:** [Authenticated Freshservice source](https://centilio.freshservice.com/a/solutions/categories/41000063795/folders/41000065493), inspected 2026-10-05.
- **OBSERVATION:** Private screenshot and DOM receipt indexed in the [capture manifest](/research/freshservice/capture-manifest.json).
- **RECONSTRUCTION:** Local preview source and fixtures in this library.
