---
component: "Rating Field (Icon-Based, Configurable Style)"
ui_category: "Forms > Form"
source_product: "Google Forms"
last_verified: "2026-09-24"
evidence_state: "source_reviewed"
---

# Component: Rating Field (Icon-Based, Configurable Style)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **The library's first genuine 4-way component comparison**, alongside [[rating-star-field]] (Zoho), [[rating-field]] (Typeform), and [[paperform-rating-field]] (Paperform). All four files' Competitor Comparisons tables now carry a Google Forms column/row.

## Location
- **Product:** Google Forms
- **Screen(s) it appears on:** Builder question-type dropdown → Rating (8th of 12 types), and the published `/viewform` respondent page. Tested on the reused test form (`1jXL4eFIxzAtW7-7NDo7v5EWGb28DmnkfyWijfmQPPeg`), question "Rate your experience," star icon, max 5.

## Structure
- Two inline dropdowns appear once Rating is selected: **Max value** (3–10, default 5) and **Icon style** (a 3-item picker — star/gold, heart/red, thumbs-up/blue). The builder's own question card renders a live, already-interactive icon row directly under the dropdowns, not a static placeholder.
- Respondent view: N outlined icons in a row, each printed with its number above it, no `role="radiogroup"` or group-level accessible name anywhere in the ancestor chain (see Technical Data).

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| Icon N | Hover, nothing selected yet | Attempted preview | **No hover-preview-fill exists.** Confirmed two ways: hovering icon 4 with nothing selected shows only a faint circular grey hover-highlight behind the icon, no color change to icons 1–4; hovering icon 5 with 2 already selected leaves icons 1–2 filled and icon 5 unfilled — no preview extension either direction | Same screen |
| Icon 3 | Click | Selects | All of stars 1, 2, and 3 report `aria-checked="true"` simultaneously — "fill semantics" (checked = at-or-below the selected value), not classic single-exclusive-radio semantics, even though the role used is `radio` | Same screen |
| Icon 4 (already selected) | Click again | **Deselects** | A "Clear selection" text link appears next to the row on first select; clicking the selected icon again empties all icons back to outline and removes the link; confirmed via a follow-up ARIA read — all 5 report `aria-checked="false"` | Same screen |
| Icon (selected) | Keyboard Space | Deselects | Same toggle-off behavior as the mouse click, confirmed from the keyboard | Same screen |
| Left/Right arrow keys | Keypress | Moves the value | Commits immediately, no separate Enter/Space needed; wraps around (Left from "1" wraps to "5" and immediately fills all 5) | Same screen |
| Enter (on a selected icon) | Keypress | No-op | Leaves the rating unchanged — no deselect, no re-fill, no observed side effect | Same screen |

## Behavior & States
- **`aria-checked` flips correctly, but with non-exclusive "fill" semantics** — every icon from 1 up to the selected value reports `true` simultaneously, not just the clicked one. A caveat: reading `aria-checked` in the same synchronous tick as an arrow-key press occasionally returned the pre-update value (a render-timing lag, not a "never updates" bug) — re-reading a moment later always showed the correct, settled state.
- **Deselect confirmed working** on both mouse click and keyboard Space, matching Typeform's and Google Forms' own no-op-vs-deselect split is the opposite of what's true here — see the Actions table.
- **Keyboard support is full, not partial** — confirmed by actually driving Tab/Shift+Tab/Arrow/Space/Enter, not just inspecting static `tabindex`. One implementation nuance: the icons carry **no `tabindex` attribute at all** in the never-touched initial markup — it's added dynamically (roving-tabindex style) only once the widget has been focused or a value has been set. A static DOM dump taken before any interaction would wrongly suggest "not keyboard-reachable"; the live Tab-key test is what actually settles it. Tab reaches the whole N-icon group as a single stop, the same as a native radio group.

## Rules & Validation
- **No `role="radiogroup"` anywhere in the ancestor chain, and no group-level `aria-label`/`aria-labelledby`/`role="group"` at any of the 8+ ancestor levels checked.** Each icon's own accessible name is just the bare number (`aria-label="1"`…`"5"`), with no `aria-labelledby`/`aria-describedby` tying it back to the question text, no `aria-posinset`/`aria-setsize`, and no document-wide reference from anything to the question heading's id. Practically: a screen reader announces "1, radio button," not "Rate your experience, 1 of 5, radio button" — zero indication of what's being rated, how many options exist, or what kind. This is arguably a step **worse** than a merely-unnamed group — here even the individual controls don't carry the question's name.

## Technical Data
> OBSERVATION, directly captured via injected JavaScript (`getComputedStyle`, `elementFromPoint`, attribute inspection) while driving real mouse/keyboard input on the live `/viewform` page, Claude browser extension session, 2026-09-24.

- **DOM/ARIA:** each icon is a `<div role="radio">` (class `p8oyLd`), five per question, laid out flat with no grouping role anywhere.
- **CSS fill mechanism — icon-swap via a shared external SVG sprite, not a live recolor:** `::before { content: url("https://ssl.gstatic.com/docs/forms/qp_sprite234.svg") }`, the same sprite file referenced for both filled and unfilled states. The filled/unfilled state is picked by which CSS class is on the container (two different generated class suffixes on an otherwise identical wrapper), cropping/positioning the shared sprite to a different fixed region per state. Not SVG `fill`, not an opacity cross-fade, not a `background-image` swap — all of those came back empty on direct inspection; `color`/`fill` computed styles stayed a flat dark grey regardless of filled/unfilled state, which was the confusing part until the real paint layer (the `::before` sprite crop) was found. **No transition** — `transition-duration: 0s` on both variants; the swap is instantaneous, consistent with a sprite-region swap rather than an animatable property change.
- Not independently confirmed this pass: whether heart/thumbs-up use the identical sprite-swap mechanism (highly likely, same component, but only star was inspected at the CSS/DOM level).

