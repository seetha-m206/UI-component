---
component: 'Destructive Confirmation Modal (Two Independently-Built Implementations)'
ui_category: 'Feedback/State > Confirmation dialog/modal'
source_product: 'Zoho Forms'
last_verified: '2026-09-16'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Trash-delete confirmation vs. the theme-editor exit warning — confirmed two independently-built modal systems, not shared, down to handlers living in mutually-unreachable JS namespaces.'
---

# Component: Destructive Confirmation Modal (Two Independently-Built Implementations)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Product:** Zoho Forms
- **Screen(s) it appears on:** Dashboard "⋮" overflow menu → Trash (Modal 1); full-screen Theme editor → close/exit with unsaved changes (Modal 2, see [[theme-editor-split-pane-shell]]).

## Structure

- **Modal 1 — "Move to Trash?"**: `div.popNewOverlay.activeAnimate#trashPromptDiv` (backdrop) → `div.popNewContainer.alertCont.trashCont#trashPromptDivCont`. Header (`div.popNewHeader.bdrRed`) has a red trash-can icon in a light-red circle with decorative sparkle dots, plus a bold red "Move to Trash?" headline. Body: form name with a document icon, two bullet-point warnings (15-day trash retention; entries/reports becoming inaccessible), a gray info box ("Submitted Entries: N"). Footer (`div.popNewFooter`): No (neutral, left) then Yes (solid red, right). A separate circular "X" close button sits outside the card, top-right.
- **Modal 2 — "Alert: Changes are not applied..."**: `div.darkdim-div#cancelThemeConfirmDiv` (backdrop) → `div.pWrapper.deleteWrapper.zfCommonBdrRmve#cancelThemeConfirmDivCont`. Header (`div.pHeader`) has a generic warning-triangle SVG icon plus red "Alert" title — no colored icon circle, no decorative dots, no entry-count info box. Body: a single plain sentence. Footer (`div.pFooter`): No (light-gray, left) then Yes (red, right) — same left/right button convention as Modal 1, but plainer `btnCurve` styling.
- Screenshot: not captured this pass (see Sources — DOM/CSS/JS data pulled programmatically).

## Actions

| Element                                             | User Action | Function                                                                                                 | Result                                                                          | Destination screen/state       |
| --------------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------ |
| Modal 1 "No" (`button[elname="trashCloseElm"]`)     | Click       | `ZFForm.manager.hideTrashFormPopUp('#trashPromptDiv')`                                                   | Modal closes, form remains untouched in the "All Forms" list                    | Same screen                    |
| Modal 1 "Yes" (`#trashbtn`)                         | Click       | Not exercised (destructive)                                                                              | Would move the form to trash                                                    | Not tested                     |
| Modal 2 "No" (`onclick="cancelCloseCustomTheme()"`) | Click       | `cancelCloseCustomTheme()` — plain jQuery one-liner: `function(){$("#cancelThemeConfirmDiv").fadeOut()}` | Dialog dismissed, theme editor stays open with the unsaved change still visible | Same screen, editor still open |
| Modal 2 "Yes" (`#confirmCancelThemeBuilder`)        | Click       | `confirmCancelThemeBuilder(true)`                                                                        | Editor closes, returns to Themes tab; unsaved change discarded                  | Themes tab                     |

## Behavior & States

- Both modals: default closed; opened via their respective trigger; backdrop at 85% opacity dark overlay in both cases.
- No disabled/loading/error states observed for either modal — both are purely synchronous, client-side confirmation gates.

## Rules & Validation

- Both modals enforce the same left-No/right-Yes button convention, but are otherwise structurally and behaviorally unrelated (see Technical Data — confirmed two separate implementations, not a shared component).

## Technical Data

> OBSERVATION, directly captured via browser DOM/JS/network inspection (2026-09-16), Claude browser extension session, ~26 actions, including direct extraction of both modals' close-handler function source and a runtime check confirming `ZFForm` does not exist in the theme editor's execution context.

