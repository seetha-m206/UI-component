---
component: Ahrefs Site Audit Empty State
ui_category: 'Data Display > Audit Project Empty State'
source_product: Ahrefs
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Authenticated Site Audit first-project state with a single creation action, persistent product shell, product update, help launcher, and footer.
---

# Component: Ahrefs Site Audit Empty State

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Product:** Ahrefs.
- **Observed screen:** Authenticated Site Audit at `/site-audit` in a workspace with no projects.
- **Evidence boundary:** No project was created, no domain was submitted, and no crawl or quota-consuming action was started. The live personal workspace name remains session-only.

## Structure

Dark global header → product links with Site Audit active → upgrade and workspace controls → centered first-project icon, heading, ownership-oriented explanation, and orange Add project action → company and legal footer → floating Bot Analytics update → help launcher with unread count.

## Actions

| Reusable component  | States and controls                                   | Safe interaction tested | Observed result                                                              |
| ------------------- | ----------------------------------------------------- | ----------------------- | ---------------------------------------------------------------------------- |
| First-project state | Heading, ownership explanation, Add project           | Read-only inspection    | The screen requires a project before audit analysis is available             |
| Product update      | Date, title, description, Try now, Learn more         | Read-only inspection    | The Bot Analytics update remained open over the empty state                  |
| Help launcher       | Question mark, unread count, close state              | Inspected only          | One unread item was visible. Help behavior and persistence remain unverified |
| Footer              | Company, pricing, API, help, contact, language, legal | Inspected only          | No external destination was opened                                           |

## Behavior & States

- Site Audit uses a dedicated first-project state rather than showing an empty report shell.
- The explanation limits setup to a website the user owns.
- The Add project action is the single primary next step.
- Product education can overlay the empty workspace without hiding the creation path.
- The reconstruction guards project and navigation actions locally and supports local update dismissal.

### State fixtures

| Fixture          | Purpose                                               | Evidence status                            |
| ---------------- | ----------------------------------------------------- | ------------------------------------------ |
| First project    | Observed shell, empty state, update, help, and footer | Observed with synthetic workspace identity |
| Update dismissed | Empty state after local update dismissal              | Synthetic. Live persistence was not tested |
| Disabled         | Non-interactive design-system override                | Synthetic preview state                    |

## Rules & Validation

- Keep ownership language adjacent to the project-creation action.
- Never start a crawl, submit a domain, or consume quota during evidence-only review.
- Keep workspace, domain, project, usage, and plan values out of fixtures.
- Maintain one clear primary action in the empty state.
- Give update and help controls stable accessible names.

## Technical Data

- **OBSERVED:** The `h1` reads “Add your first project” at approximately 26 px and 700 weight.
- **OBSERVED:** The explanation reads “Set up a website that you own to analyze it across Ahrefs tools.”
- **OBSERVED:** The centered content region measured about 469 px wide.
- **OBSERVED:** The Add project link measured about 142 × 40 px with an orange background and 3 px radius.
- **OBSERVED:** The footer measured about 1280 × 106 px at the captured viewport.
- **OBSERVED:** The product update was dated 29 September and described Bot Analytics integrations for Vercel, Amazon CloudFront, and Fastly.
- **NOT OBSERVED:** Project flow, ownership verification, domain validation, crawl settings, crawl start, quota, errors, results, update persistence, help behavior, and responsive breakpoints.
- **INFERENCE:** Project creation is shared across Ahrefs tools, while Site Audit requires website ownership as a stronger setup constraint.
- **RECOMMENDATION:** Centilio Seek should keep source ownership and permission requirements next to any action that creates a monitored or crawled target.

## Accessibility

- The empty-state title is a level-one heading.
- Global product and footer destinations are links.
- The live Add project control is a named link.
- The update exposes dated heading and paragraph content, but focus handling and dismissal announcements need verification.
- Several global icon-only controls remain unnamed in the captured accessibility tree.

## Cross-Component Pattern Note

This is the Site Audit specialization of [[ahrefs-dashboard-workspace]]’s first-project pattern. Unlike [[ahrefs-site-explorer-entry]], it requires project setup before the primary workflow, and unlike the two Explorer access gates it is blocked by workspace state rather than pricing education.

## Competitor Comparisons

| Product       | Comparable pattern                         | Strength                                                       | Open question                                                                |
| ------------- | ------------------------------------------ | -------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Ahrefs        | Dedicated audit first-project state        | Clear ownership language and one dominant setup action         | Project steps, permissions, limits, and crawl defaults were not exercised    |
| Semrush       | Site Audit project list and creation modal | More project-level metrics and setup context were observable   | First-project ownership language differs and should be compared deliberately |
| Centilio Seek | Proposed monitored-target empty state      | Can pair source ownership, provider access, and evidence state | Final project model, crawl scope, and quota policy remain open               |

## Best Observed Approach

Use one centered action, explain ownership before setup, retain the global shell, and avoid presenting an empty metrics dashboard before the user has a valid project.

## Sources

- **OBSERVATION:** Authenticated Ahrefs Site Audit empty-state review in the Codex in-app browser, 2026-09-29.
- **OBSERVATION:** Accessibility, DOM, computed-style, and screenshot captures covering navigation, empty state, creation action, footer, update, and help launcher.
- **RECONSTRUCTION:** Local React preview uses fictional identity values and local-only guards. No project, domain, crawl, quota, external navigation, deployment, commit, or push action was performed.
