---
title: "Zoho Projects — Product Research Record"
product: "Zoho Projects"
company: "Zoho Corporation"
category: "Project & Work Management"
last_verified: "2026-09-11"
status: "in-progress"
---

# Zoho Projects — Product Research Record

> Deep UI/component/technical exploration (Sections 6–9, 11–12) requires live login and is marked NOT OBSERVED — this record currently covers Layer 1–2 research (identity, market, reviews, competitors) from public sources only, gathered 2026-09-10.

## 1. Identity
- **Company (FACT):** Zoho Corporation.
- **Category:** Project & Work Management.
- **Problem solved (FACT, vendor-stated):** Plan, track, and collaborate on projects — task/subtask hierarchies, dependencies, Gantt charts, timesheets, resource management, and workflow automation — from a single web/mobile app. (zoho.com/projects, retrieved 2026-09-10)
- **Target users / industries (INFERENCE from vendor + third-party market analysis):** Primarily SMBs and budget-conscious teams that want "enterprise-grade" PM features (Gantt, dependencies, resource planning) without enterprise-tier pricing; secondarily scaling agencies and mid-market/enterprise orgs via the Enterprise/Ultimate tiers. Zoho overall is reported to have grown its small-business customer base ~40% YoY and is separately pushing upmarket into enterprise (businesswire.com, techaisle.com — retrieved 2026-09-10), but this is a company-wide trend, not confirmed specifically for the Projects product.
- **Segment:** SMB primarily, expanding into mid-market/enterprise (INFERENCE — see above); free tier also serves very small teams (up to 5 users, FACT per zoho.com/projects/pricing.html).
- **Platforms (FACT):** Web, mobile apps (iOS/Android) — per zoho.com/projects/pricing.html "mobile apps" listed under Free plan.
- **Ecosystem / sister products it integrates with (FACT):** Google Workspace / Microsoft Office 365 integration (Free plan); Zoho CRM integration and other Zoho apps (Premium plan); Power BI integration (Enterprise plan). Source: zoho.com/projects/pricing.html, retrieved 2026-09-10.

## 2. Market & Business
- **Founded / product age:** UNVERIFIED — needs confirmation (not gathered in this pass; Zoho Projects has existed for over a decade as part of the Zoho suite, but an exact launch date was not directly sourced here).
- **Approximate customer/user base:** UNVERIFIED — needs confirmation. No product-specific user-count figure was found; only company-wide SMB growth figures (see Section 1) were located.
- **Pricing plans (FACT, per official page zoho.com/projects/pricing.html, retrieved 2026-09-10 via WebFetch — exact dollar figures were not rendered in the fetched content and are supplemented below by third-party aggregators, flagged accordingly):**

| Plan | Price (aggregator-reported) | Users/Storage | What's included | Source |
|---|---|---|---|---|
| Free | $0 | Up to 5 users, 3 projects, 5GB storage | Subtasks, whiteboard, mobile apps, 50 workflow actions/month, Google/Office 365 integration | zoho.com/projects/pricing.html (FACT — features); price confirmed $0 |
| Premium | ~$5/user/mo monthly, ~$4/user/mo annual (third-party sourced, e.g. costbench.com, comparedge.com — verify against official page) | Unlimited projects, 100GB storage | Custom views/statuses, time tracking, timesheets w/ multi-level approval, 5,000 workflow executions/mo, Zia AI, web tabs | zoho.com/projects/pricing.html (features, FACT) + aggregators (price, third-party sourced) |
| Enterprise | ~$10/user/mo monthly, ~$9/user/mo annual (third-party sourced) | +10 read-only users, add-ons | User hierarchy/teams, custom roles/permissions, SSO, 2FA, sandbox, portfolio dashboards, critical path, baseline analysis, Power BI integration, 50,000 workflow actions/mo | zoho.com/projects/pricing.html (features, FACT) + aggregators (price) |
| Ultimate | ~$15/user/mo (third-party sourced) | 15GB/user storage (min. 150GB org), 100 read-only users, 100 resources | 500,000 workflow executions/mo, unlimited custom dashboards, multi-user timesheets, 20 business calendars, contextual guidance | zoho.com/projects/pricing.html (features, FACT) + aggregators (price) |

