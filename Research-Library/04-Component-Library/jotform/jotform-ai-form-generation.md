---
component: "AI Form Generation (Describe your form + Form Copilot)"
ui_category: "Actions > AI assistant"
source_product: "JotForm"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
---

# Component: AI Form Generation (Describe your form + Form Copilot)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **Pass ID: JF5.** This resolves the "AI generation output quality not tested" gap flagged in [[jotform]] Section 15. Documents both of JotForm's confirmed AI-generation entry points, tested live with a real prompt: *"Create a customer feedback form for a coffee shop, asking about visit frequency, favorite drink, and a 5-star rating."*

> **Reconciliation note (filing pass, 2026-10-05):** the capturing browser-extension session had no file access to this library and characterized the three sibling architectures ([[zia-ai-form-generator]], [[typeform-ai-chat-to-create]], [[paperform-ai-create]]) only from the task brief's own wording, explicitly flagging this as needing confirmation. The filing pass opened all three records directly and reconciled the Competitor Comparisons table and the "which architecture does JotForm match" judgment below against the actual recorded facts, not the brief's paraphrase — the capturing session's own characterizations turned out to be accurate in substance, with one correction: Zoho's generation/regeneration, while single-shot per call, does support a human-in-the-loop "Regenerate" repeat-call loop, which is closer to JotForm's own "mixed immediacy" finding than the brief's flat "single-shot" label implied. See the table below for the corrected comparison.

## Location

Two distinct entry points, both ultimately surfacing the same underlying agent/conversation (see Behavior & States):

1. **"Describe your form"** — a free-text box offered at form-creation time, before the Form Builder has opened (alternative to "Start from scratch" / picking a template).
2. **Form Copilot** ("Podo") — a persistent AI chat panel docked in the Form Builder's right-hand contextual pane (see [[jotform-app-shell-builder]]'s "Right pane — contextual panel" section), available any time no field is selected, or reopened via a collapsed "Ask Copilot" bar.

## Structure

- **Describe-your-form box**: single free-text input, no visible options/toggles beyond the text field and a submit action at creation time. FACT
- **Form Copilot panel**: header reading "Form Copilot [AI] — Jotform Form Specialist" with a fox-mascot avatar, a collapse/expand control, and a close ("×"); below it, a scrollable chat thread; at the bottom, a free-text "Ask Copilot" input plus a "+" button (opens a "Suggestions" menu of chips — "Suggest new questions," "Create conditions," "Customize form design," "Get form URL," "Make test submission," "Get embed code," and more below the fold), a "Draw & Edit" toggle, and a "Talk" (voice) button. FACT

## Actions

| Entry point | Input | Result |
|---|---|---|
| Describe your form | Free-text prompt at creation | Generates form directly into the Builder — no staging/review screen |
| Form Copilot | Free-text follow-up prompt | Applies the edit directly to the live canvas, with an on-canvas "Adding '<Field Name>'…" toast, and a chat reply describing what was done (each reply carries its own "↺ Undo" link) |
| Form Copilot | Suggested-action chip: "Suggest new questions" | Returns a checklist of proposed questions (checkboxes) — a review/selection step, not an immediate apply — requiring the user to check one or more and click a separate "Add question →" button before anything is written to the form |

## Behavior & States

**1. "Describe your form" → direct generation, no staging step.** FACT Submitting the prompt landed directly in the Form Builder with fields already placed — no intermediate review/approval screen of any kind. The generated form:
- Title: "Coffee Shop Feedback Form" (contextually generated, not generic)
- A radio-button field for visit frequency
- A text field for favorite drink
- A genuine 5-star **Star Rating** field (not a generic dropdown/text substitute) for overall experience
- A relabeled submit button reading "Submit Feedback" (not the generic default "Submit")

All three requested topics (visit frequency, favorite drink, 5-star rating) were matched to real, correctly-typed fields — not generic filler fields unrelated to the prompt. FACT Rough generation time: ~3–6 seconds (a transitional "Creating…" loading state was still visible at +3s; the fully-rendered builder with all fields in place was confirmed by +6s). OBSERVATION — bracketed by screenshot timing, not an instrumented stopwatch.

**2. Form Copilot and "Describe your form" share the same underlying conversation.** FACT Opening the Form Copilot panel after using "Describe your form" showed the original generation prompt as the first message in the Copilot's own chat history, complete with its own "↺ Undo" link — i.e., the pre-creation prompt and all post-creation in-builder chat turns are literally the same thread/session, not two separate systems. This is the single most load-bearing finding for the cross-product architecture comparison below.

