---
component: 'monday.com Agent Directory'
ui_category: 'AI Assistance > Agent Directory and Prompt Boundary'
source_product: 'monday.com'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Agent prompt boundary and role-based prebuilt-agent catalogue observed without submission.'
---

# Component: monday.com Agent Directory

## Location

- **OBSERVATION:** `/ai_agents/new`.

## Screenshot

![Fictional local preview](/research/monday/fixtures/monday-agent-directory.png)

## Structure

- **OBSERVATION:** Agent navigation, bring-your-agent and start-from-blank actions, prompt composer and role-based catalogue.
- **OBSERVATION:** Composer includes context, attachment, model selection and disabled submit controls.
- **OBSERVATION:** Catalogues cover project management, marketing, operations, sales, HR, product and engineering, productivity and monday.com examples.

## Behavior

- **OBSERVATION:** Category chips filter prebuilt agents. Agent cards expose role, promise, capabilities and install counts.
- **RECONSTRUCTION:** Category selection is local and agent cards never install.

## Actions

- **OBSERVATION:** Select a category or agent, add context, attach, choose model and submit.
- **NOT OBSERVED:** Prompt submission, file upload, agent installation, external-agent connection or agent execution.

## States

- **OBSERVATION:** Project management selected, empty prompt and disabled submit.
- **NEEDS VERIFICATION:** Installed agent management, permissions, runs, failures and recurring execution.

## Rules and Validation

- **RECONSTRUCTION:** Prompt stays empty and submission stays disabled.

## Technical Data

- **OBSERVATION:** Dedicated agent-management and agent-discovery resource families load on this route.
- **INFERENCE:** Separate discovery and management bundles suggest independent catalogue and installed-agent domains.

## Lessons

- **RECOMMENDATION:** Organize agents around user roles and desired outcomes, while keeping prompt creation and installation visibly separate.

## Sources

- **OBSERVATION:** Authenticated monday.com agent directory, 2026-10-08.
- **NOT OBSERVED:** Agent execution, provider model policy consequences or install contracts.
