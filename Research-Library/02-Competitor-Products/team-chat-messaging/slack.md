---
title: "Slack"
company: "Salesforce, Inc. (Slack Technologies)"
category: "Team Chat & Messaging"
last_verified: "2026-09-11"
status: "in-progress"
---

# Slack — Product Research Record

> Deep UI/component/technical exploration (Sections 6–9, 11–12) requires live login and is marked NOT OBSERVED — this record covers Layer 1–2 research (identity, market, pricing, reviews) from public sources only, following the zoho-cliq.md worked example. Written as the anchor competitor record for the new Team Chat & Messaging category.

## 1. Identity
- **Company (FACT):** Slack Technologies, acquired by and now operated as part of Salesforce, Inc. (widely reported acquisition, completed 2021 — not independently re-verified with a primary source in this pass, treat as commonly-known background fact pending citation).
- **Category:** Team Chat & Messaging (real-time channel-based business messaging, calls/huddles, file sharing, app/workflow integrations).
- **Problem solved (INFERENCE from review/comparison summaries):** Centralizes team communication into organized, searchable channels, reducing reliance on internal email for day-to-day coordination, with deep third-party app integration to bring external tool notifications/actions into one place (G2/Capterra and comparison-source summaries, retrieved 2026-09-11).
- **Target users / industries:** Broad — from small teams to large enterprises; widely cited as the incumbent/default team-chat tool across software, tech, and knowledge-work industries (INFERENCE from review-volume and comparison-source framing, retrieved 2026-09-11).
- **Segment:** Multiple — free tier for small teams, paid tiers scaling to enterprise (Enterprise Grid, not independently detailed in this pass).
- **Platforms:** Web, desktop (Windows/Mac/Linux), mobile (iOS/Android) — FACT, standard industry knowledge, not independently re-verified against an official Slack page in this pass.
- **Ecosystem / sister products it integrates with:** As part of Salesforce, cited comparison sources note deep integration potential with Salesforce CRM; broader marketplace cited at "over 2,500 apps" including GitHub, Jira, Salesforce, Zendesk, PagerDuty, Google Workspace, and Microsoft 365 (uniclouditservices.com comparison, retrieved 2026-09-11 — third-party sourced, not independently confirmed against Slack's own app directory).

## 2. Market & Business
- **Founded / product age:** TODO — not verified in this pass (Slack publicly launched in 2013 per widely-known industry history; not independently re-confirmed with a primary source in this pass — treat as background context, not a sourced FACT for this record).
- **Approximate customer/user base:** TODO — no verified figure gathered in this pass.

### Pricing (search-relayed from official/aggregator sources, retrieved 2026-09-11 — not independently fetched from slack.com/pricing directly in this pass)
| Plan | Price | Billing | Key inclusions | Source |
|---|---|---|---|---|
| Free | $0 | N/A | Channels, messaging; limited to 90 days of message history (per review-summary note) | Search-relayed from G2 review summary, retrieved 2026-09-11 — UNVERIFIED against official pricing page |
| Pro | $8.75/user/mo | Presumed annual (not explicitly stated in the source relayed) | Full message history, more integrations, group calling | Search-relayed, retrieved 2026-09-11 — UNVERIFIED against official pricing page |
| Business+ | $15/user/mo | Presumed annual (not explicitly stated) | Advanced identity/compliance features (typical of this tier industry-wide; not itemized in the source relayed) | Search-relayed, retrieved 2026-09-11 — UNVERIFIED against official pricing page |
| Enterprise Grid | Custom / "Contact sales" | N/A | TODO — not detailed in sources gathered | Not directly researched in this pass |

**Caveat (per evidence-guidelines.md rule 2):** None of the pricing figures above were confirmed via a direct fetch of slack.com/pricing in this pass — all are relayed from a search-engine summary citing aggregator/review-platform commentary. Must be re-verified directly against the official page before external use.
- **Free plan/trial (FACT, low-confidence/UNVERIFIED):** A free plan exists; reviewers note it limits message/conversation history to roughly 90 days and restricts integrations, storage, and group calling (G2 review-summary, retrieved 2026-09-11) — UNVERIFIED against Slack's own current terms.
- **Market positioning (INFERENCE):** Positioned as the standalone, integration-first team-chat platform — not tied to any single company's broader productivity suite (unlike Microsoft Teams/Microsoft 365 or Zoho Cliq/Zoho suite), competing primarily on breadth of third-party app ecosystem and mature channel-based UX (derived from comparison sources, Section 4-equivalent in zoho-cliq.md).
- **Key differentiators claimed by vendor/cited by comparisons:** Largest third-party app marketplace among team-chat tools (~2,500+ apps cited); mature, widely-adopted channel/thread UX; strong search within Slack workspace (uniclouditservices.com, retrieved 2026-09-11 — third-party sourced).

## 3. Features (aggregator/comparison-sourced, not independently verified via login in this pass)
- Channel-based messaging (public/private channels), direct messages, threads
- Huddles/voice calls, video calls, screen sharing (feature names/scope not independently itemized in this pass)
- Extensive third-party app/integration marketplace (~2,500+ apps cited: GitHub, Jira, Salesforce, Zendesk, PagerDuty, Google Workspace, Microsoft 365, and others)
- Workflow Builder (widely known Slack feature for no-code automation) — NOT independently re-confirmed with a primary source in this pass
- Search across messages/files within a workspace
- Integrations: broadest cited integration marketplace among the three products compared in this category (see zoho-cliq.md Section 4) — depth/native-vs-third-party distinction NOT OBSERVED in this pass.

## 4. Competitors
| Competitor | Type | Notes |
|---|---|---|
| [Zoho Cliq](../../01-Zoho-Primary-Products/zoho-cliq.md) | Direct — lower-cost, Zoho-ecosystem-native challenger | Zoho Cliq's own record lists Slack as its closest direct competitor and notes Slack's paid tier (~$8.75/user/mo) is reported as more expensive than Cliq's (~$1–$3/user/mo) (zoho-cliq.md Section 2/4, retrieved 2026-09-11) |
| [Microsoft Teams](microsoft-teams.md) | Direct — Microsoft-365-bundled enterprise incumbent | Frequently compared head-to-head with Slack across review platforms; often bundled "free" within existing Microsoft 365 subscriptions, a structural pricing advantage Slack does not have (see microsoft-teams.md) |
| Google Chat | Direct — Google-Workspace-bundled | Named in cross-comparisons (capterra.com "Slack vs Google Chat"); ratings/pricing NOT independently gathered in this pass |
| Discord (business use) | Indirect / emerging | Cited as a lower-cost/free alternative for smaller or informal teams; not independently verified as a mainstream direct Slack competitor in this pass |
| Mattermost | Indirect — open-source/self-hosted alternative | Named in general team-chat competitive landscape; not independently researched in this pass |

## 5. Customer Reviews
- **Source(s):** G2 — 4.5/5, ~38,250 reviews (search-relayed, retrieved 2026-09-11). Capterra — 4.7/5, ~24,044 reviews (search-relayed, retrieved 2026-09-11).
- **Liked most (CUSTOMER FEEDBACK):** Organized team communication via channels that keep conversations structured and easy to follow; seamless real-time collaboration; strong integration ecosystem (e.g., cited integration with Procore for project management in one G2 summary) (search-relayed G2 summary, retrieved 2026-09-11).
- **Disliked most (CUSTOMER FEEDBACK):** Searching older discussions sometimes requires precise keywords; the free plan's 90-day message-history limit and other restrictions (integrations, storage, group calling) are called "very restrictive for smaller teams"; per-user costs "add up" as teams grow (search-relayed G2 summary, retrieved 2026-09-11).
- **Recurring complaints:** Free-tier history/feature limits; cost scaling with team size; search precision requirements on older content (CUSTOMER FEEDBACK, G2).
- **Recurring praise:** Channel organization; integration breadth; real-time collaboration quality (CUSTOMER FEEDBACK, G2).
- **Requested features:** NOT OBSERVED in this pass — needs a dedicated review-mining pass.
- **Why customers switch away / choose it:** INFERENCE only — "choose it" plausibly correlates with wanting the largest integration marketplace and a mature, well-known UX; "switch away" plausibly correlates with cost sensitivity at scale or wanting a tool bundled into an existing suite (Microsoft 365, Zoho, Google Workspace) rather than a standalone subscription. Needs direct review quotes to upgrade to CUSTOMER FEEDBACK.

## 6. UI/UX
NOT OBSERVED — requires live login/exploration of the actual app.

## 7. User Flows
NOT OBSERVED — same as above.

## 8. Technical Observations
NOT OBSERVED — DOM/network/API capture requires live session exploration; not performed in this pass.

## 9. Performance & Reliability
NOT OBSERVED directly via live product. CUSTOMER FEEDBACK signal (Section 5): search precision on older discussions flagged as a mild friction point; no major reliability complaints surfaced in the sources gathered this pass.

## 10. AI Features
NOT OBSERVED / TODO — Slack is widely known to ship "Slack AI" (search, summarization) as of recent years, but this was not independently verified against an official source in this pass. Flagged for a dedicated pass.

## 11. Mobile Experience
NOT OBSERVED — mobile apps are widely known to exist (iOS/Android) but no mobile-specific parity or sentiment data was gathered in this pass.

## 12. Security & Permissions
NOT OBSERVED / TODO — Slack is widely known to offer SSO and enterprise compliance features at higher (Enterprise Grid) tiers, but this was not independently verified against an official source in this pass.

## 13. Strengths / Weaknesses
- **Best features (CUSTOMER FEEDBACK):** Channel organization; integration ecosystem breadth; real-time collaboration.
- **Weakest features (CUSTOMER FEEDBACK):** Free-tier limitations; cost scaling at team growth; search precision on older content.

## 14. Competitive Score
Not yet scored — scoring requires the full category benchmark (see `../../03-Benchmarks/team-chat-messaging.md`), which is newly created and at partial depth pending live-product exploration.

## 15. What We Should Learn
- **RECOMMENDATION — adopt:** A large, well-curated third-party app marketplace is a clear, repeatedly-cited competitive advantage for Slack over both Microsoft Teams and Zoho Cliq (derived from Section 4 cross-references) — worth studying as a growth/retention lever independent of the "bundle into our own suite" strategies Zoho and Microsoft use.
- **RECOMMENDATION — avoid:** Overly restrictive free-tier limits (90-day history cutoff cited) that reviewers explicitly call out as a pain point for smaller teams (CUSTOMER FEEDBACK, Section 5).
- **RECOMMENDATION — investigate:** Exact current pricing, AI feature set ("Slack AI"), and security/compliance tier details should be re-verified directly from slack.com before any external-facing comparison — none of these were fetched from a primary source in this pass.

## 16. Standard Questionnaire — Full Answer Set (seetha_research_library.md §4–15)

> Every question is answered using only what already exists in Sections 1–15 of this file. No new research was performed for this section.

### Product Identification (§4, Q1–12)
1. What is the product? — Slack: channel-based real-time team messaging platform with calls, file sharing, and extensive third-party app integrations (see Section 1).
2. What problem does it solve? — see Section 1.
3. What category does it belong to? — Team Chat & Messaging (see Section 1).
4. Who is the target customer? — see Section 1.
5. Individuals/startups/SMBs/enterprises/multiple? — Multiple — free tier for small teams through Enterprise Grid for large orgs (see Section 1).
6. Major features? — see Section 3.
7. Most important workflows? — NOT OBSERVED (see Section 7).
8. What platforms does it support? — Web, desktop, mobile (see Section 1) — not independently re-verified against an official page in this pass.
9. Web/desktop/mobile/all? — All (see Section 1).
10. What integrations does it provide? — see Section 3 (~2,500+ app marketplace).
11. What ecosystem does it belong to? — Salesforce (parent company), though Slack operates as a standalone product not bundled into a broader "suite" the way Microsoft Teams or Zoho Cliq are (see Section 1).
12. Which other products in the same company's suite does it integrate with? — TODO — Salesforce CRM integration is mentioned in comparison sources but not independently detailed (see Section 1).

### Business & Market (§5, Q13–26)
13. How long has the product existed? — TODO — not independently verified with a primary source in this pass (see Section 2).
14. How important is it within its company's ecosystem? — TODO — not researched in this pass.
15. What pricing plans are available? — see Section 2 table (Free, Pro, Business+, Enterprise Grid).
16. What is included in each plan? — see Section 2 table (partial — Enterprise Grid inclusions are TODO).
17. Is there a free plan? — Yes (see Section 2).
18. Is there a free trial? — TODO/NOT OBSERVED — not confirmed in sources gathered this pass.
19. What limitations exist in the free/trial version? — 90-day message-history limit; restricted integrations, storage, and group calling (per review-summary, UNVERIFIED against official terms) (see Section 2).
20. Approximate customer/user base? — TODO — no verified figure gathered in this pass.
21. What industries use it? — INFERENCE: broad, tech/software/knowledge-work-leaning (see Section 1).
22. Which geographic markets are important? — TODO.
23. Market positioning? — see Section 2.
24. What differentiates it from competitors? — see Section 2 ("Key differentiators").
25. What type of company/customer gets the most value from it? — INFERENCE: organizations wanting a best-of-breed, vendor-neutral chat tool with deep third-party app integration rather than a suite-bundled option (see Section 2).
26. Major selling points? — see Section 2/13.

### Competitor Research (§6, Q27–41)
27. Who are the top competitors? — see Section 4.
28. Which competitor is the closest equivalent? — Microsoft Teams and Zoho Cliq (see Section 4).
29. Which competitor has the largest customer/user base? — TODO — not compared in this pass.
30. Which competitor has the strongest enterprise presence? — Microsoft Teams, via Microsoft 365 bundling (see Section 4).
31. Which competitor is strongest for SMBs? — TODO.
32. Which competitor is cheapest? — Zoho Cliq, per the cross-referenced pricing comparison in zoho-cliq.md (Cliq ~$1–$3/user/mo vs. Slack Pro ~$8.75/user/mo) (see Section 2/4).
33. Which competitor provides the most features? — TODO — not independently compared feature-by-feature.
34. Which competitor has the simplest UX? — NOT OBSERVED unless independently verified across products via live use.
35. Which competitor has the strongest automation? — TODO.
36. Which competitor has the strongest analytics? — TODO.
37. Which competitor has the strongest integrations? — Slack itself is cited as the integration-breadth leader (~2,500+ apps) relative to Zoho Cliq and (by general industry reputation) Microsoft Teams, though Teams was not independently compared on this axis in this pass (see Section 3/4).
38. Which competitor has the strongest AI capabilities? — TODO — not independently compared in this pass.
39. Which competitor is growing fastest? — TODO.
40. Which competitor receives the strongest customer feedback (rating)? — Slack shows the highest ratings among the three most-substantiated products in this category (G2 4.5/5 ~38,250 reviews; Capterra 4.7/5 ~24,044 reviews), ahead of Zoho Cliq (G2 4.4/5, 259) and Microsoft Teams (G2 4.4/5, ~17,904) (see Section 5, cross-referenced with zoho-cliq.md and microsoft-teams.md).
41. Which competitor appears technically strongest? — NOT OBSERVED without live technical exploration of all competitors.

### Customer Review Research (§7, Q42–57)
42. What do customers like most? — see Section 5.
43. What do customers dislike most? — see Section 5.
44. What problems are repeatedly mentioned? — see Section 5 ("Recurring complaints").
45. What features receive the most praise? — see Section 5 ("Recurring praise").
46. What features receive the most complaints? — see Section 5.
47. What do customers say about usability? — see Section 5 (channels described as keeping conversations "structured and easy to follow").
48. What do customers say about performance? — NOT OBSERVED — no performance-specific complaints surfaced in sources gathered.
49. What do customers say about reliability? — see Section 9.
50. What do customers say about customer support? — NOT OBSERVED — not covered in the review summary gathered for Section 5.
51. What do customers say about pricing/value? — see Section 5 ("per-user costs add up as teams grow").
52. What do customers say about integrations? — see Section 5 (Procore integration cited positively).
53. What do customers say about mobile applications? — NOT OBSERVED (see Section 11).
54. What do customers say about onboarding? — NOT OBSERVED — not covered in Section 5.
55. What features do customers request? — NOT OBSERVED (see Section 5, flagged as needing a dedicated pass).
56. Why do customers switch away from the product? — INFERENCE only (see Section 5).
57. Why do customers choose the product over competitors? — INFERENCE only (see Section 5).

### UI/UX Benchmarking (§8, Q58–82) — requires live product access
58. Overall UI style? — NOT OBSERVED.
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
73. Search design? — NOT OBSERVED (Section 5 notes reviewer sentiment that search requires precise keywords for older content — CUSTOMER FEEDBACK, not an observed design description).
74. Notification handling? — NOT OBSERVED.
75. Error display? — NOT OBSERVED.
76. Loading-state display? — NOT OBSERVED.
77. Empty-state display? — NOT OBSERVED.
78. Confirmation-message display? — NOT OBSERVED.
79. Permissions/roles representation? — NOT OBSERVED.
80. Onboarding handling? — NOT OBSERVED.
81. Responsive behavior? — NOT OBSERVED.
82. Accessibility handling? — NOT OBSERVED.

### Workflow Benchmarking (§9, Q83–99) — requires live product access
83. Steps required (for the product's core workflow)? — NOT OBSERVED.
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
100. Frontend technology used? — NOT OBSERVED.
101. Backend architecture inferred? — NOT OBSERVED.
102. APIs/network calls triggered? — NOT OBSERVED.
103. What happens on button click (technical chain)? — NOT OBSERVED.
104. HTTP methods used? — NOT OBSERVED.
105. Data sent? — NOT OBSERVED.
106. Response returned? — NOT OBSERVED.
107. REST/GraphQL/other? — NOT OBSERVED. (Slack is widely known to publish a public Web API, but this was not independently verified against an official doc in this pass.)
108. Authentication handling? — NOT OBSERVED technically.
109. Session-state maintenance? — NOT OBSERVED.
110. Caching handling? — NOT OBSERVED.
111. File/media upload handling? — NOT OBSERVED.
112. Real-time update handling? — NOT OBSERVED.
113. Third-party services integrated (technically visible)? — NOT OBSERVED (publicly-documented integration names are in Q144 instead).
114. Technologies visible in browser/network layer? — NOT OBSERVED.
115. Error handling? — NOT OBSERVED.
116. Retry handling? — NOT OBSERVED.
117. Frontend/backend interaction patterns? — NOT OBSERVED.
118. Notably strong technical patterns? — NOT OBSERVED.

### Performance & Reliability (§11, Q119–129)
119. Application load speed? — NOT OBSERVED.
120. Time for major screens to become interactive? — NOT OBSERVED.
121. Noticeable delays? — NOT OBSERVED.
122. Handles large datasets well? — NOT OBSERVED directly; CUSTOMER FEEDBACK signal: search on older/large message history requires precise keywords (see Section 5/9).
123. Reliability of important workflows? — NOT OBSERVED.
124. Recurring customer complaints about bugs? — NOT OBSERVED — no bug-specific complaints surfaced in sources gathered this pass.
125. Reported downtime? — TODO (Slack has had widely-publicized past outages; not independently re-verified with a primary source in this pass).
126. Behavior during failures? — NOT OBSERVED.
127. Retry mechanisms available? — NOT OBSERVED.
128. Useful error messages? — NOT OBSERVED.
129. Performance change for complex workflows? — NOT OBSERVED.

### AI Capability Benchmarking (§12, Q130–143)
130. Does the product have AI features? — TODO/NOT OBSERVED in this pass (see Section 10) — "Slack AI" is widely known to exist but not independently verified here.
131. What AI features exist? — TODO.
132. What problems do those AI features solve? — TODO.
133. Does AI generate content? — TODO.
134. Does AI summarize information? — TODO.
135. Does AI automate workflows? — TODO — Workflow Builder is widely known (no-code, not necessarily AI-driven); not independently confirmed in this pass.
136. Does AI provide recommendations? — TODO.
137. Does AI analyze customer/product data? — TODO.
138. Does AI use company/customer context? — TODO.
139. What AI models/providers are publicly disclosed? — TODO.
140. How is AI integrated into the UI? — NOT OBSERVED.
141. Does AI reduce the number of manual steps? — NOT OBSERVED.
142. Do customers consider the AI useful? — NOT OBSERVED.
143. What limitations/complaints exist around the AI? — NOT OBSERVED.

### Integration Research (§13, Q144–154)
144. What integrations are available? — see Section 3 (~2,500+ app marketplace: GitHub, Jira, Salesforce, Zendesk, PagerDuty, Google Workspace, Microsoft 365, etc.).
145. Which integrations are most important? — INFERENCE: developer/ops tools (GitHub, Jira, PagerDuty) and CRM/support tools (Salesforce, Zendesk), given their prominence in the cited comparison source (see Section 3).
146. Which integrations are unique? — INFERENCE: the sheer breadth of the marketplace itself (~2,500+ apps) is the differentiator, more than any single integration (see Section 3/15).
147. How easy is integration setup? — NOT OBSERVED.
148. Does the integration require authentication? — NOT OBSERVED.
149. How is connected-account status shown? — NOT OBSERVED.
150. What happens when an integration fails? — NOT OBSERVED.
151. How are permissions handled (for integrations)? — NOT OBSERVED.
152. How are multiple connected accounts handled? — NOT OBSERVED.
153. How does the product synchronize data? — NOT OBSERVED.
154. How does it show synchronization errors? — NOT OBSERVED.

### Security & Permissions (§14, Q155–163) — publicly documented only
155. How are user roles handled? — TODO/NOT OBSERVED (see Section 12).
156. What permission levels exist? — TODO.
157. How are teams/workspaces structured? — TODO — Slack is widely known to use a "workspace" concept, but this was not independently documented from a primary source in this pass.
158. How is access controlled? — TODO.
159. How is authentication handled? — TODO.
160. Is SSO available? — TODO/NOT OBSERVED — widely believed to exist at higher tiers, not independently confirmed in this pass.
161. Is two-factor authentication available? — TODO/NOT OBSERVED.
162. How are connected accounts protected? — TODO/NOT OBSERVED.
163. What security/compliance information is publicly documented? — TODO/NOT OBSERVED (see Section 12).

### Mobile Experience (§15, Q164–171)
164. Is the mobile app feature-complete? — NOT OBSERVED (see Section 11).
165. Which desktop features are missing? — NOT OBSERVED.
166. How is navigation adapted for mobile? — NOT OBSERVED.
167. How is content creation handled (mobile)? — NOT OBSERVED.
168. How are notifications handled (mobile)? — NOT OBSERVED.
169. Mobile performance? — NOT OBSERVED.
170. What do mobile users complain about? — NOT OBSERVED — no mobile-specific review mining performed.
171. Which competitor has the strongest mobile experience? — TODO/NOT OBSERVED — requires comparable mobile research across all competitors.

## Sources
- [G2 — Slack Reviews](https://www.g2.com/products/slack/reviews) — retrieved 2026-09-11 (via search summary)
- [Capterra — Slack Reviews](https://www.capterra.com/p/135003/Slack/reviews/) — retrieved 2026-09-11 (via search summary)
- [Capterra — Slack vs Google Chat comparison](https://www.capterra.com/compare/135003-175800/Slack-vs-Chat) — retrieved 2026-09-11 (via search summary)
- [G2 — Slack vs Zoho Cliq comparison](https://www.g2.com/compare/slack-vs-zoho-cliq) — retrieved 2026-09-11 (via search summary)
- [Software Advice — Slack vs Zoho Cliq](https://www.softwareadvice.com/remote-support/slack-profile/vs/zoho-cliq/) — retrieved 2026-09-11 (via search summary)
- [Aaxonix — Zoho Cliq vs Slack: Full Comparison for Teams](https://aaxonix.com/resources/zoho-cliq-team-messaging/) — retrieved 2026-09-11 (third-party sourced)
- [Unicloud IT Services — Zoho Cliq vs Slack vs Microsoft Teams](https://uniclouditservices.com/zoho-cliq-vs-slack-vs-microsoft-teams-collaboration-with-workflow-context/) — retrieved 2026-09-11 (third-party sourced, Zoho-partner site — flagged for potential vendor bias)
- [Zoho Cliq — Product Research Record (internal)](../../01-Zoho-Primary-Products/zoho-cliq.md) — cross-referenced 2026-09-11
