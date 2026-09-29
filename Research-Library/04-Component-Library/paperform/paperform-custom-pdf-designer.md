---
component: "Custom PDF Designer (After Submission → Custom PDFs)"
ui_category: "Content Creation > Composer/editor"
source_product: "Paperform"
last_verified: "2026-09-23"
evidence_state: "source_reviewed"
---

# Component: Custom PDF Designer

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **No comparison baseline exists.** Neither [[zoho-forms]] nor [[typeform]] documents per-submission PDF generation anywhere in this library — a genuine Paperform-only capability. **A third confirmed use of Draft.js in this product** (after [[document-canvas-editor-shell]]'s main form canvas and [[paperform-calculation-field-ai-helper]]'s calculation code pane) — the PDF designer is the same document-editing engine, not a template-upload or overlay tool.

## Location
- **Product:** Paperform
- **Screen(s) it appears on:** After Submission → Custom PDFs (an empty table with PDF Name/Edit/Copy/Delete columns + "Add PDF +") → the full-screen PDF designer (title = PDF name, "Back to editor" button). Tested on scratch draft `xborqzxj`, PDF "Submission Results" (id `ig02bd5`).

## Structure
- **File name field** with its own "≡+" answer picker — the output filename can itself include dynamic answer values (picker not opened this pass).
- **Theming toggle** (default off) — one click produced no visible change; **inconclusive**, not confirmed to do anything observable.
- **PDF Content** — a Draft.js document canvas, pre-filled with a starter template of four blocks: an `header-one` block ("Here are your results"), an empty paragraph, an **`atomic` block with entity type `summary`** (IMMUTABLE — see Behavior & States), and a trailing empty paragraph.
- **"Download sample" button** (not a link) above the canvas — present and clickable even though the form has 0 submissions, strongly implying a sample-data preview mode exists, but **not exercised this pass** (would trigger a real file download).
- **No explicit Save button and no inline live preview** — the canvas itself is the only on-screen view; the template persists via the form's normal draft autosave (see Technical Data).

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| "Add PDF +" | Click | Creates a new PDF template | `POST /api/v1/i-did-it` (`create_pdf` event) fires, followed ~1s later by an **immediate** `PUT` to the draft version (not the usual ~15s debounce — a genuinely faster-than-normal persistence for this specific creation action) | Full-screen PDF designer |
| "+" gutter → **Insert answer** | Click | Opens a scrollable field picker | Lists: Submitted At, every real question (Q1…N2, C1 Total), plus two system pseudo-fields: **Total Amount**, **Submission ID** | Same screen |
| Selecting a question from the picker (e.g. "Q3 Your name") | Click | Inserts a merge token | `{{ 3ftmg }}` is inserted at the caret — renders as a highlighted token while focused, then as a chip labeled "Q3 Your name" after blur | Same screen |
| "/" on an empty line (PDF designer canvas) | Type | **No-op** — inserts a literal `/` | Confirmed different from the form canvas: **the slash-menu does not exist in the PDF designer**, only the "+" gutter does | Same screen |
| "Back to editor" | Click | Closes the designer | Returns to the form builder; no explicit save action associated with this button | Same screen |

## Behavior & States
- **The Summary block is a genuine config card, not free text:** it renders inline in the document with a heading "Submission Summary" and the description "Shows all of the visible questions and answers, suitable to send to customers," plus controls for a preset (**Public / Private / Custom / Receipt**), an "Include unanswered questions" toggle (off by default), a **Summary Layout** choice (Table/List), and a remove (✕) control.
- **Merge tokens are stored as plain text, not a Draft entity** — confirmed via the raw JSON: `{"type":"unstyled","text":"{{ 3ftmg }}"}`. This is a real, confirmed difference from the main form canvas's question cards, which ARE genuine atomic Draft entities (per [[document-canvas-editor-shell]]). The chip-like rendering after blur is a display convenience, not a structural entity the way a question card is.
- **The merge syntax is identical to the Calculation field's syntax** — `{{ questionKey }}` — confirming one consistent answer-piping token format is reused across at least two genuinely different features (PDF templates and calculations).
- **Insertion UI differs meaningfully from the main form canvas:**

| | Form canvas ([[document-canvas-editor-shell]]) | PDF designer |
|---|---|---|
| "/" slash menu | Yes, on an empty line | **No — confirmed absent**, "/" is just a literal character here |
| "+" gutter options | Add questions, Add break, Add picture, Add video, Add HTML | **Insert answer, Add Summary, image, HTML** — a distinct, purpose-specific option set |
| Underlying editor | Draft.js | Same Draft.js engine, confirmed via identical DOM structure (`DraggingRow`, `BlockSideToolbar` gutter, `public-DraftEditor-content`) |

## Rules & Validation
- No explicit save exists for a PDF template — it persists exclusively through the form's own draft-version autosave, with the one exception that the initial "Add PDF" creation itself triggers an immediate out-of-band save rather than waiting for the normal debounce.
- Whether "Download sample" genuinely renders against synthetic/placeholder data (as its presence with zero real submissions strongly suggests) is **unconfirmed** — flagged as a direct next-step, not guessed at.

