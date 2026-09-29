---
component: "Repeatable Subform (Inline layout)"
ui_category: "Forms > Form"
source_product: "Zoho Forms"
last_verified: "2026-09-17"
evidence_state: "open_finding"
---

# Component: Repeatable Subform (Inline layout)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> ⚠️ **Retested 2026-09-17 — the "Add Entry" bug is real, reproducible, and not Inline-specific.** A dedicated second pass tried four targeted variations (fresh session, acknowledging the circular icon next to "+", raising the Max Entries limit, and testing the Popup/Vertical layouts as an isolation check) — **none unblocked Add Entry.** All three layouts (Inline, Popup, Vertical) fail identically. This rules out a layout-specific rendering/event-binding bug and points to something in the shared subform-entry-management JS that all three layout templates call into. The root cause itself remains a hypothesis, not a confirmed finding — see the updated Technical Data and Recommended Second Pass below for the full retest report. All findings below are reported as directly observed except where explicitly marked unresolved.

## Location
- **Product:** Zoho Forms
- **Screen(s) it appears on:** Form builder → Field Palette → "Repeatable Subforms" category (Inline / Popup / Vertical — only "Inline" tested). Builder-editing mode and live Preview mode both inspected.

## Structure
- Selecting "Inline" from the palette does **not** insert a field into the main canvas list — it replaces the **entire builder canvas** with a dedicated subform-editing mode: full-width panel titled "Subform" with a collapse/close icon, and an empty dashed-border dropzone ("Start building! / Drag fields from the left panel and drop here to add them to your form.").
- The subform's own field list (`ul[elname="subFormBodyUl"]`) is a **separate, independently `ui-sortable`-initialized container**, nested inside the subform wrapper — distinct from the main form's own field list and from the flat (non-sortable) Choices list-editor ([[choices-list-editor]]).
- Preview-mode rendering: a labeled group ("Subform") containing child field(s), each row prefixed with an "ⓘ" info icon and a "⊕" Add Entry icon.

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| "Inline" palette card | Click | *(not decoded — canvas swap mechanism not traced)* | Entire canvas swaps to subform-editing mode with an empty dropzone | Same screen, canvas replaced |
| Drag a field (e.g. "Single Line") onto the subform dropzone | Drag-and-drop | `ZFForm.formBuilder` handlers (same namespace as main-canvas field-add, dispatch path not decoded in detail) | Field inserted into the subform's nested sortable list, scoped with its own `link_name`/`seq_no`/`page_no` distinct from top-level fields | Same screen, subform now has one child field |
| Plain click on empty dropzone | Click | none | No effect — subform requires a real drag-and-drop, unlike main-canvas fields which accept a plain click ([[yes-no-toggle-field]], [[rating-star-field]]) | No change |
| "⊕ Add Entry" icon (Preview) | Click (multiple methods tried) | *(handler not located — see JavaScript below)* | **Unresolved** — no visible row added, no DOM change detected | No change (unconfirmed whether this is expected or a bug) |

## Behavior & States
- Default/empty state (builder): dashed-border dropzone with placeholder instructional text — confirmed real/visible via `getBoundingClientRect()` (`737.6×212.8`, `display:block`, `visibility:visible`).
- Populated state (builder): one `<li elname="builder-elem" fieldtype="SINGLE_LINE" link_name="SingleLine1" seq_no="1" page_no="1">` nested inside `ul[elname="subFormBodyUl"]` after a successful drag-drop.
- Preview row state: a hidden clone-source template row (`elname="rowTemplate"`, `display:none`, input named `SingleLine1_0`) plus one visible live row (input named `SingleLine1_1`) — standard "hidden template + live clone" pattern for dynamic row lists, **though the actual clone-and-append step could not be triggered to confirm it fires**.
- Add-row button visual state: 22×22px, `display:flex`, always rendered (not hover-gated), unlike the Choices editor's hover-only +/− icons ([[choices-list-editor]]).
- Disabled/loading/error states: not observed.

