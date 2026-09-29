---
component: Semrush Warning & Quota Dialog
ui_category: 'Overlays > Warning Dialog'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Crawl-limit, profile-quota, and target-change dialogs with safe dismissal and guarded live-impact actions.
---

# Component: Semrush Warning & Quota Dialog

Product → Triggering condition → Explanation → Guarded action → Safe cancel

## Location

- **Observed in:** Site Audit crawl coverage and AI Visibility report controls.
- **Extraction level:** Independent warning and quota overlay.
- **Evidence boundary:** Dialog text and safe dismissal were observed. Limit changes, purchases, and target changes were not executed.

## Structure

Modal title → warning icon → consequence text → guarded primary action → cancel or close.

## Actions

Inspect crawl-limit, profile-limit, and target-change states, then cancel or close safely.

## Behavior & States

Open crawl warning, open quota state, open target-change warning, closed, and dismissed status.

### State fixtures

Each fixture keeps its consequence and action label distinct.

## Rules & Validation

Explain the consequence before the action. Keep the live-impact action guarded. Always provide a safe cancel path.

## Technical Data

- **OBSERVED:** Crawl warning explained incomplete coverage and offered a page-limit action.
- **OBSERVED:** Profile limit stated that 1 of 1 tracked brands was used and offered Analyze more brands.
- **OBSERVED:** Target editing warned that applying changes starts another analysis and pauses current-target collection.
- **NOT OBSERVED:** Billing, quota purchase, limit changes, target submission, errors, and persistence.

## Accessibility

Use `role=dialog`, `aria-modal=true`, a named title, keyboard-reachable dismissal, and focused consequence text.

## Cross-Component Pattern Note

Extracted from [[semrush-site-audit-projects]] and [[semrush-report-filter-controls]].

## Competitor Comparisons

| Pattern | Strength | Reuse opportunity |
|---|---|---|
| Semrush warning dialog | Makes the consequence explicit before action | Standardize quota, rerun, and destructive gates |
| Centilio Seek | Can add budget, provider, and permission context | Keep human approval visible |

## Best Observed Approach

Explain what changes, keep the risky action guarded, and make cancellation effortless.

## Sources

- **OBSERVATION:** Authenticated Semrush warning and quota-dialog reviews, 2026-09-29.
- **RECONSTRUCTION:** Guarded local dialog fixtures.
