---
component: "Feedback family — Toast, Destructive-confirm modal(s), Alert/Upsell modal, Empty state, Loading state"
ui_category: "Feedback > Toast, Confirmation Modal, Alert/Upsell Modal, Empty State, Loading State"
source_product: "Paperform"
last_verified: "2026-09-28"
evidence_state: "source_reviewed"
---

# Component: Feedback family — Toast, Destructive-confirm modal(s), Alert/Upsell modal, Empty state, Loading state

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **Pass ID: PF14.** Filed to close a real gap: Paperform had zero components tagged Feedback despite 13 prior research passes. Grouped here (Toast / destructive-confirm / Alert / Empty / Loading) because they share the same design language and were discovered together; Tooltip is split into its own record ([[paperform-tooltip]]) since it's a distinct hover/click interaction pattern. **Cross-links this comparison table into [[destructive-confirm-modal-comparison]]** as a 3rd and 4th implementation alongside Zoho's own two.

## Location
- **Product:** Paperform
- **Screen(s) it appears on:** Dashboard (Trash restore, form delete), Submissions inbox (submission delete, export), Configure → Details (URL slug validation), respondent runtime (submission rejection), Billing/plan-limit screens, Submissions detail panel, document-canvas builder.

## Structure

### 1. Toast / notification — `PFToast`
- Dedicated custom component: `<div class="PFToast">` wrapping `<div class="PFToast__inner">` — **not** MUI, not a third-party toast library.
- `position: fixed`, `left: 0` (spans full viewport width), `z-index: 100000`.
- Renders bottom, not top-corner (unlike the more common top-right toast pattern).

### 2. Destructive-confirmation modal — TWO different implementations coexist
- **2a. Submission-level delete** (`/submissions/<slug>/inbox`, row ⋮ → Delete): title "Delete Submission," body "Are you sure you want to delete this submission?", Cancel (outlined) / Ok (filled, `MuiButton-colorPrimary` — not red/error-colored). Confirmed via DOM as a genuine **MUI `<Dialog>`** (`MuiDialog-root`/`MuiModal-root`/`MuiDialog-container`).
- **2b. Form-level delete** (Dashboard → form card ⋮ → Delete): no title, body only ("Are you sure you want to delete this form?"), Cancel (light pill) / Ok (dark filled pill) — different button styling from 2a. Confirmed via DOM as **unclassed `<div>`s with inline styles** — `position: fixed; top: 20%; left: 50%; transform: translateX(-50%); background: white; border-radius: 9px; box-shadow: …; width: 600px; z-index: 100001;` — a legacy/custom implementation with no CSS class hooks at all.

### 3. Alert / plan-limit upsell modal
- Titled "Platform · Billing," icon + headline ("You've reached your Spaces limit"), subtext, dual CTA: "Upgrade to Business — $1,488/year" / "Maybe later."

### 4. Empty state — Submissions view, zero responses
- `/submissions/<slug>/`: plain centered text "No submissions found," no illustration, no CTA. Surrounding chrome (a Submissions-count tile reading 0, a flat 30-day sparkline) still renders with live zero-value data around the empty table.

### 5. Loading state
- Submission detail panel: grey skeleton-loading placeholder blocks (one short rounded bar near the top, one large rectangle filling the rest) before real content mounts.
- Document-canvas builder reload: no observable loading UI under normal (cached) network conditions.

- Screenshot: not captured this pass — captured via live interaction, DOM/computed-style inspection.

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| Dashboard trash icon → Restore | Click | Restores a trashed form | `PFToast` reading "Restored form" appears bottom, full-width | Same screen |
| Submissions → ⋮ → Export → All | Click | Fires signed-URL `.click()` download (not fetch) | `PFToast` reading "Exporting submissions. Please check your downloads window." — the only visible confirmation, since the export itself isn't a network-visible fetch | Same screen |
| Submission row ⋮ → Delete | Click | Opens MUI `Dialog` | Modal overlay ("Delete Submission") | Same screen, modal open |
| Modal 2a "Ok" | Click | Not exercised (cancelled to preserve documented test data) | Would delete the submission | Not tested |
| Modal 2a "Cancel" | Click | Dismisses dialog | No change | Same screen |
| Dashboard form card ⋮ → Delete | Click | Opens bespoke inline-styled `<div>` modal | Modal overlay (no title, body text only) | Same screen, modal open |
| Modal 2b "Ok" | Click | Confirms form deletion | Row silently removed from list — **no post-delete toast, no banner** | Dashboard |
| Configure → Details → Customize URL, taken slug | Type | Client-side/async validation | Inline pill-shaped "taken" badge next to the field — **not** a toast | Same screen |
| Rejected submission (unverified owner email) | Submit | Server returns 400 | Inline red bar in the respondent runtime — **not** a toast | Same screen |

