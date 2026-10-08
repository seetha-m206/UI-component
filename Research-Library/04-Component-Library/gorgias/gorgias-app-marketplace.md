---
component: 'Gorgias App Marketplace'
ui_category: 'Integrations > Marketplace Catalogue'
source_product: 'Gorgias'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Searchable integration marketplace organized across messaging, commerce, operations and analytics categories.'
---

# Component: Gorgias App Marketplace

## Location

- **OBSERVATION:** Inspected at `/app/settings/integrations` without opening an install flow.

## Screenshot

![Fictional local preview](/research/gorgias/fixtures/gorgias-app-marketplace.png)

## Structure

- **OBSERVATION:** Search and category navigation precede repeated category sections with a View All link and two representative app cards.
- **OBSERVATION:** Categories spanned chat, phone, SMS, social media, ecommerce, subscriptions, shipping, returns, loyalty, reviews, marketing, analytics, data management and quality assurance.
- **RECONSTRUCTION:** The fixture shows a small representative subset with generic card descriptions.

## Actions

| Action | Result or boundary |
| --- | --- |
| Select category | Read-only filtering pattern only |
| Open app, request app or explore API | Not exercised |
| Connect or install | Never exercised |

## Behavior & States

- **OBSERVATION:** The marketplace is embedded within the persistent Settings shell.
- **NOT OBSERVED:** App detail, OAuth, permissions, pricing and installation consequences.

## Technical Data

- **OBSERVATION / Network:** Sanitized resource patterns included `/api/apps`, `/api/apps/installed` and `/api/integrations`. Fetch initiation does not establish payload contracts.

## Evidence Boundary

- **NOT OBSERVED:** No integration was connected, installed or configured.

## Sources

- **OBSERVATION:** Authenticated Gorgias runtime, 2026-10-08.
