---
product: "Zoho CRM"
company: "Zoho Corporation"
category: "CRM & Sales"
last_verified: "2026-09-11"
status: "in-progress"
---

# Zoho CRM — Product Research Record

> Deep UI/component/technical exploration (Sections 6–9, 11–12) requires live login and is marked NOT OBSERVED — this record covers Layer 1–2 research (identity, market, reviews, competitors) from public sources only, gathered 2026-09-10.

## 1. Identity
- **Company (FACT):** Zoho Corporation.
- **Category:** CRM & Sales.
- **Problem solved (FACT, vendor-stated):** Manages leads, contacts, deals/pipeline, and sales-team activity, with automation, analytics, and AI (Zia) to help sales teams track and close deals. (Source: zoho.com/crm pricing/marketing pages, retrieved 2026-09-10.)
- **Product age (FACT):** Zoho CRM launched in 2005; parent company Zoho founded 1996. (Source: business2business.co.in "Zoho Products" article and Zoho 30th-anniversary coverage, retrieved 2026-09-10 — third-party sourced, verify against an official Zoho timeline page.)
- **Target users / industries (INFERENCE from marketing + reviews):** SMBs and mid-market sales teams wanting an affordable, highly customizable CRM; also used by larger orgs that adopt the broader Zoho/Zoho One suite. Reviewers describe it as good for teams "transitioning from spreadsheets" as well as businesses needing deep customization (CUSTOMER FEEDBACK, G2, retrieved 2026-09-10).
- **Segment:** SMB and mid-market primarily, with enterprise-tier plans (Enterprise/Ultimate) available; INFERENCE based on pricing ladder topping out well below Salesforce enterprise pricing.
- **Platforms (FACT):** Web, iOS/Android mobile apps — mobile app existence and functionality confirmed in Capterra reviews ("the mobile app has retained a significant amount of functionality," CUSTOMER FEEDBACK, retrieved 2026-09-10).
- **Ecosystem / sister products (FACT):** Part of the Zoho One suite; integrates with Zoho Social, Zoho Desk, Zoho Analytics, Zoho Marketing Automation, and other Zoho apps (zoho.com/one, retrieved 2026-09-10). Also bundled into "Zoho CRM Plus," which combines CRM with helpdesk, live chat, email marketing, social, surveys, project management, and analytics (FACT, zoho.com/crm/zohocrm-pricing.html, retrieved 2026-09-10).

## 2. Market & Business

### Pricing (FACT — fetched directly from zoho.com/crm/zohocrm-pricing.html, retrieved 2026-09-10; note: page returned INR pricing (₹) for the region/session used to fetch it — USD figures below are commonly cited by third-party aggregators and are UNVERIFIED against the official page in this pass)
| Plan | Price (as fetched, INR/user/month) | What's included (incremental) | Source |
|---|---|---|---|
| Free | ₹0/user/month, up to 3 users, "forever free" | Contact management, workflow automation, custom email templates, tasks/meetings/calls, standard reports, APIs (5,000 calls/day), mobile apps | zoho.com/crm/zohocrm-pricing.html, retrieved 2026-09-10 |
| Standard | ₹800/user/month | Email integration, mass emails, built-in calling, multiple sales pipelines, calendar integration, web-to-lead forms, sales forecasting, data enrichment, custom modules, HIPAA compliance | Same |
| Professional ("Most Popular" per vendor) | ₹1,400/user/month | AI agents, process management, inventory management, predictive intelligence, unlimited reports, CPQ, custom portals, customer journeys, web-to-case forms, Google Ads integration | Same |
| Enterprise | ₹2,400/user/month | Multi-team management, reporting hierarchy, custom buttons/functions, extended field types, approval processes, account-based marketing, developer sandbox, field-level encryption, extended Zia AI capabilities, QuickBooks integration | Same |
| Ultimate | ₹2,600/user/month | Enhanced feature limits, onboarding consulting/migration assistance, custom AI/ML, advanced data prep | Same |

**Third-party USD figures (aggregator-sourced, e.g. leadhaste.com/zeeg.me, retrieved 2026-09-10 — NOT independently confirmed against the official USD pricing page in this pass):** Standard ~$14/user/mo, Professional ~$23/user/mo (annual) / ~$35 (monthly), Enterprise ~$40/user/mo, Ultimate ~$52/user/mo. **Action item:** re-fetch the official page with a US locale/currency parameter before quoting USD numbers externally — this pass only retrieved INR pricing.

