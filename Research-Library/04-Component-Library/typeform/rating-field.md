---
component: "Rating Field (Configurable Icon Radiogroup)"
ui_category: "Data Input > Form"
source_product: "Typeform"
last_verified: "2026-09-16"
evidence_state: "source_reviewed"
---

# Component: Rating Field (Configurable Icon Radiogroup)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location
- **Product:** Typeform
- **Screen(s) it appears on:** Form builder / published live form, "Rating & ranking" palette group. A related but distinct field, **Opinion Scale** (numbered-box NPS/Likert style, same palette group), is documented briefly at the end for contrast — it is the closer analogue to a linear-scale question, not a themed variant of Rating.

## Structure
- A horizontal row of outline icons with a number label centered underneath each (1, 2, 3, ...). The icon shape is configurable via a 17-icon picker (star, heart, thumbs-up, crown, cat/dog face, plain circle, flag, droplet, checkmark, lightbulb, trophy, cloud, lightning bolt, pencil, skull, and one more emoji-style face) — star is simply the default, not hardcoded.
- Scale range is fully configurable (1–10 icons via a range dropdown), tested at 5 for direct comparability with Zoho's fixed 5-star field.
- Built on the **same Radix-style ARIA radiogroup primitive as the Yes/No field** ([[yes-no-field]]) — not a bespoke "star rating" widget, not native inputs. Three `role="radiogroup"` instances (Yes/No, Rating, Opinion Scale) were present simultaneously on the same test page, confirming one generic "choice group" component is reused across all three field types.
- Screenshot: not captured this pass (see Sources — DOM/CSS/JS/network data pulled programmatically).

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| Icon N | Hover | Radix state + custom `data-hovered`/`data-filled` attribute update | Icons 1 through N fill with a light, semi-transparent grey preview tint (0.2 alpha); icons after N stay outlined. Reverts instantly on mouse-out without a click | Same screen, no commit |
| Icon N | Click (from neutral) | Radix RadioGroup select handler | Commits the selection: icon N gets `aria-checked="true"`; icons 1 through N-1 stay filled (0.3 alpha, "up to here" visual) but remain semantically unchecked; icons after N are unfilled | Same screen |
| A different icon (e.g. switch 4 → 2) | Click, while one is selected | Same handler | Selection moves atomically: icon 2 becomes the sole `aria-checked="true"`, icons 3–5 revert to unfilled/unchecked, icon 1 stays filled ("up to 2") | Same screen |
| The already-selected icon | Click again | Same handler | **No deselection occurs** — `aria-checked` stays `"true"`. Confirmed identical one-way behavior to [[yes-no-field]]: no way to clear a Rating answer by re-clicking, only change it to a different value | Same screen |

## Behavior & States
- **Default (unselected):** all icons rendered as unfilled outline (stroke only, no fill), neutral grey/black outline color.
- **Hover state:** confirmed live "up-to-here" fill preview at 0.2 alpha — real-time, reverts on mouse-out without a click. **This is exactly the behavior that was inconclusive for Zoho's equivalent and deliberately not reconstructed — confirmed present and working in Typeform.**
- **Selected/committed state:** icons 1 through the selected value stay filled at 0.3 alpha (slightly more opaque than hover preview); icons after the selected value are unfilled.
- Disabled/loading/error states: not observed.

## Rules & Validation
- One-way selection, identical to [[yes-no-field]]: no built-in way to clear a Rating answer once given.
- No `aria-valuenow`/`aria-valuemax` — this is not implemented as an ARIA `slider`, it's a plain radio group of discrete labeled options.

## Technical Data
> OBSERVATION, directly captured via DOM inspection, computed styles, network monitoring, hover-state testing, and direct interaction (2026-09-16), Claude browser extension session.

- **DOM:**
```html
<div role="radiogroup" aria-required="false" dir="ltr" tabindex="0">
  <button type="button" role="radio" aria-checked="false" data-state="unchecked"
          data-filled="false" data-hovered="false" tabindex="-1" data-radix-collection-item>
    <div><svg viewBox="0 0 56 56"><path class="symbolFill" d="..."/></svg></div>
    1
  </button>
  <!-- repeated per step (2, 3, 4, 5) -->
</div>
```
  Same `role="radiogroup"`/`role="radio"` structure as [[yes-no-field]]. Each icon is a real inline `<svg>` with a `<path class="symbolFill">`, not a font icon or CSS background-image — this is what makes a smooth per-pixel fill-color transition possible, and how 17 different icon shapes share one fill-animation mechanism. Two extra custom data attributes beyond Yes/No: `data-filled` (is this icon part of the filled run, whether from hover-preview or committed selection) and `data-hovered` (is the pointer currently at or before this position) — tracked separately from `aria-checked`/`data-state`, which only reflect the actual committed answer. Accessible name: each button's plain visible number text ("1"–"5") serves as its accessible name by default, no explicit `aria-label` present or needed.

- **JavaScript:** Same Radix UI `RadioGroup`-based architecture as [[yes-no-field]] (`data-radix-collection-item`, styled-components classes, manually synchronized `aria-checked`/`data-state`), not native form controls.

