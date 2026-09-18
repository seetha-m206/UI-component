---
product: "Zoho Campaigns"
company: "Zoho Corporation"
category: "Marketing Automation"
last_verified: "2026-09-11"
status: "in-progress"
---

# Zoho Campaigns — Product Research Record

> Deep UI/component/technical exploration (Sections 6–9, 11–12) requires live login and is marked NOT OBSERVED — this record covers Layer 1–2 research (identity, market, reviews, competitors) from public sources only, gathered 2026-09-10.

## 1. Identity
- **Company (FACT):** Zoho Corporation.
- **Category:** Marketing Automation (email/SMS/WhatsApp campaign tool with workflow automation).
- **Problem solved (FACT, vendor-stated, zoho.com/campaigns, retrieved 2026-09-10):** An AI-assisted platform for creating and sending marketing campaigns across email, SMS, and WhatsApp from one dashboard, with automation, analytics, and personalization features powered by Zoho's "Zia" AI.
- **Target users / industries (FACT, vendor-stated):** Zoho markets the product explicitly as "made for small businesses with big ambitions," stating it requires "no large teams or complicated tech stacks" (zoho.com/campaigns, retrieved 2026-09-10).
- **Segment:** SMB and startups primarily, per vendor positioning above; CUSTOMER FEEDBACK (Capterra, see §5) confirms it is "great value... especially for small and micro businesses." Enterprise usage not emphasized in vendor marketing (INFERENCE).
- **Platforms:** Web (FACT — dashboard product). Mobile app existence: NOT OBSERVED/NOT VERIFIED in this pass — needs dedicated search.
- **Ecosystem / sister products it integrates with (FACT):** Zoho CRM, Zoho Commerce, and other Zoho apps; also third-party integrations including Salesforce, Shopify, HubSpot, and Zapier (zoho.com/campaigns and help.zoho.com, retrieved 2026-09-10).

## 2. Market & Business
- **Founded / product age:** NOT VERIFIED in this pass — TODO.
- **Approximate customer/user base:** NOT VERIFIED in this pass — TODO (no authoritative customer-count figure surfaced).

### Pricing (FACT, structure from official page zoho.com/campaigns/pricing.html, retrieved 2026-09-10 — exact monthly/annual dollar amounts did not render in the fetched content and must be re-verified directly against the live pricing page before external use)
| Plan | Contacts | Emails/month | Users | Key inclusions | Source |
|---|---|---|---|---|---|
| Forever Free | Up to 2,000 | 6,000 | 5 | List management, template library, drag-and-drop editor, generative AI, 35+ integrations, basic reporting | zoho.com/campaigns/pricing.html, retrieved 2026-09-10 |
| Standard (most popular) | 500 up to 100,000 | Unlimited | 10 | Basic segmentation, 120+ templates, A/B testing, 40+ integrations, basic drag-and-drop workflows, advanced analytics, custom roles, priority support | zoho.com/campaigns/pricing.html, retrieved 2026-09-10 |
| Professional | 500 up to 500,000 | Unlimited | 20+ | All Standard features + advanced segmentation, contact scoring, dynamic content, send-time optimization, abandoned-cart automation, purchase-follow-up workflows, frequency capping, webhooks, priority support | zoho.com/campaigns/pricing.html, retrieved 2026-09-10 |

