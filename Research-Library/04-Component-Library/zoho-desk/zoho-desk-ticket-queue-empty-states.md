---
component: "Zoho Desk Ticket Queue Empty States"
ui_category: "Feedback > Queue empty states"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "Agent and Team queue views use distinct empty states under a shared countdown-mode toolbar."
---

# Component: Zoho Desk Ticket Queue Empty States

## Overview

The Agent Queue displayed an empty-ticket message. The Team Queue displayed an onboarding message and Add New Team action. Both retained the ticket navigation rail and Countdown Mode control.

## Behavior & States

**OBSERVED:** Empty agent and team queue states were safely opened.

**RECONSTRUCTION:** Agent identity is fictional and the team-creation action is guarded.

**NOT OBSERVED:** Populated queues, countdown behavior, assignment, team creation, permissions and persistence.

## State Fixtures

```json
{"mode":"Countdown Mode","agent":"Alex Morgan","agentTickets":[],"teams":[],"teamCreation":"guarded"}
```

## Sources

Authenticated Zoho Desk, observed 2026-10-06. Agent identity was redacted.
