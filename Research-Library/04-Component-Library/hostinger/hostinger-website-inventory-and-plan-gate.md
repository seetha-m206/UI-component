---
component: "Hostinger Website Inventory and Plan Gate"
ui_category: "Website Builders > Creation Entry"
source_product: "Hostinger Website Builder"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Hostinger Website Inventory and Plan Gate

## Location

- **OBSERVED:** Authenticated `/websites` inventory, filtered to AI Builder and Web Apps, followed by the AI Builder `Get started` action.

## Structure

- **OBSERVED:** The Websites workspace uses pill-like filters for All websites, WordPress, AI Builder, Web Apps, and PHP/HTML, with a page-level `Get websites plan` action.
- **OBSERVED:** The empty AI Builder state uses a large promotional card with a creation promise, supporting copy, artwork, and `Get started` button.
- **OBSERVED:** The Web Apps state adds a `Connect your coding agent` action and explains GitHub, GitLab, and ZIP deployment for Next.js, Vite, Vue, React, and other frameworks.

## Actions

| Element | Observed behavior |
| --- | --- |
| Website-type filter | Replaces the empty-state card and updates the `websiteType` query parameter. |
| AI Builder `Get started` | Navigates to `/buy-hosting?redirectLocation=ai_builder_empty_state_banner`. |
| Choose plan | Visible on pricing cards. Not selected. |
| Connect coding agent | Visible in Web Apps. Not opened because it may request external account access. |

## Plan Comparison Boundary

- **OBSERVED:** The plan page offers Individual & Business, Cloud, and Agency tabs plus a billing-period selector.
- **OBSERVED:** Four plan cards compare discount, monthly price, term total, renewal price, site count, storage, mailboxes, AI credits, domains, ecommerce, backups, CDN, and support.
- **OBSERVED:** A larger comparison table groups Key Features, Managed WordPress, Hostinger Website Builder, Security, Service and support, and Technical details.
- **OBSERVED:** The Hostinger Website Builder section lists AI website builder, drag-and-drop editor, templates, marketing integrations, AI image generation, AI writing, AI blog generation, and AI SEO tools.
- **NEEDS VERIFICATION:** Checkout, plan activation, template gallery, AI onboarding prompts, generated site, manual editor, sections, elements, styles, responsive controls, pages, navigation, media, blog, forms, booking, SEO settings, analytics, integrations, and publishing controls.

## Technical Data

- **OBSERVED / DOM:** Filters rendered as checkboxes, plan families as a tab group, term as a combo box, comparison groups as expandable buttons, and plan actions as buttons.
- **NEEDS VERIFICATION:** Creation APIs, repository connection scopes, provisioning states, editor runtime, and payment validation.

## Reconstruction Guidance

- **RECONSTRUCTION:** Separate inventory filtering from creation entry. When no entitlement exists, preserve the user's selected creation mode while explaining the exact plan boundary before checkout.

## Sources

- **OBSERVED:** Authenticated Hostinger Websites and Purchase Hosting routes, inspected 2026-10-07.
## Preview & Fixtures

- **RECONSTRUCTION:** Registered preview id `hostinger-website-inventory-and-plan-gate` uses fictional local data and sends no Hostinger request.
- `ai-builder` — observed or observed-structure starting state.
- `web-apps` — observed or observed-structure starting state.
- `plan` — observed or observed-structure starting state.
- **OBSERVED:** Component-to-provider evidence and state provenance are indexed in `Internal/scratch-2026-10/hostinger/component-evidence-index.json`.
- **NEEDS VERIFICATION:** Fixture rendering proves the local reconstruction only. It does not prove provider-side results, persistence, validation, authorization, or visual pixel fidelity.
