# Design-Principles Audit: Zoho Forms vs. Typeform

**Rubric source:** `product-suite-design-principles-v1.7-desktop.md` (repo root) — reused as a generic interaction-design testing standard, not a literal compliance check (neither product consumes the "Front Dashboard v2.0" library that document is written for). See `Research-Library/prompt-backlog-design-principles-audit.md` for the full prompt set and scoping notes (which checklist items are structurally N/A for a third-party product and excluded).

**Scoring:** 0 (fail) / 1 (partial) / 2 (pass), per the source document's own rubric. `N/A` = structurally inapplicable (Front-Dashboard-library-specific), not a failure. `NOT OBSERVED` = genuinely not yet tested this pass.

**Status:** D1–D4 done for Typeform; D1–D3 done for Zoho Forms (**D4-zoho still outstanding** — the only gap in the D1–D4 cluster). D5–D10 not yet run, each split the same way (`D5-zoho`/`D5-typeform`, etc.) in `prompt-backlog-design-principles-audit.md`.

---

## D1. Buttons: sizing, colour mapping, hover/focus stability

> OBSERVATION, Claude-in-Chrome browser extension session, 2026-09-18. **Session was interrupted partway through** (the browser bridge stopped responding after ~10 actions per product) — findings below are real and directly observed, but the pass is incomplete. See "Gaps — needs a follow-up pass" at the end of this section before treating D1 as closed.

### Item 15 — button min/max width, no tiny/banner/wrapped labels

| Product | Score | Evidence |
|---|---|---|
| Zoho Forms | 2 | "Access Form" (primary, 120×34px) and "Preview" (secondary, 99×36px) both comfortably sized, no wrapped labels, no tiny/banner-sized buttons observed. |
| Typeform | 2 | "Share" (84×32px) and "View plans" (95×32px) both comfortably sized; heights match precisely across the two. |

### Item 16 — consistent colour-to-verb mapping within each product

| Product | Score | Evidence |
|---|---|---|
| Zoho Forms | 2 | Row bulk-toolbar's "•••" overflow menu: Enable (green icon/text), Disable (neutral gray), Trash (red icon/text) — a clean, consistent verb→colour mapping. |
| Typeform | 2 | Row "•••" menu (Copy link, Content, Workflow, Connect, Rename, Duplicate, Copy to, Move to, Delete): "Delete" is red text, every other item neutral — consistent. |

### Item 27a — icon-button hover preserves resting box (no size growth, no solid-fill-beyond-box)

| Product | Score | Evidence |
|---|---|---|
| Zoho Forms | 2 | Row kebab (more-actions) icon: hover tested directly — circular hit-area stays the exact same size, only a light gray tint fills in. No growth/shrink. |
| Typeform | 1 (partial) | Only the menu ITEMS inside the "•••" dropdown were hover-tested (full-width light gray row tint, no size change) — the "•••" TRIGGER icon itself was not directly hover-tested this pass. Scored partial pending that specific check; the pattern observed elsewhere in this product makes a fail unlikely, but it isn't confirmed. |

### Destructive icon-buttons never solid-filled inside a row (extends §3.2's row-actions rule via §3.12 — this project's own prompt check 4, not source-document checklist item 4)

| Product | Score | Evidence |
|---|---|---|
| Zoho Forms | 2 | "Trash" stays plain red text/icon on transparent background at rest and on hover (faint tint only) — never a solid red fill. |
| Typeform | 2 | "Delete" in the row "•••" menu: red text only, hover adds a full-width light gray row tint, never a solid red fill. |

### Item 17 — one primary colour value suite-wide; hover/active/disabled shades from a shared theme; no gradients/custom shadows

**NOT OBSERVED this pass** — not reached before the browser-extension connection was interrupted. One incidental cross-product data point surfaced without being directly tested for this item: Zoho's primary teal (`rgb(36,166,138)` on "Access Form") and Typeform's "View plans" teal (`rgb(23,119,103)`) are visually close but not the identical value — expected and fine, since item 17's "one value suite-wide" principle applies *within* a single product's own design system, not across two unrelated competitor products. Needs a dedicated pass per product.

---

### D1-followup — the 3 remaining gaps, closed (2026-09-28)

