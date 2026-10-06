---
component: "Feedback Patterns — Toast, Confirmation Modal, Tooltip, Empty State, Loading State"
ui_category: "Feedback > Toast, Confirmation Modal, Tooltip, Empty State, Loading State"
source_product: "Typeform"
last_verified: "2026-09-28"
evidence_state: "source_reviewed"
---

# Component: Feedback Patterns — Toast, Confirmation Modal, Tooltip, Empty State, Loading State

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **Pass ID: AL2.** Filed to close the Feedback gap flagged in `00-Framework/category-taxonomy.md` §2b's coverage checklist — Typeform previously had zero components tagged Feedback. Captured by directly triggering transient/status UI: copying a form link (toast), deleting a form vs. deleting a question (confirmation modal, and its absence), hovering icon-only toolbar controls (tooltip), visiting a zero-webhook Connect tab / zero-response Results tab / a freshly-created empty workspace (empty states), and cold-reloading the builder (loading state). Cross-links directly into [[destructive-confirm-modal-comparison]] as a 5th data point alongside Zoho's two, Paperform's two, and Google Forms' scope-sensitive pair.

## Location
- **Product:** Typeform
- **Screen(s) it appears on:** workspace dashboard (Actions menu, form list), form builder Content tab (toolbar, Pages rail), Connect tab → Webhooks, Results tab → Responses, a freshly-created empty workspace.

## Structure
- **Success toast:** bottom-right, white rounded card with soft shadow, a green circular checkmark icon, message text ("Link copied to clipboard"), and an explicit "×" close button.
- **Destructive confirmation modal (whole-form delete):** a true `dialog`-role modal — title "Delete form?", body interpolating the real form name, a bulleted "This will also:" consequence list, a separate unbulleted irreversibility line ("This will permanently delete the form."), Cancel + red "Delete" buttons, an explicit "×" close, and a semi-transparent inert backdrop.
- **Tooltip:** a small dark rounded-rectangle bubble with white text and an upward-pointing triangular arrow, anchored directly below the hovered icon.
- **Empty states (3 distinct treatments):** zero webhooks (illustrated 3D icon, casual heading/subtext, a "Learn about webhooks" link, single CTA), zero responses (no illustration, plain heading, dual CTA), zero forms in a new workspace (flat single-color icon, instruction-as-heading, single CTA).
- **Loading state:** a blank-white stage, then a centered wordless spinner (with the floating AI input already mounted ahead of the rest of the shell), then a single-step full-shell population — contrasted with the Connect tab's own branded "Hold tight—just getting this page ready" loading copy (see [[typeform-application-layout]] §2.4).
- Screenshot: not captured this pass — captured via direct interaction and timed screenshot sequences.

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| Dashboard "..." menu → Copy link | Click | Copies the form link | Bottom-right success toast appears, auto-dismisses in ~4–6s, or dismissible via "×" | Same screen |
| Dashboard "..." menu → Delete (form) | Click | Opens the destructive confirmation modal | Modal overlay, backdrop dims page, background inert | Same screen, modal open |
| Modal "Delete" | Click | Confirms form deletion | Button label swaps in-place to "Deleting...", then modal auto-closes, row disappears, form-count badge decrements — **no toast follows** | Dashboard |
| Modal "Cancel" / "×" | Click | Dismisses modal | No change | Same screen |
| Pages rail item → Options → Delete (question) | Click | Deletes the question instantly | **No modal, no toast, no undo** — page removed from canvas and rail immediately | Same screen |
| Icon-only toolbar control (e.g. Form settings, Mobile view) | Hover | Shows tooltip | Dark anchored tooltip appears below the icon, near-instantly | Same screen |
| "Add a webhook" dialog, invalid URL, Save | Click | Client-side validation | Inline red border + helper text ("Hmm...that URL doesn't look right"); modal stays open | Same screen, modal open |
| "Add a webhook" dialog, unreachable-but-valid URL, Save | Click | Attempted persist | Dialog closes normally with **zero error feedback**; webhook silently fails to persist (confirmed by reloading — still empty state) | Same screen |

