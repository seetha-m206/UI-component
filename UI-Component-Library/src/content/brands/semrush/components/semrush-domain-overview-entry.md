---
component: Semrush Domain Overview Entry
ui_category: 'Application Layout > Domain Analysis Entry Screen'
source_product: Semrush
last_verified: 2026-09-30
evidence_state: mixed_observed_reconstructed
status: complete
summary: Authenticated Domain Overview entry screen with report query, country scope, recent analysis shortcut, and explanatory capability cards.
---

# Component: Semrush Domain Overview Entry

## Human View

Authenticated Domain Overview entry screen with report query, country scope, recent analysis shortcut, and explanatory capability cards.

## State Fixtures

Default entry, typed query, enabled Search, recent-query prefill, and guarded local feedback.

## Technical View

The report setup keeps the domain field, country selector, and Search action in one horizontal control group. A Last checked shortcut restores a prior domain without creating a project. Capability cards explain downstream report families.

## AI Context

Treat Last checked as query history, not evidence that a fresh analysis was submitted. The local fixture must never call Semrush.

## Evidence Boundary

- **OBSERVED:** Authenticated entry screen, domain input, Worldwide selector, Search button, Last checked shortcut, four explanatory sections, and private-demo CTA.
- **RECONSTRUCTION:** Fictional domain, local prefill, disabled-to-enabled Search state, and guarded feedback.
- **NOT OBSERVED:** Country menu contents, validation errors, Search submission, request lifecycle, or demo request.

## Sources

- Authenticated Semrush Domain Overview entry and report screens, 2026-09-30.
- [[semrush-domain-overview-report]]
