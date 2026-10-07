---
component: "Duda Contact Form Content Tabs"
ui_category: "Forms > Form Builder"
source_product: "Duda"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Manage Form opens Contact Form Content with Form Items, Submission and Integrations tabs. Items lists Name, Phone and Select Service, Add field, Form Button text, reCAPTCHA-position choices and disabled Form title."
---

# Duda Contact Form Content Tabs

## Location

- **OBSERVED:** Official authenticated Duda editor and dashboard on 2026-10-07, using the fictional disposable unpublished research site. Evidence is local to M5.

## Screenshot

- **OBSERVED:** `Internal/scratch-2026-10/duda/56-form-content.jpg` with associated rendered DOM and accessibility snapshots. Provider account fields stay in local evidence and are never fixture data.

## Structure

- **OBSERVED:** Manage Form opens Contact Form Content with Form Items, Submission and Integrations tabs. Items lists Name, Phone and Select Service, Add field, Form Button text, reCAPTCHA-position choices and disabled Form title.

## Actions

| User action | Visible outcome |
| --- | --- |
| Safe research action | **OBSERVED:** Opened Manage Form and switched Submission and Integrations. Submission groups New submission notification, Actions after submission and Tracking. No form field or action was modified. |


### Dated deeper action evidence

 — 7 October 2026

### Form content actions

| Element | Trigger | Result and verification limit | Screenshot IDs |
| --- | --- | --- | --- |
| Manage Form | Click | Content panel with Form Items, Submission, Integrations | 56, 80 |
| Name field | Click | Text label/type, placeholder and field sizing controls | 80 |
| Submission | Click | Notification, after-submission and tracking groups | 57, 81, 82 |
| Integrations | Click | Provider choices only, no connection | 58 |

- See [duda-form-submission-configuration](duda-form-submission-configuration.md) for detailed preconditions, state traces, rules and remaining gaps.

**OBSERVED:** This dated addendum supersedes earlier no-collection/no-page-creation scope only for the fictional private research site. Other historical observations remain unchanged.


## Behavior & States

- **OBSERVED:** Opened Manage Form and switched Submission and Integrations. Submission groups New submission notification, Actions after submission and Tracking. No form field or action was modified.
- **NEEDS VERIFICATION:** Required validation, CAPTCHA execution, success/error messages and submission delivery remain unverified.

### Local preview fixtures and state provenance

**RECONSTRUCTION:** Interactive local preview registered as `duda-contact-form-content`, rendered by `src/previews/duda-shared/DudaPreview.tsx`. The Code tab includes renderer, CSS, registry and full fixture catalogue. All names, site content and inputs are fictional. No provider calls, upload, publication, notifications or persistent Duda mutations are wired. Local component state resets when the fixture remounts.

| Fixture | Evidence class | Source reference |
| --- | --- | --- |
| default | OBSERVED structure · fictional content | 56-form-content.jpg |
| validation | RECONSTRUCTION · local required validation | Synthetic local state, provider not observed |
| disabled | RECONSTRUCTION · disabled controls | Synthetic local state, provider not observed |

**RECONSTRUCTION:** Harness viewports: Desktop 1105px, Narrow 720px, Mobile 390px. These are local preview sizes, not a claim of provider breakpoints. Props: `componentId` required, `initialState` optional, `disabled` optional. Disabled controls and locally invented loading/validation/populated states are not provider evidence.

## Rules & Validation

- **OBSERVED:** Only displayed constraints and states in this record were verified. The research project remains unpublished.
- **NEEDS VERIFICATION:** Required validation, CAPTCHA execution, success/error messages and submission delivery remain unverified.

## Technical Data

- **OBSERVED / DOM:** Associated DOM and accessibility snapshots preserve rendered labels, roles, controls and selected, pressed or disabled state when exposed.
- **OBSERVED / navigation:** Editor canvas is a nested preview document. Changes in visible panel or device context are recorded in the matching snapshots.
- **NEEDS VERIFICATION:** Internal JavaScript handlers, API request/response contracts, backend validation and authorization enforcement were not captured. Displayed copy does not prove successful execution.

## Reconstruction Guidance

- **RECONSTRUCTION:** Use fictional Maple Studio sites, clients and content in a local implementation. Documented settings values are observed template examples. No live integration, notification, publication or destructive handler is implied. The local preview is registered below. Its interactions are reconstruction and do not establish provider outcomes.

## Needs Verification

- **NEEDS VERIFICATION:** Required validation, CAPTCHA execution, success/error messages and submission delivery remain unverified.

## Sources

- **OBSERVED:** Official Duda UI in Codex in-app browser, 7 October 2026. Dated, hashed local evidence index: `Internal/scratch-2026-10/duda/evidence-index-continuation.json`.

**OBSERVED:** Per-record screenshot/DOM hashes and per-state evidence associations are in `Internal/scratch-2026-10/duda/preview-evidence-matrix.json`. Source screen files: 56-form-content.jpg, 80-form-name-field-rules.jpg.

**RECONSTRUCTION:** Local preview implementation and 156 labelled fixtures are separate from source-provider evidence. Browser verification receipts are in `preview-runtime.json`.
