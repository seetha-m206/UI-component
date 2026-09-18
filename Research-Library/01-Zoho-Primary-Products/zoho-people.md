---
product: "Zoho People"
company: "Zoho Corporation"
category: "HR & Recruiting"
last_verified: "2026-09-11"
status: "in-progress"
---

# Zoho People — Product Research Record

> Deep UI/component/technical exploration (Sections 6–9, 11–12) requires live login and is marked NOT OBSERVED — this record covers Layer 1–2 research (identity, market, reviews, competitors) from public sources only, following the Zoho Social worked example.

## 1. Identity
- **Company (FACT):** Zoho Corporation.
- **Category:** HR & Recruiting (HRMS/HCM).
- **Problem solved (FACT, vendor-stated, zoho.com/people, retrieved 2026-09-10):** Cloud-based, AI-powered HRMS that consolidates core HR functions — employee records, time/attendance, onboarding, performance, payroll, and analytics — into one centralized system.
- **Target users / industries (FACT, vendor-stated + INFERENCE):** Vendor states it serves "businesses of all types and sizes," with explicit emphasis on small-to-mid-sized companies ("best for startups") as well as enterprise organizations. INFERENCE: given free-tier user caps and per-user pricing structure, SMB is likely the primary volume segment, with enterprise served via the top "Enterprise" edition and custom quotes for 500+ users.
- **Segment:** SMB primary, enterprise secondary (INFERENCE — based on tiered per-user pricing capped at named editions, with a custom-quote enterprise path).
- **Platforms (FACT):** Web; mobile apps for iOS and Android (vendor-stated, zoho.com/people).
- **Ecosystem / sister products (FACT + CUSTOMER FEEDBACK):** Integrates with other Zoho apps and third-party applications (vendor-stated); also sold as part of the broader "Zoho People Plus" HCM bundle (Capterra listing, retrieved 2026-09-10). Reviewers note integration with other business tools as a workflow-automation benefit (search-summary CUSTOMER FEEDBACK, retrieved 2026-09-10).

