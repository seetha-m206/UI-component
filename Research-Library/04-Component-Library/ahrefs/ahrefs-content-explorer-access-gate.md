---
component: Ahrefs Content Explorer Access Gate
ui_category: "Marketing & Onboarding > Feature Access Gate"
source_product: Ahrefs
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Authenticated feature-access landing with global product navigation, a content-research promise, pricing conversion action, and large tutorial-video surface.
---

# Component: Ahrefs Content Explorer Access Gate

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Product:** Ahrefs.
- **Observed screen:** Authenticated Content Explorer entry at `/content-explorer` for the currently signed-in workspace.
- **Evidence boundary:** This is an observed access-gated landing, not proof that the full content-research runtime is available. The live personal workspace name remains session-only. Pricing navigation and tutorial playback were not run.

## Structure

Dark global header → persistent product links with Content Explorer active → upgrade and workspace controls → centered product title and value proposition → orange See pricing action → large tutorial preview showing a search workspace, filters, trend chart, top authors, and result rows → embedded player controls.

## Actions

| Reusable component        | States and controls                                                            | Safe interaction tested                      | Observed result                                                               |
| ------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------- | ----------------------------------------------------------------------------- |
| Global product navigation | Product links, More, Upgrade, workspace selector                               | Direct authenticated navigation to the route | Content Explorer appeared as the current product                              |
| Access-gate hero          | Heading, explanatory text, See pricing action                                  | Read-only inspection                         | The route offered pricing rather than an executable content search            |
| Tutorial video            | Poster, play action, 2:56 duration, seek, captions, mute, settings, fullscreen | Read-only inspection                         | Tutorial media preview remained paused. Playback and menus were not exercised |

## Behavior & States

- The authenticated shell remains available while the working tool is replaced by a pricing-led education surface.
- The product promise names content discovery, link-building prospects, low-competition topics, and competitor strategy.
- The tutorial poster demonstrates the expected analytical workspace without exposing live account data.
- The reconstruction intercepts pricing and navigation locally and provides a synthetic tutorial play state.

### State fixtures

| Fixture          | Purpose                                                    | Evidence status                            |
| ---------------- | ---------------------------------------------------------- | ------------------------------------------ |
| Access gate      | Observed hero, pricing action, and paused tutorial preview | Observed with synthetic identity values    |
| Tutorial playing | Local play-state demonstration                             | Synthetic. Live media playback was not run |
| Disabled         | Non-interactive design-system override                     | Synthetic preview state                    |

## Rules & Validation

- Classify this route as an access gate rather than a verified content-analysis workflow.
- Keep workspace identity, plan, usage, and quota out of fixtures.
- Do not treat tutorial targets, authors, metrics, charts, or result rows as current account data.
- Preserve pricing as the only observed conversion action.
- Keep search, filters, exports, results, pagination, saved searches, and prospecting actions unverified.

## Technical Data

- **OBSERVED:** The `h1` reads “Content Explorer” at approximately 26 px and 700 weight.
- **OBSERVED:** The subtitle promises top-performing content analysis, link-building prospects, low-competition topics, and competitor strategy.
- **OBSERVED:** The centered hero occupied about 700 px width.
- **OBSERVED:** The orange See pricing link measured about 99 × 30 px with a 3 px radius.
- **OBSERVED:** The tutorial wrapper measured about 898 × 505 px and began around 259 px from the viewport top.
- **OBSERVED:** The player exposed a 2:56 duration, seek slider, captions, mute, settings, and fullscreen controls.
- **OBSERVED:** Tutorial imagery showed a query bar, publication and platform filters, language and live/broken controls, Pages over time chart, Top authors, and content-result metrics.
- **NOT OBSERVED:** Pricing destination, checkout, live playback, search submission, filters, exports, results, pagination, quota, prospecting, saved searches, or responsive breakpoints.
- **INFERENCE:** The route is account- or plan-gated because the tool is replaced by pricing and tutorial content.
- **RECOMMENDATION:** Centilio Seek should visibly separate sample education from executable research and label entitlement requirements near the primary action.

## Accessibility

- The title is a level-one heading and product destinations are links in navigation.
- The pricing action is named.
- The player exposes named play controls, a seek slider, captions, mute, settings, and fullscreen.
- The poster has alternative text “Video Thumbnail.”
- Keyboard order, media-menu focus, captions quality, and reduced-motion behavior need verification.

## Cross-Component Pattern Note

This shares the authenticated feature-gate pattern with [[ahrefs-keywords-explorer-access-gate]]. Its tutorial demonstrates a richer analysis workspace, while [[ahrefs-site-explorer-entry]] exposes an immediately executable target form.

## Competitor Comparisons

| Product       | Comparable pattern                | Strength                                                                   | Open question                                                    |
| ------------- | --------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Ahrefs        | Pricing-led content-research gate | Tutorial makes the unavailable workflow legible without exposing live data | The plan and entitlement reason are not explained on this screen |
| Semrush       | Upgrade and plan-limit surfaces   | Often preserves more surrounding workflow context                          | Equivalent Content Explorer gate was not compared here           |
| Centilio Seek | Proposed gated research surface   | Can state provider, access, quota, and evidence boundaries together        | Entitlement and upgrade behavior remain open                     |

## Best Observed Approach

Retain the familiar authenticated shell, state the unavailable feature’s job in one concise paragraph, provide one conversion action, and ensure tutorial metrics are visibly educational rather than presented as live results.

## Sources

- **OBSERVATION:** Authenticated Ahrefs Content Explorer access-gate review in the Codex in-app browser, 2026-09-29.
- **OBSERVATION:** Accessibility, DOM, computed-style, and screenshot captures covering navigation, hero, pricing, tutorial poster, and media controls.
- **RECONSTRUCTION:** Local React preview uses fictional identity values, guarded actions, and synthetic tutorial playback. No pricing, checkout, live media, account, deployment, commit, or push action was performed.
