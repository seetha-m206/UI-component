---
component: Apollo Profile Menu
ui_category: 'Navigation > Account and Workspace Menu'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Account menu linking profile, theme, language, workspace, credit usage, upgrade, extension, workspace overview and logout surfaces.
---

# Component: Apollo Profile Menu

## Location

- **Product:** Apollo authenticated shell.
- **Observed trigger:** Header profile control.
- **Evidence boundary:** Live initials, email and account identity are omitted. The preview uses Atlas Researcher at `atlas.example`.

## Structure

Identity summary → profile → theme → language beta → workspace identity → credit usage → upgrade plan → browser extension → workspace overview → logout.

## Behavior & States

- The menu opened beneath the profile trigger and dismissed with Escape.
- Workspace identity was displayed inline with the workspace action.
- Theme and Language were menu entries. No preference was changed.
- Credit, plan, extension, workspace and logout destinations were not opened.
- Every reconstructed action is disabled.

## Rules & Validation

- Never retain live email, initials, workspace id or account metadata in fixtures or receipts.
- Theme and language may persist immediately. Do not test them without a restoration plan and explicit scope.
- Treat Upgrade Plan, extension installation and logout as consequential boundaries.
- Distinguish workspace overview from personal profile and admin settings.

## Technical Data

- **OBSERVED:** Menu items were Your profile, Theme, Language Beta, Workspace, View credit usage, Upgrade Plan, Get the Chrome Extension, Workspace overview and Log out.
- **NOT OBSERVED:** Profile screen, theme choices, language choices, workspace switching, credit details, plan flow, extension install, overview destination and logout result.
- **NEEDS VERIFICATION:** Permission-dependent entries, multi-workspace state, keyboard focus, persistence and destructive confirmations.

## Accessibility

The menu exposed menuitem semantics. A reusable menu should group identity, preferences, workspace and session termination, and visually separate Log out from navigation.

## Sources

- **OBSERVATION:** Authenticated profile menu labels, 2026-10-09. Identity was redacted.
- **RECONSTRUCTION:** Fictional profile menu with all account actions disabled.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-profile-menu.png).
- **OBSERVED:** Provider screenshots were displayed transiently only and are not retained.

## Cross-Component Pattern Note

- **RECONSTRUCTION:** Reuse explicit empty, disabled and plan-gated states while keeping consequential provider actions inert.
- **RECONSTRUCTION:** Related records: [[apollo-product-add-ons]] and [[apollo-prospecting-configuration]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-profile-menu.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.
