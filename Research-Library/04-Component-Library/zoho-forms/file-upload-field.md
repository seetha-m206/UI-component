---
component: "File Upload Field"
ui_category: "Data Input > File upload"
source_product: "Zoho Forms"
last_verified: "2026-09-18"
evidence_state: "source_reviewed"
---

# Component: File Upload Field

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location
- **Product:** Zoho Forms
- **Screen(s) it appears on:** Form builder (Properties panel configuration) and the published respondent-facing form; uploaded files surface in Entries → All Entries table and the single-record "Record Summary" panel. Tested end-to-end: added the field, configured restrictions, submitted a real response with an actual file through the public form URL, inspected the result in Entries.

## Structure
- **Respondent-facing widget:** a dashed-border box labeled "Choose File" with an upload-arrow icon. Functions as click-to-browse (native file input). The dashed border visually implies a drop zone, but native OS drag-and-drop could not be exercised via this session's automation — drag support is inferred from styling, not directly confirmed.
- **No restrictions surfaced up front:** no helper text near the widget states allowed types or a size cap — the respondent only discovers a restriction after violating it.
- **Builder-side configuration (Properties panel):**
  - Allowed File Format(s) — free-text extension list, comma-separated (e.g. `pdf` or `pdf,png`); default is "all file types accepted."
  - Upload Limit Min/Max — file count (tested field had Max = 1, i.e. single-file by default).
  - File Size Min/Max — independent unit dropdowns (KB/MB) per bound.
  - File Name — a custom naming-pattern field.
  - Privacy toggles — "Mark as Personal" and "Encrypt" — sitting below Visibility (Show/Hide/Disable), the same three-state visibility pattern seen elsewhere in the builder.
- **Entries-side display:** a generic grey file-icon placeholder (not a real image thumbnail, even for a genuine image file) plus a truncated filename, in both the table cell and the Record Summary panel.

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| "Choose File" widget | Click, select a valid file | Uploads immediately | Exactly one POST fires the instant the file is chosen — **well before Submit is clicked**. No visible progress bar/percentage anywhere in the DOM. | Same screen |
| "Choose File" widget | Select an invalid-type file (restrictions configured) | Uploads, then rejects at UI level | A red-bordered file row + inline red text ("The following file types are supported: pdf."). See Rules & Validation for the upload-before-rejection finding. | Same screen |
| Submit button, while a type error is showing | Click | **No-op** | No request fires, no navigation, no "Thank you" screen — the page stays on the same error. Confirmed genuinely blocking, not cosmetic. | Same screen |
| Entries table cell (hover) | Hover | Reveals hidden controls | Eye ("preview") and download icons appear — invisible by default, no persistent affordance signals the cell is interactive at rest. | Same screen |
| Eye icon (Entries cell) | Click | Opens lightbox | Full-screen lightbox with zoom in/out controls, filename header, its own download button, and a filmstrip thumbnail strip — a real media-preview surface, not a bare link. | Same screen (lightbox) |

## Behavior & States
- **Valid upload:** one XHR POST fires the instant a file is chosen (confirmed via an injected XHR interceptor), independent of the Submit click. The interceptor's progress event fired only once with `loaded === total` — the small (~16–18 KB) test file was reported as fully sent in a single tick, too fast for any determinate progress UI to matter at this size. Whether a real progress bar exists for large/slow uploads is **unconfirmed**.
- **Completed-file row:** a static row — generic file-icon thumbnail + filename + size + an "×" remove control. No visual distinction between file types in this row's icon.
- **Invalid-type rejection:** genuinely pre-submit-blocking at the UI level (Submit does nothing while the error shows), even though the file's raw bytes already reached the server before the rejection — see Technical Data.
- **Entries hover state:** eye/download icons are hidden until hover; no resting-state indicator that the cell holds an interactive attachment.

## Rules & Validation
- Allowed-format and size limits are configured per-field in the builder; none are surfaced to the respondent before a violation.
- **Upload happens ahead of / independent of client-side type validation** — the POST to the file-streaming endpoint fires and returns 200 regardless of whether the chosen file passes the allowed-format check; only the UI-level attachment is refused when the type doesn't match.

## Technical Data
> OBSERVATION, directly captured via browser DOM/JS/network inspection (injected XHR interceptor), Claude browser extension session, 2026-09-18.

- **Network:** `POST https://in2-files.zohopublic.in/forms/v2/stream/publicupload` — a direct XHR POST to a **dedicated file-streaming subdomain**, separate from the form-page host (`forms.zohopublic.in`). A single request with a single progress event — **not chunked, not a pre-signed-URL-redirect flow**.
- **Response bodies were not inspectable** — this session's own privacy redaction (cookie/query-string data) blocked the read — so the returned file-token/reference format used to later associate the upload with the submitted entry is **unconfirmed**.
- **Upload-before-validation confirmed via network capture:** on an invalid-type selection, the same streaming POST still fires and returns 200 *before* the type check rejects the attachment — the raw bytes are already streamed to Zoho's file tier independently of (or ahead of) the client-side extension check. This is a real technical-architecture finding, not just a UI observation: bad files reach the server regardless of whether they're ultimately accepted into the form response.
- **State change:** the completed upload updates the field's local UI state (row appears) with no visible confirmation round-trip beyond the streaming POST's own response.

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| *(TODO — not yet researched)* | | | |

## Best Observed Approach
- TODO — needs at least one competitor's equivalent file-upload field captured before a comparative judgment can be made. Worth flagging as a candidate weak point regardless of competitor comparison: uploading bytes to the server *before* client-side type validation runs is a real, measurable inefficiency (and a minor exposure — invalid files still land in Zoho's file storage even though they're never attached to a submission) — a validate-then-upload order would avoid both.

## Cross-Component Pattern Note
1. **Upload-before-validation** is a genuinely new technical-architecture finding in this product, distinct from any prior toggle/card-list/ARIA pattern already catalogued — worth checking for the same ordering on other upload surfaces if any are captured later (e.g. Signature field, if it supports file-based signatures).
2. **Hidden-until-hover interactive affordances** recur here (Entries cell's eye/download icons) — a softer, non-accessibility-specific version of the "looks static, is actually interactive" pattern also seen in [[notification-settings-editor]]'s Field Labels popup (there the gap runs the other way: looks interactive, isn't).

## Sources
- OBSERVATION: Live exploration of Zoho Forms (forms.zoho.in), File Upload field builder configuration + published respondent form + Entries table, via Claude browser extension, 2026-09-18. Network capture via an injected XHR interceptor.
