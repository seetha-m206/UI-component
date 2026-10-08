---
component: "Freshdesk Omni Multiple Products"
ui_category: "Support Operations > Multiple Products"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed a configured product inventory without opening product or portal actions."
---

# Freshdesk Omni Multiple Products

## Location

- **OBSERVED:** Admin → Support Operations → Multiple Products.

## Structure

- **OBSERVED:** The iframe explained separate branded portals and support emails, showed New product, and displayed one default product row with portal, support email, Customize portal, and Edit.
- **RECONSTRUCTION:** The local fixture replaces every provider product, domain, address and identifier with fictional values.

## Actions

- **NOT OBSERVED:** No product, portal, email, group queue, theme, View Portal, Customize portal, Edit, or New product action was opened.

## Technical Data

- **OBSERVED / DOM:** Introductory guidance, creation action, and a configured product table were exposed.
- **NEEDS VERIFICATION:** Product creation, routing, portal theming, email mapping, group queues, permissions, and persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni, 2026-10-08.
