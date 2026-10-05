# Reconstructed preview: JotForm Smart PDF Forms

Source record: `Research-Library/04-Component-Library/jotform/jotform-smart-pdf-forms.md` (JF9, 2026-10-05).

## Evidence priority

Reproduced faithfully from the source record's live testing session (a custom-built test PDF uploaded,
converted, filled, previewed, and submitted for real):

- The distinct dark-navy 4-tab UPLOAD / BUILD / SETTINGS / PUBLISH mode bar — confirmed to be visually
  differentiated from both Form Builder's own orange mode bar (`jotform-app-shell-builder`) and Jotform
  Sign's green bar (`jotform-sign-builder`).
- The 4-step sequential conversion checklist ("Processing your document" → "Detecting fields and
  content" → "Building your online form" → "Finalizing everything…"), each step checked off in order,
  landing on BUILD with the generated form once complete — matching the source's confirmed "no visible
  way to skip, cancel mid-way, or correct a misdetection before the form is generated" finding (no skip
  control is offered here either).
- The confirmed field-inference accuracy results from the record's live test PDF ("Coffee Club
  Membership Signup"): a compound Full Name field with separate First Name / Last Name sub-inputs, a
  genuine Email field, two Date-type fields (Date of Birth, Date Signed), and a drawable Signature field.
- **The confirmed real semantic nuance, reproduced deliberately — not "fixed":** the source document's
  two independently-labeled checkbox lines ("Sign me up for the weekly newsletter" and "I agree to the
  Terms & Conditions") are merged into **one** multi-option "Checkbox" field, not two separate boolean
  fields. This preview renders both options inside a single `<fieldset><legend>Checkbox</legend>`
  group, matching the confirmed real UI and the confirmed Tables-view finding (both labels appear as
  chips inside one column, not two columns).
- **The confirmed round-trip fidelity on "Preview PDF":** the split First Name / Last Name values are
  shown re-merged back into one `"Full Name: {First} {Last}"` line, matching the original document's
  single-line layout, and a signed signature gets an unprompted `"Signed at: {timestamp}"` stamp
  rendered beneath it — an audit-trail touch the record notes was "not requested or configured anywhere."
- **The confirmed minor friction point:** returning from Preview PDF back to the live form clears the
  drawn signature (it has to be redrawn before a real submission). This preview reproduces that exact
  behavior in `backToForm()` rather than smoothing it over.
- The SETTINGS pane's toggles reproduce the record's confirmed defaults: "Uploaded document connection,"
  "Show the document thumbnail on the welcome page," and "Enable Preview PDF button at the end of the
  form" are all checked by default; "Add download PDF button on thank you page" is not.

## Deliberate scope reductions

- **The upload step is fully simulated — there is no real file parsing.** Clicking "Upload a Document"
  does not accept, read, or inspect any file; it runs a timed checklist animation (`stepDelayMs` per
  step) and then reveals a hardcoded fixture result (the exact field set confirmed in the source
  record's live test). This matches this codebase's established "reconstruction, not live AI" precedent
  used elsewhere (e.g. `jotform-app-shell-builder`'s Form Copilot chips, `typeform-ai-chat-to-create`).
  No network call is made and no `dangerouslySetInnerHTML` is used anywhere in this component.
- **BUILD / SETTINGS / PUBLISH tabs are gated behind a converted document.** The source record doesn't
  describe what these tabs show before a document is uploaded (the CTA always provisions a fresh
  `/upload`-step form), so rather than inventing empty-state content for them, this preview disables
  those tabs until `initialFormGenerated` is true or the pipeline completes — a reasonable, clearly
  scoped-down choice, not a literal reconstruction of untested behavior.
- **Only `.pdf` upload was tested in the source record** (the real UPLOAD tab also accepts `.docx`,
  `.jpeg`, `.png`, `.heic`, per the record's own Rules & Validation section) — this preview's demo
  button doesn't distinguish file types at all, since no real file is read.
- **The Preview PDF view is a simplified read-only summary, not a pixel-faithful PDF reproduction.** The
  source record confirms genuine visual/layout fidelity against the original uploaded document; fully
  reproducing that would require rendering an actual document image, which is out of scope for a
  self-contained client-side preview. This preview instead reproduces the two concrete, confirmed facts
  that matter functionally — the full-name re-merge and the signature timestamp stamp — in plain text.
- **"Customize PDF" (which the source record says opens Jotform's separate PDF Editor product) is not
  reproduced** — the record itself flags that relationship as identified but not explored, so no
  behavior is invented for it here.
- Following this codebase's established precedent (`jotform-input-table-field`, `entries-kanban-view`):
  this component is **not** `value`/`onChange`-shaped. All interaction (the upload pipeline, tab/mode
  switching, form field edits, Preview PDF, signing) is managed with fully internal `useState`, so the
  hosted preview panel is genuinely interactive without a dedicated controlled wrapper. `initialMode`,
  `initialFormGenerated`, `initialView`, and `initialValues` only seed the starting state for each
  fixture; they are not kept in sync with the component afterward.
