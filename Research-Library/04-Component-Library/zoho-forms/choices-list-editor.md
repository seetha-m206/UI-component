---
component: "Choices List Editor (Field Properties)"
ui_category: "Forms > Form"
source_product: "Zoho Forms"
last_verified: "2026-09-17"
evidence_state: "source_reviewed"
---

# Component: Choices List Editor (Field Properties)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location
- **Product:** Zoho Forms
- **Screen(s) it appears on:** Form builder → Dropdown field → Properties panel → "Choices" → "Edit" opens the "Choice Field Properties" overlay. Shared template markup indicates the same row structure underlies Radio and Checkbox field choice-editors too (not individually re-verified).

## Structure
- Overlay replaces the whole Properties panel: header "Choices (N)", toolbar (search, duplicate, shuffle/randomize, Import), one full-width text-input row per choice, footer hint "Press enter to add a new choice."
- Each row's add (+) / remove (−) icons are hidden by default, revealed on hover/focus of that row.
- Container: `div[elname="choiceFieldsChoicesContainer"]`, holding one hidden template row (`elname="choiceFieldsTemplate"`, `display:none`) plus one live row per choice (`elname="choiceFieldDiv"`).

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| Row's `+` icon (`elname="choiceAddSpan"`) | Click | `ZFForm.formBuilder.addChoiceFieldChoiceFromAddBtn(this)` | Inserts a new empty row directly after the clicked row (not appended at list end), placeholder text "Choice1", auto-focused; counter increments | Same overlay |
| Row's `−` icon (`elname="choiceRemoveSpan"`) | Click | `ZFForm.formBuilder.removeChoiceValueInChoiceFieldPopUp(this)` | Removes the row from the DOM entirely (`.remove()`); marks panel dirty; recomputes counter from live DOM count | Same overlay |
| Drag a row | Mouse-down + drag | *(none — no sortable handler exists)* | No reordering occurs; the gesture is instead interpreted as text selection inside the row's input | Same overlay, no change |
| Text input in a row | Type / focus-out | `addChoiceValueInChoiceFieldArr` (on focusout), `handleChoiceInputKeyDown` (on keydown, e.g. Enter-to-add) | Updates the choice's stored value; Enter key adds a new row | Same overlay |

## Behavior & States
- Default state: plain text input, light-gray border (`rgb(228,229,234)`), transparent background; +/− icons not visible.
- Hover/focus state: +/− icons become visible; focused input border switches to the app's teal accent color.
- Active/dragging state: does not exist — dragging a row produces ordinary text-selection behavior instead, confirmed by DOM inspection (`jQuery(container).data('ui-sortable')` is falsy — no sortable plugin initialized).
- Disabled state: implied minimum-choice guard in `removeChoiceValueInChoiceFieldPopUp` (checks if only 1 choice remains) — likely disables further deletion at 1 remaining choice, not independently confirmed visually.
- Loading state: none — purely local/in-memory until commit.
- Empty state: n/a (list always has at least the guarded minimum of 1 choice).
- Error state: `isChoceValidationFailed()` guard exists before adding a new choice — not independently exercised.

## Rules & Validation
- Row order is **not drag-reorderable** — the only way to change choice order is a separate "Sort Choices" setting (None / Alphabetical / etc.) elsewhere in the panel, which reorders the whole set programmatically rather than per-row. This is a UX gap worth flagging: the visual list-row layout invites drag-reorder expectations that the component doesn't fulfill.
- New rows insert immediately after the row whose `+` was clicked, not at the end of the list — a specific, easy-to-miss placement rule.
- A minimum-choice guard appears to prevent deleting down to zero choices (implementation detail, not fully confirmed).

## Technical Data
> OBSERVATION, directly captured via browser DOM/JS/network inspection (2026-09-15), including a request-count hook confirming zero network activity across add/delete/attempted-reorder.

