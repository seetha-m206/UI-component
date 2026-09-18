---
title: "Microsoft OneDrive for Business"
product: "Microsoft OneDrive for Business"
company: "Microsoft Corporation"
category: "Collaboration & Productivity"
last_verified: "2026-09-10"
status: "stub"
---

# Microsoft OneDrive for Business — Competitor Research Record

> Stub created as part of the Zoho WorkDrive research pass, following the same public-source-only methodology as `google-workspace.md` and `box.md`. Sections beyond market positioning/pricing/reviews are placeholders (`TODO`) pending a dedicated research pass — do not treat blank sections as "no data," they are simply not yet researched. Deep UI/technical exploration (Sections 6–9, 11–12) requires live login and is NOT OBSERVED in this pass.

## 1. Identity
- **Company (FACT):** Microsoft Corporation.
- **Category:** Collaboration & Productivity (cloud file storage / sync-and-share, sold as part of the Microsoft 365 ecosystem).
- **Problem solved (FACT/INFERENCE, vendor-positioning synthesis, retrieved 2026-09-10):** Secure cloud storage, file sync, and sharing for business users, positioned as the storage-and-collaboration layer underneath Outlook/Teams/SharePoint rather than a standalone product.
- **Target users / industries (CUSTOMER FEEDBACK/third-party-sourced, enlyft.com firmographic data, retrieved 2026-09-10 — third-party sourced, treat as directional):** Customer base skews toward organizations already on Microsoft 365; a cited firmographic breakdown is ~28% small organizations (<50 employees), ~44% medium-sized, ~27% large organizations (>1,000 employees), with Information Technology & Services cited as the largest single industry segment (~18% of customers). **UNVERIFIED against a primary Microsoft source — third-party analytics site, needs independent confirmation before being treated as precise.**
- **Segment:** Multiple — SMB through enterprise, per the firmographic split above (CUSTOMER FEEDBACK/third-party-sourced); INFERENCE: skews most naturally toward organizations already standardized on Microsoft 365 for email/Office apps, since OneDrive for Business is not sold as a pure standalone product in 2026 (see pricing note below).
- **Platforms (FACT, general product knowledge/vendor pattern, retrieved 2026-09-10):** Web, Windows/Mac desktop sync client, and mobile apps (iOS/Android) — consistent with all Microsoft 365 apps; not independently re-verified against a fetched official page in this pass (Microsoft.com pages timed out on fetch during this research pass — see Sources note).
- **Ecosystem / sister products it integrates with (FACT/CUSTOMER FEEDBACK, retrieved 2026-09-10):** Deep native integration with Outlook, Microsoft Teams, and SharePoint — repeatedly cited as OneDrive's core differentiator in G2 review synthesis and Capterra pros themes ("seamless compatibility with Office 365, Teams, and SharePoint").

## 2. Market & Business

### Pricing (CUSTOMER FEEDBACK/third-party-sourced — search-result synthesis, retrieved 2026-09-10; direct fetch of official microsoft.com pricing pages timed out repeatedly in this pass and could not be independently confirmed)
| Plan | Price | Storage | Notes / Source |
|---|---|---|---|
| OneDrive for Business (Plan 1) | ~$5.00/user/mo (UNVERIFIED — third-party/search-synthesis sourced, not confirmed on a directly fetched official page) | 1 TB/user | Per multiple third-party pricing aggregators (Internxt, xpay.sh, ITQlick) and Microsoft Q&A community posts, retrieved 2026-09-10 |
| OneDrive for Business (Plan 2) | ~$10.00/user/mo (UNVERIFIED — same caveat) | Unlimited individual storage for orgs with 5+ qualifying licenses; otherwise 1 TB/user | Same sourcing as above |
| Microsoft 365 Business Basic | ~$6.00/user/mo (UNVERIFIED — third-party sourced) | 1 TB OneDrive storage included, bundled with Outlook/Teams/Office web apps | Search-synthesis, retrieved 2026-09-10 |
| Microsoft 365 Business Standard | ~$12.50/user/mo (UNVERIFIED — third-party sourced) | 1 TB OneDrive storage included, bundled with desktop Office apps | Search-synthesis, retrieved 2026-09-10 |
| Microsoft 365 Business Premium | ~$22.00/user/mo (UNVERIFIED — third-party sourced) | 1 TB OneDrive storage included, adds advanced security/device management | Search-synthesis, retrieved 2026-09-10 |

