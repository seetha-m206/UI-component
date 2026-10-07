---
component: "Duda Form Submission Configuration"
ui_category: "Forms > Submission"
source_product: "Duda"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Duda Form Submission Configuration

## Location

Pages → Contact. Close the Pages panel before selecting the form to avoid canvas occlusion. Select form in nested preview document → Manage Form → Submission. Contact Form Content floats above the design inspector. Tabs are Form Items, Submission and Integrations. Submission exposes New submission notification, Actions after submission and Tracking, each opening a separate configuration pane.

## Screenshot

**OBSERVED:** Local `80-form-name-field-rules.jpg`, `81-form-after-submission.jpg`, `82-form-tracking.jpg`. Earlier `57-form-submission.jpg` records the unopened action groups.

## Actions

| Element/action | Function | Result/state | Outcome boundary |
| --- | --- | --- | --- |
| Manage Form click | Opens content panel | Form Items selected, field list visible | Does not submit visitor data |
| Name field click | Opens field settings | Label Name, type Text, empty placeholder, Required field, Start new line, 100% size | No setting changed |
| Submission tab click | Changes tab | Three submission groups | Selected state exposed in DOM |
| Actions after submission click | Opens settings pane | Thank you and Error message rich-text editors plus redirect setting | Configured copy, not an actual delivery result |
| Tracking click | Replaces settings pane | Form conversion code textarea and Learn more | No code entered or executed |

## Behavior & States

Thank you copy: Thank you for contacting us. We will get back to you as soon as possible. Error copy: Oops, there was an error sending your message. Please try again later. Both are editable rich-text configuration, not screenshots of a completed or failed submission. Redirect to a page after submission is visible. Its destination and enabled state were not established. Notification recipients were not copied or changed.

Form Items shows Name, Phone and Select Service, Add field, Form Button text Get an estimate, five reCAPTCHA presentation choices, and disabled Form title Contact Us. No reCAPTCHA was solved, form sent or notification delivered.

### Local preview fixtures and state provenance

**RECONSTRUCTION:** Interactive local preview registered as `duda-form-submission-configuration`, rendered by `src/previews/duda-shared/DudaPreview.tsx`. The Code tab includes renderer, CSS, registry and full fixture catalogue. All names, site content and inputs are fictional. No provider calls, upload, publication, notifications or persistent Duda mutations are wired. Local component state resets when the fixture remounts.

| Fixture | Evidence class | Source reference |
| --- | --- | --- |
| default | OBSERVED structure · fictional content | 81-form-after-submission.jpg |
| tracking | OBSERVED structure · Tracking | 82-form-tracking.jpg |
| disabled | RECONSTRUCTION · disabled controls | Synthetic local state, provider not observed |

**RECONSTRUCTION:** Harness viewports: Desktop 1105px, Narrow 720px, Mobile 390px. These are local preview sizes, not a claim of provider breakpoints. Props: `componentId` required, `initialState` optional, `disabled` optional. Disabled controls and locally invented loading/validation/populated states are not provider evidence.

## Technical Data

Tracking control is a TEXTAREA with no explicit role attribute, enabled and editable. Computed style: Label Sans 13px, white background, black text, 1px solid rgb(226,226,228) border, 4px radius. Captured rectangle 286×100 CSS pixels. Placeholder says the pasted code executes on successful submission. This is product copy only. The computed transition value was all, without a measured animation duration. Receipt: `technical-deep-dom-css.json`.

## Needs verification

Field required enforcement, notification delivery, redirect execution, spam protection, conversion-code execution, integration authorization and data transfer, actual submission success/failure states, API responses and tracking consent behavior remain open. No form or integration settings changed during this pass.

## Evidence boundary

**OBSERVED:** Authenticated Duda UI on M5, 7 October 2026, in the fictional unpublished research site `d7a8e0dc`. The site remains private. Screenshots, rendered DOM and accessibility snapshots are retained locally.

**NEEDS VERIFICATION:** Internal JavaScript functions and application state stores were not inspected. Network records contain method, origin, path, status and event sequence only. No request bodies, response bodies, headers or query strings were retained. HTTP success does not establish a complete API contract, authorization enforcement or downstream execution.

**RECONSTRUCTION:** Use fictional Maple Studio content and local handlers. Reproduce observed controls and states, label simulated outcomes, and do not connect publication, notifications or external services.

## Sources

- **OBSERVED:** `Internal/scratch-2026-10/duda/evidence-index-deep.json`, `action-traces-deep.json`, and `screen-action-audit.md`.

**OBSERVED:** Per-record screenshot/DOM hashes and per-state evidence associations are in `Internal/scratch-2026-10/duda/preview-evidence-matrix.json`. Source screen files: 81-form-after-submission.jpg, 82-form-tracking.jpg.

**RECONSTRUCTION:** Local preview implementation and 156 labelled fixtures are separate from source-provider evidence. Browser verification receipts are in `preview-runtime.json`.

## Structure

**OBSERVED:** See the dated Location, Screenshot and Actions sections for screen anatomy and controls. New submission notification, Actions after submission, Tracking.

## Rules & Validation

**OBSERVED:** Provider rules are limited to the dated action results above. **RECONSTRUCTION:** Local preview validation is a fixture aid. It does not establish backend constraints.