## Behavior & States
- **Toast is stateless/re-render-fresh, not a singleton** — re-triggering the same action after dismissal produces an identical new toast in the same position, not an updated existing one.
- **A stark confirmation-modal severity gap:** whole-form deletion (destroys collected response data) gets a full itemized confirmation dialog with a red danger button and an in-place "Deleting..." loading state; a single-question delete inside the still-editable builder draft gets **no confirmation, no toast, and no undo** at all — verified twice (an original question and a freshly-duplicated copy), same instant-and-silent result both times.
- **No confirmed error-toast pattern exists** — several attempts (invalid webhook URL, a Stripe field insertion on a free tier, a blocked empty-name rename) never produced a toast-shaped error. The one clear error condition reproduced (malformed webhook URL) surfaced as inline field validation instead.
- **A genuinely silent failure, distinct from the malformed-URL case:** a syntactically valid but unreachable webhook URL passes client-side validation, the dialog closes as if successful, but the webhook is never actually persisted — confirmed by reloading the tab and finding the empty state still present. Nothing in the UI communicates the failure at any point.
- **Tooltip positioning is per-element, not a single shared/reused instance** — the tooltip repositions correctly under whichever icon is actively hovered.
- **Three empty states, three different designs** — no shared "EmptyState" component: illustration presence (yes/no/plain-icon), heading tone (casual vs. plain vs. instructional), and CTA count (1 or 2) all vary independently by surface.
- **Loading-state treatment is inconsistent across the app** — the main builder route shows a bare wordless spinner with no copy; the Connect tab shows branded "Hold tight—just getting this page ready" copy on its own first load (see [[typeform-application-layout]]). A separate cell-level pulsing-skeleton pattern appears on the dashboard's forms table while row metadata loads, distinct from both.
- **Consistent casual/conversational copy voice across Feedback surfaces** — "Hmm...that URL doesn't look right," "Not familiar with webhooks? Just ask your tech team for a hand." — a deliberate brand-voice choice, not terse system-generated text.

## Rules & Validation
- Webhook URL field enforces client-side URL-format validation (malformed strings blocked with inline feedback) but does **not** verify reachability before accepting a save — confirmed via the silent-failure case above.
- No other validation rules apply to the Feedback components themselves.

