---
component: "Freshdesk Omni Support Email Setup"
ui_category: "Channels > Email"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed the new support email setup chooser without selecting or configuring a mail server."
---

# Freshdesk Omni Support Email Setup

## Location

- **OBSERVED:** Admin → Channels → Email.

## Structure

- **OBSERVED:** The page offered Gmail, Microsoft 365, Custom, and Freshworks mail server paths plus a ready support address, Copy, Use this email, setup guidance, and troubleshooting resources.
- **RECONSTRUCTION:** The local fixture uses support@help.example.test and omits the provider address.

## Actions

- **NOT OBSERVED:** No server, mailbox, support address, forwarding, copy, use, domain verification, or help action was selected or configured.

## Technical Data

- **OBSERVED / DOM:** Four server choices, a ready-address path, account guidance, and conversion explanations were exposed.
- **NEEDS VERIFICATION:** Authentication, mailbox ownership, forwarding, domain verification, delivery, ticket conversion, and persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni, 2026-10-08.
