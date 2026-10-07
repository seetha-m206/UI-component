---
component: "Salesforce Sales New Product Wizard"
ui_category: "Forms > Multi-step Wizard"
source_product: "Salesforce Sales (trial workspace)"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Component: Salesforce Sales New Product Wizard

## Location

- **OBSERVED:** Opened from Sales → Products → New and cancelled at zero percent.

## Structure

- **OBSERVED:** Step one contained Product Name, Product Family, Product Code, Product SKU, Active and Product Description.
- **OBSERVED:** Progress showed New Product as current and New Price Book Entry as not started. Footer actions were Cancel and Next.
- **OBSERVED:** Product Family exposed `--None--` and `None`.

## Behavior & States

- **OBSERVED:** No field was entered and Next was not selected.
- **RECONSTRUCTION:** The local fixture stops before the price-book-entry step and uses a fictional product.
- **NOT OBSERVED:** Step two fields, validation, successful product creation and price-book persistence.

## Needs Verification

- **NEEDS VERIFICATION:** New Price Book Entry and successful completion.

## Sources

- **OBSERVED:** Private receipt screen ID `sales-new-product-wizard`.
