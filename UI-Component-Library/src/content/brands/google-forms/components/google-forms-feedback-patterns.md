---
component: "Feedback Patterns — Toast, Confirmation Modal, Tooltip, Empty State, Loading State"
ui_category: "Feedback > Toast, Confirmation Modal, Tooltip, Empty State, Loading State"
source_product: "Google Forms"
last_verified: "2026-09-28"
evidence_state: "source_reviewed"
status: 'complete'
summary: "Two easily-conflated notification mechanisms (a never-auto-dismissing save-status line and a snackbar toast that also never auto-dismissed on any observed timer, both lacking role/aria-live), a confirm-modal gating rule based on scope-of-consequence rather than a flat rule, and matched aria-label/data-tooltip pairs with no observable visual tooltip bubble."
---

# Component: Feedback Patterns — Toast, Confirmation Modal, Tooltip, Empty State, Loading State

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **Pass ID: GF10** (category backfill pass, follows P1's product-level [[google-forms]] record and GF2–GF6/GF9's field- and shell-level passes). Filed to close the Feedback gap flagged in `00-Framework/category-taxonomy.md` §2b's coverage checklist — Google Forms previously had zero components tagged Feedback. Captured across three surfaces: the form builder (test form reused since P1, plus a throwaway question), the published `/viewform` respondent page, and a disposable "Blank form" created and removed specifically for the dashboard-delete and empty-state tests.

## Location
- **Product:** Google Forms
- **Screen(s) it appears on:** form builder (Questions/Responses tabs), published `/viewform`, forms.google.com dashboard.

## Structure
- **Persistent save-status line:** header text cycling "Saving…" → "All changes saved in Drive," next to the document title.
- **Snackbar toast:** black background, bottom-left corner, e.g. "Item deleted" / "Moved to trash," with a yellow right-aligned "UNDO" action.
- **Inline validation error:** a red-outlined question card with a red circled-exclamation icon and "This is a required question" text beneath the choices.
- **Dashboard delete confirmation modal:** heading "Move to trash?", two-paragraph body, text "Cancel" + filled "Move to trash" buttons.
- **Section-delete confirmation modal:** single-paragraph confirm, "Delete questions and section?" with a "Merge section up" escape hatch mentioned in the copy (see [[google-forms-section-branching]] §3).
- **Tooltip affordance:** `aria-label`/`data-tooltip` attribute pairs on every icon-only control (matched text), but no observed visual bubble.
- **Empty states:** a bare title/description card with no illustration on a just-emptied Questions canvas; plain centered text ("No responses. Publish your form to start accepting responses.") on the Responses tab.
- **Loading state:** a small circular spinner + "Loading responses…" label, reused for other in-flight async operations (also seen dimmed behind an in-progress "Unlink form?" modal).
- Screenshot: not captured this pass — captured via direct interaction, screenshots, DOM/ARIA inspection (`getComputedStyle`, `getAttribute('role')`, `getAttribute('aria-live')`), and `data-tooltip`/`aria-label` DOM queries across eleven icon-only controls.

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| Question trash-can icon (builder) | Click | Deletes the question instantly | No modal; question removed; "Item deleted" toast appears with UNDO | Same screen |
| Toast "UNDO" | Click | Not exercised this pass | Would restore the deleted item | Not tested |
| Dashboard form ⋮ → Remove | Click | Opens "Move to trash?" modal | Modal overlay | Same screen, modal open |
| Modal "Move to trash" | Click | Confirms form deletion | Form moved to Drive trash; "Moved to trash" toast appears | Dashboard |
| Modal "Cancel" | Click | Dismisses the modal | No change | Same screen |
| Section delete (builder) | Click | Opens "Delete questions and section?" confirm | Modal overlay | Same screen, modal open |
| Required question, submit blank (`/viewform`) | Click Next/Submit | Client-side validation | Inline `role="alert"` error appears under the question | Same screen |
| Responses tab kebab → Unlink form | Click | Unlinks the response spreadsheet | Silent — button label swaps ("View in Sheets" → "Link to Sheets"), no toast/banner at all | Same screen |

