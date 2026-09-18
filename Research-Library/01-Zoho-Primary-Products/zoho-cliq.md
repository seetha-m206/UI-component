---
title: "Zoho Cliq"
company: "Zoho Corporation"
category: "Team Chat & Messaging"
last_verified: "2026-09-11"
status: "in-progress"
---

# Zoho Cliq — Product Research Record

> Deep UI/component/technical exploration (Sections 6–9, 11–12) requires live login and is marked NOT OBSERVED — this record covers Layer 1–2 research (identity, market, pricing, reviews, competitors) from public sources only, following the zoho-mail.md worked example. Category: Team Chat & Messaging (new category added 2026-09-11 to category-taxonomy.md) — distinct from Zoho Mail's async email scope; Cliq is internal, real-time team messaging.

## 1. Identity
- **Company (FACT):** Zoho Corporation.
- **Category:** Team Chat & Messaging (real-time internal business communication — chat, channels, calls/meetings, file sharing).
- **Problem solved (FACT, vendor-stated):** Business communication software enabling teams to collaborate through chats, channels, meetings, and file sharing, combining synchronous and asynchronous communication tools for organizations with distributed workforces (zoho.com/cliq, retrieved 2026-09-11).
- **Target users / industries (FACT/INFERENCE, vendor-stated):** Enterprise teams seeking secure/controlled communication; hybrid and remote workforces coordinating across time zones; software development teams needing code sharing and collaboration tools; educational institutions running trainings/webinars; vendor states "all business sizes" (zoho.com/cliq, retrieved 2026-09-11). Review-based INFERENCE (G2/Capterra summaries, retrieved 2026-09-11): particularly popular among small businesses and existing Zoho-ecosystem customers seeking a cost-effective alternative to Slack/Teams.
- **Segment:** Multiple — small business through enterprise; vendor states the platform serves approximately 500,000 users globally (FACT, vendor-stated, zoho.com/cliq, retrieved 2026-09-11 — no independent corroboration found, treat as vendor claim not independently verified).
- **Platforms:** Desktop (Windows/Mac/Linux apps), web, mobile, and wearable devices (FACT, vendor-stated, zoho.com/cliq, retrieved 2026-09-11).
- **Ecosystem / sister products it integrates with (FACT, cross-referenced with zoho-mail.md):** Native integration with the broader Zoho suite — CRM, Projects, Books, Desk, People, Analytics, Creator, and more (per aggregator comparison summary, uniclouditservices.com, retrieved 2026-09-11); also listed as a bundled app within Zoho Mail's "Workplace" tiers (zoho-mail.md Section 1, cross-referenced 2026-09-11). Exact list of native (not Zapier-style) integrations NOT OBSERVED — official integrations directory not fetched in this pass.

## 2. Market & Business
- **Founded / product age (FACT + INFERENCE):** Zoho Cliq originated as an internal Zoho project around 2008 under the name "Zoho Chat," created to address internal team communication/documentation needs, later developed and publicly launched as a standalone product for external businesses (producthunt.com / zoho.com blog summaries, retrieved 2026-09-11). Exact public-launch year NOT OBSERVED in this pass — sources describe the internal-to-external evolution but do not give a specific public GA date; flagged TODO for a dedicated search (e.g. Zoho Cliq Wikipedia entry or press-release archive).
- **Approximate customer/user base:** Vendor states ~500,000 users globally (FACT, vendor-stated, zoho.com/cliq, retrieved 2026-09-11) — UNVERIFIED against any independent source.

