---
component: "Application Layout — Form Builder Shell"
ui_category: "Application Layout > App shell"
source_product: "JotForm"
last_verified: "2026-09-29"
evidence_state: "source_reviewed"
status: 'complete'
summary: "A collapsible field palette and a single right-hand pane that swaps between an AI copilot card and a field Properties panel, confirmed mutually exclusive. No distinct page-header chrome wraps the canvas across BUILD/SETTINGS/PUBLISH -- only the form's own editable title serves as the heading."
---

# Component: Application Layout — Form Builder Shell

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **Pass ID: P1 companion record.** Companion to [[jotform-app-shell-dashboard]] (the dashboard shell). Filed per `00-Framework/category-taxonomy.md`'s 2026-09-28 mandatory-per-product Application Layout note. Scope: the builder's structural shell across BUILD/SETTINGS/PUBLISH modes — not individual field behavior (see [[jotform]] Section 6 for the drag/stacking model) or the Classic-vs-Card layout choice itself.

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

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| Google Forms ([[google-forms-app-shell]]) | Both confirmed to use a fixed header shell with an independently-scrolling canvas beneath it in the builder. Both also confirm a "no distinct page-header chrome" finding — Google's builder has no separate title bar beyond the form's own editable title; JotForm's is the same. | Google's version is independently confirmed via a direct scroll test showing pixel-identical header position (a dedicated inner scroll container, not CSS `position: sticky`); JotForm's equivalent mechanism was scroll-tested but not confirmed at the same DOM/computed-style depth — an open gap for a future pass. | JotForm's right-pane AI-copilot-vs-Properties-panel exclusivity is a more deliberately designed single-slot pattern than anything documented for Google's own builder, which has no equivalent contextual AI panel at all. |
| Typeform ([[typeform-application-layout]]) | Both confirm a collapsible, palette/outline-style left rail specific to the builder (JotForm's field palette; Typeform's "Pages" outline rail) — distinct from each product's own dashboard-level sidebar. Both also confirm the builder's top bar is narrower in scope than the dashboard's own (JotForm drops the Templates/Integrations/Products/Support/Enterprise/Pricing row; Typeform's builder top bar drops the workspace-level primary tab strip). | Typeform's Pages rail is confirmed fully keyboard-accessible for drag-reorder (explicit screen-reader hint); JotForm's palette (a field *catalogue*, not a reorderable outline) isn't directly comparable on this dimension — the closer JotForm equivalent (in-canvas field reordering via drag-handles) was not tested for keyboard-accessibility this pass. | JotForm's right-pane AI copilot is embedded directly in the builder's own contextual-panel slot; Typeform's AI input is a separate floating element persisting across the whole app rather than swapping in and out of a fixed panel — a structurally different (not simply better/worse) integration choice. |
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
