---
component: 'Freshsales Contact Scoring Setup'
ui_category: 'Automation > Predictive Scoring'
source_product: 'Freshsales'
last_verified: '2026-10-07'
evidence_state: 'source_reviewed'
status: 'partial'
summary: 'Authenticated-source Freshsales pattern with fictional local fixtures and provider outcomes left unverified.'
---

# Freshsales Contact Scoring Setup

## Location

- **OBSERVED:** Admin Settings, Leads Contacts & Accounts, Contact Scoring.

## Structure

- **OBSERVED:** Scoring explanation, support links, event-data guidance, positive and negative signal builders, suggested signals, import/migration prompts and score-based automation.
- **OBSERVED:** The account had no configured signals. Suggested fields included country, industry, email and phone.

## Actions

- **OBSERVED:** The page was opened read-only.
- **NOT EXECUTED:** Segment integration, tracking code, signals, import, migration, threshold, tags, lifecycle stage and Save settings.

## Behavior & States

- **OBSERVED:** Save settings was disabled. The threshold displayed 70 and described a tag plus lifecycle-stage automation.
- **RECONSTRUCTION:** Local fields, threshold and automation text are fictional and do not calculate or persist a score.

## Technical Data

- **OBSERVED / DOM:** Signals appeared as buttons and the threshold as a numeric stepper.
- **NEEDS VERIFICATION:** Freddy model behavior, scoring math, event ingestion, recalculation, automation execution and plan limits.

## Sources

- **OBSERVED:** Authenticated Freshsales Contact Scoring settings, 2026-10-07.
