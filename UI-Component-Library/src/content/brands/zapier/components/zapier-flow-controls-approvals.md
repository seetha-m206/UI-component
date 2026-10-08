---
component: "Zapier Flow Controls and Approvals"
ui_category: "Automation Builder > Logic and Human Review"
source_product: "Zapier"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Conditional routing, timing, loops, reusable subflows and human approval boundaries."
---

# Component: Zapier Flow Controls and Approvals

## Location

- **OBSERVATION:** Authenticated route `/editor/sandbox/draft/2/setup` was inspected on 2026-10-08, or the record explicitly identifies official source review.
- **RECONSTRUCTION:** The local preview uses fictional names, values, counts and dates and never contacts Zapier.

## Screenshot

![Fictional local preview](/research/zapier/fixtures/zapier-flow-controls-approvals.png)

## Structure

- **OBSERVATION:** Delay holds actions for a set time
- **OBSERVATION:** Filter continues only when conditions match
- **OBSERVATION:** Looping repeats following steps
- **OBSERVATION:** Paths routes data into rule-based branches
- **OBSERVATION:** Sub-Zap provides reusable components
- **OBSERVATION:** Human in the Loop pauses for review or intervention

## Actions

| Action                        | Result or boundary                      |
| ----------------------------- | --------------------------------------- |
| Add Filter                    | Defines a single continuation condition |
| Add Paths                     | Defines multiple conditional outcomes   |
| Request approval              | Pauses a run and asks a reviewer        |
| Add Delay, Looping or Sub-Zap | Changes workflow orchestration          |

## Behavior & States

- **OBSERVATION:** OBSERVED action palette availability
- **SOURCE REVIEWED:** approval configuration
- **SOURCE REVIEWED:** plan gates
- **NOT OBSERVED:** configured rule or approval
- **RECONSTRUCTION:** Local controls update only the fictional preview or show a safety notice.

## Technical Data

- **OBSERVATION / DOM:** Zapier exposed semantic headings, links, buttons, checkboxes, comboboxes, tables and named regions across the inspected surfaces.
- **OBSERVATION / ROUTE:** Query identifiers, account identifiers and opaque draft identifiers are intentionally removed from this record.
- **RECONSTRUCTION:** Shared renderer is `src/previews/zapier-shared/ZapierPreview.tsx`.
- **NEEDS VERIFICATION:** Provider request payloads, persistence contracts and connected-app consequences are not established.

## Accessibility

- **OBSERVATION:** Flow-control options included descriptive purpose text in the action picker.
- **RECONSTRUCTION:** The fictional preview uses explicit labels, headings, buttons and live status messages.

## Evidence Boundary

- **NOT OBSERVED:** No rule, reviewer, notification, branch, loop, delay or subflow was configured. Approval delivery and runtime outcomes remain unverified.

## Sources

- **SOURCE REVIEWED:** https://help.zapier.com/hc/en-us/articles/8496288555917-Add-branching-logic-to-Zap-workflows-with-Paths
- **SOURCE REVIEWED:** https://help.zapier.com/hc/en-us/articles/38731463206029-Request-approval-to-keep-your-workflow-running-with-Human-in-the-Loop
- **RECONSTRUCTION:** Fictional local fixture in this library.
