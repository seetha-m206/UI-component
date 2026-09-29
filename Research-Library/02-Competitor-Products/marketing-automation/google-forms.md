---
product: "Google Forms"
company: "Google LLC"
category: "Marketing Automation (Forms sub-category) — free/low-cost baseline competitor to Zoho Forms, Typeform, Paperform"
last_verified: "2026-09-23"
status: "in-progress"
---

# Google Forms — Product Research Record

> Tag every line item as FACT / OBSERVATION / INFERENCE / CUSTOMER FEEDBACK / RECOMMENDATION per [evidence-guidelines.md](../../00-Framework/evidence-guidelines.md).

> **Note on this record's scope:** this is a first identification pass (2026-09-23, [[prompt-backlog-google-forms]] P1) — broad exploration across identity, screens, field types, builder paradigm, pricing, and distinctive live-tested features, not the full 171-question standard questionnaire and no component-level captures yet. Section 16 is left `TODO`/`NOT OBSERVED` throughout except where this pass's own findings directly answer a question. Observed on a **personal (non-Workspace) Gmail account** — this matters directly for Section 2 (Pricing) and Section 12 (Security & Permissions), since several gated behaviors are documented as unconfirmed specifically because a Workspace account wasn't available this pass.

## 1. Identity
- **Company:** Google LLC. FACT.
- **Category:** A free, standalone form/survey/quiz builder bundled into the Google Docs/Drive suite (same app-switcher, same Drive-file model) — positioned as a lightweight data-collection tool, not a marketing/lead-gen product. OBSERVATION: no landing-page styling, no funnel/payment features, and no "conversion" branding anywhere in the product, unlike Typeform or Paperform's own self-positioning.
- **Problem solved:** Fast, zero-setup collection of survey/quiz/RSVP/internal-ops responses that land directly in a spreadsheet, using an interface anyone already familiar with Google Docs/Sheets can use immediately. OBSERVATION + INFERENCE.
- **Target users / industries:** INFERENCE, from the template gallery's own category structure (Personal/Work/Education, see Section 6) — teachers/educators (quizzes, exit tickets, assessments are first-class templates), event organizers (RSVP, Find a Time, Party Invite), HR/ops teams (Time Off Request, Job Application, Work Request), and general survey-takers wanting responses in a spreadsheet with no setup.
- **Segment:** individual / SMB / education — INFERENCE from template categories and the complete absence of an enterprise-specific tier inside Forms itself (Workspace, a separate product, is where org-level controls live — see Section 2).
- **Platforms:** web (OBSERVATION, this pass). Mobile app / native app existence — TODO.
- **Ecosystem / sister products it integrates with:** Google Drive (forms are Drive files; the Share dialog is literally Drive's own sharing UI reused as-is), Google Sheets (live-linked response export, confirmed propagating in real time — see Section 7), Google Apps Script (a bound scripting project reachable directly from the builder's ⋮ menu), and a general Google Workspace Marketplace add-ons entry. OBSERVATION.

## 2. Market & Business
- **Founded / product age:** TODO.
- **Approximate customer/user base:** TODO (source required).
- **Pricing plans:** **Confirmed genuinely free with no paid tier, no in-app upsell, and no "Upgrade" prompt anywhere in the builder, Settings, Theme panel, or Share/Publish dialogs** — OBSERVATION, confirmed by walking every settings panel and both share/publish dialogs on a personal account without a single nag screen appearing.

