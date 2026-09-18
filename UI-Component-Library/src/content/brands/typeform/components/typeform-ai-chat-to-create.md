---
component: 'AI "Chat to Create" / "Ask Typeform AI" (Copilot)'
ui_category: 'Actions/Controls > AI assistant'
source_product: 'Typeform'
last_verified: '2026-09-17'
evidence_state: 'source_reviewed'
status: 'complete'
summary: "Natural-language form generation ('Ask Typeform AI' / 'Chat to create') via a plan→actions→JSON-Patch execution model — a prompt produces a complete, contextually-typed form staged for review before commit."
---

# Component: AI "Chat to Create" / "Ask Typeform AI" (Copilot)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Product:** Typeform
- **Screen(s) it appears on:** Two entry points sharing one underlying system — dashboard-level "Ask Typeform AI" input (bottom-left of the workspace/dashboard screen) and builder-level "Chat to create" input (bottom-center of the builder canvas, visible when editing any form).

## Structure

- Both inputs carry a microphone icon (voice dictation), a "+" button ("Add Files"), a "..." button ("Open menu" / "More options"), and a send-arrow button. Both share the same conversation resource on the backend (same `conversationId`), same AI model, and same response format.
- Submitting a prompt from either input opens a **full-viewport modal** labeled **"Typeform AI"** with a **"Beta"** badge — a two-pane split layout:
  - **Left pane — Conversation:** a chat-style thread showing the user's message (right-aligned, grey bubble), the AI's response (left-aligned, light purple/pink background), thumbs-up/thumbs-down feedback buttons, a follow-up message ("Added. Is there anything else you'd like to include?"), and a new "Ask Typeform AI" input at the bottom for multi-turn conversation.
  - **Right pane — Preview:** a toggle between **"Suggested changes"** and **"▶ Preview"** tabs.
- **"Suggested changes" tab:** a structured, card-based list of the generated form elements under the heading "Questions to be set:" — a welcome-screen card (speaker/announcement icon, title + description text) and question cards (type-specific icon on a color-coded background, numbered badge, question title + description). This is a real outline/diff view, not a repeat of the chat text — it shows exactly what will be added, with correct field-type icons matching actual Typeform field types.
- **"Preview" tab:** a phone-sized mockup (white rounded rectangle, centered) showing the live respondent-facing view of the generated form — welcome screen title, description, a CTA button, and a "⏱ Takes X minutes" placeholder.
- **"Create form" button:** a prominent dark button, bottom-right of the modal. Applies the AI's suggestions to the actual form and closes the modal. A "Discard form suggestions?" confirmation dialog appears if the chat is closed before clicking Create form — _"If you close the chat, you'll lose any unapplied AI suggestions for this form"_ — confirming suggestions are staged until explicitly committed.
- **Menu options ("..."):** Extended Thinking (toggle, off by default, paid-plan badge), Connectors (expandable submenu, greyed out in this account), Typeform AI memory, Give feedback, Restart chat.

## Actions

| Element                                    | User Action     | Function                               | Result                                                                                                         | Destination screen/state             |
| ------------------------------------------ | --------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| "Ask Typeform AI" / "Chat to create" input | Submit a prompt | `POST .../conversations/{id}/messages` | Typeform AI modal opens; the form shell appears in the workspace list almost immediately (see Action → Result) | Full-viewport AI modal               |
| "Suggested changes" / "Preview" toggle     | Click           | Client-side tab switch                 | Right pane swaps between the outline/diff view and the phone-mockup live preview                               | Same modal                           |
| "Create form" button                       | Click           | Applies staged suggestions             | Modal closes; form appears fully populated in the builder with all generated questions visible                 | Dashboard, then builder              |
| Close chat before "Create form"            | Click close     | Confirmation guard                     | "Discard form suggestions?" dialog appears                                                                     | Same modal (blocked until confirmed) |

## Behavior & States

