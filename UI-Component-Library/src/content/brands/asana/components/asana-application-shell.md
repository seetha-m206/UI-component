---
component: "Asana Application Shell"
ui_category: "Application Layout > App Shell"
source_product: "Asana"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Authenticated-source record with a guarded fictional local preview."
---

# Asana Application Shell

## Location
- **OBSERVED:** Authenticated Home, My tasks, Projects, Inbox, Portfolios and project-board routes.

## Screenshot
- **NEEDS VERIFICATION:** Visually inspected. No provider screenshot retained because the shell exposed workspace and user identity.

## Structure
- **OBSERVED:** Narrow product-area rail, workspace sidebar, persistent top search and create controls, trial boundary, and a content canvas.

## Actions
- **OBSERVED:** Primary routes changed the content canvas while the shell remained stable. Create opened an overlay menu.

## Behavior & States
- **RECONSTRUCTION:** Local navigation emits guard notices and never changes provider state.

## Technical Data
- **OBSERVED:** Accessibility roles included buttons, links, tabs, checkboxes, progressbar, search and status. Dark theme used a near-black canvas and system font stack.

## Accessibility
- **OBSERVED:** A skip-to-main-content control and explicit sidebar collapse state were exposed.

## Needs Verification
- **NOT OBSERVED:** Responsive collapse rules, focus order, permissions and persisted navigation preferences.

## Sources
- **OBSERVED:** Authenticated Asana workspace inspected through Codex in-app browser on 2026-10-08.
- **RECONSTRUCTION:** `src/previews/asana-shared/`.
