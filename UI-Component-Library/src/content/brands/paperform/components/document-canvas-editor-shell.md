---
component: "Document Canvas / Editor Shell"
ui_category: "Application Layout > Editor shell"
source_product: "Paperform"
last_verified: "2026-09-23"
evidence_state: "source_reviewed"
status: 'complete'
summary: "Paperform's Draft.js-based document canvas -- question fields as genuine atomic blocks with nested Draft editors, native-HTML5-DnD reorder, and a full-document debounced-save model with a confirmed misleading 'SAVED DRAFT' status label."
---

# Component: Document Canvas / Editor Shell

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **No comparison baseline exists yet.** No other record in this library uses a rich-text document as the form-building surface — Zoho Forms uses a field-palette canvas ([[sidebar-settings-subnav]] and siblings), Typeform uses a question-per-screen editor. This record stands alone for now; later document-style builders (Notion forms, Tally, Coda, etc.) should compare against it. Scope is the editor shell only — the Draft.js document area, the "+" gutter block toolbar, the "/" slash-command menu, how question cards sit in the text, drag-reorder, and persistence. It does **not** cover individual question types (see [[paperform]] Section 3 for the full field-type list; those get their own component records as captured).

## Location
- **Product:** Paperform
- **Screen(s) it appears on:** Form builder → Design tab, main document canvas. Tested on scratch draft form `xborqzxj` (Pro trial account), never published.

## Structure
- **One Draft.js editor holds the whole document:** `div.notranslate.public-DraftEditor-content[contenteditable=true]`. Every top-level block carries `data-block="true"`, `data-editor="<editorKey>"`, `data-offset-key="<blockKey>-0-0"`.
- **Two block types coexist in one flow:** ordinary prose paragraphs (`contenteditable="true"`) and atomic blocks — question "cards" (`<figure class="fieldSection...">`) and page breaks (`<figure class="break...">`), both `contenteditable="false"`.
- **Question card internals:** a `div.Atomic--configuring` wraps a drag handle (`a.material-icons[draggable=true]`, "drag_indicator"), and **two nested Draft.js editors** (`data-editor="__field"`) for the question's title (placeholder "What is your question?") and help text (placeholder "Add some help text"). Two more `__field` editors were seen mounted but hidden (0×0 rect) — likely a drag-preview or theme-preview renderer, unconfirmed.
- **Insertion has two separate surfaces with different option sets** (see Actions table): a "+" gutter toolbar (5 one-click defaults) and a "/" slash-command menu (the full catalogue — QUESTIONS: 26 types; CONTENT: Image/Video/Page break/Section break/H1/H2/Paragraph/Adobe CC/Unsplash/Embed/HTML; QUICK QUESTIONS: Name/Text (Long)/Terms & Conditions/Radio Buttons/Checkbox; QUICK INTEGRATIONS: Papersign, Google Sheets/Airtable/Notion import; SURVEY QUESTIONS: Likert scale/NPS/Likert matrix).

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| Empty document line | Type `/` | Opens slash menu | Line becomes a live search input (`/ Type to search…`); dropdown opens under the caret, first row pre-highlighted | Same screen |
| Slash menu, typing after `/` | Type e.g. `rat` | Filters live | **Fuzzy/keyword matching, not substring** — `/rat` matched both "Rating" and "Likert (matrix)" despite neither label containing the literal substring "rat" | Same screen |
| Slash menu open | Press Enter | Inserts highlighted row | Typed query text removed; new card inserted; its config drawer opens automatically on the right | Same screen |
| Slash menu open | Press Escape | Closes menu | Menu closes with **nothing inserted** — but the typed `/query` text (e.g. `/rat`) is **left behind as literal prose**, not removed. A real, reproducible rough edge. | Same screen |
| "+" gutter button (block with caret) | Click "Add questions" | Inserts default field | A **Text** question card is inserted immediately — no type picker; change type afterwards from the card | Same screen |
| "+" gutter button | Click "Add break" | Inserts a break | A **Page break** is inserted immediately (no choice of Section break here); left-rail outline gets a new "PAGE 2" divider | Same screen |
| Question card title/help text | Click, type | Edits inline | Live-updates the card, the left-rail outline, and the drawer header ("Configuring '<title>'") simultaneously; a required-asterisk appears automatically | Same screen |
| Prose line just above a card | Press Down arrow | Attempts to move into the card | Selection moves into the card's **nested title editor** — but then typed keys insert **nothing anywhere**, and `document.activeElement` falls back to `<body>`. Further Down presses stay stuck. **Confirmed keystroke-loss bug.** | Same screen |
| Prose line just below a card | Press Up arrow (1st press) | Attempts to move into the card | Selection moves into the card's **help-text** editor | Same screen |
| Same, Up arrow (2nd press) | Press Up again | Skips the card | Selection **jumps over** the card to the end of the prose above; typing there works normally | Same screen |
| Start of the block directly below a card | Press Backspace | Attempts a prose/card merge | **Intercepted and guarded:** a confirm modal opens — *"Are you sure you want to remove these questions?"* (Cancel/Ok). While open, the DOM already shows the paragraph removed. **Cancel restores the document fully, plus one extra empty block** (a minor residue bug). | Same screen (modal) |
| Card's gutter drag handle | Native HTML5 drag-and-drop to a new position | Reorders the card | **Works.** Block key is preserved (move, not delete-recreate); surrounding prose reflows correctly with no orphan blocks. New order appears in the next autosave payload. | Same screen |

