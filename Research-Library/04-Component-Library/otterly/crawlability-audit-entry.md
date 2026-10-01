---
component: OtterlyAI Crawlability Audit Entry
ui_category: "Audits > URL Audit Entry"
source_product: OtterlyAI
last_verified: 2026-10-01
evidence_state: mixed_observed_reconstructed
status: partial
summary: Crawlability checker showed a URL field, monthly usage counter, disabled Start audit, searchable Audit history, and a No audits yet row.
---

## Human View

**OBSERVATION:** Crawlability checker showed a URL field, monthly usage counter, disabled Start audit, searchable Audit history, and a No audits yet row.

**Safe interaction:** The button was disabled with an empty URL. No audit was run.

**Screenshot:** [Fictional local preview](./screenshots/crawlability-audit-entry-preview.png). The live account screen was visually inspected in the Codex browser. Account-specific report values and prompt text are excluded from this record and fixture.

## AI Context

- **Component boundary:** Independent audits > url audit entry pattern extracted from the authenticated application.
- **Action chain:** Visible control → local selection or navigation → resulting state described above. Unexercised submissions stay labelled needs verification.
- **Fixture:** Fictional URL input and local button enablement, with no crawler request.
- **Seek lesson (RECOMMENDATION):** Keep user actions, data freshness, and evidence state explicit in the interface.

## Structure and States

- Default and observed states follow the Human View description.
- Local preview uses only fictional data and reversible state.
- **Needs verification:** URL validation, request cost, crawler response, results, errors, and quotas after use.

## Technical Data

- **OBSERVATION:** The entry screen said it checks crawlability for AI search user agents. The history table had URL and Date columns.
- **NOT OBSERVED:** DOM implementation details, JavaScript source, private network payloads, backend contracts, and responsive breakpoints. No such values are inferred from the visual structure.
- **RECONSTRUCTION:** Fictional URL input and local button enablement, with no crawler request.

## Sources

- **OBSERVATION:** Authenticated OtterlyAI web application, observed 2026-10-01 through the Codex in-app browser. Screen route and interaction were observed directly.
- **SCREENSHOT:** Fictional local preview capture at the linked project scratch path.
- **EVIDENCE BOUNDARY:** Live account content is not copied into the catalogue. Simulated preview behavior is not a claim about provider behavior.
