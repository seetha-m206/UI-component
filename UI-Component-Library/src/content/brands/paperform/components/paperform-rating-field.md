---
component: "Rating Field"
ui_category: "Forms > Form"
source_product: "Paperform"
last_verified: "2026-09-23"
evidence_state: "source_reviewed"
status: 'complete'
summary: "The second 3-way component comparison in this library -- Paperform's Rating field: confirmed-working hover preview and correct aria-checked (matching/exceeding both siblings), but completely keyboard-inaccessible with an unnamed radiogroup."
---

# Component: Rating Field

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **Second genuine 3-way comparison point in this library**, after [[paperform-yes-no-field]]. Directly compared against Zoho Forms' [[rating-star-field]] and Typeform's [[rating-field]] — all three Competitor Comparisons tables have been updated with a Paperform data point.

## Location
- **Product:** Paperform
- **Screen(s) it appears on:** Builder (question card, type "Rating") and the published respondent form. Tested on the live published form `https://xborqzxj.paperform.co` (Classic mode), question "Q4 Rate us" (field key `dm15t`, required, max 5, icon Star).

## Structure
- **Builder-side config (drawer):** Maximum rating (dropdown, **1–10**, default 5); Rating icon (**Heart · Star [default] · Thumbs up · Users · Custom**); when Custom is selected, two file uploads appear ("Custom not selected image", "Custom selected image") — confirming the underlying model is always a two-state icon swap, even for built-in icons; Default answer (clickable stars in the drawer); plus the common Required/two-column/visibility-logic/Question ID controls. No label-at-each-end, zero/"N/A", or half-star settings exist.
- **Respondent-facing structure:** five outline stars in a row (44×44px hit area each, 8px gap), in the theme's Active color, inside a `role="radiogroup"`. No numeric labels under the stars.

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| Star 4 (nothing selected yet) | Hover | Preview | Stars 1–4 preview-fill, star 5 stays outline; `aria-checked` stays `false` on all — **confirmed working hover preview**, matching Typeform and resolving Zoho's inconclusive finding for the same interaction | Same screen |
| Any star | Mouse out (no click) | Reverts preview | Returns to the committed state (all outline, if nothing selected yet) | Same screen |
| Star 3 | Click | Selects rating 3 | `aria-checked=true` on star 3 only; stars 1–3 filled, 4–5 outline | Same screen |
| Star 3 (already selected) | Click again | **No-op** | **Stays selected — no deselect**, same limitation as [[paperform-yes-no-field]] and matching Typeform's confirmed no-deselect finding (not a Paperform-vs-Typeform difference) | Same screen |
| Star 1 (with 3 already selected) | Click | Lowers the rating | Value changes to 1; stars 2–5 unfill | Same screen |
| Star 5 (with 3 already selected) | Hover | Preview extends upward | Stars 4–5 preview on top of the already-filled 1–3 | Same screen |
| Star 1 or 2 (with 3 already selected) | Hover | **No visible change** | Preview never goes *below* the committed value — effectively `max(hovered, selected)`, not a literal hover-replaces-selection preview | Same screen |
| Tab (from the field before this one) | Keypress | Attempts to focus the rating | **Confirmed keyboard-inaccessible: Tab skips the field entirely**, landing on Submit instead | Same screen |

## Behavior & States
- **`aria-checked` is correct** — it flips on selection, and only the chosen star carries `aria-checked="true"` at any time (verified: clicking 3 sets `3:true` with 1/2/4/5 false; clicking 1 afterward moves it to `1:true` and 3 reverts to false). This is correct single-select radio semantics, matching Typeform and **resolving the confirmed bug** already on record for Zoho's [[rating-star-field]] (whose `aria-checked` was found to never flip at all).
- **The "filled up to N" visual is carried by a separate `data-selected` attribute**, not `aria-checked` — `data-selected` is `true` for every star up to the *displayed* value (preview or committed) and **does** change on hover, unlike `aria-checked`.
- **Fill mechanism is an opacity cross-fade between two stacked icons**, not an SVG `fill`/`stroke` swap and not a CSS clip/mask: each star stacks a filled-star `<i>` and an outline-star `<i>`, both using `currentColor`, and the filled one's `opacity` animates 0→1 (`transition: opacity 0.25s`) when `data-selected="true"`.
- **No distinct preview color** — hover-previewed stars render with the exact same filled glyph/color as a committed selection; any grey appearance in a screenshot is just a mid-fade opacity value, not a separate preview state.

