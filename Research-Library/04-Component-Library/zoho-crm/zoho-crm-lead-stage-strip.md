---
component: "Zoho CRM Lead Stage Strip"
ui_category: "Workflow > Stage path"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "A horizontal path presents the current lead status among alternative lifecycle stages."
---

# Component: Zoho CRM Lead Stage Strip

## Overview

The Overview begins with a horizontal stage path containing the current lead status and alternatives such as future contact, contacted, junk, lost, not contacted, pre-qualified and not qualified.

## Behavior & States

**OBSERVED:** One stage was visually selected. Stage buttons and an additional negative-status control were present.

**RECONSTRUCTION:** Fictional examples use neutral statuses and do not update provider records.

**NEEDS VERIFICATION:** Stage transitions, validation, confirmation, automation, rollback, required fields and permission gates. No stage was clicked because it could modify the record.

## Technical Data

- **OBSERVED:** Stages render as separate buttons in a path-like strip.
- **NOT OBSERVED:** Blueprint, workflow or automation execution.

```json
{"current":"Contacted","stages":["New","Attempted Contact","Contacted","Qualified","Disqualified"]}
```

## Accessibility

**NEEDS VERIFICATION:** current-step semantics, keyboard order, transition confirmation and error announcement.

## Sources

Authenticated Zoho CRM lead detail, observed 2026-10-07. No stage transition was attempted.
