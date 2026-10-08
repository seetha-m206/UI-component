---
component: "Freshdesk Omni Portals Overview"
ui_category: "Channels > Portals"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed the configured default portal overview without opening customization."
---

# Freshdesk Omni Portals Overview

## Location

- **OBSERVED:** Admin → Channels → Portals.

## Structure

- **OBSERVED:** The page explained self-service portals, showed a configured default portal, its address, Customize portal, setup guidance, and video entry.
- **RECONSTRUCTION:** The local fixture replaces the provider domain with support.example.test.

## Actions

- **NOT OBSERVED:** No portal, address, theme, video, visibility, help destination, or customization action was opened or changed.

## Technical Data

- **OBSERVED / DOM:** Portal introduction, one configured portal card, domain link, customization action, and setup video were exposed.
- **NEEDS VERIFICATION:** Portal editor, branding, domains, permissions, visibility, publication, and persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni, 2026-10-08.
