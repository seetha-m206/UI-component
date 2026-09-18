# Entries Filter Panel — reconstructed preview

See
`Research-Library/04-Component-Library/zoho-forms/entries-filter-panel.md`
for the full research record this is built from. Follows the folder
contract, evidence labeling, and accessibility bar established by
`yes-no-toggle-field/` and `rating-star-field/`.

## Evidence used, in priority order

1. **Authorized Zoho HTML/CSS export** — not available. No such export
   exists anywhere in this repository; this priority tier could not be
   used, same as the other two reconstructed previews.
2. **Captured DOM/CSS/JS/network in the record's Technical Data section** —
   the primary source for this reconstruction:
   - **Confirmed real behavior, reproduced here:** validation is fully
     client-side — `ZFReportLive.searchView()` sets a `globalError` flag and
     blocks the request entirely ("Invalid search criteria.") when a
     checked/active row lacks a valid value; the source confirms **zero
     network activity** on an invalid submission. This preview's `Search`
     button reproduces that exactly: `onApply` is only called when every row
     with a value-requiring operator has a non-empty value, and it never
     fires a network call regardless (this reconstruction is fully
     client-side, per the task's hard rules, matching the real component's
     own client-side-only validation).
   - **Confirmed datatype-aware operator sets, reproduced here:** the record
     directly compares Text (fieldtype `1`), Number-style/Rating (fieldtype
     `21`), and Date/Added Time (fieldtype `3`) and finds different operator
     lists per datatype. This preview's `operatorsFor()` reproduces the
     Text and Number-style lists **verbatim** from the record's Rules &
     Validation section, and layers the Date list on top of the Number-style
     list (also as directly observed — "all number-style comparison
     operators, plus ~30 relative-date presets").
   - **Confirmed value-input rendering differences, reproduced here:** the
     record states Rating's value input is "a plain text box" and Added
     Time's "carries placeholder `dd-MMM-yyyy hh:mm:ss` (a formatted text
     field, not a native date-picker widget by default)". This preview uses
     a plain `<input type="text">` for every datatype, with that exact
     placeholder string applied only to date-datatype rows.
   - **Confirmed error-row styling, reproduced here verbatim:** `class="active
search-Error"` → `background:#FFF6F6; border:0.8px solid #FFC2C2;
border-radius:4px; padding:10px 0 6px 12px` is used as the invalid-row
     highlight, and the record's description of a **single shared**
     "Invalid search criteria." message (not a per-field message) is
     reproduced as one `role="alert"` element shown once below the row list,
     not duplicated per row.
3. **Screenshots and documented behavior** — no screenshots were captured in
   the source record; the Structure/Actions/Behavior & States prose was used
   to confirm the checkbox → reveal → validate → submit flow this preview's
   interaction model is adapted from.
4. **Assumptions, clearly flagged:**
   - **The exact operator list per datatype may be incomplete.** The
     record's own flag notes the relative-date preset list was "truncated at
     ~30 options" in the capture ("Today, Yesterday, Tomorrow, Last/Next
     7/30/60/90/120 Days, Last/This/Next Week or Month or Year,
     Current-and-Previous/Next variants, Last/Next 2 Years, list
     continues"). This preview implements a **representative 12-item
     subset** of those named presets (`Today`, `Yesterday`, `Tomorrow`,
     `Last 7/30/60/90 Days`, `This Week/Month/Year`, `Next 7/30 Days`), not
     the full set — the full enumeration was never captured.
   - **Which operators need no value input is inferred, not fully
     confirmed.** The record only explicitly names `Is Empty`/`Is Not
Empty` as needing no value (self-evident from the operator name). This
     preview extends that inference to the relative-date presets (`Today`,
     `Last 7 Days`, etc.), reasoning that a preset which already names its
     own value has nothing for a value input to hold — this extension is a
     judgment call, not something the source record states directly.
   - **The "Is Between" operator's value UI is unresolved.** The record
     lists `Is Between` as a valid Number-style/Date operator but the source
     capture never opened it, so whether Zoho renders one value input or two
     (a range pair) is unknown. This preview treats it like any other
     value-requiring operator (one input) — a simplification, not a verified
     reproduction of a two-value range control.
   - **Panel open/close animation is not implemented.** The record
     explicitly flags this as unresolved ("underlying mechanism unresolved
     — CSS transition vs. jQuery `.slideToggle()`/`.animate()` not
     conclusively identified... transition: all resolves to a default 0s at
     rest"). No slide-in/out animation is guessed at here.
   - **The multi-row "Add filter" / remove interaction pattern is not from
     the source at all — see the deviation note below.**
   - **The value-required-on-Apply revalidation timing is assumed.** Once
     `Search` is clicked and validation is shown, this preview recomputes
     which rows are still invalid on every keystroke (so fixing a value
     clears that row's error live). The source record only confirms the
     error appears on an invalid Search click; it does not describe whether
     the real panel revalidates live afterward or only on the next Search
     click. Live revalidation was chosen as the more usable, standard
     pattern, not as a verified reproduction.

## Intentional deviations from the literal source markup

- **Field selection model.** The real Zoho panel is a fixed checklist of
  every form field (`<li>` per field with a checkbox); checking a box
  reveals an already-present, hidden criteria sub-form in place (confirmed:
  "checking the checkbox does not clone or insert a new row — the criteria
  `<div>` already exists in the DOM at panel-render time"). This preview
  instead uses an explicit add/remove filter-row list (`+ Add filter` /
  `×` per row) — a conventional query-builder UI. This is a **structural
  adaptation for the reconstructed preview**, not a literal reproduction of
  the fixed-checklist DOM shape; the _behavior_ being reconstructed —
  datatype-aware operators, plain-text value inputs, client-side-only
  validation, and the shared error message/per-row error styling — is
  preserved exactly as documented.
- Zoho's implementation is jQuery/Select2-based
  (`<select class="select2-hidden-accessible">` with a separately rendered
  `.select2-container` widget on top). This preview uses plain native
  `<select>` elements — same semantics and keyboard operability, no
  Select2 widget layer, and no Zoho-generated class names anywhere.
- All Zoho-generated class names/attributes (`rPorts-SearchPanel-SideBar`,
  `rPorts-SearchResultForm`, `elname`, `fieldtype`, etc.) are replaced with
  scoped CSS Module classes and plain React props. None of Zoho's original
  CSS or markup is reused verbatim, aside from the exact color/border values
  cited above (which are visual design facts, not markup).
- The panel renders as a normal in-flow block rather than the source's
  `position:absolute; right:0; width:400px` slide-in sidebar, so it works
  standalone outside a full app shell — a layout adaptation, not a captured
  Zoho breakpoint.

## What this is not

Not the original Zoho Forms component, not pulled from any Zoho source, and
not guaranteed to match current production behavior — see the record's own
`evidence_state` (`source_reviewed`, not `runtime_verified`) and its
explicit "Partially incomplete" flag at the top of the record (the full
`searchView()` validation predicate and multi-field-simultaneous filtering
were not conclusively traced). This reconstruction is fully client-side (no
network calls of any kind), consistent with the record's own confirmed
finding that the real component never reaches the network on invalid
criteria — and, for this preview, never reaches the network at all.