**3. Form Copilot free-text edits apply immediately, in place, with live visual feedback.** FACT Prompting "Add a field asking the customer for their email address so we can follow up" produced: a live on-canvas toast reading "✦ Adding 'Email Address'…" with a pointing arrow at the insertion point, followed by a chat reply ("I've added an email address field to the form so you can collect replies for follow-up.") with its own Undo link. The new field was inserted sensibly — a properly-typed "Email Address *" field placed at the end of the form, immediately before the Submit button, not appended awkwardly or placed at the top.

**4. The "Suggest new questions" suggested-action chip behaves differently from a free-text prompt — it inserts a review/selection step.** FACT — this is the most notable behavioral nuance found in this pass. Clicking the chip (via "+" → "Suggestions" → "Suggest new questions") does not add anything directly. Instead, the agent responds: *"You can select from the questions below to add to your form,"* followed by a list of proposed questions as individually-checkable chip-style checkboxes (observed: "What did you like most about your visit?", "What could we improve?", "Which location did you visit?", plus a "Show more ⌄" disclosure for additional ones not shown by default). A separate "Add question →" button (initially unclickable/inert-looking until at least one box is checked) sits below the list. Checking one or more boxes and clicking "Add question" then triggers a second AI turn (checkboxes gray out, a "• • • Thinking" indicator appears) which applies the selected question(s) using the same live "Adding '<text>'…" on-canvas toast mechanism as a free-text edit, and the same confirmation-with-Undo chat-reply pattern ("I've added the short text question to your form and placed it before the submit button.") Turnaround for this confirm step: ~4 seconds from click to fully-applied field. OBSERVATION — bracketed by screenshot timing.

So within the single Form Copilot surface, there are effectively **two different interaction patterns depending on how the turn is initiated**: a free-text prompt is applied unilaterally/immediately, while at least this one suggested-action chip inserts a human-in-the-loop selection step first. Whether other chips ("Create conditions," "Customize form design," etc.) also insert a review step, apply immediately, or do something else entirely was not tested in this pass — only "Suggest new questions" was tested, per the brief's instruction to test "at least one."

## Rules & Validation

Not applicable in the traditional sense (no form-field validation involved), but one implicit rule was observed: the "Add question" confirm button only becomes meaningfully actionable once at least one checkbox is checked — no question selected, nothing is added. Whether clicking "Add question" with zero boxes checked is actually blocked (vs. simply a no-op) was not explicitly tested.

## Technical Data

Captured via a network-requests monitor, filtered to `ai-agent` and broader unfiltered passes (166+ total requests captured across the full JF5 session with no third-party AI vendor domain — OpenAI, Anthropic, Google, etc. — appearing anywhere). FACT

- **Initial "Describe your form" generation call**:
  `POST https://www.jotform.com/API/ai-agent/stream/{generationID}?noBuffering=1`
- **Form Copilot chat turns (both free-text and the suggested-action chip) use the same endpoint shape**:
  `POST https://www.jotform.com/API/ai-agent/{agentID}/chats/{chatID}?allowMultipleActions=1&masterPrompt=1&embedModeVariant=extended&formID={formID}&formMasterPrompt=1&UPDATE_PRODUCT_LIST_CONDITION=1&walkthroughEnabled=1&noBuffering=1`
  — confirmed hit again, identically, for the "Suggest new questions" chip turn, supporting finding #4 above that it's the same agent/thread mechanism regardless of entry method.
- Supporting calls observed: `GET /API/ai-agent/{agentID}/action?action=FirstAnswer&project=form-master-prompt&chatID=…`, `POST /API/ai-agent/agentCatchLogger/{agentID}/{chatID}` (fired multiple times per turn — looks like client-side telemetry/logging), `GET /API/ai-agent/{agentID}/chat/{chatID}/message/{messageID}`.
- **Agent ID is a literal, generic placeholder-looking string of all 1's**: `111111111111111111111111111111111111` (37 characters) — used identically across the generation call, the free-text edit call, and the suggested-action chip call. FACT Whether this is a shared/default "form-building" agent ID for all JotForm AI-assisted form creation (as opposed to a per-user or per-form ID) was not independently confirmed — flagged below.
- Query parameters `project=form-master-prompt` and `formCreationSource=ai-form-creator` link the two entry points at the API level, consistent with the chat-history finding above.
- **Every single AI-related request observed across both entry points was first-party** (`www.jotform.com`). No third-party AI vendor identity (model name, vendor domain, API key prefix, etc.) was visible anywhere in request/response traffic. This does not prove JotForm doesn't use a third-party model under the hood server-side — only that it's not exposed client-side. FACT, with INFERENCE boundary stated explicitly.
- One oddity: two of the Form Copilot `chats` POST requests returned HTTP 503 rather than 200 in the raw network log, despite the UI showing a normal successful completion with no visible error state. OBSERVATION This is very plausibly an artifact of the `noBuffering=1` streaming response pattern (a long-lived streaming connection can read as a non-200 status in some network-logging tools even on ultimate success) rather than a real failure — not independently resolved, flagged below.

