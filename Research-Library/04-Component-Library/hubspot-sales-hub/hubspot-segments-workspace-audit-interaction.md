---
component: "HubSpot Segments Workspace — Interaction Component"
ui_category: "Deep Audit > Interaction Level"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-segments-workspace"
component_level: "interaction"
---

# HubSpot Segments Workspace — Interaction Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Segments Workspace](./hubspot-segments-workspace.md).
- **COMPONENT LEVEL:** interaction.

## Structure

- **OBSERVED:** Element | Safe action | Observed result
- **OBSERVED:** What's new | Open, then close | Displayed feature education without dismissing it through Got it.
- **OBSERVED:** Quick create | Open, then close | Listed four CRM objects. No object was selected.
- **OBSERVED:** Create segment | Open, then close | Listed Manually and Start with AI. Neither was selected.
- **OBSERVED:** Import, Got it and Admin settings | Not activated | Navigation, dismissal and settings outcomes remain NEEDS VERIFICATION.
- **OBSERVED:** OBSERVED: Creation modes are disclosed before any authoring form begins.
- **OBSERVED:** OBSERVED: AI creation is clearly separated from manual creation.
- **OBSERVED:** NEEDS VERIFICATION: Segment builder, validation, saved lists, permissions, import and AI suggestion generation.

## Actions

- Element | Safe action | Observed result
- What's new | Open, then close | Displayed feature education without dismissing it through Got it.
- Quick create | Open, then close | Listed four CRM objects. No object was selected.
- Create segment | Open, then close | Listed Manually and Start with AI. Neither was selected.
- Import, Got it and Admin settings | Not activated | Navigation, dismissal and settings outcomes remain NEEDS VERIFICATION.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-segments-workspace-audit-interaction.
- **OBSERVED:** Evidence-backed local interaction transitions and state changes for HubSpot Segments Workspace. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: The empty state explains segmentation by industry, size, location, value or other CRM and visitor attributes and links to a user guide.
- **OBSERVED:** OBSERVED: What's new opened a modal with AI Suggestions, Analyze and Granular Filter Insights tabs plus Professional and Enterprise entitlement messaging.
- **OBSERVED:** OBSERVED / DOM: Header menus use pop-up buttons with accessible expanded states. The What's new surface exposes a tab group.
- **NOT OBSERVED:** NEEDS VERIFICATION: Segment query model, recalculation cadence, creation API and AI inputs.

### Network / API

- **NOT OBSERVED:** NEEDS VERIFICATION: Segment query model, recalculation cadence, creation API and AI inputs.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-segments-workspace"
component_level: "interaction"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
interaction_result: "local guard"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-segments-workspace.
- Reusable level: interaction.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-sales-hub/hubspot-segments-workspace.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
