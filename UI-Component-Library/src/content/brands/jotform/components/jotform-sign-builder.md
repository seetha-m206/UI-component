---
component: "Jotform Sign (Sign Builder editor, signer model, send flow, status tracking)"
ui_category: "Application Layout > Sign Builder Shell + E-Signature Workflow"
source_product: "JotForm"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
status: 'complete'
summary: "A fully separate document-first e-signature product with a genuine multi-signer role system and status tracking surfaced in the regular Tables product rather than a siloed dashboard -- but, like Paperform's Papersign, no sandbox/dry-run send mode was found."
---

# Component: Jotform Sign — Sign Builder Shell + E-Signature Workflow

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **Pass ID: JF6.** This resolves the JF6 brief: a live, from-scratch build of a minimal signable document in Jotform Sign, covering the editor's starting point, the signer model, sandbox/test-mode availability, and whether signing status surfaces outside Sign's own dashboard — direct comparison against [[paperform-signature-papersign]].

> **Reconciliation note (filing pass, 2026-10-05):** the capturing browser-extension session had no file access to this library and flagged its Competitor Comparisons content as "ready to paste" into [[paperform-signature-papersign]] for a human to merge. The filing pass opened that record directly and merged the findings into its actual "Capability | Zoho Forms | Typeform | Paperform | JotForm" table in place, replacing every "not yet depth-tested" cell this pass can now answer — see that record for the merged, canonical comparison table; this file's own Competitor Comparisons section below is kept as the JotForm-side narrative detail.

## Location

Reached from the dashboard's "+ CREATE" → "How would you like to start?" picker → **"E-sign"** card ("Create documents that can be signed on any device") — a sibling top-level option alongside Form, App, Workflow, AI Agent, Table, Report, Board, Website Widget. FACT Also cross-sold persistently via a "Connect to Jotform Sign" widget in the main workspace sidebar (offering Claude/ChatGPT MCP connections, not a direct product link) and via a promotional banner ("Jotform Sign for ChatGPT and Claude") at the top of the dashboard list view.

Once inside, Jotform Sign is its own mode in the same app-shell mode-switcher used by Forms, Tables, Inbox, Report Builder, and Boards — clicking the "Sign Builder ▾" dropdown in the top-left of its own header reveals **Tables / Inbox / Report Builder / Sign Builder / Boards / "Go Back to My Workspace"**, the identical switcher pattern (just with "Sign Builder" highlighted as active instead of whichever mode you're in) that appears across Jotform's other product surfaces. FACT

## Structure

**1. Editor starting point — from-scratch document editor, NOT built from an existing form's fields/answers.** FACT — directly answers brief item 1. The "Create Signable Document" screen offers exactly three starting points: **Upload document** (turn your own file into a signable one), **Use template** (1200+ ready-made templates), or **Create with Sign AI** (AI-generated, powered by the same "Podo"-style assistant infrastructure seen in [[jotform-ai-form-generation]]). There is no fourth option to start from an existing Jotform form's field list or its submitted answers — Sign is architecturally decoupled from Forms at the document-creation step. This test used "Use template" → "Lease Agreement" category → "Simple One Page Lease Agreement Template," a pre-built lease document with placeholder fields already laid out inline within flowing legal-document text (e.g., "First Name"/"Last Name" tags sitting mid-sentence), not a vertically-stacked field list the way a Classic Jotform form is structured. FACT

**2. Distinct app shell from the Form Builder — same structural pattern, different styling and tab set.** FACT Header reads "Jotform | **Sign Builder** ▾ | {Document Title} ▾" in place of Form Builder's "Jotform | Form Builder ▾ | {Form Title}" (see [[jotform-app-shell-builder]]). The secondary mode-tab bar is a solid/gradient green (not Form Builder's orange) with tabs BUILD / SETTINGS / SEND (not BUILD/SETTINGS/PUBLISH) and a "Preview Document" toggle (not "Preview Form") in the same right-aligned position. The left-pane field palette is relabeled "Document Elements" (not "Add Element" → BASIC/PAYMENTS/WIDGETS) with its own distinct, smaller category set: BASIC ELEMENTS (Name, Email, Short Text, Long Text, Date, Address, Phone), SIGNATURE ELEMENTS (Signature, Initials), SELECTION ELEMENTS (Dropdown, Single Choice, Multiple Choice, Number), COMMON ELEMENTS (Company, Job Title, Website, and more below the fold not fully enumerated this pass) — notably absent: no Star Rating, no Input Table/matrix, no payment fields, nothing resembling Form Builder's WIDGETS tab. FACT The right-side floating action buttons (a document/duplicate icon and a green pencil/edit icon) and the "Ask Copilot" chat bar are present here too, confirming the AI-assistant infrastructure from JF5 is shared platform-wide rather than Form-Builder-specific.

## Actions

