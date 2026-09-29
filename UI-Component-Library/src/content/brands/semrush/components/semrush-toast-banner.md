---
component: Semrush Toast and Banner
ui_category: 'Feedback & Status > Notifications'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Reusable success, information, warning, and synthetic-error feedback with dismissal and guarded retry.
---

# Component: Semrush Toast and Banner

Product → Trigger → Feedback surface → Optional action → Dismissal

## Location

- **Observed in:** Authenticated AI Visibility notices, Site Audit coverage feedback, and local state transitions.
- **Extraction level:** Independent feedback primitive.
- **Evidence boundary:** Informational and warning surfaces were observed. Error and retry are explicitly synthetic.

## Structure

Severity icon → title → supporting message → optional action → close button.

## Actions

Show, dismiss, and locally retry synthetic error feedback.

## Behavior & States

Success toast, information banner, warning banner, synthetic error toast, and dismissed state.

### State fixtures

Each severity and surface is independently selectable.

## Rules & Validation

Reserve `role="alert"` for urgent error feedback. Use `role="status"` for non-urgent updates. Never imply a provider retry occurred when only local state changed.

## Technical Data

- **OBSERVED:** Semrush uses inline informational and quota-warning feedback.
- **NOT OBSERVED:** Exact production toast duration and live retry request behavior.
- **SYNTHETIC:** Error text, retry count, and all values.

## Accessibility

Non-urgent feedback uses a polite live region. Errors use an assertive alert. Dismissal has an explicit accessible name.

## Cross-Component Pattern Note

Pairs with [[semrush-async-status-state]] and [[semrush-warning-quota-dialog]]. Every registered `PreviewConfig` must include `toggles`, even when it is an empty array. The full registry smoke test is the preventing test for this integration failure.

## Competitor Comparisons

| Pattern | Strength | Reuse opportunity |
|---|---|---|
| Semrush feedback | Separates transient and persistent feedback | Standardize severity and persistence rules |
| Centilio Seek | Can report crawl, indexing, and AI-analysis progress | Keep server truth distinct from optimistic UI |

## Best Observed Approach

Match urgency to live-region behavior and keep dismiss, retry, and persistence semantics explicit.

## Sources

- **OBSERVATION:** Authenticated Semrush feedback review, 2026-09-29.
- **RECONSTRUCTION:** Fictional local feedback states.
