---
component: "Application Layout — My Workspace Dashboard Shell"
ui_category: "Application Layout > App shell"
source_product: "JotForm"
last_verified: "2026-09-29"
evidence_state: "source_reviewed"
---

# Component: Application Layout — My Workspace Dashboard Shell

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **Pass ID: P1 companion record.** Filed per `00-Framework/category-taxonomy.md`'s 2026-09-28 mandatory-per-product Application Layout note — JotForm now has this category populated from its very first pass, avoiding the gap Typeform and Google Forms originally had. Companion record: [[jotform-app-shell-builder]] (the form-builder shell). Scope: the dashboard's structural shell only ("My Workspace") — not any individual form row's own actions.

## Location
- **Product:** JotForm
- **Screen(s) it appears on:** My Workspace (`app.jotform.com`, the account dashboard).

## Structure
- **Persistent left sidebar:** fixed-width, light-lavender background, does not collapse. "My Workspace" section ("All" highlighted, "+ Add Label"); "Team Workspaces" section ("+ Create team," empty state on a fresh account); flat un-grouped items (Shared with me, Assigned to me, Sent, Continue Filling). Sidebar footer (independent of the scrolling nav list) pins a Jotform Sign cross-sell card (with Claude/ChatGPT connector buttons) and a dismissible promotional banner.
- **Top header bar:** white background, full width, ~64px tall. Left: Jotform wordmark + "My Workspace" workspace-switcher dropdown. Right: Templates, Integrations, Products (the mega-menu surfacing the full product line), Support, Enterprise, Pricing, and a circular user-avatar menu. A promotional pill ("SAVE 50%") is pinned to the top-right corner, overlapping the header's edge, independent of the nav items.
- **Conditional campaign banner:** directly below the header, an orange/cream gradient strip ("TODAY ONLY / SAVE 50%" with a countdown timer and "Save Now" button) appears only while a time-limited promo is active — not a permanent structural element, but it occupies the same horizontal band as the toolbar row below it.
- **Main content toolbar row:** left-aligned "+ CREATE" primary button (also duplicated centrally in the empty-state illustration on a zero-form workspace); right-aligned Filter dropdown, Last Activity sort dropdown, Search field. No separate literal page-title heading exists here.
- **List area:** one row per form (icon, name, submission count, last-edited date). Selecting a row's checkbox swaps the toolbar row for a contextual action bar (Submissions, Insights, Reports, Boards, Agents, Apps, Label as, Move to Team, More, Delete); each row also gains inline "Edit Form / Inbox / More" actions.
- Screenshot: not captured this pass — captured via direct interaction and full-viewport inspection.

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| Sidebar "All" / Shared with me / Assigned to me / Sent / Continue Filling | Click | Filters the list area | List area updates to the selected scope | Same screen |
| "+ CREATE" (toolbar or empty-state) | Click | Opens the 6-option creation chooser | "How would you like to start?" overlay (Form/E-sign/App/Workflow/AI Agent/Website Widget) | Same screen, chooser open |
| Form row checkbox | Click | Selects the row | Toolbar row swaps to the contextual selection action bar | Same screen |
| Filter / Last Activity dropdowns | Click | Filters/sorts the list | List area re-orders/filters | Same screen |
| Search field | Type | Filters the list by name | List area updates | Same screen |
| Products (top header) | Click | Opens the mega-menu | Full product-line listing (Section 1 of [[jotform]]) | Same screen, menu open |

