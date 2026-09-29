---
product: "Typeform"
company: "Typeform S.L."
category: "Marketing Automation (Forms sub-category) — direct Zoho Forms competitor"
last_verified: "2026-09-17"
status: "in-progress"
---

# Typeform — Product Research Record

> Tag every line item as FACT / OBSERVATION / INFERENCE / CUSTOMER FEEDBACK / RECOMMENDATION per [evidence-guidelines.md](../../00-Framework/evidence-guidelines.md).

> **Note on this record's scope:** this began as a first identification pass (2026-09-16) and has since had several targeted deep-dive passes (2026-09-17, 2026-09-18) — still not the full 171-question standard questionnaire. Section 16 is left `TODO` throughout except where a pass's own findings directly answer a question. **Component-level capture: 10 components filed** in `04-Component-Library/typeform/` — [[yes-no-field]], [[rating-field]], [[theme-design-editor]] (each directly compared against its Zoho Forms equivalent — see those records' own Competitor Comparisons tables, and the corresponding Zoho records: [[yes-no-toggle-field]]/[[toggle-radio-switch]], [[rating-star-field]], [[theme-editor-split-pane-shell]]), plus [[typeform-choices-list-editor]] (compared against [[choices-list-editor]]) and [[typeform-analytics-dashboard]] (compared against [[analytics-dashboard-kpi-bar-map]] — real SVG/visx charting vs. Zoho's hand-built `<table>` bars), and Typeform-only records with no direct Zoho equivalent identified so far: [[typeform-contacts-module]], [[typeform-automations-builder]], [[typeform-scoring-outcome-quiz-editor]] (Workflow tab's Scoring/Outcome-quiz modals — confirmed NOT built on the React Flow engine, a third "edits always autosave" data point), [[typeform-form-mode-picker]] (the "Universal mode" control, confirmed a 4-option builder preset picker, not a respondent-layout toggle — resolves/contextualizes [[yes-no-field]]'s open mode-dependency caveat) — plus [[typeform-ai-chat-to-create]], now directly compared against Zoho's [[zia-ai-form-generator]] (see that record's Competitor Comparisons table). Also on record: [[entries-kanban-view]]'s Competitor Comparisons table now carries a "confirmed absent" finding for Typeform (no alternate/Kanban response view exists). **Remaining from the original backlog:** none — all originally-drafted Part A/B prompts (including Results/Analytics dashboard, filed as [[typeform-analytics-dashboard]]) have been run and filed as of 2026-09-18.

> **Account-level side effects from 2026-09-17 research, left in place (not reverted):** (1) a real form, "Customer Feedback Survey," was generated via the AI chat-to-create flow and saved to the workspace — see [[typeform-ai-chat-to-create]]; (2) a real Workflow + Form-Trigger object pair was created server-side while building an Automations chain, left as an inactive **Draft** (not activated/published) — see [[typeform-automations-builder]]. Neither is sensitive data; both are genuine test artifacts left in place rather than deleted, consistent with this project's practice for non-destructive, non-sensitive test content.

## 1. Identity
- **Company:** Typeform S.L. FACT (product/company name as shown in-app).
- **Category:** Forms / surveys / conversational data collection, with adjacent positioning into lead-gen, lightweight CRM ("Contacts"), workflow automation, and (newest) AI-moderated qualitative research ("Research Flow" / "Roll"). OBSERVATION, from live exploration of the dashboard and top-level nav.
- **Problem solved:** Turning form-filling from a chore into "an experience" — higher completion rates via a distraction-light, one-question-at-a-time flow, plus theming/branding, logic branching, native integrations, and (increasingly) automations and contact management so a form isn't just a data-collection dead end but the front door to a workflow. OBSERVATION (vendor framing as expressed in-app) + INFERENCE (the "why" behind the design).
- **Target users / industries:** Individuals/freelancers (Basic/Plus tiers, 1–3 seats); small-to-mid marketing/growth/ops teams doing lead capture and qualification (Business/Business Pro, 5 seats, 10K responses/mo); larger orgs needing automated payments/messaging workflows and multi-form analytics (Growth/Enterprise tiers); and a distinct emerging segment — researchers/PMs wanting AI-moderated voice/video interviews at scale ("Research Flow"). OBSERVATION, from the plan picker and top-level nav.
- **Segment:** individual / startup / SMB / enterprise / multiple — spans all, per the tier structure above. OBSERVATION.
- **Platforms:** web (OBSERVATION, this pass). Mobile app existence — TODO (not yet checked).
- **Ecosystem / sister products it integrates with:** 82 integrations across categories (Analytics & reporting, Automation, CMS, Collaboration, Customer support, Developer tools, Documents, File management, and more), plus native Zapier AI flow generation and a separate Webhooks surface. OBSERVATION, from the Connect tab. Full integration-by-integration depth (native vs. Zapier-only) — TODO.

