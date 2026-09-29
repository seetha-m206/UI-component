---
title: Category Taxonomy
---

# Category Taxonomy

Two orthogonal taxonomies are maintained: **product categories** (for grouping products/competitors) and **UI/action categories** (for grouping reusable components across products, regardless of category). Every product and component record must be tagged against both.

## 1. Product Categories

Seeded from Zoho's own product lineup (see [product-index.md](../01-Zoho-Primary-Products/00-product-index.md)), extended as the library grows into other companies' ecosystems.

- **CRM & Sales** — Zoho CRM, Bigin, Bookings
- **Social Media Management** — Zoho Social
- **Marketing Automation** — Zoho Marketing Automation, Campaigns, Forms, Thrive, PageSense
- **Customer Support / Helpdesk** — Zoho Desk, Assist, Lens
- **Finance & Accounting** — Zoho Books, Invoice, Expense, Billing, Checkout, Payroll
- **HR & Recruiting** — Zoho People, Recruit
- **Project & Work Management** — Zoho Projects, Sprints
- **Inventory & Commerce** — Zoho Inventory, Commerce, Sites
- **Communication** — Zoho Mail, TeamInbox, Vani
- **Collaboration & Productivity** — WorkDrive, Writer, Sheet, Show, Notebook, Connect, Learn
- **BI / Analytics** — Zoho Analytics
- **Live Chat & Sales Engagement** — Zoho SalesIQ (added 2026-09-11; distinct from ticketing-based Customer Support/Helpdesk — proactive website chat, visitor tracking, and pre-sales engagement rather than post-sale ticket resolution)
- **Team Chat & Messaging** — Zoho Cliq (added 2026-09-11; distinct from Communication/email — internal real-time messaging, not async mail)
- *(new categories added here as non-Zoho companies are researched, e.g. "Design Tools", "Dev/DevOps", "Payments")*

Each category folder under `02-Competitor-Products/` holds one file per competitor, plus a `_benchmark.md` roll-up.

## 2. UI / Action Categories (cross-product component taxonomy)

Used in `04-Component-Library/` so the same kind of component is comparable across unrelated products (a CRM's table and a social tool's table belong in the same bucket).

> **Renamed 2026-09-28** to align with the vocabulary used by Centilio UI OS (an external design-system reference the UI-Component-Library site is now benchmarked against for polish/IA) wherever a direct equivalent exists — `Data Input`→`Forms`, `Actions/Controls`→`Actions`, `Feedback/State`→`Feedback`, `Search & Filter`→`Search and Filtering`, `Account/Settings`'s notification-settings entries promoted to a standalone `Notifications` category, table/grid-shaped `Data Display` entries split out into `Enterprise Tables`, and page-shell/split-pane editor components split out of `Content Creation` into a new `Application Layout` category. Categories with no direct Centilio equivalent (`Collaboration`, `Analytics/Reporting`, `Content Creation`, `Authentication`, `Onboarding`) were kept as-is rather than forced into a mismatched name — this is a relabel/regroup pass, not a wholesale adoption of Centilio's own category list.

- **Authentication** — Login, Signup, Forgot Password, Logout, SSO, 2FA
- **Application Layout** — App shell, Sidebar (structural/layout-level, not a nav widget), Split-pane shell, Editor shell, Header/top bar, Main content area, Page header (per-screen title bar). **Mandatory for every product, not optional** — see note below.
- **Navigation** — Top nav, Tabs, Breadcrumb, Command palette, Context menu, Card selector, Guided flow
- **Data Display** — Card, List, Kanban board, Calendar/Timeline (non-tabular displays; grid/table-shaped data lives in Enterprise Tables)
- **Enterprise Tables** — Table, Grid, Entries/records list with toolbar+pagination+selection
- **Forms** — Form, Input, Dropdown/Select, Date picker, File upload, Color picker
- **Actions** — Button, Toggle, Bulk actions, Card selector, Workflow builder, AI assistant
- **Feedback** — Empty state, Loading state, Error state, Toast/notification, Confirmation dialog/modal
- **Search and Filtering** — Search bar, Filter panel, Sort control, Saved views
- **Content Creation** — Composer/editor (content-authoring tools; full-page shell/split-pane editors live in Application Layout instead), Media upload, Preview, Scheduling
- **Collaboration** — Comments, Mentions, Approval flow, Sharing/permissions
- **Analytics/Reporting** — Chart, Dashboard widget, Report builder, Export
- **Onboarding** — Setup wizard, Tooltip/walkthrough, Checklist
- **Notifications** — Notification settings/preferences, delivery rules, trigger configuration
- **Account/Settings** — Profile, Team/roles management, Billing/plan management, Integrations panel (notification-specific settings now live under Notifications instead)

