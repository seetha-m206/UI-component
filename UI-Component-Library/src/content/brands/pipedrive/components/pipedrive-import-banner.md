---
component: "Pipedrive Deals Import Banner"
ui_category: "Feedback > Guidance Banner"
source_product: "Pipedrive"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Authenticated Pipedrive component reconstructed with fictional local data and explicit provider boundaries."
---

# Pipedrive Deals Import Banner

## Location
- **OBSERVED:** Top of the authenticated Deals pipeline.
## Screenshot
- **NEEDS VERIFICATION:** Provider screenshot is not retained.
## Structure
- **OBSERVED:** Pale guidance banner with animation control, import explanation, purple Import data button and dismiss control.
## Actions
- **OBSERVED:** Import and Dismiss were visible but not activated because import is consequential and dismissal may persist.
## Behavior & States
- **RECONSTRUCTION:** Local Import shows a no-flow-started notice. Local dismissal changes React state only.
## Technical Data
- **OBSERVED / DOM:** Animation, Import data and Dismiss were exposed as buttons.
## Accessibility
- **NEEDS VERIFICATION:** Motion controls, reduced motion and dismissal announcement.
## Human Context
- **RECOMMENDATION:** Pair onboarding value copy with a clear import action and a non-destructive dismiss affordance.
## AI Context
- **RECONSTRUCTION:** The fixture imports nothing and contains no customer data.
## Needs Verification
- **NEEDS VERIFICATION:** Import wizard, file handling, validation, duplicate detection, progress and errors.
## Sources
- **OBSERVED:** Authenticated Pipedrive Deals pipeline, 2026-10-07.
