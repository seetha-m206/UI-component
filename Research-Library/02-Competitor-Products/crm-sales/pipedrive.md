---
product: "Pipedrive"
company: "Pipedrive Inc. (Pipedrive OÜ)"
category: "CRM & Sales"
last_verified: "2026-09-10"
status: "stub"
---

# Pipedrive — Competitor Research Record

> Stub created as part of the CRM & Sales category expansion pass (following the Zoho CRM anchor record and the HubSpot/Salesforce stubs). Sections 1–5 (identity, pricing, reviews) are researched from public sources; Sections 6–13 (UI/UX, technical, AI, mobile, security) are `NOT OBSERVED` — no live product exploration was performed in this pass. Direct fetches of g2.com/products/pipedrive/reviews and pipedrive.com/en/pricing returned HTTP 403 in this pass; figures below are drawn from WebSearch result snippets (which themselves cite G2/Capterra/vendor pages) and one successful direct fetch of the Capterra reviews page — flagged accordingly per claim.

## 1. Identity
- **Company (FACT):** Pipedrive Inc. — CRM/sales-pipeline software vendor. (Source: general company identification via search results, retrieved 2026-09-10.)
- **Category:** CRM & Sales.
- **Problem solved (INFERENCE from vendor-comparison sources and review themes):** Gives small-to-medium sales teams a visual, drag-and-drop pipeline to track leads/deals through stages, with activity reminders and automation to reduce manual follow-up work. (Source: WebSearch summary of G2 review themes, retrieved 2026-09-10.)
- **Target users / industries (CUSTOMER FEEDBACK / INFERENCE):** Capterra review summary states the platform "appears best-suited for small-to-medium sales teams prioritizing simplicity and pipeline visibility over advanced features" (direct fetch of capterra.com/p/132666/Pipedrive/reviews/, retrieved 2026-09-10). Consistent with prior positioning noted in `zoho-crm.md` Section 4 ("Direct — SMB sales-pipeline focus").
- **Segment:** SMB primarily; reviewers note it can feel "too basic as teams grow and expect more than just sales tracking" (CUSTOMER FEEDBACK, G2-sourced via WebSearch, retrieved 2026-09-10) — suggesting weaker fit at enterprise scale.
- **Platforms:** Web + mobile app (iOS/Android) — mobile app existence confirmed via review complaints about mobile navigation (CUSTOMER FEEDBACK, see Section 5); NOT OBSERVED directly.
- **Ecosystem / sister products:** TODO — not researched in this pass. Vendor claims "500-plus integrations including Zapier and Zoom" on the Lite plan (FACT, as claimed by vendor per WebSearch summary of pipedrive.com pricing content, retrieved 2026-09-10 — UNVERIFIED via direct page fetch, which returned 403).

## 2. Market & Business

### Pricing
> **Data-quality caveat:** A direct fetch of `pipedrive.com/en/pricing` returned HTTP 403 in this pass. The figures below come from a WebSearch results summary that itself aggregates and paraphrases the official pricing page plus third-party pricing-comparison articles (emailtooltester.com, larksuite.com, forbes.com/advisor, axisconsulting.io, usecarly.com). Tag as **FACT (third-party sourced — verify against official page)** per evidence-guidelines.md rule 2, not independently confirmed against the primary source in this pass.

| Plan | Price (annual billing, per user/mo) | Price (monthly billing, per user/mo) | What's included (incremental) | Source |
|---|---|---|---|---|
| Lite | $14 | $24 | Leads, deals, contacts, calendar in one pipeline view; AI-assisted report creation; real-time sales feed; 500+ integrations (Zapier, Zoom cited) | WebSearch summary of pipedrive.com pricing + third-party aggregators, retrieved 2026-09-10 (third-party sourced — verify against official page) |
| Growth | $39 | $49 | Adds automations, two-way email sync, meeting scheduler | Same |
| Premium | $59 | $79 | Bundles LeadBooster, Smart Docs, and Projects at no extra add-on charge | Same |
| Ultimate | $79 | $99 | Up to 20,000 leads/deals per user, 300,000 company max; includes LeadBooster and project-management tools | Same |