## 2. Market & Business
- **Founded / product age:** TODO.
- **Approximate customer/user base:** TODO (source required).
- **Pricing plans:** OBSERVATION, captured via the in-app "View plans" checkout flow (2026-09-16), yearly billing shown by default ("Save 30%"), monthly toggle also available:

| Plan | Price (USD/mo, billed yearly) | Seats | Responses/mo | Forms | Source |
|---|---|---|---|---|---|
| Basic | 28 | 1 | 100 | Unlimited | In-app "View plans", 2026-09-16 |
| Plus | 56 | 3 | 1,000 | Unlimited | same |
| Business | 91 | 5 | 10,000 | Unlimited | same |
| Business Pro | 140 | 5 | 10,000 | Unlimited | same |
| Growth Flow | 266 | 5 | 10,000 | Unlimited | same |
| Enterprise (custom) | Sales-assisted, not itemized | — | — | — | same |

  Additional plan names surfaced only on the Insights upsell screen (not in the main pricing table): Talent, Enterprise Basic, Growth Custom, Growth Essentials — OBSERVATION that these names exist; whether they're older/parallel SKUs or enterprise sub-tiers is **INFERENCE**, not confirmed. Feature-by-plan breakdown beyond seats/responses/forms — TODO. Checkout flow itself (Choose plan → Add-ons → Billing and Payment → Confirmation) was observed structurally but not completed (no real payment made).
- **Free plan / trial:** A free/trial workspace exists, capped at 10 responses/month with an "Increase response limit" upgrade nudge. OBSERVATION. Whether this is a time-limited trial of paid tiers or a standing free tier — TODO (not disambiguated this pass).
- **Market positioning:** TODO.
- **Key differentiators claimed by vendor:** Conversational one-question-at-a-time UX as the headline differentiator (OBSERVATION, vendor framing throughout the product); AI-assisted creation and moderation (chat-to-create, Research Flow) as an emerging secondary differentiator. INFERENCE that these are the *intended* differentiators, based on UI prominence — not sourced from vendor marketing copy directly.

