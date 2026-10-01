---
component: 'Writesonic Plan Selection Boundary'
ui_category: 'Account/Settings > Plan Selection Screen'
source_product: Writesonic
last_verified: 2026-10-01
evidence_state: open_finding
status: partial
summary: 'A subscription-plan entry screen with a billing-period selector, three tiers and guarded trial actions.'
---

# Component: Writesonic Plan Selection Boundary

Product → Authenticated root entry → Onboarding plan selection → Stop boundary

## Location

**OBSERVATION:** A single direct visit to the standard `https://app.writesonic.com/` entry redirected to `/onboarding/new` on 2026-10-01 and displayed Select a plan after a brief Loading image. The previously opened report tab remained available. This is an observed subscription step, not proof that a credit card is required.

## Structure

Writesonic wordmark and Log out → Select a plan heading → trial subtitle → Monthly/Annually billing buttons → three plan cards → Start free trial actions → feature lists → View all features → Back to report → contact-sales and tour entries.

## Actions

| Element                                 | Action taken               | Result                                                 |
| --------------------------------------- | -------------------------- | ------------------------------------------------------ |
| Standard application entry              | Read-only navigation       | Redirected to onboarding plan selection                |
| All controls on the subscription screen | None                       | Live work stopped immediately as instructed            |
| Local billing-period fixture            | Select Monthly or Annually | Local explanatory label changes only                   |
| Local trial, feature and return actions | Activate                   | Guard notice without external navigation or submission |

## Behavior & States

- **OBSERVATION:** Annual mode and a highlighted middle tier were visible in the source screenshot.
- **OBSERVATION:** A transient route Loading image appeared before the plan screen. Report-data loading outcomes remain NOT OBSERVED.
- **NOT OBSERVED — needs verification:** Billing-period changes, feature expansion, Back to report, tour, contact-sales, trial start, checkout, card requirement, trial terms and auto-renewal outcome.
- **RECONSTRUCTION:** Two local fixtures, enabled and disabled. Plan names are fictional and pricing is omitted. Local toggle behavior is a simulation, not verified provider behavior.

### Screenshot

![Fictional local reconstruction of Writesonic Plan Selection Boundary](/research/writesonic/writesonic-plan-selection-boundary.png)

Private source capture: `Internal/scratch-2026-10/writesonic/screenshots/07-workspace-plan-boundary.png`. The image shown above is fictional local UI, not the live provider.

## Rules & Validation

**OBSERVATION:** No plan was selected and no payment flow was opened. The user required stopping at subscription or purchase steps. The boundary stays closed.

**RECOMMENDATION:** Treat a no-card signup statement separately from access to the main product. Document the actual access step without asserting that a card is required until such a request is observed.

## Technical Data

- **OBSERVATION:** Same `/onboarding/new` pathname can present the report or plan-selection step. URL identity alone does not prove screen state.
- **OBSERVATION:** Accessibility output exposed Select a plan, Monthly, Annually, three Start free trial buttons, three View all features buttons and Back to report.
- **NOT OBSERVED — needs verification:** Checkout endpoint, request/response contracts, storage, pricing validation, payment-provider integration and renewal behavior. No hidden application state, secrets or account identifiers were read.
- **RECONSTRUCTION:** React state only. All trial, account, feature and return buttons show a local guard notice. No fetch, storage or network mutation.
- **Source screenshot observation:** White background, centered three-column card row, subtle borders, orange emphasis on the middle card and primary button.

## Accessibility

**RECONSTRUCTION:** Billing buttons expose aria-pressed in a labelled group. Disabled actions use native disabled controls. Guard notices use role=status. These local semantics are not independently verified provider behavior.

## Human View

This is the point where broader workspace research stopped. It shows how Writesonic presents plan choices after its introductory report. No commercial action was taken.

## AI Context

Source state: live subscription entry observed, controls unexercised. Local state: fictional guarded reconstruction. Main workspace access, card requirements and recurring billing remain needs verification.

## Cross-Component Pattern Note

Extends [[writesonic-guarded-report-action]] and [[writesonic-onboarding-report-shell]]. Preserve this boundary alongside the earlier report records.

## Competitor Comparisons

**RECOMMENDATION:** Separate signup availability, introductory report access and main-product entitlement when comparing competitor onboarding.

## Best Observed Approach

**OBSERVATION:** The provider groups comparable tiers side by side. **RECOMMENDATION:** Keep billing terms visible, but do not infer them from trial buttons.

## Sources

- **OBSERVATION:** [Writesonic standard application entry](https://app.writesonic.com/) redirected to [onboarding](https://app.writesonic.com/onboarding/new), 2026-10-01.
- **OBSERVATION:** Private screenshot `07-workspace-plan-boundary.png`.
- **RECONSTRUCTION:** Local `writesonic-plan-selection-boundary/` preview and fictional screenshot.
