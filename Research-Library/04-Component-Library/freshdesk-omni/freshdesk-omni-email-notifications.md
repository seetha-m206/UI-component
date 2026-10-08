---
component: "Freshdesk Omni Email Notifications"
ui_category: "Administration > Email Notifications"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed the email notifications read-only with consequential actions left untouched."
---

# Freshdesk Omni Email Notifications

## Location

- **OBSERVED:** Admin → Workflows → Email Notifications.

## Structure

- **OBSERVED:** The embedded settings page exposed Agent, Requester, CC and Templates tabs with automatic event notification rows, enabled indicators and Edit links.
- **RECONSTRUCTION:** The local fixture preserves representative ticket and SLA events without provider template identifiers.

## Actions

- **NOT OBSERVED:** No tab consequence, notification toggle, language, recipient, placeholder or template editor was invoked.

## Technical Data

- **OBSERVED / DOM:** Tabs, event rows, enabled state, contextual note and Edit actions were exposed.
- **NEEDS VERIFICATION:** Template content, delivery, recipients, language fallback, placeholders and persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni email notifications, 2026-10-08.