- **Free plan/trial (FACT):** Free edition capped at 3 users, "forever free," covers leads/deals/basic automation; free trials available on paid editions; vendor states "not bound by any contracts or commitments" (zoho.com/crm/zohocrm-pricing.html, retrieved 2026-09-10). Annual billing advertised as "up to 34%" cheaper than monthly (same source).
- **Approximate customer/user base (FACT, company-wide, not CRM-specific):** Zoho Corporation surpassed 1 million paying customers and 150 million users across its full product line (Zoho, ManageEngine, Qntrl, TrainerCentral) as of its 30th-year milestone (BusinessWire/Morningstar coverage, retrieved 2026-09-10). **Caveat:** this figure is company-wide, not Zoho CRM-specific; no CRM-only user count was found in this pass — mark product-specific user count UNVERIFIED.
- **Market positioning (INFERENCE):** Positioned as the affordable, highly customizable, "most features per dollar" CRM — differentiated by value/breadth versus Salesforce's depth or HubSpot's UX polish (INFERENCE drawn from multiple third-party comparison articles, e.g. blog.salesflare.com, scalestation.io, retrieved 2026-09-10).
- **Key differentiators claimed by vendor/third-party comparisons (FACT — as claimed, not independently verified):** Custom modules included at lower tiers (10 per tier per one comparison source), unlimited workflow automation, built-in marketing capabilities without add-on fees, Zia AI assistant, broad multi-LLM support (Gemini, Claude, Cohere, DeepSeek, SiliconFlow) as of the Q1 2026 update (blog.zoho.com/crm/q1-2026-update.html, retrieved 2026-09-10).

## 3. Features (FACT, vendor/review-stated, not independently verified via login in this pass)
- Lead, contact, account, and deal/pipeline management; multiple sales pipelines
- Workflow automation and process management (Professional+)
- Zia AI: lead/deal scoring (1–100, based on historical conversion patterns), win-probability prediction, anomaly detection, automation suggestions, generative "build a module from a text description" capability (Enterprise/Ultimate only — Zia requires Enterprise or Ultimate plan per vendor docs, retrieved 2026-09-10)
- CPQ (Configure-Price-Quote), custom portals, customer journey orchestration (Professional+)
- Inventory management (Professional+)
- Account-based marketing, approval processes, field-level encryption, developer sandbox (Enterprise+)
- Reporting/analytics: standard reports (Free), unlimited reports (Professional+), advanced analytics (Ultimate)
- Mobile apps (iOS/Android)
- APIs (rate-limited on Free tier: 5,000 calls/day per vendor pricing page)
- Integrations: native integrations across the Zoho ecosystem (Desk, Social, Analytics, Marketing Automation); third-party integrations (QuickBooks cited at Enterprise tier, Google Ads at Professional tier) — depth of "native vs. via Zapier" for the broader integration marketplace NOT OBSERVED in this pass, needs a dedicated marketplace review.

## 4. Competitors
| Competitor | Type | Notes |
|---|---|---|
| Salesforce (Sales Cloud) | Direct — enterprise leader | G2: 4.4/5, 25,732 reviews; Capterra: 18,750 reviews (FACT, retrieved 2026-09-10). Positioned as deepest sales automation, largest app ecosystem (AppExchange, "7,000+ integrations" per third-party comparison), most mature AI (Einstein) — CUSTOMER/vendor-comparison-sourced positioning, not independently verified. |
| HubSpot CRM | Direct — UX/inbound-growth leader | G2: 4.4/5, 13,000+ reviews (aggregated across HubSpot hubs); Capterra: 4.5/5, 4,422 reviews (FACT, retrieved 2026-09-10). Positioned as winning on ease of use, adoption, and native inbound workflows (forms, chat, lead scoring) — third-party comparison sourced. |
| Pipedrive | Direct — SMB sales-pipeline focus | G2: 4.3/5, 3,172 reviews; Capterra: 3,052 reviews (FACT, retrieved 2026-09-10). Positioned as best-in-class visual drag-and-drop pipeline, narrower feature scope than Zoho/Salesforce/HubSpot (third-party comparison sourced). |
| Freshsales (Freshworks CRM) | Direct — SMB/lower-cost | G2 rating cited around 4.5/5 from 3,000+ reviews in aggregate Freshworks coverage; a separate Findstack citation gives 4.5/5 from 1,104 reviews — sources disagree on exact count (FACT with caveat, retrieved 2026-09-10). Positioned as affordable with strong support. |
| monday CRM (monday.com) | Emerging / lower-cost, visual-work-management-adjacent | Cited at 4.6/5 from 728 reviews per one aggregator (Findstack); Gartner Peer Insights separately shows 4.1/5 from 45 reviews for monday.com broadly — sources diverge significantly, treat as UNVERIFIED pending direct G2/Capterra product-page confirmation (retrieved 2026-09-10). Positioned around customizable pipeline visualization. |
| Microsoft Dynamics 365 Sales | Enterprise-tier alternative | Named in general CRM-market comparisons as an enterprise-tier competitor; ratings/reviews NOT gathered in this pass — carried over as a candidate, not yet independently verified. |

