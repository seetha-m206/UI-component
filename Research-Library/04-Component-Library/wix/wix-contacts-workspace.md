---
component: "Wix Contacts Workspace"
ui_category: "CRM > Contact List"
source_product: "Wix"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Wix Contacts Workspace

## Location
- **OBSERVED:** Customers & Leads expanded to Contacts for the authenticated site.

## Structure
- **OBSERVED:** Header actions included Manage Segments and a split Create New control. An overview combined member count, access management, Grow contacts list and Track & engage audiences tabs.
- **OBSERVED:** Acquisition cards covered site leads, imports, Wix Forms and Members Area. The list toolbar provided saved view, Manage View, Filter, column settings, search and Import / Export.
- **OBSERVED:** The provider table contained one account contact. Its personal values are deliberately excluded from the repository.

## Actions
| Action | Result |
| --- | --- |
| Expand Customers & Leads | Navigated to Contacts and revealed Forms & Submissions, Business Email and Add More. |
| Create New disclosure | Showed Manually, Import and Create with AI Beta. |

## Technical Data
- **OBSERVED / DOM:** Table headers, selection checkboxes, sorting buttons, member-status badge and row actions were present.
- **NOT OBSERVED:** Contact detail, filtering, segment changes, import/export, member access and creation results.

## Human Context
- **RECONSTRUCTION:** The local table uses Ava Morgan and `ava.morgan@example.invalid`. No observed personal value is stored.

## Local Preview Captures

- **RECONSTRUCTION:** These images capture the fictional local preview. They are not Wix provider screenshots.

### Fictional contact list

![wix-contacts-workspace — Fictional contact list](/research/wix/fixtures/wix-contacts-workspace--default.jpg)

- **RECONSTRUCTION / CAPTURE:** `default` at 1600 × 1200. SHA-256 `c83868157b8fffe9ee31921a3fdc39c82c92f386b3b1ca5415ccbd47ce69bccf`.

### Create menu open

![wix-contacts-workspace — Create menu open](/research/wix/fixtures/wix-contacts-workspace--create-open.jpg)

- **RECONSTRUCTION / CAPTURE:** `create-open` at 1600 × 1200. SHA-256 `5b9c02f4ed24f67e3e2b66de890e9703f887ae9e0d07d790c64a8803d94e755a`.

## Sources
- **OBSERVED:** Authenticated Wix `/contacts`, inspected 2026-10-07. No durable provider screenshot was archived.
