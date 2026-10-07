---
component: "Duda Dynamic Page and Widget Binding"
ui_category: "Navigation > Menus"
source_product: "Duda"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Duda Dynamic Page and Widget Binding

## Location

**OBSERVED:** Pages → Add Page → Dynamic Page on the fictional unpublished Duda research site, 7 October 2026.

## Screenshot

Provider captures 86–100 with screenshot, rendered DOM and AX snapshots in `Internal/scratch-2026-10/duda/`. Auth values are redacted. Provider evidence stays local.

## Structure

Preset chooser offers Blank Page, Real Estate, Team Member and Single Service. General settings contains Selected Page, Page Name, Page URL, collection selector, Back and Add Page. Dynamic editor has item selector, Preview and Done. Text widget context menu exposes Connect to Data. Its dialog maps Text to compatible collection fields, with Cancel and Connect.

## Actions

| Trigger | Observed result | Evidence |
| --- | --- | --- |
| Next from Blank Page | General settings | 86–87 |
| Open collection selector | Blank Collection and existing Maple Research Services | 88 |
| Select existing collection | Upgrade copy removed and Add Page enabled | 89 |
| Add Page | Dynamic editor created, actual page label Blank Page | 90–91 |
| Select maple-inspection | Item selector updated | 92–93 |
| Right click text → Connect to Data | Text mapping dialog | 94–95 |
| Open field selector | Service label and New field | 96 |
| Select Service label → Connect | Fictional roof inspection rendered in widget | 97 |
| Reload | Default item 1 selected with empty bound text | 98 |
| Reselect maple-inspection and allow page load | Fictional roof inspection restored | 99–100 |

## Behavior & States

### Additional typed binding evidence, 7 October 2026

**OBSERVED:** The second Text Block's field list included Research count alongside Service label and New field (112). Connected Research count while empty (113). Set its fictional row value to 3 (114). The second Text Block rendered 3 for maple-inspection (115). Reload and item reselection restored the rendered 3 (116). This verifies Number-to-Text compatibility on this unpublished research page. Image, button/link and other widget types remain unverified. Original Service label text was retained. The fictional Number field and value 3 remain as research fixtures on the private site.

Local fixture `number-bound` reconstructs the resulting numeric text state. Provider screenshots and DOM/AX hashes are in the definition and matrix.


| Fixture | Source boundary |
| --- | --- |
| default | OBSERVED_STRUCTURE preset chooser, 86 |
| general | OBSERVED_STRUCTURE existing collection settings, 89 |
| options | OBSERVED_STRUCTURE compatible field mapping, 96 |
| plan-gate | OBSERVED_STRUCTURE new internal collection restriction, 87 |
| bound | OBSERVED_STRUCTURE populated widget text, 97 |
| first-row | OBSERVED_STRUCTURE default empty item after reload, 98 |
| disabled | RECONSTRUCTION harness controls |

All preview data and interactions are fictional local reconstruction. The observed provider reload outcome applies to the research-site text binding only. It does not prove arbitrary widgets, public routes or connected external sources.

## Rules & Validation

Blank Collection displayed “You’ve used the Internal Collection for this site” and Upgrade with Add Page disabled. Choosing the existing collection enabled creation without an upgrade. The Page Name textbox displayed Maple Dynamic Research before submission but the created page label was Blank Page. Desired name persistence is NOT VERIFIED. No plan purchase or publication occurred. Empty source field gives empty bound text. No inference about fallback content.

## Technical Data

Component ID `duda-dynamic-page-binding`. Props: componentId, initialState, disabled. Viewports 1105, 720 and 390. Bound source collection Service label is Plain Text. API request/response contracts were not captured during this pass. Field selector is a custom combobox/listbox. Local select controls reconstruct the interaction and do not claim identical keyboard behavior.

## Sources

Source artifact names and SHA256 hashes are in `catalogue.ts` and `dynamic-evidence.json`. Every observed fixture names a source capture. Route `/duda/duda-dynamic-page-binding`. Code and Props tabs use the shared Duda renderer and explicit definition. Private provider screenshots are not fixture assets.