## 5. Customer Reviews
- **Source:** G2 — sources disagree slightly: one G2 page cites 4.1/5 from 2,893 reviews, another cites "2,945 reviews" total (FACT, retrieved 2026-09-10, discrepancy likely reflects page-update timing — flagged, needs a single canonical re-check). Capterra — 6,983 verified reviews (FACT, retrieved 2026-09-10); an aggregate star figure was not independently confirmed in this pass beyond "customer support ratings hover around 4/5" — mark overall Capterra star rating UNVERIFIED pending direct page fetch.
- **Liked most (CUSTOMER FEEDBACK, G2/Capterra themes, retrieved 2026-09-10):** Easy to manage leads/customer data in one place; user-friendly for daily tasks (follow-ups, deal tracking); strong automation that saves time on repetitive work; centralizes contacts, companies, deals, tasks, notes, and interaction history; extensive customizability described as "a perfect fit" for varied business/sales processes; mobile app retains significant functionality ("most useful mobile app among many CRMs tried" — one reviewer quote paraphrase); free tier valued by teams moving off spreadsheets; reduces manual data entry via automated sales processes; ready-to-use business reports/analytics.
- **Disliked most (CUSTOMER FEEDBACK):** Substantial learning curve given depth of customization/features; advanced features and settings take time to understand; system can feel slow when handling multiple modules together; limited when advanced customization or complex workflows are needed; reporting/analytics described as not as deep as enterprise alternatives; one reviewer noted difficulty updating information fields for contacts/accounts during uploads; customer support quality/responsiveness described as inconsistent by some reviewers despite an overall ~4/5 support rating.
- **Recurring complaints:** Learning curve; occasional performance slowdown with many modules active; support responsiveness inconsistency (CUSTOMER FEEDBACK, as above).
- **Recurring praise:** Value for money / feature breadth per dollar; automation; centralization of customer data; customizability (CUSTOMER FEEDBACK, as above).
- **Requested features:** NOT OBSERVED in this pass — needs a dedicated review-mining pass sorted by "most recent"/"lowest rating" on G2 and Capterra.
- **Why customers switch away / choose it:** INFERENCE only — "choose it" correlates with wanting affordability + customization + Zoho ecosystem fit; "switch away" plausibly correlates with needing simpler UX (vs. HubSpot) or deeper enterprise governance/AI maturity (vs. Salesforce), but this is not yet backed by direct switch-reason quotes — needs upgrade to CUSTOMER FEEDBACK with sourced quotes.

## 6. UI/UX
NOT OBSERVED — requires live login/exploration of the actual app; not performed in this pass.

## 7. User Flows
NOT OBSERVED — same as above.

## 8. Technical Observations
NOT OBSERVED — DOM/network/API capture requires live session exploration; not performed in this pass.

## 9. Performance & Reliability
NOT OBSERVED directly via live session. CUSTOMER FEEDBACK signal (Section 5): some reviewers report the system "can occasionally feel slow when handling multiple modules together" — a mild, non-critical performance theme, not corroborated by direct technical observation.

## 10. AI Features
- **Zia AI (FACT, vendor-documented, retrieved 2026-09-10):** Lead and deal scoring (1–100 scale from historical conversion data), win-probability prediction that updates with activity, anomaly detection, email intelligence, and proactive automation suggestions (Zia detects repetitive patterns — e.g. tasks always created after a stage change — and suggests workflows to automate them).
- **Generative AI (FACT, vendor blog, Q1 2026 update):** Users can create CRM modules by describing them in plain language; Zia generates the module structure, fields, and layout.
- **LLM support (FACT, vendor blog, retrieved 2026-09-10):** Zoho CRM supports multiple underlying LLMs — Gemini, Claude, Cohere, DeepSeek (China data center only), and SiliconFlow (China data center only).
- **Plan gating (FACT):** Zia requires an Enterprise or Ultimate plan; enabled via Settings → Zia module.
- **Customer sentiment on AI specifically:** NOT OBSERVED in this pass — general review themes (Section 5) did not isolate AI-feature-specific sentiment; needs a dedicated search ("Zoho CRM Zia reviews").