**Pricing caveat (per evidence-guidelines.md rule 2):** Exact dollar amounts came back empty from the direct WebFetch of the official pricing page (page likely JS-rendered); the figures above are third-party aggregator-sourced (tech.co, costbench.com, comparedge.com — retrieved 2026-09-10) and **should be re-verified directly against zoho.com/projects/pricing.html** (e.g. via a rendered browser session) before external use. Feature inclusions per plan, however, were successfully extracted from the official page and are tagged FACT.
- **Free plan/trial (FACT):** Free forever plan (up to 5 users, 3 projects, 5GB, no Zia AI); separately, a 15-day free trial of paid plans, no credit card required (zoho.com/projects/pricing.html, retrieved 2026-09-10).
- **Market positioning (INFERENCE, supported by CUSTOMER FEEDBACK):** Positioned as "enterprise features at SMB prices" — G2 review-theme summary states 82% of positive reviews cite excellent value, "enterprise features at SMB prices" (G2, retrieved 2026-09-10). Third-party framing: "the premier affordable project management software" for teams needing Gantt/dependencies on a strict budget (comparetiers.com, retrieved 2026-09-10 — third-party sourced).
- **Key differentiators claimed by vendor (FACT, vendor-stated):** Zia AI (generative AI, natural language search/assistant, predictive analytics/anomaly detection, resource-workload optimization, 70+ language translation); deep integration with the wider Zoho ecosystem (CRM, etc.); "Projects Plus" — a newer unified, AI-rich tier aimed at mid-sized/enterprise orgs (businesswire.com, zoho.com/blog/projects, retrieved 2026-09-10).

## 3. Features
**FACT, vendor/review-stated, not independently verified via login in this pass:**
- Task management: tasks, subtasks, task lists, dependencies, milestones
- Gantt charts (including a "global Gantt chart across projects" on Enterprise+)
- Resource management: resource utilization charts, workload/capacity views
- Time tracking & timesheets, with multi-level timesheet approval (Premium+)
- Workflow automation / "Blueprint"-style automations (workflow action limits scale by plan: 50 → 5,000 → 50,000 → 500,000/month)
- Custom views, custom statuses, custom fields, custom roles/permissions (Enterprise+)
- Portfolio dashboards, critical path analysis, baseline analysis (Enterprise+)
- Zia AI: generative AI, natural-language project assistant ("Zia Bot"), predictive analytics/anomaly detection, Zia Translate (70+ languages), ChatGPT integration
- Reporting: advanced reports (Premium+), unlimited custom dashboards (Ultimate)
- Whiteboard/collaboration tools
- Integrations: Google Workspace, Microsoft Office 365, Zoho CRM and other Zoho apps, Power BI, custom domains (Enterprise+)
- Security: SSO, two-factor authentication, sandbox environment (Enterprise+)
- Mobile apps (iOS/Android)

Most important workflows and integration depth ("native" vs. "via Zapier"): NOT OBSERVED — requires live product exploration or deeper documentation review; not established in this pass.

