# AI "Chat to Create" / "Ask Typeform AI" (Copilot) — reconstructed preview

See
`Research-Library/04-Component-Library/typeform/typeform-ai-chat-to-create.md`
for the full research record this is built from. Follows the folder
contract, evidence labeling, and accessibility bar established by
`new-form-chooser/` (a self-managed, multi-step screen component with
internal `useState` for which step is showing) and
`analytics-deep-insights-dropoff/` (the closest analog for a tabbed,
multi-view data surface — here, the right pane's Suggested-changes/Preview
toggle). Also related to `typeform-choices-list-editor/`, this repo's other
existing Typeform reconstruction, for stylistic consistency.

## Evidence used, in priority order

1. **Authorized Typeform HTML/CSS export** — not available, same as every
   other reconstructed preview in this repo.
2. **The source record's own live trace** (`OBSERVATION`, via a `fetch`
   interceptor + `read_network_requests` and DOM inspection, 2026-09-17) —
   the primary source for this component:
   - **The exact tested prompt.** The record's Sources section: "submitting
     an actual AI generation prompt ('Create a customer feedback survey
     with 3 questions')." Used verbatim as `DEFAULT_PROMPT` — a fixture
     mounted directly into `generating`/`result` shows the real tested
     exchange, not an invented one.
   - **The exact action-text strings, captured from the network layer
     itself.** The record's Technical Data section captures the literal
     `POST /copilot/transform-actions-tense` request/response: `{actions:
     ["Created a three-question feedback survey."]}` → `{transformed_actions:
     ["Creating a three-question feedback survey."]}`. Both strings are
     reproduced verbatim as `ACTION_PAST_TENSE` and
     `ACTION_PRESENT_CONTINUOUS` — this is the single most directly-quoted
     piece of evidence in this component, straight from a captured API
     payload rather than paraphrased UI copy.
   - **The two-pane modal structure.** Full-viewport "Typeform AI" modal
     with a "Beta" badge; left pane a chat thread (user message
     right-aligned/grey, AI response left-aligned/light purple-pink,
     thumbs-up/down feedback, a follow-up message, a second chat input);
     right pane a Suggested-changes/Preview toggle. Reproduced in
     `.modal`/`.conversationPane`/`.previewPane`.
   - **The exact follow-up message and "Create form" mechanics.** *"Added.
     Is there anything else you'd like to include?"* is quoted verbatim as
     `FOLLOW_UP_MESSAGE`. The record's Actions table confirms "Create form"
     applies staged suggestions and closes the modal, and that closing
     early triggers a confirmation — reproduced in `handleCreateForm`/
     `requestClose`.
   - **The exact discard-confirmation copy.** *"Discard form suggestions?"*
     / *"If you close the chat, you'll lose any unapplied AI suggestions
     for this form"* — quoted verbatim in the confirmation dialog.
   - **AI-chosen field types and the generated form's real title.** The
     record: "`rating` (5-step star) for a satisfaction question,
     `deep_dive`... for open-ended questions," and "the form shell appeared
     in the workspace list with the title 'Customer Feedback Survey.'" The
     Suggested-changes cards use a rating field + two open-ended fields in
     that order, and `GENERATED_FORM_TITLE` is that exact captured title,
     shown in the Preview tab's phone mockup.
   - **Icon color-coding.** The record: "rating fields get a green icon
     background, text fields blue — matching the builder's own left-sidebar
     color coding." Reproduced via `.cardIconRating` (`--color-success`)
     and `.cardIconText` (`--color-info`), reusing this site's existing
     design tokens rather than inventing new hex values.
   - **The "Beta" badge's exact visual treatment.** The record: "neutral/
     grey outlined pill, not the accent purple — a separate status label,
     not part of the AI branding." Reproduced in `.betaBadge`.
   - **The AI response palette.** "light purple/pink response bubbles,
     distinct from the user's grey bubbles" — reproduced in `.aiBubble`
     (`#f4eefb`) vs. `.userBubble` (this site's neutral `--shell-sidebar-
     bg`).
   - **The right pane's toggle is a real `<radio>` button group, not
     tabs.** The record's DOM capture: "Right-pane toggle: `<radio>` button
     group." Reproduced with `role="radiogroup"`/`role="radio"` rather than
     `role="tablist"`/`role="tab"` — a deliberate departure from
     `analytics-deep-insights-dropoff`'s own tablist pattern, because this
     component's source record captured a genuinely different ARIA
     structure for its own toggle.
   - **Feedback buttons' exact accessible labels.** The record's DOM
     capture: *"Mark response as helpful" / "Mark response as not
     helpful"* — quoted verbatim as `aria-label`s on `FeedbackButtons`.
   - **The close button's exact accessible label, and the internal product
     name.** The record: "The close button is labeled 'Close copilot
     chat'... internally, Typeform's AI assistant is called a 'copilot.'"
     Reproduced verbatim as the close button's `aria-label`.
   - **No visible processing spinner is claimed — the opposite is true
     here, and that's a deliberate, flagged departure.** The record
     describes a **real** Lottie sparkle animation (`ai_stars.json`) during
     generation, unlike `smart-scan-ai-field`'s finding of "no visible
     processing indicator" for a different component. This reconstruction
     DOES show a generating indicator (a small CSS spinner + the
     present-continuous action text), because the record confirms one
     exists — it just isn't the real Lottie asset (unavailable in this
     repo). See the "no Lottie asset" note in the CSS and below.
3. **Screenshots** — none were captured in the source record; the
   Structure and Actions tables were used to confirm the modal's layout,
   pane order, and icon placement.
4. **Assumptions, clearly flagged**:
   - **Exact generated question wording.** The record confirms the field
     *types* (rating 5-step star, two `deep_dive` open-ended questions) and
     count, but never captured the literal generated question text. The
     three question titles/descriptions in `SUGGESTED_QUESTIONS` are this
     reconstruction's own reasonable placeholders, not verified copy.
   - **Welcome-screen card copy, and the Preview tab's description/CTA/
     time-estimate text.** Not captured verbatim in the record beyond "a
     welcome-screen card (icon + title + description)" and a "'⏱ Takes X
     minutes' placeholder" existing structurally. This reconstruction fills
     in illustrative text and a concrete "1 minute" for that placeholder —
     flagged here as invented-but-reasonable, not a captured value.
   - **Discard dialog's exact button labels.** The record only describes
     the dialog's heading and body copy verbatim, not its buttons' exact
     text. "Keep editing" / "Discard suggestions" are this reconstruction's
     own reasonable choice, the same kind of flagged assumption
     `new-form-chooser`'s README makes for its own unconfirmed control
     labels.
   - **Whether the discard confirmation also fires mid-generation** (not
     just once a result exists) wasn't independently distinguished in the
     record — both states are treated the same way here (see
     `requestClose`'s comment), a reasonable, low-risk generalization.
   - **Responsive/breakpoint behavior** was not observed in the record (the
     modal was tested at a fixed viewport). Stacking the two panes at
     narrow container widths is a deliberate improvement for this docs
     site's preview stage, not an observed Typeform breakpoint.

## Deliberate scoping decision: canned generated content

Per the task's explicit instruction, there is no real AI/LLM call anywhere
in this reconstruction. Submitting *any* prompt text — not just the
documented one — always produces the exact same canned outline: one
`rating` question, two `deep_dive`-style open-ended questions, and the
literal action strings `ACTION_PAST_TENSE`/`ACTION_PRESENT_CONTINUOUS`
captured from the record's own network layer. The user's actual typed text
is echoed verbatim as their own chat bubble (so the conversation still
*looks* responsive to input), but it has zero effect on what the AI
"generates." This mirrors the record's own finding that the real product's
plan/action pipeline is structured and reproducible (JSON Patch operations
against a fixed schema), just without a real model behind it here.

## Deliberate scoping decision: the "generating" delay is short, controllable, and never auto-starts from a fixture

The record observed a real ~5–7 second generation time. Reproducing that
exact duration would make this docs preview slow to interact with and hard
to test deterministically. Per the task's explicit instruction:

- `generationDelayMs` defaults to a short, constant 600ms.
- The timer is only ever scheduled as the direct result of a **real,
  in-preview prompt submission** (`beginGeneration`, called from the
  trigger input's send button or the modal's follow-up input handler for
  the *first* message only — see below). Mounting a fixture directly into
  `initialStep="generating"` shows a frozen snapshot with no timer running
  at all, so it never auto-advances to `result` on its own — the same
  "fixtures are static snapshots, live interaction is what schedules
  effects" posture `new-form-chooser` takes for its own `initialStep` prop.
- `TypeformAiChatToCreate.test.tsx` uses `vi.useFakeTimers()` to assert on
  both the interim generating state and the final result state
  deterministically, per the task's explicit suggestion.

## Deliberate scoping decision: no real multi-turn regeneration

The record's own "Recommended Second Pass" section lists "Test multi-turn
refinement (a follow-up prompt modifying the generated form)" as
**untested** — the AI inviting a follow-up ("Is there anything else you'd
like to include?") was observed, but what actually happens on a second
message never was. Per this library's hard rule against inventing
confirmed-looking behavior for something explicitly unconfirmed, the second
chat input in the modal is genuinely functional (it's a real, testable
text input that appends a real new user bubble to the thread), but
submitting it does **not** trigger a second generation cycle, a second
"generating" state, or any new AI response — there is intentionally no
code path that could produce one. This is documented in
`handleFollowUpSubmit`'s own doc comment, not just here.

## What NOT built (deliberately out of scope, per the task)

- **Real AI/LLM calls** — see above.
- **Voice dictation and "Add Files" functionality.** The microphone, "+",
  and "..." icons in the trigger bar are rendered as decorative,
  `aria-hidden`, non-interactive elements with an explanatory `title`,
  following the same precedent `smart-scan-ai-field` established for its
  own inert camera icon — not silently-do-nothing buttons, and not a faked
  interaction that was never observed.
- **The Extended Thinking / Connectors / Typeform AI memory / Give
  feedback / Restart chat menu.** The task marks this optional; skipped
  here entirely (no "..." dropdown is rendered) to keep the required
  two-pane modal, generation cycle, and Suggested-changes/Preview toggle
  solid rather than spreading scope thin.
- **The real Lottie sparkle animation** (`ai_stars.json`) — no such asset
  is available in this repository; a small CSS spinner stands in for it,
  documented in the CSS itself, following this repo's established pattern
  of a labeled placeholder for an unavailable media asset (see
  `new-form-chooser`'s own video-placeholder precedent).

## Other deviations from what was actually observed

- Typeform's real `conversationId`-scoped GraphQL/REST backend
  (`/accounts/{id}/conversations/{id}/messages`, `/copilot/transform-
  actions-tense`, `/plan/actions/{id}/start`, etc.) is entirely absent.
  This preview never calls `fetch`/XHR at any point in the flow — verified
  in `TypeformAiChatToCreate.test.tsx`.
- The discard-confirmation dialog uses `role="alertdialog"` (not
  independently documented in the record beyond "an explicit... dialog");
  added as a standard accessible pattern for a destructive confirmation.
- Feedback buttons (thumbs up/down) are implemented as real, mutually
  exclusive `aria-pressed` toggles with a local vote state — the record
  confirms the buttons exist and their accessible labels, but not their
  exact visual pressed-state treatment; this is a reasonable, low-risk
  addition for a genuinely interactive control.
- All of Typeform's own internal component/class names (not itemized
  beyond the DOM role/accessible-name findings quoted above) are replaced
  with scoped CSS Module classes and plain React props/state.

## What this is not

Not the original Typeform component, not pulled from any Typeform source,
and not guaranteed to match current production behavior — see the in-app
notice on the Preview tab, and the record's own `evidence_state`
(`source_reviewed`, not `runtime_verified`).