> OBSERVATION, Claude-in-Chrome browser extension session, 2026-09-28, run as two separate single-product sessions per this backlog's established convention.

#### Item 27a (continued) — bulk-toolbar icon-only button hover stability

| Product | Score | Evidence |
|---|---|---|
| Zoho Forms | 2 | Confirmed via CSS source (`listingpage.css`) rather than live `:hover` matching (unreliable through automation). The close/deselect icon (`.moveFolDel:hover .delete_icon`) has an explicit hover rule that only recolors the glyph fill/stroke — no width/height/padding/border change. The "•••" more-menu button (`.ListMenus`, 34×34px, `border-radius:50px`) has no dedicated hover rule at all, so its hit-area is static by default too. Hit-area size is stable; only color shifts, consistent with the row-level kebab icon already confirmed in the original D1 pass. |
| Typeform | 2 | The "•••" row-trigger icon itself (not just its dropdown items) — 24×24px, 6px radius — is fixed in both states: unhovered `background-color: rgba(60,50,62,0)` (transparent) → hovered `rgba(89,86,93,0.04)` (faint gray tint), via `transition: background-color 0.2s`. No size, shape, or position change. Closes the gap left open in the original D1 pass. |

#### Cancel/Close vs. Edit/Duplicate/Export-style button styling (both products)

| Product | Score | Evidence |
|---|---|---|
| Zoho Forms | 2 | Best co-located example: the Entries bulk-selection toolbar (select a row in All Entries) shows Print, Export, and a red Close (X) icon side by side, plus text actions Delete / Assign Task / Document Merge. All share identical flat/no-chrome styling (no background, border, or box-shadow) — the only differentiator is color-coding by semantic role (Close/Delete in red, everything else neutral dark gray/black), not a different visual weight or treatment. |
| Typeform | 2 | Found on the "Export responses" modal (Cancel + Export) and cross-checked against "Delete form?" (Cancel + Delete). Consistent pattern both times: Cancel is a plain ghost/text button (transparent, muted gray text, no border); the paired action is a solid filled button (near-black for Export, red for Delete). Both share the same shape (8px radius, 32px height) — the distinction is fill-vs-no-fill only. Note: Typeform rarely exposes Edit/Duplicate/Export as standalone buttons — those mostly live inside "•••" dropdowns as uniform text items, with only "Delete" colored red. |

#### Item 17 — one primary colour value suite-wide; hover/active/disabled shades from a shared theme; no gradients/custom shadows

| Product | Score | Evidence |
|---|---|---|
| Zoho Forms | 2 | Checked primary buttons across independent screens/dialogs — "New Report" (Reports empty state), "Access Form" (builder header), "Create Form" (New Form sub-dialog), plus in-context confirm buttons (Send/OK/Proceed/Done/Refresh). Every one resolves to the identical value `rgb(36, 166, 138)`, `background-image: none`, `box-shadow: none` — a single, consistently reused accent token with no shade drift and no gradient/shadow deviations found anywhere. |
| Typeform | 1 (partial) | Not one consistent color — two legitimate, purpose-separated tokens exist: core actions ("Create form," "Copy link," "Export," "Publish edits," main workspace CTA) use near-black `rgb(60,50,62)`; monetization/upsell CTAs ("View plans," the "Get more responses" banner) use a distinct teal-green `rgb(23,119,103)`, reserved specifically for that purpose. Destructive actions use red `rgb(199,78,67)`. No gradients or custom drop-shadows found anywhere (`backgroundImage: none`, `boxShadow: none` on every sample) — scored partial rather than a clean pass because "one primary colour value suite-wide" isn't literally true, even though the split is deliberate and internally consistent, not drift. |

**D1 is now fully closed for both products** — all 4 items (15, 16, 17, 27a) scored, item 17 and the two follow-up checks resolved.

## D2. Popups: modal/drawer sizing, anatomy, toast behavior

> OBSERVATION, Claude-in-Chrome browser extension sessions, 2026-09-25, run as two separate single-product sessions.

### D2 — Zoho Forms

**Triggers used:** entries bulk-delete ("Permanently Delete Entries"), form-level Trash ("Move to Trash?") and permanent delete ("Delete Permanently?"), Enable/Disable, Duplicate ("Duplicate Form As"), the field Properties side drawer, and 4 success-feedback attempts (Settings save, Field Properties save, Enable/Disable confirm, Move-to-Trash confirm). All test-data changes reverted; account ended at its original 3-form state.

