---
component: "HubSpot Design Manager Empty State — Empty Component"
ui_category: "Deep Audit > Empty Level"
source_product: "HubSpot Content Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-design-manager-empty-state"
component_level: "empty"
---

# HubSpot Design Manager Empty State — Empty Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Design Manager Empty State](./hubspot-design-manager-empty-state.md).
- **COMPONENT LEVEL:** empty.

## Structure

- **OBSERVED:** OBSERVED: The empty file workspace exposed search, File, View, disabled Actions and a finder rooted at `@hubspot`.
- **OBSERVED:** OBSERVED: The empty file workspace exposed search, File, View, disabled Actions and a finder rooted at `@hubspot`.
- **OBSERVED:** FACT: The empty workspace, navigation and actions were directly observed.

## Actions

- OBSERVED: The empty file workspace exposed search, File, View, disabled Actions and a finder rooted at `@hubspot`.
- OBSERVED: Guidance described editing themes, templates and modules with HTML, CSS, JavaScript and HubL. Actions included Create a file, Visit theme marketplace and Contact a Developer.
- OBSERVED: Footer states included No errors found, Get Started, Projects, Changelog, Reference and Settings.
- NOT ACTIVATED: File creation, marketplace, developer contact, callout Close and settings.
- NEEDS VERIFICATION: File editor, preview, compilation, publishing and revision behavior.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-design-manager-empty-state-audit-empty.
- **OBSERVED:** Evidence-backed empty, first-run, zero-result, and unconfigured states for HubSpot Design Manager Empty State. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: The empty file workspace exposed search, File, View, disabled Actions and a finder rooted at `@hubspot`.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: The empty file workspace exposed search, File, View, disabled Actions and a finder rooted at `@hubspot`.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: FACT: The empty workspace, navigation and actions were directly observed.

### Network / API

- **OBSERVED:** OBSERVED: Footer states included No errors found, Get Started, Projects, Changelog, Reference and Settings.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-design-manager-empty-state"
component_level: "empty"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
result_count: "0"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-design-manager-empty-state.
- Reusable level: empty.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-content-hub/hubspot-design-manager-empty-state.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
