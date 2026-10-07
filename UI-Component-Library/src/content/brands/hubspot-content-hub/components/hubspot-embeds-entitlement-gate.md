---
component: "HubSpot Content Embeds Entitlement Gate"
ui_category: "Content > Embeds"
source_product: "HubSpot Content Hub Professional"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Observed authenticated HubSpot Content Hub screen patterns with explicit provider-safety boundaries and fictional local fixtures."
---

# HubSpot Content Embeds Entitlement Gate

## Location

- **OBSERVED:** `/pricing/343751787/upgrade?upgradeSource=content-embed-locked-nav-item`.

## Screenshots

- **OBSERVED:** `2026-10-07-embeds-upgrade-gate.png`.

## Screen, Actions & States

- **OBSERVED:** The Professional gate described HubSpot-managed content blocks embedded into WordPress or another external site, with updates published everywhere.
- **OBSERVED:** Benefits covered gradual site modernization, CRM-driven personalization, smart content, forms, targeted messaging and reduced developer bottlenecks.
- **OBSERVED:** Talk to Sales and Start 14-day trial were offered above a plan comparison table.
- **NOT ACTIVATED:** Sales contact, trial, content creation, WordPress connection, embedding and publication.
- **NEEDS VERIFICATION:** Embed builder, code generation, CMS connection, personalization rules, versioning and live propagation.

## Fictional Local Fixture

```yaml
embed: Northstar Partner CTA
status: locked
target_cms: wordpress
personalization: lifecycle_stage
placement: article_footer
```

## Evidence Boundary

- **FACT:** The Content Embeds entitlement gate was directly observed.
- **RECONSTRUCTION:** The embed fixture is fictional and local only.
- **NEEDS VERIFICATION:** No authenticated embed workspace or external CMS was connected.

## Sources

- Authenticated HubSpot Content Embeds entitlement gate, observed 2026-10-07.
