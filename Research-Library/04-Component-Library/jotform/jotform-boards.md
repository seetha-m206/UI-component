---
component: "Jotform Boards (Kanban task/project board; dual identity as generic board vs. workflow-run tracker)"
ui_category: "Application Layout > Boards (Kanban Task Board)"
source_product: "JotForm"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
---

# Component: Jotform Boards (Kanban Task Board)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **Pass ID: JF10 (4 of 4, filed alongside [[jotform-workflows-workflow-builder]] and [[jotform-ai-agents]]).** No specific cross-link target exists for this record — no sibling product in this library currently documents a Kanban/task-board equivalent, so Competitor Comparisons is intentionally empty.

This record resolves part of the JF10 brief: a broad identification pass on Jotform Boards, one of four never-previously-opened products alongside Apps, Workflows, and AI Agents — see [[jotform-workflows-workflow-builder]], [[jotform-ai-agents]] (filed alongside this record) and [[jotform-apps-app-builder]] (referenced throughout the sibling records but **not yet filed**). This record also directly resolves the brief's explicit, specific sub-test for Boards: does opening it from "+ CREATE" vs. from the shared mode-switcher produce the same screen?

## Location

Reached two ways, both tested live and directly compared: (1) the dashboard's "+ CREATE" → "How would you like to start?" picker → "Board" card ("Organize tasks and ensure everything stays on track"); (2) the shared app-shell mode-switcher's "Boards" entry (marked "NEW"), confirmed reachable from inside the Workflow Builder's own header dropdown. FACT

## Structure

**1. What it actually is, confirmed live: a generic Kanban-style task/project board — Trello-like, when reached via "+ CREATE."** FACT "+ CREATE → Board" opens a "Create Board" chooser ("Track and manage tasks, set due dates, and collaborate with your team") offering Start from scratch, Select form ("Turn form submissions into tasks"), Use template ("Jumpstart with a template"), and Import board ("Import a project from another platform" — i.e., migrating an existing Trello/Asana/similar board). Choosing "Start from scratch" produced an "Untitled Board" with four pre-seeded Kanban columns — Backlog, Waiting, In Progress, Done — and two onboarding-tip cards already placed ("Create new tasks on your board," "Edit your groups"), each a standard task card with a date chip and avatar. This is a conventional, general-purpose project/task-tracking board. FACT

**2. Starting point: a 4-way pattern, with "Select form" standing in for the usual "AI generation" slot.** FACT Unlike Apps, Workflows, and (per [[jotform-sign-builder]]) Sign, Boards' own chooser does not lead with a natural-language AI-prompt box — its four options are Start from scratch, Select form, Use template, and Import board. "Select form" is the closest analog to an automated/data-driven starting point here: rather than generating content from a text description, it turns an existing form's submissions directly into board cards/tasks. "Import board" is also notable as the only cross-platform migration path observed across any of the four JF10 products — a concrete acquisition/switching-cost feature aimed at teams already using Trello-style tools elsewhere. FACT

## Actions

| Entry point / control | Input | Result |
|---|---|---|
| "+ CREATE" → "Board" → "Start from scratch" | — | Opens an "Untitled Board" with Backlog/Waiting/In Progress/Done columns, pre-seeded with onboarding-tip task cards |
| "+ CREATE" → "Board" → "Select form" | Pick an existing form | (not completed this pass — see Second-Pass Flags) |
| Mode-switcher (from inside an active Workflow) → "Boards" | — | Opens/creates a board titled "Workflow Board", auto-scoped to that specific workflow, with a single "Completed" column and a run-count counter |
| Board toolbar → "Groups ▾" | — | A view-grouping control (not opened further this pass) |
| Column header → "⋮" (three-dot menu) | — | Per-column options menu (not opened further this pass) |

## Behavior & States

**3. The brief's specific sub-test — "+ CREATE" vs. mode-switcher — resolved: the two paths do NOT produce the same screen.** FACT — the central finding of this record, directly answering the brief's explicit sub-question. This was tested as a direct, controlled comparison in the same session:

- **Via the Workflow Builder's mode-switcher** (opened from inside a workflow that had a "Coffee Club Signup" form trigger already bound): landed on a board titled "Workflow Board" (board ID `262772321397058`), with exactly one column — "Completed" (green checkmark icon) — no cards, and a "0 runs" counter fixed in the bottom-left corner of the canvas. This board's structure (a single status column plus a run-count metric, rather than a generic multi-column task list) strongly indicates it is a workflow-execution monitor — a purpose-built view for tracking how many times this specific workflow has run and what happened each time — auto-provisioned and auto-named to match the workflow, not a board the user built or named themselves. FACT
- **Via "+ CREATE → Board → Start from scratch"**: landed on a board titled "Untitled Board" (board ID `262771792706063`, confirmed different from the above), with four generic columns — Backlog, Waiting, In Progress, Done — and two onboarding-tip cards, with no run-count or workflow-specific UI anywhere. FACT

These are two structurally different board instances, confirmed by distinct board IDs, distinct titles, distinct default column sets, and the presence/absence of a run-count metric. **The answer to the brief's question is no — opening Boards via the mode-switcher from within a workflow does not open the same generic board a user gets from "+ CREATE"; it opens (or creates) a board auto-scoped to monitor that specific workflow's runs.** This also means "Boards," as a mode-switcher destination, is context-sensitive rather than always routing to one canonical "my boards" list the way Tables or Inbox appear to. FACT

