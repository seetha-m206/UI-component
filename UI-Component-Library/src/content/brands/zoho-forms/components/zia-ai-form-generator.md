---
component: 'AI Form Generator ("Zia AI" / "Images to Form")'
ui_category: 'Actions/Controls > AI assistant'
source_product: 'Zoho Forms'
last_verified: '2026-09-18'
evidence_state: 'source_reviewed'
status: 'complete'
summary: "A single-shot, stateless AI form generator ('Zia AI') — one prompt drives a synchronous PUT call that fully replaces the field schema on every Generate/Regenerate; a real form is created only on explicit 'Create Form,' the opposite of Typeform Copilot's iterative JSON-Patch model."
---

# Component: AI Form Generator ("Zia AI" / "Images to Form")

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **Relationship to [[typeform-ai-chat-to-create]]:** this record documents Zoho Forms' AI form-generation feature and is the direct Zoho-side comparison point for [[typeform-ai-chat-to-create]] (Typeform's "Chat to Create" / "Ask Typeform AI" / internally "Copilot"). The two sit at opposite ends of the same design space — see Competitor Comparisons and Best Observed Approach below, and that record's own Competitor Comparisons table for the reverse direction.

## Location
- **Product:** Zoho Forms
- **Screen(s) it appears on:** Dashboard → "+ New Form" → "AI Forms" card ("Generate forms instantly with Zia AI") → prompt modal → generating status screen → preview-and-regenerate result screen → (only on "Create Form") the standard form builder.

## Structure
Three screens, not two:
1. **Prompt modal** — description textarea, Content Tone dropdown, sample-prompt chips, "Generate Form" button.
2. **Generating status screen** — an animated Zia orb with a 4-line status ladder that cycles in order: "Analyzing your request…" → "Finalizing the title, required fields, and labels…" → "Generating preview…" → "Here's your AI-generated form…".
3. **Preview-and-regenerate result screen** — a live-rendered form mockup on the left, plus a persistent "Regenerate Form" panel on the right (edit the description, change tone, hit Regenerate) and a "Create Form" button at the bottom. Only clicking "Create Form" takes you into the real, normal form builder — there is no separate AI-only builder view.

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| "AI Forms" card | Click | Opens prompt modal | Modal appears with description textarea, Content Tone dropdown, sample-prompt chips | Prompt modal |
| Description textarea / Content Tone dropdown | Edit | Client-side field edit | Local field state updates; not submitted until Generate/Regenerate is clicked | Same screen |
| "Generate Form" button | Click | `PUT /pfmaiformtemplate` (first call) | Generating status screen plays (animated orb + 4-line status ladder); response schema is persisted server-side as a template | Preview-and-regenerate screen |
| "Regenerate" button (in Regenerate Form panel) | Click | `PUT /pfmaiformtemplate` (repeat call), full-document replace | Entire question set is replaced — not incrementally edited — and the preview re-renders with the new set | Same screen |
| "Create Form" button | Click | Persists the template as a real, permanent form | Form appears in My Forms immediately, dated today, fully editable in the standard builder like any other form | Standard form builder |

> Only clicking "Create Form" persists a real form; "Generate"/"Regenerate" persist a template only (see Rules & Validation).

## Behavior & States
- **Default state:** prompt modal open, empty description textarea, sample-prompt chips available for quick-start.
- **Loading/generating state:** animated Zia orb plays alongside the 4-line status ladder, advancing in a fixed order (Analyzing → Finalizing fields → Generating preview → done).
- **Preview state:** live-rendered form mockup + persistent Regenerate panel + Create Form button — the result screen doesn't change shape between the first Generate and any subsequent Regenerate.
- **Regenerate behavior:** directly tested by appending "plus add a final open-ended comment box" to the original prompt and clicking Regenerate — the *entire* question set changed, not just an appended field, confirming a full-document replace rather than an incremental edit.
- **Committed/saved state:** reached only after "Create Form" — verified live in My Forms (appeared instantly, dated today, fully editable).

## Rules & Validation
- **Stateless, single-shot generation:** the request body carries only the current full description text and a tone value — no field IDs, no prior-turn history, nothing carried forward between calls.
- **Full-document replace, never a patch:** every Generate/Regenerate call returns a complete, flat field list that fully replaces whatever preview is currently shown.
- **Two-stage persistence:** the mid-flow `PUT` already persists the generated schema as a template, but that is not yet a real form. A real, permanent form is created only on the explicit "Create Form" click.

