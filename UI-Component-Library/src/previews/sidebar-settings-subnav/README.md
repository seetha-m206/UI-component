# Sidebar Sub-Navigation Link (Settings Menu) — reconstructed preview

See `Research-Library/04-Component-Library/zoho-forms/sidebar-settings-subnav.md`
for the full research record this is built from. Follows the folder
contract, registry format, evidence labeling, state controls, and
accessibility bar established by `yes-no-toggle-field/` and
`rating-star-field/` — no changes to that shared architecture were needed
for this component.

## Evidence used, in priority order

1. **Authorized Zoho HTML/CSS export** — not available. No such export
   exists anywhere in this repository; this priority tier could not be
   used, same as the other two reconstructed previews.
2. **Captured DOM/CSS/JS in the record's Technical Data section** — the
   primary source for this reconstruction:
   - The `<ul id="storageSettingsUL" class="formSettingsList">` /
     `<li><a><div icon><label></a></li>` structure, reproduced as
     `<nav><ul><li><button></li></ul></nav>` (see deviations below).
   - The single-select behavior: exactly one item is active at a time via
     a `select` class added to both the `<li>` and `<a>`.
   - The exact captured CSS values for the active state — background
     `rgb(233,246,243)`, left border `1.6px solid rgb(36,166,138)` — and the
     default state's _reserved but transparent_ border of the same width, so
     switching the active item never shifts layout.
   - `transition-duration: 0s` on both states — the record is explicit that
     this is an instant class-toggle swap, not animated, unlike the Save &
     Resume toggle's CSS transition. No CSS transition is declared on
     `.link`/`.linkActive` here for that reason.
   - The record's documented click handler behavior: the real
     `ZFForm.formSetting.formSettings(sectionId)` handler does a client-side
     class toggle **plus** two server GETs (a panel HTML template and that
     section's saved settings JSON) that re-render the content pane. This
     preview reproduces only the class-toggle half — `onChange(id)` fires as
     the seam where a host application would perform that fetch-and-swap;
     the preview itself never calls `fetch`/`XHR`, per the hard rule that a
     static docs preview must have no network calls.
3. **Screenshots and documented behavior** — no screenshot was captured in
   the source record for this component (confirmed visually via zoom only:
   mint-green background + teal left border stripe on the active item);
   the Location/Actions/Behavior & States prose was used to confirm item
   structure and state naming.
4. **Assumptions, clearly flagged** — used only where evidence was
   incomplete:
   - Hover/focus styling was "not separately captured" in the source; a
     conventional `:focus-visible` outline (`var(--shell-focus)`) is used,
     consistent with the other two reconstructed previews. No hover-specific
     style is added since none was observed.
   - Disabled-state styling was "not observed" in the source; a
     conventional reduced-opacity treatment is used, same convention as
     `yes-no-toggle-field` and `rating-star-field`.
   - Responsive/breakpoint behavior was not observed (the settings sidebar
     was only captured at normal desktop width). Collapsing the vertical
     list into a horizontal scrollable row below ~480px container width is
     a reasonable, explicitly-unverified assumption for a sidebar nav, not
     an observed Zoho breakpoint.
   - Keyboard interaction (arrow-key roving focus) was not captured in the
     source — only the `onclick` handler was documented, no `keydown`
     handler. This preview adds a standard roving-tabindex Up/Down arrow
     pattern as a deliberate accessibility improvement, not a verified
     reproduction of Zoho's actual keyboard behavior (which may have none).
   - Icon glyphs (`icon` prop) are placeholder characters, not the real
     sprite-based icon classes (`zfGeoLocaIcn`, `zfReviewSubmiIcn`, etc.),
     since those sprite assets are Zoho-internal and unavailable here.

## Deliberately NOT reproduced: the real-product dead-DOM-tree anomaly

The source record's "Anomaly / Notable Finding" section documents that the
live Zoho Forms page contains **two overlapping sidebar DOM trees at the
same screen position** — a newer `zf-settingsMenuWrapper`/`elname`-based
tree that renders at `0×0` (present in the DOM but invisible and
non-interactive, apparent leftover markup from an in-progress redesign
given the `settingsLeftRewamp` class name), plus the real, visible,
interactive tree (`#storageSettingsUL` inside
`.settingsLeftMenu.settingsLeftRewamp`) that this component is modeled on.

That duplicate/dead markup is a **quality defect in the real product**, not
a design pattern worth reconstructing — it exists only as a note-to-self for
future scraping sessions ("check for duplicate/dead markup before assuming
a query is wrong"). This preview renders a single, clean nav-item list with
no hidden duplicate tree, exactly as instructed.

## Intentional deviations from the literal source markup

- Zoho's implementation uses `<a href="javascript:;" onclick="...">` for
  each item. This preview uses `<nav><ul><li><button type="button"></li></ul></nav>`
  instead — a `<button>` with native activation/keyboard semantics and no
  `javascript:` URL anti-pattern, consistent with the `<a>` → `<button>`
  swap already made in `yes-no-toggle-field`. The item's active/inactive
  _behavior_ (single-select, class-toggle-driven active state) is preserved
  exactly.
- `aria-current="true"` is used to mark the active item rather than
  reproducing Zoho's plain `select` class name, since `select` carries no
  accessibility semantics on its own. This is the standard ARIA attribute
  for "the current item in a set of nav links," matching the component's
  actual role.
- All Zoho-generated class names (`formSettingsList`, `setListIcons`,
  `zfGeoLocaIcn`, `settingsLeftMenu`, `settingsLeftRewamp`, etc.) are
  replaced with scoped CSS Module classes local to this component. None of
  Zoho's original CSS is reused verbatim, though the captured color/border
  values are reproduced exactly where documented.
- Server-driven panel swap: the source explicitly notes the settings panel
  content is "a real re-render from fresh data each time, not a cached
  client-side view switch." This preview has no panel/content-pane element
  at all — it is scoped to the nav list itself, with `onChange` as the
  integration seam for a host application's own content area, per the task
  instruction not to fetch/simulate the real network calls.

## What this is not

This is not the original Zoho Forms component, not pulled from any Zoho
source, and not guaranteed to match current production behavior — see the
in-app notice on the Preview tab, and the record's own `evidence_state`
(`source_reviewed`, not `runtime_verified`).
