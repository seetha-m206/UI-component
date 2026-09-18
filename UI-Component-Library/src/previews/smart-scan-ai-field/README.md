# AI Smart Scan Field (OCR Upload + Auto-Fill) — reconstructed preview

See `Research-Library/04-Component-Library/zoho-forms/smart-scan-ai-field.md`
for the full research record this is built from. Follows the folder
contract, evidence labeling, and accessibility bar established by
`analytics-dashboard-kpi-bar-map/` and `choices-list-editor/`, adapted for a
two-surface, multi-step field builder/live flow rather than a single
scalar control or a flat data table.

## The central finding this component exists to reproduce honestly

The record's single most important finding is a **confirmed, currently
broken production bug**, not a hypothetical edge case: builder-time sample
extraction works and works accurately, but the exact same AI scan on the
published live/respondent form fails outright with an HTTP 400 and an
explicit error dialog. Per this library's hard rule ("only reconstruct what
the research record actually documents... never silently invent
confirmed-looking behavior for something marked unconfirmed"), this
component's `mode="live"` path **always** reproduces the failure when a
file is uploaded — there is no prop, toggle, or fixture that makes a live
upload succeed, because the record never observed that outcome. Only
`mode="builder"` — the one path the record confirms actually works — ever
shows a populated "Extracted Data" panel.

## Evidence used, in priority order

1. **Authorized Zoho HTML/CSS export** — not available, same as every
   other reconstructed preview in this repo.
