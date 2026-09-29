---
component: "Calculation Field + Calculation Editor + AI Helper"
ui_category: "Actions > AI assistant"
source_product: "Paperform"
last_verified: "2026-09-23"
evidence_state: "source_reviewed"
---

# Component: Calculation Field + Calculation Editor + AI Helper

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **No comparison baseline for the calculation engine itself** — neither [[zoho-forms]] nor [[typeform]] documents a formula/variable engine, spreadsheet-style functions, or answer-piping-into-expressions anywhere in this library. **The AI-interaction *pattern*, however, is directly comparable** across all three products' AI features — see Competitor Comparisons, which fills in the 3-way table this capture's own source material left as "(existing)" pending access to the other two records.

## Location
- **Product:** Paperform
- **Screen(s) it appears on:** Builder question card (Calculation field type) → its config drawer ("Hide this question", "Open Calculation Editor", Question ID) → the Calculation Editor modal (CALCULATION / HOW TO USE tabs). Tested on scratch draft `xborqzxj` — N1 Quantity (Number, key `cmlfb`), N2 Unit price (Number, key `17gdk`), C1 Total (Calculation, key `dn8ca`, hidden).

## Structure
- **Field shell:** the Calculation field is hidden from respondents by default (`hidden:true`); its formula is saved as a plain string (`field.calculation`) inside the form definition, riding the normal draft autosave.
- **Calculation Editor modal — CALCULATION tab:**
  - **Left: code pane** — confirmed to be **another Draft.js editor** (`FormTagInput Calculation__input`, not CodeMirror/Monaco/Ace), with syntax coloring for strings/comments/operators/`{{ }}` tokens. Valid field references render as dark pill chips labeled with the question's title, even though the stored text uses the raw question key (`{{cmlfb}}`). A "≡+" insert button opens a question picker showing a type-appropriate sample value per question (Yes/No → `Yes`, Number → `12345`, Price → `10`, etc.).
  - **Right: AI chat panel** — a transcript above a prompt textarea ("What do you want the calculation to do?"), with **Fix** (shown only while the formula has an error), **Format**, and **Send** controls.
  - **Bottom: Live Preview** — evaluates the current formula against the picker's sample values (not real respondent answers), showing plain-English parse errors when invalid.
- **HOW TO USE tab:** a searchable reference (left nav) covering Basic maths, Basic text, Working with answers (Answer Piping/Variables/Products), Logic, and Functions (Date and Time/Maths/Logical/Lookup/Text/Statistical/Errors/Information) — spreadsheet-style function names (IF, SUMIF, COUNTIF, DATEDIFF, AVERAGEIF, IFERROR, etc.).

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| "Open Calculation Editor" | Click | Opens the modal | CALCULATION tab active by default | Same screen (modal) |
| Code pane, typing `{{` | Type | Auto-close + autocomplete | Auto-closes to `{{ }}` and opens inline autocomplete (e.g. "N1 Quantity 12345"); Enter accepts | Same screen (modal) |
| Code pane, scripted/synthetic typing | Automated keystroke injection | **Unreliable** | Brace auto-close fought with injected input and produced garbage (`}}{{{ {{{ }}`) — a genuine automation-fragility finding, not necessarily a real-user-facing bug, but a confirmed rough edge in the same Draft.js-based-input-field family already flagged for [[document-canvas-editor-shell]] | Same screen (modal) |
| Code pane, **paste** of a formula | Paste | Reliable | Landed correctly (with one leftover stray character in this test), confirming paste is a more reliable input path than synthetic typing into this Draft.js field | Same screen (modal) |
| "Fix" button (formula has an error) | Click | Sends the broken formula + its parser error to the AI | Returns a proposed formula in a code block, a pre-computed **Result** card, and a plain-English explanation of what was changed | Same screen (modal) |
| Free-text prompt (e.g. "add a 10% discount if the quantity is over 5") | Type + Send | Sends prompt + current formula + history to the AI | Returns a **complete rewritten program** (not a diff) with a pre-computed Result and an explanation | Same screen (modal) |
| "Apply" (on an AI proposal) | Click | Commits the proposal | Code pane is replaced with the proposed formula; references re-render as chips. **The code pane is not touched until Apply is clicked** — proposals sit in chat only until then | Same screen (modal) |

## Behavior & States
- **A real calculation was confirmed correct end-to-end:** after cleanup via AI Fix, `{{cmlfb}} * {{17gdk}};` evaluated to `152399025` in Live Preview — exactly `12345 × 12345` using the Number-type sample values, confirming the formula engine itself computes correctly. A follow-up discount version evaluated to `137159122.5` (`152399025 × 0.9`), also correct given the sample quantity (12345) exceeds the discount threshold (5).
- **Adding a Calculation field triggered a proactive Intercom support message** in the editor — the builder's own internal events prompt live support outreach, a genuine, if minor, product-behavior finding.
- **The AI transcript persisted across closing and reopening the modal within the same page session** (not tested across a full page reload).
- Evaluation is always against the picker's **sample values**, never real respondent answers, in this editor context — testing against genuine live-form answers was out of scope for this pass (the field was never republished).

