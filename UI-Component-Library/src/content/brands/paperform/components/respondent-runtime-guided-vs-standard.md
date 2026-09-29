---
component: "Respondent Runtime — Guided (One-at-a-time) vs. Standard (Classic) Rendering"
ui_category: "Navigation > Guided form flow"
source_product: "Paperform"
last_verified: "2026-09-23"
evidence_state: "source_reviewed"
status: 'complete'
summary: "The published respondent runtime -- confirms both Form Experience modes render one Draft.js document read-only, sliding-window field mounting in guided mode, and a confirmed publish-to-new-draft race bug that can silently revert a just-published mode change."
---

# Component: Respondent Runtime — Guided vs. Standard Rendering

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **Relationship to [[document-canvas-editor-shell]]:** this record covers the **published, respondent-facing** rendering of the same Draft.js document that record covers at authoring time — confirming (per [[paperform]] Section 3's "Form Experience" finding) that both respondent layouts are driven by one document source, not two separate schemas. It also contains a **correction to [[document-canvas-editor-shell]]'s Technical Data** — see Cross-Component Pattern Note below.
>
> **Relationship to [[typeform-form-mode-picker]]:** Paperform's Guided mode is the direct respondent-experience equivalent of Typeform's baseline one-question-per-screen rendering — see Competitor Comparisons.

## Location
- **Product:** Paperform
- **Screen(s) it appears on:** the published live form (`https://<slug>.paperform.co`), in either of two modes controlled by `configuration.details.guidedMode` (Form Experience: One-at-a-time = guided, Classic = standard). Tested on scratch form `xborqzxj`, published twice (once per mode) with 4 real questions.

## Structure
- **One runtime, two layout modes**, both rendering the same Draft.js document **read-only** (no `contenteditable=true` anywhere on the published page) — confirmed the respondent view is not a separately-generated form schema.
- **Mode signal:** a class on `<html>` — `body--live body--<slug> __guidedMode` or `… __standardMode`.
- **Data boot:** the entire form definition is **inlined into the HTML** — no API fetch loads it. `window._state` carries `{_id, slug, version, live, configuration, definition, theme, payment_source, currency, fields_with_answers, …}` (`definition` is the same Draft raw `{blocks, entityMap}` shape the builder PUTs); `window._initialForm` carries `{form, pagination}`, where `pagination.pages[n].fieldSections[]` maps each guided-mode screen to a document `blockKey`.
- **Guided mode:** `GuidedModeEditor` wraps the Draft root; fields render via `LiveFieldSection` → `LiveField` (+ per-type components like `YesNo`, `Rating`); a fixed 4px-tall `ProgressIndicator` sits at the top; a round → navigation button becomes Submit on the last screen; a `GuidedModeInstructions` element exists (empty in this test).
- **Standard mode:** no guided wrapper; all fields mounted at once; normal page scroll; a single Submit button at the end.

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| Yes/No field (guided mode) | Click an option | Auto-advance | Advances to the next screen **automatically** on answer — no explicit "Next" needed | Next screen |
| Text/Email field (guided mode) | Press Enter, or click → | Advance | Advances to the next screen | Next screen |
| → button, last screen (guided mode) | — | Becomes Submit | Button relabels/reconfigures to submit the form | Submission |
| Scroll up (guided mode) | Scroll | Attempted "back" | **No-op — does not navigate back.** No visible back control exists. Keyboard back was not tested. | Same screen |
| Publish (builder) | Click Publish | Promotes draft to live | Full config body PUT to `…/versions/<draftId>?publish=1`; `_state.version` increments on the live page; editor then opens a **new** draft via `PUT …/versions/` (no id) | Live page updates |

## Behavior & States
- **Guided mode field mounting:** a **sliding window of ~3 fields** (previous, current, next) — the next field sits below the fold, the previous one unmounts once passed. Standard mode mounts **all** fields (4 of 4 in this test).
- **Screen derivation:** guided-mode screens come from `pagination.pages[0].fieldSections`. **A multi-field `fieldSection` splits into one screen per field**, with suffixed block keys (`egnhp`, `egnhp_0`, `egnhp_1`) — confirming the "Draft inside Draft" multi-field entity structure flagged as unconfirmed in [[document-canvas-editor-shell]]'s Second-Pass Flags is real and does split per-field at runtime.
- **Prose placement in guided mode:** free-text prose (unstyled Draft blocks) between question cards appears **on the screen of the question that follows it** — the document's linear prose ordering maps directly onto screen boundaries.
- **Progress calculation:** read 0% → 33% → 67% → 100% across 4 screens — consistent with `screenIndex / (N − 1)`. This theme showed no numeric step counter alongside the bar.
- **Draft changes do not reach the live page:** confirmed directly — the draft had `guidedMode:false` while the already-published live page still rendered guided, until an actual Publish occurred.
- **A real publish-flow bug, directly observed once:** immediately after the first publish, the editor's "create new draft" call (`PUT …/versions/` with no id) carried the **pre-edit** configuration, which **overwrote the mode change** just published — a reload showed One-at-a-time again even though Classic had just been published. The change only stuck once the mode was toggled a second time after the new draft object existed. This is a genuine race/staleness bug in the publish→new-draft handoff, not a one-off misread.

## Rules & Validation
- The published page is fully decoupled from the draft's live edits — only an explicit Publish propagates changes, confirmed by direct before/after comparison.
- Partial answers are sent during guided-mode navigation via a dedicated endpoint (see Technical Data) even before final submission.

## Technical Data
> OBSERVATION, directly captured via browser DOM/JS/network inspection of the published form, Claude browser extension session, 2026-09-23.

- **Asset delivery:** one app bundle (`duube1y6ojsji.cloudfront.net/form-form-<hash>.js`) plus `paperform-form-assets/style-<hash>.css`, served via CloudFront — a CDN-fronted static respondent-runtime bundle, separate from the builder's own app bundle.
- **Network — during answering:** `POST /api/v1/form/<id>/partial` fires repeatedly as questions are answered (confirmed: test partial answers "Yes", `test@example.com`, "Test Person" were sent this way without a final Submit); `POST /api/v1/form/<id>/event` also fires; plus Clarity/GA/Meta Pixel telemetry, consistent with the builder's own telemetry footprint.
- **Network — publish:** `PUT …/versions/<draftId>?publish=1` (full config body) → live `_state.version` increments (observed guided-mode publish → v3, Classic-mode publish → v4 in this session) → editor opens a fresh draft via `PUT …/versions/` with no id. See Behavior & States for the confirmed race bug in this sequence.

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| Typeform (see [[typeform-form-mode-picker]]) | Guided mode matches Typeform's baseline one-question-per-screen rendering: auto/Enter-advance, a top progress bar, a final Submit | Typeform's rendering is confirmed to be the *only* respondent mode reachable on a free-plan account (no scrollable alternative exists at all per [[typeform-form-mode-picker]]) — simpler, one fewer axis of variation to get wrong | Paperform additionally interleaves authored document prose between questions on each guided screen, something Typeform's question-only model doesn't support; no back-navigation control was found in Paperform's guided mode, an apparent gap vs. typical conversational-form UX expectations (not confirmed absent in Typeform, since back-navigation wasn't specifically tested there either) |
| Zoho Forms | Standard mode matches Zoho's all-fields-visible scrolling canvas, plus Paperform's free-form authored prose between fields, which Zoho's field-only canvas doesn't support | — | — |

