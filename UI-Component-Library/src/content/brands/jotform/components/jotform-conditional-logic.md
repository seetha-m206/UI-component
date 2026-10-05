---
component: "Conditions (field-level show/hide and broader conditional-logic builder)"
ui_category: "Logic > Conditional Visibility"
source_product: "JotForm"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
status: 'complete'
summary: "The broadest conditional-logic system of three now documented in this library -- nine distinct action types spanning both field-level show/hide and page-level skip -- and the only one of the three to surface an explicit, persistent error when a referenced field is deleted, though none of the three warns before deletion happens."
---

# Component: Conditions (Field-Level Conditional Logic Builder)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **Pass ID: JF8, first prompt in the Part C backlog.** Resolves a field-level conditional-logic rule built live on the Coffee Shop Feedback Form (show "What is your favorite drink?" only if "Do you visit our coffee shop?" == "Yes"), covering the authoring UI, the full set of action types offered, respondent-facing show/hide behavior, and a silent-dependency-breakage check against both existing conditional-logic records in this library.

> **Reconciliation note (filing pass, 2026-10-05):** the capturing browser-extension session had no file access to this library and flagged its Competitor Comparisons content as "ready to paste" into [[paperform-question-visibility-logic]] and [[google-forms-section-branching]] for a human to merge. The filing pass opened both records directly and merged a JotForm column into their actual tables in place — see those records for the merged, canonical comparisons; this file's own Competitor Comparisons section below is kept as the JotForm-side narrative detail. The capturing session also correctly flagged that neither Zoho Forms nor Typeform has a conditional-logic record in this library yet — confirmed true as of this filing; both [[paperform-question-visibility-logic]] and [[google-forms-section-branching]] already carry a standing note to that effect, so no new stub was needed beyond what already exists.

## Location

Reached via SETTINGS → CONDITIONS ("Set up conditional logic") in the Form Builder's left-nav settings list — a sibling entry alongside Form Settings, Emails, Notifications, Integrations, Thank You Page, Documents, confirming the sub-nav structure already documented in [[jotform-app-shell-builder]]. FACT The Conditions landing page is a flat list of all saved rules for the form (initially empty), with a prominent "+ Add Condition" button, a Search box, and two filter dropdowns (All Types, All Fields) for finding existing rules once a form has several. FACT

## Structure

**1. Authoring UI is a visual, structured if/then rule builder — not a constrained preset picker.** FACT Clicking "+ Add Condition" opens a picker of nine discrete condition/action types, each with its own icon, name, and one-line description (full enumeration under Actions below), plus a separate AI-powered "Describe your conditions" free-text box at the top of this picker ("e.g. If the email is empty do not show submit button" → "Generate") that can draft a rule from natural language — not tested end-to-end this pass, but present and visually prioritized above the manual picker list. FACT Selecting a condition type (Show/Hide Field was used for this test) opens a structured IF / STATE / VALUE block (field picker → operator picker → value picker, the value picker auto-becoming a dropdown of the chosen field's own answer options when that field is a choice-type field) paired with a DO / FIELD action block (action picker → target-field picker). FACT This is a genuine field/operator/value picker UI, not a small set of named presets with no customization.

**2. Multiple conditions ARE combinable with AND/OR — but only as a single flat toggle across all IF rows, with no nested/grouped sub-conditions.** FACT Clicking the "+" button beside the IF block adds a second IF row to the same rule. The moment a second IF row exists, a connecting banner appears: "IF [Any ▾] OF THE 'IF' RULES ARE MATCHED," where the dropdown offers exactly two options — Any (OR) and All (AND). FACT This combinator is global to the whole condition — every IF row in that one rule is combined with the same Any/All setting; there is no UI affordance observed for grouping a subset of conditions under their own AND while another subset uses OR within the same rule. FACT This is a materially flatter model than Paperform's own confirmed "Multiple Condition Group" nested-grouping primitive (same condition grammar reused across Paperform's Visibility Logic, Pricing Rules, and Report Segments). A separate "+" button beside the DO block similarly allows chaining multiple actions off the same condition — identified by inspection but not built out multi-action this pass. OBSERVATION

## Actions

