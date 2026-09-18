---
title: "Asana — Product Research Record"
product: "Asana"
company: "Asana, Inc."
category: "Project & Work Management"
last_verified: "2026-09-11"
status: "in-progress"
---

# Asana — Product Research Record

> Deep UI/component/technical exploration (Sections 6–9, 11–12) requires live login and is marked NOT OBSERVED — this record covers Layer 1–2 research (identity, market, pricing, features, reviews, competitors) from public sources only, gathered 2026-09-10. Upgraded from a stub to a full record in this pass, matching the depth target set by `../../01-Zoho-Primary-Products/zoho-projects.md`.

## 1. Identity
- **Company (FACT):** Asana, Inc. — founded 2008 by Dustin Moskovitz and Justin Rosenstein; went public on the NYSE (ticker ASAN) in 2020. (brandhistories.com, pitchbook.com — retrieved 2026-09-10, third-party sourced, standard/well-established facts but not cross-checked against an Asana IR page in this pass).
- **Category:** Project & Work Management.
- **Problem solved (FACT, vendor-stated/INFERENCE from positioning):** A "system of action for work" — connecting day-to-day tasks to company goals and orchestrating cross-functional workflows (product launches, onboarding, resource planning, strategic initiatives); 2026 vendor positioning explicitly frames it as built for the "Agentic Enterprise" where humans and AI agents collaborate on work (umbrex.com summary of Asana positioning, retrieved 2026-09-10 — third-party sourced, reflects vendor language but not pulled directly from asana.com in this pass).
- **Target users / industries (INFERENCE from vendor positioning + third-party market analysis):** Cross-functional teams (marketing, ops, product) at companies from small teams up through enterprise; vendor is explicitly pushing upmarket toward larger enterprise clients, including regulated sectors like healthcare and government (umbrex.com, retrieved 2026-09-10). Also frequently positioned in third-party comparisons as strong for creative-team and dependency-driven collaboration workflows (saasworthy.com, joinsecret.com — retrieved 2026-09-10, third-party sourced).
- **Segment:** Multiple — free tier serves individuals/very small teams (2 users), Starter/Advanced serve SMB–mid-market, Enterprise/Enterprise+ serve large/regulated organizations (FACT, per asana.com/pricing structure, retrieved 2026-09-10).
- **Approximate customer base (FACT):** "More than 170,000 customers worldwide" reported in 2026 company-profile summaries (brandhistories.com/pitchbook.com-derived search summary, retrieved 2026-09-10 — third-party sourced, not cross-verified against an Asana investor-relations figure in this pass; flag for re-verification).
- **Platforms (FACT):** Web, desktop, and mobile (iOS/Android) — standard vendor-stated availability; not independently re-confirmed via a dedicated platforms page fetch in this pass (INFERENCE from general product knowledge + third-party review summaries referencing "mobile app" reviews, retrieved 2026-09-10).
- **Ecosystem / integrations it connects with (FACT, per asana.com/apps and Zapier's Asana integration directory, retrieved 2026-09-10):** 200+ partner integrations in Asana's own App Directory, including Slack, Microsoft Teams, Google Drive, Dropbox, GitHub, GitLab, Jira Cloud, Harvest, Everhour, Power BI, Tableau, Figma, Zoom; Salesforce integration is available via Zapier rather than natively (per this search summary — flagged for direct re-verification against asana.com/apps).

## 2. Market & Business
- **Founded / product age (FACT):** 2008; IPO 2020 (see Section 1 sources).
- **Approximate customer/user base:** See Section 1 (170,000+ customers, third-party sourced, UNVERIFIED against primary IR source).
- **Pricing plans (FACT, per official page asana.com/pricing, retrieved 2026-09-10 via WebFetch):**

| Plan | Price | Users | What's included | Source |
|---|---|---|---|---|
| Personal (Free) | $0 forever | Up to 2 users | Unlimited tasks/projects, list/board/calendar views, 100MB max file size, status updates, time-tracking integrations, 100+ free integrations | asana.com/pricing |
| Starter | $10.99/user/mo billed annually; $13.49/user/mo billed monthly | Unlimited seats | Everything in Personal + AI Studio Basic (50K credits/billing account/mo), Timeline & Gantt views, reporting dashboards, unlimited automations, forms, custom templates, custom fields, unlimited free guests | asana.com/pricing |
| Advanced | $24.99/user/mo billed annually; $30.49/user/mo billed monthly | Unlimited seats | Everything in Starter + AI Studio Basic (75K credits), unlimited portfolios, goals, workload management, approvals & proofing, Salesforce/Tableau/Power BI support, forms with branching, time tracking, scaled security, formulas | asana.com/pricing |
| Enterprise | Contact sales (price not published) | Unlimited seats | Everything in Advanced + AI Studio Basic (200K credits), SAML SSO, SCIM user provisioning, universal workload, capacity planning, service accounts, view-only licenses, guest invite permissions, project admin controls, admin announcements, workflow bundles | asana.com/pricing |
| Enterprise+ | Contact sales (price not published) | Unlimited seats | Enhanced compliance features on top of Enterprise (exact feature delta not itemized in the fetched page content) | asana.com/pricing |

- **Free plan/trial (FACT):** Personal plan is free forever, capped at 2 users. Paid plans offer monthly billing in addition to annual; annual billing advertised as saving "up to 18%" vs. monthly. No stated free-trial length was returned by the pricing-page fetch — TODO/UNVERIFIED whether a separate time-boxed trial of Starter/Advanced exists; not resolved in this pass.
- **Refund policy (FACT, per asana.com/pricing):** No refunds offered; paid feature access continues through the subscription end date.
- **Market positioning (INFERENCE from vendor language + third-party comparisons):** Positioned as ease-of-use leader and a "system of action" for cross-functional/creative-team work, now explicitly extending that positioning into AI-agent-assisted work ("Agentic Enterprise" framing, umbrex.com summary, retrieved 2026-09-10). Third-party comparison pieces (clickup.com, airtable.com — retrieved 2026-09-10, third-party sourced and inherently self-interested since both are competitor-authored) characterize Asana's pricing as pushing teams toward paying "$24.99/user/mo for capabilities most competitors include at half the price."
- **Key differentiators claimed by vendor (FACT/INFERENCE, vendor-stated language per search summaries):** AI Studio (credit-based AI automation bundled starting at the Starter tier: 50K/75K/200K credits across Starter/Advanced/Enterprise), Smart Summaries, Smart Fields, Smart Rules; Timeline/Gantt views; goals-to-work connection (portfolios/goals at Advanced+); deep admin/security controls at Enterprise (SAML, SCIM, audit log, capacity planning). Note: this bullet is currently sourced from third-party search-result summaries of Asana's marketing language, not a direct fetch of an Asana features page — flagged for re-verification.

## 3. Features
**FACT/CUSTOMER-FEEDBACK-adjacent, sourced from search-result summaries of firebearstudio.com, clickup.com, teamhub.com, tooldirectory.ai and Asana Help Center pages (retrieved 2026-09-10) — not independently verified via login in this pass:**
- Task management: tasks, subtasks, custom fields, dependencies, due dates, assignees, attachments, approval statuses
- Views: List, Board (Kanban), Timeline (Gantt-style), Calendar
- Workflow automation: "Rules" — assign work, update fields, move tasks, send notifications, and trigger actions on conditions; unlimited automations from Starter tier up
- Forms (with branching logic at Advanced+); custom templates
- Portfolios and Goals (Advanced+) — connects individual work items to higher-level organizational goals
- Workload management, approvals and proofing (Advanced+)
- Time tracking (native, Advanced+; also available via third-party integrations like Harvest/Everhour on lower tiers)
- AI Studio: credit-based AI automation (task-assignment suggestions, automatic status updates, next-step anticipation), Smart Summaries (auto-summarize task comments/updates into a status), Smart Fields, Smart Rules (auto-categorize work, automate handoffs), proactive alerts on timeline/workload/dependency risk
- Admin Console (Starter/Advanced/Enterprise/Enterprise+): role-based admin access — Super Admin, Admin, Billing Owner
- Security/enterprise controls (Enterprise/Enterprise+): SAML SSO, SCIM provisioning, 2FA enforcement, session-duration limits, password-strength requirements, Audit Log API (SIEM/DLP/eDiscovery/archiving integrations), mobile device controls (biometric auth, screen-capture restriction, Intune integration for iOS)
- Integrations: 200+ in Asana's own App Directory (Slack, Microsoft Teams, Google Drive, Dropbox, GitHub, GitLab, Jira Cloud, Harvest, Everhour, Power BI, Tableau, Figma, Zoom — native); Salesforce via Zapier rather than native (per this pass's sourcing — flagged for direct re-verification); Zapier/Make available for broader no-code automation to apps without native connectors.