## Rules & Validation
- Field naming inside a subform follows a `{link_name}_{rowIndex}` convention, with index `0` reserved for the hidden template row — a real, confirmed naming scheme, independent of whether row-cloning itself could be triggered.
- The subform's child-field list is pre-wired with `ui-sortable` at creation (even with only one child field present) — suggesting child-field reordering is supported, though not independently tested by actually dragging a second child field.
- **Open question (untested):** whether the subform requires a "max entries" value to be configured (via `loadSubFormFieldProperties()`) before "Add Entry" becomes functional — flagged as the leading hypothesis for the unresolved add-row behavior.

## Technical Data
> OBSERVATION unless marked unresolved/unconfirmed. Directly captured via browser DOM/JS/network inspection (2026-09-15), including a request-count hook and direct jQuery event-registry inspection (`$._data(...)`) inside the Preview iframe.

- **DOM (builder-editing mode):**
```html
<li elname="builder-elem" class="startFrmBuilding sortenabled">
  <ul elname="subFormBodyUl" class="connectedUl sortableUl ulNoStyle subContWrap pageTemplate firstContainer margbot0 topAlign ui-sortable">
    <div id="subFormSortElemDiv">
      <div id="subFormElemDiv" class="template-subForm">
        <div class="templateHeader-subForm">
          <ul class="ulNoStyle">
            <li id="subFormElemHeaderLi" class="tempFrmWrapper tempHeadContBdr selectedType_Sub" onclick="loadSubFormFieldProperties()">
              <div class="subFormElemHead"><!-- title, close <a> with icon-minimize-pin --></div>
              <p style="display:none;" class="subfrmDesc" elname="subform-desc"></p>
            </li>
          </ul>
        </div>
        <div id="subFormSortElemDiv">
          <ul elname="subFormBodyUl" class="... ui-sortable">
            <!-- empty at creation; after drag-drop: one <li elname="builder-elem" fieldtype="SINGLE_LINE" link_name="SingleLine1" seq_no="1" page_no="1"> -->
          </ul>
        </div>
      </div>
    </div>
  </ul>
</li>
```

- **DOM (Preview mode, inside iframe):**
```html
<div elname="subFormAllFieldsDiv" class="fullPage_subFrmWrap">
  <div elname="subFormFieldsUl" class="ulNoStyle formFieldWrapper">
    <div class="subfrmFieldsCont" elname="rowTemplate" style="display:none">
      <!-- hidden template row, input name="SingleLine1_0" -->
    </div>
    <div class="subfrmFieldsCont">
      <div class="sfFieldWrapper empty_label subformIcn">
        <div role="button" aria-label="Add Entry" elname="subFormEntryAddBtn">
          <span class="addRowBtn"><svg class="icon flLeft"><use xlink:href="#icon-add"></use></svg></span>
        </div>
      </div>
      <input type="text" name="SingleLine1_1" ...>
    </div>
  </div>
</div>
```

- **JavaScript:**
  - Field-add-to-subform dispatch path: same `ZFForm.formBuilder` namespace as main-canvas field-add, routed through the subform's own sortable `<ul>` — confirmed working by visual/DOM result, but the exact handler chain **was not decoded** this pass.
  - Add-row control: **no handler located.** `subFormEntryAddBtn` and its child `<span>` have no `onclick` attribute (confirmed via `getAttributeNames()`); jQuery's internal event registry (`$._data(document, 'events')`) inside the Preview iframe showed no handler bound to the button itself — only one unrelated document-level "click-outside" catcher.
  - Found `ZFUtil.createNewRowInTableForFieldLabel(newTableBody, rowCloneElem, fldObj)` — a real row-cloning function (`.clone()`, resets `elname="rowTemplate"`, populates a `td[elname=fldLabel]`) — but its `<table>`/`<td>` signature suggests it belongs to a **table/grid-layout variant** (possibly the "Vertical" subform layout) rather than this "Inline" layout's add-row path. **The actual Inline add-row handler was not found** — possibly bound via a non-jQuery event system not introspectable the same way (custom pub/sub, or a framework-level binding).