- **Submitting the prompt** immediately opened the modal; the AI response appeared within ~5–7 seconds. During generation, a Lottie sparkle animation played, and the action text was shown in present-continuous tense ("Creating a three-question feedback survey.") before switching to past tense ("Created a three-question feedback survey.") on completion.
- **The form was created in the backend almost immediately** — a `POST .../conversations/{id}/messages` call sent the prompt, and within seconds the form shell appeared in the workspace list with the title "Customer Feedback Survey." However, the AI-generated content (questions, welcome screen) was staged as suggestions, not yet committed to the live form — "Create form" is what applies them.
- **Clicking "Create form"** applied all suggestions, closed the modal, returned to the dashboard. The generated form then showed: a Welcome Screen page, then 3 question pages (rating + 2 `deep_dive`), each its own page in the left sidebar. Questions 2 and 3 carried green diamond badges marking them as AI-powered field types.
- **AI-chosen field types:** the AI automatically selected contextually appropriate field types, not generic defaults — `rating` (5-step star) for a satisfaction question, `deep_dive` (Typeform's AI-enhanced open-ended field type, not standard `long_text`) for open-ended questions. Also auto-generated: a Welcome Screen with title/description/CTA text, the form title itself (derived from the prompt), and form settings (`show_time_to_complete: true`, `show_progress_bar: true`, `progress_bar: "proportion"`, `language: "en"`).

## Rules & Validation

- Suggestions are staged, not committed, until "Create form" is explicitly clicked — enforced by the discard-confirmation dialog on early close.
- `extended_thinking` is off by default and carries a paid-plan badge — a gated deeper-reasoning mode, not exercised in this trace.

## Technical Data

> OBSERVATION, directly captured via a `fetch` interceptor + `read_network_requests`, and DOM inspection, Claude browser extension session, 2026-09-17.

- **DOM:** a standard React dialog/overlay, not a separate page or iframe. Heading: `"Typeform AI Beta"` with `"Beta"` in a separate element. Message structure: `"Your message"` / `"Message from Typeform AI"` containers with explicit sender labeling. AI action list: a real `<list>`/`<listitem>` structure, not styled text. Feedback buttons: `"Mark response as helpful"` / `"Mark response as not helpful"` — accessible labels, not icon-only. Right-pane toggle: `<radio>` button group. The close button is labeled `"Close copilot chat"` — internally, Typeform's AI assistant is called a **"copilot,"** consistent with the `/copilot/` endpoint prefix observed in the network layer. A hidden `<button type="file">` exists alongside the chat input, powering "Add Files." An `<alert>` element is present, presumably for screen-reader announcements of AI responses.

- **Network — request pipeline, in order:**
  1. **`POST /accounts/{id}/conversations/{conversationId}/messages`** — sends the prompt. Body includes `content` (prompt text), `page_context` (`{page, page_url, workspace_id}` — the AI is context-aware of where in the app the user is), `extended_thinking` (boolean). Response echoes the message with `id`, `exchange_tag`, `sender_type: "client"`, `created_at`.
  2. **GraphQL calls** (`POST /gql`) — workspace metadata, form listing, feature-set checks.
  3. **`GET .../public-assets.typeform.com/public/echo/animations/ai_stars.json`** — the Lottie sparkle animation for the generation loading state.
  4. **`POST /copilot/transform-actions-tense`** — converts action descriptions between tenses for UI display: `{actions: ["Created a three-question feedback survey."]}` → `{transformed_actions: ["Creating a three-question feedback survey."]}`. This is how the streaming/loading text and the final text are generated — the AI produces past-tense action descriptions, and this endpoint transforms them to present-continuous for the loading animation.
  5. **`POST /accounts/{id}/conversations/{conversationId}/plan/actions/{actionId}/start`** — executes the AI's planned action. Request includes a `working_copies.current_form_draft` object (the form skeleton, initially zero fields) and receives back `operations`: an array of **JSON Patch operations** (`op: "add"`, `path: "/welcome_screens"`, `path: "/fields/-"`), each specifying the field `type`, `title`, `properties` (e.g. `{steps: 5, shape: "star"}` for the rating field), plus `form_draft_version`. **Confirms a plan → actions → JSON Patch execution model** — structured, reversible patch operations against the form's data model, not free-form DOM/API manipulation.
  6. **`PUT /drafts/{formId}`** — saves the form with AI-generated content as a draft.
  7. **`GET /accounts/{id}/conversations/{conversationId}/files`** — checks for conversation-associated files.
  8. **`GET /accounts/{id}/connectors/settings`**, **`GET /accounts/{id}/connections`** — connector/integration context checks.

- **Key architectural observations:**
  - **Conversations are persistent, pre-allocated resources** — the `conversationId` (`01M2MFD8BNGA400X8RFM7GHNP8`) is a pre-existing account-level resource with its own `/files` and `/messages` sub-resources, not created on-the-fly per chat.
  - **The AI operates through a "plan/actions" abstraction** — each response decomposes into discrete, named, ID'd actions, individually "started" (executed) — supports undo, retry, and partial execution by construction.
  - **Internally labeled "copilot"** — the `/copilot/` endpoint prefix and the `"Close copilot chat"` accessible label confirm this internal product name.
  - **`page_context`** means the AI's behavior could differ based on where it's invoked — a dashboard prompt might generate a whole form, a builder prompt might add/modify individual questions (not directly compared this pass).

- **CSS/Animation:** loading animation is Lottie-based (`ai_stars.json`, 24×24px, 25fps, 44 frames), playing alongside the present-continuous action text. AI-specific palette: light purple/pink response bubbles, distinct from the user's grey bubbles — consistent with the purple/pink gradient theme used for all AI-related surfaces across Typeform. "Beta" badge: neutral/grey outlined pill, not the accent purple — a separate status label, not part of the AI branding. Type-icon color coding in "Suggested changes": rating fields get a green icon background, text fields blue — matching the builder's own left-sidebar color coding. The phone-sized preview mockup took ~2–3 seconds to load after switching tabs.

## Recommended Second Pass

- Test the "Add Files" button — accepted file types, influence on AI output, size/count limits.
- Test "Dictate audio message" — browser speech-to-text vs. a server-side transcription service.
- Open the "Typeform AI memory" settings page — what preferences are stored, can they be viewed/edited/deleted.
- Determine what "Connectors" become available on paid plans and how they influence generation.
- Test multi-turn refinement (a follow-up prompt modifying the generated form) — additive changes, removals, field-type modifications.
- Test the "Create with AI" tab in the Add-content modal separately — may be the same underlying system invoked differently.
- Toggle `extended_thinking` on and compare output quality/speed/token usage.
- Test a `deep_dive` field's actual respondent-facing behavior — how AI-enhanced follow-up questioning works when a respondent fills one out.
- Compare AI behavior invoked from the builder (`page_context.page = "builder"`) vs. the dashboard.

## Competitor Comparisons

**Zoho equivalent now traced — see [[zia-ai-form-generator]]** (Zoho Forms' "AI Forms" / "Zia AI" chooser option, captured 2026-09-18). Zia AI Forms sits at the opposite end of the design spectrum from Typeform's Copilot: a single-shot, stateless generator — one text box, one synchronous `PUT /pfmaiformtemplate` call, full-schema replace on every Generate/Regenerate (no field IDs or prior-turn state carried forward) — with a preview-and-regenerate loop layered on top rather than true multi-turn conversation, versus Typeform's iterative plan → actions → JSON Patch execution model applied against the existing form-draft document across multiple turns. See [[zia-ai-form-generator]]'s own Competitor Comparisons table for the full side-by-side and its Best Observed Approach for the comparative judgment.

| Aspect | Zoho Forms ([[zia-ai-form-generator]]) | Typeform (this trace) |
| --- | --- | --- |
| AI form generation capability | Full form generation via the "AI Forms" chooser option — one description prompt (+ Content Tone) produces a complete field list and form name in a single `PUT /pfmaiformtemplate` call | Full natural-language form generation via "Ask Typeform AI" (dashboard) / "Chat to create" (builder), producing complete forms with welcome screens, typed questions, and appropriate field types from a single prompt |
| AI generation UI pattern | Prompt modal (description textarea, Content Tone dropdown, sample-prompt chips) → generating status screen (animated Zia orb + 4-line status ladder) → preview-first screen with a persistent "Regenerate Form" panel; explicit "Create Form" click commits the schema as a real form | Two-pane modal: left = chat thread with multi-turn conversation; right = "Suggested changes" outline + "Preview" phone mockup; suggestions are staged until user clicks "Create form" |
| AI field type selection | Response includes a `type` per field, but contextual "smartness" of type selection was not independently confirmed — see [[zia-ai-form-generator]] | AI automatically selects contextually appropriate field types (rating for satisfaction, `deep_dive` for open-ended), not just defaulting to generic text fields; `deep_dive` is an AI-enhanced field type unique to Typeform |
| AI execution model | Single-shot, stateless REST call — one synchronous `PUT /pfmaiformtemplate` per Generate/Regenerate, full-document replace each time (no field IDs or prior-turn history carried forward) | Plan → Actions → JSON Patch: AI decomposes the request into named, ID'd actions, each producing structured JSON Patch operations against the form data model — reversible, inspectable, not free-form |
| AI context awareness | Not observed — the request body carries only the current description text and tone | The `page_context` parameter in each message includes the current page, URL, and workspace ID — the AI knows where in the app the user is |
| Extended Thinking mode | — | A togglable "Extended Thinking" option (paid-plan badge, off by default) for deeper AI reasoning, mapping to an `extended_thinking` boolean in the API request |
| AI memory / preferences | — | A "Typeform AI memory" feature accessible from the chat menu — persistent AI context about the user/account |
| Voice input for AI | — | "Dictate audio message" button (microphone icon) for voice-to-text prompt input |
| File upload for AI context | — | "Add Files" button for uploading context documents to the AI conversation |
| Multi-turn refinement | No true multi-turn conversation — a preview-and-regenerate loop where each Regenerate click fully replaces the question set (confirmed: appending a request for one more field changed the entire set, not just appended it) | The AI explicitly invites follow-up ("Is there anything else you'd like to include?") with a second input inside the modal, supporting iterative form building through conversation |
| AI feedback mechanism | — | Per-response thumbs-up/thumbs-down buttons on each AI response, plus a "Give feedback" option in the menu |
| Loading animation | Animated Zia orb during generation, alongside a 4-line status ladder; exact styling/timing not captured | Lottie-based sparkle animation (`ai_stars.json`, 24×24px, 25fps) during generation, with present-continuous action text that switches to past tense on completion |
| Internal AI product name | "Zia" (Zoho's AI brand) | "Copilot" — confirmed from the `"Close copilot chat"` accessible label and the `/copilot/` API endpoint prefix |
| Suggested-changes discard behavior | No discard-confirmation observed — the mid-flow `PUT` persists the schema as a template regardless; only "Create Form" makes it a real form | Closing the chat before applying shows a confirmation dialog ("Discard form suggestions?"), confirming suggestions are staged/uncommitted until "Create form" is clicked |

## Sources

- OBSERVATION: Live trace on a real Typeform account (admin.typeform.com), via Claude browser extension, 2026-09-17. Tested by submitting an actual AI generation prompt ("Create a customer feedback survey with 3 questions") from the dashboard-level "Ask Typeform AI" input, observing the full generation cycle, capturing network requests via a `fetch` interceptor + `read_network_requests`, and examining the generated form in the builder afterward. Clicked "Create form" to apply the AI's suggestions — the generated form was saved and is visible in the workspace as "Customer Feedback Survey," a real, permanent addition to the account (not reverted; a genuine test artifact left in place, consistent with this project's practice of not deleting successfully-created test content that carries no sensitive data).
