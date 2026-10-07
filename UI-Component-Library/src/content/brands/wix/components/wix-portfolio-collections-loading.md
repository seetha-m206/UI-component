---
component: "Wix Portfolio Collections Loading Shell"
ui_category: "Portfolio > Collections"
source_product: "Wix"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "The route remained at Loading your dashboard during the bounded observation window."
---

# Wix Portfolio Collections Loading Shell

## Structure
- **OBSERVED:** The route remained at Loading your dashboard during the bounded observation window.

## Behavior & States
- **NOT OBSERVED:** Collections list, creation, editing, ordering and publication.
- **RECONSTRUCTION:** The local fixture preserves the bounded loading-state evidence and sends no Wix request.

## Local Preview Captures

- **RECONSTRUCTION:** These images capture the fictional local preview. They are not Wix provider screenshots.

### Observed bounded loading state

![wix-portfolio-collections-loading — Observed bounded loading state](/research/wix/fixtures/wix-portfolio-collections-loading--loading.jpg)

- **RECONSTRUCTION / CAPTURE:** `loading` at 1600 × 1200. SHA-256 `8ad73d5437cacc072fdf0a6f616f71a5d08b59d3c5f589ce02be529a0c84a751`.

## Sources
- **OBSERVED:** Authenticated Wix `/wix-portfolio/collections`, 2026-10-07.
