---
component: "Scale Rating Field"
ui_category: "Forms > Rating"
source_product: "JotForm"
last_verified: "2026-09-30"
evidence_state: "source_reviewed"
---

# Component: Scale Rating Field

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **Pass ID: JF1 (2 of 2 — companion to [[jotform-star-rating-field]]).** Confirmed genuinely different underlying implementation from Star Rating, not shared code — Star Rating is a fully custom ARIA-div radiogroup; Scale Rating uses **real native `<input type="radio">` elements**, the only one of this library's five rating-field implementations to do so. Part of the same first 5-way rating-field comparison as [[jotform-star-rating-field]], alongside [[rating-star-field]] (Zoho), [[rating-field]] (Typeform), [[paperform-rating-field]] (Paperform), [[google-forms-rating-field]] (Google Forms).

## Location
- **Product:** JotForm
- **Screen(s) it appears on:** form builder (BUILD mode), Survey Elements group of the BASIC palette tab, directly below Star Rating.

## Structure
- A `<div role="radiogroup" data-component="scale" class="form-scale-table">` — the div still carries leftover `cellpadding`/`cellspacing` attributes (HTML `<table>`-only attributes with no effect on a `<div>`), a clear sign this component was migrated from a literal `<table>` layout at some point without fully cleaning up the markup.
- Inside it, a `.rating-item-group` div contains one `.rating-item` div per scale point (default range 1–5), each holding a genuine native `<input type="radio" class="form-radio">` plus a properly-associated `<label for="input_7_N">N</label>`.
- "Worst"/"Best" endpoint text sits in the same group as plain text, not as part of any individual radio's label.
- Screenshot: not captured this pass — captured via DOM/ARIA inspection and real pointer events on a live test form (`form.jotform.com/262714734595062`).

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| Any scale-point label/radio | Click | Select (exclusive) | That radio becomes checked; its `<label>` fills solid blue (`rgb(46, 105, 255)`); all previously-selected options lose their fill — a true exclusive single-select, unlike Star Rating's cumulative fill. The entire question block (label text + the row of circles) also gains a light-blue highlighted background panel once any option is selected | Same field, committed natively via radio `checked` state |
| Focused radio | Arrow keys | Native browser radiogroup navigation | Standard native behavior inherited for free (not custom-coded) — moves selection between same-named radios immediately on arrow press | Same field |

## Behavior & States
- **Exclusive fill, not cumulative** — selecting "3" fills only the "3" circle; "1" and "2" stay unfilled. This is the opposite fill metaphor from Star Rating in the same palette group — JotForm ships two rating fields with two different fill philosophies (magnitude-style cumulative vs. single-choice exclusive) in the same Survey Elements section.
- Selecting an option highlights the **whole field block** (label + all circles) with a pale-blue background panel, not just the selected circle — a stronger selected-state affordance than Star Rating gives.
- **Accessibility finding, confirmed by direct markup inspection, not inferred from one screen reader's behavior**: each option DOES have a correct, properly-associated `<label for="input_7_N">N</label>` (e.g. the label for option 3 literally contains "3"), which would normally give every radio a distinct, correct accessible name via native label association. However, the `<input>` also carries an explicit `aria-labelledby` pointing at the shared question text, and per the spec-defined accessible-name-computation precedence order, `aria-labelledby` takes priority over native `<label for>` association. Practical effect: a screen reader will very likely announce the *same* accessible name (the shared question text) for all five options, with no spoken differentiation between "1" and "5" beyond read order/position. The visible number and a `title` attribute (also present, e.g. `title="3"`) are not part of the accessible-name computation and may not be reliably surfaced by assistive tech.
- Fill mechanism is CSS `background-color` on the `<label>` element (checked-state selector), not a sprite image — a materially different rendering approach from Star Rating's sprite frames.

## Rules & Validation
- Range is configurable (GENERAL/OPTIONS panel), default 1–5 with "Worst"/"Best" sublabels (confirmed in P1).
- Standard Required toggle (confirmed in P1).

