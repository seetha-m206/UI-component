---
component: 'AI Smart Scan Field (OCR Upload + Auto-Fill)'
ui_category: 'Forms > Form'
source_product: 'Zoho Forms'
last_verified: '2026-09-17'
evidence_state: 'source_reviewed'
status: 'partial'
summary: 'AI/OCR field that extracts data from an uploaded image and auto-fills mapped form fields. Builder-time sample extraction works accurately; the live respondent-form scan path currently fails with an HTTP 400 — a confirmed gap between demo and production behavior.'
---

# Component: AI Smart Scan Field (OCR Upload + Auto-Fill)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> ⚠️ **Account-level side effect, left in place.** Adding this field for the first time triggered an org-wide gate — "AI Assistant is not enabled for your organization" — requiring explicit acceptance of Zoho's AI Terms of Use before Smart Scan could be added at all. This is an account-level setting, not scoped to this one field. Acceptance was explicitly approved before proceeding and is **not reverted** — AI Assistant remains enabled for this org going forward, as an intentional, approved action rather than a per-test configuration.

## Location

- **Product:** Zoho Forms
- **Screen(s) it appears on:** Form builder → Field Palette → "AI" category → "Smart Scan". Builder canvas (pre- and post-configuration), and both the builder's own sample-extraction flow and the published live/respondent form were tested.

## Structure

Two distinct surfaces, not one:

- **Builder canvas (before configuration):** clicking the "Smart Scan" tile does not insert a field directly — it first opens a **"Configure Smart Scan"** modal: _"Automatically extract data from the uploaded image using our in-house AI model, map it to form fields, and let respondents auto-fill forms with ease."_ Left pane: an image dropzone ("Upload an Image" / "Choose Image") plus an "Extract data" button; once an image is uploaded, an "Extracted Data" panel appears below showing AI-extracted key–value pairs. Right pane: a "Field Mapping" table — pick an extracted key, map it to an existing form field, "+" to add more rows.
- **Canvas (after configuration):** renders as a standard-looking upload control — "Choose File" with a distinct scan-frame icon on the left, plus separate upload and camera icons on the right (camera icon implies direct capture on mobile).
- **Live/respondent form:** visually identical to the canvas rendering. Uploading a file shows a thumbnail + filename + size, same as a normal File Upload field.

## Actions

| Element                                                                | User Action                           | Function                                                      | Result                                                                                                                           | Destination screen/state   |
| ---------------------------------------------------------------------- | ------------------------------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| "Smart Scan" palette tile                                              | Click                                 | Opens `showOcrConfigDialog('addField', this)`-family dialog   | "Configure Smart Scan" modal opens (not a direct field insert)                                                                   | Same screen, modal overlay |
| "Extract data" button (modal)                                          | Click, after uploading a sample image | `POST .../ocrsampleresponse`                                  | "Extracted Data" key–value panel populates; enables mapping rows in the right pane                                               | Same modal                 |
| Field's hover toolbar → dedicated Edit icon (`elname="editOcrConfig"`) | Click                                 | `ZFForm.formBuilder.showOcrConfigDialog('updateField', this)` | Reopens the sample-image/field-mapping configuration modal for an already-placed field                                           | Same screen, modal overlay |
| "Choose File" (live form)                                              | Upload a file                         | Raw upload, then AI scan call (see Technical Data)            | Builder-time sample extraction works; **live respondent-form extraction fails** with an error dialog (see Action → Result below) | Same screen                |

## Behavior & States

- Builder-time sample extraction: works, and accurately — see Technical Data.
- Live respondent-form extraction: fails — the uploaded image itself is retained as a normal file attachment even after the AI scan errors out (the base File Upload behavior degrades gracefully; only the AI enhancement layer errors out).
- Loading/processing state: no visible "processing"/"scanning" indicator during the AI call — the only visual feedback element present in the DOM is the generic upload-progress bar shared with the standard File Upload field (for the raw file transfer, not the AI step), which completes too fast on a small test file to observe. The AI scan step is silent until/unless it fails.
- Error state: a generic browser-style alert dialog — _"Error Occurred! Unable to process the upload, kindly try again."_ — with no inline error state on the field itself.

## Rules & Validation (Properties panel)

- File Size: Min 0 KB / Max 10 MB (default).
- Allowed File Format(s): dropdown, defaulted to **"All Image Types"** — image-only, unlike the generic File Upload field which typically also allows documents.
- Mandatory checkbox (off by default), standard Visibility (Show/Hide/Disable).
- Scanner Input – Mobile App section (mobile-app-specific, not web): Default Mode (Rear Camera / presumably Front Camera too), Use Photo Gallery (on by default), Annotate, Use Timer, Enable Compression, Switch between Camera modes (on by default).
- Geo-stamping (Mobile Apps only): Address, Latitude & Longitude, Date-Time — all off by default.
- Privacy: Mark as Personal, Encrypt — both off by default, same options as the standard File Upload field.

## Technical Data

> OBSERVATION, directly captured via browser DOM/JS/network inspection (2026-09-17), Claude browser extension session (~61 actions across builder configuration and live-form testing), plus 5 ran commands (network capture).