- **Third-party aggregator figures (FACT, third-party sourced — verify against official page):** Aggregator sites (mailsoftly.com, sequenzy.com, retrieved 2026-09-10) quote Standard starting around **$3.50/mo** (annual billing, 500 contacts) and Professional starting around **$5.30/mo** (annual billing, 500 contacts), with ~25% discount for annual billing. These per-source numbers disagree in detail from site to site and were not independently confirmed on the live pricing page in this pass — **flagged for re-verification** before use in any external comparison.
- **Credit-based/pay-as-you-go option (FACT, mentioned by search-result summary of official site):** Zoho Campaigns also offers a credit-based option to buy email sends in blocks instead of a monthly subscription — details NOT VERIFIED, TODO.
- **Free plan/trial (FACT):** Forever-free plan, 2,000 contacts / 6,000 emails per month, 5 users, no time limit stated (as opposed to a time-boxed trial). New paid subscribers reportedly receive complimentary onboarding sessions for up to 60 days (zoho.com/campaigns, retrieved 2026-09-10) — TODO to verify exact terms.
- **Market positioning (INFERENCE from vendor copy + pricing structure):** Low-cost, ecosystem-bundled entrant aimed at SMBs price-sensitive relative to Mailchimp/ActiveCampaign, trading some automation sophistication for affordability and Zoho-suite integration.
- **Key differentiators claimed by vendor (FACT, vendor-stated):** Multi-channel (email + SMS + WhatsApp) in one workflow; Zia AI-assisted copywriting, personalization, send-time optimization, and sentiment analysis; native Zoho CRM/Commerce integration; 1,000+ app connectivity via Zoho Flow.

## 3. Features (FACT, vendor/help-doc-stated; not independently verified via live login in this pass)
- Drag-and-drop email editor with 120+ templates (Standard+)
- Multi-channel campaigns: email, SMS, WhatsApp workflows in a shared automation canvas
- Workflow automation: welcome emails, abandoned-cart follow-ups, subscription reminders, purchase follow-ups, triggered by contact actions (opens, clicks) or list/segment criteria
- Reply Tracking: builds distinct workflow branches for contacts who reply to a campaign
- Segmentation: basic (Standard) vs. advanced/contact scoring/dynamic content (Professional)
- A/B testing
- Send-time optimization and frequency capping (Professional)
- Generative AI (Zia) for copywriting and personalization
- Real-time analytics: opens, clicks, deliveries
- Integrations: native Zoho CRM/Commerce; Shopify, WooCommerce, BigCommerce; Salesforce, HubSpot; Zapier; 1,000+ apps via Zoho Flow
- Webhooks (Professional)

**Most important workflows (INFERENCE, from feature list):** (1) build/segment a contact list → design campaign → send/A-B test → review analytics; (2) build a trigger-based automation workflow (e.g., abandoned cart, welcome series) spanning email/SMS/WhatsApp.

## 4. Competitors
| Competitor | Type | Notes |
|---|---|---|
| Mailchimp | Direct — best-known mass-market alternative | G2: 4.3/5, ~18,416 reviews (aggregate seller page, FACT, retrieved 2026-09-10); free plan + paid tiers starting ~$13/mo (Essentials) per aggregator source |
| ActiveCampaign | Direct — advanced automation-focused, geared to experienced marketers/e-commerce | G2: ~4.4–4.5/5, ~14,647–14,790 reviews (sources vary slightly, FACT, retrieved 2026-09-10) |
| Constant Contact | Direct — cited by aggregators as "best overall Zoho Campaigns alternative"; known for customer support | G2: ~4.0–4.1/5, ~5,770–7,261 reviews (sources vary, FACT, retrieved 2026-09-10) |
| Brevo (formerly Sendinblue) | Direct — budget-tier, transactional + marketing combined | Named repeatedly across aggregator alternative-lists (trustradius.com, moosend.com); rating/reviews NOT VERIFIED in this pass |
| GetResponse, MailerLite, Campaign Monitor, Moosend | Lower-cost / SMB-focused alternatives | Named in aggregator "alternatives" lists (moosend.com, research.com, retrieved 2026-09-10); ratings NOT VERIFIED |
| HubSpot Marketing Hub | Indirect / enterprise-tier | Positioned by aggregators as a comprehensive but higher-cost alternative; ratings NOT VERIFIED |

**Note:** Aggregator "alternatives" lists (moosend.com, trustradius.com, research.com) are third-party sourced, not primary confirmation of head-to-head competitive standing — treated as candidate lists, with only Mailchimp/ActiveCampaign/Constant Contact carrying independently retrieved G2 ratings in this pass.