| Condition/action type | One-line description (as labeled in the picker) | Notes |
|---|---|---|
| Show/Hide Field | "Change visibility of specific form fields" | Used for this test; DO sub-options were Hide / Show / Hide Multiple / Show Multiple |
| Update/Calculate Field | "Copy a field's value or perform complex calculations" | Not opened this pass |
| Enable/Require/Mask Field | "Require or disable a field, or set a mask" | Confirmed to exist — JotForm's equivalent of a "require a field conditionally" action, which neither sibling record documents |
| Update Options (NEW) | "Change dropdown, single-choice, and multiple-choice options" | Dynamically alters a choice field's own answer list based on another field's value |
| Update Product List (NEW) | "Show or hide products in a payment field" | Payment-field-specific |
| Skip to/Hide a Page | "Skip to or hide a specific page" | JotForm's equivalent of Google Forms' section-jump model, but as one action type among nine rather than the product's only logic mechanism |
| Change Thank You Page | "Customize your Thank You page action" | Confirmed to exist; whether it includes a URL-redirect sub-mode was not opened to confirm (see Second-Pass Flags) |
| Change Email Recipient | "Send emails to specific people" | Confirmed to exist — no equivalent documented for either sibling product |
| Run Workflow (NEW) | "Trigger your form workflow when a specific condition is met" | Ties conditional logic into Jotform's separate Workflow Builder product — see [[jotform]] Section 15's still-open "Workflows as a product" item, now confirmed to have at least one direct integration point with Conditions |

FACT — all nine were enumerated by scrolling the full "+ Add Condition" picker list; none were assumed. This is a substantially richer action set than either sibling record documents: Paperform's own Question Visibility Logic has no action selector at all ("show this question only when the conditions match" is the only possible meaning — no "then" clause), and Google Forms' section branching has exactly one action (jump to a section). JotForm's nine distinct, named action types — including page-skip (Google's whole mechanism, here just one option among nine) and field-level show/hide (Paperform's whole mechanism, same relationship) — makes this record's comparison point the broadest conditional-logic system of the three now documented in this library.

| Builder control | Input | Result |
|---|---|---|
| SETTINGS → CONDITIONS → "+ Add Condition" | Pick one of 9 condition/action types | Opens that type's IF/STATE/VALUE + DO/FIELD rule editor |
| IF block → field dropdown | Select a form field | Populates STATE (operator) choices appropriate to that field's type |
| STATE dropdown (choice-type field) | Is Equal To / Is Not Equal To / Is Empty / Is Filled | Sets the comparison operator |
| VALUE dropdown (choice-type field) | Auto-populated from the IF field's own answer options | Sets the comparison target (no free-text typing needed/possible for choice fields) |
| "+" beside IF block | — | Adds another IF row + reveals the Any/All combinator banner |
| DO block → action dropdown | Hide / Show / Hide Multiple / Show Multiple (for Show/Hide Field type) | Sets what happens when the IF condition(s) match |
| SAVE | — | Persists the rule; returns to the Conditions list showing a plain-English summary card of the saved rule |

## Behavior & States

**3. Respondent-facing visibility change is an instant snap, not an animated fade/slide-in — confirmed via DOM inspection.** FACT Verified with a `MutationObserver` attached to the target field's container element (`<li id="id_3">`) on the live published form (same-origin; the builder's own embedded Preview Form panel runs cross-origin and could not be inspected this way). Triggering the condition produced a single discrete mutation: the container's `display` computed style flipped directly from `none` to `flex` in one step, with `opacity` holding constant at `1` throughout and no `animationName`/relevant `transition` applied to `display`/`opacity`/`height`. FACT The field snaps into view instantly, with no animate-in effect — matching neither Paperform's confirmed DOM-unmount/remount nor an animated reveal, just an instant CSS display toggle.

**4. A stale answer DOES persist across hide → re-show — confirmed on the live form.** FACT With "Do you visit our coffee shop?" set to "Yes," the newly-shown "What is your favorite drink?" field was filled with "Cappuccino." Switching to "No" hid the drink field; switching back to "Yes" re-revealed it with "Cappuccino" still present, unchanged and unprompted. FACT This matches Paperform's own confirmed default behavior (its "Question keeps answer when not visible" toggle, on by default) rather than contrasting with it — both products default to persisting a hidden field's value across a hide/re-show cycle. Whether a hidden field's value is actually excluded from a submitted payload while hidden was not independently confirmed for JotForm, mirroring the same open question flagged in Paperform's own record.

**5. Silent-dependency-breakage check: the field IS deletable with no dependency-specific warning at delete-time, but the orphaned rule is NOT silently broken afterward — JotForm surfaces an explicit error.** FACT — the most notable comparative finding in this record. Two sub-findings:

- **At delete-time:** selecting the "Do you visit our coffee shop?" field on the BUILD canvas revealed a third icon (beyond the usual gear/trash) — a small org-chart-style icon with the tooltip "Conditions" — confirming JotForm visually flags, right on the canvas, that a given field is referenced by at least one saved condition. FACT Clicking the field's trash icon nonetheless produced only JotForm's generic delete-confirmation dialog, which makes no mention of the field being used in a Conditions rule, despite the field visibly carrying the Conditions badge one click earlier. Deletion was not blocked. FACT So: the builder has the information needed to warn specifically about the dependency (it renders the badge) but does not surface that information in the deletion-confirmation flow itself — a real, confirmed usability gap, though a narrower one than either sibling product's own confirmed gap (see Competitor Comparisons).
- **After deletion:** SETTINGS → CONDITIONS showed the rule's IF-field reference rendered as a bright red "MISSING FIELD" label, directly under which the UI printed: "ERROR: One or more fields have been deleted which are required by this condition." FACT This is a clear, explicit, persistent error state in the builder — a form owner opening Conditions after the fact cannot miss it. This is a materially better outcome than either Paperform's confirmed silent orphaning (a blank "Choose question" row, no warning anywhere) or Google Forms' confirmed silent fallback-to-default (no error state at all, just a quiet reset).
- **Respondent-facing fallback for the broken rule — "fails open," not "fails closed."** FACT, additional finding beyond the original brief's explicit ask. Previewing the live published form after deletion showed "What is your favorite drink?" permanently visible by default — the broken condition does not hide the field defensively; the field reverts to its original always-visible state. A form owner who doesn't separately check the Conditions tab (which does clearly flag the error) could ship a field unconditionally shown to every respondent, with no error visible to the respondent and no second warning anywhere else in the builder (not on PUBLISH, not on the BUILD canvas itself after deletion — only on the Conditions settings list specifically).

## Rules & Validation

- STATE operators available for a choice-type IF field: Is Equal To / Is Not Equal To / Is Empty / Is Filled (full enumeration, confirmed by opening the dropdown). Narrower than Paperform's own confirmed operator set for a Yes/No source question (is · isn't · is answered · isn't answered · contains · doesn't contain) — JotForm has no confirmed "contains"/"doesn't contain" equivalent on a choice field (not tested against a text-type IF field, where the operator set is presumably different; see Second-Pass Flags).
- The VALUE field for a choice-type IF field is constrained to a dropdown of that field's own existing answer options — free text cannot be typed as a comparison value against a choice field.
- DO actions for the Show/Hide Field type: Hide / Show / Hide Multiple / Show Multiple (full enumeration, confirmed by opening the dropdown).
- Deleting a field referenced by a condition is permitted unconditionally — no validation blocks it, confirmed above. This matches both sibling products' own confirmed behavior (neither Paperform nor Google Forms blocks deletion of a referenced field/section either) — a shared anti-pattern now confirmed across all three conditional-logic systems documented in this library, though JotForm's post-deletion error surfacing is the most informative of the three.

## Technical Data

- Target field container observed as `<li id="id_3" class="form-line jf-required">` on the live published form; hidden state is implemented as inline/computed `display: none`, toggled directly to `display: flex` with no transitional CSS — confirmed via `getComputedStyle` and a `MutationObserver`.
- The Form Builder's embedded "Preview Form" panel runs the live form inside a cross-origin iframe (`id="JF-PreviewFrame"`, served from `form.jotform.com` while the builder itself is on `www.jotform.com`) — `contentDocument` access from the builder page's own JS context is blocked by same-origin policy. Worked around by opening the published form URL directly in its own tab.
- Radio inputs for a Single Choice field are addressed as `input_{fieldID}_{optionIndex}` (e.g., `input_8_0` for the first "Yes" option on field 8).
- Orphaned-condition error string, verbatim: "ERROR: One or more fields have been deleted which are required by this condition.", with the missing field's name replaced by the literal placeholder text "MISSING FIELD" rendered in red/error styling.
- No separate network endpoint was isolated for saving a Conditions rule this pass — unlike Paperform's confirmed shared full-document draft-save `PUT` and Google Forms' confirmed shared generic per-edit `POST .../save`, JotForm's Conditions save mechanism was not independently traced at the network level this pass. OBSERVATION gap, flagged below.

