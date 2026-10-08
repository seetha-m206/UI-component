---
component: "HubSpot Inbox View and Actions Disclosures — State Component"
ui_category: "Deep Audit > State Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-inbox-view-and-actions"
component_level: "state"
---

# HubSpot Inbox View and Actions Disclosures — State Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Inbox View and Actions Disclosures](./hubspot-inbox-view-and-actions.md).
- **COMPONENT LEVEL:** state.

## Structure

- **OBSERVED:** OBSERVED: More changed `aria-expanded` from false to true. Actions acquired expanded state while its list was open. The visible empty state remained in the main panel.
- **OBSERVED:** NOT OBSERVED: Whether views are mutually exclusive after a channel is connected, whether zero counts update live, saved view customization and any action destination.

## Actions

- Element | User action | Observed result
- More | Space | Expanded into the six additional views and changed its label to Less.
- Actions | Space | Expanded a list with Manage team availability and Connect a channel.
- All closed | Enter or Space | Focused the control. A distinct data result was NOT OBSERVED because the Inbox remained in the first-channel empty state.
- Manage team availability | Not activated | Availability management is NOT OBSERVED.
- Connect a channel | Not activated | Channel creation is NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-inbox-view-and-actions-audit-state.
- **OBSERVED:** Evidence-backed visible selection, entitlement, disabled, expanded, and status states for HubSpot Inbox View and Actions Disclosures. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: Three top-level views show zero counts: Unassigned, Assigned to me and All open. A More disclosure exposes Email, Calls, All closed, Sent, Spam and Trash. The Actions button opens a two-option menu below the view list.
- **OBSERVED:** OBSERVED / DOM: These controls used button roles. The More accordion exposed `aria-controls` and `aria-expanded`. Keyboard Space produced a visible, accessible state change when pointer clicks did not.

### Network / API

- **NOT OBSERVED:** NOT OBSERVED: Internal implementation, requests, persistence, motion, error handling.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-inbox-view-and-actions"
component_level: "state"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
selected_state: "documented"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-inbox-view-and-actions.
- Reusable level: state.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-inbox-view-and-actions.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
