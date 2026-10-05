---
component: 'Entries Kanban View (Drag-to-Regroup Board)'
ui_category: 'Data Display > Kanban board'
source_product: 'Zoho Forms'
last_verified: '2026-09-17'
evidence_state: 'source_reviewed'
status: 'complete'
summary: "Entries screen's alternate Kanban view — columns are entirely defined by a required setup step grouping on a chosen choice-type field. A rigorous 2026-09-17 retest (three escalating drag methods plus direct JS source inspection) now shows the card grid is very likely not built on jQuery UI Sortable at all, refuting the earlier hypothesis; genuine trusted OS-level input would be needed to settle whether card drag works for real users."
---

# Component: Entries Kanban View (Drag-to-Regroup Board)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> ⚠️ **Retested 2026-09-17 — drag mechanics now investigated at the source level, not just by repeated failure.** Three escalating synthetic-drag methods (a coarse OS-level drag, a granular 14-step `MouseEvent` sequence, and a granular 14-step `PointerEvent` sequence) all failed identically — no reordering, no DOM change, no network call. Direct inspection of every loaded script bundle for `.sortable(` call sites found the earlier hypothesis (that the card grid shares `addSortableFnToKanbanChoice`, the Kanban *setup* screen's column-reorder function) to be **false**: that function is confirmed bound only to the "Modify Kanban View" config modal's choice-reorder list, not the card grid, and no element in the card grid's ancestor chain carries a `ui-sortable` class or jQuery `sortable`-keyed data. **Conclusion: the Kanban card grid is very likely not implemented with jQuery UI Sortable at all** — refuting, not confirming, the prior hypothesis. This could only be conclusively settled with genuine OS-level trusted pointer input, which is outside what browser-extension automation can produce — see the full retest report in Technical Data below. `evidence_state` has moved from `open_finding` to `source_reviewed` per this investigation's own recommendation, since the drag-mechanics question is now answered as thoroughly as this method allows, even though the underlying capability itself remains unconfirmed to work for real users.

## Location
- **Product:** Zoho Forms
- **Screen(s) it appears on:** Entries/Responses screen → a List View / Kanban View toggle on the entries table's toolbar.

## Structure
- Switching to Kanban for the first time (or any time after a prior setup was discarded) opens a required "Modify Kanban View" modal: **Group Columns By** — a dropdown listing only choice-type fields (Dropdown, radio, etc.; text/number/date fields are not offered; this test form had exactly one eligible field, "Dropdown"). Plus up to 4 additional fields to surface on each card (Matrix and Subform fields are excluded from that picker).
- Once configured, one column renders per choice option in the grouping field — this form: "First Choice" (pink header), "Second Choice" (yellow), "Third Choice" (purple) — each header tinted from a small cycling palette class (`kanbanCardColor1`, `kanbanCardColor2`, `kanbanCardColor3`…).
- No column shows an item-count badge; no per-column entry limit is enforced or displayed.
- Each card shows the configured extra field(s) as plain text (this pass configured "Single Line"), plus a hover-revealed "⋮" more-menu in the card's top-right corner.
- Empty column state: an illustrated placeholder (same visual style as the empty-dashboard-analytics state, see [[analytics-dashboard-kpi-bar-map]]) with the text "No Entries".
- Screenshot: not captured this pass (see Sources — DOM/CSS/JS data pulled programmatically).

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| List View / Kanban View toggle | Click | Client-side view swap, no network call (see Technical Data) | Entries re-render as cards grouped by the last-configured field, or prompts setup if none configured yet | Same screen |
| Kanban card | Drag to a different column | NOT OBSERVED this pass — see incomplete-record note above | NOT OBSERVED | NOT OBSERVED |
| Card's "⋮" more-menu | Click (hover to reveal, then click) | Opens a menu including `.entDelete` | Not deep-dived this pass | Same screen |
| Kanban → List View, with an active Kanban setup | Click | Triggers a confirmation dialog: "The configured Kanban View setup will be lost" | Confirming discards the grouping-field + card-field configuration entirely (ephemeral, not persisted server-side); returning to Kanban later requires re-configuring from scratch | Same screen, List View |

## Behavior & States
- Default state: no Kanban configuration exists until first explicitly set up via the modal; there is no server-persisted "last used" grouping — every view-switch cycle away and back requires reconfiguration.
- Interactive/hover/focus state: card's "⋮" icon is hidden (effectively 0×0) until hover, then becomes visible (~35×35), confirmed via direct DOM inspection.
- Active/selected/dragging state: NOT OBSERVED (see incomplete-record note).
- Disabled state: not observed.
- Loading state: not observed for the view-switch itself (client-side, no fetch — see Technical Data).
- Empty state: OBSERVATION — an empty column shows an illustrated "No Entries" placeholder, directly confirmed (all 3 columns were empty until the test entry was given a Dropdown value).
- Error state: not observed (no drag was ever completed to test a revert-on-error path).

