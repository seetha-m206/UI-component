---
component: "Hostinger hPanel Application Shell"
ui_category: "Application Layout > App Shell"
source_product: "Hostinger Website Builder"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Persistent dark utility header, grouped product drawer, light route workspace, global search, Agent, notifications, and profile navigation observed across hPanel."
---

# Hostinger hPanel Application Shell

## Structure

- **OBSERVED:** A dark header contains referral, Agent, search, to-do, and account controls. A grouped drawer contains Home, Websites, Domains, Emails, More services, Hostinger apps, AI agents, Marketing, and developer tools.
- **OBSERVED:** Route workspaces retain the shell. Profile pages add breadcrumbs and a secondary settings menu.

## Behavior & States

- **OBSERVED:** Search opens a keyboard-labelled modal with category filters, common destinations, and an Agent fallback. Searching `SEO` produced the Agent fallback in this account.
- **OBSERVED:** Agent and to-do surfaces open over the current route. Product groups expand nested destinations in place.
- **NEEDS VERIFICATION:** Responsive layout, saved drawer state, complete keyboard order, internal APIs, design tokens, and motion.

## Reconstruction Guidance

- **RECONSTRUCTION:** Use a global utility header, grouped navigation drawer, and light route workspace. Keep Agent, search, notifications, and account controls globally available.

## Evidence

- **OBSERVED:** Authenticated Hostinger hPanel routes, inspected 2026-10-07.
- **NEEDS VERIFICATION:** Session screenshots were not exported as durable repository image files.
## Preview & Fixtures

- **RECONSTRUCTION:** Registered preview id `hostinger-hpanel-application-shell` uses fictional local data and sends no Hostinger request.
- `default` — observed or observed-structure starting state.
- `search` — observed or observed-structure starting state.
- `account` — observed or observed-structure starting state.
- `agent` — observed or observed-structure starting state.
- **OBSERVED:** Component-to-provider evidence and state provenance are indexed in `Internal/scratch-2026-10/hostinger/component-evidence-index.json`.
- **NEEDS VERIFICATION:** Fixture rendering proves the local reconstruction only. It does not prove provider-side results, persistence, validation, authorization, or visual pixel fidelity.