- **Network:**
  - Adding a field to the subform (drag-drop): fires **two real requests** — `POST /{account}/form/{formLinkName}/subform/SubForm/fields` → `201 Created`, followed by `GET /{account}/form/{formLinkName}`. **This is the first component in this entire session's captures to trigger a server round-trip on a builder-time edit** — every other field/choice/toggle edit ([[yes-no-toggle-field]], [[rating-star-field]], [[choices-list-editor]]) was purely client-side until an explicit form-level Save.
  - Add-row attempt: zero requests logged across all attempts — consistent with row-add being intended as a pure client-side clone (matching the hidden-template DOM pattern), though this is a weaker data point since the action itself couldn't be confirmed to fire at all.

- **Response:** Field-add POST returned `201 Created` (status only; body not accessible through the available network-inspection tool, consistent with every prior capture this session).

- **State change:** Adding a child field to the subform persists server-side **immediately**, unlike every other field-level interaction captured this session, which stays local until an explicit Save. This is a genuine, confirmed behavioral divergence specific to subforms.

- **CSS:**
  - Empty dropzone (`.emptyFldDragWrap`): `display:block; visibility:visible; opacity:1` (dashed border / light-blue background visible in screenshot; exact computed values not captured this pass).
  - Add-row button (`subFormEntryAddBtn`): `22×22px; display:flex; visibility:visible; opacity:1` — always rendered, not hover-gated (unlike [[choices-list-editor]]'s +/− icons).

- **Animation/transition:** **Not captured** — the add-row action's visual effect couldn't be triggered to observe, and builder-canvas transitions weren't separately probed this pass since focus shifted to debugging the add-row mechanism.

### 2026-09-17 Retest — Add Entry investigation (all four variations ruled out)
> OBSERVATION, directly captured via browser DOM/JS/network inspection, Claude browser extension session (~110 actions across setup, four retest variations, and restoration).

Baseline confirmed on every fresh reload tested: the field always renders with exactly two `input[name]` fields inside the Subform — `SingleLine1_0` (hidden template row, zero-size rect) and `SingleLine1_1` (the one visible row). This 2-input state is the field's normal at-rest state, not leftover corruption from a prior session.

- **Variation 1 — Fresh session:** reloaded the builder page fully, opened a brand-new Preview session, and clicked the real "+" button (target verified via `document.elementFromPoint` resolving through the preview iframe to `div[elname="subFormEntryAddBtn"] > span.addRowBtn`). Result: input count stayed at 2, no `SingleLine1_2` appeared, zero network requests fired (fetch/XHR hooked in both the parent page and the iframe's own window). **Does not fix it.**
- **Variation 2 — Acknowledge the "ⓘ" icon first:** corrected finding — the circular icon next to "+" is **not** an info/acknowledgment icon. Its actual markup is `div.sfMoreCircle > span.more_iconList[onclick="showSfLiveMoreOption(this)"]` using `icon-more-vertical` (a "⋮" more-options glyph that only resembles a lowercase "i" at low resolution), opening a popover with two real actions: Duplicate (`.sfDuplicateIcn`) and Delete (`.sfDeleteIcn`) for the existing row. There is no acknowledgment/dismissal gate. Tested anyway: clicked it, dismissed with Escape, retried Add Entry — identical failure. **This variation doesn't apply and doesn't fix it.**
- **Variation 3 — Max Entries limit:** checked the Properties panel (builder, not Preview) before making any change — Entry Limit was already **Min: 0, Max: 5**, not defaulted to 1 as hypothesized. Ruled out immediately without needing to change anything.
- **Variation 4 — Popup and Vertical layouts:** a Zoho Forms form allows only one Repeatable Subform field ("Only 1 Subforms can be added in a form" — confirmed via a blocked drag-and-drop attempt), so isolation required changing the existing field's Subform Type in Properties rather than adding a second field.
  - **Popup:** renders a single "+ Add Entry" placeholder tile instead of an inline row. Clicked it directly; no console errors, no modal/popup DOM node appeared anywhere in the iframe document (only the same pre-existing, never-activated `div.tempSubfrmWrapper.subfrmWrapper-Cardpopup.subformBgWrap` wrapper was present). No popup opened, no row added, input count unchanged at 2.
  - **Vertical:** renders the row with a clearer three-icon toolbar (+, copy, trash). Clicked "+" precisely. Same result: no second row, count stayed at 2.
  - **All three layouts fail identically** — this rules out an Inline-specific rendering or event-binding bug and points instead to something layout-agnostic, most likely in the shared subform-entry-management JS that all three layout templates call into (consistent with this project's broader pattern of shared underlying engines behind different-looking front-ends).

**What this rules in as the likely cause (hypothesis, not confirmed):** given (a) the field always renders with exactly one hidden "index 0" row alongside the one visible "index 1" row, even on a hard fresh load, and (b) Add Entry never advances past that regardless of layout, acknowledgment, or entry-limit configuration — the most likely explanation is that whatever JS is responsible for appending a new row template is either throwing silently (errors inside the iframe's own JS context wouldn't necessarily propagate to the parent page's console listener the way this was checked) or is looking for a template/anchor element that the "index 0" ghost row has already consumed, leaving the append logic with no valid insertion point. **This was not confirmed at the source-code level** (the responsible function was not located/inspected this session) — it remains a hypothesis.

No destructive actions were taken this pass: the Subform field's type was changed to Popup and Vertical for isolation testing and restored to its original Inline setting before finishing; no theme was applied; no real data was submitted or exported.

## Recommended Second Pass
1. Locate and read the actual JS handler bound to `div[elname="subFormEntryAddBtn"]` (likely attached via event delegation on a parent container, not an inline `onclick`, based on what was found) to see what it does when it runs — specifically whether it throws, no-ops, or silently targets the wrong DOM node.
2. Investigate the hidden `SingleLine1_0` row directly: is it a legitimate first entry that's supposed to be visible and isn't (a rendering/visibility bug, in which case "Add Entry" may actually be working but the UI never surfaces beyond a max-visible-rows-of-1 rendering fault), or is it purely a dead template clone that should never have `SingleLine1` naming at all (an indexing/templating bug)? Checking the public-facing (non-preview) submission URL directly — bypassing the preview iframe entirely — would help isolate whether this is Preview-specific or affects the live published form too.
3. Check whether the account's browser-automation limitations (documented for the Kanban drag-and-drop case in [[entries-kanban-view]] — insufficient synthetic event fidelity / no genuine OS-level trusted input) could apply here too: try a real physical mouse click via a non-automated verification path, or inspect whether the handler expects a `pointerdown`/`pointerup` pair rather than a plain click.
4. Specifically check for a stale/incorrect entry-count variable: given Min:0/Max:5 was configured correctly but the field still behaves as if capped at 1, the bug may be that Add Entry's internal counter is reading the hidden `_0` row and the visible `_1` row as "already at 2 of 2" against some other stale limit, rather than respecting the real Max:5 setting from Properties.
5. Try a mobile/tablet Preview breakpoint — a `subformIcnMobileView` element was noticed, suggesting responsive-specific add-row behavior that may differ from desktop.
6. If Add Entry is confirmed working under some condition, complete the DOM/CSS/Animation capture for the row-add transition, which is currently entirely missing.

## Cross-Component Pattern Note
- **OBSERVATION:** Repeatable Subform is the most structurally distinct component captured this session — it commandeers the entire builder canvas as its own nested mini form-builder (unlike every other field, which edits in-place or via a side Properties panel), and it is the **only** builder-time interaction observed to persist to the server immediately rather than staying local until Save.

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| *(TODO — not yet researched — e.g. does Typeform/JotForm support repeatable field groups?)* | | | |

## Best Observed Approach
- TODO — needs both a completed second pass on this component and at least one competitor equivalent before a comparative judgment can be made.

## Sources
- OBSERVATION: Live exploration of Zoho Forms (forms.zoho.in), form builder → Repeatable Subforms (Inline) → Preview mode, via Claude browser extension, 2026-09-15. DOM/CSS/JS/network data retrieved via the page's own JS context, a request-count hook, and direct jQuery event-registry inspection. Add-row behavior explicitly flagged as unresolved, not guessed.