## Competitor Comparisons

| Product | Entry point(s) | Generation pattern | Review/staging step? | Vendor exposure |
|---|---|---|---|---|
| **JotForm** | "Describe your form" (pre-creation) + Form Copilot (in-builder chat) | Single continuous agent/conversation spanning both pre-creation generation and all post-creation in-builder edits — confirmed by shared chat history | Depends on how the turn is initiated: free-text prompts (both entry points) apply directly with no staging; at least one suggested-action chip ("Suggest new questions") inserts a checkbox-selection step before applying | First-party-fronted only (no vendor visible client-side) |
| Zoho Forms ([[zia-ai-form-generator]]) | "AI Forms" card at form creation only — no in-builder AI editing surface exists; once "Create Form" is clicked, further edits happen in the standard (non-AI) builder | Single-shot, stateless `PUT /pfmaiformtemplate` per Generate/Regenerate call — full-schema replace every time, no field IDs or prior-turn history carried forward. A "Regenerate Form" panel allows repeat calls against an edited description, but each call is independently stateless, unlike JotForm's persistent conversation/Undo-per-turn model | A preview-and-regenerate loop (not true multi-turn chat) — explicit "Create Form" click required to persist a real form; the mid-flow `PUT` only persists a template | First-party only (no vendor exposed in `PUT /pfmaiformtemplate` request/response bodies) |
| Typeform ([[typeform-ai-chat-to-create]]) | "Ask Typeform AI" (dashboard) + "Chat to create" (builder) — both share one conversation resource (`conversationId`) | Plan → Actions → JSON Patch: the AI decomposes the request into named, ID'd actions, each producing structured, reversible JSON Patch operations against the form-draft data model — genuinely iterative, multi-turn | Suggestions staged in a two-pane "Typeform AI" modal (chat + "Suggested changes" outline/diff view + phone-mockup Preview) until an explicit "Create form" click; closing early triggers a "Discard form suggestions?" guard | First-party only (no vendor domain/model name visible; internally labeled "Copilot," `/copilot/` endpoint prefix) |
| Paperform ([[paperform-ai-create]]) | AI Create landing page (text prompt or image/PDF upload) | Text-prompt path: conversational pre-generation clarification (up to 2 rounds of clarifying questions) before a single poll-based generation call (~50s); image/PDF path skips clarification entirely and generates directly | Yes for the text path — generation doesn't start until both clarifying rounds are answered; a "Request changes" box exists post-generation but wasn't exercised. No review/staging step at all for the image path | Not independently confirmed in that record |

