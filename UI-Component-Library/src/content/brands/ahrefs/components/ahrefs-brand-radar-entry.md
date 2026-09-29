---
component: Ahrefs Brand Radar Entry
ui_category: 'Forms > Brand Analysis Entry'
source_product: Ahrefs
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Authenticated Brand Radar 2.0 entry form with website and manual setup paths, guarded analysis, demos, and an empty reports state.
---

# Component: Ahrefs Brand Radar Entry

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location and evidence boundary

Observed at authenticated `/brand-radar`. The page presented a brand-or-website entry, manual brand and competitor setup link, Analyze action, three demo links, and an empty My Reports state. No brand was entered, no demo was opened, no analysis or report was run, and the personal workspace identity remains session-only.

## Structure

Shared dark Ahrefs header → centered “Brand Radar 2.0” promise and How to use action → blue prompt-tracking pricing notice → analysis card → demo links → My Reports empty state → footer and help launcher.

## Actions and states

| Surface                | Observed state                                | Local reconstruction                              |
| ---------------------- | --------------------------------------------- | ------------------------------------------------- |
| Website or brand input | Empty, placeholder suggests a domain or brand | Editable fictional-only input                     |
| Manual setup           | Link below the input                          | Switches to synthetic brand and competitor fields |
| Analyze                | Orange primary button                         | Stops at needs-verification status                |
| Demo links             | Three examples                                | Guarded, no report navigation                     |
| My Reports             | “Add your first report”                       | Guarded Report action                             |
| Disabled               | Not observed                                  | Synthetic design-system override                  |

## Rules and validation

- Preserve one dominant Analyze action and keep the manual path secondary.
- Do not put real brands, projects, plan details, or workspace names into fixtures.
- Do not submit analysis or open demo reports during evidence-only review.
- Keep pricing and report creation explicitly guarded.

## Technical Data

- **OBSERVED:** The page title is “Brand Radar 2.0” with the promise “Explore what people and AI say about any brand, topic or niche.”
- **OBSERVED:** A blue notice advertises tracked prompts for AI-response brand mentions and links to pricing.
- **OBSERVED:** Demo labels include PlayStation vs Xbox and Nintendo, Salesforce vs HubSpot and Zoho, and Planet Fitness vs LA Fitness and Anytime Fitness.
- **OBSERVED:** The empty state says “Add your first report” and explains that saved setups can be revisited for latest results.
- **NOT OBSERVED:** Input validation, manual-dialog details, analysis loading, results, prompt datasets, quotas, report persistence, errors, or responsive breakpoints.
- **INFERENCE:** Brand Radar combines a fast single-target path with a more expressive comparison setup.
- **RECOMMENDATION:** Centilio Seek should separate quick brand entry from advanced comparison setup while preserving evidence provenance and provider-cost gates.

## Accessibility

The title and empty state are headings. The analysis form has visible labels. Local actions are native buttons, the status uses `role="status"`, and disabled fixtures preserve native disabled semantics.

## Competitor comparison

Ahrefs makes brand monitoring a compact entry workflow with demos. Semrush AI Visibility emphasizes a larger reporting workspace. Seek can combine the quick entry with explicit provider, evidence date, and cost state.

## Sources

- **OBSERVATION:** Authenticated Ahrefs Brand Radar 2.0 review in the Codex in-app browser, 2026-09-29.
- **RECONSTRUCTION:** Local React preview with fictional identity and local guards. No analysis, report, quota, pricing, external navigation, deployment, commit, or push action occurred.
