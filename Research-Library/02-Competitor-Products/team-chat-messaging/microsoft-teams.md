---
title: "Microsoft Teams"
company: "Microsoft Corporation"
category: "Team Chat & Messaging"
last_verified: "2026-09-11"
status: "in-progress"
---

# Microsoft Teams — Product Research Record

> Deep UI/component/technical exploration (Sections 6–9, 11–12) requires live login and is marked NOT OBSERVED — this record covers Layer 1–2 research (identity, market, pricing, reviews) from public sources only, following the zoho-cliq.md and slack.md worked examples.
>
> **Same parent company, distinct product/category note:** Microsoft is also the parent company of the Outlook/Microsoft 365 email product already documented in this library at [`../communication/microsoft-365.md`](../communication/microsoft-365.md). That record scopes Microsoft 365 narrowly to its email/communication capability (Outlook client + Exchange Online), matching Zoho Mail's category. This record instead scopes Microsoft Teams to its real-time chat/calling/meetings capability, matching Zoho Cliq's category (Team Chat & Messaging). The two records deliberately do not duplicate each other's scope, but both products ship as part of the same Microsoft 365 commercial bundle — see Section 2 for the pricing/bundling relationship between them.

## 1. Identity
- **Company (FACT):** Microsoft Corporation.
- **Category:** Team Chat & Messaging (real-time chat, channels, calls, video meetings) — bundled into and cross-sold with the broader Microsoft 365 productivity suite (cross-reference: `../communication/microsoft-365.md`).
- **Problem solved (INFERENCE from comparison-source summaries):** Combines instant messaging/chat with a video call/meeting platform inside one application, positioned as an advantage over needing separate chat and conferencing tools (Software Advice comparison summary, retrieved 2026-09-11).
- **Target users / industries:** Organizations already standardized on Microsoft 365/Windows; broad range from SMB through large enterprise (INFERENCE, consistent with the same framing used for Microsoft 365/Outlook in `../communication/microsoft-365.md` Section 1).
- **Segment:** Multiple — often included at no additional line-item cost within existing Microsoft 365 business/enterprise subscriptions, alongside a standalone free tier and paid standalone tiers (see Section 2).
- **Platforms:** Web, desktop (Windows/Mac), mobile (iOS/Android) — FACT, standard industry knowledge; not independently re-verified against an official Microsoft page in this pass.
- **Ecosystem / sister products it integrates with (FACT, cross-referenced with microsoft-365.md):** Exchange Online/Outlook, SharePoint, OneDrive, Word/Excel/PowerPoint, Microsoft Entra ID, Microsoft 365 Copilot — the same Microsoft 365 ecosystem documented in `../communication/microsoft-365.md` Section 1.

## 2. Market & Business
- **Founded / product age:** TODO — not verified in this pass (Microsoft Teams is widely known to have launched in 2017 as part of Office 365, per common industry knowledge; not independently re-confirmed with a primary source in this pass).
- **Approximate customer/user base:** TODO — no verified figure gathered in this pass.

### Pricing (search-relayed, retrieved 2026-09-11 — not independently fetched from a Microsoft Teams-specific official pricing page in this pass)
| Plan | Price | Billing | Key inclusions | Source |
|---|---|---|---|---|
| Free | $0 | N/A | Basic chat, channels, calling (feature ceiling not itemized in sources gathered) | Search-relayed, retrieved 2026-09-11 — UNVERIFIED against official page |
| Standalone paid tier(s) | Starting ~$4/user/mo | Not specified | TODO — exact tier name/inclusions not itemized in the source relayed | Search-relayed, retrieved 2026-09-11 — UNVERIFIED against official page |
| Bundled within Microsoft 365 Business/Enterprise plans | No separate line-item cost when bundled | N/A | Full Teams chat/calling/meetings functionality included as part of Business Basic/Standard/Premium and Enterprise tiers (cross-reference: `../communication/microsoft-365.md` Section 2 pricing table) | Cross-referenced with microsoft-365.md, retrieved 2026-09-11 |

