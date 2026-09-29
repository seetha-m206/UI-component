---
component: "Yes/No Field (Radix RadioGroup)"
ui_category: "Actions > Toggle"
source_product: "Typeform"
last_verified: "2026-09-17"
evidence_state: "source_reviewed"
---

# Component: Yes/No Field (Radix RadioGroup)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

**Note on rendering context:** the original trace (Sections below, 2026-09-16) was captured with the field rendered in Typeform's "Universal mode" builder output, which displays multiple questions stacked on one scrollable page (confirmed via the progress indicator still reading "Question 1 of 1" despite two fields being visible — Typeform's progress counter tracks logical steps, not visible fields). This is distinct from Typeform's classic single-question-per-screen conversational flow. **Follow-up trace (2026-09-17):** the open question this raised — whether the Y/N letter-key shortcuts are conversational-flow-only — has since been directly re-tested in a true one-question-per-screen conversational form (built fresh at `admin.typeform.com/form/kdfJZXfh/create`, live at `form.typeform.com/to/kdfJZXfh`, genuinely separate top-level pages rather than a Question Group). See the revised Rules & Validation and the new Technical Data addendum below for the resolved findings. **Further context (2026-09-18):** see [[typeform-form-mode-picker]] — "Universal mode" turns out not to be a binary toggle at all, but the default of a 4-option builder tooling-preset picker (Universal/Lead qualification/Knowledge quiz/Match quiz), none of which control single-question-vs-scrollable-page rendering. Single-question-per-screen is confirmed to be Typeform's baseline respondent rendering with no reachable alternative on a free-plan account — consistent with, and structurally explaining, why this field's behavior above did not vary by "mode."

