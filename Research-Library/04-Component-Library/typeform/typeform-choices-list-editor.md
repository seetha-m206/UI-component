---
component: "Multiple Choice Editor / Choices List"
ui_category: "Forms > Form"
source_product: "Typeform"
last_verified: "2026-09-17"
evidence_state: "source_reviewed"
---

# Component: Multiple Choice Editor / Choices List

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

Direct Typeform-side counterpart to Zoho's [[choices-list-editor]] — see that record's Competitor Comparisons table for the side-by-side.

## Location
- **Product:** Typeform
- **Screen(s) it appears on:** Form builder, single-question canvas — the choices editor for a "Multiple Choice" field lives inline in the same canvas where the respondent-facing choices will render (no separate modal or side-panel editor).

## Structure
- Adding a **"Multiple Choice"** field (found under both "Recommended" and the "Choice" group in the Add-content palette, alongside Dropdown, Picture Choice, Yes/No, Legal, and Checkbox) inserts a question block with one default empty choice row and an **"Add choice"** text link beneath it.
- Each choice row shows, at rest: a small letter badge (**A, B, C, ...**) on the left inside the input field itself, and the choice's text. The badges are **live and auto-renumbering** — not fixed identifiers; deleting or reordering choices immediately re-letters every remaining row to stay sequential.
- On hover over a row, three additional controls fade in to the right of the text, plus a drag-handle icon (⋮⋮, a 2×3 dot grid) fades in to the left: a small circular **"✕" delete icon**, and two more icons (a branch/fork-shaped icon and a fish-like/curved icon) whose exact functions were not confirmed this pass — neither carries an `aria-label` or a native tooltip, so their precise purpose (most likely a per-choice logic-jump shortcut and a "hide from something" toggle, by shape/position — inference, not confirmed) is a gap for a future trace. Lack of an accessible label on interactive icon-only buttons is itself a minor accessibility gap worth noting.
- The right-hand settings panel for this field type offers: Map to contacts, Required, Multiple selection, Randomize, "Other" option, "None" option, and Vertical alignment (on by default).

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| "Add choice" link | Click | Client-side insert | New empty row appended, instantly focused and ready to type — no dialog, no reload | Same canvas |
| "✕" delete icon | Click | Client-side remove | Row instantly removed, **no confirmation prompt**; remaining rows immediately re-letter | Same canvas |
| Drag-handle icon (⋮⋮) | Press-drag-release | dnd-kit sortable handler | Reorders the list; letter badges relabel to match the new order | Same canvas |

## Behavior & States
- **Reorder via drag-and-drop is fully implemented and works correctly** — tested three separate times with genuine drag gestures (a real press-drag-release motion, not an instant teleport):
  1. Dragging the bottom choice ("Blue") up above the top choice in a Red/Green/Blue list produced **Blue/Red/Green** — correct, letter badges relettered to match.
  2. Dragging the (now top) "Blue" back down to the bottom of a Blue/Red/Green list produced **Red/Green/Blue** — correct.
  3. A third drag of the top item to the bottom of a Green/Blue/Red list produced **Blue/Red/Green** — correct.
  All three drags used the dedicated drag-handle icon specifically, not a click-anywhere-on-the-row drag — a purpose-built affordance separate from the row's text-click-to-edit behavior.
- No confirmation dialog on delete — a genuine UX difference worth noting (instant, irreversible-in-the-moment removal, though presumably recoverable via the "unsaved changes"-free autosave history if Typeform offers one, not confirmed this pass).

