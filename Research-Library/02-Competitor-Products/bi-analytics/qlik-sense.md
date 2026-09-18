---
product: "Qlik Sense"
company: "Qlik Technologies Inc."
category: "BI / Analytics"
last_verified: "2026-09-10"
status: "stub"
---

# Qlik Sense — Competitor Research Record

> Stub created as part of the Zoho Analytics research pass, extended with a dedicated research pass on 2026-09-10 (chosen as the single best-substantiated named-but-unstubbed competitor from `zoho-analytics.md` Section 4). Sections beyond identity/market/reviews are placeholders (`TODO`) pending a dedicated UI/technical research pass — do not treat blank sections as "no data," they are simply not yet researched.

## 1. Identity
- **Company (FACT, qlik.com, retrieved 2026-09-10):** Qlik Technologies Inc. (independent company, not currently owned by a larger parent the way Tableau is owned by Salesforce — no acquisition indicated in vendor materials reviewed).
- **Category:** BI / Analytics — enterprise BI / data-discovery platform, built around an "associative engine" rather than a purely query-based model.
- **Problem solved (FACT, vendor-stated, qlik.com/us/products/qlik-sense, retrieved 2026-09-10):** Vendor positions Qlik Sense as going "way beyond the limits of query-based analytics and dashboards" competitors offer, via an associative analytics engine that lets users freely explore relationships across all connected data (not just pre-defined drill paths), combined with built-in AI (Insight Advisor, predictive analytics, NLP).
- **Target users / industries (FACT, vendor-stated):** Financial services, government, healthcare, life sciences, manufacturing, retail. Vendor states the platform serves "both technical and non-technical users," designed to "empower people at all skill levels with AI-powered insights."
- **Segment (INFERENCE, from vendor's own customer-count/logo claims and pricing structure — see Section 2):** Primarily enterprise — vendor cites "over 30,000 customers worldwide" and names large accounts (Deloitte, HSBC, Samsung, PayPal per qlik.com, retrieved 2026-09-10). Capterra review-theme signal (Section 5) that Qlik Sense is "expensive vs. competitors, especially for bigger teams" is consistent with an enterprise-leaning price point rather than an SMB self-serve product.
- **Platforms (FACT, vendor-stated):** Both on-premises and SaaS/cloud ("Qlik Cloud Analytics") deployment options exist — the official pricing page (qlik.com/us/pricing, retrieved 2026-09-10) lists deployment types "on-premise, saas." Mobile analytics referenced as a feature (vendor-stated) but not independently confirmed — UNVERIFIED.
- **Ecosystem / sister products it integrates with (FACT, vendor-stated):** Part of the broader "Qlik" portfolio alongside Qlik Data Integration Platform and Qlik Predict (separate G2-listed products under the same vendor, per g2.com/sellers/qlik, retrieved 2026-09-10). Standard/native connectors mentioned generically; specific connector catalog depth — TODO.

## 2. Market & Business
- **Founded / product age:** TODO — not established in this pass.
- **Approximate customer/user base (FACT, vendor-stated, qlik.com, retrieved 2026-09-10):** "Over 30,000 customers worldwide" (vendor-claimed figure, not independently verified).

### Pricing — "Qlik Cloud Analytics" (FACT, official page qlik.com/us/pricing, retrieved 2026-09-10)
| Plan | Price | Users | Data capacity | What's included | Source |
|---|---|---|---|---|---|
| Starter | $300/month (billed annually, per third-party cross-check — see caveat below) | 10 users (capped) | Fixed 10 GB | AI-powered analytics, dashboard creation, standard connectors, community support | qlik.com/us/pricing |
| Standard | $825/month | Unlimited users | 25 GB | Adds unstructured data analysis, managed spaces, 24/7 support | qlik.com/us/pricing |
| Premium | $2,750/month | Unlimited users | 50 GB | Adds predictive analytics, public access options, guided onboarding | qlik.com/us/pricing |
| Enterprise | Custom / contact sales | Unlimited users | 250+ GB | Multi-region tenants, personalized success planning, maximum scale | qlik.com/us/pricing |

**Pricing model note (FACT, official page):** Described as "capacity-based pricing" — customers "pay a fixed fee for a set capacity, ensuring predictable costs for the year." Only the Starter plan caps user count (10); Standard/Premium/Enterprise include unlimited users and instead meter by data capacity (GB), with additional capacity purchasable in 25 GB or 250 GB increments depending on plan. This is a materially different pricing axis than Zoho Analytics (which is per-account with row-count tiers) and Tableau (per-user/month) — worth flagging for the benchmark.

**Caveat on dollar figures:** These figures came back from a direct WebFetch of qlik.com/us/pricing (not merely a search-snapshot), so confidence is higher than the third-party-only figures used for other competitor stubs in this category — but exact monthly-vs-annual billing terms and any regional variation were not independently re-confirmed line-by-line. Treat as **FACT (official page, direct fetch, retrieved 2026-09-10)** but re-verify before external use, per evidence-guidelines.md rule 5 (pricing changes over time). One third-party source (costbench.com, search-snapshot only, retrieved 2026-09-10) independently corroborated a "Free–$70/user/month, 3 plans" framing that does not fully reconcile with the official page's 4-tier capacity-based structure above — flagged as a discrepancy, not resolved in this pass.

- **Free plan / trial (FACT, official page, retrieved 2026-09-10):** A free trial is offered ("no upfront costs" per vendor site); exact trial length (days) not stated on the page content retrieved — TODO to confirm duration. No permanent free tier identified (unlike Zoho Analytics), i.e., NOT OBSERVED — treat as "no free-forever plan" pending explicit confirmation.
- **Market positioning (FACT, vendor-stated, qlik.com, retrieved 2026-09-10):** Explicitly positions its associative engine against "query-based analytics and dashboards" from competitors — a direct, named contrast with tools like Tableau/Power BI that are more query/filter-path-driven. On-premises deployment option is called out as appealing to "highly regulated industries requiring data residency control" (INFERENCE, drawn from the vendor's own framing plus the industries list — financial services, government, healthcare).
- **Key differentiators claimed by vendor (FACT, vendor-stated):** Associative Analytics Engine (free-form exploration across all data relationships vs. fixed query/drill paths); integrated AI (Insight Advisor, predictive analytics, NLP); self-service visualization + dashboards + mobile analytics + reporting + embedded analytics; governance/collaboration tooling (data catalog, automation). Also references "Answers Agents" and "MCP Server integration" across all cloud plans (FACT, official pricing page) — notable parallel to Zoho Analytics' own MCP server claim.

## 3. Features
- TODO — not researched in depth in this pass beyond the vendor differentiators listed in Section 2 (associative engine, Insight Advisor AI, predictive analytics, data catalog/automation, embedded analytics). A dedicated features pass (data connectors catalog, visualization type count, governance/permissions model) is needed before this section can be considered researched.

## 4. Competitors
| Competitor | Type | Notes |
|---|---|---|
| Zoho Analytics | Direct — lower-cost, SMB/mid-market-leaning | See `../../01-Zoho-Primary-Products/zoho-analytics.md`. Contrast: per-account/row-tier pricing vs. Qlik's per-capacity(GB) pricing; Zoho has a permanent free tier, Qlik (per this pass) does not. |
| Tableau | Direct — visualization-first, Salesforce-ecosystem | See `tableau.md`. Qlik's own marketing explicitly contrasts its associative engine against "query-based" tools like Tableau. |
| Microsoft Power BI | Direct — Microsoft-ecosystem-first | See `power-bi.md`. |
| Google Looker | Direct/enterprise — governed, warehouse-centric | Named in `zoho-analytics.md` Section 4; not yet stubbed. |
| Sisense, Domo | Direct — embedded analytics / multi-source ease-of-use | Named in `zoho-analytics.md` Section 4; not yet stubbed. |

## 5. Customer Reviews
- **G2 (CUSTOMER FEEDBACK / FACT, search-result aggregation — direct authenticated WebFetch of g2.com/products/qlik-sense/reviews returned HTTP 403 in this pass, consistent with the same block seen on other G2 product pages in this library, retrieved 2026-09-10):** Rating reported as **4.4/5 based on approximately 925–930 reviews**, with a star distribution snapshot of 65% 5-star, 28% 4-star, 4% 3-star, ~0% 2-star, ~0% 1-star. This is a materially tighter, more internally consistent figure than the "4.0 vs 4.4" spread seen in an initial broader search pass — the 4.4/~926–930 figure recurred across multiple independent search snippets and is treated as the higher-confidence read, but it is still **not a direct authenticated fetch** and should be re-verified against the live G2 page before external use.
- **Capterra (FACT, direct WebFetch of capterra.com/p/209809/Qlik-Sense/, retrieved 2026-09-10):** **4.5/5 overall, based on 262 user reviews.** Sub-ratings: Ease of Use 4.3/5, Features 4.3/5, Customer Service 4.2/5, Value for Money 4.2/5. Sentiment breakdown: 94% positive, 5% neutral, 2% negative.
- **Liked most (CUSTOMER FEEDBACK, Capterra themes, direct fetch, retrieved 2026-09-10):** Interactive, dynamic dashboards enabling quick exploration across multiple data sources; user-friendly drag-and-drop interface accessible to non-technical business users; strong self-service report-building for non-technical staff; fast processing/refresh performance on large datasets, attributed to the associative engine.
- **Disliked most (CUSTOMER FEEDBACK, Capterra themes, direct fetch, retrieved 2026-09-10):** Pricing described as high/expensive vs. competitors, particularly for larger teams — compounded by add-on costs for SAP connectors, automated report distribution, consultancy, server setup, and cloud hosting; vendor support described by some reviewers as frustrating, pushing users toward paid partner support at hourly rates; steep learning curve for advanced/custom dashboard configuration; data-level security rules described by some as complex/limited; native charting/visualization options described by some as lagging behind Tableau.
- **Recurring complaints:** Cost (base price + add-ons) is the single most consistent negative theme across both the G2-adjacent star distribution (relatively few 1–2 star reviews, suggesting the complaints are more "expensive but good" than "broken") and the explicit Capterra pros/cons text.
- **Recurring praise:** Associative-engine-driven exploration flexibility and dashboard interactivity; ease of use for the *visualization/exploration* layer specifically (distinct from the *implementation/admin* layer, which reviewers find harder).
- **Requested features:** NOT OBSERVED in this pass — needs a dedicated review-mining pass.
- **Why customers switch away / choose it (INFERENCE only, derived from the above):** Likely choose it for the associative-engine exploration model and enterprise governance/on-prem option; likely switch away or hesitate to adopt due to total cost of ownership (license + connectors + implementation + support) relative to Power BI/Zoho Analytics. Needs direct review quotes to upgrade beyond INFERENCE.

## 6–13. UI/UX, Flows, Technical, Performance, AI, Mobile, Security, Strengths/Weaknesses
- NOT OBSERVED — requires dedicated research pass (live product exploration not performed; no login/trial account used in this pass).
- One partial exception — AI (Section 10 equivalent): vendor claims "Insight Advisor" (AI-driven insight generation/NLP) and predictive analytics are built into the product (FACT, vendor-stated, Section 2 above), paralleling Zoho Analytics' "Ask Zia." Independent sentiment on Qlik's AI features specifically — NOT OBSERVED, needs a dedicated search pass.

## 14. Competitive Score
- TODO — pending full record and category benchmark maturity (see `../../03-Benchmarks/bi-analytics.md`).

## 15. What We Should Learn
- **RECOMMENDATION — investigate:** Qlik's capacity-based (GB of data) pricing metric, as an alternative to per-user or per-row pricing — could reduce "penalize every new viewer" friction that per-user models create, at the cost of being harder for prospects to estimate upfront. Derived from Section 2 FACT (official pricing page).
- **RECOMMENDATION — avoid:** Letting core platform pricing look cheap while add-ons (connectors, distribution, implementation, support) push real total cost much higher — this is Qlik Sense's most consistent complaint theme (CUSTOMER FEEDBACK, Capterra, Section 5) and is a useful cautionary pattern regardless of which pricing model we use.
- **RECOMMENDATION — investigate:** The "associative engine vs. query-based" positioning as a differentiator narrative — Qlik uses this explicitly and consistently in its own marketing; worth assessing whether this maps to a real, demonstrable UX difference or is primarily messaging (TODO — requires hands-on product comparison, not performed in this pass).

## Sources
- [Qlik Sense — official product page](https://www.qlik.com/us/products/qlik-sense) — retrieved 2026-09-10 (direct WebFetch)
- [Qlik — official pricing page](https://www.qlik.com/us/pricing) — retrieved 2026-09-10 (direct WebFetch)
- [Qlik Sense — Capterra reviews](https://www.capterra.com/p/209809/Qlik-Sense/) — retrieved 2026-09-10 (direct WebFetch: 4.5/5, 262 reviews)
- [Qlik Sense — G2 reviews](https://www.g2.com/products/qlik-sense/reviews) — attempted direct fetch (HTTP 403); figures (4.4/5, ~925–930 reviews) sourced via search-result aggregation, retrieved 2026-09-10 — flagged for re-verification
- [Qlik Products — G2 seller page](https://www.g2.com/sellers/qlik) — search-aggregated, retrieved 2026-09-10
- [costbench.com — Qlik Pricing 2026](https://costbench.com/software/business-intelligence/qlik/) — search-snapshot only, retrieved 2026-09-10 — flagged discrepancy vs. official page, not resolved
- [Zoho Analytics — Product Research Record](../../01-Zoho-Primary-Products/zoho-analytics.md) — Section 4 (candidate list), retrieved 2026-09-10
