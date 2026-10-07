---
component: "Hostinger hPanel Application Shell"
ui_category: "Application Layout > App Shell"
source_product: "Hostinger Website Builder"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Hostinger hPanel Application Shell

## Location

- **OBSERVED:** Authenticated Hostinger hPanel across Home, Websites, Domains, Emails, More services, Ecommerce, and profile settings routes.

## Screenshot

- **OBSERVED:** Browser screenshots were captured during the session for Home, AI Builder inventory, plan comparison, AI memory, Domains, Emails, marketplace, Agent panel, and Ecommerce.
- **NEEDS VERIFICATION:** The browser captures are session evidence and were not exported as durable repository image files.

## Structure

- **OBSERVED:** A dark global header holds the menu trigger, referral entry, Agent launcher, search, to-do notification, and account menu.
- **OBSERVED:** A persistent drawer groups Home, Agent, Websites, Domains, Emails, More services, Hostinger apps, AI agents, Marketing, and developer tools. Website and domain groups expose nested routes in place.
- **OBSERVED:** The light main workspace changes by route. Profile pages add breadcrumbs and a dedicated secondary menu for account settings.

## Actions

| Element | Observed behavior |
| --- | --- |
| Global search | Opens a modal search surface with category filters, common destinations, and an Agent fallback. Searching `SEO` showed only the Agent fallback in this account. |
| Websites / Domains groups | Expand nested route lists without leaving the current workspace. |
| Agent launcher | Opens a right-side panel over the current route. |
| To-do button | Opens a notification panel with unread state, a bulk read action, and item-level actions. |
| Account menu | Opens account, sharing, billing, security, activity, notifications, AI memory, language, learning, expert, theme, and logout destinations. |

## Behavior & States

- **OBSERVED:** Navigation state persists while the main workspace changes.
- **OBSERVED:** Search is keyboard-labelled with `Command K`, supports a clear action, and closes with Escape.
- **OBSERVED:** The account menu exposed the signed-in identity. Personally identifying values were intentionally omitted from this record.
- **NEEDS VERIFICATION:** Collapsed drawer layout, responsive navigation, keyboard order beyond search, and preference persistence.

## Technical Data

- **OBSERVED / DOM:** Rendered accessibility evidence included buttons, links, checkboxes, tab groups, combo boxes, tables, breadcrumbs, expanded and collapsed states, and route-specific headings.
- **OBSERVED:** Route families included `/`, `/websites`, `/domains`, `/emails`, `/marketplace`, `/ecommerce`, and `/profile/*`.
- **NEEDS VERIFICATION:** Internal APIs, authorization checks, design tokens, motion timings, and error recovery.

## Reconstruction Guidance

- **RECONSTRUCTION:** Use a dark utility header, a grouped drawer, and a light route workspace. Keep global Agent, search, notifications, and account controls available across product areas.

## Sources

- **OBSERVED:** Authenticated Hostinger hPanel, inspected 2026-10-07.
## Preview & Fixtures

- **RECONSTRUCTION:** Registered preview id `hostinger-hpanel-application-shell` uses fictional local data and sends no Hostinger request.
- `default` — observed or observed-structure starting state.
- `search` — observed or observed-structure starting state.
- `account` — observed or observed-structure starting state.
- `agent` — observed or observed-structure starting state.
- **OBSERVED:** Component-to-provider evidence and state provenance are indexed in `Internal/scratch-2026-10/hostinger/component-evidence-index.json`.
- **NEEDS VERIFICATION:** Fixture rendering proves the local reconstruction only. It does not prove provider-side results, persistence, validation, authorization, or visual pixel fidelity.