| Plan | Price | What's gated | Source |
|---|---|---|---|
| Google Forms (personal account) | Free | Nothing observed gated inside Forms itself — quiz mode, themes, file uploads, Apps Script, add-ons, and branching all worked with no prompt | OBSERVATION, 2026-09-23, personal Gmail account |
| Google Workspace (separate product) | Not observed this pass | Org-level admin controls (e.g. "restrict responses to people in your organization" was absent on this personal account's Settings → Responses panel — INFERENCE that this is Workspace-gated, not independently confirmed with a Workspace account) | INFERENCE, needs a Workspace-account retest to confirm |
| Google One / Workspace storage | N/A to Forms directly | An "Upgrade" button appears only in the **linked Google Sheet's** own toolbar (standard Sheets/Drive storage-upsell chrome) — never inside Forms proper; File Upload responses count against the *form owner's* Drive storage quota (a running "This form can accept up to 1 GB of files" note was observed) | OBSERVATION |

- **Free plan / trial:** Not a trial — Forms is unconditionally free for any Google account, with unlimited forms/questions observed this pass. OBSERVATION.
- **Market positioning:** TODO (not yet researched from public/marketing sources — this pass is in-app only).
- **Key differentiators claimed by vendor:** INFERENCE from UI prominence, not sourced from marketing copy directly — genuinely free with no paywall anywhere in the product; deep Google Drive/Sheets/Apps Script integration; quiz-grading built in as a first-class mode rather than an add-on.

## 3. Features
- **Builder paradigm — the key comparison point, confirmed:** a plain, scrollable, all-questions-visible canvas of isolated question cards — closest to Zoho Forms' scrollable-canvas model, structurally distinct from both Typeform's one-question-per-screen conversational flow and Paperform's continuous Draft.js rich-text document. Each question is a self-contained card (drag handle, its own type dropdown, its own required/answer-key/more-options row) — you cannot type free-flowing prose that spans between question cards the way Paperform's document canvas allows; a small B/I/U/link toolbar exists only for a focused field's own label/description text, not page-level prose. OBSERVATION, directly tested. **One structural nuance versus a pure single-page Zoho-style canvas:** Google Forms supports **sections**, each becoming its own page at fill-time (confirmed live — the respondent view showed Back/Next/Submit navigation across two sections) — so authoring is "all questions in the current section visible at once, sections stacked with page-break dividers," while the live respondent experience is paginated by section, not by individual question. A middle ground between Typeform's per-question pagination and a single unbroken scroll.
- **Field/question types — 12 in the type-picker, confirmed via direct exploration:** Short answer, Paragraph, Multiple choice (with per-option image support, an "Other" free-text option, and per-option "Go to section based on answer" branching), Checkboxes, Dropdown, File Upload (Drive-coupled — see below), Linear Scale (numeric, configurable 0/1 to a max of 10, labels on the low/high ends only), Rating (a *separate* type from Linear Scale — configurable max + icon style: star/heart/thumbs-up, tappable icons rather than numbered radios), Multiple choice grid, Checkbox grid (matrix, "Require a response in each row" toggle), Date, and Time. Plus two content-block types added from the same "+" toolbar but outside the question-type list: section breaks (a page icon) and image/video/title-text blocks. An "Import questions" icon (pulling from another existing form) is also present, not deep-traced this pass.
- **Direct parity notes vs. already-documented competitors:** no native binary Yes/No type exists (same gap as most competitors — only achievable via a 2-option Multiple choice/Dropdown/Checkbox); Google Forms ships **two** distinct rating-style types (Linear Scale = numbered, Rating = iconography) where competitors typically ship one; Dropdown is a first-class type, not a Multiple-choice variant; File Upload is uniquely Drive-coupled with an explicit trust-consent gate (see below) rather than generic external storage; Date and Time are separate native types, not one combined field.
- **Quiz mode — confirmed, end-to-end tested live, a strong differentiator:** a single "Make this a quiz" Settings toggle unlocks a **Release grades** choice (Immediately after each submission vs. Later after manual review — the latter auto-enables "Collect email addresses"), three Respondent-visibility toggles (show missed questions / correct answers / point values, default-on), and a global default point value for new questions. Once enabled, every question gains an inline "Answer key (N points)" link and a live running "Total points: N" counter in the nav. A real live respondent submission was tested end-to-end with immediate release: the confirmation screen showed a "View score" button leading to a locked, graded response view. OBSERVATION.
- **Section/page-break branching — confirmed live at two levels:** section-level ("After section N: Continue to next section ▾"), and per-answer level via a Multiple-choice question's "Go to section based on answer" toggle, which gives each individual option its own destination dropdown (default "Continue to next section," swappable to jump to any section or submit directly). Tested end-to-end on the live respondent view (Next → correct section reached → Submit). OBSERVATION.
- **Live-linked Google Sheets export, confirmed propagating in real time — a strong differentiator with no equivalent documented for Zoho Forms, Typeform, or Paperform:** Responses tab → "Link to Sheets" creates a new or existing spreadsheet instantly. A test response submitted via the live public link appeared in the linked Sheet with **no manual refresh required**. The sheet uses Google Sheets' newer "Tables" object (a named, dropdown-filterable table region, `Form_Responses`), not a plain cell range. OBSERVATION, directly tested end-to-end.
- **Apps Script + add-on marketplace:** the ⋮ overflow menu exposes a bound Apps Script project directly (full programmatic control — form-submit triggers, custom validation) and a "Get add-ons" marketplace entry, both reachable inside the builder chrome rather than requiring an external developer console — a meaningfully deeper extensibility surface than a typical SaaS form builder's "Zapier/webhooks only" integration story. OBSERVATION (existence confirmed; not opened/exercised this pass).
- **File Upload's Drive-coupling and consent gate:** uploads land in the *form owner's* Drive, and first use requires an explicit consent dialog ("Respondents will be required to sign in to Google... only share this form with people you trust"). Configurable: allowed file types, max file count, max file size (default 10 MB), with a running storage-quota note and a "View folder" shortcut. A distinctive Google-specific UX/trust tradeoff other builders in this library don't have to navigate. OBSERVATION.
- **Respondent-side autosave:** a first-visit dialog on the live form states progress is saved for 30 days for signed-in respondents, letting them resume across devices/sessions — not flagged this explicitly in any of Zoho Forms/Typeform/Paperform's existing records. OBSERVATION.
- **Theme panel (paint-roller icon):** font family + size set independently for Header/Question/Text, a header image picker, 12 preset accent colors plus a custom swatch, and 3 auto-derived background-tint presets plus custom — applies live to the canvas underneath. OBSERVATION (existence and controls confirmed; not deep-dived as its own component this pass).
- **Sharing/publishing model reuses Google Drive's own sharing system wholesale, not a Forms-specific implementation:** collaborators are added as Drive-style Editors; "General access" is split into two independently configurable rows — Editor view (who can co-edit the form) and Responder view (who can submit responses). A separate Publish dialog gates whether responses are accepted at all; once published, the toolbar shows a "Published" pill leading to a "Copy responder link" panel. OBSERVATION.
- **Most important workflow:** Blank form (or a template) → question cards added via the "+" side toolbar (type picker, image/video/section-break blocks) → Theme panel for styling → Settings for quiz/response/presentation behavior → Publish → Share (Drive-reused dialog) or copy the responder link. OBSERVATION, directly exercised end-to-end including a live publish and a real test submission.
- **Integrations:** native — Google Sheets (live-linked export), Google Drive (file storage + sharing), Apps Script (full programmatic extensibility), Workspace Marketplace add-ons. No third-party integration marketplace (Zapier-style) was observed inside Forms itself this pass — TODO to confirm whether one exists.

## 4. Competitors
| Competitor | Type | Notes |
|---|---|---|
| Zoho Forms | direct | Both use a scrollable, all-fields-visible builder canvas — the closest paradigm match of the three prior competitors researched — but Google Forms adds a native section/page-break primitive with per-answer branching that Zoho's documented canvas does not have (worth confirming against Zoho's own records, flagged as a cross-check). |
| Typeform | direct | Fundamentally different builder paradigm (isolated question cards on one scrollable canvas vs. one-question-per-screen conversational flow) — though Google Forms' section-paginated *respondent* experience is a partial middle ground between the two. |
| Paperform | direct | No document/rich-text canvas — question cards are isolated, not embedded in flowing prose. Paperform has native payments/calculation/e-signature/PDF-generation; Google Forms has none of these, but counters with genuinely free pricing, live-linked Sheets export, and Apps Script extensibility that none of the other three products document. |
| JotForm | direct | **First-pass record DONE (2026-09-29)**, see `jotform.md`. Confirmed: JotForm's free tier is submission-gated (100/mo, 5 forms) — tighter than Google Forms' genuinely free/uncapped model, which remains the only unconditionally-free product among the five researched so far. Application Layout captured: [[jotform-app-shell-dashboard]], [[jotform-app-shell-builder]], cross-linked into [[google-forms-app-shell]]'s own Competitor Comparisons table. |

