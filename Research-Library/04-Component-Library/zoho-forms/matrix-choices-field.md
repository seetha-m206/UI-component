---
component: "Matrix Choices Field (Grid Radio Table)"
ui_category: "Data Input > Form"
source_product: "Zoho Forms"
last_verified: "2026-09-17"
evidence_state: "source_reviewed"
---

# Component: Matrix Choices Field (Grid Radio Table)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location
- **Product:** Zoho Forms
- **Screen(s) it appears on:** Form builder → Field Palette → "Matrix Choices" category (found by searching "Matrix" in the palette search box). Builder canvas and live/functional Preview form both inspected.

## Structure
- The "Matrix Choices" category offers 7 sub-variants, confirmed by direct inspection of the palette search results: **Radio, Checkbox, Dropdown, Textbox, Number, Currency, Multi-Type.** This record covers the default/Radio variant in full depth; the other six share the same grid/table architecture and only change the input control rendered inside each cell (confirmed via the "Choice Type" dropdown in Properties, which switches sub-variant post-hoc without needing to re-drag a different palette item).
- Dragging (or click-to-add, which also works directly from the palette) the Radio variant appends a field labeled "Matrix Choice" with a default **3×3 grid**: rows = questions ("First Question", "Second Question", "Third Question"), columns = answer options ("Answer A", "Answer B", "Answer C").
- Properties panel (double-click the field): rows and columns are independently configurable lists, each with per-item "+" (add) / "−" (remove) icons, plus a "Mark All as Mandatory" checkbox for rows and "Import predefined answers" / "Modify Column Width" links for columns.

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| Row/column "+" icon (Properties) | Click | Client-side list insert | New row/column appears with an empty label, auto-focused for immediate typing | Same panel |
| Grid cell (live form) | Click | Native `<input type="radio">`, custom visual layer (see Technical Data) | That option becomes selected within its row's group only; any prior selection in the same row is cleared (standard radio exclusivity) | Same screen |
| "Choice Type" dropdown (Properties) | Select a different sub-variant | Client-side re-render of the cell control | Grid stays intact; only the per-cell input type changes (radio → checkbox/dropdown/textbox/etc.) | Same panel |

## Behavior & States
- Default state: 3×3 grid, no cell pre-selected.
- Selected state: the ::after pseudo-element dot (see Technical Data) switches from `opacity: 0` to `opacity: 1` — instantly, no visible transition despite a declared `transition: all` (see CSS/Animation).
- Row independence: OBSERVATION, directly tested — selecting "Answer B" on "First Question" and "Answer A" on "Second Question" left both active simultaneously with no cross-row interaction; clicking "Answer C" on "First Question" correctly cleared "Answer B" on that same row while leaving "Second Question" untouched.
- Disabled/loading/error states: not observed this pass.

## Rules & Validation
- Row/column growth is not blocked client-side up to at least 8 rows (tested by repeatedly clicking "+" and saving successfully with 8 rows, several with blank labels). The actual ceiling is enforced **server-side**, not by a hardcoded client-side constant: a `#matrixRowColumnLimit` alert popup exists, wired to a save response containing `fieldErr.rows` or `fieldErr.columns`, but this was not triggered at 8 rows. The precise numeric limit is unconfirmed — reaching it would require further real saves to the live form, not pursued this pass.
- Each row is a fully independent radio group at runtime — confirmed by direct interaction, not assumed (see Behavior & States).

## Technical Data
> OBSERVATION, directly captured via browser DOM/JS/network inspection (2026-09-17), Claude browser extension session (~75 actions across builder configuration, live-form interaction, and restoration).

