---
component: "Trello Workspace Collaborators"
ui_category: "People and Access > Workspace Collaborators"
source_product: "Trello"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Member and guest tabs, search, role boundaries and billing warning."
---

# Component: Trello Workspace Collaborators

## Location

- **OBSERVATION:** `/w/:workspace/members`.

## Screenshot

![Fictional local preview](/research/trello/fixtures/trello-workspace-collaborators.png)

## Structure

- **OBSERVATION:** Members, single-board guests, multi-board guests and join requests are separate tabs.
- **OBSERVATION:** Invite, member search, board-count, role and leave controls appear above or beside the roster.
- **OBSERVATION:** Copy warns that adding members can update billing.

## Behavior

- **OBSERVATION:** Tab counts summarize each collaborator class.
- **RECONSTRUCTION:** Local roster uses fictional people and never sends invitations.

## Actions

- **OBSERVATION:** View collaborator categories and filter field.
- **NOT OBSERVED:** Invite, role change, board reassignment, removal or leave.

## States

- **OBSERVATION:** Single-member workspace with no guests or join requests.
- **NEEDS VERIFICATION:** Pending invitations, populated guest tabs and permission error states.

## Rules and Validation

- **RECONSTRUCTION:** Access and billing actions are disabled.

## Technical Data

- **OBSERVATION:** Tab group, searchable roster table and role dropdown boundaries.

## Lessons

- **RECOMMENDATION:** Put commercial impact next to membership actions before users reach a final confirmation.

## Sources

- **OBSERVATION:** Authenticated Trello workspace collaborators, 2026-10-08.
- **NOT OBSERVED:** Any membership mutation.