## Rules & Validation
- Selection is exclusive, one rating value at a time; once answered it cannot be cleared via re-click or any keyboard path found — only a page reload resets the UI (server-side partial answer is unaffected, consistent with [[paperform-yes-no-field]]'s finding).
- Value is serialized as a **number** (e.g. `3`), unlike the Yes/No field's string `"Yes"`/`"No"` — a real, confirmed type difference between the two fields' persistence.

## Technical Data
> OBSERVATION, directly captured via browser DOM/React/network inspection, Claude browser extension session, 2026-09-23.

- **DOM/ARIA:**
```html
<div class="LiveField__answer">
  <div data-testid="rating-field-dm15t" role="radiogroup" dir="ltr" class="Rating">
    <div class="Rating__option--icon" role="radio" aria-checked="false" aria-label="1" data-selected="false">
      <i class="MaterialIcon material-icons Rating__icon Rating__icon-selected">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7…"/>  <!-- Material "star" filled -->
        </svg>
      </i>
      <i class="MaterialIcon material-icons Rating__icon Rating__icon-unselected">
        <svg …><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24…"/></svg>  <!-- Material "star_border" outline -->
      </i>
    </div>
    <!-- ×5, aria-label "1"…"5" -->
  </div>
</div>
```
- **Confirmed accessibility defects, distinct from [[paperform-yes-no-field]]'s ARIA-wiring bug (this is a different defect class — missing semantics, not broken wiring):**
  1. The `radiogroup` has **no `aria-labelledby` or `aria-label`** at all — the group itself is unnamed (worse than [[paperform-yes-no-field]], which at least links its group to the question label via `aria-labelledby`).
  2. **No `tabindex` on any option and no keyboard event handlers whatsoever** — the React props on each option are `onClick`/`onMouseEnter`/`onMouseLeave` only, nothing keyboard-related on the options or the group. Confirmed via direct Tab-key testing: focus skips the field entirely. Chrome's accessibility tree doesn't list the five radio options at all.
  3. **Net effect: this field cannot be answered via keyboard at all** — a more severe gap than [[paperform-yes-no-field]], which is at least focusable and operable via Space/Enter once tabbed to, just with a non-roving tabindex.
  4. Each option's `aria-label` is just the bare digit ("1"–"5") with no "star" or "out of 5" context.
- **Network:** no request fires on click. **~6s after a change**, a debounced `PUT /api/v1/form/<id>/partial` fires with the rating as a **number**: `{"key":"dm15t","value":3}` (and later `"value":1` after changing to 1). Re-clicking the already-selected star sent **no** partial PUT, since nothing changed — confirming the debounce is dirty-state-gated, not time-interval-only, consistent with [[document-canvas-editor-shell]]'s corrected save-timing model. A `PUT …/event` also fired during the session.
- **CSS/transition caveat:** the filled icon's declared transition is `opacity 0.25s`; automated-browser screenshots sometimes caught the fade mid-way (opacity readings like 0.31 or 0.77), most likely due to rendering throttling under automation rather than a different real-world timing — flagged as a measurement caveat, not a finding about the product.

## Competitor Comparisons — see [[google-forms-rating-field]] for the full 6-way table
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| Zoho Forms (see [[rating-star-field]]) | Both use an icon-swap-based fill mechanism (Paperform: opacity cross-fade between two stacked icons; Zoho: index-comparison fill logic) | Paperform's `aria-checked` is correct (Zoho's is confirmed to never flip — a real bug); Paperform's hover-preview is confirmed working (Zoho's was inconclusive, not reconstructed for lack of evidence) | Paperform is **completely keyboard-inaccessible** — Zoho's keyboard behavior wasn't confirmed either way, but Paperform's is a confirmed, severe gap (not even focusable); Paperform's `radiogroup` has no accessible name at all |
| JotForm — Star Rating (see [[jotform-star-rating-field]]) | Both confirm correct exclusive `aria-checked` (exactly one option `true`) with a cumulative "filled up to N" visual carried by a separate mechanism (Paperform: `data-selected` attribute; JotForm: committed sprite frame), and both confirm a working hover-preview | JotForm's Star Rating IS keyboard-accessible — arrow keys commit immediately, a direct improvement over Paperform's confirmed complete keyboard-inaccessibility | JotForm introduces a different bug instead: a roving-tabindex/mouse-click desync not present in Paperform's record; neither confirms a clean working deselect (JotForm's re-click decrements rather than no-ops) |
| JotForm — Scale Rating (see [[jotform-scale-rating-field]]) | Both confirm correct exclusive selection state | JotForm's Scale Rating uses **real native `<input type="radio">` elements**, giving keyboard operability for free — a structural advantage over Paperform's confirmed complete keyboard-inaccessibility | Paperform's per-option `aria-label="1"`–`"5"` is simpler than JotForm's label-vs-`aria-labelledby` precedence conflict, though Paperform's group itself has no accessible name at all — a different, arguably more fundamental gap |
| Typeform (see [[rating-field]]) | Both confirmed-working hover-preview and correct `aria-checked` semantics; both confirmed no-deselect-once-answered; both use a fade/opacity-based selected-state transition (Paperform: 0.25s icon-opacity cross-fade; Typeform: 0.25s eased fill-color/opacity transition on inline SVG) | Typeform is built on Radix UI's headless `RadioGroup`, giving it real keyboard operability (even if not exhaustively re-tested for Rating specifically, per its own record's pattern from the Yes/No field); Typeform's scale/icon configurability (1–10, 17 icons) is comparable to Paperform's (1–10, 5 icon choices including Custom) | Paperform is confirmed keyboard-inaccessible for this field (not focusable, no handlers at all) — a more severe accessibility gap than anything confirmed for Typeform's equivalent; Paperform's `radiogroup` has no accessible name, whereas this wasn't flagged as a gap for Typeform |
| Google Forms (see [[google-forms-rating-field]]) | Both use an icon-swap mechanism at heart (Paperform: opacity cross-fade between two stacked icons; Google: sprite-region swap via `::before{content:url()}`), and both share the same core naming gap: an unnamed group | **Confirmed full keyboard support** (Tab/Arrow/Space/Enter, with wraparound) and a **confirmed working deselect** — Google Forms resolves both of Paperform's most severe gaps for this field | Google's naming gap goes one step further than Paperform's: not only is the group unnamed, but **individual icons carry no reference to the question text either**, confirmed via a document-wide search finding nothing. Google's `aria-checked` also flips non-exclusively (every icon up to the selected value reports `true`), a different and arguably more confusing pattern than Paperform's clean single-`true` behavior |

