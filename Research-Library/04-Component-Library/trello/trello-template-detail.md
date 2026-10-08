---
component: "Trello Template Detail"
ui_category: "Application Layout > Detail and Preview"
source_product: "Trello"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Template detail page with metadata, read-only board preview and copy boundary."
---

# Component: Trello Template Detail

## Location

- **OBSERVATION:** `/templates/:category/:template`.

## Screenshot

![Fictional local preview](/research/trello/fixtures/trello-template-detail.png)

## Structure and Behavior

- **OBSERVATION:** Breadcrumb, author, copy and view metrics, share boundary, description and embedded read-only board preview.
- **OBSERVATION:** Related templates follow the board preview.
- **RECONSTRUCTION:** The fixture uses a fictional weekly-focus template.

## Actions and States

- **OBSERVATION:** View the public template and related entries.
- **NOT OBSERVED:** Use template, share or copy the board.
- **NEEDS VERIFICATION:** Copy destination selection and resulting board persistence.

## Sources

- **OBSERVATION:** Authenticated template detail, 2026-10-08.