## 5. Customer Reviews
- **Source:** G2 — 4.3/5, ~980–1,042 reviews (sources vary slightly; FACT, retrieved 2026-09-10). Capterra — 4.3/5, 313 reviews (FACT, retrieved 2026-09-10).
- **Note:** G2 review-count/rating searches partly returned results for "Zoho Marketing Automation" (a related/overlapping Zoho product) rather than "Zoho Campaigns" specifically — the 4.3/5 figure is corroborated across both the dedicated Zoho Campaigns G2 features page and the Capterra listing, but the exact review count should be re-confirmed directly on g2.com/products/zoho-campaigns/reviews before external use.
- **Liked most (CUSTOMER FEEDBACK):** Tight integration with other Zoho apps (especially CRM, cited as eliminating data-management headaches); affordable pricing; drag-and-drop email editor; customizable automation workflows with a visual journey builder; detailed analytics/reporting.
- **Disliked most (CUSTOMER FEEDBACK):** Email deliverability — inconsistent, with reports of emails failing for unclear reasons and higher-than-expected bounce rates; automation builder described as lacking the intuitive design and sophistication of specialized platforms, adequate for simple sequences but constraining for complex customer journeys; UI and email templates described as could-use-an-update.
- **Recurring complaints (CUSTOMER FEEDBACK):** Deliverability issues; limited automation-builder sophistication vs. dedicated marketing-automation specialists.
- **Recurring praise (CUSTOMER FEEDBACK):** Zoho ecosystem/CRM integration; price-to-value ratio, especially for small/micro businesses; reporting quality.
- **Requested features:** NOT OBSERVED in this pass — needs a dedicated review-mining pass (sort G2/Capterra by "most recent" / "lowest rating").
- **Why customers switch away (INFERENCE from complaint themes):** Deliverability concerns are flagged as particularly risky for e-commerce/revenue-dependent senders; teams needing sophisticated multi-branch automation may outgrow the builder.
- **Why customers choose it over competitors (CUSTOMER FEEDBACK + INFERENCE):** Cost-effectiveness and existing-Zoho-ecosystem integration are the recurring reasons cited; G2 reviewers reportedly "recommend Zoho Campaigns for businesses prioritizing cost-effectiveness and ecosystem integration over cutting-edge features" (per aggregated G2 pros/cons summary, retrieved 2026-09-10).

## 6. UI/UX
NOT OBSERVED — requires live login/exploration of the actual app; not performed in this pass.

## 7. User Flows
NOT OBSERVED — same as above.

## 8. Technical Observations
NOT OBSERVED — DOM/network/API capture requires live session exploration; not performed in this pass.

## 9. Performance & Reliability
NOT OBSERVED directly (no live session). CUSTOMER FEEDBACK signal: email deliverability (bounce rates, unexplained send failures) is the most consistently reported reliability-adjacent complaint (see §5) — this concerns email-sending reliability specifically, not app uptime/performance, which has no gathered signal either way.

## 10. AI Features
- **FACT (vendor-stated, zoho.com/campaigns):** "Zia" AI is used for generative copywriting, personalization, send-time optimization, and sentiment analysis. Independent customer sentiment on these specific AI features: NOT OBSERVED in this pass — needs a dedicated review-mining search ("Zoho Campaigns Zia AI reviews").

## 11. Mobile Experience
NOT OBSERVED — mobile app existence/quality not verified in this pass; TODO.

## 12. Security & Permissions
- **FACT (vendor-stated, from pricing-page feature list):** "Custom roles" are listed as a Standard-plan-and-above feature, implying a role-based permissions model exists. SSO/2FA availability: NOT VERIFIED — needs a dedicated look at official docs/help.zoho.com.

## 13. Strengths / Weaknesses
- **Best features (CUSTOMER FEEDBACK):** Zoho ecosystem/CRM integration; price-to-value; visual/customizable automation workflows; reporting/analytics.
- **Weakest features (CUSTOMER FEEDBACK):** Email deliverability consistency; automation-builder sophistication for complex, multi-branch journeys; UI/template polish.

