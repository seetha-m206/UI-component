---
component: Ahrefs Site Explorer Entry
ui_category: "Search & Comparison > Domain Explorer Entry"
source_product: Ahrefs
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Authenticated domain-research entry screen with global product navigation, a dated SERP data-quality notice, centered target and scope controls, product updates, help, and legal footer.
---

# Component: Ahrefs Site Explorer Entry

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Product:** Ahrefs.
- **Observed screen:** Authenticated Site Explorer entry at `/site-explorer`, before a target is submitted.
- **Evidence boundary:** The live screen exposed a personal workspace name. That value remains session-only. The reconstruction uses the fictional label “Atlas workspace” and does not submit a target, consume quota, open account controls, or navigate to external destinations.

## Structure

Dark global header → Ahrefs logo and All tools trigger → persistent product links with Site Explorer active → upgrade and workspace controls → full-width operational data-quality notice → centered title and product promise → protocol, target, scope, and submit controls → company and legal footer → product-update announcement → help launcher.

## Actions

| Reusable component        | States and controls                                                                                                             | Safe interaction tested                            | Observed result                                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Global product navigation | All tools, Dashboard, Brand Radar, AI Content Helper, SMM, Site Explorer, Keywords Explorer, Content Explorer, Site Audit, More | Screen reached directly from the authenticated app | Site Explorer appeared as the current product. Other destinations were not opened during this pass                         |
| SERP data notice          | Dated message about changes in Google result delivery and possible SERP-data inconsistencies                                    | Read-only inspection                               | The amber notice remained above the entry task. Dismissal behavior and persistence were not tested                         |
| Target-analysis form      | Protocol “http + https,” Domain or URL field, “Subdomains” scope, icon submit                                                   | Focus and DOM inspection only                      | No domain was submitted. Validation, quota, loading, request payload, results route, and error handling remain unverified  |
| Workspace selector        | Named workspace button                                                                                                          | Inspected only                                     | Personal text was excluded from the record and reconstruction. Menu contents need verification                             |
| Product update            | Date, title, explanation, Try now and Learn more links                                                                          | Inspected only                                     | The Bot Analytics update appeared as a floating tooltip-like panel. Navigation and dismissal persistence need verification |
| Help launcher             | Question mark and unread count                                                                                                  | Inspected only                                     | The launcher showed one unread item. Help and chat behavior were not opened                                                |
| Footer                    | Company, product, support, language, address, and legal destinations                                                            | Inspected only                                     | Destinations were visible. External navigation was not run                                                                 |

## Behavior & States

- The screen reduces the workspace to one primary question, which target should Site Explorer analyze.
- Protocol and scope controls bracket the target field instead of being deferred to a later configuration screen.
- A dated operational notice appears before the primary task and explains possible data-quality inconsistency.
- The current product is indicated in the same persistent navigation shell observed on the Ahrefs dashboard.
- The reconstruction permits fictional target entry but intercepts form submission locally.
- Controls whose live behavior was not observed return visible “needs verification” feedback.

### State fixtures

| Fixture          | Purpose                                                                            | Evidence status                                                        |
| ---------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Explorer entry   | Full authenticated shell, data notice, empty target form, update, help, and footer | Observed with synthetic workspace identity                             |
| Target filled    | Fictional domain entered without submission                                        | Partially observed. Field presence is observed and value is synthetic  |
| Notice dismissed | Entry screen after locally closing the operational notice                          | Synthetic transition. Live dismissal and persistence need verification |
| Update dismissed | Entry screen after locally closing the product update                              | Synthetic transition. Live persistence needs verification              |
| Disabled         | Non-interactive design-system override                                             | Synthetic preview state                                                |

## Rules & Validation

- Keep workspace names, account identifiers, target history, domains, quota, and usage out of fixtures.
- Never submit a live target during evidence-only review.
- Preserve protocol and scope as explicit controls around the target field.
- Present operational data-quality caveats before analysis begins and include the date.
- Give the icon-only submit action a stable accessible name in the reconstruction.
- Treat unobserved menus, routes, validation, and persistence as needing verification.

