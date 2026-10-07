---
component: "Zoho CRM Record Header Actions"
ui_category: "Page Header > Record actions"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "Identity, tags, communication, conversion, edit, overflow and record navigation controls share one detail header."
---

# Component: Zoho CRM Record Header Actions

## Overview

The lead detail header combines back navigation, avatar, record identity, Add Tags, Send Email, Convert, Edit, More Options, and previous and next record controls.

## Behavior & States

**OBSERVED:** The header stayed visible above the Overview content. No action other than Back-style navigation into the record was exercised.

**RECONSTRUCTION:** Fictional identity and company values replace the observed record.

**NEEDS VERIFICATION:** Tagging, email, conversion, editing, overflow menu, record traversal, disabled states, permissions and confirmations.

## Technical Data

- **OBSERVED:** Record actions expose named buttons and previous and next controls expose descriptions.
- **NOT OBSERVED:** Action endpoints, conversion rules or autosave behavior.

```json
{"name":"Avery Chen","company":"Northwind Demo","tags":[],"canConvert":true,"canEdit":true}
```

## Accessibility

**NEEDS VERIFICATION:** heading semantics, avatar alternative text, confirmation focus and action-status announcements.

## Sources

Authenticated Zoho CRM lead detail, observed 2026-10-07. Private receipt `03-lead-detail-overview.png`.
