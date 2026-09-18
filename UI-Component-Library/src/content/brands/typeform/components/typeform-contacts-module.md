---
component: 'Contacts Module (CRM-lite)'
ui_category: 'Data Display > Table'
source_product: 'Typeform'
last_verified: '2026-09-17'
evidence_state: 'source_reviewed'
status: 'complete'
summary: "Typeform's GraphQL-backed CRM-lite contacts list — contacts sync automatically from a published form's Email-mapped question; permissions are fixed/role-based, not yet configurable. No direct Zoho Forms equivalent identified."
---

# Component: Contacts Module (CRM-lite)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

No existing Zoho Forms record covers an equivalent CRM/contacts layer — Zoho Forms' own CRM integration ("CRM Forms," per [[new-form-chooser]]'s chooser options) writes into the separate Zoho CRM product rather than maintaining its own in-product contacts list, so this is filed as a standalone Typeform-only record rather than a Competitor Comparisons addition to an existing Zoho file.

## Location

- **Product:** Typeform
- **Screen(s) it appears on:** Top-level "Contacts" tab (`admin.typeform.com/accounts/{accountId}/contacts`) — list view, "Add new contact" side panel, contact detail slide-over, Contact permissions popover, Contact settings modal, and the Properties management screen.

## Structure

- **List view is a plain data table/grid, not cards.** Columns observed: a checkbox column, "Contact" (avatar + primary identifier — name if known, else email), "Email", "Name", "Phone number", with more columns available by scrolling horizontally — the same grid pattern already documented for Typeform's Responses tab ([[entries-kanban-view]]'s Competitor Comparisons — no Kanban/board layout here either).
- **Empty state** ("Ready to build your contact list?") gives an explicit 3-step recipe: (1) "Add an email question to a form", (2) "Publish your form", (3) click "Auto-add from forms" — plus an "Import contacts" button (CSV) and an "add individually" link. This copy implies a manual, button-triggered sync, but in practice (see Action → Result) a submitted response created a contact without that button ever being clicked.
- **"Add new contact" side panel** (opened via "add individually" or Actions → "Add new contact") exposes exactly 10 fields at the time of this trace: Email, Name, Email subscription status (dropdown: Subscribed / Unsubscribed / Never subscribed), Notes, Phone number (with country-code selector), Job title, LinkedIn URL, Company name, Company description, Company industry. The panel opens with an explicit privacy notice: **"Before adding sensitive information, be aware that everyone in your organization can view contact details."**
- **Contact detail view** (a slide-over panel, opened by hovering a row and clicking its expand-arrow icon) groups fields differently from the add-form: "Contact info" (Email, Phone number, Address, Education), "Company info" (Company address), "More info" (Notes), and a "Sources" section (see Action → Result). "Address" and "Education" appear here but were **not** offered as fields in the manual "Add new contact" panel — the two surfaces don't expose an identical field set.
- A promo banner ("Effortlessly turn N contacts into valuable leads" → "Create automation" / "View sample automations") appears once at least one contact exists, cross-promoting [[typeform-automations-builder]].

## Actions

| Element                                                      | User Action        | Function                                | Result                                                                                                                              | Destination screen/state |
| ------------------------------------------------------------ | ------------------ | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| "Map to contacts" toggle (question settings, any field type) | Enable             | Reveals a "Map to: [property]" dropdown | That question's answers sync to the given contact property on every future response                                                 | Same builder screen      |
| Submit a live response containing a mapped Email question    | Respondent submits | GraphQL write (inferred; see Network)   | A new (or updated/matched) Contact record appears in the Contacts list — confirmed without ever clicking "Auto-add from forms"      | Contacts tab, on reload  |
| Contact's "Sources" chip                                     | Click              | Navigation                              | Opens the source form's **builder/edit screen (Content tab)** — not the Results/Responses tab, and not the specific response record | Form builder screen      |
| Email field's status indicator (dashed circle)               | Click              | Opens a popover                         | Shows subscription status ("Never subscribed"), a timestamp, and "Sync by: User" — provenance metadata, not just current state      | Same screen              |

## Behavior & States

