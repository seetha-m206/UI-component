---
component: "Zoho Desk Team Feeds"
ui_category: "Collaboration > Activity feed"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "A team feed combines feed tabs, a post composer and ticket activity cards."
---

# Component: Zoho Desk Team Feeds

## Overview

**OBSERVED:** All Feeds, Feeds - Open Tickets and Team Feed Posts tabs, a post composer and one ticket update card with Reply, Comment and Close Ticket actions were visible.

**RECONSTRUCTION:** The local card uses fictional agent, contact and ticket values. Composer and ticket actions are guarded.

**NOT OBSERVED:** Posting, mentions, replies, comments, ticket closure, filtering and pagination.

## State Fixtures

```json
{"tab":"All Feeds","agent":"Alex Morgan","ticket":"#DEMO-1042","composer":"guarded","actions":"guarded"}
```

## Sources

Authenticated Zoho Desk, observed 2026-10-06. Provider feed values were redacted.
