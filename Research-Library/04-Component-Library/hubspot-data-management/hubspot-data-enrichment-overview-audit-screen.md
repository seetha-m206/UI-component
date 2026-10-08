---
component: "HubSpot Data Enrichment Overview — Screen Component"
ui_category: "Deep Audit > Screen Level"
source_product: "HubSpot Data Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-data-enrichment-overview"
component_level: "screen"
---

# HubSpot Data Enrichment Overview — Screen Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Data Enrichment Overview](./hubspot-data-enrichment-overview.md).
- **COMPONENT LEVEL:** screen.

## Structure

- **OBSERVED:** OBSERVED: Data Quality Beta navigation opened an enrichment overview with settings, gap scanning, zero-value outcome metrics and coverage guidance.
- **OBSERVED:** OBSERVED: Scan portal and segment enrichment controls were visible. Enrich segment stayed disabled without a segment selection. A Data Agent cross-link and enrichment-terms notice appeared.
- **OBSERVED:** NOT ACTIVATED: Settings, gap scan, portal scan, segment selection, enrichment and Data Agent link.
- **OBSERVED:** NEEDS VERIFICATION: Scan results, coverage, preview, field provenance, writes, credits and undo behavior.

## Actions

- OBSERVED: Data Quality Beta navigation opened an enrichment overview with settings, gap scanning, zero-value outcome metrics and coverage guidance.
- OBSERVED: Scan portal and segment enrichment controls were visible. Enrich segment stayed disabled without a segment selection. A Data Agent cross-link and enrichment-terms notice appeared.
- NOT ACTIVATED: Settings, gap scan, portal scan, segment selection, enrichment and Data Agent link.
- NEEDS VERIFICATION: Scan results, coverage, preview, field provenance, writes, credits and undo behavior.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-data-enrichment-overview-audit-screen.
- **OBSERVED:** Evidence-backed screen composition and workflow boundary for HubSpot Data Enrichment Overview. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Data Quality Beta navigation opened an enrichment overview with settings, gap scanning, zero-value outcome metrics and coverage guidance.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Scan portal and segment enrichment controls were visible. Enrich segment stayed disabled without a segment selection. A Data Agent cross-link and enrichment-terms notice appeared.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT ACTIVATED: Settings, gap scan, portal scan, segment selection, enrichment and Data Agent link.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NEEDS VERIFICATION: Scan results, coverage, preview, field provenance, writes, credits and undo behavior.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-data-enrichment-overview"
component_level: "screen"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
layout: "Data Management"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-data-enrichment-overview.
- Reusable level: screen.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-data-management/hubspot-data-enrichment-overview.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