## 4. Competitors
| Competitor | Type | Notes |
|---|---|---|
| Asana | Direct | Frequently named as a top Zoho Projects alternative/competitor (saasworthy.com, joinsecret.com — retrieved 2026-09-10). Cited as stronger for ease of use and creative-team collaboration (third-party comparison, unverified independently). |
| Monday.com | Direct | Named as a top competitor; positioned as more visually customizable/flexible (third-party comparison). |
| ClickUp | Direct, lower-cost/feature-dense | Named as a top alternative; noted for a more generous free tier (unlimited tasks, advanced views) vs. Zoho's capped free tier (third-party comparison, saasworthy.com/goodday.work — retrieved 2026-09-10). |
| Jira (Atlassian) | Direct — software/dev-team focused | Named alongside Zoho Projects for teams managing sprints/bugs/cross-functional dev work (blog.scalefusion.com — retrieved 2026-09-10). Distinct sub-segment (engineering teams) vs. Zoho's general PM focus. |
| Microsoft Project | Enterprise-tier / indirect | Named as an alternative for teams already in the Microsoft ecosystem (saasworthy.com — retrieved 2026-09-10). |
| Trello, Smartsheet, Wrike, Basecamp, ProofHub, Celoxis, GoodDay | Adjacent / SMB / niche alternatives | Named in aggregator "alternatives" lists (goodday.work, larksuite.com, saasworthy.com) as candidates for Layer 2 research — **not yet independently verified as primary competitors**; carried over as candidates only. |

## 5. Customer Reviews
- **Source(s):**
  - G2: 4.3/5, 300+ reviews (FACT — exact count not resolved beyond "300+" in this pass; direct G2 page fetch returned HTTP 403, figure comes from a search-result summary citing G2, retrieved 2026-09-10 — **flagged for re-verification** with a live G2 fetch).
  - Capterra: 4.5/5, ~830–855 reviews (FACT, per capterra.com search-result summary, retrieved 2026-09-10; source noted the count as "830" and separately "855 verified reviews" — minor discrepancy, both figures retained, flagged for re-verification).
- **Liked most (CUSTOMER FEEDBACK):** Intuitive/easy-to-use interface; comprehensive task/project tracking (task hierarchies, dependencies, Gantt, milestones); strong value for money — "enterprise features at SMB prices" (82% of positive G2 reviews per search-result summary); smooth team management, role-based views; deep customization of dashboards.
- **Disliked most (CUSTOMER FEEDBACK):** Steep learning curve / onboarding complexity for newcomers (62% of critical G2 reviews per search-result summary; one source states onboarding can take "2-3 weeks" before teams are comfortable — third-party sourced, unverified against primary review text); mobile app is less feature-rich, less responsive, and slower than desktop; some project views described as cluttered and hard to customize.
- **Recurring complaints (CUSTOMER FEEDBACK):** Learning curve/initial complexity; mobile app parity gap; interface/view clutter in some configurations.
- **Recurring praise (CUSTOMER FEEDBACK):** Ease of use post-onboarding; affordability/value; depth of task and resource management features; role-based collaboration.
- **Requested features:** NOT OBSERVED in this pass — needs a dedicated review-mining pass (sort G2/Capterra by "most recent" / "lowest rating").
- **Why customers switch away:** INFERENCE only — correlates with needing a shallower learning curve (per learning-curve complaint theme) or better mobile parity. Needs direct review quotes to upgrade to CUSTOMER FEEDBACK.
- **Why customers choose it over competitors:** CUSTOMER FEEDBACK (aggregate theme) — cost/value relative to feature depth ("enterprise features at SMB prices") is the most consistently cited reason.
- **Customer support sentiment (CUSTOMER FEEDBACK):** One third-party summary states "64% of users rate support positively," noting helpful responses though complex issues can take time to resolve (thebusinessdive.com-style aggregator summary, retrieved 2026-09-10 — third-party sourced, not a primary G2/Capterra statistic; flagged for verification).

## 6. UI/UX
NOT OBSERVED — requires live login/exploration of the actual app. Flagged as the next research step.

## 7. User Flows
NOT OBSERVED — same as above.

## 8. Technical Observations
NOT OBSERVED — DOM/network/API capture requires live session exploration; not performed in this pass.

## 9. Performance & Reliability
NOT OBSERVED directly via live use. CUSTOMER FEEDBACK signal: no explicit desktop performance/reliability complaints surfaced in the review themes gathered so far (absence of evidence, not evidence of absence); mobile performance is reported as slower (see Section 5/11).