## Rules & Validation
- Field references use the syntax `{{ questionKey }}` with the raw 5-character question key (not the visible title) as the actual stored token — the chip rendering is a display-only convenience layer over the real reference syntax.
- Product sub-paths are supported: `.quantities.<SKU>`, `.selectedProducts` — directly connecting this field to [[paperform-payments-products-fields]]'s Products field data.
- Statements are `;`-separated; variables are assigned with `=`; the **last expression in the formula is the result** and cannot itself be an assignment. `//` starts a comment; `||` concatenates; `format()` takes `{}` placeholders.
- **Confirmed documentation bug:** the HOW TO USE tab's own `IF()` reference table describes the `if_false` parameter as "the value to return if test is **true**" — a real copy-paste error in Paperform's own docs, not a capture artifact.
- **Confirmed UI-content bug:** the question-reference picker shows a generic `"text"` sample value for a Rating-type question, which looks wrong/uninformative next to the type-correct samples shown for every other field type (Yes/No → `Yes`, Number → `12345`, etc.).

## Technical Data
> OBSERVATION, directly captured via browser DOM/network inspection, Claude browser extension session, 2026-09-23.

- **Network — AI calls, both first-party only (no third-party AI vendor host ever appeared in the session's resource list):**

| Action | Request | Notes |
|---|---|---|
| Fix | `POST https://paperform.co/api/v1/form/<slug>/calculations/debug` | Body: `{"prompt":"", "calculation":"<broken formula>", "calculationError":"<parser error text>", "history":[]}`. ~4.2s response time, 553 bytes. |
| Prompt | `POST https://paperform.co/api/v1/form/<slug>/calculations/update` | Body: `{"prompt":"<user request>", "calculation":"<current formula>", "history":[<prior turns>]}`. ~5.0s response time, 823 bytes. |
| Response shape (both) | Single JSON, not streamed | `{ "calculation": "<full new formula>", "explanation": "<text>" }` — the client evaluates the returned formula locally against sample values; the pre-computed Result shown in the UI is **not** itself present in the JSON response. |

- **Confirmed stateless-server, client-held-history model:** the client resends the **full conversation history** (every prior prompt/type/calculation/explanation) on each call — the server holds no session state between requests, consistent with the same pattern already documented for [[zia-ai-form-generator]] (though Zia is single-turn, so this history-resend behavior is new to this capture, not previously confirmed elsewhere in this library for a multi-turn Paperform AI feature).
- **AI usage is telemetered but the formula content is not:** `POST /api/v1/i-did-it` sends `["ai_calculations_debug", {action:"debug", target:"dn8ca", formSlug:"xborqzxj"}]`; the same event is separately forwarded to Google Analytics (`en=ai_calculations_debug`) and Meta Pixel (`ev=ai_calculations_debug`, with `formSlug`/`target`) — but the actual formula text was confirmed **not present** in any of these analytics payloads.
- **Vendor/model identity is confirmed hidden** — the AI call is proxied entirely server-side through `paperform.co`; no OpenAI/Anthropic/Gemini/Azure/Bedrock host is reachable or inferable from client-side network traffic.

## Competitor Comparisons

**Calculation engine itself:** *(no comparison possible — neither [[zoho-forms]] nor [[typeform]] documents an equivalent formula/variable engine)*

**AI-interaction pattern** (the domain differs — a formula vs. a whole form — but the interaction *model* is directly comparable):

| Dimension | Paperform Calc AI (this record) | Zia AI form generator ([[zia-ai-form-generator]]) | Typeform AI chat-to-create ([[typeform-ai-chat-to-create]]) |
|---|---|---|---|
| Turn model | **Iterative, multi-turn** — client resends the full history on every call; server is stateless per request | **Single-shot, stateless** — no field IDs or prior-turn history ever sent; each Generate/Regenerate is independent | **Iterative, multi-turn** — a real conversation thread with a follow-up prompt input; the server holds conversation state via a `conversationId` (opposite of Paperform's client-held-history model) |
| Output granularity | **Full replace** — the response is the entire new formula, never a patch/diff | **Full replace** — every call returns a complete flat field list, confirmed via a direct before/after test (appending one instruction changed the *entire* question set, not just one field) | **Structured JSON Patch** — `op: "add"`, `path: "/fields/-"` operations against a `working_copies.current_form_draft` object; the most granular/reversible of the three |
| Commit model | **Propose → preview → explicit Apply** — nothing touches the artifact until Apply is clicked | **Two-stage** — the mid-flow call already persists a template, but a real form exists only after explicit "Create Form" | **Staged suggestions → explicit "Create form"** — a "Discard form suggestions?" guard fires if the chat is closed first, confirming the same staged-not-committed model |
| Grounding | The current formula **and the live parser error** (for Fix) are sent with the prompt — error-grounded repair | The current full description text and tone value | The current conversation + a `current_form_draft` working copy |
| Verification aid | A **pre-computed Result** (evaluated on sample values) shown beside every AI proposal | The regenerated field list itself, rendered live in the preview pane | A structured "Suggested changes" outline (Questions to be set) plus a Preview tab, shown before commit |
| Vendor/model visibility | **Hidden** — first-party proxy only, no third-party AI host observable | Not independently re-verified for vendor visibility in that record | Not independently re-verified for vendor visibility in that record |
| Transport | Single JSON response, ~4–5s, not streamed | Single JSON response via `PUT /pfmaiformtemplate` | Multi-step: a `plan/actions/{id}/start` call returns JSON Patch operations, then a separate `PUT /drafts/{formId}` persists the draft |

**Patterns worth recording as genuinely comparable across all three AI builders:**
1. **Full-replace output behind an explicit commit gate** is now confirmed 2-of-3 (Paperform Calc AI, Zia) vs. Typeform's more granular patch-based model — a real, meaningful architectural split, not just a wording difference.
2. **A pre-computed/staged preview attached to every AI suggestion before commit** is confirmed for all three, in different forms (a Result value, a live-rendered mockup, a structured outline) — this looks like a convergent best practice across independently-built AI form/formula assistants.
3. **Error-grounded repair** (sending the actual parser error alongside a fix request) is a Paperform-specific pattern not yet confirmed for either sibling — worth checking for in future Zia/Typeform AI captures.

## Best Observed Approach
- **RECOMMENDATION:** Paperform's Calc AI combines the strongest elements of both siblings — Typeform's multi-turn conversational grounding plus a verification aid (the Result preview) that neither Zia nor, as directly confirmed, Typeform's own chat panel exposes as a *computed value* (Typeform shows a structured outline, not a computed numeric result, since its domain is whole-form generation rather than a formula). Error-grounded repair (Fix) is a genuinely distinctive, well-designed interaction not yet confirmed elsewhere in this library. The Draft.js-based code-pane input remains the weakest link technically — confirmed fragile under scripted/automated input, a recurring theme across every Draft.js-based input surface captured for this product so far (see Cross-Component Pattern Note).

## Cross-Component Pattern Note
1. **A third confirmed use of Draft.js as an input surface in this product**, after the main document canvas ([[document-canvas-editor-shell]]) and (implicitly) every field's title/help-text editor — Paperform appears to standardize on Draft.js for *any* rich or structured text input, not just the main form-building canvas. The same automation-fragility (brace auto-close fighting synthetic keystrokes) already noted for the document canvas recurs here.
2. **Client-held-history + stateless-server** is a genuinely new persistence pattern for this library, distinct from Typeform's server-held-conversation model (`conversationId`) and Zia's fully stateless single-shot model — a useful three-point spread across the whole AI-interaction comparison.
3. **Analytics-without-content** — AI usage events are forwarded to three separate analytics destinations (first-party `i-did-it`, GA, Meta Pixel) but confirmed to exclude the actual formula/prompt text — whether this same discipline holds for AI Create ([[paperform-ai-create]], captured 2026-09-23) remains unconfirmed: that pass captured network destinations (first-party paperform.co + S3, poll-based) but did not specifically inspect analytics-event payload contents, so this is a genuine open flag, not resolved by the AI Create capture.
4. **Connects directly to [[paperform-payments-products-fields]]** via the confirmed `.quantities.<SKU>`/`.selectedProducts` product sub-path syntax — the Calculation field is the mechanism by which Custom Pricing Rules' simpler condition/operator model presumably generalizes to arbitrary formulas, though this specific connection (Custom Pricing Rules invoking a full Calculation formula) was not directly tested this pass.
5. **[[paperform-ai-create]] confirms this product ships two genuinely different AI-interaction architectures, not one AI pattern applied twice:** this component's client-held-history/immediate-single-response/full-formula-replace model is confirmed distinct from AI Create's conversational-pre-generation-clarification/poll-based/full-form model — worth remembering that "what AI architecture does Paperform use" has no single answer once a product ships more than one AI feature.

## Sources
- OBSERVATION: Live exploration + DOM/network inspection of Paperform's Calculation field and its Calculation Editor modal, via Claude browser extension, 2026-09-23. Scratch draft `xborqzxj` — fields N1 Quantity (Number, `cmlfb`), N2 Unit price (Number, `17gdk`), C1 Total (Calculation, `dn8ca`, hidden). Two real AI calls were made (one Fix, one free-text prompt) against Paperform's live production AI backend. The field was never republished to the live form; only the draft was modified.
