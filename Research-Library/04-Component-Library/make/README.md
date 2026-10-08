# Make component research

Authenticated read-only observation and official Make source review completed on 2026-10-08 for Centilio Loop.

## Evidence boundary

- Provider navigation and detail views were observed without mutating Make or a connected service.
- Account identities, emails, organization and team IDs, connection identities, live usage values and billing details are excluded.
- Scenario editing, scheduling, execution, replay, retry, deletion, app connection, invitations, permission changes and AI prompts were not exercised.
- Every screenshot path points to a fictional local fixture, not an authenticated provider capture.

## Coverage

| ID                                    | Component                               | Evidence        |
| ------------------------------------- | --------------------------------------- | --------------- |
| `make-application-shell`              | Make Application Shell                  | OBSERVED        |
| `make-organization-dashboard`         | Make Organization Dashboard             | OBSERVED        |
| `make-scenarios-empty`                | Make Scenarios Empty Workspace          | OBSERVED        |
| `make-template-catalogue`             | Make Public Template Catalogue          | OBSERVED        |
| `make-template-canvas`                | Make Template Canvas Preview            | OBSERVED        |
| `make-ai-agents-landing`              | Make AI Agents Landing                  | OBSERVED        |
| `make-connections-list`               | Make Connections Inventory              | OBSERVED        |
| `make-webhooks-empty`                 | Make Webhooks Empty State               | OBSERVED        |
| `make-mcp-toolboxes-empty`            | Make MCP Toolboxes Empty State          | OBSERVED        |
| `make-teams-list`                     | Make Teams List                         | OBSERVED        |
| `make-users-table`                    | Make Organization Users Table           | OBSERVED        |
| `make-roles-catalogue`                | Make Default Roles Catalogue            | OBSERVED        |
| `make-role-permissions`               | Make Role Permission Matrix             | OBSERVED        |
| `make-credit-usage`                   | Make Credit Usage Dashboard             | OBSERVED        |
| `make-installed-apps-empty`           | Make Installed Apps Empty State         | OBSERVED        |
| `make-organization-variables`         | Make Organization Variables Table       | OBSERVED        |
| `make-scenario-properties-gate`       | Make Scenario Properties Plan Gate      | OBSERVED        |
| `make-audit-logs-gate`                | Make Audit Logs Plan Gate               | OBSERVED        |
| `make-event-subscriptions-gate`       | Make Event Subscriptions Plan Gate      | OBSERVED        |
| `make-notification-options`           | Make Notification Options               | OBSERVED        |
| `make-data-stores-empty`              | Make Data Stores Empty State            | OBSERVED        |
| `make-data-structures-empty`          | Make Data Structures Empty State        | OBSERVED        |
| `make-devices-empty`                  | Make Devices Empty State                | OBSERVED        |
| `make-custom-apps-onboarding`         | Make Custom Apps Onboarding             | OBSERVED        |
| `make-router-filter-builder`          | Make Router and Filter Builder          | SOURCE_REVIEWED |
| `make-mapping-schedule-panel`         | Make Mapping and Schedule Panels        | SOURCE_REVIEWED |
| `make-run-history-inspector`          | Make Run History Inspector              | SOURCE_REVIEWED |
| `make-incomplete-executions-errors`   | Make Incomplete Executions and Errors   | SOURCE_REVIEWED |
| `make-global-search-palette`          | Make Global Search Palette              | OBSERVED        |
| `make-help-launcher`                  | Make Help Launcher                      | OBSERVED        |
| `make-notifications-empty`            | Make Notifications Empty State          | OBSERVED        |
| `make-account-menu`                   | Make Account and Theme Menu             | OBSERVED        |
| `make-workspace-picker`               | Make Workspace Picker                   | OBSERVED        |
| `make-private-space-dashboard`        | Make Private Space Dashboard            | OBSERVED        |
| `make-profile-organizations`          | Make Profile Organizations              | OBSERVED        |
| `make-profile-settings-dialog`        | Make Profile Settings Dialog            | OBSERVED        |
| `make-email-preferences`              | Make Email Preferences                  | OBSERVED        |
| `make-timezone-options`               | Make Time Zone Options                  | OBSERVED        |
| `make-api-access-boundary`            | Make API Access Boundary                | OBSERVED        |
| `make-two-factor-boundary`            | Make Two-Factor Authentication Boundary | OBSERVED        |
| `make-affiliate-onboarding`           | Make Affiliate Program Onboarding       | OBSERVED        |
| `make-subscription-overview`          | Make Subscription Overview              | OBSERVED        |
| `make-payments-empty`                 | Make Payments Empty State               | OBSERVED        |
| `make-organization-team-action-menus` | Make Organization and Team Action Menus | OBSERVED        |
| `make-profile-security-actions`       | Make Profile Security Actions           | OBSERVED        |

## Open boundaries

- Populated scenario inventory and provider execution history remain unavailable in the observed empty account.
- Canvas editing, module configuration, routers, filters, mapping, scheduling and failure recovery are source-reviewed but not provider-exercised.
- Paid entitlements, responsive provider behavior, provider persistence and connected-app consequences remain unverified.