- **DOM:**
```html
<div elname="choiceFieldsChoicesContainer">
  <div class="choices" elname="choiceFieldsTemplate" style="display:none">...</div> <!-- hidden template -->
  <div class="choices" elname="choiceFieldDiv" choice_id="276628000000002072">
    <!-- radio-variant markup, HTML-commented out, unused for Dropdown -->
    <!-- checkbox-variant markup, HTML-commented out, unused for Dropdown -->
    <input type="text" elname="choiceFieldsValueInput" placeholder="Choice1"
           onfocusout="ZFForm.formBuilder.addChoiceValueInChoiceFieldArr(this);"
           onkeydown="ZFForm.formBuilder.handleChoiceInputKeyDown(event,this);"
           maxlength="150">
    <div class="grp-DepChoices">
      <span class="fiedPropPlus" elname="choiceAddSpan"
            onclick="ZFForm.formBuilder.addChoiceFieldChoiceFromAddBtn(this);">
        <svg class="icon icon-plus"><use xlink:href="#icon-plus"></use></svg>
      </span>
      <span class="fiedPropMinus" elname="choiceRemoveSpan"
            onclick="ZFForm.formBuilder.removeChoiceValueInChoiceFieldPopUp(this);">
        <svg class="icon icon-minus"><use xlink:href="#icon-minus"></use></svg>
      </span>
    </div>
    <div class="clearBoth"></div>
  </div>
  <!-- more .choices[elname=choiceFieldDiv] siblings -->
</div>
```
**Notable:** each row contains two HTML-commented-out alternate markups (a radio-button variant and a checkbox variant) for the same choice row — this is a **shared template reused across Choice-type fields** (Dropdown/Radio/Checkbox), with the inactive variants left as inert comments rather than removed. No drag-handle element exists anywhere in the row markup.

After Add: new row has `choice_id=""` (unassigned — server ID presumably only set on Save) and empty value, inserted as a DOM sibling directly after the row whose `+` was clicked.
After Delete: row fully removed from DOM (no `display:none` hiding, no leftover placeholder).

- **JavaScript:**
```js
ZFForm.formBuilder.addChoiceFieldChoiceFromAddBtn = function(elem){
  if (!ZFForm.formBuilder.isChoceValidationFailed()) {
    // builds and inserts new row DOM directly after the clicked row
  }
}

ZFForm.formBuilder.removeChoiceValueInChoiceFieldPopUp = function(elem){
  var choiceFieldsPopupDiv = ZFForm.formBuilder.getChoicesFieldsPopUpDiv(),
      choiceFieldDiv = $(elem).closest("div[elname=choiceFieldDiv]");
  $(choiceFieldDiv).remove();
  this.addChoiceValueInChoiceFieldArr(elem);
  // minimum-choice guard likely disables further deletes at 1 remaining
  this.changeTheChoiceFieldPopupToUnsavedState();
  ZFForm.formBuilder.setChoiceCountInChoiceFieldsPopup();
}
```
Both handlers are plain jQuery DOM mutation (`.remove()`, insertion) plus two bookkeeping calls: `changeTheChoiceFieldPopupToUnsavedState()` (flags panel dirty) and `setChoiceCountInChoiceFieldsPopup()` (recomputes the "Choices (N)" counter from the live DOM count, not a stored array). No sortable/reorder handler exists — consistent with the DOM finding of no `ui-sortable` initialization.

- **Network:** Zero requests for add, delete, or the attempted drag (`reqCount: 0`, same hook used in [[yes-no-toggle-field]] and [[rating-star-field]]). Everything — including choice text edits — lives in local DOM/in-memory state until the field's own Save/Done commits it.

- **Response:** N/A — no request fired for any operation tested.

- **State change:** Purely local/in-memory; the "Choices (N)" counter is derived by re-counting live DOM rows on every add/delete rather than tracked in a separate state variable.

- **CSS:**
  - Default row input: `border: 1px solid rgb(228,229,234)` (light gray); `background: transparent`.
  - Focused row input: border switches to the app's teal accent (`~rgb(36,166,138)` family).
  - `+`/`−` icon spans: not visible by default, revealed on row hover/focus — no transition duration detected on this reveal (appears to be instant show/hide via a hover CSS rule or JS-toggled class).

- **Animation/transition:** None observed on add/delete (rows appear/disappear instantly, no slide/fade) or on the `+`/`−` icon hover-reveal. Consistent with the pattern across this session's builder-chrome/property-panel captures ([[sidebar-settings-subnav]], [[upgrade-cta-button]]) tending to be instant/non-animated, while only certain live-form Preview controls ([[toggle-radio-switch]]'s 0.2s ease, [[rating-star-field]]'s 0.3s linear) carry real transitions.

