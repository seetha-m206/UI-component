# Theme Editor Split-Pane Shell — reconstructed preview

See
`Research-Library/04-Component-Library/zoho-forms/theme-editor-split-pane-shell.md`
for the full research record this is built from. Follows the folder
contract, registry format, evidence labeling, state controls, and
accessibility bar established by `rating-star-field/` and
`yes-no-toggle-field/`, adapted for a screen-level shell rather than a
single form field (no `label`/`required`/`error` concepts; the "state
controls" are a config value object, a collapse flag, and an optional
`disabled` flag instead).

## Evidence used, in priority order

1. **Authorized Zoho HTML/CSS export** — not available, same as every
   other component in this library so far.
2. **Captured DOM/CSS/JS in the record's Technical Data section** — the
   primary source, specifically:
   - The **fixed 415px left-pane width** (`#leftPaneCont.zf-tb-leftContainer.leftPane`),
     itself split into a 90px icon tab strip and a 325px detail panel —
     reproduced here at a proportionally scaled 240px (52px tab strip +
     188px detail panel) to fit a compact preview stage, while keeping
     the same fixed-width-not-flexible spirit.
   - **No functional resizable divider.** The source record explicitly
     confirms `.dividerSvgDiv` is a decorative 0×0 icon glyph, not a drag
     handle, and that "the 415px left-pane width is fixed regardless of
     viewport size." This reconstruction does not add a drag-to-resize
     interaction that was never there.
   - **The collapse toggle does not cause the preview pane to reflow.**
     The record states: "Left pane hides/shows; preview iframe area does
     not resize/reflow to fill the freed space (fixed-width panes, not a
     real flex/resizable split)." Reproduced literally: `.previewPane` is
     `flex: 0 0 360px` (a fixed basis), never `flex: 1`, so collapsing the
     config panel leaves a visible gap rather than the preview pane
     growing to fill it.
   - **CSS-custom-property sync, targeting a shared ancestor, not the
     visibly-changing element.** The record's CSS section confirms
     `.centerContainer` itself "carries no inline style... all values
     live upstream on `body`" — i.e. the parent writes custom properties
     (`--form-cont-gradient-start-clr`, etc.) onto the iframe's `<body>`,
     and a pre-written external stylesheet rule on `.centerContainer`
     reads those variables. This reconstruction's mock form card echoes
     that exact pattern in same-document form: `ThemeEditorSplitPaneShell`
     sets `--preview-bg` / `--preview-font-family` as inline custom
     properties on the `.previewPane` wrapper (the ancestor), and
     `.mockFormCard`'s CSS module rule reads `var(--preview-bg, ...)` /
     `var(--preview-font-family, ...)` — not an inline style set directly
     on the card.
   - **No CSS transition on the value swap.** The record confirms
     `getComputedStyle('.centerContainer').transitionDuration` was `0s`
     and `animationName: none` — the update is a synchronous recalculation,
     not an animated transition. `.mockFormCard` sets `transition: none`
     to match.
   - **Zero network calls until Apply.** The record confirms `fetch`/`XHR`
     hooks caught nothing during property edits; only the (unobserved)
     Apply click is inferred to fire a request. This reconstruction has no
     Apply button and makes no network calls at all — it is fully
     client-side, consistent with that finding.
3. **Screenshots and documented behavior** — none captured in the source
   record for this component ("Screenshot: not captured this pass").
   Structural layout comes from the DOM tree capture instead.
4. **Assumptions, clearly flagged**:
   - **`disabled` prop/state** — the source record explicitly says
     "Disabled state: not observed." It is included here anyway as a
     plausible (not confirmed) affordance — e.g. while a future Apply
     request were in flight — and the `disabled-controls` fixture title
     says "(assumption, not observed)" to keep this visible in the UI
     itself, not just in this README. `preview.config.ts`'s toggle list is
     left empty rather than surfacing this as a first-class toggle, since
     it isn't a confirmed behavior.
   - Icon tab-strip glyphs are decorative CSS squares, not the real
     Zoho iconography (not captured/exported this pass).
   - Exact focus-visible treatment and hover states on the tab strip /
     toggle button are not observed; standard outline/hover treatment is
     used, consistent with the rest of this library.
   - Header toolbar is reduced to a static title bar only — the real
     "Restore theme defaults" link, green Apply button, and close link
     are out of scope for this shell/config-panel/preview reconstruction
     and are not reproduced as inert decoration (better to omit a control
     than to render one that silently does nothing).

## The central, deliberate deviation: iframe → same-document state

**In the real product**, the right-hand "live preview" is not a
custom-built preview widget — it is a same-origin `<iframe>`
(`#fpCustomThemeEditor.themeEditorIframe`) rendering the actual live form
document (`src: /{account}/form/{formLinkName}/currenttheme`). The parent
document's config-panel JS reaches directly into
`iframe.contentDocument.body.style.setProperty(...)`, which works only
because the iframe is same-origin — an architecture-specific shortcut,
not a generically reusable pattern, and one this record calls out as
"a same-origin same-app assumption baked into the architecture."

**This reconstruction cannot and does not build a literal cross-document
iframe sync mechanism** — there is no real Zoho form document available to
load into an iframe here, and fabricating one would mean inventing form
markup that was never observed. Instead, the scope is deliberately split:

- **Faithfully reconstructed:** the shell/layout itself — the fixed-width
  left config panel (icon tab strip + detail panel), the real
  collapse-toggle button and its documented non-reflow behavior, and the
  overall split-pane structure.
- **Substituted:** the preview pane renders a small mock form card
  (title + one field) using ordinary same-document React state
  (`value`/`onChange`) instead of a second, cross-document iframe render
  target. The _mechanism_ is still echoed faithfully — config changes are
  written as CSS custom properties onto a shared ancestor (`.previewPane`),
  exactly mirroring the source's "values live upstream on body, not the
  target element" finding — but the sync happens within one React tree,
  not across a document boundary.

This is a workable, honest preview of the shell's structure and its
config→preview sync _mechanism_, not a claim that this reconstruction
replicates cross-document iframe messaging. No `postMessage`, no real
`<iframe>`, no fabricated form document.

## Other deliberate deviations from what was actually observed

- Zoho's generated class names/IDs (`zf-tb-leftContainer`,
  `fullPageThmeBuilder`, `zf-leftSmallTabMenu`, `themeEditorIframe`, etc.)
  are replaced with scoped CSS Module classes and plain React props/state.
  None of Zoho's CSS or markup is reused verbatim.
- Only the "General" tab's Container-background-equivalent and a font
  picker are implemented as functional controls — the source panel has
  many more sections (Wallpaper, layout pickers, sliders, per-tab detail
  content) that are out of scope; other tabs render a labeled placeholder
  explaining they are not reconstructed here, rather than inventing
  controls that were never captured.
- The Apply/Restore/Close header controls are omitted entirely rather
  than rendered as non-functional decoration (see assumptions above).

## What this is not

Not the original Zoho Forms component, not pulled from any Zoho source,
and not guaranteed to match current production behavior — see the in-app
notice on the Preview tab, and the record's own `evidence_state`
(`source_reviewed`, not `runtime_verified`). In particular, it is not a
working demonstration of cross-document/iframe preview synchronization —
that mechanism is explicitly substituted, not reproduced, for the reasons
above.
