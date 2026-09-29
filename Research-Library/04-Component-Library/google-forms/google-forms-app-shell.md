---
component: "Application Shell, Header, and Main Content Area"
ui_category: "Application Layout > App shell"
source_product: "Google Forms"
last_verified: "2026-09-28"
evidence_state: "source_reviewed"
---

# Component: Application Shell, Header, and Main Content Area

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **Pass ID: GF9** (structural backfill pass, follows [[google-forms]]'s P1 product-level record and the field-level component passes GF2–GF5). Filed to close the Application Layout gap flagged in `00-Framework/category-taxonomy.md` §2b's coverage checklist — Google Forms previously had zero components tagged Application Layout despite 5 prior component passes. Scope: the structural shell across two screens (the `forms.google.com` dashboard and the form builder), not any single field or dialog. **No cross-product comparison table this pass** — no other product in this library has its own Application Layout shell captured yet either (Typeform's equivalent, AL1, and Zoho's own app-level shell are both still pending); this record is Google Forms' own structural baseline for future records to diff against.

## Location
- **Product:** Google Forms
- **Screen(s) it appears on:** the `forms.google.com` dashboard/home screen, and the form builder (`/forms/d/{id}/edit`) across its Questions/Responses/Settings tabs.

## Structure
- **Dashboard top bar:** hamburger "Main menu" button → Forms icon + "Forms" wordmark → centered Search field → (right-aligned) Google Workspace app-switcher grid (9-dot waffle) → account avatar.
- **Dashboard body:** no sidebar — a flat, full-width layout: a horizontal template-picker row ("Start a new form," six template cards), then a "Recent forms" card grid below it, both edge-to-edge under the top bar.
- **Hamburger overlay (not a docked sidebar):** a `position: fixed`, 280px-wide, full-viewport-height panel (`z-index: 986`) listing the Workspace app switcher (Docs, Sheets, Slides, Vids, Forms), Settings, Help & Feedback, Drive, with Privacy Policy/Terms links pinned to the bottom. Floats over the page rather than resizing it; closes on Escape or outside click.
- **Builder top bar, row 1 (always visible):** "Forms Home" link (icon only, no wordmark) → editable document-title textbox → "Move to folder" icon → Star toggle — then right-aligned: Customize Theme (palette) → Preview (eye) → Undo → Redo → Copy responder link → Share → "Published"/"Unpublished" pill (a single combined button, not icon+label) → "More" kebab → account avatar.
- **Builder top bar, row 2 (always visible):** Questions / Responses / Settings tab strip (left-aligned, with a live response-count badge on Responses) — right-aligned: "Total points: 0" (persistent across all three tabs, not Questions-only).
- **Builder top bar, row 3 (conditional):** a yellow contextual banner ("⚠ This form isn't accepting responses. Manage") that appears only while the form is unpublished, inside the same sticky stack as rows 1–2.
- **Main content area:** a fixed-width centered column (not full-bleed, not fluid), independently scrolling beneath the sticky header stack, with the floating "add content" toolbar (Add question / Import questions / Add title-description / Add image / Add video / Add section) docked beside the currently-focused card.
- Screenshot: not captured this pass — captured via `getComputedStyle`/`getBoundingClientRect` DOM inspection and the accessibility-tree dump (`read_page`), not visual screenshot.

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| Hamburger "Main menu" (dashboard) | Click | Toggles the fixed-position overlay drawer | 280px overlay drawer opens over the page content (does not resize/push it) | Same screen, drawer open |
| Overlay drawer | Press Escape, or click outside | Closes the drawer | Drawer dismissed | Same screen |
| "Forms Home" link (builder) | Click | Navigates back to `forms.google.com` | Returns to the dashboard | Dashboard |
| Questions / Responses / Settings tabs | Click | Switches the builder's tab body | Tab content swaps; header rows 1–2 and the response-count badge/points total stay unchanged; the unpublished banner (row 3) persists across tab switches if the form is unpublished | Same screen, different tab body |
| "Published"/"Unpublished" pill | Click | Opens published form settings | Opens a settings surface for responder access (not deep-traced this pass) | Same screen, panel/dialog |
| "Owned by anyone" filter (dashboard, Recent forms header) | Click | Filters the Recent-forms grid | Not exercised further this pass — existence and position confirmed only | Same screen |

## Behavior & States
- **Default state (dashboard):** template-picker row + Recent-forms grid, no sidebar, top bar as described above.
- **Default state (builder):** sticky 2-row header (title/document controls + tab strip), independently-scrolling question canvas beneath it, no contextual banner.
- **Unpublished state (builder):** row 3's yellow banner appears in the sticky header stack; disappears on republish.
- **Scroll state (builder):** confirmed by direct test — scrolling the canvas's inner container leaves the header rows pixel-identical in position; `window.scrollY` never left `0` after a `scrollTo` call, confirming the page itself never scrolls. The scrollable element is a dedicated inner `div` (class `KP7TGc RjsPE` in this build), not a page-level scroll relying on CSS `position: sticky`.
- **Overlay-drawer state (dashboard):** `position: fixed`, `z-index: 986`, floats over content; not verified for keyboard focus-trap correctness this pass (only Escape/outside-click dismissal confirmed).
- **Loading/error/empty states of the shell itself:** NOT OBSERVED this pass.

## Rules & Validation
- No form-level validation applies to the shell itself; N/A.
- The "Total points: 0" total is not tab-conditional — it renders identically whether the Questions, Responses, or Settings tab is active, which is a real (if minor) inconsistency worth noting since it visually implies quiz-scoring context even outside the Questions tab.

## Technical Data
> OBSERVATION only, tagged per evidence-guidelines.md. Captured via injected JavaScript (`getComputedStyle`, `getBoundingClientRect`) and the accessibility-tree dump (`read_page`) for exact control labels — not a visual/screenshot-only pass.
- **DOM:** builder's scrollable content region is a dedicated inner `div` (`KP7TGc RjsPE` in this build) sized to fill the viewport below the fixed header stack, not the document/`scrollingElement`.
- **CSS:** the header is a fixed shell with a nested independently-scrolling content pane — not CSS `position: sticky` riding a normally-scrolling page. This is the more robust of the two implementations (immune to scroll-chaining edge cases that can sometimes defeat `position: sticky`).
- **Layout:** at a 1662px-wide viewport, the question canvas column measures roughly 630–745px wide (small variance by card type/padding), offset left-of-center to leave room for the floating "add content" toolbar docked beside the focused card — not truly centered on the viewport.
- **Overlay drawer:** `position: fixed`, width `280px`, height = full viewport, `z-index: 986`.
- **JavaScript:** N/A beyond the above — no event-handler or network capture performed this pass (shell/layout inspection only).
- **Network:** not captured this pass.
- **Response:** N/A.
- **State change:** N/A — this pass covers structural/layout state only, not data mutation.
- **Animation/transition:** not captured this pass.

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| Typeform ([[typeform-application-layout]]) | Also confirmed **no single persistent shell reused across screens** — Typeform's workspace tabs and builder tabs share only a top banner and a floating AI input, the same "no single global shell" pattern confirmed here for Google's dashboard/builder pair. Google has no sidebar at all on its dashboard (a hamburger overlay drawer stands in); Typeform's workspace tabs each render a genuine, differently-structured contextual sidebar per tab rather than having none. | Google's sticky-header-over-independently-scrolling-canvas structure was confirmed by a direct scroll test; Typeform's own Content-tab canvas re-render-on-select behavior was confirmed but its scroll/sticky-header mechanics were not independently re-tested. Typeform's Pages rail is confirmed fully keyboard-accessible for drag-reorder (explicit screen-reader hint) — Google's builder has no comparable reorderable rail at all. | Google found a real inconsistency ("Total points: 0" not tab-conditional); Typeform found a naming trap ("Share" vs. an assumed "Publish," low-contrast styling) — different categories of shell-level rough edge, both real. |
| Zoho Forms | Not yet captured at this depth — Zoho's own Application Layout components ([[theme-editor-split-pane-shell]], [[sidebar-settings-subnav]]) are narrower in scope, not a full dashboard+builder shell pair. Open gap. | | |
| Paperform ([[document-canvas-editor-shell]]) | Narrower scope than this record — covers only the editor shell (Draft.js document canvas), not Paperform's own dashboard/workspace shell. | | |

## Best Observed Approach
- TODO — no comparable competitor implementation exists in this library yet to judge against.

## Second-Pass Flags
1. Whether the Template gallery screen reuses the dashboard's top bar unchanged, or introduces its own header/breadcrumb — not opened this pass.
2. Mobile/narrow-viewport behavior of the builder's fixed-column canvas and floating toolbar — not tested this pass.
3. Whether the dashboard's hamburger overlay is keyboard-trap-safe (focus properly contained/released while open) — only Escape and outside-click dismissal were verified.
4. The "Owned by anyone" dropdown's full option list — existence and position confirmed only.

## Cross-Component Pattern Note
1. **A dedicated inner scroll container instead of CSS `position: sticky`** is a more robust sticky-header pattern than relying on native page scroll — worth checking for on every future Application Layout capture in this library (Typeform's AL1, Zoho's own shell) as a direct point of comparison once those exist.
2. **Two different "how many are there" representations for the same underlying pattern within one product:** the Responses tab bakes its count into the heading text ("5 responses"), while the dashboard's "Recent forms" heading carries no count at all, relying on the grid below it instead. A smaller-scale version of the "same job, inconsistent pattern" finding already logged elsewhere in this library (e.g. [[notification-settings-editor]]'s inert popup, [[document-canvas-editor-shell]]'s lying save-state label) — worth watching for on every future Application Layout/page-header capture.
3. **No single global app shell reused across screens** — the dashboard and the builder each ship their own distinct header, sharing only the brand icon and account avatar. Worth confirming directly (not assuming) whether Typeform/Zoho Forms/Paperform share one persistent shell across their own dashboard/builder screens once their own Application Layout passes are filed — this may turn out to be a common pattern across form builders rather than a Google-specific choice.

## Sources
- OBSERVATION: Live, logged-in exploration of Google Forms across the `forms.google.com` dashboard and the form builder (test form `1jXL4eFIxzAtW7-7NDo7v5EWGb28DmnkfyWijfmQPPeg`, reused since P1), via Claude browser extension, 2026-09-28. DOM/ARIA structure read via injected JavaScript (`getComputedStyle`, `getBoundingClientRect`) and the accessibility-tree dump (`read_page`); a scroll test on the builder's question canvas confirmed the sticky-header/independent-scroll structure directly rather than inferring it from CSS alone.
