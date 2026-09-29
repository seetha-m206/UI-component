---
component: Semrush Utility Header Actions
ui_category: 'Application Layout > Utility Header'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Header-level feedback, notification, help, and account actions with guarded destinations.
---

# Component: Semrush Utility Header Actions

Product → Header identity → Feedback → Notifications → Help → Account

## Location

- **Observed in:** Semrush Home and Site Audit global utility areas.
- **Extraction level:** Independent header-action composition.
- **Evidence boundary:** Affordances were visible. Notification, help, feedback, invitation, and account outcomes were not tested.

## Structure

Product identity → feedback action → notification badge → help trigger → account trigger → optional local menu.

## Actions

Open local notification, help, or account fixtures and inspect the guarded feedback action.

## Behavior & States

Resting header, synthetic unread badge, notification surface, help surface, account surface, and disabled.

### State fixtures

Badge counts and menu contents are synthetic and visibly marked needs verification.

## Rules & Validation

Never expose real account data in fixtures. Give every icon an accessible name. Treat feedback and invitations as external communication actions.

## Technical Data

- **OBSERVED:** Feedback, notifications, help, invitation, and account affordances were visible in reviewed screens.
- **NOT OBSERVED:** Menus, badge semantics, notification contents, read state, account navigation, and message submission.
- **RECONSTRUCTION:** Menus are local placeholders with no account data.

## Accessibility

Use buttons with names, `aria-haspopup`, and expanded state. Announce guarded results with a status region.

## Cross-Component Pattern Note

Extracted from [[semrush-home-folders-workspace]] and [[semrush-site-audit-projects]].

## Competitor Comparisons

| Pattern | Strength | Reuse opportunity |
|---|---|---|
| Semrush utility header | Persistent access to support and account actions | Standardize across every product shell |
| Centilio Seek | Can add workspace and provider state | Keep identity and notifications privacy-safe |

## Best Observed Approach

Keep universal utilities stable across product areas while guarding account-dependent behavior.

## Sources

- **OBSERVATION:** Authenticated Semrush header reviews, 2026-09-29.
- **RECONSTRUCTION:** Synthetic badge and local menu fixtures.