## Technical Data
> OBSERVATION only, tagged per evidence-guidelines.md. Captured via direct interaction and timed screenshot sequences (not deep DOM/network inspection this pass, unlike some sibling records).
- **DOM/ARIA:** the destructive confirmation modal is confirmed via the accessibility tree as a true `dialog`-role element, not a styled `<div>` lookalike.
- **Timing:** toast auto-dismiss bracketed to 4–6 seconds via a timed screenshot sequence (still visible at 4s, gone by 6s) — not measured precisely via a JS timer. Tooltip appearance was already visible in the very next screenshot after a hover action — a sub-200–300ms show-delay is consistent with this but not isolated exactly.
- **Motion:** a subtle horizontal shift was observed in the toast's position between two screenshots taken seconds apart, suggesting a slide or width-recalculation animation — not conclusively isolated.
- **Network:** not captured this pass — this pass focused on visual/interaction/timing observation, not request traffic. The silent webhook-save failure strongly implies a server-side rejection with no corresponding client-side error handling, but this was inferred from UI behavior (empty state persisting after reload), not confirmed via a captured network response.
- **Response/State change:** N/A beyond the above.
- **Animation/transition:** loading-state Stage 1→2→3 transition (blank → spinner → full shell) is a single-step population once data arrives, not a staggered/progressive reveal.

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| Google Forms ([[google-forms-feedback-patterns]]) | Both products show a real severity gap between whole-record and sub-element deletion, though shaped differently: Typeform gates by *type of thing being deleted* (a full itemized modal for whole-form, nothing at all for a single question); Google gates by *scope of consequence* more granularly (question=no modal, section=modal, form=modal+toast). Both products' toasts are confirmed non-standard in some way — Google's never auto-dismisses on any observed timer; Typeform's DOES auto-dismiss (~4–6s) but has no confirmed error variant at all. | Typeform's whole-form delete modal is the most complete confirmation UI captured across all products so far — itemized consequences, a separate bolded irreversibility line, an in-place "Deleting..." loading label, and a real `dialog` role. Google's inline required-field error uses `role="alert"`; Typeform's inline webhook-URL error was not confirmed to carry an equivalent ARIA role. | Typeform's single-question delete has **zero** feedback of any kind (not even a toast), a stricter negative finding than Google's own toast-only single-question-delete case. Typeform also has a confirmed **silent, un-signaled failure mode** (the unreachable webhook URL) with no equivalent negative finding surfaced in Google's own pass. |
| Paperform ([[paperform-feedback-toast-alert-empty-loading]], [[paperform-tooltip]]) | Both products confirm a real tooltip that appears on hover with visible content and short literal labels — a positive contrast with Google Forms, whose tooltip pairing was confirmed correct in ARIA but never visually observed. Both products also independently confirm **at least one destructive action giving zero post-action feedback** (Typeform's question-delete; Paperform's form-delete). | Typeform's toast DOES auto-dismiss with a visible, working close control; Paperform's `PFToast` also auto-dismisses but has no close control at all. Typeform's empty states vary meaningfully by surface (3 distinct designs); Paperform's one captured empty state (Submissions) is uniformly bare with no CTA. | Paperform's confirm-modal split (MUI Dialog vs. bespoke div) is a structural implementation inconsistency; Typeform's is more a severity-policy inconsistency (whole-form vs. single-question) than a component-implementation split — a different, arguably more defensible kind of inconsistency, worth distinguishing rather than lumping both as "the same problem." |
| Zoho Forms ([[destructive-confirm-modal-comparison]]) | Zoho's own two destructive-confirm implementations are also confirmed to be independently built, not shared — now a cross-product pattern (Zoho, Paperform, and a milder Google Forms version) that Typeform's own findings complicate rather than simply extend: Typeform doesn't have two competing modal *components*, it has one well-built modal applied *inconsistently by severity tier*. | Typeform's single confirm-modal implementation (used consistently for the one case it's applied to) is more internally consistent than either of Zoho's two competing implementations. | Typeform's severity-tiering itself is the weakness here — a single question inside a draft form arguably deserves at least a toast-with-undo, which Typeform doesn't provide, unlike Google's equivalent case. |
| JotForm ([[jotform-feedback-patterns]], JF2, confirmed 2026-10-06) | JotForm confirms the exact same severity-tiering shape as this record — a full confirmation modal for whole-form delete, nothing-modal-shaped for single-field delete — but **unlike Typeform's single-question case, JotForm's no-modal field delete still gives a real undo-toast** (Ctrl+Z, ~3s window), resolving the lower tier this record's own Best Observed Approach flagged as Typeform's weakest point. JotForm's whole-form modal is a genuine Headless UI `role="dialog"`, matching this record's own confirmed true-dialog-role implementation. | JotForm closes the exact gap this record identifies in Typeform's own severity tiering — its field-delete case proves a lightweight undo-toast is achievable even at the "skip the modal" tier, something Typeform's own single-question case never attempts. | JotForm's whole-form modal has no itemized "This will also:" consequence list and no red/danger-colored confirm button — this record's own whole-form modal remains the richer *individual* dialog of the two despite JotForm's better-rounded overall severity policy. |

## Best Observed Approach
- **Google Forms' scope-of-consequence modal-gating (see [[destructive-confirm-modal-comparison]])** remains the most thoughtful policy found across all four products — it's the only one that pairs a confirmation modal WITH a follow-up undo toast for its highest-consequence case. Typeform's whole-form modal is the single richest *individual* confirmation dialog captured (itemized consequences + irreversibility line + in-place loading state), but its total absence of any safety net for question-delete pulls its overall Feedback-category showing down relative to Google's more evenly-applied policy.
- Typeform's tooltip implementation (real hover-triggered, near-instant, literal, per-element) is the strongest confirmed hover-tooltip in this library — Google's own pairing couldn't be visually verified and Paperform's is confirmed click-only by design.

## Second-Pass Flags
1. No genuine error-toast pattern was found despite several attempts — worth a dedicated future pass targeting a failed integration OAuth connection, a 4xx/5xx during autosave, or exceeding the response cap mid-submission.
2. Tooltip behavior on disabled/plan-gated (green-diamond-badged) icons was not tested — may show an upsell-flavored tooltip instead of a plain functional label.
3. The "This will also:" consequence bullet list was only observed with a single item (response deletion) — a form with active Automations/Contacts-sync/Integrations might surface additional bullets, not tested since the deleted form had none attached.
4. Whether deleting a page that's a Logic-jump or Automation-trigger target produces a different (more cautious) confirmation was not tested — only a plain, unreferenced question was deleted.
5. The toast's exact auto-dismiss duration was bracketed (4–6s) via screenshot timing, not measured precisely via a JS timer.
6. "Generate test response" (seen in the zero-responses empty state) was not exercised — unclear whether it fabricates one or several fake responses, and whether doing so counts against the account's response quota.
7. Deleting a Workspace itself (vs. a form) was not tested — the sidebar's workspace-level "..." menu only exposed Move up/Move down in this trace; a delete-workspace path, if any, was not located.

## Cross-Component Pattern Note
1. **Severity-tiered confirmation is now confirmed in some form across three of four products** (Google Forms' explicit scope-of-consequence gating; Typeform's whole-form-vs-question split; a milder version arguably present in Zoho's two-different-modals-for-two-different-triggers pattern) — but Typeform's version is the most extreme, since its lower tier gets literally nothing rather than a lighter-weight safety net like Google's toast-with-undo. Worth explicitly comparing "how low does the safety net go" across products in any future synthesis, not just whether tiering exists at all.
2. **A confirmed silent failure mode (valid-looking input, no persistence, zero user-facing signal)** is a new defect class for this library's Feedback category — distinct from every previously-documented "inconsistent" or "asymmetric" feedback finding (Google's non-dismissing toast, Paperform's zero-feedback form-delete) because here the system doesn't just under-communicate, it actively presents a false-success signal. Worth checking explicitly for this exact pattern (dialog closes normally + no toast + reload reveals nothing happened) on any future Feedback-category capture.
3. **Consistent brand-voice copy across Feedback surfaces** (casual, second-person, slightly self-deprecating) is a distinctive Typeform trait not yet confirmed or denied for the other three products' own Feedback copy — worth an explicit copy-voice comparison once all four products have this category captured.

## Sources
- OBSERVATION: Live trace on a real Typeform account (admin.typeform.com), 2026-09-28. Directly triggering transient/status UI across the app: copying a form link, deleting a form and deleting a question, hovering icon-only toolbar controls, visiting a zero-webhook Connect tab / zero-response Results tab / a freshly-created empty workspace, and cold-reloading the builder, via Claude browser extension.
