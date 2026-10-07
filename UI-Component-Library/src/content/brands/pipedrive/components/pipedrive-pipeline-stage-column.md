---
component: "Pipedrive Pipeline Stage Column"
ui_category: "Data Display > Kanban Column"
source_product: "Pipedrive"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Authenticated Pipedrive component reconstructed with fictional local data and explicit provider boundaries."
---

# Pipedrive Pipeline Stage Column

## Location
- **OBSERVED:** Authenticated Deals pipeline board.
## Screenshot
- **NEEDS VERIFICATION:** Provider screenshot is not retained.
## Structure
- **OBSERVED:** Stage name, aggregate monetary value, deal count, stage add control and vertically stacked deal cards. Empty and populated stages were visible.
## Actions
- **OBSERVED:** Stage add controls and cards were not activated. No drag was attempted.
## Behavior & States
- **RECONSTRUCTION:** Local column uses fictional value and one fictional card. Add is guarded.
## Technical Data
- **OBSERVED / DOM:** Board container exposed stage text and draggable deal elements.
## Accessibility
- **NEEDS VERIFICATION:** Column landmarks, drag alternatives, add-control names and keyboard movement.
## Human Context
- **RECOMMENDATION:** Pair stage totals with card count to support scanning before opening individual records.
## AI Context
- **RECONSTRUCTION:** Provider sample values and names are not reused in the fixture.
## Needs Verification
- **NEEDS VERIFICATION:** Drag persistence, drop validation, stage limits, permissions, empty messaging and live total updates.
## Sources
- **OBSERVED:** Authenticated Pipedrive Deals board, 2026-10-07.
