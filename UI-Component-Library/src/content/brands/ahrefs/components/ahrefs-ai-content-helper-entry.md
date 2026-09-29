---
component: Ahrefs AI Content Helper Entry
ui_category: 'Forms > AI Document Setup'
source_product: Ahrefs
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Authenticated AI Content Helper document setup with keyword, URL, market, brand-kit, competitor, allowance, and empty-document states.
---

# Component: Ahrefs AI Content Helper Entry

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location and evidence boundary

Observed at authenticated `/content-helper`. No keyword or URL was submitted, no competitor was added live, no document was created, and “Ask Letaido to write it” was not invoked. The visible 1 / 1 allowance is a point-in-time UI observation, not a reusable account fact.

## Structure

Shared Ahrefs header → title and search-intent promise → setup card with keyword, article URL, location, brand kit, competitor, creation and AI-writing actions → monthly allowance and upgrade action → Documents and Brand kits tabs → first-document empty state → footer.

## Actions and states

| Surface         | Observed state                         | Local reconstruction                |
| --------------- | -------------------------------------- | ----------------------------------- |
| Target keyword  | Empty required-looking text input      | Editable, no submission             |
| Article URL     | Empty import input                     | Editable, no fetch                  |
| Location        | United States selected                 | Fixed safe option                   |
| Brand kit       | Not selected                           | Fixed safe option                   |
| Competitors     | One empty URL field and Add competitor | Adds up to three local fields       |
| Create document | Primary action                         | Needs-verification status           |
| Ask Letaido     | Secondary AI action                    | Needs-verification status           |
| Documents       | Active with first-document empty state | Local tab                           |
| Brand kits Beta | Inactive                               | Synthetic local empty-state fixture |

## Rules and validation

- Never invoke paid or quota-bearing generation during evidence-only review.
- Label monthly availability as observed UI, not durable account state.
- Keep URL import, AI writing, pricing, and document creation guarded.
- Use fictional input values only.

## Technical Data

- **OBSERVED:** The title is “AI Content Helper” and the promise mentions search intent, competitors, and writing guidance.
- **OBSERVED:** Location showed United States and Brand kit showed Not selected.
- **OBSERVED:** The action row displayed Create document, Ask Letaido to write it, “1 / 1 document available this month”, and “Get more from $99/mo”.
- **OBSERVED:** Documents and Brand kits Beta were the two section tabs.
- **NOT OBSERVED:** Field requirements, URL fetch, market options, kit management, AI generation, token use, scoring, document editor, errors, or persistence.
- **INFERENCE:** The workflow supports both importing an existing article and beginning from a target keyword.
- **RECOMMENDATION:** Seek should show source, market, provider, estimated cost, and whether content is imported or generated before any AI action.

## Accessibility

Every reconstructed field is visibly labeled. Section navigation uses tab roles with selected state. Guard messages use `role="status"`, and disabled controls retain native semantics.

## Competitor comparison

Ahrefs puts document setup and allowance in one compact card. Semrush content tooling generally separates research and writing surfaces. Seek can preserve the compact setup while making provider and evidence boundaries explicit.

## Sources

- **OBSERVATION:** Authenticated Ahrefs AI Content Helper review in the Codex in-app browser, 2026-09-29.
- **RECONSTRUCTION:** Local React preview with guarded actions. No document, AI generation, quota, pricing, external navigation, deployment, commit, or push action occurred.
