---
component: "Freshdesk Omni Canned Responses Onboarding"
ui_category: "Empty States > Reply Templates"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed the canned responses onboarding read-only with consequential actions left untouched."
---

# Freshdesk Omni Canned Responses Onboarding

## Location

- **OBSERVED:** Admin → Agent Productivity → Canned Responses.

## Structure

- **OBSERVED:** An empty state offered first-response creation and suggestions for demo requests, cancellation, plan changes and trial extensions, each with Preview.
- **RECONSTRUCTION:** The local fixture uses rewritten suggestion titles and omits the provider folder identifier.

## Actions

- **NOT OBSERVED:** No response, preview, folder or suggestion was opened, created or imported.

## Technical Data

- **OBSERVED / DOM:** Onboarding copy, suggestion rows, Preview and Use suggestions were exposed.
- **NEEDS VERIFICATION:** Editor, folders, placeholders, sharing, permissions, import and persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni canned responses onboarding, 2026-10-08.
