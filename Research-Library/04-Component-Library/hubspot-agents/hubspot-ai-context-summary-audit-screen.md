---
component: "HubSpot AI Context Summary — Screen Component"
ui_category: "Deep Audit > Screen Level"
source_product: "HubSpot Breeze"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-ai-context-summary"
component_level: "screen"
---

# HubSpot AI Context Summary — Screen Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot AI Context Summary](./hubspot-ai-context-summary.md).
- **COMPONENT LEVEL:** screen.

## Structure

- **OBSERVED:** OBSERVED: AI Context navigation covered Summary, Business, Customers, Team & process, Personal, Custom, Recommendations and Knowledge vaults.
- **OBSERVED:** OBSERVED: Coverage was 0%. Missing states identified business knowledge, ICPs or personas, email personalities and custom files. Actions included Manage, Import now, Upload files, Write free-form text and Edit business details.
- **OBSERVED:** NOT ACTIVATED: Edits, manage actions, import, upload, free-form entry and knowledge-vault navigation.
- **OBSERVED:** NEEDS VERIFICATION: Context editing, imports, recommendations, access controls and AI consumption.

## Actions

- OBSERVED: AI Context navigation covered Summary, Business, Customers, Team & process, Personal, Custom, Recommendations and Knowledge vaults.
- OBSERVED: Coverage was 0%. Missing states identified business knowledge, ICPs or personas, email personalities and custom files. Actions included Manage, Import now, Upload files, Write free-form text and Edit business details.
- NOT ACTIVATED: Edits, manage actions, import, upload, free-form entry and knowledge-vault navigation.
- NEEDS VERIFICATION: Context editing, imports, recommendations, access controls and AI consumption.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-ai-context-summary-audit-screen.
- **OBSERVED:** Evidence-backed screen composition and workflow boundary for HubSpot AI Context Summary. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: AI Context navigation covered Summary, Business, Customers, Team & process, Personal, Custom, Recommendations and Knowledge vaults.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Coverage was 0%. Missing states identified business knowledge, ICPs or personas, email personalities and custom files. Actions included Manage, Import now, Upload files, Write free-form text and Edit business details.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT ACTIVATED: Edits, manage actions, import, upload, free-form entry and knowledge-vault navigation.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NEEDS VERIFICATION: Context editing, imports, recommendations, access controls and AI consumption.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-ai-context-summary"
component_level: "screen"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
layout: "Agents"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-ai-context-summary.
- Reusable level: screen.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-agents/hubspot-ai-context-summary.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
