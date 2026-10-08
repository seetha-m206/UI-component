---
component: "Freshdesk Omni AI Agent Studio Unavailable Route"
ui_category: "Feedback > Not Found"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed provider not-found state reached from AI Agent Studio navigation with entitlement unresolved."
---

# Freshdesk Omni AI Agent Studio Unavailable Route

## Location

- **OBSERVED:** Primary navigation → AI Agent Studio.

## Structure

- **OBSERVED:** Illustration, the message “Not all those who wander are lost :)” and a Back to tickets action inside the persistent application shell.

## Actions

- **OBSERVED:** Back to tickets returned to a sample Dashboard route.

## Behavior & States

- **OBSERVED:** Provider route resolved to `/a/notfound`.
- **NEEDS VERIFICATION:** Whether this reflects trial entitlement, route configuration, rollout state or a provider defect.
- **RECONSTRUCTION:** Local fixture presents the error without claiming its cause.

## Technical Data

- **OBSERVED / DOM:** The illustration exposed a missing-translation description and the recovery action was a link.
- **NEEDS VERIFICATION:** HTTP response, router decision and authorization response.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni navigation, 2026-10-08.
