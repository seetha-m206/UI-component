# Automations Builder (Trigger → Action Chain) — reconstructed preview

See the Typeform Automations Builder research record (`Automations Builder
(Trigger → Action Chain)`, `source_product: Typeform`) for the full
research this is built from. Follows the folder contract, evidence
labeling, and self-managed-step pattern established by `new-form-chooser/`
(a self-managed, multi-step, non-controlled screen-level component), and
the accessible-substitution precedent set by `entries-kanban-view/` and
`analytics-dashboard-kpi-bar-map/` for the parts of a real interaction that
can't be honestly reconstructed as-is.

## Evidence used, in priority order

1. **Authorized Typeform HTML/CSS export** — not available, same as
   every other reconstructed preview in this repository.
2. **The research record's Structure / Rules & Validation / "What NOT to
   build" sections** — the primary source, treated as confirmed:
   - The two-stage flow: a static trigger-picker (three cards — Form
     submission, Contact activity or updates, Scheduled) happens once, then
     the chain canvas opens with a pre-built **Trigger → "+" → End
     automation** skeleton. Reproduced in `TypeformAutomationsBuilder.tsx`'s
     `step` state and `buildDefaultBlocks()`.
   - Connector lines are **solid**, straight, thin vertical lines with a
     small downward arrowhead — explicitly **not** the dotted lines the
     marketing landing page shows. `.connectorStroke` in the CSS module
     declares no `stroke-dasharray`, and a comment at both the JSX and CSS
     sites calls this distinction out directly so it isn't silently
     "fixed" back to dotted later.
   - The "+" menu is a **small anchored dropdown**, not a full modal,
     grouped into **"Rule"** (Time delay) and **"Actions"** (Send email,
     Webhook, Send to integration) — exactly 4 real selectable options,
     reproduced in `MENU_OPTIONS`, plus a non-interactive "Request
     features" link rendered as a plain `<span>` (see below).
   - Insertion happens **at the exact connector clicked**, splicing the new
     block into the sequence and pushing everything below it down —
     reproduced in `insertBlock()`'s `next.splice(connectorIndex + 1, 0,
newBlock)`, and covered by this folder's mid-chain-insertion test using
     the record's own "insert between two existing blocks" scenario.
   - Each block shows a **compact one-line canned summary** on its face.
     The record's own example strings are used verbatim for the trigger
     (`"Start automation when [New form] is [Completed]"`), Send email
     (`"To: [Respondent] / Subject: [Welcome]"`), Webhook (`"POST to
     configured URL"`), Time delay (`"Wait [1 hour]"`), and Send to
     integration (`"Send to [connected app]"`) — see `ACTION_SUMMARIES`
     and `TRIGGER_SUMMARIES`.
   - The top bar's explicit **"Draft"** badge next to the editable
     automation name, and a top-right **"Activate"** button, reproduced in
     `.topBar`/`.statusBadge`/`.activateButton`. Activation fires
     `onActivate` and, as the task allows, visually flips the badge to
     "Activated" with no real state change beyond that.
   - Only "Form submission" was traced end-to-end past the picker; "Contact
     activity or updates" and "Scheduled" lead to the same generic canvas
     with generically-worded trigger summaries (`TRIGGER_SUMMARIES`), per
     the record's own "What NOT to build" note.
3. **Screenshots** — none were supplied with this record; card copy,
   menu grouping, and block-face wording come from the Structure prose
   quoted above.
4. **Assumptions, clearly flagged**:
   - **Trigger-card descriptions.** The record confirms each of the 3
     trigger cards has "an icon and one-line description" but does not
     capture the exact description copy, only the card titles. The
     descriptions in `TRIGGER_OPTIONS` are a reasonable one-line paraphrase
     per trigger, not a verbatim capture.
   - **Icons are decorative Unicode glyphs**, not Typeform's real icon
     assets — a binary asset not available in this repository, same
     precedent as every other preview in this product that uses glyphs
     (`new-form-chooser`, etc.).
   - **The "+" button's visibility is not hover-gated.** The record doesn't
     state whether the insert button is only revealed on connector hover in
     the real product. This reconstruction renders it always-visible and
     always-focusable, which is both the safer reading of the evidence (no
     hover-only affordance is *claimed* to exist) and trivially satisfies
     the keyboard-accessibility requirement, since there's no hover gate to
     work around.
   - **Automation-name editing mechanism.** The record confirms the name is
     editable next to the Draft badge but not the exact editing UI (inline
     text vs. click-to-edit vs. a separate rename dialog). A plain
     always-editable text input is used here, the same low-risk assumption
     `new-form-chooser` makes for its own form-name field.
   - **Block removal is a flagged addition, not a confirmed behavior.**
     See the dedicated section below.
   - **Insert-menu keyboard behavior** (auto-focus on open, Up/Down roving
     focus between items, Escape-to-close-and-return-focus) is **not
     observed** in the source. Added here as a deliberate accessibility
     improvement, consistent with the same unobserved-but-added precedent
     in `new-form-chooser`'s form-type roving focus and
     `analytics-feature-gate`'s Escape-to-cancel.
   - **Responsive/breakpoint behavior** was not observed in the source (no
     narrow-viewport capture exists for this screen). Stacking the top bar
     and wrapping the trigger-picker cards at narrow container widths are
     reasonable assumptions for this docs-site preview, not observed
     Typeform breakpoints.

