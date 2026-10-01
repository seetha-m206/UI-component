---
component: "Star Rating Field"
ui_category: "Forms > Rating"
source_product: "JotForm"
last_verified: "2026-09-30"
evidence_state: "source_reviewed"
status: 'complete'
summary: "Cumulative sprite fill with a correctly exclusive aria-checked (resolving Zoho's confirmed bug), the first 5-way rating comparison in this library. A confirmed bug: the roving tabindex only re-syncs to the selected star after a keyboard interaction, not after a mouse click."
---

# Component: Star Rating Field

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **Pass ID: JF1 (1 of 2 — see [[jotform-scale-rating-field]] for the companion Survey Elements rating type).** Confirms this is the **first 5-way rating-field comparison** in this library, alongside [[rating-star-field]] (Zoho), [[rating-field]] (Typeform), [[paperform-rating-field]] (Paperform), and [[google-forms-rating-field]] (Google Forms) — all four sibling records' Competitor Comparisons tables are updated alongside this one.

## Location
- **Product:** JotForm
- **Screen(s) it appears on:** form builder (BUILD mode), Survey Elements group of the BASIC palette tab.

## Structure
- A `<div role="radiogroup" data-component="rating" data-version="v2" class="form-star-rating">` containing one `<div role="radio">` per star (default count 5), plus one extra visually-hidden 6th star `<div>`, and a sibling `<input type="hidden" name="q{N}_typeA{N}">` holding the committed numeric value. The visible stars are plain `<div>`s with ARIA roles, not native form controls — the hidden input does all real form-submission work.
- Each star renders via `background-image: url(".../stars_v2.png")` — a sprite sheet, not inline SVG or an icon font — with three distinct horizontal frames: unhovered (`0% 0%`), hover-preview (`-32px 0px`), and committed (`-64px 0px`).
- The OPTIONS tab of the field's Properties panel offers 8 icon choices (star, heart, bulb, bolt, flag, thumb-like icon, a blue variant, a green "+"), each presumably pointing to a different sprite — only the default star sprite was inspected at the DOM level this pass.
- Screenshot: not captured this pass — captured via DOM/ARIA inspection and real pointer/keyboard events on a live test form (`form.jotform.com/262714734595062`).

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| Any star | Hover | Preview fill | Stars 1 through the hovered position switch to the hover-filled sprite frame; `aria-checked` does NOT change — a pure visual preview | Same field, no commit |
| Any star | Click | Commit rating | Clicked star's index becomes the field's value (hidden input updated); clicked star gets `aria-checked="true"`, all others `"false"` — an exclusive ARIA state; fill switches to the third, committed sprite frame, visually distinct from the hover-preview frame | Same field |
| Focused star (roving `tabindex="0"`) | Right/Left Arrow | Move + commit | Moves focus to the adjacent star and immediately commits that value in the same keystroke — no separate activation step | Same field |
| Already-selected star | Click again | Unclear / possibly inconsistent | Observed twice, reproducibly: does **not** keep the value unchanged and does **not** clear it — it decrements the value by one (e.g. checked=3 → re-click same star → value becomes 2). Flagged as needing a genuinely manual (non-automated) re-check — see Second-Pass Flags | Same field, value decremented |

## Behavior & States
- **Cumulative visual fill, exclusive `aria-checked`** — the sprite shows a "filled up to N" look (hover and committed states both fill cumulatively), but only the single clicked star ever carries `aria-checked="true"`. This matches the correct pattern already confirmed for Typeform and Paperform's own Rating fields, and is the **opposite of Zoho's confirmed bug** (aria-checked never flips to true) and **different from Google's confirmed non-exclusive pattern** (every icon up to N reports true simultaneously).
- Hover-preview and committed-fill are visually distinct sprite frames, not the same CSS treatment reused — a user mid-hover can tell at a glance they haven't committed yet.
- No deselect-to-empty via re-click was observed (see the decrement anomaly in Actions).
- Keyboard commits immediately on arrow press, no required Enter/Space — matches native-radiogroup convention and Google Forms' own confirmed immediate-commit behavior.
- **A genuine, specific accessibility defect confirmed by direct attribute inspection, not generic**: the roving `tabindex` only updates correctly after keyboard interaction, not after a mouse click. Directly after a mouse click that commits star 3, star 1 (the original default-focusable star) was still observed holding `tabindex="0"` while `aria-checked` correctly moved to star 3 — mouse interaction updates the ARIA checked-state but not the roving-tabindex focus marker, which only resyncs once arrow keys are used. A sighted mouse user would never notice; a keyboard user who clicks once then tabs away and back could land on the wrong star.

