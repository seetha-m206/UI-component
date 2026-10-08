---
component: "Freshdesk Omni Customer Satisfaction Surveys"
ui_category: "Administration > Customer Satisfaction"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed the customer satisfaction surveys read-only with consequential actions left untouched."
---

# Freshdesk Omni Customer Satisfaction Surveys

## Location

- **OBSERVED:** Admin → Workflows → Customer Satisfaction Surveys.

## Structure

- **OBSERVED:** The survey inventory exposed Manage frequency, New Survey, search, sorting, three active system survey types, language and channel columns, and filters for status and authorship dates.
- **RECONSTRUCTION:** The local fixture uses fictional survey names and neutral creation metadata.

## Actions

- **NOT OBSERVED:** No survey, frequency, channel, language, filter, sort, status or row action was opened or changed.

## Technical Data

- **OBSERVED / DOM:** Toolbar, table structure, active status, pagination summary and filter controls were exposed.
- **NEEDS VERIFICATION:** Survey questions, triggers, frequency rules, channel delivery, responses and persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni customer satisfaction surveys, 2026-10-08.
