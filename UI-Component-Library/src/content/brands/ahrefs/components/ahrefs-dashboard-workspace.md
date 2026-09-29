---
component: Ahrefs Dashboard Workspace
ui_category: 'Application Layout > SEO Workspace Dashboard'
source_product: Ahrefs
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Authenticated SEO workspace shell with global product navigation, target-analysis controls, onboarding resources, project collection navigation, first-project empty state, product updates, and contextual help.
---

# Component: Ahrefs Dashboard Workspace

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Product:** Ahrefs.
- **Observed screen:** Authenticated Dashboard at `/dashboard` in a workspace with no projects.
- **Evidence boundary:** The live screen exposed a personal workspace name. That value remains session-only. The reconstruction uses the fictional label “Atlas workspace” and never submits a domain, creates a project, starts an audit, or consumes quota.

## Structure

Dark global header → Ahrefs logo and All tools trigger → persistent product links → upgrade and workspace controls → universal target-analysis bar → dismissible education banner → collection sidebar → Projects heading → first-project empty state and tutorial media → product-update announcement → help launcher → company footer.

## Actions

| Reusable component        | States and controls                                                                                                                    | Safe interaction tested                                                               | Observed result                                                                                                                                  |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Global product navigation | All tools button, Dashboard, Brand Radar, AI Content Helper, SMM, Site Explorer, Keywords Explorer, Content Explorer, Site Audit, More | Opened Content Explorer through the visible navigation and returned with browser Back | The target route changed to `/content-explorer`, then returned to the dashboard without account mutation                                         |
| All tools and More        | Buttons in the primary navigation                                                                                                      | Tool-driven click attempted                                                           | No stable accessible or visual transition was observed, so menu content and dismissal behavior need verification                                 |
| Workspace selector        | Named workspace button                                                                                                                 | Tool-driven click attempted                                                           | No stable accessible or visual transition was observed. Workspace options and account actions need verification                                  |
| Target-analysis bar       | Protocol control, Domain or URL field, scope control, submit icon, How to use link                                                     | Focus and DOM inspection only                                                         | The bar remained on the dashboard. Submission, validation, quota, loading, results routing, and scope menus were not tested                      |
| Education banner          | Welcome tour, SEO hub, Academy, tutorials, close icon                                                                                  | Inspected only                                                                        | Four learning destinations and a dismiss control were visible. Dismiss persistence needs verification                                            |
| Project collection rail   | Create, settings, collapse, Search, Projects, Portfolios, Reports, Keyword lists, Starred, Folders, add-folder                         | Inspected only                                                                        | The rail remained visible beside the empty project workspace. Create, folder, settings, collapse, and collection-link behavior need verification |
| Empty project state       | “Add your first project,” explanation, Create project button, tutorial video                                                           | Inspected only                                                                        | The empty state explained that projects connect analysis across Ahrefs tools. Project creation and video playback were not run                   |
| Product update            | Date, image, title, explanation, Try now, Learn more, close launcher                                                                   | Inspected only                                                                        | A current update was presented as a tooltip-like panel. Navigation and dismissal persistence need verification                                   |
| Help launcher             | Question mark, unread count, expanded update state                                                                                     | Inspected only                                                                        | A persistent bottom-right affordance displayed one unread item. Chat, help, and unread-state behavior need verification                          |

## Behavior & States

- The global product navigation stays separate from project-level collection navigation.
- The universal target bar is available before a project exists and combines protocol, target, scope, and submit controls in one row.
- Education appears before project work as a horizontally distributed onboarding banner.
- A zero-project workspace keeps collection navigation visible and puts the primary creation action in the center of the content area.
- Product updates coexist with the dashboard as a floating tooltip-like surface rather than replacing the main task.
- The reconstruction lets users type fictional targets and project-search queries but intercepts every submit action locally.
- Buttons whose live behavior was not observed return a visible “needs verification” status instead of inventing a menu or destination.

### State fixtures

| Fixture           | Purpose                                                                                             | Evidence status                                                              |
| ----------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Empty dashboard   | Full authenticated shell, welcome banner, empty Projects workspace, update panel, and help launcher | Observed with synthetic identity values                                      |
| Target focused    | Populated fictional domain with no submission                                                       | Partially observed. Input presence is observed, populated value is synthetic |
| Project search    | Populated local collection search while the workspace has no projects                               | Partially observed. Input is observed, feedback is reconstructed             |
| Welcome dismissed | Dashboard after locally closing education                                                           | Synthetic transition. Live persistence needs verification                    |
| Update dismissed  | Dashboard after locally closing the update panel                                                    | Synthetic transition. Live persistence needs verification                    |
| Disabled          | Non-interactive design-system override                                                              | Synthetic preview state                                                      |

## Rules & Validation

- Keep workspace names, account identifiers, recent targets, project names, domains, usage, and quota data out of reusable fixtures.
- Do not submit the target bar, create a project or folder, start a crawl, play gated media, follow an upgrade action, or open account settings during evidence-only review.
- Treat protocol and scope labels as explicit parts of the target query. Do not hide them inside placeholder text.
- Keep global tools distinct from workspace collections so users can understand whether navigation changes the product or the saved object type.
- Preserve a clear empty-state explanation and primary next action when no project data exists.
- Pair update and help affordances with readable labels and counts. Do not rely only on icons.
- When a live click produces no stable observable transition, record the action as needing verification rather than inferring a menu.