- **DOM:** Canvas wrapper: `<li class="tempFrmWrapper file_upload sortenabled selectedType" fieldtype="SMART_SCAN" link_name="SmartScan">` — confirms Smart Scan is built as a variant of the same `file_upload` field family (Properties panel overlaps heavily with the standard File Upload field), with OCR/AI as an added layer. Upload control markup: `.uploadContainer > .imageOptions > .imageOptionsCont`, left side a `.scanIcon` SVG (`icon-OCR-Choose-file`) + "Choose File" text, right side `.uploadIconCont` (`icon-upload`) and `.cameraIconCont` (`icon-camera`). Live-form wrapper carries the field-family plumbing shared with File Upload: `.progressBarWrapper > .progressBarCont > .progressBar`, `.imageCompressLoad`, etc.
  Hover toolbar has three icons, not the usual two: Settings (gear → standard Properties panel), a dedicated Edit icon (`elname="editOcrConfig"`) that reopens the configuration modal after the field exists, and Delete — so the AI mapping config is independently re-editable later, not buried only at creation time.

- **Action → Result — two different outcomes depending on context:**
  - **Builder-time sample extraction: WORKS, and accurately.** Uploaded a synthetic test image (a plain rendered "Sample Test Form" with Name/Email/Phone/Company/City — no real personal data). The AI extracted all 5 fields correctly and structured them as key–value pairs (Company, Email, Phone, City, Name all matched exactly). Mapped "Name" → the form's "Single Line" field and saved; the field was inserted onto the canvas successfully.
  - **Live respondent-form extraction: FAILS.** Uploading the same test image on the published live form does not auto-fill the mapped field. Network capture shows the scan call (`performscan`) eventually resolves with **HTTP 400**, and the UI surfaces an explicit error dialog. Reproduced consistently across two separate upload attempts. Root cause not determinable from the client side — plausible explanations include a plan/quota gate specific to production (non-"sample") scans, a payload-format mismatch, or a backend issue, but this is unconfirmed; reporting the observed behavior, not a diagnosed cause.
  - Open question, not settled: whether mapping an extraction key to a field nested inside a Subform (as tested here — "Name" → the Subform's "Single Line") is actually supported at auto-fill time, or is itself part of the problem. Worth a retry with a top-level (non-subform) mapping target.

- **Network — three distinct endpoints, confirming genuine server-side AI/OCR processing (not client-side):**

```
POST https://forms.zoho.in/{account}/form_id/{formId}/ocrsampleresponse                                          → 200  (builder sample-extraction)
POST https://in2-upload.zoho.in/forms/v2/stream/upload                                                            → 200  (live-form raw file upload, dedicated regional subdomain)
POST https://forms.zoho.in/_zformc/{account}/form_id/{formId}/field/SmartScan/performscan?filepath=...            → 400  (live-form AI scan — the failure)
```

All three calls go through Zoho's own domains (`forms.zoho.in`, `in2-upload.zoho.in`) — **no third-party AI vendor endpoint is exposed client-side**; whatever "in-house AI model" is invoked is fully proxied server-side. The internal naming (`ocrsampleresponse`, `performscan`, `showOcrConfigDialog`) confirms this is branded/implemented internally as OCR.

- **CSS/Animation:** The upload-progress bar carries `transition-property: all` but `transition-duration: 0s` — the same declared-but-inert transition pattern found on nearly every other component in this product, now confirmed to extend to this field type too.

## Recommended Second Pass

- Determine the root cause of the live-form `performscan` 400 — retry with a top-level (non-subform) field mapping target to isolate whether Subform-nested mapping is the actual problem, and check whether a paid-plan/quota gate is involved.
- Capture the exact response body of the 400 (not accessible through the available network-inspection tool this pass).
- Inspect the other file-format/document-scan paths, if any — this pass only tested image uploads.

## Cross-Component Pattern Note

- **OBSERVATION:** Smart Scan is architecturally a File Upload field with (a) an AI/OCR extraction+mapping layer bolted on at both build-time and fill-time, and (b) full inheritance of the product's mobile field-inspection feature set (camera modes, geo-stamping, encryption) — consistent with this account's "Toggle Inspection Test" / field-inspection use case.
- **OBSERVATION:** This is the second AI-branded feature captured in this project (after the Deep Insights/Advanced-Metrics gate) to route entirely through first-party Zoho domains rather than exposing a third-party vendor endpoint client-side.

## Competitor Comparisons

| Competitor                                                                                                                                                                                                       | Same component implementation | Strengths | Weaknesses |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | --------- | ---------- |
| _(TODO — not yet researched — Typeform's AI capabilities researched so far are chat-based form generation ([[typeform-ai-chat-to-create]]), not document/image OCR extraction; no direct equivalent identified)_ |                               |           |            |

## Best Observed Approach

- TODO — needs a competitor's equivalent OCR/document-extraction field captured before a comparative judgment can be made. Worth flagging regardless: the builder-time "sample extraction" path works reliably while the live respondent-facing path fails outright — a real, currently-broken gap between the feature's demo-time and production behavior.

## Sources

- OBSERVATION: Live exploration of Zoho Forms (forms.zoho.in), form builder → AI category → Smart Scan (Configure modal, canvas, live/respondent form), via Claude browser extension, 2026-09-17 (~61 actions, 5 ran commands for network capture).
- Note on account state: the org-wide "AI Assistant" Terms-of-Use acceptance triggered by this investigation is a standing, approved side effect — see the callout at the top of this record.
- Restoration: the Smart Scan field itself was deleted from the canvas after testing — the form is back to ending at Subform → Single Line, matching its state before this task. No real personal data was used at any point (only synthetic placeholder values), and the form's Submit button was never clicked.
