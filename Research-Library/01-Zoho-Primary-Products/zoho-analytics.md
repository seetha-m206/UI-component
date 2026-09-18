---
product: "Zoho Analytics"
company: "Zoho Corporation"
category: "BI / Analytics"
last_verified: "2026-09-11"
status: "in-progress"
---

# Zoho Analytics — Product Research Record

> Deep UI/component/technical exploration (Sections 6–9, 11–12) requires live login and is marked NOT OBSERVED — this record covers Layer 1–2 research (identity, market, reviews, competitors) from public sources only, following the Zoho Social worked example's structure.

## 1. Identity
- **Company (FACT):** Zoho Corporation.
- **Category:** BI / Analytics (self-service business intelligence and analytics platform).
- **Problem solved (FACT, vendor-stated, zoho.com/analytics, retrieved 2026-09-10):** Connects to 500+ data sources, lets users prepare/transform data visually, build dashboards/reports with 50+ visualization types, run historical/predictive/diagnostic analysis, and share insights across an organization — positioned as covering the "complete analytics workflow from data connection through collaborative sharing."
- **Target users / industries (FACT, vendor-stated):** Data analysts, business users, data engineers, and data scientists. (INFERENCE, from pricing structure and review themes): most heavily adopted by SMBs and mid-market teams, especially those already inside the Zoho ecosystem (CRM, Books, Desk, Creator, Projects); enterprise use exists (Enterprise plan, 50+ users) but reviewers repeatedly note it "lags behind" Tableau/Power BI on flexibility/feature depth for advanced/large-scale use cases (CUSTOMER FEEDBACK, G2, retrieved 2026-09-10).
- **Segment:** SMB and mid-market primarily; some enterprise reach via the Enterprise/Dedicated Compute tiers (INFERENCE from pricing tiers + review sentiment — see Section 2/5).
- **Platforms:** Web (cloud), on-premise deployment option (FACT — a dedicated "Zoho Analytics On-Premise" help/documentation track exists, indicating an on-prem SKU), mobile apps referenced in vendor materials but not independently confirmed in this pass (UNVERIFIED — needs confirmation).
- **Ecosystem / sister products it integrates with (FACT, vendor-stated):** Deep integration with Zoho CRM, Zoho Books, Zoho Desk, Zoho Creator, Zoho Projects; also connects to third-party systems (Salesforce, Google Analytics, Shopify, ServiceNow, MongoDB, Databricks, Amazon Athena, MySQL, PostgreSQL, Oracle Cloud, and others) — per zoho.com/analytics, retrieved 2026-09-10.

## 2. Market & Business
- **Founded / product age:** TODO — not established in this pass (originally launched as "Zoho Reports," per a Capterra listing URL still referencing "Zoho-Reports" — INFERENCE of a historical rebrand, not independently confirmed with a date).
- **Approximate customer/user base (FACT, vendor-stated, zoho.com/analytics, retrieved 2026-09-10):** "16,000+ customers," "3 million users," "75 million reports generated." (Vendor-claimed figures — not independently verified.)
- **Analyst recognition (FACT, vendor-stated):** Vendor page states Zoho Analytics is "recognized in the 2026 Gartner Magic Quadrant for [Analytics and Business Intelligence Platforms]" — claim not independently cross-checked against a Gartner source in this pass (UNVERIFIED — needs confirmation against Gartner directly).

### Pricing (FACT, official page zoho.com/analytics/pricing.html, retrieved 2026-09-10)
| Plan | Starting users | Starting row limit | Billing | Source |
|---|---|---|---|---|
| Free | 2 users | 10,000 rows, 5 workspaces | Free forever | zoho.com/analytics/pricing.html |
| Basic | 2 users | 0.5M rows | Monthly, or annual (~20% cheaper) | zoho.com/analytics/pricing.html |
| Standard ("Popular") | 5 users | 1M rows | Monthly, or annual (~20% cheaper) | zoho.com/analytics/pricing.html |
| Premium | 15 users | 5M rows | Monthly, or annual (~20% cheaper) | zoho.com/analytics/pricing.html |
| Enterprise | 50 users | 50M rows | Monthly, or annual (~20% cheaper) | zoho.com/analytics/pricing.html |
| Dedicated Compute | 50+ users | 500M+ rows | Custom | zoho.com/analytics/pricing.html |

