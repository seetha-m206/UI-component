---
component: "Wix Portfolio Projects Loading Shell"
ui_category: "Portfolio > Projects"
source_product: "Wix"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Wix Portfolio Projects Loading Shell

## Location
- **OBSERVED:** Authenticated Wix `/wix-portfolio/projects` on a free-plan site.

## Structure
- **OBSERVED:** The primary route was reached, but no stable screen content rendered during the bounded observation window.

## Evidence Boundary
- **NOT OBSERVED:** Projects list, creation, editing, ordering and publication.
- **RECONSTRUCTION:** The local fixture reproduces only the route shell or bounded loading state. It makes no claim about the unresolved screen and sends no Wix request.

## Local Preview Captures

- **RECONSTRUCTION:** These images capture the fictional local preview. They are not Wix provider screenshots.

### Observed bounded loading state

![wix-portfolio-projects-loading — Observed bounded loading state](/research/wix/fixtures/wix-portfolio-projects-loading--loading.jpg)

- **RECONSTRUCTION / CAPTURE:** `loading` at 1600 × 1200. SHA-256 `24053844f76a277eb36c5d7a134652e6e6410f77be418bc5a2d5ebe037136b6a`.

## Sources
- **OBSERVED:** Authenticated Wix dashboard, inspected 2026-10-07. No durable provider screenshot or network trace was archived.