- **Network:**
  - Hover is purely client-side — no network activity beyond the page's routine background telemetry, confirmed by testing.
  - Clicking to select fires the same one-time `POST https://form.typeform.com/forms/{formId}/start-submission` seen on [[yes-no-field]], if this is the first answer given anywhere on the form in that session. Switching the value afterward (4 → 2) did not trigger any additional data-saving network call, only the background tracking ping.

- **Response:** N/A — not itemized this pass.

- **State change:** Held in client/component state; the one observed server touchpoint is the shared session-initializer, not a per-value autosave.

- **CSS:** Same monochrome near-black base color as the Yes/No ring (`rgba(42,34,43,X)`), used here as a **fill color** rather than a box-shadow ring, at three distinct opacity steps: `0` (unfilled/outline-only) → `0.2` (hover preview) → `0.3` (committed selection). Hover and "answered" are visually distinguishable from each other, not just from the unfilled state.

- **Animation/transition:** `fill 0.25s cubic-bezier(0.215, 0.61, 0.355, 1)` on the SVG path — the **identical duration and easing curve** used for the Yes/No box-shadow transition, confirming Typeform uses one shared transition token across its choice-field family rather than a per-field-type animation. Distinct from all three of Zoho's variants (instant class-swap / 0.2s eased transform / 0.3s linear fill on [[toggle-radio-switch]] / [[yes-no-toggle-field]] / [[rating-star-field]] respectively) — a fourth pattern, an eased fill/opacity transition on an inline SVG path, paired with a genuine hover-preview stage none of Zoho's three were confirmed to have.

## Accessibility
- **`aria-checked` correctly flips to `"true"` on the selected item and only that item**, confirmed across two different selections in the same session (icon 4 → `["false","false","false","true","false"]`; then icon 2 → `["false","true","false","false","false"]`). This directly contradicts [[rating-star-field]]'s confirmed bug (`aria-checked` never flips to `true`) — **Typeform's Rating field does not reproduce that bug.**
- **No dedicated live region** (`aria-live`) exists anywhere on the page for announcing the selection — a screen reader user's confirmation relies entirely on the focused radio button's own `aria-checked` state being re-announced (which happens correctly, but only if focus stays on/returns to that control).
- Net assessment: meaningfully more accessible than Zoho's confirmed-buggy implementation on the specific dimension flagged (checked-state announcement), though it stops short of a best-practice live-region announcement pattern.

## Note: Opinion Scale (adjacent field, not the star/icon equivalent)
- Renders as a row of plain numbered boxes (default range 0–10, independently configurable bounds) with optional free-text labels for the 0/mid/10 positions — an NPS/Likert-style question, not an icon rating. Confirmed built on the **same underlying `role="radiogroup"`/`role="radio"` primitive** as both [[yes-no-field]] and this Rating field. Most Action→Result/JS/accessibility findings above likely transfer, though hover-fill-preview and exact color/opacity values were not independently re-verified for Opinion Scale in this pass.

## Competitor Comparisons — see [[rating-star-field]]
| Aspect | Zoho Forms (existing) | Typeform (this trace) |
|---|---|---|
| Scale range | Fixed at 5 | **Configurable, 1–10** (tested at 5 for parity); icon shape also configurable (17 icons, star is just the default) |
| Markup | Custom JS-driven (non-native) | Custom JS-driven, same Radix UI `RadioGroup` primitive used for Yes/No; icons are inline SVG, not font icons |
| Hover fill-preview | **Inconclusive** — deliberately not reconstructed for lack of evidence | **Confirmed present and working.** 0.2-alpha preview tint reverting on mouse-out, distinct from the 0.3-alpha committed fill |
| Deselect once answered? | Not confirmed either way in Zoho's source | **Confirmed: no.** Identical one-way behavior to Typeform's Yes/No field |
| Selected-state visual | Three variants (instant class-swap / 0.2s eased transform / 0.3s linear fill) | A fourth pattern: **0.25s eased fill-color/opacity transition on an inline SVG path**, same transition token as Typeform's Yes/No |
| `aria-checked` accuracy | **Confirmed bug: never flips to `true`** | **Confirmed correct.** Exactly one option carries `aria-checked="true"` at all times |
| Live region for selection announcement | — | **Absent.** No `aria-live` region found anywhere on the page |
| Accessible name per option | — | Plain visible number text; no explicit `aria-label` needed |
| Network behavior | — | Hover: zero network activity. First click of any answer: one-time `start-submission`. Subsequent changes: no additional save call |

## Best Observed Approach
- On both the hover-preview affordance and the `aria-checked` accuracy dimension, Typeform's Rating field is the better-observed implementation so far — it resolves exactly the two things Zoho's [[rating-star-field]] left as an inconclusive gap (hover preview) and a confirmed defect (`aria-checked`). This is a concrete, evidence-backed data point for [[rating-star-field]]'s "Best Observed Approach" section, not a general assumption that Typeform is better overall.

## Sources
- OBSERVATION: Live trace on a real Typeform account (admin.typeform.com), form builder + published live form, via Claude browser extension, 2026-09-16. Traced via DOM inspection, computed styles, network monitoring, hover-state testing, and direct interaction. Captured in Typeform's "Universal mode" multi-question-per-page rendering (same caveat as [[yes-no-field]]).
