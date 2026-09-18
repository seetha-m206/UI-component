---
component: 'Card-List Selector (Icon + Title + Description)'
ui_category: 'Actions/Controls > Card selector'
source_product: 'Zoho Forms'
last_verified: '2026-09-17'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Icon+title+description card pattern, deliberately compared across 3 screens — confirmed to be 3 independently-built lookalikes, not one shared component. See new-form-chooser for a deeper technical capture of two of these instances.'
---

# Component: Card-List Selector (Icon + Title + Description)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **Note:** this record documents a visual _pattern_ found in three separately-implemented locations, deliberately compared side by side — the conclusion (three independent implementations, not one shared component) is itself the primary finding, not incidental to it.

## Location

- **Product:** Zoho Forms
- **Screen(s) it appears on:** (1) Dashboard → "+ New Form" → "Choose how to create your form" (7 cards, grid layout) — see [[new-form-chooser]] for a full deep-dive capture of this instance and its sub-dialog; (2) Form Share screen's left sidebar (5 cards, vertical list — Share With / Embed / Email Campaigns / UTM Tracking / Google Tag Manager & Custom Tracking); (3) bonus third instance — "Blank Form" → "Create From Scratch" step's form-type picker (Standard / Spotlight / Card) — also deep-dived in [[new-form-chooser]].

## Structure

- All three share the same superficial layout: an icon, a title, and a one-line description, in a clickable card/row.
- **New-Form cards:** `<ul>` (no class) of `<li data-zf-click="createBlankForm();">` — icon as `<div class="frmCreationListIcon blankFrm">`, title as bare `<span>`, description as `<p>`.
- **Share cards:** `<div class="shareTabLinks">` of `<a class="select" onclick="showPublicShareOptions(this);" elname="shareWithMainMenu">` — icon as `<div class="shareMenuIcon menushareIcon">`, title+description wrapped together in `<div class="shareMenuInCont"><h4>...</h4><p>...</p></div>`.
- **Form-type cards (bonus):** `<div class="frmCrteList">` wrapped by `div.standardFrmDiv.select` — icon nested two levels (`div.frmListContIcon > div.frmIconDiv`), title as `<span>`, description as `<em>` (not `<p>`). No click handler found on the card or immediate parents at all.

## Actions

| Element                               | User Action | Function                                                                                                                                                                                                        | Result                                                                                                                   | Destination screen/state           |
| ------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------- |
| New-Form `<li>`                       | Click       | `data-zf-click` attribute → `createBlankForm()` (standalone) or `ZFForm.manager.chooseFrom('<mode>')` (all other 6 cards: `ziaForm`, no-arg for Templates, `integForm`, `pdfToForm`, `imgToForm`, `importForm`) | Navigates into the corresponding creation flow (only "Blank Form" traced through to its next step, the form-type picker) | New screen/modal per card          |
| Share `<a>`                           | Click       | Plain `onclick` → one of 5 independent global functions (`showPublicShareOptions`, `showEmbedOptions`, `showCampaignOptions`, `showTrackingEntries`, `showEventTracking`)                                       | Toggles `class="select"` from the previously active card to the clicked one; swaps the content panels beside the sidebar | Same screen, content panel swapped |
| Form-type `<div class="frmCrteList">` | Click       | _(handler not located — no `onclick`/`data-zf-click` on card or immediate parents; presumably delegated higher up)_                                                                                             | Not traced — "Create Form" was never clicked to avoid actually creating a form in the account                            | Not observed                       |

## Behavior & States

