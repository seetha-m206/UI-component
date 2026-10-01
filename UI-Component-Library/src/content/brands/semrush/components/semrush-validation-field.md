---
component: Semrush Validation Field
ui_category: 'Forms > Text Input'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: mixed_observed_reconstructed
status: complete
summary: Domain-oriented text field with empty, filled, required, invalid, and disabled fixtures.
---

# Component: Semrush Validation Field

## Human View

Collects a domain or URL with adjacent guidance and an explicit error relationship when invalid.

## State Fixtures

Empty, filled, required, synthetic invalid, and disabled. The invalid fixture is labeled **needs verification**.

## Technical View

- Native text input with associated label.
- `aria-invalid` and `aria-describedby` connect an invalid field to its message.
- Disabled and required behavior remain programmatic, not merely visual.

## AI Context

Do not generalize one workflow’s accepted target format to all Semrush tools. Preserve the requested scope and the evidence label for any validation copy.

## Evidence Boundary

- **OBSERVED:** Empty and populated text inputs, domain guidance, and `aria-invalid=false` before submission.
- **NOT OBSERVED:** Malformed submission, exact error copy, server validation, or duplicate handling.
- **RECONSTRUCTION:** Invalid styling and error copy are synthetic.

## Sources

- [[semrush-ai-visibility-landing]]
- [[semrush-site-audit-projects]]
