---
component: "HubSpot MCP Connectors Empty State"
ui_category: "Development > MCP Connectors"
source_product: "HubSpot Developer Platform"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Observed authenticated HubSpot Developer Platform screen patterns with explicit credential-safety boundaries and fictional local fixtures."
---

# HubSpot MCP Connectors Empty State

## Location
- **OBSERVED:** `/mcp-connectors/343751787`.
## Screenshots
- **OBSERVED:** `2026-10-07-mcp-connectors.png`.
## Screen, Actions & States
- **OBSERVED:** Empty state exposed Create MCP connector and explained that creation supplies a client ID and secret, preconfigured scopes and a redirect URL flow.
- **NOT ACTIVATED:** Connector creation, scope configuration, secret generation and redirect setup.
- **NEEDS VERIFICATION:** Wizard, OAuth, scope review, credentials, testing and lifecycle.
## Fictional Local Fixture
```yaml
connector: Northstar Assistant Connector
status: not_created
scopes: [crm.objects.contacts.read]
redirect_uri: https://example.test/oauth/callback
```
## Evidence Boundary
- **FACT:** The empty state and stated outputs were directly observed.
- **RECONSTRUCTION:** Fixture is fictional and local only.
- **NEEDS VERIFICATION:** No connector or credential was created.
## Sources
- Authenticated HubSpot MCP Connectors empty state, observed 2026-10-07.
