---
component: "HubSpot Design Manager Empty State — Atomic Component"
ui_category: "Deep Audit > Atomic Level"
source_product: "HubSpot Content Hub"
last_verified: "2026-10-07"
evidence_state: "runtime_pending"
parent_workflow: "hubspot-design-manager-empty-state"
component_level: "atomic"
---

# HubSpot Design Manager Empty State — Atomic Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Design Manager Empty State](./hubspot-design-manager-empty-state.md).
- **COMPONENT LEVEL:** atomic.

## Structure

- **NOT OBSERVED:** NOT OBSERVED: The authored parent record does not provide a more specific atomic description.

## Actions

- OBSERVED: The empty file workspace exposed search, File, View, disabled Actions and a finder rooted at `@hubspot`.
- OBSERVED: Guidance described editing themes, templates and modules with HTML, CSS, JavaScript and HubL. Actions included Create a file, Visit theme marketplace and Contact a Developer.
- OBSERVED: Footer states included No errors found, Get Started, Projects, Changelog, Reference and Settings.
- NOT ACTIVATED: File creation, marketplace, developer contact, callout Close and settings.
- NEEDS VERIFICATION: File editor, preview, compilation, publishing and revision behavior.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-design-manager-empty-state-audit-atomic.
- **RECONSTRUCTION:** Evidence-bounded reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Design Manager Empty State. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT OBSERVED: The authored parent record does not provide a more specific atomic description.

### Network / API

- **OBSERVED:** OBSERVED: Footer states included No errors found, Get Started, Projects, Changelog, Reference and Settings.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-design-manager-empty-state"
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

- Parent workflow: hubspot-design-manager-empty-state.
- Reusable level: atomic.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-content-hub/hubspot-design-manager-empty-state.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