## 14. Competitive Score
Not yet scored — scoring requires the full category benchmark (see `../03-Benchmarks/marketing-automation.md`) once Mailchimp/ActiveCampaign/Constant Contact each have fuller records.

## 15. What We Should Learn
- **RECOMMENDATION — adopt:** Shared automation canvas spanning email/SMS/WhatsApp in one workflow builder, rather than siloed per-channel tools — a genuine differentiator versus channel-limited competitors (derived from §3 FACT feature set; not yet validated against how well competitors integrate multi-channel, which is TODO).
- **RECOMMENDATION — adopt:** Native, deep CRM integration as a retention/switching-cost lever — repeatedly cited as a top "liked most" theme (derived from §5 CUSTOMER FEEDBACK).
- **RECOMMENDATION — investigate before adopting:** Reported email-deliverability inconsistency is a serious risk for any product that competes on "reliable sends" — needs root-cause investigation (shared IP pools? authentication setup guidance? onboarding gaps?) before drawing implementation lessons (derived from §5/§9 CUSTOMER FEEDBACK).
- **RECOMMENDATION — avoid:** Under-investing in automation-builder sophistication once a product has SMB traction — this is Zoho Campaigns' most consistent "growth ceiling" complaint relative to specialists like ActiveCampaign (derived from §5 CUSTOMER FEEDBACK, INFERENCE on causal link to ActiveCampaign's stronger automation reputation).

## 16. Standard Questionnaire — Full Answer Set (seetha_research_library.md §4–15)

> Retrofitted mapping of the 171 standard questionnaire questions onto evidence already present in Sections 1–15 of this record. No new research was performed for this section; unanswered questions are marked TODO (publicly researchable, not yet done) or NOT OBSERVED (requires live-app access).

### Product Identification (§4, Q1–12)
1. What is the product? — Zoho Campaigns, an AI-assisted email/SMS/WhatsApp marketing campaign platform with automation and analytics (see Section 1).
2. What problem does it solve? — see Section 1 (FACT).
3. What category does it belong to? — Marketing Automation (see Section 1).
4. Who is the target customer? — Small businesses ("made for small businesses with big ambitions") (see Section 1, FACT vendor-stated).
5. Individuals/startups/SMBs/enterprises/multiple? — SMB and startups primarily; enterprise not emphasized (see Section 1).
6. Major features? — see Section 3.
7. Most important workflows? — see Section 3 (INFERENCE).
8. What platforms does it support? — Web confirmed; mobile app existence NOT VERIFIED (see Section 1).
9. Web/desktop/mobile/all? — Web (FACT); mobile NOT OBSERVED (see Sections 1, 11).
10. What integrations does it provide? — see Sections 1 and 3 (Zoho CRM/Commerce, Salesforce, Shopify, HubSpot, Zapier, Zoho Flow 1,000+ apps).
11. What ecosystem does it belong to? — Zoho Corporation's product suite (see Section 1).
12. Which other products in the same company's suite does it integrate with? — Zoho CRM, Zoho Commerce, other Zoho apps (see Section 1).

### Business & Market (§5, Q13–26)
13. How long has the product existed? — TODO (Section 2: "NOT VERIFIED in this pass").
14. How important is it within its company's ecosystem? — TODO (not explicitly addressed beyond ecosystem integration list in Section 1).
15. What pricing plans are available? — see Section 2 (Forever Free, Standard, Professional).
16. What is included in each plan? — see Section 2 table.
17. Is there a free plan? — Yes, Forever Free plan (see Section 2, FACT).
18. Is there a free trial? — No separate time-boxed trial identified; the Forever Free plan serves this role (see Section 2).
19. What limitations exist in the free/trial version? — 2,000 contacts, 6,000 emails/month, 5 users (see Section 2, FACT).
20. Approximate customer/user base? — TODO (Section 2: "no authoritative customer-count figure surfaced").
21. What industries use it? — TODO (vendor targets SMBs generally; no specific industries named in Section 1).
22. Which geographic markets are important? — TODO (not covered in this pass).
23. Market positioning? — see Section 2 (INFERENCE — low-cost, ecosystem-bundled entrant).
24. What differentiates it from competitors? — see Section 2 (FACT — multi-channel, Zia AI, native CRM integration, Zoho Flow connectivity).
25. What type of company/customer gets the most value from it? — Small and micro businesses already in/adjacent to the Zoho ecosystem (see Sections 1, 5 CUSTOMER FEEDBACK).
26. Major selling points? — Multi-channel automation canvas, CRM integration, price-to-value (see Sections 2, 13).