## Behavior & States
- **Two distinct, easily-conflated notification mechanisms:** the persistent save-status line (never auto-dismisses; restarts on the next edit) and the snackbar toast (confirmed **not** auto-dismissing on any observed timer — survived 17+ seconds unattended, a click elsewhere, and an in-app tab switch from Questions to Responses).
- **Accessibility split across all four Feedback cases tested:** save-status line and snackbar toast both carry no `role`/`aria-live` (a real gap — screen-reader users get no notification of a save or a delete+undo opportunity); the inline required-field error carries `role="alert"` (implicitly assertive per the ARIA spec — the one Feedback element in this pass that gets accessibility right); the "Unlink form" action gives no feedback of any kind, accessible or otherwise.
- **Confirmation-modal gating is scope-of-consequence, not destructiveness alone:** a single-question delete (cheaply undoable via the toast) skips the modal entirely; whole-form deletion (Drive/trash semantics, affects collaborators) and whole-section deletion (bulk-deletes multiple questions + their responses) both get a blocking modal. Uniquely, the whole-form-delete flow chains **both** a confirmation modal and a post-action undo toast — two separate safety nets for the same action, more than any other case tested.
- **Tooltip hover state could not be captured** — the underlying accessible-name/visible-tooltip-text pairing is confirmed correct via DOM (`aria-label` and `data-tooltip` read identically per control), but no visual tooltip bubble rendered under simulated hover across eleven controls tested, despite the icon's own hover background reliably appearing. Flagged as a captured limitation of this pass's automation approach, not evidence the tooltip doesn't exist.
- **Empty states are minimal-to-the-point-of-bare:** no illustration, no dismiss button, no promotional content; the Questions-tab empty canvas doesn't even state a call to action (only the ambient floating add-content toolbar, identical to its appearance everywhere else). The Responses-tab empty state always round-trips through the "Loading responses…" spinner first, even when the eventual result is zero rows.
- **"Blank form" is not actually empty by default** — it auto-seeds one "Untitled Question" (Multiple choice, "Option 1"); the true empty canvas only appears after deliberately deleting that seed question.
- **Full builder-reload loading state not captured** — two reload attempts both landed on the fully-painted builder with no intermediate frame observed; most likely explanation is a warm/cached session outrunning this pass's screenshot cadence, not evidence no loading state exists.

## Rules & Validation
- Required-question validation blocks submission client-side on `/viewform` and surfaces the `role="alert"` inline error described above.
- No other validation rules apply to the Feedback components themselves.