## 5. Customer Reviews
- **Source(s):** TODO — not yet researched (no G2/Capterra pull performed for this product).
- **Liked most / Disliked most / Recurring complaints / Recurring praise / Requested features / Why customers switch away / Why customers choose it over competitors:** all TODO.

## 6. UI/UX
- **Overall style / navigation model:** A dashboard (`forms.google.com`) styled identically to Google Docs/Sheets home — a "Start a new form" row, an expandable Template gallery link, and a Recent-forms list/grid with owner filter, sort, and folder view. No response analytics or account-wide stats live on the dashboard itself — it is purely a file browser, matching Drive's own pattern. OBSERVATION.
- **Template gallery:** a dedicated full page (not a modal), organized into three named sections — **Personal** (Contact Information, Find a Time, RSVP, Party Invite, T-Shirt Sign Up, Event Registration), **Work** (Event Feedback, Order Form, Job Application, Time Off Request, Work Request, Customer Feedback), **Education** (Blank Quiz, Exit Ticket, Assessment, Worksheet, Course Evaluation). Notably **no "Marketing" or lead-gen category** — reinforces the ops/survey/education positioning over Typeform/Paperform's lead-gen framing. OBSERVATION.

| Screen | What it is |
|---|---|
| Home / dashboard | `forms.google.com` — Start-new row + Recent forms list, no analytics. |
| Template gallery | Full-page view, 3 categories (Personal/Work/Education), no Marketing category. |
| Builder — Questions tab | Default view; scrollable canvas of isolated question cards (see Section 3). |
| Builder — Responses tab | 3 sub-views: Summary (aggregate charts + quiz Insights), Question (per-question distribution chart + quiz inline manual grading), Individual (single-respondent record, not deep-traced). A green "Link to Sheets"/"View in Sheets" button and live response counter sit above. |
| Builder — Settings tab | Make this a quiz (master toggle), Responses group (collect email, response copy, editable responses, limit-to-1), Presentation group (progress bar, shuffle, confirmation message, restrictions), plus a separate Defaults panel for future forms. |
| Theme panel | Slide-out from the paint-roller icon — fonts, header image, 12+custom accent colors, 3+custom background tints. |
| Share / collaborator dialog | Google Drive's own sharing dialog, reused as-is — Editors + separate Editor-view/Responder-view General access rows. |
| Publish dialog | Responder access + a "nobody is auto-notified" note + Dismiss/Publish. Post-publish, becomes a "Published" pill → "Copy responder link" panel (with optional URL shortening). |
| ⋮ overflow menu | Make a copy, Move to trash, Pre-fill form, Embed HTML, Print, Apps Script, Get add-ons, Unpublish form. |
| Live respondent view (`.../viewform`) | Paginated by section (Back/Next/Submit); signed-in identity shown; a 30-day autosave dialog; a fixed footer ("neither created nor endorsed by Google," Terms/Privacy, an abuse-report link, wordmark); an owner-only floating edit-pencil FAB. |

