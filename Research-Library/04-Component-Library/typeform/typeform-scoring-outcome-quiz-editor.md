---
component: "Workflow Tab — Scoring / Outcome Quiz Editor"
ui_category: "Actions > Workflow builder"
source_product: "Typeform"
last_verified: "2026-09-18"
evidence_state: "source_reviewed"
---

# Component: Workflow Tab — Scoring / Outcome Quiz Editor

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **Relationship to [[typeform-automations-builder]]:** this record directly tests (and refutes) the hypothesis that the Workflow tab's Scoring/Outcome-quiz editors share the same React Flow node-graph engine as the Automations builder. They do not — see DOM — React Flow check below.

## Location
- **Product:** Typeform
- **Screen(s) it appears on:** Form builder → Workflow tab, sub-nav: Logic · Scoring · Tagging · Outcome quiz. Tested on a free-plan "Customer Feedback Survey" form.

## Structure
- Both **Scoring** ("Score quiz — assign points to answers": a per-choice list of numeric Score inputs) and **Outcome quiz** ("Show different quiz endings based on how people answer": an "Add Ending" list, each ending wired to answers via a "Choose answers" combobox) render as **modal dialogs layered on top of the Logic canvas** — not as canvas/node-graph editors in their own right.
- Both modals share one footer pattern: "Delete all rules" (left) + Cancel/Save (right).

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| "Add Ending" button | Click | Adds a new outcome ending | A new ending row appears ("New Ending (1)") | Same screen (modal) |
| "Choose answers" combobox on an ending | Click, select | Wires an ending to a specific answer choice | Lists the question's own answer choices (e.g. a 1–5 rating: A=1…E=5); selecting one renders as a removable chip (`1 · 5 ×`) | Same screen (modal) |
| "Save" (modal footer) | Click | Closes the modal | Closes modal, shows a toast: "Edits are always autosaved." See Action → Result below for what this actually means. | Same screen |

## Behavior & States
- Selecting an answer chip fires **no visible save network call** at the moment of selection.
- Clicking Save closes the modal and shows the toast "Edits are always autosaved" — the modal retains an explicit Save/Cancel affordance, but the underlying data model is autosave-based regardless of that affordance.

## Rules & Validation
- Reloading the page from scratch after adding an ending confirmed the ending and its answer connection **persisted server-side** — not just optimistic local state.

## Technical Data
> OBSERVATION, directly captured via browser DOM/JS/network inspection, Claude browser extension session, 2026-09-18.

- **DOM — React Flow check:** isolated the modal's own DOM via the smallest common ancestor of its "Add Ending" and "Save" buttons (a 960×592px `<div>`): **0** `[class*="react-flow"]` descendants, **0** `<canvas>` elements, just 8 plain icon `<svg>`s. By contrast, the same page's underlying Logic tab (still mounted behind the modal overlay) carries **41** react-flow-classed elements. **Conclusion: this is NOT a 3rd confirmed use of the React Flow engine** — Scoring/Outcome-quiz is a separate, purpose-built list-and-modal editor bolted onto the Logic canvas, not an extension of it. This refutes the hypothesis in this component's own originating research prompt.
- **Network:** neither the answer-selection click nor the Save click produced a captured HTTP PUT/PATCH/POST to any Typeform API — only Microsoft Clarity telemetry and a cached avatar `data:` request appeared in the log both times. Given the toast's "always autosaved" language and Typeform's known real-time collaborative-editing infrastructure, the actual mutation **most likely travels over a WebSocket** rather than plain HTTP, which this network-capture method doesn't surface — **INFERENCE**, not directly observed.
- **State change:** confirmed via full page reload after the edit — the ending and its answer-choice connection were still present, confirming real server-side persistence despite no HTTP mutation being visible.

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| *(TODO — not yet researched — Zoho Forms has no confirmed equivalent scoring/outcome-quiz feature captured in this library yet)* | | | |

## Best Observed Approach
- TODO — needs a Zoho-side equivalent captured before a comparative judgment can be made.

## Cross-Component Pattern Note
1. **"Edits always autosave" — a third confirmed data point** for this as a house-wide Typeform editor convention, after [[typeform-choices-list-editor]] (dnd-kit + `bob-the-builder` BFF autosave) and [[typeform-automations-builder]] (autosaves against a real server-persisted object pair) — even where, as here, the UI still shows an explicit Save button. Save reads as "confirm and close," not "commit."
2. **Not every rule/logic-shaped surface in this product shares the React Flow canvas** — a useful negative finding refuting an initially-plausible hypothesis rather than confirming it. Refer to [[typeform-automations-builder]] for the confirmed positive case.
3. **Likely WebSocket-based persistence** — a second surface in this product (after the general collaborative-editing architecture Typeform is known for) where standard HTTP network capture cannot observe the actual save mechanism.

## Sources
- OBSERVATION: Live exploration of Typeform, Workflow tab (Scoring, Outcome quiz), free-plan account, form "Customer Feedback Survey", via Claude browser extension, 2026-09-18.