## Technical Data
> OBSERVATION, captured via a fetch/XHR interceptor (request/response bodies aren't otherwise exposed by URL/method/status logging alone), live exploration session, 2026-09-18. Tested end to end with the prompt "Customer satisfaction survey with 5 questions."

- **DOM:** not captured as raw markup this session — only the structural elements described above (description textarea, Content Tone dropdown, sample-prompt chips, animated status orb/ladder, live form-mockup preview, Regenerate panel, Create Form button) were observed; exact class names/selectors were **NOT OBSERVED** this pass (no DOM tree was pulled, unlike e.g. [[new-form-chooser]]'s full HTML captures).
- **JavaScript:** not independently inspected for handler names this pass; behavior below is confirmed via the network trace and direct before/after testing, not via source inspection.
- **Network:**

| Call | Fires | Request body | Response |
|---|---|---|---|
| `POST /platformaiorg` | Once, when the modal opens | — | Org-level entitlement/capability check — not part of generation itself |
| `PUT /pfmaiformtemplate` | Every "Generate Form" and every "Regenerate" click | `{"content":"<full current description text>","tone":"1"}` | `{"fields":[{type, display_name, mand, choices?}, ...], "form_name":"..."}` |

- **Response shape:** a flat, complete field list plus a form name (see table above) — no partial/diff structure of any kind.
- **State change:** the mid-flow `PUT` persists the generated schema as a template (not a real form); a real form object is created and persisted only when "Create Form" is clicked — confirmed by the new form appearing immediately in My Forms, dated today, fully editable like a hand-built form.
- **CSS:** not captured in detail this pass beyond the animated Zia orb during generation — exact styling/timing **NOT OBSERVED**.
- **Animation/transition:** an animated orb plays during the generating-status screen; no further animation detail (easing, duration) was captured this pass.

## Competitor Comparisons
| Aspect | Zoho Forms ("Zia AI" / Images to Form) | Typeform ("Chat to Create" / Copilot — see [[typeform-ai-chat-to-create]]) |
|---|---|---|
| Execution model | Single-shot, stateless: one synchronous `PUT` per Generate/Regenerate, full-schema replace each time — no field IDs, no prior-turn history carried forward | Iterative, multi-turn: the AI decomposes the request into a plan → named/ID'd actions → JSON Patch operations applied against the existing form-draft document |
| Persistence | Mid-flow `PUT` persists the schema as a template (not a real form); a real form is created only on explicit "Create Form" | Form shell created server-side almost immediately after the first prompt; AI-generated content is staged as suggestions until an explicit "Create form" click |
| Conversation | No true multi-turn conversation — a preview-and-regenerate loop where every Regenerate fully replaces the question set | A genuine chat thread supporting follow-up prompts, with the AI explicitly inviting further refinement ("Is there anything else you'd like to include?") |
| Editing granularity | Whole-document replace on every call | Reversible, inspectable JSON Patch operations against the form data model |

## Best Observed Approach
- **RECOMMENDATION:** based on the two approaches directly observed this session (this record's Technical Data above, and [[typeform-ai-chat-to-create]]'s Network section), Typeform's plan → actions → JSON Patch Copilot model is the more sophisticated, agentic approach — reversible/inspectable operations and genuine multi-turn refinement make it better suited to iterative form-building. Zoho's Zia AI Forms is simpler, faster, and more predictable (one text box, one synchronous call, an explicit manual "Create Form" step) but reads as a form generator bolted onto a builder rather than an agentic co-editor. Typeform's design looks like the stronger long-term pattern for iterative form-building; Zoho's is preferable when speed/predictability/simplicity matter more than iterative refinement.

## Sources
- OBSERVATION: Live exploration of Zoho Forms (forms.zoho.in) via Claude browser extension, 2026-09-18. Tested end-to-end from "+ New Form" → "AI Forms" with the prompt "Customer satisfaction survey with 5 questions," across two passes over the same feature (the second pass's wording — specifically "Generating preview…" for the third status-ladder line — is treated as primary/corrected over the first pass's "Almost done!…"). Network requests captured via a fetch/XHR interceptor since request/response bodies aren't otherwise exposed.
