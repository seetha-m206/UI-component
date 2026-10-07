---
component: "Pipedrive Application Shell"
ui_category: "Application Layout > App Shell"
source_product: "Pipedrive"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Authenticated Pipedrive component reconstructed with fictional local data and explicit provider boundaries."
---

# Pipedrive Application Shell

## Location

- **OBSERVED:** Authenticated Pipedrive Setup Guide at `/setup-guide` on 2026-10-07.

## Screenshot

- **NEEDS VERIFICATION:** The source screen was visually inspected. No provider screenshot is retained because it exposed account identity and live metrics.

## Structure

- **OBSERVED:** Compact dark primary rail, white top toolbar and light content workspace. The rail showed Nova, Setup guide, Contacts, Activities, Deals, Leads, Insights, Sales Inbox and More. The toolbar showed page title, global search, Quick add, Sales Assistant, contextual tools, Quick Help, Notifications and avatar.

## Actions

| Element | Safe action | Observed result |
| --- | --- | --- |
| More | Open and close | Product and utility destinations appeared in an overlay menu. |
| Toolbar disclosures | Open and close | Quick Add, Notifications, Quick Help, avatar coachmark and Sales Assistant appeared without leaving the screen. |

## Behavior & States

- **OBSERVED:** Setup guide remained active while overlay menus and right-side panels opened above the workspace.
- **RECONSTRUCTION:** Local navigation controls show guard messages and never change routes.

## Rules & Validation

- **NOT OBSERVED:** Navigation authorization, persistence and responsive rules were not tested.

## Technical Data

- **OBSERVED / DOM:** Accessibility output exposed links for primary routes, toolbar buttons and the current heading.
- **NOT OBSERVED:** Provider JavaScript, API contracts, tokens and internal state.

## Accessibility

- **OBSERVED:** Toolbar disclosures were exposed as buttons. This is not a complete keyboard or screen-reader audit.

## Human Context

- **RECOMMENDATION:** Reuse the stable shell pattern while separating global creation, help, notification and AI panels into independent components.

## AI Context

- **OBSERVED:** Product identity is Pipedrive. The authenticated tenant origin is kept out of the public record.
- **RECONSTRUCTION:** Fixture identity and data are fictional.

## Needs Verification

- **NEEDS VERIFICATION:** Responsive shell, complete keyboard order, destination results, permissions and saved navigation state.

## Sources

- **OBSERVED:** Authenticated Pipedrive Setup Guide inspected through Codex in-app browser on 2026-10-07.
- **RECONSTRUCTION:** `src/previews/pipedrive-shared/`.