### Pricing (per official zoho.com/cliq/pricing.html, retrieved 2026-09-11 — exact numeric prices for paid tiers were not rendered in the direct fetch; cross-referenced against third-party aggregators for numeric figures, flagged accordingly)
| Plan | Price (third-party aggregator figures, UNVERIFIED against official page) | Minimum users | Key inclusions | Source |
|---|---|---|---|---|
| Free | $0 | None stated | Messaging and channels, 100 GB org-wide file storage, meetings with screen share, remote work tools, chat export | zoho.com/cliq/pricing.html (FACT, features), retrieved 2026-09-11 |
| Standard | Aggregator figures conflict: ~$1.80/user/mo (toolradar.com) vs. $18.00/mo flat (softwaresuggest.com, ambiguous whether per-user) — **UNVERIFIED, needs reconciliation against official page** | Not stated on fetched page | Everything in Free + external channels, call recording, custom domain/email, basic usage reports, Networks add-on | zoho.com/cliq/pricing.html (FACT, features); price figures third-party sourced (toolradar.com, softwaresuggest.com), retrieved 2026-09-11 |
| Professional ("Most Popular") | Aggregator figures conflict: ~$2–$3/user/mo across sources (toolradar.com, costbench.com) — **UNVERIFIED** | 10 users | Everything in Standard + team/task management, roles and permissions, module configurations, live events, room devices, 3 free Networks, bulk team import, IP restrictions, on-demand chat summary | zoho.com/cliq/pricing.html (FACT, features), retrieved 2026-09-11 |
| Enterprise | Aggregator figure: ~$4/user/mo (costbench.com) — **UNVERIFIED** | 10 users | Everything in Professional + audit history, advanced usage reports, eDiscovery/DRP, Data Loss Prevention, branded meetings, usage report export | zoho.com/cliq/pricing.html (FACT, features), retrieved 2026-09-11 |

**Caveat (per evidence-guidelines.md rule 2):** The official Zoho Cliq pricing page was fetched directly but did not render exact numeric per-user prices for the Standard/Professional/Enterprise tiers in this pass. Third-party aggregator sources (toolradar.com, softwaresuggest.com, costbench.com) report inconsistent numbers across the same plan names (e.g., Standard variously cited near $1.80/user/mo and as an $18/mo flat figure); a separate comparison source (aaxonix.com/uniclouditservices.com, retrieved 2026-09-11) states Zoho Cliq's paid tier "costs from $1 to $3 per user each month." All numeric pricing above must be re-verified directly against zoho.com/cliq/pricing.html before external use. Yearly billing carries a stated 10% discount vs. monthly (FACT, official pricing page, retrieved 2026-09-11).
- **Free plan/trial (FACT):** A "forever free" plan exists (zoho.com/cliq/pricing.html, retrieved 2026-09-11); free trial available for Standard, Professional, and Enterprise tiers ("Start free trial" CTA on each, official pricing page) — exact trial length NOT OBSERVED in this pass.
- **Market positioning (INFERENCE):** Positioned as a lower-cost, Zoho-ecosystem-native alternative to Slack and Microsoft Teams, emphasizing native integration with Zoho's business apps (CRM, Projects, Desk, Books, People, Analytics, Creator) rather than a broad third-party app marketplace — contrasts with Slack's integration-breadth strategy and Teams' Microsoft-365-bundling strategy (derived from Section 4 competitor comparisons).
- **Key differentiators claimed by vendor (FACT, vendor-stated):** AI-powered chat summarization; built-in synchronous tools (calls, video meetings, screen sharing, collaborative whiteboard) and asynchronous tools (voice/video messages) in one product; built-in calendar and task management; workflow automation for repetitive tasks; customizable domain, branding, and themes; a developer platform for building custom components/bots (zoho.com/cliq, retrieved 2026-09-11).

## 3. Features (FACT, vendor/aggregator-stated, not independently verified via login in this pass)
- Real-time messaging: 1:1 chats, group chats, channels (including "external channels" at Standard+ for cross-organization communication)
- AI-powered chat summarization, including "on-demand chat summary" at the Professional tier
- Synchronous communication: voice/video calls, screen sharing, collaborative whiteboard, "live events," "room devices" (Professional+)
- Asynchronous communication: voice and video messages
- Built-in calendar and task/team management (Professional+)
- Workflow automation for repetitive tasks; a developer platform for building custom components/bots
- File sharing with 100 GB org-wide storage on the Free plan; chat export
- Customizable domain/email, branding, and themes (Standard+)
- Admin/compliance controls at higher tiers: roles and permissions, module configurations, bulk team import, IP restrictions (Professional+); audit history, eDiscovery/DRP, Data Loss Prevention, advanced usage reports, branded meetings, usage report export (Enterprise)
- Integrations: native integration across the Zoho ecosystem (CRM, Projects, Books, Desk, People, Analytics, Creator, and more per aggregator comparison — uniclouditservices.com, retrieved 2026-09-11); depth of non-Zoho third-party integrations NOT OBSERVED in this pass — official integrations directory not fetched.