## Rules & Validation
- Max rating ("Rating Amount") is configurable per-field, default 5, via a numeric stepper in the GENERAL/OPTIONS panel (confirmed in P1).
- No native half-star/fractional rating support — the sprite-frame/value model is integer-only.
- Standard Required toggle, standard empty-submission block (confirmed in P1).

## Technical Data
> OBSERVATION only, tagged per evidence-guidelines.md. Captured via injected JavaScript DOM/ARIA inspection and real pointer/keyboard events (not synthetic-only) on a live test form.
- **DOM:** `data-component="rating"`, `data-version="v2"` on the container — implies at least one prior major version of this widget existed.
- **Value storage:** a sibling `<input type="hidden" name="q{N}_typeA{N}">` inside the radiogroup div — the plain-`<div>` stars themselves carry no native form value.
- **Asset:** `https://cdn.jotfor.ms/assets/v3/images/stars_v2.png` (sprite sheet), each frame 32×30px.
- **Network:** not captured this pass.

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| Zoho Forms ([[rating-star-field]]) | Both custom JS-driven, non-native widgets with a fixed/default 5-star scale. | JotForm's `aria-checked` correctly flips to exactly the selected star — **resolves Zoho's confirmed bug** (aria-checked never flips to `true` at all). | JotForm introduces its own distinct bug class instead: a roving-tabindex/mouse-click desync (see Behavior & States) that Zoho's record doesn't document either way. |
| Typeform ([[rating-field]]) | Both: custom JS-driven widget, cumulative "filled up to N" visual with an exclusive single-`true` `aria-checked`, immediate-commit keyboard interaction (no separate activation step), visually distinct hover-preview vs. committed fill. | JotForm matches Typeform's two strongest confirmed traits (working hover-preview, correct exclusive `aria-checked`) using a sprite-frame approach instead of Typeform's inline-SVG/opacity-fade approach — a genuinely independent implementation converging on the same correct ARIA pattern. | Typeform's keyboard operability is Radix-inherited and not independently re-tested keystroke-by-keystroke in its own record; JotForm's own keyboard commit IS directly re-tested here, but JotForm introduces the tabindex-desync bug Typeform's record doesn't report. |
| Paperform ([[paperform-rating-field]]) | Both confirm correct exclusive `aria-checked` (resolving the Zoho bug class) with a separate attribute (JotForm's committed sprite frame; Paperform's `data-selected`) carrying the cumulative "filled up to N" visual apart from `aria-checked` itself. | JotForm's Star Rating IS keyboard-accessible (arrow keys commit immediately) — a direct, confirmed improvement over Paperform's **completely keyboard-inaccessible** Rating field (no tabindex or keydown handlers at all). | Neither confirms a working deselect; JotForm's re-click produces an unexplained decrement instead of Paperform's clean no-op. |
| Google Forms ([[google-forms-rating-field]]) | Both commit immediately on arrow-key press with no separate activation step. | JotForm's `aria-checked` is exclusive and correct; Google's is confirmed **non-exclusive** (every icon up to N reports `true` simultaneously) — a real ARIA-correctness advantage for JotForm. | Google Forms has a confirmed **working deselect** (click or Space) and **full keyboard support including wraparound**; JotForm has neither a confirmed deselect (the decrement anomaly notwithstanding) nor confirmed wraparound behavior. |

## Best Observed Approach
- Using visibly distinct sprite frames for hover-preview vs. committed-selection (not just "filled vs. not") is a clean, confirmed-working pattern — a user mid-hover can tell at a glance they haven't committed yet, a subtlety easy to miss when hover and selected states look identical.
- Across all five products now compared, the pattern "cumulative visual fill + exclusive `aria-checked`" (JotForm, Typeform, Paperform) is confirmed more accessibility-correct than either Zoho's broken-aria or Google's non-exclusive-aria variants — three independent implementations converging on the same correct ARIA semantics is a meaningful signal for what "right" looks like here.

## Second-Pass Flags
1. **The re-click-decrements-instead-of-no-op-or-deselect behavior needs a genuinely manual (non-automated) mouse re-check** before being cited as a confirmed product quirk — reproduced twice in this pass from a clean page reload, but a sub-pixel click-position dependency specific to browser-automation clicking can't be fully ruled out from this session alone.
2. Icon-swap variants (heart/bulb/bolt/flag/etc.) were not re-opened or inspected at the DOM level this pass — only the default star sprite.
3. Wraparound behavior on arrow-key navigation (confirmed for Google Forms) was not explicitly tested for JotForm's Star Rating.

## Sources
- OBSERVATION: Live interaction with a test form at `form.jotform.com/262714734595062` (field added during the 2026-09-29 P1 pass), DOM/ARIA inspection via injected JavaScript, and real pointer/keyboard events via browser automation, 2026-09-30.