| Popup | w × h (px) | border-radius | box-shadow | Close (X)? | Footer |
|---|---|---|---|---|---|
| Permanently Delete Entries | 575 × 230 | 3px | `rgba(0,0,0,.1) 1px 1px 10px 0px` | **No** | Cancel / Yes, Delete (red) |
| Enable or Disable a form | 650 × 288 | 8px | none | Yes | Cancel / Done (teal) |
| Duplicate Form As | 650 × 260 | 8px | none | Yes | Cancel / Create (teal) |
| Move to Trash? | 620 × 313 | 8px | none | Yes + icon illustration | No / Yes (red) |
| Delete Permanently? | ~620 × ~310 | 8px | none | Yes + icon illustration | Cancel / Yes (red) |
| Field Properties drawer | 700 × 714, full-height right-anchored (~61% viewport width) | n/a (edge panel) | none | Yes | Cancel / Save (teal), sticky footer |

| Item | Score | Evidence |
|---|---|---|
| 18 — sizing pattern | 1/2 | A genuine coarse split exists (centered dialog for quick actions vs. full-height side drawer for the longer field-editing task) — the right architectural instinct. But within the dialog tier, 5 dialogs produced 4 different width/height pairs and 2 different corner radii (3px on the entries-delete dialog vs. 8px on all 4 form-management dialogs) — not one reused "confirmation" size. |
| 19 — anatomy consistency | 0/2 | Visibly varies screen to screen, including between two same-purpose destructive dialogs: the Close (X) control and icon illustration are both present in some dialogs but absent from "Permanently Delete Entries"; footer decline-button label drifts ("Cancel" in 4 dialogs, "No" in "Move to Trash?"). **Directly corroborates and extends [[destructive-confirm-modal-comparison]]'s independently-built-modal-systems finding** — at least 2–3 distinct dialog implementations in current use. |
| 20 — toast position/duration/stacking | 0/2 | **No conventional floating/corner toast component found at all**, across 5 different success-triggering actions, verified both visually and via a `MutationObserver` watching for any newly-inserted DOM node app-wide (would catch even a toast appearing/vanishing within milliseconds). Feedback is either an inline "✓ Saved" pill beside the triggering button (Settings), or a silent direct UI mutation with no feedback element at all (Field Properties save, Enable/Disable, Duplicate, Move-to-Trash). |
| 21 — long-message overflow handling | 0/2 | Not applicable — no toast component exists to evaluate. Flagged as "the component that would need this behavior doesn't consistently exist," not a confirmed-broken specific instance. |