## 2. Market & Business
- **Founded / product age:** TODO — not verified in this pass.
- **Approximate customer/user base (FACT, vendor-stated, zoho.com/people, retrieved 2026-09-10):** "Over 50,000 businesses and 1 million users across 165+ countries." This is a vendor claim, not independently verified.
- **Awards (FACT, vendor-stated):** Gartner Peer Insights Customer Choice 2025; G2 Leader Enterprise Winter 2025 (per zoho.com/people, retrieved 2026-09-10 — vendor-published claim, not independently cross-checked against G2's award archive).

### Pricing (editions confirmed on official page; dollar amounts third-party-sourced — flagged for re-verification)
| Plan | Price (per user/month, annual billing) | What's included | Source |
|---|---|---|---|
| Free | $0 — user cap disputed: official page states "up to 53 users"; a third-party aggregator (softwarefinder-class summary) states "up to 10 users" | Employee database, leave management, vacation planning, document storage | Official (zoho.com/people/zohopeople-pricing.html, WebFetch retrieved 2026-09-10) for feature list; user-cap figure conflicts across sources — **UNVERIFIED, needs direct confirmation** |
| Essential HR | $1.25/user/mo (third-party aggregate figure — spotsaas.com/tinyteam.io, retrieved 2026-09-10; not confirmed as an exact dollar figure on the official page fetch) | Onboarding/offboarding workflows, document tracking, basic shift creation, HR reports, Zia AI bot | Official page confirms feature set; price figure is third-party-sourced |
| Professional | $2/user/mo (third-party aggregate figure, retrieved 2026-09-10) | Attendance management (incl. facial recognition per one aggregator), timesheets with project billing, overtime tracking, shift rotation/roster management | Official page confirms feature set; price figure is third-party-sourced |
| Premium | $3/user/mo (spotsaas.com) vs. $3.50/user/mo (tinyteam.io) — sources disagree, retrieved 2026-09-10 | Performance management, compensation management, engagement tools, advanced analytics/workflow | Official page confirms feature set; price figures conflict across third-party sources |
| Enterprise | $5/user/mo per one aggregator; official page directs orgs of 500+ users to "request a quote" (custom pricing) | HR helpdesk, learning management system (LMS), sandbox environment | Official page + third-party aggregate, retrieved 2026-09-10 |

**FACT caveat:** The official Zoho pricing page (fetched 2026-09-10) confirms plan names, feature tiers, a 30-day free trial on paid plans, a 5-user minimum for paid tiers, and a "request a quote" path above 500 users — but the automated fetch did not surface exact dollar figures, and third-party aggregators disagree with each other on Premium pricing ($3 vs $3.50) and on the free-tier user cap (10 vs 53). **Action item:** re-verify exact prices and the free-tier cap directly against zoho.com/people/zohopeople-pricing.html in a browser before quoting externally.

- **Free plan/trial (FACT, official page):** A forever-free tier exists (employee database, leave management, document storage, no onboarding/document workflows); paid plans carry a 30-day free trial and a minimum of 5 users.
- **Market positioning (INFERENCE):** Similar to Zoho Social, positioned as a broad, affordably-priced, ecosystem-integrated HRMS rather than a narrow best-in-class point solution — vendor pricing is materially lower per-seat than BambooHR/Rippling/Gusto (see Section 4), suggesting a value/breadth positioning rather than premium/enterprise-first.
- **Key differentiators claimed by vendor (FACT, vendor-stated):** "Zia" AI assistant described as "intelligent, privacy-focused," positioned to "answer, act, and analyze" to automate HR tasks and support decisions; broad single-system consolidation of HR functions (recruitment through payroll through LMS).

## 3. Features (FACT, vendor-stated, zoho.com/people, retrieved 2026-09-10 — not independently verified via login)
- Recruitment and onboarding with automated workflows
- Core HR / employee records management, time and attendance tracking
- Document storage and tracking
- Performance evaluations and compensation management
- Learning management system (LMS) for employee development
- Payroll processing with statutory compliance (region scope not specified in this pass)
- HR analytics and custom reporting
- Employee engagement surveys
- Employee self-service portal (check-in, leave requests, profile updates) — CUSTOMER-FEEDBACK-corroborated (search-summary retrieved 2026-09-10)
- Mobile apps (iOS/Android)
- Zia AI assistant
- Integrations with Zoho ecosystem and third-party apps (depth "native" vs. "via connector" — NOT OBSERVED, needs dedicated pass)

## 4. Competitors
| Competitor | Type | Notes |
|---|---|---|
| BambooHR | Direct — closest SMB equivalent | G2: 4.4/5, ~5,641 reviews (FACT, g2.com, retrieved 2026-09-10). Capterra ~4.6/5, 3,000+ reviews (search-summary, needs direct re-verification). Ease-of-use rating 92% on G2 vs. Gusto 87%, Rippling 84% (search-summary CUSTOMER FEEDBACK, retrieved 2026-09-10). Pricing reported $10–$25/employee/mo with a ~$250/mo floor and possible add-on/implementation fees (third-party aggregate, retrieved 2026-09-10) — notably higher per-seat than Zoho People's reported figures. |
| Rippling | Direct — enterprise-capable, broader HR+IT+finance platform | G2: 4.8/5, ~16,121 reviews (FACT, g2.com, retrieved 2026-09-10); NPS reported ~90 (third-party aggregate, needs re-verification). Core HR module reported from $8/employee/mo + $35/mo base fee, opaque custom-quote pricing overall (third-party aggregate, retrieved 2026-09-10). Praised in reviews for mobile app and desktop UI polish (search-summary CUSTOMER FEEDBACK). |
| Gusto | Direct/adjacent — payroll-led HR platform, US-focused | G2: 4.6/5, ~8,504 reviews (FACT, g2.com, retrieved 2026-09-10). Pricing reported $49–$180/mo tiered plus $6/contractor/mo add-on (third-party aggregate, retrieved 2026-09-10); no free plan/trial per G2 data summary. |
| Keka | Direct — named "best overall alternative" in one alternatives roundup | Positioning claim only (search-summary, unverified source authority — retrieved 2026-09-10); ratings/pricing NOT gathered in this pass. |
| Workday HCM, SAP SuccessFactors HCM, Oracle Fusion Cloud HCM, UKG Pro/Ready, Dayforce, isolved People Cloud | Enterprise-tier alternatives | Named across multiple alternatives-listing sites (G2, Gartner Peer Insights, TrustRadius, GetApp — retrieved 2026-09-10) as the enterprise-segment comparison set; Workday and SAP SuccessFactors both cited with G2 ~4.1/5 in one search summary — **UNVERIFIED, needs direct G2 confirmation**. |
| Zenefits, factoHR, Spine HR Suite, HRMantra, greytHR, Pocket HRMS, BrightHR, Qandle, HROne, Paylocity | Lower-cost / regional / emerging | Named in alternatives-listing aggregator content (softwaresuggest.com, saasworthy.com — retrieved 2026-09-10); **not independently verified** — carried over as candidates for a future research pass, not confirmed competitors. |

## 5. Customer Reviews
- **Source:** G2 — 4.4/5, 415 reviews (FACT, g2.com/products/zoho-people/reviews, retrieved 2026-09-10). Capterra — 4.4/5, 321 reviews (FACT, capterra.com/p/110931/Zoho-People/reviews, retrieved 2026-09-10).
- **Liked most (CUSTOMER FEEDBACK, search-summary of G2/Capterra themes, retrieved 2026-09-10):** Consolidating many HR tasks (attendance, leave, expense tracking, performance reviews) into one platform; intuitive interface described as needing little/no training; employee self-service via mobile/web (check-in, leave requests, profile updates); competitive pricing relative to feature breadth; integration with other business/Zoho tools.
- **Disliked most (CUSTOMER FEEDBACK):** Setup/configuration described as overwhelming due to a "complex, database-heavy interface" and technical scripting required for advanced features; workflow/permission settings confusing until properly configured; mobile app described as less polished than the web app, sometimes slow; some users report location-sync issues and delays in attendance-entry fetching; an API limitation of a maximum 200 records per request noted in at least one Capterra-sourced review theme.
- **Recurring complaints:** Mobile app polish/performance gap vs. desktop (echoes the same pattern found in Zoho Social's record); onboarding/setup complexity for advanced configuration.
- **Recurring praise:** All-in-one consolidation of HR functions; ease of day-to-day use once configured; pricing/value.
- **Requested features:** NOT OBSERVED in this pass — needs a dedicated review-mining pass (sort G2/Capterra by "most recent" and "lowest rating").
- **Why customers switch away / choose it:** INFERENCE only — "choose it" correlates with SMBs wanting broad HR coverage at lower per-seat cost than BambooHR/Rippling/Gusto; "switch away" plausibly correlates with needing deeper mobile parity or simpler initial setup, but this is not yet backed by direct switch-away review quotes. Needs upgrade to CUSTOMER FEEDBACK with a dedicated pass.

## 6. UI/UX
NOT OBSERVED — requires live login/exploration of the actual app; not performed in this pass.

## 7. User Flows
NOT OBSERVED — same as above.

## 8. Technical Observations
NOT OBSERVED — DOM/network/API capture requires live session exploration; not performed in this pass. One data point surfaced indirectly: a Capterra-sourced review theme mentions an API limit of 200 records per request (CUSTOMER FEEDBACK, not independently verified against Zoho's API docs).

## 9. Performance & Reliability
NOT OBSERVED directly via live session. CUSTOMER FEEDBACK signal: mobile app "slow or prone to performance issues" is a recurring theme (see Section 5/11); no explicit desktop/web performance complaints surfaced in the review themes gathered so far (absence of evidence, not evidence of absence).

## 10. AI Features
- **Zia (FACT, vendor-stated, zoho.com/people, retrieved 2026-09-10):** Described as an "intelligent, privacy-focused" AI assistant that "answers, acts, and analyzes" to automate HR tasks and support decision-making; available starting at the Essential HR tier per the official pricing page's feature breakdown. No independent UI observation of Zia's behavior performed in this pass — how it's actually surfaced in-product is NOT OBSERVED.
- Customer sentiment on Zia specifically: NOT OBSERVED — not surfaced in the review themes gathered in this pass; needs a dedicated search pass.

## 11. Mobile Experience
NOT OBSERVED directly (no live app session). CUSTOMER FEEDBACK: mobile app "isn't as polished as the web version" and "can be slow or prone to performance issues" — a recurring complaint theme across G2/Capterra-sourced summaries (retrieved 2026-09-10), matching the same mobile-parity gap pattern documented for Zoho Social.

## 12. Security & Permissions
NOT OBSERVED — not researched from public docs in this pass; vendor page mentions "compliance and security" emphasis (FACT, vendor-stated) but no specifics (SSO/2FA/role model) were confirmed.

## 13. Strengths / Weaknesses
- **Best features (CUSTOMER FEEDBACK):** All-in-one HR consolidation (attendance, leave, expense, performance in one platform); ease of day-to-day use; self-service portal; price/value relative to feature breadth.
- **Weakest features (CUSTOMER FEEDBACK):** Setup/configuration complexity for advanced features; mobile app polish and performance; workflow/permission configuration learning curve; reported API record-limit constraint.

## 14. Competitive Score
Not yet scored — scoring requires the full category benchmark (see `../03-Benchmarks/hr-recruiting.md`), which is itself intentionally incomplete pending dedicated competitor research passes for BambooHR, Rippling, Gusto, and others.

## 15. What We Should Learn
- **RECOMMENDATION — adopt:** All-in-one consolidation of core HR workflows (attendance, leave, performance, expense) into a single low-friction interface is the most consistently praised pattern (derived from Section 5 CUSTOMER FEEDBACK), echoing the "unified dashboard" pattern already recommended from Zoho Social.
- **RECOMMENDATION — investigate before adopting:** Zoho People's lower reported per-seat pricing vs. BambooHR/Rippling/Gusto (Section 4) is a potential differentiator, but the exact dollar figures are third-party-sourced and internally inconsistent across aggregators — do not cite these numbers externally until re-verified directly against the official pricing page.
- **RECOMMENDATION — avoid:** Shipping a mobile app materially behind desktop parity — this is the same recurring complaint pattern seen in Zoho Social, suggesting a cross-product mobile-investment gap worth flagging up (derived from Section 5/11 CUSTOMER FEEDBACK across two Zoho products).
- **RECOMMENDATION — avoid:** Setup/configuration complexity that requires "technical scripting" for advanced workflows — a recurring friction point that BambooHR's higher ease-of-use score (92% vs. category peers) suggests is a solvable UX problem (derived from Section 4/5 CUSTOMER FEEDBACK).

## 16. Standard Questionnaire — Full Answer Set (seetha_research_library.md §4–15)

> Retrofit pass: every answer below is derived only from Sections 1–15 of this same record. No new research was performed for this section. Per evidence-guidelines.md, unanswerable questions are marked `TODO` (publicly researchable, not yet done) or `NOT OBSERVED` (requires live-app access).

### Product Identification (§4, Q1–12)
1. What is the product? — Cloud-based, AI-powered HRMS consolidating core HR functions into one system (FACT — see Section 1).
2. What problem does it solve? — see Section 1.
3. What category does it belong to? — HR & Recruiting (HRMS/HCM) — see Section 1.
4. Who is the target customer? — Businesses of all sizes, with explicit SMB/startup emphasis and an enterprise path (FACT/INFERENCE — see Section 1).
5. Individuals/startups/SMBs/enterprises/multiple? — SMB primary, enterprise secondary (INFERENCE — see Section 1, "Segment").
6. Major features? — see Section 3.
7. Most important workflows? — NOT OBSERVED — see Section 7 (requires live login).
8. What platforms does it support? — Web, iOS, Android (FACT — see Section 1).
9. Web/desktop/mobile/all? — Web + mobile; no desktop app documented (see Section 1).
10. What integrations does it provide? — Other Zoho apps and third-party applications; depth ("native" vs. "via connector") NOT OBSERVED — see Section 3.
11. What ecosystem does it belong to? — Zoho ecosystem; also sold as part of the "Zoho People Plus" HCM bundle (FACT — see Section 1).
12. Which other products in the same company's suite does it integrate with? — TODO — Section 1 says "other Zoho apps" generically but does not itemize which ones.

### Business & Market (§5, Q13–26)
13. How long has the product existed? — TODO (Section 2: "Founded/product age: TODO — not verified in this pass").
14. How important is it within its company's ecosystem? — TODO — not directly assessed in this record.
15. What pricing plans are available? — see Section 2 (pricing table).
16. What is included in each plan? — see Section 2 (pricing table).
17. Is there a free plan? — Yes, a forever-free tier (FACT — see Section 2).
18. Is there a free trial? — Yes, 30-day trial on paid plans (FACT — see Section 2).
19. What limitations exist in the free/trial version? — Free tier lacks onboarding/document workflows; paid tiers require a 5-user minimum (FACT — see Section 2).
20. Approximate customer/user base? — "Over 50,000 businesses and 1 million users across 165+ countries" (FACT, vendor-stated — see Section 2).
21. What industries use it? — TODO — vendor states "businesses of all types" (Section 1) but no industry breakdown was gathered.
22. Which geographic markets are important? — TODO — "165+ countries" claimed (Section 2) but no market-importance ranking gathered.
23. Market positioning? — see Section 2.
24. What differentiates it from competitors? — see Section 2 (Zia AI; broad single-system consolidation; lower per-seat pricing per Section 4).
25. What type of company/customer gets the most value from it? — INFERENCE: SMBs wanting broad HR coverage at lower per-seat cost (see Section 2/4).
26. Major selling points? — see Section 2 and Section 13 ("Best features").

### Competitor Research (§6, Q27–41)
27. Who are the top competitors? — see Section 4 (BambooHR, Rippling, Gusto, Keka, Workday, SAP SuccessFactors, others).
28. Which competitor is the closest equivalent? — BambooHR, named "direct — closest SMB equivalent" (FACT — see Section 4).
29. Which competitor has the largest customer/user base? — TODO — Section 4 has review counts (Rippling ~16,121 G2 reviews is highest) but review count is not the same as customer/user base; not directly compared.
30. Which competitor has the strongest enterprise presence? — TODO — Workday, SAP SuccessFactors, Oracle Fusion, UKG, Dayforce named as the enterprise-tier comparison set (see Section 4), but not ranked against each other.
31. Which competitor is strongest for SMBs? — INFERENCE: BambooHR, per its "closest SMB equivalent" framing (see Section 4).
32. Which competitor is cheapest? — TODO — not ranked among competitors; Zoho People itself is reported cheaper per-seat than all named direct competitors (see Section 2/4).
33. Which competitor provides the most features? — TODO — not assessed in this pass.
34. Which competitor has the simplest UX? — NOT OBSERVED — would require live use of all competitors.
35. Which competitor has the strongest automation? — TODO.
36. Which competitor has the strongest analytics? — TODO.
37. Which competitor has the strongest integrations? — TODO.
38. Which competitor has the strongest AI capabilities? — TODO.
39. Which competitor is growing fastest? — TODO.
40. Which competitor receives the strongest customer feedback (rating)? — Rippling, G2 4.8/5 (~16,121 reviews), the highest rating gathered among named competitors (FACT — see Section 4).
41. Which competitor appears technically strongest? — NOT OBSERVED — would require live technical exploration of all competitors.

### Customer Review Research (§7, Q42–57)
42. What do customers like most? — see Section 5 ("Liked most").
43. What do customers dislike most? — see Section 5 ("Disliked most").
44. What problems are repeatedly mentioned? — see Section 5 ("Recurring complaints").
45. What features receive the most praise? — see Section 5 ("Recurring praise").
46. What features receive the most complaints? — Mobile app polish/performance; setup/configuration complexity (CUSTOMER FEEDBACK — see Section 5).
47. What do customers say about usability? — "Intuitive interface" needing little/no training (CUSTOMER FEEDBACK — see Section 5).
48. What do customers say about performance? — Mobile app "can be slow or prone to performance issues" (CUSTOMER FEEDBACK — see Section 9/11); no explicit desktop/web performance complaints gathered.
49. What do customers say about reliability? — TODO — no explicit reliability-specific theme beyond the mobile performance complaint (see Section 9).
50. What do customers say about customer support? — TODO — not surfaced in this pass.
51. What do customers say about pricing/value? — Competitive pricing relative to feature breadth is a liked-most theme (CUSTOMER FEEDBACK — see Section 5).
52. What do customers say about integrations? — Integration with other business/Zoho tools cited as a workflow-automation benefit (CUSTOMER FEEDBACK — see Section 1/5).
53. What do customers say about mobile applications? — see Section 11.
54. What do customers say about onboarding? — Partial: reviewers describe admin-side setup/configuration as "overwhelming" (CUSTOMER FEEDBACK — see Section 5) — this is administrative setup, not new-employee onboarding UX, which is NOT OBSERVED.
55. What features do customers request? — NOT OBSERVED — Section 5 explicitly states this needs a dedicated review-mining pass.
56. Why do customers switch away from the product? — INFERENCE only, not yet backed by direct quotes (see Section 5).
57. Why do customers choose the product over competitors? — INFERENCE only, not yet backed by direct quotes (see Section 5).

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
80. Onboarding handling? — NOT OBSERVED (public marketing claims about onboarding would be CUSTOMER FEEDBACK at best, not observation; none gathered).
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
102. APIs/network calls triggered? — NOT OBSERVED directly; one indirect data point: a Capterra-sourced review theme mentions an API limit of 200 records per request (CUSTOMER FEEDBACK, not independently verified — see Section 8).
103. What happens on button click (technical chain)? — NOT OBSERVED.
104. HTTP methods used? — NOT OBSERVED.
105. Data sent? — NOT OBSERVED.
106. Response returned? — NOT OBSERVED.
107. REST/GraphQL/other? — NOT OBSERVED.
108. Authentication handling? — NOT OBSERVED technically (see Section 12 for publicly documented auth options).
109. Session-state maintenance? — NOT OBSERVED.
110. Caching handling? — NOT OBSERVED.
111. File/media upload handling? — NOT OBSERVED.
112. Real-time update handling? — NOT OBSERVED.
113. Third-party services integrated (technically visible)? — NOT OBSERVED (publicly-documented integration names are in Section 3, not technically confirmed).
114. Technologies visible in browser/network layer? — NOT OBSERVED.
115. Error handling? — NOT OBSERVED.
116. Retry handling? — NOT OBSERVED.
117. Frontend/backend interaction patterns? — NOT OBSERVED.
118. Notably strong technical patterns? — NOT OBSERVED.

### Performance & Reliability (§11, Q119–129)
119. Application load speed? — NOT OBSERVED (see Section 9).
120. Time for major screens to become interactive? — NOT OBSERVED.
121. Noticeable delays? — NOT OBSERVED directly; CUSTOMER FEEDBACK: mobile app reported slow (see Section 9/11).
122. Handles large datasets well? — NOT OBSERVED — no large-dataset-specific customer feedback was gathered (see Section 5).
123. Reliability of important workflows? — NOT OBSERVED directly; CUSTOMER FEEDBACK proxy — see Section 5/9.
124. Recurring customer complaints about bugs? — see Section 5 (mobile app performance/polish).
125. Reported downtime? — TODO (check status-page/outage-tracker history).
126. Behavior during failures? — NOT OBSERVED.
127. Retry mechanisms available? — NOT OBSERVED.
128. Useful error messages? — NOT OBSERVED.
129. Performance change for complex workflows? — NOT OBSERVED.

### AI Capability Benchmarking (§12, Q130–143)
130. Does the product have AI features? — Yes, "Zia" (FACT — see Section 10).
131. What AI features exist? — see Section 10.
132. What problems do those AI features solve? — Automating HR tasks and supporting decision-making (FACT, vendor-stated — see Section 10).
133. Does AI generate content? — TODO — not specified by the vendor language gathered ("answers, acts, and analyzes").
134. Does AI summarize information? — TODO — not specified; vendor says it "analyzes."
135. Does AI automate workflows? — Yes — vendor states Zia "acts" to automate HR tasks (FACT — see Section 10).
136. Does AI provide recommendations? — Yes — vendor states Zia "analyzes" to "support decisions" (FACT — see Section 10).
137. Does AI analyze customer/product data? — TODO — vendor says "analyzes" generically; not specified whether customer or product data.
138. Does AI use company/customer context? — TODO — not specified in vendor language gathered.
139. What AI models/providers are publicly disclosed? — TODO — not disclosed in this pass.
140. How is AI integrated into the UI? — NOT OBSERVED (see Section 10; requires live use).
141. Does AI reduce the number of manual steps? — Vendor claim only ("automate HR tasks") — NOT OBSERVED independently (see Section 10).
142. Do customers consider the AI useful? — NOT OBSERVED — not surfaced in review themes gathered (see Section 10).
143. What limitations/complaints exist around the AI? — NOT OBSERVED — see Section 10.

### Integration Research (§13, Q144–154)
144. What integrations are available? — Zoho ecosystem apps and third-party applications (FACT — see Section 3).
145. Which integrations are most important? — TODO.
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
155. How are user roles handled? — TODO (see Section 12: not researched in this pass).
156. What permission levels exist? — TODO.
157. How are teams/workspaces structured? — TODO.
158. How is access controlled? — TODO.
159. How is authentication handled? — TODO.
160. Is SSO available? — TODO.
161. Is two-factor authentication available? — TODO.
162. How are connected accounts protected? — TODO/NOT OBSERVED — not publicly documented in sources gathered.
163. What security/compliance information is publicly documented? — Vendor page mentions a "compliance and security" emphasis with no specifics confirmed (FACT, vendor-stated — see Section 12).

### Mobile Experience (§15, Q164–171)
164. Is the mobile app feature-complete? — NOT OBSERVED directly; CUSTOMER FEEDBACK indicates it is "less polished than the web app" (see Section 11).
165. Which desktop features are missing? — NOT OBSERVED.
166. How is navigation adapted for mobile? — NOT OBSERVED.
167. How is content creation handled (mobile)? — NOT OBSERVED.
168. How are notifications handled (mobile)? — NOT OBSERVED.
169. Mobile performance? — CUSTOMER FEEDBACK: "can be slow or prone to performance issues," location-sync issues and attendance-entry delays reported (see Section 5/11).
170. What do mobile users complain about? — see Section 5/11 (polish gap vs. desktop, slowness, location-sync issues).
171. Which competitor has the strongest mobile experience? — TODO — Rippling's own record separately reports positive mobile-app CUSTOMER FEEDBACK, but no direct comparative mobile assessment was performed within this record.

## Sources
- [Zoho People — official product page](https://www.zoho.com/people/) — retrieved 2026-09-10
- [Zoho People — official pricing/editions page](https://www.zoho.com/people/zohopeople-pricing.html) — retrieved 2026-09-10
- [G2 — Zoho People Reviews](https://www.g2.com/products/zoho-people/reviews) — retrieved 2026-09-10
- [G2 — Zoho People Pros and Cons](https://www.g2.com/products/zoho-people/reviews?qs=pros-and-cons) — retrieved 2026-09-10
- [G2 — Zoho People Alternatives & Competitors](https://www.g2.com/products/zoho-people/competitors/alternatives) — retrieved 2026-09-10
- [Capterra — Zoho People Reviews](https://www.capterra.com/p/110931/Zoho-People/reviews/) — retrieved 2026-09-10
- [Capterra — Zoho People Pricing](https://www.capterra.com/p/110931/Zoho-People/pricing/) — retrieved 2026-09-10
- [G2 — BambooHR Reviews](https://www.g2.com/products/bamboohr/reviews) — retrieved 2026-09-10
- [G2 — Rippling Reviews](https://www.g2.com/products/rippling/reviews) — retrieved 2026-09-10
- [G2 — Gusto Reviews](https://www.g2.com/products/gusto/reviews) — retrieved 2026-09-10
- [Gartner Peer Insights — Zoho People Alternatives](https://www.gartner.com/reviews/product/zoho-people/alternatives) — retrieved 2026-09-10
- [TrustRadius — Zoho People Competitors](https://www.trustradius.com/products/zoho-people/competitors) — retrieved 2026-09-10
- Pricing/feature aggregators (flagged for re-verification): [spotsaas.com](https://www.spotsaas.com/product/zoho-people/pricing), [tinyteam.io](https://www.tinyteam.io/blog/zoho-people-pricing), [softwaresuggest.com](https://www.softwaresuggest.com/zoho-people) — retrieved 2026-09-10
- BambooHR/Rippling pricing aggregators (flagged for re-verification): [pin.com](https://www.pin.com/blog/bamboohr-pricing/), general search-summary sources — retrieved 2026-09-10
