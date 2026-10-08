---
component: "Freshdesk Omni Feedback Form"
ui_category: "Channels > Feedback Form"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed the embedded feedback-form configuration without changing fields or copying code."
---

# Freshdesk Omni Feedback Form

## Location

- **OBSERVED:** Admin → Channels → Feedback Form.

## Structure

- **OBSERVED:** The iframe showed form heading, submit text, confirmation message, height, file, HTTPS, article search, CAPTCHA and screenshot options, plus generated embed code guidance.
- **RECONSTRUCTION:** The local fixture uses fictional text and a placeholder embed-code block.

## Actions

- **NOT OBSERVED:** No field, option, CAPTCHA, screenshot, ticket field, embed code, submit behavior, or website integration was changed or copied.

## Technical Data

- **OBSERVED / DOM:** Configuration fields, five option controls, embed-code area, field-management link, and getting-started help were exposed.
- **NEEDS VERIFICATION:** Code generation, website rendering, ticket submission, attachments, CAPTCHA, article search, and persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni, 2026-10-08.
