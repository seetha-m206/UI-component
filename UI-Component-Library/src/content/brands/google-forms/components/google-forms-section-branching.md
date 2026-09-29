---
component: "Section-Based Branching (Conditional Navigation)"
ui_category: "Forms > Form"
source_product: "Google Forms"
last_verified: "2026-09-25"
evidence_state: "source_reviewed"
status: 'complete'
summary: "Section-based branching -- per-option and per-section-footer destination dropdowns confirmed working live (real navigation jump, skip-aware Back). Compared directly against Paperform's Question Visibility Logic: both share a silent-fallback-on-delete anti-pattern."
---

# Component: Section-Based Branching (Conditional Navigation)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **Compared against [[paperform-question-visibility-logic]] (PF10)**, Paperform's own conditional-logic component — now accessible and read directly when filing this record, resolving the "pending" cross-link flagged in the original pass.

## Location
- **Product:** Google Forms
- **Screen(s) it appears on:** Builder — a Multiple-choice question's ⋮ menu → "Go to section based on answer," and every non-last section's own footer. Tested on the reused test form (`1jXL4eFIxzAtW7-7NDo7v5EWGb28DmnkfyWijfmQPPeg`), building a real 3-section branching tree: Section 1 ("Do you want to skip section 2?", Multiple-choice with per-option branching), Section 2 (left empty, "should be skipped"), Section 3 (the skip target, containing the pre-existing Feedback/Satisfaction/Rating/Linear Scale questions).

