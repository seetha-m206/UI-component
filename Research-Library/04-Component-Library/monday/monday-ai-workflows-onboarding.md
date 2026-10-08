---
component: 'monday.com AI Workflows Onboarding'
ui_category: 'Automation > AI Workflow Onboarding'
source_product: 'monday.com'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'partial'
summary: 'First-use workflow education observed while the underlying builder remained unobserved.'
---

# Component: monday.com AI Workflows Onboarding

## Location

- **OBSERVATION:** `/ai_workflows` first-use modal.

## Screenshot

![Fictional local preview](/research/monday/fixtures/monday-ai-workflows-onboarding.png)

## Structure

- **OBSERVATION:** Four education tabs cover chat-to-build, agents, new capabilities and run-before-publishing.
- **OBSERVATION:** The modal offers Got it and a close control.

## Behavior

- **OBSERVATION:** Tabs describe feature families without running a workflow.
- **NOT OBSERVED:** The underlying workflow list or canvas because dismissing provider onboarding was outside scope.

## Actions

- **OBSERVATION:** Tab selection is available.
- **NOT OBSERVED:** Dismissal, prompt submission, agent addition, webhook, MCP connection, approval step, test run or publish.

## States

- **OBSERVATION:** Chat to build selected by default.
- **NEEDS VERIFICATION:** Builder canvas, validation errors, execution log, approvals and published workflow state.

## Rules and Validation

- **RECONSTRUCTION:** Preview education tabs switch locally. Continue remains disabled.

## Technical Data

- **OBSERVATION:** Modal, tab group and tab panel semantics are exposed.

## Lessons

- **RECOMMENDATION:** Introduce high-consequence automation capabilities with staged education and explicit pre-publish execution.

## Sources

- **OBSERVATION:** Authenticated monday.com AI workflows onboarding, 2026-10-08.
- **NOT OBSERVED:** Workflow builder or provider execution.
