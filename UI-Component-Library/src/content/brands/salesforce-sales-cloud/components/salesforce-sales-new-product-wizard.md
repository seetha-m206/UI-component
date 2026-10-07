---
component: 'Salesforce Sales New Product Wizard'
ui_category: 'Forms > Multi-step Wizard'
source_product: 'Salesforce Sales (trial workspace)'
last_verified: '2026-10-07'
evidence_state: 'source_reviewed'
status: 'partial'
summary: 'Authenticated-source Product wizard entry step with a guarded fictional reconstruction.'
---

# Component: Salesforce Sales New Product Wizard

- **OBSERVED:** Product Name, Product Family, Product Code, Product SKU, Active and Product Description were visible.
- **OBSERVED:** Progress showed New Product current, New Price Book Entry not started and zero percent. No field was entered and Next was not selected.
- **RECONSTRUCTION:** The preview stops before the price-book-entry step and uses a fictional product.
- **NEEDS VERIFICATION:** Step two, successful completion and persistence.
- **SOURCE:** Private receipt screen ID `sales-new-product-wizard`.
