---
component: "HubSpot Buyer Intent Workspace"
ui_category: "Marketing > Buyer Intent"
source_product: "HubSpot Marketing Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Observed authenticated HubSpot Marketing Hub screen patterns with explicit provider-safety boundaries and fictional local fixtures."
---

# HubSpot Buyer Intent Workspace

## Location

- **OBSERVED:** Buyer Intent Visitors at `/buyer-intent/343751787/intent`.

## Screenshots

- **OBSERVED:** `2026-10-07-buyer-intent-update-overlay.png` and `2026-10-07-buyer-intent-tracking-required.png`.

## Screen, Actions & States

- **OBSERVED:** Top-level tabs were Overview, Visitors, Research, Signals and Configuration.
- **OBSERVED:** The Visitors filter panel grouped Visitor Intent, Target Markets and CRM criteria, with time frame, traffic source, country, domain and page-path controls.
- **OBSERVED:** Save view and automate was disabled in the untouched state.
- **OBSERVED:** The main empty state required the HubSpot tracking code, documented the approximate data delay and offered Check code installation, Copy and Email to my web developer.
- **OBSERVED:** A dismissible “Newly Updated: Automations!” overlay appeared with a video, Get Started and Learn More.
- **SAFE ACTION:** Escape dismissed the update overlay without changing configuration.
- **NOT ACTIVATED:** Code check, copy, email, configuration, save or automation.

## Fictional Local Fixture

```yaml
time_frame: last_7_days
traffic_source: any
country: any
domain: northstar.example
tracking_state: missing
save_view_enabled: false
```

## Evidence Boundary

- **FACT:** Filters, tracking-code prerequisite and update overlay were observed.
- **RECONSTRUCTION:** The domain and visitor fixture are fictional.
- **NEEDS VERIFICATION:** No tracking code was installed or checked and no email was sent.

## Sources

- Authenticated HubSpot Buyer Intent workspace, observed 2026-10-07.
