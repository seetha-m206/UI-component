---
component: "Wix Traffic Overview"
ui_category: "Analytics and Reporting > Traffic Dashboard"
source_product: "Wix"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Wix Traffic Overview

## Location
- **OBSERVED:** Authenticated Traffic Overview with no sessions in the selected period.

## Structure
- **OBSERVED:** Last 30 days and previous-period comparison sit above an AI question bar and Summarize your data action.
- **OBSERVED:** Site sessions and unique visitors were zero. Cards covered sessions over time, new versus returning, device, country, source and category, average sessions by day, and traffic insights.
- **OBSERVED:** Data-dependent View Report actions and dimensional selectors were disabled while promotional Get traffic rows remained visible.

## Actions
| Action | Result |
| --- | --- |
| Open date field | Opened the full preset and calendar popover. |
| Ask AI / summarize | Not activated to avoid sending content or consuming credits. |

## Technical Data
- **OBSERVED / DOM:** Disabled report buttons and popup buttons were exposed through accessibility state.
- **NOT OBSERVED:** Populated charts, AI responses, subscriptions, exports or changed date results.

## Human Context
- **RECONSTRUCTION:** Local AI actions return guard messages and never contact Wix.

## Local Preview Captures

- **RECONSTRUCTION:** These images capture the fictional local preview. They are not Wix provider screenshots.

### Observed overview

![wix-traffic-overview — Observed overview](/research/wix/fixtures/wix-traffic-overview--default.jpg)

- **RECONSTRUCTION / CAPTURE:** `default` at 1600 × 1200. SHA-256 `1005650ca971198f7e1c4bb65e3902344333fa37eff3e216cd86f298ddeeda61`.

### Date range open

![wix-traffic-overview — Date range open](/research/wix/fixtures/wix-traffic-overview--date-open.jpg)

- **RECONSTRUCTION / CAPTURE:** `date-open` at 1600 × 1200. SHA-256 `d6294fb84df7c28c80b6f31e2404834101094b4c8541c6c252a6c2c800347dca`.

## Sources
- **OBSERVED:** Authenticated Wix `/analytics/overviews/traffic`, inspected 2026-10-07. No durable provider screenshot was archived.
