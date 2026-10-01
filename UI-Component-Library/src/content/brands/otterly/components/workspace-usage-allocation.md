---
component: OtterlyAI Workspace Usage and Allocation
ui_category: "Admin > Resource Allocation"
source_product: OtterlyAI
last_verified: 2026-10-01
evidence_state: mixed_observed_reconstructed
status: partial
summary: The Workspaces screen displayed a Usage Overview for prompts and GEO URL audits, plus a workspace allocation table.
---

## Human View

**OBSERVATION:** The Workspaces screen displayed a Usage Overview for prompts and GEO URL audits, plus a workspace allocation table. Used, assigned, unassigned, and total resource positions were visible. Manage workspaces and New Workspace actions were present.

**Safe interaction:** The preview uses fictional quotas and makes Manage workspaces a local-only entry notice.

**Screenshot:** [Fictional local preview](./screenshots/workspace-usage-allocation-preview.png). No customer, member, credential, or account metric values are reproduced.

## AI Context

- **Component boundary:** Independent reusable entry, empty, or overlay pattern from the authenticated app.
- **Action chain:** Used, assigned, unassigned, and total resource positions were visible. Manage workspaces and New Workspace actions were present.
- **Fixture:** The preview uses fictional quotas and makes Manage workspaces a local-only entry notice.
- **Seek lesson (RECOMMENDATION):** Make the next action and unavailable states clear without implying a completed provider operation.

## Structure and States

- **Observed:** Initial or opened state described above.
- **Needs verification:** Allocation editing, quota validation, and persistence were not exercised.

## Technical Data

- **OBSERVATION:** Browser-visible controls and their accessible labels were inspected in the Codex in-app browser.
- **NOT OBSERVED:** Provider implementation, private network contracts, saved data behavior, or credentials.
- **RECONSTRUCTION:** Isolated React preview with fictional data and no provider request.

## Sources

- **OBSERVATION:** Authenticated OtterlyAI application, 2026-10-01.
- **SCREENSHOT:** Fictional local preview linked above.
- **EVIDENCE BOUNDARY:** Opening a control is not proof that its submission or integration works.