- **Notable component patterns:** the application shell/header/main-content structure is now captured in [[google-forms-app-shell]] (GF9, 2026-09-28) — confirmed no single persistent top bar reused across screens (dashboard and builder each ship their own), no docked sidebar on the dashboard (only a fixed-overlay hamburger drawer), and a sticky-header-over-independently-scrolling-canvas pattern in the builder verified by direct scroll test. The product's Feedback patterns (Toast, Confirmation Modal, Tooltip, Empty State, Loading State) are now captured in [[google-forms-feedback-patterns]] (GF10, 2026-09-28) — confirmed two distinct, easily-conflated notification mechanisms (a never-auto-dismissing save-status line and a snackbar toast that also never auto-dismissed on any observed timer, both lacking `role`/`aria-live`), a confirmation-modal gating rule based on scope-of-consequence rather than destructiveness alone (single-question delete skips the modal entirely; whole-form and whole-section deletes both get one), and matched `aria-label`/`data-tooltip` pairs on every icon-only control tested, though no visual tooltip bubble could be triggered. Strong remaining candidates for deep-dive capture (see [[prompt-backlog-google-forms]] Part B): the quiz mode/answer-key builder (a direct comparison point against Typeform's [[typeform-scoring-outcome-quiz-editor]]), the Rating field (a 4-way comparison candidate against [[rating-star-field]] (Zoho), [[rating-field]] (Typeform), and [[paperform-rating-field]] (Paperform)), the Linear Scale field (no direct equivalent documented elsewhere in this library yet), the section-based branching UI, the File Upload consent-gate, and the choice-grid/matrix question types.
- **Onboarding, accessibility, responsive behavior:** NOT OBSERVED this pass.

