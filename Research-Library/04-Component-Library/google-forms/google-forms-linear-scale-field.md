---
component: "Linear Scale Field (Numbered Radio Row)"
ui_category: "Forms > Form"
source_product: "Google Forms"
last_verified: "2026-09-25"
evidence_state: "source_reviewed"
---

# Component: Linear Scale Field (Numbered Radio Row)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **No direct sibling record exists.** Zoho, Typeform, and Paperform's "rating" fields are all icon-based (stars/hearts/etc.); none has a numbered 1–N linear-scale control as a distinct field type documented in this library yet. The comparison this record makes instead is internal: Google Forms' own Linear Scale vs. its own Rating field ([[google-forms-rating-field]]) — a genuinely useful contrast, since the two controls look superficially similar ("pick a number, 1 to N") but turned out to be two separately-built components under the hood.

## Location
- **Product:** Google Forms
- **Screen(s) it appears on:** Builder question-type dropdown → Linear scale, and the published `/viewform` respondent page. Tested on the reused test form (`1jXL4eFIxzAtW7-7NDo7v5EWGb28DmnkfyWijfmQPPeg`), question "How likely are you to recommend us," configured 1–5, endpoint labels "Not likely" / "Very likely."

## Structure
- Two range dropdowns: **Minimum** (exactly two choices — 0 or 1, default 1) and **Maximum** (2 through 10, default 5, confirmed by opening the dropdown and reading all 9 entries). Below the range pickers, exactly **two** optional text-label inputs appear — one at the minimum, one at the maximum — pre-labeled with the current endpoint number.
- Renders as a horizontal row of plain circles (native-radio-styled), **not a slider**, confirmed in both the builder's live preview and the published page. Each circle sits under its number; the two endpoint captions sit outside the numbered row. Number labels are **always visible** — no reveal-on-hover/focus behavior, a respondent sees the full range and both captions the instant the question renders.

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| Option 3 | Click | Selects, exclusively | `aria-checked="true"` on option 3 **only** — options 1, 2, 4, 5 all stay `false`. Standard single-exclusive-radio semantics | Same screen |
| Option 4 (already selected) | Click again | **No-op** | Stays visually selected — confirmed with a zoomed screenshot after a 1-second wait, to rule out a render-timing false read. **The opposite of Rating's clean deselect** | Same screen |

## Behavior & States
- **A genuine `role="radiogroup"` with a correct accessible name — the headline finding of this pass, and a direct, stark contrast with [[google-forms-rating-field]].** The five options sit inside an ancestor with `role="radiogroup"` and `aria-labelledby="i16 i19"`, where `i16` resolves directly to the actual question text ("How likely are you to recommend us") — confirmed by resolving the id and reading its `textContent`. A textbook-correct ARIA composite-widget pattern, unlike Rating's complete absence of any grouping role or name binding at any ancestor level. The individual options are still `<div role="radio">`, still carrying only a bare-number `aria-label` (the same minor gap Rating has at the option level) — but because the *group* is correctly named here, a screen reader user gets "How likely are you to recommend us, radio group" on entry, then bare numbers per option, materially better than Rating's total silence.
- **Selection is exclusive** (single value, `aria-checked="true"` on exactly one option), the opposite of Rating's cumulative "fill" behavior (selecting N marks 1 through N all `true`). Visually this shows up as one filled dot (classic radio look) vs. Rating's contiguous filled run.
- **A confirmed, reproducible ARIA bug: after a second click on an already-selected value, `aria-checked` reports `false` on every option, including the one still visually selected.** Re-queried twice, several seconds apart, with no further interaction in between — stayed wrong both times. This is **not** a momentary render-lag artifact like the timing quirk noted for Rating (which always settled to the correct state a moment later); here the visual state and the accessible state permanently disagree once a value has been clicked twice. Sighted users still see option 4 selected; a screen reader would report the question as unanswered. Arguably a worse practical bug than anything found in Rating, precisely because Rating's ARIA, once it settles, is internally consistent with what's on screen.
- **Different underlying component from Rating, not a shared one skinned two ways** — confirmed by CSS class: options here use `Od2TWd hYsg7c`, a different class from Rating's `p8oyLd`.

## Rules & Validation
- **Minimum**: 0 or 1 only, a fixed 2-item list, not a free numeric input.
- **Maximum**: 2 through 10, a fixed 9-item list.
- **Labels**: only the two endpoints can carry optional text, confirmed by counting label input fields in the DOM (exactly two regardless of range width) — no way to label any intermediate value.
- Not tested this pass: whether the min/max dropdown's available range changes if the other end is pushed to an extreme; whether the second-click ARIA-staleness bug also affects other linear-scale questions on the same form (the same `Od2TWd hYsg7c` class was seen elsewhere on this form during GF3's incidental Tab-order testing, suggesting this is a component-wide bug, not instance-specific — flagged, not confirmed).

## Technical Data
> OBSERVATION, directly captured via injected JavaScript reading live DOM/ARIA state while driving real clicks on the live `/viewform` page, Claude browser extension session, 2026-09-25.

- Options: `<div role="radio">` class `Od2TWd hYsg7c`, confirmed distinct from Rating's `p8oyLd` class.
- No CSS fill-mechanism or network detail independently traced this pass (out of scope for this internal-comparison-focused record).

## Cross-Component Pattern Note
1. **Two visually-similar "pick a number" controls in the same product are built as two separate components with different ARIA correctness, different selection semantics, and different accessibility defects — worth treating as a standing methodological caution:** don't assume two similar-looking controls in the same product share an implementation without checking DOM class names directly, as was done here.
2. **A genuinely different and arguably worse accessibility bug than anything found in [[google-forms-rating-field]]**: Rating's ARIA is internally consistent once it settles (correct fill semantics, just non-exclusive); Linear Scale's ARIA can permanently disagree with the visual state after a specific interaction (second click on the same value) — a stale-forever bug, not a settling-lag one. Worth explicitly re-testing "click the same value twice" as its own accessibility check on any future radio-group-shaped component capture, not just first-selection behavior.

## Sources
- OBSERVATION: Live, logged-in exploration of Google Forms, via Claude browser extension, 2026-09-25. Same test form and injected-JavaScript inspection method as [[google-forms-rating-field]].