## Rules & Validation
- Only choice-type fields (Dropdown/Radio-style) can be selected as the grouping field — enforced by the setup modal's own field picker, which excludes text/number/date/Matrix/Subform field types.
- Kanban configuration (grouping field + chosen card fields) is session-local/ephemeral — explicitly confirmed via the discard-warning dialog on switching back to List View; nothing about the Kanban setup itself is persisted server-side (distinct from the entry data changes a completed drag would presumably cause, which — based on the manual-edit equivalent captured below — do hit the server).

## Technical Data
> OBSERVATION where directly captured; explicitly marked NOT OBSERVED where the drag interaction itself blocked further capture (2026-09-16), Claude browser extension session, ~170 actions across two passes.

- **DOM:**
```html
div#kanban_main_div.kanbanMainContainer
 └─ div#kanbanContainer.kanbanCardWrapper
     └─ span.kanbanCards#kChoice{choiceOptionId}      (one per column, id keyed to the option's internal record id)
         ├─ div.kanbanCardHeading.kanbanCardColor{n}   (column header)
         └─ div.kanbanCardContain
             └─ div.kanbanCard.handCursor              (the card)
                 ├─ span > em.kanbanCardName            (field value text)
                 └─ div.kcardMore > svg.icon-more        (hidden until hover, 0×0 → ~35×35)
                     └─ .kcardMoreMenu, .entDelete
```
  Cards are ordinary DOM elements, not virtualized — with only one live entry this pass, large-list windowing couldn't be stress-tested, but there's no evidence of it (no `transform: translateY` recycling pattern, no fixed-height per-column scroll viewport beyond normal `overflow`).
  **Confirmed NOT native HTML5 drag-and-drop:** the card element's `draggable` attribute is `false`. A sibling function found in the app's own JS, `addSortableFnToKanbanChoice` (used for reordering choice columns in the Kanban *setup* screen), is built on jQuery UI's `.sortable()` widget — strong circumstantial evidence the card-drag grid uses the same widget family, though this wasn't directly confirmed for the card grid itself (the setup-screen function name is the only hard evidence; flagged for second-pass confirmation).

- **JavaScript:** NOT OBSERVED for the actual card-drag handler (blocked — see incomplete-record note). The view-toggle itself was confirmed to fire zero network requests (pure client-side re-render of already-loaded row data into cards).

- **Network — drag/drop itself NOT OBSERVED; closest verified equivalent below:**
  No request could be captured for an actual drag-drop, since no drag was ever completed. As a substitute data point, manually editing the same Dropdown field via the record's own edit form (not via Kanban drag) fired:
  - `PUT /{account}/report/{reportName}/record/{recordId}` → `200`
  - This is the only entry-mutation endpoint this report screen uses for a single-field update; it immediately moved the card to the corresponding column on next render. **INFERENCE:** the Kanban drag handler, whatever its internal mechanism, almost certainly wraps this same PUT-to-record endpoint with the new choice value as payload — but this has NOT been directly confirmed for the drag path specifically, only for the manual-edit path.

- **Response:** NOT OBSERVED for the manual-edit PUT's response body (not captured this pass).

- **State change:** NOT OBSERVED whether a real drag would be optimistic-UI (card moves instantly, reverts on error) or wait for the PUT to resolve before moving. The manual-edit substitute test showed the card only appeared in its new column after a full page/data re-render following the edit form's own save — not evidence either way for the drag path's UI timing.

- **CSS:** NOT OBSERVED — no dragging class, no ghost-element style, no drop-zone highlight style could be captured since no drag state was ever entered.

- **Animation/transition:** NOT OBSERVED — no drop animation or snap-back behavior could be observed for the same reason. Column-scroll behavior with many cards was also not tested (only one live entry existed this pass).

### 2026-09-17 Retest — drag mechanics, investigated rigorously
> OBSERVATION, directly captured via browser DOM/JS/network inspection and direct source-bundle search, Claude browser extension session (~95 actions).

**Setup:** reconfigured Kanban grouping (session-ephemeral, reconfirmed — switching to List View still triggers the "configured Kanban View setup will be lost" alert), grouped by the Dropdown field with Single Line as the card-display field. The only existing entry ("Test Response 1") had no Dropdown value, so it was edited via Edit Record (Dropdown → "First Choice") to produce a visible card, then restored to blank after testing.

