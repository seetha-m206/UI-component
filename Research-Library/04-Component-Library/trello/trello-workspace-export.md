---
component: "Trello Workspace Export"
ui_category: "Application Layout > Data Export"
source_product: "Trello"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Premium workspace export creation boundary and export-history empty state."
---

# Component: Trello Workspace Export

## Location

- **OBSERVATION:** `/w/:workspace/export`.

## Screenshot

![Fictional local preview](/research/trello/fixtures/trello-workspace-export.png)

## Structure and Behavior

- **OBSERVATION:** Create-new-export button, raw-attachment option, ZIP content explanation and export-history empty state.
- **RECONSTRUCTION:** Export generation is disabled locally.

## Actions and States

- **NOT OBSERVED:** Create, download or inspect an export, or include raw attachments.
- **NEEDS VERIFICATION:** Generation time, authorization, archive contents and expiration.

## Sources

- **OBSERVATION:** Authenticated Premium Export entry state, 2026-10-08.
