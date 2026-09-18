---
product: "Zoho SalesIQ"
company: "Zoho Corporation"
category: "Live Chat & Sales Engagement"
last_verified: "2026-09-11"
status: "in-progress"
---

# Zoho SalesIQ — Product Research Record

> Deep UI/component/technical exploration (Sections 6–9, 11–12) requires live login and is marked NOT OBSERVED — this record covers Layer 1–2 research (identity, market, reviews, competitors) from public sources only, following the Zoho Desk / Zoho Social worked examples. New flagship product for the newly created "Live Chat & Sales Engagement" category (see `../00-Framework/category-taxonomy.md`, added 2026-09-11).

## 1. Identity
- **Company (FACT):** Zoho Corporation.
- **Category:** Live Chat & Sales Engagement — proactive website live chat, visitor tracking, and pre-sales engagement, distinct from post-sale ticketing/helpdesk (see `../00-Framework/category-taxonomy.md`).
- **Problem solved (FACT, vendor-stated — zoho.com/salesiq/, retrieved 2026-09-11):** Enables marketing, sales, and support teams to proactively engage website and mobile-app visitors throughout their lifecycle, combining live chat, visitor behavior tracking/analytics, lead scoring, and AI chatbots to "initiate the right kind of conversation at exactly the right time" (vendor phrasing).
- **Target users / industries (FACT, vendor-stated + CUSTOMER FEEDBACK, capterra.com, retrieved 2026-09-11):** Vendor site lists diverse industries: startups, e-commerce, financial services, travel, real estate, education, restaurants, and manufacturing. Capterra reviewer demographics skew heavily small-business: 87% of Capterra reviewers identify as small businesses, with Information Technology and Services the largest single sector at 15% (CUSTOMER FEEDBACK, capterra.com/p/168135/Zoho-SalesIQ/, retrieved 2026-09-11).
- **Segment:** Primarily SMB/startup per Capterra reviewer mix, with Basic/Professional/Enterprise tiers scaling toward mid-market and larger visitor volumes (INFERENCE from pricing-tier structure, Section 2).
- **Platforms (FACT):** Web (JS embed widget) plus a mobile SDK ("Mobilisten") for in-app chat on Android, iOS, and React Native (zoho.com/salesiq/, retrieved 2026-09-11).
- **Ecosystem / sister products it integrates with (FACT):** Zoho CRM, Zoho Desk, Zoho Campaigns, and other Zoho One apps; Zoho Desk's own record notes Zoho SalesIQ as its live-chat channel provider at the Enterprise tier (cross-reference: `zoho-desk.md` Section 3) — confirming a direct product-level dependency between the two categories.

## 2. Market & Business

