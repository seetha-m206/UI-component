---
component: Semrush Campaign Action Group
ui_category: 'Actions & Controls > Campaign Actions'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Grouped Rerun, PDF, Export, Share, and Settings actions with local safety boundaries.
---

# Component: Semrush Campaign Action Group

Product → Campaign context → Action group → Guarded result status

## Location

- **Observed in:** Authenticated Site Audit issue-detail campaign header.
- **Extraction level:** Independent grouped-action primitive.
- **Evidence boundary:** Labels and hierarchy were observed. None of the live actions were executed.

## Structure

Rerun action → export actions → collaboration action → settings action → verification status.

## Actions

Choose Rerun audit, PDF, Export, Share, or Settings. Every reconstruction action stops locally.

## Behavior & States

Full labels, compact header, guarded result, and disabled.

### State fixtures

The compact fixture demonstrates a dense report header while retaining accessible action names.

## Rules & Validation

Separate rerun risk from read-oriented exports. Treat Share as an external disclosure action. Do not imply download or mutation success without runtime evidence.

## Technical Data

- **OBSERVED:** Rerun, PDF, Export, Share, and Settings were visible together in the campaign header.
- **NOT OBSERVED:** Rerun confirmation, downloads, sharing permissions, settings navigation, request payloads, and errors.
- **RECONSTRUCTION:** Every activation produces a local needs-verification status.

## Accessibility

Use native buttons, visible focus, descriptive icon labels, and a live status message.

## Cross-Component Pattern Note

Extracted from [[semrush-site-audit-issue-detail]] and complements [[semrush-action-button]].

## Competitor Comparisons

| Pattern | Strength | Reuse opportunity |
|---|---|---|
| Semrush campaign actions | Keeps frequent report operations together | Standardize risk, permission, and busy behavior per action |
| Centilio Seek | Can add provenance-aware export and collaboration policy | Make protected actions explicit before execution |

## Best Observed Approach

Group related actions while preserving distinct risk and permission boundaries.

## Sources

- **OBSERVATION:** Authenticated Semrush Site Audit header review, 2026-09-29.
- **RECONSTRUCTION:** Local guarded interactions only.
