---
component: "Pipedrive Avatar Settings Coachmark"
ui_category: "Guidance > Coachmark"
source_product: "Pipedrive"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Authenticated Pipedrive component reconstructed with fictional local data and explicit provider boundaries."
---

# Pipedrive Avatar Settings Coachmark

## Location

- **OBSERVED:** First safe activation of the avatar control in the authenticated Setup Guide shell.

## Screenshot

- **NEEDS VERIFICATION:** Provider screenshot is not retained because the avatar contained account initials.

## Structure

- **OBSERVED:** Compact contextual card titled Access settings and tools with explanatory text directing users to account and personal settings under the avatar menu.

## Actions

- **OBSERVED:** First avatar activation opened the coachmark. A second activation dismissed it. The account menu and settings destinations were not opened.

## Behavior & States

- **OBSERVED:** The coachmark appeared adjacent to the avatar and used instructional rather than navigational content.
- **RECONSTRUCTION:** Local fixture uses fictional initials and a local dismiss action.

## Rules & Validation

- **NOT OBSERVED:** First-run targeting, dismissal persistence, menu relationship and reappearance rules.

## Technical Data

- **OBSERVED / DOM:** Coachmark content was exposed as a heading and text after avatar activation.

## Accessibility

- **NEEDS VERIFICATION:** Focus transfer, escape dismissal and announcement behavior.

## Human Context

- **RECOMMENDATION:** Use coachmarks sparingly for relocated settings and provide an explicit dismiss control.

## AI Context

- **RECONSTRUCTION:** Public fixtures must not preserve real initials or tenant identity.

## Needs Verification

- **NEEDS VERIFICATION:** Actual account menu, settings navigation, persistence and responsive placement.

## Sources

- **OBSERVED:** Authenticated Pipedrive avatar coachmark, 2026-10-07.