### Competitor Research (§6, Q27–41)
27. Who are the top competitors? — see Section 4.
28. Which competitor is the closest equivalent? — Mailchimp, described as the "best-known mass-market alternative" (see Section 4).
29. Which competitor has the largest customer/user base? — INFERENCE — Mailchimp, based on highest G2 review count (~18,416) among listed competitors (see Section 4).
30. Which competitor has the strongest enterprise presence? — HubSpot Marketing Hub, positioned as the "indirect/enterprise-tier" option (see Section 4).
31. Which competitor is strongest for SMBs? — TODO (no head-to-head SMB-fit ranking performed).
32. Which competitor is cheapest? — TODO (no direct price-by-price ranking across all competitors; Brevo/GetResponse/MailerLite/Moosend are noted as "lower-cost" per Section 4, but not ranked against each other).
33. Which competitor provides the most features? — TODO.
34. Which competitor has the simplest UX? — NOT OBSERVED unless independently verified across products via live use.
35. Which competitor has the strongest automation? — ActiveCampaign, described as "advanced automation-focused" (see Section 4).
36. Which competitor has the strongest analytics? — TODO.
37. Which competitor has the strongest integrations? — TODO.
38. Which competitor has the strongest AI capabilities? — TODO.
39. Which competitor is growing fastest? — TODO.
40. Which competitor receives the strongest customer feedback (rating)? — ActiveCampaign, ~4.4–4.5/5 vs. Zoho Campaigns' 4.3/5 (see Sections 4, 5).
41. Which competitor appears technically strongest? — NOT OBSERVED — mostly INFERENCE/NOT OBSERVED without live technical exploration of all competitors.

### Customer Review Research (§7, Q42–57)
42. What do customers like most? — see Section 5.
43. What do customers dislike most? — see Section 5.
44. What problems are repeatedly mentioned? — see Section 5 (recurring complaints).
45. What features receive the most praise? — see Section 5 (recurring praise).
46. What features receive the most complaints? — see Section 5 (deliverability, automation-builder sophistication).
47. What do customers say about usability? — see Section 5 (UI/templates described as "could use an update"); no dedicated usability-only review mining performed — TODO for deeper detail.
48. What do customers say about performance? — NOT OBSERVED directly; no app-performance-specific feedback gathered (see Section 9).
49. What do customers say about reliability? — see Section 9 (email deliverability complaints, CUSTOMER FEEDBACK).
50. What do customers say about customer support? — TODO (not covered in Section 5 in this pass).
51. What do customers say about pricing/value? — see Section 5 (affordable pricing, price-to-value cited as a strength).
52. What do customers say about integrations? — TODO (not explicitly covered as a review theme in Section 5).
53. What do customers say about mobile applications? — NOT OBSERVED (see Section 11).
54. What do customers say about onboarding? — TODO (Section 2 mentions vendor-offered complimentary onboarding sessions, but no customer sentiment gathered).
55. What features do customers request? — NOT OBSERVED (Section 5: "needs a dedicated review-mining pass").
56. Why do customers switch away from the product? — see Section 5.
57. Why do customers choose the product over competitors? — see Section 5.

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
80. Onboarding handling? — NOT OBSERVED (public marketing claims about onboarding in Section 2 are FACT-vendor-stated at best, not observation).
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
108. Authentication handling? — NOT OBSERVED technically (publicly documented auth options belong in Q159–161 instead).
109. Session-state maintenance? — NOT OBSERVED.
110. Caching handling? — NOT OBSERVED.
111. File/media upload handling? — NOT OBSERVED.
112. Real-time update handling? — NOT OBSERVED.
113. Third-party services integrated (technically visible)? — NOT OBSERVED (publicly-documented integration names are in Q10/144 instead).
114. Technologies visible in browser/network layer? — NOT OBSERVED.
115. Error handling? — NOT OBSERVED.
116. Retry handling? — NOT OBSERVED.
117. Frontend/backend interaction patterns? — NOT OBSERVED.
118. Notably strong technical patterns? — NOT OBSERVED.

