---
component: "Freshservice Application Shell"
ui_category: "Application Layout > App Shell"
source_product: "Freshservice"
last_verified: "2026-10-01"
evidence_state: "source_reviewed"
status: "partial"
summary: "A service desk shell combining the product rail, trial strip, global header and onboarding workspace."
---

# Component: Freshservice Application Shell

Product → Screen → Component → Action → Behavior → States → Rules → Technical Data → Reference

## Location

- **OBSERVATION:** Authenticated Freshservice workspace on 2026-10-01. This is a Freshservice reference for Centilio Care, not a Freshdesk observation.
- **OBSERVATION:** Source route: [https://centilio.freshservice.com/a/onboarding](https://centilio.freshservice.com/a/onboarding).
- **RECONSTRUCTION:** The interactive preview is local React state with fictional workspace context. It sends no provider requests.

## Screenshot

![Observed Freshservice Application Shell](/research/freshservice/source/onboarding-default.png)

- **OBSERVATION:** Direct provider capture from this session. Full-page captures may include blank overflow. Source screenshot and interaction receipts are indexed in the [capture manifest](/research/freshservice/capture-manifest.json).
- **RECONSTRUCTION:** [Local preview screenshot](/research/freshservice/fixtures/freshservice-application-shell.png). This is a fictional local fixture, separate from the provider screenshot above.

## Structure

- **OBSERVATION:** The source shows a 64px collapsed rail, a trial strip, Onboarding Guide header, Quick setup, Explore Freshservice and Customized for You. The captured viewport was 653 by 1224 CSS pixels and horizontal overflow was present.

## Actions

| Element | User action | Result or boundary |
| --- | --- | --- |
| Navigation expansion | Activate Expand with Enter | Rail exposes labels and Tickets List and Board children |
| Global launcher | Activate Create with Enter | Multi-column action panel appears |

## Behavior & States

- **OBSERVATION:** Only the states described above were observed in the provider. Native pointer attempts initially produced no visible state change. Keyboard activation established the recorded disclosure and navigation behavior.
- **RECONSTRUCTION:** Default fixture. No synthetic loading, error, success or populated provider results are claimed.
- **RECONSTRUCTION:** Local Enter/Space activation and Escape handling use semantic HTML controls. Uninspected destinations show a boundary notice.

## Rules & Validation

- **NOT OBSERVED:** Provider completion and validation remain outside the captured source scope. Specific gaps appear in Needs Verification below.
- **RECONSTRUCTION:** Create, invite, purchase, sample generation, upload, configuration and submit actions are guarded. The form also prevents native form submission, including keyboard submission.
- **RECOMMENDATION:** Preserve the distinction between provider observations and local fixtures when reusing this pattern. Do not infer Freshdesk behavior or a backend contract from these records.

## Technical Data

- **OBSERVATION / DOM:** Evidence captured from the rendered accessibility tree and read-only DOM. Disclosure controls exposed expanded state. Provider form controls included comboboxes, required-marker labels, an application region for Description and a Related articles region.
- **OBSERVATION / CSS:** The incident source used InterVariable with system fallbacks, 14px body text, dark text rgb(18,51,76), 32px inputs and buttons, 8px field radii and a blue rgb(39,108,240) Submit button. These are sampled styles, not a full design-token inventory.
- **OBSERVATION / Network:** During ticket-list navigation, GET `/api/_/ticket_filters/new_and_my_open` received HTTP 200. Only method, origin, path, status and event metadata were retained. No request headers, payloads, cookies or response bodies were retained. No network contract is inferred for this individual component.
- **NOT OBSERVED / JavaScript:** Private event handlers, source implementation, authorization logic, state persistence and server error paths were not inspected. Ember-style DOM identifiers are visible, architecture and versions are not established.
- **NOT OBSERVED / Motion:** Transition timing and reduced-motion behavior were not measured.
- **RECONSTRUCTION:** Shared implementation is `src/previews/freshservice-shared/Freshservice.tsx`, with per-component wrappers, fixtures and preview configuration. The Code tab includes the shared implementation and stylesheet.

## Accessibility

- **OBSERVATION:** Labels, headings, disclosure expanded states and form control roles were inspected. The provider has not received a complete accessibility audit.
- **RECONSTRUCTION:** Use keyboard-reachable native controls, explicit labels, focus outlines, live boundary notices and Escape-to-trigger focus restoration for local popovers. Native select internals differ from the provider custom comboboxes.

## Human Context

- **RECOMMENDATION:** A service desk shell combining the product rail, trial strip, global header and onboarding workspace. Use the screenshot for source context and the preview to examine local interaction structure. No local action completes work in Freshservice.

## AI Context

- **FACT:** Product identity is Freshservice. Evidence was gathered October 1, 2026 from the signed-in workspace.
- **RECONSTRUCTION:** React examples illustrate UI contracts only. Source URL and screenshots are evidence, not authorization to execute actions.
- **NOT OBSERVED:** Review the component-specific Needs Verification section before inferring provider behavior.

## Cross-Component Pattern Note

- **RECOMMENDATION:** Reuse this alongside [[freshservice-new-incident-form]] [[freshservice-ticket-empty-state]] [[freshservice-feature-accordion]]. Keep action affordances separate from verified provider completion.

## Competitor Comparisons

- **NOT OBSERVED:** Freshdesk has not been inspected in this lane. This batch establishes no comparative ranking between Freshservice and Freshdesk, Zendesk or other Care competitors.

## Best Observed Approach

- **RECOMMENDATION:** Reuse the specific structure and disclosure behavior supported above. Confirm missing provider states before treating this as a complete production contract.

## Needs Verification

- **NOT OBSERVED / NEEDS VERIFICATION:** Broad desktop responsiveness, destination modules, settings persistence and all authenticated permissions remain unverified.
- **NOT OBSERVED / NEEDS VERIFICATION:** Populated tickets, reply composer, assignments, automation execution, report results, provider errors and durable changes remain unverified. Separate records cover the observed automation and report catalogues.

## Sources

- **OBSERVATION:** [Authenticated Freshservice source](https://centilio.freshservice.com/a/onboarding), inspected 2026-10-01.
- **OBSERVATION:** [Provider screenshot](/research/freshservice/source/onboarding-default.png).
- **OBSERVATION:** [Dated capture manifest](/research/freshservice/capture-manifest.json) with screenshot hashes and scope. Private DOM and sanitized request receipts remain under `Internal/scratch-2026-10/freshservice/`.
- **RECONSTRUCTION:** Freshservice local preview, fixtures and source code in this library. Local functionality does not prove provider functionality.
