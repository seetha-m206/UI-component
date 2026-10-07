---
component: "HubSpot Revenue Agent Beta"
ui_category: "Revenue > Revenue Agent"
source_product: "HubSpot Revenue Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Observed authenticated HubSpot Revenue Hub screen patterns with explicit provider-safety boundaries and fictional local fixtures."
---

# HubSpot Revenue Agent Beta

## Location

- **OBSERVED:** `/revenue-agent/343751787`.

## Screenshots

- **OBSERVED:** `2026-10-07-revenue-agent-state.png`.

## Screen, Actions & States

- **OBSERVED:** Beta introduction described context-aware invoice follow-up with user control, compatibility with billing tools synced to HubSpot and no additional seat requirement.
- **OBSERVED:** Actions included How Revenue Agent uses HubSpot Credits, Sign up for beta and a disabled Learn more button, plus an Agent Hub link.
- **NOT ACTIVATED:** Credits disclosure, beta signup, Agent Hub and follow-up automation.
- **NEEDS VERIFICATION:** Setup, billing-tool connection, draft review, approval, sending, escalation and credit consumption.

## Fictional Local Fixture

```yaml
agent: Northstar Receivables Assistant
status: beta_available
invoice: INV-NORTHSTAR-1042
follow_up_state: review_required
credits_used: 0
```

## Evidence Boundary

- **FACT:** The Revenue Agent beta introduction was directly observed.
- **RECONSTRUCTION:** The agent fixture is fictional and local only.
- **NEEDS VERIFICATION:** No beta enrolment or invoice follow-up was activated.

## Sources

- Authenticated HubSpot Revenue Agent beta screen, observed 2026-10-07.
