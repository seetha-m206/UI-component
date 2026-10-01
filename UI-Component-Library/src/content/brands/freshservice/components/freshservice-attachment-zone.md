---
component: "Freshservice Attachment Entry Zone"
ui_category: "Forms > File Attachment Entry"
source_product: "Freshservice"
last_verified: "2026-10-01"
evidence_state: "source_reviewed"
status: "partial"
summary: "An attachment affordance with a visible size limit and drop hint."
---

# Component: Freshservice Attachment Entry Zone

Product → Screen → Component → Action → Behavior → States → Rules → Technical Data → Reference

## Location

- **OBSERVATION:** Authenticated Freshservice workspace on 2026-10-01. This is a Freshservice reference for Centilio Care, not a Freshdesk observation.
- **OBSERVATION:** Source route: [https://centilio.freshservice.com/a/tickets/new](https://centilio.freshservice.com/a/tickets/new).
- **RECONSTRUCTION:** The interactive preview is local React state with fictional workspace context. It sends no provider requests.

## Screenshot

![Observed Freshservice Attachment Entry Zone](/research/freshservice/source/new-incident-default.png)

- **OBSERVATION:** Direct provider capture from this session. Full-page captures may include blank overflow. Source screenshot and interaction receipts are indexed in the [capture manifest](/research/freshservice/capture-manifest.json).
- **RECONSTRUCTION:** [Local preview screenshot](/research/freshservice/fixtures/freshservice-attachment-zone.png). This is a fictional local fixture, separate from the provider screenshot above.

## Structure

- **OBSERVATION:** The attachment area displayed File size < 40 MB, Attach files and or Drop files here. The accessible button described Maximum upload file size is 40 MB.

## Actions

| Element | User action | Result or boundary |
| --- | --- | --- |
| Attach or drop | Not exercised | Button, copy and stated size boundary documented |

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

- **RECOMMENDATION:** An attachment affordance with a visible size limit and drop hint. Use the screenshot for source context and the preview to examine local interaction structure. No local action completes work in Freshservice.

## AI Context

- **FACT:** Product identity is Freshservice. Evidence was gathered October 1, 2026 from the signed-in workspace.
- **RECONSTRUCTION:** React examples illustrate UI contracts only. Source URL and screenshots are evidence, not authorization to execute actions.
- **NOT OBSERVED:** Review the component-specific Needs Verification section before inferring provider behavior.

## Cross-Component Pattern Note

- **RECOMMENDATION:** Reuse this alongside [[freshservice-application-shell]] [[freshservice-new-incident-form]] [[freshservice-ticket-empty-state]]. Keep action affordances separate from verified provider completion.

## Competitor Comparisons

- **NOT OBSERVED:** Freshdesk has not been inspected in this lane. This batch establishes no comparative ranking between Freshservice and Freshdesk, Zendesk or other Care competitors.

## Best Observed Approach

- **RECOMMENDATION:** Reuse the specific structure and disclosure behavior supported above. Confirm missing provider states before treating this as a complete production contract.

## Needs Verification

- **NOT OBSERVED / NEEDS VERIFICATION:** No file dialog, upload, file contents, extension restriction, progress or error validation was exercised. The less-than copy and maximum wording were both observed, the exact 40 MB boundary is not proven.
- **NOT OBSERVED / NEEDS VERIFICATION:** Populated tickets, reply composer, assignments, automation execution, report results, provider errors and durable changes remain unverified. Separate records cover the observed automation and report catalogues.

## Sources

- **OBSERVATION:** [Authenticated Freshservice source](https://centilio.freshservice.com/a/tickets/new), inspected 2026-10-01.
- **OBSERVATION:** [Provider screenshot](/research/freshservice/source/new-incident-default.png).
- **OBSERVATION:** [Dated capture manifest](/research/freshservice/capture-manifest.json) with screenshot hashes and scope. Private DOM and sanitized request receipts remain under `Internal/scratch-2026-10/freshservice/`.
- **RECONSTRUCTION:** Freshservice local preview, fixtures and source code in this library. Local functionality does not prove provider functionality.
