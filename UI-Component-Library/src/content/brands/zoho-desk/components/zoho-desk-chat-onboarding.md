---
component: "Zoho Desk Chat Onboarding"
ui_category: "Channels > Live chat onboarding"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "A live-chat onboarding page explains real-time support and the credential scope of enabling the integration."
---

# Component: Zoho Desk Chat Onboarding

## Overview

**OBSERVED:** Support your customers through Chat, an Enable Chat action and a credential-scope notice were visible.

**RECONSTRUCTION:** Enable Chat is guarded locally.

**NOT OBSERVED:** Enablement, widget configuration, routing, transcripts, chat-to-ticket behavior and agent presence.

## State Fixtures

```json
{"enabled":false,"action":"guarded","notice":"Integration uses the enabling agent's authorization context"}
```

## Sources

Authenticated Zoho Desk, observed 2026-10-06.
