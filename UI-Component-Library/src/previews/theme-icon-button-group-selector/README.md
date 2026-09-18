# Theme Icon-Button Group Selector — reconstructed preview

See
`Research-Library/04-Component-Library/zoho-forms/theme-icon-button-group-selector.md`
for the full research record this is built from. Follows the folder
contract, registry format, evidence labeling, and state-control conventions
established by `yes-no-toggle-field/` and `rating-star-field/` — no changes
to that shared architecture were needed for this component.

## Evidence used, in priority order

1. **Authorized Zoho HTML/CSS export** — not available, same as
   `yes-no-toggle-field` and `rating-star-field`. No such export exists
   anywhere in this repository; this priority tier could not be used.
2. **Captured DOM/CSS/JS in the record's Technical Data section** — the
   primary source for this reconstruction:
   - The shared `setThemesStyles(themePropName, isInit, propLi)` engine: four
     distinct per-group `onclick` entry points
     (`changeLiveFormBannerLayout`, `changeFormContLayoutStyle`,
     `changeHeaderAlignment`, `changeFormHdrLayoutStyle`) were confirmed by
     source inspection to be thin wrappers that all delegate to this one
     shared selection-state engine — a `.selected`-class swap between
     siblings, not a native radio/checkbox grouping mechanism.
   - The CSS values, confirmed **byte-for-byte identical** across every
     group checked (Form Layout, Container Style, Text Alignment):
     `unselected: border: 0.8px solid rgba(255,255,255,0.05); box-shadow: none;`
     and
     `selected: border: 0.8px solid rgb(36,166,138); box-shadow: rgb(164,219,208) 0px 0px 3px 0px;`,
     with `transition: 0.2s linear` on both states.
   - The two documented visual sub-styles: large ~80×80px image-preview
     tiles with a hover tooltip (Form Layout / Container Style / Header
     Style tabs) and compact ~35×35px icon-only buttons with no tooltip
     observed (Text Alignment tab) — reproduced here as the `variant` prop
     (`'tile' | 'icon'`).
   - Zero network activity confirmed via `fetch`/`XMLHttpRequest` hooks —
     this reconstruction makes no network calls either.
3. **Screenshots and documented behavior** — no screenshot was captured in
   the source record ("Screenshot: not captured this pass"); the
   Behavior & States and Actions table descriptions were used to confirm
   structure and state naming (default = pre-selected option matching the
   current theme property; selected = teal border/glow; hover = tooltip on
   tile variant only).
4. **Assumptions, clearly flagged** — used only where evidence was
   incomplete:
   - Exact tile pixel dimensions are documented as "~80×80px" / "~35×35px"
     in the record, not exact values; reproduced here as fixed 80px / 35px
     squares.
   - Disabled-state styling was not observed in the source
     ("Disabled state: not observed"); a conventional reduced-opacity
     treatment is used here, consistent with the other two previews in this
     product.
   - Responsive/breakpoint behavior was not observed (the Theme editor's
     left-config-panel width was fixed in the tested session); wrapping the
     group and shrinking tiles slightly at narrow widths is a reasonable
     assumption for a config-panel control, not an observed Zoho breakpoint.
   - Icon artwork itself (the mock-up glyphs shown inside each tile) was not
     captured/exported — only structure and CSS were. Synthetic placeholder
     SVG shapes are used in `fixtures.ts`; they do not attempt to reproduce
     Zoho's actual icon art.
   - Keyboard interaction (arrow-key roving focus) was not captured — the
     record's Actions table documents only the `onclick` handler, no
     `keydown` handler. As with the other two previews in this product, a
     standard accessible radiogroup keyboard pattern (arrow keys move focus
     and selection, wrapping at the ends) is implemented here as a
     deliberate improvement, not a verified reproduction of Zoho's actual
     keyboard behavior (which the record's own accessibility finding — see
     below — suggests may not exist at all).

## Intentional deviations from the literal source markup

- **ARIA semantics are added; the source has none.** This is the headline
  finding in the record's "Rules & Validation" section: the real DOM is a
  `<ul>` of `<li themeprop_key=... themeprop_val=... onclick=...>` elements
  with **zero ARIA attributes** — no `role`, no `aria-selected`, no
  `aria-pressed`. Selection state is driven entirely by custom non-standard
  attributes plus a plain `.selected` CSS class; the record explicitly notes
  this is a real accessibility gap, worse than the Rating field's gap
  (`role="radio"` present but `aria-checked` never flips) because here there
  is no ARIA role in the first place. Per this repo's established precedent
  — `yes-no-toggle-field/README.md` swaps `<a href="javascript:;">` for
  `<button>`, and `rating-star-field/README.md` fixes `aria-checked` never
  flipping — this reconstruction **fixes the confirmed defect rather than
  reproducing it**: the group renders `role="radiogroup"` with
  `aria-labelledby`, each option renders `role="radio"` with `aria-checked`
  that correctly reflects selection, and options are native `<button>`
  elements instead of `onclick`-bearing `<li>`s. This is a single-select
  group (confirmed in the record: "no evidence of multi-select anywhere"),
  so `radio`/`radiogroup` semantics fit exactly — a `listbox`/`option`
  pattern was considered but not used, since these options are not a list
  of arbitrary values to pick from a longer collection, they are a small,
  always-visible set of mutually exclusive style choices, which is what
  `radiogroup` is for.
- Zoho's generated attributes (`themeprop_key`, `themeprop_val`,
  `themeprop_class`, `tooltip-title`, `data-toggle`) are replaced with plain
  React props (`id`, `label`, `variant`) and a `title` attribute standing in
  for the tooltip. None of Zoho's original CSS or class names
  (`pageFormStyle`, `zfThemePosition`, `liveNoBannerStyle`, etc.) are reused
  verbatim; all styling is scoped CSS Module classes local to this
  component.
- No toggle-off-on-reclick behavior is implemented, unlike
  `yes-no-toggle-field`/`rating-star-field`. The record's Actions table
  describes only a `.selected`-class move from the clicked `<li>` to itself
  (removed from the previous sibling) — never a return to "nothing
  selected" from a click — so this reconstruction does not add one.

## What this is not

This is not the original Zoho Forms component, not pulled from any Zoho
source, and not guaranteed to match current production behavior — see the
in-app notice on the Preview tab, and the record's own `evidence_state`
(`source_reviewed`, not `runtime_verified`).
