---
component: "Wix All Reports Loading Shell"
ui_category: "Analytics > All Reports"
source_product: "Wix"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "The route remained at Loading your dashboard during the bounded observation window."
---

# Wix All Reports Loading Shell

## Structure
- **OBSERVED:** The route remained at Loading your dashboard during the bounded observation window.

## Behavior & States
- **NOT OBSERVED:** Report catalogue, filtering, opening, export and scheduling.
- **RECONSTRUCTION:** The local fixture preserves the bounded loading-state evidence and sends no Wix request.

## Local Preview Captures

- **RECONSTRUCTION:** These images capture the fictional local preview. They are not Wix provider screenshots.

### Observed bounded loading state

![wix-all-reports-loading — Observed bounded loading state](/research/wix/fixtures/wix-all-reports-loading--loading.jpg)

- **RECONSTRUCTION / CAPTURE:** `loading` at 1600 × 1200. SHA-256 `93fda66a4a5497dd96496b255df41effe105b59b5a2f44dc42f00427b4699883`.

## Sources
- **OBSERVED:** Authenticated Wix `/analytics/reports`, 2026-10-07.