## Behavior & States
- **Toast auto-dismisses.** Captured post-dismiss state: `bottom: -100px` (slid off-screen), `opacity: 0`, inner content emptied — gone well before the next screenshot (a handful of seconds). **No close control** (`hasCloseButton: false`) — purely time-based.
- **No error toast exists.** Two different invalid-input paths tested (taken URL slug, rejected submission) both produced inline messaging instead — confirmed via DOM query immediately after (no `PFToast`/`Snackbar`/`role="alert"` element carrying visible text). Paperform has exactly one toast component, used narrowly for async success/status confirmations (restore, export) — validation and submission errors never reuse it.
- **Two structurally incompatible confirm-modal implementations for the same action class (permanent, irreversible delete), in the same product** — a genuine MUI `Dialog` for submission delete vs. a bespoke unclassed inline-styled `<div>` for form delete. Neither dialog uses destructive/red button coloring, an icon, or a "type to confirm" pattern; both are a plain Cancel/Ok pair.
- **Asymmetric post-confirm feedback:** restoring a form toasts; deleting a form is silent (no toast, no banner) — the opposite of what a safety-conscious design might do (louder confirmation for the destructive action, not the reversible one).
- **Alert/upsell modal is the one "rich" Feedback pattern found** — icon, headline/subtext hierarchy, two asymmetric CTAs — in contrast to the "bare" confirm dialogs in §2.
- **Empty state is minimal but not a full-screen takeover** — only the table body goes empty; surrounding chrome (count tile, sparkline) stays populated with real (zero-value) data.
- **Skeleton-block loading pattern confirmed for at least one async per-record fetch** (submission detail) — grey rounded-rectangle placeholders, no shimmer/animation observed. Builder-reload loading state not observable this pass — either genuinely instant from cache, or the window is too narrow to catch without deliberate network throttling.

## Rules & Validation
- N/A — no form-level validation applies to these Feedback components themselves (the URL-slug and submission-rejection cases are their own products' validation surfaces, documented here only for their Feedback-presentation choice).

## Technical Data
> OBSERVATION only, tagged per evidence-guidelines.md. Captured via live interaction and DOM/computed-style inspection.
- **DOM — Toast:** `<div class="PFToast">` > `<div class="PFToast__inner">`; `position: fixed`, `left: 0`, `z-index: 100000`. Post-dismiss: `bottom: -100px`, `opacity: 0`.
- **DOM — Modal 2a:** `MuiDialog-root` / `MuiModal-root` / `MuiDialog-container`; buttons `MuiButtonBase-root MuiButton-*`.
- **DOM — Modal 2b:** unclassed `<div>`s, inline styles only: `position: fixed; top: 20%; left: 50%; transform: translateX(-50%); background: white; border-radius: 9px; box-shadow: …; width: 600px; z-index: 100001;`.
- **Network:** export toast (§1) confirms the export mechanism is a signed-URL `<a>.click()`, not a fetch/XHR — consistent with PF8/PF9's own finding.
- **Response/State change:** N/A for this record's scope beyond the above.
- **Animation/transition:** toast's slide-off (`bottom: -100px`) and fade (`opacity: 0`) are the only transition data captured; no shimmer/animation observed on skeleton loading blocks.

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| Google Forms ([[google-forms-feedback-patterns]]) | Both products confirmed to have accessibility gaps in their primary toast/status mechanisms — Google's save-status line and snackbar both lack `role`/`aria-live`; Paperform's `PFToast` role was not independently confirmed either way. Both products gate destructive-confirm modals inconsistently within themselves: Google by scope-of-consequence (question vs. section vs. form), Paperform by having two structurally incompatible implementations (MUI Dialog vs. bespoke div) for the same action class. | Paperform's error/success separation is cleaner (errors always inline, `PFToast` reserved for success/status only); Google's toast at least offers an UNDO action, which Paperform's has none of. Google's inline required-field error correctly uses `role="alert"`; Paperform's inline error/validation messaging was not confirmed to carry an equivalent role. | Paperform's form-delete flow gives **zero** post-confirm feedback (silent removal); Google's equivalent chains both a modal AND a toast — a stronger safety net for the same class of action. |
| Zoho Forms ([[destructive-confirm-modal-comparison]]) | Also confirmed to have two independently-built modal systems for its own two destructive-confirm cases (Trash-delete vs. Theme-editor-exit) — the same "inconsistent confirm-modal implementation within one product" pattern now confirmed 3-for-3 across Zoho, Paperform, and Google Forms. | | |
| Typeform | Not yet captured at this depth — queued as AL2 in `prompt-backlog-typeform-remaining.md`. | | |

## Best Observed Approach
- TODO — full ranking needs Typeform's own Feedback-category capture (AL2) before a definitive verdict across all four products. Provisionally: Google Forms' scope-sensitive confirm-modal gating is more thoughtful than either of Paperform's two flat-rule implementations.

## Sources
- OBSERVATION: Live exploration of Paperform (dashboard, Submissions inbox, Configure → Details, respondent runtime, Billing, Submissions detail panel, document-canvas builder), via Claude browser extension, 2026-09-28. While testing the form-delete confirmation, the `xborqzxj` scratch form (holding the documented [[paperform-submissions-results-view]] PF8/PF9 and [[paperform-signature-papersign]] PF12 test submissions) was initially deleted, then immediately restored from Trash — this is what produced the §1 Restore success-toast finding. Both submissions confirmed intact; no data was lost. The submission-delete confirm dialog (§2a) was cancelled, not confirmed, so no submission data was removed.