## Behavior & States
- **Card is atomic at the document-model level but not at the keyboard-navigation level** — confirmed via the saved JSON (see Technical Data): the card is a genuine Draft.js `atomic` block backed by an `IMMUTABLE` entity. Yet arrow-key navigation half-enters it through its nested title/help editors rather than cleanly skipping over it the way Notion or Google Docs would — a real inconsistency between the model and the interaction, not just a visual glitch.
- **Save-status label can be actively misleading:** the header shows "SAVE DRAFT" → "SAVING DRAFT…" → "SAVED DRAFT", but after inserting a question card via the slash menu, the label read **"SAVED DRAFT" for roughly 50 seconds** while the card was, in fact, not yet persisted — it only saved once a subsequent text edit triggered the debounced save (see Technical Data). This is a confirmed affordance-vs-reality gap, not a one-off.
- **Fuzzy search** in the slash menu, confirmed via the `/rat` → "Likert (matrix)" match with no literal substring overlap.

## Rules & Validation
- The `/` slash menu triggers **only on a genuinely empty line** — typed mid-line, at the end of a non-empty line, or at the start of a non-empty line, `/` is inserted as plain literal text with no menu.
- Card deletion via Backspace-merge is guarded by a confirmation modal, not silent.
- The underlying `fieldSection` entity's `data.fields` is an **array** — the plural language in the delete-confirm modal ("remove these questions") is consistent with this — suggesting grouped/multi-field atomic blocks may be possible (e.g. via a two-column layout), but this was **not directly confirmed** this pass.

## Technical Data
> OBSERVATION, directly captured via browser DOM/JS/network inspection, Claude browser extension session, 2026-09-23.
>
> ⚠️ **Corrected 2026-09-23 by [[respondent-runtime-guided-vs-standard]]'s retest — read the Network subsection below alongside that correction, not in isolation.** Two changes: (1) the autosave is a **steady ~15-second interval that fires only when state is dirty**, not a debounce restarted by each keystroke as originally described. (2) More significantly, the follow-up pass found that the **page break inserted during this record's own test never actually reached the server** — it was missing after a reload. What this record originally flagged as a timing risk ("whether reorder/insert alone arms the save is unconfirmed") is now confirmed as **real, concrete data loss** in at least one case.

- **DOM — plain prose paragraph:**
```html
<div class="__unstyled paragraph alignment--inherit|left [block--empty] [block--focussed]"
     data-block="true" data-editor="e7lbc" data-offset-key="1el99-0-0"
     contenteditable="true"> … </div>
```
- **DOM — question card:**
```html
<figure class="fieldSection fieldSection-undefined alignment--left [block--focussed]"
        data-block="true" data-editor="e7lbc" data-offset-key="egnhp-0-0"
        contenteditable="false">
  <div class="Atomic--configuring">
    <!-- drag handle, nested __field editors for title + help text -->
  </div>
</figure>
```
- **Confirmed via the saved raw JSON that the card is a genuine Draft.js `atomic` block:**
```json
{ "key": "egnhp", "type": "atomic", "text": " ",
  "entityRanges": [{ "offset": 0, "length": 1, "key": 0 }] }
```
backed by an `IMMUTABLE` `fieldSection` entity whose `data.fields` array holds the field's `type`, `title`/`titleRichContent`, `description`/`descriptionRichContent`, `required`, `hasVisibilityRules`/`visibilityRules`, `readOnly`, `disablePrefilling`, `defaultValue`, and (for a Price field observed in this pass) `products`/`quantities`/`hasProductImages`. **Model is "Draft inside Draft":** the outer document is one Draft ContentState; each atomic field's title and help text are their own nested Draft ContentStates (`titleRichContent`/`descriptionRichContent`), not plain strings.
- **Network — persistence:** `PUT https://paperform.co/api/v1/form/<formId>/versions/<draftVersionId>`, body `{ definition, theme, configuration, version, draft_version, draft_snapshot_id }` where `definition` is the **entire Draft raw ContentState** (~3.3 KB for a 4-block form) — a **full-document save, not a diff/op-log**.

