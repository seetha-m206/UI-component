---
component: "HubSpot Data Model Introduction — Action Component"
ui_category: "Deep Audit > Action Level"
source_product: "HubSpot Data Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed user actions and guarded outcomes for HubSpot Data Model Introduction. Derived from the authored observation record."
parent_workflow: "hubspot-data-model-introduction"
component_level: "action"
---

# HubSpot Data Model Introduction — Action Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Data Model Introduction](./hubspot-data-model-introduction.md).
- **COMPONENT LEVEL:** action.

## Structure

- **OBSERVED:** OBSERVED: Intro, Manage, Health and Analysis tabs framed the model as a blueprint for reporting, segmentation and automation.
- **OBSERVED:** OBSERVED: Edit Data Model and an AI recommendation prompt were available. Recommendation submission stayed disabled while the textbox was empty. Links led to records, import, workflow, list and report tools.
- **OBSERVED:** NOT ACTIVATED: Editing, prompt entry, recommendations and downstream links.
- **OBSERVED:** NEEDS VERIFICATION: Object editing, relationships, health analysis, recommendation output and save behavior.

## Actions

- OBSERVED: Intro, Manage, Health and Analysis tabs framed the model as a blueprint for reporting, segmentation and automation.
- OBSERVED: Edit Data Model and an AI recommendation prompt were available. Recommendation submission stayed disabled while the textbox was empty. Links led to records, import, workflow, list and report tools.
- NOT ACTIVATED: Editing, prompt entry, recommendations and downstream links.
- NEEDS VERIFICATION: Object editing, relationships, health analysis, recommendation output and save behavior.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-data-model-introduction-audit-action.
- **OBSERVED:** Evidence-backed user actions and guarded outcomes for HubSpot Data Model Introduction. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Intro, Manage, Health and Analysis tabs framed the model as a blueprint for reporting, segmentation and automation.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Edit Data Model and an AI recommendation prompt were available. Recommendation submission stayed disabled while the textbox was empty. Links led to records, import, workflow, list and report tools.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT ACTIVATED: Editing, prompt entry, recommendations and downstream links.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NEEDS VERIFICATION: Object editing, relationships, health analysis, recommendation output and save behavior.

### Network / API

- **NOT OBSERVED:** NEEDS VERIFICATION: Object editing, relationships, health analysis, recommendation output and save behavior.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-data-model-introduction"
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

- Parent workflow: hubspot-data-model-introduction.
- Reusable level: action.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-data-management/hubspot-data-model-introduction.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
