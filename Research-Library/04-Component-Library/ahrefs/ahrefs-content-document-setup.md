---
component: Content document setup
ui_category: 'Forms > Composite Form'
source_product: Ahrefs
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Observed AI Content Helper setup with keyword, article URL, location, brand kit, competitors, and document action.
---

# Component: Content document setup

## Evidence boundary

Observed in the authenticated Ahrefs AI Content Helper entry on 2026-09-29. Field structure and local competitor-row addition were preserved. Document creation, AI writing, quotas, pricing, validation, and network requests were not exercised.

## States and behavior

- Default shows keyword, article URL, location, brand kit, and one competitor.
- Up to three competitor fields can be added locally.
- Create document is guarded and does not transmit entered values.
- Disabled is synthetic.

## Accessibility

Native form, labels, inputs, selects, buttons, focus-visible treatment, disabled state, and status feedback are provided. Source validation and focus-on-error behavior remain unverified.

## Sources

- **OBSERVATION:** Authenticated Ahrefs AI Content Helper document-setup review, 2026-09-29.
- **CONTINUATION:** Local form expansion and submission guard verified on 2026-09-30 while signed out.
