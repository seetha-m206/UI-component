---
component: "HubSpot Data Model Introduction — Atomic Component"
ui_category: "Deep Audit > Atomic Level"
source_product: "HubSpot Data Hub"
last_verified: "2026-10-07"
evidence_state: "runtime_pending"
status: "partial"
summary: "Evidence-bounded reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Data Model Introduction. The source record does not directly observe this state, so the fixture is a labelled local reconstruction."
parent_workflow: "hubspot-data-model-introduction"
component_level: "atomic"
---

# HubSpot Data Model Introduction — Atomic Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Data Model Introduction](./hubspot-data-model-introduction.md).
- **COMPONENT LEVEL:** atomic.

## Structure

- **NOT OBSERVED:** NOT OBSERVED: The authored parent record does not provide a more specific atomic description.

## Actions

- OBSERVED: Intro, Manage, Health and Analysis tabs framed the model as a blueprint for reporting, segmentation and automation.
- OBSERVED: Edit Data Model and an AI recommendation prompt were available. Recommendation submission stayed disabled while the textbox was empty. Links led to records, import, workflow, list and report tools.
- NOT ACTIVATED: Editing, prompt entry, recommendations and downstream links.
- NEEDS VERIFICATION: Object editing, relationships, health analysis, recommendation output and save behavior.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-data-model-introduction-audit-atomic.
- **RECONSTRUCTION:** Evidence-bounded reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Data Model Introduction. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT OBSERVED: The authored parent record does not provide a more specific atomic description.

### Network / API

- **NOT OBSERVED:** NEEDS VERIFICATION: Object editing, relationships, health analysis, recommendation output and save behavior.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-data-model-introduction"
component_level: "atomic"
evidence_state: "reconstructed"
data_scope: "fictional_local_only"
status: "not_observed"
control_count: "1"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-data-model-introduction.
- Reusable level: atomic.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-data-management/hubspot-data-model-introduction.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