## Technical Data
> OBSERVATION, directly captured via browser DOM/network inspection, Claude browser extension session, 2026-09-23.

- **DOM:** `DIV.public-DraftEditor-content[contenteditable=true]` containing `H1.__header-one`, `DIV.__unstyled` (paragraph blocks), and `FIGURE.summary` (the atomic Summary block) — structurally identical wrapper classes to [[document-canvas-editor-shell]]'s own confirmed DOM, reinforcing that this is the same editor instance type, not a lookalike.
- **Storage model — confirmed nested inside the form's own draft version, not a separate resource:** `configuration.submission.pdfs[]`, each entry `{ name, id: "ig02bd5", definition: {blocks, entityMap}, theme: {19 keys incl. textGroups}, _i }`. This is the same "everything is one Draft document living inside the form version" architecture already confirmed for the form body ([[document-canvas-editor-shell]]), Products ([[paperform-payments-products-fields]]), and Calculations ([[paperform-calculation-field-ai-helper]]) — a fourth confirmed instance of this pattern.
- **Network:**

| Moment | Requests (confirmed) |
|---|---|
| Click "Add PDF +" | `POST /api/v1/i-did-it` → `[["create_pdf", {"target":"<formId>"}]]` (also mirrored to GA); ~1s later, an **immediate** `PUT /api/v1/form/<id>/versions/<draftId>` — faster than the normal debounce, specifically for this creation moment |
| Editing (answer insert, Summary options) | **No PDF-specific endpoint** — rides the normal ~15s dirty-check draft-autosave PUT already confirmed elsewhere in this product |
| Opening the designer alone | No request beyond the create event (i.e., merely opening an already-created PDF's designer triggers nothing) |
| "Download sample" | Not triggered this pass |

## Competitor Comparisons
> **Deliberately "none recorded."** Neither [[zoho-forms]] nor [[typeform]] documents per-submission PDF generation anywhere in this library.

| Capability | Zoho Forms | Typeform | Paperform |
|---|---|---|---|
| Designable per-submission PDF template | none recorded | none recorded | ✔ Draft.js document editor |
| Merge-field insertion | Zoho's "Field Labels" popup in the notification email editor is **confirmed inert** (see [[notification-settings-editor]]) | none recorded | ✔ **Confirmed working** click-to-insert picker, `{{ key }}` token, includes system fields (Submitted At, Submission ID, Total Amount) |
| Whole-response block | none recorded | none recorded | ✔ Summary block with 4 presets (Public/Private/Custom/Receipt) and 2 layouts (Table/List) |
| Dynamic filename | none recorded | none recorded | ✔ (its own answer picker on the File name field) |
| Sample preview without real submissions | — | — | Likely ✔ ("Download sample" present with 0 submissions) — **unconfirmed**, not exercised |
| Delivery targets | — | — | Attach to emails, Zaps, direct integrations, or manual download from submissions (per the Custom PDFs screen's own copy) |

## Best Observed Approach
- **RECOMMENDATION:** Paperform's working click-to-insert merge-field picker is a direct, concrete counter-example to Zoho's confirmed-inert "Field Labels" popup in [[notification-settings-editor]] — worth citing specifically as the fix for that exact gap if Zoho Forms' notification editor is ever revisited or redesigned. The single-editor-engine strategy (one Draft.js-based document model reused for the form body, calculations, and PDF templates, all sharing the same `{{ key }}` token syntax) is a genuinely elegant, consistency-driving architectural choice worth flagging regardless of competitor comparison.

## Cross-Component Pattern Note
1. **A fourth confirmed instance of "everything is one Draft.js document inside the form's draft version"** — form body, Products/payments config, Calculation formulas, and now PDF templates all persist this same way. This is now a well-established, load-bearing architectural pattern for this product, not a one-off observation.
2. **A genuinely different Draft.js insertion-UI configuration per context** — the PDF designer confirms the slash-menu is not a universal feature of every Draft.js surface in this product; each context (form canvas, PDF designer) exposes its own purpose-built "+" gutter option set, and only the form canvas has the "/" slash-command menu at all.
3. **Direct, actionable counter-example to a previously-documented Zoho weakness** — the first time this library has found a Paperform feature that is the confirmed *positive* resolution of a specific, already-documented Zoho Forms gap ([[notification-settings-editor]]'s inert Field Labels popup), rather than just a differently-implemented equivalent.
4. **An unusual persistence-speed exception** — the "Add PDF" creation moment triggers an immediate out-of-band save, breaking from the otherwise-consistent ~15s dirty-check debounce confirmed everywhere else in this product. Worth checking whether other "create a new X" actions (a new question, a new product) get the same immediate-save treatment, since this wasn't specifically tested for those.

## Sources
- OBSERVATION: Live exploration + DOM/network inspection of Paperform's After Submission → Custom PDFs screen and its designer, via Claude browser extension, 2026-09-23. Scratch draft `xborqzxj`, PDF "Submission Results" (id `ig02bd5`). "Download sample" was deliberately not clicked (would trigger a real file download); the sample-preview mechanism remains unconfirmed pending a follow-up pass.
