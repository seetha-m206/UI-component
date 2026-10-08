---
component: "Freshdesk Omni Proactive Outreach Error"
ui_category: "Workflows > Proactive Outreach"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed a generic provider error after opening Proactive Outreach."
---

# Freshdesk Omni Proactive Outreach Error

## Location

- **OBSERVED:** Admin → Workflows → Proactive Outreach.

## Structure

- **OBSERVED:** The navigation returned a generic error screen stating that something went wrong and offering Go back.
- **RECONSTRUCTION:** The local fixture preserves the error classification and keeps Go back local only.

## Actions

- **NOT OBSERVED:** No recovery, outreach, audience, message, campaign, schedule, or navigation action was opened.

## Technical Data

- **OBSERVED / DOM:** Generic failure heading, provider apology, and Go back action were exposed.
- **NEEDS VERIFICATION:** Normal route, eligibility, recovery, outreach editor, audience, delivery, analytics, and persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni, 2026-10-08.
