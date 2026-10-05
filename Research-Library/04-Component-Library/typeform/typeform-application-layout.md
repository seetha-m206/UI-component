---
component: "Application Layout — Workspace Shell and Form Builder Shell"
ui_category: "Application Layout > App shell"
source_product: "Typeform"
last_verified: "2026-09-28"
evidence_state: "source_reviewed"
---

# Component: Application Layout — Workspace Shell and Form Builder Shell

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **Pass ID: AL1** (structural backfill pass). Filed to close the Application Layout gap flagged in `00-Framework/category-taxonomy.md` §2b's coverage checklist — Typeform previously had zero components tagged Application Layout despite being one of the most fully-researched products in this library. Scope: the structural shell across two distinct shell contexts — the **Workspace dashboard** (five top-level tabs) and the **Form builder** (Content/Workflow/Connect) — documented together in one record since they share only the top banner and a floating AI input, then diverge completely below that.

## Location
- **Product:** Typeform
- **Screen(s) it appears on:** all five workspace-level tabs (Forms, Contacts, Automations, Insights, Research Flow) at `admin.typeform.com`, and all three form-builder tabs (Content, Workflow, Connect) at `/form/{id}/create|logic|connect`.

## Structure

### Workspace dashboard shell
- **Global top bar (persists across all 5 workspace tabs):** organization menu button (avatar + name + chevron) → a horizontal **primary tab bar** (`role="tablist"`, true top-level navigation, not a sidebar) — Forms | Contacts | Automations | Insights 🔒 | Research Flow (a vertical divider visually separates Research Flow as a demo-like surface) → right-aligned: Integrations button, Brand kit button, a "Get more responses"/"View plans" upsell CTA, a support (?) button, account-avatar menu. A dismissible usage banner ("You've used N% of your Free plan's 10 responses a month") sits above the tab bar and can be closed independently.
- **Contextual secondary sidebar — genuinely different per tab, not one shared component:**
  - Forms tab: "Create form" button (pinned top) → Search → "Workspaces" (+ button) → a collapsible workspace group (confirmed collapsible via chevron) → "Responses collected" progress meter + "Increase response limit" link.
  - Contacts tab: "Add contact" button, an "Early access" badge, "Contact lists" (+), "All contacts" with count badge, "Contact permissions"/"Contact settings" links. (See [[typeform-contacts-module]].)
  - Automations tab: "Create automation" button, a flat list of trigger-type categories with counts. (See [[typeform-automations-builder]].)
  - Insights / Research Flow: not re-verified this pass (Insights plan-gated; Research Flow a marketing surface) — open gap.
- **Persistent floating element:** the "Ask Typeform AI" input (mic icon + text field + send arrow) is pinned bottom-left and stays visible/interactive across every workspace tab and builder tab tested — the only element confirmed to survive every navigation in this trace. (See [[typeform-ai-chat-to-create]].)
- **Main content area:** fills the space right of the tab-specific sidebar; a generic pulsing-skeleton loading state was observed briefly on first navigation to some tabs (e.g. Contacts).
- **Representative page header (Forms tab):** heading (workspace name) → inline "···" overflow menu → "Invite" button → a plan-tier badge icon → right-aligned "Date created ▾" sort dropdown + a List/Grid view toggle implemented as a `radiogroup` of two buttons (confirmed via accessibility tree, not a plain button pair). Up to two dismissible AI-suggestion banner cards (sparkle icon, one-line suggestion, "Create form" link, individual "×") sit below the header, distinct from the account-wide usage banner.

