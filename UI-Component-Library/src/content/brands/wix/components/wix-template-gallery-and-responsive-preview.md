---
component: "Wix Template Gallery and Responsive Preview"
ui_category: "Content Creation > Template Selector"
source_product: "Wix"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Portfolio template cards with View and Edit actions plus a reversible desktop and mobile preview modal."
---

# Wix Template Gallery and Responsive Preview

## Structure

- **OBSERVED:** Template discovery and Generate a Site Design were presented as separate paths.
- **OBSERVED:** Portfolio cards showed imagery, title, style descriptor, View and Edit.
- **OBSERVED:** Template Preview provided desktop and mobile controls, Edit Site and close. Mobile rendered the sample inside a device frame with a Menu control.

## Behavior & States

- **OBSERVED:** Breakpoint switching updated the preview without leaving the modal. Closing returned to the gallery.
- **NOT OBSERVED:** Tablet, orientation, failures, installation, draft persistence and editing outcome.
- **OBSERVED:** View was used; Edit Site was not activated.

## Reconstruction Guidance

- **RECONSTRUCTION:** Keep preview reversible and make the boundary between inspection and editing explicit.

## Evidence

- **NEEDS VERIFICATION:** No durable provider screenshot was archived.
- **OBSERVED:** Authenticated Wix design gallery and Template Preview, inspected 2026-10-07.

## Local Preview Captures

- **RECONSTRUCTION:** These images capture the fictional local preview. They are not Wix provider screenshots.

### Observed gallery and preview

![wix-template-gallery-and-responsive-preview — Observed gallery and preview](/research/wix/fixtures/wix-template-gallery-and-responsive-preview--default.jpg)

- **RECONSTRUCTION / CAPTURE:** `default` at 1600 × 1200. SHA-256 `4dbb1440f5ace0e995f2d0693de8a0af178c03e7e63abbc3c4c1945614d01143`.

## Sources

- **OBSERVED:** Authenticated Wix provider UI, inspected 2026-10-07. No durable provider screenshot or network trace was archived.
