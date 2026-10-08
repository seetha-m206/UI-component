---
component: "HubSpot Ticket Preview Customization — Loading Component"
ui_category: "Deep Audit > Loading Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "runtime_pending"
status: "partial"
summary: "Evidence-bounded loading, progress, pending, and stalled states for HubSpot Ticket Preview Customization. The source record does not directly observe this state, so the fixture is a labelled local reconstruction."
parent_workflow: "hubspot-ticket-preview-customization"
component_level: "loading"
---

# HubSpot Ticket Preview Customization — Loading Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Ticket Preview Customization](./hubspot-ticket-preview-customization.md).
- **COMPONENT LEVEL:** loading.

## Structure

- **NOT OBSERVED:** NOT OBSERVED: The authored parent record does not provide a more specific loading description.

## Actions

- Element | Safe action | Observed result or boundary
- Preview Customization tab | Page visit | Loaded the default preview view inventory.
- Update preview cards | Page visit | Opened the card-options panel.
- Close | Keyboard Return | Returned to Preview Customization.
- Default view Actions | Open disclosure | Displayed disabled Clone view and Reset default view with an upgrade prompt.
- Editors and Create team view | Not activated | Selection, editing and persistence are NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-ticket-preview-customization-audit-loading.
- **RECONSTRUCTION:** Evidence-bounded loading, progress, pending, and stalled states for HubSpot Ticket Preview Customization. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: Update preview cards offered a disabled Edit Ticket associations card and an Edit Ticket property list destination. Both described choosing properties shown in previews.
- **OBSERVED:** OBSERVED / DOM: The inventory used selectable rows and sortable headings. The card panel distinguished disabled and enabled editor links.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-ticket-preview-customization"
component_level: "loading"
evidence_state: "reconstructed"
data_scope: "fictional_local_only"
status: "not_observed"
progress: "synthetic pending state"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-ticket-preview-customization.
- Reusable level: loading.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-ticket-preview-customization.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
