---
component: Guarded action status
ui_category: 'Feedback > Inline status'
source_product: Ahrefs
last_verified: 2026-09-30
evidence_state: reconstructed
status: complete
summary: Local safety feedback used when an observed provider outcome is not verified.
---

# Component: Guarded action status

## Evidence boundary

This is a library safety pattern reconstructed from guarded Ahrefs previews. It is not represented as an observed Ahrefs product component. It prevents local previews from impersonating provider, account or navigation behavior.

## States and behavior

- A native button triggers an assertive local status region.
- The message names the action and its live-verification boundary.
- No network or provider request is made.

## Sources

- **RECONSTRUCTION:** Repeated safety behavior across Ahrefs local previews, 2026-09-30.
