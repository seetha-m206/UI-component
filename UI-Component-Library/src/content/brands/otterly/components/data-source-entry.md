---
component: OtterlyAI Data Source Entry
ui_category: "Integrations > Logs Provider Entry"
source_product: OtterlyAI
last_verified: 2026-10-01
evidence_state: mixed_observed_reconstructed
status: partial
summary: Data sources displayed an Add data source panel describing website traffic analysis and a Logs provider selector.
---

## Human View

**OBSERVATION:** Data sources displayed an Add data source panel describing website traffic analysis and a Logs provider selector. No provider was selected and no connection was initiated. The observed selector did not expose provider options during this pass.

**Safe interaction:** The local selector stays disabled to avoid implying an observed provider contract.

**Screenshot:** [Fictional local preview](./screenshots/data-source-entry-preview.png). No customer, member, credential, or account metric values are reproduced.

## AI Context

- **Component boundary:** Independent reusable entry, empty, or overlay pattern from the authenticated app.
- **Action chain:** No provider was selected and no connection was initiated. The observed selector did not expose provider options during this pass.
- **Fixture:** The local selector stays disabled to avoid implying an observed provider contract.
- **Seek lesson (RECOMMENDATION):** Make the next action and unavailable states clear without implying a completed provider operation.

## Structure and States

- **Observed:** Initial or opened state described above.
- **Needs verification:** Provider choices, permissions, credentials, log ingest, and connected analytics remain unverified.

## Technical Data

- **OBSERVATION:** Browser-visible controls and their accessible labels were inspected in the Codex in-app browser.
- **NOT OBSERVED:** Provider implementation, private network contracts, saved data behavior, or credentials.
- **RECONSTRUCTION:** Isolated React preview with fictional data and no provider request.

## Sources

- **OBSERVATION:** Authenticated OtterlyAI application, 2026-10-01.
- **SCREENSHOT:** Fictional local preview linked above.
- **EVIDENCE BOUNDARY:** Opening a control is not proof that its submission or integration works.