## Behavior & States
- **No docked sidebar collapse control found** — confirmed by inspecting the full viewport; the sidebar is fixed-width, not collapsible, unlike JotForm's own builder-side palette (see [[jotform-app-shell-builder]]), which does collapse.
- **Contextual toolbar swap on selection** is a real layout pattern, not a separate panel — the chrome itself changes shape (toolbar row → selection action bar) rather than opening an overlay, confirmed by checking a row's checkbox and observing the row in place.
- **No dedicated page-header component** (e.g. an H1 + description block) exists on the dashboard — confirmed by inspecting the full viewport, not assumed. The closest equivalent is the combination of (workspace name in the top header) + (highlighted sidebar nav item) + (the "+ CREATE" toolbar row), together standing in for a conventional page heading.
- **Campaign banner is state-driven, not permanent** — present only while a promotional campaign is active; its presence shifts the vertical position of the toolbar row beneath it.
- Loading/error/empty states of the shell itself beyond the "+ CREATE" empty-state duplication: NOT OBSERVED this pass.

## Rules & Validation
- N/A — no form-level validation applies to the shell itself.

## Technical Data
> OBSERVATION only, tagged per evidence-guidelines.md. Captured via direct interaction and full-viewport inspection — no DOM/network capture performed this pass.
- **Layout:** sidebar is fixed-width and does not resize/collapse; main content area toolbar sits below the header and (when present) the campaign banner.
- **State-driven chrome:** the toolbar row is replaced (not overlaid) by a contextual action bar on row-selection — confirmed via direct interaction, not inferred.
- **Network/JavaScript:** not captured this pass.

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| Google Forms ([[google-forms-app-shell]]) | Both confirmed to lack a docked, always-visible left sidebar with deep in-product navigation — Google's dashboard has none at all (only a hamburger overlay drawer); JotForm's dashboard DOES have a real docked sidebar (All/Shared with me/Assigned to me/Sent/Continue Filling/Team Workspaces), a stronger navigation surface than Google's. | JotForm's dashboard sidebar gives persistent, one-click access to saved views (Shared with me, Assigned to me) that Google Forms has no equivalent for at all. | JotForm's sidebar footer mixes a genuine cross-sell (Jotform Sign) with a promotional ad in the same visual zone as navigational content — Google's equivalent hamburger drawer stays purely navigational, no promotional content found in it. |
| Typeform ([[typeform-application-layout]]) | Both products avoid a single monolithic sidebar reused everywhere: Typeform's workspace tabs each render a genuinely different sidebar per tab; JotForm's dashboard has one fixed sidebar, but its builder swaps to a different (collapsible, palette-driven) left pane entirely — see [[jotform-app-shell-builder]]. | JotForm's dashboard sidebar is simpler and more scannable (a flat, short item list) than Typeform's own per-tab-different sidebars, which vary in structure and require learning each tab's own layout. | Typeform's floating AI input persists identically across every screen tested (dashboard and builder alike); JotForm's AI surfaces (Form Copilot, "Describe your form") are NOT a persistent cross-screen element — they exist only inside specific creation/editing contexts. |
| Zoho Forms | Not yet captured at this depth — Zoho's own Application Layout components ([[theme-editor-split-pane-shell]], [[sidebar-settings-subnav]]) are narrower in scope (a theme editor and a Settings-only subnav), not a full dashboard shell. Open gap. | | |
| Paperform | Not yet captured at this depth — no Paperform dashboard-shell component is documented in this library yet. Open gap, and the direct JotForm-vs-Paperform Sign/Papersign comparison flagged in [[jotform]] Section 15 remains open. | | |

## Best Observed Approach
- TODO — full ranking needs Zoho Forms' and Paperform's own dashboard-shell captures before a definitive verdict across all five products researched so far.

## Second-Pass Flags
1. Whether the sidebar's "Team Workspaces" section behaves differently once a real team exists (this account's was an empty state) — not tested.
2. Keyboard/focus-trap behavior of the "+ CREATE" chooser overlay — not tested.
3. Whether the campaign banner's presence/absence is account-tier-dependent (e.g. hidden on paid plans) — not tested; only observed on this account mid-promotion.

## Sources
- OBSERVATION: Live, logged-in exploration of `app.jotform.com`'s My Workspace dashboard, fresh account with zero existing forms, via Claude browser extension, 2026-09-29.