- **Free plan/trial (FACT, third-party sourced):** No permanent free plan. 14-day free trial on all plans, no credit card required (WebSearch summary, retrieved 2026-09-10 — UNVERIFIED against official page in this pass).
- **Add-ons (FACT, third-party sourced):** LeadBooster, Projects, Smart Docs, Campaigns, and Web Visitors sold as separate add-ons on lower tiers — reviewers flag this as a "hidden costs" pain point (see Section 5). (WebSearch summary, retrieved 2026-09-10.)
- **Approximate customer/user base:** TODO — not gathered in this pass.
- **Product age / founding:** TODO — not gathered in this pass.
- **Market positioning (INFERENCE, consistent with zoho-crm.md Section 4 and blog.salesflare.com comparison cited there):** Positioned as the SMB-focused, visual-pipeline specialist — narrower feature scope than Zoho/Salesforce/HubSpot but praised for simplicity and fast setup.
- **Key differentiators claimed by vendor:** Visual drag-and-drop pipeline as the core product metaphor; AI-assisted reporting on the entry-level Lite plan (FACT, as vendor-claimed per WebSearch summary, retrieved 2026-09-10 — not independently verified).

## 3. Features
- TODO — full feature breakdown not researched in this pass. Known from pricing-tier summary above: pipeline/deal/contact/calendar management, automations (Growth+), two-way email sync (Growth+), meeting scheduler (Growth+), LeadBooster/Smart Docs/Projects (Premium+ bundled, otherwise add-ons), AI-assisted report creation (all tiers per vendor claim).

## 4. Competitors
| Competitor | Type | Notes |
|---|---|---|
| Zoho CRM | Direct — broader feature set at similar/lower price | See `../../01-Zoho-Primary-Products/zoho-crm.md` Section 4. |
| Salesforce Sales Cloud | Enterprise-tier alternative | See `salesforce-sales-cloud.md`. |
| HubSpot CRM | Direct — UX leader, free tier available (Pipedrive has none) | See `hubspot-crm.md`. |
| Freshsales, monday CRM, Microsoft Dynamics 365 Sales | Named category peers | Not yet independently researched — see `../../03-Benchmarks/crm-sales.md`. |

## 5. Customer Reviews
- **G2 (FACT, third-party/WebSearch sourced — direct fetch returned 403):** 4.3/5 rating, 3,172 reviews (g2.com/sellers/pipedrive, per WebSearch result snippet, retrieved 2026-09-10). Matches the figure already recorded in `zoho-crm.md` Section 4.
- **Capterra (FACT — confirmed via direct page fetch of capterra.com/p/132666/Pipedrive/reviews/, retrieved 2026-09-10):** 4.5/5 rating, 3,058 verified reviews. Note: earlier WebSearch snippets cited slightly different counts (3,040 and 3,052) from different retrieval moments — the direct-fetch figure (3,058) is treated as most current/authoritative for this pass, but the discrepancy is flagged per evidence-guidelines.md.
- **Liked most (CUSTOMER FEEDBACK, Capterra direct fetch + G2 WebSearch summary, retrieved 2026-09-10):**
  - Ease of use / intuitive, clean interface — most consistently cited strength.
  - Visual, drag-and-drop sales pipeline — frequently named as the signature feature.
  - Automation features and activity reminders that save time on follow-ups.
  - Quick setup / rapid deployment with minimal onboarding/training.
  - Affordability relative to alternatives like HubSpot (explicitly named in comparison).
  - Helpful customer service noted in some reviews (in tension with the support complaints below — mixed signal, both cited).
- **Disliked most (CUSTOMER FEEDBACK, same sources):**
  - Customer support inconsistency — some reviews describe unresponsive support and lack of accountability.
  - Feature limitations as teams grow — advanced reporting, customization, and marketing automation described as insufficient; one review paraphrase: "too basic as teams grow and expect more than just sales tracking."
  - Mobile app navigation difficulty reported by multiple users.
  - "Hidden costs" — features locked behind add-ons/plan upgrades (LeadBooster, Smart Docs, Projects, Campaigns, Web Visitors) frustrate users on lower tiers.
  - Email functionality described as weaker than competitors.
  - Third-party integrations sometimes require extensive manual setup.
  - Search slows down with large contact volumes; no automatic duplicate-contact detection/merge prompt (specific review paraphrase, G2-sourced via WebSearch).
