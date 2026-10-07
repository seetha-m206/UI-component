---
component: "Zoho CRM Contacts Guidance List"
ui_category: "Content > Guidance list"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "A concise benefit list explains engagement channels and consolidated contact tracking inside an empty module."
---

# Component: Zoho CRM Contacts Guidance List

## Overview

The Contacts onboarding panel uses short benefit statements to explain what becomes available after contacts are added.

## Behavior & States

**OBSERVED:** One row described engagement across multiple channels and another described keeping contact activity in one place.

**RECONSTRUCTION:** Local copy uses neutral fictional wording while retaining the two-row explanatory hierarchy.

**NEEDS VERIFICATION:** Additional rows, responsive wrapping, localization and plan-specific copy were not observed.

## Rules & Validation

Keep each row outcome-focused. Embedded links should not make the surrounding sentence ambiguous when read independently.

## Technical Data

- **OBSERVED:** Guidance appears as a compact list beneath a question-style heading.
- **OBSERVED:** One row contains multiple inline links.
- **NOT OBSERVED:** Data source, content configuration or experimentation rules.

### State Fixtures

```json
{"heading":"How can contacts help?","items":["Engage through approved channels","Track interactions in one place"]}
```

## Accessibility

**NEEDS VERIFICATION:** Whether the guidance uses semantic list markup and whether inline link purpose remains clear out of context.

## Sources

Authenticated Zoho CRM Contacts, observed 2026-10-07. Private receipt `05-contacts-empty-state.png`.
