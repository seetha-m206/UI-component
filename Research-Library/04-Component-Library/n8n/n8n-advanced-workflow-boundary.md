---
component: "n8n Advanced Workflow Boundary"
ui_category: "Automation Builder > Sub-workflows and Evaluations"
source_product: "n8n Cloud"
last_verified: "2026-10-08"
evidence_state: "needs_verification"
status: "incomplete"
summary: "Sub-workflows, evaluation datasets, metrics and version recovery remain unobserved."
---

# Component: n8n Advanced Workflow Boundary

## Location

- **NEEDS VERIFICATION:** The authenticated empty workspace did not expose this provider surface without creating state.
- **RECONSTRUCTION:** The local preview uses fictional names and values and removes account identity, email, instance and project identifiers, transient sign-in parameters, credentials, credit balances and live timestamps.

## Screenshot

![Fictional local preview](/research/n8n/fixtures/n8n-advanced-workflow-boundary.png)

## Structure

- **NEEDS VERIFICATION:** Data-table onboarding names evaluation metrics but does not reveal the evaluation workflow.
- **NEEDS VERIFICATION:** No executions, errors, retries, sub-workflow links or version snapshots existed in the account.

## Actions

| Action | Result or boundary |
| --- | --- |
| Exercise advanced workflow state | NEEDS VERIFICATION with a safe populated workflow and execution history |
| Local preview controls | Update only fictional fixture state or show a local boundary notice |

## Behavior & States

- **NEEDS VERIFICATION:** Sub-workflows, evaluation datasets, metrics and version recovery remain unobserved.
- **RECONSTRUCTION:** Local controls never contact n8n or a connected service.
- **NEEDS VERIFICATION:** Provider persistence, connected-app consequences, responsive behavior and unexercised entitlement variants remain unverified.

## Technical Data

- **OBSERVATION / DOM:** The runtime exposed semantic headings, links, buttons, tabs, switches, progress indicators, tables, inputs and named navigation regions where applicable.
- **OBSERVATION / ROUTE:** Sanitized route families include `/home/workflows`, `/projects/[project]/...`, `/assistant`, `/insights/...` and `/settings/...`.
- **OBSERVATION / VERSION:** The inspected Cloud instance displayed n8n 2.42.5.
- **RECONSTRUCTION:** Shared renderer is `src/previews/n8n-shared/N8nPreview.tsx`.
- **NEEDS VERIFICATION:** Request bodies, tokens, backend contracts, provider storage and causal event-to-request mappings were not captured.

## Accessibility

- **OBSERVATION:** Core navigation, tabs and primary actions were generally named in the accessibility tree.
- **OBSERVATION:** Several icon-only buttons exposed no accessible name, and some empty-state text appeared visually but not in the accessibility snapshot.
- **RECONSTRUCTION:** The fictional fixture adds explicit labels, headings, disabled consequential actions and live local notices.

## Evidence Boundary

- **NOT OBSERVED:** No workflow, node, credential, variable, table, agent, prompt, execution, test, retry, publish, MCP access, invite, permission, security policy, payment, deletion or provider write was exercised.

## Sources

- **OBSERVATION:** Authenticated n8n Cloud runtime, 2026-10-08.
- **OBSERVATION:** Official n8n template catalogue opened from the authenticated app where applicable.
- **RECONSTRUCTION:** Fictional local fixture in this library.