### Form builder shell
- **Global builder top bar (persists across Content/Workflow/Connect):** a `Breadcrumb` ("Forms" link → form title button) → center: **Content | Workflow | Connect** as real `<a>`-style links with distinct hrefs (`/create`, `/logic`, `/connect`) — true page navigations, not client-side tab panels → right: a low-contrast outlined **"Share"** button (not "Publish" — a naming correction against an earlier assumed control), "View plans," support (?), account avatar. The floating AI input persists here too, relabeled "Chat to create."
- **Content tab — three-zone shell:** secondary toolbar (Universal mode ▾, "+ Add content," Design, Mobile view, Preview, accessibility modal, Version History, Translations, Form settings, "Hide question panel") → left rail: a "Pages" outline (drag handle + title button + "Options" overflow per row, each a distinct accessibility-tree element; explicit screen-reader drag instructions confirm full keyboard-accessible reorder — space bar to pick up, arrow keys to move; a separate "Endings" section below) → center: a large centered canvas showing the selected page's live inline-editable content, **fully re-rendering (not scrolling) on page-select** → right: a contextual settings panel, fully type-driven by the selected page/question type.
- **Workflow tab — no left rail:** sub-tabs Logic | Scoring | Tagging | Outcome quiz → a pannable/zoomable flow-diagram canvas (cards connected by arrows, zoom controls fixed bottom-left) replaces the Pages rail entirely → right: a fixed (non-contextual) "Actions" panel with shortcut promo cards into Connect/Automations/Contacts.
- **Connect tab — no left rail, different shell again:** uppercase sub-tabs INTEGRATIONS | WEBHOOKS → a page-header block (heading + subtext) above a search input and a "Categories" filter list with count badges → a scrolling integration-card list, topped by a "Generate a custom flow with Zapier AI" card. A distinct branded loading message was observed here specifically: "Hold tight—just getting this page ready."
- Screenshot: not captured this pass — traced via DOM/accessibility-tree inspection across every tab, with collapse/expand and drag-reorder affordances tested directly.

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| Primary tab bar item (Forms/Contacts/Automations/etc.) | Click | Switches workspace tab | Sidebar content and main area fully swap to that tab's own shell | Same top bar, different tab |
| Workspace group chevron (Forms sidebar) | Click | Toggles collapse | Workspace group list collapses/expands | Same screen |
| Usage banner "×" | Click | Dismisses the banner | Banner removed for the session; CTA shifts to a plain "View plans" button | Same screen |
| "Ask Typeform AI" / "Chat to create" input | Type + submit | Opens the AI generation modal | See [[typeform-ai-chat-to-create]] | Modal overlay |
| Content/Workflow/Connect tab link | Click | Real page navigation (`<a href>`) | Full builder main-area shell swap; top bar persists | New sub-route of the same form |
| "Hide question panel" toolbar toggle (Content tab) | Click | Collapses the right-hand settings panel | Right panel hidden, canvas expands to fill the freed space | Same screen — **left Pages rail is unaffected**, confirmed no separate collapse control exists for it |
| Pages rail item drag handle | Keyboard: Space to pick up, Arrow keys to move, or mouse drag | Reorders pages | Page order updates | Same screen |
| Pages rail item click | Click | Selects that page | Center canvas fully re-renders to that page's content (not a scroll-to) | Same screen |

## Behavior & States
- **Workspace-level "sidebar" is not one component reused with different data** — it is a genuinely separate, independently-rendered navigation panel per module (Forms/Contacts/Automations), sharing only a loose visual language (dark primary action button at top, flat list below).
- **Two unrelated "sidebar" concepts exist and must not be conflated:** (a) the workspace-level per-tab contextual sidebar, and (b) the builder's Content-tab-only "Pages" outline rail — a single component that never appears on Workflow or Connect.
- **Collapse affordance hides the right-hand settings panel, not the left-hand Pages rail** — confirmed directly by clicking it and observing which panel disappeared.
- **Loading state:** a generic pulsing-skeleton placeholder appears briefly on first navigation to some workspace tabs (e.g. Contacts); the Connect tab instead shows a custom branded spinner + copy ("Hold tight—just getting this page ready").
- **No dedicated "Publish" control exists** — "Share" is the single affordance covering both sharing and whatever publish step exists behind it; this was not traced further behind the Share button itself this pass.
- Default/disabled/error states of the shell itself beyond the above: NOT OBSERVED this pass.

