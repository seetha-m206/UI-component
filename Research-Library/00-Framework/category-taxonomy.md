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

- **Authentication** — Login, Signup, Forgot Password, Logout, SSO, 2FA
- **Navigation** — Sidebar, Top nav, Tabs, Breadcrumb, Command palette
- **Data Display** — Table, Card, List, Kanban board, Calendar/Timeline
- **Data Input** — Form, Input, Dropdown/Select, Date picker, File upload
- **Actions/Controls** — Button, Toggle, Bulk actions, Context menu
- **Feedback/State** — Empty state, Loading state, Error state, Toast/notification, Confirmation dialog/modal
- **Search & Filter** — Search bar, Filter panel, Sort control, Saved views
- **Content Creation** — Composer/editor, Media upload, Preview, Scheduling
- **Collaboration** — Comments, Mentions, Approval flow, Sharing/permissions
- **Analytics/Reporting** — Chart, Dashboard widget, Report builder, Export
- **Onboarding** — Setup wizard, Tooltip/walkthrough, Checklist
- **Account/Settings** — Profile, Team/roles management, Billing/plan management, Integrations panel, Notification settings

New categories should be added here (not invented ad hoc inside individual records) so cross-product comparison stays possible.
