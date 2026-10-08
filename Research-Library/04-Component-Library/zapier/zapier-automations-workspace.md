---
component: "Zapier Automations Workspace"
ui_category: "Automation > Workflow Inventory"
source_product: "Zapier"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Empty Zap inventory with filters, saved-view controls, asset navigation and recommendations."
---

# Component: Zapier Automations Workspace

## Location

- **OBSERVATION:** Authenticated route `/app/assets/zaps` was inspected on 2026-10-08, or the record explicitly identifies official source review.
- **RECONSTRUCTION:** The local preview uses fictional names, values, counts and dates and never contacts Zapier.

## Screenshot

![Fictional local preview](/research/zapier/fixtures/zapier-automations-workspace.png)

## Structure

- **OBSERVATION:** Asset navigation for Zaps, Tables, Forms, Chatbots, Canvases and Agents
- **OBSERVATION:** Owner filter, search, filters and default-view controls
- **OBSERVATION:** Empty-state explanation and Create Zap action
- **OBSERVATION:** Recommended templates carousel

## Actions

| Action               | Result or boundary              |
| -------------------- | ------------------------------- |
| Search or filter     | Narrows the Zap inventory       |
| Save as default view | Visible but not exercised       |
| Create Zap           | Opens the editor entry boundary |

## Behavior & States

- **OBSERVATION:** Loading table state
- **OBSERVATION:** Empty owner-filtered inventory
- **OBSERVATION:** Trial banner
- **RECONSTRUCTION:** Local controls update only the fictional preview or show a safety notice.

## Technical Data

- **OBSERVATION / DOM:** Zapier exposed semantic headings, links, buttons, checkboxes, comboboxes, tables and named regions across the inspected surfaces.
- **OBSERVATION / ROUTE:** Query identifiers, account identifiers and opaque draft identifiers are intentionally removed from this record.
- **RECONSTRUCTION:** Shared renderer is `src/previews/zapier-shared/ZapierPreview.tsx`.
- **NEEDS VERIFICATION:** Provider request payloads, persistence contracts and connected-app consequences are not established.

## Accessibility

- **OBSERVATION:** Active filters were represented as a table row with a removable chip. Create, Trash and template cards had distinct accessible names.
- **RECONSTRUCTION:** The fictional preview uses explicit labels, headings, buttons and live status messages.

## Evidence Boundary

- **NOT OBSERVED:** No default view was saved, filter was changed, template was opened or Zap was activated.

## Sources

- **OBSERVATION:** Authenticated Zapier runtime, observed 2026-10-08.
- **RECONSTRUCTION:** Fictional local fixture in this library.