**Caveat (per evidence-guidelines.md rule 2):** No Microsoft Teams-specific official pricing page was directly fetched in this pass; the "$4/user/mo starting price" figure is search-relayed only and could refer to a specific standalone SKU (e.g., "Microsoft Teams Essentials") not independently identified in this pass. Must be re-verified directly against microsoft.com before external use. The `../communication/microsoft-365.md` record's own pricing table (Business Basic $7/user/mo, Standard $14/user/mo, Premium $22/user/mo, effective July 2026) is itself flagged UNVERIFIED against Microsoft's official compare-plans page, which could not be fetched in that prior pass either — so any Teams-via-Microsoft-365 bundled pricing claim inherits that same caveat.
- **Free plan/trial (FACT, low-confidence):** A free tier exists (search-relayed, retrieved 2026-09-11); trial terms NOT OBSERVED in this pass.
- **Market positioning (INFERENCE):** Positioned as the natural, low-friction extension of an organization's existing Microsoft 365 investment — chat/calling functionality "comes with" the productivity suite an org may already be paying for, rather than being sold as a separate best-of-breed product (contrasts with Slack's standalone, integration-marketplace-first positioning and Zoho Cliq's low-cost Zoho-ecosystem-native positioning).
- **Key differentiators claimed/cited by comparisons:** Combines chat and video meetings/calls in one application, cited as an advantage over needing Slack + a separate conferencing tool (Software Advice, retrieved 2026-09-11); deep integration with Microsoft 365 apps (Outlook, SharePoint, OneDrive) inherited from the broader suite (cross-reference microsoft-365.md).

## 3. Features (comparison/aggregator-sourced, not independently verified via login in this pass)
- Channel-based team messaging, 1:1 and group chat
- Integrated video meetings/calls, screen sharing (native, in the same application as chat — cited as a differentiator vs. Slack+Zoom-style setups)
- File sharing (inherits SharePoint/OneDrive backing per general Microsoft 365 architecture — NOT independently confirmed as Teams-specific in this pass)
- Resource-usage note (CUSTOMER FEEDBACK-adjacent, comparison-sourced): reviewers/comparison sources note Teams "uses a lot of system resources on the computer," with a noticeable performance impact on systems with 8GB or less of memory (Software Advice comparison summary, retrieved 2026-09-11)
- Integrations: native integration across the Microsoft 365 ecosystem (Outlook, SharePoint, OneDrive, Entra ID) per cross-reference with microsoft-365.md Section 3; third-party (non-Microsoft) integration depth NOT OBSERVED in this pass.

## 4. Competitors
| Competitor | Type | Notes |
|---|---|---|
| [Zoho Cliq](../../01-Zoho-Primary-Products/zoho-cliq.md) | Direct — lower-cost, Zoho-ecosystem-native challenger | Zoho Cliq's own record lists Microsoft Teams as a direct competitor, noting Teams' ~$4/user/mo starting price sits between Cliq's (~$1–$3/user/mo) and Slack's (~$8.75/user/mo) per one comparison source (zoho-cliq.md Section 2/4, retrieved 2026-09-11) |
| [Slack](slack.md) | Direct — standalone, integration-breadth leader | Most frequently cited head-to-head competitor for Microsoft Teams across comparison platforms (Capterra "Zoho Cliq vs Microsoft Teams," Software Advice "Microsoft Teams vs Zoho Cliq" both reference Slack as the third point of comparison); Slack shows a higher G2 rating (4.5/5, ~38,250 reviews) than Teams (4.4/5, ~17,904 reviews) in figures gathered this pass (see slack.md Section 5) |
| Google Chat | Direct — Google-Workspace-bundled | Named in general team-chat competitive landscape; not independently researched against Teams specifically in this pass |
| Zoom (Team Chat) | Indirect — video-first, chat as secondary feature | Not independently verified as a direct competitor in the sources gathered this pass; carried over as a plausible candidate only |

