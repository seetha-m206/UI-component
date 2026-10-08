---
component: "Freshsales Account Record Overview"
ui_category: "Application Layout > Record Detail"
source_product: "Freshsales"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Authenticated-source Freshsales pattern with fictional local fixtures and provider outcomes left unverified."
---

# Freshsales Account Record Overview

## Location

- **OBSERVED:** A provider-supplied sample account opened from a related-account link inside a sample deal.

## Structure

- **OBSERVED:** Account identity and social links, domain and parent-account prompt, fixed action bar, Overview heading, customizable Summary card, grouped business fields and a note rail.
- **OBSERVED:** Summary fields included owner, phone, industry, business type, employee range, annual revenue and last-contact context.

## Actions

- **OBSERVED:** Only the related-account link and Go back navigation were used.
- **NOT EXECUTED:** Call, note, task, meeting, sales activity, deal creation, overview customization, parent-account and field actions.

## Behavior & States

- **OBSERVED:** The account opened as a nested overlay and returned to the underlying sample deal.
- **RECONSTRUCTION:** Fixture identity, domain, revenue, staff size, activity and ownership are fictional.

## Technical Data

- **OBSERVED / DOM:** The overlay provided accessible headings, links, actions and grouped summary fields.
- **NEEDS VERIFICATION:** Editing, related-list behavior, hierarchy persistence and communication outcomes.

## Sources

- **OBSERVED:** Authenticated Freshsales sample account, 2026-10-07.
