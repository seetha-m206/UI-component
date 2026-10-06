---
component: "Zoho Desk Knowledge Base Onboarding"
ui_category: "Content Creation > Knowledge base onboarding"
source_product: "Zoho Desk"
last_verified: "2026-10-06"
evidence_state: "documented"
status: "partial"
summary: "An empty knowledge base introduces article capabilities and offers guarded start-writing and learn-more actions."
---

# Component: Zoho Desk Knowledge Base Onboarding

## Location

- **Source product:** Zoho Desk
- **Product category:** Customer Support / Helpdesk
- **Extraction date:** 2026-10-06

## Overview

The Articles workspace showed an onboarding panel with a large title, six capability bullets, an illustration or video card, and primary and secondary calls to action. The left rail exposed Dashboard, Articles, Templates, Manage KB, Gallery, Moderation and Recycle Bin.

## Behavior & States

**OBSERVED:** Empty onboarding content and navigation labels were visible in an authenticated workspace.

**RECONSTRUCTION:** The local preview uses fictional workspace data and blocks article creation.

**NOT OBSERVED:** Article creation, publishing, templates, moderation, permissions, multilingual content and search results.

## Rules & Validation

**NEEDS VERIFICATION:** Publishing workflow, validation, versioning, review and access control require a separate safe pass.

## State Fixtures

```json
{"workspace":"Northwind Demo","title":"Start adding Articles","articles":[],"creation":"guarded"}
```

## Sources

Authenticated Zoho Desk, observed 2026-10-06. Private provider values were excluded from the catalogue.