New finding en route: the "Edit Record" modal is rendered inside its own iframe, `#editRecordPopupIframe` — the same architectural pattern as the Theme editor's `iframe.previewIframe` found earlier in this project. Ordinary scroll gestures on the parent page do nothing to it; the iframe's own `contentWindow`/`contentDocument` must be scrolled directly to reach the "Update" button. A naive DOM query for `button.btnCurve.blue` is a red herring — it matches a `display:none` ghost popup (`#addiFldsPopup`, "Additional Fields"), consistent with the ghost/duplicate-element pattern already seen elsewhere in this product (e.g. `SingleLine1_0` vs `SingleLine1_1` in [[repeatable-subform-inline]]). Also reconfirmed: clicking a Kanban card opens the same read-only "Record Summary" side panel as clicking a List View row — Kanban cards are not a separate editing surface.

**Three drag attempts, escalating rigor — all failed identically:**
1. **Coarse OS-level drag** (single start→end vector): failed, as in the prior session — only incidental text selection on the target column header, card stayed in place, no network call.
2. **Granular synthetic `MouseEvent` sequence:** `mousedown` on the card → 14 `mousemove` events interpolated in even steps from source to target with 40ms delays → `mouseup` over the target column, each dispatched via `element.dispatchEvent()` against the actual `elementFromPoint()` target at each step. Result: failed identically — no move, no network call captured by an installed monitor, DOM state byte-for-byte unchanged.
3. **Granular synthetic `PointerEvent` sequence** (a natural extension once MouseEvents failed, not in the original retry instructions): `pointerdown` → 14 `pointermove` steps (with `pointerId`, `pointerType: 'mouse'`, `isPrimary: true`) → `pointerup`. Result: also failed identically.

None of the three attempts produced any visible reordering, DOM class change on the card, or network request.

**Direct JS source inspection (the requested fallback verification):** searched all loaded script bundles for `.sortable(` calls.
- `reportthirdparty.*.js` — contains the generic jQuery UI Sortable/Draggable plugin source itself (the library, not an app-specific call site).
- `zfnewreport.*.js` — the two `.sortable(` call sites both trace to `addSortableFnToKanbanChoice(elem, elname)`, confirmed **by reading its full body this time, not just by name association** to instantiate `$(elem).sortable({containment: elem, placeholder: ...})` against `ul[elname="kanbanChoiceUl"]` — the Kanban *config editor's* choice-reordering list inside "Modify Kanban View," not the card grid. **This directly refutes the prior session's hypothesis that this function governs card drag-and-drop.**
- `reportszcomp.min.*.js` — contains a generic reusable UI component with `_initSortable`/`_destroySortable`/`_manageReorderable` methods wrapping a custom `zsortable`-namespaced jQuery plugin, but bound to a `_listBody` in what all surrounding context (`_getText`, `search.minKeywordLength`, `DSInstance`) identifies as a searchable dropdown/select component, not the Kanban board.
- Direct inspection of the live Kanban card element (`.reportViewCard.rkanbanCard`), walking its full ancestor chain: no element carries the `ui-sortable` class, and jQuery's internal data registry (`jQuery._data()`) shows no `sortable`-keyed data anywhere from the card up to the modal root. The card itself has no `draggable` attribute (not native HTML5 drag/drop either).

**Conclusion:** the Kanban card grid is very likely **not** implemented with jQuery UI Sortable at all — refuting, not confirming, the hypothesis carried over from the prior session. The actual drag-initialization code was not located in any of the three loaded first-party bundles searched; it may live in a bundle not loaded until a drag actually begins, be gated behind `isTrusted`-only event handling that categorically cannot be triggered by any scripted `dispatchEvent()` call (regardless of Mouse vs. Pointer event type), or the feature may not be functionally wired up in this account/build at all. This distinction could only be resolved with genuine OS-level trusted input (true hardware-level pointer control), which is outside what browser-extension automation can produce.

**Network/CSS/behavior capture — still not obtainable:** because no drag ever registered in any of the three attempts, none of the downstream evidence could be captured. For reference, the confirmed record-update endpoint pattern from the Edit Record save is `PUT /report/ToggleInspectionTest_Report/record/{id}`, and Kanban's own board load uses `GET /report_id/{reportId}/kanbanrecords` — but the earlier inference that a real drag would fire the same PUT remains unconfirmed for the drag path specifically.

**Restoration performed:** "Test Response 1" was edited to Dropdown = "First Choice" only as a prerequisite to populate a visible card. After all three drag attempts were exhausted, the record was edited again and Dropdown cleared back to blank, confirmed via List View — no real data was left altered.

