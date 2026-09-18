# Theme/Design Editor (Shared-DOM Popover, No Iframe) — reconstructed preview

See `Research-Library/04-Component-Library/typeform/theme-design-editor.md`
for the full research record this is built from. Follows the folder
contract, registry format, evidence labeling, state controls, and
accessibility bar established by `rating-star-field/` and
`theme-editor-split-pane-shell/`, adapted for a screen-level design editor
rather than a single form field (no `label`/`required`/`error` concepts;
the "state controls" are a `ThemeValue` object, a dirty/Revert mechanism,
and an exit-confirmation view instead).

## Evidence used, in priority order

1. **Authorized Typeform export** — not available, same as every other
   component in this library so far.
2. **Captured DOM/CSS/JS in the record's Technical Data section** — the
   primary source, specifically:
   - **No iframe at all.** The record confirms a full-page
     `document.querySelectorAll('iframe')` scan while the Design popover
     was open found exactly five iframes, all unrelated to form rendering
     (GTM noscript, `about:blank`, two empty-`src` iframes, a support
     widget) — "none render the form/question canvas." Builder canvas and
     "preview" are the same DOM tree. This reconstruction's mock canvas is
     therefore driven by the exact same React state (`value`) as the
     popover's own controls, in the same component tree — there is no
     substitute mechanism to build, because the real component never had
     one to work around.
   - **Two different, confirmed CSS mechanisms within the same Font tab.**
     Font-family: selecting "Georgia" added a literal, pre-existing class
     `.font-georgia` (`font-family: Georgia, "Times New Roman", serif`) —
     one of a finite, pre-built set of `.font-{name}` classes shipped with
     the app, not freshly generated. Font/background color: a
     dynamically-generated styled-components class per value (e.g.
     `fiwpNP`), freshly hashed on every selection, with no CSS custom
     properties involved anywhere. This reconstruction reproduces the
     _shape_ of that split: `fontSystem`/`fontGeorgia`/`fontArial` are
     genuine, literal CSS Module classes swapped by `fontFamily` id
     (`FONT_CLASS` lookup in `ThemeDesignEditor.tsx`), while font color and
     background color are applied via inline `style` (see the simplification
     note below).
   - **Persistently-visible "Save changes"; conditionally-rendered
     "Revert."** The record: "a 'Save changes' button is persistently
     visible at the bottom; a 'Revert' text-button appears only once at
     least one property has been changed (conditionally rendered on dirty
     state, not always-present-but-disabled)." Reproduced literally —
     `.revertBtn` is only mounted in the JSX at all (`{isDirty && (...)}`),
     not rendered-and-disabled.
   - **Exit-with-unsaved-changes confirmation modal.** The record: "'X'
     close, with unsaved changes → Custom in-app modal, not native
     `beforeunload`... 'Save changes to theme?' / 'Discard changes' /
     'Save theme'." Reproduced as the `confirmClose` view, reachable only
     when `isDirty` is true at the moment the close button is clicked — a
     plain close with no pending changes closes immediately, matching "no
     confirmation of its own" behavior documented for Revert and the
     unconditional-confirmation behavior documented for close.
   - **Zero network calls while editing; a real client-side-only dirty
     state until Save.** The record confirms zero network activity across
     font, color, and size changes (log filtering + a custom `fetch`
     interceptor), with genuine network activity only after "Save changes."
     This reconstruction makes no network calls anywhere — `onSave` simply
     clears the internal dirty-state baseline, matching "no silent
     autosave... held entirely client-side... explicit, discrete Save
     step."
   - **Instant, no-flicker updates.** The record: "every property change
     tested... was instant with zero delay and zero flicker." Both
     `.canvas` and `.canvasTitle` set `transition: none` to match, the same
     treatment `theme-editor-split-pane-shell` used for the analogous
     confirmed-instant Zoho finding.
3. **Screenshots and documented behavior** — none captured in the source
   record for this component ("Screenshot: not captured this pass");
   structure comes from the DOM/CSS capture and the Actions/Behavior tables
   instead.