- **CSS — Modal 1 ("Move to Trash?"):**
  - Backdrop: `background: rgba(25,35,43,0.85)`, `position: fixed`, `z-index: 999`, `transition: opacity 0.5s, visibility 0.5s`.
  - Card: `transition: transform 0.5s, opacity 0.5s`, `border-radius: 8px`, no static `box-shadow` declared on the card itself (shadow, if any, comes from a container above it).
  - Property-scoped CSS transitions (opacity/visibility on backdrop, transform/opacity on card) — the `activeAnimate` class name strongly implies a class-driven enter animation.

- **CSS — Modal 2 ("Alert"):**
  - Backdrop and card both report computed `transition: all` — a generic/inherited shorthand, not a property-scoped rule.
  - Card: real `box-shadow: rgba(0,0,0,0.1) 1px 1px 10px 0px`, `border-radius: 3px` — both absent or different from Modal 1.
  - `transform: none` at rest — no transform-based entrance registered (unlike Modal 1, which at least declares a transform-capable transition even if the matrix is identity at rest).

- **JavaScript — the deciding evidence:** Modal 2's "No" handler (`cancelCloseCustomTheme`) is a plain jQuery one-liner using imperative `.fadeOut()`, not a CSS-class toggle. Modal 1's equivalent close handler, `ZFForm.manager.hideTrashFormPopUp`, lives on the `ZFForm.manager` namespace — and **`ZFForm` does not even exist as a global inside the full-screen theme editor's execution context** (confirmed by a direct reference throwing `Cannot read properties of null`). These two dialogs are wired up by two separate JS modules that don't share scope, let alone a shared open/close function.

- **Network:** Not applicable — both are purely client-side confirmation gates; neither open nor cancel action fires any request.

## Cross-Component Pattern Note

- **OBSERVATION — verdict: two independently-built modal systems, not one shared component with different skins.** The naming alone hints at this (`popNewOverlay`/`popNewContainer`/`activeAnimate` vs. `pWrapper`/`deleteWrapper`/`darkdim-div`), but the decisive proof is behavioral: different backdrop classes, different transition strategies (scoped CSS transition class vs. blanket `transition: all` closed via imperative jQuery fade), different button/icon markup conventions, and — most conclusively — handlers living in namespaces (`ZFForm.manager.*` vs. bare global functions) that aren't even both reachable from the same page execution context. This breaks the pattern seen in [[theme-icon-button-group-selector]] (a genuinely shared `setThemesStyles()` engine reused across four tabs) — Zoho Forms' modal/dialog layer, at least for these two cases, looks like it accreted from separate feature teams/eras rather than a shared design-system component.
- **RECOMMENDATION carried forward:** the Export-as-CSV modal (see [[export-filter-copy-utility-controls]]) also uses the `pWrapper` class family — a third data point suggesting `pWrapper` is the older, more widely-reused generic popup convention, while `popNewOverlay`/`popNewContainer` is a newer redesign applied to only some destructive-action dialogs (confirmed here: the Trash-delete confirmation, not the theme-editor exit warning). Worth checking which convention any future destructive-action modal in this product uses, to build out this catalogue rather than assuming either pattern.

## Competitor Comparisons

| Competitor | Same component implementation | Strengths | Weaknesses |
| ---------- | ----------------------------- | --------- | ---------- |

## Best Observed Approach

- TODO — needs at least one competitor's equivalent destructive-confirmation modal captured before a comparative judgment can be made.

## Sources

- OBSERVATION: Live exploration of Zoho Forms (forms.zoho.in), dashboard "⋮" → Trash and the full-screen Theme editor's close-with-unsaved-changes flow, via Claude browser extension, 2026-09-16 (~26 actions, including direct extraction of both close handlers' function source). No destructive action was completed: the form was never actually moved to trash (dismissed via "No"), and the theme edit was discarded via the legitimate exit-without-applying path.
