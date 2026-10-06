---
component: "HubSpot Ticket Object Setup"
ui_category: "Account / Settings > Object Setup"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
---

# HubSpot Ticket Object Setup

## Location

- **OBSERVED:** Authenticated Tickets settings route redirected to Object Setup for object 0-5, inspected 2026-10-06.

## Screenshot

- **NEEDS VERIFICATION:** No durable provider screenshot was archived.

## Structure

- **OBSERVED:** The object header exposed Tickets with Setup, Pipelines, Record Customization, Preview Customization and Index Customization tabs plus a data-model link.
- **OBSERVED:** Setup described Tickets as the place where customer questions and support requests are tracked. Sections linked to properties, associations and Create Ticket form customization.
- **OBSERVED:** Automation displayed a selected checkbox for associating a Ticket to a Contact’s primary Company when one exists.

## Actions

| Element | Safe action | Observed result or boundary |
| --- | --- | --- |
| Tickets settings | Page visit | Loaded the populated Ticket object setup overview. |
| Settings tabs | Read-only navigation | Opened the related settings destinations without changing configuration. |
| Properties, associations, form customization and automation | Not activated | Editing and persistence are **NOT OBSERVED**. |

## Behavior & States

- **OBSERVED:** Existing automation state was visible. It was not toggled.
- **NOT OBSERVED:** Property editors, association configuration, creation-form editor, permissions and save outcomes.

## Technical Data

- **OBSERVED / DOM:** The automation state was a settable checkbox with value selected. Related settings were links.

## Human Context

- **RECOMMENDATION:** Group object configuration by data, relationships, creation and automation while keeping high-impact changes behind explicit editors.

## AI Context

- **FACT:** The page and existing toggle state were observed without editing.

## Needs Verification

- **NEEDS VERIFICATION:** Editors, validation, permissions, save behavior and runtime effects.

## Sources

- **OBSERVED:** Authenticated Ticket Object Setup screen, inspected 2026-10-06.