| Entry point / control | Input | Result |
|---|---|---|
| "+ CREATE" → "E-sign" → "Use template" | Pick a template | Opens Sign Builder BUILD tab with the template's text and pre-tagged fields already placed |
| Signature-field "Me ▾" badge → "Assign field to:" | Pick an existing role or "+ Add new role" | Opens a small role-management popover: "Me" (the logged-in account, pre-bound) + any named custom roles (e.g., "Tenant/Lessee", with its own edit-pencil and delete-trash icons), plus an "+ Add new role" button to create further signer roles |
| SEND tab → "SEND TO SIGN" → RECIPIENTS | Fill signer Name + Email per role row | Prepares a real email-based signature request (see Behavior & States — not actually dispatched this pass) |
| SEND tab → "SEND TO SIGN" → OPTIONS | Toggle Expiration Date / Reminder Emails / Signer Delegation / CC Recipients | Configures the outgoing signature-request email's behavior |
| Mode-switcher → "Tables" | — | Opens an auto-created Table named "Clone of {Document Title}" with Sign-specific tracking columns already provisioned |

## Behavior & States

**3. Signer model is a named-role system local to the document, pre-populated from the account for "Me" — not pulled from a form's submitted answers.** FACT — directly answers brief item 2. Selecting a signature field's "Me ▾" badge opens an "Assign field to:" popover listing "Me" (bound automatically to the logged-in account) and any other roles defined on the document (this template shipped with "Tenant/Lessee" pre-defined), with inline edit/delete controls per role and an "Add new role" action to create more. This is a genuinely multi-signer system — confirmed directly: the template placed two separately color-coded signature blocks (orange "Landlord/Lessor" = Me, purple "Tenant/Lessee" = the second role) each with its own paired Date field. FACT On the SEND tab, the "Manage Signers (2)" panel reflected both roles as separate recipient rows, each needing its own Name + Email, with a "Signing order" toggle available (off by default — meaning simultaneous/any-order signing unless explicitly turned on) and a passcode-style key icon plus a per-signer message/note icon on each row. FACT Unlike Paperform's Papersign (per-signer Name/Email/Phone dropdowns pulled from a form's own submitted answers, confirmed in [[paperform-signature-papersign]]), nothing observed here ties a Jotform Sign role to any Jotform form's submission data — the "Me" row was pre-filled only because it's the account owner's own profile info, and the other role's Name/Email fields were empty, manually-fillable inputs, not a dropdown sourced from form responses. FACT

**4. No sandbox/dry-run mode was found anywhere in the send flow.** FACT — directly answers brief item 3, established by UI inspection without completing an actual send. The SEND → SEND TO SIGN screen's two tabs — RECIPIENTS (signer Name/Email rows, a "Signing order" toggle, the green "Send to Sign" button) and OPTIONS (Expiration Date, Automated Reminder Emails, Signer Delegation, CC Recipients) — contain no toggle, checkbox, or mode labeled "test," "sandbox," "draft send," or equivalent anywhere. The only path to see how the document behaves once sent is to actually send it to a real, real-world-deliverable email address — there is no safe dry-run equivalent visible in the UI. This pass deliberately stopped short of clicking "Send to Sign" rather than dispatching a real signature-request email to any address (including the account's own), consistent with this project's standing rule against sending messages without explicit confirmation — so this finding is based on thorough UI/structural inspection of both RECIPIENTS and OPTIONS tabs, not a completed end-to-end send-and-observe test. OBSERVATION, explicitly not a completed live-send test — see Second-Pass Flags. This matches Paperform's own **confirmed** gap closely enough on structural grounds that the same characterization looks very likely to apply to Jotform Sign too, but a human reviewer should complete the actual send (to their own inbox) to fully confirm before this file's finding is treated as equally confirmed rather than strongly-inferred.

**5. Signing status surfaces in the regular Tables product — not siloed to a separate Sign-only dashboard.** FACT — directly answers brief item 4, and the most notable competitive-differentiation finding in this pass. Opening "Tables" from the Sign Builder's own mode-switcher auto-created (or auto-opened) a Table titled "Clone of {Document Title}," with an "All Documents" tab already present and Sign-specific columns already provisioned out of the box: Sent Date, Document Status, Signed Document (an attachment-type column, presumably the countersigned PDF once complete), plus the document's own field columns pulled directly from its signer-role fields (Landlord/Lessor, Name, Address, and further columns off-screen). FACT The empty state read "You don't have any active Sign Documents" with a "SEND DOCUMENTS TO SIGN" button inline in the Table itself — meaning Sign documents and their status live as rows in the same Tables product used elsewhere in Jotform (the product that also backs form Submissions views), not confined to a separate, Sign-exclusive status screen. This is a materially different architecture from Paperform's own confirmed gap (signing status visible only inside Papersign's own dashboard, not in the regular Submissions/Tables view). FACT Separately, an "Inbox" option exists in the same mode-switcher but appeared visually disabled/unavailable in this account state — not explored further this pass (see Second-Pass Flags).

## Rules & Validation

