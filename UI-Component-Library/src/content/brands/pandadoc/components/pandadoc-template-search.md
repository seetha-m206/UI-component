---
component: Template Search State
ui_category: 'Search & Filtering > Template Search'
source_product: PandaDoc
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Compact search state that replaces the template-category tab row while active.
---

# Component: Template Search State

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Product:** PandaDoc authenticated application.
- **Observed pattern:** Search templates.
- **Evidence boundary:** Account identity, private contacts, provider sample content, billing values, opaque identifiers and tokens stayed session-only. The local preview uses fictional identities, organizations, documents, products and values.

## Structure

Compact search state that replaces the template-category tab row while active.

Visible elements:

- Search input
- Clear control
- Result area

## Actions

| Control | Safe state observed | Result |
|---|---|---|
| Open search | Safely observed entry or reversible disclosure | The local fixture reports the boundary and never contacts PandaDoc |
| Enter query | Safely observed entry or reversible disclosure | The local fixture reports the boundary and never contacts PandaDoc |
| Clear search | Safely observed entry or reversible disclosure | The local fixture reports the boundary and never contacts PandaDoc |

## Behavior & States

- **OBSERVED:** Search input appeared in-place.
- **OBSERVED:** Provider accessibility tree exposed no useful label for the field.
- **OBSERVED:** Clear restored category tabs.
- **RECONSTRUCTION:** The registered React preview reproduces the information architecture with fictional local data and guarded actions.
- **NOT OBSERVED:** Search results, ranking and no-result behavior.

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

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/pandadoc/fixtures/pandadoc-template-search.png).
- **OBSERVED:** Provider screenshots were displayed transiently only and are not retained.

## Cross-Component Pattern Note

- **RECONSTRUCTION:** Related PandaDoc records use the same fictional shell, guarded status notice and no-network action boundary.
- **OBSERVED:** [Open this component's sanitized evidence record](/research/pandadoc/evidence/pandadoc-template-search.html).
