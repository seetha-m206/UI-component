---
product: "Tableau"
company: "Salesforce, Inc."
category: "BI / Analytics"
last_verified: "2026-09-11"
status: "in-progress"
---

# Tableau — Product Research Record

> Deep UI/component/technical exploration (Sections 6–9, 11–12) requires live login/product access and is marked NOT OBSERVED — this record covers Layer 1–2 research (identity, market, pricing, features, reviews, competitors) from public sources only, per [evidence-guidelines.md](../../00-Framework/evidence-guidelines.md), matching the structure/depth of `../../01-Zoho-Primary-Products/zoho-analytics.md`.

## 1. Identity
- **Company (FACT):** Salesforce, Inc. Tableau Software was an independent public company (NYSE IPO, May 17, 2013) before being acquired by Salesforce in an all-stock deal valued at approximately $15.7 billion, announced June 10, 2019 (FACT — corroborated by multiple sources, e.g. i-scoop.eu, Wikipedia "Tableau Software," retrieved 2026-09-10). It now operates as "Salesforce Tableau" / "Tableau, a Salesforce company."
- **Category:** BI / Analytics — visualization-first, enterprise-leaning self-service analytics platform.
- **Problem solved (FACT, vendor-stated, tableau.com, corroborated via search-result summaries, retrieved 2026-09-10):** Lets users connect to a broad range of data sources, build interactive visualizations/dashboards via drag-and-drop, explore data visually, and (increasingly, per 2026 product direction) surface AI-generated insights and natural-language Q&A through Tableau Pulse/Tableau Einstein/Agentforce integration.
- **Target users / industries (FACT/INFERENCE, from search-aggregated vendor and third-party sources, retrieved 2026-09-10):** Spans mid-market to Fortune 500 enterprises; vendor solution pages exist for Sales, and industry-specific use cases are documented for consumer goods/retail (trade promotion, on-shelf availability), financial services (retail banking dashboards), manufacturing (real-time production monitoring), technology/SaaS (sales targeting), and nonprofit (impact measurement) — per help.tableau.com/blueprint use-cases and vrpconsulting.com case-study summaries. (INFERENCE): heavier weighting toward larger/more data-mature organizations than Zoho Analytics, consistent with Section 2 pricing and Section 5 review themes describing it as more technical/enterprise-oriented.
- **Segment:** Multiple — mid-market through large enterprise; third-party comparison content (see Zoho Analytics record, Section 2) frames Tableau as the more "premium"/advanced option relative to Zoho Analytics. Requires at least one paid Creator license per deployment (FACT, third-party pricing breakdowns, e.g. redresscompliance.com, mammoth.io, retrieved 2026-09-10).
- **Platforms:** Desktop (Tableau Desktop), cloud/SaaS (Tableau Cloud), self-managed server (Tableau Server), free public web tool (Tableau Public), and a mobile app referenced in vendor blog content (tableau.com/blog "Mobile App Bootstrap") — FACT, existence confirmed; feature-parity NOT OBSERVED (see Section 11).
- **Ecosystem / sister products it integrates with (FACT, vendor-stated, retrieved 2026-09-10):** Deep integration with the Salesforce platform — Salesforce Einstein AI (predictive analytics), Agentforce (Salesforce's agentic AI platform), and Slack (Tableau Pulse insight delivery via Slack integration). Also connects to third-party data sources (SQL databases, Snowflake, Excel, cloud warehouses) per review-theme mentions (CUSTOMER FEEDBACK, G2-summarized pros, retrieved 2026-09-10).

## 2. Market & Business
- **Founded / product age (FACT, corroborated across Wikipedia/thebricks.com/blog.nobledesktop.com, retrieved 2026-09-10):** Founded 2003 by Chris Stolte, Pat Hanrahan, and Christian Chabot (Stanford researchers). IPO'd 2013; acquired by Salesforce in 2019 (see Section 1).
- **Approximate customer/user base:** TODO — not independently established in this pass. (One third-party aggregator, elpdata.com, claims "251,614 verified customers" but this figure was not cross-checked against an official Salesforce/Tableau source — UNVERIFIED, flagged as third-party sourced.)
- **Analyst recognition:** TODO — not gathered in this pass (would need direct Gartner Magic Quadrant confirmation).

### Pricing — Tableau Cloud (FACT, third-party sourced — official tableau.com/pricing page returned HTTP 403 to direct WebFetch in this pass; figures below are corroborated across multiple independent third-party breakdowns — costbench.com, mammoth.io, redresscompliance.com, qrvey.com — retrieved 2026-09-10, flagged for direct re-verification against the official page)
| Role/Tier | Standard Edition | Enterprise Edition | Billing | Notes |
|---|---|---|---|---|
| Viewer | $15/user/month | $35/user/month | Annual | View/interact with published dashboards only |
| Explorer | $42/user/month | $70/user/month | Annual | Can edit/explore existing workbooks, limited authoring |
| Creator | $75/user/month | $115/user/month | Annual | Full authoring (Desktop + Prep + Cloud); at least one Creator license required per deployment |

- **Free plan/trial (FACT, corroborated across thebricks.com, tableau.com/products/trial, retrieved 2026-09-10):** 14-day free trial of Tableau Desktop + Tableau Prep Builder (full-featured, starts on activation). Separately, **Tableau Public** is permanently free but public-only (every workbook/data summary uploaded to a public cloud, visible/downloadable by anyone; limited to flat-file and select cloud connectors like Google Sheets — no private/enterprise data sources). **Tableau Reader** (view-only desktop app) is also free.
- **Market positioning (INFERENCE, from third-party comparison content and Zoho's own comparison page cited in the Zoho Analytics record):** Positioned as a premium, visualization-first, enterprise-capable BI platform; commonly recommended for organizations already invested in the Salesforce ecosystem or needing deep/advanced visual analytics. Requires more technical expertise than Power BI per multiple third-party comparison summaries (CUSTOMER FEEDBACK/aggregated, retrieved 2026-09-10).
- **Key differentiators claimed by vendor (FACT, vendor-stated per search-aggregated Salesforce newsroom content, salesforce.com/news, retrieved 2026-09-10):** "Tableau Einstein" — an AI-powered analytics platform incorporating Agentforce; Tableau Pulse (proactive, automated insight/anomaly surfacing delivered to Slack/email); "Explain Data" (automatically surfaces statistical drivers behind a data point); a built-in conversational assistant in Tableau Desktop/Prep for natural-language calculation/visualization authoring.

## 3. Features (FACT, vendor-stated per search-aggregated sources — salesforce.com/news, jitendrazaa.com, aiagentsquare.com — retrieved 2026-09-10; not independently verified via login)
- **Visualization/authoring:** Drag-and-drop dashboard/chart building (Tableau Desktop); broad range of chart types; described repeatedly in CUSTOMER FEEDBACK as strong for turning complex data into interactive visuals.
- **Data preparation:** Tableau Prep Builder — dedicated data-prep tool, now with a built-in conversational/NL assistant for authoring calculations, pivots, and visualization-type suggestions.
- **AI / "Tableau Einstein" (2026 rebrand of the former "Einstein Copilot"/"Tableau Agent"):** Agentforce integration; Tableau Pulse (automatic insight discovery, anomaly alerts, natural-language Q&A); "Explain Data" (automated statistical driver analysis).
- **Deployment options:** Tableau Desktop (authoring), Tableau Cloud (SaaS), Tableau Server (self-managed/on-premise), Tableau Public (free, public-only), Tableau Reader (free, view-only).
- **Data connectivity:** Connectors for SQL databases, Snowflake, Excel, and other cloud/warehouse sources are repeatedly cited favorably in review themes (CUSTOMER FEEDBACK, Section 5); full connector catalog count NOT gathered in this pass (TODO — compare against Zoho Analytics' vendor-claimed "500+ connectors").
- **Collaboration/distribution:** Insight delivery into Slack (per Salesforce ecosystem integration); publishing to Tableau Server/Cloud for org-wide sharing.
- Most important workflows: NOT OBSERVED (would require live login to trace actual click-paths — see Section 7).
- Integrations: native connectors and Salesforce/Slack integration as listed above; depth of each (native vs. partial) NOT OBSERVED in this pass.

## 4. Competitors
| Competitor | Type | Notes |
|---|---|---|
| [Zoho Analytics](../../01-Zoho-Primary-Products/zoho-analytics.md) | Direct — lower-cost, SMB/ecosystem-leaning alternative | Positioned by Zoho's own comparison content as the more affordable, faster-to-onboard option vs. Tableau, trading some advanced/enterprise-scale depth for lower cost (per zoho.com/analytics/insightshq comparison page, retrieved 2026-09-10, cited in the Zoho Analytics record). G2 ~4.2–4.3/5; Capterra 4.4/5 (360 reviews). |
| [Microsoft Power BI](../bi-analytics/power-bi.md) | Direct — Microsoft-ecosystem-first, lower-cost, beginner-friendly | Third-party comparison content (search-aggregated, retrieved 2026-09-10) states Power BI Pro (~$14/user/month) is markedly cheaper than Tableau Creator (~$75/user/month) and is commonly cited as a reason teams switch away from Tableau. |
| [Qlik Sense](../bi-analytics/qlik-sense.md) | Direct — enterprise BI, associative-engine differentiation | See `qlik-sense.md` for full record; capacity(GB)-based pricing vs. Tableau's per-user-role pricing. |
| Google Looker | Direct/enterprise — governed, warehouse-centric BI | Named among top Tableau alternatives evaluated by switching customers (CUSTOMER FEEDBACK, third-party alternatives round-ups, retrieved 2026-09-10). Not yet independently deep-researched in this pass (see `../../01-Zoho-Primary-Products/zoho-analytics.md` Section 4 — TODO carried over). |
| ThoughtSpot | Direct/emerging — search/AI-driven analytics | Named among commonly-evaluated Tableau alternatives in 2026 (CUSTOMER FEEDBACK, knowi.com/blazesql.com alternatives round-ups, retrieved 2026-09-10). Not independently researched — TODO. |
| Sisense | Direct — embedded analytics-focused | Named among commonly-evaluated Tableau alternatives (CUSTOMER FEEDBACK, alternatives round-ups, retrieved 2026-09-10). Not independently researched here — TODO. |
| Metabase / Knowi / Looker Studio | Indirect/low-cost — open-source or lighter-weight self-serve BI | Named as commonly-evaluated alternatives, particularly by cost-sensitive switchers (CUSTOMER FEEDBACK, knowi.com "Tableau Alternative" page, retrieved 2026-09-10). Positioning/pricing not independently verified — TODO. |

**Note on selection:** Zoho Analytics, Power BI, and Qlik Sense are included per task requirement and already have dedicated records in this library. Looker, ThoughtSpot, Sisense, Metabase/Knowi/Looker Studio are carried over from third-party "why customers switch"/alternatives round-up content as plausible candidates but have not had ratings or full profiles independently gathered in this pass.

## 5. Customer Reviews
- **Source(s):** G2 — approximately 4.4/5, review count reported at 3,790 in the most recent search-result snapshot (figures varied slightly, 3,512–3,790, across different search passes/dates) — **FACT (third-party search aggregation; direct authenticated fetch of g2.com/products/tableau/reviews was not performed in this pass — G2 has blocked direct WebFetch access for other products in this library's research and was not re-tested here), retrieved 2026-09-10, flagged for re-verification.** Capterra — approximately 4.6/5, review count reported between ~2,343 and ~2,359 depending on source snapshot — **FACT (third-party search aggregation, capterra.com/p/208764/Tableau, retrieved 2026-09-10, flagged for direct re-verification** — direct WebFetch of the Capterra page was not attempted in this pass).
- **Liked most (CUSTOMER FEEDBACK, G2/Capterra-themed summaries via search aggregation, retrieved 2026-09-10):** Drag-and-drop dashboard building described as intuitive for turning complex data into visuals quickly; wide range of connectors (SQL databases, Snowflake, Excel, Salesforce) enabling multi-source, interactive visualizations; strong visualization/chart variety and interactivity.
- **Disliked most (CUSTOMER FEEDBACK):** Steep learning curve — particularly for advanced features (calculated fields, LOD/level-of-detail expressions, table calculations); described by some reviewers as "not for early-stage data professionals," requiring prior visualization-tool experience; high licensing cost especially burdensome for smaller teams; slow performance reported with large datasets.
- **Recurring complaints:** Learning curve for advanced authoring features (calculated fields, LOD expressions); pricing/cost, especially at the Creator tier and for smaller teams; performance degradation on large datasets; poor customer-support responsiveness (mentioned in switch-away context — CUSTOMER FEEDBACK, knowi.com summary, retrieved 2026-09-10); weak native support for NoSQL/API data sources and difficulty embedding Tableau into customer-facing multi-tenant SaaS products (CUSTOMER FEEDBACK, third-party "why teams switch" summaries, retrieved 2026-09-10 — these last two points are aggregator-sourced commentary, not directly confirmed via G2/Capterra text in this pass, so treat as lower-confidence).
- **Recurring praise:** Visualization quality/interactivity; drag-and-drop ease for core dashboard-building; breadth of data-source connectivity.
- **Requested features:** NOT OBSERVED in a rigorous form in this pass — a direct search for G2 "requested features"/"would like to see" content did not surface concrete, attributable feature requests; one aggregator mentioned mobile experience as "not mobile-friendly" in passing, but this is a single unattributed data point, not a verified recurring theme. Needs a dedicated review-mining pass (sort by "most recent" on G2/Capterra directly) to responsibly fill this in.
- **Why customers switch away (CUSTOMER FEEDBACK, knowi.com "Tableau Alternative" page + blazesql.com/valiotti.com alternatives round-ups, retrieved 2026-09-10 — third-party/aggregator sourced, not directly confirmed via G2/Capterra review text):** Per-seat licensing cost (Creator ~$75/user/month vs. e.g. Power BI Pro ~$14/user/month cited as a comparison point); reported price increases over time ("3x price hikes" per one source, UNVERIFIED figure); need for broader/native integrations and more advanced reporting as businesses scale past Tableau's native capabilities; weak multi-tenant embedding support for SaaS products; analyst-bottleneck effect where Tableau's "everyone is an analyst" self-service promise reportedly did not materialize for all organizations, driving long-term departures.
- **Why customers choose it over competitors:** INFERENCE only, drawn from Section 5 praise themes — visualization depth/interactivity and multi-source connectivity are the most consistent draws; Salesforce-ecosystem customers likely have an additional adoption incentive (INFERENCE from Section 1 ecosystem integration, not directly confirmed by review text in this pass).

## 6. UI/UX
NOT OBSERVED — requires live login/exploration of the actual app (Tableau Desktop, Tableau Cloud, or Tableau Server). Flagged as the next research step.

## 7. User Flows
NOT OBSERVED — same as above; no live session was explored in this pass.

## 8. Technical Observations
NOT OBSERVED — DOM/network/API capture requires live session exploration; not performed in this pass. One indirect signal: vendor materials reference an "Agentforce Platform integration" and Slack-delivered insights (FACT, vendor-stated per search-aggregated Salesforce newsroom content) — implies a documented external integration/API surface, but architecture beyond that is not independently observed (INFERENCE only).

## 9. Performance & Reliability
NOT OBSERVED directly (no live testing performed). CUSTOMER FEEDBACK signal: "slow performance with large datasets" is a recurring complaint theme (Section 5) — but this is drawn from search-aggregated review summaries, not a direct, dated review-count-backed reliability study, so treat as a directional signal only.

## 10. AI Features
- **"Tableau Einstein" (FACT, vendor-stated, per salesforce.com/news and search-aggregated 2026 product coverage, retrieved 2026-09-10):** A 2026 rebrand/expansion of the former "Einstein Copilot"/"Tableau Agent" into an AI-powered analytics platform incorporating Agentforce (Salesforce's broader agentic-AI platform).
- **Tableau Pulse (FACT, vendor-stated):** Automatically discovers insights, alerts users to anomalies, and answers natural-language questions; delivers insights proactively into team communication channels (e.g., Slack) rather than requiring the user to open a dashboard.
- **"Explain Data" (FACT, vendor-stated):** Automatically surfaces the statistical drivers behind any given data point, aiming to reduce manual root-cause analysis time.
- **Conversational assistant in Desktop/Prep (FACT, vendor-stated):** Built into Tableau Desktop and Tableau Prep — supports creating complex calculations, pivot tables, and visualization-type suggestions via natural-language prompts.
- **Customer sentiment on AI specifically:** NOT OBSERVED — the review themes gathered in this pass (Section 5) predate/do not isolate sentiment specifically about Tableau Einstein/Pulse; needs a dedicated search pass ("Tableau Pulse reviews complaints" / "Tableau Einstein reviews").

## 11. Mobile Experience
NOT OBSERVED — a Tableau mobile app is referenced in vendor blog content (tableau.com/blog, "Mobile App Bootstrap"), confirming existence (FACT), but feature parity vs. desktop was not independently verified. One unattributed aggregator mention describes Tableau as "not mobile friendly" — too weak/unsourced a signal to record as a confirmed CUSTOMER FEEDBACK theme; flagged for a dedicated pass.

## 12. Security & Permissions
NOT OBSERVED — role/permissions model (beyond the Viewer/Explorer/Creator licensing tiers documented in Section 2, which govern editing capability rather than security per se) and SSO/2FA availability were not researched from public security/compliance documentation in this pass. TODO.

## 13. Strengths / Weaknesses
- **Best features (CUSTOMER FEEDBACK + vendor FACT):** Visualization depth and interactivity; drag-and-drop dashboard authoring; breadth of data-source connectivity (SQL, Snowflake, Excel, Salesforce); AI-driven proactive insight delivery via Tableau Pulse/Explain Data (vendor-claimed differentiator, sentiment not independently confirmed).
- **Weakest features (CUSTOMER FEEDBACK):** Steep learning curve for advanced authoring (calculated fields, LOD expressions, table calculations); high per-seat licensing cost, especially for smaller teams; performance degradation reported on large datasets; weaker native support for NoSQL/API sources and multi-tenant SaaS embedding per third-party "why customers switch" commentary (lower-confidence, aggregator-sourced).

## 14. Competitive Score
Not yet scored — scoring requires the full category benchmark (see `../../03-Benchmarks/bi-analytics.md`), which remains in-progress pending dedicated full records for the remaining named competitors (Looker, Sisense, ThoughtSpot, etc.).

## 15. What We Should Learn
- **RECOMMENDATION — adopt:** Proactive, delivery-based insight surfacing (Tableau Pulse pushing anomaly alerts and NL-answerable insights into Slack/email, rather than requiring the user to open a dashboard) as a pattern worth evaluating for Zoho Analytics' "Ask Zia" — derived from Section 10 vendor FACT; independent sentiment verification still needed before treating this as a proven win over Zoho's more request-driven Ask Zia model.
- **RECOMMENDATION — adopt:** Tiered, role-based licensing (Viewer/Explorer/Creator) as a clear, well-understood pricing/permissions mental model — derived from Section 2 FACT pricing structure — while being mindful this is also Tableau's most-cited weakness (cost at scale, Section 5).
- **RECOMMENDATION — avoid:** Requiring deep technical expertise (calculated fields, LOD expressions) for advanced analysis without a strong natural-language/AI on-ramp — this is Tableau's most consistent complaint theme (CUSTOMER FEEDBACK, Section 5) and a specific opportunity for Zoho Analytics' "Ask Zia" positioning if genuinely easier for equivalent depth of analysis (needs a head-to-head validation pass, not yet done).
- **RECOMMENDATION — investigate before adopting:** Whether per-user-role pricing (Viewer/Explorer/Creator) is more or less customer-friendly than Zoho Analytics' per-account pricing model at comparable team sizes — needs a like-for-like TCO comparison (derived from Section 2 of both records).

## 16. Standard Questionnaire — Full Answer Set (seetha_research_library.md §4–15)

> Retrofit pass, 2026-09-11. Every answer below is drawn only from Sections 1–15 of this same file (no new research performed). "see Section N" is used where that section directly answers the question; short direct answers repeat the evidence tag already used there; `NOT OBSERVED`/`TODO` per evidence-guidelines.md where this file has no evidence yet.

### Product Identification (§4, Q1–12)
1. What is the product? — Tableau, a visualization-first, enterprise-leaning self-service analytics platform (see Section 1).
2. What problem does it solve? — see Section 1 (FACT, vendor-stated).
3. What category does it belong to? — BI / Analytics (see Section 1).
4. Who is the target customer? — Mid-market to Fortune 500 enterprises across sales, retail, financial services, manufacturing, technology/SaaS, and nonprofit (see Section 1, FACT/INFERENCE).
5. Individuals/startups/SMBs/enterprises/multiple? — Multiple — mid-market through large enterprise (see Section 1).
6. Major features? — see Section 3.
7. Most important workflows? — NOT OBSERVED — requires live login (see Section 3/7).
8. What platforms does it support? — Tableau Desktop, Tableau Cloud, Tableau Server, Tableau Public, Tableau Reader, and a mobile app referenced in vendor blog content (see Section 1, FACT).
9. Web/desktop/mobile/all? — All — desktop authoring app, cloud SaaS, self-managed server, and a mobile app (existence confirmed; feature parity NOT OBSERVED — see Section 1/11).
10. What integrations does it provide? — Salesforce Einstein, Agentforce, Slack, plus SQL databases/Snowflake/Excel/cloud warehouse connectors (see Section 1/3, FACT/CUSTOMER FEEDBACK).
11. What ecosystem does it belong to? — The Salesforce ecosystem (see Section 1).
12. Which other products in the same company's suite does it integrate with? — Salesforce Einstein AI, Agentforce, Slack (see Section 1, FACT).

### Business & Market (§5, Q13–26)
13. How long has the product existed? — Founded 2003; IPO 2013; acquired by Salesforce 2019 (see Section 1/2, FACT).
14. How important is it within its company's ecosystem? — TODO — deep integration with Salesforce Einstein/Agentforce/Slack is documented (Section 1, FACT) but no explicit statement of relative strategic importance within Salesforce was gathered.
15. What pricing plans are available? — see Section 2 (table: Viewer/Explorer/Creator × Standard/Enterprise).
16. What is included in each plan? — see Section 2 (table).
17. Is there a free plan? — Tableau Public (free, public-only) and Tableau Reader (free, view-only) — see Section 2, FACT.
18. Is there a free trial? — Yes, 14-day trial of Tableau Desktop + Prep Builder (see Section 2, FACT).
19. What limitations exist in the free/trial version? — Tableau Public: public-only, limited to flat-file/select cloud connectors, no private/enterprise data sources (see Section 2, FACT).
20. Approximate customer/user base? — TODO — not independently established (one unverified third-party claim of "251,614 verified customers," see Section 2).
21. What industries use it? — Sales, consumer goods/retail, financial services, manufacturing, technology/SaaS, nonprofit (see Section 1, FACT/INFERENCE).
22. Which geographic markets are important? — TODO — not covered in this pass.
23. Market positioning? — see Section 2 (INFERENCE — premium, visualization-first, enterprise-capable).
24. What differentiates it from competitors? — see Section 2 (Tableau Einstein, Tableau Pulse, Explain Data, conversational assistant — FACT, vendor-stated).
25. What type of company/customer gets the most value from it? — INFERENCE — Salesforce-ecosystem enterprises and data-mature organizations needing advanced visual analytics (see Section 1/2).
26. Major selling points? — see Section 2 differentiators + Section 13 best features.

### Competitor Research (§6, Q27–41)
27. Who are the top competitors? — Zoho Analytics, Microsoft Power BI, Qlik Sense, Google Looker, ThoughtSpot, Sisense, Metabase/Knowi/Looker Studio (see Section 4).
28. Which competitor is the closest equivalent? — INFERENCE — Power BI is the most consistently cited direct alternative in "why customers switch" content (see Section 4/5).
29. Which competitor has the largest customer/user base? — TODO — not compared quantitatively.
30. Which competitor has the strongest enterprise presence? — INFERENCE — Qlik Sense, per its enterprise BI/data-discovery positioning (see Section 4); not directly compared against Tableau itself.
31. Which competitor is strongest for SMBs? — INFERENCE — Zoho Analytics, per its lower-cost/SMB-leaning positioning (see Section 4).
32. Which competitor is cheapest? — Power BI Pro (~$14/user/month) is explicitly cited as markedly cheaper than Tableau Creator (~$75/user/month) (see Section 4, FACT third-party).
33. Which competitor provides the most features? — TODO — not comparatively assessed.
34. Which competitor has the simplest UX? — NOT OBSERVED unless independently verified across products via live use.
35. Which competitor has the strongest automation? — TODO.
36. Which competitor has the strongest analytics? — TODO.
37. Which competitor has the strongest integrations? — TODO.
38. Which competitor has the strongest AI capabilities? — TODO — no head-to-head AI comparison performed (Tableau Einstein/Pulse vs. competitors, see Section 10).
39. Which competitor is growing fastest? — TODO.
40. Which competitor receives the strongest customer feedback (rating)? — Per Section 4/5, Zoho Analytics' Capterra rating (4.4/5) and Tableau's own Capterra rating (~4.6/5) are the only figures gathered; no full comparative ranking across all listed competitors — TODO.
41. Which competitor appears technically strongest? — mostly INFERENCE/NOT OBSERVED without live technical exploration of all competitors.

### Customer Review Research (§7, Q42–57)
42. What do customers like most? — see Section 5 (liked most).
43. What do customers dislike most? — see Section 5 (disliked most).
44. What problems are repeatedly mentioned? — see Section 5 (recurring complaints — learning curve, pricing, performance, support responsiveness).
45. What features receive the most praise? — see Section 5 (recurring praise — visualization quality/interactivity, drag-and-drop ease, connector breadth).
46. What features receive the most complaints? — see Section 5 (advanced authoring features — calculated fields, LOD expressions, table calculations; cost; performance on large datasets).
47. What do customers say about usability? — see Section 5 (drag-and-drop core building described as intuitive, but steep learning curve for advanced features — "not for early-stage data professionals").
48. What do customers say about performance? — see Section 5/9 (CUSTOMER FEEDBACK — slow performance reported with large datasets).
49. What do customers say about reliability? — NOT OBSERVED directly; see Section 9 (directional signal only, not a dedicated reliability study).
50. What do customers say about customer support? — see Section 5 (CUSTOMER FEEDBACK — "poor customer-support responsiveness" mentioned in switch-away context, lower-confidence/aggregator-sourced).
51. What do customers say about pricing/value? — see Section 5 (high licensing cost especially burdensome for smaller teams; reported price increases over time, one unverified "3x price hikes" figure).
52. What do customers say about integrations? — see Section 5 (praised: breadth of connectors; also a lower-confidence complaint about weak NoSQL/API support and multi-tenant SaaS embedding).
53. What do customers say about mobile applications? — see Section 11 (one weak, unattributed aggregator mention of "not mobile friendly" — too weak to record as a confirmed theme).
54. What do customers say about onboarding? — NOT OBSERVED — not covered in this pass (TODO).
55. What features do customers request? — NOT OBSERVED in a rigorous form in this pass (see Section 5 explicit note — no concrete, attributable feature requests surfaced).
56. Why do customers switch away from the product? — see Section 5 (CUSTOMER FEEDBACK — cost, price increases, need for broader integrations, weak multi-tenant embedding, analyst-bottleneck effect).
57. Why do customers choose the product over competitors? — see Section 5 (INFERENCE — visualization depth/interactivity, multi-source connectivity, Salesforce-ecosystem incentive).

### UI/UX Benchmarking (§8, Q58–82) — requires live product access
58. Overall UI style? — NOT OBSERVED (see Section 6).
59. Is navigation easy to understand? — NOT OBSERVED.
60. Sidebar structure? — NOT OBSERVED.
61. Dashboard structure? — NOT OBSERVED.
62. Clicks required for common workflows? — NOT OBSERVED.
63. Important screens? — NOT OBSERVED.
64. Important UI components? — NOT OBSERVED.
65. Button design? — NOT OBSERVED.
66. Form design? — NOT OBSERVED.
67. Table design? — NOT OBSERVED.
68. Card design? — NOT OBSERVED.
69. Tab design? — NOT OBSERVED.
70. Modal design? — NOT OBSERVED.
71. Dropdown design? — NOT OBSERVED.
72. Filter design? — NOT OBSERVED.
73. Search design? — NOT OBSERVED.
74. Notification handling? — NOT OBSERVED.
75. Error display? — NOT OBSERVED.
76. Loading-state display? — NOT OBSERVED.
77. Empty-state display? — NOT OBSERVED.
78. Confirmation-message display? — NOT OBSERVED.
79. Permissions/roles representation? — NOT OBSERVED.
80. Onboarding handling? — NOT OBSERVED (public marketing claims about onboarding are CUSTOMER FEEDBACK at best, not observation).
81. Responsive behavior? — NOT OBSERVED.
82. Accessibility handling? — NOT OBSERVED.

### Workflow Benchmarking (§9, Q83–99) — requires live product access
83. Steps required (for the product's core workflow)? — NOT OBSERVED (see Section 7).
84. Clicks required? — NOT OBSERVED.
85. Screens involved? — NOT OBSERVED.
86. Components involved? — NOT OBSERVED.
87. Information required? — NOT OBSERVED.
88. Validations that occur? — NOT OBSERVED.
89. Errors that can occur? — NOT OBSERVED.
90. What happens after submission? — NOT OBSERVED.
91. Feedback the user receives? — NOT OBSERVED.
92. Linear or flexible workflow? — NOT OBSERVED.
93. Can the user save progress? — NOT OBSERVED.
94. Can the user undo/recover actions? — NOT OBSERVED.
95. Shortest workflow among competitors? — NOT OBSERVED.
96. Clearest workflow among competitors? — NOT OBSERVED.
97. Best user feedback among competitors? — NOT OBSERVED.
98. Easiest for a new user? — NOT OBSERVED.
99. Best for an experienced user? — NOT OBSERVED.

### Backend / Technical Benchmarking (§10, Q100–118) — requires live product access
100. Frontend technology used? — NOT OBSERVED (see Section 8).
101. Backend architecture inferred? — NOT OBSERVED.
102. APIs/network calls triggered? — NOT OBSERVED.
103. What happens on button click (technical chain)? — NOT OBSERVED.
104. HTTP methods used? — NOT OBSERVED.
105. Data sent? — NOT OBSERVED.
106. Response returned? — NOT OBSERVED.
107. REST/GraphQL/other? — NOT OBSERVED.
108. Authentication handling? — NOT OBSERVED technically (see Section 8; publicly documented auth options belong in Q159–161 instead).
109. Session-state maintenance? — NOT OBSERVED.
110. Caching handling? — NOT OBSERVED.
111. File/media upload handling? — NOT OBSERVED.
112. Real-time update handling? — NOT OBSERVED.
113. Third-party services integrated (technically visible)? — NOT OBSERVED (publicly-documented integration names are in Q10/Q144 instead).
114. Technologies visible in browser/network layer? — NOT OBSERVED.
115. Error handling? — NOT OBSERVED.
116. Retry handling? — NOT OBSERVED.
117. Frontend/backend interaction patterns? — NOT OBSERVED.
118. Notably strong technical patterns? — NOT OBSERVED. One indirect signal: vendor materials reference "Agentforce Platform integration" and Slack-delivered insights (FACT, vendor-stated, see Section 8), implying a documented external integration/API surface, but architecture beyond that is not independently observed (INFERENCE only).

### Performance & Reliability (§11, Q119–129)
119. Application load speed? — NOT OBSERVED (see Section 9).
120. Time for major screens to become interactive? — NOT OBSERVED.
121. Noticeable delays? — NOT OBSERVED.
122. Handles large datasets well? — CUSTOMER FEEDBACK (negative): "slow performance reported with large datasets" (see Section 5/9).
123. Reliability of important workflows? — NOT OBSERVED directly; see Section 9.
124. Recurring customer complaints about bugs? — see Section 5 — complaints cluster around learning curve, cost, and large-dataset performance rather than explicit bug reports.
125. Reported downtime? — TODO (check status-page/outage-tracker history).
126. Behavior during failures? — NOT OBSERVED.
127. Retry mechanisms available? — NOT OBSERVED.
128. Useful error messages? — NOT OBSERVED.
129. Performance change for complex workflows? — CUSTOMER FEEDBACK: performance degradation reported on large datasets (see Section 5/9).

### AI Capability Benchmarking (§12, Q130–143)
130. Does the product have AI features? — Yes, see Section 10 (Tableau Einstein, Pulse, Explain Data, conversational assistant).
131. What AI features exist? — see Section 10.
132. What problems do those AI features solve? — see Section 10 (proactive insight/anomaly delivery without opening a dashboard; automated statistical root-cause analysis; NL authoring of calculations/pivots/visualization suggestions).
133. Does AI generate content? — FACT — the conversational assistant in Desktop/Prep creates calculations, pivot tables, and visualization-type suggestions from NL prompts (see Section 10).
134. Does AI summarize information? — FACT — Tableau Pulse discovers insights and answers NL questions (see Section 10).
135. Does AI automate workflows? — INFERENCE — Pulse's automatic insight/anomaly discovery and proactive delivery reduces manual dashboard-checking steps (see Section 10); broader workflow automation TODO.
136. Does AI provide recommendations? — FACT — Explain Data automatically surfaces statistical drivers behind a data point (see Section 10); conversational assistant also suggests visualization types.
137. Does AI analyze customer/product data? — FACT — Einstein/Agentforce integration supports predictive analytics on connected data (see Section 1/10).
138. Does AI use company/customer context? — INFERENCE — via Salesforce Agentforce/Einstein integration it could draw on broader Salesforce CRM context, but this is not explicitly confirmed in sourced material — TODO.
139. What AI models/providers are publicly disclosed? — Salesforce Einstein and Agentforce are named as the underlying AI platform (see Section 10, FACT); specific underlying model providers TODO.
140. How is AI integrated into the UI? — NOT OBSERVED (requires live use); vendor describes delivery into Slack/email (see Section 10) but in-app placement is not independently observed.
141. Does AI reduce the number of manual steps? — Vendor claim only (FACT, vendor-stated — Pulse/Explain Data reduce manual root-cause analysis and dashboard-checking, see Section 10); NOT OBSERVED independently.
142. Do customers consider the AI useful? — NOT OBSERVED (see Section 10 explicit — review themes gathered predate/do not isolate AI-specific sentiment).
143. What limitations/complaints exist around the AI? — NOT OBSERVED (see Section 10 explicit).

### Integration Research (§13, Q144–154)
144. What integrations are available? — Salesforce Einstein, Agentforce, Slack, SQL databases, Snowflake, Excel, other cloud/warehouse connectors (see Section 1/3, FACT/CUSTOMER FEEDBACK).
145. Which integrations are most important? — INFERENCE — the Salesforce-native integrations (Einstein, Agentforce, Slack) given corporate ownership (see Section 1); not independently confirmed as "most important" by customers.
146. Which integrations are unique? — INFERENCE — Agentforce/Salesforce-native integration is a differentiator versus non-Salesforce-owned BI competitors (see Section 1/2); TODO for further verification.
147. How easy is integration setup? — NOT OBSERVED.
148. Does the integration require authentication? — NOT OBSERVED.
149. How is connected-account status shown? — NOT OBSERVED.
150. What happens when an integration fails? — NOT OBSERVED.
151. How are permissions handled (for integrations)? — NOT OBSERVED.
152. How are multiple connected accounts handled? — NOT OBSERVED.
153. How does the product synchronize data? — NOT OBSERVED.
154. How does it show synchronization errors? — NOT OBSERVED.

### Security & Permissions (§14, Q155–163) — publicly documented only
155. How are user roles handled? — Governed via the Viewer/Explorer/Creator licensing tiers documented in Section 2, though Section 12 notes these govern editing capability rather than security per se.
156. What permission levels exist? — Viewer (view/interact only), Explorer (edit/explore existing workbooks, limited authoring), Creator (full authoring) — see Section 2, FACT.
157. How are teams/workspaces structured? — TODO — not detailed beyond the licensing tiers in Section 2.
158. How is access controlled? — TODO — not researched beyond the licensing tiers (see Section 12 explicit).
159. How is authentication handled? — TODO/NOT OBSERVED — not researched from public security documentation.
160. Is SSO available? — TODO/NOT OBSERVED (see Section 12 explicit).
161. Is two-factor authentication available? — TODO/NOT OBSERVED (see Section 12 explicit).
162. How are connected accounts protected? — TODO/NOT OBSERVED unless publicly documented.
163. What security/compliance information is publicly documented? — TODO — not researched in this pass (see Section 12 explicit).

### Mobile Experience (§15, Q164–171)
164. Is the mobile app feature-complete? — NOT OBSERVED — app existence confirmed (FACT) but feature parity vs. desktop not independently verified (see Section 11).
165. Which desktop features are missing? — NOT OBSERVED.
166. How is navigation adapted for mobile? — NOT OBSERVED.
167. How is content creation handled (mobile)? — NOT OBSERVED.
168. How are notifications handled (mobile)? — NOT OBSERVED.
169. Mobile performance? — NOT OBSERVED (see Section 11 — one weak, unattributed "not mobile friendly" mention, flagged as too low-confidence to record as a theme).
170. What do mobile users complain about? — see Section 11 (weak/unattributed signal only, not a confirmed recurring theme).
171. Which competitor has the strongest mobile experience? — TODO/NOT OBSERVED — requires comparable mobile research across all competitors.

## Sources
- [Zoho Analytics vs Power BI vs Tableau for SMBs](https://www.zoho.com/analytics/insightshq/zoho-analytics-vs-power-bi-vs-tableau-smbs-2026.html) — retrieved 2026-09-10
- Tableau official pricing page (https://www.tableau.com/pricing and https://www.tableau.com/pricing/teams-orgs) — direct WebFetch attempted, returned HTTP 403 both times, retrieved 2026-09-10 — pricing figures instead sourced from third-party breakdowns below, flagged for direct re-verification
- [Tableau Pricing 2026: $15, $42 or $75 a User — Which to Buy (Mammoth)](https://mammoth.io/blog/tableau-pricing/) — retrieved 2026-09-10
- [Tableau Pricing 2026: 3 Plans from $15–$75/user/month (Costbench)](https://costbench.com/software/business-intelligence/tableau/) — retrieved 2026-09-10
- [Tableau Pricing 2026: Creator Explorer Viewer (Redress Compliance)](https://redresscompliance.com/tableau-pricing-2026-creator-explorer-viewer) — retrieved 2026-09-10
- [Tableau Pricing Guide 2026: Plans, Costs & Hidden Fees (Qrvey)](https://qrvey.com/blog/tableau-pricing/) — retrieved 2026-09-10
- Tableau company/about page (https://www.tableau.com/about) — direct WebFetch attempted, returned HTTP 403, retrieved 2026-09-10
- [Tableau Software — Wikipedia](https://en.wikipedia.org/wiki/Tableau_Software) — retrieved 2026-09-10 (via search aggregation)
- [Self-service analytics pioneer Tableau Software acquired by Salesforce for $15.7 billion (i-scoop.eu)](https://www.i-scoop.eu/self-service-analytics-pioneer-tableau-software-acquired-by-salesforce-for-15-7-billion/) — retrieved 2026-09-10
- [Tableau Reviews 2026 — G2](https://www.g2.com/products/tableau/reviews) — attempted direct fetch not performed this pass; figures sourced via search-result aggregation, retrieved 2026-09-10 — flagged for re-verification
- [Tableau Reviews 2026 — Capterra](https://www.capterra.com/p/208764/Tableau/reviews/) — figures sourced via search-result aggregation, retrieved 2026-09-10 — flagged for re-verification
- [Tableau Pros and Cons — G2](https://www.g2.com/products/tableau/reviews?qs=pros-and-cons) — retrieved 2026-09-10 (via search aggregation)
- [Announcing Tableau Einstein: Agent-Powered Analytics (Salesforce Newsroom)](https://www.salesforce.com/news/stories/tableau-ai-dreamforce-24/) — retrieved 2026-09-10
- [Tableau AI Guide 2026: Features, Pricing & Power BI (jitendrazaa.com)](https://www.jitendrazaa.com/blog/salesforce/tableau-ai-complete-guide-features-pricing-power-bilooker/) — retrieved 2026-09-10
- [Start your free trial of Tableau](https://www.tableau.com/products/trial) — retrieved 2026-09-10 (via search aggregation; direct fetch not attempted)
- [How Long Is the Tableau Free Trial? (thebricks.com)](https://www.thebricks.com/resources/guide-how-long-is-tableau-free-trial) — retrieved 2026-09-10
- [Tableau Alternative: Why Teams Switch to Knowi](https://www.knowi.com/tableau-alternative/) — retrieved 2026-09-10
- [Best Tableau Alternatives in 2026 (BlazeSQL)](https://www.blazesql.com/blog/tableau-alternatives) — retrieved 2026-09-10
- [7 Best Tableau Alternatives in 2026 (Valiotti Data)](https://valiotti.com/tableau-alternatives-2026/) — retrieved 2026-09-10
- [Tableau Use Cases and Data Sources — Tableau Blueprint](https://help.tableau.com/current/blueprint/en-us/bp_use_cases.htm) — retrieved 2026-09-10 (via search aggregation)
- [List of Companies Using Tableau — ELP Data](https://www.elpdata.com/app/tableau) — retrieved 2026-09-10 (third-party, customer-count figure unverified against official source)
