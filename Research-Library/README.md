# Competitive Product Research Library

A reusable, evidence-tagged knowledge base for researching products and their competitive ecosystems — the foundation for a future UI/component library, AI memory/knowledge system, vector search, and reverse-engineering pipeline.

Built from the methodology in [`seetha_research_library.md`](../seetha_research_library.md) and [`Complete Product Documentation & Competitor Reverse-Engineering Task.md`](../Complete%20Product%20Documentation%20%26%20Competitor%20Reverse-Engineering%20Task.md) (see [`CLAUDE.md`](../CLAUDE.md) for how those two source documents relate).

**Scope:** Not limited to Zoho or 10 products. Zoho's product lineup was the starting group; every category now also holds fully-researched non-Zoho companies' products, not just comparison stubs (see Current State below).

## Structure

```
Research-Library/
├── 00-Framework/                    ← the reusable system itself
│   ├── evidence-guidelines.md       ← FACT/OBSERVATION/INFERENCE/CUSTOMER FEEDBACK/RECOMMENDATION rules
│   ├── category-taxonomy.md         ← product categories + cross-product UI/component categories
│   └── templates/
│       ├── product-template.md
│       ├── component-template.md
│       └── competitor-comparison-template.md
│
├── 01-Zoho-Primary-Products/        ← Layer 1: one flagship product per Zoho category
│   ├── 00-product-index.md
│   └── zoho-social.md               ← WORKED EXAMPLE (fully populated, see status notes inside)
│
├── 02-Competitor-Products/          ← Layer 2+: organized by product category, not by "Zoho vs. rest"
│   └── social-media-management/     ← (one such folder per category — 10 categories total, see below)
│       ├── sprout-social.md
│       ├── hootsuite.md
│       └── agorapulse.md
│
├── 03-Benchmarks/                   ← one file per category, rolling up best-of-breed comparisons
│   └── social-media-management.md
│
└── 04-Component-Library/            ← reusable UI component records, tagged by UI/action category
    └── zoho-forms/                  ← 14 records so far, all from live Zoho Forms exploration (see Current state)
        ├── toggle-radio-switch.md
        ├── sidebar-settings-subnav.md
        ├── upgrade-cta-button.md
        ├── yes-no-toggle-field.md
        ├── rating-star-field.md
        ├── choices-list-editor.md
        ├── repeatable-subform-inline.md   (flagged incomplete — needs a second pass)
        ├── publish-toggle-switch.md
        ├── form-overflow-menu.md
        ├── entries-filter-panel.md
        ├── theme-color-picker-gradient.md
        ├── analytics-feature-gate.md
        ├── card-list-selector.md
        └── theme-editor-split-pane-shell.md
```

> `04-Component-Library/` is organized into one subfolder per **source product** as it grows (e.g. `zoho-forms/`), since a component like a toggle or a sidebar nav is meaningfully implemented differently per product — grouping by source product first keeps each product's component set browsable, while the Competitor Comparisons table inside each record is still what does the actual cross-product linking.

## How to extend this library

1. **Pick the next product** from `01-Zoho-Primary-Products/00-product-index.md` (or a new category).
2. **Copy `00-Framework/templates/product-template.md`** into the right file, fill it in, tag every claim per `evidence-guidelines.md`.
3. **Research real competitors** for that product and give each one its own record under `02-Competitor-Products/<category>/`.
4. **Roll up the category** into `03-Benchmarks/<category>.md` using the comparison template once ≥2 competitor records exist.
5. **When exploring the live application** (not just marketing/review pages), extract reusable components into `04-Component-Library/` using `component-template.md` — this is what eventually becomes the UI/component library and vector-searchable knowledge base.

## Current state (2026-09-17)

