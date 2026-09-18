# Card-List Selector (Icon + Title + Description) — reconstructed preview

See `Research-Library/04-Component-Library/zoho-forms/card-list-selector.md`
for the full research record this is built from. Follows the folder
contract, registry format, evidence labeling, state controls, and
accessibility bar established by `yes-no-toggle-field/` and
`rating-star-field/`.

## The "three lookalikes" finding — read this first

The source record's headline finding is that this visual pattern (an icon
over a title over a one-line description, in a clickable card) is **not one
shared Zoho Forms component**. It was found independently built in three
separate places:

1. **New-Form chooser** (Dashboard → "+ New Form") — 7 cards in a grid,
   `<ul><li data-zf-click="...">`, no confirmed selection state.
2. **Share screen sidebar** — 5 cards in a vertical list, `<a onclick="...">`,
   with a confirmed `select`-class selected/unselected visual state.
3. **Create-From-Scratch form-type picker** (bonus) — `<div class="frmCrteList">`
   cards, no click handler located at all (presumably delegated).

Each uses a different root tag, a different click-binding mechanism
(`data-zf-click` attribute vs. plain `onclick` vs. no attribute-level
handler), a different icon sprite sheet, and a different transition timing
(0.2s linear vs. 0.3s) — the record's own conclusion is that this is a
code-hygiene/consistency finding (three teams re-implemented the same look
independently), not evidence of one true underlying component.

**This reconstruction does not build three separate components.** It
builds **one general, reusable "card list selector" pattern** — a
single-select group of icon+title+description cards — modeled most closely
on the **Share sidebar variant**, because that is the only one of the three
with a confirmed, measurable selected-vs-unselected visual state to
reconstruct. The New-Form grid layout is represented via the `layout="grid"`
prop and fixtures, using the Share sidebar's confirmed selection colors
(the New-Form variant's own selection behavior was never observed — see
below). The third (form-type picker) variant contributes no additional
confirmed visual/behavioral data beyond what the other two already cover.

## Evidence used, in priority order

1. **Authorized Zoho HTML/CSS export** — not available, same as the other
   two previews in this repository.
2. **Captured DOM/CSS/JS in the record's Technical Data section** — the
   primary source: the Share sidebar's confirmed unselected (`background:
rgb(255,255,255); border: 0.8px solid rgb(232,238,246); transition:
0.3s`) and selected (`background: rgb(250,255,254); border: 0.8px solid
rgb(164,219,208)`) computed styles, applied via a `select` class toggle —
   "the one confirmed visual-state mechanism across all three" per the
   record's Behavior & States section.
3. **Screenshots and documented behavior** — no screenshots were captured in
   the source record; the Location, Structure, and Actions sections were
   used to confirm card composition (icon/title/description) and layout
   (grid vs. vertical list) across the three screens.
4. **Assumptions, clearly flagged** — used only where evidence was
   incomplete (see below).

## Deliberate deviations and flagged assumptions

- **Icons are React nodes, not CSS sprites.** Zoho renders card icons via
  two separate CSS sprite sheets (`new-form-sprite....svg` and
  `ShareMenuSprite....svg`, per the record's Rules & Validation section) —
  product-specific binary assets not available in this repository. This
  reconstruction takes an `icon: ReactNode` per item instead; `fixtures.ts`
  supplies small, self-drawn placeholder line icons, not Zoho's actual
  iconography.
- **No re-click-to-deselect.** `yes-no-toggle-field` and `rating-star-field`
  both have an observed "click the selected option again to clear it"
  behavior. This pattern has no equivalent evidence: the record describes
  the Share sidebar as swapping the `select` class from the previously
  active card to the newly clicked one (tab-like, always-one-selected), with
  no re-click branch documented anywhere. This reconstruction therefore
  treats re-clicking the selected card as a no-op, not a toggle-off — a
  deliberate behavioral difference from the other two previews, not an
  oversight.
- **No hover-state styling.** The record explicitly tested and found **no
  measurable computed-style difference** between hovered and non-hovered on
  either measurable card set (`matches(':hover')` before/after comparison),
  despite both declaring a CSS `transition`. Rather than invent a hover
  effect, none is implemented; the declared `transition` is preserved
  (applied to the `select`-class toggle instead, consistent with the
  record's own hypothesis that it exists to smooth click-to-select rather
  than hover).
- **Keyboard navigation (arrow keys, roving tabindex) is NOT observed.** No
  `keydown` handler was found on any of the three variants — the New-Form
  and Share cards use only `data-zf-click`/`onclick`, and the form-type
  picker has no attribute-level handler at all. This reconstruction adds a
  standard accessible `radiogroup` keyboard pattern (arrow keys move focus
  and selection, clamped rather than wrapping) as a deliberate improvement,
  not a verified reproduction of Zoho's own keyboard behavior — same
  precedent as the other two previews in this repository.
- **Disabled-state styling is NOT observed** in the source record (no
  disabled state is documented for this control in any of the three
  variants); a conventional reduced-opacity treatment is used here,
  consistent with `yes-no-toggle-field` and `rating-star-field`.
- **No "required"/validation axis.** Unlike the other two previews, this
  component's `preview.config.ts` intentionally omits a `required` toggle:
  the source record never shows this pattern used as a required form
  answer — it's a navigation/selection control (choose a creation flow,
  choose a share method, choose a form type), not a form field with
  pass/fail validation.
- **Responsive/grid-collapse behavior is NOT observed** — both captured
  contexts were effectively fixed-width in the tested session. Collapsing
  the `grid` layout to a single column at narrow container widths (via
  `@container`) is a reasonable assumption for a card grid, not an observed
  Zoho breakpoint.
- **Root element:** Zoho's three variants use `<li>`, `<a href="javascript:;">`,
  and `<div>` respectively as the clickable card root. This reconstruction
  uses a single native `<button type="button" role="radio">` for every
  card, consistent with the `<a href="javascript:;">` → `<button>` swap
  already established in `yes-no-toggle-field` — same ARIA contract
  (`role="radio"`, `aria-checked`), no `javascript:` URL.
- All Zoho-generated class names (`frmCreationListIcon`, `shareTabLinks`,
  `shareMenuInCont`, `frmCrteList`, `select`, etc.) are replaced with scoped
  CSS Module classes local to this component. None of Zoho's original CSS
  is reused verbatim.
- **The New-Form grid variant's own selection state was never observed** —
  the record found no confirmed `select`-class or other selection styling
  on the New-Form cards (clicking one navigates away rather than toggling
  a persistent selection). The `grid-layout` fixture therefore demonstrates
  the layout only in its unselected state; selecting a card in `grid`
  layout reuses the Share sidebar's confirmed selected-state colors as the
  best available evidence, not an independently observed New-Form value.

## What this is not

This is not the original Zoho Forms component, not pulled from any Zoho
source, and not guaranteed to match current production behavior — see the
in-app notice on the Preview tab, and the record's own `evidence_state`
(`source_reviewed`, not `runtime_verified`).
