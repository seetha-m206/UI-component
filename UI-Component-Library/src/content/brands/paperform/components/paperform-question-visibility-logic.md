---
component: "Question Visibility Logic (conditional show/hide)"
ui_category: "Forms > Form"
source_product: "Paperform"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
status: 'complete'
summary: "Question Visibility Logic editor -- confirmed end-to-end in both Form Experience modes (DOM-unmount in Classic, screen-skip + progress recalculation in Guided). No Zoho/Typeform equivalent exists. Confirmed real risk: editing or deleting a question a rule depends on silently orphans the rule, with no warning."
---

# Component: Question Visibility Logic

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **No comparison baseline exists.** Neither [[zoho-forms]] nor [[typeform]] documents a conditional-logic/branching component anywhere in this library as of 2026-09-23 — this is a genuinely new pattern class for this library, noted deliberately below rather than forced into a comparison.

## Location
- **Product:** Paperform
- **Screen(s) it appears on:** every question card's config drawer, "Question visibility logic" toggle → a modal rule builder ("Configure Logic for <question>"). Tested on the published scratch form `xborqzxj`, in both Form Experience modes — a rule on Q3 "Your name" (key `3ftmg`): show only if Q1 "Do you like forms?" (key `8rbgg`) is Yes.

## Structure
- **Drawer:** a "Question visibility logic: Off/On" toggle on every question. Turning it on immediately opens the rule-builder modal. Once configured, the drawer collapses to "Configure Logic → N condition(s)" plus a new toggle, **"Question keeps answer when not visible"** (on by default).
- **Modal rule builder:** each condition row reads `[Choose question] [operator] [answer]` with a ✕ to remove it.
  - The question picker lists every *other* question on the form (the question being configured is excluded), including ones placed **after** it — rules can reference forward, not just backward.
  - Each entry shows its 5-character field key.
  - A **"Multiple Condition Group"** option nests condition groups — the same grouping primitive as the Reports → Segments builder in [[paperform-submissions-results-view]].
  - Operators for a Yes/No source question: is · isn't · is answered · isn't answered · contains · doesn't contain.
  - "Add another condition" inserts an And/Or toggle between rows.
  - "Done" closes the modal.
- **No action selector exists** — unlike the Custom Pricing Rules builder in [[paperform-payments-products-fields]] ("when...then [+ − × ÷ =]..."), this grammar has no "then" clause at all. The only possible meaning is "show this question only when the conditions match"; anything else hides it.

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| "Question visibility logic" toggle | Turn on | Opens the rule modal | "Configure Logic for <question>" modal appears immediately | Same screen (modal) |
| Change the source question's type (Yes/No → Text) | Edit the referenced question | No validation runs | **Silent** — no warning. The saved rule (`field:8rbgg, is, "Yes"`) is unchanged and now points at a Text field, so it would only ever match if a respondent typed the literal word "Yes" | Same screen |
| Delete the source question via its card's gutter ✕ ("Remove") | Click, no confirmation shown | Deletes the field instantly | **Confirmed: no warning about the dependent rule at all.** Unlike the Backspace-delete path documented in [[document-canvas-editor-shell]] (which does confirm), this gutter-menu delete is instant and silent. The dependent question's drawer still reads "Configure Logic → 1 condition," but opening it shows the row as a blank "Choose question" — **the rule is silently orphaned**, not removed or flagged | Same screen |
| Publish ▾ → Versions → "Load as draft" on a still-live version | Click | Recovery path | Restores the draft to a prior published state, with a warning: "Switching to a previous version discards any unpublished changes." Successfully restored the deleted source question and its dependent rule in this test | Same screen |

## Behavior & States
- **Classic (standard/scrolling) mode, confirmed directly:** the dependent question is **unmounted from the DOM entirely** when its condition isn't met — not hidden via CSS. On the condition becoming true again, it remounts, and **its previously-typed value is restored** ("Typed Name" survived a hide/show cycle), matching the "Question keeps answer when not visible" toggle's default-on behavior.
- **Guided (one-at-a-time) mode, confirmed directly — a genuinely different mechanism than a simple hide:** the respondent-facing screen list (`_initialForm.pagination`) still lists all 9 screens at publish time (screens are fixed then), but at runtime, with the hiding condition true, the guided flow **skips the dependent screen entirely** — it auto-advances straight past it, never mounting or rendering it. The progress bar's percentage is recalculated to exclude the hidden screen from its denominator (confirmed via the observed ~17%/~33% sequence, not the static 1-of-9 that a fixed denominator would produce).
- **The Publish button is confirmed non-clickable while the rule modal is open, with no visible explanation** — a real, minor UX gap; the first attempt at publishing in this test session silently did nothing until the modal was explicitly closed with Done.
- **Edge-case behavior is confirmed broken, not just untested:** changing the source question's type does not re-validate or warn (silent semantic drift); deleting the source question orphans the rule silently, with no confirmation dialog and no dependency check — a materially different (and weaker) deletion safeguard than the confirmed Backspace-delete confirmation already documented for the main document canvas in [[document-canvas-editor-shell]].

