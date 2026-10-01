---
component: "Zendesk Knowledge Inventory"
ui_category: "Enterprise Tables > Knowledge Inventory"
source_product: "Zendesk"
last_verified: "2026-10-01"
evidence_state: "source_reviewed"
---

## Location

- **OBSERVATION:** Authenticated Zendesk reference reviewed on 2026-10-01 in the Codex in-app browser at [knowledge/lists/default/1/1](https://centiliohelp.zendesk.com/knowledge/lists/default/1/1).
- **RECOMMENDATION:** Knowledge administration provides article lifecycle lists, search and optional table columns. This record belongs to Centilio Care's Customer Support / Helpdesk reference set.

## Structure

- **OBSERVATION:** Product header, content rail, All articles/Published/Drafts/AI-generated/Archived, procedures/connections groups, title, search, Filter, Save search as list and article table.
- **RECONSTRUCTION:** The interactive preview uses fictional Northstar data. It is independent local React code, not Zendesk source or a connected client.

## Actions

| Element and action | Observed result and boundary |
| --- | --- |
| Screen or control interaction | **OBSERVATION:** Archived 0 → There are currently no results. All articles → populated list returns. Show and hide columns → eight checkbox options. |
| Local preview interactions | **RECONSTRUCTION:** Local state changes only. Provider-bound actions show a guard message and issue no request. |
| Provider outcomes | Not exercised: No article was edited, generated, published, archived or selected for bulk action. Search saving, filters, permissions and connections were not exercised. Preview counts and article names are fictional. |

## Behavior & States

- **OBSERVATION:** Archived 0 → There are currently no results. All articles → populated list returns. Show and hide columns → eight checkbox options.
- **RECONSTRUCTION:** Default fixtures reproduce the observed structure with invented content. Alternative fixtures are illustrative unless the matching state above was directly observed.
- **RECONSTRUCTION:** Disabled fixtures are local simulations. No provider loading failure, timeout, validation error or permission-denied result was deliberately triggered.
- **RECOMMENDATION:** Keep a visible distinction between editable local examples, observed provider affordances and verified provider outcomes.

## Rules & Validation

- **OBSERVATION:** The research exercised read-only navigation, transient menus, reversible queue filtering and table selection. It did not send ticket replies, create records, save configuration or publish content.
- NOT OBSERVED: No article was edited, generated, published, archived or selected for bulk action. Search saving, filters, permissions and connections were not exercised. Preview counts and article names are fictional.
- **RECONSTRUCTION:** No fetch, external navigation, storage, paid action or provider mutation is implemented in this preview.
- **RECONSTRUCTION:** Local form inputs demonstrate interaction only. They do not claim Zendesk required-field, permission or persistence rules.

## Technical Data

- **OBSERVATION:** Evidence includes authenticated accessibility snapshots and screenshots. Provider screenshots are private local scratch files, not public library assets.
- **OBSERVATION:** Sampled agent controls use system-ui typography, approximately 14px text, 32px header buttons and 40px queue filter triggers. DOM includes aria-expanded, menu/listbox semantics and labelled controls.
- **OBSERVATION:** Ticket priority DOM identifies Garden dropdowns combobox version 9.14.0 and container version 2.0.8. This identifies the sampled control, not the whole application stack.
- **OBSERVATION:** During the Agent Home filter capture interval, metadata showed POST /api/graphql with HTTP 200 and background telemetry. Requests were observed passively. Bodies, cookies and authorization headers were not retained.
- NOT OBSERVED: Exact JS handler source, GraphQL operations, response schema, validation contracts, animations, backend architecture and exhaustive accessibility behavior.
- **RECONSTRUCTION:** React state drives local filters, disclosures, menu choices and guards. Desktop, tablet and narrow layouts are local design adaptations. No claim is made that Zendesk uses these breakpoints.

## Accessibility

- **OBSERVATION:** Source controls expose labelled buttons, menu/listbox roles, selection and expanded states. Keyboard Space opened the priority, reply and submission menus.
- **RECONSTRUCTION:** Menus support Arrow Up/Down, Home, End and Escape. Closing a menu restores trigger focus. Preview dialogs contain tab focus and return it when closed.
- NOT OBSERVED: A complete provider screen-reader audit and all provider focus-return paths. Local checks cannot certify provider accessibility.

## Cross-Component Pattern Note

- **RECOMMENDATION:** Knowledge administration provides article lifecycle lists, search and optional table columns. Use it as a reference for Care while preserving permission and submission boundaries.
- Related: [[zendesk-application-shell]], [[zendesk-ticket-workspace]], [[zendesk-agent-home]].

## Competitor Comparisons

- NOT OBSERVED: No new side-by-side Freshdesk, Help Scout or Intercom session was performed in this lane. Existing competitor records remain independent evidence.

## Best Observed Approach

- **RECOMMENDATION:** Reuse the observed separation between navigation, local selection and consequential submission. Expose a clear current state before offering actions.

## Human Context

- **RECOMMENDATION:** Knowledge administration provides article lifecycle lists, search and optional table columns.
- NOT OBSERVED: No article was edited, generated, published, archived or selected for bulk action. Search saving, filters, permissions and connections were not exercised. Preview counts and article names are fictional.

## AI Context

- **OBSERVATION:** Product = Zendesk. Reference = authenticated UI on 2026-10-01. Artifact = zendesk-knowledge-inventory. Scope = Enterprise Tables > Knowledge Inventory.
- **RECONSTRUCTION:** Fixtures and preview source are local examples, never permission to operate the provider.
- NOT OBSERVED: No article was edited, generated, published, archived or selected for bulk action. Search saving, filters, permissions and connections were not exercised. Preview counts and article names are fictional.

## Sources

- **OBSERVATION:** [Authenticated Zendesk screen](https://centiliohelp.zendesk.com/knowledge/lists/default/1/1), 2026-10-01.
- **OBSERVATION:** Private evidence receipt: Internal/scratch-2026-10/zendesk/evidence/provider-knowledge-admin.png. Raw provider captures may contain account details and must not be published.
- **RECONSTRUCTION:** [Local preview screenshot](/evidence/zendesk/zendesk-knowledge-inventory.png). This image shows fictional fixture data, not a provider screenshot.
- **OBSERVATION:** Sanitized request metadata and DOM sample: Internal/scratch-2026-10/zendesk/evidence/provider-filter-network.json and provider-dom-styles.json.
- **RECONSTRUCTION:** Source: UI-Component-Library/src/previews/zendesk/Zendesk.tsx and zendesk.module.css.

## Second-Pass Flags

- NOT OBSERVED: No article was edited, generated, published, archived or selected for bulk action. Search saving, filters, permissions and connections were not exercised. Preview counts and article names are fictional.
- NOT OBSERVED: Provider save/submit outcomes, failure recovery, full permission coverage and recurring behavior. This is a source-reviewed record, not complete provider verification.
