# Design-Principles Audit: Zoho Forms vs. Typeform

**Rubric source:** `product-suite-design-principles-v1.7-desktop.md` (repo root) — reused as a generic interaction-design testing standard, not a literal compliance check (neither product consumes the "Front Dashboard v2.0" library that document is written for). See `Research-Library/prompt-backlog-design-principles-audit.md` for the full prompt set and scoping notes (which checklist items are structurally N/A for a third-party product and excluded).

**Scoring:** 0 (fail) / 1 (partial) / 2 (pass), per the source document's own rubric. `N/A` = structurally inapplicable (Front-Dashboard-library-specific), not a failure. `NOT OBSERVED` = genuinely not yet tested this pass.

**Status:** Audit in progress. D1 partially run (2026-09-18) — see gaps flagged below, closed by the `D1-followup-zoho` / `D1-followup-typeform` prompts (each product now run as its own separate browser-extension session, per this backlog's established one-product-per-prompt convention). D2–D10 not yet run, each split the same way (`D2-zoho`/`D2-typeform`, etc.) in `prompt-backlog-design-principles-audit.md`.

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

### Gaps — needs a follow-up pass (targeted, not a full D1 re-run)

The following were explicitly flagged as unfinished by the research pass itself, not guessed at:
1. Typeform's own "•••" row-trigger icon (not just its dropdown's menu items) — live before/after hover-zoom comparison.
2. Zoho's bulk-toolbar icon-only buttons ("Move to Folder"/"Change Ownership" area's icon controls) — only the row-level kebab was hover-tested, not the toolbar's own icon buttons.
3. A single combined view showing a Cancel/Close button and an Edit/Duplicate/Export-style secondary button together, for both products (requested for completeness, not yet captured).
4. Item 17 (colour-token consistency, gradients/shadows) — not reached at all.

## D2–D10

Not yet run.
