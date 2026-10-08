---
component: 'Gorgias Macro Library'
ui_category: 'Messaging > Saved Replies and Actions'
source_product: 'Gorgias'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Searchable macro table with language and tag filters, active or archived tabs, usage counts and guarded row actions.'
---

# Component: Gorgias Macro Library

## Location

- **OBSERVATION:** Workflows > Macros at `/app/workflows/macros/active`.

## Screenshot

![Fictional local preview](/research/gorgias/fixtures/gorgias-macro-library.png)

## Structure

- **OBSERVATION:** Header includes search, language, tags, Create macro and bulk-action entry.
- **OBSERVATION:** Explanation states that macros combine personalized responses with ticket actions.
- **OBSERVATION:** Active and Archived navigation precedes a table with Macro, Tags, Language, Usage count and row actions.
- **OBSERVATION:** Two provider-default generic macros were present with English language and zero usage.

## Actions

| Action | Result or boundary |
| --- | --- |
| Search or filter | Controls observed but not changed |
| Create, archive or open row actions | Never exercised |
| Select macro | Never exercised |

## Behavior & States

- **RECONSTRUCTION:** IDs, timestamps and provider actions are absent from the fictional table.
- **NOT OBSERVED:** Macro editor, variables, ticket actions, execution and audit history.

## Technical Data

- **OBSERVATION / DOM:** Native table structure, row checkboxes, disabled bulk archive and per-row action buttons were exposed.

## Evidence Boundary

- **NOT OBSERVED:** No macro was created, edited, applied, selected or archived.

## Sources

- **OBSERVATION:** Authenticated Gorgias runtime, 2026-10-08.
