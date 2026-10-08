---
component: "Asana Project Board"
ui_category: "Project Management > Board"
source_product: "Asana"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Authenticated-source record with a guarded fictional local preview."
---

# Asana Project Board

## Location
- **OBSERVED:** Authenticated sample bug-tracking project Board view.

## Structure
- **OBSERVED:** Project header, status and member controls, view tabs, board toolbar, section columns, task cards and first-project onboarding overlay.

## Actions
- **OBSERVED:** Page navigation and overlay observation only. No task, section, status, member or project setting changed.

## Behavior & States
- **OBSERVED:** Three columns displayed counts and populated cards with severity, component, assignee and due date.
- **RECONSTRUCTION:** Local board replaces every task and person with fictional data.

## Technical Data
- **OBSERVED:** A reload emitted 49 GET requests in the bounded capture, primarily script assets from Asana and its CloudFront CDN, plus document, stylesheet, image, Fetch and XHR resources. All captured responses were 2xx.

## Needs Verification
- **NOT OBSERVED:** Drag and drop, saved changes, task detail, automations, board customization and concurrent updates.

## Sources
- **OBSERVED:** Authenticated Asana project board and sanitized CDP capture, 2026-10-08.
