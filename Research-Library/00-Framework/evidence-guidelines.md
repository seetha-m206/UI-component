---
title: Evidence Guidelines
---

# Evidence Guidelines

Every claim recorded in this library must be tagged with one of the following labels. Never record an untagged claim, and never upgrade a tag to something stronger than the evidence supports.

| Tag | Meaning | Example |
|---|---|---|
| **FACT** | Directly observed or officially documented (official pricing page, official docs, a screenshot/DOM capture taken during exploration). | "Zoho Social Standard plan is $15/mo billed monthly, $10/mo billed annually — per zoho.com/social/pricing." |
| **OBSERVATION** | Something seen directly in the live product/UI during exploration (screen layout, component behavior, network call), but not officially documented. | "Clicking 'Connect Facebook' opens an OAuth popup; on success the button re-renders as a green 'Connected' chip." |
| **INFERENCE** | A reasonable technical or business conclusion drawn from observations, not directly stated anywhere. | "The presence of a `X-Zoho-Csrf` header suggests server-rendered session auth rather than a pure JWT/OAuth SPA pattern." |
| **CUSTOMER FEEDBACK** | A theme or claim sourced from customer reviews (G2, Capterra, Reddit, etc.), always with a source and, where possible, an approximate review count/date. | "Users on G2 (4.6/5, 2,870 reviews) frequently cite the mobile app as weaker than desktop." |
| **RECOMMENDATION** | An analyst judgment on what we should adopt, avoid, or investigate further, based on the above. Always must cite which FACT/OBSERVATION/CUSTOMER FEEDBACK it is derived from. | "Adopt Zoho Social's single-screen 'publish + monitor' layout; avoid its reported mobile-app gap." |

## Rules

1. **Never invent** numbers, review counts, technical architecture, pricing, or customer quotes. If a figure cannot be verified, write `UNVERIFIED — needs confirmation` instead of a number.
2. **Third-party aggregator sites** (blogs summarizing pricing/features) are lower-confidence than official vendor pages or primary review platforms (G2, Capterra, Gartner Peer Insights). When a figure only comes from an aggregator, tag it FACT but note the source and flag it `(third-party sourced — verify against official page)`.
3. **Always cite a source** — official URL, review platform + rating + review count + retrieval context, or "observed in live app on [date]" for direct exploration.
4. **Distinguish "what a competitor claims" from "what we verified."** A vendor's marketing page is a FACT about *what they claim*, not necessarily a FACT about real-world performance.
5. **Dates matter.** Pricing, ratings, and feature sets change. Every research record should carry a `Last verified:` date.
6. **When access isn't available** (e.g., gated dashboard, enterprise-only feature), say so explicitly rather than guessing: `NOT OBSERVED — requires [access type]`.