| Action | Network result (directly measured) |
|---|---|
| Typing prose | No request per keystroke; one debounced PUT ~13–14s after the edit stops (measured 13.6s and 14.0s) |
| Inserting a question (slash → Yes/No) | **No PUT of its own** — nothing sent for ~50s after insertion (only analytics + a `POST /api/v1/i-did-it` onboarding-milestone ping); the card only persisted once the *next* text edit triggered the debounced save. Header said "SAVED DRAFT" the entire time it was actually unsaved. |
| Drag-reorder | No immediate PUT; new order went out with the next debounced save. Whether reorder alone arms the save timer independently is **unconfirmed**. |
| Publish | Not tested this pass (draft only) — the Publish split menu (Preview changes / Go to live form / Versions) implies the draft version is PUT continuously and Publish promotes it. |

  Also on the wire while editing: Microsoft Clarity (`POST z.clarity.ms/collect`, frequent), Google Analytics (`/g/collect`), Meta Pixel (`facebook.com/tr`).
- **Drag-and-drop mechanism:** native HTML5 drag-and-drop, not a JS pointer-tracked library. On `dragstart`, the row gets `DraggingItem DraggingItem__dragging`, a custom ghost element mounts (`div.Field.Field--preview`), and `dataTransfer` is set with type `application/json` — but its value reads back as the literal string `"[object Object]"`, confirming **an object was passed to `setData` without being serialized**; the real drag payload lives in app state, not in `dataTransfer`. The drop handler calls `preventDefault` on the Draft editor surface and resolves position from pointer coordinates. **A synthetic mouse-only drag (CDP pointer events) did not trigger reordering** — only a real sequence of native `DragEvent`s (`dragstart → dragenter → dragover → drop → dragend`) with a shared `DataTransfer` worked. Anyone automating tests against this editor needs the native-DnD approach, not a synthetic-pointer one.

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| *(NONE — no other product in this library uses a rich-text-document-as-form-builder architecture. Neither Zoho Forms' field-palette canvas nor Typeform's question-per-screen editor is directly comparable to this component.)* | | | |

## Best Observed Approach
- TODO — no comparable competitor implementation exists in this library yet to judge against.

## Second-Pass Flags
1. ~~Does a two-column layout (or anything else) put more than one field into a single `fieldSection` entity...~~ — **RESOLVED by [[respondent-runtime-guided-vs-standard]]:** guided mode splits a multi-field `fieldSection` into one screen per field with suffixed block keys (`egnhp_0`, `egnhp_1`), confirming `data.fields` is genuinely multi-field at runtime, not just defensively typed as an array.
2. Undo/redo (Ctrl+Z) behavior across atomic inserts, deletes, and reorders — not tested this pass.
3. Copy/paste of a question card, both within one form and between two different forms.
4. The inline prose formatting toolbar's full behavior, and whether prose can contain answer-piping tokens referencing other questions (directly relevant to [[paperform]]'s open question about merge-field/answer-piping support).
5. Where Section break (slash-menu-only, no gutter equivalent) sits in the block model, and how its runtime behavior differs from Page break.

## Cross-Component Pattern Note
1. **Native HTML5 DnD, not a pointer-tracked library** — confirms this editor's drag-reorder needs real OS-level drag events to test, the same automation constraint already documented for Zoho Forms' [[entries-kanban-view]] (where synthetic drag gestures also failed to register). Worth remembering as a recurring cross-product finding when testing any drag-and-drop surface in this library: try native `DragEvent` sequences before concluding a feature doesn't work.
2. **A UI status label that actively lies about save state** (inserting a card shows "SAVED DRAFT" while genuinely unsaved for ~50s) is a distinct, more severe version of the "affordance doesn't match behavior" pattern already seen in Zoho Forms' [[notification-settings-editor]] (a popup that looks interactive but is inert) — there the gap is "looks actionable, isn't"; here it's "claims a fact about system state that is false."
3. **Full-document save on every persist, not a diff/patch model** — worth comparing once Typeform's or Zoho's own save-payload shapes are captured at this level of technical depth, since this library has so far mostly documented *when* saves fire, not *what* they actually transmit.
4. **This canvas has two different deletion paths with two different safety levels for the same underlying action, confirmed in [[paperform-question-visibility-logic]] (PF10, 2026-09-23):** Backspace-merge deletion (documented above) is guarded by a confirmation modal, but a question card's own gutter ✕/"Remove" control deletes instantly with **no** confirmation and, critically, **no dependency check** — deleting a question that a Question Visibility Logic rule depends on silently orphans that rule, with no warning at either delete time or on the now-broken rule's own drawer. Worth explicitly testing both deletion paths on any future Paperform capture, not assuming one path's safety behavior applies to the other.

## Sources
- OBSERVATION: Live exploration + direct DOM/network inspection of Paperform, form builder Design tab, via Claude browser extension, 2026-09-23. Scratch draft form `xborqzxj` (Pro trial account) used for testing — a genuine, non-sensitive test artifact, never published, left in place with test prose, a Yes/No card, a Price card ("Deposit amount"), and a Page break, consistent with this project's practice for non-destructive test content.
