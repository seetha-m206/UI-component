---
component: "Freshdesk Omni Web Chat Configuration"
ui_category: "Messaging > Widget Settings"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed Appearance, Content and Preferences settings with live preview and unchanged save state."
---

# Freshdesk Omni Web Chat Configuration

## Location

- **OBSERVED:** Web Chat → Advanced settings.

## Structure

- **OBSERVED:** Tabs for Appearance, Content, Preferences, Deploy code and User authentication, plus live preview and Save, Discard Changes and Go to widgets actions.
- **OBSERVED:** Appearance covered visual branding, titles, profile, position and behavior, and custom CSS.
- **OBSERVED:** Content covered Live Chat topics, Knowledge Base and Web Forms.
- **OBSERVED:** Preferences covered typing, notification sound, attachments, privacy, trusted domains, resolved history, initial knowledge-base view, event tracking and captcha.

## Actions

- **OBSERVED:** Appearance, Content and Preferences tab changes were read-only navigation.
- **NOT OBSERVED:** Field edits, toggles, upload, Save, Deploy code and User authentication.

## Behavior & States

- **OBSERVED:** Save and Discard Changes remained disabled because no change was made.
- **RECONSTRUCTION:** Local settings update only the fictional preview and never persist.

## Technical Data

- **OBSERVED / DOM:** Tabs, disclosure sections, radios, switches, text fields, steppers, preview selector and code-entry area were accessible.
- **NEEDS VERIFICATION:** Deployment snippet, authentication contract, custom CSS sanitizer and persistence APIs.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni Widget Configuration, 2026-10-08.
