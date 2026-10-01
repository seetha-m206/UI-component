---
component: OtterlyAI API Keys Empty State
ui_category: "Admin > API Access"
source_product: OtterlyAI
last_verified: 2026-10-01
evidence_state: mixed_observed_reconstructed
status: partial
summary: API keys showed a no-keys empty state with Create key actions.
---

## Human View

**OBSERVATION:** API keys showed a no-keys empty state with Create key actions. No key existed in the observed workspace. Key generation, reveal, copying, and revocation were not opened.

**Safe interaction:** The local Create key button produces only a fictional notice. No credential is generated.

**Screenshot:** [Fictional local preview](./screenshots/api-keys-empty-preview.png). No customer, member, credential, or account metric values are reproduced.

## AI Context

- **Component boundary:** Independent reusable entry, empty, or overlay pattern from the authenticated app.
- **Action chain:** No key existed in the observed workspace. Key generation, reveal, copying, and revocation were not opened.
- **Fixture:** The local Create key button produces only a fictional notice. No credential is generated.
- **Seek lesson (RECOMMENDATION):** Make the next action and unavailable states clear without implying a completed provider operation.

## Structure and States

- **Observed:** Initial or opened state described above.
- **Needs verification:** All credential lifecycle behavior and permissions remain unverified.

## Technical Data

- **OBSERVATION:** Browser-visible controls and their accessible labels were inspected in the Codex in-app browser.
- **NOT OBSERVED:** Provider implementation, private network contracts, saved data behavior, or credentials.
- **RECONSTRUCTION:** Isolated React preview with fictional data and no provider request.

## Sources

- **OBSERVATION:** Authenticated OtterlyAI application, 2026-10-01.
- **SCREENSHOT:** Fictional local preview linked above.
- **EVIDENCE BOUNDARY:** Opening a control is not proof that its submission or integration works.
