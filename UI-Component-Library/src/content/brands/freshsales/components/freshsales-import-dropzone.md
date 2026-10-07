---
component: 'Freshsales Import Dropzone'
ui_category: 'Data Input > File Dropzone'
source_product: 'Freshsales'
last_verified: '2026-10-07'
evidence_state: 'source_reviewed'
status: 'partial'
summary: 'Authenticated-source Freshsales pattern with fictional local fixtures and provider outcomes left unverified.'
---

# Freshsales Import Dropzone

## Location

- **OBSERVED:** Deal import step one.

## Structure

- **OBSERVED:** Drop/upload instruction plus CSV, XLSX and maximum-size guidance.

## Actions

- **RECONSTRUCTION:** Clicking the idle fixture shows a local no-upload notice. Disabled state cannot open a chooser.

## Behavior & States

- **OBSERVED:** The source pattern was visible during authenticated observation.
- **RECONSTRUCTION:** Idle and disabled variants never access a file.

## Technical Data

- **NEEDS VERIFICATION:** File validation, upload progress, parsing, rejection and retry.

## Sources

- **OBSERVED:** Authenticated Freshsales deal import entry, 2026-10-07.
