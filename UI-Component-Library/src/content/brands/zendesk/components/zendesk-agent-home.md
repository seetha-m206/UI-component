---
component: "Zendesk Agent Home"
ui_category: "Application Layout > Agent Home"
source_product: "Zendesk"
last_verified: "2026-10-01"
evidence_state: "source_reviewed"
status: "complete"
summary: "A personal ticket queue combines filters, ticket cards, setup guidance and workload statistics."
---

## Location

- **OBSERVATION:** Authenticated Zendesk reference reviewed on 2026-10-01 in the Codex in-app browser at [agent/home/tickets](https://centiliohelp.zendesk.com/agent/home/tickets).
- **RECOMMENDATION:** A personal ticket queue combines filters, ticket cards, setup guidance and workload statistics. This record belongs to Centilio Care's Customer Support / Helpdesk reference set.

## Structure

- **OBSERVATION:** Page header, count, Status and Channel filters, Recommended sort, ticket card and setup/statistics side column.
- **RECONSTRUCTION:** The interactive preview uses fictional Northstar data. It is independent local React code, not Zendesk source or a connected client.

## Actions

| Element and action | Observed result and boundary |
| --- | --- |
| Screen or control interaction | **OBSERVATION:** Status → Pending → 0 tickets and No tasks match your filters. Clear filters → 1 sample ticket. Ticket title → ticket workspace. |
| Local preview interactions | **RECONSTRUCTION:** Local state changes only. Provider-bound actions show a guard message and issue no request. |
| Provider outcomes | Not exercised: Setup actions and statistic drill-downs were not exercised. Fixture totals are fictional and are not workload metrics. |

## Behavior & States

- **OBSERVATION:** Status → Pending → 0 tickets and No tasks match your filters. Clear filters → 1 sample ticket. Ticket title → ticket workspace.
- **RECONSTRUCTION:** Default fixtures reproduce the observed structure with invented content. Alternative fixtures are illustrative unless the matching state above was directly observed.
- **RECONSTRUCTION:** Disabled fixtures are local simulations. No provider loading failure, timeout, validation error or permission-denied result was deliberately triggered.
- **RECOMMENDATION:** Keep a visible distinction between editable local examples, observed provider affordances and verified provider outcomes.

## Rules & Validation

- **OBSERVATION:** The research exercised read-only navigation, transient menus, reversible queue filtering and table selection. It did not send ticket replies, create records, save configuration or publish content.
- NOT OBSERVED: Setup actions and statistic drill-downs were not exercised. Fixture totals are fictional and are not workload metrics.
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

- **RECOMMENDATION:** A personal ticket queue combines filters, ticket cards, setup guidance and workload statistics. Use it as a reference for Care while preserving permission and submission boundaries.
- Related: [[zendesk-application-shell]], [[zendesk-ticket-workspace]].

## Competitor Comparisons

- NOT OBSERVED: No new side-by-side Freshdesk, Help Scout or Intercom session was performed in this lane. Existing competitor records remain independent evidence.

## Best Observed Approach

- **RECOMMENDATION:** Reuse the observed separation between navigation, local selection and consequential submission. Expose a clear current state before offering actions.

## Human Context

- **RECOMMENDATION:** A personal ticket queue combines filters, ticket cards, setup guidance and workload statistics.
- NOT OBSERVED: Setup actions and statistic drill-downs were not exercised. Fixture totals are fictional and are not workload metrics.

## AI Context

- **OBSERVATION:** Product = Zendesk. Reference = authenticated UI on 2026-10-01. Artifact = zendesk-agent-home. Scope = Application Layout > Agent Home.
- **RECONSTRUCTION:** Fixtures and preview source are local examples, never permission to operate the provider.
- NOT OBSERVED: Setup actions and statistic drill-downs were not exercised. Fixture totals are fictional and are not workload metrics.

## Sources

- **OBSERVATION:** [Authenticated Zendesk screen](https://centiliohelp.zendesk.com/agent/home/tickets), 2026-10-01.
- **OBSERVATION:** Private evidence receipt: Internal/scratch-2026-10/zendesk/evidence/provider-home-status-filter.png. Raw provider captures may contain account details and must not be published.
- **RECONSTRUCTION:** [Local preview screenshot](/evidence/zendesk/zendesk-agent-home.png). This image shows fictional fixture data, not a provider screenshot.
- **OBSERVATION:** Sanitized request metadata and DOM sample: Internal/scratch-2026-10/zendesk/evidence/provider-filter-network.json and provider-dom-styles.json.
- **RECONSTRUCTION:** Source: UI-Component-Library/src/previews/zendesk/Zendesk.tsx and zendesk.module.css.

## Second-Pass Flags

- NOT OBSERVED: Setup actions and statistic drill-downs were not exercised. Fixture totals are fictional and are not workload metrics.
- NOT OBSERVED: Provider save/submit outcomes, failure recovery, full permission coverage and recurring behavior. This is a source-reviewed record, not complete provider verification.