## The most important scoping decision in this component: a vertical stack, not a graph canvas

**Read this before changing this component's rendering model.**

The real product's canvas is built on a real graph-visualization library
(React Flow) — pan/zoom, a real node/edge data model, arbitrary
topology. Rebuilding a general-purpose graph editor to match that would be
a large undertaking with real risk of shipping a subtly-wrong generic
node-graph tool that overclaims capability the source never exercised.

The research record, however, only ever documents **one specific, simple,
always-linear chain topology in actual use**: trigger → zero-or-more
inserted action blocks → "End automation," where every mid-chain
insertion is just a splice into a single vertical sequence. The record
explicitly never tested branching, multiple parents/children, or canvas
pan/zoom — those are React Flow capabilities the underlying library
exposes, not confirmed behaviors of this specific builder screen.

**The scoping decision**: this reconstruction renders the chain as a
**simple vertical stack of blocks connected by straight SVG lines with an
arrowhead**, implemented with plain divs and inline SVG (`.chain`,
`.connector`, `.connectorLine` in the CSS module) — **not** a
pannable/zoomable node-graph canvas, and no graph-visualization library is
used or added as a dependency (`package.json` was checked before starting;
no `reactflow`/`@xyflow/react` was present, and none was introduced).

This faithfully reproduces the exact interaction the record actually
verified — insert a block at any point in the chain via a "+" button on
a connector, with mid-chain insertion pushing later blocks down —
without overclaiming general graph-editor capability (branching,
multi-parent nodes, canvas pan/zoom) the source never exercised. This is
the same kind of explicit, prominent scoping call that
`analytics-dashboard-kpi-bar-map`'s README makes for its un-reconstructed
region map, and that `entries-kanban-view`'s README makes for its
keyboard-alternative-to-drag substitution — it is the single most
important thing to understand about this component before extending it.

## Deliberate scoping decision: block removal is added, not confirmed

The source record explicitly says blocks and the "End automation" block
**cannot be deleted**, per the confirmed interaction — except that it
also explicitly permits a "reasonable, clearly-flagged addition" here,
since real products with insertable chains almost always support removal
too.

This reconstruction takes that option: every **inserted action/rule
block** (never the trigger, never "End automation") carries a small "×"
remove button (`aria-label="Remove {label} step"`), wired to
`removeBlock()`/`onBlockRemoved`. This is called out explicitly, not
silently added, because it is the one piece of real interactive capability
in this component that goes beyond what the record itself verified. If a
future research pass confirms the real product has **no** removal
affordance at all, this control should be removed rather than assumed
correct.

## Deliberate scoping decision: "Request features" is non-interactive

The record documents a "non-interactive 'Request features' link at the
bottom" of the insert menu — present, but never traced to a
destination. It is rendered as a plain `<span>` with muted styling, not a
`<button>` or `<a>`, and deliberately does **not** carry `role="menuitem"`
or any click handler, so it cannot be mistaken by assistive tech or by
future code for a real, working menu action. This matches the record's own
framing of it as decorative/inert in the observed UI.

## What NOT to build (explicitly out of scope, per the source and the task)

- **Real drag-and-drop reordering of blocks.** Not part of the confirmed
  interaction — insertion via "+" is the only confirmed mechanism for
  changing the chain's shape.
- **Pan/zoom canvas navigation.** Out of scope per the central scoping
  decision above.
- **Real per-action-type configuration forms** (e.g. an actual email
  composer, a real webhook URL field, a real delay-duration picker).
  Canned summary text (`ACTION_SUMMARIES`) is sufficient, per the task and
  the record's own point 5.
- **Distinct downstream behavior for "Contact activity or updates" and
  "Scheduled" triggers.** Only "Form submission" was traced end-to-end; the
  other two lead to the identical generic canvas with a generically-worded
  trigger-block summary.
- **Branching, multiple parents/children, or any non-linear chain
  shape.** Never observed in the source; the data model here
  (`AutomationBlock[]`, a flat ordered array) cannot represent them, by
  design.

## Other deviations from what was actually observed

- **Automation ID generation.** Inserted blocks get ids like
  `inserted-send_email-1` from an incrementing in-memory counter
  (`insertedCounterRef`), not any id scheme Typeform's real backend might
  use — this preview has no backend at all.
- **`onActivate` implements no real activation.** No network call, no
  persisted state beyond this component's own local "activated" boolean,
  which flips the badge and disables the button so the state is at least
  visually terminal within one mount.
- All of Typeform's real generated class names/ids/React Flow internals
  are replaced with scoped CSS Module classes and plain React state and
  props. None of Typeform's markup, CSS, or React Flow's DOM output is
  reused.

## What this is not

Not the original Typeform component, not pulled from any Typeform source,
not built on React Flow or any other graph-visualization library, and not
guaranteed to match current production behavior — see the in-app
notice on the Preview tab. In particular, this is **not** a general-purpose
node-graph editor: it can only ever represent the single linear
trigger→actions→end topology the source record actually verified,
by design, not as a temporary limitation.