## Competitor Comparisons

See [[paperform-question-visibility-logic]] and [[google-forms-section-branching]]'s own Competitor Comparisons tables — both now carry a merged JotForm column/row in place of a separate draft. Narrative summary:

JotForm's Conditions builder is the broadest of the three systems now documented in this library — nine distinct action types (where Paperform has one implicit action and Google Forms has one explicit action: jump), an AI-assisted authoring shortcut neither sibling has a documented equivalent for, and genuine (if flat, non-nested) multi-condition AND/OR support, narrower than Paperform's confirmed nested-group primitive but present where Google Forms' section model has no equivalent concept at all. On dependency-safety — the one dimension genuinely comparable across all three — JotForm lands in the middle in a specific, nuanced way: like both siblings, it does not warn or block at the moment of deletion (the same anti-pattern confirmed in all three products independently); unlike both siblings, it does not leave the broken rule silently unnoticed afterward — Paperform's orphaned rule renders a blank "Choose question" with zero indication anything is wrong, Google's fallback resets quietly to a still-functional default with no error state at all, while JotForm's Conditions list shows an explicit, persistent, impossible-to-miss "MISSING FIELD" / error line. INFERENCE for the ranking judgment, built directly on all three records' own confirmed facts.

## Best Observed Approach

The per-field "Conditions" badge icon on the BUILD canvas (shown only on fields actually referenced by a saved condition) is a strong, underused pattern worth calling out on its own — it gives a form editor at-a-glance visibility into which fields carry hidden logic without needing to open the Conditions tab separately, something neither Paperform's nor Google Forms' own confirmed UI is documented as having. RECOMMENDATION The gap is that this same information isn't carried through to the delete-confirmation dialog, which is the one moment it would matter most — a real, confirmed, fixable usability gap, not a fundamental architecture problem.

The explicit, persistent error surfaced for an orphaned condition ("MISSING FIELD" + the red error line on the Conditions list) is the strongest dependency-safety outcome of the three systems now compared in this library, independent of the delete-time gap — it means the failure mode is discoverable after the fact, not just silently avoidable or silently present. RECOMMENDATION: any future implementation of a similar feature should combine JotForm's post-deletion error surfacing with a delete-time warning neither JotForm nor either sibling product currently provides — none of the three products in this comparison set has solved both halves of the problem at once.

## Sources

- Live testing session, 2026-10-05, Coffee Shop Feedback Form (form ID 262771316349058) — field added, labeled, and configured as a 2-option Single Choice ("Yes"/"No") substitute for a dedicated Yes/No field type (confirmed not to exist in JotForm's Add Element palette per earlier passes in this project)
- Live respondent-facing testing on the published form, including direct DOM/`MutationObserver` inspection via the browser's JavaScript console
- Task brief JF8, cross-referenced and merged directly against [[paperform-question-visibility-logic]] and [[google-forms-section-branching]] during filing (2026-10-05) — superseding the capturing session's one-sided draft comparison.

## Second-Pass Flags

- Multi-action chaining (the "+" button beside the DO block) was identified in the UI but not actually built out and tested — unclear exactly which action types can be combined in one rule's DO sequence, or whether some combinations are restricted.
- "Change Thank You Page" was not opened to confirm whether it includes a URL-redirect sub-mode.
- The VALUE picker's behavior for a free-text (non-choice) IF field was not tested — this pass only built a condition against a Single Choice field. Whether a text/number/email-type IF field exposes a free-text VALUE input, and what operators it offers (likely more than the 4 seen here, e.g. "Contains," "Greater Than"), is unconfirmed.
- Whether a hidden field's value is actually excluded from the submitted payload (not just visually hidden) was not independently confirmed by inspecting a real submission's stored data.
- "Update Options," "Update Product List," and "Run Workflow" (all marked "NEW" in the picker) were identified and described from their one-line labels only — none were opened or tested.
- The AI "Describe your conditions" generator was seen but not exercised end-to-end.
- No network-level save mechanism was captured for a Conditions rule this pass — unlike both sibling records, which each confirmed their logic rules ride the product's existing generic save path. A future pass should confirm whether JotForm's Conditions rules are similarly folded into an existing save mechanism or persisted via a dedicated endpoint.
- Whether Zoho Forms or Typeform have a comparable conditional-logic feature remains unconfirmed in this library — both sibling records already carry this gap noted; this record doesn't resolve it either, since it's scoped to JotForm only.