## Recommended Second Pass
- If a real, trusted OS-level pointer (not extension-dispatched synthetic events) is available in a future session, retry the identical granular multi-waypoint drag with genuine hardware input — this is the one variable this pass could not control for, and would definitively settle whether the feature works for real users at all.
- Search the two script bundles not yet checked in depth for Kanban-card-specific drag logic beyond the `.sortable(` string (e.g. search for `mousedown`/`pointerdown` combined with `kanbanCard`/`rkanbanCard` specifically), and check whether a drag bundle loads lazily only after a real `mousedown`, which static fetch()-based script inspection would miss.
- Consider directly asking a Zoho support/docs channel whether Kanban card drag-reordering is a supported feature in this plan/build — the accumulated evidence (no Sortable instance, no drag response to any synthetic input class, the config-editor's Sortable usage being unrelated) is now strong enough to suspect the feature may simply not be implemented for card-to-column drag in this account, rather than being purely an automation limitation.
- Test column behavior with more than a handful of entries per column (scroll behavior, any lazy-render/virtualization threshold) — not attempted this pass, since time was prioritized on the core drag mechanics.

## Competitor Comparisons
| Aspect | Zoho Forms (existing) | Typeform | Paperform (see [[paperform-submissions-results-view]]) | Google Forms (see [[google-forms-responses-view]]) | JotForm (see [[jotform-tables-inline-edit-and-views]]) |
|---|---|---|---|---|---|
| Alternate view modes for entries/responses | Dedicated Kanban board view exists (this record) | **None. Confirmed absent.** Only a single table/grid view is offered (plus a row-density toggle, column settings, and export — no layout switcher). A full-page scan for Kanban/board/card/gallery-view terminology and for any `draggable` elements both returned zero matches, and the response grid is built on plain semantic `<table>` markup with no status-column or drag-and-drop scaffolding of any kind | **Also table-only, no Kanban/board alternative** — a plain table (checkbox column, configurable title column, one column per question). Distinctive instead for a first-class **Partial Submissions** tab (30-day retention, captured even with save-and-resume off) — a different axis of "alternate view," not a board/card layout | **No Kanban/board either, but a genuinely different "alternate view" axis of its own**: Summary (per-question aggregate charts), Question (per-question drill-down), and Individual (single-respondent, read-only rendered form with inline grading) — three real sub-views, none of them board/card-based, confirmed in [[google-forms-responses-view]] | **Confirmed to also offer a Kanban/Boards view, with at least one real confirmed advantage over this record's own**: a "from a field" auto-column-generation mode that derives board columns directly from a choice field's actual answer options (color-matched to the field's own chip colors) rather than requiring manual column definition — JotForm's setup is config-driven, not drag-to-regroup, so it wasn't stress-tested for drag reliability the way this record's Kanban was. JotForm also confirms a working **Calendar view** reflowing the same response rows onto a date axis — an alternate-view axis this record has no equivalent for |
| Soft delete / entry lifecycle extras | Not confirmed in this library | Not confirmed in this library | **Confirmed** — a "View Deleted" (trash) surface exists alongside Delete All, plus a distinct Products tab tracking stock allocation tied to submissions | Per-response delete only (Individual tab's delete icon, scoped to one response) plus a "Delete all responses" bulk option in the export menu — no confirmed "view deleted"/trash/undo surface | Not tested in [[jotform-tables-inline-edit-and-views]] |
| Inline editing of response data | Not confirmed at the list-cell level — edits tested via a separate Edit Record modal, not directly in the Entries list | Not confirmed | Not confirmed — documented surfaces are read-only | Confirmed, but scoped to grader metadata (points override, private feedback) rather than the respondent's own answer value | **Confirmed, directly in the grid cell, for several field types** (Short Text/Email/Single Choice) — a materially more direct editing model than this record's own Entries list, though genuinely inconsistent (Star Rating editable only via a row-detail panel, not the cell itself) |

## Best Observed Approach
- Zoho Forms and JotForm are now both confirmed to offer a board/Kanban-style entries view — Typeform's Responses tab and Paperform's Submissions tab are confirmed to have no equivalent (see Competitor Comparisons), though Paperform compensates with a first-class Partial Submissions surface neither Zoho nor Typeform has a recorded equivalent for. Zoho's own Kanban board's headline interaction (card drag-to-regroup) remains unconfirmed to actually work for real users after two rigorous investigation passes, where JotForm's Boards view sidesteps the question entirely by being configuration-driven (pick a grouping field) rather than drag-based — so "has a Kanban view" is not the same as "has a working drag-based one," and JotForm's design choice may simply avoid the open question Zoho's record is still wrestling with. JotForm additionally confirms direct inline cell editing on its own response grid, a capability no other product in this comparison set (including Zoho's own Entries list) is confirmed to have at the list-cell level.

## Sources
- OBSERVATION: Live exploration of Zoho Forms (forms.zoho.in), Entries/Responses screen → Kanban View, via Claude browser extension, 2026-09-16 (~170 actions across two passes, including direct JS event-listener instrumentation on the card element to diagnose why the automated drag gesture failed to register). DOM/CSS data retrieved programmatically through the page's own JS context.
- Test data hygiene: the one live entry used for this test ("Test Response 1") had its Dropdown field set to "First Choice" solely to produce a visible, draggable card, then reset back to blank (its original state) at the end of the session. No other entries or the form's theme were touched.