**Important structural note (CUSTOMER FEEDBACK/third-party-sourced, multiple aggregators, retrieved 2026-09-10):** Search results indicate Microsoft is discontinuing standalone OneDrive for Business Plan 1 and Plan 2 SKUs during 2026 (cited reasons: "low customer demand" and "higher operational costs"), pushing customers toward bundled Microsoft 365 Business plans instead. **This is a significant, unverified claim from secondary sources only — flag for direct confirmation against Microsoft's own licensing/announcement pages before treating as settled fact.** If accurate, it reinforces that OneDrive for Business is increasingly sold only as part of a Microsoft 365 bundle, not as pure storage — a structural difference from Zoho WorkDrive, Google Drive-standalone, Dropbox Business, and Box, which all retain storage-first standalone plans.
- **Free plan/trial:** TODO — not confirmed in this pass (official pricing page fetch failed; third-party sources not consistent enough to cite a specific trial length).
- **Market positioning (INFERENCE, derived from CUSTOMER FEEDBACK and firmographic data above):** Positioned as the default, low-friction storage layer for organizations already standardized on Microsoft 365 — strength and lock-in both derive from Outlook/Teams/SharePoint integration rather than storage/sync being sold as a differentiated standalone product.
- **Key differentiators claimed by vendor:** TODO — official vendor messaging not independently fetched in this pass (microsoft.com fetches timed out); differentiators below are inferred from G2/Capterra review synthesis only, not vendor copy.

## 3. Features
- TODO — full feature breakdown not performed in this pass; only review-derived signals gathered (see Section 5): Files On-Demand (local-disk-space-conserving sync), real-time co-editing, version history, automatic cloud backup.

## 4. Competitors
- Zoho WorkDrive, Google Workspace (Google Drive), Dropbox Business, Box, and other tools in this category (see `../../03-Benchmarks/collaboration-productivity.md`).

## 5. Customer Reviews
- **G2 rating (FACT, retrieved 2026-09-10, via search-result synthesis of g2.com/products/microsoft-onedrive-for-business/reviews — direct page fetch was blocked with HTTP 403 in this pass, same pattern encountered researching Zoho WorkDrive; re-confirm with a fresh fetch/login if precision is critical):** 4.3/5, 10,357 reviews. G2 also places it #2 on the G2 Grid for Cloud Content Collaboration software, behind Google Workspace (CUSTOMER FEEDBACK/FACT, search-synthesis, retrieved 2026-09-10).
- **G2 sub-scores (CUSTOMER FEEDBACK, search-synthesis, retrieved 2026-09-10):** Ease of use 88%, ease of administration 87%, meets requirements 90%, ease of setup 89% — reported as trailing Google Drive on usability specifically.
- **Capterra rating (FACT, retrieved 2026-09-10, via direct fetch of capterra.com/p/161304/OneDrive/reviews/):** 4.5/5 stars, 12,854 verified reviews. Sub-scores: Ease of Use 4.4/5, Customer Service 4.2/5. **Note:** this Capterra listing is for "OneDrive" generally (product id 161304), not a OneDrive-for-Business-specific Capterra page — treat as directional/aggregating consumer + business use, similar to the Dropbox-overall caveat noted in `zoho-workdrive.md` Section 4.
- **Liked most (CUSTOMER FEEDBACK, G2 + Capterra synthesis, retrieved 2026-09-10):** Seamless integration with Outlook/Teams/SharePoint/Office 365; secure document sharing; cross-device file accessibility with automatic sync; real-time co-editing and version history; "Files On-Demand" for conserving local disk space; strong reliability/backup framing.
- **Disliked most (CUSTOMER FEEDBACK, G2 + Capterra synthesis, retrieved 2026-09-10):** Occasional sync delays/conflicts and inconsistent updates across devices; desktop client can consume significant system resources; slower download speeds for large files; administrative/permission screens described as incomplete or confusing for less-technical admins; limited free storage and upgrade costs seen as expensive relative to competitors; customer support availability limited for personal/small-business accounts; usability trails Google Drive per G2 sub-scores above.
- **Recurring complaints:** Sync reliability/large-file performance (echoes the same performance theme found for Zoho WorkDrive and Box in `zoho-workdrive.md`); admin/permissions UX complexity; cost-at-scale.
- **Recurring praise:** Microsoft-ecosystem integration depth (Outlook/Teams/SharePoint); cross-device accessibility; co-editing/version history.
- **Requested features / switch-away / switch-to reasons:** TODO — not mined in this pass; would need a dedicated "sort by lowest rating / most recent" pass on G2 and Capterra.

