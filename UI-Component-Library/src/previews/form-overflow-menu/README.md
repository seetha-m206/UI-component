# Form Overflow Menu — reconstructed preview

See
`Research-Library/04-Component-Library/zoho-forms/form-overflow-menu.md` for
the full research record this is built from. Follows the folder contract,
registry format, evidence labeling, state controls, and accessibility bar
established by `yes-no-toggle-field/` and `rating-star-field/` — no changes
to that shared architecture were needed for this component.

## Evidence used, in priority order

1. **Authorized Zoho HTML/CSS export** — not available. No such export
   exists anywhere in this repository; this priority tier could not be used.
2. **Captured DOM/CSS/JS in the record's Technical Data section** — the
   primary source: the `div.moreListDrodown` / `ul[elname="moreOptionUlElm"]`
   markup, the 15-`<li>` shared desktop+mobile DOM with 7 desktop-visible
   items grouped into three divider clusters, the `onclick` on
   `change_status` calling `ZFForm.manager.getAndUpdateStatus(this)`, the
   "0 requests to open the menu" network finding, and the exact captured CSS
   values (open state `display:block; opacity:1; box-shadow:none;
border-radius:0px; transition-duration:0s`; item default
   `rgb(34,34,34)`; item hover `rgb(36,166,138)`; Trash label
   `rgb(237,81,98)` scoped to the inner `<span>` only, not the row).
3. **Screenshots and documented behavior** — no screenshots were captured in
   the source record; the Structure/Behavior & States sections were used to
   confirm item order, grouping, and the "instant, no transition" hover
   behavior.
4. **Assumptions, clearly flagged** — used only where evidence was
   incomplete:
   - **Menu open/close trigger mechanics.** The source explicitly notes the
     "⋮" icon's click handler "was not decoded (not found — likely
     delegated)." This preview implements a standard accessible menu-button
     pattern (click toggles, `aria-haspopup="menu"`, `aria-expanded`,
     `aria-controls`) rather than a verified reproduction of Zoho's actual
     open mechanism.
   - **Keyboard navigation (arrow keys, Home/End, Escape, Tab-to-close).**
     No `keydown` handler was captured anywhere in the source record for
     either the trigger or the item list — only the one `onclick` on
     "Enable / Disable" was decoded. All keyboard interaction in this
     preview (arrow-key roving focus between items, Home/End to jump to the
     first/last item, Escape to close and return focus to the trigger, Tab
     closing the menu) is a standard accessible-menu-pattern implementation,
     the same precedent set by `yes-no-toggle-field` and `rating-star-field`
     for their radiogroup arrow-key handling — not a verified reproduction
     of Zoho's own keyboard behavior, which the source gives no evidence
     either way about.
   - **Menu positioning/anchoring** (absolute, right-aligned under the
     trigger) and the **narrow-viewport left-alignment fallback** are
     conventional menu-button layout choices, not part of the captured
     visual spec — the source's CSS capture covered the menu's own
     display/opacity/shadow/radius/transition properties, not its
     positioning within the page's layout, and no responsive/breakpoint
     behavior was observed for the desktop item set at all.
   - **Enable/Disable and Delete are modeled as callbacks
     (`onEnableDisable`, `onDelete`), not rebuilt as modals.** The source
     documents a real confirmation-modal flow for Enable/Disable (a
     fetch-then-render `GET /{account}/form/{formLinkName}/status`, then a
     `cusRadioButton` radio pair, `Cancel`/`Done` buttons, and an
     `activeAnimate` overlay class whose exact transition values weren't
     recoverable), and a presumed-but-unconfirmed destructive confirmation
     for Trash (not exercised in the research session to avoid disturbing
     the test form's state). Rebuilding either modal here would mean
     inventing UI that was never fully captured. The dropdown menu's own
     open/close/keyboard-navigation/selection interaction — the part that
     **was** captured — is fully real and working; item selection hands off
     via a callback rather than a guessed-at modal.

## Intentional deviations from the literal source markup

- Zoho's implementation is a `<div class="moreListDrodown">` /
  `<ul>`/`<li>` structure where most items appear to bind via event
  delegation with no direct `role`/`aria-*` attributes captured in the
  record. This preview uses a real `<button aria-haspopup="menu"
aria-expanded aria-controls>` trigger and a `<ul role="menu">` of
  `<li role="none"><button role="menuitem"></button></li>` items — standard
  ARIA menu-button semantics layered onto the same visual structure and
  grouping, not present verbatim in the source capture.
- The mobile-only items sharing the same `<ul>` in Zoho's markup (Edit, All
  Entries, Mail, Quick Share — hidden on desktop via CSS) are **not**
  reconstructed; this preview models the desktop 7-item menu only, since
  the mobile variant's own hover/interaction behavior wasn't separately
  captured.
- All Zoho-generated class names/attributes (`moreListDrodown`,
  `moreOptionUlElm`, `elname="..."`, `fileStroageList`, etc.) are replaced
  with scoped CSS Module classes and plain React props/data. None of Zoho's
  original CSS or markup is reused verbatim.

## What this is not

This is not the original Zoho Forms component, not pulled from any Zoho
source, and not guaranteed to match current production behavior — see the
in-app notice on the Preview tab, and the record's own `evidence_state`
(`source_reviewed`, not `runtime_verified`).