New categories should be added here (not invented ad hoc inside individual records) so cross-product comparison stays possible.

### 2a. Application Layout is mandatory for every product (added 2026-09-28)

Two already-documented competitors (Typeform, Google Forms) have zero Application Layout components captured, which is why their sidebar sections in the UI-Component-Library site look thin next to Zoho Forms' — not because those products lack a shell, but because the research prompts for them never asked for it. Every future product's **first component-level pass** (immediately after the P1 broad-identification prompt) must capture at minimum the overall app shell/frame, the primary sidebar or left nav (if the product has one), the top header/bar, the main content area's structural wrapper, and a representative page header (per-screen title bar). Backfill prompts for the two gap products are queued as GF9 in `prompts/prompt-backlog-google-forms.md` and AL1 in `prompts/prompt-backlog-typeform-remaining.md`.

### 2b. Canonical per-category coverage checklist, from live Centilio exploration (added 2026-09-28)

The user's underlying concern isn't just Application Layout — Centilio's own site (https://docs-rosy-ten-34.vercel.app/) shows a fixed, complete set of component pages under each category, and every one of our researched products should eventually have equivalent coverage in the matching category so no product's sidebar section looks conspicuously sparse next to another's. This checklist was captured by directly loading each category page of Centilio's live site on 2026-09-28 (`OBSERVATION`, not invented) — it is a **coverage target for what kinds of components to look for**, not a naming mandate (per the user's earlier explicit choice to keep our own specific, research-derived component names rather than relabel them to Centilio's generic ones).

| Our category | Centilio's own component set (OBSERVATION, 2026-09-28) |
|---|---|
| Application Layout | Application shell, Left sidebar, Header, Main content area, Page header |
| Navigation | Primary sidebar, Tabs, Breadcrumbs, Pagination, Steps |
| Actions | Button, Button group, Icon button, Destructive button, Action menu, Action bar |
| Forms | Dropdown, Text input, Checkbox, Switch, Text area, Radio group, File upload, Input group, Tag input |
| Data Display | Tables, Cards, Badges, Empty states, Accordion, Avatar, Progress, Skeleton, Metric card, Onboarding banner, Collapse, Column divider, Device frame, Divider, List group, Lists, Legend indicator, Profile, Shapes, Sliding image |
| Feedback | Toast, Modal, Drawer, Tooltip, Alert, Popover, Spinner |
| Search and Filtering | Global search, Filter panel, Filter chips |
| Enterprise Tables | Standard table, Pagination, Row selection |
| Notifications | Notification centre |
| Account/Settings | Settings layout, Dangerous actions (Centilio calls this category "Settings") |

**How to apply this going forward:** when drafting a research prompt for any product (new or already-researched), check this table for the product's target category and explicitly ask the researcher to confirm whether the product has an equivalent to each listed item — "does X exist, and if so what does it look like" — rather than only chasing whatever the researcher happens to notice. A confirmed absence (`the product has no equivalent`) is a valid, useful finding and should be recorded as such, not skipped. This is a coverage aid to catch category gaps like the Application Layout one, not a requirement to reproduce Centilio's exact item list one-for-one — a product's real UI should always win over forcing a match.
