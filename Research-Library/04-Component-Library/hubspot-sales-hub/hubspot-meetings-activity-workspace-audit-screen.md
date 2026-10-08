---
component: "HubSpot Meetings Activity Workspace — Screen Component"
ui_category: "Deep Audit > Screen Level"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-meetings-activity-workspace"
component_level: "screen"
---

# HubSpot Meetings Activity Workspace — Screen Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Meetings Activity Workspace](./hubspot-meetings-activity-workspace.md).
- **COMPONENT LEVEL:** screen.

## Structure

- **OBSERVED:** OBSERVED: The index table contains Meeting name, Activity date, Activity assigned to, Call and meeting type, Meeting outcome, Meeting location, associated Contacts and associated Deals.
- **OBSERVED:** OBSERVED: Two provider-labelled sample meetings were visible, with record links and inline association controls.
- **OBSERVED:** OBSERVED: Opening a sample meeting routed to the associated Contact record with the meeting expanded in the center activity timeline.
- **OBSERVED:** OBSERVED: The expanded activity showed title, timestamp, owner, description, property summary, attendees, duration, location, associations and Add comment.
- **OBSERVED:** OBSERVED: The surrounding record retained the three-column contact-detail workspace and association cards.

## Actions

- Element | Safe action | Observed result
- Sample meeting link | Open | Focused the selected meeting inside the associated sample contact timeline.
- Import, Export, Edit, Add comment and association controls | Not activated | Provider writes and transfer behavior remain NEEDS VERIFICATION.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-meetings-activity-workspace-audit-screen.
- **OBSERVED:** Evidence-backed screen composition and workflow boundary for HubSpot Meetings Activity Workspace. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: The index table contains Meeting name, Activity date, Activity assigned to, Call and meeting type, Meeting outcome, Meeting location, associated Contacts and associated Deals.
- **OBSERVED:** OBSERVED: Two provider-labelled sample meetings were visible, with record links and inline association controls.
- **OBSERVED:** OBSERVED: The surrounding record retained the three-column contact-detail workspace and association cards.
- **OBSERVED:** OBSERVED / DOM: Meetings use CRM object type `0-47`; the focused record URL carries an `engagement` identifier.

### Network / API

- **NOT OBSERVED:** NEEDS VERIFICATION: Association update API, meeting property schema and activity ownership rules.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-meetings-activity-workspace"
component_level: "screen"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
layout: "CRM"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-meetings-activity-workspace.
- Reusable level: screen.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-sales-hub/hubspot-meetings-activity-workspace.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
