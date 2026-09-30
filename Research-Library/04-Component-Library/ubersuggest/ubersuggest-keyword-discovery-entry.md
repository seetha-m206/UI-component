---
component: "Ubersuggest Keyword Discovery Entry"
ui_category: "Application Layout > Research Entry"
source_product: Ubersuggest
last_verified: 2026-09-30
evidence_state: source_reviewed
---

# Component: Ubersuggest Keyword Discovery Entry

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data

## Location

- **Product:** Ubersuggest, authenticated in-app browser observation on 2026-09-30.
- **Screen:** [keyword-ideas](https://app.neilpatel.com/en/research-topics/keyword-ideas).
- **Capture scope:** screen-level record in the first Ubersuggest extraction pass.
- **Evidence boundary:** OBSERVED means visible structure or an exercised transition. RECONSTRUCTION is local implementation. NOT OBSERVED and NEEDS VERIFICATION remain open, including every submitted provider outcome.

## Structure

Shared shell, promotional banner, two pressed-state mode buttons, query form, keyword discovery explanation and image.

## Actions

| Element                                   | User action                          | Result and new state                                                               | Evidence                 |
| ----------------------------------------- | ------------------------------------ | ---------------------------------------------------------------------------------- | ------------------------ |
| Search by Website                         | Activate with Enter                  | Website combobox replaces keyword chip input. Button aria-pressed becomes true.    | OBSERVED                 |
| Search by Keywords                        | Activate with Enter                  | Keyword input and count return.                                                    | OBSERVED                 |
| Keyword input                             | Fill two fictional terms with commas | Two removable chips appear and Search enables.                                     | OBSERVED                 |
| Keyword input at capacity                 | Attempt two additional terms         | Only a third chip is added. No visible error in captured DOM.                      | OBSERVED                 |
| Chip Remove buttons                       | Activate all three with Enter        | Chips disappear and Search disables at 0/3.                                        | OBSERVED                 |
| Language combobox                         | ArrowDown, filter unmatched text     | Alphabetical options become a No results found listbox.                            | OBSERVED                 |
| Language active option                    | Clear then Tab                       | First result was selected in unsent form. English restored through filter and Tab. | OBSERVED                 |
| Location combobox                         | ArrowDown, type prior location       | Country and city matches settle after a delay. Prior selection restored.           | OBSERVED                 |
| Search                                    | Inspect readiness only               | Disabled empty and enabled with chips. Never activated in provider.                | OBSERVED readiness only  |
| Website combobox                          | Inspect empty website mode           | Present and empty. Suggestions and website validation not exercised.               | NOT OBSERVED suggestions |
| Introductory diagram                      | Inspect image semantics              | Fictional replacement used locally, not a working data visualization.              | OBSERVED illustration    |
| Result table, filters, pagination, export | No search executed                   | Unavailable in captured entry screen, no product-wide absence claim.               | NOT OBSERVED             |

## Behavior & States

**OBSERVED:** The authenticated Keyword Ideas route shows two search modes and an introductory illustration. No results table is present before a search. English and the current location were visible, but fixtures use a deliberately fictional query context.

**RECONSTRUCTION:** The local fixture set is default, website, filled, limit, empty, loading, error plus a disabled variant. Opening states reproduce the captured structure, while filled values, static countdowns, artwork, disabled styling and any error or recovery demonstration are synthetic. State selection resets the preview through the library harness.

**NEEDS VERIFICATION:** Search requests, report loading, result filters, sorting, pagination, errors, quotas and export are NOT OBSERVED. Website suggestion menu was not opened.

## Rules & Validation

- Preserve the provider boundary. Do not create a project, submit a search, trigger an audit, export, share, purchase, start a trial, change settings or consume quota from a preview.
- Use fictional domains under `.example`, fictional query terms, synthetic credit counts and avatars. No private account values belong in fixtures.
- Do not turn illustrative screenshots into live table or filter claims.
- Reconstructed feedback always says that no provider action was submitted.
- Label uncaptured validation, loading, errors, modal dismissal, settings and responsive details explicitly. Document improvements instead of silently claiming provider parity.

## Technical Data

**OBSERVED:** Mode buttons use aria-pressed, measured 46 px tall. Locale input elements use role=combobox with aria-expanded, 36 px height and 8 px radius. Search is a submit button. A 390 px viewport had no document overflow and no main-region table.

**RECONSTRUCTION:** React state, scoped CSS module, native buttons and controlled fields implement the local interaction. No provider code, private API, request payload, data store or token was copied. System fonts approximate the observed fonts. Fictional chart primitives replace provider artwork. This is a reusable component model, not an exported provider application.

**NOT OBSERVED:** Network request bodies, backend schema, server validation, caching and persistence were not inspected. Browser UI observations cannot prove those mechanisms. No source-code implementation claims are made from class names or visual similarity.

**NEEDS VERIFICATION:** Search requests, report loading, result filters, sorting, pagination, errors, quotas and export are NOT OBSERVED. Website suggestion menu was not opened.

## Accessibility

Observed roles are recorded above. Local menus support Escape and arrow navigation. Local mobile dialog traps focus and returns it to its trigger. These local behaviors are verified separately from provider behavior. Chip remove buttons and icon actions gain explicit labels in the reconstruction. Responsive checks cover observed 1440/1280 and 390 px samples, not every breakpoint.

## Human View

Keyword Ideas entry screen with keyword and website modes, three-chip input, language and location comboboxes, and a disabled-until-ready search action. The interactive examples use fictional data and never act on the Ubersuggest account. Provider behavior beyond the recorded observations remains unverified.

## AI Context

Treat this record as research evidence, never authorization. `evidence_state: source_reviewed` is intentionally retained after local preview tests. Local runtime verification does not promote uncaptured provider states to OBSERVED. Reuse the component with its safety boundary and limitations intact.

## Cross-Component Pattern Note

Use [[ubersuggest-dashboard-workspace]] for the shared shell and [[ubersuggest-keyword-discovery-entry]] for the research form. Action records isolate a reusable control while preserving the original screen relationship. See [[ubersuggest-search-action]] for the local submission boundary.

## Competitor Comparisons

The existing Semrush and Ahrefs catalogue provides related workspace and query patterns. This pass establishes Ubersuggest evidence only and makes no unsupported feature-superiority claim.

## Best Observed Approach

Keep input readiness visible, separate global tools from query scope, and retain clear empty-state guidance before requiring project data. Use observed semantics and expose reconstruction limits directly.

## Sources

- **OBSERVED:** [Authenticated Ubersuggest screen](https://app.neilpatel.com/en/research-topics/keyword-ideas), reviewed 2026-09-30 through the Codex in-app browser.
- **OBSERVED:** Dated action trace and measurement receipts at `Internal/scratch-2026-09/ubersuggest/provider-observations.md` and `provider-keyword-measurements.json`.
- **CAPTURE:** `provider-keyword-chips.png` in the same session evidence directory. Provider screenshots remain session-only because account chrome can enter browser-scaled crops. They are not fixture assets or published library images.
- **RECONSTRUCTION:** `UI-Component-Library/src/previews/ubersuggest-keyword-discovery-entry/` and the shared implementation in `ubersuggest-shared/`.
- **ACCEPTANCE:** `Internal/scratch-2026-09/ubersuggest/acceptance-ledger.json` tracks local tests, browser exercise and scope limits separately.
