---
component: "Application Layout — Form Builder Shell"
ui_category: "Application Layout > App shell"
source_product: "JotForm"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
---

# Component: Application Layout — Form Builder Shell

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **Pass ID: P1 companion record.** Companion to [[jotform-app-shell-dashboard]] (the dashboard shell). Filed per `00-Framework/category-taxonomy.md`'s 2026-09-28 mandatory-per-product Application Layout note. Scope: the builder's structural shell across BUILD/SETTINGS/PUBLISH modes — not individual field behavior (see [[jotform]] Section 6 for the drag/stacking model) or the Classic-vs-Card layout choice itself. **Updated 2026-10-05 (JF4 pass)**: added a "Card-layout BUILD canvas" section below covering JotForm's Card-form builder mode and its respondent-facing one-question-per-screen runtime, which P1 had not tested — see that section for the Classic-vs-Card comparison and the judgment call on why this was filed as an update here rather than a new sibling record.

## Location
- **Product:** JotForm
- **Screen(s) it appears on:** the form builder (BUILD/SETTINGS/PUBLISH modes) for a form created in Classic layout.

## Structure
- **Top header bar (builder-specific, confirmed distinct from the dashboard's, not a re-skin):** white background. Left: Jotform logo + a "Form Builder" mode-switcher dropdown (replacing the dashboard's workspace switcher). Center: the form's editable title with a live autosave indicator beneath it ("All changes saved at HH:MM" + a history/undo icon). Right: "Add Collaborators," "Help," user avatar. The dashboard's Templates/Integrations/Products/Support/Enterprise/Pricing nav row is absent here — the builder header is narrower in scope, purely about the current document.
- **Secondary mode-tab bar:** a full-width orange gradient bar directly below the top header, containing BUILD/SETTINGS/PUBLISH tabs (left-aligned, active tab underlined) and a "Preview Form" toggle (right-aligned). Persistent across all three modes — its color/position never change, only which tab is underlined.
- **Left pane — element palette:** collapsible. Collapsed state shows a floating dark "Add Element +" pill anchored to the left edge; expanding it reveals the full palette (BASIC/PAYMENTS/WIDGETS tabs, scrollable field list). A fixed-width overlay/panel, confirmed to scroll independently of the canvas.
- **Center pane — canvas:** a single bounded white card, horizontally centered with visible margin on both sides (not full-bleed), containing the form's title block, stacked fields, and a Submit button. Below the card (still inside the scrollable canvas): a "+ Add New Page" link and a Jotform-branding footer strip with an upgrade nudge. Scrolls independently of the fixed top header and mode-tab bar.
- **Right pane — contextual panel:** mutually-exclusive occupant of one screen region. No field selected → a floating AI chat card ("Form Copilot," persona "Podo") with suggested-action chips. Field selected (via its gear icon) → a field Properties panel with field-type-specific tabs (plain text: GENERAL/OPTIONS/ADVANCED; Single Choice adds SURVEYING; Input Table adds FIELDS). Closable via "×," which leaves the canvas full-width rather than returning to the dashboard.
- **SETTINGS and PUBLISH modes** reuse the same top-header + orange-mode-tab-bar pattern, adding their own left sub-nav rail specific to that mode (Form Settings/Conditions/Emails/Integrations/Thank You Page/Documents/Workflows under SETTINGS; Quick Share/Embed/Platforms/Assign Form/Email/Prefill/AI Agents/PDF under PUBLISH).
- Screenshot: not captured this pass — captured via direct interaction across BUILD/SETTINGS/PUBLISH and independent-scroll testing of the palette vs. canvas.

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| "Form Builder" dropdown (top header) | Click | Mode/workspace switch | Not fully traced this pass | Not tested |
| BUILD / SETTINGS / PUBLISH tabs | Click | Switches builder mode | Main content area swaps to that mode's own panels; top header and mode-tab bar persist | Same screen |
| "Add Element +" pill (palette collapsed) | Click | Expands the palette | Full BASIC/PAYMENTS/WIDGETS palette panel opens | Same screen |
| Field gear icon (canvas) | Click | Selects a field | Right pane swaps from the AI copilot card to that field's Properties panel | Same screen |
| Properties panel "×" | Click | Closes the panel | Canvas expands full-width; does **not** return to the dashboard | Same screen |
| "Preview Form" toggle | Click | Not exercised this pass | Presumably opens a respondent-facing preview | Not tested |

