---
component: "Trello Card Detail Dialog"
ui_category: "Overlays and Dialogs > Card Detail Dialog"
source_product: "Trello"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Existing card detail with description, media, attachments, checklist and activity."
---

# Component: Trello Card Detail Dialog

## Location

- **OBSERVATION:** `/c/:cardId/:slug` over the board.

## Screenshot

![Fictional local preview](/research/trello/fixtures/trello-card-detail-dialog.png)

## Structure

- **OBSERVATION:** Cover, list selector, completion control and title lead the dialog.
- **OBSERVATION:** Add-to-card controls precede description, embedded media, attachments and checklist sections.
- **OBSERVATION:** Comment and activity occupy a dedicated right rail.

## Behavior

- **OBSERVATION:** Long card content scrolls independently from the underlying board.
- **RECONSTRUCTION:** Sections collapse locally and comments remain disabled.

## Actions

- **OBSERVATION:** Open and close an existing onboarding card.
- **NOT OBSERVED:** Edit title or description, complete, comment, attach, assign, check items or change list.

## States

- **OBSERVATION:** Incomplete card with cover, description, embedded media, one attachment and zero-percent checklist.
- **NEEDS VERIFICATION:** Autosave, validation, collaborative activity and attachment failure states.

## Rules and Validation

- **RECONSTRUCTION:** All edits and submissions are inert.

## Technical Data

- **OBSERVATION:** Dialog includes editable areas, progress indicator, iframe media and nested semantic sections.

## Lessons

- **RECOMMENDATION:** Keep core work content in the main column and reserve the side rail for conversation history.

## Sources

- **OBSERVATION:** Authenticated Trello card detail, 2026-10-08.
- **NOT OBSERVED:** Card mutations or provider persistence.