## 6–13. UI/UX, Flows, Technical, Performance, AI, Mobile, Security, Strengths/Weaknesses
- NOT OBSERVED — requires dedicated research pass with live login/product exploration, per the same methodology limitation noted in `zoho-workdrive.md` and the other competitor stubs in this category.

## 14. Competitive Score
- TODO — pending full record; see `../../03-Benchmarks/collaboration-productivity.md` for cross-product scoring status.

## 15. What We Should Learn
- **RECOMMENDATION — investigate:** The recurring sync-reliability and large-file-performance complaint appears across OneDrive, Zoho WorkDrive, and Box in this research pass (CUSTOMER FEEDBACK, cross-referenced with `zoho-workdrive.md` Section 5/9) — this may be a category-wide pain point worth explicit product testing/benchmarking rather than treating it as a single-vendor weakness.
- **RECOMMENDATION — avoid:** Confusing/incomplete admin and permissions UX for non-technical admins (CUSTOMER FEEDBACK) — worth contrasting directly against Zoho WorkDrive's more favorably reviewed Admin/Organizer/Editor/Commenter/Viewer role model once a side-by-side UI comparison is possible.
- **RECOMMENDATION — investigate:** If the reported 2026 discontinuation of standalone OneDrive for Business Plan 1/Plan 2 (forcing bundled Microsoft 365 purchase) is confirmed, this is a meaningful go-to-market contrast point versus Zoho WorkDrive's continued storage-first standalone pricing — worth flagging to positioning/pricing strategy once independently verified.

## Sources
- [G2 — Microsoft OneDrive for Business Pros and Cons](https://www.g2.com/products/microsoft-onedrive-for-business/reviews?qs=pros-and-cons) — retrieved 2026-09-10 (search-result synthesis; direct fetch returned HTTP 403)
- [G2 — Microsoft OneDrive for Business Pricing](https://www.g2.com/products/microsoft-onedrive-for-business/pricing) — retrieved 2026-09-10 (search-result synthesis; direct fetch returned HTTP 403)
- [G2 — Microsoft OneDrive for Business Alternatives & Competitors](https://www.g2.com/products/microsoft-onedrive-for-business/competitors/alternatives) — retrieved 2026-09-10
- [Capterra — OneDrive Reviews](https://www.capterra.com/p/161304/OneDrive/reviews/) — retrieved 2026-09-10 (direct fetch succeeded)
- [Capterra — OneDrive Pricing](https://www.capterra.com/p/161304/OneDrive/pricing/) — retrieved 2026-09-10 (referenced via search synthesis only, not independently fetched)
- Pricing aggregators (flagged for re-verification against official microsoft.com pages, which timed out on direct fetch in this pass): [Internxt — OneDrive Pricing 2026](https://blog.internxt.com/onedrive-pricing/), [TrustRadius — OneDrive Pricing](https://www.trustradius.com/products/onedrive/pricing), [xpay.sh — Microsoft OneDrive for Business Pricing](https://www.xpay.sh/saas-pricing/microsoft-onedrive-for-business/), [ITQlick — Microsoft OneDrive Pricing](https://www.itqlick.com/microsoft-onedrive-for-business/pricing) — all retrieved 2026-09-10
- [Enlyft — Microsoft OneDrive market share / customer firmographics](https://enlyft.com/tech/products/microsoft-onedrive) — retrieved 2026-09-10 (third-party analytics, UNVERIFIED against a primary source)
- Official Microsoft pages (`microsoft.com/en-us/microsoft-365/onedrive/...`) — **fetch attempted but timed out repeatedly in this pass; not independently confirmed.** Flagged as the top priority for the next research pass on this product.
