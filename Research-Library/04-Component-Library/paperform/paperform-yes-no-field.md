---
component: "Yes / No Field"
ui_category: "Actions > Toggle"
source_product: "Paperform"
last_verified: "2026-09-23"
evidence_state: "source_reviewed"
---

# Component: Yes / No Field

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **First genuine 3-way comparison point in this library.** This record is directly compared against both Zoho Forms' equivalents ([[yes-no-toggle-field]], [[toggle-radio-switch]]) and Typeform's ([[yes-no-field]]) — all three Competitor Comparisons tables have been updated with a Paperform data point, not just this record's own table.

## Location
- **Product:** Paperform
- **Screen(s) it appears on:** Builder (question card, type "Yes / No", icon `flaky`) and the published respondent form. Tested on the live published form `https://xborqzxj.paperform.co` (Classic mode), question "Q1 Do you like forms?" (field key `8rbgg`, required).

## Structure
- **Builder-side config (drawer):** Question is required (on by default); Make question one of two columns; Question visibility logic; **Default answer** (a YES | NO segmented control); Question ID. **No option to relabel the two choices, add an icon, or switch to a toggle-switch visual style** — the labels are permanently "Yes"/"No".
- **Respondent-facing structure:** two equal-width raised buttons side by side (330×36px each at a 700px card), labeled **YES** and **NO** (uppercase), inside a `role="radiogroup"` container. No switch/toggle visual exists — it reads as a two-segment button bar.

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| YES button | Click | Selects Yes | `aria-checked=true` on YES, dark theme-Active fill; NO reverts to default; focus moves to YES | Same screen (or next screen if One-at-a-time mode — see [[respondent-runtime-guided-vs-standard]]) |
| NO button | Click | Selects No | Selection is exclusive — NO becomes checked/filled, YES reverts to default | Same screen |
| NO button, clicked again while already selected | Click | **No-op** | **Cannot be deselected by re-clicking** — the option stays checked | Same screen |
| Delete / Backspace / Escape while focused | Keypress | **No-op** | No keyboard way to clear an answer either — confirmed inert | Same screen |
| Reload after answering | Page reload | Resets UI | Both options show unselected in this session, even though a partial answer exists server-side (see Technical Data) — the partial answer was **not** restored to the UI on reload in this test | Same screen |
| Arrow Right/Down (focus on group) | Keypress | Moves focus, **does not select** | Focus moves to the other option, wrapping (Down from NO returns to YES) — this is a focus-only arrow model, **not** the standard WAI-ARIA radio pattern where arrows both move focus and change selection | Same screen |
| Space or Enter (option focused) | Keypress | Selects the focused option | Confirmed: focus-right then Enter selected NO | Same screen |
| Y / N letter keys | Keypress | **No-op** | Inert regardless of which option has focus — **no shortcut exists at all**, distinct from Typeform's equivalent shortcut which exists but is confirmed broken/inert (see Competitor Comparisons) | Same screen |

## Behavior & States
| State | Background | Text | Shadow | Class |
|---|---|---|---|---|
| Default (unselected) | `rgb(248,248,248)` | `rgb(51,51,51)` | `0 2px 6px -2px rgba(0,0,0,.5)` | `btn-raised YesNo__button btn-default` |
| Hover | unchanged | unchanged | deepens to `0 4px 14px -6px rgba(0,0,0,.8)` | unchanged |
| Keyboard focus | same as hover | — | `outline: none` (no distinct focus ring — hover shadow is the only focus cue) | unchanged |
| **Selected** | theme **Active** color (`#1b1b1c` in the tested theme) — **not hard-coded**, follows the theme token | white | deep shadow | `btn-primary` replaces `btn-default` |

- Typography: 13px, weight 400, Work Sans (theme primary font), `text-transform: uppercase`.
- **Tab model is fixed, not roving:** YES always carries `tabindex="0"` and NO always `tabindex="-1"`, **even when NO is the checked option** — the standard radio pattern would give the checked option `tabindex=0`. Shift+Tab out and back in returns focus to YES regardless of which option is actually selected.
- **Auto-advance in One-at-a-time mode:** picking an option immediately advances to the next screen (see [[respondent-runtime-guided-vs-standard]]).

## Rules & Validation
- Selection is exclusive and, once made, **cannot be cleared** via re-click, Delete/Backspace/Escape, or any observed keyboard path — the only way back to "no answer" found this pass was a full page reload (which resets the UI but does not clear the server-side partial answer).
- Value is serialized as the literal string `"Yes"` or `"No"`.

## Technical Data
> OBSERVATION, directly captured via browser DOM/React/network inspection, Claude browser extension session, 2026-09-23.