## Technical Data
> OBSERVATION only, tagged per evidence-guidelines.md. Captured via injected JavaScript DOM/ARIA inspection and real pointer events on a live test form.
- **DOM:** all five radios in one scale share the exact same `name` attribute (standard radio-group grouping) and the exact same `aria-labelledby` value pointing at the field's main question label (`label_input_7` in the tested instance) — not a per-option accessible name.
- **CSS:** checked-state fill is `rgb(46, 105, 255)` background-color on the `<label>`, confirmed via computed-style inspection.
- **Network:** not captured this pass.

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| Zoho Forms ([[rating-star-field]]) | Zoho's Rating is a custom non-native widget with the same confirmed `aria-checked`-never-flips bug class; JotForm's Scale Rating avoids this entirely by using real `<input type="radio">` elements, which carry correct native checked-state semantics for free. | JotForm's native-radio approach sidesteps every custom-ARIA-widget bug class Zoho's implementation is exposed to. | JotForm's `aria-labelledby` override still produces a real (if different) naming gap — native semantics alone didn't fully solve accessibility here. |
| Typeform ([[rating-field]]) | Both confirm correct, exclusive single-`true` selection state (Typeform via Radix `aria-checked`; JotForm via native `checked`). | JotForm is the only one of the five implementations using genuine native radio inputs rather than a custom-built widget — the most "accessibility for free" approach in this comparison set. | Typeform's icons carry at least a bare-digit `aria-label` per option; JotForm's per-option native `<label>` text is present but overridden by the group-level `aria-labelledby`, producing a comparable (not better) end result for screen-reader users despite the more correct underlying markup. |
| Paperform ([[paperform-rating-field]]) | Both confirm correct exclusive selection state. | JotForm's Scale Rating is natively keyboard-operable with zero custom code — a direct, structural advantage over Paperform's confirmed **completely keyboard-inaccessible** Rating field (no tabindex/keydown handlers at all). | Paperform's per-option `aria-label="1"`–`"5"` is simpler than JotForm's label-vs-aria-labelledby precedence conflict, though Paperform's group itself has no accessible name at all — a different, arguably more fundamental gap. |
| Google Forms ([[google-forms-rating-field]]) | Google's Rating confirms non-exclusive "fill" `aria-checked` semantics; JotForm's Scale Rating is cleanly exclusive, matching correct native radiogroup behavior. | JotForm's native-input foundation is structurally cleaner than Google's custom sprite-swap `::before` approach. | Google Forms confirms a working deselect and full keyboard support including wraparound; JotForm's Scale Rating has no deselect path (standard native radio behavior — once selected, only choosing a different option changes it) and wraparound was not tested. |

JotForm's Scale Rating is the only field in this 5-way comparison confirmed to use **real native `<input type="radio">` elements** rather than a custom ARIA widget — worth checking whether this pattern recurs in any future field capture across the five products, since it's a meaningful axis ("native-semantics-for-free" vs. "custom-built-and-therefore-fallible," per the tabindex/mouse desync bug confirmed in [[jotform-star-rating-field]]) not previously represented in this comparison set.

## Best Observed Approach
- Using real `<input type="radio">` elements for a small-N scale (1–5) is a defensible, arguably under-used choice precisely because it sidesteps every custom-keyboard-handling bug class a from-scratch ARIA widget can fall into — including the specific tabindex/mouse-click desync documented in [[jotform-star-rating-field]]'s own Star Rating field, built by the same product. The cost here is the `aria-labelledby` override undermining the very native labels that would otherwise have made this the cleanest-accessible implementation of the five.

## Second-Pass Flags
1. Keyboard arrow-key behavior was confirmed as "standard native radiogroup navigation" by convention/well-established browser behavior, not independently re-tested keystroke-by-keystroke the way Star Rating's keyboard behavior was in this same pass.
2. Whether a screen reader genuinely announces identical names for all five options (the `aria-labelledby` precedence finding) was reasoned from the spec, not confirmed with an actual screen reader this pass.

## Sources
- OBSERVATION: Live interaction with a test form at `form.jotform.com/262714734595062` (field added during the 2026-09-29 P1 pass), DOM/ARIA inspection via injected JavaScript, and real pointer events via browser automation, 2026-09-30.