- **Zoho Forms added (`01-Zoho-Primary-Products/zoho-forms.md`) — the first product besides Zoho Social to get real live-app exploration.** Via the Claude browser extension across multiple sessions: form builder, ~60-field palette across 18 categories, Form Settings → Submissions & Storage (all 6 sub-screens), Entries filter panel + Kanban view, dashboard overflow menu, Share/Publish screen, Themes editor (color/gradient picker and the full-screen "Create from Scratch" split-pane shell), the Analytics premium-gate pattern, the Analytics/Form Metrics dashboard, Deep Insights/Drop-off Count, Matrix Choices, AI Smart Scan, and the New Form chooser. This seeded 24 records in `04-Component-Library/zoho-forms/` (see file list above) — see `zoho-forms.md` Section 6 "Notable component patterns" for the full per-component summary and cross-component findings (at least 4 independently-built toggle implementations, 3 independently-built card-list implementations, a likely shared `z*`-prefixed cross-product Zoho design-system layer, a recurring ghost/decoy-DOM pattern confirmed twice, a confirmed accessibility bug in the Rating field's `aria-checked`, and a confirmed production bug in the AI Smart Scan field's live-form OCR path). Zoho Forms' market/pricing/competitor sections are still thin (TODO) — live exploration happened ahead of the usual public-research pass, so this record inverts the typical order.
- **Zoho Forms second-pass backlog (`prompt-backlog-zoho-forms-remaining-2.md`) is 6 of 7 done (2026-09-17)** — both flagged-incomplete retries (`repeatable-subform-inline`'s Add-row bug confirmed real/reproducible across all 3 layouts, root cause still unconfirmed; `entries-kanban-view`'s drag mechanics now investigated as thoroughly as browser automation permits, `evidence_state` moved to `source_reviewed`) plus 4 new records (Matrix Choices, AI Smart Scan, Deep Insights/Drop-off Count, New Form chooser). **One prompt (B2, Repeatable Subform Popup/Vertical layouts) was run but its response file came back empty — needs a re-run**, not yet filed.
- **Typeform: first-identification pass + 7 of 10 component-parity/new-ground prompts DONE (2026-09-17)** — `02-Competitor-Products/marketing-automation/typeform.md`. Key finding: a fundamentally different builder paradigm from Zoho Forms — single-question-per-screen conversational canvas vs. Zoho's scrollable all-fields-at-once canvas. `04-Component-Library/typeform/` has 7 components ([[yes-no-field]], [[rating-field]], [[theme-design-editor]], [[typeform-choices-list-editor]], [[typeform-contacts-module]], [[typeform-automations-builder]], [[typeform-ai-chat-to-create]]), with direct-equivalent ones cross-linked into their Zoho counterpart's Competitor Comparisons table. **Remaining:** Results/Analytics dashboard (prompt A1 in `prompt-backlog-typeform-remaining.md`) has not been run yet.
- **`UI-Component-Library/` site** (sibling directory, real Vite/React codebase) mirrors the finished component records as a browsable docs site. As of 2026-09-17 it has a three-audience workspace (Technical/Human/AI Context views) on every component page, plus a growing set of hand-reconstructed **Preview** components across both products — see `src/previews/yes-no-toggle-field/README.md` for the pattern reference. Deployed to Vercel (unlisted URL, redeployed manually on request — see project memory for the URL).

### Prior state (2026-09-11)

- Framework: complete (taxonomy, evidence rules, three templates). **Every product record must now include Section 16 — Standard Questionnaire Full Answer Set**, which explicitly answers all 171 numbered questions from `seetha_research_library.md` §4–15 (not just prose covering the same ground). This was retrofitted into all 20 pre-existing full records and is now mandatory going forward.
- `01-Zoho-Primary-Products/00-product-index.md`: **15 Zoho products** now have full product records — the original 10 flagships plus 5 more (Inventory, Bigin, SalesIQ, Recruit, Cliq), two of which (SalesIQ, Cliq) established brand-new categories (Live Chat & Sales Engagement; Team Chat & Messaging) and one (Inventory) filled a category that previously had no flagship.
- **Every category** now has a second (in one case implicitly a third — Communication/Collaboration both anchor to Microsoft/Google) **fully-researched, non-Zoho primary product**, upgraded from a comparison stub to the same depth as the Zoho records, cross-linked back to its Zoho counterpart:
  - CRM & Sales: **Salesforce Sales Cloud** (+ HubSpot CRM, Pipedrive as stubs)
  - Social Media Management: **Sprout Social** (+ Hootsuite, Agorapulse as stubs)
  - Customer Support/Helpdesk: **Zendesk** (+ Freshdesk, Intercom as stubs)
  - Finance & Accounting: **QuickBooks Online** (+ Xero, FreshBooks as stubs)
  - Project & Work Management: **Asana** (+ ClickUp, monday.com as stubs)
  - HR & Recruiting: **Rippling** (+ BambooHR, Gusto as stubs)
  - Communication: **Microsoft 365 (Outlook)** (+ Google Workspace, Titan Email as stubs)
  - Collaboration & Productivity: **Google Workspace (Drive)** (+ Box, Microsoft OneDrive for Business as stubs)
  - BI/Analytics: **Tableau** (+ Power BI, Qlik Sense as stubs)
  - Marketing Automation: **Mailchimp** (+ ActiveCampaign, Constant Contact as stubs)
  - Every category folder under `02-Competitor-Products/` therefore now holds **1 full non-Zoho primary record + 2 stub records**, alongside the Zoho product's own full record in `01-Zoho-Primary-Products/`.
