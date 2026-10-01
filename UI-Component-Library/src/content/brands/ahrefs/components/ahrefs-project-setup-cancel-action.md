---
component: Project setup cancel action
ui_category: 'Actions > Exit action'
source_product: Ahrefs
last_verified: 2026-09-30
evidence_state: runtime_verified
status: complete
summary: Cancel action extracted from the project-setup header.
---
# Component: Project setup cancel action

## Evidence boundary
Observed in authenticated Ahrefs project setup on 2026-09-29. Cancellation and navigation outcomes were not exercised. The local action stays on the preview and announces the boundary.

## States and behavior
- The header wordmark and Cancel action are preserved.
- Cancel returns a local needs-verification status.

## Sources
- **OBSERVATION:** Authenticated Ahrefs project-setup review, 2026-09-29.
- **CONTINUATION:** Local guarded exit action verified, 2026-09-30.
