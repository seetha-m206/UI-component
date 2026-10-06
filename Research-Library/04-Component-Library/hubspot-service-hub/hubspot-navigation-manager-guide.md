---
component: "HubSpot Navigation Manager Guide"
ui_category: "Navigation > Navigation Manager"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
---

# HubSpot Navigation Manager Guide

## Location

- **OBSERVED:** Authenticated application sidebar on the Unassigned tickets route, inspected 2026-10-06.

## Screenshot

- **NEEDS VERIFICATION:** The guide modal was visually inspected. No durable screenshot was archived.

## Structure

- **OBSERVED:** Manage navigation opened a modal titled Manage navigation inside a Bookmarks Manager frame.
- **OBSERVED:** The modal contained Close, How to customize, Switch navigation, an embedded HubSpot video and a tip explaining that tools can be organized with groups from a tool menu.

## Actions

| Element | Safe action | Observed result or boundary |
| --- | --- | --- |
| Manage navigation | Pointer click | Opened the guide modal. |
| Close | Pointer click | Closed the modal and returned to the unchanged Tickets view. |
| How to customize, Switch navigation and video | Not activated | Their destinations and outcomes are **NOT OBSERVED**. |

## Behavior & States

- **OBSERVED:** Opening and closing the guide did not change sidebar organization or the current route.
- **NOT OBSERVED:** Navigation switching, group creation, video playback completion, persistence and permissions.

## Technical Data

- **OBSERVED / DOM:** The Bookmarks Manager was exposed as a named frame containing a nested document and modal controls.

## Human Context

- **RECOMMENDATION:** Explain navigation customization before exposing controls that can change a user’s persistent workspace.

## AI Context

- **FACT:** Only the guide shell and visible instructional content were observed.
- **NOT OBSERVED:** No navigation preference was changed.

## Needs Verification

- **NEEDS VERIFICATION:** Instructional button outcomes, group editing, navigation switching, save behavior and persistence.

## Sources

- **OBSERVED:** Authenticated HubSpot application sidebar, inspected 2026-10-06.