## 10. AI Features
**FACT, vendor-stated (zoho.com/blog/projects, zoho.com/projects/ai.html, businesswire.com — retrieved 2026-09-10):**
- "Zia" is Zoho's cross-product AI engine, surfaced in Projects via: generative AI (content creation/refinement, ChatGPT-integrated), a natural-language assistant ("Zia Bot" — create projects, assign tasks, update progress via NL commands), predictive analytics (trend forecasting, anomaly detection in timelines, what-if analysis, smart alerts), resource optimization (workload distribution/bottleneck avoidance), and Zia Translate (70+ languages).
- "Zoho Projects Plus" is a newer, separately-branded unified AI-rich tier aimed at mid-sized/enterprise organizations (businesswire.com, retrieved 2026-09-10).
- Zia AI features are gated to paid plans only — excluded from Free (per Section 2 pricing table, FACT).
- Customer sentiment on AI features specifically: NOT OBSERVED — no review-mining pass performed on AI-feature sentiment in this pass.

## 11. Mobile Experience
- **CUSTOMER FEEDBACK:** Mobile apps exist for iOS/Android but are reported as less feature-rich, less responsive/intuitive, and slower than the desktop app; complex task editing, detailed Gantt manipulation, and comprehensive reporting are reported to work better on desktop (multiple aggregator review summaries — Capterra-sourced themes, retrieved 2026-09-10). This mirrors the mobile-parity gap pattern already documented for Zoho Social (see `zoho-social.md` §11), suggesting a possible cross-product pattern — INFERENCE, not yet confirmed across other Zoho products beyond these two.

## 12. Security & Permissions
- **FACT (vendor-stated, zoho.com/projects/pricing.html):** SSO and two-factor authentication (2FA) available on the Enterprise plan and above; a sandbox environment is also available on Enterprise+. Custom roles/permissions are available starting at the Enterprise tier. Deeper permissions-model detail (granular role definitions, audit logs, etc.): NOT OBSERVED — not documented in the sources gathered this pass.

## 13. Strengths / Weaknesses
- **Best features (CUSTOMER FEEDBACK):** Value for money relative to feature depth (Gantt, dependencies, resource management) at SMB-friendly pricing; ease of use once past onboarding; strong task/resource management depth.
- **Weakest features (CUSTOMER FEEDBACK):** Onboarding/learning-curve steepness; mobile app feature parity and responsiveness; view/dashboard clutter in some configurations.

## 14. Competitive Score
Not yet scored — scoring requires the full category benchmark (see `../03-Benchmarks/project-work-management.md`) and complete competitor records, which are only stubbed for Asana and ClickUp so far.

## 15. What We Should Learn
- **RECOMMENDATION — adopt:** Bundling genuinely enterprise-grade PM capability (Gantt, dependencies, resource/portfolio views) into low-priced SMB tiers is a strongly validated value driver (derived from Section 5 CUSTOMER FEEDBACK — "enterprise features at SMB prices" cited in 82% of positive reviews per the G2 summary gathered).
- **RECOMMENDATION — investigate before adopting:** The reported 2-3 week onboarding/learning-curve issue suggests feature breadth without progressive-disclosure UX carries a real cost; worth deep-diving Zoho Projects' actual onboarding flow live before drawing UI/UX conclusions (currently NOT OBSERVED — Section 6/7).
- **RECOMMENDATION — avoid:** Shipping a mobile app materially behind the desktop feature set — this is now a repeated pattern across two Zoho products researched in this library (Zoho Social §11, Zoho Projects §11), which raises it from a single-product complaint to a plausible **INFERENCE** about a company-wide mobile-investment gap — worth flagging for further cross-product verification rather than treating as confirmed.

## 16. Standard Questionnaire — Full Answer Set (seetha_research_library.md §4–15)

