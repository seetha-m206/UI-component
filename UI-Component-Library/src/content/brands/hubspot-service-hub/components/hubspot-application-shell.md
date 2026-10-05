---
component: "HubSpot Service Hub Application Shell"
ui_category: "Application Layout > App Shell"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
status: "partial"
summary: "Shared HubSpot header, navigation rail, Service flyout, and page frame observed in the authenticated portal."
---

# HubSpot Service Hub Application Shell

## Location

- **OBSERVED:** Authenticated HubSpot portal on 2026-10-05. The shared shell was visible on Inbox and Tickets.
- **OBSERVED:** Source routes: [Inbox](https://app-na3.hubspot.com/live-messages/343751787/inbox) and [Tickets](https://app-na3.hubspot.com/contacts/343751787/objects/0-5/views/all/board).

## Screenshot

- **NEEDS VERIFICATION:** The shell was visually inspected in the in-app browser. A durable source screenshot was not saved for this record.

## Structure

- **OBSERVED:** A dark left navigation rail, dark full-width top header, and light main workspace. The rail has Home, record entries, expandable Marketing, Content and Platform groups, and More. The header has global search, Breeze Assistant, Upgrade, Create new, Calls, Marketplace, Help, Settings, Notifications and the account menu.
- **OBSERVED:** The Inbox uses a secondary view column beside its main content. The Tickets board has a page header, pinned views and a toolbar above board columns. Each screen retains the same shell.

## Actions

| Element | Safe action | Observed result |
| --- | --- | --- |
| Global Find in HubSpot | Enter Tickets, Help desk, Knowledge base or Inbox | Search result panel showed matching tools and documentation. Tickets and Inbox had working tool links. Help Desk and Knowledge Base showed upgrade destinations. |
| More | Keyboard Space | Expanded the product-group flyout. |
| Service in More | Keyboard Space | Showed Chatflows, Help Desk, Customer Success, Customer Agent, Knowledge Base, Customer Portal, Feedback Surveys and Service Analytics. |
| Pin controls | Not activated | Visible beside some product entries. Persistence is **NOT OBSERVED**. |

## Behavior & States

- **OBSERVED:** The More flyout groups tools by CRM, Marketing, Content, Sales, Revenue, Service, Data Management, Agents, Automation, Reporting and Development. In the Service group, Chatflows offered a Pin control. Other Service entries appeared as menu items.
- **OBSERVED:** Global search returned Tickets and Inbox tool links. Help Desk and Knowledge Base results explicitly identified Service Hub Professional and resolved to upgrade URLs in this portal.
- **NOT OBSERVED:** Complete navigation outcomes for each Service entry, responsive shell, hover behavior and saved pin state.

## Technical Data

- **OBSERVED / DOM:** Accessibility roles included `banner`, `navigation`, `menu`, `menuitem`, `searchbox`, buttons and links. Expanded state appeared on the More menu item. This is rendered DOM evidence only.
- **NOT OBSERVED:** Internal JavaScript, server authorization, API contracts, CSS tokens and motion timing.

## Human Context

- **RECOMMENDATION:** Treat this as HubSpot's shared product shell. Use the Service flyout and page-specific secondary navigation as separate reusable patterns.

## AI Context

- **FACT:** Product identity and two authenticated routes were verified on 2026-10-05.
- **NOT OBSERVED:** Access to Professional Help Desk does not follow from access to the free Inbox or Tickets board.

## Needs Verification

- **NEEDS VERIFICATION:** Durable screenshot capture, responsive states, full keyboard order, action outcomes and all paid product destinations.

## Sources

- **OBSERVED:** Authenticated [Inbox](https://app-na3.hubspot.com/live-messages/343751787/inbox) and [Tickets](https://app-na3.hubspot.com/contacts/343751787/objects/0-5/views/all/board), inspected 2026-10-05.
