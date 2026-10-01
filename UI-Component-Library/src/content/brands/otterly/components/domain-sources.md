---
component: OtterlyAI Domain Sources
ui_category: "Analytics > Domain Sources"
source_product: OtterlyAI
last_verified: 2026-10-01
evidence_state: mixed_observed_reconstructed
status: partial
summary: Completed overview shows domain coverage and cited-source distribution, including a donut visualization, source categories, and a domain table.
---

## Human View

**OBSERVATION:** Completed overview shows domain coverage and cited-source distribution, including a donut visualization, source categories, and a domain table. Visible categories included Brand, Social Media, Blogs/Personal Sites, and News/Media.

**Safe interaction:** The local category selector is reversible and uses fictional example domains.

**Screenshot:** [Fictional local preview](./screenshots/domain-sources-preview.png). Account names, metric values, URLs, and response content are excluded.

## AI Context

- **Component boundary:** Independent completed Brand Report overview module.
- **Action chain:** Overview filter context → module control → changed local state or read-only table.
- **Fixture:** The local category selector is reversible and uses fictional example domains.
- **Seek lesson (RECOMMENDATION):** Keep metric scope and evidence context visible when comparing brands or sources.

## Structure and States

- **Observed:** Completed overview state on the authenticated report after initial processing.
- **Observed interaction:** Selecting a source category restricted the adjacent domain table to that category. Clearing the selection restored mixed categories.
- **Needs verification:** Multi-category selection semantics, exact category taxonomy, chart hover details, and how domains are attributed were not inspected.

## Technical Data

- **OBSERVATION:** The module rendered within the authenticated overview with report date, country, and engine scope.
- **NOT OBSERVED:** DOM implementation, private API schema, source calculation, and export payload.
- **RECONSTRUCTION:** Local React preview with fictional data and no provider requests.

## Sources

- **OBSERVATION:** Authenticated OtterlyAI completed Brand Report overview, 2026-10-01.
- **SCREENSHOT:** Fictional local preview at the linked path.
- **EVIDENCE BOUNDARY:** Provider account data is not reproduced.
