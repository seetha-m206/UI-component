---
component: OtterlyAI Content Audit Advanced Controls
ui_category: "Audits > Crawler Identity"
source_product: OtterlyAI
last_verified: 2026-10-01
evidence_state: mixed_observed_reconstructed
status: partial
summary: Content checker showed URL audit entry, an Advanced Audit disclosure, crawler identity selector, header checkbox, and empty history.
---

## Human View

**OBSERVATION:** Content checker showed URL audit entry, an Advanced Audit disclosure, crawler identity selector, header checkbox, and empty history.

**Safe interaction:** Advanced Audit expanded to reveal ChatGPT-User and an optional X-OtterlyAI-Crawler request header. The crawler menu offered ChatGPT-User, OAI-Searchbot, PerplexityCrawler, and GoogleBot.

**Screenshot:** [Fictional local preview](/evidence/otterly/content-audit-advanced-preview.png). The live account screen was visually inspected in the Codex browser. Account-specific report values and prompt text are excluded from this record and fixture.

## AI Context

- **Component boundary:** Independent audits > crawler identity pattern extracted from the authenticated application.
- **Action chain:** Visible control → local selection or navigation → resulting state described above. Unexercised submissions stay labelled needs verification.
- **Fixture:** Fictional local disclosure and crawler selector. No request leaves the preview.
- **Seek lesson (RECOMMENDATION):** Keep user actions, data freshness, and evidence state explicit in the interface.

## Structure and States

- Default and observed states follow the Human View description.
- Local preview uses only fictional data and reversible state.
- **Needs verification:** Audit request shape, header effects on target sites, result scoring, and error states.

## Technical Data

- **OBSERVATION:** The optional header explanation specified X-OtterlyAI-Crawler: geo-audit. The checkbox remained off during observation.
- **NOT OBSERVED:** DOM implementation details, JavaScript source, private network payloads, backend contracts, and responsive breakpoints. No such values are inferred from the visual structure.
- **RECONSTRUCTION:** Fictional local disclosure and crawler selector. No request leaves the preview.

## Sources

- **OBSERVATION:** Authenticated OtterlyAI web application, observed 2026-10-01 through the Codex in-app browser. Screen route and interaction were observed directly.
- **SCREENSHOT:** Fictional local preview capture at the linked project scratch path.
- **EVIDENCE BOUNDARY:** Live account content is not copied into the catalogue. Simulated preview behavior is not a claim about provider behavior.
