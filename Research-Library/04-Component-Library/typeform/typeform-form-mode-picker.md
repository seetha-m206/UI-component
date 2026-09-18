---
component: "Form Mode Picker (\"Universal Mode\")"
ui_category: "Data Input > Dropdown/Select"
source_product: "Typeform"
last_verified: "2026-09-18"
evidence_state: "source_reviewed"
---

# Component: Form Mode Picker ("Universal Mode")

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **Corrects an open hypothesis in `typeform.md`:** prior research (see [[yes-no-field]]'s open caveat) hypothesized that "Universal mode" is a binary toggle switching between Typeform's signature single-question-per-screen conversational flow and an alternate all-questions-on-one-scrollable-page layout, and that this might explain why the Yes/No field's keyboard shortcuts didn't work when tested. **This record directly tests and refutes that hypothesis** — see Verdict below.

## Location
- **Product:** Typeform
- **Screen(s) it appears on:** Form builder — a dropdown top-left of the Content-tab toolbar, and (kept in sync) Form settings → General → "Form mode". Tested on a free-plan "Customer Feedback Survey" form.

## Structure
- Not a binary toggle. A **4-option preset picker**: Universal · Lead qualification · Knowledge quiz (paywalled) · Match quiz (paywalled).
- Surfaced in two places that stay in sync with each other: the toolbar dropdown and Form settings → General, the latter carrying the note "Switching modes might result in changes to form settings."

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| Form mode dropdown | Select "Lead qualification" | Switches mode | Replaces the normal page-by-page editing canvas with an AI-generated "Review your form" screen that drafted lead-scoring rules from the existing questions | Same screen (canvas swap) |
| Form mode dropdown | Select "Universal" (from another mode) | Switches back | Cleanly restores the ordinary editing canvas with no data loss — confirmed: all 4 questions and the Ending added in the Workflow task were still intact | Same screen (canvas swap) |
| Knowledge quiz / Match quiz options | — | — | **Not tested** — both paywalled on this account's plan; their canvas behavior is unconfirmed | — |

## Behavior & States
- **Respondent-facing rendering is unaffected by this control.** Opening the live Preview under Universal mode renders the respondent form exactly as observed throughout every other capture in this library's Typeform research: one question per screen, a thin progress bar at the top, up/down chevron nav arrows bottom-right (with a "Powered by Typeform" badge alongside). **No scrollable, all-questions-on-one-page alternative is exposed anywhere in this account/plan.**
- Switching to Lead qualification changes the *builder's own editing canvas* (replacing it with an AI-drafted scoring-rules review screen), not the respondent-facing question layout.

## Rules & Validation
- **Settings availability was checked exhaustively for Universal mode specifically** (not fully characterized across all 4 modes — Knowledge/Match quiz require paid-plan access this account doesn't have): every tab of Form settings (General, Access & Scheduling, Language) and the Design panel was checked for a layout-related setting.
  - General → Display: Typeform branding, Navigation arrows, Progress bar, Question number, Asterisks for required, Letters on answers — none is a layout switch.
  - General → Preferences: Autosave progress, Free form navigation, Cookie consent, plus 4 paywalled toggles. "Free form navigation"'s tooltip is explicit that it lets respondents jump between already-one-at-a-time questions ("except for questions with branching") — **not** a switch to scrollable-page rendering.
  - Access & Scheduling (open/close, response limit, custom closed message) and Language (main language, Translations, system messages/shortcuts text) are unrelated to layout.
  - Design panel is themes/colors only.

## Technical Data
> OBSERVATION, directly captured via browser exploration, Claude browser extension session, 2026-09-18. No DOM/network capture performed for this control specifically — this record is UI/behavior-level.

- **State change:** switching Universal → Lead qualification → Universal preserved all existing question and Workflow-tab data (verified: 4 questions + 1 outcome ending, all intact after switching back).

## Verdict / Implication for the Yes/No keyboard-shortcut question
Single-question-per-screen is Typeform's **baseline respondent rendering**, not something "Universal mode" switches on or off. The still-open question of whether [[yes-no-field]]'s Y/N keyboard shortcuts are conversational-flow-only **cannot be resolved by testing this picker** — there is no non-conversational mode reachable in this product/plan to contrast against. If `typeform.md`'s original hypothesis intended a real classic/scrollable rendering mode, it is not reachable from anywhere in this builder as currently observed on a free-plan account — flagged as a **discrepancy with the source hypothesis**, not silently reconciled away.

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| *(TODO — not yet researched)* | | | |

## Best Observed Approach
- TODO — needs a Zoho Forms equivalent (Zoho Forms has no comparable "form mode" preset picker documented in this library; its builder is always the all-fields-visible scrollable canvas per [[sidebar-settings-subnav]] and related records).

## Cross-Component Pattern Note
1. **A plausible prior hypothesis, directly tested and refuted** — worth remembering as a caution against assuming a named control ("Universal mode") does what its name suggests without testing; the actual behavior (a 4-option tooling-preset picker for the *builder*, not a respondent-layout switch) is a meaningfully different mental model.
2. **Paywalled options block full characterization** — Knowledge quiz and Match quiz remain genuinely untested; any future free-tier-account limitation note in this library should reference this record as a precedent.

## Sources
- OBSERVATION: Live exploration of Typeform, Form mode picker (toolbar dropdown + Form settings → General), free-plan account, form "Customer Feedback Survey", via Claude browser extension, 2026-09-18.
