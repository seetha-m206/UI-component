---
component: 'Automations Builder (Trigger → Action Chain)'
ui_category: 'Actions > Workflow builder'
source_product: 'Typeform'
last_verified: '2026-09-17'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'React Flow-based trigger→action chain builder — every step autosaves immediately against a real, server-persisted Workflow/Form-Trigger object pair. No direct Zoho Forms equivalent identified.'
---

# Component: Automations Builder (Trigger → Action Chain)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

This is a genuinely new interaction pattern not directly comparable to anything already documented for either product — filed standalone rather than into an existing Competitor Comparisons table. **Zoho Forms does not appear to have an equivalent trigger→action automation-chain builder based on research so far — flagged as a Typeform-only capability, worth actively checking for if/when Zoho Forms adds anything similar.**

> ⚠️ **Real, permanent backend side effect, left in place.** Merely picking a trigger _type_ already creates a real, persisted Workflow object and Form-Trigger object server-side (see Technical Data) — before any field on it is filled in. This trace was deliberately stopped before clicking "Activate," but the underlying draft objects it created were not deleted. They remain in the account as an inactive Draft automation, not a running/live one.

## Location

- **Product:** Typeform
- **Screen(s) it appears on:** Top-level "Automations" tab (`Automations → Create automation → My new automation`).

## Structure

Building an automation is a two-stage experience, and the two stages use genuinely different UI paradigms:

