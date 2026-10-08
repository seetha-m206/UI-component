---
component: "Freshdesk Omni MCP Settings"
ui_category: "Apps & Integrations > MCP Settings"
source_product: "Freshdesk Omni"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed the MCP server settings structure while excluding the provider enablement state."
---

# Freshdesk Omni MCP Settings

## Location

- **OBSERVED:** Admin → Apps & Integrations → MCP Settings.

## Structure

- **OBSERVED:** The page introduced governed MCP access for external AI assistants, displayed an Enable MCP Server control, and explained authorized access to approved support tools and modules.
- **RECONSTRUCTION:** The local fixture renders the switch disabled and unchecked to avoid retaining account security state.

## Actions

- **NOT OBSERVED:** No server, module, tool, permission, authentication, account security state, or access configuration was changed.

## Technical Data

- **OBSERVED / DOM:** MCP heading, server region, enablement control, side guidance, and tools documentation link were exposed.
- **NEEDS VERIFICATION:** Provider enablement state, authorization, modules, tools, permissions, auditability, actions, and persistence.

## Sources

- **OBSERVED:** Authenticated Freshdesk Omni, 2026-10-08.
