# Reconstructed preview: JotForm Sign — Sign Builder shell + e-signature workflow

Source record: `Research-Library/04-Component-Library/jotform/jotform-sign-builder.md` (JF6, 2026-10-05).

## Evidence priority

Reproduced faithfully from direct live-testing observation of the real Sign Builder editor
(template: "Simple One Page Lease Agreement Template"):

- The green BUILD/SETTINGS/SEND mode-tab bar, distinct from Form Builder's orange — confirmed
  in the source record as "a solid/gradient green (not Form Builder's orange)" with the same
  "Preview Document" toggle slot Form Builder uses for "Preview Form".
- A document canvas containing a sample lease-style document body with two separately
  color-coded signature blocks — orange for "Me" (the account owner, pre-bound and not
  deletable/renamable) and purple for a custom role ("Tenant/Lessee") — each paired with its
  own Date field, matching the confirmed "orange 'Landlord/Lessor' = Me, purple 'Tenant/Lessee'
  = the second role" finding.
- The "Assign field to:" popover opened from a signature field's role badge, listing every
  existing role with inline edit/delete icons on non-owner roles plus an "+ Add new role"
  action — matching the confirmed popover structure (the source record notes the edit-pencil
  and delete-trash icons appear "with its own edit-pencil and delete-trash icons").
- The SEND tab's "Manage Signers (N)" panel with one row per role, a Name + Email input per
  signer, and a "Signing order" toggle that defaults to **off** (any order), matching the
  confirmed "off by default — meaning simultaneous/any-order signing unless explicitly turned
  on" finding.
- The "Document Elements" left palette's reduced category set (BASIC ELEMENTS, SIGNATURE
  ELEMENTS) relative to Form Builder's palette, reflecting the confirmed finding that Sign's
  palette is "notably absent: no Star Rating, no Input Table/matrix, no payment fields."

## Deliberate scope reductions

- **"Send to Sign" never sends anything, and there is no fake "success" illusion either.** The
  source record's own finding (item 4, "No sandbox/dry-run mode was found anywhere in the send
  flow") is explicit that the real product has **no test/sandbox mode** — the only way to see
  what sending does is to dispatch a real, deliverable email. Reproducing a real send (or
  faking one as if it were real) would misrepresent this preview as doing something it cannot
  safely do. Clicking "Send to Sign" here only reveals an inline, clearly-labeled disclaimer
  that this is a reconstructed demo and no email is ever dispatched — consistent with this
  project's standing rule against simulating real message sends. `onSendAttempt` is exposed
  purely as an observation hook for the host; the component itself makes no network calls.
- **The Sign Builder shell reuses the general multi-pane app-shell pattern already established
  in `jotform-app-shell-builder`** (top bar + mode-tab bar + palette/canvas/right-pane layout)
  rather than being rebuilt from scratch — the source record itself describes Sign Builder as
  "the identical switcher pattern... same structural pattern, different styling and tab set" as
  Form Builder, so re-deriving the shell mechanics independently would contradict the record's
  own finding.
- **SETTINGS tab is a thin placeholder.** The source record only directly observed one SETTINGS
  fact (the PDF filename convention under GENERAL SETTINGS); it did not enumerate a full
  SETTINGS sub-nav the way it did for BUILD and SEND. This preview's SETTINGS tab reflects only
  that one confirmed data point plus a plausible, clearly-generic sub-nav shape (General
  Settings / Conditions / Notifications) — not a literal reconstruction of unobserved UI.
- **Signer-row extras (passcode key icon, per-signer message/note icon, Expiration
  Date/Reminder/Delegation/CC options on the OPTIONS tab) are out of scope.** The source record
  flags the key icon and message icon as "seen but not clicked into — their exact behavior...
  is undocumented," and the OPTIONS tab's toggles were only enumerated by label, not behavior.
  Inventing interactive behavior for either would go beyond what was actually observed.
- **Only two starting roles ("Me", "Tenant/Lessee") are pre-seeded**, matching the one template
  this pass actually opened; "+ Add new role" is still fully interactive so a reviewer can add
  further roles beyond the two confirmed ones.
- Following this codebase's established precedent (`jotform-app-shell-builder`,
  `jotform-input-table-field`): this component is self-contained and uncontrolled — all role,
  field-assignment, and SEND-tab state lives in internal `useState`, not external
  `value`/`onChange` props, so the hosted `ReconstructedPreviewPanel` harness doesn't need a
  dedicated controlled-value wrapper for it to be genuinely interactive.
