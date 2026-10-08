---
component: "HubSpot CRM Record Detail Workspace — Action Component"
ui_category: "Deep Audit > Action Level"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed user actions and guarded outcomes for HubSpot CRM Record Detail Workspace. Derived from the authored observation record."
parent_workflow: "hubspot-crm-record-detail-workspace"
component_level: "action"
---

# HubSpot CRM Record Detail Workspace — Action Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot CRM Record Detail Workspace](./hubspot-crm-record-detail-workspace.md).
- **COMPONENT LEVEL:** action.

## Structure

- **OBSERVED:** Element | Safe action | Observed result
- **OBSERVED:** Record Actions | Open, then close | Showed Follow, properties/history actions, association review, Summarize, search, email opt-out, restore activity, Merge, Clone, Delete and Export contact data on the sample contact.
- **OBSERVED:** More activities | Open, then close | Showed sequence enrollment, LinkedIn, SMS, WhatsApp, call, meeting, email and postal-mail actions plus Reorder activity buttons.
- **OBSERVED:** Collapsible cards | Not changed in this pass | Overview, Health and association cards were observed expanded.
- **OBSERVED:** Create or destructive actions | Not activated | No note, email, call, task, meeting, sequence, message, association, merge, clone, delete or export action ran.

## Actions

- Element | Safe action | Observed result
- Record Actions | Open, then close | Showed Follow, properties/history actions, association review, Summarize, search, email opt-out, restore activity, Merge, Clone, Delete and Export contact data on the sample contact.
- More activities | Open, then close | Showed sequence enrollment, LinkedIn, SMS, WhatsApp, call, meeting, email and postal-mail actions plus Reorder activity buttons.
- Collapsible cards | Not changed in this pass | Overview, Health and association cards were observed expanded.
- Create or destructive actions | Not activated | No note, email, call, task, meeting, sequence, message, association, merge, clone, delete or export action ran.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-crm-record-detail-workspace-audit-action.
- **OBSERVED:** Evidence-backed user actions and guarded outcomes for HubSpot CRM Record Detail Workspace. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: The workspace uses three columns: identity and editable key properties on the left, overview/activity intelligence in the centre and association cards on the right.
- **OBSERVED:** OBSERVED: The centre column includes Catch-up and Activities modes, customizable cards, AI-labelled insights, recent interactions, health, sentiment, challenges and feedback controls.
- **OBSERVED:** OBSERVED: The right column uses collapsible association cards with counts, Add controls, card-settings links and populated or explanatory empty states.
- **OBSERVED:** OBSERVED / DOM: Property controls expose stable form-control identifiers and accessible labels. Association cards expose expanded/collapsed state and record counts.
- **OBSERVED:** OBSERVED / DOM: Activity shortcuts and record actions are real buttons or links with descriptive accessible names.

### Network / API

- **NOT OBSERVED:** NEEDS VERIFICATION: Record read/write APIs, AI source contracts, caching, optimistic state and responsive column behavior.
- **NOT OBSERVED:** Record Actions | Open, then close | Showed Follow, properties/history actions, association review, Summarize, search, email opt-out, restore activity, Merge, Clone, Delete and Export contact data on the sample contact.
- **NOT OBSERVED:** Create or destructive actions | Not activated | No note, email, call, task, meeting, sequence, message, association, merge, clone, delete or export action ran.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-crm-record-detail-workspace"
component_level: "action"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
last_action: "none"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-crm-record-detail-workspace.
- Reusable level: action.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-sales-hub/hubspot-crm-record-detail-workspace.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
