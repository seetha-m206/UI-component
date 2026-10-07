---
component: "HubSpot Brand Kit Workspace"
ui_category: "Marketing > Brand Management"
source_product: "HubSpot Marketing Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Observed authenticated HubSpot Marketing Hub screen patterns with explicit provider-safety boundaries and fictional local fixtures."
---

# HubSpot Brand Kit Workspace

## Location

- **OBSERVED:** Brand Identity at `/brand-identity/343751787/brand/0/brand-kit`.

## Screenshots

- **OBSERVED:** `2026-10-07-brand-kit-empty.png`.

## Screen, Actions & States

- **OBSERVED:** The Brand kit was described as the source of truth for visual styles used across content.
- **OBSERVED:** Empty sections offered Add logo, Add favicon and Add colors.
- **OBSERVED:** Fonts were split into Primary, Body and Fallback slots, each with Add.
- **OBSERVED:** Brand theme used an educational empty state and Set brand theme link.
- **NOT ACTIVATED:** Asset upload, color entry, font selection and theme setup.
- **NEEDS VERIFICATION:** Upload validation, asset variants, theme selection, save behavior and propagation to content tools.

## Fictional Local Fixture

```yaml
brand: Northstar Analytics
logo: northstar-mark.svg
favicon: northstar-favicon.svg
colors: ['#123B5D', '#2E8B83', '#F5B544']
fonts:
  primary: Inter
  body: Source Sans 3
  fallback: Arial
```

## Evidence Boundary

- **FACT:** The empty Brand kit structure was directly observed.
- **RECONSTRUCTION:** All sample assets and tokens are fictional.
- **NEEDS VERIFICATION:** No provider asset or style was added.

## Sources

- Authenticated HubSpot Brand Identity workspace, observed 2026-10-07.
