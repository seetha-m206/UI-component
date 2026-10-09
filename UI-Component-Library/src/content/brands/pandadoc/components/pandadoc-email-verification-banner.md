---
component: Email Verification Banner
ui_category: 'Feedback & Status > Verification Banner'
source_product: PandaDoc
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Persistent verification notice with a resend action and a non-destructive dismiss boundary.
---

# Component: Email Verification Banner

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Product:** PandaDoc authenticated application.
- **Observed pattern:** Verify your email.
- **Evidence boundary:** Account identity, private contacts, provider sample content, billing values, opaque identifiers and tokens stayed session-only. The local preview uses fictional identities, organizations, documents, products and values.

## Structure

Persistent verification notice with a resend action and a non-destructive dismiss boundary.

Visible elements:

- Verification status
- Resend action
- Dismiss control

## Actions

| Control | Safe state observed | Result |
|---|---|---|
| Resend verification email | Safely observed entry or reversible disclosure | The local fixture reports the boundary and never contacts PandaDoc |
| Dismiss notice | Safely observed entry or reversible disclosure | The local fixture reports the boundary and never contacts PandaDoc |

## Behavior & States

- **OBSERVED:** Banner persisted across top-level routes.
- **OBSERVED:** Action label included the account email in the provider UI.
- **OBSERVED:** Local fixture removes all identity.
- **RECONSTRUCTION:** The registered React preview reproduces the information architecture with fictional local data and guarded actions.
- **NOT OBSERVED:** Email delivery and post-verification persistence.

## Human Context

- The component keeps the next task visible and separates passive review from actions that can create, send, publish, purchase or change provider state.
- Empty, trial and plan-gated states are first-class user states rather than evidence that the underlying workflow was completed.
- User confidence depends on explicit status, role ownership and a visible escape path from dialogs and previews.

## AI Context

- AI-labelled controls remain inert in the local fixture unless the observed state was purely explanatory.
- No AI prompt, generation, classification, extraction or provider-side suggestion was executed.
- AI extraction, assistant behavior, zero-retention statements and privacy controls are recorded only where visible, with outputs and enforcement marked **NEEDS VERIFICATION**.

## Rules & Validation

- Do not retain account names, emails, initials, workspace identity, private contacts, live billing details, trial dates, provider sample content, opaque object identifiers or payloads.
- Do not treat opening a menu, tab, preview or settings page as proof that its final action works.
- Upload, create, send, sign, invite, publish, connect, export, save, purchase, cancel, delete and settings-write controls remain disabled or guarded in the reconstruction.
- Every icon-only control needs an accessible name and every overlay must return focus to its trigger.

## Technical Data

- **OBSERVED:** The authenticated page used route-driven React surfaces and nested editor content.
- **OBSERVED:** Accessibility inspection exposed headings, tab states, table structure, form controls and plan gates.
- **OBSERVED:** The safe console summary contained log and warning classes, with no raw message content retained.
- **NOT OBSERVED:** Network request classes, API schemas, request payloads and response contracts because the safe browser scope did not expose performance timing entries.
- **NEEDS VERIFICATION:** Keyboard order, focus return, provider persistence, server validation, permission enforcement, responsive behavior and consequential error states.

## Accessibility

The observed interface exposed many useful headings, tabs, tables and checkbox descriptions. Some global and search controls were unnamed in the accessibility tree. The reconstruction supplies names, semantic regions, tab selection state, status feedback and disabled boundaries for consequential actions.

## Best Observed Approach

Reuse the visible hierarchy and status model while keeping creation, identity, payments and provider execution behind explicit confirmation and permission gates.

## Sources

- **OBSERVATION:** Authenticated, read-only PandaDoc inspection, 2026-10-09.
- **OBSERVATION:** Accessibility tree, route state, safe reversible disclosures and sanitized console-level counts.
- **RECONSTRUCTION:** Fictional local React preview. No PandaDoc API or provider write is available.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/pandadoc/fixtures/pandadoc-email-verification-banner.png).
- **OBSERVED:** Provider screenshots were displayed transiently only and are not retained.

## Cross-Component Pattern Note

- **RECONSTRUCTION:** Related PandaDoc records use the same fictional shell, guarded status notice and no-network action boundary.
- **OBSERVED:** [Open this component's sanitized evidence record](/research/pandadoc/evidence/pandadoc-email-verification-banner.html).
