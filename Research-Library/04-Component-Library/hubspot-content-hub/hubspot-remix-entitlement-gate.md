---
component: "HubSpot Content Remix Entitlement Gate"
ui_category: "Content > Remix"
source_product: "HubSpot Content Hub Professional"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot Content Remix Entitlement Gate

## Location

- **OBSERVED:** `/pricing/343751787/upgrade?upgradeSource=content-remix-locked-nav-item`.

## Screenshots

- **OBSERVED:** `2026-10-07-remix-upgrade-gate.png`.

## Screen, Actions & States

- **OBSERVED:** The Professional gate described using AI to transform one blog post, podcast or video into social posts, emails and ads.
- **OBSERVED:** Benefits emphasized faster repurposing, unified multi-channel messaging, wider reach and greater output without proportional budget growth.
- **OBSERVED:** Talk to Sales and Start 14-day trial were offered above a plan comparison table.
- **NOT ACTIVATED:** Sales contact, trial, source selection, generation, editing, export and publication.
- **NEEDS VERIFICATION:** Remix workspace, supported sources, generated-output review, channel controls and publishing handoffs.

## Fictional Local Fixture

```yaml
remix_job: Northstar Launch Repurpose
status: locked
source_type: blog_post
outputs: [email, social_post, ad_copy]
review_state: awaiting_editor
```

## Evidence Boundary

- **FACT:** The Content Remix entitlement gate was directly observed.
- **RECONSTRUCTION:** The remix fixture is fictional and local only.
- **NEEDS VERIFICATION:** No authenticated Remix workspace was accessible.

## Sources

- Authenticated HubSpot Content Remix entitlement gate, observed 2026-10-07.