## 11. Mobile Experience
- **CUSTOMER FEEDBACK (Capterra, retrieved 2026-09-10):** Mobile app "has retained a significant amount of functionality" and was described by at least one reviewer as "the most useful mobile app among many CRMs tried" — a notably more positive mobile signal than Zoho Social's mobile complaints. Feature-parity specifics vs. desktop NOT OBSERVED (no live exploration performed).

## 12. Security & Permissions
- **FACT (vendor pricing page, retrieved 2026-09-10):** HIPAA compliance available from the Standard plan; field-level encryption available at the Enterprise tier; developer sandbox at Enterprise tier. Roles/permissions model detail and SSO/2FA specifics NOT OBSERVED — not yet researched from dedicated security documentation.

## 13. Strengths / Weaknesses
- **Best features (CUSTOMER FEEDBACK):** Centralized, customizable data model; automation that reduces manual entry; strong value-for-money/feature breadth; comparatively strong mobile app.
- **Weakest features (CUSTOMER FEEDBACK):** Learning curve for advanced customization; reporting/analytics depth vs. enterprise-grade alternatives; inconsistent support responsiveness reported by some users; occasional performance slowdown with many active modules.

## 14. Competitive Score
Not yet scored — scoring requires the full category benchmark (see `../03-Benchmarks/crm-sales.md`); competitor records beyond stubs are not yet complete.

