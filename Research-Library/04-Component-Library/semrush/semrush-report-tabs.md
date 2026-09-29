---
component: Semrush Report Tabs
ui_category: 'Navigation & Filtering > Report Tabs'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Independent tab navigation for Site Audit reports, AI Visibility datasets, and metric views.
---

# Component: Semrush Report Tabs

Product → Tab family → Selected tab → Local result status → Navigation boundary

## Location

- **Observed in:** Site Audit issue detail, AI Visibility overview, and narrative reports.
- **Extraction level:** Independent reusable navigation primitive.
- **Evidence boundary:** Labels are observed. Live destinations and request contracts remain unverified.

## Structure

Named tablist → tab buttons → selected indicator → local status.

## Actions

Choose a report, dataset, or metric tab. The reconstruction changes selection without navigation.

## Behavior & States

Selected, unselected, disabled, desktop overflow, and mobile horizontal overflow.

### State fixtures

Site Audit exposes seven report labels. Visibility and metric fixtures isolate the shorter observed tab families.

## Rules & Validation

Use one selected tab. Keep labels stable during loading. Do not imply data has changed until the destination resolves.

## Technical Data

- **OBSERVED:** Site Audit exposed a named seven-tab report list with Issues selected.
- **OBSERVED:** AI Visibility tabs used strong underline and color selection states.
- **NOT OBSERVED:** Report-tab navigation, routing failures, permissions, and persistence.
- **RECONSTRUCTION:** Selection remains local and reports the verification boundary.

## Accessibility

Use `tablist`, `tab`, and `aria-selected`. Preserve keyboard reachability and visible focus.

## Cross-Component Pattern Note

Extracted from [[semrush-site-audit-issue-detail]], [[semrush-ai-visibility-dashboard]], and [[semrush-narrative-drivers]].

## Competitor Comparisons

| Pattern | Strength | Reuse opportunity |
|---|---|---|
| Semrush report tabs | Dense datasets remain reachable in one context | Standardize selection and loading contracts |
| Centilio Seek | Can expose provider and evidence dimension | Retain stable tab labels across dataset refreshes |

## Best Observed Approach

Keep navigation, selected state, and data-loading state distinct.

## Sources

- **OBSERVATION:** Authenticated Semrush report navigation reviews, 2026-09-29.
- **RECONSTRUCTION:** Local selection only. No report navigation was executed.
