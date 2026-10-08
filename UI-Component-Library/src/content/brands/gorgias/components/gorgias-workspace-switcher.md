---
component: 'Gorgias Workspace Switcher'
ui_category: 'Navigation > Product Workspace Switcher'
source_product: 'Gorgias'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Transient workspace menu linking Inbox, AI, analytics, workflows, settings and customer areas.'
---

# Component: Gorgias Workspace Switcher

## Location

- **OBSERVATION:** Opened from the active workspace control in the upper-left shell.

## Screenshot

![Fictional local preview](/research/gorgias/fixtures/gorgias-workspace-switcher.png)

## Structure

- **OBSERVATION:** Radio-style menu items exposed Gaia, Inbox, AI Agent, Convert, Analytics, Workflows, Settings and Customers.
- **OBSERVATION:** The active Inbox destination was checked.

## Actions

| Action | Result or boundary |
| --- | --- |
| Open or dismiss | Transient dialog toggles without provider persistence |
| Select destination | Read-only destinations were later inspected independently |

## Behavior & States

- **OBSERVATION:** Menu appeared as a modal dialog anchored to the shell control.
- **RECONSTRUCTION:** Destination clicks only produce a local boundary notice.

## Technical Data

- **OBSERVATION / DOM:** Menu items were exposed as `menuitemradio` entries with links and a checked active item.

## Evidence Boundary

- **NEEDS VERIFICATION:** Keyboard roving focus and entitlement-based menu variants were not tested.

## Sources

- **OBSERVATION:** Authenticated Gorgias runtime, 2026-10-08.