## 4. Competitors
| Competitor | Type (direct/indirect/enterprise/SMB/low-cost/emerging) | Notes |
|---|---|---|
| [Slack](../02-Competitor-Products/team-chat-messaging/slack.md) | Direct — dominant standalone team-chat incumbent, integration-breadth leader | G2 4.5/5, ~38,250 reviews; Capterra 4.7/5, ~24,044 reviews (search-relayed, retrieved 2026-09-11). Paid tiers start ~$8.75/user/mo (Pro), reported as more expensive than Zoho Cliq's paid tier (aaxonix.com/uniclouditservices.com comparison, retrieved 2026-09-11). Over 2,500 apps in its marketplace, cited as the deepest integration ecosystem among team-chat products (uniclouditservices.com, retrieved 2026-09-11) |
| [Microsoft Teams](../02-Competitor-Products/team-chat-messaging/microsoft-teams.md) | Direct — Microsoft-365-bundled enterprise incumbent | G2 4.4/5, ~17,904 reviews; Capterra 4.5/5, ~10,811 reviews (figures vary slightly across pages fetched, search-relayed, retrieved 2026-09-11). Starting price ~$4/user/mo, often bundled "free" within existing Microsoft 365 subscriptions (search-relayed, retrieved 2026-09-11). Same parent company (Microsoft) as the Outlook/Microsoft 365 email product already documented at `../02-Competitor-Products/communication/microsoft-365.md`, but a distinct product/category (chat vs. email) |
| Google Chat | Direct — Google-Workspace-bundled | Named in cross-comparisons (e.g. capterra.com "Slack vs Google Chat") as a team-chat competitor bundled with Google Workspace; ratings and pricing NOT independently gathered in this pass |
| Discord (business use) | Indirect / emerging for business — origin in gaming/community chat | Frequently named as an emerging low-cost/free alternative for smaller or informal teams; NOT independently verified as a mainstream direct competitor to Cliq in the sources gathered this pass — carried over as a candidate, not confirmed |
| Mattermost | Indirect — open-source/self-hosted alternative | Named in general team-chat competitive landscape discussions; NOT independently verified via direct search in this pass — ratings/pricing not gathered |
| Flock | Direct — SMB-focused team chat | Surfaced via a G2 comparison page ("flock-vs-zoho-cliq"); NOT independently researched in this pass beyond confirming the comparison exists |

**Selection for full competitor records (this pass):** Slack and Microsoft Teams were selected as the two most-substantiated competitors — both have independently confirmed G2 and Capterra ratings/review counts and multiple direct head-to-head comparison sources against Zoho Cliq specifically (Capterra "Zoho Cliq vs Microsoft Teams," Software Advice "Slack vs Zoho Cliq," and the aaxonix.com/uniclouditservices.com pricing-and-feature comparisons), unlike Google Chat, Discord, Mattermost, and Flock, which appeared only as passing mentions in this pass.

## 5. Customer Reviews
- **Source:** G2 — 4.4/5, 259 reviews; ~92% of reviewers rate 4 or 5 stars (search-relayed from G2, retrieved 2026-09-11). Capterra — 4.6/5, 104 reviews; sub-scores: Ease of Use 4.5, Customer Service 4.2, Features 4.4, Value for Money 4.6 (search-relayed from Capterra, retrieved 2026-09-11).
- **Liked most (CUSTOMER FEEDBACK):** Simplicity and ease of use; availability across mobile, desktop, and web for flexible communication; cost-effectiveness — reviewers describe it as an affordable Slack alternative; seamless integration with other Zoho applications; real-time messaging with customizable channels (G2/Capterra review summaries, retrieved 2026-09-11).
- **Disliked most (CUSTOMER FEEDBACK):** Connectivity issues — difficult to use without a stable internet connection; voice/video calling described as less refined/stable than Slack's or Microsoft Teams' equivalents (G2/Capterra review summaries, retrieved 2026-09-11).
- **Recurring complaints:** Connectivity/reliability dependency on stable internet; call/video quality gaps vs. Slack and Teams (CUSTOMER FEEDBACK, G2/Capterra).
- **Recurring praise:** Affordability relative to Slack/Teams; ease of use; multi-platform availability (mobile/desktop/web); Zoho-ecosystem integration (CUSTOMER FEEDBACK, G2/Capterra).
- **Requested features:** NOT OBSERVED in this pass — needs a dedicated review-mining pass (sort G2/Capterra by "most recent" and "lowest rating").
- **Why customers switch away / choose it (INFERENCE, partial CUSTOMER FEEDBACK):** "Choose it" correlates with cost-sensitivity, existing Zoho-ecosystem usage, and a desire for a simpler tool than Slack/Teams (G2/Capterra summaries). "Switch away" plausibly correlates with needing more mature/stable voice-video calling or a larger third-party integration marketplace, both flagged as competitor strengths in Section 4 — needs direct review quotes to fully upgrade to CUSTOMER FEEDBACK.

