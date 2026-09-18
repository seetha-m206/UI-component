# Product Suite Design Principles and Testing Standard

**Version 1.7 | Desktop and laptop focused | Applies to all products in the suite**
**Changelog — 1.7:** rewrote §4.4 table anatomy around the single-row **Table Toolbar** (search left; bulk actions + compact pagination right; no bottom pagination row); added §3.13 (table row / selection column / row hover); added checklist items 43a and 44a; added checkbox rounding + primary-fill spec.
**Changelog — 1.6:** added §3.12 (icon-button hover proportions), checklist item 27a, extended §3.2 row-action rule to chips and badges, and added item 27a to the §10 release-gate floor.
**Reference library: Front Dashboard v2.0 (HTMLStream, Bootstrap 5)**

This document defines the design principles every product in the suite must follow, and the test checklist used to audit each product against them. The products are professional, data-heavy web applications used primarily on desktops and laptops, so this standard is written desktop-first: large screens, mouse and keyboard, long working sessions and power users.

All products are built on one reference library: **Front Dashboard v2.0**. Its components, utilities and conventions are the single source of truth for UI construction.

How to use this document:

1. Every product team designs and builds against Sections 1 to 7.
2. Before each release, the product is audited using the checklist in Section 8.
3. Once per quarter, all products are audited together using the cross-product consistency audit in Section 9.
4. A product must meet the release gate in Section 10 to ship.

---

## 1. Screen Targets

| Class | Width | Rule |
|---|---|---|
| Laptop baseline | 1366 x 768 | Every screen fully usable with no horizontal scrolling. This is the minimum design target. |
| Standard desktop | 1920 x 1080 | The primary design canvas. Layouts are designed here first. |
| Large / ultrawide | 2560+ | Reading surfaces capped so text lines stay under 80 characters; work surfaces stay fluid (see 3.11). |
| Small laptop / narrow | 1024 to 1366 | Graceful degradation: sidebar may collapse to mini (icon) mode, tables gain horizontal scroll within the card, nothing breaks. |