- **DOM:** A genuine HTML `<table>`, not a div-based CSS grid — confirmed by direct inspection:
```html
<table>
  <thead>
    <tr><th></th><th>Answer A</th><th>Answer B</th><th>Answer C</th></tr>
  </thead>
  <tbody>
    <tr>
      <th>First Question</th>
      <td>
        <input type="radio" id="MatrixChoice_row1_column1"
               style="opacity:0; position:absolute;" onmousedown="event.preventDefault()"
               aria-labelledby="MatrixChoice-col-1 MatrixChoice-row-1" aria-describedby="hint-MatrixChoice">
        <label class="cusChoiceLabel" aria-hidden="true"></label>
      </td>
      <!-- ...more <td> cells... -->
    </tr>
  </tbody>
</table>
```
  In the builder canvas specifically, the field's outer wrapper is `<li class="tempFrmWrapper one Columns sortenabled selectedType">` inside a handler div carrying `sortable-field-handler ui-sortable-handle` — **confirming the form builder's own field-reordering genuinely does use jQuery UI Sortable**, a real, working instance. This is a useful contrast against [[entries-kanban-view]]'s card grid, investigated earlier in this project, which was confirmed to have **no** Sortable instance at all despite a superficially similar drag-and-drop expectation.
  This field renders directly in the main document, no iframe involved (unlike the Edit Record modal or the Theme editor's Preview, both iframe-based in earlier captures).

- **Custom control implementation:** Each `<input type="radio">` is real but not visually used directly — `opacity: 0`, `position: absolute`, sized to fill the entire `<td>` (bounding rect matched the full cell, not a small circle), `cursor: pointer`, with an inline `onmousedown="event.preventDefault()"` handler. The visible control is a sibling `<label class="cusChoiceLabel" aria-hidden="true">` positioned over it: its `::before` pseudo-element draws an 18×18px circular outline (`border-radius: 50px`, `0.8px border`), and its `::after` pseudo-element draws a 12px filled teal dot (`rgb(46, 183, 159)`) toggling `opacity: 0 → 1` based on the input's `:checked` state. This is the same "invisible native input + custom `::before`/`::after` visual layer" pattern already documented for [[yes-no-toggle-field]] and other choice-style controls in this product.

- **JavaScript:** No handler names decoded for row/column add-remove this pass (client-side list mutation, behaviorally confirmed). Cell selection is native radio behavior with the custom label overlay — no JS event needed for the selection state itself, only for the ARIA/visual sync (implementation not decoded in detail).

- **Network:** Selecting any cell on the live form fires **zero network requests** — confirmed via the network-requests monitor before and after multiple clicks. Purely client-side, in-DOM state; consistent with other choice-style fields in this product (Decision Box, Yes/No) — selections are only transmitted on actual form submission, which was correctly never triggered.

- **CSS:** Both the `::before` (outline) and `::after` (filled dot) pseudo-elements carry `transition: all` with `ease` timing, but the actual computed `transition-duration` on both is `0s` — the dot's opacity flips instantly despite the declared transition. This extends the "declared-but-inert" CSS pattern already found on nearly every other component in this product to Matrix Choices as well.

- **Animation/transition:** None — see CSS above. This is a concrete point of contrast against the deliberately-animated components documented elsewhere in this project ([[toggle-radio-switch]]'s fadeIn/fadeOut, the Themes accordion's 400–800ms slideDown/slideUp): Matrix Choices radio selection has no comparable animation despite superficially similar CSS machinery.

## Recommended Second Pass
- Push row/column count past 8 to find the actual server-enforced ceiling and capture the `#matrixRowColumnLimit` alert's exact copy.
- Inspect the other 6 sub-variants (Checkbox, Dropdown, Textbox, Number, Currency, Multi-Type) individually — only the cell-control swap was confirmed via the Choice Type dropdown, not each variant's own DOM/behavior in depth.
- Decode the JS handler(s) behind row/column add-remove and the ARIA-sync logic for cell selection, neither of which was located at the source-code level this pass.

## Cross-Component Pattern Note
- **OBSERVATION:** This field's builder-canvas wrapper confirms the form builder's own field-reordering (`ui-sortable-handle`) is a real, working jQuery UI Sortable instance — direct evidence that Sortable genuinely works elsewhere in this product's builder chrome, sharpening the contrast with [[entries-kanban-view]]'s card grid, where a rigorous multi-method retest found no Sortable instance and no working drag-and-drop of any kind.
- **OBSERVATION:** The "invisible native input + custom `::before`/`::after` visual layer" pattern first seen on [[yes-no-toggle-field]] recurs here, confirming it is a shared, reusable styling approach across this product's choice-style fields rather than a one-off implementation.

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| *(TODO — not yet researched — Typeform has no directly equivalent grid/matrix question type identified so far in this research)* | | | |

## Best Observed Approach
- TODO — needs a competitor's equivalent matrix/grid question type captured before a comparative judgment can be made.

## Sources
- OBSERVATION: Live exploration of Zoho Forms (forms.zoho.in), form builder → Matrix Choices (Radio variant) → Properties panel → live functional Preview, via Claude browser extension, 2026-09-17 (~75 actions). DOM/CSS/network data retrieved programmatically through the page's own JS context.
- Restoration: the grid was grown to 8 rows to probe the save-time limit, then reduced back to exactly 3 rows and the removal confirmed persisted via a hard page reload. The entire field was then deleted from the form via its hover toolbar's delete icon (through the app's real "Delete Field" confirmation modal), since it had no real entry data attached. The builder canvas was confirmed back to its original field set with no trace of the test field remaining.