## 6. UI/UX
NOT OBSERVED — requires live login/exploration of the actual app. Flagged as the next research step.

## 7. User Flows
NOT OBSERVED — same as above.

## 8. Technical Observations
NOT OBSERVED — DOM/network/API capture requires live session exploration; not performed in this pass.

## 9. Performance & Reliability
NOT OBSERVED directly via live product. CUSTOMER FEEDBACK signal (Section 5): reviewers report connectivity/stability issues without a strong internet connection, and voice/video calling described as less refined/stable than Slack's or Microsoft Teams' — the closest reliability-adjacent theme surfaced by review mining so far.

## 10. AI Features
- **FACT (vendor-stated):** AI-powered chat summarization is a headline feature on the official product page; "on-demand chat summary" is specifically listed as a Professional-tier inclusion on the pricing page (zoho.com/cliq, zoho.com/cliq/pricing.html, retrieved 2026-09-11).
- Specific underlying model/provider: NOT OBSERVED — not disclosed on the pages fetched in this pass.
- Customer sentiment on the AI summarization feature specifically: NOT OBSERVED in this pass — not called out distinctly in the G2/Capterra summaries gathered.

## 11. Mobile Experience
NOT OBSERVED directly via live app. Vendor states mobile and wearable-device support exists (zoho.com/cliq, retrieved 2026-09-11); CUSTOMER FEEDBACK (Section 5) praises "availability of a mobile app, desktop application, and web version allowing for flexible communication" as a general strength, but no mobile-specific parity or sentiment data was gathered in this pass. Needs a dedicated review-mining pass filtered for "mobile app."

## 12. Security & Permissions
- **FACT (vendor-stated, official pricing page):** Roles and permissions and module configurations available at Professional tier; IP restrictions also at Professional tier; audit history, eDiscovery/DRP (data recovery/protection), and Data Loss Prevention available at Enterprise tier (zoho.com/cliq/pricing.html, retrieved 2026-09-11).
- SSO, 2FA, and detailed team/workspace structure: NOT OBSERVED — not documented in the pages fetched in this pass; flagged TODO for a dedicated pass over Zoho's security/compliance documentation.

## 13. Strengths / Weaknesses
- **Best features (CUSTOMER FEEDBACK):** Affordability vs. Slack/Teams; ease of use; multi-platform availability; native Zoho-ecosystem integration; AI chat summarization as a differentiator (vendor-stated).
- **Weakest features (CUSTOMER FEEDBACK):** Reliability/connectivity dependency on stable internet; less mature voice/video calling than Slack or Microsoft Teams; smaller third-party integration marketplace than Slack (INFERENCE from Section 4 comparison).

## 14. Competitive Score
Not yet scored — scoring requires the full category benchmark (see `../03-Benchmarks/team-chat-messaging.md`), which is newly created in this pass and remains at partial depth pending live-product exploration for all three products (Zoho Cliq, Slack, Microsoft Teams).

## 15. What We Should Learn
- **RECOMMENDATION — adopt:** Bundling synchronous (calls, video, screen share, whiteboard) and asynchronous (voice/video messages) communication into one product, rather than requiring a separate conferencing tool, is a clear vendor-stated differentiator worth studying further once live-explored (derived from Section 2/3, vendor-stated).
- **RECOMMENDATION — adopt:** Native, deep integration with a company's own broader product suite (Zoho apps, in this case) as a retention/stickiness strategy — mirrors the pattern already observed in Zoho Mail's Workplace-tier bundling (derived from Section 3, cross-referenced with zoho-mail.md).
- **RECOMMENDATION — avoid:** Voice/video call reliability gaps relative to category leaders — this is a specific, repeated complaint theme for Zoho Cliq (CUSTOMER FEEDBACK, Section 5) and represents a clear category expectation (both Slack and Teams are reviewed favorably on their calling features per comparison sources).
- **RECOMMENDATION — investigate:** Exact numeric pricing for Standard/Professional/Enterprise tiers is inconsistent across third-party sources and should be re-verified directly from zoho.com/cliq/pricing.html before use in any external-facing comparison (derived from Section 2 caveat).
- **RECOMMENDATION — investigate:** Slack's ~2,500-app integration marketplace vs. Zoho Cliq's Zoho-ecosystem-only native integration model represents a fundamentally different growth/retention strategy (open marketplace vs. suite lock-in) worth a dedicated comparative deep-dive once both products are live-explored (derived from Section 4).