- **5 new Zoho products** were added, each with 2 competitor stubs and a category benchmark, all built with the fully compliant Section 16 from the start (not retrofitted):
  - Inventory & Commerce (previously empty category): **Zoho Inventory** + Cin7 Core, inFlow Inventory
  - CRM & Sales (secondary, sibling to Zoho CRM): **Zoho Bigin** + Less Annoying CRM
  - Live Chat & Sales Engagement (new category): **Zoho SalesIQ** + LiveChat, tawk.to
  - HR & Recruiting (secondary, ATS vs. HRMS): **Zoho Recruit** + Greenhouse, Bullhorn
  - Team Chat & Messaging (new category): **Zoho Cliq** + Slack, Microsoft Teams
- **All 10 category benchmarks** under `03-Benchmarks/` now compare **two fully-researched primary products** (the Zoho product and its non-Zoho counterpart) against shared competitors, with more best-of-breed cells filled in from real evidence and several **cross-product patterns now corroborated by 2–3 independent products** rather than a single vendor's review set — e.g., unified inbox/compose+monitor UI as a repeated praise theme, mobile-app parity gaps, per-seat/add-on pricing complaints, and support-responsiveness complaints recurring across categories.
- **Known data-quality gaps to re-verify before treating numbers as final:** a large number of official pricing pages across this pass (Zoho's own, plus Pipedrive, Gusto, Intercom, Salesforce partially, Rippling, Tableau, Microsoft, Mailchimp's USD rendering, Constant Contact) blocked automated fetch, timed out, or rendered geo-localized/non-numeric — so a substantial share of USD pricing in this library is third-party/aggregator-sourced and flagged `UNVERIFIED`. G2 blocked direct page fetch (403) for most products researched, so most ratings rest on search-snapshot aggregation rather than a direct page read. Several review counts disagree slightly across sources within the same record. Every affected file flags this inline — don't strip those caveats when reusing the numbers, and re-verify against the primary page before using any figure externally.
- `04-Component-Library/`: still empty — populated only from live application exploration, which hasn't been performed for any product yet. This is the largest remaining gap: everything in this library so far comes from public research (official sites, G2, Capterra, comparison blogs), not from actually using the products.

## Next steps (pick one)

- **Go deep on one product**: live-app exploration (actual login, UI/UX, workflows, DOM/network capture) to complete Sections 6–9/11–12 (still `NOT OBSERVED` everywhere, including in every Section 16 answer that depends on them) for a chosen product and start populating `04-Component-Library/` — this is the only way to complete the parts of the framework that public research can't reach, and it's the single largest gap in the library.
- **Add more secondary Zoho products**: the full Zoho One catalog (listed in `01-Zoho-Primary-Products/00-product-index.md`) still has many untouched products — Assist, Lens, Invoice, Expense, Checkout, Billing, Payroll, Sprints, Sites, Commerce, PageSense, Connect, TeamInbox, Notebook, Sheet, Vani, Writer, Show, Learn, Bookings, Forms, Thrive, Marketing Automation.
- **Add a 3rd non-Zoho primary product per flagship category**: each of the original 10 categories has exactly 2 full primary records (1 Zoho + 1 non-Zoho) plus 2 lighter stubs — upgrade one of those stubs (e.g., HubSpot CRM, Hootsuite, Freshdesk, Xero) to full depth to get a genuine 3-way comparison.
- **Widen a category's competitor list further**: several competitors are still only named, not stubbed at all (e.g., Metricool/Social Champ for Social, Freshsales for CRM&Sales, Workday/SAP SuccessFactors for HR, Lever/Workable for Recruiting).
- **Re-verify flagged pricing/rating figures** against primary sources (official pricing pages, direct G2 dashboard) before using any number externally — this is the most time-sensitive gap since pricing changes quickly.
