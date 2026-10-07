---
component: "Wix Settings and SEO Workspace"
ui_category: "Account and Settings > Settings Hub"
source_product: "Wix"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Grouped settings hub and page-type SEO workspace with a notable loading and empty-state ambiguity."
---

# Wix Settings and SEO Workspace

## Structure

- **OBSERVED:** Settings search spans Finance & payments, Business solutions, Site/domain/SEO, General, Communications & notifications, and Development & integrations.
- **OBSERVED:** SEO Settings separates page types from site preferences. Main pages, Portfolio projects and Portfolio collections were available. Search-engine indexing appeared enabled and a general Open Graph image could be added.
- **OBSERVED:** Settings for Main Pages included breadcrumbs, Edit by page and Customize defaults tabs, filter and search.

## Behavior & States

- **OBSERVED:** The Main Pages table remained in a skeleton/spinner state while accessibility text exposed “No results found.” This does not prove an empty dataset.
- **NOT OBSERVED:** Search, filtering, editing, validation, saving and indexing results.
- **OBSERVED:** No setting, toggle, image, SEO field, code or integration was changed.

## Reconstruction Guidance

- **RECONSTRUCTION:** Keep site-wide preferences separate from per-page defaults and suppress empty-result announcements until loading resolves.

## Evidence

- **NEEDS VERIFICATION:** The final Main Pages state and a durable screenshot remain open.
- **OBSERVED:** Authenticated Wix Settings and SEO routes, inspected 2026-10-07.

## Local Preview Captures

- **RECONSTRUCTION:** These images capture the fictional local preview. They are not Wix provider screenshots.

### Observed settings overview

![wix-settings-and-seo-workspace — Observed settings overview](/research/wix/fixtures/wix-settings-and-seo-workspace--default.jpg)

- **RECONSTRUCTION / CAPTURE:** `default` at 1600 × 1200. SHA-256 `2f3e4f80d654f2010c736ce5afb129d225e02b47dbc424d796a75e081cfa2337`.

## Sources

- **OBSERVED:** Authenticated Wix provider UI, inspected 2026-10-07. No durable provider screenshot or network trace was archived.
