---
component: "Zoho CRM Forecast Benefit Card"
ui_category: "Content > Feature benefit card"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "A repeated title-and-description card explains target setting, achievement tracking and forecast analysis."
---

# Component: Zoho CRM Forecast Benefit Card

## Overview

Forecast onboarding uses a repeated content pattern to explain the module's three major outcomes.

## Behavior & States

**OBSERVED:** The three items covered setting sales targets, tracking achievement and predicting or analysing results.

**RECONSTRUCTION:** Fictional copy preserves the three-part hierarchy while avoiding performance claims.

**NEEDS VERIFICATION:** Icons, hover behavior, responsive layout, localization and role-specific variations were not observed.

## Rules & Validation

Use concise outcome titles followed by one explanatory sentence. Do not imply that a capability has been configured merely because its card is visible.

## Technical Data

- **OBSERVED:** Three sibling items share the same title-and-description structure.
- **OBSERVED:** The items are informational rather than interactive controls.
- **NOT OBSERVED:** Component configuration or analytics instrumentation.

### State Fixtures

```json
{"items":[{"title":"Set sales targets"},{"title":"Track achievement"},{"title":"Predict and analyse"}]}
```

## Accessibility

**NEEDS VERIFICATION:** Semantic grouping, heading level and reading order across responsive layouts.

## Sources

Authenticated Zoho CRM Forecasts, observed 2026-10-07. Private receipt `08-forecasts-onboarding.png`.