- **DOM/ARIA:**
```html
<div class="LiveField__container">
  <label class="LiveField__header" for="field-yesNo-8rbgg" id="field-label-yesNo-8rbgg">
    <div data-testid="liverichtext"> …read-only Draft.js editor with the question title… </div>
  </label>
  <div class="LiveField__answer">
    <div class="YesNo" role="radiogroup"
         aria-labelledby="field-label-yesNo-8rbgg field-description-yesNo-8rbgg "
         aria-invalid="false">
      <div tabindex="0"  class="btn-raised YesNo__button btn-default" role="radio" aria-checked="false">Yes</div>
      <div tabindex="-1" class="btn-raised YesNo__button btn-default" role="radio" aria-checked="false">No</div>
    </div>
  </div>
</div>
```
- **Confirmed ARIA pattern:** `role="radiogroup"` containing two `role="radio"` divs; `aria-checked` toggles `false`↔`true` on selection.
- **Confirmed accessibility defects, not just a style critique:**
  1. `<label for="field-yesNo-8rbgg">` references an id that **does not exist in the DOM** (`getElementById` → null) — the label has no real association; only the group's own `aria-labelledby` provides an accessible name.
  2. That same `aria-labelledby` also references `field-description-yesNo-8rbgg`, which isn't rendered at all when the question has no help text — a dangling id reference.
  3. Fixed (non-roving) `tabindex`, as noted in Behavior & States.
  4. `outline: none` removes the default focus ring with no replacement beyond the shared hover/focus shadow.
  5. The accessibility tree exposes the NO option with an **empty accessible name** in some states (read as "No label text" via Chrome's a11y tree), while YES is correctly named "Yes".
- **JS/framework:** fully custom — **zero native form elements** (`input`/`select`/`button`) anywhere in the field. Confirmed React 16.14 (`window.React.version`, legacy `__reactInternalInstance$…`/`__reactEventHandlers$…` expandos). Component chain: `YesNo < (anon) < LiveField < RequiresFeature < _class`. Each option div carries only `onClick`; all keyboard handling (`onKeyDown`/`onFocus`/`onBlur`) lives on the group-level `radiogroup` div.
- **Network:** no request fires at the moment of click. **~5.5s after a selection**, a debounced `PUT /api/v1/form/<formId>/partial` fires, carrying **every field** on the form with `value` set only on answered ones:
```json
{ "data": [ {"key":"8rbgg","value":"Yes"}, {"key":"3m1ce"}, {"key":"3ftmg"}, {"key":"dm15t"} ],
  "partialSubmissionId": "<25-char id>", "last_answered": "8rbgg" }
```
  Changing the answer sends another `partial` PUT with the new value. The **first** interaction on the form also fires `PUT …/event` with `{"event":"StartedSubmission", ...}`. **So the answer is not purely client-side until final submit** — it streams to the server as a partial submission on a debounce, even with "Automatic save and resume later" switched off in Form Behaviour. Final submit itself was not tested this pass.
- **CSS:** `transition: all 0.1s ease` per option — background, text color, and shadow cross-fade over 100ms on hover, focus, and selection. No scale, ripple, or checkmark animation.

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| Zoho Forms (see [[yes-no-toggle-field]], [[toggle-radio-switch]]) | Zoho's toggle-radio-switch pattern (styled radio pair) is closer in spirit to Paperform's button-pair than Zoho's own yes-no-toggle-field | Zoho's [[yes-no-toggle-field]] confirmed supports toggle-off/deselect — Paperform does not | Paperform's Y/N shortcut doesn't exist at all (vs. Zoho, where letter shortcuts aren't applicable/present either, per that record); Paperform has confirmed broken label-association and dangling ARIA description reference — not confirmed either way for Zoho's controls |
| Typeform (see [[yes-no-field]]) | Both are custom JS-driven `role="radiogroup"`/`role="radio"` implementations with `aria-checked`, both confirmed no-deselect-once-answered, both auto-advance in their respective conversational/guided modes | Typeform is built on Radix UI's headless primitive, giving it a roving-tabindex, WAI-ARIA-correct arrow-key model (arrows both move focus AND change selection) "for free" — Paperform's arrows are focus-only, not selection-changing, and its tabindex is fixed rather than roving | Both have a non-functional Y/N letter shortcut, but for different reasons: Typeform's shortcut exists and is advertised via a visible badge but fires successfully in only 1 of 6 trials (a flaky binding bug); Paperform has **no shortcut UI or behavior at all** — simpler but also a smaller feature surface, not a "better" implementation, just a different one |

## Best Observed Approach
- **RECOMMENDATION:** Typeform's implementation is the strongest of the three surveyed here specifically on keyboard/ARIA correctness — a headless-primitive foundation (Radix UI) gives it a standards-correct roving-tabindex arrow-key model that neither Zoho's nor Paperform's hand-rolled implementations match. Paperform's confirmed broken `label for` association and dangling `aria-labelledby` reference are concrete, fixable accessibility defects worth calling out as a genuine weak point, not just a stylistic difference. None of the three support deselecting a Yes/No answer once given — this is a shared limitation across all three products' Yes/No pattern, not a differentiator.

## Cross-Component Pattern Note
1. **Partial-submission streaming is a real, confirmed Paperform-wide persistence model**, not unique to this field — consistent with [[respondent-runtime-guided-vs-standard]]'s finding that `POST /api/v1/form/<id>/partial` fires repeatedly during guided-mode navigation. This field's own network trace (a debounced `partial` PUT ~5.5s after selection, carrying the full field set) is a second, independent confirmation of that same mechanism at the individual-field level.
2. **A genuinely new accessibility-defect pattern for this library:** every prior ARIA finding recorded here (Zoho's `aria-checked`-never-flips bug, its zero-ARIA icon-button groups) was about *missing* or *inert* ARIA. This is the first confirmed case of **actively broken ARIA wiring** — a `label for` pointing at a nonexistent id, and a dangling `aria-labelledby` reference to an element that was never rendered. Worth watching for in future Paperform captures as a possibly-systemic issue, not a one-off.

## Sources
- OBSERVATION: Live exploration + DOM/React/network inspection of the published Paperform form at `https://xborqzxj.paperform.co`, via Claude browser extension, 2026-09-23. Question "Q1 Do you like forms?" (key `8rbgg`). No final form submission was made; only partial in-progress answers were sent via the `/partial` endpoint.