> Every question below is answered using only evidence already recorded in Sections 1–15 of this record. Where this file already contains the answer, a short direct answer or a `see Section N` pointer is given, carrying the same evidence tag as the source material. Where this file has no evidence, the question is marked `NOT OBSERVED` (requires live-app access) or `TODO` (publicly researchable but not covered in this pass).

### Product Identification (§4, Q1–12)
1. What is the product? — Zoho Projects, a web/mobile project & work management platform (see Section 1).
2. What problem does it solve? — see Section 1 (task/subtask hierarchies, dependencies, Gantt charts, timesheets, resource management, workflow automation).
3. What category does it belong to? — Project & Work Management (see Section 1 / frontmatter).
4. Who is the target customer? — see Section 1 (INFERENCE — SMBs and budget-conscious teams wanting enterprise-grade PM features).
5. Individuals/startups/SMBs/enterprises/multiple? — SMB primarily, expanding into mid-market/enterprise (see Section 1, Segment).
6. Major features? — see Section 3.
7. Most important workflows? — NOT OBSERVED — Section 3 explicitly states this was not established in this pass.
8. What platforms does it support? — Web, mobile apps (iOS/Android) (FACT, see Section 1).
9. Web/desktop/mobile/all? — Web + mobile confirmed; a dedicated desktop client is not mentioned in this file — TODO.
10. What integrations does it provide? — see Section 1/3 (Google Workspace, Microsoft Office 365, Zoho CRM/other Zoho apps, Power BI).
11. What ecosystem does it belong to? — The Zoho ecosystem (FACT, see Section 1).
12. Which other products in the company's suite does it integrate with? — Zoho CRM and other Zoho apps (FACT, see Section 1).

### Business & Market (§5, Q13–26)
13. How long has the product existed? — TODO/UNVERIFIED — Section 2 states founded/age was not confirmed in this pass.
14. How important is it within its company's ecosystem? — TODO — not directly addressed beyond the ecosystem-integration facts in Section 1.
15. What pricing plans are available? — see Section 2 (Free, Premium, Enterprise, Ultimate).
16. What is included in each plan? — see Section 2 pricing table.
17. Is there a free plan? — Yes (FACT, see Section 2).
18. Is there a free trial? — Yes, 15-day, no credit card required (FACT, see Section 2).
19. What limitations exist in the free/trial version? — see Section 2 (Free: up to 5 users, 3 projects, 5GB storage, no Zia AI).
20. Approximate customer/user base? — UNVERIFIED — see Section 2 (no product-specific figure found).
21. What industries use it? — TODO — Section 1 addresses segment (SMB/enterprise) but not specific industries.
22. Which geographic markets are important? — TODO — not covered in this pass.
23. Market positioning? — see Section 2 (INFERENCE/CUSTOMER FEEDBACK — "enterprise features at SMB prices").
24. What differentiates it from competitors? — see Section 2 (Zia AI, Zoho ecosystem integration, Projects Plus).
25. What type of company/customer gets the most value from it? — INFERENCE — budget-conscious SMBs wanting enterprise-grade PM capability without enterprise pricing (see Sections 1–2).
26. Major selling points? — see Section 2 (differentiators) and Section 13 (best features).

### Competitor Research (§6, Q27–41)
27. Who are the top competitors? — see Section 4 (Asana, Monday.com, ClickUp, Jira, Microsoft Project, others).
28. Which competitor is the closest equivalent? — Asana, most frequently named as a direct alternative (see Section 4).
29. Which competitor has the largest customer/user base? — TODO — not compared in this record.
30. Which competitor has the strongest enterprise presence? — TODO.
31. Which competitor is strongest for SMBs? — TODO — ClickUp is noted for a more generous free tier (Section 4) but "strongest for SMBs" is not directly established.
32. Which competitor is cheapest? — TODO — not directly price-compared in this file.
33. Which competitor provides the most features? — TODO.
34. Which competitor has the simplest UX? — NOT OBSERVED unless independently verified across products via live use.
35. Which competitor has the strongest automation? — TODO.
36. Which competitor has the strongest analytics? — TODO.
37. Which competitor has the strongest integrations? — TODO.
38. Which competitor has the strongest AI capabilities? — TODO.
39. Which competitor is growing fastest? — TODO.
40. Which competitor receives the strongest customer feedback (rating)? — TODO — no direct rating comparison across competitors in this file.
41. Which competitor appears technically strongest? — mostly INFERENCE/NOT OBSERVED without live technical exploration of all competitors.