### Performance & Reliability (§11, Q119–129)
119. Application load speed? — NOT OBSERVED (see Section 9).
120. Time for major screens to become interactive? — NOT OBSERVED.
121. Noticeable delays? — NOT OBSERVED.
122. Handles large datasets well? — NOT OBSERVED (no CUSTOMER FEEDBACK on this specific point in Section 5).
123. Reliability of important workflows? — NOT OBSERVED directly; CUSTOMER FEEDBACK proxy on email-send reliability specifically: see Section 9.
124. Recurring customer complaints about bugs? — see Section 5 (deliverability issues framed as the closest analog; no general "bugs" theme gathered).
125. Reported downtime? — TODO (check status-page/outage-tracker history).
126. Behavior during failures? — NOT OBSERVED.
127. Retry mechanisms available? — NOT OBSERVED.
128. Useful error messages? — NOT OBSERVED.
129. Performance change for complex workflows? — NOT OBSERVED.

### AI Capability Benchmarking (§12, Q130–143)
130. Does the product have AI features? — Yes, "Zia" (see Section 10).
131. What AI features exist? — Generative copywriting, personalization, send-time optimization, sentiment analysis (see Section 10).
132. What problems do those AI features solve? — see Section 10.
133. Does AI generate content? — Yes, generative copywriting (see Section 10, FACT).
134. Does AI summarize information? — TODO (not stated in Section 10).
135. Does AI automate workflows? — TODO (automation workflows exist per Section 3, but not explicitly stated as AI-driven; Zia's role is copywriting/personalization/send-time/sentiment, not workflow-building).
136. Does AI provide recommendations? — INFERENCE — send-time optimization functions as a recommendation-like feature (see Section 10).
137. Does AI analyze customer/product data? — Yes, sentiment analysis (see Section 10, FACT).
138. Does AI use company/customer context? — INFERENCE — personalization implies use of contact/customer data (see Section 10).
139. What AI models/providers are publicly disclosed? — TODO (Zia is Zoho's own branded AI; no underlying third-party model disclosed in sources gathered).
140. How is AI integrated into the UI? — NOT OBSERVED (requires live use); vendor-claimed placement only.
141. Does AI reduce the number of manual steps? — NOT OBSERVED / vendor claim only.
142. Do customers consider the AI useful? — NOT OBSERVED (Section 10: "needs a dedicated review-mining search").
143. What limitations/complaints exist around the AI? — NOT OBSERVED (Section 10).

### Integration Research (§13, Q144–154)
144. What integrations are available? — see Sections 1 and 3.
145. Which integrations are most important? — INFERENCE — Zoho CRM, repeatedly cited as a top "liked most" theme (see Section 5).
146. Which integrations are unique? — TODO (multi-channel email/SMS/WhatsApp in one automation canvas is a differentiator per Section 3, but that is a product feature, not a third-party integration).
147. How easy is integration setup? — NOT OBSERVED.
148. Does the integration require authentication? — NOT OBSERVED.
149. How is connected-account status shown? — NOT OBSERVED.
150. What happens when an integration fails? — NOT OBSERVED.
151. How are permissions handled (for integrations)? — NOT OBSERVED.
152. How are multiple connected accounts handled? — NOT OBSERVED.
153. How does the product synchronize data? — NOT OBSERVED.
154. How does it show synchronization errors? — NOT OBSERVED.

### Security & Permissions (§14, Q155–163) — publicly documented only
155. How are user roles handled? — "Custom roles" listed as a Standard-and-above feature (see Section 12, FACT).
156. What permission levels exist? — TODO (Section 12 confirms custom roles exist but does not detail specific permission levels).
157. How are teams/workspaces structured? — TODO (not covered).
158. How is access controlled? — TODO (not covered beyond custom roles, see Section 12).
159. How is authentication handled? — TODO/NOT VERIFIED (see Section 12).
160. Is SSO available? — TODO/NOT VERIFIED (see Section 12).
161. Is two-factor authentication available? — TODO/NOT VERIFIED (see Section 12).
162. How are connected accounts protected? — TODO/NOT OBSERVED unless publicly documented.
163. What security/compliance information is publicly documented? — TODO (not researched in this pass).

### Mobile Experience (§15, Q164–171)
164. Is the mobile app feature-complete? — NOT OBSERVED (mobile app existence itself is not yet verified — see Section 11).
165. Which desktop features are missing? — NOT OBSERVED.
166. How is navigation adapted for mobile? — NOT OBSERVED.
167. How is content creation handled (mobile)? — NOT OBSERVED.
168. How are notifications handled (mobile)? — NOT OBSERVED.
169. Mobile performance? — NOT OBSERVED (see Section 11).
170. What do mobile users complain about? — NOT OBSERVED (see Section 11).
171. Which competitor has the strongest mobile experience? — TODO/NOT OBSERVED — requires comparable mobile research across all competitors.

## Sources
- [Zoho Campaigns — official site](https://www.zoho.com/campaigns/) — retrieved 2026-09-10
- [Zoho Campaigns — official pricing page](https://www.zoho.com/campaigns/pricing.html) — retrieved 2026-09-10
- [Zoho Help — Key features of Zoho Campaigns](https://help.zoho.com/portal/en/kb/campaigns/getting-started-guide/articles/key-features-of-zoho-campaigns) — retrieved 2026-09-10
- [Zoho Campaigns — Email Workflow](https://www.zoho.com/campaigns/marketing-automation/email-workflow.html) — retrieved 2026-09-10
- [Zoho Flow — Zoho Campaigns integrations](https://www.zohoflow.com/apps/zoho-campaigns/integrations/) — retrieved 2026-09-10
- [G2 — Zoho Campaigns Features](https://www.g2.com/products/zoho-campaigns/features) — retrieved 2026-09-10
- [G2 — Zoho Marketing Automation Reviews (overlapping product, pros/cons corroboration)](https://www.g2.com/products/zoho-marketing-automation/reviews) — retrieved 2026-09-10
- [Capterra — Zoho Campaigns Pricing/Reviews](https://www.capterra.com/p/253223/Zoho-Campaigns/pricing/) — retrieved 2026-09-10
- [Capterra Canada — Zoho Campaigns Reviews](https://www.capterra.ca/reviews/147812/zoho-campaigns) — retrieved 2026-09-10
- Pricing/comparison aggregators (flagged for re-verification): [mailsoftly.com](https://mailsoftly.com/blog/zoho-campaigns-pricing/), [sequenzy.com](https://www.sequenzy.com/pricing/zoho-campaigns) — retrieved 2026-09-10
- Alternatives/competitor aggregators: [TrustRadius](https://www.trustradius.com/products/zoho-campaigns/competitors), [moosend.com](https://moosend.com/blog/zoho-campaigns-alternatives/), [research.com](https://research.com/software/alternatives/best-zoho-campaigns-alternatives) — retrieved 2026-09-10
- [G2 — Intuit Mailchimp seller page](https://www.g2.com/sellers/intuit-mailchimp) — retrieved 2026-09-10
- [G2 — ActiveCampaign seller page](https://www.g2.com/sellers/activecampaign) — retrieved 2026-09-10
- [G2 — Constant Contact seller page](https://www.g2.com/sellers/constant-contact-5aaee82b-8325-4eeb-b7b7-15fada778076) — retrieved 2026-09-10