**4. Coupling to existing products: dual-natured — a standalone generic product when self-initiated, but tightly and automatically coupled to Workflows when reached from inside one.** FACT As a generic Kanban board (the "+ CREATE" path), Boards functions as a standalone project-management product with its own identity, matching the "Import board" option's framing as a destination for migrating work from competitor tools. But the "Select form" starting option and the Workflow-triggered "Workflow Board" auto-provisioning both demonstrate the same broader pattern seen across this JF10 pass: Boards readily absorbs or mirrors other products' data (form submissions as cards; a workflow's run history as a tracked board) rather than existing in total isolation. This is a different kind of coupling than Apps' embedded-Tables-tab (per the still-unfiled Apps record) or Workflows' trigger/action step types ([[jotform-workflows-workflow-builder]]) — Boards is coupled by being auto-generated as a side effect of using another product, not by embedding that product's UI inside itself. FACT

**5. Pricing/plan gating: no lock icons or paywall banners encountered in either board's toolbar, columns, or Groups/options menus on this account.** FACT, with the same free-plan caveat noted in the sibling JF10 records. Both the generic "Untitled Board" and the auto-scoped "Workflow Board" rendered fully, with Share, Help, Filter, Groups, and column-management controls all available with no visible gating. As with the other three products in this pass, this is an absence-of-evidence finding only — no attempt was made to create a large number of boards, columns, or cards to probe for a free-plan cap. FACT/OBSERVATION

**Competitor equivalent: none found in this library.** No sibling competitor record in this Research-Library currently documents a Kanban/task-board product. Competitor Comparisons is intentionally left empty.

## Rules & Validation

- A newly-created "Untitled Board" ships with default columns and sample onboarding cards already present — not a fully blank canvas requiring the user to create a first column themselves.
- The auto-created "Workflow Board" was not immediately populated with a run — its "0 runs" counter reflects that the bound trigger form ("Coffee Club Signup") had not actually received a live submission during this session (the workflow was configured but never fired).

## Technical Data

- Generic board URL pattern: `jotform.com/boards/{boardID}` — e.g., `.../262771792706063` ("Untitled Board").
- Workflow-scoped board: same URL pattern, different ID — `.../262772321397058` ("Workflow Board") — confirming both are ordinary Boards records at the data-model level, differentiated by their seeded content/title rather than a different route or product.
- Both board pages in this pass were observed to render blank on first navigation (a long-standing SPA-loading quirk noted elsewhere in this library for JotForm builder pages) and required either an extended wait or a manual reload before the Kanban UI appeared — consistent with normal JotForm SPA load latency rather than a genuine error (see [[jotform-app-shell-builder]] for prior occurrences of this pattern).
- The "Boards" tile carried a "NEW" badge in every mode-switcher instance observed this pass (from both Workflow Builder's and Boards' own switcher), suggesting Boards is among JotForm's more recently launched products.

## Competitor Comparisons

No competitor record exists yet for this product category in this library (see Behavior & States finding 5 / "Competitor equivalent" note above). No table is provided — flagged as an open gap for this library.

## Best Observed Approach

The auto-scoped "Workflow Board" run-tracker pattern is the standout finding of this record: rather than making a user manually build a Kanban view to monitor a workflow's execution history, JotForm auto-generates a purpose-fit board (single status column, run counter) the moment a workflow-context user opens Boards. RECOMMENDATION — this is a genuinely clever reuse of a generic product (Boards) as an on-demand, zero-configuration monitoring surface for a different product (Workflows), worth flagging as a notable cross-product integration pattern distinct from (and arguably more elegant than) simply embedding one product's UI inside another's, the approach the still-unfiled Apps record describes for its own DATA tab.

## Sources

- Live testing session, 2026-10-05, Jotform Boards reached via "+ CREATE" (`jotform.com/boards/262771792706063`, "Untitled Board") and via the Workflow Builder's mode-switcher (`jotform.com/boards/262772321397058`, "Workflow Board")
- Task brief JF10, which explicitly requested the "+ CREATE" vs. mode-switcher comparison resolved in Behavior & States finding 3 above

## Second-Pass Flags

- "Select form" and "Use template" starting paths were not completed — only "Start from scratch" was tested for the generic-board path. A second pass should confirm whether "Select form" produces a board structurally similar to the auto-scoped "Workflow Board" (single/few columns driven by submission status) or something else entirely.
- "Import board" was not tested — unclear which platforms are supported or what the import flow/mapping looks like.
- The "Workflow Board" was never populated with an actual run — the bound form was never actually submitted during this session, so it's unconfirmed what a populated run-tracking board looks like (additional columns beyond "Completed"? Card-level run detail?). A second pass should submit the "Coffee Club Signup" form once and re-open the Workflow Board to observe.
- Groups ▾ and per-column "⋮" menus were seen but not opened — board-level view options and column-management actions (rename, color, delete, WIP limits, etc.) are undocumented here.
- Whether every workflow gets its own auto-scoped board, or whether this is opt-in/triggered only the first time Boards is opened from that workflow, was not tested — the mode-switcher's "Boards" entry was only clicked once per workflow this pass.
- As with the other JF10 records, pricing/plan gating (finding 5) reflects an absence of encountered gating, not a confirmed unlimited-on-free-plan result.
- This record references the still-unfiled [[jotform-apps-app-builder]] once (the embedded-Tables-tab coupling-pattern comparison) — should be re-verified once that record exists.