**Which architecture (if any) does JotForm match?** Reconciled against the actual sibling records (not just the brief's characterization): **none of them cleanly**, confirming the capturing session's own judgment call. INFERENCE, stated explicitly.

- It isn't Zoho's single-shot-per-call pattern — JotForm's generation is clearly conversational/stateful (a persistent, continuable chat thread with Undo per-turn), not a stateless one-and-done call. The one point of real overlap: both products support a human-triggered "do it again" loop (Zoho's Regenerate button; JotForm's free-text follow-up prompts) — but Zoho's loop is a full-schema replace with no memory between calls, while JotForm's is additive and stateful.
- It isn't Typeform's plan → actions → JSON Patch model either — JotForm's in-builder edits were not observed to expose a patch-like diff structure to the user; they're presented as natural-language chat turns with an on-canvas toast and an Undo link, not an explicit edit-script or a "Suggested changes" outline view. (Whether JSON-Patch-like operations exist underneath the chat UI, server-side, cannot be ruled out from client-side observation alone.)
- It isn't Paperform's pattern — JotForm asked no clarifying questions before generating from the initial prompt; it went straight to a populated builder, unlike Paperform's up-to-two-round clarification gate on its text-prompt path.

**JotForm's distinguishing characteristic, as directly observed, is architectural continuity**: one agent/conversation ID persists from the pre-creation prompt through an arbitrary number of post-creation in-builder edits, with every individual turn (both the original generation and each later edit) independently undoable via its own "↺ Undo" link in the chat history. None of the three sibling products confirm this same pre-creation-to-post-creation thread continuity — Zoho has no in-builder AI editing surface at all; Typeform's dashboard and builder entry points share a conversation resource but that record doesn't confirm a single generation-through-editing thread the way JotForm's chat-history evidence does; Paperform's AI Create is a one-time generation flow feeding into the standard (non-AI) Draft.js builder, with no equivalent in-builder AI chat documented.

A secondary, more subtle finding is that **the generation/apply pattern is not uniform even within JotForm's own single surface** — plain free-text prompts commit immediately, while at least one structured suggested-action chip inserts a human-approval checklist first. This "mixed immediacy" is a genuinely new pattern not matched by any of the three sibling architectures as recorded: Zoho's full-document replace, Typeform's staged-until-"Create form" patch model, and Paperform's clarify-then-generate-once model are each uniform within their own single flow, where JotForm's varies turn-by-turn depending on how that turn was initiated.

## Best Observed Approach

For **output relevance to prompt**: JotForm's initial generation was strong in this single test — all three requested topics were matched to correctly-typed, non-generic fields (notably a real Star Rating widget rather than a text/number substitute), and the contextual title/button-label generation ("Coffee Shop Feedback Form" / "Submit Feedback") went beyond the minimum of just placing fields. This is a single prompt/session, not a representative sample — see Second-Pass Flags. Typeform and Paperform both independently confirm similarly strong type-selection in their own records (Typeform's `rating`/`deep_dive` selection; Paperform's Date/Phone Number/Signature inference from a source image) — contextually-appropriate field-type selection appears to be a solved problem across at least three of the four products captured so far, not a JotForm-specific strength.

For **edit safety / reversibility**: JotForm's per-turn Undo link on every single AI action (both generation and in-builder edits) is a genuinely distinctive pattern in this comparison set — neither Zoho's record nor Paperform's record documents an equivalent granular, per-action undo; Typeform's closest equivalent is the "Discard form suggestions?" guard, which is an all-or-nothing discard of the whole unapplied suggestion set, not a per-turn undo once suggestions are already applied. RECOMMENDATION: JotForm's per-action Undo is the strongest reversibility pattern confirmed across all four products in this comparison set.

For **structured suggestions specifically**: presenting a checkbox list with an explicit "Add question" confirm step (rather than auto-adding all suggested questions at once) is a reasonable, low-risk UX choice for a chip that proposes multiple additions in one go — it avoids silently cluttering the form with questions the user didn't actually want, at the cost of one extra click. This is structurally similar in intent to Typeform's "Suggested changes" staged-review pattern, though JotForm's version is scoped to one chip-triggered action rather than gating the entire generation. Whether this consistency (chips = review step, free text = immediate) is intentional product design or an artifact of this one chip's specific implementation was not tested broadly enough to generalize.

## Sources

- Live testing session, 2026-10-05, against `https://www.jotform.com/build/262771316349058` ("Coffee Shop Feedback Form" — test form created specifically for this task)
- Network-requests monitor, filtered and unfiltered passes, same session
- Task brief JF5, cross-referenced and reconciled against [[zia-ai-form-generator]], [[typeform-ai-chat-to-create]], and [[paperform-ai-create]] directly during filing (2026-10-05) — the capturing session's brief-only characterizations are superseded by this reconciled version where they differ.

## Second-Pass Flags

- Only one suggested-action chip ("Suggest new questions") was tested. The brief's other visible chips — "Create conditions," "Customize form design," "Get form URL," "Make test submission," "Get embed code," plus unknown items below the "more" fold — were not tested. Whether they all share the "review step" pattern or whether that's specific to "Suggest new questions" (which inherently proposes a set of discrete items) is unconfirmed.
- Sample size is one prompt. Output-quality claims ("real fields, not generic filler") are based on a single test prompt about a coffee-shop feedback form; a harder/more ambiguous prompt was not tried, and no conclusion should be drawn about JotForm's AI generation reliability across arbitrary form domains.
- The two HTTP 503 responses on the Form Copilot `chats` POST endpoint, despite visibly successful completions in the UI, were not resolved — likely a streaming/long-poll artifact of `noBuffering=1`, but this is an inference, not a confirmed explanation.
- Whether the literal all-1's agent ID (`111111111111111111111111111111111111`) is a shared default for all users/forms, or happened to be assigned to this specific test account/form, was not independently confirmed — would need a second, unrelated test account to check.
- Whether a third-party model vendor is used server-side (invisible to client-side network inspection) cannot be ruled out from this testing methodology — only the absence of client-side vendor exposure was confirmed, for all four products in this comparison set.

## Cross-Component Pattern Note

This AI-generation subsystem is functionally distinct from, but UI-adjacent to, the application-shell chrome documented in [[jotform-app-shell-builder]] (the Form Copilot panel occupies the same right-pane "contextual panel" slot described there, mutually exclusive with the field Properties panel). No shell-level findings were duplicated here; this file covers only the AI-generation behavior itself, consistent with the judgment call made in the JF4 pass to keep shell-level and feature-level findings in separate files where the feature is substantial enough to warrant its own record.