1. **Trigger selection is a static, full-width card chooser**, not the flow canvas yet: "What will trigger this automation?" with three large cards — Form submission, Contact activity or updates, Scheduled — each with an icon and one-line description. A simple modal-like step, not draggable/connectable.
2. **Once a trigger is chosen, a real node-based visual canvas opens.** This confirms the flow-chart metaphor the Automations landing screen's static preview implies — but the real editor is plainer: blocks are connected by solid, straight, 1px vertical lines with a small downward arrowhead, not the dotted/looser-spaced connector lines shown on the landing page's illustration (that illustration is stylized marketing art, not a preview of the real editor's line style).
3. A default skeleton chain is pre-built the moment a trigger is picked: **Trigger block → a circular "+" button on the connector → an "End automation" block.** Clicking "+" opens a small anchored dropdown menu (not a full modal), grouped into **"Rule"** (Time delay) and **"Actions"** (Send email, Webhook, Send to integration), plus a "Request features" link — confirming the action palette is currently limited to exactly three real action types.
4. Clicking an action in that menu **inserts a new block at that exact point in the chain**, not just appended at the end — tested directly: clicking "+" on the connector between the trigger and "End automation" inserted the new "Send email" block _between_ them, pushing "End automation" further down the canvas. Genuine mid-chain insertion, consistent with a real graph/chain data structure rather than a flat, tail-only-appendable list.
5. Each block, once configured, shows a compact live summary of its own settings directly on the node face (e.g. the trigger block reads "Start automation when [New form] is [Completed]"; the email block reads "To: [respondent] / Subject: [Welcome]") — the canvas itself is legible at a glance without opening every block's settings panel.
6. The whole automation carries an explicit **"Draft"** badge next to its editable name in the top bar, and a top-right **"Activate"** button — a real draft-vs-live distinction exists, as expected. This trace deliberately stopped short of clicking Activate.
7. **"Send email" step defaults were notably smart, not blank:** "Send to" defaulted to "Respondent" (vs. "Anyone"), and "Get email from" **auto-detected and pre-selected the form's actual Email-type question** ("What is your email?", the same field built and traced in [[typeform-contacts-module]]) rather than leaving it unset — the builder appears to scan the target form's fields and pre-wire the obvious one. Subject line defaulted to placeholder text "Welcome". A "Create email" button opens a presumably separate email-body editor (not explored further this pass — flagged as a gap). Sender email is fixed to a Typeform-owned domain (`notifications@followups.typeform.io`) with a "Manage sender emails" button carrying a paid-plan badge. An optional "+ Reply to" field is also offered.

## Actions

| Element                                      | User Action | Function                                                                                     | Result                                                                                                                                                                                          | Destination screen/state |
| -------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| "Form submission" trigger card               | Click       | `POST .../workflows`, `POST .../form-triggers`, `POST .../form-triggers/{id}/workflows/{id}` | Real Workflow + Form-Trigger objects created and linked server-side immediately; canvas shows validation errors for the still-unset Workspace/Form fields on top of the already-persisted shell | Node-based canvas        |
| Workspace selector                           | Select      | `PATCH .../form-triggers/{triggerId}/draft`                                                  | Persisted write, `200`                                                                                                                                                                          | Same canvas              |
| Form selector                                | Select      | `PATCH .../form-triggers/{triggerId}/draft`                                                  | Independent persisted write, `200`                                                                                                                                                              | Same canvas              |
| "+" on a connector                           | Click       | Opens anchored dropdown (Rule / Actions groups)                                              | Menu of available step types                                                                                                                                                                    | Same canvas              |
| Action from the "+" menu (e.g. "Send email") | Click       | Inserts a new node at that exact chain position                                              | New block appears, correctly positioned, with connecting edges auto-drawn on both sides                                                                                                         | Same canvas              |

## Behavior & States

- **"Draft" is a publish-state label, not a save-state label.** Unlike a document that says "Draft" until you hit Save (implying nothing exists yet), here the underlying Workflow/Form-Trigger records already exist and are being live-edited in the backend the entire time you're building — "Draft" only means "not yet Activated," matching the theory that Activate performs a state transition on an already-persisted object rather than being the first real save.
- No connect/drop animation could be isolated in this pass — each new block appeared to render in already-settled, final position with its edge already drawn in the very next screenshot after the add-menu click; if there is a brief entrance transition, it resolves faster than this trace's tooling could catch it. A real gap, not a confirmed "no animation" finding.

## Technical Data

> OBSERVATION, directly captured via DOM inspection, a `fetch` interceptor, and `read_network_requests` across each build step, Claude browser extension session, 2026-09-17.

- **DOM — built on React Flow (`reactflow`/`@xyflow/react`), confirmed directly from class names, not inferred:**
  - Root containers carry the literal classes `react-flow`, `react-flow__renderer`, `react-flow__pane` — React Flow's own internal naming, unmistakable.
  - Each block is a `.react-flow__node` with a type-specific modifier class, e.g. the trigger block carries `react-flow__node-form_trigger` — meaning Typeform has registered custom React Flow node types per step kind (`form_trigger` observed; `send_email`/`end` etc. presumably exist analogously, not individually confirmed).
  - Connectors are real `.react-flow__edge` elements containing `.react-flow__edge-path` SVG `<path>` elements — an actual edge/graph rendering, not CSS-drawn lines. In this simple linear chain, each path's `d` attribute was short (a straight vertical segment), consistent with the visually straight lines observed; no bezier curvature used for this basic case.
  - `.react-flow__handle` elements (4 found across 2 connected nodes — one source + one target handle per node) are React Flow's standard connection-point primitives.
  - With 3 nodes (trigger, "Send email", "End automation") and 2 edges linking them once the email action was added, the node/edge counts matched the visible chain exactly.

- **Network — the clearest, most concrete finding of this trace: the opposite persistence model from Typeform's Theme/Design editor** ([[theme-design-editor]], which holds all changes client-side with zero network calls until one explicit "Save changes" click). Here, by contrast:
  - Choosing a trigger _type_ → immediate `POST` (creates real backend objects): `POST .../accounts/{id}/workflows`, `POST .../accounts/{id}/form-triggers`, `POST .../accounts/{id}/form-triggers/{triggerId}/workflows/{workflowId}`.
  - Choosing a Workspace → immediate `PATCH .../accounts/{id}/form-triggers/{triggerId}/draft`, `200`.
  - Choosing a Form → an independent immediate `PATCH .../accounts/{id}/form-triggers/{triggerId}/draft`, `200`.
    Every meaningful step-by-step choice while building the chain is its own autosaved, persisted write against a draft Workflow/Form-Trigger pair — there is no "unsaved changes" state and no batch-save step for the chain-building process itself. This puts Automations in the same "autosave-per-action" family already documented for [[typeform-choices-list-editor]] (which also autosaves per drag/delete), reinforcing that Typeform's autosave-vs-explicit-save split is drawn per _editor surface_ (content/structure editors autosave; the visual Theme/Design editor alone batches to an explicit Save) rather than being a single uniform rule across the whole product.

- **CSS/Animation:** connector lines are plain, undecorated SVG paths: solid stroke (`rgb(101, 93, 103)`, a dark grey — not Typeform's teal accent), `1px` stroke width, `stroke-dasharray: none` (i.e. **not** dotted, despite the landing page's illustrative dotted-line marketing art), with a small arrowhead marker at the target end. Attempts to pan/scroll the canvas to inspect the "End automation" block further down were unsuccessful in this pass (neither mouse-wheel scroll nor click-drag pan moved the React Flow viewport, and directly setting `scrollTop` on `.react-flow__pane` had no visible effect) — consistent with React Flow managing its viewport via internal transform state rather than native scroll; flagged as a tooling limitation of this trace, not a product finding.

## Recommended Second Pass

- Open the "Create email" button's own editor (presumably a rich-text or block-based email composer) — not opened/traced this pass.
- Configure and trace "Webhook" and "Send to integration" action types in depth — only confirmed present in the action palette.
- Add and configure the "Time delay" rule-step type — not added this pass.
- Build out "Contact activity or updates" and "Scheduled" trigger types — only "Form submission" was traced end-to-end.
- Click "Activate" in a future pass to observe live/activated behavior (e.g. whether the canvas becomes read-only, whether a running automation shows execution history/logs) — deliberately not done this pass.
- Individually confirm the custom React Flow node-type class names for the "Send email" and "End automation" blocks (only the trigger's `form_trigger` type was checked; an analogous `send_email`/`end` naming convention is a reasonable assumption, not verified).

## Cross-Component Pattern Note

- **OBSERVATION:** direct contrast with [[theme-design-editor]]'s explicit-save model and confirmation of the same "autosave content/structure edits, batch-save visual/theme edits" split already seen in [[typeform-choices-list-editor]] — this is now a 2-for-2 pattern across Typeform's builder surfaces, not a one-off.

## Competitor Comparisons

_(No existing Zoho Forms equivalent identified — Zoho Forms does not appear to have a trigger→action automation-chain builder based on research so far. Flagged for cross-linking if one is found in a future pass.)_

## Sources

- OBSERVATION: Live trace on a real Typeform account (admin.typeform.com), top-level "Automations" tab, building a real automation end-to-end (`Automations → Create automation → My new automation`), via Claude browser extension, 2026-09-17. Traced via direct interaction, DOM inspection, and a `fetch` interceptor plus `read_network_requests` across each build step. Stopped before clicking "Activate" — the automation was left as an unpublished, but already backend-persisted, Draft (see the callout at the top of this record).