## 16. Standard Questionnaire — Full Answer Set (seetha_research_library.md §4–15)

> Every question is answered using only what already exists in Sections 1–15 of this file. No new research was performed for this section.

### Product Identification (§4, Q1–12)
1. What is the product? — Zoho Cliq: real-time business team-chat software combining synchronous and asynchronous communication (chat, channels, calls, meetings, file sharing) (see Section 1).
2. What problem does it solve? — see Section 1.
3. What category does it belong to? — Team Chat & Messaging (see Section 1).
4. Who is the target customer? — see Section 1.
5. Individuals/startups/SMBs/enterprises/multiple? — Multiple: vendor states "all business sizes," with review-based INFERENCE pointing to particular popularity among SMBs and existing Zoho-ecosystem customers (see Section 1).
6. Major features? — see Section 3.
7. Most important workflows? — NOT OBSERVED (see Section 7).
8. What platforms does it support? — Desktop, web, mobile, and wearable devices (see Section 1).
9. Web/desktop/mobile/all? — All (see Section 1).
10. What integrations does it provide? — see Section 3.
11. What ecosystem does it belong to? — The Zoho ecosystem (see Section 1).
12. Which other products in the same company's suite does it integrate with? — CRM, Projects, Books, Desk, People, Analytics, Creator, and (per zoho-mail.md) Zoho Mail's Workplace tiers (see Section 1).

### Business & Market (§5, Q13–26)
13. How long has the product existed? — Originated as an internal Zoho project (~2008, "Zoho Chat"), later developed into a public product; exact public-launch date NOT OBSERVED (see Section 2).
14. How important is it within its company's ecosystem? — INFERENCE: bundled into Zoho Mail's Workplace tiers and cross-integrated with core Zoho business apps, suggesting a role as the connective real-time layer across the suite (see Sections 1–3).
15. What pricing plans are available? — see Section 2 table (Free, Standard, Professional, Enterprise).
16. What is included in each plan? — see Section 2 table.
17. Is there a free plan? — Yes, a "forever free" plan (see Section 2).
18. Is there a free trial? — Yes, for Standard/Professional/Enterprise tiers; exact length NOT OBSERVED (see Section 2).
19. What limitations exist in the free/trial version? — Free plan is limited to messaging/channels, 100 GB org-wide storage, meetings with screen share, remote work tools, and chat export — external channels, call recording, custom domain, and admin/compliance controls are reserved for paid tiers (see Section 2).
20. Approximate customer/user base? — Vendor states ~500,000 users globally (UNVERIFIED) (see Section 2).
21. What industries use it? — INFERENCE: enterprise teams, hybrid/remote workforces, software development teams, educational institutions (vendor-stated) (see Section 1).
22. Which geographic markets are important? — TODO — not covered in this pass.
23. Market positioning? — see Section 2.
24. What differentiates it from competitors? — see Section 2 ("Key differentiators claimed by vendor").
25. What type of company/customer gets the most value from it? — INFERENCE: cost-sensitive small/mid-size businesses already invested in the Zoho ecosystem (see Sections 1–2, 4).
26. Major selling points? — see Section 2 differentiators and Section 13 best features.

