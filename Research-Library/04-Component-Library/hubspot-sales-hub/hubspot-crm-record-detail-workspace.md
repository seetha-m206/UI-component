---
component: "HubSpot CRM Record Detail Workspace"
ui_category: "Application Layout > Split-pane Shell"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot CRM Record Detail Workspace

## Location

- **OBSERVED:** Provider-labelled sample Contact and Company records opened from their index tables.

## Screenshot

- **OBSERVED:** Contact: `Internal/scratch-2026-10/hubspot-sales-hub/evidence/screenshots/2026-10-07-contact-record.png`.
- **OBSERVED:** Company: `Internal/scratch-2026-10/hubspot-sales-hub/evidence/screenshots/2026-10-07-company-record.png`.

## Structure

- **OBSERVED:** The workspace uses three columns: identity and editable key properties on the left, overview/activity intelligence in the centre and association cards on the right.
- **OBSERVED:** Header actions include Edit and shortcuts for Note, Email, Call, Task, Meeting and More activities.
- **OBSERVED:** Key information rows combine property label, value, property-history action and an overflow action. Some populated values also expose Copy value.
- **OBSERVED:** The centre column includes Catch-up and Activities modes, customizable cards, AI-labelled insights, recent interactions, health, sentiment, challenges and feedback controls.
- **OBSERVED:** The right column uses collapsible association cards with counts, Add controls, card-settings links and populated or explanatory empty states.

## Actions

| Element | Safe action | Observed result |
| --- | --- | --- |
| Record Actions | Open, then close | Showed Follow, properties/history actions, association review, Summarize, search, email opt-out, restore activity, Merge, Clone, Delete and Export contact data on the sample contact. |
| More activities | Open, then close | Showed sequence enrollment, LinkedIn, SMS, WhatsApp, call, meeting, email and postal-mail actions plus Reorder activity buttons. |
| Collapsible cards | Not changed in this pass | Overview, Health and association cards were observed expanded. |
| Create or destructive actions | Not activated | No note, email, call, task, meeting, sequence, message, association, merge, clone, delete or export action ran. |

## Behavior & States

- **OBSERVED:** Contact and Company records share the same frame while property labels, AI card titles and association composition adapt by object.
- **OBSERVED:** AI cards render generated-at timestamps, narrative summaries, source controls, feedback affordances and contextual suggested actions.
- **OBSERVED:** Empty association cards explain what the associated object represents rather than showing an unlabelled blank area.
- **NEEDS VERIFICATION:** Inline editing, property history contents, activity creation, AI regeneration, association creation, permissions and save validation.

## Technical Data

- **OBSERVED / DOM:** Property controls expose stable form-control identifiers and accessible labels. Association cards expose expanded/collapsed state and record counts.
- **OBSERVED / DOM:** Activity shortcuts and record actions are real buttons or links with descriptive accessible names.
- **NEEDS VERIFICATION:** Record read/write APIs, AI source contracts, caching, optimistic state and responsive column behavior.

## Human Context

- **RECOMMENDATION:** Use the three-column shell to separate identity, work history and relationships. Keep consequential shortcuts visible but route them into clearly bounded flows.

## AI Context

- **FACT:** Layout, sample content categories and menu inventories were observed directly.
- **RECONSTRUCTION:** Any local preview must use fictional names, organizations, dates and activities.
- **NEEDS VERIFICATION:** No user or provider data was changed.

## Sources

- Authenticated HubSpot sample Contact and Company records, observed 2026-10-07.