**Exact dollar figures caveat:** The official pricing page did not surface explicit per-plan dollar amounts in this pass's fetch (structure/tiers/limits confirmed directly; prices below are third-party aggregated and flagged for re-verification). Third-party aggregator (coefficient.io, retrieved 2026-09-10) reports: Basic ~$30/mo, Standard ~$60/mo, Premium ~$145/mo, Enterprise ~$575/mo — **FACT (third-party sourced — verify against official page before external use)**. Plans are priced per account (not per user), with included user/row counts as shown above and additional users/rows/viewers available as add-ons (FACT, coefficient.io, retrieved 2026-09-10).

- **Free plan/trial (FACT, official page):** Free plan is permanent — 2 users, 10,000 rows, 5 workspaces, unlimited reports/dashboards, 3 scheduled data imports, HTTPS access. Separately, a 15-day free trial (no credit card required, cancel anytime) is offered on paid plans.
- **Market positioning (INFERENCE, based on vendor comparison content at zoho.com/analytics/insightshq/zoho-analytics-vs-power-bi-vs-tableau-smbs-2026.html, retrieved 2026-09-10):** Positioned as the more affordable, easier-to-adopt option versus Tableau/Power BI for SMBs and Zoho-ecosystem customers, trading some advanced/enterprise-scale analytical depth for lower cost, faster onboarding, and native ecosystem integration.
- **Key differentiators claimed by vendor (FACT, vendor-stated):** Natural-language "Ask Zia" AI assistant; deep native integration with the Zoho application suite; per-account (not strictly per-user) pricing; visual data-prep pipeline with 250+ transformation options; embedded analytics via APIs/SDKs/MCP server.

## 3. Features (FACT, vendor-stated, zoho.com/analytics, retrieved 2026-09-10 — not independently verified via login)
- **Data integration:** 500+ connectors — databases, data lakes/warehouses, business apps, files.
- **Data preparation:** Visual pipeline builder, 250+ transformation options, AI-assisted data-quality cleanup.
- **Visualization:** 50+ chart/visualization types, drag-and-drop builder, a visualization-recommendation engine.
- **Advanced analytics:** Historical, predictive, and diagnostic analysis; anomaly detection; what-if scenario simulation; AutoML-based predictive modeling.
- **Collaboration/sharing:** Fine-grained permissions, row-level security, distribution via email/Slack/Microsoft Teams/Zoho Cliq.
- **AI ("Zia"):** Natural-language querying ("Ask Zia"), automated insight narratives (trend/outlier/correlation surfacing on dashboards), "Transform by Example," natural-language formula suggestions.
- **Embedded analytics:** Public/embed APIs, SDKs, MCP server integration for building analytics into custom applications.
- **Deployment options:** Cloud (SaaS) and an on-premise edition (FACT — dedicated on-premise help documentation exists).
- Most important workflows: NOT OBSERVED (would require live login to trace actual click-paths — see Section 7).
- Integrations: native connectors as listed above; depth of each (native vs. partial/Zapier-style) NOT OBSERVED in this pass.

## 4. Competitors
| Competitor | Type | Notes |
|---|---|---|
| Tableau (Salesforce) | Direct — enterprise-leaning, visualization-first | G2 rating reported ~4.4/5, ~3,500–3,790 reviews (figures vary slightly by source/date — FACT, third-party search aggregation, retrieved 2026-09-10, flagged for direct re-verification). Vendor's own comparison content (zoho.com/analytics/insightshq) frames Tableau as the premium/Salesforce-ecosystem choice with Creator licenses cited at ~$75/user/month by third-party sources. |
| Microsoft Power BI | Direct — Microsoft-ecosystem-first | G2 rating reported ~4.5/5, ~1,659 reviews (FACT, third-party search aggregation, retrieved 2026-09-10, flagged for direct re-verification). Positioned by Zoho's own comparison page as the best fit for Microsoft-centric (Excel/Office 365/Azure) organizations. |
| Qlik Sense | Direct — enterprise BI/data-discovery | G2 rating reported ~4.4/5, review counts vary by source (~929–1,435 depending on page) — FACT, third-party search aggregation, retrieved 2026-09-10, flagged for re-verification. |
| Google Looker | Direct/enterprise — governed, warehouse-centric BI | G2 rating reported ~4.4/5, ~1,556 reviews (FACT, third-party search aggregation, retrieved 2026-09-10, flagged for re-verification). Positioned in third-party comparisons (subscribed.fyi) as "the best overall Zoho Analytics alternative," strongest for governed warehouse analytics and Google-ecosystem integration. |
| Sisense | Direct — embedded analytics-focused | Cited in third-party alternative round-ups for strong embedded analytics, customizable dashboards, real-time insights (CUSTOMER-FEEDBACK/vendor-comparison sourced, retrieved 2026-09-10). Rating not gathered in this pass — TODO. |
| Domo | Direct/emerging — multi-source, ease-of-use focused | Cited in third-party alternative round-ups as "best for multi-source data integration," beginner-friendly, cloud-first (CUSTOMER-FEEDBACK/vendor-comparison sourced, retrieved 2026-09-10). Rating not gathered in this pass — TODO. |

