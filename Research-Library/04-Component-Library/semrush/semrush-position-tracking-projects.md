---
component: Semrush Position Tracking Projects
ui_category: 'Application Layout > Campaign Collection'
source_product: Semrush
last_verified: 2026-09-30
evidence_state: mixed_observed_reconstructed
status: complete
summary: Position Tracking campaign collection with search, target-type filters, date range, metric columns, setup state, and pagination.
---

# Component: Semrush Position Tracking Projects

Product → Screen → Components → Actions → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Observed in:** Authenticated Semrush SEO → Position Tracking collection screen.
- **Extraction level:** Full screen plus reusable search, segmented filter, date selector, campaign table, setup state, and pagination primitives.
- **Evidence boundary:** Account domains and metrics are excluded. The preview uses fictional entities and local state.

## Screenshot

- **OBSERVED:** A viewport screenshot was captured during the authenticated 2026-09-30 review and showed the application rail, SEO navigation, title, toolbar, two campaign rows, and one-page pagination.
- **NEEDS VERIFICATION:** A durable provider screenshot asset is not stored in this repository.

## Structure

Application shell → breadcrumbs → title and Create SEO project action → project search → target-type segmented filter → date range → campaign metrics table → pagination.

## Actions

| Element        | User action         | Observed result                                                                                                 |
| -------------- | ------------------- | --------------------------------------------------------------------------------------------------------------- |
| Project search | Enter leafly        | The campaign collection narrowed to one matching row and exposed Clear input                                    |
| Clear input    | Click               | The full campaign collection returned                                                                           |
| AI Search      | Click               | Metric headers changed from keywords to prompts                                                                 |
| SEO            | Click               | Keyword metric headers returned and configured campaign data resolved                                           |
| Date range     | Select Last 30 days | The label changed, campaign metrics entered loading placeholders, then resolved with range-specific differences |
| Campaign link  | Click               | Opened the campaign Landscape report with the selected date range in the URL                                    |

## Behavior & States

- Search filtering is immediate and does not navigate.
- All targets, AI Search, and SEO are mutually exclusive radio states.
- AI Search changes Improved, Declined, and All column nouns from keywords to prompts.
- Configured campaigns expose linked metrics. Unconfigured projects expose Set up and blank metric cells.
- Date changes expose an intermediate loading state before resolved metrics.
- Pagination was disabled at page 1 of 1.

### State fixtures

Default, searched, cleared, All targets, AI Search, SEO, loading, configured campaign, setup required, empty results, and single-page pagination.

## Rules & Validation

Create and Set up are consequential provider actions and remain guarded. Search permits partial domain matching. The local reconstruction never creates a project or changes tracking configuration.

## Technical Data

- **OBSERVED:** Search is an accessible search region with a textbox and conditional Clear input button.
- **OBSERVED:** Target choices expose radio semantics and checked state.
- **OBSERVED:** Campaign data is an accessible grid with named column headers.
- **OBSERVED:** Date selection updated linked report query parameters with start and end dates.
- **NOT OBSERVED:** Private API endpoints, request payloads, permissions, failure payloads, persistence, and cross-page pagination.
- **RECONSTRUCTION:** Local React state reproduces filtering, labels, loading hierarchy, and safe campaign rows.

## Accessibility

Keep search labeled, use radio semantics for target modes, preserve table headers, announce loading and empty states, and keep setup actions distinguishable from metric links.

## Cross-Component Pattern Note

The screen composes [[semrush-target-type-filter]], [[semrush-position-tracking-date-range]], campaign rows, setup state, and pagination. These primitives can support rank, prompt, and campaign collections across Seek.

## Competitor Comparisons

| Pattern                   | Strength                                                              | Reuse opportunity                                                      |
| ------------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Semrush Position Tracking | One collection changes vocabulary between AI prompts and SEO keywords | Use one typed campaign schema with mode-specific labels                |
| Centilio Seek             | Can add provider provenance and evidence freshness                    | Preserve search and filtering while adding explicit data-source status |

## Best Observed Approach

Keep campaign search, analysis mode, and date range together, then preserve the same table geometry while mode-specific nouns and data change.

## Sources

- **OBSERVATION:** Authenticated Semrush Position Tracking collection review, 2026-09-30.
- **OBSERVATION:** Accessibility tree, DOM snapshot, safe interaction transitions, URL changes, loading states, and in-session screenshot.
- **RECONSTRUCTION:** Local interactive preview with fictional domains and metrics. No project was created or configured.