Cross-reference: [[destructive-confirm-modal-comparison]] (Zoho's two independently-built modal systems).

### D2 — Typeform

**Triggers used:** "Discard form suggestions?" (traced directly via the Content builder's AI chat panel — generate an unapplied suggestion, close before applying — since [[typeform-ai-chat-to-create]] was unreachable in that session), "Delete form?", "Delete contact?", and the Contacts "Add new contact" drawer, plus a Save action to trigger a toast.

| Item | Score | Evidence |
|---|---|---|
| 18 — sizing pattern | 2/2 | Confirmation modals (Discard suggestions, Delete form, Delete contact) are **pixel-identical**: 440px wide, 16px radius, ring shadow, centered — confirmed across both Forms and Contacts. The Contacts "Add new contact" drawer is a distinct, internally consistent class: 600px, full-height, right-docked, square corners. Two purpose-appropriate, consistently-applied size classes. |
| 19 — anatomy consistency | 1/2 | Close-icon corner position and footer layout (ghost Cancel left of a solid primary/destructive action) are consistent across all 4 footers tested, and the drawer's footer stays sticky while its body scrolls. Docked a point because every title triggered was short — truncation-vs-wrap behavior was never actually put under stress, flagged as unverified rather than guessed. |
| 20 — toast position/duration/stacking | 1/2 | Position (bottom-right) and duration (~2–4s) are consistent. Stacking is genuinely inconclusive: the toast's bounding box sits directly over the drawer's own Save/Cancel footer, so a second save's click landed on the toast instead — a real interaction hazard, flagged rather than guessed at. |
| 21 — long-message overflow handling | 2/2 | A ~130-character test string never truncated or broke the toast's box — it wrapped and grew taller instead. Side effect noted: that growth is exactly what causes the footer-overlap hazard in item 20. |

Cross-reference: [[typeform-ai-chat-to-create]]'s discard-confirmation dialog, now directly confirmed rather than assumed.

## D3. Truncation/tooltip recovery, dropdowns, scrollbars

> OBSERVATION, Claude-in-Chrome browser extension sessions, 2026-09-27/28, run as two separate single-product sessions.

### D3 — Zoho Forms

**Long-text stress cases used:**

| # | UI location | Stress text | Length |
|---|---|---|---|
| 1 | Dropdown field's label (builder canvas + rendered form) | "This Is An Extremely Long Field Label Used To Stress Test Truncation Wrapping And Tooltip Recovery Behavior In The Zoho Forms Builder Canvas" | 143 chars |
| 2 | One of 12 Dropdown choices | A ~180-char value containing "stress" (used to test the search box) | ~180 chars |
| 3 | File Upload field's uploaded-file chip (live form) | `This_Is_An_Extremely_Long_File_Name_Used_To_Stress_Test_Truncation_And_Tooltip_Recovery_Behavior_In_The_File_Upload_Widget.txt` | 129 chars |
| 4 (bonus) | All Entries table column header | Same 143-char label, rendered as `<th class="ui-resizable">` | 143 chars |

| Item | Score | Evidence |
|---|---|---|
| 22 — long-text stress, 3+ locations | 2/2 | 4 locations tested, each resolving overflow with a different, internally-consistent, non-broken strategy: field label wraps cleanly (2 lines); dropdown choice wraps inside its row (row height grows); file-upload filename genuinely ellipsis-truncates (`text-overflow: ellipsis; white-space: nowrap; overflow: hidden` on the `<em>`, with extension/size/remove-button kept as separate never-truncated siblings); table column header neither wraps nor truncates — the `<th>` sizes to the text's full 944px width and the *table* becomes horizontally scrollable instead (see item 25). All three distinct strategies (wrap / ellipsis-truncate / no-constrain-and-scroll) execute cleanly in their own context. |
| 23 — tooltip recovery on every truncated instance | 0/2 | Only 1 of the 4 locations is a true CSS-clipping truncation case (the file-upload filename). Confirmed via `getAttribute('title')` returning `null` on the truncated element and all 5 ancestors up to the field container — no `title`, `aria-label`, `data-tooltip`, or `data-title` anywhere. Manually hovered for 2s: no tooltip appeared. No in-place recovery mechanism exists at all (only removing/re-adding the file, or widening the window past the truncation threshold). |
| 24 — dropdown 10+ options: max-height scroll + search | 2/2 | Tested a 12-choice Dropdown: search box present by default (default is search-shown, not opt-in), option list renders at a fixed height (~5 of 12 visible) with internal scroll, typing "stress" correctly narrows to the matching option, and the internal scrollbar is a thin/rounded/gray custom-styled bar (no OS default, no arrow buttons). |
| 25 — horizontal scroll containment + scrollbar styling | 1/2 | **Containment: correct.** Measured directly on the All Entries table (3632px content vs. 1029px viewport) — `document.body`/`documentElement` scrollWidth/clientWidth are equal (1150/1150); only the inner `div.main_tableclass` scrolls, never the page. **Styling: inconsistent.** Three different scrollbars compared directly: dropdown option list = thin/rounded/no-arrows (modern); field-palette sidebar = thin track with an up-arrow button (classic-hybrid); Entries table horizontal scroll = thick thumb with arrow buttons at both ends (fully classic/legacy). Architecturally sound, visually three different aesthetics coexisting. |
| 26 — sticky table header | 0/2 | The test form's Entries table has only 1 row, so no real scroll-vs-header interaction could be visually demonstrated, but the underlying CSS is conclusive regardless: both `<thead>` and its header `<tr>` compute to `position: static; top: auto` — no sticky/pinning mechanism declared anywhere. A `position: static` header cannot stay pinned once enough rows force vertical scroll. |

Cleanup: all stress-test mutations (uploaded file, Dropdown label/choices, extra browser tab) fully reverted without ever clicking Submit; account ends unchanged (1 test entry on Toggle Inspection Test, unchanged).

### D3 — Typeform

**Long-text stress cases used:** a long form/question title, a long choice-list option, a long Contacts name/email, and the Language-settings "Main language" dropdown (40+ options).

| Item | Score | Evidence |
|---|---|---|
| 22 — long-text stress, 3+ locations | 2/2 | Question titles and choice-list options wrap cleanly (no truncation) in both the builder and live Preview; Contacts table cells (name, email) truncate cleanly with ellipsis. No overflow or broken layouts anywhere across all locations tested. |
| 23 — tooltip recovery on every truncated instance | 1/2 | Contacts table cells recover full text on hover (a real tooltip). The Pages sidebar's clipped question titles do **not** — no tooltip, no `title`/`aria-label` — a real, confirmed gap on one of the two truncation surfaces found. |
| 24 — dropdown 10+ options: max-height scroll + search | 2/2 | The Language settings' "Main language" dropdown (40+ options) has both an internally-scrolled max-height list and a working search box that live-filters correctly. |
| 25 — horizontal scroll containment + scrollbar styling | 2/2 | Contacts table scroll is contained to the widget itself (a frozen left column, static page chrome). A single custom `::-webkit-scrollbar` rule (12px, rounded thumb) is reused identically across 5+ components app-wide — a genuinely unified scrollbar treatment, not OS default and not inconsistent like Zoho's. |
| 26 — sticky table header | 2/2 | Contacts table header stays pinned while the body scrolls — confirmed working, unlike Zoho's confirmed-absent equivalent. |

**Cross-product contrast worth flagging:** Typeform scores a clean 2/2 on scrollbar-styling consistency and sticky-header, where Zoho scores 1/2 (inconsistent styling across 3 surfaces) and 0/2 (no sticky mechanism at all) on the same two items respectively — a real, measured gap between the two products on this specific dimension, not just a difference in emphasis.

## D4. Tables: toolbar anatomy, pagination, selection, sort/filter

> OBSERVATION, Claude-in-Chrome browser extension session, 2026-09-28. **Typeform only — D4-zoho has not been run yet**, see Status line above.

### D4 — Typeform

Tested the Responses table (14 rows) and the Contacts table (22 rows) in the same session.

| Item | Score | Evidence |
|---|---|---|
| 43a — toolbar anatomy | 1/2 | Both Responses and Contacts share one combined toolbar row (search, filter, column-management, actions). Docked a point because there's no pagination row to locate at all — pagination itself doesn't exist (see item 43). |
| 43 — pagination | 0/2 | No page-size selector, no "Showing X-Y of Z" count, no next/prev control anywhere in either table, confirmed at the full 14- and 22-row counts respectively. Both tables scroll internally instead of paginating. |
| 44 — checkbox column + indeterminate header state | 2/2 | Confirmed present and correct in both tables. |
| 44a — cross-page "select all N matching" | 2/2 | Contacts showed a clean flow: "20 selected" → "Select all contacts" link → "22 selected." |
| 45 — bulk-action toolbar with count; destructive confirm states count | 2/2 | A floating "N selected" pill toolbar appears on selection; delete confirmations state the exact count ("Permanently delete 14 responses?", "Delete 22 contacts?"). |
| 46 — row click vs. checkbox (no conflict) | 2/2 | Plain row clicks are inert; only the checkbox (select) and a small expand icon (open detail) do anything — no possible conflict between the two interactions. |
| 47 — sort indicators / filter chips | mixed | **Sort: 0/2** — no sort functionality found anywhere (column headers, per-column menus, or direct DOM inspection). **Filters: 2/2** — a counted "Filters (1)" toolbar state, "Clear all"/"Clear filters" resets, and filter state survives opening and closing a record's detail view. |

Cross-link: [[typeform-contacts-module]] and [[entries-kanban-view]]'s Comparisons table (which already notes Typeform's Responses tab has no alternate/Kanban view) — this pass focused on toolbar-anatomy/pagination/selection specifically, not re-describing already-captured DOM.

## D5–D10

Not yet run. **D4-zoho is also still outstanding** (the only gap left in the D1–D4 cluster) — see `prompt-backlog-design-principles-audit.md` for the exact prompt.
