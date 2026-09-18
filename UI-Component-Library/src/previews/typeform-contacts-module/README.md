# Contacts Module (CRM-lite) — reconstructed preview

See `Research-Library/04-Component-Library/typeform/typeform-contacts-module.md`
for the full research record this is built from. Follows the folder
contract, evidence labeling, and accessibility bar established by
`new-form-chooser/` (a self-managed, multi-panel screen component with
internal `useState` for which "view" is showing) and
`typeform-choices-list-editor/` (this product's own existing Typeform
reconstruction, for stylistic consistency with the other Typeform-sourced
preview in this repo).

## Evidence used, in priority order

1. **Authorized Typeform HTML/CSS export** — not available, same as every
   other reconstructed preview in this repo.
2. **The source record's own live trace** (`OBSERVATION`, Claude browser
   extension session, 2026-09-17) — the primary source for this component:
   - **List view is a plain data table, not cards.** The record is explicit:
     "List view is a plain data table/grid, not cards." Reproduced as a
     real `<table>` with a checkbox column, Contact (avatar-initial + name
     if known, else email), Email, Name, Phone number — the exact 5
     documented columns, no horizontal-scroll simulation (per the task's
     explicit scoping).
   - **The empty state's exact 3-step recipe and copy.** "Ready to build
     your contact list?" heading, the numbered steps ("Add an email
     question to a form" / "Publish your form" / click "Auto-add from
     forms"), plus "Import contacts" and "add individually" — all
     reproduced verbatim.
   - **The Add-contact panel's exact 10 fields and privacy notice.** The
     record lists exactly: Email, Name, Email subscription status, Notes,
     Phone number, Job title, LinkedIn URL, Company name, Company
     description, Company industry — reproduced as the `NewContactDraft`
     shape, in that order. The privacy notice — *"Before adding sensitive
     information, be aware that everyone in your organization can view
     contact details."* — is quoted verbatim at the top of the panel.
   - **The core documented finding: automatic, conditional contact
     creation.** The record's Behavior & States section confirms a contact
     is created from a live form submission once an Email-type question has
     "Map to contacts" → "Map to: Email" configured — "no manual click on
     'Auto-add from forms' was needed." Per the task's explicit scoping,
     this reconstruction does **not** simulate a live submission; it takes
     an already-populated `contacts` array as a prop, and the empty state's
     copy documents the mechanism in place of a live demo.
   - **The "Contact not enriched" banner's exact copy and mechanism.** *"A
     contact created from a response, before enrichment, shows an inline
     banner: 'Contact not enriched. Learn how to enrich contacts.'"* —
     quoted verbatim, gated on `contact.source && contact.enriched ===
     false` to match the record's finding that this only applies to
     response-synced contacts, not manually-added ones.
   - **Contact permissions popover's exact, fixed copy.** *"View contacts:
     Everyone in your organization" / "Edit contacts: Editors and admins"*,
     plus a "Request features" link — reproduced verbatim as
     `permissionsView`/`permissionsEdit` props (overridable, but defaulting
     to this exact captured text), explicitly **not** editable in the UI,
     per the record's own framing of this popover as "purely informational."
   - **Contact settings modal's exact single control.** "Data enrichment" →
     "Enrich contacts on creation" (toggle, off by default, paid-plan
     badge), with the record's verbatim description: *"Enrich a contact
     with third-party data on contact creation, including response sync."*
   - **The promo banner.** "Effortlessly turn N contacts into valuable
     leads" → "Create automation" / "View sample automations", shown "once
     at least one contact exists" — reproduced with `contacts.length`
     driving N, hidden entirely on the empty-state fixture.
   - **The subscription-status popover's exact content shape.** The record's
     Actions table: clicking the email's dashed-circle indicator "Shows
     subscription status ('Never subscribed'), a timestamp, and 'Sync by:
     User'" — reproduced as three lines in `SubscriptionIndicator`'s
     popover, using the contact's own `subscriptionSyncedBy` value rather
     than hardcoding "User".
   - **The two-surface field-set inconsistency — the record's most
     important structural finding for this component.** See the dedicated
     section below.
3. **Screenshots** — none were captured in the source record; the
   Structure, Actions, and Rules & Validation prose were used to confirm
   exact copy, field lists, and grouping.
4. **Assumptions, clearly flagged**:
   - **Header toolbar layout.** The record documents "Contact permissions"
     and "Contact settings" as sidebar links in the real product's chrome,
     which this self-contained component doesn't have. They're rendered
     here as plain toolbar buttons instead — a presentation-only
     relocation, not a claim about the real product's navigation.
   - **No "Actions" dropdown wrapper.** The record notes the Add-contact
     panel is reachable "via 'add individually' or Actions → 'Add new
     contact'." This reconstruction exposes both the empty-state's "add
     individually" link and a direct always-visible "+ Add new contact"
     toolbar button, but does not build the Actions dropdown menu itself —
     a deliberate simplification for testability, not a claim that no such
     menu exists.
   - **"Import contacts" placement when the list is populated.** The record
     only shows this button in the empty state; whether/where it also
     appears once contacts exist wasn't captured. It's kept in the header
     toolbar in both states here as a reasonable, low-risk generalization.
   - **Detail view's "Company info" group.** See the dedicated section
     below — this is the single most consequential assumption in the
     component.
   - **"Learn how to enrich contacts" destination.** Not documented beyond
     the banner's existence; clicking it opens the Contact settings modal
     here (the literal location of the enrichment toggle) — a reasonable
     inferred destination, not an independently confirmed link target.
   - **Checkbox column behavior.** The record confirms a checkbox column
     exists but never explores what selecting rows enables (bulk actions
     were not part of this pass). Selection is implemented as genuine,
     functional row/select-all checkboxes with local state, but wired to no
     further action — the same "no further UI exists for this, since it was
     never traced" posture `new-form-chooser` takes for its own
     unexplored options.
   - **Responsive/breakpoint behavior** was not observed in the record
     (a single fixed desktop viewport was used throughout the trace).
     Collapsing the table to a stacked layout and the side panels to full
     width at narrow container widths are deliberate improvements for this
     docs site's preview stage, not observed Typeform breakpoints.

