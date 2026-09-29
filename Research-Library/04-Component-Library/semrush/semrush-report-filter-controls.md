---
component: Semrush Report Filter Controls
ui_category: 'Navigation & Filtering > Report Controls'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Reusable report header and filter controls for brand profile, target, competitors, AI platform, historical update date, methodology help, export, and plan limits.
---

# Component: Semrush Report Filter Controls

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Product:** Semrush AI Visibility.
- **Observed screen:** Authenticated Brand Performance report.
- **Related report family:** Perception, Narrative Drivers, and Questions reuse the same header and report-control grammar.
- **Evidence boundary:** Account-specific names, competitors, dates, and report values remain session-only. The preview uses synthetic values.

## Structure

Report heading with brand-profile selector → target summary and contextual help → removable competitor tags → AI-platform filter → current or historical update date → update-frequency help → methodology action → quota-aware add-profile action → export action.

## Actions

| Reusable component | States and controls | Safe interaction tested | Observed result |
|---|---|---|---|
| Brand-profile selector | Collapsed and expanded | Opened, inspected, then closed | Menu grouped the selected owned profile under “My Own 1/1”, included a separate demo-report group, and ended with an add-on action |
| Target summary | Resting and edit modal | Opened, then cancelled | Modal exposed domain, target location, target language, Apply, Cancel, and a warning that applying changes starts a new analysis run and pauses current-target collection |
| Target help | Collapsed and expanded tooltip | Opened, inspected, then closed | Explained that target location and language shape analysis and that another target requires a new brand profile |
| Competitor chips | Own-brand and removable competitor variants | Removal was not independently tested on the authenticated screen | Own brand carried a “you” marker. Competitor chips exposed per-item delete buttons |
| AI-platform selector | Collapsed and expanded | Opened, inspected, then closed | Menu listed All AI Platforms, Google AI Mode, ChatGPT, Perplexity, and Gemini |
| Historical-date selector | Collapsed and expanded | Opened, inspected, then closed | Current date was separated as “Most recent update” above a scrollable “Historical data” list |
| Update-date help | Collapsed and expanded tooltip | Opened, inspected, then closed | Tooltip stated that data is updated approximately every 7 days |
| Data-methodology dialog | Closed and open | Opened, inspected, then closed | Modal documented question collection, runs across AI platforms, report generation, recommendations, seven-day updates, and the combined-platform view |
| Add-profile quota action | 1/1 resting and limit modal | Opened, inspected, then closed | Modal stated that the tracked-brand limit was reached and offered “Analyze more brands” |
| Export action | Enabled appearance | Not independently tested | Export behavior and download states need verification |

## Behavior & States

- Only one menu, tooltip, or modal is shown at a time in the reconstruction.
- Brand, AI-platform, and date controls expose popup semantics and retain a selected value.
- The target label is an action, not static metadata. It opens an edit modal.
- Applying target changes is materially different from filtering. The warning says it starts a new analysis run, stops collection for the current target, and can impose a temporary edit lockout.
- Competitor chips are filters with destructive clear buttons. The library demonstrates local removal only with synthetic values.
- The date selector distinguishes the current update from historical snapshots.
- Plan capacity appears inline on both the main action and the profile menu.
- Methodology help is a modal with structured steps rather than a small popover.
- The quota state is a dedicated promotional modal rather than an inline error.
- Disabled controls are included as a fixture and prevent local interaction.

### State fixtures

| Fixture | Purpose | Evidence status |
|---|---|---|
| Default controls | Resting header and filter row | Observed |
| Brand menu | Owned profile, demo profile, and add-on grouping | Observed |
| Target editor | Warning, domain, location, language, Apply, and Cancel | Observed. Apply intentionally disabled |
| Platform menu | Full platform option list | Observed |
| Historical dates | Current update plus historical list | Observed |
| Target help | Contextual explanation | Observed |
| Update help | Seven-day update note | Observed |
| Data methodology | Four-step data explanation | Observed |
| Profile limit | Tracked-brand limit modal | Observed |
| Capacity available | Non-limit local state | Synthetic. Needs verification against a live account with spare capacity |
| Disabled | All interaction controls disabled | Synthetic design-system state |

## Rules & Validation

- Treat target editing as a consequential configuration flow, not an ordinary report filter.
- Require explicit cancellation and closing paths for every modal.
- Keep selected filter values visible when their menus are closed.
- Give every popup trigger an accessible name and an expanded or collapsed state.
- Do not remove a competitor in evidence-gathering sessions because the live control is destructive.
- Do not treat a quota badge as the error message. The explanatory modal is the full limit state.
- Do not copy authenticated customer names or report values into fixtures.
- Mark inferred or synthetic states clearly.

## Technical Data

- **OBSERVED:** Brand, AI-platform, and date controls expose combobox or popup-button accessibility roles with expanded and collapsed states.
- **OBSERVED:** Target editing and quota messaging expose modal dialogs.
- **OBSERVED:** Current and historical dates are grouped inside one popup.
- **OBSERVED:** The AI-platform list includes a combined-provider option plus individual providers.
- **OBSERVED:** The update tooltip says the approximate refresh cadence is seven days.
- **OBSERVED:** Target Apply would start a new analysis run and stop current-target collection.
- **NOT OBSERVED:** Private network endpoints, request payloads, loading states after filter selection, backend errors, permission failures, export download behavior, and successful target application.
- **NOT OBSERVED:** Authenticated competitor deletion was intentionally not tested.
- **INFERENCE:** Platform and historical-date selection trigger asynchronous report refreshes.
- **RECOMMENDATION:** Centilio Seek should separate reversible report filtering from analysis-restarting configuration and should surface that boundary before confirmation.

## Cross-Component Pattern Note

The report controls are shared infrastructure for [[semrush-brand-performance-insights]], [[semrush-perception-analysis]], [[semrush-narrative-drivers]], and [[semrush-question-intent-analysis]]. The methodology dialog complements the evidence affordances in [[semrush-evidence-answers-drawer]].

## Competitor Comparisons

| Product | Comparable pattern | Strength | Open question |
|---|---|---|---|
| Semrush | Shared report header with profile, target, competitors, provider, and snapshot controls | Dense context remains available above every report | Whether all report screens share identical loading and error behavior needs verification |
| Centilio Seek | Proposed universal report-control composition | Can make reversible filters and restart-triggering settings visually distinct | Final provider, quota, and permission contracts are not yet verified |

## Best Observed Approach

Use a stable report header with clearly grouped selectors, removable competitor chips, historical snapshots, and adjacent help. Move any action that restarts analysis into a warning modal with a safe cancel path.

## Sources

- **OBSERVATION:** Authenticated Semrush Brand Performance screen review, 2026-09-29.
- **OBSERVATION:** Accessibility-state captures for collapsed and expanded controls, modal dialogs, tooltips, and option lists.
- **RECONSTRUCTION:** Local React preview uses synthetic values and test-only state. No authenticated report setting was changed.