- **Recurring complaints:** Support responsiveness; feature ceiling for growing teams; add-on pricing structure; mobile app UX (CUSTOMER FEEDBACK, as above).
- **Recurring praise:** Ease of use; visual pipeline; automation/time savings; fast onboarding (CUSTOMER FEEDBACK, as above).
- **Requested features:** TODO — not gathered in this pass.
- **Why customers switch away / choose it:** INFERENCE only — plausibly choose it for simplicity/speed of setup vs. Zoho/Salesforce; plausibly switch away when needing deeper customization, marketing automation, or enterprise reporting (mirrors the "too basic as teams grow" complaint) — not yet backed by direct switch-reason quotes, needs upgrade to CUSTOMER FEEDBACK.

## 6–13. UI/UX, Flows, Technical, Performance, AI, Mobile, Security, Strengths/Weaknesses
- NOT OBSERVED — requires dedicated research pass with live product exploration. Partial mobile signal exists only via the review complaint in Section 5 (mobile navigation difficulty) — not a substitute for direct observation.

## 14. Competitive Score
- TODO — pending full record and category benchmark scoring (see `../../03-Benchmarks/crm-sales.md`).

## 15. What We Should Learn
- **RECOMMENDATION — adopt:** The visual, drag-and-drop pipeline as a primary navigation metaphor is the single most consistently praised element across review sources — worth studying directly as a UI pattern once live exploration is possible (derived from Section 5 CUSTOMER FEEDBACK).
- **RECOMMENDATION — investigate before adopting:** Gating meaningful functionality (LeadBooster, Smart Docs, Projects, Campaigns, Web Visitors) behind paid add-ons drives a recurring "hidden costs" complaint — any tiered/add-on pricing model we consider should weigh this tradeoff (derived from Section 5 CUSTOMER FEEDBACK).
- **RECOMMENDATION — avoid:** Under-investing in support responsiveness and duplicate-record detection — both are named, specific friction points in reviews (derived from Section 5 CUSTOMER FEEDBACK).

## Sources
- [Capterra — Pipedrive Reviews](https://www.capterra.com/p/132666/Pipedrive/reviews/) — retrieved 2026-09-10 (direct fetch succeeded; 4.5/5, 3,058 reviews, liked/disliked themes)
- [G2 — Pipedrive Products / seller page](https://www.g2.com/sellers/pipedrive) — retrieved 2026-09-10 via WebSearch snippet (4.3/5, 3,172 reviews); direct fetch of g2.com/products/pipedrive/reviews returned HTTP 403 in this pass
- [G2 — Pipedrive Pros and Cons](https://www.g2.com/products/pipedrive/reviews?qs=pros-and-cons) — referenced via WebSearch snippet, retrieved 2026-09-10; direct fetch not performed
- Pipedrive official pricing page (pipedrive.com/en/pricing) — direct fetch returned HTTP 403 in this pass; pricing figures instead sourced from a WebSearch results summary aggregating that page plus third-party pricing articles: [EmailToolTester](https://www.emailtooltester.com/en/crm/pipedrive-review/pricing/), [Lark Suite](https://www.larksuite.com/en_us/blog/pipedrive-pricing), [Forbes Advisor](https://www.forbes.com/advisor/business/software/pipedrive-pricing/), [Axis Consulting](https://axisconsulting.io/pipedrive-pricing-plans/), [UseCarly](https://www.usecarly.com/blog/pipedrive-pricing/) — all retrieved 2026-09-10, flagged as third-party sourced / needs direct official-page re-verification.
- [Zoho CRM record — Section 4 Competitors](../../01-Zoho-Primary-Products/zoho-crm.md) — cross-referenced for prior Pipedrive G2/Capterra figures, retrieved 2026-09-10.