### Company / product age
- **Launch year:** TODO — not confirmed from an official Zoho source in this pass; needs a dedicated search (Zoho SalesIQ is understood to be one of Zoho's longer-standing products but the exact launch year was not verified here).
- **Approximate customer/user base:** TODO — no official user-count figure was found on zoho.com/salesiq/ in this pass; needs re-verification.

### Pricing (FACT, official page fetched — zoho.com/salesiq/pricing.html, retrieved 2026-09-11; exact USD/INR per-operator prices for paid tiers not shown on page, requires sales contact/quote)
| Plan | Price | Operator Licenses | Visitor Insights | Chat Sessions | Chatbots | Key incremental features |
|---|---|---|---|---|---|---|
| Free | $0 | 3 | 10K visitors/mo | 100 operator chat sessions/mo | None | Basic visitor info, canned replies, file sharing, voice notes, credit-card masking, mobile SDK |
| Basic | Custom (per operator; not displayed) | 1 | 50K visitors/mo | 1,000/mo | 1 bot, 25K bot sessions | + Advanced visitor location, lead/company scoring, proactive messaging, chat routing, translation, messaging channels (WhatsApp, Instagram, Facebook), audio/video calls, Answer Bot, workflows |
| Professional (marked "Most Popular" on official page) | Custom (not displayed) | 1 | 100K visitors/mo | Unlimited | 5 bots, 50K bot sessions | + Conversation monitoring, dynamic FAQs, real-time reporting, weekly/monthly reports, custom widgets, TV app |
| Enterprise | Custom (not displayed) | 1 | 200K visitors/mo | Unlimited | 10 bots, 200K bot sessions | + Company profile enrichment, Answer Bot with built-in AI, bot training via web URLs, audit logs, cloud telephony integrations |

- **FACT caveat:** The official pricing page (zoho.com/salesiq/pricing.html, retrieved 2026-09-11) does not display numeric per-operator USD/INR prices for Basic/Professional/Enterprise in this session — plan limits/features above are directly observed, but exact price points require either a geo-specific fetch or a sales quote. One third-party source (zoho.com/blog/salesiq/best-drift-alternatives.html cross-reference within a WebSearch summary, retrieved 2026-09-11) cites "$9 per agent per month" as a Zoho SalesIQ starting price point — **UNVERIFIED against the official pricing page in this pass**, flagged as third-party sourced and needing direct confirmation.
- **Free plan/trial (FACT):** A permanent Free plan exists (not just a trial), capped at 3 operator licenses, 10K monthly visitor insights, 100 operator chat sessions/month, no chatbot. Free-trial terms for paid tiers were not confirmed in this pass — TODO.
- **Add-ons (FACT, official page):** Additional brands, extra chatbots, additional bot chat sessions, and higher visitor-tracking tiers (100K/200K/500K/1M/2M/5M visitors/month) are sold as add-ons on top of any paid plan.
- **Market positioning (INFERENCE + CUSTOMER FEEDBACK):** Positioned by Zoho and third-party comparison content as an "all-in-one" proactive engagement platform competing directly against both dedicated live-chat tools (LiveChat, tawk.to, Olark) and higher-end conversational-marketing/AI platforms (Drift, Intercom) — see Section 4.
- **Key differentiators claimed by vendor (FACT, vendor-stated, retrieved 2026-09-11):** Native, deep integration with Zoho CRM/Desk/Campaigns (push chats into CRM as leads automatically — also CUSTOMER FEEDBACK, see Section 5); visitor lead-scoring based on browsing behavior; 2026 "Summer '26" release messaging emphasizes "agentic AI" that "understands context and acts accordingly" (vendor marketing language, not independently verified in this pass).

## 3. Features (FACT, vendor-stated — zoho.com/salesiq/, retrieved 2026-09-11)
- Live chat and omnichannel messaging across websites, mobile apps, and channels (WhatsApp, Instagram, Facebook Messenger — paid tiers)
- Lead capture and qualification: pre-chat forms, automated lead/company scoring based on browsing behavior
- AI chatbots (Zobot): no-code chatbot builder, "Answer Bot" (built-in AI at Enterprise tier), bot training via web URLs (Enterprise)
- Visitor insights: real-time visitor behavior monitoring, chat triggers based on lead score/page activity/time spent, advanced location data (paid tiers)
- Analytics & reporting: real-time reporting, weekly/monthly reports (Professional+), conversation monitoring
- Mobile SDK ("Mobilisten") for native in-app chat: Android, iOS, React Native
- Audio/video calls (paid tiers); cloud telephony integrations (Enterprise); audit logs (Enterprise)
- 30+ integrations cited by vendor, including CRM platforms (Zoho CRM, HubSpot), helpdesk (Zendesk), e-commerce (Shopify), email marketing, and analytics tools (FACT, vendor-stated; depth of each integration — native vs. limited — NOT OBSERVED/not independently verified this pass)
- Most important workflow (INFERENCE from feature set): visitor lands on site → SalesIQ scores/tracks behavior → proactive chat trigger or chatbot engagement → operator handoff → lead pushed to Zoho CRM/Desk.

## 4. Competitors
| Competitor | Type (direct/indirect/enterprise/SMB/low-cost/emerging) | Notes |
|---|---|---|
| LiveChat (Text/LiveChat Software) | Direct — SMB/mid-market live chat | G2 ~4.5/5; Capterra 4.7/5 from ~1,649 reviews (FACT, retrieved 2026-09-11). Full stub record created — see `../02-Competitor-Products/live-chat-sales-engagement/livechat.md` |
| tawk.to | Direct — free/low-cost SMB live chat | G2 4.5/5 from ~181 reviews (FACT, retrieved 2026-09-11); core platform free forever with unlimited agents. Full stub record created — see `../02-Competitor-Products/live-chat-sales-engagement/tawk-to.md` |
| Drift (now a Salesloft/Clari product) | Was direct/enterprise conversational-marketing — **status changed in 2026** | G2 4.4/5 from 1,200+ reviews historically (FACT, retrieved 2026-09-11), but multiple independent sources (leadgenius.com, warmly.ai, 1mind.com, salesloft.com newsroom, demandgenreport.com, retrieved 2026-09-11) report that on **March 6, 2026, Clari + Salesloft announced the sunset of Drift**, naming AI startup "1mind" as the referred (not migrated) successor for existing customers, with no confirmed hard end-of-life date. **Not selected for a full stub record** given this is an actively winding-down product as of this record's retrieval date — noted here for competitive-landscape awareness only; flagged for re-verification before citing externally. |
| Intercom | Indirect / overlapping category — conversational support + live chat | Already fully documented at `../02-Competitor-Products/customer-support-helpdesk/intercom.md` (Customer Support/Helpdesk category). Cross-category overlap: Intercom's unified messaging inbox and live-chat widget compete directly with SalesIQ's live-chat/engagement use case even though Intercom is filed under Helpdesk — see `../03-Benchmarks/live-chat-sales-engagement.md` cross-category note. |
| Olark | Indirect / simple SMB live chat | Named repeatedly in aggregator "alternatives" lists (selecthub.com, chatim.app, retrieved 2026-09-11); reported starting price ~$29/agent/month per a single WebSearch aggregation — **UNVERIFIED**, not independently confirmed against Olark's own pricing page in this pass; not selected for a full stub (lower confidence data than LiveChat/tawk.to). |
| Tidio, Crisp Chat, Chaport, HelpCrunch, Smartsupp, JivoChat | Emerging / low-cost SMB live chat | Named in aggregator "alternatives to Zoho SalesIQ" lists (alternativeto.net, chatim.app, retrieved 2026-09-11) — not independently verified, carried over as candidates for a later research pass. |

**Note on selection:** LiveChat and tawk.to are the two most consistently and independently cross-checkable competitors — both have confirmed G2 and Capterra ratings/review counts from primary review platforms (see Section 5 of their respective stub records) and represent two different competitive angles (LiveChat = paid mid-market incumbent; tawk.to = free/low-cost disruptor). Drift was considered but excluded from a full stub because independent 2026 sourcing indicates the product is being actively sunset by its new owner (Salesloft/Clari), which would make a fresh "competitor" record misleading without heavy caveats already captured above.

## 5. Customer Reviews
- **Source:** G2 — 4.4/5 from approximately 253 reviews (66% 5-star, 26% 4-star, 3% 3-star, 2% 2-star, 1% 1-star) — FACT, per findstack.com's G2 aggregation and g2.com/products/zoho-salesiq/features, retrieved 2026-09-11. **Review count/breakdown sourced via a third-party aggregation of G2 data (findstack.com) rather than a direct G2 page fetch in this pass — flagged for re-verification.**
- **Source:** Capterra — 4.4/5 overall from approximately 98 reviews (FACT, capterra.com/p/168135/Zoho-SalesIQ/, retrieved 2026-09-11). Sub-scores: Ease of Use 4.4, Customer Service 4.1, Features 4.3, Value for Money 4.4 (same source).
- **Liked most (CUSTOMER FEEDBACK, capterra.com + aggregated review summaries, retrieved 2026-09-11):** Native integration with Zoho CRM, Zoho Campaigns, and Zoho Desk — specifically the ability to see whether a website visitor is an existing customer and to auto-push chats into Zoho CRM as leads; live chat described as effective for closing "quick deals" with instant answers; correlation view between chats, pages visited, and visitor behavior; Zobot chatbot usable for policy/FAQ answering and connectable to Facebook Page inbox and Instagram DM; overall described as comprehensive, user-friendly, with easy design/development setup; reported higher conversion rates attributed to lead scoring plus real-time chat.
- **Disliked most (CUSTOMER FEEDBACK, same sources):** Not all Zoho/third-party applications integrate smoothly for cross-tool collaboration; the Zobot chatbot is reported to sometimes answer incorrectly despite training, and some reviewers describe it as unable to be effectively trained on their own knowledge base, calling the AI-training claims "misleading" and citing lost business as a result; connection-reliability issues reported by some users; setup/usage described by some as more challenging than other Zoho products for less-technical users; requests for better filtering, stronger longitudinal reporting, and more reliable live notifications/mobile tracking (softwareadvice.com / capterra.com aggregated themes, retrieved 2026-09-11).
- **Recurring complaints:** Chatbot (Zobot) answer accuracy/training limitations; cross-app integration friction; mobile/notification reliability; steeper learning curve for non-technical setup.
- **Recurring praise:** Native Zoho CRM/Desk/Campaigns integration and lead-to-CRM automation; visitor behavior correlation view; ease of use for core live-chat operation; value for price (4.4 Value for Money on Capterra).
- **Requested features:** Better filtering and stronger reporting over time (see Capterra summary above); more reliable live notifications and mobile tracking.
- **Why customers switch away / choose it:** INFERENCE only — chatbot reliability/training complaints plausibly drive switch-away for teams needing dependable AI-driven self-service; deep Zoho-ecosystem integration plausibly drives adoption/retention for existing Zoho CRM/Desk customers. No direct switch-away quotes gathered in this pass; needs a dedicated review-mining pass to upgrade to CUSTOMER FEEDBACK with quotes.

## 6. UI/UX
NOT OBSERVED — requires live login/exploration of the actual app (operator console, chatbot builder, visitor-tracking dashboard). Flagged as the next research step.

## 7. User Flows
NOT OBSERVED — same as above.

## 8. Technical Observations
NOT OBSERVED — DOM/network/API capture (e.g., how the embeddable JS widget establishes a chat session, how visitor tracking events are transmitted) requires live session exploration; not performed in this pass.

## 9. Performance & Reliability
NOT OBSERVED directly. CUSTOMER FEEDBACK signal only: some reviewers report "connection reliability issues" and requests for "more reliable live notifications and mobile tracking" (see Section 5) — this is the only performance/reliability-adjacent signal surfaced so far, not a comprehensive assessment.

## 10. AI Features
- **Zobot (FACT, vendor-stated, zoho.com/salesiq/, retrieved 2026-09-11):** No-code chatbot builder for building automated 24/7 support/engagement bots; available from 1 bot on Basic up to 10 bots on Enterprise, with bot-chat-session caps that scale by tier (25K on Basic, 50K on Professional, 200K on Enterprise).
- **Answer Bot (FACT, vendor-stated):** Available across paid tiers; Enterprise tier adds "Answer Bot with built-in AI" and the ability to train bots via web URLs (i.e., pointing the bot at existing site/help content) — Enterprise-only per the official pricing page structure (Section 2).
- **"Agentic AI" positioning (FACT, vendor marketing language, "Summer '26" release messaging, retrieved 2026-09-11):** Vendor material describes newer AI capability as "agentic" — "understands context and acts accordingly" — but no specific feature breakdown, model provider, or independent verification of this claim was found in this pass. Treat as vendor marketing until a dedicated feature-level pass is done.
- **Customer sentiment on AI features (CUSTOMER FEEDBACK, see Section 5):** Mixed — reviewers value having a chatbot for FAQ/policy answering and multi-channel connection (Facebook/Instagram), but a recurring complaint is that Zobot "sometimes isn't as smart," answers incorrectly despite training, and in at least one review theme is described as unable to be effectively trained on the reviewer's own knowledge base ("misleading," "lost business" — capterra.com aggregated theme, retrieved 2026-09-11).

## 11. Mobile Experience
NOT OBSERVED — a native mobile SDK ("Mobilisten" for Android/iOS/React Native, FACT vendor-stated) exists for embedding chat inside a customer's own mobile app, but this is distinct from a SalesIQ operator-facing mobile app; existence/feature-parity of an operator mobile app was not confirmed in this pass. Some reviewers separately reference "mobile tracking" reliability concerns (see Section 5) but without enough detail to assess feature parity.

## 12. Security & Permissions
NOT OBSERVED — roles/permissions model, SSO/2FA availability not confirmed from public docs in this pass. Audit logs are mentioned as an Enterprise-tier feature (FACT, Section 2/3) but the broader roles/permissions model and authentication options were not researched.

## 13. Strengths / Weaknesses
- **Best features (CUSTOMER FEEDBACK):** Native Zoho CRM/Desk/Campaigns integration with automatic chat-to-lead push; visitor behavior tracking and lead scoring; ease of use for core live-chat operation; value for price.
- **Weakest features (CUSTOMER FEEDBACK):** Zobot chatbot accuracy/training reliability; cross-application integration friction outside the core Zoho stack; setup complexity for less-technical users; requests for stronger longitudinal reporting/filtering and more reliable notifications.

## 14. Competitive Score
Not yet scored — scoring requires the full category benchmark (see `../03-Benchmarks/live-chat-sales-engagement.md`); LiveChat and tawk.to currently only have stub records.

## 15. What We Should Learn
- **RECOMMENDATION — adopt:** The "auto-push chat to CRM as a scored lead" pattern is the most consistently praised aspect of Zoho SalesIQ across review sources gathered here — a strong signal that tight bidirectional integration between a live-chat tool and a CRM/helpdesk (not just a generic webhook) meaningfully improves perceived value (derived from Section 5 CUSTOMER FEEDBACK).
- **RECOMMENDATION — investigate before adopting:** Zobot's "train on your knowledge base" AI claim coexists with reviewer complaints that it "can't be trained" effectively and gives wrong answers — this is the same marketed-vs-real-world AI-capability gap pattern already flagged in the Intercom Fin record (`../02-Competitor-Products/customer-support-helpdesk/intercom.md` Section 15) — reinforces treating AI-resolution/training marketing claims skeptically across this whole product area (derived from Section 5/10 CUSTOMER FEEDBACK, cross-referenced).
- **RECOMMENDATION — avoid:** Hiding all paid-tier numeric pricing behind a "contact sales" wall (as SalesIQ's official pricing page does for Basic/Professional/Enterprise) makes independent price-to-value comparison difficult for both customers and this research library — contrast with tawk.to's fully transparent free-forever model and LiveChat's published per-seat tiers (derived from Section 2 across this record and the two competitor stubs).

## 16. Standard Questionnaire — Full Answer Set (seetha_research_library.md §4–15)

> Retrofitted from Sections 1–15 of this same record, following the Zoho Desk precedent. No new research performed for this section — answers are either a direct restatement (with the evidence tag already used in the source section), `see Section N`, `NOT OBSERVED`, or `TODO`.

### Product Identification (§4, Q1–12)
1. What is the product? — Zoho SalesIQ, a live-chat and pre-sales visitor engagement/tracking platform (see Section 1).
2. What problem does it solve? — see Section 1 (Problem solved).
3. What category does it belong to? — Live Chat & Sales Engagement (see Section 1).
4. Who is the target customer? — see Section 1 (Target users / industries).
5. Individuals/startups/SMBs/enterprises/multiple? — Primarily SMB/startup, scaling toward mid-market via tiering (see Section 1, Segment).
6. Major features? — see Section 3.
7. Most important workflows? — INFERENCE from feature set only (see Section 3); NOT OBSERVED via live use (see Section 7).
8. What platforms does it support? — Web widget + mobile SDK (Mobilisten) for Android/iOS/React Native (see Section 1, Platforms).
9. Web/desktop/mobile/all? — Web + embeddable mobile SDK confirmed; standalone operator mobile app NOT OBSERVED (see Section 11).
10. What integrations does it provide? — see Section 3 (30+ integrations claimed: CRM, helpdesk, e-commerce, email marketing, analytics); integration depth NOT OBSERVED.
11. What ecosystem does it belong to? — Zoho ecosystem / Zoho One (see Section 1, Ecosystem).
12. Which other products in the same company's suite does it integrate with? — Zoho CRM, Zoho Desk, Zoho Campaigns, Zoho One apps (FACT, see Section 1).

### Business & Market (§5, Q13–26)
13. How long has the product existed? — TODO, not confirmed this pass (see Section 2).
14. How important is it within its company's ecosystem? — INFERENCE — cross-referenced as Zoho Desk's own live-chat channel provider at Enterprise tier (see Section 1), suggesting structural importance within the Zoho suite; no explicit vendor ranking found — TODO.
15. What pricing plans are available? — see Section 2 (table: Free, Basic, Professional, Enterprise).
16. What is included in each plan? — see Section 2 table.
17. Is there a free plan? — Yes, permanent Free plan, capped at 3 operators (FACT, see Section 2).
18. Is there a free trial? — TODO — not confirmed for paid tiers in this pass.
19. What limitations exist in the free/trial version? — 3 operators, 10K visitor insights/mo, 100 chat sessions/mo, no chatbot (see Section 2).
20. Approximate customer/user base? — TODO, not found this pass (see Section 2).
21. What industries use it? — see Section 1 (vendor-listed: startups, e-commerce, financial services, travel, real estate, education, restaurants, manufacturing).
22. Which geographic markets are important? — TODO — not researched this pass.
23. Market positioning? — see Section 2 (all-in-one proactive engagement platform).
24. What differentiates it from competitors? — see Section 2 (Key differentiators claimed by vendor).
25. What type of company/customer gets the most value from it? — INFERENCE — SMB/startup teams already using Zoho CRM/Desk (see Section 1/5); not an explicit vendor statement — TODO to confirm directly.
26. Major selling points? — see Section 13 (Best features).

### Competitor Research (§6, Q27–41)
27. Who are the top competitors? — see Section 4.
28. Which competitor is the closest equivalent? — LiveChat and tawk.to, the two most independently cross-checkable direct competitors (see Section 4, Note on selection).
29. Which competitor has the largest customer/user base? — TODO — no directly comparable user-count figures gathered for SalesIQ itself; LiveChat/tawk.to review-volume comparison only (see Section 4/5 of their stubs).
30. Which competitor has the strongest enterprise presence? — Historically Drift, per its enterprise-only pricing (~$80K–$150K+/year) — but Drift is being sunset as of March 2026 per Section 4; among actively sold products, TODO — not directly compared.
31. Which competitor is strongest for SMBs? — tawk.to, per its free-forever unlimited-agent model (see Section 4) — INFERENCE from pricing structure, not a direct feature-for-feature comparison.
32. Which competitor is cheapest? — tawk.to (free-forever core platform) is the cheapest of the competitors researched (FACT re: tawk.to's pricing model, see its stub record).
33. Which competitor provides the most features? — TODO — not directly compared feature-for-feature.
34. Which competitor has the simplest UX? — NOT OBSERVED — requires live use across products.
35. Which competitor has the strongest automation? — TODO — not compared.
36. Which competitor has the strongest analytics? — TODO — not compared.
37. Which competitor has the strongest integrations? — TODO — not compared.
38. Which competitor has the strongest AI capabilities? — TODO — not compared; note both SalesIQ's Zobot and Drift's (pre-sunset) AI have documented real-world-vs-marketing gaps (see Section 10, Section 4).
39. Which competitor is growing fastest? — TODO — not researched.
40. Which competitor receives the strongest customer feedback (rating)? — LiveChat (Capterra 4.7/5) rates highest of the three directly compared (SalesIQ 4.4 Capterra, tawk.to 4.5 G2) per Sections 4/5 and the competitor stubs — but review volumes and platforms differ, so this is directional, not a controlled comparison.
41. Which competitor appears technically strongest? — NOT OBSERVED — no technical exploration performed for any competitor (see Section 8).

### Customer Review Research (§7, Q42–57)
42. What do customers like most? — see Section 5 (Liked most).
43. What do customers dislike most? — see Section 5 (Disliked most).
44. What problems are repeatedly mentioned? — see Section 5 (Recurring complaints).
45. What features receive the most praise? — see Section 5 (Recurring praise).
46. What features receive the most complaints? — see Section 5 (Zobot accuracy/training).
47. What do customers say about usability? — see Section 5 (comprehensive/user-friendly for core use, but harder setup for non-technical users).
48. What do customers say about performance? — see Section 9 (connection-reliability complaints).
49. What do customers say about reliability? — see Section 9.
50. What do customers say about customer support? — Capterra sub-score of 4.1/5 for Customer Service, lower than Ease of Use/Value for Money (see Section 5) — no qualitative detail gathered beyond the score.
51. What do customers say about pricing/value? — see Section 5 (Value for Money 4.4/5 on Capterra).
52. What do customers say about integrations? — see Section 5 (Zoho-ecosystem integration praised; cross-app/non-Zoho integration friction disliked).
53. What do customers say about mobile applications? — see Section 11 (mobile tracking reliability concerns referenced but not detailed).
54. What do customers say about onboarding? — TODO — not specifically gathered in this pass beyond general "easy design/development" praise (see Section 5).
55. What features do customers request? — see Section 5 (better filtering, stronger longitudinal reporting, more reliable notifications/mobile tracking).
56. Why do customers switch away from the product? — INFERENCE only, see Section 5 (no direct switch-away quotes gathered).
57. Why do customers choose the product over competitors? — INFERENCE only, see Section 5 (existing Zoho ecosystem usage).

### UI/UX Benchmarking (§8, Q58–82) — requires live product access
58. Overall UI style? — NOT OBSERVED, see Section 6.
59. Is navigation easy to understand? — NOT OBSERVED, see Section 6.
60. Sidebar structure? — NOT OBSERVED, see Section 6.
61. Dashboard structure? — NOT OBSERVED, see Section 6.
62. Clicks required for common workflows? — NOT OBSERVED, see Section 7.
63. Important screens? — NOT OBSERVED, see Section 6.
64. Important UI components? — NOT OBSERVED, see Section 6.
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
79. Permissions/roles representation? — NOT OBSERVED, see Section 12.
80. Onboarding handling? — NOT OBSERVED (marketing/review claims about "easy setup" are CUSTOMER FEEDBACK at best — see Section 5 — not observation).
81. Responsive behavior? — NOT OBSERVED.
82. Accessibility handling? — NOT OBSERVED.

### Workflow Benchmarking (§9, Q83–99) — requires live product access
83. Steps required (for the product's core workflow)? — NOT OBSERVED, see Section 7.
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
100. Frontend technology used? — NOT OBSERVED, see Section 8.
101. Backend architecture inferred? — NOT OBSERVED.
102. APIs/network calls triggered? — NOT OBSERVED.
103. What happens on button click (technical chain)? — NOT OBSERVED.
104. HTTP methods used? — NOT OBSERVED.
105. Data sent? — NOT OBSERVED.
106. Response returned? — NOT OBSERVED.
107. REST/GraphQL/other? — NOT OBSERVED.
108. Authentication handling? — NOT OBSERVED technically (see Section 12 for publicly documented auth options, also NOT OBSERVED in this pass).
109. Session-state maintenance? — NOT OBSERVED.
110. Caching handling? — NOT OBSERVED.
111. File/media upload handling? — NOT OBSERVED (vendor states file sharing/voice notes exist on Free tier — Section 3 — but the technical handling is not observed).
112. Real-time update handling? — NOT OBSERVED — INFERENCE only: live chat and "real-time reporting" (Professional+) imply some real-time transport (WebSocket/long-poll), not confirmed technically.
113. Third-party services integrated (technically visible)? — NOT OBSERVED (publicly-documented integration names are in Section 3 / Q144 instead).
114. Technologies visible in browser/network layer? — NOT OBSERVED.
115. Error handling? — NOT OBSERVED.
116. Retry handling? — NOT OBSERVED.
117. Frontend/backend interaction patterns? — NOT OBSERVED.
118. Notably strong technical patterns? — NOT OBSERVED.

### Performance & Reliability (§11, Q119–129)
119. Application load speed? — NOT OBSERVED, see Section 9.
120. Time for major screens to become interactive? — NOT OBSERVED.
121. Noticeable delays? — NOT OBSERVED.
122. Handles large datasets well? — NOT OBSERVED — no specific CUSTOMER FEEDBACK on this point was gathered (see Section 9).
123. Reliability of important workflows? — NOT OBSERVED directly; CUSTOMER FEEDBACK proxy: connection-reliability and mobile-tracking complaints (see Section 9/5).
124. Recurring customer complaints about bugs? — see Section 5 (connection reliability, chatbot mistraining).
125. Reported downtime? — TODO — check status-page/outage-tracker history; not done this pass.
126. Behavior during failures? — NOT OBSERVED.
127. Retry mechanisms available? — NOT OBSERVED.
128. Useful error messages? — NOT OBSERVED.
129. Performance change for complex workflows? — NOT OBSERVED.

### AI Capability Benchmarking (§12, Q130–143)
130. Does the product have AI features? — Yes, Zobot / Answer Bot (FACT, see Section 10).
131. What AI features exist? — see Section 10 (Zobot no-code builder; Answer Bot with built-in AI at Enterprise; "agentic AI" 2026 marketing).
132. What problems do those AI features solve? — 24/7 automated visitor engagement and FAQ/policy answering (see Section 10).
133. Does AI generate content? — TODO — not detailed in vendor material gathered this pass.
134. Does AI summarize information? — TODO — not described in Section 10.
135. Does AI automate workflows? — INFERENCE — chatbot-driven engagement and lead scoring are automation-adjacent (see Section 3/10) but not explicitly framed as "AI workflow automation" in vendor material gathered.
136. Does AI provide recommendations? — TODO — not described in Section 10.
137. Does AI analyze customer/product data? — INFERENCE — lead/company scoring implies behavioral data analysis (see Section 3); not explicitly framed as an "AI" feature in vendor material gathered.
138. Does AI use company/customer context? — FACT — Enterprise-tier bot training via web URLs implies use of the company's own site content as context (see Section 10).
139. What AI models/providers are publicly disclosed? — TODO — no specific model/provider disclosed in vendor material gathered this pass (contrast with Zoho Desk's Zia, which discloses third-party model pairing — see `zoho-desk.md` Section 10).
140. How is AI integrated into the UI? — NOT OBSERVED (requires live use).
141. Does AI reduce the number of manual steps? — NOT OBSERVED / vendor claim only.
142. Do customers consider the AI useful? — Mixed — see Section 10 CUSTOMER FEEDBACK (valued for FAQ/multi-channel connection, but accuracy/training complaints recur).
143. What limitations/complaints exist around the AI? — see Section 10 (accuracy, training-on-own-knowledge-base complaints).

### Integration Research (§13, Q144–154)
144. What integrations are available? — see Section 3 (30+ claimed: CRM, helpdesk, e-commerce, email marketing, analytics).
145. Which integrations are most important? — INFERENCE — Zoho CRM and Zoho Desk are the most repeatedly cited/praised (see Section 1/5) — TODO to confirm as an explicit vendor "most important" ranking vs. frequency of mention.
146. Which integrations are unique? — TODO — not assessed.
147. How easy is integration setup? — NOT OBSERVED.
148. Does the integration require authentication? — NOT OBSERVED.
149. How is connected-account status shown? — NOT OBSERVED.
150. What happens when an integration fails? — NOT OBSERVED.
151. How are permissions handled (for integrations)? — NOT OBSERVED.
152. How are multiple connected accounts handled? — NOT OBSERVED.
153. How does the product synchronize data? — NOT OBSERVED.
154. How does it show synchronization errors? — NOT OBSERVED.

### Security & Permissions (§14, Q155–163) — publicly documented only
155. How are user roles handled? — NOT OBSERVED, see Section 12.
156. What permission levels exist? — NOT OBSERVED, see Section 12.
157. How are teams/workspaces structured? — NOT OBSERVED, see Section 12 ("profiles" concept exists per pricing tiers — Section 2 — but not detailed as a permissions model).
158. How is access controlled? — NOT OBSERVED, see Section 12.
159. How is authentication handled? — NOT OBSERVED, see Section 12.
160. Is SSO available? — TODO — not documented in this pass.
161. Is two-factor authentication available? — TODO — not documented in this pass.
162. How are connected accounts protected? — TODO/NOT OBSERVED — not publicly documented in this pass.
163. What security/compliance information is publicly documented? — TODO — not researched this pass; Enterprise-tier "audit logs" is the only security-adjacent fact found (see Section 3).

### Mobile Experience (§15, Q164–171)
164. Is the mobile app feature-complete? — NOT OBSERVED, see Section 11 (Mobilisten SDK confirmed for embedding in customer apps; standalone operator app parity not confirmed).
165. Which desktop features are missing? — NOT OBSERVED.
166. How is navigation adapted for mobile? — NOT OBSERVED.
167. How is content creation handled (mobile)? — NOT OBSERVED.
168. How are notifications handled (mobile)? — NOT OBSERVED — but see Section 5 (customer requests for "more reliable... mobile tracking").
169. Mobile performance? — NOT OBSERVED, see Section 11.
170. What do mobile users complain about? — see Section 5/11 (mobile tracking reliability referenced, not detailed).
171. Which competitor has the strongest mobile experience? — TODO/NOT OBSERVED — requires comparable mobile research across all competitors.

## Sources
- [Zoho SalesIQ — official product page](https://www.zoho.com/salesiq/) — retrieved 2026-09-11
- [Zoho SalesIQ — official pricing page](https://www.zoho.com/salesiq/pricing.html) — retrieved 2026-09-11 (paid-tier numeric pricing not displayed; plan features/limits directly observed)
- [findstack.com — Zoho SalesIQ Review 2026 (G2 aggregation)](https://findstack.com/products/zoho-salesiq/reviews) — retrieved 2026-09-11
- [G2 — Zoho SalesIQ Features](https://www.g2.com/products/zoho-salesiq/features) — retrieved 2026-09-11
- [Capterra — Zoho SalesIQ](https://www.capterra.com/p/168135/Zoho-SalesIQ/) — retrieved 2026-09-11
- [Capterra — Zoho SalesIQ Reviews](https://www.capterra.com/p/168135/Zoho-SalesIQ/reviews/) — retrieved 2026-09-11
- [Software Advice — Zoho SalesIQ Reviews](https://www.softwareadvice.com/live-chat/zoho-salesiq-profile/reviews/) — retrieved 2026-09-11
- [Techjockey — Zoho SalesIQ Reviews](https://www.techjockey.com/reviews/zoho-salesiq) — retrieved 2026-09-11 (aggregator, review themes cross-checked against Capterra)
- [selecthub.com — Drift Alternatives & Competitors 2026](https://www.selecthub.com/live-chat-software/drift/alternatives/) — retrieved 2026-09-11
- [chatim.app — 25 Best Zoho Alternatives 2026](https://chatim.app/en/blog/zoho-alternatives/) — retrieved 2026-09-11 (aggregator)
- [zoho.com/blog/salesiq — Best Drift Alternatives](https://www.zoho.com/blog/salesiq/best-drift-alternatives.html) — retrieved 2026-09-11 (vendor-authored comparison; positioning claims are marketing, not neutral)
- Drift sunset sourcing: [leadgenius.com](https://www.leadgenius.com/resources/the-billion-dollar-fiasco-drift-is-dead-salesloft-is-drowning-and-the-pe-consolidation-playbook-is-breaking), [warmly.ai](https://www.warmly.ai/p/blog/blogdrift-shutting-down-best-alternative-2026), [1mind.com](https://www.1mind.com/announcements/1mind-is-the-exclusive-ai-successor-to-drift), [salesloft.com newsroom](https://www.salesloft.com/company/newsroom/1-mind-partnership), [demandgenreport.com](https://www.demandgenreport.com/industry-news/news-brief/clari-salesloft-1mind-partner-to-advance-revenue-orchestration/52221/) — all retrieved 2026-09-11
- See also `../02-Competitor-Products/live-chat-sales-engagement/livechat.md` and `.../tawk-to.md` for their own source lists.
