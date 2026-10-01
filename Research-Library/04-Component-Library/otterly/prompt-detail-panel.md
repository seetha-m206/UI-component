---
component: OtterlyAI Prompt Detail Panel
ui_category: "Overlays > Prompt Evidence Detail"
source_product: OtterlyAI
last_verified: 2026-10-01
evidence_state: mixed_observed_reconstructed
status: partial
summary: Read-only prompt detail overlay with Overview, Responses, and Citations tabs.
---

## Human View

**OBSERVATION:** Selecting a prompt row opened a detail overlay with a close button, date range, engine scope, country, and the selected prompt. Overview displayed intent volume, brand mentions, sentiment, domain citations, total citations, competitor ranking, and coverage chart. Responses displayed a table of AI responses with sentiment, brand mention, domain cited, competitors, and run date. Citations displayed cited URL, brand mention, count, domain category, domain, and competitors.

**Safe interaction:** The Overview, Responses, and Citations tabs changed the panel content without leaving the report. The visible prompt content and responses came from the account and are excluded from this record.

**Screenshot:** [Fictional local preview](./screenshots/prompt-detail-panel-preview.png). No account-specific prompt, response, or citation text was copied into the fixture.

## AI Context

- **Component boundary:** Independent evidence overlay opened from a report prompt row.
- **Action chain:** Prompt row → details overlay → tab selection → scoped evidence table.
- **Fixture:** Fictional prompt, response excerpt, and .example citation URL. Tab changes are local only.
- **Seek lesson (RECOMMENDATION):** Keep response evidence and citation evidence reachable from the same prompt context, with explicit date and engine scope.

## Structure and States

- Observed open state with Overview, Responses, and Citations tabs.
- Observed Overview showed N/A for sentiment and zero own-brand mentions on the inspected prompt. Those values are account-specific and are not treated as product defaults.
- **Needs verification:** Loading, error, empty responses, pagination beyond first page, export result, and exact row-detail behavior.

## Technical Data

- **OBSERVATION:** Tab selection changed the accessible panel and content. The report URL stayed on the Prompts route.
- **NOT OBSERVED:** DOM implementation, private API schema, calculation rules, and download payload.
- **RECONSTRUCTION:** Local React tabs and fictional rows, with no provider request.

## Sources

- **OBSERVATION:** Authenticated OtterlyAI Brand Report Prompts detail overlay, 2026-10-01.
- **SCREENSHOT:** Fictional local preview at the linked path.
- **EVIDENCE BOUNDARY:** Provider response text and customer prompt content are not reproduced.
