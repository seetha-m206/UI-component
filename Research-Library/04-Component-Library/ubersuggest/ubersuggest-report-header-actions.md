---
component: "Ubersuggest Rank Tracking Header Actions"
ui_category: "Actions > Report Header"
source_product: Ubersuggest
last_verified: 2026-10-01
evidence_state: source_reviewed
---

# Component: Ubersuggest Rank Tracking Header Actions

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data

## Location

- **Product:** Ubersuggest.
- **Source:** [Rank Tracking](https://app.neilpatel.com/en/analyze/rank-tracking).
- **Scope:** action-level capture in the authenticated Rank Tracking empty report on M5, 2026-10-01.
- **Documented boundary:** title, freshness label, Export All, Settings, Send Feedback and Add keywords controls.
- **Completion meaning:** This record covers the visible action cluster and the observed no-visible-transition feedback attempt. It does not certify export, settings, feedback service, keyword creation or any submitted outcome.

## Structure

The report header places the Rank Tracking title and Updating Today label beside four actions. Export All is an outline action. Settings is an icon link to /en/project/website-input. Send Feedback is an outline button. Add keywords is the orange primary action.

## Actions

| Element       | User action   | Result and new state                                                                       | Evidence                                |
| ------------- | ------------- | ------------------------------------------------------------------------------------------ | --------------------------------------- |
| Export All    | Inspect only  | Enabled control remained untouched                                                         | OBSERVED trigger only                   |
| Settings      | Inspect href  | Points to the already documented project setup boundary                                    | OBSERVED destination                    |
| Send Feedback | Activate once | URL stayed on Rank Tracking and no visible dialog, menu or navigation appeared             | OBSERVED no-visible-transition boundary |
| Add keywords  | Inspect only  | Opens the separately documented tracking keyword dialog when exercised in the earlier pass | OBSERVED in linked record               |

## Behavior & States

**OBSERVED:** The default action cluster and one Send Feedback activation were inspected. The URL remained unchanged. DOM checks found zero visible dialogs and menus after the activation. The button stayed visible.

**RECONSTRUCTION:** The local preview has default and feedback-attempted fixtures. Export, Settings and Add keywords return local safety messages. Send Feedback reveals the observed boundary note in local React state. No provider request is sent.

**Scope boundary:** A no-visible-transition observation is not proof that the provider has no feedback system. A third-party widget may have failed, loaded off-screen or required an unavailable condition.

## Known Limitations

- Not observed beyond this scope: no export, settings navigation, feedback form, feedback submission, keyword creation or provider success/error response was exercised.
- Not independently tested: provider requests, response schemas, persistence and successful submissions. Network behavior is outside this observation-only pass.
- Local previews use fictional values and simplified fonts and widgets. Browser verification certifies the reconstruction only.

## Rules & Validation

- User instruction for this pass: observe without submitting. Do not export, create keywords, change settings, spend credits, commit, push or deploy.
- Record a no-transition attempt exactly as observed. Do not convert it into a product absence or failure claim.
- Reuse [[ubersuggest-project-setup]] and [[ubersuggest-tracking-keyword-dialog]] for the observed destinations rather than duplicating those screens.
- Keep the local safety status separate from provider behavior.

## Technical Data

**OBSERVED:** On 2026-10-01 the page showed Sep 01, 2026 – Oct 01, 2026, zero visible dialogs and zero visible menus before and after Send Feedback. The Settings anchor resolved to /en/project/website-input.

**RECONSTRUCTION:** Shared React implementation in ubersuggest-remaining/Remaining.tsx, scoped CSS and a thin wrapper. The fixture changes local state only. No provider JavaScript, private API, payload, identity, credit count or network client is included.

## Accessibility

Export All exposes an accessible name. Send Feedback and Add keywords are named buttons. The observed Settings link used an icon and had no visible text in the DOM capture, so the reconstruction gives it explicit text. The feedback-attempted note uses role=status.

## Human View

This is the action row at the top of Rank Tracking. The safe preview shows the controls and the precise result of the observation: clicking Send Feedback once produced no visible panel or navigation. The preview cannot export, change settings, submit feedback or add tracked keywords.

## AI Context

Treat this as evidence of a visible action cluster and one observed no-visible-transition attempt. Do not infer that feedback is disabled or absent. source_reviewed applies to the provider observation. Local runtime verification applies only to the fictional reconstruction.

## Cross-Component Pattern Note

Use [[ubersuggest-rank-tracking]] for the complete empty report, [[ubersuggest-tracking-keyword-dialog]] for Add keywords and [[ubersuggest-project-setup]] for Settings.

## Competitor Comparisons

This control cluster can be compared with report-header actions in the Semrush and Ahrefs catalogues. No product-quality conclusion follows from a single no-transition attempt.

## Best Observed Approach

Keep high-frequency report actions close to freshness context. Preserve strong visual priority for the additive action while keeping export, settings and feedback secondary.

## Sources

- **OBSERVED:** Authenticated [Rank Tracking](https://app.neilpatel.com/en/analyze/rank-tracking), 2026-10-01, Codex in-app browser on M5.
- **DEFAULT RECEIPT:** Internal/scratch-2026-10/ubersuggest-final/rank-header-default.json.
- **ACTION RECEIPT:** Internal/scratch-2026-10/ubersuggest-final/feedback-trigger-no-transition.json.
- **SCREENSHOT:** Internal/scratch-2026-10/ubersuggest-final/rank-header-default.png, private local evidence containing account chrome.
- **RECONSTRUCTION:** UI-Component-Library/src/previews/ubersuggest-report-header-actions/ and ubersuggest-remaining/.
- **ACCEPTANCE:** Internal/scratch-2026-09/ubersuggest/acceptance-ledger.json.