## Best Observed Approach
- **RECOMMENDATION:** Typeform remains the strongest of the three on accessibility fundamentals — a headless-primitive (Radix UI) foundation gives it keyboard operability that neither Zoho's nor Paperform's hand-rolled implementations match, and Paperform's Rating field is confirmed to be the least accessible of the three (no keyboard path to answer it at all, plus an unnamed group). On the *visual/interaction* dimension specifically (hover-preview fidelity, correct `aria-checked`), Paperform and Typeform are now tied and both ahead of Zoho, whose `aria-checked` bug and inconclusive hover-preview remain open weaknesses for that record.

## Cross-Component Pattern Note
1. **A second, more severe accessibility defect for Paperform**, distinct from [[paperform-yes-no-field]]'s *broken-wiring* defect — this is a *complete absence* of keyboard support (no tabindex, no keydown handlers, unnamed group). Two different defect categories now confirmed across just two Paperform field types in one research pass; worth treating as a signal to check keyboard accessibility explicitly on every future Paperform field capture, not just ARIA role/attribute presence.
2. **Confirms the dirty-state-gated debounce model** already established for [[document-canvas-editor-shell]] and [[paperform-yes-no-field]] — re-selecting the same value produces no network call, only genuine changes do.
3. **Value-type difference is a real, confirmed finding, not an assumption:** Yes/No stores a string, Rating stores a number. Worth checking for other Paperform field types (Price, Scale, etc.) to see if this is a consistent "match the field's natural JS type" convention or field-specific.

## Sources
- OBSERVATION: Live exploration + DOM/React/network inspection of the published Paperform form at `https://xborqzxj.paperform.co`, via Claude browser extension, 2026-09-23. Question "Q4 Rate us" (key `dm15t`, max 5, icon Star; Custom icon briefly selected then reverted to Star, verified in the drawer). No final form submission was made; only partial in-progress answers were sent via the `/partial` endpoint.
