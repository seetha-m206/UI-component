---
component: "Zoho CRM List Pagination Footer"
ui_category: "Navigation > Pagination"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "A sticky list footer combines total records, the visible range, and previous and next navigation."
---

# Component: Zoho CRM List Pagination Footer

## Overview

The Leads list footer shows Total Records, a visible range, and Previous and Next buttons at the lower edge of the table.

## Behavior & States

**OBSERVED:** The first page showed a thirty-record range. Previous was disabled and Next was enabled. The authenticated total is intentionally omitted from public fixtures.

**RECONSTRUCTION:** Fictional counts preserve the pagination pattern.

**NEEDS VERIFICATION:** page-size control, last-page behavior, loading feedback, URL persistence and filter interaction.

## Technical Data

- **OBSERVED:** Previous and Next are exposed as buttons with disabled state.
- **NOT OBSERVED:** Cursor versus offset pagination or total-count endpoint.

```json
{"total":84,"from":1,"to":30,"previousDisabled":true,"nextDisabled":false}
```

## Accessibility

**NEEDS VERIFICATION:** range announcement after navigation, current-page semantics and focus restoration.

## Sources

Authenticated Zoho CRM Leads list, observed 2026-10-07. Pagination was not activated.