### Customer Review Research (§7, Q42–57)
42. What do customers like most? — see Section 5.
43. What do customers dislike most? — see Section 5.
44. What problems are repeatedly mentioned? — see Section 5 (recurring complaints: learning curve, mobile parity gap, view clutter).
45. What features receive the most praise? — see Section 5 (recurring praise).
46. What features receive the most complaints? — see Section 5 (onboarding/learning curve, mobile app, cluttered views).
47. What do customers say about usability? — see Section 5 (intuitive interface liked; steep learning curve disliked).
48. What do customers say about performance? — NOT OBSERVED directly; see Section 9 (no explicit desktop performance complaints surfaced).
49. What do customers say about reliability? — see Section 9 (absence of evidence noted, not evidence of absence).
50. What do customers say about customer support? — see Section 5 ("64% of users rate support positively," third-party sourced).
51. What do customers say about pricing/value? — see Section 5/2 ("enterprise features at SMB prices").
52. What do customers say about integrations? — TODO — not specifically covered in Section 5.
53. What do customers say about mobile applications? — see Section 5/11.
54. What do customers say about onboarding? — see Section 5 (onboarding can take "2–3 weeks," third-party sourced).
55. What features do customers request? — NOT OBSERVED — Section 5 explicitly states this needs a dedicated review-mining pass.
56. Why do customers switch away from the product? — INFERENCE only (see Section 5) — needs direct review quotes to upgrade to CUSTOMER FEEDBACK.
57. Why do customers choose the product over competitors? — see Section 5 (CUSTOMER FEEDBACK — cost/value relative to feature depth).

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
80. Onboarding handling? — NOT OBSERVED (CUSTOMER FEEDBACK about onboarding difficulty exists in Section 5, but visual/UI handling of onboarding was not observed).
81. Responsive behavior? — NOT OBSERVED.
82. Accessibility handling? — NOT OBSERVED.

### Workflow Benchmarking (§9, Q83–99) — requires live product access
83. Steps required (core workflow)? — NOT OBSERVED (see Section 7).
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
108. Authentication handling? — NOT OBSERVED technically (publicly documented auth *options* are in Section 12 / Q159–161 instead).
109. Session-state maintenance? — NOT OBSERVED.
110. Caching handling? — NOT OBSERVED.
111. File/media upload handling? — NOT OBSERVED.
112. Real-time update handling? — NOT OBSERVED.
113. Third-party services integrated (technically visible)? — NOT OBSERVED (publicly-documented integration *names* are in Q144 instead).
114. Technologies visible in browser/network layer? — NOT OBSERVED.
115. Error handling? — NOT OBSERVED.
116. Retry handling? — NOT OBSERVED.
117. Frontend/backend interaction patterns? — NOT OBSERVED.
118. Notably strong technical patterns? — NOT OBSERVED.

### Performance & Reliability (§11, Q119–129)
119. Application load speed? — NOT OBSERVED.
120. Time for major screens to become interactive? — NOT OBSERVED.
121. Noticeable delays? — NOT OBSERVED.
122. Handles large datasets well? — NOT OBSERVED (no CUSTOMER FEEDBACK on this surfaced — see Section 5).
123. Reliability of important workflows? — NOT OBSERVED directly; see Section 9.
124. Recurring customer complaints about bugs? — see Section 5 (no bug-specific complaints surfaced; complaints are UX/mobile-parity focused, not bug reports).
125. Reported downtime? — TODO (check status-page/outage-tracker history).
126. Behavior during failures? — NOT OBSERVED.
127. Retry mechanisms available? — NOT OBSERVED.
128. Useful error messages? — NOT OBSERVED.
129. Performance change for complex workflows? — NOT OBSERVED.