## Cross-Component Pattern Note
- **OBSERVATION:** This is architecturally distinct from every other component captured so far — it's a **builder-time, panel-local editing surface**, not a live-form input. Its row markup is a **shared multi-variant template** with two other Choice-type field implementations (Radio, Checkbox) commented out inline rather than maintained as separate templates. And unlike the visual expectation set by its row-list layout, it **explicitly has no drag-reorder capability** — reordering is delegated entirely to a separate "Sort Choices" dropdown setting elsewhere in the panel. Worth flagging in the Zoho Forms product record's Weaknesses/UI-UX section as a discoverability gap.

## Competitor Comparisons
*(First real competitor data point for this table — see [[typeform-choices-list-editor]] for the full Typeform trace.)*

| Aspect | Zoho Forms (existing) | Typeform |
|---|---|---|
| Row layout | Visually invites drag-to-reorder (per existing finding) | Similar visual invitation: a hover-revealed drag-handle icon (⋮⋮) appears to the left of each row |
| **Drag-to-reorder — actually functional?** | **Confirmed: no.** Row layout looks draggable but has no working drag-and-drop | **Confirmed: yes.** Tested three separate times with genuine drag gestures on the dedicated handle icon; every drag correctly reordered the list and re-lettered the choice badges |
| Drag library / implementation evidence | — (no sortable plugin initialized; `jQuery(container).data('ui-sortable')` is falsy) | **[dnd-kit](https://dndkit.com/)**, identified via the drag handle's `aria-roledescription="sortable"` and `aria-describedby="DndDescribedBy-{n}"` attributes — a real, accessibility-conscious sortable-list library, not a bespoke or decorative mechanism |
| Choice text editing | Plain `<input type="text">` | Rich-text editing via **Quill.js** (`ql-editor`), the same library used for question titles elsewhere in the Typeform builder — one shared text-editing primitive across the product |
| Add a choice | Inserts directly after the clicked row's `+`, not appended at the end | Instant, no dialog; new row appended and focused immediately |
| Delete a choice | Removes from DOM immediately, no confirmation | Instant, **no confirmation prompt**; remaining choices re-letter immediately to stay sequential |
| Letter/index badges | Not applicable (plain text rows, no letter badges) | Live and auto-renumbering on every add/delete/reorder — not static per-choice identifiers |
| Network behavior on edit | Zero requests — purely local/in-memory until an explicit field-level Save/Done | **Not client-side-only.** Every tested edit (drag-reorder, delete) immediately fires a real autosave: `PUT .../bff/bob-the-builder/forms/{id}` followed by a `GET .../drafts/{id}` resync, an alias lookup, and a GraphQL call — a materially different persistence model from Typeform's own Theme/Design editor ([[theme-design-editor]]), which holds changes client-side until an explicit Save |
| Per-choice secondary actions | Only +/− (add/remove), hover-revealed | Two additional unlabeled icon buttons appear per row on hover (likely a logic-jump shortcut and a secondary toggle, by shape/position — not confirmed) alongside the delete icon; neither carries an `aria-label`, a minor accessibility gap worth noting independent of the reorder question |

## Best Observed Approach
**Typeform's implementation is the stronger reference here, on the exact dimension this comparison is about.** Where Zoho's choices list visually promises drag-to-reorder but doesn't deliver it — a real UX gap between affordance and function — Typeform both looks draggable _and_ is draggable, built on a real, accessibility-aware library (dnd-kit) rather than a decorative handle icon. The recommended pattern for a future implementation is Typeform's: a dedicated, purpose-built drag handle (not a whole-row drag, which risks conflicting with text-click-to-edit) wired to a genuine sortable-list library that ships proper ARIA roledescription and live-region description hooks for screen-reader users, paired with instant, non-blocking add/delete actions. The one caveat worth carrying forward is Typeform's per-action autosave on this screen: it removes any "did my reorder even save?" ambiguity, but it also means there is no client-side "undo my recent edits" safety net the way a hold-until-explicit-save model (like Typeform's own Theme editor) provides — a genuine trade-off, not a strictly better pattern, and worth weighing deliberately rather than copying wholesale.

## Sources
- OBSERVATION: Live exploration of Zoho Forms (forms.zoho.in), form builder → Dropdown field → Choice Field Properties overlay, via Claude browser extension, 2026-09-15. DOM/CSS/JS/network data retrieved via the page's own JS context, with a request-count hook confirming zero network activity across add/delete/attempted-drag operations.