Below 1024px the product must remain functional (the library's responsive behaviour handles this), but it is not the design focus and is not part of the release gate.

---

## 2. Core Design Principles

Each principle is written as a rule that can be tested with a yes or no answer. "The product" means every screen, modal, drawer and empty state within it.

### P1. One suite, one language, one library

Every product must be recognisably part of the same family, built from the same reference library. Shared elements are non-negotiable: the persistent left sidebar (Navbar Vertical Aside), the top navbar, the page header with breadcrumbs, the colour palette, the type scale, Bootstrap Icons, and the placement of settings, search and user profile. No product introduces a second icon set, a second component framework or custom variants of components the library already provides.

**Test:** Place 1920px screenshots of any two products side by side. A new user should not be able to tell they were built by different teams. Any UI component that duplicates an existing Front component fails.

### P2. Clear visual hierarchy on large screens

Font size, weight, contrast and spacing guide the eye to the most important content and action first. On a large screen the danger is clutter, so every page is organised on a clean grid: related content grouped into Cards, aligned to consistent columns, with one clear focal point. Every page opens with the Page Header pattern (title plus breadcrumb). The primary action is a solid `btn-primary` and there is only one per screen, placed top-right in the page header or bottom-right in forms.

**Test:** Five-second test at 1920px: what is this screen, what matters most, what do I do next? Two of three correct answers is a pass. Any screen where content is not aligned to the grid, or with two solid primary buttons, fails.

### P3. Deep consistency

Consistency is both visual and functional. Visual: the same colours, fonts, icons, spacing and component styles everywhere. Functional: the same action behaves the same way everywhere: identical hover states, identical click results, identical shortcuts. "Save" is always "Save", never "Submit" or "Apply". A button that says "Publish" produces a confirmation that says "Published". A user should never have to relearn how a part of the suite works.

**Test:** List the ten most common actions (create, save, delete, filter, search, export, share, assign, comment, archive). Verify each uses identical labels, icons, placement, colour, hover behaviour and shortcuts in every product.

### P4. Information density with progressive disclosure

Desktop users handle complex, data-heavy work, so screens carry real density: full tables, multiple panels, visible metadata. Density is balanced by progressive disclosure: essentials are visible upfront, and advanced or secondary detail is revealed on demand through the library's Tooltips, Popovers, collapsible sidebar groups, Collapse sections, Dropdowns, Offcanvas drawers and Modals. Nothing important hides behind a click; nothing rarely used clutters the default view. Data tables default to a comfortable density and offer the compact option for power users.

**Test:** On the main list screen, a user must complete the core scan-and-act task without opening anything, and must reach any advanced option within two clicks. Any screen that dumps every field into the default view, or buries a daily-use control in a menu, fails.

### P5. Optimised navigation for large screens

Navigation is persistent and two-tier: the left sidebar (Navbar Vertical Aside) carries deep in-product navigation and stays visible at desktop widths; the top navbar carries global controls: product switcher, global search, notifications, settings, profile. Sidebar groups collapse and expand; the current location is always highlighted and mirrored in the breadcrumb. Users never lose their place.

**Test:** From any screen, the current section must be visibly highlighted in the sidebar and the breadcrumb must show the path. Sidebar and top navbar must be identical in structure across all products.

### P6. Users think in their work, not our system

All labels, menus and messages use the user's vocabulary, not internal or technical terms. A user manages "notifications", not "webhook config". A CRM user sees "Deals", a project user sees "Tasks", never "records" or "entities" in the interface.

**Test:** Read every label on the three most-used screens aloud to a non-technical person. Any term they cannot explain fails.

### P7. Hierarchy through the button and colour system

The library's five button levels are applied by importance, never by taste (full colour mapping in 3.8):

| Level | Front class | Use for |
|---|---|---|
| 1 Solid | `btn-primary` | The one main action on a screen |
| 2 Outline / White | `btn-outline-*`, `btn-white` | Secondary actions beside a primary |
| 3 Soft | `btn-soft-*` | Supporting actions in cards and toolbars |
| 4 Ghost | `btn-ghost-*` | Low-emphasis actions, icon actions in table rows |
| 5 Link | `btn-link` | Inline, tertiary actions |

Colour is semantic, never decorative: `primary` for brand and main actions; `success`, `danger`, `warning`, `info` strictly for their meanings; `danger` reserved for destructive actions and errors only.

**Test:** Audit all buttons on the five most-used screens against the mapping in 3.8. Any `btn-danger` on a non-destructive action fails.

### P8. Instant feedback and clear affordance

Interactive elements look interactive, and every action answers immediately. On desktop this means full hover treatment: every clickable element has a visible hover state and the pointer cursor; every row that can be opened highlights on hover; disabled controls explain themselves via Tooltip on hover. All loading, submitting and destructive behaviour follows Section 4 exactly.

**Test:** Sweep the cursor across a core screen: anything clickable without a hover state and pointer cursor fails. Perform every action with the network throttled: any action with no visible feedback within 300ms fails.

### P9. Keyboard efficiency and shortcuts

Power users live on the keyboard. Every product supports: logical tab order matching the visual order; Enter submits the focused form and Escape closes the top overlay; `/` (or Ctrl/Cmd+K) focuses global search; Ctrl/Cmd+Z undoes where undo exists; Ctrl/Cmd+S saves in editors instead of triggering the browser dialogue; arrow-key movement in tables and menus where the library supports it. The shortcut set is identical suite-wide and documented in a shortcut cheat sheet reachable via `?`. New shortcuts are added to the suite map, never invented per product.

**Test:** Complete the three core tasks with keyboard only. Verify `/`, Escape, Enter and the cheat sheet work on every screen. Any product-specific shortcut absent from the suite map fails.

### P10. Error prevention and recovery

Prevent mistakes before they happen: inline validation on blur, input masks for structured data, sensible defaults, disabled submit until required fields are valid, unsaved-changes warnings before navigation, and confirmation Modals for anything destructive. When errors still occur, messages are clear and non-punitive: they name what went wrong and how to fix it, using the library's Alert with semantic colour, and never blame the user. Recovery is always available: undo for destructive actions where feasible, a reset for filters and forms, and no dead ends.

**Test:** Attempt the five most error-prone tasks deliberately wrongly. Every failure must be either prevented or explained with a fix, and destructive actions must offer undo or explicit confirmation. Any vague message ("Something went wrong") fails.

### P11. Accessibility is a requirement, not a feature

All products meet WCAG 2.2 AA. Text contrast at least 4.5:1 (3:1 for large text) in both light and dark mode. Every interactive element keyboard-reachable with a visible focus state; focus order matches visual order. Colour never the only carrier of meaning (pair with icon or label via Badge or Legend Indicator). Icon-only buttons (`btn-icon`) always carry an accessible label and Tooltip. Motion respects the reduced motion setting.

**Test:** Automated audit (axe or Lighthouse) in light and dark mode, plus the keyboard-only pass from P9. Both must pass.

### P12. Performance is part of the design

On a desktop connection, first meaningful content within 1.5 seconds and interactions within 100ms. Core Web Vitals: LCP under 2.5s, INP under 200ms, CLS under 0.1. Only the library plugins a page actually uses are loaded on that page (datatables, Quill, calendar and charts load on demand). Large tables paginate or virtualise rather than rendering thousands of rows.

**Test:** Lighthouse on the dashboard and two most-used screens: all vitals green. Network panel: any page loading unused heavy plugins fails.

### P13. Restraint and simplicity

Less is more. Decoration that does not carry information is removed; redundant features are cut rather than arranged. One memorable element per screen at most. Whitespace is intentional and comes only from the spacing scale (see 3.11); accidental gaps are defects. Animations only show what changed. Before shipping a screen, remove one thing.

**Test:** For each visual element, the designer states what information it encodes. For each empty area, the designer states which spacing token produced it. Anything without an answer is removed or fixed.

### P14. Light and dark, both first-class

Every product ships with both modes fully working: every screen, illustration, chart, skeleton and logo has correct light and dark variants (the library provides paired assets). The user's choice persists across all products.

**Test:** Toggle dark mode on the five most-used screens. Any unreadable text, wrong-variant illustration or hard-coded background fails.

### P15. Continuous testing and feedback

Design is never finished. Each product runs a feedback loop: an in-product way for users to report issues, regular usability sessions on real tasks, and analytics on drop-off points in core flows. Findings feed the same audit backlog as this standard's checks, and recurring findings become new rules in this document.

**Test:** The product has a working feedback channel, and the team can show at least one design change per quarter that traces to user feedback or testing.

---

## 3. Basic Design Specifications (Component Sizing and Consistency)

These are the exact dimensions and mappings every product uses. They live in the shared theme as SCSS variables and utility classes so no product redefines them. All heights align to the 8px grid so buttons, inputs and selects line up perfectly in the same row.

### 3.1 Buttons: Sizes

| Size | Height | Min width (text buttons) | Max width | Horizontal padding | Font size | Icon size inside |
|---|---|---|---|---|---|---|
| Small `btn-sm` | 32px | 64px | 200px | 12px | 13px | 14px |
| Default `btn` | 40px | 96px | 240px | 16px | 14px | 16px |
| Large `btn-lg` | 48px | 112px | 280px | 20px | 16px | 18px |

Rules:

- **Min width** stops tiny buttons like "OK" collapsing into unclickable slivers; **max width** stops long labels producing banner-sized buttons. A label longer than the max width is a copy problem: shorten the label. If it truly cannot be shortened, the label truncates with an ellipsis and the full text shows in a Tooltip; button text never wraps to two lines.
- **Icon-only buttons** (`btn-icon`) are fixed squares matching the height column (32, 40, 48), always with a Tooltip and accessible label.
- **Button pairs:** in a Modal or form footer, the primary and secondary buttons share the same height and size class, primary on the right, 8px gap.
- **Full-width buttons** are allowed only inside drawers, modals and auth screens, never in page content.
- Default size everywhere; `btn-sm` only inside table rows and card toolbars; `btn-lg` only on auth and empty-state screens.

### 3.2 Button Colour Consistency

One fixed mapping of action to colour and style, identical in all ten products. A user must be able to predict a button's colour from its verb before reading it.

| Action | Style | Rule |
|---|---|---|
| Save, Create, Submit, Publish, Confirm (non-destructive), Apply filters | `btn-primary` solid | The single primary per screen |
| Cancel, Close, Back | `btn-white` | Never coloured; Cancel is never `danger` |
| Edit, Duplicate, Export, Share, secondary Save-and-continue | `btn-outline-secondary` or `btn-soft-secondary` | Level 2/3 per prominence |
| Delete, Remove, Revoke, destructive Confirm | `btn-danger` solid inside confirmation modals; `btn-ghost-danger` or danger dropdown item at the trigger point | `danger` appears nowhere else |
| Approve / Accept | `btn-soft-success` | Only for genuinely positive state changes |
| Row actions in tables, chips, badges and inline lists | `btn-ghost-secondary` (or `btn-ghost-danger` for remove) icon buttons | Never solid colours inside a row, chip or badge — the trigger point rule applies everywhere a record sits inside a compact container |

Further rules:

- **One primary colour value suite-wide.** Hover, active, focus and disabled shades are generated by the shared theme; products never define their own tints. Two products showing two different blues for Save is a release blocker.
- **Disabled state is uniform:** the library's disabled opacity, `not-allowed` cursor, no hover effect, with an explaining Tooltip where relevant (P8).
- **No gradients, no custom shadows, no per-product "brand" buttons.** The product accent colour (Section 5) never appears on buttons.
- The same verb never changes colour between screens or products: if Export is a soft-secondary in the CRM, it is a soft-secondary everywhere.

### 3.3 Text Truncation (Ellipsis) Rules

Truncation is a designed behaviour, not an accident. **Every place where user-generated or variable-length text meets a fixed-width container must have an explicit truncation rule.** Layouts must never break because a user typed a long name.

| Element | Rule |
|---|---|
| Table cells | Single-line ellipsis. Column widths fixed or min/max constrained; cell never wraps unless the column is explicitly a multi-line column (e.g. Description, clamped to 2 lines). |
| Card titles | Single-line ellipsis at the card width. |
| Card descriptions | 2-line clamp with ellipsis. |
| Sidebar nav labels | Single-line ellipsis at sidebar width (never wrap). |
| Breadcrumbs | Middle items collapse to "..." when the trail exceeds the header width; first and last items always visible, each item max 200px with ellipsis. |
| Dropdown / select items | Single-line ellipsis at the menu max width. |
| Tabs | Single-line ellipsis, tab max width 200px. |
| Badges and chips | Max width 160px with ellipsis. |
| Toasts | Title single-line ellipsis; body 2-line clamp (full spec in 3.6). |
| Modal titles | Single-line ellipsis at the modal width. |
| Page header title | Single-line ellipsis; the full record name is always visible in the record itself. |
| File names | Middle truncation (start...end.ext) so the extension stays visible. |
| Buttons | Never wrap; shorten copy first, ellipsis + Tooltip as last resort (see 3.1). |

Universal rule: **wherever text is truncated, the full text must be recoverable on hover via the native `title` attribute or a library Tooltip.** Truncation without a way to read the full value is a fail.

### 3.4 Icon Sizes

Bootstrap Icons only, in exactly four sizes. One size per context, never optically resized in between.

| Token | Size | Context |
|---|---|---|
| `icon-sm` | 14px | Inside `btn-sm`, badges, table metadata, breadcrumb separators |
| `icon-base` | 16px | Default: buttons, table row actions, form input addons, dropdown items, toasts |
| `icon-md` | 20px | Sidebar navigation, top navbar (search, bell, settings), page header actions |
| `icon-lg` | 24px | Card header feature icons, stat/KPI blocks, modal header icons |

Empty states use library illustrations (not scaled-up icons), 160 to 240px wide. Icons inherit text colour (`currentColor`); they are never given their own decorative colours outside the semantic palette. Icon plus label spacing is 8px.

### 3.5 Popup Size Consistency (Modals, Drawers, Popovers)

Popups come in fixed sizes only. **Arbitrary widths and heights are forbidden**; a popup that needs a size outside this table is a design smell to fix, not a new size to invent.

| Popup | Fixed sizes | Assigned uses (identical in all products) |
|---|---|---|
| Modal small | 400px wide | All confirmations, including every delete warning (4.3) |
| Modal default | 600px wide | Short focused forms, pickers, single-step tasks |
| Modal large | 800px wide | Rich content: previews, comparison views, multi-field forms that genuinely cannot fit 600px |
| Drawer (Offcanvas) default | 480px wide | Record detail and record create |
| Drawer wide | 640px wide | Dense records with tabs or side-by-side fields |
| Popover | Max 320px wide | Rich contextual help |
| Tooltip | Max 240px wide | Labels and hints |

Structural consistency, identical everywhere:

- **Same anatomy:** header (title single-line ellipsis + close `btn-icon` top-right), scrollable body, fixed footer with the button pair per 3.1 and 3.2. The close icon is always the same icon in the same corner.
- **Same paddings:** 24px header, body and footer padding in modals and drawers; no per-product variation.
- **Max height 80vh** for modals; the body scrolls, header and footer never scroll away. Drawers are full height.
- **Same purpose, same size, every product:** all delete confirmations are the 400px modal; all record creates are the 480px drawer. A user must never meet a 500px confirmation in one product and a 700px one in another.
- Popups are always centred (modals) or right-edge (drawers), with the same overlay dim and the same open/close transition from the library.

### 3.6 Toast Consistency

Toasts are identical in every product, and long content can never break them.

| Property | Specification |
|---|---|
| Position | **Always top-right**, 16px from the top navbar and 16px from the right edge, in every product, on every screen. Never bottom, never centre, never left. |
| Width | Fixed 360px. The toast never grows or shrinks with its content. |
| Title | Single line with ellipsis. |
| Body | Maximum 2 lines, clamped with ellipsis. Long messages never expand the toast or push the layout; the full message goes to the notification centre or behind a "View details" link inside the toast. |
| Structure | Semantic icon (16px) left, title + body, optional single action (Undo, View details, Retry), close icon right. |
| Colour | Semantic: success, danger, warning, info; from the shared theme, correct in both modes. |
| Duration | Success and info auto-dismiss at 5 seconds; error toasts persist until dismissed or resolved; hover pauses the timer. |
| Stacking | Maximum 3 visible, newest on top, older ones collapse; identical stacking in all products. |
| Layering | Toasts render above modals and drawers via the library z-index scale; they never appear underneath an overlay. |

If any record name appears in a toast ("Deal 'Acme renewal' deleted"), the name itself carries an inner ellipsis so even a 200-character record name keeps the toast to its fixed size.

### 3.7 Scrollbars and Scrolling

- **One custom scrollbar style suite-wide**, defined once in the shared theme: 8px wide track, 8px thumb with the library's border-radius, thumb colour from `border`/`muted` tokens, hover state slightly darker, styled for both light and dark mode (WebKit `::-webkit-scrollbar` plus Firefox `scrollbar-width: thin` and `scrollbar-color`).
- **The page itself scrolls vertically only.** Horizontal scrolling happens only inside a contained element (a table within its card, a kanban board, a code block), never on the body.
- **Scroll containment:** long tables scroll inside their card with the Sticky Header pattern; the sidebar scrolls independently of the content; modals and drawers scroll their body while header and footer stay fixed.
- **Scrollbar visibility:** any container that can scroll must show its scrollbar on hover at minimum.
- **No scroll hijacking:** no parallax, no scroll-jacking animations, no smooth-scroll overrides except the library's Go To (back to top), which appears after two viewport heights on long pages.
- **Scroll position is preserved** when a user opens a drawer from a list and closes it again.

### 3.8 Dropdowns and Menus

| Property | Specification |
|---|---|
| Min width | 180px (action menus), or match the trigger width (selects), whichever is larger |
| Max width | 320px; items ellipsis beyond that |
| Max height | 320px, then internal scroll with the suite scrollbar |
| Item height | 40px default, 36px in compact/table contexts |
| Item padding | 16px horizontal |
| Item structure | Optional 16px icon, 8px gap, label, optional right-aligned shortcut hint or check |
| Grouping | Library Divider between groups; group headers 12px muted text |
| Destructive items | Last group, `danger` text plus icon |
| Placement | Below trigger, aligned to trigger edge; auto-flips near viewport edge; never renders off-screen |
| Behaviour | Opens on click (not hover), closes on Escape, outside click, or selection; arrow keys navigate, Enter selects; searchable (Advanced Select) whenever the list exceeds 10 items |

### 3.9 Form Controls

- **Input, select and datepicker height matches the default button: 40px** (`-sm` 32px), so mixed rows align perfectly.
- Input min width 200px, max width by content type: short codes 120px, names/emails 320px, full-width only inside drawers and modals.
- Labels 14px medium weight, 8px above the field. Help text and validation messages 13px below the field; validation replaces help text, never stacks.
- Textareas min height 80px, resizable vertically only.
- Checkboxes and radios 16px, switches 40x20px (library defaults), label gap 8px, minimum 44px total clickable row height.

### 3.10 Other Core Elements

| Element | Specification |
|---|---|
| Table rows | 56px comfortable, 44px compact; header row 48px, sticky |
| Card padding | 24px (dense dashboard KPI cards 16px); grid gutter 24px |
| Avatars | 24px (table), 32px (lists, comments), 40px (navbar profile), 96px (profile page) |
| Badges | 12px text, 4px vertical / 8px horizontal padding, max width 160px |
| Sidebar | 260px expanded, 64px mini (icon) mode |
| Top navbar | 60px tall, fixed |
| Focus ring | The library's focus style, never removed, visible in both modes |

### 3.11 Layout Hygiene: Space, Padding, Margin and Page Width

Whitespace is a design decision, never a leftover. Every gap on screen must trace to a spacing token; every width must trace to a layout rule.

**Page width rules:**

- **Work surfaces are fluid.** Lists, tables, dashboards, boards and record views use the full available width (minus the sidebar) with 24px content padding. **No arbitrary max-width on work screens**: a data table floating in the middle of a 2560px monitor with huge empty flanks is a defect, not a style.
- **Reading surfaces are capped.** Only text-heavy pages (settings descriptions, docs, onboarding, notes) get a max-width, fixed suite-wide at 960px, left-aligned with the content area, so lines stay under 80 characters.
- These two rules replace all per-page width decisions. A page is either a fluid work surface or a capped reading surface; nothing in between.

**Spacing rules:**

- **One page rhythm:** 24px content padding on all sides of the content area; 24px between cards and sections; 32px before a new major section heading. Inside cards, spacing per Section 3 component specs. No other vertical gaps.
- **No double spacing:** margins never stack with paddings to produce 40 to 48px accidental gaps. Spacing is owned by the container (gap/padding), not scattered across children's margins.
- **No orphan gaps:** when an element hides (a dismissed alert, an empty widget, a permission-hidden card), its space collapses; no blank holes where something used to be.
- **Equal heights in rows:** KPI and summary cards in the same grid row stretch to equal height; ragged card bottoms in a row are a defect.
- **Alignment is absolute:** all cards, form fields, footers and buttons align to the grid columns; labels in a form column share one left edge; footer buttons in every modal align to the same right edge. Off-by-a-few-pixels misalignments fail the audit.
- **No layout shift between states:** toggling loading/populated, expanding a row, or validation messages appearing must not push unrelated content around (validation space is reserved or replaces help text per 3.9).
- **No filler:** no oversized hero areas, no decorative empty bands, no stretched vertical centring of small content in tall containers on work screens.

**Test:** open the three most-used screens at 1366px, 1920px and 2560px with the browser's layout overlay on. Every gap must match a token (8/16/24/32); every page must be identifiably fluid-work or capped-reading; any accidental void, double margin, ragged row or misaligned edge is logged as a defect.

### 3.12 Icon-button hover proportions

Hover is a colour change, never a size change. An icon-button's resting box (width, height, border-radius and padding) is fixed by 3.1 and 3.4; hover, active and focus states may change background tint, foreground colour and elevation, but must not resize the target or introduce a new geometry.

- **Resting metrics are load-bearing.** A 18px chip-remove button stays 18px on hover; a 32px `btn-icon` stays 32px on hover. Growing the box (or adding a pill background bigger than the icon) creates optical whiplash on small chrome, and makes the whole compact container feel unstable.
- **Solid semantic colours (`danger`, `success`, `warning`) never appear inside a row, chip or badge on hover** — that is the row-actions rule from 3.2 extended to hover. Remove triggers in these contexts use `btn-ghost-danger`: transparent resting background, `--color-danger-light` tint plus `--color-danger` icon on hover. The tint fills only the resting box.
- **No hover growth via padding, transform: scale(), or an outer glow that exceeds the resting hit area.** Elevation changes are allowed only for cards and menu items where the whole surface is the target, not for icon-buttons.
- **Focus-visible matches hover.** The keyboard-focus treatment stays inside the same resting box; the focus ring is the library's, not a bespoke box-shadow that adds pixels.

**Test:** hover every icon-button on the five most-used screens. Any button whose visible footprint changes size on hover, or whose hover fills a compact container with a solid semantic colour, fails.

### 3.13 Table anatomy: rows, selection column, row hover

Every table in the suite renders with the same anatomy so a user's eye lands on the same landmarks in any product.

| Element | Specification |
|---|---|
| Selection column | Always the first column when the table is selectable. Fixed 40px wide, 16px horizontal padding, checkbox vertically centred. Checkboxes are 18px, `--radius-sm` corners, transparent resting fill with a 1.5px border, and fill with `--color-primary` on check with a white tick. Indeterminate renders as a white bar. |
| Header row | 48px tall, sticky (§3.10), `--color-surface-3` background, uppercase `--font-size-xs` `--font-weight-semibold` labels, 0.045em letter-spacing. Sortable columns carry the tri-state indicator per §4.4. Never wraps. |
| Body row | 56px comfortable / 44px compact. Row background is `--color-surface-1`; hover is a 3% primary tint. Selected rows use `--color-primary-subtle` and keep the same height. |
| Row divider | 1px `--color-border-subtle` between rows, never a full-strength border. |
| Row click | Opens the record drawer (§4.4). The selection cell stops propagation so clicking the checkbox never opens the record and vice versa. |
| Row actions | `btn-ghost-secondary` icon buttons pinned to a right-aligned action cell; delete uses `btn-ghost-danger`. Never solid colours. Icons are `icon-base` (16px). |
| Column alignment | Text and identifiers left-aligned; numbers, currency and dates right-aligned with tabular-nums; status badges left-aligned. |
| Empty column value | Rendered as an em-dash `—`, muted, never left blank. |

---

## 4. Interaction and Data Standards (API, Loading, Destructive Actions, Tables)

These rules govern how every product behaves whenever it talks to the server or handles user data. They are mandatory and identical in all products.

### 4.1 Loading States: Skeleton First

Every data view is designed in **four states: loading, empty, error and populated**. No view ships with fewer than all four.

- **Skeleton loading is the standard for every content fetch.** While an API call loads a page, table, card, drawer or dashboard, the area shows skeleton placeholders (shimmering blocks) that match the final layout: skeleton rows in tables with the same column widths, skeleton KPI blocks, skeleton chart areas, skeleton form fields in drawers. Skeletons are sized so the real content replaces them with zero layout shift.
- **Spinners are for actions, skeletons are for content.** A spinner appears only inside a button or small control that triggered work (see 4.2); content areas never show a lone centred spinner on an otherwise blank region when a skeleton is possible.
- **No blank screens, ever.** A white or empty area during loading is a fail. The shell (sidebar, navbar, page header) renders immediately; content areas skeleton independently so fast sections appear without waiting for slow ones.
- **Slow and failed loads:** if a fetch exceeds 10 seconds, the skeleton area gains a "Still loading..." line. On failure, the area switches to its error state: what failed, in plain language, with a Retry button. Retry re-shows the skeleton.
- **Refetches keep the old data visible** (with a subtle loading indicator) rather than dropping back to skeleton; skeleton is for first loads and empty caches only.
- Skeleton colours come from the shared theme and have correct light and dark variants.

### 4.2 Buttons During API Calls

- **Hover always:** every enabled button has a visible hover state and pointer cursor (P8). A button with no hover treatment is a fail.
- **Immediate lock on click:** the moment a button fires an API call, that button disables and shows the spinner-in-button pattern (spinner replaces or precedes the label, label may change to its progressive form: "Saving...", "Deleting...").
- **Conflicting actions lock together:** while a call is in flight, every button whose action could conflict with it is disabled too. Submitting a form disables the whole form footer and the form's inputs; deleting a record disables that row's other actions; a bulk operation disables the bulk toolbar. Unrelated navigation stays usable.
- **Double-submit is impossible.** Rapid double clicks, Enter plus click, or clicking two related buttons must never fire duplicate API calls. This is enforced in the UI (disabling) and guarded in code (in-flight request tracking).
- **On failure:** controls re-enable, the user's input is fully preserved, and an Alert or Toast names the problem and the fix. The user never retypes anything because a call failed.
- **On success:** a Toast (top-right, per 3.6) confirms in the same vocabulary as the button ("Publish" gives "Published"), and the button returns to normal or the view moves on.

### 4.3 Destructive Operations: Always Warn

- **Every delete operation, without exception, shows a warning confirmation Modal (small, 400px per 3.5) before executing.** No silent deletes, no delete-on-single-click, anywhere in the suite.
- The modal **names exactly what will be deleted**: the record by name ("Delete deal 'Acme renewal'?") or the count for bulk actions ("Delete 14 contacts?"), and states the consequence ("This cannot be undone" or "You can restore this from Trash for 30 days").
- **Cascades are disclosed:** if deleting a record removes children (a project's tasks, a folder's files), the modal says so with counts.
- The confirm button is `btn-danger` labelled with the verb ("Delete", never "OK" or "Yes"); Cancel is `btn-white` and **holds the default focus**, so Enter alone cannot destroy data.
- **High-impact deletes** (whole projects, workspaces, records with many children, anything irreversible) require type-to-confirm: the user types the record name or DELETE before the confirm button enables.
- **Prefer soft delete with undo:** where the backend allows, deletion completes with a Toast carrying an Undo action (5 seconds), and hard removal happens afterwards. Where only hard delete exists, the modal must say the action is permanent.
- The same rules apply to other destructive verbs: revoke, remove member, cancel subscription, overwrite import, bulk status change that discards data.

### 4.4 Tables: Toolbar, Pagination and Selection

Every data table in the suite follows this exact contract.

**Table Toolbar (single row, always above the table):**

The table has one row of chrome above the table and no chrome below it. Left to right:

```
[ 🔍 Search records… ] ─────────── [ Bulk action(s) ]  [ 10 ▼ ]  of N   X - Y   [ < ] [ > ]
```

- **Search on the left**: typeahead search input (§4.6), 36px tall, plain text-input styling with a magnifying-glass leading icon and no visible border at rest. Placeholder names the domain ("Search violations", not "Search"). Debounce and 2+ character rule per §4.6.
- **Bulk actions in the middle-right**: rendered inline only when a selection exists (never as a persistent empty slot). Uses `btn-soft-danger` or `btn-soft-secondary` per 3.2 — never solid `btn-danger` inside a toolbar. Bulk destructive actions confirm with counts per 4.3.
- **Compact pagination on the right**: `[ page-size ▼ ]  of N   X - Y   [ < ] [ > ]`. Same 10 / 25 / 50 / 100 options, same "showing" semantics as the legacy full-width pagination, laid out tightly (32px controls) so it fits in the toolbar.
- **No bottom pagination.** The single-row toolbar replaces the older three-row anatomy (top actions bar + selection banner + bottom pagination). Only the cross-page selection banner appears between toolbar and table, and only when the user has selected all rows on the current page and there are more matching records.

**Pagination (always):**
- Any list that can exceed 25 rows is paginated. No unbounded infinite lists in work screens.
- Default page size 25, selector 10 / 25 / 50 / 100. The user's choice is remembered per table, per user (URL first, then user prefs).
- A result count is always visible; the "of N  X - Y" pair in the compact pagination is the canonical form.
- Pagination, sorting and filtering are server-side for any dataset that can grow large; the current page, sort and filters are reflected in the URL so views are shareable and survive refresh.

**Selection (always):**
- The first column is a checkbox column, 40px wide (§3.13). Header checkbox selects all rows on the current page; when only some rows are selected it shows the indeterminate state; clicking it again clears.
- After select-all-on-page, a thin banner between the toolbar and table offers cross-page selection: "All 25 on this page selected. Select all 312 matching records." Clearing is always one click.
- The selection count is carried by the bulk-action button label or a small count adjacent to it; there is no separate persistent selection banner.
- Clicking a row opens the record (drawer); clicking the checkbox only ever toggles selection and never opens the row. Selection survives paging within the same filtered view.

**Sorting and filtering:**
- Sort indicators are always visible on the active column; one click sorts ascending, second descending, third clears.
- Active filters render as removable chips above the table (below the toolbar) with a "Reset filters" control; filter state persists when the user opens a record and returns.

### 4.5 Data Safety and Session Standards

- **Unsaved changes are guarded twice:** an in-app confirmation when navigating away from a dirty form, and the browser's native warning on tab close or refresh. Where feasible, drafts auto-preserve so even a crash loses nothing.
- **Session expiry never destroys work:** the user is warned 5 minutes before expiry with a one-click extend; if the session does expire, typed input is restored after re-login rather than discarded.
- **Concurrent editing is surfaced, never silently lost:** if a record changed on the server while the user was editing it, saving warns and offers to review the newer version; the product never silently overwrites someone else's work.
- **Network loss:** a persistent banner appears when the connection drops, actions that would fail are disabled, and a Retry appears when the connection returns. Work in progress is kept.
- **Auto-refreshing data never yanks content:** live lists and dashboards do not reorder or replace rows under the cursor; new data announces itself with a "New updates available: Refresh" control.

### 4.6 Additional Professional Standards

- **Search behaviour:** type-ahead searches debounce at 300ms, show a small spinner inside the input while fetching, require 2+ characters for server search, and highlight the matched text in results.
- **Exports run async:** the user triggers an export, a Toast confirms it has started, and a notification (bell plus Toast) delivers the download when ready. File names follow one convention: `product_module_YYYY-MM-DD.xlsx`. The UI is never frozen waiting for a file.
- **Numbers and dates in tables:** numeric and currency columns right-aligned with locale formatting and a visible currency symbol; text left-aligned; date columns use one consistent format per table with the full timestamp on hover.
- **Permissions:** features a user's role can never access are hidden; features temporarily unavailable (plan limits, record state) are shown disabled with a Tooltip explaining why and, where relevant, an upgrade path.
- **Notification badges** cap at "99+" and clear when the panel is read.
- **Optimistic updates** are allowed for trivial, instantly reversible actions (starring, marking read); anything involving money, records or other users waits for the server and shows the 4.2 states.

---

## 5. Design Tokens (Shared Across All Products)

All products consume the same customised Front build from a single shared package (one SCSS variable file, built once, used everywhere), which includes every dimension in Section 3 and the skeleton styles in 4.1. Products never hard-code values and never maintain their own fork of the theme.

### Colour roles (mapped to library classes)

| Token / class | Role | Rule |
|---|---|---|
| `primary` (with `-light` / `-dark` variants) | Brand, primary actions, active nav | One value suite-wide, set in the shared SCSS |
| Product accent | Product identity | One per product, used only for the product icon and nav highlight; never on buttons |
| `success` | Positive status | Always paired with icon or label |
| `warning` | Caution status | Always paired with icon or label |
| `danger` | Destructive actions, errors | Never used decoratively; button use per 3.2 |
| `info` | Neutral informational status | Sparingly |
| `body` / `muted` | Body and secondary text | Must meet 4.5:1 on their backgrounds |
| `light` / `dark`, white opacities | Surfaces and inverse text | Only via library utilities, never raw hex |

### Typography

The library's typography scale is the suite scale. One type family, set once in the shared SCSS. Body text 16px minimum (14px permitted inside data tables and buttons only), line height around 1.5, line length under 80 characters on reading surfaces (enforced by the 960px cap in 3.11). Headings use the library's heading classes only. Weights limited to regular, medium and semibold.

### Layout, spacing, borders, elevation

Desktop layouts use the Bootstrap grid per the width and spacing rules in 3.11. Only the library's spacing utilities (`m-*`, `p-*`, `g-*`), border utilities and shadow utilities are used; no custom margins, paddings or shadows in product CSS. Two border radii (the library defaults; `rounded-pill` only where the pattern map allows). Z-index only via the library's z-index utilities.

### Iconography

**Bootstrap Icons is the single icon set**, in the four sizes defined in 3.4. No mixing with other icon libraries. Each concept maps to exactly one icon suite-wide, recorded in a shared icon map. Illustrations come only from the library's illustration set, always with the dark-mode counterpart.

---

## 6. Shared Pattern Map (Front Dashboard v2.0 Components)

Every product must use these library components for these jobs, identically configured and sized per Section 3, behaving per Section 4. If a job has no component here, it is proposed to the design system owner, agreed, added, and then used by everyone.

| Job | Library pattern | Suite rules |
|---|---|---|
| App shell | **Navbar Vertical Aside** (sidebar) + top **Navbar** | Sidebar persistent at desktop widths (260px / 64px mini), collapsible by user choice and automatically below 1366px. Product switcher and logo top-left, global search centre of top navbar, notifications, settings and profile top-right. |
| Page top | **Page Header** with **Breadcrumb** | Every page. Title (single-line ellipsis); breadcrumb with middle-collapse; page-level actions right-aligned. |
| Grouping content | **Cards** on the grid | 24px padding, 24px gutters, one card per logical group; equal heights in rows; no card-in-card beyond one level. |
| Data lists | **Tables / Datatables / Sticky Header** | Full contract in 4.4: single-row **Table Toolbar** (search left; bulk actions + compact pagination right; no bottom pagination); page-size selector 10 / 25 / 50 / 100 with default 25; result count as "of N  X - Y"; checkbox select-all with indeterminate and cross-page banner; sort indicators (tri-state); filter chips with Reset; URL-reflected state; skeleton rows while loading; ellipsis cells with hover recovery; column chooser; density toggle. Row and selection-column anatomy per 3.13. Fluid width per 3.11; horizontal scroll inside the card only. |
| Record detail / create | **Offcanvas** (right side) | 480px default, 640px wide per 3.5; skeleton fields while loading; body scrolls, header and footer fixed; list scroll position and selection preserved on close. |
| Short decisions | **Modal** | Fixed 400/600/800px per 3.5, max-height 80vh, same anatomy and paddings everywhere. Escape closes, focus trapped, focus returns to trigger. Destructive modals per 4.3. |
| Confirmations | **Toasts** | Top-right, fixed 360px, ellipsis rules and stacking per 3.6; destructive confirmations include Undo where feasible. |
| Persistent warnings | **Alerts** | Inline, semantic colour, dismissible only when safe to ignore; space collapses on dismiss (3.11); also used for network-loss banner (4.5). |
| Progressive disclosure | **Collapse, Dropdowns, Popovers, Tooltips** | Dropdown specs per 3.8. Advanced options live behind these; daily-use controls never hidden inside them. |
| Status labels | **Badge** and **Legend Indicator** | Colour plus text, never colour alone; badge max width 160px with ellipsis. |
| People | **Avatars** | Sizes per 3.10, same fallback initials rules suite-wide. |
| Multi-step tasks | **Steps / Step Forms (Wizard)** | Numbered steps only for genuine sequences; progress visible; back always possible. |
| Hints | **Tooltips** (240px max, 300ms delay), **Popovers** (320px max) | Mandatory on every `btn-icon`, every disabled control and every truncated text. |
| Loading | **Skeletons** (shared theme) for content, **Spinners**/button-with-spinner for actions | Full contract in 4.1 and 4.2. |
| Forms | **Basic Forms, Input Group, Checks and Switches, Advanced Select, Datepicker, Date Range Picker, Input Mask** | Control sizing per 3.9; behaviour per 4.2 and 4.5. Labels above fields, never placeholder-only. Required marked. Inline validation on blur, error summary on submit, submit gated on validity, unsaved-changes guard. One datepicker (Flatpickr) and one select (Advanced Select) suite-wide; selects over 10 items searchable. |
| File input | **File Attachments / Dropzone** | Drag and drop with previews, middle-truncated file names, same limits messaging everywhere. |
| Rich text | **WYSIWYG (Quill)** | The only rich text editor, same toolbar configuration, Ctrl/Cmd+S saves, drafts preserved. |
| Search | **Form Search** in navbar and lists | Global search top navbar (`/` or Ctrl/Cmd+K); debounce and behaviour per 4.6. |
| Charts | **Chart.js** (+ Counter, Circles for KPIs) | One charting library, colours mapped to semantic tokens, Legend Indicators for keys, skeleton placeholders while loading. |
| Reordering | **SortableJS** | The only drag-and-drop reorder mechanism. |
| Long pages | **Go To** (back to top) | Appears after two viewport heights; the only scroll enhancement allowed. |

**Dates, numbers, currency:** one shared formatting library, respecting user locale; table alignment per 4.6. Relative dates ("2 hours ago") under 7 days.

**Permissions and states:** per 4.6: hide never-accessible features; disable temporarily unavailable ones with an explaining Tooltip.

---

## 7. Library Governance

- The suite maintains **one themed build** of Front Dashboard v2.0 (shared SCSS variables including all Section 3 dimensions, the button colour mapping, the toast styles and the skeleton styles, compiled once, versioned, consumed by all products). Products never edit library source or ship their own theme fork.
- **Upgrades** are tested centrally against this checklist, then rolled out to all products in the same release cycle.
- **Custom components** are a last resort: allowed only when no library component fits, approved in writing, built with library tokens and Section 3 dimensions, then added to Section 6 so every product uses the same one.
- Components outside the pattern map need approval before first use.
- The **suite shortcut map** and **icon map** are maintained alongside the theme and versioned with it.

---

## 8. Per-Product Test Checklist

Run this before every release on a 1920 x 1080 display, repeating the layout checks at 1366 x 768 and 2560px, and the API-behaviour checks with the network throttled. Score each item 0 (fail), 1 (partial) or 2 (pass). Maximum score 132.

### A. Suite and library consistency (P1, P3, P5)

| # | Check | Score |
|---|---|---|
| 1 | Sidebar (260/64px), top navbar (60px) and product switcher match the suite standard; sidebar persistent at desktop widths | |
| 2 | Every page opens with the Page Header + breadcrumb; current location highlighted in sidebar | |
| 3 | All ten common actions use standard labels, icons, placement, colour and hover behaviour | |
| 4 | Tables, forms, drawers, modals and toasts use the mapped library components at Section 3 sizes | |
| 5 | No custom component duplicates an existing library component | |
| 6 | Only Bootstrap Icons used, in the four defined sizes, matching the shared icon map | |
| 7 | Only shared-theme tokens and library utilities used (no raw hex, no custom spacing) | |

### B. Hierarchy, density and content (P2, P4, P6, P10)

| # | Check | Score |
|---|---|---|
| 8 | Five-second test passed at 1920px on the three most-used screens | |
| 9 | One solid `btn-primary` per screen, visually dominant; content aligned to the grid | |
| 10 | Core scan-and-act task possible without opening anything; advanced options within two clicks | |
| 11 | No technical or internal jargon in any user-facing text | |
| 12 | All error messages name the problem and the fix, non-punitively | |
| 13 | All empty states use library illustrations and offer a first action | |
| 14 | Forms prevent errors: validation on blur, masks, submit gated on validity | |

### C. Buttons, popups and toasts (3.1, 3.2, 3.5, 3.6)

| # | Check | Score |
|---|---|---|
| 15 | All buttons respect min/max widths and heights; no wrapped button labels anywhere | |
| 16 | Button colour mapping (3.2) followed exactly: same verb, same colour, everywhere; Cancel always `btn-white`; `danger` only destructive | |
| 17 | One primary colour value throughout; hover/active/disabled shades from the shared theme only; no gradients or custom button styles | |
| 18 | All modals are exactly 400, 600 or 800px; all drawers 480 or 640px; same purpose = same size | |
| 19 | Popup anatomy identical: title ellipsis + close icon top-right, 24px paddings, scrollable body with fixed header and footer | |
| 20 | All toasts top-right, fixed 360px, title single-line ellipsis, body 2-line clamp; long record names inner-ellipsis; layout never breaks | |
| 21 | Toast durations, stacking (max 3) and above-overlay layering per 3.6 | |

### D. Truncation, dropdowns and scrolling (3.3, 3.7, 3.8)

| # | Check | Score |
|---|---|---|
| 22 | Long-text stress test passed: 100-character names in tables, cards, sidebar, breadcrumbs, dropdowns, modal titles and page titles all ellipsis cleanly | |
| 23 | Every truncated text recovers its full value on hover (title attribute or Tooltip) | |
| 24 | Dropdowns respect min/max width, max height with internal scroll, item specs; lists over 10 items searchable | |
| 25 | Custom suite scrollbar applied everywhere; horizontal scroll only inside contained elements, never the page | |
| 26 | Sticky table headers; modal/drawer bodies scroll with fixed header and footer; list scroll position preserved after closing a drawer | |
| 27 | Inputs, selects and buttons align at matching heights in mixed rows | |
| 27a | Icon-button hover preserves the resting box (§3.12): no size growth, no solid semantic colour inside a row, chip or badge, focus-visible matches hover | |

### E. Layout hygiene (3.11)

| # | Check | Score |
|---|---|---|
| 28 | Work surfaces fluid with 24px padding; no arbitrary max-width leaving empty flanks at 1920 or 2560px | |
| 29 | Reading surfaces capped at 960px; nothing in between the two page types | |
| 30 | All gaps trace to the spacing scale; no double margins, no orphan gaps when elements hide | |
| 31 | Cards in a row equal height; labels, footers and buttons share exact alignment edges | |
| 32 | No layout shift between states (loading/populated, validation appearing, rows expanding) | |

### F. Loading, API and destructive behaviour (4.1 to 4.3)

| # | Check | Score |
|---|---|---|
| 33 | Every data view has all four states designed: loading (skeleton), empty, error, populated | |
| 34 | Skeletons match final layout with zero layout shift, in light and dark mode; no blank areas during any fetch | |
| 35 | Content areas load independently; refetches keep old data visible; 10s "still loading" and error-with-Retry states work | |
| 36 | Every API-triggering button disables immediately and shows spinner-in-button with progressive label | |
| 37 | Conflicting actions and form inputs lock during in-flight calls; unrelated navigation stays usable | |
| 38 | Double-submit impossible: rapid clicks and Enter+click fire exactly one request | |
| 39 | On failure controls re-enable with input fully preserved and a named error; on success a matching-vocabulary Toast | |
| 40 | Every delete shows the 400px warning Modal naming the item or count, consequences and cascades | |
| 41 | Destructive modals: `btn-danger` verb confirm, `btn-white` Cancel holds default focus, high-impact deletes type-to-confirm | |
| 42 | Soft delete with 5-second Undo Toast where feasible; permanence stated where not | |

### G. Tables and data safety (4.4 to 4.6)

| # | Check | Score |
|---|---|---|
| 43 | All tables paginated: default 25, selector 10/25/50/100, "Showing X-Y of Z", choice remembered | |
| 43a | Single-row **Table Toolbar** anatomy: search left, bulk actions + compact pagination right, no bottom pagination row (§4.4) | |
| 44 | Checkbox column with select-all, indeterminate state, cross-page selection banner and one-click clear | |
| 44a | Selection column is 40px wide with 18px rounded checkboxes; checked state fills with `--color-primary` and a white tick; indeterminate renders as a white bar (§3.13) | |
| 45 | Bulk action toolbar appears on selection with visible count; bulk destructive actions confirm with counts | |
| 46 | Row click opens record, checkbox click only selects; selection and filters survive open/close and paging | |
| 47 | Sort indicators, filter chips with Reset, and page/sort/filter state reflected in the URL | |
| 48 | Unsaved changes guarded in-app and on tab close; session expiry warns and preserves typed work | |
| 49 | Concurrent edit warning on stale saves; network-loss banner with retry; live data never yanks content | |
| 50 | Search debounced 300ms with in-input spinner; exports async with notification and standard file naming | |
| 51 | Numbers/currency right-aligned with locale formatting; permissions hide vs disable rules followed | |

### H. Desktop layout (Section 1, P2)

| # | Check | Score |
|---|---|---|
| 52 | Fully usable at 1366 x 768 with no horizontal page scrolling | |
| 53 | Line lengths under 80 characters on reading surfaces at 2560px | |
| 54 | Graceful degradation 1024 to 1366: sidebar mini mode, tables scroll within cards, nothing breaks | |

### I. Keyboard and affordance (P8, P9)

| # | Check | Score |
|---|---|---|
| 55 | Every clickable element has hover state and pointer cursor | |
| 56 | Tab order matches visual order on the three core forms | |
| 57 | `/` or Ctrl/Cmd+K focuses search; Escape closes overlays; Enter submits (but never confirms destructive modals) | |
| 58 | Ctrl/Cmd+Z undo where undo exists; Ctrl/Cmd+S saves in editors | |
| 59 | Shortcut cheat sheet opens with `?` and matches the suite shortcut map | |
| 60 | Three core tasks completable by keyboard only | |

### J. Accessibility and dark mode (P11, P14)

| # | Check | Score |
|---|---|---|
| 61 | Automated audit (axe/Lighthouse) clean in light AND dark mode | |
| 62 | All text meets contrast ratios in both modes | |
| 63 | Status never conveyed by colour alone | |
| 64 | Every `btn-icon` and disabled control has accessible label and Tooltip | |
| 65 | Dark mode fully correct: paired illustrations, logos, charts, skeletons, toasts and scrollbars | |

### K. Performance, craft and improvement (P7, P12, P13, P15)

| # | Check | Score |
|---|---|---|
| 66 | LCP under 2.5s, INP under 200ms, CLS under 0.1 on the three key screens | |
| 67 | Heavy plugins load only on pages that use them; large tables paginate or virtualise | |
| 68 | Typography and spacing from library scales only; no decoration without purpose; feedback channel live with a traced improvement | |

**Scoring:** 119 to 132 = ship. 99 to 118 = ship with a written fix plan and dates. Below 99 = do not ship.

---

## 9. Cross-Product Consistency Audit (Quarterly)

Run across all products together, once per quarter, at 1920 x 1080.

1. **Screenshot wall.** Dashboard, main list and main record drawer from every product, light and dark mode, plus each in its skeleton loading state. Circle anything inconsistent.
2. **Button colour matrix.** For the ten common verbs, record the exact button class and colour in every product; any verb with two colours anywhere in the suite is a defect.
3. **Popup and toast sweep.** Trigger a confirmation, a form modal, a record drawer and a success toast in every product: verify identical sizes, anatomy, paddings, toast position (top-right), width and ellipsis behaviour.
4. **Action matrix.** Ten common actions against all products: exact label, icon, placement, hover behaviour and shortcut per cell.
5. **Long-text stress test.** Seed every product with the same extreme records (100-character names, long emails, huge file names); any broken layout or missing ellipsis is a defect, including in toasts and modal titles.
6. **Layout hygiene sweep.** At 1920 and 2560px, check every product's main screens for empty flanks from unwanted max-widths, double margins, orphan gaps, ragged card rows and misaligned edges.
7. **Throttled-network sweep.** With the network throttled, load each product's main list and submit its main form: verify skeletons, button locking, double-submit prevention and error recovery behave identically.
8. **Delete sweep.** Perform a single and a bulk delete in every product: verify identical modal size and wording patterns, focus behaviour, type-to-confirm thresholds and undo behaviour.
9. **Table contract check.** Verify pagination defaults, select-all behaviour, cross-page banner, bulk toolbar and URL state work identically in every product.
10. **Switch test.** A tester completes one task in Product A, then the equivalent in Product B, without training, keyboard-first.
11. **Token and library drift scan.** Automated scan for raw hex, custom sizes, custom button styles, non-standard icons, native scrollbars, non-standard toast positions, duplicate plugins.
12. **Vocabulary audit.** The same concept never has two names across products.
13. **Theme version check.** Every product declares its shared build version.

Findings feed a single suite-wide backlog owned by the design system owner.

---

## 10. Release Gate

A product ships only when all of the following are true:

- Checklist score of 119 or above, or 99+ with an approved fix plan.
- Zero fails in Section J (accessibility and dark mode are pass/fail, never partial).
- Zero fails on items 16, 18 and 20 (the consistency floor: button colours, popup sizes, toasts), items 33, 34, 38, 40 and 41 (the loading and destructive-action floor), items 22 and 23 (the truncation floor), items 28 and 52 (the layout floor), item 27a (icon-button hover proportions), and items 43a and 44a (the table toolbar / selection anatomy).
- No component used outside the pattern map without written approval.
- Product consumes the current shared library build, not a fork.
- Shortcut map and vocabulary list verified.
- Core Web Vitals green on the three key screens.

---

## 11. Governance

- **Design system owner:** one named person maintains the shared theme build, the pattern map, the icon map, the shortcut map and this document. Changes go through them.
- **Exceptions:** any product wanting to deviate submits a one-paragraph rationale. Approved exceptions either become suite-wide patterns or expire in one release.
- **Versioning:** this document and the shared library build are versioned together. Products declare which versions they were audited against.
- **New products:** every new product starts from the shared theme build, pattern map and shortcut map on day one. Nothing is built from scratch.

---

*The measure of success: a customer who has used one product in the suite opens another for the first time, at their desk, and completes their first task without asking where anything is, without losing a keystroke of work, and without ever wondering whether a click worked.*