## Rules & Validation
- **The condition grammar is reused across three separate surfaces in this product**, confirmed directly: Question Visibility Logic (this record), the Custom Pricing Rules builder in [[paperform-payments-products-fields]], and the Reports → Segments builder in [[paperform-submissions-results-view]] — the same `[question] [operator] [value]` + And/Or + nested-group primitive, with only the presence/absence of a "then [action]" clause distinguishing them (Pricing Rules has one; Visibility Logic and Segments don't).
- **Not tested this pass:** whether a hidden *required* question blocks Submit, and whether a "kept but hidden" answer value is actually included in the final submission payload (the default-on "keeps answer when hidden" setting suggests it likely is, but this was not directly confirmed via a submit payload capture).
- **Confirmed real data-integrity risk:** the rule silently breaks under two common editing actions (changing the referenced question's type; deleting the referenced question) with no warning, no block, and no automatic cleanup. The only recovery path found is the Versions → "Load as draft" rollback — there is no targeted undo for the dependent-rule breakage itself.

## Technical Data
> OBSERVATION, directly captured via browser DOM/network inspection, Claude browser extension session, 2026-09-23.

- **No separate endpoint for saving a rule.** It rides the same full-document draft-save mechanism already confirmed in [[document-canvas-editor-shell]]/[[respondent-runtime-guided-vs-standard]]: `PUT /api/v1/form/<id>/versions/<draftId>`, on the ~15s dirty-check autosave cadence. The rule itself lives inside the dependent field's own entity in `definition.entityMap`, not a separate rules table/endpoint.
- **Saved shape**, confirmed via the raw saved definition:
```json
"hasVisibilityRules": true,
"visibilityRules": [
  { "field": "8rbgg", "operator": "is", "value": "Yes", "conjunct": "AND" }
]
```
  A flat list with a per-row `conjunct` field. The "Multiple Condition Group" nested-grouping UI exists, but a saved nested-group shape was not captured this pass (the test rule used only a single flat condition).
- **Reaches respondents only through Publish** (`?publish=1`) — the rule is inlined into `window._state.definition`, the same load-once-no-separate-fetch pattern already confirmed for the respondent runtime in [[respondent-runtime-guided-vs-standard]].
- **The builder's own Theme & Appearance preview pane applies the logic live** — the dependent question was confirmed absent from the Classic-mode preview while its condition was unmet, before ever publishing.

## Competitor Comparisons
> No Zoho Forms or Typeform conditional-logic/branching component is documented anywhere in this library as of 2026-10-05. **Google Forms and JotForm now both have directly comparable records** — see [[google-forms-section-branching]] and [[jotform-conditional-logic]] for the full write-ups; summarized below.

| Capability | Zoho Forms | Typeform | Paperform | Google Forms ([[google-forms-section-branching]]) | JotForm ([[jotform-conditional-logic]]) |
|---|---|---|---|---|---|
| Per-question conditional show/hide | none recorded | none recorded | ✔ — confirmed, DOM-unmount-based, not CSS-hide | Not this component's model — Google routes at the section/page level, not individual-field visibility | ✔ — confirmed, via a "Show/Hide Field" action type (one of nine); implemented as an instant `display:none`↔`display:flex` CSS toggle, not a DOM unmount/remount |
| Form-level branching/jump logic | none recorded | none recorded (Typeform is publicly known for "Logic Jumps," but no component record for it exists in this library yet) | Not this component's model — Paperform's is per-question "show if," not a jump map | ✔ — confirmed, a per-option or per-section-footer destination dropdown routes the respondent to any section in the form (including self/backward loops, unvalidated) | ✔ — confirmed, via a separate "Skip to/Hide a Page" action type, coexisting alongside field-level show/hide in the same nine-action system rather than being the product's only logic mechanism |
| Action types beyond show/hide | none recorded | none recorded | **None** — no action selector exists at all; "show this question" is the only possible meaning | **One** — jump to a section (the entire mechanism) | **Nine, confirmed by direct enumeration** — Show/Hide Field, Update/Calculate Field, Enable/Require/Mask Field, Update Options, Update Product List, Skip to/Hide a Page, Change Thank You Page, Change Email Recipient, Run Workflow. The broadest conditional-logic action set of any product in this library |
| Multi-condition combination | none recorded | none recorded | ✔ — confirmed nested "Multiple Condition Group" grouping, the same primitive shared with Pricing Rules and Report Segments | N/A — not applicable to whole-section jumps | ✔ — confirmed AND/OR via a single flat Any/All toggle across all IF rows; **no nested/grouped sub-conditions**, a materially flatter model than Paperform's own confirmed grouping primitive |
| Guided-mode screen skipping tied to logic | none recorded | none recorded | ✔ — confirmed, screens are skipped at runtime and the progress-bar denominator recalculates | ✔ — confirmed, a real navigation jump; the skipped section is never sent to or painted in the respondent's view at all — the closest structural parallel to Paperform's own guided-mode skip, despite operating at section rather than field granularity | Respondent-facing field show/hide confirmed as an instant snap (no animation) via DOM/`MutationObserver` inspection — not independently tested for an equivalent page-skip runtime effect this pass |
| Dependency-safety on edit/delete | none recorded | none recorded | ✘ **confirmed silently broken** — no warning on type change or source-question deletion; the orphaned rule renders as a blank "Choose question" row with zero indication anything is wrong | ✘ **confirmed silently broken too, but with a gentler fallback** — deleting a referenced section resets the pointing rule to "Continue to next section" (a still-functional default) with no warning, rather than Paperform's orphaned/broken rule row | **Confirmed not blocked at delete-time either (same anti-pattern), but the ONLY one of the three that surfaces an explicit post-deletion error** — a persistent red "MISSING FIELD" + "ERROR: One or more fields have been deleted which are required by this condition." on the Conditions list. The BUILD canvas also shows a per-field "Conditions" badge icon flagging dependency existence — information the delete-confirmation dialog itself still fails to surface. Respondent-facing fallback "fails open" (field becomes permanently visible), same general shape as Google's silent default-fallback |

**Updated verdict across all three now-documented systems**: all three products share the same core anti-pattern — none warns or blocks at the moment a referenced field/section is deleted. They differ sharply in what happens *after*: Paperform's rule is silently and indefinitely orphaned with zero indication; Google's rule quietly resets to a still-functional default with no error state; JotForm's rule is left broken but **loudly and persistently flagged** in the Conditions list, the most discoverable of the three failure modes, even though JotForm still shares the same missed opportunity to warn *before* the damage is done (despite visibly having the dependency information via its own canvas badge).

## Best Observed Approach
- **RECOMMENDATION:** the reused condition grammar across three separate builder surfaces in Paperform (this component, Custom Pricing Rules, Report Segments) remains a genuinely elegant architectural choice — one mental model for "if this then that" reused consistently across the product. Set against the three-way comparison now possible: Paperform's **confirmed silent-orphaning-on-delete** is the weakest of the three products' dependency-safety outcomes — Google's silent-fallback-to-a-functional-default is a marginally safer failure mode, and JotForm's explicit post-deletion error (while still not warning at delete-time) is the most discoverable of the three. Any future implementation of a similar feature should combine delete-time warning (none of the three products has this) with JotForm's post-deletion error-surfacing — no single product in this comparison set has solved both halves of the dependency-safety problem yet.

## Cross-Component Pattern Note
1. **A fourth confirmed use of the shared condition-grammar pattern** in this product (visibility logic, pricing rules, report segments — all three sharing the same `[question][operator][value]`+And/Or+nested-group primitive) — worth checking explicitly on any future Paperform capture that involves a rule-builder-shaped UI, since this is clearly a reused internal component, not three independent implementations.
2. **A materially weaker deletion safeguard than the one already confirmed for the main document canvas:** [[document-canvas-editor-shell]] confirmed a Backspace-delete on a question card asks for confirmation; this record confirms the card gutter's own ✕/"Remove" control deletes instantly with **no** confirmation and **no** dependency check, even when other rules depend on the deleted question. The same product has two different deletion paths with two different safety levels for the same underlying action — worth flagging explicitly in any future Paperform capture that touches deletion.
3. **A fourth confirmed anti-pattern/quality-gap category for this product**, alongside the two accessibility-defect classes ([[paperform-yes-no-field]]/[[paperform-rating-field]]), the business-logic safety gap ([[paperform-payments-products-fields]], escalated in [[paperform-submissions-results-view]]'s PF9 update), and the basic engineering-hygiene issues (also [[paperform-submissions-results-view]]): **silent dependency breakage on edit/delete**, with no warning and no automatic cleanup — worth explicitly testing "what happens if X is deleted/changed while something else depends on it" on any future Paperform capture involving cross-references between fields.

## Sources
- OBSERVATION: Live exploration + DOM/network inspection of Paperform's Question Visibility Logic modal, via Claude browser extension, 2026-09-23. Published scratch form `xborqzxj`, rule on Q3 "Your name" (key `3ftmg`): show only if Q1 "Do you like forms?" (key `8rbgg`) is Yes. Tested end-to-end on the live respondent view in both Form Experience modes (Classic and One-at-a-time). The edge-case tests (changing Q1's type, deleting Q1) were performed deliberately to probe dependency safety, then recovered via Publish ▾ → Versions → "Load as draft" on the still-live prior version — no real data was left broken; the form remains published in One-at-a-time mode with the Q3 rule live. Test answers entered on the live form during this pass were not submitted.