## 15. What We Should Learn
- **RECOMMENDATION — adopt:** Centralize contacts/companies/deals/tasks/notes/interaction history in one connected view — a consistently praised pattern (derived from Section 5 CUSTOMER FEEDBACK).
- **RECOMMENDATION — adopt with care:** Automation that proactively suggests workflows based on detected repetitive patterns (Zia's automation-suggestion behavior) is a differentiated AI pattern worth studying further, though customer sentiment specifically on this feature is NOT OBSERVED yet (derived from Section 10 FACT, flagged for follow-up).
- **RECOMMENDATION — investigate before adopting:** The "affordable + highly customizable" positioning is a double-edged pattern — it drives the value perception but is also the direct cause of the learning-curve complaint; any comparable breadth-of-customization approach should pair with stronger onboarding/guardrails (derived from Section 5 CUSTOMER FEEDBACK, both praise and complaint sides).
- **RECOMMENDATION — avoid:** Letting reporting/analytics depth lag behind enterprise competitors while marketing "unlimited reports" — reviewers distinguish quantity of reports from depth of analysis (derived from Section 5 CUSTOMER FEEDBACK).

## 16. Standard Questionnaire — Full Answer Set (seetha_research_library.md §4–15)

> Retrofitted per `00-Framework/templates/product-template.md` Section 16. Every answer below is derived only from Sections 1–15 of this file — no new research was performed for this section.

### Product Identification (§4, Q1–12)
1. What is the product? — Zoho CRM, a CRM & Sales platform for managing leads, contacts, deals/pipeline, and sales-team activity (FACT — Section 1).
2. What problem does it solve? — see Section 1 (manages leads/contacts/deals/pipeline with automation, analytics, and AI/Zia to help sales teams track and close deals).
3. What category does it belong to? — CRM & Sales (Section 1).
4. Who is the target customer? — SMBs and mid-market sales teams; also larger orgs adopting Zoho One (Section 1, INFERENCE).
5. Individuals/startups/SMBs/enterprises/multiple? — SMB and mid-market primarily, with Enterprise/Ultimate tiers available (Section 1, Segment — INFERENCE).
6. Major features? — see Section 3.
7. Most important workflows? — lead/contact/deal/pipeline management with automation and Zia scoring per Section 3; step-by-step workflow mapping NOT OBSERVED (Section 7).
8. What platforms does it support? — Web and mobile (iOS/Android) (Section 1, FACT).
9. Web/desktop/mobile/all? — Web + mobile; no desktop app mentioned (Section 1).
10. What integrations does it provide? — Zoho ecosystem apps (Desk, Social, Analytics, Marketing Automation), plus QuickBooks and Google Ads at specific tiers (Section 3, FACT); marketplace breadth beyond these NOT OBSERVED.
11. What ecosystem does it belong to? — Zoho One suite; also bundled into Zoho CRM Plus (Section 1, FACT).
12. Which other products in the same company's suite does it integrate with? — Zoho Social, Zoho Desk, Zoho Analytics, Zoho Marketing Automation (Section 1, FACT).

### Business & Market (§5, Q13–26)
13. How long has the product existed? — Launched 2005 (Section 1, FACT, third-party sourced — flagged for verification against an official Zoho timeline).
14. How important is it within its company's ecosystem? — INFERENCE — central role implied by its inclusion in Zoho One and the standalone Zoho CRM Plus bundle (Section 1); no direct revenue/usage-share data — TODO.
15. What pricing plans are available? — see Section 2 table (Free, Standard, Professional, Enterprise, Ultimate).
16. What is included in each plan? — see Section 2 table.
17. Is there a free plan? — Yes, Free edition up to 3 users, "forever free" (Section 2, FACT).
18. Is there a free trial? — Yes, on paid editions (Section 2, FACT).
19. What limitations exist in the free/trial version? — Free capped at 3 users with a basic feature set per Section 2; further trial-specific limitations beyond "not bound by contracts" — TODO.
20. Approximate customer/user base? — Company-wide (not CRM-specific) figure of 1M+ paying customers / 150M users (Section 2, FACT); CRM-specific user count UNVERIFIED/TODO.
21. What industries use it? — Not explicitly stated in this file; INFERENCE of broad SMB/mid-market usage (Section 1); specific industry breakdown — TODO.
22. Which geographic markets are important? — TODO — not covered in this pass.
23. Market positioning? — Affordable, highly customizable, "most features per dollar" (Section 2, INFERENCE).
24. What differentiates it from competitors? — see Section 2 (included custom modules, unlimited workflow automation, built-in marketing, Zia AI, multi-LLM support).
25. What type of company/customer gets the most value from it? — Teams transitioning from spreadsheets and those wanting affordability + customization (Section 1 INFERENCE; Section 5 CUSTOMER FEEDBACK).
26. Major selling points? — Value/feature breadth per dollar, automation, customizability, Zia AI (Sections 2–3).

### Competitor Research (§6, Q27–41)
27. Who are the top competitors? — see Section 4 (Salesforce, HubSpot, Pipedrive, Freshsales, monday CRM, Microsoft Dynamics 365 Sales).
28. Which competitor is the closest equivalent? — Salesforce Sales Cloud, listed as the direct enterprise-leader competitor (Section 4, FACT).
29. Which competitor has the largest customer/user base? — INFERENCE — Salesforce, based on its far larger G2/Capterra review counts (25,732/18,750) vs. Zoho's (~2,900/6,983) (Section 4/5).
30. Which competitor has the strongest enterprise presence? — Salesforce (Section 4, described as "enterprise leader").
31. Which competitor is strongest for SMBs? — INFERENCE — Pipedrive, described as SMB-focused pipeline specialist (Section 4); not conclusively benchmarked — TODO.
32. Which competitor is cheapest? — TODO — no cross-competitor price comparison table exists in this file.
33. Which competitor provides the most features? — INFERENCE — Salesforce, given its larger ecosystem/integration claims (Section 4); not independently verified.
34. Which competitor has the simplest UX? — NOT OBSERVED unless independently verified across products via live use.
35. Which competitor has the strongest automation? — TODO — not directly compared in this file.
36. Which competitor has the strongest analytics? — INFERENCE — Salesforce, per its "deepest sales automation" positioning (Section 4); analytics-specific comparison — TODO.
37. Which competitor has the strongest integrations? — Salesforce, cited at "7,000+ integrations" per third-party comparison (Section 4).
38. Which competitor has the strongest AI capabilities? — Salesforce (Einstein), described as "most mature AI" (Section 4).
39. Which competitor is growing fastest? — TODO — not covered in this pass.
40. Which competitor receives the strongest customer feedback (rating)? — HubSpot (Capterra 4.5/5) is the highest rating cited among competitors in Section 4; not a definitive cross-checked ranking — TODO.
41. Which competitor appears technically strongest? — mostly INFERENCE/NOT OBSERVED without live technical exploration of all competitors.

### Customer Review Research (§7, Q42–57)
42. What do customers like most? — see Section 5.
43. What do customers dislike most? — see Section 5.
44. What problems are repeatedly mentioned? — see Section 5 (learning curve, occasional slowdown, support inconsistency).
45. What features receive the most praise? — see Section 5 (automation, centralization of data, customizability, mobile app).
46. What features receive the most complaints? — see Section 5 (advanced customization/settings, reporting/analytics depth).
47. What do customers say about usability? — see Section 5 (user-friendly for daily tasks, but a learning curve for advanced customization/settings).
48. What do customers say about performance? — see Section 5/9 ("can feel slow when handling multiple modules together").
49. What do customers say about reliability? — NOT OBSERVED/TODO — reliability is not explicitly addressed beyond the mild performance theme in Section 5/9.
50. What do customers say about customer support? — see Section 5 (inconsistent responsiveness despite ~4/5 overall support rating).
51. What do customers say about pricing/value? — see Section 5 (strong value-for-money/feature breadth per dollar).
52. What do customers say about integrations? — TODO — not explicitly covered in Section 5.
53. What do customers say about mobile applications? — see Section 11 (positive: "most useful mobile app among many CRMs tried").
54. What do customers say about onboarding? — TODO — not covered in this pass.
55. What features do customers request? — NOT OBSERVED in this pass (Section 5 explicit).
56. Why do customers switch away from the product? — INFERENCE only, not yet backed by sourced quotes (Section 5 explicit).
57. Why do customers choose the product over competitors? — INFERENCE only, not yet backed by sourced quotes (Section 5 explicit).

### UI/UX Benchmarking (§8, Q58–82) — requires live product access
58. Overall UI style? — NOT OBSERVED (Section 6).
59. Is navigation easy to understand? — NOT OBSERVED (Section 6).
60. Sidebar structure? — NOT OBSERVED (Section 6).
61. Dashboard structure? — NOT OBSERVED (Section 6).
62. Clicks required for common workflows? — NOT OBSERVED (Section 6/7).
63. Important screens? — NOT OBSERVED (Section 6).
64. Important UI components? — NOT OBSERVED (Section 6).
65. Button design? — NOT OBSERVED (Section 6).
66. Form design? — NOT OBSERVED (Section 6).
67. Table design? — NOT OBSERVED (Section 6).
68. Card design? — NOT OBSERVED (Section 6).
69. Tab design? — NOT OBSERVED (Section 6).
70. Modal design? — NOT OBSERVED (Section 6).
71. Dropdown design? — NOT OBSERVED (Section 6).
72. Filter design? — NOT OBSERVED (Section 6).
73. Search design? — NOT OBSERVED (Section 6).
74. Notification handling? — NOT OBSERVED (Section 6).
75. Error display? — NOT OBSERVED (Section 6).
76. Loading-state display? — NOT OBSERVED (Section 6).
77. Empty-state display? — NOT OBSERVED (Section 6).
78. Confirmation-message display? — NOT OBSERVED (Section 6).
79. Permissions/roles representation? — NOT OBSERVED (Section 6/12).
80. Onboarding handling? — NOT OBSERVED (Section 6); Ultimate-tier "onboarding consulting/migration assistance" is a vendor feature claim, not an observation (Section 2 FACT).
81. Responsive behavior? — NOT OBSERVED (Section 6).
82. Accessibility handling? — NOT OBSERVED (Section 6).

### Workflow Benchmarking (§9, Q83–99) — requires live product access
83. Steps required (for the product's core workflow)? — NOT OBSERVED (Section 7).
84. Clicks required? — NOT OBSERVED (Section 7).
85. Screens involved? — NOT OBSERVED (Section 7).
86. Components involved? — NOT OBSERVED (Section 7).
87. Information required? — NOT OBSERVED (Section 7).
88. Validations that occur? — NOT OBSERVED (Section 7).
89. Errors that can occur? — NOT OBSERVED (Section 7).
90. What happens after submission? — NOT OBSERVED (Section 7).
91. Feedback the user receives? — NOT OBSERVED (Section 7).
92. Linear or flexible workflow? — NOT OBSERVED (Section 7).
93. Can the user save progress? — NOT OBSERVED (Section 7).
94. Can the user undo/recover actions? — NOT OBSERVED (Section 7).
95. Shortest workflow among competitors? — NOT OBSERVED.
96. Clearest workflow among competitors? — NOT OBSERVED.
97. Best user feedback among competitors? — NOT OBSERVED.
98. Easiest for a new user? — NOT OBSERVED.
99. Best for an experienced user? — NOT OBSERVED.

### Backend / Technical Benchmarking (§10, Q100–118) — requires live product access
100. Frontend technology used? — NOT OBSERVED (Section 8).
101. Backend architecture inferred? — NOT OBSERVED (Section 8).
102. APIs/network calls triggered? — NOT OBSERVED (Section 8); only a public rate-limit figure is known (5,000 calls/day on Free tier, Section 3 FACT).
103. What happens on button click (technical chain)? — NOT OBSERVED (Section 8).
104. HTTP methods used? — NOT OBSERVED (Section 8).
105. Data sent? — NOT OBSERVED (Section 8).
106. Response returned? — NOT OBSERVED (Section 8).
107. REST/GraphQL/other? — NOT OBSERVED (Section 8).
108. Authentication handling? — NOT OBSERVED technically (Section 8); publicly documented auth options are covered under Q159–161 instead.
109. Session-state maintenance? — NOT OBSERVED (Section 8).
110. Caching handling? — NOT OBSERVED (Section 8).
111. File/media upload handling? — NOT OBSERVED (Section 8).
112. Real-time update handling? — NOT OBSERVED (Section 8).
113. Third-party services integrated (technically visible)? — NOT OBSERVED (Section 8); publicly-documented integration names are covered under Q10/Q144 instead.
114. Technologies visible in browser/network layer? — NOT OBSERVED (Section 8).
115. Error handling? — NOT OBSERVED (Section 8).
116. Retry handling? — NOT OBSERVED (Section 8).
117. Frontend/backend interaction patterns? — NOT OBSERVED (Section 8).
118. Notably strong technical patterns? — NOT OBSERVED (Section 8).

### Performance & Reliability (§11, Q119–129)
119. Application load speed? — NOT OBSERVED (Section 9).
120. Time for major screens to become interactive? — NOT OBSERVED (Section 9).
121. Noticeable delays? — see Section 9 CUSTOMER FEEDBACK signal (mild, non-critical slowdown reported with many modules active).
122. Handles large datasets well? — NOT OBSERVED directly; CUSTOMER FEEDBACK proxy: see Section 5/9 (slowdown with multiple modules).
123. Reliability of important workflows? — NOT OBSERVED directly; CUSTOMER FEEDBACK proxy: see Section 5/9.
124. Recurring customer complaints about bugs? — see Section 5 (performance slowdown theme); no explicit "bugs" complaints recorded — TODO for bug-specific mining.
125. Reported downtime? — TODO (check status-page/outage-tracker history).
126. Behavior during failures? — NOT OBSERVED (Section 9).
127. Retry mechanisms available? — NOT OBSERVED (Section 9).
128. Useful error messages? — NOT OBSERVED (Section 9).
129. Performance change for complex workflows? — NOT OBSERVED directly; Section 9 signal on multi-module slowdown.

### AI Capability Benchmarking (§12, Q130–143)
130. Does the product have AI features? — Yes, Zia — see Section 10.
131. What AI features exist? — see Section 10 (lead/deal scoring, win-probability prediction, anomaly detection, email intelligence, automation suggestions, generative module creation).
132. What problems do those AI features solve? — see Section 10 (surfacing likely-to-convert leads/deals, detecting repetitive patterns to automate, flagging anomalies).
133. Does AI generate content? — Yes — generative "build a module from a text description" capability (Section 10, FACT).
134. Does AI summarize information? — TODO — not explicitly stated in Section 10.
135. Does AI automate workflows? — Yes — proactive automation suggestions based on detected repetitive patterns (Section 10, FACT).
136. Does AI provide recommendations? — Yes — automation suggestions and win-probability/lead scoring function as recommendations (Section 10, FACT).
137. Does AI analyze customer/product data? — Yes — lead/deal scoring is based on historical conversion patterns (Section 10, FACT).
138. Does AI use company/customer context? — INFERENCE — scoring/prediction models draw on historical conversion data, implying use of company/customer context (Section 10).
139. What AI models/providers are publicly disclosed? — Gemini, Claude, Cohere, DeepSeek (China data center only), SiliconFlow (China data center only) (Section 10, FACT).
140. How is AI integrated into the UI? — NOT OBSERVED (requires live use); known FACT: enabled via Settings → Zia module (Section 10).
141. Does AI reduce the number of manual steps? — NOT OBSERVED/vendor claim only; INFERENCE from related CUSTOMER FEEDBACK that automation broadly "reduces manual data entry" (Section 5).
142. Do customers consider the AI useful? — NOT OBSERVED in this pass — general review themes did not isolate AI-specific sentiment (Section 10 explicit gap).
143. What limitations/complaints exist around the AI? — NOT OBSERVED for sentiment; one known limitation is plan-gating — Zia requires Enterprise or Ultimate plan (Section 10, FACT).

### Integration Research (§13, Q144–154)
144. What integrations are available? — see Section 3 (native Zoho ecosystem apps; QuickBooks at Enterprise, Google Ads at Professional).
145. Which integrations are most important? — INFERENCE — native Zoho ecosystem apps (Desk, Social, Analytics, Marketing Automation), given the suite-wide bundling emphasis (Section 1/3).
146. Which integrations are unique? — TODO — not assessed in this pass.
147. How easy is integration setup? — NOT OBSERVED.
148. Does the integration require authentication? — NOT OBSERVED.
149. How is connected-account status shown? — NOT OBSERVED.
150. What happens when an integration fails? — NOT OBSERVED.
151. How are permissions handled (for integrations)? — NOT OBSERVED.
152. How are multiple connected accounts handled? — NOT OBSERVED.
153. How does the product synchronize data? — NOT OBSERVED.
154. How does it show synchronization errors? — NOT OBSERVED.

### Security & Permissions (§14, Q155–163) — publicly documented only
155. How are user roles handled? — TODO/NOT OBSERVED — not documented beyond Section 3's mention of "multi-team management, reporting hierarchy" at Enterprise tier.
156. What permission levels exist? — NOT OBSERVED (Section 12 explicit gap).
157. How are teams/workspaces structured? — "Multi-team management, reporting hierarchy" available at Enterprise tier (Section 3, FACT); further structural detail NOT OBSERVED.
158. How is access controlled? — Field-level encryption available at Enterprise tier (Section 12, FACT); broader access-control model NOT OBSERVED.
159. How is authentication handled? — TODO/NOT OBSERVED — not documented in this file.
160. Is SSO available? — TODO — not mentioned in this file.
161. Is two-factor authentication available? — TODO — not mentioned in this file.
162. How are connected accounts protected? — TODO/NOT OBSERVED unless publicly documented.
163. What security/compliance information is publicly documented? — HIPAA compliance from Standard plan; field-level encryption and developer sandbox at Enterprise tier (Section 12, FACT).

### Mobile Experience (§15, Q164–171)
164. Is the mobile app feature-complete? — see Section 11 (positive CUSTOMER FEEDBACK signal, but feature-parity specifics vs. desktop NOT OBSERVED).
165. Which desktop features are missing? — NOT OBSERVED unless documented in release notes/reviews.
166. How is navigation adapted for mobile? — NOT OBSERVED.
167. How is content creation handled (mobile)? — NOT OBSERVED.
168. How are notifications handled (mobile)? — NOT OBSERVED.
169. Mobile performance? — see Section 11 CUSTOMER FEEDBACK ("most useful mobile app among many CRMs tried").
170. What do mobile users complain about? — NOT OBSERVED — Section 11 records only positive feedback; complaint-specific mining not performed — TODO.
171. Which competitor has the strongest mobile experience? — TODO/NOT OBSERVED — requires comparable mobile research across all competitors.

## Sources
- [Zoho CRM — official pricing page](https://www.zoho.com/crm/zohocrm-pricing.html) — retrieved 2026-09-10 (fetched INR pricing; USD figures below are third-party and unverified)
- [Zoho One — official app catalog](https://www.zoho.com/one/) — retrieved 2026-09-10
- [Zoho CRM Q1 2026 Update — official blog](https://blog.zoho.com/index.php/crm/q1-2026-update.html) — retrieved 2026-09-10
- [G2 — Zoho CRM Reviews](https://www.g2.com/products/zoho-crm/reviews) — retrieved 2026-09-10
- [G2 — Zoho CRM Pros and Cons](https://www.g2.com/products/zoho-crm/reviews?qs=pros-and-cons) — retrieved 2026-09-10
- [Capterra — Zoho CRM Reviews](https://www.capterra.com/p/155928/Zoho-CRM/reviews/) — retrieved 2026-09-10
- [G2 — Salesforce Sales Cloud comparison data via search summary](https://www.capterra.com/p/61368/Salesforce/reviews/) — retrieved 2026-09-10
- [Capterra — HubSpot CRM Reviews](https://www.capterra.com/p/152373/HubSpot-CRM/reviews/) — retrieved 2026-09-10
- [G2 — Pipedrive (via g2.com/sellers/pipedrive)](https://www.g2.com/sellers/pipedrive) — retrieved 2026-09-10
- [Capterra — Pipedrive Reviews](https://www.capterra.com/p/132666/Pipedrive/reviews/) — retrieved 2026-09-10
- [G2 — Freshsales/Freshworks CRM Reviews](https://www.g2.com/products/freshworks-crm/reviews) — retrieved 2026-09-10
- [Findstack — Freshsales vs monday CRM](https://findstack.com/compare/freshsales-vs-monday-crm) — retrieved 2026-09-10 (third-party aggregator, flagged for re-verification)
- [Salesflare blog — Salesforce vs HubSpot vs Zoho vs Pipedrive comparison](https://blog.salesflare.com/compare-salesforce-zoho-hubspot-pipedrive) — retrieved 2026-09-10
- [BusinessWire — Zoho Corporation Surpasses One Million Customers](https://www.businesswire.com/news/home/20260218799668/en/Zoho-Corporation-Surpasses-One-Million-Customers) — retrieved 2026-09-10
- [business2business.co.in — Zoho Products list/launch years](https://business2business.co.in/article/5537/zoho-products-list-launch-years-and-uses) — retrieved 2026-09-10 (third-party sourced, verify against official Zoho materials)
