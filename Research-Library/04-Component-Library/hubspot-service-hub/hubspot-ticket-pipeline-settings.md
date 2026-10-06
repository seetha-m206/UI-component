---
component: "HubSpot Ticket Pipeline Settings"
ui_category: "Account / Settings > Pipeline Settings"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
---

# HubSpot Ticket Pipeline Settings

## Location

- **OBSERVED:** Authenticated Tickets Pipelines settings, inspected 2026-10-06.

## Screenshot

- **NEEDS VERIFICATION:** No durable provider screenshot was archived.

## Structure

- **OBSERVED:** Overview offered three display treatments, with Text in colored badge selected. Create pipeline was disabled.
- **OBSERVED:** The Support Pipeline row showed no description, color #EBEBEB, four stages, internal ID 0 and an Actions popup.
- **OBSERVED:** The Configure view listed New, Waiting on contact, Waiting on us and Closed. Their colors were #016DE1, #F7C03E, #C93700 and #EBEBEB. The first three were Open and Closed was Closed. Used in counts were zero, conditional logic showed no rules, and status IDs were 1 through 4.
- **OBSERVED:** Each row exposed edit, color, state, rule, copy-ID and delete affordances. Delete was disabled for Closed. Add status was available.

## Actions

| Element | Safe action | Observed result or boundary |
| --- | --- | --- |
| Pipelines tab | Page visit | Loaded the populated overview. |
| Support Pipeline | Page visit | Loaded Configure with four stages. |
| Actions for Support Pipeline | Open disclosure | Displayed disabled Delete. |
| New stage Open type | Open disclosure | Displayed Open and Closed with Open selected. |
| Display colors, edits, rules, deletes, Add status and Automate | Not activated | Mutation and automation outcomes are **NOT OBSERVED**. |

## Behavior & States

- **OBSERVED:** Overview and pipeline detail were populated with configuration metadata but no customer records.
- **NOT OBSERVED:** Reordering, edit validation, add/delete confirmation, save behavior, automation and runtime ticket movement.

## Technical Data

- **OBSERVED / DOM:** Overview and stages used tables. Drag instructions were present. Status type and actions were popup buttons.

## Human Context

- **RECOMMENDATION:** Show pipeline-wide presentation separately from stage configuration and expose immutable identifiers without requiring edit mode.

## AI Context

- **FACT:** Four configured stages and their untouched metadata were directly observed.

## Needs Verification

- **NEEDS VERIFICATION:** Editing, ordering, automation, validation, permissions, save outcomes and ticket-stage effects.

## Sources

- **OBSERVED:** Authenticated Ticket Pipeline Settings overview and Support Pipeline Configure screen, inspected 2026-10-06.