## Rules & Validation
- No minimum-choice guard was tested/observed this pass (unlike Zoho's [[choices-list-editor]], which has an implied minimum-choice guard on delete).

## Technical Data
> OBSERVATION, directly captured via DOM inspection, a custom `fetch` interceptor plus `read_network_requests`, and genuine (non-instant) drag-and-drop interaction, Claude browser extension session, 2026-09-17.

- **DOM:** each choice is a semantic `<li>` inside what is, by structure, an ordered/unordered list of choices:
```html
<li data-qa="choice-0" data-disabled="false" style="z-index: 1;" class="...">
  <div><div><div>
    <fieldset ...>
      <div><div>
        <div class="notranslate ql-container ql-bubble">
          <div class="ql-editor" contenteditable="true">Blue</div>
        </div>
      </div></div>
    </fieldset>
  </div></div></div>
  <button aria-label="Drag handle" role="button" aria-roledescription="sortable"
          aria-disabled="false" aria-describedby="DndDescribedBy-2" tabindex="0">
    <!-- ⋮⋮ drag icon -->
  </button>
  <!-- delete (✕) button and two unlabeled icon buttons -->
</li>
```
  - **Choice text is authored via Quill.js** (`ql-editor` / `ql-container ql-bubble`), the same rich-text-editor library confirmed for question titles elsewhere in the builder.
  - The drag-handle button carries `aria-label="Drag handle"`, `role="button"`, `aria-roledescription="sortable"`, and `aria-describedby="DndDescribedBy-2"` — this exact combination is the signature accessibility fingerprint of **[dnd-kit](https://dndkit.com/)**, a modern, accessibility-first React drag-and-drop toolkit. Concrete evidence of *which* drag library Typeform uses, not just that dragging "seems to work."
  - At rest, the `<li>` carries only `style="z-index: 1;"` — no transform; dnd-kit typically applies `transform`/`transition` inline only while a drag is active or settling, matching this idle-state signature.
  - No `<canvas>` and no drag-related classes beyond dnd-kit's own accessibility scaffolding were found — a real, general-purpose sortable-list implementation, not a bespoke reordering mechanism.

- **Network — not client-side-only:** unlike the Theme/Design editor ([[theme-design-editor]], which holds all changes client-side with zero network calls until an explicit "Save changes" click), every content-edit action tested here — drag-reorder, delete, and by extension add — triggers an immediate autosave sequence, confirmed via a custom `fetch` interceptor across three separate actions:
  1. **`PUT https://admin.typeform.com/bff/bob-the-builder/forms/{formId}`** — the actual write, a backend-for-frontend (BFF) endpoint specific to the form builder (internally nicknamed "bob-the-builder"), firing immediately after each drag or delete.
  2. **`GET https://api.typeform.com/drafts/{formId}`** — a re-fetch of the draft state immediately after the write, presumably to resynchronize client state with the freshly-saved server copy.
  3. **`GET https://api.typeform.com/forms/{formId}/alias`** — fired alongside the above each time (once returning a 404, which did not visibly affect the UI — likely a routing/slug lookup with nothing to report for this form).
  4. **`POST https://api.typeform.com/gql`** — a GraphQL call also fired in the same batch each time; payload not inspected this pass, so its exact purpose is inferred, not confirmed.
  This is a genuinely different persistence model from the Theme/Design editor: Typeform draws its autosave line at *content* vs. *presentation*, not uniformly across the whole builder — a nuance worth carrying into any broader Typeform-vs-Zoho autosave comparison.

- **CSS/Animation:** no drag-state styling could be captured at the precise mid-drag frame this pass (synthetic pointer-event dispatch to freeze a drag mid-flight was attempted but not completed reliably) — a real gap, not a "confirmed absent" finding. What is confirmed: the base choice-row class (`.dVrivy` in this build) is a plain flex-row layout rule (`display:flex; align-items:center; flex-grow:1; position:relative`) with no transition property defined at the class level — consistent with dnd-kit's typical pattern of applying `transform`/`transition` as inline styles only while a drag is actively in progress or settling. The only inline style present at rest is `z-index: 1`, which dnd-kit uses to keep the currently- or recently-dragged item stacked above its siblings during and immediately after a reorder. No animation was visually apparent on add or delete — both update the list instantly.

## Recommended Second Pass
- Identify the exact purpose of the two unlabeled per-row icon buttons (likely logic-jump and a visibility toggle, by shape/position — not confirmed).
- Capture mid-drag CSS state (ghost/placeholder styling, opacity change, drop-shadow) with a more reliable frame-freezing technique.
- Inspect the GraphQL call's payload to confirm its purpose in the autosave batch.

## Cross-Component Pattern Note
- **OBSERVATION:** this is the second Typeform component in this project (after [[typeform-automations-builder]]) confirmed to autosave per-action against the `bob-the-builder` BFF, reinforcing that Typeform's autosave-vs-explicit-save split is drawn per *editor surface* (content/structure editors autosave; the visual Theme/Design editor alone batches to an explicit Save) rather than being a single uniform rule across the whole product.

## Competitor Comparisons
See [[choices-list-editor]] (Zoho Forms) — the full side-by-side table and "Best Observed Approach" verdict live there, per this project's convention of keeping the first-researched product's record as the canonical comparison table.

## Sources
- OBSERVATION: Live trace on a real Typeform account (admin.typeform.com), form builder, via Claude browser extension, 2026-09-17. A "Multiple Choice" field was added fresh and its choices list built up (Red, Green, Blue → reordered, deleted, re-added as Yellow) via direct interaction. Traced via DOM inspection, a custom `fetch` interceptor plus `read_network_requests`, and genuine drag-and-drop interaction using the platform's native drag gesture (not simulated instantly) at slow, deliberate mouse speed.
