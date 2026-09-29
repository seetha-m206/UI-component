---
component: Semrush Empty State Recovery
ui_category: 'Feedback & Status > Empty State'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Reusable empty states for search, hidden issues, and country reports with reversible recovery actions.
---

# Component: Semrush Empty State Recovery

Product → Empty context → Explanation → Optional recovery → Restored local status

## Location

- **Observed in:** Site Audit project search, Site Audit Hidden issues, and AI Visibility country reporting.
- **Extraction level:** Independent feedback and recovery primitive.
- **Evidence boundary:** Search recovery was directly tested. Other destination behavior remains guarded.

## Structure

State icon → title → contextual explanation → optional query → recovery action.

## Actions

Show all projects, return to Issues, or view Worldwide. The reconstruction restores only local fixture state.

## Behavior & States

Search no results, no hidden issues, country no data, informational-only, and locally restored.

### State fixtures

The search fixture echoes a synthetic query. Informational states can omit the action.

## Rules & Validation

Explain why content is absent. Preserve surrounding headers. Offer one safe recovery when available. Do not treat unavailable data as zero.

## Technical Data

- **OBSERVED:** Project search preserved the grid header and offered Show all projects.
- **OBSERVED:** Hidden settled from Loading to No hidden issues.
- **OBSERVED:** Country filtering produced a designed no-presence state.
- **NOT OBSERVED:** Country recovery navigation and cross-report request behavior.

## Accessibility

Announce the empty state as status content. Use a real button for recovery and provide visible focus.

## Cross-Component Pattern Note

Extracted from [[semrush-site-audit-projects]], [[semrush-site-audit-issue-detail]], and [[semrush-ai-visibility-dashboard]].

## Competitor Comparisons

| Pattern | Strength | Reuse opportunity |
|---|---|---|
| Semrush empty state | Explains context and often offers recovery | Standardize empty, unavailable, and zero distinctions |
| Centilio Seek | Can show provider or geography reason | Pair recovery with evidence freshness |

## Best Observed Approach

Keep context visible, explain the absence, and provide one reversible recovery action.

## Sources

- **OBSERVATION:** Authenticated Semrush empty-state interactions, 2026-09-29.
- **RECONSTRUCTION:** Synthetic values and local recovery only.
