# n8n Cloud component research

Authenticated read-only observation completed on 2026-10-08 for Centilio Loop.

## Evidence boundary

- Provider navigation and passive states were observed without mutating n8n or a connected service.
- Account identity, email, instance and project identifiers, transient sign-in parameters, credentials, credit balances, live timestamps and provider screenshots are excluded.
- Every screenshot path points to a fictional local fixture.
- The second batch covers passive AI governance, entitlement, extensions, migration and observability settings.
- Twenty-eight reusable controls also have independent records, routes and captures instead of appearing only inside composite screens.
- Canvas, node, test, error, sub-workflow, evaluation and version behavior stay open because the account contains no safe pre-existing workflow.

## Coverage

| ID | Component | Evidence |
| --- | --- | --- |
| `n8n-application-shell` | n8n Application Shell | OBSERVED |
| `n8n-overview-onboarding` | n8n Overview Onboarding | OBSERVED |
| `n8n-global-create-menu` | n8n Global Create Menu | OBSERVED |
| `n8n-personal-project-tabs` | n8n Personal Project Workspace | OBSERVED |
| `n8n-workflows-empty` | n8n Workflows Empty State | OBSERVED |
| `n8n-agents-empty` | n8n Agents Empty State | OBSERVED |
| `n8n-credentials-empty` | n8n Credentials Empty State | OBSERVED |
| `n8n-executions-empty` | n8n Executions Empty State | OBSERVED |
| `n8n-variables-empty` | n8n Variables Empty State | OBSERVED |
| `n8n-data-tables-empty` | n8n Data Tables Empty State | OBSERVED |
| `n8n-assistant-onboarding` | n8n Assistant Onboarding | OBSERVED |
| `n8n-insights-dashboard` | n8n Insights Dashboard | OBSERVED |
| `n8n-settings-navigation` | n8n Settings Navigation | OBSERVED |
| `n8n-instance-mcp-settings` | n8n Instance-level MCP Settings | OBSERVED |
| `n8n-enterprise-plan-gates` | n8n Enterprise Plan Gates | OBSERVED |
| `n8n-security-policies` | n8n Security and Policy Controls | OBSERVED |
| `n8n-cloud-admin-dashboard` | n8n Cloud Administration Dashboard | OBSERVED |
| `n8n-template-catalogue` | n8n Template Catalogue | OBSERVED |
| `n8n-workflow-builder-boundary` | n8n Workflow Builder Boundary | NEEDS_VERIFICATION |
| `n8n-advanced-workflow-boundary` | n8n Advanced Workflow Boundary | NEEDS_VERIFICATION |
| `n8n-ai-usage-controls` | n8n AI Usage Controls | OBSERVED |
| `n8n-gateway-credit-upgrade-gate` | n8n Gateway Credit Upgrade Gate | OBSERVED |
| `n8n-ldap-enterprise-gate` | n8n LDAP Enterprise Gate | OBSERVED |
| `n8n-log-streaming-enterprise-gate` | n8n Log Streaming Enterprise Gate | OBSERVED |
| `n8n-community-nodes-inventory` | n8n Community Nodes Inventory | OBSERVED |
| `n8n-migration-report` | n8n Migration Report | OBSERVED |
| `n8n-context-preferences` | n8n Context Preferences | OBSERVED |
| `n8n-chat-settings` | n8n Chat Settings | OBSERVED |
| `n8n-assistant-settings` | n8n Assistant Settings | OBSERVED |
| `n8n-opentelemetry-settings` | n8n OpenTelemetry Settings | OBSERVED |
| `n8n-trial-usage-banner` | n8n Trial Usage Banner | OBSERVED |
| `n8n-primary-navigation-rail` | n8n Primary Navigation Rail | OBSERVED |
| `n8n-onboarding-choice-card` | n8n Onboarding Choice Card | OBSERVED |
| `n8n-project-tab-strip` | n8n Project Tab Strip | OBSERVED |
| `n8n-resource-empty-card` | n8n Resource Empty Card | OBSERVED |
| `n8n-assistant-prompt-composer` | n8n Assistant Prompt Composer | OBSERVED |
| `n8n-assistant-suggestion-chip` | n8n Assistant Suggestion Chip | OBSERVED |
| `n8n-insights-filter-control` | n8n Insights Filter Control | OBSERVED |
| `n8n-insights-metric-card` | n8n Insights Metric Card | OBSERVED |
| `n8n-insights-chart` | n8n Insights Breakdown Chart | OBSERVED |
| `n8n-insights-workflow-table` | n8n Insights Workflow Table | OBSERVED |
| `n8n-settings-sidebar` | n8n Settings Sidebar | OBSERVED |
| `n8n-settings-nav-item` | n8n Settings Navigation Item | OBSERVED |
| `n8n-setting-toggle-row` | n8n Setting Toggle Row | OBSERVED |
| `n8n-enterprise-gate-card` | n8n Enterprise Gate Card | OBSERVED |
| `n8n-gateway-upgrade-modal` | n8n Gateway Upgrade Modal | OBSERVED |
| `n8n-community-node-row` | n8n Community Node Row | OBSERVED |
| `n8n-migration-tabs` | n8n Migration Issue Tabs | OBSERVED |
| `n8n-migration-issue-card` | n8n Migration Issue Card | OBSERVED |
| `n8n-context-empty-table` | n8n Context Preference Empty Table | OBSERVED |
| `n8n-assistant-permission-selector` | n8n Assistant Permission Selector | OBSERVED |
| `n8n-otel-field-row` | n8n OpenTelemetry Field Row | OBSERVED |
| `n8n-otel-trace-option` | n8n OpenTelemetry Trace Option | OBSERVED |
| `n8n-template-search-filter` | n8n Template Search and Filter | OBSERVED |
| `n8n-template-card` | n8n Template Card | OBSERVED |
| `n8n-cloud-instance-card` | n8n Cloud Instance Card | OBSERVED |
| `n8n-credit-summary-card` | n8n Credit Summary Card | OBSERVED |
| `n8n-mcp-enable-card` | n8n MCP Enable Card | OBSERVED |

## Open boundaries

- Workflow canvas, node search, mapping, credentials, tests, errors, retries and publication require a safe pre-existing provider fixture.
- Sub-workflows, evaluations and version recovery require a populated workflow and execution history.
- Provider persistence, connected-app consequences and consequential access or security changes remain unverified.