### Competitor Research (§6, Q27–41)
27. Who are the top competitors? — see Section 4 (Slack, Microsoft Teams, Google Chat, Discord, Mattermost, Flock).
28. Which competitor is the closest equivalent? — Slack (standalone team-chat product, most directly comparable in scope) (see Section 4).
29. Which competitor has the largest customer/user base? — INFERENCE: Slack, based on the largest review-count volume gathered (G2 ~38,250 reviews) (see Section 4) — no direct user-count figures compared.
30. Which competitor has the strongest enterprise presence? — Microsoft Teams, via bundling with Microsoft 365 across enterprise organizations already standardized on Microsoft (see Section 4, cross-referenced with microsoft-365.md).
31. Which competitor is strongest for SMBs? — TODO — Flock is positioned as SMB-focused per Section 4, but not independently benchmarked.
32. Which competitor is cheapest? — TODO — Zoho Cliq itself is reported as the cheapest of the three most-substantiated products (Cliq ~$1–$3/user/mo vs. Teams ~$4/user/mo vs. Slack ~$8.75/user/mo, aaxonix.com comparison, see Section 4), but this compares Cliq to competitors rather than ranking competitors against each other.
33. Which competitor provides the most features? — TODO — not independently compared feature-by-feature in this pass; Microsoft Teams arguably bundles the broadest suite (chat + Microsoft 365 apps) per general positioning (see Section 4).
34. Which competitor has the simplest UX? — NOT OBSERVED unless independently verified across products via live use.
35. Which competitor has the strongest automation? — TODO.
36. Which competitor has the strongest analytics? — TODO.
37. Which competitor has the strongest integrations? — Slack, cited with over 2,500 marketplace apps including GitHub, Jira, Salesforce, Zendesk, PagerDuty, Google Workspace, and Microsoft 365 (uniclouditservices.com comparison, see Section 4).
38. Which competitor has the strongest AI capabilities? — TODO — not independently compared; Zoho Cliq's AI chat summarization is vendor-stated only (see Section 10).
39. Which competitor is growing fastest? — TODO.
40. Which competitor receives the strongest customer feedback (rating)? — Slack shows the highest ratings gathered (G2 4.5/5 ~38,250 reviews; Capterra 4.7/5 ~24,044 reviews) among the three most-substantiated products (see Section 4).
41. Which competitor appears technically strongest? — NOT OBSERVED without live technical exploration of all competitors.

### Customer Review Research (§7, Q42–57)
42. What do customers like most? — see Section 5.
43. What do customers dislike most? — see Section 5.
44. What problems are repeatedly mentioned? — see Section 5 ("Recurring complaints").
45. What features receive the most praise? — see Section 5 ("Recurring praise").
46. What features receive the most complaints? — see Section 5 (connectivity/reliability, call/video quality).
47. What do customers say about usability? — see Section 5 ("simplicity and ease of use").
48. What do customers say about performance? — see Section 5/9 (connectivity issues without stable internet).
49. What do customers say about reliability? — see Section 9.
50. What do customers say about customer support? — see Section 5 (Capterra sub-score: Customer Service 4.2).
51. What do customers say about pricing/value? — see Section 5 (Capterra sub-score: Value for Money 4.6; "cost-effective Slack alternative").
52. What do customers say about integrations? — see Section 5 ("integrates seamlessly with other Zoho applications").
53. What do customers say about mobile applications? — see Section 11.
54. What do customers say about onboarding? — NOT OBSERVED — not covered in the review summaries gathered for Section 5.
55. What features do customers request? — NOT OBSERVED (see Section 5, explicitly flagged as needing a dedicated pass).
56. Why do customers switch away from the product? — INFERENCE only (see Section 5).
57. Why do customers choose the product over competitors? — see Section 5 (INFERENCE, partial CUSTOMER FEEDBACK).

### UI/UX Benchmarking (§8, Q58–82) — requires live product access
58. Overall UI style? — NOT OBSERVED (see Section 6).
59. Is navigation easy to understand? — NOT OBSERVED.
60. Sidebar structure? — NOT OBSERVED.
61. Dashboard structure? — NOT OBSERVED.
62. Clicks required for common workflows? — NOT OBSERVED (see Section 7).
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
80. Onboarding handling? — NOT OBSERVED (public marketing claims about onboarding would be CUSTOMER FEEDBACK at best; none gathered).
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
108. Authentication handling? — NOT OBSERVED technically (publicly documented auth options would be in Q159–161, but none gathered in this pass).
109. Session-state maintenance? — NOT OBSERVED.
110. Caching handling? — NOT OBSERVED.
111. File/media upload handling? — NOT OBSERVED.
112. Real-time update handling? — NOT OBSERVED — real-time messaging is a core vendor-stated capability (see Section 3), but the underlying mechanism (WebSocket/long-poll/etc.) is NOT OBSERVED.
113. Third-party services integrated (technically visible)? — NOT OBSERVED (publicly-documented integration names are in Q144 instead).
114. Technologies visible in browser/network layer? — NOT OBSERVED.
115. Error handling? — NOT OBSERVED.
116. Retry handling? — NOT OBSERVED.
117. Frontend/backend interaction patterns? — NOT OBSERVED.
118. Notably strong technical patterns? — NOT OBSERVED.

