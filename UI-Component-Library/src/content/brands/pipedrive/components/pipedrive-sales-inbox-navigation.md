---
component: "Pipedrive Sales Inbox Navigation"
ui_category: "Navigation > Mailbox Navigation"
source_product: "Pipedrive"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Unconfigured mailbox folder navigation."
---

# Pipedrive Sales Inbox Navigation

## Location
- **OBSERVED:** Authenticated unconfigured Sales Inbox screen.
## Screenshot
- **NEEDS VERIFICATION:** Provider screenshot is not retained because the authenticated view exposed private account context.
## Structure
- **OBSERVED:** Disabled New email, Inbox, Drafts, Outbox, Sent and Archive controls plus a WhatsApp integration group.
## Actions
- **OBSERVED:** Mailbox controls were disabled and no integration was opened.
## Behavior & States
- **RECONSTRUCTION:** The local preview uses fictional content and guard notices. It cannot create analytics artifacts or connect a mailbox.
## Technical Data
- **OBSERVED / DOM:** Accessibility structure and visible labels were inspected. Network, provider APIs and persistence were not exercised.
## Accessibility
- **NEEDS VERIFICATION:** Keyboard order, focus restoration, announcements, loading, validation and errors.
## Human Context
- **RECOMMENDATION:** Explain prerequisites and downstream effects before enabling creation or connection actions.
## AI Context
- **OBSERVED:** AI was visible as a labelled report or writing capability. **NOT OBSERVED:** AI request, response, quality or persistence.
## Needs Verification
- **NEEDS VERIFICATION:** Permissions, billing, provider errors, responsive behavior and downstream effects.
## Sources
- **OBSERVED:** Authenticated Pipedrive Authenticated unconfigured Sales Inbox screen., 2026-10-07.