## 5. Customer Reviews
- **Source(s):** G2 — 4.4/5, ~17,904 reviews; star breakdown: 66% 5-star, 25% 4-star, 5% 3-star, 1% 2-star, 0% 1-star (search-relayed, retrieved 2026-09-11). Capterra — 4.5/5, ~10,811 reviews (figure noted to vary slightly, ~10,739–10,940, across different Capterra pages fetched by the search tool; search-relayed, retrieved 2026-09-11).
- **Liked most (CUSTOMER FEEDBACK):** Good value for money, especially when Teams is included within an existing Office 365/Microsoft 365 subscription rather than purchased separately; video calls, instant messaging, and file sharing called out as core valued features (search-relayed summary, retrieved 2026-09-11).
- **Disliked most (CUSTOMER FEEDBACK):** Cost can feel high for small businesses/individual users when not already bundled into a Microsoft 365 subscription; certain advanced features require additional paid upgrades; resource-heavy on lower-spec computers (8GB RAM or less) per comparison-source commentary (search-relayed summary + Software Advice comparison, retrieved 2026-09-11).
- **Recurring complaints:** Perceived cost when unbundled from Microsoft 365; upsell friction for advanced features; system resource usage on lower-spec hardware (CUSTOMER FEEDBACK).
- **Recurring praise:** Value when bundled with an existing Microsoft 365 subscription; combined chat+meetings in one app (CUSTOMER FEEDBACK).
- **Requested features:** NOT OBSERVED in this pass — needs a dedicated review-mining pass.
- **Why customers switch away / choose it:** INFERENCE only — "choose it" plausibly correlates with already being a Microsoft 365 customer (near-zero marginal cost); "switch away" plausibly correlates with wanting a lighter-weight client or avoiding Microsoft 365 lock-in. Needs direct review quotes to upgrade to CUSTOMER FEEDBACK.

## 6. UI/UX
NOT OBSERVED — requires live login/exploration of the actual app.

## 7. User Flows
NOT OBSERVED — same as above.

## 8. Technical Observations
NOT OBSERVED — DOM/network/API capture requires live session exploration; not performed in this pass.

## 9. Performance & Reliability
NOT OBSERVED directly via live product. CUSTOMER FEEDBACK/comparison-sourced signal (Section 5): Teams is described as resource-heavy, with a noticeable performance impact on machines with 8GB RAM or less — the clearest reliability/performance-adjacent theme surfaced in this pass. This echoes (in a different form) the "clunky, resource-heavy" theme already logged for the Outlook client in `../communication/microsoft-365.md` Section 5 — worth flagging as a possible pattern across Microsoft's client applications generally, though this is INFERENCE pending dedicated verification across more Microsoft products.

## 10. AI Features
NOT OBSERVED / TODO in this pass specifically for Teams. Cross-reference: `../communication/microsoft-365.md` Section 10 documents Microsoft 365 Copilot Chat and the paid Copilot add-on, which are vendor-stated to extend across Teams as well as Outlook — but no Teams-specific Copilot capability (e.g., in-meeting AI notes/summaries) was independently verified in this pass.

## 11. Mobile Experience
NOT OBSERVED — mobile apps are widely known to exist (iOS/Android) but no mobile-specific parity or sentiment data was gathered in this pass.

## 12. Security & Permissions
NOT OBSERVED / TODO — cross-reference `../communication/microsoft-365.md` Section 12 for the Microsoft 365 suite-level security stack (Entra ID, Defender for Business, DLP, eDiscovery) that would apply to Teams when bundled; no Teams-specific security documentation was independently fetched in this pass.

## 13. Strengths / Weaknesses
- **Best features (CUSTOMER FEEDBACK):** Value when bundled with an existing Microsoft 365 subscription; combined chat + video meetings in one application.
- **Weakest features (CUSTOMER FEEDBACK):** Perceived cost when not already bundled; additional paid upgrades required for advanced features; resource-heavy on lower-spec hardware.

## 14. Competitive Score
Not yet scored — scoring requires the full category benchmark (see `../../03-Benchmarks/team-chat-messaging.md`), newly created and at partial depth pending live-product exploration.