2. **Captured DOM/CSS/JS in the record's Technical Data section** — the
   primary source:
   - **Two distinct surfaces, not one.** The record's Structure section
     draws an explicit line between the builder's "Configure Smart Scan"
     modal (dropzone → "Extract data" → "Extracted Data" panel → "Field
     Mapping" table) and the canvas/live-form control ("Choose File" text +
     scan-frame icon + upload/camera icons) — reproduced here as the
     `mode="builder"` vs. `mode="live"` render branches, matching the
     task's own suggested prop shape.
   - **Builder-time extraction genuinely works.** The record: "Uploaded a
     synthetic test image... The AI extracted all 5 fields correctly...
     (Company, Email, Phone, City, Name all matched exactly). Mapped
     'Name' → the form's 'Single Line' field." `DEFAULT_EXTRACTION` and the
     `builder-after-extraction` fixture reproduce that exact 5-field
     dataset and mapping choice for fidelity, even though the underlying
     mechanism is a canned/simulated result, not real OCR (see the
     "Deliberate scoping decision" section below).
   - **Live-form extraction genuinely fails.** The record: "Network
     capture shows the scan call (`performscan`) eventually resolves with
     HTTP 400, and the UI surfaces an explicit error dialog... 'Error
     Occurred! Unable to process the upload, kindly try again.'" That
     exact string is reproduced verbatim in `.errorMessage`, inside a
     `role="alert"` region that appears automatically the moment a file is
     uploaded in `mode="live"` — not gated behind any prop that could
     suppress it.
   - **The base upload still succeeds; only the AI layer fails.** The
     record: "the uploaded file itself is still retained as a normal
     attachment... only the AI enhancement layer errors out." Reproduced:
     `handleLiveFileSelected` always shows the filename/size thumbnail
     (`showThumbnail`) regardless of the scan outcome, and the
     `live-scan-failure-dismissed` fixture demonstrates the post-dismissal
     state where the attachment is still visibly present with no
     extracted/auto-filled data.
   - **No processing/scanning spinner.** The record: "no visible
     'processing'/'scanning' indicator during the AI call... The AI scan
     step is silent until/unless it fails." No loading/spinner state is
     rendered between file-select and the (builder: success / live:
     failure) outcome — the transition is immediate, per the task's
     explicit instruction not to invent one.
   - **File-format defaults.** The record's Rules & Validation: File Size
     Min 0 KB / Max 10 MB, Allowed File Format(s) defaulted to "All Image
     Types." `accept="image/*"` on both hidden file inputs reflects the
     image-only default; the numeric size/format properties panel itself
     is out of scope for this component's rendered UI (see below).
   - **Hover toolbar has a dedicated re-edit icon.** The record notes a
     third hover-toolbar icon (`elname="editOcrConfig"`) reopens the
     configuration modal after the field already exists on canvas — this
     is a canvas-chrome affordance (the field's own hover toolbar), not
     part of either the modal or the live control themselves, and is out
     of scope for this component (see below).
3. **Screenshots and documented behavior** — no screenshots were captured
   in the source record; the Structure and Actions tables were used to
   confirm the modal's two-pane layout and the live control's icon
   ordering (scan-frame icon left, upload + camera icons right).
4. **Assumptions, clearly flagged**:
   - **The dismiss ("OK") button on the error alert** is not described in
     the record beyond "an explicit error dialog" — some way to close it
     is a practical necessity for a testable, accessible UI, but the exact
     control (a button, its label, whether dismissing allows retrying) is
     this reconstruction's own addition, not a captured detail.
   - **Field Mapping's target-field dropdown options** (`DEFAULT_TARGET_FIELDS`)
     are illustrative synthetic field names, not a captured list of real
     field names from the tested form (only that "Name" was mapped to a
     "Single Line" field is actually documented).
   - **No animated upload-progress bar.** The record notes the raw-file
     upload progress bar exists in the DOM but "completes too fast on a
     small test file to observe" — rather than inventing an animation that
     was never actually seen, this reconstruction skips it entirely and
     shows the completed thumbnail immediately upon file selection.
   - **Drag-and-drop onto the dropzone/live control** is a reasonable,
     low-risk addition (the dropzone visually implies it) layered on top of
     the record's confirmed click-to-browse flow — not independently
     documented as tested in the record.
   - **Responsive/breakpoint behavior** was not observed in the record
     (both the builder modal and the live form were tested at a fixed
     viewport). Collapsing the two-pane modal to one column at narrow
     container widths is a deliberate improvement for this docs site's
     preview stage, not an observed Zoho breakpoint.

## Deliberate scoping decision: no real OCR/AI

Per the task's explicit instruction, there is no real image analysis
anywhere in this reconstruction. `sampleExtractionResult` is a fixed,
caller-overridable canned dataset returned unconditionally by
`handleExtract()` the moment "Extract data" is clicked in builder mode —
it does not inspect the uploaded file's actual pixel content at all. This
is documented in the prop's own JSDoc (`sampleExtractionResult`) and in
`onExtract`'s doc comment, not just here, so it's visible to anyone reading
the component's type signature, not only this README.

## Deliberate scoping decision: live-mode failure is not a toggle

As emphasized above, `mode="live"` uploading a file always transitions to
`uploaded-scan-failed` — there is intentionally no prop like `scanFails:
boolean` defaulting to `false`, because that shape would imply a "success"
branch the record never observed and this reconstruction must not invent.
The only state variation available in live mode is _when in the flow_ the
fixture starts (`initialLiveState`: before upload, mid-failure, or
post-dismissal) — never _whether_ the failure happens.

## What NOT built (deliberately out of scope)

- **Real OCR/AI** — see above.
- **The Properties panel's mobile-app-specific "Scanner Input" section**
  (Camera modes, Use Photo Gallery, Annotate, Use Timer, Enable
  Compression, Geo-stamping) — per the task, this is builder configuration
  chrome for the mobile app, not part of the field's own rendered web UI.
  Not implemented, not summarized as a static block either (the task marks
  this optional and it would add surface area with no corresponding
  interaction to verify).
- **The live control's camera icon is rendered but inert.** It's part of
  the record's captured DOM (`.cameraIconCont`, `icon-camera`) and kept
  here for visual fidelity, but per the record it "implies direct capture
  on mobile" — there is no camera capture flow to reconstruct on a desktop
  web docs preview, so the icon is `aria-hidden` and non-interactive with a
  `title` explaining why, rather than silently doing nothing on click (or
  worse, faking a capture flow that was never observed).
- **The field's own hover toolbar and its dedicated "reopen config" edit
  icon** (`editOcrConfig`) — that's canvas-chrome surrounding a _placed_
  field, not either of the two surfaces this component renders (the
  configure modal, or the upload control itself).
- **File-size/format validation enforcement** — the Min 0 KB/Max 10 MB and
  "All Image Types" rules are documented as Properties-panel defaults, not
  as interactive validation behavior that was tested (e.g., what happens
  uploading an 11 MB file was not part of this pass) — not implemented as
  live validation here.

## Other deviations from what was actually observed

- Zoho's generated class names/attributes (`tempFrmWrapper`, `scanIcon`,
  `imageOptionsCont`, `uploadIconCont`, `cameraIconCont`,
  `elname="editOcrConfig"`, etc.) are replaced with scoped CSS Module
  classes and plain React props/state. None of Zoho's original CSS or
  markup is reused verbatim.
- The record describes the live-form error surface only as "a generic
  browser-style alert dialog" — this reconstruction renders it as an
  in-page, accessible `role="alert"` region rather than a native
  `window.alert()`, which would be both untestable and unstylable. This
  mirrors this repo's existing precedent of replacing native browser
  dialogs with accessible in-page equivalents (e.g. `choices-list-editor`'s
  `role="alert"` validation message).
- Both hidden file inputs (`sampleInputRef`, `liveInputRef`) are real
  `<input type="file" accept="image/*">` elements, not a fabricated
  drag-only or button-only interaction — clicking "Choose Image"/"Choose
  File"/the upload icon, or dropping a file onto the dropzone/control, all
  route through the same real file-selection event, matching how a real
  browser file upload works.

## What this is not

Not the original Zoho Forms component, not pulled from any Zoho source, and
not guaranteed to match current production behavior — see the in-app
notice on the Preview tab, and the record's own `evidence_state`
(`source_reviewed`, not `runtime_verified`). The live-mode failure
reproduced here reflects a bug confirmed at one point in time
(2026-09-17); it is not a guarantee that Zoho Forms' live Smart Scan
extraction is still broken today.