## 3. Features
- **Builder core:** Single-question-per-screen conversational canvas; a left rail lists question "pages" sequentially. A "Universal mode" toggle was observed, suggesting a non-conversational/classic mode also exists — not explored this pass (OBSERVATION of the toggle's existence; its behavior is NOT OBSERVED).
- **AI-assisted creation:** "Chat to create" (builder canvas) / "Ask Typeform AI" (dashboard) — full natural-language form generation, tested end-to-end 2026-09-17 (see [[typeform-ai-chat-to-create]]). A two-pane modal (chat thread + "Suggested changes"/"Preview" toggle) lets a prompt generate a complete form (welcome screen, contextually-typed questions — e.g. `rating` for satisfaction, the AI-enhanced `deep_dive` type for open-ended questions) via a plan → actions → JSON Patch execution model; suggestions are staged until "Create form" is clicked. OBSERVATION, directly tested, not just UI presence.
- **Field/question types:** A broad palette organized into named groups — Contact info, Choice, Rating & ranking, Text & Video, Other — each with an icon and a lock badge on premium-only fields; includes AI-powered field types (Clarify with AI, FAQ with AI, and `deep_dive` — confirmed via the AI chat-to-create trace) not present in more traditional form builders. OBSERVATION of the palette's existence and grouping; most individual field-type behavior still NOT OBSERVED beyond Yes/No, Rating, and Multiple Choice (component-level capture — see Section 6).
- **Logic/Scoring/Tagging/Outcome quiz:** A separate "Workflow" tab layer distinct from basic branching, aimed at quizzes/assessments with scored outcomes. OBSERVATION (tab exists); internal mechanics NOT OBSERVED.
- **Contacts module (early access):** a real, GraphQL-backed CRM-lite layer, tested end-to-end 2026-09-17 (see [[typeform-contacts-module]]). Contacts sync automatically from any published form that has an Email-type question with "Map to contacts" → "Map to: Email" set — other questions can independently map their answers onto other contact properties (Name, Phone, Job title, Company fields, a free-text "Enrichment" property, etc.) via the same per-question toggle. Each contact record links back to its source form (but only to the form's builder screen, not the specific response). Permissions are fixed/role-based and not yet configurable (view: everyone in the org; edit: editors/admins) — a "Request features" link suggests finer-grained permissions are a known gap. Third-party data enrichment is a separate, off-by-default, paid-tier toggle from the response-sync pipeline. The properties schema is grouped into Person/Company entities, mostly extensible except for three locked identity/consent fields (Email, Email subscription status, SMS subscription status). OBSERVATION, directly tested, not just UI presence.
- **Automations:** post-submission workflows (trigger on form completion, contact activity/update, or a specific date/time) driving follow-up emails/texts, tested end-to-end 2026-09-17 by building a real trigger→action chain (see [[typeform-automations-builder]]). A real node-based visual canvas built on **React Flow**, supporting genuine mid-chain block insertion. Every meaningful step (trigger type, Workspace, Form selection) autosaves immediately against a real, server-persisted Workflow/Form-Trigger object pair — the opposite persistence model from the Theme/Design editor's explicit-save pattern. Smart defaults observed: the "Send email" step auto-detected and pre-selected the target form's actual Email-type question. "Draft" is a publish-state label (not-yet-Activated), not a save-state label — the underlying objects already exist server-side throughout. OBSERVATION, directly tested, not just UI presence. **Zoho Forms does not appear to have an equivalent trigger→action automation-chain builder based on research so far.**
- **Insights (plan-gated):** Cross-form analytics, requires specific paid plans (Talent, Business, Enterprise Basic, Enterprise, Growth Flow, Growth Custom, or Growth Essentials); shown as an upsell/paywall screen on the trial tier. OBSERVATION.
- **Integrations/Connect:** 82 integrations across the categories listed in Section 1, plus a "Generate a custom flow with Zapier AI" natural-language automation builder and a separate Webhooks tab. OBSERVATION.
- **Theming:** A theme gallery with named presets (e.g. "Pearl White," "Classic Blue," "Inky Black," "Plain Blue") plus brand-kit-driven and custom theme creation. OBSERVATION (gallery browsed); the live-editing mechanism itself NOT OBSERVED (no component-level capture done — this is the direct comparison target for [[theme-editor-split-pane-shell]], not yet performed).
- **Share:** Direct link with an editable slug, a built-in QR code generator, a customizable link-preview (OG-style) card, and embed snippets for website and email. OBSERVATION.
- **Results/analytics per form:** Smart Insights (paid), Form performance (views, starts, submissions, completion rate, time to complete, plus a funnel-style chart filterable by time range and device), Response summary, and raw Responses. OBSERVATION of tab structure and metric labels; the underlying rendering mechanism (charting library vs. hand-built, per the direct comparison target for [[analytics-dashboard-kpi-bar-map]]) is NOT OBSERVED — component-level capture not yet done.
- **"Research Flow":** A heavily promoted, distinctly separate product surface pitching AI-moderated voice/video respondent interviews, positioned well beyond classic form-building. OBSERVATION (top-level "Demo" nav item, "Preview a real example" CTA); this is arguably a different product line riding on the same account, not a Typeform-the-form-builder feature — flagged as a scope note, not deep-dived.
- **Most important workflows:** create → add content → (optionally) configure logic/automations → share → review results. OBSERVATION, see Section 7.
- **Integrations — depth (native vs. via Zapier):** TODO.

## 4. Competitors
| Competitor | Type | Notes |
|---|---|---|
| Zoho Forms | direct | Scrollable/all-fields-at-once canvas vs. Typeform's one-question-per-screen conversational canvas — the single biggest structural difference found this pass; see Section 6. |
| Google Forms | direct, low-cost/free | **First-pass record DONE (2026-09-23)**, see `google-forms.md`. Confirmed: a fundamentally different builder paradigm from Typeform's own — isolated question cards on one scrollable canvas rather than one-question-per-screen — though Google Forms' section-paginated *respondent* experience is a partial middle ground between Typeform's per-question pagination and a single unbroken scroll. Google Forms has built-in quiz grading (a direct comparison point against [[typeform-scoring-outcome-quiz-editor]]) and a genuinely free, unconditional pricing model with no equivalent documented for Typeform. |
| JotForm | direct | Not yet researched in this library. |
| Paperform | direct | First-pass record filed 2026-09-23, see `paperform.md`. Confirmed: its document-style builder (Draft.js) can render the respondent-facing form as either a scrolling page OR Typeform-style one-question-per-screen, toggled per-form from the same source — Typeform's conversational flow is Paperform's *default*, not its only mode. |

## 5. Customer Reviews
- **Source(s):** TODO — not yet researched (no G2/Capterra pull performed for this product).
- **Liked most / Disliked most / Recurring complaints / Recurring praise / Requested features / Why customers switch away / Why customers choose it over competitors:** all TODO.

## 6. UI/UX
- **Overall style:** Clean, generously spaced, mostly monochrome (black/white/grey chrome) with a single teal/green accent for upsells and CTAs, and purple/pink gradients specifically for AI-related surfaces (chat-to-create, Research Flow promo). Typography-led rather than icon-dense. OBSERVATION.
- **Builder paradigm — key structural difference from Zoho Forms:** Typeform's builder is a single-question-per-screen conversational canvas: each question lives on its own "page" (left rail lists pages sequentially), and the center canvas shows one question at a time in a large, centered, minimal-chrome layout — closer to a slide editor than a traditional form-field stack. Zoho Forms uses a scrollable, all-fields-visible canvas where the whole form is laid out top-to-bottom at once (per existing Zoho Forms documentation, `01-Zoho-Primary-Products/zoho-forms.md` Section 6). This is a fundamentally different authoring mental model: Typeform optimizes for pacing and per-question focus (for both builder and respondent-facing view), while Zoho Forms optimizes for at-a-glance structure and bulk editing. OBSERVATION + INFERENCE (the "optimizes for" framing is analytical, not vendor-stated).
- **Respondent-facing runtime:** confirmed via the in-builder preview — one question fills the screen, with up/down arrow navigation and a "Powered by Typeform" footer badge. OBSERVATION.
- **Right-hand settings panel:** Contextual to the selected question (Answer type dropdown, "Map to contacts" toggle, Required, Max characters, Answer validation, Custom placeholder text, Image/video attachment, Logic, Comments) rather than a persistent global settings sidebar — a further structural contrast with Zoho Forms' more persistent Field Properties panel pattern. OBSERVATION.
- **Dashboard structure:** "Forms" tab lists forms in a workspace (List/Grid view, sortable by date), a response-quota meter, an AI-suggested form prompt, a workspace switcher (Private/shared workspaces), and a persistent "Ask Typeform AI" input. OBSERVATION.
- **Application shell — no single persistent sidebar:** Typeform has no one app-wide left sidebar. At the workspace level, a horizontal primary tab bar (Forms/Contacts/Automations/Insights/Research Flow) sits in the global top banner, and each tab renders its own independently-structured contextual sidebar (Forms: workspace switcher + quota meter; Contacts: contact lists; Automations: trigger-type categories) rather than one shared component. Inside the form builder, the Content/Workflow/Connect tabs share only the top banner (breadcrumb, tab strip, Share/View plans) — each tab then defines its own main-content shell: Content has the "Pages" outline rail (fully keyboard-accessible drag-reorder, confirmed via an explicit screen-reader drag hint) + a fully-re-rendering single-question canvas + a contextual settings panel; Workflow drops the left rail entirely for a pannable flow-diagram canvas with a fixed "Actions" shortcuts panel; Connect drops it for a filterable integration card list. The only element confirmed to persist across every tab tested, workspace- and builder-level alike, is the floating AI chat input. A naming correction: there is no "Publish" button — the single affordance is "Share," styled with low-contrast outlining that made it easy to miss. Full trace: [[typeform-application-layout]] (AL1, 2026-09-28), cross-linked against Google Forms' own shell in [[google-forms-app-shell]] — both products independently confirmed to have no single global app shell reused across screens. OBSERVATION.
- **Feedback patterns (toast, confirmation modal, tooltip, empty state, loading state):** a bottom-right success toast (green check, explicit close button, ~4–6s auto-dismiss) confirms lightweight actions like copying a link, but a full destructive-confirmation dialog (itemized consequences, red Delete button, in-place "Deleting..." state) is reserved for whole-form deletion — deleting a single question inside the builder, by contrast, has no confirmation and no feedback of any kind. Tooltips on icon-only toolbar controls are dark, anchored, near-instant, and literal — the strongest confirmed hover-tooltip in this library so far. Empty states vary by surface rather than reusing one component (an illustrated graphic + link + single CTA for zero webhooks; text-only + dual CTA for zero responses; icon + instructional heading + single CTA for a brand-new workspace), consistently written in a casual, conversational voice. Loading states are similarly inconsistent: the main builder route shows a bare wordless spinner, while the Connect tab shows branded copy ("Hold tight—just getting this page ready"). No confirmed error-toast pattern was found; the one reproduced error surfaced as inline field validation, and one failure mode (an unreachable webhook URL) failed completely silently — a confirmed false-success UI state, a new defect class for this library. Cross-linked into [[destructive-confirm-modal-comparison]] as a 5th comparison data point. Full trace: [[typeform-feedback-patterns]] (AL2, 2026-09-28). OBSERVATION.
- **Key screens:** see Section 6 above and Screens list below — none individually deep-dived into `04-Component-Library/typeform/` yet.
- **Notable component patterns:** ten components captured in `04-Component-Library/typeform/` — [[typeform-application-layout]] (AL1, 2026-09-28 — the workspace dashboard and form-builder shells, confirmed no single persistent shell reused across screens; cross-linked against [[google-forms-app-shell]], both products independently confirmed to lack one global shell), [[typeform-feedback-patterns]] (AL2, 2026-09-28 — Toast/Confirmation Modal/Tooltip/Empty State/Loading State, confirmed a severity gap in destructive-confirm coverage (whole-form delete gets a rich itemized modal, single-question delete gets nothing at all), a genuinely silent save-failure mode for webhooks, and the library's strongest confirmed hover-tooltip; cross-linked into [[destructive-confirm-modal-comparison]]), [[yes-no-field]] (Radix UI headless `RadioGroup` primitive; one-way selection, no deselect once answered, unlike Zoho's [[yes-no-toggle-field]]; **2026-09-17 follow-up confirmed** the advertised Y/N letter-shortcuts are broken/inert in general — 1-of-6 trials in a true conversational-mode form — not a Universal-mode artifact, and the true conversational flow's progress indicator and slide-transition were also captured), [[rating-field]] (same Radix primitive as Yes/No, shared across Yes/No/Rating/Opinion Scale; configurable 1–10 scale and 17-icon picker vs. Zoho's fixed 5-star; **resolves both gaps flagged in Zoho's [[rating-star-field]]** — a confirmed working hover fill-preview, and `aria-checked` that correctly flips to `true`), [[theme-design-editor]] (architecturally the inverse of Zoho's [[theme-editor-split-pane-shell]] — no iframe at all, builder canvas and "preview" share one DOM tree; styling via a static pre-built font-class catalog + dynamically-generated per-value color/size classes, no CSS custom properties), [[typeform-choices-list-editor]] (Multiple Choice's choices list — built on **dnd-kit**, with real, confirmed-working drag-to-reorder via a dedicated handle icon, a direct, concrete contrast with Zoho's [[choices-list-editor]], which looks draggable but isn't; autosaves per-action against a `bob-the-builder` BFF endpoint), [[typeform-contacts-module]] (GraphQL-backed CRM-lite contacts list — no direct Zoho equivalent identified), [[typeform-automations-builder]] (React Flow-based trigger→action chain builder — no direct Zoho equivalent identified; autosaves per-action, the opposite persistence model from the Theme editor), [[typeform-ai-chat-to-create]] (natural-language form generation via a plan→actions→JSON-Patch execution model — **now directly compared against Zoho's [[zia-ai-form-generator]]**, see that record's Competitor Comparisons table), [[typeform-analytics-dashboard]] (Results tab's Form performance/Response summary charts — real SVG charting via **visx**, computed axis ticks/scales, no `<canvas>` anywhere, no load-in animation confirmed via DOM polling; date-range filter re-derives KPI tiles client-side with no additional API call observed; directly compared against Zoho's [[analytics-dashboard-kpi-bar-map]], whose bar chart is a hand-built literal `<table>`). Also confirmed absent: an alternate/Kanban-style Responses view (see [[entries-kanban-view]]'s Competitor Comparisons table) — Typeform's Responses tab offers only a single table/grid view.
- **Screens (names/one-line descriptions; several now deep-traced — see cross-links):**
  - Dashboard / Workspace ("Forms" tab) — also the "Ask Typeform AI" entry point, see [[typeform-ai-chat-to-create]].
  - Form builder — Content tab (the conversational canvas).
  - Form builder — Workflow tab (Logic, Scoring, Tagging, Outcome quiz; right-hand Actions panel with shortcuts into Connect/Automations/Contacts).
  - Form builder — Connect tab (integrations marketplace + Webhooks + Zapier AI flow generator).
  - Form builder — Share tab (appears only after first save).
  - Form builder — Results tab (appears only after first save); Responses sub-tab confirmed to offer only a plain table view, no alternate/Kanban view (see [[entries-kanban-view]]).
  - Contacts (top-level, early access) — deep-traced, see [[typeform-contacts-module]].
  - Automations (top-level) — deep-traced, see [[typeform-automations-builder]].
  - Insights (top-level, plan-gated).
  - Research Flow (top-level, labeled "Demo" — separate product surface).
  - Pricing/plans (4-step in-app checkout modal).
- **Onboarding, accessibility, responsive behavior:** NOT OBSERVED — not exercised this pass.

## 7. User Flows
- **Create a form:** Dashboard → "Create form" → lands directly in the Content tab of a new, empty form → "Add content" to insert first field, or use AI chat-to-create. OBSERVATION.
- **Add a question:** Add content → browse/search palette → click a field type → inserted as a new page in the left rail, opened in the canvas with its settings panel on the right. OBSERVATION.
- **Publish/share:** Once the form has content, "Share" and "Results" tabs appear in the top nav (hidden on a brand-new, unshared form) → Share tab surfaces the link, QR code, and embed options. OBSERVATION. **Notable pattern:** tabs being conditionally hidden until first save is a distinct gating pattern from Zoho Forms (whose Share/Analytics entry points are consistently present, not conditionally revealed) — worth confirming this holds across more Typeform forms before treating it as a firm rule.
- **Automate a follow-up:** Workflow tab → Actions panel → Automations shortcut, or top-level Automations tab → "Create automation" → pick a trigger category (form submission, contact activity, or scheduled) → a real node-based canvas opens with a pre-built Trigger → "+" → "End automation" skeleton chain → each action added via the "+" menu inserts at that exact chain position. OBSERVATION, a real chain was built end-to-end 2026-09-17 (stopped short of "Activate") — see [[typeform-automations-builder]]. Every step autosaves immediately server-side.
- **Generate a form with AI:** "Ask Typeform AI" (dashboard) or "Chat to create" (builder) → submit a prompt → a two-pane modal shows the chat thread plus a "Suggested changes" outline / phone-mockup "Preview" toggle → "Create form" applies the staged suggestions. OBSERVATION, tested end-to-end 2026-09-17 — see [[typeform-ai-chat-to-create]]. Generation took roughly 5–7 seconds in this trace.
- **Connect an app:** Connect tab (per-form) or top-level Integrations link (account-wide) → browse/search 82 integrations by category → Connect, or describe a desired automation in plain language to the Zapier AI flow generator. OBSERVATION (navigation and search confirmed); an actual connection was not completed this pass.
- **Upgrade:** "View plans" (visible from most screens, or triggered contextually by hitting a limit, e.g. the 10-response/month cap or the Insights paywall) → 4-step checkout (Choose plan → Add-ons → Billing and Payment → Confirmation). OBSERVATION; checkout was not completed (no real payment made).

## 8. Technical Observations
> Only where publicly observable/permitted. Mark INFERENCE clearly.
- **Frontend tech clues:** NOT OBSERVED this pass (no DOM/network inspection performed — this was a UI-level identification pass, not a technical capture).
- **Backend/architecture inferences:** NOT OBSERVED.
- **APIs/network behavior observed:** NOT OBSERVED.
- **Auth/session handling:** NOT OBSERVED.
- **Caching, uploads, real-time behavior:** NOT OBSERVED.

## 9. Performance & Reliability
- Load/interactivity observations: NOT OBSERVED (no timing/perf measurement performed).
- Reliability-related customer feedback: NOT OBSERVED (no review research performed yet).

## 10. AI Features
- **What exists:** "Chat to create" (builder canvas) / "Ask Typeform AI" (dashboard prompt box), internally named **"Copilot"** (confirmed via the `"Close copilot chat"` accessible label and the `/copilot/` API endpoint prefix); "Create with AI" (Add-content modal, not separately re-tested); two AI-powered field types confirmed to exist (`deep_dive`, an AI-enhanced open-ended question type auto-selected by the generator; Clarify with AI and FAQ with AI were named in the original pass but not independently re-confirmed). Separately, "Research Flow"/"Roll" pitches AI-moderated voice/video respondent interviews — a distinct product surface, not a form-builder feature per se.
- **What it does / how it's surfaced — fully tested 2026-09-17** (see [[typeform-ai-chat-to-create]]): submitting a prompt opens a two-pane modal (chat thread + "Suggested changes"/"Preview" toggle). The AI decomposes the request into a **plan → actions → JSON Patch** execution model — structured, reversible patch operations against the form's data model, not free-form manipulation — and auto-selects contextually appropriate field types (e.g. `rating` for a satisfaction question, `deep_dive` for open-ended ones) rather than defaulting to generic text fields. Generation took ~5–7 seconds in this trace. Suggestions are staged and require an explicit "Create form" click to commit (a "Discard form suggestions?" guard exists on early close). Additional confirmed features: multi-turn refinement (a follow-up chat input inside the modal), per-response thumbs-up/down feedback, an "Extended Thinking" toggle (paid-plan-gated, off by default), "Typeform AI memory," voice dictation, and file-upload-for-context — none of the latter four were exercised in depth this pass.
- **Customer sentiment:** NOT OBSERVED (no review research performed).

## 11. Mobile Experience
- NOT OBSERVED — web only this pass.

## 12. Security & Permissions
- NOT OBSERVED / TODO — publicly documented roles/SSO/2FA info not yet researched. "Contact permissions and settings" was observed to exist as a UI surface in the Contacts tab, but its actual permission model was not explored.

## 13. Strengths / Weaknesses
- **Best features:** TODO — needs a deeper pass plus a direct competitor comparison basis before this can be judged rather than merely described.
- **Weakest features:** TODO — same caveat. One structural observation worth flagging for the second pass: Share/Results tabs being conditionally hidden until first save (see Section 7) is a possible friction point worth testing against new-user expectations, but this is a hypothesis, not a confirmed weakness — **RECOMMENDATION:** verify with either usability reasoning or customer-review evidence before stating it as a weakness.

## 14. Competitive Score
| Category | Score /10 | Evidence |
|---|---|---|
| *(TODO — scoring requires a completed component-level deep-dive plus customer-review research for a defensible comparison basis)* | | |

## 15. What We Should Learn
- **Patterns to adopt (candidates, pending deeper verification):** the conversational one-question-per-screen builder paradigm is a genuinely different, well-differentiated authoring model worth understanding in depth before any judgment on whether it's "better" — it optimizes for a different use case (pacing/focus) than Zoho Forms' at-a-glance canvas, not a strict improvement. INFERENCE, flagged for verification once component-level capture is done.
- **Patterns to avoid:** TODO — needs the deeper pass.

## 16. Standard Questionnaire — Full Answer Set (seetha_research_library.md §4–15)

> Only questions this first-identification pass can actually answer are filled in; everything requiring deeper research, customer reviews, or live technical/component capture is `TODO` or `NOT OBSERVED` per library convention — not guessed.

### Product Identification (§4, Q1–12)
1. What is the product? — A form/survey builder known for its conversational, one-question-per-screen UX. See Section 1.
2. What problem does it solve? — See Section 1.
3. What category does it belong to? — Forms/surveys, Marketing Automation category. See Section 1.
4. Who is the target customer? — See Section 1.
5. Individuals/startups/SMBs/enterprises/multiple? — Multiple, spans all via tiered plans. See Section 1.
6. Major features? — See Section 3.
7. Most important workflows? — See Section 7.
8. What platforms does it support? — Web confirmed; mobile TODO.
9. Web/desktop/mobile/all? — Web confirmed this pass; desktop/mobile TODO.
10. What integrations does it provide? — 82 integrations across multiple categories; see Section 3. Depth (native vs. Zapier-only) TODO.
11. What ecosystem does it belong to? — TODO (parent company ecosystem beyond the product itself not researched).
12. Which other products in the same company's suite does it integrate with? — TODO.

### Business & Market (§5, Q13–26)
13. How long has the product existed? — TODO.
14. How important is it within its company's ecosystem? — TODO.
15. What pricing plans are available? — See Section 2.
16. What is included in each plan? — Partial — seats/responses/forms captured; full feature-by-plan breakdown TODO.
17. Is there a free plan? — A free/trial workspace exists (10 responses/mo cap); whether it's time-limited or standing — TODO.
18. Is there a free trial? — See Q17; distinct trial vs. free-tier terms TODO.
19. What limitations exist in the free/trial version? — 10 responses/month cap observed; other limitations TODO.
20. Approximate customer/user base? — TODO.
21. What industries use it? — TODO.
22. Which geographic markets are important? — TODO.
23. Market positioning? — TODO.
24. What differentiates it from competitors? — See Section 2 (Key differentiators) and Section 6 (builder paradigm).
25. What type of company/customer gets the most value from it? — INFERENCE only, from tier structure — see Section 1; not independently verified.
26. Major selling points? — See Section 3.

### Competitor Research (§6, Q27–41)
27. Who are the top competitors? — See Section 4.
28. Which competitor is the closest equivalent? — Zoho Forms is the one directly compared in this library; broader market context TODO.
29–41. — TODO (all require either broader market research or completed deep-dives across multiple competitors, not yet performed).

### Customer Review Research (§7, Q42–57)
42–57. — All TODO (see Section 5).

### UI/UX Benchmarking (§8, Q58–82)
58. Overall UI style? — See Section 6.
59. Is navigation easy to understand? — NOT OBSERVED (not independently assessed against a usability rubric this pass).
60. Sidebar structure? — See Section 6 (left rail = question pages, not a nav sidebar in the traditional sense).
61. Dashboard structure? — See Section 6.
62. Clicks required for common workflows? — NOT OBSERVED (not measured).
63. Important screens? — See Section 6.
64. Important UI components? — NOT OBSERVED at component level yet — see note in Section 6.
65–82. — NOT OBSERVED (button/form/table/card/tab/modal/dropdown/filter/search/notification/error/loading/empty/confirmation/permissions/onboarding/responsive/accessibility design — none individually captured this pass; this is exactly the gap the planned component-level prompts (B2–B7) target).

### Workflow Benchmarking (§9, Q83–99)
83–99. — Partial: the create/add-question/publish/automate/connect/upgrade flows are described at a high level in Section 7 (OBSERVATION), but click-counts, validation behavior, error states, and undo/recovery were NOT OBSERVED at the granular level these questions ask for.

### Backend / Technical Benchmarking (§10, Q100–118)
100–118. — All NOT OBSERVED (no DOM/network/JS inspection performed this pass — see Section 8).

### Performance & Reliability (§11, Q119–129)
119–129. — All NOT OBSERVED / TODO (see Section 9).

### AI Capability Benchmarking (§12, Q130–143)
130. Does the product have AI features? — Yes, see Section 10.
131. What AI features exist? — See Section 10.
132. What problems do those AI features solve? — Form-creation speed (chat-to-create, directly confirmed) — INFERENCE for respondent-research depth (Research Flow), not vendor-confirmed.
133. Does AI generate content? — **Confirmed, directly tested 2026-09-17.** A prompt generates a complete form (welcome screen, typed questions, form settings) via a plan→actions→JSON Patch model — see Section 10 and [[typeform-ai-chat-to-create]].
134. Does AI summarize information? — TODO/NOT OBSERVED.
135. Does AI automate workflows? — Partially, via the Zapier AI flow generator (OBSERVATION of its existence; behavior NOT OBSERVED). The Automations builder itself ([[typeform-automations-builder]]) is not AI-driven — it's a manually-configured trigger→action chain.
136. Does AI provide recommendations? — TODO/NOT OBSERVED.
137. Does AI analyze customer/product data? — TODO/NOT OBSERVED.
138. Does AI use company/customer context? — **Confirmed:** every AI chat message includes a `page_context` parameter (current page, URL, workspace ID) — see [[typeform-ai-chat-to-create]]. Whether this changes generation *behavior* by page was not compared.
139. What AI models/providers are publicly disclosed? — Not disclosed to the client — all AI/generation traffic routes through Typeform's own `/copilot/` endpoints, no third-party model/vendor identifier observed in the network layer.
140. How is AI integrated into the UI? — See Section 10 (surfaced prominently, persistent input + dedicated modal/nav entries); confirmed via direct testing to open a two-pane chat+preview modal, not just a UI presence.
141. Does AI reduce the number of manual steps? — Directly observed to reduce them for form *creation* (one prompt → a fully populated form vs. manual field-by-field building) — a described behavior, not an independently measured step-count comparison.
142. Do customers consider the AI useful? — TODO (no review research performed).
143. What limitations/complaints exist around the AI? — One confirmed limitation: the live respondent-form path of a structurally similar AI feature on the Zoho side ([[smart-scan-ai-field]]) fails in production despite working in a builder-time demo — not yet checked whether Typeform's chat-to-create has an analogous demo-vs-production gap.

### Integration Research (§13, Q144–154)
144. What integrations are available? — See Section 3.
145–154. — TODO/NOT OBSERVED (depth, setup ease, auth, failure handling, sync behavior — none tested this pass).

### Security & Permissions (§14, Q155–163)
155. How are user roles handled? — For Contacts specifically (the only permissions surface deep-dived so far): a fixed, non-configurable, role-based model — view: everyone in the org, edit: editors/admins — with a "Request features" link implying finer-grained permissions are a known, unmet ask. See [[typeform-contacts-module]]. Broader account-wide role handling (beyond Contacts) — TODO.
156–163. — TODO/NOT OBSERVED.

### Mobile Experience (§15, Q164–171)
164–171. — All NOT OBSERVED (web only this pass — see Section 11).

## Sources
- OBSERVATION: Live exploration of an existing Typeform account/trial (admin.typeform.com), via the Claude browser extension, 2026-09-16. Dashboard, form builder (Content/Workflow/Connect/Share/Results tabs), Contacts, Automations, Insights (upsell view), Research Flow landing screen, and the in-app pricing/checkout modal were all directly navigated. No DOM/network/JS-level inspection was performed (out of scope for this first-identification pass); no payment was completed; no AI request was completed; no automation was actually built.
- OBSERVATION: Follow-up deep-dive passes, 2026-09-17, via the Claude browser extension: Responses view-mode check (no Kanban/board alternate exists), Multiple Choice choices-list editor (dnd-kit-based, real drag-to-reorder confirmed), a Yes/No field follow-up resolving the keyboard-shortcut question in a true conversational-mode form, the Contacts module (built a real Email-mapped question, published, and submitted a live response to confirm contact creation), the Automations builder (built a real trigger→action chain, stopped before Activate), and the AI chat-to-create flow (submitted a real generation prompt, applied the result). See each linked component record's own Sources section for full per-trace detail.
