---
component: Semrush Help Popover
ui_category: 'Overlays > Tooltip & Help'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Contextual target, update-frequency, and methodology help with explicit expanded state.
---

# Component: Semrush Help Popover

Product → Help topic → Trigger → Contextual explanation → Dismissal

## Location

- **Observed in:** AI Visibility report target and update-date controls.
- **Extraction level:** Independent overlay primitive.
- **Evidence boundary:** Target and update help were opened directly. Methodology is a compact reconstruction of the observed dialog.

## Structure

Named help button → expanded state → controlled tooltip → concise explanation.

## Actions

Open and close contextual help without changing report data.

## Behavior & States

Closed, target help, update help, methodology summary, and disabled.

### State fixtures

Every fixture identifies its evidence scope. The update fixture preserves the observed approximate seven-day cadence.

## Rules & Validation

Keep short contextual help in a popover. Use a dialog for long methodology content. Do not hide critical warnings only inside help.

## Technical Data

- **OBSERVED:** Target and update triggers exposed collapsed and expanded state.
- **OBSERVED:** Update help described an approximately seven-day refresh cadence.
- **NOT OBSERVED:** Remote content loading, analytics, persistence, or failure states.
- **RECONSTRUCTION:** Local state only.

## Accessibility

Use a named button with `aria-expanded` and `aria-controls`. Associate the visible tooltip with a stable id.

## Cross-Component Pattern Note

Extracted from [[semrush-report-filter-controls]] and complements [[semrush-warning-quota-dialog]].

## Competitor Comparisons

| Pattern | Strength | Reuse opportunity |
|---|---|---|
| Semrush help | Keeps definitions beside dense controls | Reuse for metrics, targets, providers, and freshness |
| Centilio Seek | Can add provenance and confidence | Keep evidence explanations short and source-aware |

## Best Observed Approach

Place concise, reversible help immediately beside the control it explains.

## Sources

- **OBSERVATION:** Authenticated Semrush report-control review, 2026-09-29.
- **RECONSTRUCTION:** Local interactive preview.
