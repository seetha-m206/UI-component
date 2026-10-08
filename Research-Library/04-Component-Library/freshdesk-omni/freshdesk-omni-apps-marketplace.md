---
component: "Freshdesk Omni Apps Marketplace"
ui_category: "Apps & Integrations > Apps"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed the marketplace catalogue shell while app cards were loading."
---

# Freshdesk Omni Apps Marketplace

## Location

- **OBSERVED:** Admin → Apps & Integrations → Apps.

## Structure

- **OBSERVED:** The embedded gallery showed Search apps, Manage Apps, relevance sorting, payment, AI Actions, app type and category filters, Recommended Apps and Popular Apps headings, and loading card skeletons.
- **RECONSTRUCTION:** The local fixture retains the catalogue loading state without provider recommendations.

## Actions

- **NOT OBSERVED:** No app, search, sort, filter, category, detail, installation, authorization, purchase, or management action was opened.

## Technical Data

- **OBSERVED / DOM:** Marketplace header, controls, filter rail, category list, section headings, and loading skeletons were visible.
- **NEEDS VERIFICATION:** Loaded catalogue, ranking, pricing, details, installation, authorization, purchases, updates, and persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni, 2026-10-08.