## Behavior & States
- **Right pane is a single shared slot with two mutually-exclusive occupants** (AI copilot card vs. field Properties panel) — confirmed by selecting and deselecting a field and observing the same screen region swap contents, not stack or overlay.
- **Palette and canvas scroll independently** — confirmed by scrolling the palette's field list without the canvas moving, and vice versa.
- **No distinct "page header" chrome wraps the canvas** — confirmed by inspecting the full builder viewport across all three modes; none add a separate non-editable page-title row above their own content. The form's own editable title (top of the canvas card) is the only heading-like element, doubling as both live content and the page's implicit heading. SETTINGS and PUBLISH instead reuse the same three-tier header pattern (top header + orange mode-tab bar + a mode-specific left sub-nav rail) rather than introducing their own page header.
- **Autosave confirmed to exist** via the "All changes saved at HH:MM" indicator beneath the form title, but its trigger/debounce timing was not independently tested this pass.
- Loading/error/empty states of the shell itself: NOT OBSERVED this pass.

## Rules & Validation
- N/A — no form-level validation applies to the shell itself.

## Technical Data
> OBSERVATION only, tagged per evidence-guidelines.md. Captured via direct interaction across BUILD/SETTINGS/PUBLISH modes and independent-scroll testing — no DOM/network capture performed this pass.
- **Layout:** fixed top header + fixed orange mode-tab bar, with an independently-scrolling canvas beneath both (same general "fixed shell + inner scroll" pattern already confirmed for [[google-forms-app-shell]]'s builder, not independently re-verified as the identical mechanism here — a scroll test was performed, but computed-style/DOM inspection to confirm a dedicated inner-scroll container specifically (vs. `position: sticky`) was not).
- **Panel exclusivity:** right pane confirmed to swap contents (AI copilot ↔ field Properties) rather than stack, via direct field-select/deselect interaction.
- **Network/JavaScript:** not captured this pass.

## Card-layout BUILD canvas (vs. Classic — update added 2026-10-05, JF4 pass)

Confirmed the Classic-vs-Card choice (noted in the main product record's builder-paradigm section) by creating a second test form and selecting **Card form** at the layout-choice step shown right after "Start from scratch." FACT

**The top header, the orange secondary mode-tab bar (BUILD/SETTINGS/PUBLISH + Preview Form toggle), the SETTINGS tab, and the PUBLISH tab documented above are all identical between Classic and Card form** — same sub-nav items, same order: SETTINGS shows Form Settings/Conditions/Emails/Notifications/Integrations/Documents/Workflows/Jotform Sign; PUBLISH shows Quick Share/Embed/Platforms/Assign Form/Email/Prefill/AI Agents/PDF, directly matching this record's own notes above. FACT Only the **BUILD tab's canvas**, and the respondent-facing runtime it produces, differ materially.

**Judgment call**: documenting Card form as a new section here rather than a separate sibling component record, because the outer shell — top header, mode-tab bar, and both SETTINGS and PUBLISH — is unambiguously the *same* component in both layouts; a full sibling record would have duplicated all of that identical shell documentation for no benefit. Only the differing canvas/runtime is written up fresh below.

### Canvas structure, Card form

- A **full-bleed, solid-color background** fills the entire canvas (color configurable via the same paint-roller "Form Design Studio" panel used in Classic) — not a single bounded white card centered on a light-lavender background like Classic. FACT
- The form is broken into discrete, individually-bordered **white "cards,"** stacked vertically in the builder for editing: a dedicated **Welcome/cover-page card** comes first — large centered logo/icon, "Welcome" heading, editable subtext, a live running "N Questions" counter, and its own green "START →" bar, removable via a "Remove Welcome Page" button — then one card per question, then an implied Thank-You card reached via an "Edit Thank You Page" button rather than appearing inline in the canvas the way Welcome does. FACT Classic form has no cover-page equivalent at all; it begins directly with the form title and first field in one continuous card.
- Each question card has its own bottom action bar, split into "← PREVIOUS" (left half, lighter green) and "NEXT →" / "SUBMIT" (right half, darker green) — **the right-hand label is dynamic**: a card reads "SUBMIT" only while it is currently the last question; adding a further question after it immediately relabels that bar to "NEXT →". Confirmed directly by adding a second field and watching the first card's label flip from SUBMIT to NEXT. FACT The first question card has no Previous half (there is nothing reachable that way — Previous doesn't reach back to the Welcome card).
- Dragging a field from the Add Element palette onto the canvas — the normal interaction for Classic form — **failed silently on every attempt in this pass** (the dashed drop zone visually vanished, "0 Questions" stayed unchanged), including after a full page reload. **Clicking** a field in the palette instead of dragging it worked reliably every time and appended it as a new card. FACT — flagged as a possible automation-specific artifact rather than a confirmed product bug; see Second-Pass Flags.
- The Add Element palette's BASIC tab opens with "**Section Header**" as its first item, where Classic form's palette opens with "Heading" in the same slot — a small labeling difference between the two modes, not independently resolved as to whether it's the same underlying field type. FACT / OBSERVATION

### Respondent-facing runtime (published form)

Tested on the live public form URL directly (not the builder's own Preview Form pane, which renders in a cross-origin iframe that blocks DOM/JS inspection from the builder tab).

- True one-question-per-screen delivery: the Welcome card is its own screen, each question is its own screen, nothing scrolls past multiple questions at once — matching Typeform's own structural paradigm (see Cross-link below). FACT
- **Back-navigation is available and genuinely functional.** The "← PREVIOUS" button returns to the prior card with previously entered values retained — confirmed directly: typed a name, advanced to the next card, clicked Previous, and the typed value was still present in the field. FACT
- The first input on each card **auto-focuses** on arrival (cursor and focus ring present immediately, no click needed). FACT
- **No progress indicator of any kind was found** anywhere in the respondent-facing flow — no progress bar, no step dots, no "Question X of Y" text, on the Welcome card or either question card tested. The only count shown anywhere is the static "N Questions" label on the Welcome card itself, which doesn't track progress once the respondent starts answering. FACT — a setting to enable one may exist elsewhere in FORM SETTINGS's "Show More Options" or the Form Design Studio panel that wasn't located in this pass; see Second-Pass Flags.
- The slide/transition animation between cards was not directly captured — static screenshots can't show a transition — so whether it's an animated slide or an instant swap is unconfirmed.

### Cross-link — resolved against [[typeform-application-layout]] / [[yes-no-field]]

Typeform's own conversational-mode respondent runtime (directly confirmed in [[yes-no-field]]'s 2026-09-17 follow-up trace) **does** carry a progress indicator — a thin progress bar at the top of the viewport plus an accurate `aria-label="Question N of M"` in the accessibility tree (no visible on-screen numeral) — and **does** support back-navigation via bottom-right up/down chevron controls ("Navigate to previous question"), confirmed working. FACT (re-verified directly against the actual record this pass, not left as a provenance caveat.)

This sharpens the comparison: **both products confirm working back-navigation** in their respective one-question-per-screen modes, but **only Typeform ships a progress indicator by default** — JotForm's Card form has none, confirmed by direct testing of both the Welcome card and question cards, with no toggle located to enable one. RECOMMENDATION: JotForm's Card-form respondent, unlike Typeform's, gives no sense of how many questions remain once past the static Welcome-card count — a genuine, confirmed UX gap worth flagging in a future Best Observed Approach pass once the rest of the five-product one-question-per-screen comparison set is assembled.

### Second-Pass Flags (Card-layout addendum)

- Whether a progress-bar/step-indicator toggle exists elsewhere (FORM SETTINGS's expanded options, or the Form Design Studio panel) wasn't exhaustively checked — only the default, out-of-the-box absence was directly observed on the published form.
- The repeated silent drag-and-drop failures in Card form's BUILD canvas (while click-to-add worked every time) should be re-tested with a real, non-automated mouse before citing as a genuine product reliability gap rather than an automation artifact.
- The card-to-card transition animation wasn't directly observed — worth a screen recording in a future pass.
- Whether "Section Header" (Card form's first BASIC palette item) is the same underlying field as Classic form's "Heading" renamed for context, or a genuinely distinct element, wasn't confirmed.

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| Google Forms ([[google-forms-app-shell]]) | Both confirmed to use a fixed header shell with an independently-scrolling canvas beneath it in the builder. Both also confirm a "no distinct page-header chrome" finding — Google's builder has no separate title bar beyond the form's own editable title; JotForm's is the same. | Google's version is independently confirmed via a direct scroll test showing pixel-identical header position (a dedicated inner scroll container, not CSS `position: sticky`); JotForm's equivalent mechanism was scroll-tested but not confirmed at the same DOM/computed-style depth — an open gap for a future pass. | JotForm's right-pane AI-copilot-vs-Properties-panel exclusivity is a more deliberately designed single-slot pattern than anything documented for Google's own builder, which has no equivalent contextual AI panel at all. |
| Typeform ([[typeform-application-layout]]) | Both confirm a collapsible, palette/outline-style left rail specific to the builder (JotForm's field palette; Typeform's "Pages" outline rail) — distinct from each product's own dashboard-level sidebar. Both also confirm the builder's top bar is narrower in scope than the dashboard's own (JotForm drops the Templates/Integrations/Products/Support/Enterprise/Pricing row; Typeform's builder top bar drops the workspace-level primary tab strip). JotForm's Card-form respondent runtime (see the Card-layout section above) now independently confirms the same one-question-per-screen structural paradigm Typeform uses as its only mode — both products confirm genuinely working back-navigation in that mode. | Typeform's Pages rail is confirmed fully keyboard-accessible for drag-reorder (explicit screen-reader hint); JotForm's palette (a field *catalogue*, not a reorderable outline) isn't directly comparable on this dimension — the closer JotForm equivalent (in-canvas field reordering via drag-handles) was not tested for keyboard-accessibility this pass. Typeform ships a progress bar + accurate "Question N of M" by default in its one-question-per-screen mode; JotForm's Card form has none, confirmed by direct testing, with no toggle located to enable one. | JotForm's right-pane AI copilot is embedded directly in the builder's own contextual-panel slot; Typeform's AI input is a separate floating element persisting across the whole app rather than swapping in and out of a fixed panel — a structurally different (not simply better/worse) integration choice. JotForm's Card form has no equivalent to Typeform's paradigm being the *only* respondent mode — Classic vs. Card is an explicit, form-level choice unique to JotForm among the five products in this library. |
| Zoho Forms | Not yet captured at this depth — no full Zoho builder-shell component documented in this library ([[theme-editor-split-pane-shell]] covers only the theme editor). Open gap. | | |
| Paperform | Not yet captured at this depth — [[document-canvas-editor-shell]] covers Paperform's own editor shell and would be the natural comparison point once cross-referenced directly (flagged as not done this pass due to session access limits). Open gap. | | |

## Best Observed Approach
- TODO — full ranking needs Zoho Forms' and Paperform's own builder-shell captures, and a deeper (DOM-level) re-verification of JotForm's scroll mechanism, before a definitive verdict across all five products.

## Second-Pass Flags
1. Whether the builder's sticky-header/scroll mechanism is a dedicated inner-scroll container (like Google Forms', confirmed via computed style) or `position: sticky` — not independently confirmed at the DOM level this pass.
2. The "Preview Form" toggle's actual behavior — not exercised.
3. Card-form (Typeform-style) layout's own builder shell — this record covers Classic layout only; Card layout may have a structurally different shell, flagged as an open item in [[jotform]] Section 15.
4. Keyboard-accessibility of in-canvas field drag-reordering — not tested.

## Sources
- OBSERVATION: Live, logged-in exploration of the JotForm form builder (Classic layout) across BUILD/SETTINGS/PUBLISH modes, via Claude browser extension, 2026-09-29.