## The most important structural finding: two surfaces, two different field sets

The record is explicit that the Add-contact panel and the Contact detail
view do **not** expose an identical schema, and flags this as a genuine
product inconsistency rather than an oversight in the trace:

> "Address" and "Education" appear here [in the detail view] but were
> **not** offered as fields in the manual "Add new contact" panel — the two
> surfaces don't expose an identical field set.

and separately, for "SMS subscription status": a real, locked property that
is "**not** one of the fields exposed in the 'Add new contact' manual-entry
panel — a genuine inconsistency between the two surfaces' field sets."

This reconstruction preserves that asymmetry deliberately rather than
"fixing" it for tidiness: the `Contact` type carries `address`, `education`,
and `companyAddress` as fields a contact record *can* hold (populated only
via seed/fixture data here, standing in for however they'd really get set —
enrichment, import, or a surface never traced), but `NewContactDraft` (the
Add-contact panel's own shape) does **not** include any of them. The
Add-contact form in this component literally cannot write to those three
fields, matching the record's finding exactly.

## Assumption: what "Company info" shows in the detail view

The record's Structure section itemizes the detail view's "Company info"
group as containing only **"(Company address)"** — a single field, even
though the Add-contact panel separately collects Company name, Company
description, and Company industry. Rather than assuming those three also
resurface in this specific group (which the record never actually says),
this reconstruction takes the literal reading: the "Company info" section
renders only **Company address**, exactly as itemized. Company name is
instead shown once, as a subtitle in the detail panel's identity header
(next to the contact's own name/avatar) — a reasonable, low-risk place for
it, and explicitly a presentation choice of this reconstruction's own, not
a captured detail. Company description and Company industry are **not**
rendered anywhere in the detail view here, matching the record's own
silence on where (or whether) they resurface after being collected —
consistent with this library's rule against inventing confirmed-looking
completeness.

## Deliberate scoping decision: no live contact-creation simulation

Per the task's explicit instruction, `TypeformContactsModule` takes an
already-populated `contacts` array as a static prop. It does not simulate a
form builder, a live respondent submission, or a GraphQL round-trip. The
mechanism the record actually traced (an Email-type question with "Map to
contacts" → "Map to: Email," tested end-to-end against a real published
form) is documented here in the empty-state copy and this README, not
re-enacted as an interactive flow. `onAddContact` similarly does not append
to the array — it's an intent callback, matching every other reconstructed
preview's "no real create/persist" pattern in this repo (e.g.
`new-form-chooser`'s `onCreateForm`).

## What NOT built (deliberately out of scope, per the task)

- **Any live GraphQL/network integration** — static props only. This
  preview never calls `fetch`/XHR, verified in
  `TypeformContactsModule.test.tsx`, even though the record confirms the
  real Contacts tab is genuinely API-backed (`POST
  https://api.typeform.com/gql`).
- **The full Properties-management screen** (Person/Company entity groups,
  locked-field padlock icons, add/delete custom properties, "Property
  mappings"). The task marks this optional and explicitly lower priority
  than the core five surfaces; skipped here to keep the required surfaces
  (list + add-panel + detail view + permissions popover + settings modal)
  solid rather than spreading scope thin.
- **"Import contacts" (CSV) file parsing** — the button calls an optional
  `onImportContacts` callback and does nothing else.
- **The Actions dropdown menu wrapper** — see above.

## Other deviations from what was actually observed

- Typeform's real GraphQL-backed persistence and its internal component/
  class names (not itemized for this component beyond DOM
  role/accessible-name findings) are replaced entirely with scoped CSS
  Module classes and plain React props/state.
- The permissions and subscription-status popovers, and the settings modal,
  all use `role="dialog"` with Escape-to-close — not independently
  documented one way or the other in the record; added for accessibility,
  consistent with this repo's established precedent (`new-form-chooser`'s
  own `role="dialog"` overlays).
- The subscription-status indicator is click-triggered per the task's own
  Structure spec ("clicking it opens a popover"), so no hover/keyboard-focus
  parity concern applies to it. The row's expand-arrow button, however, IS
  a hover-reveal affordance in spirit (visually appears on row hover) —
  it's implemented as a real, always-focusable `<button>` whose opacity (not
  presence, not tab-index, not `disabled`) changes on hover/focus, so
  keyboard users reach and activate it exactly the same way mouse users do,
  per this library's hard accessibility rule.

## What this is not

Not the original Typeform component, not pulled from any Typeform source,
and not guaranteed to match current production behavior — see the in-app
notice on the Preview tab, and the record's own `evidence_state`
(`source_reviewed`, not `runtime_verified`).