## Competitor Comparisons
| Capability | Zoho Forms (see [[rating-star-field]]) | Typeform (see [[rating-field]]) | Paperform (see [[paperform-rating-field]]) | Google Forms (this record) |
|---|---|---|---|---|
| Icon styles / scale range | Fixed 5-star only | Configurable 1–10; 17-icon picker (star is just the default) | Configurable 1–10; 5 icon choices (Heart/Star/Thumbs up/Users/Custom) | **Configurable 3–10; 3 icon choices (star/heart/thumbs-up)** — narrower range than Typeform/Paperform, but the only one of the four with a thumbs-up option confirmed alongside star/heart |
| Hover-preview-fill | Inconclusive — deliberately not reconstructed for lack of evidence | **Confirmed working** — 0.2-alpha preview tint reverting on mouse-out | **Confirmed working**, `max(hovered, selected)` rule | **Confirmed absent** — hovering never previews a fill, with or without an existing value. The only one of the four products with a clean, direct "no" on this question |
| Radiogroup accessible name | Not applicable (no `radiogroup` role used) | Not confirmed either way in that record | Confirmed **none** — no `aria-labelledby`/`aria-label` at all | **Confirmed none** — same gap as Paperform, but here the *individual icons* also carry no reference to the question text, arguably one step worse than Paperform's "group unnamed but options otherwise fine" |
| `aria-checked` behavior on selection | **Confirmed bug: never flips to `true`** | **Confirmed correct** — exactly one option `true` at a time | **Confirmed correct** — exactly one option `true` at a time | **Flips, but with non-exclusive "fill" semantics** — every icon 1-through-N reports `true` simultaneously on selecting N, a fourth distinct pattern (not "never flips," not "exactly one true") |
| Click/press same value twice | Not confirmed either way | **Confirmed: no deselect** | **Confirmed: no deselect** | **Confirmed: deselects** — the only one of the four with a working toggle-off, on both mouse and keyboard (Space) |
| CSS fill mechanism | SVG `fill`/`stroke` swap with a genuine `0.3s linear` CSS transition | Inline `<svg>` `fill` on a `<path>`, `0.25s` eased transition | Two-stacked-icon opacity cross-fade, `0.25s` | **Icon-swap via a shared external SVG sprite** (`::before{content:url(...)}`), `transition-duration: 0s` — instant, no animation; a fifth distinct fill mechanism across the four products |
| Keyboard support | Not confirmed either way | Radix-based, implies real operability (not independently re-tested for Rating specifically) | **Confirmed completely keyboard-inaccessible** — no tabindex, no keydown handlers, Tab skips the field entirely | **Confirmed full support** — single Tab stop for the group, Left/Right move+commit with wraparound, Space deselects, Enter is a no-op. The strongest keyboard story of the four, though `tabindex` is only added dynamically on first interaction, not present in the static initial markup |

## Best Observed Approach
- **RECOMMENDATION, now genuinely 4-way:** no single product wins across every dimension. Google Forms has the strongest confirmed keyboard story (full Tab/Arrow/Space support, wraparound) and the only confirmed working deselect, but is the only one of the four with zero hover-preview and the only one where even individual options carry no reference to the question being rated — arguably the most severe naming gap of the four, worse than Paperform's unnamed-group-but-named-options pattern. Typeform and Paperform remain tied as the strongest on the visual/interaction dimension (working hover-preview, `aria-checked` semantics that at least resolve to a single correct value), while Zoho's confirmed `aria-checked` bug and Google's non-exclusive "fill" semantics are two different, non-overlapping ways of getting that specific ARIA attribute wrong. No product is best-practice-complete across icon-rating accessibility as documented in this library so far.

## Cross-Component Pattern Note
1. **A fourth and fifth distinct `aria-checked` behavior pattern now confirmed across the four products' rating fields** — Zoho (never flips), Typeform/Paperform (flips to exactly one true value), Google Forms (flips, but marks every icon up to the selected value `true` simultaneously) — worth treating "does `aria-checked` behave correctly" as a multi-way question, not a binary pass/fail, on any future icon-group component capture.
2. **Google Forms' dynamically-added `tabindex` (absent from the static initial markup, added only on first focus/interaction) is a capture-methodology lesson worth generalizing**: a static DOM dump alone would have wrongly concluded this field is not keyboard-reachable. Any future accessibility claim in this library should be verified by actually driving Tab/Arrow/Space/Enter, not by reading `tabindex` presence in an untouched page load.

## Sources
- OBSERVATION: Live, logged-in exploration of Google Forms, via Claude browser extension, 2026-09-24. Drove the live `/viewform` respondent page with real mouse clicks, hovers, and keyboard input while reading back live DOM/ARIA/CSS state via injected JavaScript, rather than relying on the visual render alone. This pass's own session had no access to the rest of this Research-Library, so the three sibling files' specific prior findings (Zoho's `aria-checked` bug, Typeform's correct ARIA, Paperform's lack of an accessible name and zero keyboard support) were carried through from the task brief as given context, not independently re-verified in that session — they are, however, independently confirmed in this library's own existing records for [[rating-star-field]], [[rating-field]], and [[paperform-rating-field]], read directly when filing this record and merging the four-way comparison above.