- **How a contact actually gets created, tested end-to-end:** added a genuine "Email" question type (from the "Contact info" group in the Add-content palette) as its own page on a live form, gave it a title, turned on "Map to contacts" for that question, and set "Map to: Email" in the dropdown the toggle reveals. Published the form, then answered it live (including the email question) via the public respondent URL and submitted. Reloading the Contacts tab afterward showed a new contact already present — no manual click on "Auto-add from forms" was needed; the empty-state's 3-step copy describes what's needed for the field to be _eligible_, not a per-response action a user must repeat.
- **"Map to contacts" is a per-question toggle, not itself the contact-creation mechanism.** Its tooltip (confirmed via the accessibility tree): _"Automatically sync responses from this question to new and existing contacts."_ This toggle exists on non-Email field types too (confirmed present, off, on the Yes/No field in [[yes-no-field]]'s original trace) — so in principle any question can be mapped to any contact property, not just an Email question to the Email property. The Email-type question specifically is what the empty-state flow treats as the trigger for automatic contact creation/matching (presumably used as the unique-identity key), while "Map to contacts" on other questions governs which additional properties get filled in on that same contact record.
- **Contact → source form traceability is one-directional and shallow.** No way exists, from the Contact record, to jump straight to the individual response that produced it — only to the form's builder screen.
- **Enrichment is a distinct, separate, off-by-default step.** A contact created from a form response shows an inline banner: "Contact not enriched. Learn how to enrich contacts." This ties to the account-level Contact settings toggle (see Rules & Validation) — form-response sync and third-party data enrichment are two independent pipelines, not one.

## Rules & Validation

- **"Contact permissions"** (sidebar link) opens a small popover, purely informational and **not configurable** in this account: "View contacts: Everyone in your organization" / "Edit contacts: Editors and admins", plus a "Request features" link — itself evidence that finer-grained permissions are not yet offered and are a known ask. A fixed, role-based default, not a per-contact or per-list ACL.
- **"Contact settings"** (sidebar link) opens a modal with exactly one control at the time of this trace: "Data enrichment" → "Enrich contacts on creation" (toggle, off by default, paid-plan badge), described as: _"Enrich a contact with third-party data on contact creation, including response sync."_
- **Properties schema** (Actions → "Add property" / "Manage properties") is grouped by entity type: **Person** (Name, Email, Email subscription status, Phone number, SMS subscription status, Job title, LinkedIn URL) and **Company** (Company name, Company description, Company industry, and more below the fold) — a Person/Company split hinting at a relational contact↔company data model, even though no separate "Companies" list surface was found elsewhere in the product. Three properties are **locked** (padlock icon, no delete option): Email, Email subscription status, SMS subscription status — the core identity/consent fields. Every other listed property has a delete (trash) icon, i.e. is removable/custom-tier, not hard-coded.
- **"SMS subscription status"** exists as a real, locked property (`Updated at: 01 Jan 1970` — an epoch placeholder suggesting it has never actually been written to on this account) but is **not** one of the fields exposed in the "Add new contact" manual-entry panel — a genuine inconsistency between the two surfaces' field sets.
- A separate **"Property mappings"** control (Add mapping / Edit mapping) sits next to "Add property" — not explored in depth this pass, but by placement and naming most plausibly governs mapping Typeform contact properties to fields in a connected third-party system (e.g. HubSpot/Salesforce), not another route to the per-question mapping above. Flagged as an open gap.

## Technical Data

> OBSERVATION, directly captured via DOM inspection and network monitoring, Claude browser extension session, 2026-09-17.

- **Network:** loading the Contacts tab is backed by Typeform's **GraphQL API** (`POST https://api.typeform.com/gql`) — multiple GQL calls fired on a single page load, alongside a `GET .../accounts/{id}/feature-set` plan/entitlement check and static asset loads. **No dedicated REST-style `/contacts` endpoint was observed**; this is a real, API-backed feature (consistent with the live create/read/detail behavior confirmed above), not a thin client-side computation layer over already-cached form-response data — though the specific GQL operation names/payloads were not inspected this pass.

## Recommended Second Pass

- Inspect the "Property mappings" control's actual behavior — confirm or refute the third-party-CRM-mapping hypothesis.
- Inspect the GQL operation names/payloads behind the Contacts list load and the contact-creation-on-submit flow directly, rather than inferring from behavior alone.
- Confirm whether editing an existing contact fires its own distinct GQL mutation, and whether list pagination/filtering is server-side (paginated GraphQL) or a full client-side fetch — not tested this pass.

## Competitor Comparisons

_(No existing Zoho-side record was identified for this comparison at the time of writing — flag for cross-linking once a comparable Zoho Forms↔CRM surface is researched in depth.)_

| Aspect                         | Zoho Forms (existing) | Typeform (this trace)                                                                                                                                                                                                       |
| ------------------------------ | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Response → CRM-record pipeline | —                     | Automatic, but conditional: requires an Email-type question with per-question "Map to contacts" mapping set to the Email property; not a blanket "every response becomes a contact" behavior                                |
| Field-level response mapping   | —                     | Confirmed generalizable: the same "Map to contacts" + "Map to: [property]" control exists on non-Email question types too (seen on a Yes/No field), so any question can feed any contact property, not just identity fields |
| Contact ↔ source traceability  | —                     | One-directional and shallow: a "Sources" chip on the contact links only to the source form's builder screen, not to the individual response or the Results tab                                                              |
| Permissions model              | —                     | Fixed, role-based, not configurable in-app: view = everyone in the org, edit = editors/admins; a "Request features" link is the only way to ask for more granularity                                                        |
| Data enrichment                | —                     | A distinct, paid-tier, off-by-default toggle ("Enrich contacts on creation") separate from ordinary response-sync; an un-enriched contact is flagged inline ("Contact not enriched")                                        |
| Properties schema              | —                     | Grouped Person/Company entity model; mostly user-extensible (custom properties can be added and deleted) except three locked core fields (Email, Email subscription status, SMS subscription status)                        |
| Backend                        | —                     | GraphQL-backed (`api.typeform.com/gql`); no dedicated REST contacts endpoint observed                                                                                                                                       |

## Sources

- OBSERVATION: Live trace on a real Typeform account (admin.typeform.com), top-level "Contacts" tab, via Claude browser extension, 2026-09-17. Traced by building a real Email-type question into a published form, submitting a live response through it, and watching whether/how a Contact record was created — plus direct exploration of Contact permissions, Contact settings, and the Properties schema. This closes a gap flagged in the original `typeform.md` identification pass ("Contacts module (early access)... never opened").
