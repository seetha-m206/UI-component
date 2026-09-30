---
component: Brand setup mode
ui_category: 'Forms > Conditional Setup'
source_product: Ahrefs
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Observed Brand Radar setup switching between website-or-brand entry and manual brand-plus-competitor fields.
---

# Component: Brand setup mode

## Evidence boundary

Observed in the authenticated Ahrefs Brand Radar entry on 2026-09-29. Mode switching and field presence were preserved. Brand analysis, report creation, pricing, and demo navigation were not exercised. Fictional example values are used.

## States and behavior

- Website mode provides one website-or-brand field.
- Manual mode provides separate brand and competitor fields.
- Mode changes are local and reversible.
- Analyze is guarded and does not transmit entered values.

## Accessibility

Native labels, inputs, buttons, focus-visible treatment, disabled state, and guarded status feedback are provided. Source validation and error messaging remain unverified.

## Sources

- **OBSERVATION:** Authenticated Ahrefs Brand Radar setup review, 2026-09-29.
- **CONTINUATION:** Local conditional-form behavior verified on 2026-09-30 while signed out.