## Technical Data

- **OBSERVED:** The primary product header is a semantic `nav` using a flex layout. It measured about 998 × 32 px at the captured viewport and used a 14 px computed font size.
- **OBSERVED:** The visible primary links were Dashboard, Brand Radar, AI Content Helper, SMM, Site Explorer, Keywords Explorer, Content Explorer, and Site Audit, followed by More.
- **OBSERVED:** The target field is an `input` with placeholder “Domain or URL.” It measured about 459 × 30 px and used a translucent background in the dark theme.
- **OBSERVED:** The target bar exposed separate buttons labelled “http + https” and “Subdomains,” plus an unlabeled icon button and a “How to use” link.
- **OBSERVED:** The project collection is a semantic `aside` measuring about 200 px wide. It contains a `Search` textbox and links for Portfolios, Reports, Keyword lists, and Starred.
- **OBSERVED:** The Projects heading is an `h2` with an 18 px computed font size and 700 weight.
- **OBSERVED:** The Create project control is a button with an orange computed background, white text, 3 px border radius, and an observed size of about 140 × 30 px.
- **OBSERVED:** The welcome banner used a flex layout, dark raised background, four education destinations, and a close icon.
- **OBSERVED:** The product update is exposed as a tooltip-like surface with a date heading, title, descriptive paragraph, and two links.
- **OBSERVED:** The page includes a footer with company, learning, pricing, API, help, contact, language, and legal destinations.
- **NOT OBSERVED:** All tools menu contents, More menu contents, workspace menu, protocol options, scope options, settings panel, collection-route states, folder creation, project creation, target submission, validation, request payload, quota use, loading, errors, success routing, video controls, update dismissal persistence, help chat, and responsive breakpoints.
- **NOT OBSERVED:** Network requests were not recorded. Route targets and component semantics came from rendered DOM, accessibility state, computed styles, and one safe product-navigation round trip.
- **INFERENCE:** The target-analysis bar is a reusable cross-tool command surface because it appears above dashboard-specific onboarding and project content.
- **RECOMMENDATION:** Centilio Seek should reuse the separation between global product navigation, target analysis, and saved-work collections while improving accessible names for icon-only controls.

## Accessibility

- Global destinations are exposed as links inside navigation, and the collection rail is exposed as a complementary region.
- The target input and project search were discoverable by placeholders, but explicit programmatic labels were not exposed in the captured accessibility tree.
- Several icon-only buttons had no accessible name in the captured tree, including the target submit control and multiple rail controls.
- The tutorial play button and video thumbnail had programmatic labels.
- The product update was exposed as a tooltip-like container with readable heading and paragraph text.
- Focus, keyboard order, Escape behavior, menu roles, focus return, reduced motion, and dismissal announcements need keyboard-only verification.

## Cross-Component Pattern Note

This is Ahrefs’ application-layout baseline. The persistent tool navigation is comparable to [[semrush-ai-visibility-shell]], while the project collection and empty state are comparable to [[semrush-site-audit-projects]]. Later Ahrefs screen records should link back here instead of rebuilding the header, target bar, and collection rail from scratch.

## Competitor Comparisons

| Product       | Comparable pattern                                     | Strength                                                                                                      | Open question                                                                                            |
| ------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Ahrefs        | Product nav + universal target bar + project workspace | Lets users start target analysis before creating a saved project and keeps education near the empty state     | Several icon-only controls and unverified menus weaken the current accessibility evidence                |
| Semrush       | Global rail + section navigation + report workspace    | Strong separation between product family and current report, with richer observed report-level states         | Semrush distributes target entry across product-specific screens rather than one universal dashboard bar |
| Centilio Seek | Proposed research and saved-work workspace             | Can combine universal target analysis, project collections, and AI-context views with explicit evidence state | Final information architecture, providers, quotas, permissions, and saved-object model remain open       |

## Best Observed Approach

Keep universal target analysis above project-specific work, preserve global and collection navigation as separate layers, and show onboarding plus one clear project-creation action when the workspace is empty. Every icon-only action should gain a stable accessible name before adopting the pattern.

## Sources

- **OBSERVATION:** Authenticated Ahrefs Dashboard review in the Codex in-app browser, 2026-09-29.
- **OBSERVATION:** Accessibility and DOM captures covering navigation links, workspace control, target bar, education banner, collection rail, empty state, video affordance, product update, help launcher, and footer.
- **OBSERVATION:** Computed-style capture for the primary navigation, target input, project search, create-project control, Projects heading, welcome banner, and collection rail.
- **OBSERVATION:** Screenshot review of the full dark-theme dashboard and expanded product-update panel.
- **RECONSTRUCTION:** Local React preview uses fictional identity and target values, local-only guards, and explicit needs-verification feedback. No target, project, folder, crawl, quota, export, account, or external navigation action is submitted.
