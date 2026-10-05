---
component: "Jotform AI Agents (AI Agent Builder: standalone omnichannel conversational-agent shell)"
ui_category: "Application Layout > AI Agent Builder (Omnichannel Conversational Agent)"
source_product: "JotForm"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
---

# Component: Jotform AI Agents — AI Agent Builder (Omnichannel Conversational Agent)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **Pass ID: JF10 (3 of 4).** No specific cross-link target exists for this record — no sibling product in this library currently documents an omnichannel AI-agent-builder equivalent, so Competitor Comparisons is intentionally empty.

This record resolves part of the JF10 brief: a broad identification pass on Jotform AI Agents, one of four never-previously-opened products alongside Apps, Workflows, and Boards — see [[jotform-workflows-workflow-builder]], [[jotform-boards]] (filed alongside this record) and [[jotform-apps-app-builder]] (referenced throughout but **not yet filed** — see this record's own note at the top of the library's JF10 status). Per the brief, this product was known to be reachable via a "Create AI Agent" CTA on the Publish screen (noted in an earlier pass but not followed); this pass instead reached it via the dashboard's "+ CREATE" chooser, which was faster and sufficient to resolve all five brief items — the Publish-screen CTA entry point was not separately re-tested (see Second-Pass Flags).

## Location

Reached via the dashboard's "+ CREATE" → "How would you like to start?" picker → "AI Agent" card ("Create trained agents to guide users and answer questions"), a sibling option alongside Form, E-sign, App, Workflow, Table, Report, Board, Website Widget. FACT Also independently confirmed reachable via a "Create AI Agent" CTA on the Publish tab of the ordinary Form Builder (noted in this library's prior JF9/JF10-adjacent exploration, not re-tested this pass — see Second-Pass Flags).

## Structure

**1. What it actually is, confirmed live: a standalone, omnichannel conversational-AI-agent builder — architecturally the most self-contained of the four JF10 products.** FACT The "+ CREATE → AI Agent" chooser ("Describe your agent — Automate tasks and conversations with AI") is an AI-prompt-first interface with no visible "Start from scratch" or "Use template" card on the same screen (see Structure finding 2) — a text box (placeholder: "Create a Customer Support Agent who assists customers with inquiries about services, troubleshooting issues, and providing updates on services."), Upload and "Add Website" buttons (notably "Add Website," not "Add Link" — foregrounding website-content training as a first-class input), a voice-input mic icon, and four category chips: Customer support, Recruitment, Appointment, Feedback. Submitting a prompt opens a BUILD / TRAIN / PUBLISH three-tab shell (distinct purple-to-blue gradient mode bar, unique among every JotForm product shell observed in this library so far) with its own top-nav bar (Features / Support / Settings), replacing the simple "Help" link seen in every other product's header. The BUILD tab is a live chat-preview pane (not a form canvas or page composer) showing the agent's configured greeting, quick-reply buttons, and a working test conversation, alongside a left CHANNELS sidebar (Chatbot, Standalone, Instagram, WhatsApp, and more below the fold) for configuring where the agent is deployed. FACT

**2. Starting point: AI-generation-only at this entry point — no visible from-scratch/template cards, a genuine divergence from the pattern seen in Apps, Workflows, and Boards.** FACT Scrolling the "+ CREATE → AI Agent" chooser confirmed no additional starting-path cards exist below the prompt box — unlike Apps' and Workflows' choosers (which each show Start from scratch / Use template / and more beneath their AI boxes), this screen offers only the AI-prompt box plus four topical example chips. The AI path was tested end-to-end live: typed "Create a Coffee Club loyalty assistant that answers questions about rewards and membership" and clicked Create. A short progress sequence followed — "Crafting your perfect agent" (completed, checkmark) → "Customizing conversations to match your needs" (spinner) — then landed directly in the BUILD tab with a fully-built, named agent: titled "Ian: Coffee Club Loyalty Assistant", with a generated human avatar photo, a greeting ("Hi, I'm Ian, your AI Agent and Coffee Club Loyalty Assistant. How can I help?"), two working quick-reply buttons ("Check rewards," "Learn more"), and a pre-populated sample exchange already visible in the test-chat pane. Notably, the AI generated a human persona name ("Ian") rather than keeping the user's literal prompt text as the title — a distinct naming convention versus Apps/Workflows/Boards, which all preserved the user's own title/description verbatim. FACT Whether a from-scratch or template path exists elsewhere (e.g., behind the Publish-screen "Create AI Agent" CTA, or a "Templates" link not located this pass) was not confirmed — flagged for a second pass.

## Actions