## 15. What We Should Learn
- **RECOMMENDATION — adopt:** Bundling chat and video meetings/calls into a single application (rather than requiring a separate conferencing tool) is cited as a specific advantage over a Slack+Zoom-style setup, and directly parallels Zoho Cliq's own stated differentiator of combining synchronous and asynchronous communication in one product (derived from Section 2/3, cross-referenced with zoho-cliq.md Section 2).
- **RECOMMENDATION — investigate:** The "included in a subscription you already pay for" pricing model appears to drive strong perceived value in reviews, but also drives the "feels expensive when unbundled" complaint — worth studying how this compares to Zoho Cliq's low-cost-standalone model and Slack's pure-standalone model as three distinct monetization strategies within the same category (derived from Section 5, cross-referenced with zoho-cliq.md and slack.md Section 2).
- **RECOMMENDATION — avoid:** High resource/RAM usage on end-user machines — a specific, named complaint in comparison sources for Teams, and echoes a similar "resource-heavy" theme already logged for the Outlook client — worth checking whether this is a broader pattern across Microsoft's client applications once more are researched (derived from Section 5/9, cross-referenced with `../communication/microsoft-365.md`).
- **RECOMMENDATION — investigate:** All Teams-specific pricing figures in this record are search-relayed and UNVERIFIED — a dedicated fetch of Microsoft's Teams-specific pricing/plans page is needed before external use.

## 16. Standard Questionnaire — Full Answer Set (seetha_research_library.md §4–15)

> Every question is answered using only what already exists in Sections 1–15 of this file. No new research was performed for this section.

### Product Identification (§4, Q1–12)
1. What is the product? — Microsoft Teams: real-time team chat, channels, and integrated video meetings/calls, bundled into the Microsoft 365 suite (see Section 1).
2. What problem does it solve? — see Section 1.
3. What category does it belong to? — Team Chat & Messaging (see Section 1).
4. Who is the target customer? — see Section 1.
5. Individuals/startups/SMBs/enterprises/multiple? — Multiple — organizations already on Microsoft 365, spanning SMB through enterprise (see Section 1).
6. Major features? — see Section 3.
7. Most important workflows? — NOT OBSERVED (see Section 7).
8. What platforms does it support? — Web, desktop, mobile (see Section 1) — not independently re-verified against an official page in this pass.
9. Web/desktop/mobile/all? — All (see Section 1).
10. What integrations does it provide? — see Section 3 (Microsoft 365 ecosystem).
11. What ecosystem does it belong to? — The Microsoft 365 ecosystem (see Section 1, cross-referenced with `../communication/microsoft-365.md`).
12. Which other products in the same company's suite does it integrate with? — Exchange Online/Outlook, SharePoint, OneDrive, Word/Excel/PowerPoint, Microsoft Entra ID, Microsoft 365 Copilot (see Section 1).

### Business & Market (§5, Q13–26)
13. How long has the product existed? — TODO — not independently verified with a primary source in this pass (see Section 2).
14. How important is it within its company's ecosystem? — INFERENCE: bundled at no separate cost into most Microsoft 365 Business/Enterprise tiers, making it a core retention feature of the wider suite (see Section 2, cross-referenced with microsoft-365.md).
15. What pricing plans are available? — see Section 2 table (Free, standalone paid tier(s), bundled-within-Microsoft-365).
16. What is included in each plan? — see Section 2 table (partial — standalone tier inclusions are TODO).
17. Is there a free plan? — Yes (see Section 2).
18. Is there a free trial? — NOT OBSERVED — not confirmed in sources gathered this pass.
19. What limitations exist in the free/trial version? — TODO — not itemized in sources gathered this pass.
20. Approximate customer/user base? — TODO — no verified figure gathered in this pass.
21. What industries use it? — INFERENCE: organizations standardized on Microsoft 365/Windows (see Section 1).
22. Which geographic markets are important? — TODO.
23. Market positioning? — see Section 2.
24. What differentiates it from competitors? — see Section 2 ("Key differentiators claimed/cited by comparisons").
25. What type of company/customer gets the most value from it? — INFERENCE: organizations already paying for Microsoft 365, for whom Teams is effectively a zero-marginal-cost addition (see Section 2/5).
26. Major selling points? — see Section 2/13.

