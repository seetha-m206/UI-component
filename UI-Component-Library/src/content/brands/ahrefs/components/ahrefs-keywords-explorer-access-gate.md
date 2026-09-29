---
component: Ahrefs Keywords Explorer Access Gate
ui_category: 'Marketing & Onboarding > Feature Access Gate'
source_product: Ahrefs
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Authenticated feature-access landing with global product navigation, a concise keyword-research promise, pricing conversion action, and large tutorial-video surface.
---

# Component: Ahrefs Keywords Explorer Access Gate

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Product:** Ahrefs.
- **Observed screen:** Authenticated Keywords Explorer entry at `/keywords-explorer` for the currently signed-in workspace.
- **Evidence boundary:** This is an observed access-gated landing, not evidence that the full keyword-research runtime is available. The live personal workspace name remains session-only. Pricing navigation and tutorial playback were not run.

## Structure

Dark global header → Ahrefs logo and All tools trigger → persistent product links with Keywords Explorer active → upgrade and workspace controls → centered product title and value proposition → orange See pricing action → large 16:9 tutorial preview with keyword-difficulty and search-volume imagery → accessible media controls inside the embedded player.

## Actions

| Reusable component        | States and controls                                                                                                             | Safe interaction tested                      | Observed result                                                                                    |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Global product navigation | All tools, Dashboard, Brand Radar, AI Content Helper, SMM, Site Explorer, Keywords Explorer, Content Explorer, Site Audit, More | Direct authenticated navigation to the route | Keywords Explorer appeared as the current product. Other destinations were not opened in this pass |
| Access-gate hero          | Heading, explanatory text, See pricing action                                                                                   | Read-only inspection                         | The page offered pricing rather than the keyword-entry workflow expected from the full product     |
| Tutorial video            | Poster, central play action, duration, seek, captions, mute, settings, fullscreen                                               | Read-only inspection                         | A 4:10 Ahrefs Keywords Explorer tutorial was visible. Playback and menu behavior remain unverified |
| Workspace selector        | Named workspace button                                                                                                          | Inspected only                               | Personal text was excluded from the record and reconstruction. Menu contents need verification     |

## Behavior & States

- The route preserves the full authenticated product shell while replacing the working tool with an access-conversion landing.
- The value proposition explains ideas, traffic potential, and ranking difficulty before the pricing action.
- The tutorial preview demonstrates expected keyword metrics without exposing live account or keyword data.
- The reconstruction intercepts pricing and navigation locally.
- The synthetic tutorial state toggles local play and pause feedback without requesting live media.

### State fixtures

| Fixture          | Purpose                                                                      | Evidence status                            |
| ---------------- | ---------------------------------------------------------------------------- | ------------------------------------------ |
| Access gate      | Observed title, product promise, pricing action, and paused tutorial preview | Observed with synthetic identity values    |
| Tutorial playing | Local play-state demonstration                                               | Synthetic. Live media playback was not run |
| Disabled         | Non-interactive design-system override                                       | Synthetic preview state                    |

## Rules & Validation

- Classify this screen as an access gate, not as a verified keyword-research workflow.
- Keep workspace names, account identifiers, plan details, usage, and quota out of reusable fixtures.
- Do not infer keyword input, country selection, search modes, validation, results, history, or saved lists from the tutorial artwork.
- Preserve the pricing action as the only observed conversion path.
- Provide a stable accessible label for the tutorial play control.
- Keep full-product behavior explicitly unverified until a workspace with access is safely observed.

## Technical Data

- **OBSERVED:** The page title is an `h1` reading “Keywords Explorer” with an approximately 26 px computed font size and 700 weight.
- **OBSERVED:** The subtitle reads “Get thousands of keyword ideas, calculate their traffic potential, and find out how difficult it is to rank for them.”
- **OBSERVED:** The hero content occupied an approximately 700 px wide centered region.
- **OBSERVED:** The See pricing control was an orange link measuring about 99 × 30 px with a 3 px border radius.
- **OBSERVED:** The embedded tutorial wrapper measured about 898 × 505 px and began around 259 px from the viewport top.
- **OBSERVED:** The embedded player exposed two Play Video buttons, a 4:10 duration, seek slider, captions menu, mute checkbox, settings menu, and fullscreen action.
- **OBSERVED:** The tutorial poster showed Keyword Difficulty, a score of 40 labelled Hard, Search volume 18K, device distribution, and chart imagery.
- **NOT OBSERVED:** Pricing destination content, plan comparison, checkout, tutorial playback, captions, mute, settings, fullscreen, workspace menu, responsive breakpoints, keyword input, country selection, search mode, validation, request payload, quota, results, history, or saved-list behavior.
- **NOT OBSERVED:** Network requests were not recorded.
- **INFERENCE:** The screen is account- or plan-gated because it replaces keyword entry with a pricing CTA and product tutorial.
- **RECOMMENDATION:** Centilio Seek should clearly distinguish feature education from an executable tool and explain the access condition near the CTA.

## Accessibility

- The product title is exposed as a level-one heading.
- Product destinations are exposed as links inside the global navigation.
- The pricing action is exposed as a named link.
- The video exposes named play controls, a seek slider, captions, mute, settings, and fullscreen controls.
- The poster image has the alternative text “Video Thumbnail.”
- Keyboard order, focus return from media menus, reduced-motion behavior, captions quality, and pricing-navigation focus behavior need verification.

## Cross-Component Pattern Note

This record reuses [[ahrefs-dashboard-workspace]] as the shell baseline but documents a different universal pattern, authenticated feature access gating. It complements [[ahrefs-site-explorer-entry]], where the product is immediately executable.

## Competitor Comparisons

| Product       | Comparable pattern                                       | Strength                                                                           | Open question                                                                     |
| ------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Ahrefs        | Pricing-led feature gate with tutorial                   | Explains the tool’s value visually while retaining the authenticated product shell | The exact plan, entitlement reason, and return path are not stated on this screen |
| Semrush       | Upgrade and plan-limit surfaces within product workflows | Often keeps more surrounding workflow context visible                              | Equivalent access-gated landing was not compared in this pass                     |
| Centilio Seek | Proposed provider or plan-gated research tool            | Can keep access, provider, quota, and evidence status explicit                     | Final entitlement model and upgrade path remain open                              |

## Best Observed Approach

Keep the user inside the familiar product shell, explain the unavailable feature in one sentence, offer one clear conversion action, and use tutorial media to demonstrate value without presenting sample metrics as live account results.

## Sources

- **OBSERVATION:** Authenticated Ahrefs Keywords Explorer access-gate review in the Codex in-app browser, 2026-09-29.
- **OBSERVATION:** Accessibility and DOM capture covering global navigation, hero content, pricing action, tutorial poster, player controls, and media duration.
- **OBSERVATION:** Computed-style capture for the navigation, heading, hero, pricing action, and tutorial wrapper.
- **OBSERVATION:** Screenshot review of the dark-theme access gate and tutorial poster.
- **RECONSTRUCTION:** Local React preview uses fictional identity values, local-only navigation guards, and a synthetic tutorial state. No pricing, account, checkout, live media, deployment, commit, or push action was performed.