### Performance & Reliability (§11, Q119–129)
119. Application load speed? — NOT OBSERVED (see Section 9).
120. Time for major screens to become interactive? — NOT OBSERVED.
121. Noticeable delays? — NOT OBSERVED directly; CUSTOMER FEEDBACK signal: connectivity issues reported without a stable internet connection (see Section 5/9).
122. Handles large datasets well? — NOT OBSERVED — no review signal gathered on this specifically.
123. Reliability of important workflows? — NOT OBSERVED directly; CUSTOMER FEEDBACK proxy: voice/video calling described as less refined/stable than Slack's or Teams' (see Section 9).
124. Recurring customer complaints about bugs? — see Section 5.
125. Reported downtime? — TODO (check status-page/outage-tracker history; not done in this pass).
126. Behavior during failures? — NOT OBSERVED.
127. Retry mechanisms available? — NOT OBSERVED.
128. Useful error messages? — NOT OBSERVED.
129. Performance change for complex workflows? — NOT OBSERVED.

### AI Capability Benchmarking (§12, Q130–143)
130. Does the product have AI features? — Yes, AI-powered chat summarization (see Section 10).
131. What AI features exist? — Chat summarization, including an "on-demand chat summary" capability at the Professional tier (see Section 10).
132. What problems do those AI features solve? — INFERENCE: reducing time spent catching up on missed conversations in active channels (not explicitly stated in sources gathered — treat as reasonable inference from the feature name, not a vendor claim).
133. Does AI generate content? — NOT OBSERVED — only summarization is documented in sources gathered (see Section 10).
134. Does AI summarize information? — Yes — chat summarization (FACT, vendor-stated; see Section 10).
135. Does AI automate workflows? — Vendor separately states "workflow automation for repetitive tasks" as a platform feature (see Section 2), but it is NOT OBSERVED whether this automation is AI-driven or rule-based — flagged for clarification in a future pass.
136. Does AI provide recommendations? — NOT OBSERVED.
137. Does AI analyze customer/product data? — NOT OBSERVED.
138. Does AI use company/customer context? — NOT OBSERVED.
139. What AI models/providers are publicly disclosed? — NOT OBSERVED — not disclosed on the pages fetched in this pass (see Section 10).
140. How is AI integrated into the UI? — NOT OBSERVED (requires live use).
141. Does AI reduce the number of manual steps? — NOT OBSERVED / vendor claim only.
142. Do customers consider the AI useful? — NOT OBSERVED (see Section 10, not called out distinctly in review summaries gathered).
143. What limitations/complaints exist around the AI? — NOT OBSERVED (see Section 10).

### Integration Research (§13, Q144–154)
144. What integrations are available? — see Section 3 (Zoho ecosystem: CRM, Projects, Books, Desk, People, Analytics, Creator).
145. Which integrations are most important? — INFERENCE: the bundled Zoho ecosystem apps, given they are the primary integration differentiator called out in comparison sources (see Section 3/4).
146. Which integrations are unique? — INFERENCE: AI-powered on-demand chat summarization tied to the platform itself, rather than a specific integration (see Section 10).
147. How easy is integration setup? — NOT OBSERVED.
148. Does the integration require authentication? — NOT OBSERVED.
149. How is connected-account status shown? — NOT OBSERVED.
150. What happens when an integration fails? — NOT OBSERVED.
151. How are permissions handled (for integrations)? — NOT OBSERVED.
152. How are multiple connected accounts handled? — NOT OBSERVED.
153. How does the product synchronize data? — NOT OBSERVED.
154. How does it show synchronization errors? — NOT OBSERVED.

### Security & Permissions (§14, Q155–163) — publicly documented only
155. How are user roles handled? — Roles and permissions available at Professional tier (see Section 12).
156. What permission levels exist? — TODO — specific role/permission levels not detailed on pages fetched (see Section 12).
157. How are teams/workspaces structured? — TODO — not documented in this pass.
158. How is access controlled? — IP restrictions available at Professional tier (see Section 12).
159. How is authentication handled? — NOT OBSERVED/TODO — not documented in the pages fetched in this pass.
160. Is SSO available? — TODO/NOT OBSERVED — not mentioned in this pass's sources.
161. Is two-factor authentication available? — TODO/NOT OBSERVED — not mentioned in this pass's sources.
162. How are connected accounts protected? — TODO/NOT OBSERVED unless publicly documented.
163. What security/compliance information is publicly documented? — see Section 12 (audit history, eDiscovery/DRP, Data Loss Prevention at Enterprise tier).