### Competitor Research (§6, Q27–41)
27. Who are the top competitors? — see Section 4.
28. Which competitor is the closest equivalent? — Slack (standalone team-chat product, most frequently compared head-to-head) (see Section 4).
29. Which competitor has the largest customer/user base? — TODO — not independently compared in this pass.
30. Which competitor has the strongest enterprise presence? — Microsoft Teams itself is described elsewhere (zoho-cliq.md Section 4) as the enterprise-leaning incumbent among this category's three most-substantiated products; among Section 4's own listed competitors, no further ranking was performed.
31. Which competitor is strongest for SMBs? — Zoho Cliq, per its own record's positioning and lower price point (see Section 4, cross-referenced with zoho-cliq.md).
32. Which competitor is cheapest? — Zoho Cliq (~$1–$3/user/mo) is cheaper than Teams' cited ~$4/user/mo standalone starting price, which is itself cheaper than Slack's Pro tier (~$8.75/user/mo) (see Section 2/4).
33. Which competitor provides the most features? — TODO — not independently compared feature-by-feature.
34. Which competitor has the simplest UX? — NOT OBSERVED unless independently verified across products via live use.
35. Which competitor has the strongest automation? — TODO.
36. Which competitor has the strongest analytics? — TODO.
37. Which competitor has the strongest integrations? — Slack, per its own record's cited ~2,500+ app marketplace (see slack.md Section 3/4) — Teams was not independently benchmarked against this figure in this pass.
38. Which competitor has the strongest AI capabilities? — TODO — not independently compared in this pass.
39. Which competitor is growing fastest? — TODO.
40. Which competitor receives the strongest customer feedback (rating)? — Slack (G2 4.5/5, ~38,250 reviews) rates higher than Microsoft Teams (G2 4.4/5, ~17,904 reviews) among the figures gathered in this pass (see Section 5, cross-referenced with slack.md).
41. Which competitor appears technically strongest? — NOT OBSERVED without live technical exploration of all competitors.

### Customer Review Research (§7, Q42–57)
42. What do customers like most? — see Section 5.
43. What do customers dislike most? — see Section 5.
44. What problems are repeatedly mentioned? — see Section 5 ("Recurring complaints").
45. What features receive the most praise? — see Section 5 ("Recurring praise").
46. What features receive the most complaints? — see Section 5.
47. What do customers say about usability? — NOT OBSERVED — no usability-specific commentary distinct from value/cost themes surfaced in sources gathered.
48. What do customers say about performance? — see Section 5/9 (resource-heavy on lower-spec hardware).
49. What do customers say about reliability? — see Section 9.
50. What do customers say about customer support? — NOT OBSERVED — not covered in the review summary gathered for Section 5.
51. What do customers say about pricing/value? — see Section 5 ("good value... especially when included in Office 365 subscriptions" vs. "cost can be high... when not bundled").
52. What do customers say about integrations? — NOT OBSERVED — not specifically called out beyond the general Microsoft 365 ecosystem framing (see Section 3).
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
73. Search design? — NOT OBSERVED.
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
107. REST/GraphQL/other? — NOT OBSERVED. (Microsoft Graph API is widely known to expose Teams data; not independently verified against an official doc in this pass.)
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
121. Noticeable delays? — NOT OBSERVED directly; CUSTOMER FEEDBACK/comparison-sourced signal: resource-heavy on lower-spec hardware (see Section 5/9).
122. Handles large datasets well? — NOT OBSERVED — no dataset-scale-specific complaints surfaced in sources gathered.
123. Reliability of important workflows? — NOT OBSERVED.
124. Recurring customer complaints about bugs? — NOT OBSERVED — no bug-specific complaints surfaced in sources gathered this pass.
125. Reported downtime? — TODO (Microsoft Teams has had widely-publicized past outages; not independently re-verified with a primary source in this pass).
126. Behavior during failures? — NOT OBSERVED.
127. Retry mechanisms available? — NOT OBSERVED.
128. Useful error messages? — NOT OBSERVED.
129. Performance change for complex workflows? — NOT OBSERVED.