- New-Form card default: `box-shadow: rgba(220,220,220,0.12) 0px 1px 2px 0px; border: 0.8px solid rgb(221,225,255); transition: 0.2s linear; cursor:pointer`. **No computed-style difference found between hovered and non-hovered state** on this element via direct `matches(':hover')` before/after comparison.
- Share card default (unselected): `background: rgb(255,255,255); border: 0.8px solid rgb(232,238,246); transition: 0.3s`. Also **no measurable hover-state difference** found.
- Share card selected (`class="select"`): `background: rgb(250,255,254); border: 0.8px solid rgb(164,219,208)` — a distinct light-green tint, applied via the `select` class rather than any `:hover` pseudo-class. This is the one confirmed visual-state mechanism across all three: **selection via class toggle**, not hover styling.
- Form-type card: parent carries `.select` when active (same convention name as the Share card's class, but independently applied given the differing DOM structure).

## Rules & Validation

- All three card sets render their icons via **CSS sprite sheets** (`background-image` + `background-position` on a plain `<div>`, not inline SVG or `<img>`) — the same general _technique_, but from **two separate sprite asset files**: `new-form-sprite....svg` (72×80px cells, `background-size:745%`) for New-Form cards, `ShareMenuSprite....svg` (26×26px cells, `background-size:140px`) for Share cards. Shared technique, independently produced assets — not shared files.
- Both declared card sets have a CSS `transition` property (0.2s linear vs. 0.3s, **different durations/easing** — reinforcing separate authorship), but in both cases it could not be tied to any observable hover-state change; most plausibly it exists to smooth the `select`-class toggle on click rather than a mouse-hover effect (though a hover effect on an untested property, e.g. a box-shadow only visible under a real cursor-driven `:hover` render rather than `getComputedStyle`, can't be fully ruled out).

## Technical Data

> OBSERVATION, directly captured via browser DOM/JS/network inspection (2026-09-16), with a deliberate side-by-side comparison across three separate screens and a confirmed-real check (`getBoundingClientRect()`/visibility) on all three card sets before extraction.

- **DOM:** see Structure above for all three variants.

- **JavaScript:** **Three genuinely distinct handler-wiring conventions** found across the three screens:
  1. New-Form cards → custom `data-zf-click` attribute + mixed `ZFForm.manager.chooseFrom()` / standalone `createBlankForm()`.
  2. Share cards → plain `onclick` attribute + five independent global functions with **no shared namespace prefix** at all (not even a common module object).
  3. Form-type cards → **no attribute-level handler whatsoever** on the card or its immediate parents — presumably event delegation on an ancestor container not located this pass.

- **Network:** **Zero requests** for hovering, selecting/switching cards on the Share screen (confirmed via an active XHR/fetch wrapper across a click-to-Embed transition), and for opening the "Blank Form" → "Create From Scratch" second-step modal. All rendered from data already present in the page — no lazy-loading round trip observed for any card, including the Embed panel's pre-built code snippets.

- **Response:** N/A — no network activity.

- **State change:** Purely client-side class toggling (`select`) in all cases tested; "Create Form" itself was never clicked, so the actual form-creation network/navigation behavior remains uncaptured.

- **CSS:** see Behavior & States above for full computed values per card set.

- **Animation/transition:** Both measurable card sets declare a `transition` property but with **different durations** (0.2s linear vs. 0.3s) and **no observable effect tied to hover** in either — a `matches(':hover')` before/after diff produced identical computed styles both times. Flagged as inconclusive rather than "no hover effect exists" (see second-pass flag below).

## Second-Pass Flags

- No visible/measurable hover-state CSS difference was found on either measurable card set despite both declaring `transition` properties — worth a targeted screenshot pixel-diff or a broader CSSOM rule dump (by tag/structure rather than class name, since neither `:hover` class search matched a rule). **Still open for the New-Form (top-level) cards** — a 2026-09-17 deep-dive pass ([[new-form-chooser]]) did not re-run this test. **Resolved for the form-type cards** — see below.
- ~~The form-type card selector's (`frmCrteList`) actual click/selection handler was not traced.~~ **Partially resolved 2026-09-17** — [[new-form-chooser]] confirmed the _selection state change itself_ is real and functional (a direct click-to-select test observed the border/background animate over the declared `0.2s linear` duration), though the underlying JS handler name/binding mechanism still wasn't located.
- "Create Form" was never clicked (to avoid creating a real form in the account) — the true network/navigation behavior of completing form creation from any of these flows remains uncaptured. Still true as of 2026-09-17.
- "More Share Options" opening in a new tab (rather than in-place navigation) was noted but not independently deep-dived.
- **New (2026-09-17):** [[new-form-chooser]] captured the "Create From Scratch" sub-dialog's video-preview swap mechanics in full (HTTP 206 progressive streaming, one `<video>` element per form type) — this was not part of the original capture here and is a genuinely new contribution, cross-linked from this record.

## Cross-Component Pattern Note

- **OBSERVATION — verdict:** These are **two (arguably three) separately-built implementations, not one shared component.** They share a superficial visual language (icon-over-title-over-description card, sprite-based icons, subtle border/shadow, single "currently selected" class toggle for state) but differ in root tag (`<li>` vs. `<a>` vs. `<div>`), click-binding mechanism (`data-zf-click` vs. `onclick` vs. undetected delegation), handler namespace (`ZFForm.manager` vs. unnamespaced globals vs. unknown), icon sprite sheet, and transition timing.
- **This refines, rather than contradicts, the [[theme-color-picker-gradient]] finding of a shared `z*`-prefixed Zoho design-system layer**: that shared layer evidently covers some components (color picker, slider) but not this card-list pattern, which every feature team re-implemented independently. The emerging picture across this session: Zoho Forms has **at least one real shared UI-kit underneath**, used inconsistently, alongside a larger body of per-feature, independently-authored "looks the same, isn't the same" components — this card-list pattern being the clearest, most deliberately-tested example of the latter.

## Competitor Comparisons

| Competitor                    | Same component implementation | Strengths | Weaknesses |
| ----------------------------- | ----------------------------- | --------- | ---------- |
| _(TODO — not yet researched)_ |                               |           |            |

## Best Observed Approach

- TODO — needs competitor research; internally, none of the three implementations stands out as clearly better engineered than the others — this is more a code-hygiene/consistency finding than a UX-quality one.

## Sources

- OBSERVATION: Live exploration of Zoho Forms (forms.zoho.in), Dashboard → New Form chooser, Share screen sidebar, and Create From Scratch form-type picker, via Claude browser extension, 2026-09-16. DOM/CSS/JS/network data retrieved via the page's own JS context, with `getBoundingClientRect()`/visibility verification on all three card sets and a direct `matches(':hover')` before/after CSS comparison.