| Entry point / control | Input | Result |
|---|---|---|
| "+ CREATE" → "AI Agent" | A natural-language agent description | Runs a 2-step generation sequence ("Crafting your perfect agent" → "Customizing conversations to match your needs"), then opens directly into the AI Agent Builder's BUILD tab with a fully configured, named, test-ready agent |
| TRAIN tab → KNOWLEDGE BASE | Add Knowledge (text) / File / Link / Questions & Answer sources | Expands the agent's answer-grounding knowledge base; a "SHOW MORE SOURCES" button reveals further source types |
| TRAIN tab → FORMS | "Add New Form" → pick an existing form | "Connect forms to your agent to use form data" — directly couples the agent to a real Jotform form as a data/collection source |
| TRAIN tab → WORKFLOWS (badge: NEW) | — | "Create multi-step automations" — a direct coupling point to [[jotform-workflows-workflow-builder]] (not opened further this pass) |
| PUBLISH tab → PHONE AGENT | "Buy Number" ($10/month) | Provisions a real phone number for the agent to answer live calls; a free shared test number + extension is offered for trying the agent by phone before purchasing |
| PUBLISH tab → CHATBOT | — | Generates an embeddable `<script>` embed code plus one-click integrations for Canva, WordPress, Shopify, Wix, Squarespace, and more (horizontally scrollable platform-icon list) |

## Behavior & States

**3. Mode-switcher reuse: present, but the MOST reduced of all four JF10 products — only "Conversations" and "AI Agent Builder" (self).** FACT The top-left "AI Agent Builder ▾" dropdown shows just two tiles: Conversations (a chat-icon tile, presumably a log/inbox of past agent conversations — not opened further this pass) and AI Agent Builder itself (highlighted as active), plus "Go Back to My Workspace." Unlike Apps' and Workflows' reduced-but-still-recognizable switchers (which retained Form Builder/Tables/Inbox tiles), AI Agents' switcher drops every other product tile entirely — no Form Builder, Tables, Inbox, or Boards link. This is the strongest structural signal in this pass that AI Agents is the most architecturally standalone of the four products: its own shell doesn't expect a user to jump directly to a sibling product's builder the way every other shell in this library does. FACT

**4. Coupling to existing products: standalone chat/voice engine at the UI level, but explicitly and deliberately coupled to Forms and Workflows at the training/data level.** FACT The BUILD tab's channel-centric UI (CHANNELS sidebar: Chatbot, Standalone, Instagram, WhatsApp, and — confirmed on the PUBLISH tab — Instagram Agent, WhatsApp Agent, Phone Agent, Gmail Agent, AI Chatbot for WordPress, Presentation Agent) is not built on the Form Builder's field-canvas engine, the App Builder's block-composer, or the Workflow Builder's trigger/pipeline canvas — it is its own, purpose-built conversational/voice interface, confirming it is not a layered reskin of an existing product the way Smart PDF Forms turned out to be layered on Form Builder ([[jotform-smart-pdf-forms]]). However, the TRAIN tab's FORMS section ("Connect forms to your agent to use form data," with a live "Add New Form" picker) and its WORKFLOWS section (marked NEW, "Create multi-step automations") are explicit, first-class coupling points letting an agent collect data via a real Jotform form or trigger a real Jotform Workflow mid-conversation. This is a third distinct coupling pattern in this JF10 pass — neither "embed the other product's UI inside a tab" (Apps→Tables, per the still-unfiled Apps record) nor "auto-generate an instance of the other product as a side effect" (Workflows→Boards, confirmed in [[jotform-workflows-workflow-builder]] / [[jotform-boards]]), but "reference the other product's objects as configurable training/action sources" while keeping the agent's own core engine fully separate. FACT

**5. Pricing/plan gating: the clearest, most concrete gating finding across all four JF10 products — a metered, per-channel add-on purchase (Phone Agent), not a blanket plan-tier lock.** FACT The PUBLISH tab's Phone Agent section displays: "Buy an AI Agent Phone Number — Use for calls, starting from just $10/month" with a green "Buy Number" button — a real, named price point, not a vague "Upgrade" banner. Critically, this is not a hard paywall: the same screen immediately offers a free way to try the capability — a "Make a Test Call" panel with a real, already-provisioned shared phone number (`+1 601 843 6706`) and a per-agent extension number (`01826`) to dial into this specific agent's voice configuration (a named AI voice, "Liam — English, American, Male, Young," with a "Change" option) without purchasing a dedicated number first. Every other channel tested (Chatbot, Instagram, WhatsApp, Gmail, WordPress, Presentation) showed no price tag or lock icon in this pass. This confirms JotForm's gating model for AI Agents is channel-specific and metered (telephony specifically costs extra, per-number) rather than a single global "free vs. paid plan" switch — a materially different gating shape than the simple presence/absence pattern checked for in the other three JF10 records. FACT

**Competitor equivalent: none found in this library.** No sibling competitor record in this Research-Library currently documents an omnichannel conversational-AI-agent-builder product (chat + voice + Instagram/WhatsApp DM + email-draft automation in one shell). Competitor Comparisons is intentionally left empty — and of the four JF10 products, this is the one where that gap looks most like a genuine, structurally novel product-category expansion rather than merely an under-documented competitor feature.