## Rules & Validation
- Share/Results tabs only appear in the builder top bar once the form has been saved with content — a brand-new, unshared form hides them.
- N/A beyond navigation gating above — no form-level validation applies to the shell itself.

## Technical Data
> OBSERVATION only, tagged per evidence-guidelines.md. Captured via DOM/accessibility-tree inspection at each stop, with collapse/expand and drag-reorder affordances tested directly (not inferred from markup alone).
- **DOM/ARIA:** workspace primary tab bar uses real `tablist`/`tab` roles. Builder's Content/Workflow/Connect are real `<a>` links to distinct sub-paths (`/create`, `/logic`, `/connect`) of the same form ID — true routing, not client-side panel-switching. The Forms-tab header's List/Grid toggle is a `radiogroup` of two `radio`-role buttons, not a plain button pair. Pages-rail rows expose three distinct accessibility-tree elements per row ("Drag to reorder," the title button, "Options for {title}") plus an explicit screen-reader drag-instruction hint confirming full keyboard drag-and-drop support.
- **CSS/Layout:** builder's Content-tab canvas fully re-renders (swaps DOM content) on page selection rather than scrolling within one continuous document — consistent with the one-question-per-screen respondent paradigm already documented in [[typeform]]'s UI/UX section.
- **JavaScript:** not captured beyond the above (routing/navigation behavior only, no network capture this pass).
- **Network:** not captured this pass.
- **Response:** N/A.
- **State change:** N/A — structural/layout state only.
- **Animation/transition:** not captured this pass.

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| Google Forms ([[google-forms-app-shell]]) | Also confirmed to have **no single persistent shell reused across screens** — Google's dashboard and builder ship two distinct headers sharing only the brand icon and avatar, the same "no single global shell" finding confirmed here for Typeform's workspace tabs and builder tabs. Google has no sidebar at all on its dashboard (a hamburger-triggered overlay drawer instead); Typeform's workspace tabs each render a genuine, differently-structured contextual sidebar rather than having none. | Google's builder confirms a sticky-header-over-independently-scrolling-canvas via a direct scroll test — not independently re-tested for Typeform's Content-tab canvas this pass, an open comparison point for a future pass. Typeform's Pages rail is confirmed fully keyboard-accessible for drag-reorder (explicit screen-reader hint); Google's own canvas has no comparable reorderable rail (Google's builder has no left rail at all, matching Typeform's own Workflow/Connect tabs). | Typeform found a real naming trap ("Share" instead of an assumed "Publish," low-contrast styling); Google's builder controls were all clearly labeled via the accessibility tree with no equivalent naming ambiguity found. |
| Zoho Forms | Not yet captured at this depth — Zoho's own Application Layout components ([[theme-editor-split-pane-shell]], [[sidebar-settings-subnav]]) are narrower in scope (a split-pane editor and a Settings-only subnav respectively), not a full workspace+builder shell pair. Flagged as an open gap for a future Zoho Application Layout pass. | | |
| Paperform ([[document-canvas-editor-shell]]) | Narrower scope than this record — covers only the editor shell (Draft.js document canvas), not Paperform's own dashboard/workspace shell. | | |
| JotForm ([[jotform-app-shell-dashboard]], [[jotform-app-shell-builder]]) | Both products confirm a collapsible, builder-only left rail distinct from each product's own dashboard sidebar (Typeform's "Pages" outline rail; JotForm's field palette) — and both confirm the builder's top bar is narrower in scope than the dashboard's (Typeform drops the workspace-level primary tab strip; JotForm drops the Templates/Integrations/Products/Support/Enterprise/Pricing row). Unlike Typeform's "no single persistent sidebar at all" finding, JotForm DOES have one fixed, non-collapsing dashboard sidebar — a simpler, more consistent (if less tailored-per-section) navigation model. **Resolved 2026-10-05 (JF4):** JotForm's Card-form layout now independently confirms the same one-question-per-screen structural paradigm as Typeform's own (only) respondent mode, and both products confirm genuinely working back-navigation within it (Typeform: up/down chevron "Navigate to previous question"; JotForm: a "← PREVIOUS" button, values retained). | Typeform's Pages rail is confirmed fully keyboard-accessible for drag-reorder (explicit screen-reader hint) — JotForm's equivalent in-canvas field reordering was not tested for keyboard-accessibility. JotForm's right-pane AI copilot is a deliberately-designed single-slot swap with the field Properties panel, directly embedded in the builder; Typeform's AI input is a separate floating element persisting identically across every screen tested, a structurally different integration choice, not simply better or worse. **This product confirms a progress bar + accurate "Question N of M"** in its one-question-per-screen mode (see [[yes-no-field]]'s 2026-09-17 trace) — JotForm's Card form was directly tested and confirmed to have **no progress indicator at all** by default, a genuine UX gap. | JotForm's "form-level layout choice" (Classic vs. Card at creation time) has no equivalent in Typeform, which only ever offers the one-question-per-screen paradigm. |

## Best Observed Approach
- **Fully keyboard-accessible drag-reorder with an explicit screen-reader instruction hint** (Typeform's Pages rail) is the strongest confirmed pattern in this comparison set — worth checking whether any sibling product's own reorderable list (e.g. Zoho's [[entries-kanban-view]], Paperform's document canvas) matches this level of explicit accessibility signaling once directly re-audited.
- Otherwise TODO — comparison set is still thin (2 of 4 products captured at Application Layout depth).

## Second-Pass Flags
1. Insights and Research Flow tabs' own sidebar/shell structure — not re-verified this pass (Insights plan-gated; Research Flow a marketing surface).
2. The builder breadcrumb's form-title button click behavior (inline rename vs. dropdown vs. navigation) — not tested.
3. Whether the workspace "Private" group's collapse state persists across sessions/reloads — not tested.
4. What exactly the "Share" button opens, and whether a separate publish-confirmation step exists behind it — not traced.
5. Responsive/narrow-viewport behavior of both shells (does the workspace sidebar collapse to icons-only or an off-canvas drawer?) — not tested; this trace used a standard desktop viewport (~1439–1662px) throughout.
6. Whether the Workflow tab's flow-diagram canvas is the same React Flow library already confirmed for [[typeform-automations-builder]] — visually consistent (cards, arrow connectors, bottom-left zoom controls) but not independently re-verified as the same library in this pass.

## Cross-Component Pattern Note
1. **No single global app shell reused across screens** is now a confirmed pattern in two of four products in this library (Typeform here; Google Forms in [[google-forms-app-shell]]) — worth checking directly, not assuming, whether Zoho Forms and Paperform share this trait too once their own Application Layout passes are filed.
2. **A collapse control that hides the wrong-sounding panel** (Typeform's "Hide question panel" actually hides the right-hand settings panel, not a left-hand "question panel" one might assume) is a naming-clarity gap worth watching for on every future Application Layout capture, alongside the already-logged "Share" vs. assumed "Publish" naming trap in the same record.
3. **A single floating AI input as the most persistent UI element in the whole product** (more persistent than any sidebar or top bar content, confirmed across every workspace and builder tab tested) is a distinctive Typeform pattern — worth a direct comparison once Zoho's and Paperform's own AI entry points ([[zia-ai-form-generator]], [[paperform-ai-create]]) are checked for a similar always-present placement vs. a page-specific one.

## Sources
- OBSERVATION: Live trace on a real Typeform account (admin.typeform.com), 2026-09-28. Navigated across all five top-level workspace tabs (Forms, Contacts, Automations, Insights, Research Flow) and all three form-builder tabs (Content, Workflow, Connect) on an existing form ("Customer Feedback Survey," built in [[typeform-ai-chat-to-create]]), inspecting the DOM/accessibility tree at each stop, and testing collapse/expand and drag-reorder affordances directly via Claude browser extension.