## Structure
- Branching exists at **two independent levels**: **per-option** (once a Multiple-choice question has "Go to section based on answer" toggled on, every option grows its own destination dropdown next to the option text, replacing the section's single shared footer for that path) and **per-section footer** (every section except the last renders "After section N: [destination] ▾" below its last question — applies when a respondent reaches the section's end through a non-branching question, or through a branching question's own unset default).
- Both dropdowns offer an **identical destination set**: "Continue to next section," then one row per section in the entire form ("Go to section N (Title)," using each section's live title), followed by "Submit form" as the last entry. This list includes the current section and every earlier section too, not just later ones — a self-loop or backward loop is a selectable, unvalidated menu option.

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| "Yes, skip to section 3" option | Click, on the live `/viewform` | Follows the branch | Jumps straight to "Section 3 (skip target)" — confirmed via screenshot, no trace of "Section 2" ever rendering. A real navigation jump, not a hide-in-place; Section 2's content is never sent to or painted in the respondent's view | Section 3 |
| Back button (from Section 3, arrived via the skip) | Click | Skip-aware back navigation | Returns directly to Section 1 — Section 2 is not resurfaced, and the previously-selected "Yes, skip to section 3" answer is still shown selected. The Back stack respects the branch actually taken, not the form's linear section order | Section 1 |
| Two options in the same question | Both set to "Go to section 3" | Convergent branching | **No validation error, warning, or blocking of any kind** — each option's destination is fully independent; convergent branches (multiple paths funneling into one section) are supported with no special handling needed | Same screen |
| Section 3 (the referenced destination) | Delete via its own ⋮ menu → "Delete section" | Removes the section that both a per-option rule and a section footer point to | See Behavior & States — the dangling reference resolves silently, not via a block or warning | Same screen |

## Behavior & States
- **Deletion of a referenced section is not blocked, and the confirmation shown discloses nothing about the branching rules that reference it.** The only confirmation is the generic one: "Delete questions and section? Deleting a section also deletes the questions and responses it contains. To preserve the questions, choose 'Merge section up' from the section options." — no mention of the two branching rules pointing at the section about to disappear, no count of "N rules point here," no extra warning step.
- **The per-option dropdown silently falls back to the default.** After deletion, re-opening the question showed "Yes, skip to section 3"'s destination had reset to "Continue to next section" — no error state, no "broken reference" indicator, and no visual distinction from an option that had always pointed there.
- **The footer control simply disappears — a structural side effect, not an explicit error state.** Section 2 became the new last section, and the last section in a Google Form never renders an "After section N" footer at all — this isn't Google specifically handling the dangling-reference case, it's a side effect of the referencing section's own position changing as a result of the deletion.
- **Net: Google Forms resolves a dangling section reference the same way it would handle an option that had simply never been set** — silent reset to the safe default (continue/submit), never a build-time or save-time error, never a block on the deletion itself.

## Rules & Validation
- No forward/backward-loop validation — the destination dropdown offers every section in the form (including earlier ones and the current one) with no restriction.
- Not tested end-to-end: whether Forms actually re-renders an earlier section mid-response if a backward loop is selected and driven live, or how Back behaves after a backward loop specifically (only a forward-pointing reference being deleted was tested).

## Technical Data
> OBSERVATION, directly captured via `read_network_requests` while diffing an ordinary text edit against a branching-rule change, Claude browser extension session, 2026-09-25.

- **Same save mechanism as any ordinary edit — no separate or additional endpoint for a branching-rule change.** Both a trivial text-field commit and a destination-dropdown change fire the identical `POST https://docs.google.com/forms/u/0/d/{formId}/save?id={formId}&sid={sessionId}&vc=0&c=0&w=1&flr=0&token={token}&ouid={userId}`, status 200 — different payload body (not inspectable as structured data from `read_network_requests`, which reports URL/method/status only), but the same generic per-edit save request.
- **Incidental finding while diffing the two captures:** every edit is also accompanied by a `POST .../naLogImpressions` analytics ping and a `POST .../font/getmetadata` call, both returning **404** in every capture taken this pass — an apparently broken or deprecated telemetry/metadata endpoint firing on every edit regardless of type, unrelated to whether the save itself succeeds. Also present: a long-lived `/bind?...RID=rpc...TYPE=xmlhttp` channel connection (the same Google real-time-collaboration long-poll already confirmed in [[google-forms-responses-view]]), a standing connection rather than a per-edit request.

## Competitor Comparisons
| Capability | Google Forms (this record) | Paperform (see [[paperform-question-visibility-logic]], PF10) |
|---|---|---|
| Logic model | **Section/page-level routing** — a per-option or per-section-footer destination dropdown that jumps the respondent to a different section entirely | **Per-field visibility** — a `[question][operator][value]`+And/Or+nested-group condition builder that shows/hides an individual question, evaluated at the question level, not the page level |
| Rule targets | Any section in the form, including earlier ones and the current one (self/backward loops are selectable, not validated against) | Any *other* question, including ones placed after the configured question (forward references), per PF10's own confirmed finding |
| Runtime mechanism (guided/paginated mode) | A real navigation jump — the skipped section is never sent to or painted in the respondent's view at all | Paperform's Guided mode **skips the dependent screen** at the pagination level (confirmed in PF10) — a close structural parallel to Google's section-skip, despite the two systems operating at different granularities (section vs. field) |
| Runtime mechanism (non-paginated / classic mode) | Not applicable — Google Forms doesn't have a non-sectioned "show/hide in place" mode for this feature; branching only manifests as a page jump | Paperform's Classic mode **unmounts/remounts** the dependent question from the DOM (confirmed in PF10) — the direct field-level equivalent of Google's section-level jump |
| Deleting a referenced target | **Silent fallback to the default** ("Continue to next section") — no warning, no block, no broken-reference indicator | **Silent orphaning** — confirmed in PF10, the rule row shows a blank "Choose question" with no warning and no dependency check. **The same underlying anti-pattern in both products**: neither warns or blocks when a referenced target is deleted, though Google's fallback is arguably gentler (resets to a still-functional default) vs. Paperform's orphaned/broken rule state |
| Save mechanism for a rule change | Rides the identical generic per-edit save request as any other field mutation — no separate endpoint | Rides the identical full-document draft-save PUT as any other field mutation (confirmed in [[document-canvas-editor-shell]]) — **the same architectural pattern in both products**: conditional-logic rules are not a separately-persisted concept, they're folded into the same generic save path as everything else |

## Best Observed Approach
- **RECOMMENDATION:** the two products solve structurally different problems that happen to overlap at the edges — Google Forms routes at the section/page level (coarse-grained, good for genuinely different question sets per branch), while Paperform's Question Visibility Logic operates at the individual-field level (fine-grained, good for showing/hiding one question inline). Neither is strictly better; they answer different design questions. On the one dimension that's directly comparable — **what happens when a rule's target is deleted** — both products share the same real anti-pattern (no warning, no block), though Google's silent-fallback-to-default is a marginally safer failure mode than Paperform's silent-orphaning, since Google's fallback destination is still a valid, functioning choice rather than a broken rule row.

## Cross-Component Pattern Note
1. **This resolves the "pending" cross-link explicitly flagged in this record's own original capture** — the researching session had no access to the rest of this Research-Library and could not confirm whether PF10 existed; it does, and the comparison above was written by reading both records directly, not by guessing at Paperform's behavior from the task brief alone.
2. **A shared anti-pattern confirmed across two independently-built conditional-logic systems in two different products**: neither Google Forms' section-routing nor Paperform's field-visibility-logic warns or blocks when a rule's referenced target is deleted — both resolve to a silent, non-erroring fallback. Worth checking for a third data point if a comparable conditional-logic feature is ever captured for Zoho Forms or Typeform.
3. **Both products fold conditional-logic rule changes into their existing generic save mechanism rather than persisting rules as a separate concept** — a second confirmed instance of this specific architectural convergence (section/field-visibility rules aren't special-cased at the persistence layer in either product).

## Sources
- OBSERVATION: Live, logged-in exploration of Google Forms, via Claude browser extension, 2026-09-25. Built a real 3-section branching tree on the reused test form, drove the published `/viewform` page with real clicks to verify the skip and the Back button, inspected the section-footer and per-option destination dropdowns directly in the editor, deleted the referenced section to observe the fallback behavior, and diffed live network traffic between an ordinary text edit and a branching-rule change. The Competitor Comparisons section was originally left pending (that session had no access to this Research-Library, confirmed via a filesystem search that returned no results) — completed here by reading [[paperform-question-visibility-logic]] directly.
