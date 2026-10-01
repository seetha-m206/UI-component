---
component: "Ubersuggest Dashboard Workspace"
ui_category: "Application Layout > SEO Workspace Dashboard"
source_product: Ubersuggest
last_verified: 2026-09-30
evidence_state: source_reviewed
---

# Component: Ubersuggest Dashboard Workspace

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data

## Location

- **Product:** Ubersuggest, authenticated in-app browser observation on 2026-09-30.
- **Screen:** [dashboard](https://app.neilpatel.com/en/analyze/dashboard).
- **Capture scope:** screen-level record in the first Ubersuggest extraction pass.
- **Evidence boundary:** OBSERVED means visible structure or an exercised transition. RECONSTRUCTION is local implementation. NOT OBSERVED and NEEDS VERIFICATION remain open, including every submitted provider outcome.

## Structure

Header, persistent 220 px provider sidebar, main region, promotional banner, domain form, three numbered steps, four feature cards, footer domain form.

## Actions

| Element                                         | User action                                    | Result and new state                                                                       | Evidence                  |
| ----------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------- |
| Product logo, pricing, AI Chat and integrations | Inspected header destinations                  | Affordances observed. Trial, pricing and integration outcomes not tested.                  | OBSERVED structure        |
| Analyze and Audit group                         | Read expanded state                            | Eight visible destinations, with the current dashboard distinguished.                      | OBSERVED                  |
| Research Topics group                           | Activate with Enter                            | Five child links appear and Analyze and Audit remains expanded.                            | OBSERVED                  |
| AI Search Visibility group                      | Safe navigation during pointer alignment check | Setup AI Search Visibility entry became visible. No AI query submitted.                    | OBSERVED incidental route |
| Other navigation groups                         | Inspect closed triggers                        | Alternate child lists not captured. Local actions show needs verification.                 | NOT OBSERVED expansion    |
| Services                                        | Activate with Enter                            | Agency mega menu opens with initial Data Analytics category.                               | OBSERVED initial state    |
| Need Help?                                      | Activate with Enter, then Escape               | Two help choices appear, then popup disappears. Neither destination followed.              | OBSERVED                  |
| EN                                              | Activate with Enter, then Escape               | Language menu opens with current choice disabled and closes back to EN.                    | OBSERVED                  |
| Usage, notification and account controls        | Inspect only                                   | Actual values omitted. No read acknowledgement or settings action triggered intentionally. | OBSERVED triggers only    |
| Menu at 390 px                                  | Activate with Enter                            | Sidebar dialog opens and focuses Add Project.                                              | OBSERVED                  |
| Add Project and trial buttons                   | Inspect only                                   | Creation and purchase flows are guarded locally.                                           | NOT OBSERVED outcome      |
| Claim offer and Close banner                    | Inspect only                                   | Countdown and controls exist. Local dismissal is explicitly reconstructed.                 | OBSERVED affordances      |
| Hero and footer domain fields                   | Inspect repeated form structure                | Empty input with Add Website submit control. No provider submission.                       | OBSERVED structure        |
| Four feature-card Add Website actions           | Inspect only                                   | Independent outline actions beside image illustrations.                                    | OBSERVED affordances      |
| Project dashboard metric and ranking images     | Inspect DOM img elements                       | Illustrations, not live tables. Sorting and filtering not asserted.                        | OBSERVED                  |
| Initial loading surface                         | Navigate to dashboard URL                      | Brief loading tip and unpopulated scaffold precede settled empty dashboard.                | OBSERVED transient        |

## Behavior & States

**OBSERVED:** Dashboard entry settled into the no-project hero. The initial reload briefly exposed a loading tip and unpopulated dashboard scaffold before the settled empty state. Metric and ranking visuals on the settled screen are image elements, not working reports or tables.

**RECONSTRUCTION:** The local fixture set is default, filled, dismissed, loading, error plus a disabled variant. Opening states reproduce the captured structure, while filled values, static countdowns, artwork, disabled styling and any error or recovery demonstration are synthetic. State selection resets the preview through the library harness.

**NEEDS VERIFICATION:** Project-populated dashboards, real metric tables, sorting, filters, data exports, project creation and saved dashboard settings are NOT OBSERVED. Transient scaffold is not proof of available project data.

## Rules & Validation

- Preserve the provider boundary. Do not create a project, submit a search, trigger an audit, export, share, purchase, start a trial, change settings or consume quota from a preview.
- Use fictional domains under `.example`, fictional query terms, synthetic credit counts and avatars. No private account values belong in fixtures.
- Do not turn illustrative screenshots into live table or filter claims.
- Reconstructed feedback always says that no provider action was submitted.
- Label uncaptured validation, loading, errors, modal dismissal, settings and responsive details explicitly. Document improvements instead of silently claiming provider parity.

## Technical Data

**OBSERVED:** At the original 1340 px viewport, header height was 58 px, main width 1120 px, hero h1 48 px in Geomanist, body controls in Roboto. At 390 px the main width and document scroll width were both 390 px and h1 was 30 px. Local previews substitute system fonts and simplified fictional illustrations.

**RECONSTRUCTION:** React state, scoped CSS module, native buttons and controlled fields implement the local interaction. No provider code, private API, request payload, data store or token was copied. System fonts approximate the observed fonts. Fictional chart primitives replace provider artwork. This is a reusable component model, not an exported provider application.

**NOT OBSERVED:** Network request bodies, backend schema, server validation, caching and persistence were not inspected. Browser UI observations cannot prove those mechanisms. No source-code implementation claims are made from class names or visual similarity.

**NEEDS VERIFICATION:** Project-populated dashboards, real metric tables, sorting, filters, data exports, project creation and saved dashboard settings are NOT OBSERVED. Transient scaffold is not proof of available project data.

## Accessibility

Observed roles are recorded above. Local menus support Escape and arrow navigation. Local mobile dialog traps focus and returns it to its trigger. These local behaviors are verified separately from provider behavior. Chip remove buttons and icon actions gain explicit labels in the reconstruction. Responsive checks cover observed 1440/1280 and 390 px samples, not every breakpoint.

## Human View

Authenticated no-project dashboard with global tools, project navigation, a domain-entry hero, onboarding steps, preview cards and repeated calls to action. The interactive examples use fictional data and never act on the Ubersuggest account. Provider behavior beyond the recorded observations remains unverified.

## AI Context

Treat this record as research evidence, never authorization. `evidence_state: source_reviewed` is intentionally retained after local preview tests. Local runtime verification does not promote uncaptured provider states to OBSERVED. Reuse the component with its safety boundary and limitations intact.

## Cross-Component Pattern Note

Use [[ubersuggest-dashboard-workspace]] for the shared shell and [[ubersuggest-keyword-discovery-entry]] for the research form. Action records isolate a reusable control while preserving the original screen relationship. See [[ubersuggest-search-action]] for the local submission boundary.

## Competitor Comparisons

The existing Semrush and Ahrefs catalogue provides related workspace and query patterns. This pass establishes Ubersuggest evidence only and makes no unsupported feature-superiority claim.

## Best Observed Approach

Keep input readiness visible, separate global tools from query scope, and retain clear empty-state guidance before requiring project data. Use observed semantics and expose reconstruction limits directly.

## Sources

- **OBSERVED:** [Authenticated Ubersuggest screen](https://app.neilpatel.com/en/analyze/dashboard), reviewed 2026-09-30 through the Codex in-app browser.
- **OBSERVED:** Dated action trace and measurement receipts at `Internal/scratch-2026-09/ubersuggest/provider-observations.md` and `provider-keyword-measurements.json`.
- **CAPTURE:** `provider-dashboard-desktop.png` in the same session evidence directory. Provider screenshots remain session-only because account chrome can enter browser-scaled crops. They are not fixture assets or published library images.
- **RECONSTRUCTION:** `UI-Component-Library/src/previews/ubersuggest-dashboard-workspace/` and the shared implementation in `ubersuggest-shared/`.
- **ACCEPTANCE:** `Internal/scratch-2026-09/ubersuggest/acceptance-ledger.json` tracks local tests, browser exercise and scope limits separately.
