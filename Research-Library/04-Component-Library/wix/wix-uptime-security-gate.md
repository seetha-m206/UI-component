---
component: "Wix Uptime and Security Publish Gate"
ui_category: "Website > Reliability"
source_product: "Wix"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Wix Uptime and Security Publish Gate

## Location
- **OBSERVED:** Authenticated Wix `/analytics/performance/reliability` on a free-plan, unpublished site.

## Structure
- **OBSERVED:** The screen explained uptime and business continuity, and required publishing before showing availability status.

## Actions
- **OBSERVED:** The named controls and primary navigation were rendered. Read-only route navigation was exercised.
- **NOT OBSERVED:** Site publication, uptime history, incidents, security details and alerts.

## Human Context
- **RECONSTRUCTION:** The local fixture uses fictional data and keeps every action local. Buttons display a guard and send no Wix request.

## Local Preview Captures

- **RECONSTRUCTION:** These images capture the fictional local preview. They are not Wix provider screenshots.

### Observed publish gate

![wix-uptime-security-gate — Observed publish gate](/research/wix/fixtures/wix-uptime-security-gate--default.jpg)

- **RECONSTRUCTION / CAPTURE:** `default` at 1600 × 1200. SHA-256 `24e988777c9d32e47aab7a924f23c0f742f35fc491a52b109197b6203bc7e5bf`.

## Sources
- **OBSERVED:** Authenticated Wix dashboard, inspected 2026-10-07. Rendered UI text was recorded in the local evidence package. No durable provider screenshot or network trace was archived.