### AI Capability Benchmarking (§12, Q130–143)
130. Does the product have AI features? — Yes, see Section 10.
131. What AI features exist? — see Section 10 (Zia: generative AI, Zia Bot NL assistant, predictive analytics, resource optimization, Zia Translate).
132. What problems do those AI features solve? — see Section 10 (content creation, NL project control, forecasting/anomaly detection, workload optimization, translation).
133. Does AI generate content? — Yes — generative AI/content creation and refinement, ChatGPT-integrated (FACT, see Section 10).
134. Does AI summarize information? — TODO — not explicitly stated in Section 10.
135. Does AI automate workflows? — Yes — Zia Bot natural-language commands (create projects, assign tasks, update progress) and resource-workload optimization (FACT, see Section 10).
136. Does AI provide recommendations? — Yes — predictive analytics, smart alerts, what-if analysis (FACT, see Section 10).
137. Does AI analyze customer/product data? — Partial — analyzes project timelines/trends for anomaly detection (FACT, Section 10); analysis of "customer data" specifically is TODO.
138. Does AI use company/customer context? — TODO — not addressed in this pass.
139. What AI models/providers are publicly disclosed? — Zia is Zoho's own AI engine; a ChatGPT integration is also mentioned (FACT, see Section 3/10). No other third-party model providers disclosed.
140. How is AI integrated into the UI? — NOT OBSERVED (requires live use); vendor-claimed placement only.
141. Does AI reduce the number of manual steps? — NOT OBSERVED / vendor claim only.
142. Do customers consider the AI useful? — NOT OBSERVED — Section 10 explicitly states no AI-sentiment review-mining was performed.
143. What limitations/complaints exist around the AI? — NOT OBSERVED (see Section 10).

### Integration Research (§13, Q144–154)
144. What integrations are available? — see Section 1/3 (Google Workspace, Microsoft Office 365, Zoho CRM/other Zoho apps, Power BI, custom domains).
145. Which integrations are most important? — INFERENCE — Zoho CRM (ecosystem) and Google Workspace/Office 365 (Free-tier default) plausibly most-used; not confirmed. TODO.
146. Which integrations are unique? — TODO.
147. How easy is integration setup? — NOT OBSERVED.
148. Does the integration require authentication? — NOT OBSERVED.
149. How is connected-account status shown? — NOT OBSERVED.
150. What happens when an integration fails? — NOT OBSERVED.
151. How are permissions handled (for integrations)? — NOT OBSERVED.
152. How are multiple connected accounts handled? — NOT OBSERVED.
153. How does the product synchronize data? — NOT OBSERVED.
154. How does it show synchronization errors? — NOT OBSERVED.

### Security & Permissions (§14, Q155–163) — publicly documented only
155. How are user roles handled? — Custom roles/permissions available starting at the Enterprise tier (FACT, see Section 12).
156. What permission levels exist? — TODO — granular role definitions not documented in sources gathered this pass (see Section 12).
157. How are teams/workspaces structured? — TODO — not documented in this pass.
158. How is access controlled? — Via custom roles/permissions (Enterprise+); deeper detail NOT OBSERVED (see Section 12).
159. How is authentication handled? — SSO and 2FA available on Enterprise+ (FACT, see Section 12).
160. Is SSO available? — Yes, Enterprise plan and above (FACT, see Section 12).
161. Is two-factor authentication available? — Yes, Enterprise plan and above (FACT, see Section 12).
162. How are connected accounts protected? — TODO/NOT OBSERVED — not publicly documented in sources gathered this pass.
163. What security/compliance information is publicly documented? — SSO, 2FA, sandbox environment (Enterprise+) are documented (FACT, see Section 12); deeper compliance certifications (SOC2, ISO, etc.) are TODO.