### Mobile Experience (§15, Q164–171)
164. Is the mobile app feature-complete? — NOT OBSERVED (see Section 11 — only existence of mobile/wearable support confirmed, not parity).
165. Which desktop features are missing? — NOT OBSERVED.
166. How is navigation adapted for mobile? — NOT OBSERVED.
167. How is content creation handled (mobile)? — NOT OBSERVED.
168. How are notifications handled (mobile)? — NOT OBSERVED.
169. Mobile performance? — NOT OBSERVED (see Section 11).
170. What do mobile users complain about? — NOT OBSERVED (see Section 11 — no mobile-specific review mining performed; general "flexible communication across platforms" praise noted but not mobile-specific complaints).
171. Which competitor has the strongest mobile experience? — TODO/NOT OBSERVED — requires comparable mobile research across all competitors.

## Sources
- [Zoho Cliq — official site](https://www.zoho.com/cliq/) — retrieved 2026-09-11
- [Zoho Cliq — official pricing page](https://www.zoho.com/cliq/pricing.html) — retrieved 2026-09-11
- [G2 — Zoho Cliq Reviews](https://www.g2.com/products/zoho-cliq/reviews) — retrieved 2026-09-11 (via search summary)
- [G2 — Zoho Cliq Pros and Cons](https://www.g2.com/products/zoho-cliq/reviews?qs=pros-and-cons) — retrieved 2026-09-11 (via search summary)
- [G2 — Zoho Cliq Pricing](https://www.g2.com/products/zoho-cliq/pricing) — retrieved 2026-09-11 (via search summary)
- [G2 — Slack vs Zoho Cliq comparison](https://www.g2.com/compare/slack-vs-zoho-cliq) — retrieved 2026-09-11 (via search summary)
- [G2 — Flock vs Zoho Cliq comparison](https://www.g2.com/compare/flock-vs-zoho-cliq) — retrieved 2026-09-11 (via search summary)
- [Capterra — Zoho Cliq Reviews](https://www.capterra.com/p/167639/Zoho-Cliq/reviews/) — retrieved 2026-09-11 (via search summary)
- [Capterra — Zoho Cliq vs Microsoft Teams comparison](https://www.capterra.com/compare/167639-168668/Zoho-Cliq-vs-Microsoft-Teams) — retrieved 2026-09-11 (via search summary)
- [Software Advice — Microsoft Teams vs Zoho Cliq](https://www.softwareadvice.com/voip/microsoft-teams-profile/vs/zoho-cliq/) — retrieved 2026-09-11 (via search summary)
- [Software Advice — Slack vs Zoho Cliq](https://www.softwareadvice.com/remote-support/slack-profile/vs/zoho-cliq/) — retrieved 2026-09-11 (via search summary)
- [Aaxonix — Zoho Cliq vs Slack: Full Comparison for Teams](https://aaxonix.com/resources/zoho-cliq-team-messaging/) — retrieved 2026-09-11 (third-party sourced)
- [Unicloud IT Services — Zoho Cliq vs Slack vs Microsoft Teams](https://uniclouditservices.com/zoho-cliq-vs-slack-vs-microsoft-teams-collaboration-with-workflow-context/) — retrieved 2026-09-11 (third-party sourced — Zoho partner site, flagged for potential vendor bias)
- [ToolRadar — Zoho Cliq Pricing 2026](https://toolradar.com/tools/zoho-cliq/pricing) — retrieved 2026-09-11 (third-party sourced)
- [SoftwareSuggest — Zoho Cliq Pricing 2026](https://www.softwaresuggest.com/zoho-cliq/pricing) — retrieved 2026-09-11 (third-party sourced)
- [CostBench — Zoho Cliq Pricing 2026](https://costbench.com/software/communication/zoho-cliq/) — retrieved 2026-09-11 (third-party sourced)
- [Product Hunt — Zoho Cliq launches](https://www.producthunt.com/products/zoho-cliq/launches) — retrieved 2026-09-11
- [Zoho Blog — A year of milestones with Zoho Cliq (2024)](https://www.zoho.com/blog/cliq/a-year-of-milestones-with-zoho-cliq.html) — retrieved 2026-09-11
- [Zoho Mail — Product Research Record (internal)](../01-Zoho-Primary-Products/zoho-mail.md) — cross-referenced 2026-09-11
