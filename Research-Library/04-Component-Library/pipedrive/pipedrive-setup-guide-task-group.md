---
component: "Pipedrive Setup Guide Task Group"
ui_category: "Onboarding > Accordion"
source_product: "Pipedrive"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Pipedrive Setup Guide Task Group

## Location

- **OBSERVED:** Setup Guide task list under Your to-do list and More to explore.

## Screenshot

- **NEEDS VERIFICATION:** Source pixels were inspected but not archived due to authenticated identity and progress data.

## Structure

- **OBSERVED:** Rounded bordered row with section name, miniature progress track, completed/total count and disclosure chevron. Expanded state placed task rows inside the same card.

## Actions

| Action | Observed result |
| --- | --- |
| Open Set up your sales process | Previously expanded group collapsed and the selected group revealed three task rows. |

## Behavior & States

- **OBSERVED:** One group could be expanded while the previously open group collapsed.
- **RECONSTRUCTION:** Local fixture supports expanded and collapsed states without saving progress.

## Rules & Validation

- **NOT OBSERVED:** Whether multiple groups can remain open, how task completion changes the count and persistence after reload.

## Technical Data

- **OBSERVED / DOM:** Expanded and collapsed states appeared in the accessibility tree through updated child content and disclosure imagery.

## Accessibility

- **NEEDS VERIFICATION:** Provider disclosure semantics did not expose an explicit button role for the full group row.

## Human Context

- **RECOMMENDATION:** Keep task category, progress and disclosure state readable in one compact row.

## AI Context

- **RECONSTRUCTION:** Local progress and task copy are fictionalized where they could imply provider activity.

## Needs Verification

- **NEEDS VERIFICATION:** Keyboard disclosure, progress persistence, complete state and responsive layout.

## Sources

- **OBSERVED:** Safe accordion interaction on authenticated Pipedrive Setup Guide, 2026-10-07.