## 7. User Flows
- **Form creation → publish → response collection, confirmed end-to-end:** Blank form → question cards via "+" toolbar → Theme panel → Settings (quiz/response/presentation config) → Publish dialog → Share (Drive-reused dialog) or copy responder link → a real respondent fills and submits the live public form. OBSERVATION, directly exercised including a genuine live submission.
- **Quiz grading flow, confirmed end-to-end:** enable "Make this a quiz" → set Release grades to Immediate → publish → submit a live test response → confirmation screen shows a "View score" button → leads to a locked, graded view of the response (points per question/section). OBSERVATION.
- **Section-branching flow, confirmed end-to-end:** enable "Go to section based on answer" on a Multiple-choice question → assign a per-option destination section → publish → a live respondent's answer correctly routes them to the assigned section → Submit. OBSERVATION.
- **Live-Sheets-sync flow, confirmed end-to-end:** Responses tab → Link to Sheets (new spreadsheet) → publish the form → submit a live test response from the public link → reopen the linked Sheet with no manual refresh → the response row (Timestamp/Score/question columns) is already present, in a named "Tables" object (`Form_Responses`), not a plain range. OBSERVATION.

## 8. Technical Observations
> Only where directly observed this pass. Marked INFERENCE where not confirmed via DOM/network inspection.
- **Frontend tech clues:** NOT OBSERVED — no direct DOM/JS framework inspection performed this pass (unlike the confirmed Draft.js finding for [[document-canvas-editor-shell]]/Paperform). Flagged as a target for a future deep-dive pass.
- **Backend/architecture inferences:** the live-linked Sheets export propagating with no manual refresh (Section 7) suggests either a push/webhook-driven write-through to Sheets or a very short client-side poll on the Sheet's own end — not independently confirmed via network capture this pass. INFERENCE.
- **APIs/network behavior observed:** NOT OBSERVED — no fetch/XHR interception performed this pass.
- **Auth/session handling:** Respondent identity is tied to the signed-in Google account where "Collect email addresses" or sign-in is required; a first-visit autosave dialog persists partial progress for signed-in respondents for 30 days. OBSERVATION (behavior confirmed; underlying session mechanism NOT OBSERVED).
- **Caching, uploads, real-time behavior:** File Upload responses write directly into the form owner's own Google Drive (confirmed via the consent-gate dialog and quota note), rather than a generic third-party storage bucket. OBSERVATION.

## 9. Performance & Reliability
- Load/interactivity observations: NOT OBSERVED (no timing measurement performed).
- Reliability-related customer feedback: NOT OBSERVED (no review research performed yet).

## 10. AI Features
- No AI-assisted form-generation, AI chat, or AI-powered field/calculation feature was observed anywhere in the product this pass — a genuine, confirmed absence, distinct from Zoho Forms' Zia, Typeform's AI chat-to-create, and Paperform's AI Create + Calculation AI helper, all three of which are documented elsewhere in this library. OBSERVATION (not a gap in this research pass — no such entry point exists in the UI to explore).

## 11. Mobile Experience
- NOT OBSERVED this pass — web only. A native Google Forms mobile app is known to exist publicly but was not tested in this session — TODO.

## 12. Security & Permissions
- Sharing/collaboration is Google Drive's own permission model, reused wholesale (see Section 6) — Editors (co-editing) and a separately configurable Responder-view access row. OBSERVATION.
- Org-level admin controls (e.g. restricting responses to people within an organization) were **not present** on this personal account's Settings → Responses panel — INFERENCE that this is gated behind a Google Workspace account, not independently confirmed. Roles/permissions depth beyond Editor/Responder, SSO, and 2FA are all account-level Google settings outside Forms itself and were not explored this pass — TODO.

## 13. Strengths / Weaknesses
- **Best features:** RECOMMENDATION/INFERENCE, needs a deeper pass plus competitor comparison before this is a defensible judgment rather than a first impression — genuinely free with zero upsell anywhere in the product; real-time Sheets-linked response export with no manual refresh; quiz mode with built-in grading and answer-key management; section-level and per-answer branching logic; deep native Drive/Sheets/Apps Script integration unmatched by any of the other three products currently documented in this library.
- **Weakest features:** RECOMMENDATION/INFERENCE — no native binary Yes/No field; no AI-assisted generation of any kind; no payments/commerce layer, calculation engine, or e-signature (all present in Paperform); a single continuous-document authoring style like Paperform's is entirely absent, and question cards cannot be styled/laid out as freely as Typeform's per-screen canvas. Needs a deeper pass and customer-review research before this can be judged rather than merely described.