### Mobile Experience (§15, Q164–171)
164. Is the mobile app feature-complete? — No — reported as less feature-rich than desktop (CUSTOMER FEEDBACK, see Section 11).
165. Which desktop features are missing? — Partial — complex task editing, detailed Gantt manipulation, and comprehensive reporting reported to work better on desktop (CUSTOMER FEEDBACK, see Section 11).
166. How is navigation adapted for mobile? — NOT OBSERVED.
167. How is content creation handled (mobile)? — NOT OBSERVED.
168. How are notifications handled (mobile)? — NOT OBSERVED.
169. Mobile performance? — see Section 11 (CUSTOMER FEEDBACK — reported slower than desktop).
170. What do mobile users complain about? — see Section 11 (less responsive/intuitive, slower, weaker on complex features).
171. Which competitor has the strongest mobile experience? — TODO/NOT OBSERVED — requires comparable mobile research across all competitors.

## Sources
- [Zoho Projects — official pricing page](https://www.zoho.com/projects/pricing.html) — retrieved 2026-09-10 (WebFetch)
- [Zoho Projects — official AI page](https://www.zoho.com/projects/ai.html) — retrieved 2026-09-10
- [Zoho Blog — Introducing Zia's features in Zoho Projects](https://www.zoho.com/blog/projects/transforming-project-management-with-zia.html) — retrieved 2026-09-10
- [Zoho Blog — Introducing Zoho Projects Plus](https://www.zoho.com/blog/projects/introducing-zohoprojectsplus.html) — retrieved 2026-09-10
- [Businesswire — Zoho Launches Projects Plus](https://www.businesswire.com/news/home/20250311762238/en/Zoho-Launches-Projects-Plus-a-Unified-Data-Driven-and-AI-rich-Project-Management-Platform-Empowering-Mid-sized-and-Enterprise-Organizations) — retrieved 2026-09-10
- [Businesswire — Zoho Builds on 40% YoY Small Business Customer Growth](https://www.businesswire.com/news/home/20250903498081/en/Zoho-Builds-on-40-YoY-Small-Business-Customer-Growth-by-Expanding-Toolkit-for-SMBs) — retrieved 2026-09-10
- [Techaisle — Zoho, A Great Bet for Mid-Market Firms](https://techaisle.com/blog/497-zoho-a-great-bet-for-mid-market-firms) — retrieved 2026-09-10 (third-party analyst)
- [G2 — Zoho Projects Reviews](https://www.g2.com/products/zoho-projects/reviews) — direct fetch returned HTTP 403 2026-09-10; rating/count instead sourced via search-result summary of this page, retrieved 2026-09-10 — **flag for re-verification with a live fetch**
- [Capterra — Zoho Projects Reviews](https://www.capterra.com/p/169455/Zoho-Projects/reviews/) — retrieved 2026-09-10 (via search-result summary)
- Pricing aggregators (third-party sourced, flagged for re-verification): [tech.co](https://tech.co/project-management-software/zoho-projects-pricing-review), [costbench.com](https://costbench.com/software/project-management/zoho-projects/), [comparedge.com](https://comparedge.com/tools/zoho-projects/pricing) — retrieved 2026-09-10
- Competitor/alternatives lists (third-party, retrieved 2026-09-10): [saasworthy.com](https://www.saasworthy.com/product-alternative/157/zoho-projects), [joinsecret.com](https://www.joinsecret.com/zoho-projects/alternatives), [goodday.work](https://www.goodday.work/blog/best-zoho-projects-alternatives/), [blog.scalefusion.com](https://blog.scalefusion.com/best-jira-alternatives-and-competitors/)
- [comparetiers.com — Zoho Projects Pricing Plans and Tiers](https://comparetiers.com/tools/zoho-projects) — retrieved 2026-09-10 (third-party positioning language)