### AI Capability Benchmarking (§12, Q130–143)
130. Does the product have AI features? — TODO/NOT OBSERVED specifically for Teams in this pass (see Section 10) — cross-reference microsoft-365.md Section 10 for the suite-level Copilot claim.
131. What AI features exist? — TODO.
132. What problems do those AI features solve? — TODO.
133. Does AI generate content? — TODO.
134. Does AI summarize information? — TODO.
135. Does AI automate workflows? — TODO.
136. Does AI provide recommendations? — TODO.
137. Does AI analyze customer/product data? — TODO.
138. Does AI use company/customer context? — TODO.
139. What AI models/providers are publicly disclosed? — TODO.
140. How is AI integrated into the UI? — NOT OBSERVED.
141. Does AI reduce the number of manual steps? — NOT OBSERVED.
142. Do customers consider the AI useful? — NOT OBSERVED.
143. What limitations/complaints exist around the AI? — NOT OBSERVED.

### Integration Research (§13, Q144–154)
144. What integrations are available? — see Section 3 (Microsoft 365 ecosystem: Outlook, SharePoint, OneDrive, Entra ID).
145. Which integrations are most important? — INFERENCE: Outlook (calendar/meeting scheduling) and SharePoint/OneDrive (file sharing), given they are the most commonly cited Microsoft 365 integrations across this library's records (see Section 3, cross-referenced with microsoft-365.md).
146. Which integrations are unique? — INFERENCE: the combined chat+meetings-in-one-app design itself, more than any single named integration (see Section 2/3).
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
157. How are teams/workspaces structured? — TODO — Teams is widely known to use a "Teams and Channels" structure, but this was not independently documented from a primary source in this pass.
158. How is access controlled? — TODO — cross-reference microsoft-365.md Section 12 for the suite-level Entra ID conditional-access claim.
159. How is authentication handled? — TODO — inherits Microsoft Entra ID per the broader suite (cross-reference microsoft-365.md Section 1), not independently confirmed as Teams-specific in this pass.
160. Is SSO available? — TODO/NOT OBSERVED — likely yes via Entra ID (cross-reference microsoft-365.md), not independently confirmed as Teams-specific in this pass.
161. Is two-factor authentication available? — TODO/NOT OBSERVED.
162. How are connected accounts protected? — TODO/NOT OBSERVED.
163. What security/compliance information is publicly documented? — TODO/NOT OBSERVED — cross-reference microsoft-365.md Section 12 for suite-level claims (Defender for Business, DLP, eDiscovery) not independently confirmed as Teams-specific in this pass.

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
- [Software Advice — Microsoft Teams vs Zoho Cliq](https://www.softwareadvice.com/voip/microsoft-teams-profile/vs/zoho-cliq/) — retrieved 2026-09-11 (via search summary)
- [Capterra — Zoho Cliq vs Microsoft Teams comparison](https://www.capterra.com/compare/167639-168668/Zoho-Cliq-vs-Microsoft-Teams) — retrieved 2026-09-11 (via search summary)
- [Microsoft Teams Reviews — G2](https://www.g2.com/products/microsoft-teams/reviews) — retrieved 2026-09-11 (via search summary)
- [Microsoft Teams Pricing — Capterra](https://www.capterra.com/p/168668/Microsoft-Teams/pricing/) — retrieved 2026-09-11 (via search summary)
- [Microsoft Teams Reviews — Capterra](https://www.capterra.com/p/168668/Microsoft-Teams/reviews/) — retrieved 2026-09-11 (via search summary)
- [Unicloud IT Services — Zoho Cliq vs Slack vs Microsoft Teams](https://uniclouditservices.com/zoho-cliq-vs-slack-vs-microsoft-teams-collaboration-with-workflow-context/) — retrieved 2026-09-11 (third-party sourced, Zoho-partner site — flagged for potential vendor bias)
- [Zoho Cliq — Product Research Record (internal)](../../01-Zoho-Primary-Products/zoho-cliq.md) — cross-referenced 2026-09-11
- [Slack — Product Research Record (internal)](slack.md) — cross-referenced 2026-09-11
- [Microsoft 365 / Outlook — Product Research Record (internal, same parent company, distinct product/category)](../communication/microsoft-365.md) — cross-referenced 2026-09-11
