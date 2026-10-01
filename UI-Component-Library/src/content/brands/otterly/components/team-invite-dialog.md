---
component: OtterlyAI Team Invite Dialog
ui_category: "Admin > Team Access"
source_product: OtterlyAI
last_verified: 2026-10-01
evidence_state: mixed_observed_reconstructed
status: partial
summary: Team management displayed a member table and an Invite Team Member action that opened a dialog.
---

## Human View

**OBSERVATION:** Team management displayed a member table and an Invite Team Member action that opened a dialog. The dialog contained Email, Role, Workspace, Cancel, Close, and disabled Send invite. Live member identity and email are excluded.

**Safe interaction:** The local preview has fictional options and keeps Send invite disabled.

**Screenshot:** [Fictional local preview](./screenshots/team-invite-dialog-preview.png). No customer, member, credential, or account metric values are reproduced.

## AI Context

- **Component boundary:** Independent reusable entry, empty, or overlay pattern from the authenticated app.
- **Action chain:** The dialog contained Email, Role, Workspace, Cancel, Close, and disabled Send invite. Live member identity and email are excluded.
- **Fixture:** The local preview has fictional options and keeps Send invite disabled.
- **Seek lesson (RECOMMENDATION):** Make the next action and unavailable states clear without implying a completed provider operation.

## Structure and States

- **Observed:** Initial or opened state described above.
- **Needs verification:** Role options, access semantics, sending, invitation status, and revocation were not exercised.

## Technical Data

- **OBSERVATION:** Browser-visible controls and their accessible labels were inspected in the Codex in-app browser.
- **NOT OBSERVED:** Provider implementation, private network contracts, saved data behavior, or credentials.
- **RECONSTRUCTION:** Isolated React preview with fictional data and no provider request.

## Sources

- **OBSERVATION:** Authenticated OtterlyAI application, 2026-10-01.
- **SCREENSHOT:** Fictional local preview linked above.
- **EVIDENCE BOUNDARY:** Opening a control is not proof that its submission or integration works.