## 14. Competitive Score
| Category | Score /10 | Evidence |
|---|---|---|
| *(TODO — scoring requires component-level deep-dive plus customer-review research for a defensible comparison basis, per this library's established convention)* | | |

## 15. What We Should Learn
- **Patterns to adopt:** RECOMMENDATION — the live-linked Google Sheets export propagating with no manual refresh is a genuinely strong pattern worth studying at the component/technical level once network capture is possible; the per-answer "Go to section based on answer" branching UI (a destination dropdown attached to each individual choice option, not just a global rule) is a clean, discoverable conditional-logic pattern worth comparing directly against Paperform's own "Question visibility logic" once that's captured (see [[prompt-backlog-paperform]] PF10).
- **Patterns to avoid:** TODO — needs the deeper pass.

## 16. Standard Questionnaire — Full Answer Set (seetha_research_library.md §4–15)

> Only questions this first-identification pass can actually answer are filled in; everything requiring deeper research, customer reviews, or live technical/component capture is `TODO` or `NOT OBSERVED` per library convention — not guessed.

### Product Identification (§4, Q1–12)
1. What is the product? — A free, standalone form/survey/quiz builder bundled into Google Docs/Drive. See Section 1.
2. What problem does it solve? — See Section 1.
3. What category does it belong to? — Marketing Automation / Forms, per this library's taxonomy — see Section 1.
4. Who is the target customer? — INFERENCE from template categories — educators, event organizers, HR/ops teams, general survey-takers. See Section 1.
5. Individuals/startups/SMBs/enterprises/multiple? — Individual/SMB/education, per template categories — see Section 1.
6. Major features? — See Section 3.
7. Most important workflows? — See Section 7.
8. What platforms does it support? — Web confirmed; mobile app existence TODO.
9. Web/desktop/mobile/all? — Web confirmed this pass; mobile TODO.
10. What integrations does it provide? — Native Sheets/Drive/Apps Script/Marketplace add-ons — see Section 3. Third-party (Zapier-style) integration marketplace inside Forms itself — TODO to confirm.
11. What ecosystem does it belong to? — Google Workspace/Drive — see Section 1.
12. Which other products in the same company's suite does it integrate with? — Google Sheets (live-linked export), Google Drive (storage/sharing), Google Apps Script — see Section 1/3.

### Business & Market (§5, Q13–26)
13. How long has the product existed? — TODO.
14. How important is it within its company's ecosystem? — TODO.
15. What pricing plans are available? — See Section 2.
16. What is included in each plan? — See Section 2.
17. Is there a free plan? — Yes — genuinely free with no paid tier of its own, confirmed. See Section 2.
18. Is there a free trial? — N/A — not a trial model, unconditionally free. See Section 2.
19. What limitations exist in the free/trial version? — None observed inside Forms itself this pass; File Upload responses count against the owner's Drive storage quota — see Section 2/3.
20. Approximate customer/user base? — TODO.
21. What industries use it? — INFERENCE from template set — see Section 1.
22. Which geographic markets are important? — TODO.
23. Market positioning? — TODO.
24. What differentiates it from competitors? — See Section 3/13 (free pricing, live Sheets sync, quiz grading, Apps Script extensibility).
25. What type of company/customer gets the most value from it? — INFERENCE, same as Q4/Q21.
26. Major selling points? — TODO (this pass captured in-app feature presence, not vendor marketing claims).

### Competitor Research (§6, Q27–41)
27. Who are the top competitors? — Zoho Forms, Typeform, Paperform, JotForm — see Section 4.
28. Which competitor is the closest equivalent? — Zoho Forms, on builder paradigm (both scrollable all-fields canvases) — see Section 4.
29–41. — TODO/NOT OBSERVED for all — requires cross-product comparison research not yet performed for this specific product.

### Customer Review Research (§7, Q42–57)
42–57. — All TODO (no review-platform research performed for this product yet).

### UI/UX Benchmarking (§8, Q58–82) — requires live product access
58. Overall UI style? — Scrollable card-based builder canvas, Drive-suite visual language — see Sections 3, 6.
59. Is navigation easy to understand? — NOT OBSERVED (no usability judgment made this pass).
60. Sidebar structure? — No persistent sidebar in the builder itself; top tab bar (Questions/Responses/Settings) — see Section 6.
61. Dashboard structure? — See Section 6.
62. Clicks required for common workflows? — NOT OBSERVED.
63. Important screens? — See Section 6 table.
64. Important UI components? — NOT OBSERVED at component-capture depth — see Section 6.
65. Button design? — NOT OBSERVED.
66. Form design? — The builder itself uses isolated question cards — see Section 3; respondent-facing form design captured at a high level in Section 6 (live view description).
67. Table design? — The linked Google Sheets response table uses a named "Tables" object — see Section 3/7. In-app table design (e.g. Responses → Question view) NOT OBSERVED at component depth.
68. Card design? — Question types render as isolated cards (drag handle, type dropdown, required/more-options row) — see Section 3 (component-level capture NOT OBSERVED).
69. Tab design? — Builder uses Questions/Responses/Settings top tabs — see Section 6 (component-level capture NOT OBSERVED).
70. Modal design? — NOT OBSERVED at component depth (Share, Publish, Theme panel exist as documented in Section 6, not deep-dived as components).
71. Dropdown design? — Question-type picker is a dropdown attached to each card — see Section 3 (component-level capture NOT OBSERVED).
72. Filter design? — Recent-forms list has owner filter/sort — see Section 6; depth NOT OBSERVED.
73. Search design? — NOT OBSERVED (no in-app search control noted this pass).
74. Notification handling? — NOT OBSERVED.
75. Error display? — NOT OBSERVED.
76. Loading-state display? — NOT OBSERVED.
77. Empty-state display? — NOT OBSERVED.
78. Confirmation-message display? — A post-submission "View score" confirmation screen exists for quiz mode — see Section 7; broader confirmation-message audit NOT OBSERVED.
79. Permissions/roles representation? — Drive-reused Editor/Responder access rows — see Section 6/12.
80. Onboarding handling? — NOT OBSERVED.
81. Responsive behavior? — NOT OBSERVED.
82. Accessibility handling? — NOT OBSERVED.

### Workflow Benchmarking (§9, Q83–99) — requires live product access
83–99. — Partial: form-creation, quiz-grading, section-branching, and live-Sheets-sync workflows all mapped end-to-end in Section 7. Cross-competitor comparisons (Q95–99) TODO.

### Backend / Technical Benchmarking (§10, Q100–118) — requires live product access
100. Frontend technology used? — NOT OBSERVED this pass (no DOM/JS framework inspection performed) — see Section 8.
101. Backend architecture inferred? — INFERENCE only (live Sheets sync suggests a push/webhook or short-poll write-through) — see Section 8.
102. APIs/network calls triggered? — NOT OBSERVED — see Section 8.
103–118. — NOT OBSERVED (no network/API depth captured this pass).

### Performance & Reliability (§11, Q119–129)
119–129. — NOT OBSERVED (no timing measurement or review research performed).

### AI Capability Benchmarking (§12, Q130–143)
130. Does the product have AI features? — No — confirmed absent, see Section 10.
131–143. — N/A/NOT OBSERVED — no AI entry point exists in the product to explore.

### Integration Research (§13, Q144–154)
144. What integrations are available? — See Section 3 (Sheets, Drive, Apps Script, Marketplace add-ons).
145. Which integrations are most important? — INFERENCE — the live-linked Sheets export, given it's confirmed working end-to-end and has no equivalent documented for the other 3 products in this library.
146. Which integrations are unique? — Apps Script (full programmatic extensibility reachable directly from the builder) and the Drive-coupled File Upload field are both Google-ecosystem-specific, with no equivalent seen in Zoho Forms/Typeform/Paperform's own records — INFERENCE.
147–154. — NOT OBSERVED (integration setup/auth/failure-handling not exercised beyond the Sheets-link flow already captured in Section 7).

### Security & Permissions (§14, Q155–163) — publicly documented only
155–163. — See Section 12; mostly TODO/NOT OBSERVED (Drive-reused sharing model confirmed; SSO/2FA/org-level controls not explored, some inferred to require a Workspace account not available this pass).

### Mobile Experience (§15, Q164–171)
164–171. — NOT OBSERVED — see Section 11.

## Sources
- OBSERVATION: Live exploration of Google Forms (forms.google.com), personal (non-Workspace) Gmail account, via Claude browser extension, 2026-09-23. A real test form was created, themed, published, and a real live respondent submission was completed and traced end-to-end through quiz grading, section branching, and the live-linked Google Sheets export.