- Signature fields on the template carried a required-field indicator (red asterisk), same visual convention as Form Builder's required fields.
- The "Send to Sign" action in RECIPIENTS appears to require both Name and Email to be filled for every signer role before sending (not confirmed by attempting to submit with blanks, to avoid triggering an actual send — see Second-Pass Flags).
- Expiration Date defaults to on, 90 days out, with a plain-language confirmation line ("This document will expire in 90 days, on Jan 4, 2027 at 11:25 (Asia/Kolkata)") — a genuinely helpful default-safety behavior worth noting under Best Observed Approach.

## Technical Data

- Document URL pattern observed: `https://www.jotform.com/build/{signDocumentID}` with a distinct "Sign Builder" mode banner — same `www.jotform.com/build/` path prefix as Form Builder, differentiated only by the mode indicator and shell styling, suggesting Sign documents and Forms may share the same underlying document/object infrastructure at the URL-routing level. OBSERVATION — not confirmed via network/API inspection this pass.
- PDF file-naming convention observed in GENERAL SETTINGS: `sign_{documentID}_template?nc=1_{hash}.pdf` as the default downloadable-document filename.
- The auto-created Tables record's title following the pattern "Clone of {Document Title}" suggests Jotform Sign documents are implemented as a special case of (or tightly coupled to) the Tables data model, with "Clone of" possibly referring to an internal document→table materialization step rather than a literal duplicate the user asked for.

## Competitor Comparisons

See [[paperform-signature-papersign]]'s own Competitor Comparisons table — the "Capability | Zoho Forms | Typeform | Paperform | JotForm" table there is now the canonical merged comparison; the filing pass merged this record's findings into that table directly rather than duplicating a separate table here. Narrative summary:

On the two dimensions Paperform confirms as gaps (no sandbox, status siloing), Jotform Sign matches Paperform on the sandbox gap (no test mode found) but differs favorably on status visibility (Tables integration, not siloed). On signer-field sourcing, the two products take opposite approaches: Paperform ties signer fields to a specific form's submitted answers, while Jotform Sign uses a standalone, form-independent named-role system. INFERENCE for the "matches/differs" characterization — stated as a judgment call built on both records' own confirmed facts, not a guess.

## Best Observed Approach

The **Table-backed status tracking** (Sent Date / Document Status / Signed Document columns auto-provisioned in the same Tables product used elsewhere) is a strong candidate "best observed approach" for the status-visibility dimension specifically — it means a user doesn't need to learn or check a separate siloed dashboard to know where a document stands, and the Signed Document column implies the countersigned PDF itself becomes directly accessible/downloadable from the same place, assuming that holds true once a document is actually completed (unconfirmed — no document was carried through to completion this pass).

The default-on, pre-filled 90-day Expiration Date with a plain-language confirmation sentence is a small but genuinely helpful safety default worth calling out separately from the sandbox-gap finding above.

## Sources

- Live testing session, 2026-10-05, Jotform Sign document "Simple One Page Lease Agreement Template" (cloned from the Lease Agreement template category)
- Task brief JF6, cross-referenced and merged directly into [[paperform-signature-papersign]]'s own Competitor Comparisons table during filing (2026-10-05) — superseding the capturing session's "ready to paste" draft table.

## Second-Pass Flags

- The sandbox/test-mode finding (item 4 above) is based on UI/structural inspection only — no actual send was completed. This session deliberately did not click "Send to Sign" with any recipient email (including the account's own), per the standing rule against dispatching real messages without explicit confirmation. A human reviewer should complete one real send-to-self to fully confirm there is no hidden test-mode affordance that only appears after initiating a send (e.g., a confirmation-step toggle), and to observe what the Document Status / Signed Document columns actually populate with once a real signature round-trip completes.
- "Inbox" in the mode-switcher appeared visually disabled in this account/session state and was not explored — unclear whether it's a separate notification center, a gated/paid feature, or simply inapplicable with zero sent documents.
- The "Document Elements" palette was not fully scrolled/enumerated — BASIC, SIGNATURE, and SELECTION categories were captured in full, but COMMON ELEMENTS was cut off after Company/Job Title/Website; further categories may exist below the fold.
- Whether the URL-routing similarity between Sign documents and Forms (`/build/{id}` for both) reflects genuinely shared backend infrastructure, or is coincidental path-prefix reuse, was not confirmed via network/API inspection this pass — flagged as an open question rather than a settled fact.
- The "Clone of {Document Title}" naming on the auto-created Table was not explained anywhere in the UI — whether this naming is a one-time artifact of how this specific Table was reached (via the mode-switcher rather than a dedicated "View Table" action) or Jotform Sign's standing convention for its status tables was not tested by reaching the Table a second way.
- The actual passcode (key icon) and message/note icon controls on each signer row (SEND → RECIPIENTS) were seen but not clicked into — their exact behavior (e.g., whether the key icon sets a required access code before a signer can open the document) is undocumented here.
- The native in-form Signature field's own draw/type/upload mechanics (as distinct from the separate Jotform Sign product documented in this record) remain not yet depth-tested, per [[jotform]]'s own Section 15 gap — this pass covered only the Jotform Sign product, not the Basic-palette Signature field.
