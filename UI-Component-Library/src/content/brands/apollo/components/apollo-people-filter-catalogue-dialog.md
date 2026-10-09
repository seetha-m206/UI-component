---
component: Apollo People Filter Catalogue Dialog
ui_category: 'Filters > Searchable Filter Catalogue'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Searchable full-height filter catalogue with pinned filters, person and company attributes, engagement activity, source and miscellaneous groups.
---

# Component: Apollo People Filter Catalogue Dialog

## Structure

Dialog title and close → filter search → type selector → record-count summary → Apply Filters → pinned filters → grouped catalogue.

## Behavior & States

- Opening did not apply a filter.
- The dialog listed pinned filters first and allowed pin or unpin affordances beside eligible entries.
- Groups were Person Info, Company Info, Engagement Activity, Created Source and Misc.
- Apply Filters was visible but was not pressed.
- Search, type filtering, pinning and unpinning were not exercised against Apollo.

## Observed catalogue

- **Person:** Persona, Email Status, Name, Education, Awards & Certifications, Work URLs, Time Zone, experience, job change, role tenure, territories and deleted-person state.
- **Company:** Lookalikes, employees, market segments, SIC and NAICS, buying intent, technologies, departmental headcount, growth, revenue, funding, founding year, languages, job postings, news and website visitors.
- **Engagement:** Sequences, workflows, email events, call restrictions and conversation signals.
- **Source and misc:** Source, CSV import, data requests, creation date, phone confidence, parent companies, lists, AI filters, scores, owner, stage, custom fields and signals.

## Rules & Validation

- Do not copy live record counts into reusable fixtures. Use clearly synthetic aggregates.
- Pinning and applying filters are provider state changes and remain disabled locally.
- Mark locked or plan-gated filters independently from ordinary filters.
- Do not imply that a visible filter has data coverage for every record.

## Technical Data

- **OBSERVED:** The dialog exposed a Search filters searchbox, Type: All control and Apply Filters.
- **OBSERVED:** Awards & Certifications carried a Beta label.
- **NOT OBSERVED:** Search results, type menu, pin persistence, applied queries, result updates, errors and plan enforcement.
- **NEEDS VERIFICATION:** Filter schema, operators, combinations, URL serialization and request payloads.

## Accessibility

The surface exposed a named Filters dialog and Close button. Many catalogue entries were generic text rather than buttons in the captured tree. A reusable catalogue should expose every actionable row and pin state semantically.

## Sources

- **OBSERVATION:** Authenticated full filter catalogue opened and closed without changes, 2026-10-09.
- **RECONSTRUCTION:** Fictional count and disabled filter actions.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-people-filter-catalogue-dialog.png).
- **OBSERVED:** Provider screenshots were displayed transiently only and are not retained.

## Cross-Component Pattern Note

- **RECONSTRUCTION:** Reuse explicit empty, disabled and plan-gated states while keeping consequential provider actions inert.
- **RECONSTRUCTION:** Related records: [[apollo-people-discovery-empty-state]] and [[apollo-people-filter-sidebar]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-people-filter-catalogue-dialog.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.
