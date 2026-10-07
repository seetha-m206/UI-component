---
component: "Zoho CRM Documents Folder Navigation"
ui_category: "Navigation > Folder sidebar"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "A compact folder sidebar separates personal folders from team folders beside the embedded document workspace."
---

# Component: Zoho CRM Documents Folder Navigation

## Overview

The Documents module includes a narrow navigation region for personal and team folder groupings.

## Behavior & States

**OBSERVED:** The sidebar displayed My Folders and a Team Folders grouping.

**RECONSTRUCTION:** The fictional fixture uses empty folder groups and does not represent live files.

**NEEDS VERIFICATION:** Folder expansion, selection, counts, permissions, loading and empty states were not exercised.

## Rules & Validation

Do not infer folder contents or access from visible group labels. No folder was opened.

## Technical Data

- **OBSERVED:** The folder navigation sits beside the document workspace.
- **OBSERVED:** Personal and team scopes are visually distinguished.
- **NOT OBSERVED:** Folder data source or permission evaluation.

### State Fixtures

```json
{"groups":[{"label":"My Folders","folders":[]},{"label":"Team Folders","folders":[]}]}
```

## Accessibility

**NEEDS VERIFICATION:** Tree semantics, expansion state, keyboard navigation and selected-folder announcement.

## Sources

Authenticated Zoho CRM Documents, observed 2026-10-07. Private receipt `09-documents-workdrive.png`.
