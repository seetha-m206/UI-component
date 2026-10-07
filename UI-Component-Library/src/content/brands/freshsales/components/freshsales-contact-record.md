---
component: 'Freshsales Contact Record'
ui_category: 'Application Layout > Record Detail'
source_product: 'Freshsales'
last_verified: '2026-10-07'
evidence_state: 'source_reviewed'
status: 'partial'
summary: 'Authenticated-source Freshsales pattern with fictional local fixtures and provider outcomes left unverified.'
---

# Freshsales Contact Record

## Location

- **OBSERVED:** One provider-supplied sample contact record across Overview, Contact details, and Activities.

## Structure

- **OBSERVED:** Breadcrumb, identity panel, score/customer-fit summary, fixed Email/Call/SMS/Task/Meeting/Sales activities/Add deal bar, section navigation, and main content panel.
- **OBSERVED:** Overview combined lifecycle stage, segmented status progression, summary fields, open deals, meeting/email/sequence cards, and a note rail.
- **OBSERVED:** Contact details added field search, field-history and manage-fields actions, category tabs, Show empty fields, and grouped values.
- **OBSERVED:** Activities added timeline/notes/tasks/meetings tabs, filters, date groups, and activity cards.

## Actions

- **OBSERVED:** Read-only tabs and the Sales activities disclosure were inspected. Communication, note, task, meeting, deal, sequence, reply, manage-field, and status actions were not executed.

## Behavior & States

- **OBSERVED:** The activity timeline presented a loading message before resolving. The Sales activities disclosure exposed a custom-activity entry.
- **RECONSTRUCTION:** Fixture identity, communication history, notes, values, and account relationships are fictional.

## Technical Data

- **OBSERVED / DOM:** Route query updated per tab. Buttons, headings, links, and lifecycle/status controls were accessible.
- **NEEDS VERIFICATION:** Edit rules, validation, communication providers, status persistence, audit history, Freddy output, and downstream effects.

## Sources

- **OBSERVED:** Authenticated Freshsales sample contact, 2026-10-07.
