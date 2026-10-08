---
component: "Freshsales Conversations Onboarding"
ui_category: "Communication > Inbox Onboarding"
source_product: "Freshsales"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Authenticated-source Freshsales pattern with fictional local fixtures and provider outcomes left unverified."
---

# Freshsales Conversations Onboarding

## Location

- **OBSERVED:** Conversations module before mailbox connection.

## Structure

- **OBSERVED:** Top tabs for Conversations and Sales Sequences, nested Email folders, Bulk Email, Email Tracking, Phone, SMS, and Chat groups.
- **OBSERVED:** Main panel explained private inbox synchronization and presented Gmail, Microsoft Outlook, Zoho, and Others provider cards.

## Actions

- **OBSERVED:** The onboarding state was inspected. No mailbox, OAuth, team inbox, message, template, tracking, phone, SMS, or chat setup was started.

## Behavior & States

- **OBSERVED:** Freshsales detected and displayed an account-hosting recommendation. Account identity is excluded from local records.
- **RECONSTRUCTION:** Local provider buttons only emit guard notices.

## Technical Data

- **OBSERVED / DOM:** Folders were links and provider choices were visible interactive cards.
- **NEEDS VERIFICATION:** OAuth scopes, sync rules, privacy controls, failure states, sending, templates, tracking, and permissions.

## Sources

- **OBSERVED:** Authenticated Freshsales Conversations onboarding, 2026-10-07.