## Technical Data

- **OBSERVED:** The page title is an `h1` reading “Site Explorer” with an approximately 26 px computed font size and 700 weight.
- **OBSERVED:** The subtitle reads “Get an in-depth look at the backlink profile and search traffic of any website or URL.”
- **OBSERVED:** The target row measured about 768 × 40 px. The target input measured about 411 × 40 px and used a 16 px computed font size.
- **OBSERVED:** The target controls were separate buttons labelled “http + https” and “Subdomains,” an input with placeholder “Domain or URL,” and an unlabeled icon-only submit button.
- **OBSERVED:** A full-width notice dated “29 Sep” stated that changes in how Google serves search results may cause inconsistencies in some SERP data and that the team is working to improve accuracy.
- **OBSERVED:** The data-quality notice measured about 1326 × 60 px and used a 14 px computed font size.
- **OBSERVED:** The persistent product navigation, upgrade control, workspace selector, product-update panel, help launcher, and footer matched the authenticated Ahrefs dashboard shell.
- **NOT OBSERVED:** Protocol and scope menus, target validation, submission, loading, request payload, quota consumption, errors, results routing, workspace menu, notice dismissal persistence, product-update navigation, help behavior, external footer navigation, and responsive breakpoints.
- **NOT OBSERVED:** Network requests were not recorded.
- **INFERENCE:** The centered entry form is the product-specific specialization of the universal target-analysis pattern seen on the Ahrefs dashboard.
- **RECOMMENDATION:** Centilio Seek should pair pre-analysis data caveats with the target entry surface and expose an accessible submit name rather than relying on an icon alone.

## Accessibility

- The product title is exposed as a level-one heading.
- Product destinations are exposed as links inside the global navigation.
- The protocol and scope controls have readable button names.
- The target field was discoverable by its placeholder, but no explicit programmatic label appeared in the captured live accessibility tree.
- The live submit button had no accessible name. The reconstruction adds “Run Site Explorer analysis.”
- The notice text was readable, but the live accessibility tree did not expose it as an alert.
- Keyboard order, focus styles, menu roles, Escape behavior, focus return, and announcements need keyboard-only verification.

## Cross-Component Pattern Note

This record reuses [[ahrefs-dashboard-workspace]] as the application-shell baseline and isolates the product-specific domain-research entry pattern. The target form is comparable to Semrush setup forms, while Ahrefs uniquely foregrounds an operational data-quality notice before submission.

## Competitor Comparisons

| Product       | Comparable pattern             | Strength                                                                                    | Open question                                                                             |
| ------------- | ------------------------------ | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Ahrefs        | Centered domain explorer entry | Extremely focused target, protocol, and scope composition with current data-quality context | Live validation, limits, and results routing were not exercised                           |
| Semrush       | Project and report setup forms | More guided configuration and observed report-specific states                               | Setup is distributed across product-specific workflows                                    |
| Centilio Seek | Proposed target research entry | Can combine a concise target command with explicit provider and evidence status             | Provider selection, quota, validation, permissions, and saved-target behavior remain open |

## Best Observed Approach

Use one centered target entry with explicit protocol and scope controls. Place dated data-quality caveats above the form, preserve the shared product shell, and provide accessible names for every icon-only action.

## Sources

- **OBSERVATION:** Authenticated Ahrefs Site Explorer entry review in the Codex in-app browser, 2026-09-29.
- **OBSERVATION:** Accessibility and DOM capture covering global navigation, operational notice, title, subtitle, target form, footer, product update, and help launcher.
- **OBSERVATION:** Computed-style capture for the heading, target input, form row, and SERP-data notice.
- **OBSERVATION:** Screenshot review of the sparse dark-theme entry page with amber notice and floating update panel.
- **RECONSTRUCTION:** Local React preview uses fictional values, local-only submission guards, and explicit needs-verification feedback. No target, quota, account, external navigation, deployment, commit, or push action was performed.
