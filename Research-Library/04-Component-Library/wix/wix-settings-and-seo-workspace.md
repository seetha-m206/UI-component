---
component: "Wix Settings and SEO Workspace"
ui_category: "Account and Settings > Settings Hub"
source_product: "Wix"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Wix Settings and SEO Workspace

## Location

- **OBSERVED:** Settings overview, SEO Settings and Settings for Main Pages.

## Screenshot

- **NEEDS VERIFICATION:** Visually inspected in the in-app browser. No durable provider screenshot was archived.

## Structure

- **OBSERVED:** Settings begins with search and groups destinations under Finance & payments, Business solutions, Site/domain/SEO, General, Communications & notifications, and Development & integrations.
- **OBSERVED:** SEO Settings separates Edit by page type from Set site preferences. Page types were Main pages, Portfolio projects and Portfolio collections.
- **OBSERVED:** Site preferences exposed “Let search engines index your site” as enabled and an Add an image action for the general Open Graph image.
- **OBSERVED:** Settings for Main Pages used breadcrumbs, Edit by page and Customize defaults tabs, a filter action and search field.

## Behavior & States

- **OBSERVED:** The Main Pages table remained in a loading skeleton/spinner state while accessibility text also exposed “No results found.” This is ambiguous rendered state, not proof of an empty dataset.
- **NOT OBSERVED:** Search, filter, metadata editing, default customization, save confirmation, validation and actual indexing outcomes.

## Safety Boundary

- **OBSERVED:** No setting, indexing toggle, image, SEO field, communication channel, custom code or integration was changed.

## Human Context

- **RECOMMENDATION:** Avoid exposing empty-result announcements while a table is still loading. Keep site-wide SEO preferences distinct from per-page defaults.

## Needs Verification

- **NEEDS VERIFICATION:** Final Main Pages state, loading timeout, error recovery, save flows, indexing effects and permission gates.

## Fixture Evidence

- **RECONSTRUCTION:** The registered local preview uses fictional data, preserves the observed evidence boundary and sends no Wix request.

## Local Preview Captures

- **RECONSTRUCTION:** These images capture the fictional local preview. They are not Wix provider screenshots.

### Observed settings overview

![wix-settings-and-seo-workspace — Observed settings overview](/research/wix/fixtures/wix-settings-and-seo-workspace--default.jpg)

- **RECONSTRUCTION / CAPTURE:** `default` at 1600 × 1200. SHA-256 `2f3e4f80d654f2010c736ce5afb129d225e02b47dbc424d796a75e081cfa2337`.

## Sources

- **OBSERVED:** Authenticated Wix Settings and SEO routes, inspected 2026-10-07.