## Location
- **Product:** Typeform
- **Screen(s) it appears on:** Form builder / published live form (traced on `form.typeform.com/to/{formId}` in "Universal mode" — a multi-question-per-page rendering; Typeform's true single-question conversational flow was not separately re-verified for this field).

## Structure
- Two full-width, stacked button-style options (not side-by-side): a small square "key" badge on the left (boxed single letter — "Y"/"N") plus the option label text.
- Built on a Radix UI–style ARIA radio group: `role="radiogroup"` wrapper, `role="radio"` on each `<button type="button">` — not native `<input type="radio">`.
- Screenshot: not captured this pass (see Sources — DOM/CSS/JS/network data pulled programmatically).

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| "Yes" or "No" button | Click (from neutral) | Radix RadioGroup internal handler | `aria-checked`/`data-state` flip to true/checked on the clicked option; the other stays unchecked with its faint default ring | Same screen |
| The already-selected option | Click again | Same handler | **No deselection occurs** — `aria-checked` stays `"true"`. A true hard radio group; there is no way to clear an answer by re-clicking (confirmed, not assumed) | Same screen |
| Focused option | Space key | Radix keyboard handler | Selects the focused-but-unselected option | Same screen |
| Radiogroup (focused) | Arrow Down/Up | Radix roving-tabindex handler | Moves focus between options **without** changing selection (standard ARIA radiogroup pattern) | Same screen |

## Behavior & States
- **Default (unselected):** near-white background (`rgba(250,250,250,0.6)`), a barely-visible 1px inset outline (`box-shadow: rgba(42,34,43,0.1) 0 0 0 1px`), black text, 8px border radius.
- **Selected:** background color does **not** change — the only visual change is the box-shadow, which switches to a solid, opaque 2px ring (`box-shadow: rgb(42,34,43) 0 0 0 2px`) plus a black border color. Selection reads purely as an outline/ring emphasis, not a fill change.
- **Focused-but-not-selected (keyboard):** a distinct visible focus ring appears, and the key-hint badge redraws as a small dark pill/tooltip-style badge ("Key N") rather than the flat boxed-letter style — focus and selection are visually distinguishable from each other.
- Disabled state: framework groundwork present (`aria-disabled="false"` on every option) but not exercised/observed in this trace.
- Error/loading/empty states: not observed.

## Rules & Validation
- Mutually exclusive, one-way selection: once answered, there is no built-in "clear answer" affordance — the only way to change the answer is to pick the other option, never back to "no answer."
- Letter-key shortcuts ("Y"/"N") are visually displayed on every option but **did not function** in the multi-question Universal-mode rendering originally tested (tested three ways: focus on the "No" radio + press "y"; focus blurred + press "y"; focus on page background + press "y" — consistent negative result each time).
  **Resolved, 2026-09-17 (re-tested in true conversational mode):** this is **not** conversational-flow-gated. The letter shortcuts were re-tested on a genuine one-question-per-screen form across six separate fresh-page-load trials, pressing "y" or "n" without clicking anything first, alternating which option was already selected. Result: the shortcut changed the selection in only **1 of 6** trials; in the other 5 it did nothing. Both `aria-checked`/`data-state` and the visual selection ring were checked each time, and a plain mouse click was confirmed to work reliably throughout (ruling out the field being generally broken or the page being unresponsive). **Conclusion: the Y/N letter-key shortcuts are broken/inert in general — not a Universal-mode-only or conversational-flow-only limitation.** The single success out of six attempts is most consistent with a flaky/racy event-binding bug (e.g. a keydown listener that is only sometimes attached) rather than a working, mode-gated feature.
- **Answer restoration on reload (2026-09-17 finding):** on reload, the field's answer is not always neutral — it's restored from a session-persisted partial response (consistent with the `start-submission` network behavior below). Reloading the live URL after answering "No" comes back with "No" already visually and programmatically selected (ring shown, `data-state="checked"`, no interaction needed), and likewise for "Yes." This is answer-restoration, not a true field-level default value — worth not confusing the two in future traces.

## Technical Data
> OBSERVATION, directly captured via DOM inspection, computed styles, network monitoring, and direct interaction (2026-09-16), Claude browser extension session on a live Typeform account/published form.

- **DOM:**
```html
<div role="radiogroup" aria-required="false" dir="ltr" tabindex="0">
  <button type="button" role="radio" aria-checked="false" data-state="unchecked"
          aria-disabled="false" tabindex="-1" data-radix-collection-item value="[uuid]-yes">
    <div><div aria-hidden="true"><span class="...choice-key-inner">Y</span></div></div>
    ...label content ("Yes")...
  </button>
  <button type="button" role="radio" aria-checked="false" data-state="unchecked" ...>
    ...("No")...
  </button>
</div>
```
  Group wrapper carries `tabindex="0"` (the tab stop); each individual radio carries `tabindex="-1"` — the standard WAI-ARIA "roving tabindex" pattern for a composite radio widget. State is dual-encoded: `aria-checked="true"/"false"` (ARIA) and `data-state="checked"/"unchecked"` (Radix's own styling hook), kept in sync. The key-hint letter is rendered inside an `aria-hidden="true"` wrapper — decorative for sighted/keyboard users, not exposed to the accessibility tree as part of the option's name. Class names follow a styled-components pattern (`sc-xxxxx` hashed classes) — a CSS-in-JS build, not static utility classes.

- **JavaScript:** Custom JS-driven, built on **Radix UI's headless `RadioGroup` primitive** (`data-radix-collection-item` is Radix's internal collection-registration marker), not a bespoke widget. Manual ARIA state management (`aria-checked`/`data-state` kept in lockstep) rather than a native input's `checked` property.

- **Network:**
  - Page load: only analytics/telemetry (`POST tracking.typeform.com/v1/track`, 204; Datadog RUM beacon, 202) — no form-data submission call at load.
  - **First answer given on the form (any field):** a one-time `POST https://form.typeform.com/forms/{formId}/start-submission` (200 OK) — initializes a partial-submission record server-side as soon as the respondent provides their first answer.
  - Subsequent selection changes within the same radiogroup (Yes → No → No-again): **no additional data-saving network calls**, only the background tracking ping. Per-answer values are likely batched and sent on question-advance or final submit, not per-click (inferred from this specific sequence, not from source — flagged for re-verification against a true single-question flow).

- **Response:** N/A — `start-submission`'s response body not itemized this pass.

- **State change:** Answer values held in client/component state; the one observed server touchpoint (`start-submission`) is a session initializer, not a per-answer autosave.

- **CSS:** Neutral/monochrome — near-white background at all times, black text, black-ish ring color (`rgb(42,34,43)`, a dark near-black plum, not pure `#000`). No accent/brand color used for the checked state in the default theme — distinction is purely ring-weight/opacity, not hue. 8px border-radius, ~6px/10px padding, full-width stacked buttons.

- **Animation/transition:** `background-color 0.25s, color 0.25s, border-color 0.25s, box-shadow 0.25s`, all using `cubic-bezier(0.215, 0.61, 0.355, 1)` easing (an ease-out-family curve). A **0.25s eased box-shadow transition** — not an instant class-swap, not a fill/color-based animation.

## Cross-Component Pattern Note
- **OBSERVATION:** this control mirrors, in spirit, Zoho's custom-JS approach for its equivalent controls ([[yes-no-toggle-field]], [[toggle-radio-switch]]), but Typeform's specific implementation is built on the **Radix UI headless-component library** rather than a bespoke widget — a meaningfully different engineering choice: Radix supplies the keyboard/focus/ARIA plumbing "for free," rather than Typeform hand-rolling it (as Zoho does for its equivalents).

## Competitor Comparisons
| Aspect | Zoho Forms (existing) | Typeform (this trace) | Paperform ([[paperform-yes-no-field]]) |
|---|---|---|---|
| Markup | Custom JS-driven (non-native) | Custom JS-driven, built on Radix UI's headless `RadioGroup` primitive (`<button role="radio">`, `data-radix-collection-item`) | Custom JS-driven, React 16.14, hand-rolled (no headless library), `div[role=radio]`×2 in `div[role=radiogroup]` |
| ARIA role | `role="radio"` on `<a>` tags (Yes/No), `role="radio"` grouped visually but not via ARIA (toggle-radio-switch) | Confirmed `role="radiogroup"` wrapper + `role="radio"` buttons, with `aria-checked` and a parallel `data-state` attribute kept in sync | Confirmed `role="radiogroup"` + `role="radio"`, `aria-checked` toggles correctly — but `label for` points at a nonexistent id and `aria-labelledby` references an unrendered description id: **confirmed broken ARIA wiring**, a new defect class not seen in either sibling |
| Tab structure | Not confirmed for Zoho's controls | Roving tabindex: group wrapper is the tab stop (`tabindex="0"`), individual options are `tabindex="-1"` and reached via arrow keys, not Tab | **Fixed, not roving:** Yes is always `tabindex="0"` and No always `tabindex="-1"`, even when No is the checked option; Shift+Tab back always returns to Yes regardless of selection |
| Deselect once answered? | [[yes-no-toggle-field]]: yes (toggle-off confirmed); [[toggle-radio-switch]]: not confirmed either way | **Confirmed: no.** Clicking an already-selected option is a no-op; no way to clear a Yes/No answer once given — a genuine, deliberate product difference from Zoho's Yes/No field | **Confirmed: no**, same as Typeform — re-click, Delete, Backspace, and Escape are all inert; only a full page reload resets the UI (server-side partial answer is unaffected) |
| Selected-state visual | Three variants across Zoho's controls (instant class-swap / 0.2s eased transform / 0.3s linear fill) | Neither a class-swap nor a fill: a **0.25s eased box-shadow/border-color transition** (ring emphasis, no background color change) | A **fill**, following the theme's Active color token (not hard-coded) + white text + deepened shadow, with a 0.1s `all ease` cross-fade — closer to Zoho's fill-based variants than to Typeform's ring-emphasis approach |
| Keyboard: arrow-key nav | Assumed/added as an accessibility improvement in reconstructions, not observed in Zoho's source | **Confirmed:** Up/Down arrow keys move focus between options without changing selection | **Confirmed, same focus-only model:** Right/Down and Left/Up move focus (wrapping) without selecting — matches Typeform's behavior, not the WAI-ARIA "arrows both move and select" pattern either |
| Keyboard: select focused option | — | **Confirmed:** Space selects the focused-but-unselected option | **Confirmed:** both Space and Enter select the focused option |
| Keyboard: single-letter shortcuts | Not applicable / not present in Zoho's control | **Confirmed broken/inert in general** — not a Universal-mode artifact. Re-tested on a genuine one-question-per-screen conversational form across 6 fresh-load trials (pressing "y"/"n" with no prior click): the shortcut worked in only 1 of 6 attempts, with mouse clicks working reliably every time in the same trials. Typeform visually advertises the Y/N letter-key badges on every option in both render modes, but the shortcut itself is unreliable/effectively non-functional regardless of mode — most consistent with a flaky event-binding bug, not a mode-gated feature | **No shortcut exists at all** — a meaningfully different finding from Typeform's: Paperform never advertises or attempts a Y/N shortcut, so there's no broken-feature gap, just an absent one |
| Progress indicator accuracy | — | The "Question 1 of 1" bug seen in Universal mode **does not reproduce in true conversational mode** — confirmed accurate "Question N of M" values (accessibility tree only; no visible on-screen numeral) for a genuine 2-page form | Not directly tested for this field; see [[respondent-runtime-guided-vs-standard]] for Paperform's guided-mode progress bar (a percentage-width bar, not a numeric counter, in the tested theme) |
| Question-to-question transition | — | A **vertical slide** (outgoing question visibly shifts out while the incoming one slides up into place), not an instant cut or a fade — consistent with the up/down-arrow/chevron navigation model | Selecting an answer **auto-advances** in Guided mode (see [[respondent-runtime-guided-vs-standard]]); the transition animation itself wasn't captured in this field-level pass |
| Backend save timing | Zoho defers persistence to an explicit page-level Save; toggle clicks themselves never call the network directly | A one-time `start-submission` call fires on the respondent's *first* answer of any kind (session/partial-response initializer), not per-click — different mechanism, similar "not every interaction hits the network" spirit. The answer itself also persists across page reloads within the same respondent session (restored from the partial-response record) — worth not mistaking for a true field-level default value | A debounced `PUT .../partial` fires **~5.5s after each selection change** (not just once per session) carrying the full field set; the first interaction on the form also fires a `StartedSubmission` event, functionally similar to Typeform's `start-submission` call. Unlike Typeform, the answer was **not** restored to the UI on a page reload in this test, despite the server-side partial record existing |

## Best Observed Approach
- On the specific dimension of engineering approach, Typeform's use of a headless accessible-component library (Radix UI) for its choice-field family is a stronger foundation than Zoho's fully bespoke, independently-engineered controls (at least 4 distinct toggle implementations confirmed across Zoho Forms) — it guarantees consistent keyboard/ARIA behavior "for free" rather than requiring each field type to reinvent it. On the specific "can you clear an answer" UX question, this is a genuine tradeoff rather than a clear win either way — Zoho's [[yes-no-toggle-field]] deliberately supports toggle-off, which Typeform's Yes/No does not.

### 2026-09-17 addendum — true conversational-mode follow-up trace
> OBSERVATION, directly captured, Claude browser extension session, 2026-09-17.

Built a fresh, genuine one-question-per-screen form specifically to close the Universal-mode gap above: two separate top-level pages (not a Question Group) — page 1 the same Yes/No "Do you like pizza?" field, page 2 a Short Text "What is your favorite topping?" — published and tested live at `form.typeform.com/to/kdfJZXfh`. One UI nuance hit while building this: clicking "+ Add content" *under* an existing page entry in the left Pages sidebar can nest the new field into the *same* page as a "Question Group," whereas the "+ Add content" button in the top toolbar reliably creates a new, separate top-level page — the sidebar and toolbar versions of the same-looking control are not equivalent.

- **Keyboard shortcut resolution:** see the updated Rules & Validation above — confirmed broken/inert in general, not conversational-flow-gated.
- **Progress indicator — confirmed fixed in this mode.** The Universal-mode bug (progress copy stuck at "Question 1 of 1" regardless of visible field count) does **not** reproduce here: the accessibility tree correctly reports `aria-label="Question 1 of 2"` on page 1 and `aria-label="Question 2 of 2"` on page 2. As in the original trace, there is no separate on-screen numeral counter visible to sighted users — the visible affordance is a thin progress bar at the very top of the viewport (`progressbar "Form progress"`) plus a small numbered badge ("1", "2") beside each question's own title, with the "N of M" phrasing existing only in the accessibility tree.
- **Advancing between questions:** clicking the page's "OK Next question" button (present on every non-final page; the final page shows "Submit"/"Submit answers" instead) triggers a **vertical slide transition**, not an instant cut and not a plain fade. The outgoing question's content (its choices, "OK" button) is still visible mid-transition, shifted down/out of its resting position, while the incoming question slides up into place — consistent with the up/down chevron controls that appear bottom-right once past the first question ("Navigate to previous question" / "Navigate to next question"), which frame the form as a vertical carousel of pages rather than a horizontal slideshow. No abrupt flash or layout jump was observed; the transition reads as smooth/eased, in keeping with the 0.25s eased transitions already documented elsewhere on this field.

## Sources
- OBSERVATION: Live trace on a real Typeform account (admin.typeform.com), form builder + published live form (`form.typeform.com/to/{formId}`), via Claude browser extension, 2026-09-16. Traced via DOM inspection, computed styles, network monitoring, and direct interaction (not just visual observation). Captured in Typeform's "Universal mode" multi-question-per-page builder output — distinct from Typeform's true single-question conversational flow; findings likely mode-dependent are flagged explicitly above.
- OBSERVATION: Follow-up trace, 2026-09-17, on a second, purpose-built true-conversational-mode form (`form.typeform.com/to/kdfJZXfh`), to resolve the Universal-mode keyboard-shortcut question — see the addendum above.
