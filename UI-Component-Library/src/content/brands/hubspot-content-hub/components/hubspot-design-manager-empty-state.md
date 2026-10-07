---
component: "HubSpot Design Manager Empty State"
ui_category: "Content > Design Manager"
source_product: "HubSpot Content Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Observed authenticated HubSpot Content Hub screen patterns with explicit provider-safety boundaries and fictional local fixtures."
---

# HubSpot Design Manager Empty State

## Location

- **OBSERVED:** `/design-manager/343751787`.

## Screenshots

- **OBSERVED:** `2026-10-07-design-manager-empty.png`.

## Screen, Actions & States

- **OBSERVED:** The empty file workspace exposed search, File, View, disabled Actions and a finder rooted at `@hubspot`.
- **OBSERVED:** Guidance described editing themes, templates and modules with HTML, CSS, JavaScript and HubL. Actions included Create a file, Visit theme marketplace and Contact a Developer.
- **OBSERVED:** Footer states included No errors found, Get Started, Projects, Changelog, Reference and Settings.
- **NOT ACTIVATED:** File creation, marketplace, developer contact, callout Close and settings.
- **NEEDS VERIFICATION:** File editor, preview, compilation, publishing and revision behavior.

## Fictional Local Fixture

```yaml
asset: modules/northstar-hero.module
kind: module
language: HubL
status: draft
errors: 0
```

## Evidence Boundary

- **FACT:** The empty workspace, navigation and actions were directly observed.
- **RECONSTRUCTION:** The design asset fixture is fictional and local only.
- **NEEDS VERIFICATION:** No file or project was created or edited.

## Sources

- Authenticated HubSpot Design Manager empty state, observed 2026-10-07.