## Technical Data
> OBSERVATION only, tagged per evidence-guidelines.md. Captured via direct interaction, screenshots, and DOM/ARIA inspection via injected JavaScript.
- **DOM/ARIA — save-status line:** `aria-live` and `role` both `null`.
- **DOM/ARIA — snackbar toast:** container and every ancestor element up to `<body>` carry no `role` and no `aria-live`.
- **DOM/ARIA — inline required-field error:** container carries `role="alert"` (no explicit `aria-live`, but implicitly assertive per the ARIA spec since `role="alert"` implies it).
- **DOM — icon-only controls:** eleven controls tested (floating add-content toolbar's six icons plus Customize Theme, Preview, Undo, Redo, Copy responder link) each carry a matched `aria-label`/`data-tooltip` attribute pair with identical text.
- **Timing:** snackbar toast confirmed on-screen unchanged after 17+ seconds of no interaction and after an in-app tab switch — no observed auto-dismiss timer within that window; longer unattended waits (60s+) not tested.
- **Network:** not captured this pass — this pass focused on DOM/ARIA/visual state, not request traffic.
- **Response/State change:** N/A for this record's scope.
- **Animation/transition:** not captured this pass; the tooltip's own show/hide transition specifically could not be observed at all (see Behavior & States).

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| Paperform ([[paperform-feedback-toast-alert-empty-loading]], [[paperform-tooltip]]) | Both products confirmed to lack a genuine hover-tooltip — Google's `aria-label`/`data-tooltip` pairing never produced a visible bubble under simulated hover; Paperform's icon affordances are confirmed **click**-triggered `MuiPopover`s, not hover tooltips at all, a stronger/different finding (Paperform's is a confirmed absence of the interaction pattern itself, not just an unobserved bubble). Both products' destructive-confirm modals are also scope-sensitive/inconsistent within the same product: Google gates on consequence-scope (question vs. section vs. form); Paperform has **two structurally incompatible modal implementations** (a MUI Dialog for submission delete, a bespoke unclassed `<div>` for form delete) for the same class of action. | Google's inline required-field error correctly uses `role="alert"`; Paperform's validation/error messaging is inline too but no `role="alert"` was confirmed in Paperform's own pass. Google's toast lacks a close control but at least offers an UNDO action; Paperform's `PFToast` is success-only with no error variant at all — errors use inline messaging exclusively, a cleaner separation of concerns but a smaller Feedback vocabulary. | Both products' primary toast/status mechanisms lack `aria-live`/`role` (Google's save-status line and snackbar; Paperform's `PFToast` role not independently confirmed either way in its own pass). Both products' empty states are minimal/bare with no CTA. |
| Zoho Forms ([[destructive-confirm-modal-comparison]]) | Zoho's own two destructive-confirm implementations (Trash-delete, Theme-editor-exit) are also confirmed to be two independently-built modal systems, not one shared component — the same "inconsistent confirm-modal implementation within one product" pattern now confirmed in Google Forms, Paperform, AND Zoho Forms, a genuine 3-for-3 cross-product finding. | | |
| Typeform | Not yet captured at this depth — no Typeform Feedback-category component (Toast/Modal/Tooltip/Empty/Loading) is documented in this library yet. Open gap, queued as AL2 in `prompt-backlog-typeform-remaining.md`. | | |

## Best Observed Approach
- **Confirmation-modal gating on scope-of-consequence rather than a flat "always confirm" rule** (Google Forms) is a more thoughtful design than either of Paperform's two implementations, which apply the same plain Cancel/Ok pair regardless of what's being deleted. TODO — full ranking needs Typeform's own Feedback-category capture (AL2) before a definitive "best observed" verdict across all four products.
- The inline `role="alert"` required-field error (Google Forms) is the single most accessibility-correct Feedback element confirmed across Google's and Paperform's passes combined.

## Second-Pass Flags
1. Whether the "Item deleted"/"Moved to trash" toast ever auto-dismisses on a longer timescale than the ~17 seconds tested, or is purely dismissed by the next distinct user action/navigation — worth a 60s+ unattended wait in a future pass.
2. The visual tooltip bubble's appearance, delay, and positioning — needs a retest with a technique that can trigger genuine sustained-hover JS events, or a human operator.
3. Full builder-reload loading state — needs network throttling (not available this pass) to actually observe the slow-load path.
4. Whether other destructive actions not tested this pass (deleting a response, deleting a collaborator, clearing all responses) follow the same "modal for bulk/high-scope, toast-only for single-item" pattern identified here.

## Cross-Component Pattern Note
1. **Inconsistent destructive-confirm-modal implementation within a single product is now a confirmed pattern across all three products with this category captured** (Zoho Forms' two independently-built modals in [[destructive-confirm-modal-comparison]]; Paperform's MUI-Dialog-vs-bespoke-div split in [[paperform-feedback-toast-alert-empty-loading]]; and, more mildly, Google Forms' scope-sensitive threshold applying inconsistent safety nets — a confirm+toast combo for form-delete but toast-only for question-delete). Worth checking directly, not assuming, whether Typeform's own confirm modals (AL2) show the same accretion pattern.
2. **A toast/snackbar that never auto-dismisses on any observed timer** is a specific, reproducible-sounding finding worth re-verifying on a fresh session in case this is a regression rather than intended behavior — if confirmed again, it's a real UX defect (a stuck notification with no close control is arguably worse than an auto-dismissing one, since the user has no way to clear it without navigating away).
3. **A properly-labeled tooltip pairing (`aria-label` matching `data-tooltip`) with no observable visual tooltip** is a distinct failure mode from Paperform's confirmed click-only popover — worth explicitly distinguishing "tooltip exists but couldn't be triggered by automation" (Google, this record) from "no hover-tooltip exists at all, confirmed by design" (Paperform, [[paperform-tooltip]]) in any future synthesis, rather than treating both as the same negative finding.

## Sources
- OBSERVATION: Live, logged-in exploration of Google Forms across the form builder (test form `1jXL4eFIxzAtW7-7NDo7v5EWGb28DmnkfyWijfmQPPeg`, reused since P1, plus a throwaway "GF10 toast test" question added and deleted), the published `/viewform` respondent page, and the forms.google.com dashboard (via a disposable "Blank form" created and removed specifically for this pass), via Claude browser extension, 2026-09-28. Direct interaction plus screenshots, DOM/ARIA inspection via injected JavaScript, and `read_page`/DOM queries for `aria-label`/`data-tooltip` pairs. No lasting account-level side effects — the disposable throwaway form and question were both removed at the end of the pass.
