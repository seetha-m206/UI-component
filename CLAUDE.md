# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository nature

Most of this repository is **not a codebase** — no source code, build system, or test suite for the research content itself. It is built around two planning/specification documents that define a research methodology:

- `Complete Product Documentation & Competitor Reverse-Engineering Task.md` — the methodology for documenting competitor products: researching a product, exploring the live application (not just the marketing site), documenting every screen/component/action, reverse-engineering the technical behavior behind UI interactions (DOM → JS → network → API → response → state → HTML/CSS → animation), organizing findings into a common category system, benchmarking competitors, and eventually vectorizing the component data into a searchable knowledge base.
- `seetha_research_library.md` — the research/benchmarking process that precedes the above: identifying Zoho's primary products and their competitors, running a standardized product research questionnaire (company, market, pricing, features, reviews, UI/UX, workflows, technical architecture, AI capabilities, security, mobile), scoring competitors, and distinguishing FACT / INFERENCE / OPINION / RECOMMENDATION when recording findings.

There are no commands to build, lint, or test the research content. When asked to "work on this project" in the context of `Research-Library/`, the task is almost always to **produce or edit research/documentation content** (markdown files, comparison tables, component records, screen/action documentation) that follows the structures defined in these two files — not to write application code.

**Exception — `UI-Component-Library/` IS a real codebase**: a Vite + React + TypeScript site that renders the finished component records from `Research-Library/04-Component-Library/<product>/` as a searchable, browsable documentation site (sidebar nav, search, tabbed detail pages). It has real build/lint/test commands — see its own `README.md`. It is loosely modeled on `UI_COMPONENT_LIBRARY_INSTRUCTIONS.md` (a third planning doc, adapted rather than followed literally — see that site's README for the deviations). Content flows one way: `Research-Library/04-Component-Library/` is the source of truth; component `.md` files are copied into `UI-Component-Library/src/content/brands/<product>/components/` with two presentation-only frontmatter fields added (`status`, `summary`). Product-level research (screens, workflows, pricing, competitors) is deliberately **not** pulled into this site — it stays in `Research-Library/` only.

## UI-Component-Library/ commands and architecture

Run these from `UI-Component-Library/`, not the repo root:

```bash
npm install
npm run dev         # dev server at http://localhost:3000
npm run build       # tsc --noEmit + production build to dist/
npm run preview     # preview the production build
npm run test        # Vitest suite
npm run type-check  # tsc --noEmit only
npm run lint        # Oxlint
npm run format      # Prettier write
```

Architecture — this is a "no manual navigation editing" system: `src/utils/loadComponents.ts` uses `import.meta.glob` to discover every `*.md` file under `src/content/brands/*/components/` at build time. The sidebar, the overview catalogue, and routing are all derived from that same discovered list, so dropping in a new component file makes it appear everywhere without touching shared code.

- `src/content/brands/<product>/components/<id>.md` — one file per component; required frontmatter: `component`, `ui_category` (first segment before `>` becomes the sidebar/catalogue group), `source_product`, `last_verified`, `status` (`complete`/`partial`/`incomplete`), `summary`.
- `src/utils/parseComponentMarkdown.ts` splits the body into `## Heading` sections; `ComponentDetailPage.tsx`'s `TAB_MAP` maps those headings onto page tabs (Overview / Rules / Technical Data / Lessons / Comparisons / Sources) — a tab only renders when a matching section exists.
- `src/components/shell/` — Sidebar, Layout (search, nav, skip link); `src/components/detail/` — Tabs, Markdown renderer; `src/pages/` — OverviewPage (catalogue), ComponentDetailPage; `src/styles/variables.css` — design tokens.
- Adding a product/component is purely a content operation: copy the finished record from `Research-Library/04-Component-Library/<product>/*.md` into `src/content/brands/<product>/components/`, add the `status`/`summary` frontmatter fields, done — no router/sidebar code to edit.
- Not implemented by design (vs. `UI_COMPONENT_LIBRARY_INSTRUCTIONS.md`): no live-rendered `preview.html`, no separate `registry.json` props/variants/changelog files, no `vector.json` semantic search yet.

## How the two documents relate

```
seetha_research_library.md                 →  identifies products/competitors, runs
(research & benchmarking process)              market/UX/technical questionnaires,
                                                produces competitive scoring
              │
              ▼
Complete Product Documentation & ...md      →  for each product/competitor selected,
(screen/component/action reverse-engineering)  documents every screen, component, and
                                                user action in technical depth (DOM,
                                                JS, network, API, state, CSS, animation)
              │
              ▼
        Universal component/UX knowledge base (future: vectorized, AI-searchable)
```

In short: `seetha_research_library.md` decides **what** to research and how to score/compare it; the "Complete Product Documentation" file defines **how deep** to go once a product is selected (down to DOM/network/CSS level per component).

## Research-Library/ — the built knowledge base

`Research-Library/` is the active implementation of the methodology below (see its own [README.md](Research-Library/README.md) for full structure and current status). It is not limited to Zoho or 10 products — Zoho's product lineup is the starting research group, and every category is meant to expand to other companies' products over time. Key points for future sessions:

- `00-Framework/` holds the reusable system: `evidence-guidelines.md` (FACT / OBSERVATION / INFERENCE / CUSTOMER FEEDBACK / RECOMMENDATION tagging rules — every claim in the library must carry one of these tags and a source), `category-taxonomy.md` (product categories + a separate cross-product UI/component taxonomy), and `templates/` (product, component, competitor-comparison templates).
- `01-Zoho-Primary-Products/` is Layer 1 (one flagship product per Zoho functional category, sourced from Zoho's real product catalog, not assumed).
- `02-Competitor-Products/<category>/` holds one record per competitor, organized by product category rather than "Zoho vs. rest," so non-Zoho companies slot into the same folders later.
- `03-Benchmarks/<category>.md` rolls up best-of-breed-by-capability comparisons per category — never a single "best overall" verdict.
- `04-Component-Library/` holds reusable UI component records (Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data), populated only from live application exploration, not marketing pages.
- **Zoho Social** (`01-Zoho-Primary-Products/zoho-social.md`) is the fully worked example demonstrating the pattern — read it before starting a new product record. Its Sections 6–13 are deliberately marked `NOT OBSERVED` because they require live-app exploration that hasn't been done yet; don't fill those in from guesswork.
- **Never invent** numbers, review counts, pricing, or technical architecture. When something can't be verified, write it as `TODO` or `NOT OBSERVED`, not a plausible-sounding guess.
- **Section 16 is mandatory** on every product record — it must explicitly answer all 171 numbered questions from `seetha_research_library.md` §4–15 (not just prose covering the same ground).

## Current state and known gaps (see Research-Library/README.md for details)

- All 10 flagship categories have a full Zoho product record plus a full non-Zoho primary competitor record (e.g. CRM & Sales: Zoho CRM + Salesforce Sales Cloud), plus 2 lighter competitor stubs each and a rolled-up benchmark file. 5 additional Zoho products (Inventory, Bigin, SalesIQ, Recruit, Cliq) have also been fully researched, two of which created new categories.
- `04-Component-Library/` is still empty — it can only be populated from live application exploration (DOM/network/CSS capture), which hasn't been done for any product yet. This is the single largest remaining gap, and Sections 6–9/11–12 of every product record stay `NOT OBSERVED` until it happens.
- A meaningful share of pricing/rating figures are flagged `UNVERIFIED` (blocked/geo-localized official pricing pages, G2 403s forcing search-snapshot aggregation). Don't strip these caveats when reusing numbers, and re-verify against the primary source before citing a figure externally.

## Conventions to follow when adding content

- **Standard product research template** (see `seetha_research_library.md` §21) — when documenting a new product, use its fixed field list (Company, Category, Target Users, Problem Solved, Features, Pricing, Customers/Market, Competitors, Customer Reviews, Strengths, Weaknesses, UI/UX, Screens, Components, User Flows, Technical Architecture, Backend, APIs/Network, Performance, AI Features, Integrations, Mobile, Accessibility, Security, Best Features, Weakest Features, Competitive Score, Evidence, What We Should Learn).
- **Component record structure** (see task doc §15) — each documented UI component should capture: Screenshot, Structure, Behavior, Actions, HTML, CSS, JavaScript, Network, States, Source Product.
- **Action documentation** (task doc §7) — every interactive element should be traced as Element → User Action → Action/Function → Result → New Screen/State, and a single control that triggers multiple actions must list all of them.
- **Evidence discipline** (research doc §19) — tag findings as FACT (directly observed/documented), INFERENCE (reasonable technical/business conclusion), OPINION (analyst judgement), or RECOMMENDATION (what to do based on the evidence). Don't record inferences or opinions as facts.
- **Common category system** (task doc §13) — group equivalent components/actions across products under shared categories (e.g. Authentication, Navigation, Social, Data) so competitors can be compared feature-by-feature rather than documented in isolation.
- **Layered research priority** (research doc §22) — don't fan out to deep research on many products at once; go broad first (product/competitor identification), then narrow to deep UI/workflow/technical analysis only on the most relevant competitors.
