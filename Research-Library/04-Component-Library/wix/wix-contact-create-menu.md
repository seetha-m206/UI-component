---
component: "Wix Contact Create Menu"
ui_category: "Actions > Split Button Menu"
source_product: "Wix"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Wix Contact Create Menu

## Location
- **OBSERVED:** Create New split control on Contacts.

## Structure
- **OBSERVED:** The primary button and adjacent disclosure arrow are separate controls. The menu options were Manually, Import and Create with AI with a Beta badge.

## Actions
| Action | Result |
| --- | --- |
| Disclosure arrow | Opened the menu without starting creation. |
| Primary Create New | Not activated. |
| Menu choices | Not activated. |

## Technical Data
- **OBSERVED / DOM:** The arrow exposed expanded state and the choices appeared as menu items.
- **NOT OBSERVED:** Form fields, file handling, AI prompt, validation and creation success.

## Human Context
- **RECONSTRUCTION:** Every local choice returns “No provider request was sent.”

## Local Preview Captures

- **RECONSTRUCTION:** These images capture the fictional local preview. They are not Wix provider screenshots.

### Observed action choices

![wix-contact-create-menu — Observed action choices](/research/wix/fixtures/wix-contact-create-menu--open.jpg)

- **RECONSTRUCTION / CAPTURE:** `open` at 1600 × 1200. SHA-256 `d79f219e6110b516e65b0d484844215ab375a15df328117468c574079bf37d5f`.

## Sources
- **OBSERVED:** Authenticated Wix Contacts Create New menu, inspected 2026-10-07. No durable provider screenshot was archived.
