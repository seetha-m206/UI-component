---
component: "HubSpot Inbox View and Actions Disclosures"
ui_category: "Navigation > Context Menu"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
---

# HubSpot Inbox View and Actions Disclosures

## Location

- **OBSERVED:** Secondary navigation in authenticated [Inbox](https://app-na3.hubspot.com/live-messages/343751787/inbox), inspected 2026-10-05.

## Screenshot

- **NEEDS VERIFICATION:** Menus were visually and semantically inspected. No durable screenshot was saved.

## Structure

- **OBSERVED:** Three top-level views show zero counts: Unassigned, Assigned to me and All open. A More disclosure exposes Email, Calls, All closed, Sent, Spam and Trash. The Actions button opens a two-option menu below the view list.

## Actions

| Element | User action | Observed result |
| --- | --- | --- |
| More | Space | Expanded into the six additional views and changed its label to Less. |
| Actions | Space | Expanded a list with Manage team availability and Connect a channel. |
| All closed | Enter or Space | Focused the control. A distinct data result was **NOT OBSERVED** because the Inbox remained in the first-channel empty state. |
| Manage team availability | Not activated | Availability management is **NOT OBSERVED**. |
| Connect a channel | Not activated | Channel creation is **NOT OBSERVED**. |

## Behavior & States

- **OBSERVED:** More changed `aria-expanded` from false to true. Actions acquired expanded state while its list was open. The visible empty state remained in the main panel.
- **NOT OBSERVED:** Whether views are mutually exclusive after a channel is connected, whether zero counts update live, saved view customization and any action destination.

## Technical Data

- **OBSERVED / DOM:** These controls used button roles. The More accordion exposed `aria-controls` and `aria-expanded`. Keyboard Space produced a visible, accessible state change when pointer clicks did not.
- **NOT OBSERVED:** Internal implementation, requests, persistence, motion, error handling.

## Human Context

- **RECOMMENDATION:** Treat view selection and the Actions list as separate patterns. A focused view control is not enough evidence for a changed conversation dataset.

## AI Context

- **FACT:** The labels and expanded states were observed in the authenticated Inbox.
- **NOT OBSERVED:** The management and connection options were not executed.

## Needs Verification

- **NEEDS VERIFICATION:** Populated view outcomes, selection semantics, focus restoration and disabled/loading states.

## Sources

- **OBSERVED:** Authenticated [Inbox](https://app-na3.hubspot.com/live-messages/343751787/inbox), inspected 2026-10-05.