**Note on selection:** Tableau, Power BI, Qlik Sense, and Looker were independently verified as commonly cited direct competitors via multiple search passes (not merely assumed from the task brief). Sisense and Domo are carried over from alternative-listicle sources as plausible SMB/emerging-tier candidates but have not yet had ratings independently gathered — treat as unverified candidates pending a dedicated pass.

## 5. Customer Reviews
- **Source(s):** G2 — rating reported as 4.2–4.3/5 across different search snapshots (rating-distribution snapshot: 56% 5-star, 33% 4-star reviews) — **FACT (third-party search-aggregated, not a direct authenticated fetch of G2's page — G2 blocked direct WebFetch access in this pass with HTTP 403), retrieved 2026-09-10, flagged for re-verification.** Capterra — 4.4/5, 360 reviews (Ease of Use 4.2/5, Customer Service 4.1/5) — FACT, capterra.com/p/129749/Zoho-Analytics, retrieved 2026-09-10.
- **Liked most (CUSTOMER FEEDBACK, G2/Capterra themes, retrieved 2026-09-10):** Reports interface (standard and self-service) described as intuitive; seamless data pull from other Zoho platforms; broad data-connection options; clear, flexible dashboards for everyday analysis; wide variety of attractive chart/graph formats.
- **Disliked most (CUSTOMER FEEDBACK):** Perceived as lagging Tableau, Power BI, and Google Cloud tools in flexibility and feature breadth for advanced use cases; steep learning curve reported by some users; difficulty integrating multiple datasets into a single report; struggles handling very large datasets and complex joins; some features described as "missing" for advanced analysis needs.
- **Recurring complaints:** Advanced-analysis/large-dataset/complex-join limitations (recurring across both G2 and Capterra themes — consistent signal).
- **Recurring praise:** Ease of use for standard reporting; native Zoho ecosystem data flow; dashboard clarity/visual variety.
- **Requested features:** NOT OBSERVED in this pass — needs a dedicated review-mining pass (sort by "most recent"/"lowest rating" on G2 and Capterra directly rather than search-snapshot summaries).
- **Why customers switch away / choose it:** INFERENCE only — "choose it" correlates with existing Zoho-ecosystem usage and lower price point vs. Tableau/Power BI; "switch away" correlates with hitting scale/complexity ceilings (large datasets, multi-dataset joins, advanced analytics depth). Needs direct review quotes to upgrade beyond INFERENCE.

## 6. UI/UX
NOT OBSERVED — requires live login/exploration of the actual app. Flagged as the next research step.

## 7. User Flows
NOT OBSERVED — same as above.

## 8. Technical Observations
NOT OBSERVED — DOM/network/API capture requires live session exploration; not performed in this pass. One indirect signal: vendor materials mention an "MCP server integration" for embedded analytics (FACT, vendor-stated) — implies a documented external API/integration surface, but architecture beyond that is not independently observed (INFERENCE only).

## 9. Performance & Reliability
NOT OBSERVED directly. CUSTOMER FEEDBACK signal: complaints cluster around functional limitations at scale (large datasets, complex joins) rather than explicit uptime/latency complaints — but this is an absence-of-evidence signal, not evidence of strong reliability, since a dedicated reliability-focused review pass was not performed.

## 10. AI Features
- **"Ask Zia" (FACT, vendor-stated, zoho.com/analytics/zia and help.zoho.com, retrieved 2026-09-10):** NLP-based conversational query layer — users ask questions in natural language (e.g., "what was revenue by region last quarter compared to the quarter before") and Zia returns a chart, underlying numbers, and an interpretation, without requiring SQL or manual dashboard building.
- **Automated insights (FACT, vendor-stated):** Zia surfaces trends, outliers, and correlations directly on dashboards without being explicitly asked.
- **"Transform by Example" and NL formula suggestions (FACT, vendor-stated):** Users can transform a column's data by giving output examples, or generate formulas by describing intent in natural language.
- **AutoML predictive modeling (FACT, vendor-stated):** Supports predictive analytics/what-if simulation.
- **Customer sentiment on AI specifically:** NOT OBSERVED — the review themes gathered in this pass (Section 5) did not isolate AI/Zia-specific feedback; needs a dedicated search pass ("Zoho Analytics Zia reviews complaints").

## 11. Mobile Experience
NOT OBSERVED — mobile app existence is referenced in general vendor ecosystem materials but was not independently confirmed or reviewed for Zoho Analytics specifically in this pass (UNVERIFIED — needs confirmation).

## 12. Security & Permissions
- **Fine-grained permissions / row-level security (FACT, vendor-stated, zoho.com/analytics, retrieved 2026-09-10):** Mentioned as part of the collaborative-sharing feature set.
- Roles/permissions model detail, SSO/2FA availability: NOT OBSERVED — not yet researched from public security/compliance documentation.

## 13. Strengths / Weaknesses
- **Best features (CUSTOMER FEEDBACK + vendor FACT):** Ease of use for standard/self-service reporting; native Zoho ecosystem data integration; dashboard visual variety and clarity; "Ask Zia" natural-language query layer (vendor-claimed differentiator, sentiment not independently confirmed).
- **Weakest features (CUSTOMER FEEDBACK):** Feature depth/flexibility versus Tableau/Power BI for advanced analysis; handling of large datasets and multi-dataset/complex joins; learning curve reported by some users despite the "ease of use" praise from others (mixed signal, likely correlated with use-case complexity).

## 14. Competitive Score
Not yet scored — scoring requires the full category benchmark (see `../03-Benchmarks/bi-analytics.md`), which is itself marked in-progress pending dedicated competitor records for more than the two stubs created so far.

## 15. What We Should Learn
- **RECOMMENDATION — adopt:** Per-account (not strictly per-user) pricing model paired with a generous, permanent free tier (10,000 rows / 5 workspaces) as a low-friction entry point — derived from Section 2 FACT pricing structure.
- **RECOMMENDATION — adopt:** Natural-language query layer ("Ask Zia") that returns chart + numbers + interpretation in one step — reduces reliance on SQL/dashboard-building skill for casual users (derived from Section 10 vendor FACT; independent sentiment verification still needed before treating this as a proven win).
- **RECOMMENDATION — investigate before adopting:** Whether the reported "flexibility/feature-depth gap" vs. Tableau/Power BI is a genuine product limitation or a perception gap tied to advanced/enterprise use cases outside Zoho Analytics' core SMB positioning — needs targeted review mining (derived from Section 5 CUSTOMER FEEDBACK).
- **RECOMMENDATION — avoid:** Underinvesting in large-dataset/multi-source-join performance if targeting any segment beyond SMB self-service reporting — this is Zoho Analytics' most consistent limitation theme across both G2 and Capterra (derived from Section 5 CUSTOMER FEEDBACK).

## 16. Standard Questionnaire — Full Answer Set (seetha_research_library.md §4–15)

> Retrofit pass, 2026-09-11. Every answer below is drawn only from Sections 1–15 of this same file (no new research performed). "see Section N" is used where that section directly answers the question; short direct answers repeat the evidence tag already used there; `NOT OBSERVED`/`TODO` per evidence-guidelines.md where this file has no evidence yet.

### Product Identification (§4, Q1–12)
1. What is the product? — Zoho Analytics, a self-service BI/analytics platform (see Section 1).
2. What problem does it solve? — see Section 1 (FACT, vendor-stated).
3. What category does it belong to? — BI / Analytics (see Section 1).
4. Who is the target customer? — Data analysts, business users, data engineers, data scientists (see Section 1, FACT).
5. Individuals/startups/SMBs/enterprises/multiple? — SMB and mid-market primarily, some enterprise reach (see Section 1/2, INFERENCE).
6. Major features? — see Section 3.
7. Most important workflows? — NOT OBSERVED — requires live login (see Section 3/7).
8. What platforms does it support? — Web (cloud) + on-premise edition (FACT); mobile app existence UNVERIFIED (see Section 1).
9. Web/desktop/mobile/all? — Web + on-premise confirmed; mobile not confirmed (see Section 1, Section 11 NOT OBSERVED).
10. What integrations does it provide? — 500+ connectors, Zoho suite + third-party systems (see Section 1/3, FACT).
11. What ecosystem does it belong to? — The Zoho ecosystem (see Section 1).
12. Which other products in the same company's suite does it integrate with? — Zoho CRM, Books, Desk, Creator, Projects (see Section 1, FACT).

### Business & Market (§5, Q13–26)
13. How long has the product existed? — TODO — not established in this pass (possible earlier "Zoho Reports" rebrand, unconfirmed — see Section 2).
14. How important is it within its company's ecosystem? — TODO — deep native integration with the Zoho suite is documented (Section 1, FACT) but no explicit statement of relative strategic importance was gathered.
15. What pricing plans are available? — see Section 2 (table).
16. What is included in each plan? — see Section 2 (table: users, row limits, workspaces).
17. Is there a free plan? — Yes, permanent free plan (see Section 2, FACT).
18. Is there a free trial? — Yes, 15-day trial on paid plans, no credit card required (see Section 2, FACT).
19. What limitations exist in the free/trial version? — 2 users, 10,000 rows, 5 workspaces, 3 scheduled data imports (see Section 2, FACT).
20. Approximate customer/user base? — "16,000+ customers," "3 million users" (vendor-claimed, see Section 2, FACT — not independently verified).
21. What industries use it? — TODO — not itemized beyond general target-user description in Section 1.
22. Which geographic markets are important? — TODO — not covered in this pass.
23. Market positioning? — see Section 2 (INFERENCE — affordable/easier-to-adopt vs. Tableau/Power BI for SMBs).
24. What differentiates it from competitors? — see Section 2 (Ask Zia, ecosystem integration, per-account pricing, visual data-prep pipeline, embedded analytics — FACT, vendor-stated).
25. What type of company/customer gets the most value from it? — INFERENCE — SMB/mid-market teams already inside the Zoho ecosystem (see Section 1/2).
26. Major selling points? — see Section 2 differentiators + Section 13 best features.

### Competitor Research (§6, Q27–41)
27. Who are the top competitors? — Tableau, Microsoft Power BI, Qlik Sense, Google Looker, Sisense, Domo (see Section 4).
28. Which competitor is the closest equivalent? — INFERENCE — Tableau and Power BI are the two most consistently cited direct equivalents in vendor's own comparison content (see Section 4/2).
29. Which competitor has the largest customer/user base? — TODO — not compared quantitatively across competitors.
30. Which competitor has the strongest enterprise presence? — INFERENCE — Tableau, per its premium/enterprise positioning (see Section 4).
31. Which competitor is strongest for SMBs? — TODO — not comparatively assessed among the listed competitors.
32. Which competitor is cheapest? — TODO — not directly compared in this pass.
33. Which competitor provides the most features? — TODO — not comparatively assessed.
34. Which competitor has the simplest UX? — NOT OBSERVED unless independently verified across products via live use.
35. Which competitor has the strongest automation? — TODO.
36. Which competitor has the strongest analytics? — TODO.
37. Which competitor has the strongest integrations? — TODO.
38. Which competitor has the strongest AI capabilities? — TODO — no head-to-head AI comparison performed (Zia vs. competitors' AI, see Section 10).
39. Which competitor is growing fastest? — TODO.
40. Which competitor receives the strongest customer feedback (rating)? — Per Section 4's third-party-aggregated G2 ratings, Power BI is reported highest (~4.5/5) among the competitors listed (FACT, third-party, flagged for re-verification).
41. Which competitor appears technically strongest? — mostly INFERENCE/NOT OBSERVED without live technical exploration of all competitors.

### Customer Review Research (§7, Q42–57)
42. What do customers like most? — see Section 5 (liked most).
43. What do customers dislike most? — see Section 5 (disliked most).
44. What problems are repeatedly mentioned? — see Section 5 (recurring complaints — advanced-analysis/large-dataset/complex-join limitations).
45. What features receive the most praise? — see Section 5 (recurring praise).
46. What features receive the most complaints? — see Section 5 (feature depth/flexibility for advanced use, large dataset/complex joins).
47. What do customers say about usability? — see Section 5 (reports interface described as intuitive; steep learning curve reported by some — mixed signal).
48. What do customers say about performance? — NOT OBSERVED directly; see Section 9 (absence-of-evidence signal only, no dedicated performance review-mining pass).
49. What do customers say about reliability? — NOT OBSERVED directly; see Section 9.
50. What do customers say about customer support? — NOT OBSERVED in this pass — Section 5 review themes did not isolate support-specific feedback (TODO).
51. What do customers say about pricing/value? — INFERENCE — lower price point vs. Tableau/Power BI is cited as a reason customers choose it (see Section 5/2); no direct pricing-satisfaction quotes gathered.
52. What do customers say about integrations? — see Section 5 (praised: "seamless data pull from other Zoho platforms," "broad data-connection options").
53. What do customers say about mobile applications? — NOT OBSERVED — see Section 11.
54. What do customers say about onboarding? — NOT OBSERVED — not covered in this pass (TODO).
55. What features do customers request? — NOT OBSERVED in this pass — needs a dedicated review-mining pass (see Section 5 explicit note).
56. Why do customers switch away from the product? — see Section 5 (INFERENCE — hitting scale/complexity ceilings).
57. Why do customers choose the product over competitors? — see Section 5 (INFERENCE — ecosystem usage + lower price point).

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
118. Notably strong technical patterns? — NOT OBSERVED. One indirect signal: vendor mentions an "MCP server integration" for embedded analytics (FACT, vendor-stated, see Section 8), implying a documented external API surface, but architecture is not independently observed (INFERENCE only).

### Performance & Reliability (§11, Q119–129)
119. Application load speed? — NOT OBSERVED (see Section 9).
120. Time for major screens to become interactive? — NOT OBSERVED.
121. Noticeable delays? — NOT OBSERVED.
122. Handles large datasets well? — CUSTOMER FEEDBACK (negative): "struggles handling very large datasets and complex joins" (see Section 5).
123. Reliability of important workflows? — NOT OBSERVED directly; see Section 5/9.
124. Recurring customer complaints about bugs? — see Section 5 — complaints cluster around feature depth/scale limitations rather than explicit bug reports.
125. Reported downtime? — TODO (check status-page/outage-tracker history).
126. Behavior during failures? — NOT OBSERVED.
127. Retry mechanisms available? — NOT OBSERVED.
128. Useful error messages? — NOT OBSERVED.
129. Performance change for complex workflows? — CUSTOMER FEEDBACK: difficulty integrating multiple datasets into a single report, struggles with complex joins (see Section 5).

### AI Capability Benchmarking (§12, Q130–143)
130. Does the product have AI features? — Yes, see Section 10 ("Ask Zia" and related features).
131. What AI features exist? — see Section 10 (Ask Zia, automated insights, Transform by Example, NL formula suggestions, AutoML).
132. What problems do those AI features solve? — see Section 10 (NL querying without SQL/manual dashboard-building; automated trend/outlier/correlation surfacing).
133. Does AI generate content? — TODO — "Transform by Example" and NL formula suggestions (Section 10, FACT) are generative in a narrow sense, but not framed as general content generation in the sourced material.
134. Does AI summarize information? — FACT — automated insight narratives surface trends/outliers/correlations on dashboards (see Section 10).
135. Does AI automate workflows? — Partially — AutoML predictive modeling automates model-building (FACT, see Section 10); broader workflow automation TODO.
136. Does AI provide recommendations? — FACT — visualization-recommendation engine (see Section 3) and automated insight surfacing (see Section 10).
137. Does AI analyze customer/product data? — FACT — Ask Zia answers NL questions over the user's connected data (see Section 10).
138. Does AI use company/customer context? — INFERENCE — operates over the user's own connected datasets within their account (see Section 10); broader cross-company context TODO.
139. What AI models/providers are publicly disclosed? — TODO — not disclosed in vendor materials gathered in this pass.
140. How is AI integrated into the UI? — NOT OBSERVED (requires live use); vendor-claimed placement only (see Section 10).
141. Does AI reduce the number of manual steps? — Vendor claim only (FACT, vendor-stated: "without requiring SQL or manual dashboard building," see Section 10); NOT OBSERVED independently.
142. Do customers consider the AI useful? — NOT OBSERVED — Section 10 explicitly notes review themes gathered did not isolate AI/Zia-specific feedback.
143. What limitations/complaints exist around the AI? — NOT OBSERVED (see Section 10).

### Integration Research (§13, Q144–154)
144. What integrations are available? — see Section 3 (500+ connectors: databases, data lakes/warehouses, business apps, files).
145. Which integrations are most important? — INFERENCE — native Zoho-suite connections (CRM, Books, Desk, Creator, Projects) given the ecosystem positioning (see Section 1/2); not independently confirmed as "most important."
146. Which integrations are unique? — INFERENCE — the MCP server integration for embedded analytics is a notable claimed differentiator (see Section 2); TODO for further verification.
147. How easy is integration setup? — NOT OBSERVED.
148. Does the integration require authentication? — NOT OBSERVED.
149. How is connected-account status shown? — NOT OBSERVED.
150. What happens when an integration fails? — NOT OBSERVED.
151. How are permissions handled (for integrations)? — NOT OBSERVED.
152. How are multiple connected accounts handled? — NOT OBSERVED.
153. How does the product synchronize data? — NOT OBSERVED.
154. How does it show synchronization errors? — NOT OBSERVED.

### Security & Permissions (§14, Q155–163) — publicly documented only
155. How are user roles handled? — TODO — not detailed beyond the general permissions mention in Section 12.
156. What permission levels exist? — TODO — Section 12 mentions "fine-grained permissions / row-level security" (FACT, vendor-stated) but does not enumerate specific levels.
157. How are teams/workspaces structured? — Workspaces are a named unit in the pricing structure (5 workspaces on the Free plan — see Section 2, FACT); deeper structure TODO.
158. How is access controlled? — see Section 12 (fine-grained permissions / row-level security, FACT, vendor-stated).
159. How is authentication handled? — TODO/NOT OBSERVED — not researched from public security documentation.
160. Is SSO available? — TODO/NOT OBSERVED (see Section 12 explicit).
161. Is two-factor authentication available? — TODO/NOT OBSERVED (see Section 12 explicit).
162. How are connected accounts protected? — TODO/NOT OBSERVED unless publicly documented.
163. What security/compliance information is publicly documented? — TODO — not researched in this pass.

### Mobile Experience (§15, Q164–171)
164. Is the mobile app feature-complete? — NOT OBSERVED — mobile app existence itself is unconfirmed for Zoho Analytics specifically (see Section 11).
165. Which desktop features are missing? — NOT OBSERVED.
166. How is navigation adapted for mobile? — NOT OBSERVED.
167. How is content creation handled (mobile)? — NOT OBSERVED.
168. How are notifications handled (mobile)? — NOT OBSERVED.
169. Mobile performance? — NOT OBSERVED (see Section 11).
170. What do mobile users complain about? — NOT OBSERVED (see Section 11).
171. Which competitor has the strongest mobile experience? — TODO/NOT OBSERVED — requires comparable mobile research across all competitors.

## Sources
- [Zoho Analytics — official product page](https://www.zoho.com/analytics/) — retrieved 2026-09-10
- [Zoho Analytics — official pricing page](https://www.zoho.com/analytics/pricing.html) — retrieved 2026-09-10
- [Zoho Analytics vs Power BI vs Tableau for SMBs](https://www.zoho.com/analytics/insightshq/zoho-analytics-vs-power-bi-vs-tableau-smbs-2026.html) — retrieved 2026-09-10
- [Ask Zia — Zoho Analytics Help](https://www.zoho.com/analytics/help/zia/) — retrieved 2026-09-10
- [Zoho Analytics — G2 Reviews](https://www.g2.com/products/zoho-analytics/reviews) — attempted direct fetch (HTTP 403), figures sourced via search-result aggregation, retrieved 2026-09-10 — flagged for re-verification
- [Zoho Analytics — Capterra](https://www.capterra.com/p/129749/Zoho-Analytics/) — retrieved 2026-09-10
- [Coefficient.io — Zoho Analytics Pricing 2026](https://coefficient.io/zoho-analytics-pricing) — retrieved 2026-09-10 (third-party sourced dollar figures — verify against official page)
- [subscribed.fyi — Top 3 Zoho Analytics Alternatives: Looker, Sisense, Domo](https://subscribed.fyi/zoho-analytics/alternatives/) — retrieved 2026-09-10
- Search-aggregated competitor ratings (G2 pages for Tableau, Microsoft Power BI, Qlik Sense, Google Looker) — retrieved 2026-09-10, flagged for direct re-verification against each vendor's live G2 page