## Rules & Validation

- The AI-generation flow produced a fully conversational, immediately-testable agent (greeting, quick replies, a working chat input) with no intermediate approval step — functionally live the instant generation completed, same pattern as Apps' AI-generation path (per the still-unfiled Apps record).
- TRAIN tab sections are organized as a fixed left-rail sequence (AI PERSONA → KNOWLEDGE BASE → ACTIONS → TOOLS → FORMS → WORKFLOWS → TEACH YOUR AGENT) rather than a freeform canvas — a configuration-panel model, not a drag-and-drop builder.
- "Test Mode" is a persistent toggle in the top-right of every BUILD/TRAIN/PUBLISH tab, letting the builder flip between editing and a live test conversation without leaving the current tab.

## Technical Data

- Embed script pattern observed: `<script src="https://cdn.jotfor.ms/agent/embedjs/{agentID}...">` — a distinct CDN host (`cdn.jotfor.ms`) from the main `www.jotform.com`/`form.jotform.com` pair documented elsewhere in this library.
- The agent's auto-generated title format was "{AI-generated first name}: {user's prompt-derived description}" — e.g., "Ian: Coffee Club Loyalty Assistant" — a naming convention unique to this product among the four tested in JF10.
- Phone Agent's test-call number (`+1 601 843 6706`) and per-agent extension (`01826`) confirm a shared-pool-plus-extension architecture for free trial calls, versus a dedicated purchased number ($10/month) for production use.
- The mode-bar's purple-to-blue gradient and the BUILD/TRAIN/PUBLISH tab triad (vs. every other product's BUILD/SETTINGS/PUBLISH or BUILD/DATA/SETTINGS/PUBLISH) further supports this product having its own distinct internal engineering/product team conventions rather than being a reskin of Form Builder's shell.

## Competitor Comparisons

No competitor record exists yet for this product category in this library (see Behavior & States finding 5 / "Competitor equivalent" note above). No table is provided — flagged as an open gap for this library, consistent with the sibling JF10 records.

## Best Observed Approach

The "Make a Test Call" free shared-number pattern on the Phone Agent paywall is the standout finding in this record: rather than hard-gating telephony behind a purchase with no way to evaluate it, JotForm lets a prospective buyer actually call a live number and talk to their own configured agent (via an extension) before paying $10/month for a dedicated line. This is a notably low-friction way to let a metered, costed feature prove its value before asking for payment — worth flagging as a strong monetization-UX pattern distinct from the simpler "all features free until a hard account-wide cap" model implied for Apps/Workflows/Boards in this pass. RECOMMENDATION

## Sources

- Live testing session, 2026-10-05, Jotform AI Agents reached via "+ CREATE" (`jotform.com/workspace/new`) and the AI-generated "Ian: Coffee Club Loyalty Assistant" agent (embed ID referenced as `01a10b1ecf7870008f3fb9f275a...`)
- Task brief JF10, which specifically flagged the Publish-screen "Create AI Agent" CTA as a known-but-unexplored entry point (not independently re-tested this pass)

## Second-Pass Flags

- The Publish-screen "Create AI Agent" CTA entry point (noted in the brief) was not re-tested this pass — only the dashboard "+ CREATE" path was used. A second pass should confirm whether that CTA leads to the same AI-prompt-first chooser, or a different flow pre-scoped to the form it was launched from (which would itself be a notable additional coupling-to-Forms data point).
- No "Start from scratch" or "Use template" option was located for AI Agents — this was confirmed by scrolling the one chooser screen reached, but a from-scratch/blank-agent path, or a template gallery, may exist elsewhere (e.g., a "Templates" link in the top-nav "Features" or "Support" menus, neither of which was opened this pass).
- CHANNELS sidebar was not fully scrolled — Chatbot, Standalone, Instagram, and WhatsApp were visible; further channel types below the fold were not enumerated.
- AI PERSONA, ACTIONS, and TOOLS sections of the TRAIN tab were not opened — only KNOWLEDGE BASE, FORMS, and WORKFLOWS were inspected.
- "Conversations" (the other mode-switcher tile) was not opened — unclear whether it's a cross-agent inbox, analytics view, or something else.
- Gmail Agent, Presentation Agent, and the platform-integration icons (Canva, Shopify, Wix, Squarespace, etc.) on PUBLISH were seen but not clicked into — their individual setup flows and any gating specific to them are undocumented here.
- Only the Phone Agent channel showed a concrete price — it remains unconfirmed whether any of the other channels carry usage-based costs (e.g., a message-volume cap, a WhatsApp Business API pass-through cost) that simply weren't surfaced because no channel was fully activated this pass.