4. **Assumptions, clearly flagged**:
   - **Font family catalog (System/Georgia/Arial)** — the record confirms
     the real picker lists "System font" plus dozens of named web fonts in
     a long alphabetical catalog; only three representative entries are
     reconstructed here (enough to demonstrate the static-class mechanism),
     not the full font library, which was never enumerated in the record.
   - **`disabled` prop/state** — the record explicitly says
     "Disabled/loading/error states: not observed." Included here only as
     a plausible, unconfirmed affordance (e.g. while a future save-in-flight
     state existed), and the `disabled` fixture's title says "(assumption,
     not observed)" to keep this visible in the UI itself.
   - **Logo and Buttons tabs are omitted from functional reconstruction.**
     The record states these "were only glanced at... out of stated scope
     for this pass" (Logo appears paid-plan-gated; Buttons was never
     opened). Both tabs still appear in the tab strip (matching the real
     four-tab structure) but render a labeled "not reconstructed" note,
     the same pattern `theme-editor-split-pane-shell` used for its
     untraced sections, rather than inventing controls that were never
     captured.
   - **Popover/canvas layout is side-by-side here, not overlapping.** The
     record describes the real popover as floating and overlaying part of
     the canvas. Rendering it as a literal overlay in this preview would
     obscure the exact sample text the preview exists to demonstrate
     changing live, so the popover and mock canvas are laid out side by
     side instead — a presentational concession for legibility, not a
     claim about the real component's positioning.
   - Exact focus-visible treatment, hover states, and the full HSV
     gradient/hue-slider/hex-input/preset-swatch color picker are not
     reproduced; a native `<input type="color">` swatch stands in for the
     documented custom color picker UI, consistent with this library's
     existing convention of using native form controls where the exact
     custom widget wasn't itself the finding under test.

## The central contrast with the Zoho sibling: no substitution needed

**`theme-editor-split-pane-shell`** (the Zoho Forms equivalent) had to make
a deliberate, flagged scope substitution: the real Zoho preview pane is a
same-origin `<iframe>` rendering the actual live form document, kept in
sync by the parent writing CSS custom properties onto the iframe's
`<body>`. That reconstruction has no real Zoho form document to load into
an iframe, so it substitutes a same-document mock form card driven by
ordinary React state, while still echoing the _mechanism_ (values pushed
onto a shared ancestor via custom properties, not the visibly-changing
element itself) — explicitly documented in that folder's README as "The
central, deliberate deviation: iframe → same-document state."

**This component has no equivalent problem to solve.** The source record's
own full-page iframe scan is the deciding evidence: Typeform's builder
canvas and its "live preview" were never two documents in the first place
— "no iframe indirection is needed at all," per the record's
Cross-Component Pattern Note, which explicitly calls this "architecturally
the inverse of Zoho's approach." Because there is nothing to substitute,
`ThemeDesignEditor`'s mock canvas reads `value` directly from the exact
same component-local state the popover's own `<select>`/`<input
type="color">` controls write to — same render, same tick, same React
tree, with no CSS-custom-property indirection layer standing in for a
missing cross-document bridge. In that specific sense this reconstruction
is **more literal** than its Zoho sibling: it isn't a compromise forced by
missing source material, it is a direct reflection of an architecture that
genuinely has no iframe to reconstruct around.

The one simplification this preview _does_ make — and the only place it
departs from a literal reproduction — is the color mechanism: the source's
confirmed dynamically-generated, freshly-hashed styled-components class
per color value (e.g. `cPXqbt` → `jnURYx` on each pick) is not practically
reproducible as a real hashed-class system in a hand-written preview, and
doing so wouldn't change what the finding is actually about. This
reconstruction uses a plain inline `style`/CSS custom property for color
instead, which is not a literal reproduction of Typeform's hashing but
does preserve the meaningful architectural contrast the record cares
about: font-family is class-based (a small, static catalog), color is not
class-based in the same way (a fresh value applied per change) — the two
are visibly different mechanisms in this preview, exactly as they are in
the source, even though the color mechanism itself is simplified.

## Other deliberate deviations from what was actually observed

- Typeform's hashed `sc-xxxxx` styled-components class names and Quill.js
  (`ql-editor`/`ql-container ql-bubble`) markup are replaced with scoped
  CSS Module classes and plain semantic HTML/React state. None of
  Typeform's CSS, class names, or Quill.js integration are reused.
- The "closed" state (after clicking X with no pending changes, or after
  discarding/saving from the confirmation modal) is reconstructed as a
  compact "Open Design editor" placeholder rather than fully unmounting
  the preview, so the fixture/toggle harness always has something to
  re-open — the underlying close behavior (immediate vs.
  confirmation-gated) is still faithfully reproduced.
- The full HSV gradient/hue-slider/hex-input/10-preset-swatch color picker
  documented in the record's Structure section is not rebuilt; a native
  `<input type="color">` is used in its place (see Assumptions above).

## What this is not

Not the original Typeform component, not pulled from any Typeform account,
and not guaranteed to match current production behavior — see the in-app
notice on the Preview tab, and the record's own `evidence_state`
(`source_reviewed`, not `runtime_verified`). It is a faithful
reconstruction of the _mechanism_ the record actually traced (shared-DOM
live updates, the font-class-vs-color-mechanism split, the dirty/Revert/
Save/exit-confirmation lifecycle), not a pixel-accurate clone of
Typeform's Design popover UI.