Most important workflows and precise "native vs. via Zapier" depth for every listed integration: NOT OBSERVED/partially TODO — only Salesforce's non-native status surfaced clearly in this pass; a full integration-by-integration native/Zapier breakdown was not performed.

## 4. Competitors
| Competitor | Type | Notes |
|---|---|---|
| [Zoho Projects](../../01-Zoho-Primary-Products/zoho-projects.md) | Direct, lower-cost | Third-party comparisons (clickup.com, airtable.com, retrieved 2026-09-10) state Zoho Projects "provides advanced reporting and workflow customization at a lower cost than Asana," and that "Zoho Projects and ClickUp offer the best value at the lower price tiers" relative to Asana's $24.99/user/mo Advanced tier. Zoho Projects' own record independently names Asana as a top alternative (see `zoho-projects.md` §4) — a mutually-cited rivalry. |
| [ClickUp](clickup.md) | Direct, feature-dense/lower-cost | Described in third-party comparisons as "the strongest overall Asana alternative," combining native time tracking, docs, whiteboards, and goals starting at $7/user/mo — offering "the most complete single platform replacement at the lowest price point" (clickup.com — note: source is itself ClickUp's own marketing content, so treat this framing as self-interested and lower-confidence). |
| [monday.com](monday-com.md) | Direct | Positioned in third-party comparisons as best "for teams that value ease of adoption over depth of capability," particularly marketing/ops teams wanting visual, low-code workflow automation without a steep learning curve (multiple third-party sources, retrieved 2026-09-10). Some switch-away reports cite users leaving Asana for monday.com specifically. |
| Jira (Atlassian) | Direct — software/dev-team focused | Consistently named as the default choice for software engineering teams needing deep sprint management and DevOps integrations "that Asana cannot match" (third-party comparisons, retrieved 2026-09-10). Distinct sub-segment vs. Asana's general cross-functional-team focus. |
| Wrike | Direct | Named specifically as a destination when teams switch away from Asana, per switch-away review-summary findings (retrieved 2026-09-10) — not yet independently profiled in this library. |
| Trello, Smartsheet, Basecamp, Airtable, Notion | Adjacent / SMB / niche alternatives | Named across multiple "Asana alternatives" aggregator lists (clickup.com, airtable.com, nuclino.com, techjockey.com, proofhub.com — retrieved 2026-09-10) as candidates for future Layer 2 research — not yet independently verified as primary competitors in this library. |

## 5. Customer Reviews
- **Source(s):**
  - G2: 4.4/5, "14,009 reviews" per one 2026 search-result summary (g2.com/sellers/asana listing "14009 Reviews"; g2.com/products/asana/reviews page also referenced — retrieved 2026-09-10 via WebSearch, not a direct page fetch — **flag for re-verification with a live G2 fetch**, since a direct fetch of g2.com pages has previously returned HTTP 403 for this library, e.g. in the Zoho Projects pass).
  - Capterra: 4.5/5, reported variously as "13,580 verified user reviews" and "8,000+ customers... give Asana 4.5 out of 5 stars" in the same search pass (capterra.com/p/184581/Asana-PM/reviews — retrieved 2026-09-10 via WebSearch summary); ease-of-use sub-rating reported at 4.4/5. **Internal discrepancy between the two review-count figures found (13,580 vs. 8,000+) — both retained, flagged for re-verification with a direct page fetch**, same caveat pattern as Zoho Projects' Capterra figures in this library.
- **Liked most (CUSTOMER FEEDBACK):** Intuitive interface for core task/project organization; strong customization (drag-and-drop project attributes, custom fields); effective for structuring, prioritizing, and tracking team and individual work; seamless integration with Google Workspace ("G Suite") cited specifically as enhancing collaboration (g2.com pros/cons search summary, capterra.com summary — retrieved 2026-09-10).
- **Disliked most (CUSTOMER FEEDBACK):** Steep learning curve, especially for advanced features/custom workflows — described by some reviewers as "messy" and difficult to manage effectively; feature-gating behind higher-paid tiers (notably time tracking, which is Advanced-tier-only per Section 2 pricing); interface can feel "overloaded" with too many features/options, making focus harder; notification volume described as excessive, leading users to miss important updates (g2.com pros/cons search summary, retrieved 2026-09-10).
- **Recurring complaints (CUSTOMER FEEDBACK):** Learning curve for advanced/custom-workflow features; no true recurring-project templating (users report "starting over every time" even for repeatable projects); a category of team communication happening in Slack that "almost never makes it into Asana" (integration/workflow gap, not a missing integration per se); native time tracking gated to the Advanced tier, pushing some teams to bolt on separate tools; inconsistent Forms behavior (task naming reverting to form name instead of mapped field values, reported as persisting across 50+ test runs by one reviewer) (opiniondeck.com Reddit-thread summary, capterra.com summary — retrieved 2026-09-10).
- **Recurring praise (CUSTOMER FEEDBACK):** Ease of use for core task management once configured; strong cross-functional visibility (Timeline/Gantt, dependencies); goals-to-work traceability (Portfolios/Goals) cited favorably at the Advanced tier.
- **Requested features (CUSTOMER FEEDBACK):** Broader/deeper external-platform integration (users want tighter connections beyond current native set); more Starter/Advanced-tier features made available on the free plan; reviewers specifically flag pricing-at-scale as a pain point — one figure cited: a 100-user team on the Advanced plan faces ~$2,499/month (~$30K/year), described as the point at which teams "start looking for alternatives" (search-result summary citing Capterra/G2 patterns — retrieved 2026-09-10, figure not independently re-verified against a primary review quote, UNVERIFIED).
- **Why customers switch away (CUSTOMER FEEDBACK):** Cost at scale (the ~$2,499/mo/100-user example above); missing/gated native time tracking; the Slack-to-Asana work-capture gap; lack of true recurring/repeatable project templating; named switch destinations include Wrike and monday.com (opiniondeck.com Reddit-thread summary, capterra.com summary — retrieved 2026-09-10, third-party sourced).
- **Why customers choose it over competitors (CUSTOMER FEEDBACK/INFERENCE):** Ease of use for cross-functional, non-technical teams and strong goals/portfolio-to-task traceability are the most consistently cited reasons in third-party comparison pieces, though "learning curve" is simultaneously cited as a top complaint — this is an internal tension in Asana's positioning worth flagging rather than resolving with the current evidence (same tension already flagged in the benchmark file prior to this pass).

## 6. UI/UX
NOT OBSERVED — requires live login/exploration of the actual app. Flagged as the next research step.

## 7. User Flows
NOT OBSERVED — same as above.

## 8. Technical Observations
NOT OBSERVED — DOM/network/API capture requires live session exploration; not performed in this pass.

## 9. Performance & Reliability
NOT OBSERVED directly via live use. CUSTOMER FEEDBACK signal: no explicit desktop performance/uptime complaints surfaced in the review themes gathered so far (absence of evidence, not evidence of absence); the "notification overload" complaint (Section 5) is a UX/configuration issue rather than a performance/reliability one.

## 10. AI Features
**FACT/CUSTOMER-FEEDBACK-adjacent, per search-result summaries of Asana's AI Studio and Asana Help Center content (firebearstudio.com, tooldirectory.ai, getaibriefs.com — retrieved 2026-09-10; not a direct fetch of an Asana AI page in this pass):**
- "AI Studio" is Asana's AI suite, bundled into every paid tier via a credit system: 50,000 credits/mo (Starter), 75,000 (Advanced), 200,000 (Enterprise) — per billing account/month (asana.com/pricing, FACT).
- Capabilities: suggested task assignments, automated status updates, next-step anticipation, AI-generated project/discussion summaries ("Smart Summaries"), proactive risk alerts on timelines/workloads/dependencies, automatic surfacing/sorting of urgent or high-impact tasks, "Smart Fields" and "Smart Rules" for auto-categorization and automated handoffs.
- Positioning: explicitly framed as building toward an "Agentic Enterprise" where AI agents and humans collaborate directly within the work-management system (umbrex.com summary, retrieved 2026-09-10).
- Contrast vs. Zoho Projects' Zia AI: Asana bundles AI credits into every paid tier starting at Starter (no free-tier AI), whereas Zoho Projects excludes its Zia AI entirely from its Free plan and gates it to Premium+ (see `zoho-projects.md` §10) — both vendors gate AI away from the free tier, but Asana's model is credit-metered across all paid tiers rather than an unlimited feature unlock.
- Customer sentiment on AI features specifically: NOT OBSERVED — no dedicated review-mining pass performed on AI-feature sentiment (distinct from general feature-overload complaints noted in Section 5) in this pass.

## 11. Mobile Experience
NOT OBSERVED — no dedicated mobile-app review-mining or live exploration performed in this pass. Only incidental technical detail surfaced: Asana's mobile security controls include biometric authentication enforcement, mobile screen-capture restrictions, and Intune integration for iOS (cirface.com summary of Asana Help Center, retrieved 2026-09-10) — this is a security-control fact, not a UX/parity assessment, so mobile feature-parity and customer sentiment remain TODO for a dedicated pass.

## 12. Security & Permissions
**FACT (vendor-stated, per search-result summaries of asana.com/features/admin-security and Asana Help Center, retrieved 2026-09-10 — not a direct page fetch in this pass, flagged for re-verification):**
- Admin Console available on Starter, Advanced, Enterprise, and Enterprise+ plans; roles include Super Admin (full access including security), Admin (manages users/teams/security), Billing Owner (billing + tutorials access).
- Authentication controls: Google SSO and SAML-based SSO, two-factor authentication (2FA) enforcement, session-duration limits, password-strength requirements, SAML group mapping for license assignment. Per one summary, full SSO/SCIM/Audit Log capability specifically requires Enterprise or Enterprise+ (i.e., SAML/SCIM/Audit Log are Enterprise-tier features, not available on Starter/Advanced).
- Project/workspace-level permission roles: workspace roles (Super Admin, Admin, Member, Guest) and project/goal-level roles (Admin, Editor, Commenter, Viewer).
- SCIM-based automated user provisioning/deprovisioning and group sync (Enterprise/Enterprise+).
- Audit Log API supporting SIEM, DLP, eDiscovery, and archiving integrations (Enterprise/Enterprise+).
- Mobile device security controls: biometric auth enforcement, screen-capture restriction, file-attachment permission controls, Intune integration for iOS.
- Deeper granular permissions detail (e.g., field-level permissions, IP allowlisting): NOT OBSERVED — not established in this pass.

## 13. Strengths / Weaknesses
- **Best features (CUSTOMER FEEDBACK):** Intuitive core task/project organization; strong cross-functional visibility via Timeline/Gantt and dependencies; goals-to-work traceability (Portfolios/Goals, Advanced+); deep admin/security control set at Enterprise (SAML, SCIM, Audit Log); AI Studio bundled from the Starter tier rather than gated to top tier only.
- **Weakest features (CUSTOMER FEEDBACK):** Steep learning curve for advanced/custom-workflow configuration despite an "ease of use" market position; feature-overload/notification-overload UX complaints; native time tracking gated to Advanced tier; no true recurring-project templating; pricing at scale (Advanced tier, ~$25/user/mo) cited as a switch-away trigger; Enterprise pricing is entirely opaque ("contact sales," no published figures).

## 14. Competitive Score
Not yet scored — scoring requires the full category benchmark (see `../../03-Benchmarks/project-work-management.md`) and complete competitor records for the remaining stub/TODO competitors (Jira, Microsoft Project). With this pass, Asana and Zoho Projects are now the two most fully-researched products in this benchmark.

## 15. What We Should Learn
- **RECOMMENDATION — adopt:** Bundling AI capability into every paid tier via a metered-credit model (Asana's AI Studio: 50K/75K/200K credits across Starter/Advanced/Enterprise) rather than reserving AI entirely for the top tier is a differentiator worth studying against Zoho Projects' approach of excluding Zia AI from its Free plan but not metering it by credits at Premium+ (derived from Section 2/10 FACTs, both records) — the credit-metering model itself (cost-control lever vs. usage-cap frustration) deserves live UX investigation before recommending adoption outright.
- **RECOMMENDATION — investigate before adopting:** The "ease of use" market position coexisting with "steep learning curve" as a top complaint (Section 5) is an internal contradiction worth deep-diving live — it may indicate the core UI is simple but advanced/custom-workflow configuration (Rules, Forms branching, custom fields) is where complexity actually lives; this needs live UI observation (currently NOT OBSERVED — Sections 6/7) to resolve responsibly.
- **RECOMMENDATION — avoid:** Gating a core, broadly-expected capability like time tracking entirely behind a mid/upper tier (Advanced) — this is independently cited as both a "requested feature" and a "why customers switch away" reason in the same review pass (Section 5, CUSTOMER FEEDBACK), suggesting it functions as a real churn driver rather than a minor gap.
- **RECOMMENDATION — avoid:** Fully opaque enterprise pricing ("contact sales," no published figures) removes a data point competitors like Zoho Projects and monday.com partially expose (at least indicative aggregator-sourced figures) — worth noting as a transparency gap relative to at least one competitor in this set, though this is a positioning observation, not a proven satisfaction driver.

## 16. Standard Questionnaire — Full Answer Set (seetha_research_library.md §4–15)

> Every question below is answered using only evidence already recorded in Sections 1–15 of this record. Where this file already contains the answer, a short direct answer or a `see Section N` pointer is given, carrying the same evidence tag as the source material. Where this file has no evidence, the question is marked `NOT OBSERVED` (requires live-app access) or `TODO` (publicly researchable but not covered in this pass).

### Product Identification (§4, Q1–12)
1. What is the product? — Asana, a web/desktop/mobile project & work management platform (see Section 1).
2. What problem does it solve? — see Section 1 (a "system of action for work" connecting tasks to goals and orchestrating cross-functional workflows).
3. What category does it belong to? — Project & Work Management (see Section 1 / frontmatter).
4. Who is the target customer? — see Section 1 (cross-functional teams from small teams through enterprise; explicit push upmarket into regulated sectors).
5. Individuals/startups/SMBs/enterprises/multiple? — Multiple — free tier for individuals/small teams, Starter/Advanced for SMB–mid-market, Enterprise/Enterprise+ for large/regulated orgs (FACT, see Section 1, Segment).
6. Major features? — see Section 3.
7. Most important workflows? — NOT OBSERVED/TODO — Section 3 states this was not fully established in this pass.
8. What platforms does it support? — Web, desktop, mobile (iOS/Android) (see Section 1 — INFERENCE from general product knowledge, not independently re-confirmed via a dedicated fetch).
9. Web/desktop/mobile/all? — All three (see Section 1).
10. What integrations does it provide? — see Section 1/3 (200+ integrations in Asana's App Directory).
11. What ecosystem does it belong to? — Asana's own App Directory/integration ecosystem; Asana, Inc. is a standalone company, not part of a larger parent-company product suite (see Section 1).
12. Which other products in the company's suite does it integrate with? — Not applicable / TODO — no sister-product suite is documented for Asana, Inc. in this file (unlike Zoho's multi-product ecosystem).

### Business & Market (§5, Q13–26)
13. How long has the product existed? — Founded 2008; IPO 2020 (FACT, see Section 1/2).
14. How important is it within its company's ecosystem? — Not applicable / TODO — Asana has no documented sister-product suite in this file (see Q12).
15. What pricing plans are available? — see Section 2 (Personal/Free, Starter, Advanced, Enterprise, Enterprise+).
16. What is included in each plan? — see Section 2 pricing table.
17. Is there a free plan? — Yes, Personal, free forever, capped at 2 users (FACT, see Section 2).
18. Is there a free trial? — TODO/UNVERIFIED — Section 2 states this was not resolved in this pass.
19. What limitations exist in the free/trial version? — see Section 2 (Personal: 2-user cap, 100MB max file size).
20. Approximate customer/user base? — "More than 170,000 customers worldwide" (FACT, third-party sourced, flagged UNVERIFIED against a primary IR source — see Section 1/2).
21. What industries use it? — INFERENCE — cross-functional teams broadly, with explicit enterprise push into healthcare and government (see Section 1).
22. Which geographic markets are important? — TODO — not covered in this pass.
23. Market positioning? — see Section 2 (ease-of-use leader / "system of action," now extending to "Agentic Enterprise" AI-agent framing).
24. What differentiates it from competitors? — see Section 2 (AI Studio, Smart Summaries/Fields/Rules, Timeline/Gantt, goals-to-work traceability, deep Enterprise admin/security).
25. What type of company/customer gets the most value from it? — INFERENCE — cross-functional/creative teams and enterprises needing admin/security depth (see Sections 1, 13).
26. Major selling points? — see Section 2/13 (best features).

### Competitor Research (§6, Q27–41)
27. Who are the top competitors? — see Section 4 (Zoho Projects, ClickUp, monday.com, Jira, Wrike, others).
28. Which competitor is the closest equivalent? — TODO — Zoho Projects, ClickUp, and monday.com are all named as direct competitors (Section 4) but no single "closest equivalent" is established.
29. Which competitor has the largest customer/user base? — TODO.
30. Which competitor has the strongest enterprise presence? — TODO.
31. Which competitor is strongest for SMBs? — TODO — Zoho Projects/ClickUp are cited as lower-cost (Section 4) but not established as "strongest for SMBs."
32. Which competitor is cheapest? — INFERENCE — ClickUp is cited starting at $7/user/mo vs. Asana's $24.99/user/mo Advanced tier (Section 4), suggesting ClickUp is cheaper at entry; not confirmed as cheapest overall. TODO to verify.
33. Which competitor provides the most features? — TODO — ClickUp is described (in its own marketing, flagged self-interested) as "the most complete single platform replacement" (see Section 4).
34. Which competitor has the simplest UX? — NOT OBSERVED unless independently verified across products via live use (monday.com is positioned by third parties as easiest to adopt — Section 4 — but not independently verified).
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
44. What problems are repeatedly mentioned? — see Section 5 (recurring complaints: learning curve, gated time tracking, Slack-capture gap, no recurring templating).
45. What features receive the most praise? — see Section 5 (recurring praise: ease of use, Timeline/Gantt/dependencies, Portfolios/Goals).
46. What features receive the most complaints? — see Section 5 (advanced/custom-workflow complexity, feature-gating, notification overload).
47. What do customers say about usability? — see Section 5 (intuitive for core use; "messy"/"overloaded" for advanced configuration).
48. What do customers say about performance? — NOT OBSERVED directly; see Section 9 (no explicit performance complaints surfaced).
49. What do customers say about reliability? — see Section 9 (absence of evidence noted, not evidence of absence).
50. What do customers say about customer support? — TODO — not specifically covered in Section 5.
51. What do customers say about pricing/value? — see Section 5 (cost-at-scale cited as switch-away driver, ~$2,499/mo/100-user example).
52. What do customers say about integrations? — see Section 5 (Slack-to-Asana work-capture gap; requests for broader/deeper external-platform integration).
53. What do customers say about mobile applications? — NOT OBSERVED — Section 11 explicitly states no dedicated mobile review-mining was performed.
54. What do customers say about onboarding? — TODO — not specifically addressed beyond the general "learning curve" theme in Section 5.
55. What features do customers request? — see Section 5 (true recurring/repeatable project templating, more free-tier features, deeper integrations).
56. Why do customers switch away from the product? — see Section 5 (CUSTOMER FEEDBACK — cost at scale, gated time tracking, Slack-capture gap, lack of templating; named destinations Wrike and monday.com).
57. Why do customers choose the product over competitors? — see Section 5 (CUSTOMER FEEDBACK/INFERENCE — ease of use for cross-functional teams and goals/portfolio traceability, noted as in tension with the "learning curve" complaint).

### UI/UX Benchmarking (§8, Q58–82) — requires live product access
58. Overall UI style? — NOT OBSERVED (see Section 6).
59. Is navigation easy to understand? — NOT OBSERVED.
60. Sidebar structure? — NOT OBSERVED.
61. Dashboard structure? — NOT OBSERVED.
62. Clicks required for common workflows? — NOT OBSERVED.
63. Important screens? — NOT OBSERVED.
64. Important UI components? — NOT OBSERVED.
65. Button design? — NOT OBSERVED.
66. Form design? — NOT OBSERVED (Section 5 notes a Forms *behavior* bug reported by a reviewer — task naming reverting to form name — but no visual/UI design observation).
67. Table design? — NOT OBSERVED.
68. Card design? — NOT OBSERVED.
69. Tab design? — NOT OBSERVED.
70. Modal design? — NOT OBSERVED.
71. Dropdown design? — NOT OBSERVED.
72. Filter design? — NOT OBSERVED.
73. Search design? — NOT OBSERVED.
74. Notification handling? — NOT OBSERVED (CUSTOMER FEEDBACK exists that notification *volume* is excessive — see Section 5 — but the UI handling itself was not observed).
75. Error display? — NOT OBSERVED.
76. Loading-state display? — NOT OBSERVED.
77. Empty-state display? — NOT OBSERVED.
78. Confirmation-message display? — NOT OBSERVED.
79. Permissions/roles representation? — NOT OBSERVED.
80. Onboarding handling? — NOT OBSERVED (public marketing claims about onboarding are CUSTOMER FEEDBACK at best, not observation).
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
107. REST/GraphQL/other? — NOT OBSERVED (an "Audit Log API" is documented — see Section 12 — but its request/response shape was not observed).
108. Authentication handling? — NOT OBSERVED technically (publicly documented auth *options* are in Section 12 / Q159–161 instead).
109. Session-state maintenance? — NOT OBSERVED (session-duration *limits* are documented as an admin control — see Section 12 — but the technical mechanism was not observed).
110. Caching handling? — NOT OBSERVED.
111. File/media upload handling? — NOT OBSERVED (the 100MB max file size limit on the Personal plan is documented — see Section 2 — but upload mechanics were not observed).
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
124. Recurring customer complaints about bugs? — see Section 5 (inconsistent Forms behavior — task naming reverting to form name instead of mapped field values — reported by one reviewer as persisting across 50+ test runs).
125. Reported downtime? — TODO (check status-page/outage-tracker history).
126. Behavior during failures? — NOT OBSERVED.
127. Retry mechanisms available? — NOT OBSERVED.
128. Useful error messages? — NOT OBSERVED.
129. Performance change for complex workflows? — NOT OBSERVED.

### AI Capability Benchmarking (§12, Q130–143)
130. Does the product have AI features? — Yes, see Section 10.
131. What AI features exist? — see Section 10 (AI Studio: suggested task assignments, automated status updates, next-step anticipation, Smart Summaries, Smart Fields, Smart Rules, proactive risk alerts).
132. What problems do those AI features solve? — see Section 10 (auto-assignment/status-update overhead, surfacing/sorting urgent work, risk anticipation on timelines/workloads/dependencies).
133. Does AI generate content? — Yes — Smart Summaries auto-generate project/discussion summaries (FACT, see Section 10).
134. Does AI summarize information? — Yes — Smart Summaries (FACT, see Section 10).
135. Does AI automate workflows? — Yes — Smart Rules (auto-categorize work, automate handoffs), automated status updates (FACT, see Section 10).
136. Does AI provide recommendations? — Yes — suggested task assignments, next-step anticipation, proactive risk alerts (FACT, see Section 10).
137. Does AI analyze customer/product data? — Partial — analyzes work/timeline/workload/dependency data for risk alerts (FACT, Section 10); analysis of "customer data" specifically is TODO.
138. Does AI use company/customer context? — TODO — not addressed in this pass.
139. What AI models/providers are publicly disclosed? — TODO — the underlying model(s) powering AI Studio are not disclosed in the sources gathered this pass.
140. How is AI integrated into the UI? — NOT OBSERVED (requires live use); vendor-claimed placement only.
141. Does AI reduce the number of manual steps? — NOT OBSERVED / vendor claim only.
142. Do customers consider the AI useful? — NOT OBSERVED — Section 10 explicitly states no dedicated AI-sentiment review-mining was performed.
143. What limitations/complaints exist around the AI? — NOT OBSERVED specifically (see Section 10); the general "feature-overload" complaint in Section 5 is distinct and not AI-specific.

### Integration Research (§13, Q144–154)
144. What integrations are available? — see Section 1/3 (200+ in Asana's App Directory: Slack, Microsoft Teams, Google Drive, Dropbox, GitHub, GitLab, Jira Cloud, Harvest, Everhour, Power BI, Tableau, Figma, Zoom; Salesforce via Zapier, not native).
145. Which integrations are most important? — INFERENCE — Google Workspace/Slack plausibly most-used given specific CUSTOMER FEEDBACK praise (Google Workspace, Section 5) and complaint (Slack-capture gap, Section 5); not independently confirmed as "most important." TODO.
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
155. How are user roles handled? — Admin Console roles: Super Admin, Admin, Billing Owner; workspace roles (Super Admin, Admin, Member, Guest) and project/goal-level roles (Admin, Editor, Commenter, Viewer) (FACT, see Section 12).
156. What permission levels exist? — see Section 12 (project/goal-level: Admin, Editor, Commenter, Viewer).
157. How are teams/workspaces structured? — Partial — workspace-level roles are documented (see Section 12); deeper structural detail (e.g., team hierarchy) is TODO.
158. How is access controlled? — Role-based (Admin Console + workspace/project roles) plus SCIM-based automated provisioning/deprovisioning and group sync at Enterprise/Enterprise+ (FACT, see Section 12).
159. How is authentication handled? — Google SSO, SAML-based SSO, 2FA enforcement, session-duration limits, password-strength requirements (FACT, see Section 12).
160. Is SSO available? — Yes — Google SSO for all, full SAML SSO specifically at Enterprise/Enterprise+ (FACT, see Section 12).
161. Is two-factor authentication available? — Yes, enforceable (FACT, see Section 12).
162. How are connected accounts protected? — TODO/NOT OBSERVED — not publicly documented in sources gathered this pass.
163. What security/compliance information is publicly documented? — SAML/SCIM/Audit Log API (SIEM/DLP/eDiscovery/archiving support) at Enterprise/Enterprise+, mobile device security controls (biometric auth, screen-capture restriction, Intune integration for iOS) (FACT, see Section 12); deeper compliance certifications (SOC2, ISO, etc.) are TODO.

### Mobile Experience (§15, Q164–171)
164. Is the mobile app feature-complete? — NOT OBSERVED — see Section 11 (no dedicated parity assessment performed).
165. Which desktop features are missing? — NOT OBSERVED.
166. How is navigation adapted for mobile? — NOT OBSERVED.
167. How is content creation handled (mobile)? — NOT OBSERVED.
168. How are notifications handled (mobile)? — NOT OBSERVED.
169. Mobile performance? — NOT OBSERVED — see Section 11 (only a security-control fact was surfaced, not a performance assessment).
170. What do mobile users complain about? — NOT OBSERVED — see Section 11.
171. Which competitor has the strongest mobile experience? — TODO/NOT OBSERVED — requires comparable mobile research across all competitors.

## Sources
- [Asana — official pricing page](https://asana.com/pricing) — retrieved 2026-09-10 (WebFetch)
- Search-result summaries (WebSearch, retrieved 2026-09-10) citing: [PitchBook — Asana Company Profile](https://pitchbook.com/profiles/company/53371-99), [Umbrex — Asana Strategy and Business Model](https://umbrex.com/resources/company-profiles/asana/), [Brandhistories.com — Asana History](https://brandhistories.com/asana)
- [G2 — Asana Sellers listing](https://www.g2.com/sellers/asana), [G2 — Asana Reviews](https://www.g2.com/products/asana/reviews), [G2 — Asana Pros and Cons](https://www.g2.com/products/asana/reviews?qs=pros-and-cons) — retrieved 2026-09-10 via WebSearch summary (direct fetch not attempted this pass given prior 403 pattern on g2.com in this library — **flag for re-verification with a live fetch**)
- [Capterra — Asana Reviews](https://www.capterra.com/p/184581/Asana-PM/reviews/) — retrieved 2026-09-10 via WebSearch summary
- [OpinionDeck — Asana Complaints on Reddit, 6 Real Threads](https://opiniondeck.com/reddit/asana-complaints/) — retrieved 2026-09-10 (third-party aggregation of Reddit threads)
- Feature/AI summaries (third-party, retrieved 2026-09-10): [FireBearStudio — What Is Asana? Project Management and AI in 2026](https://firebearstudio.com/blog/what-is-asana.html), [ClickUp — Asana for Task Management](https://clickup.com/learn/topic/task-management/tools/asana/), [TeamHub — What Is Asana?](https://teamhub.com/blog/what-is-asana-2026/), [ToolDirectory.ai — Asana Review](https://tooldirectory.ai/tools/asana), [GetAIBriefs — Asana AI Review](https://getaibriefs.com/tools/asana-ai/)
- Integrations (third-party, retrieved 2026-09-10): [Asana Apps and Integrations](https://asana.com/apps) (referenced in search summary, not directly fetched), [Zapier — Asana Integrations](https://zapier.com/apps/asana/integrations), [BugHerd — 9 Most Useful Asana Integrations](https://bugherd.com/blog/best-asana-integrations)
- Security/admin (third-party summaries of Asana's own pages, retrieved 2026-09-10): [Asana — Admin Console Features](https://asana.com/features/admin-security/admin-console), [Asana — Admin and Security Features](https://asana.com/features/admin-security), [Asana — Scale your enterprise with confidence](https://asana.com/inside-asana/more-security-and-control), [Cirface — Asana Admin Console Guide](https://cirface.com/blog/asana-admin-console), [Asana Help Center — Authentication and access management options for paid plans](https://help.asana.com/hc/en-us/articles/14075208738587-Authentication-and-access-management-options-for-paid-plans)
- Competitor comparisons (third-party, retrieved 2026-09-10 — note ClickUp/Airtable sources are themselves competitor-authored, lower-confidence for framing though pricing figures cited are checkable): [ClickUp — 10 Best Asana Alternatives](https://clickup.com/blog/asana-alternatives/), [Airtable — 18 Best Asana Alternatives](https://www.airtable.com/articles/asana-alternatives), [Nuclino — 14 Best Asana Alternatives](https://www.nuclino.com/alternatives/asana-alternatives)