## Best Observed Approach
- **RECOMMENDATION:** Paperform's single-document-source-with-a-mode-flag architecture (confirmed at the respondent-rendering level here, not just claimed by the builder UI) is a genuinely distinctive approach — one authoring artifact produces either respondent experience, vs. Zoho Forms and Typeform each committing to one rendering model as a fixed product-wide architecture. The **publish-race bug** (a stale "new draft" PUT overwriting a just-published mode change) is a concrete weak point worth flagging regardless of the architecture's overall merit.

## Cross-Component Pattern Note
1. **Correction to [[document-canvas-editor-shell]]'s Technical Data (Network section):** that record described the builder's autosave as "debounced ~13–14s after the last keystroke." This pass's resource-timing data shows PUTs landing on a **steady ~15-second interval that fires only when state is dirty**, not a debounce restarted by each keystroke — e.g. observed at 17.4s, 32.4s, and 47.4s. **More significantly:** this pass also found that a **page break inserted during PF1's own test never actually reached the server** — it was missing after a reload, confirming real, concrete data loss from the "structural edits don't reliably arm the save" finding PF1 flagged as a risk, not just a timing curiosity. [[document-canvas-editor-shell]] should be read alongside this correction, not in isolation.
2. **Multi-field `fieldSection` entities are now confirmed real** (not just structurally plausible from the `data.fields` array, as PF1 left it) — guided mode's per-field screen-splitting behavior is direct runtime evidence.
3. **Native-DnD-and-drag-testing caution** established for [[document-canvas-editor-shell]] and [[entries-kanban-view]] doesn't apply here (no drag surface in the respondent runtime), but the **general lesson about not trusting a single capture pass for save/persistence correctness** clearly generalizes — worth remembering when judging any "does this actually save" finding elsewhere in this library as provisional until a reload/re-open check confirms it.

## Sources
- OBSERVATION: Live exploration + DOM/network inspection of the published Paperform form at `https://xborqzxj.paperform.co`, via Claude browser extension, 2026-09-23. Form was published twice (once per Form Experience mode) as part of this test — a genuine, intentional account-level change, not reverted, consistent with this project's practice for non-destructive test content. No final submission was made; only partial in-progress answers were sent via the `/partial` endpoint during guided-mode testing.
