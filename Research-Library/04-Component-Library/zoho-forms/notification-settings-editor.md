---
component: "Email Notification Settings Editor"
ui_category: "Notifications > Settings"
source_product: "Zoho Forms"
last_verified: "2026-09-18"
evidence_state: "source_reviewed"
---

# Component: Email Notification Settings Editor

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location
- **Product:** Zoho Forms
- **Screen(s) it appears on:** Settings → Email & Notifications → Email. Tested on a throwaway form ("Customer Satisfaction Survey").

## Structure
- **Empty state:** starts with no rule configured — "Configure emails to be sent when a response is added" + a single "Configure" button.
- **Two horizontal trigger tabs:** **New Record** and **Updated Record** (submission vs. edit) — this is the component's actual condition model, not a single fixed rule and not freeform per-rule conditions.
- **Multiple independent templates per tab:** after the first save, a "+ New Template" button appears on that tab, and every saved template renders as its own card with its own on/off toggle. So the real shape is "multiple named rules, each keyed to one of the two fixed triggers," not a single email or a fully generic rule builder.
- **Template editor (opens as a full modal, Cancel/Save):**
  - From — a verified sender address, editable From Name.
  - To — chip-style recipient entry: typing or pasting auto-splits on spaces/commas into individual chips and validates each as an email.
  - CC/BCC fields.
  - Subject field.
  - Rich-text body editor — bold/italic/underline/strike, font, size, colour, alignment, a "Field Labels" reference popup, "Themes", an AI-assist icon.

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| "Configure" button (empty state) | Click | Opens template editor modal | First template editor opens, empty | Same screen (modal) |
| "+ New Template" button | Click | Opens template editor modal | A new, independent template editor opens for that tab's trigger | Same screen (modal) |
| Template card's on/off toggle | Click | Enables/disables that template | Toggles whether that specific template fires — not tested to network-call depth this pass, UI-level only | Same screen |
| To field — type/paste text with spaces/commas | Type/paste | Auto-splits into recipient chips | Each segment becomes a chip and is validated as an email; a non-email chip trips a red "Invalid email address specified" banner but does not block editing the rest of the form | Same screen (modal) |
| "Field Labels" button | Click | Opens read-only reference popup | Two-column list pairing each form question's exact text with its merge-field token, plus a "System Fields" section — see Merge-field picker below | Same screen (popup over modal) |
| A row inside the Field Labels popup | Click | **None** | Confirmed no-op — clicking a token row does nothing to the Subject/body editor; placeholders must be typed or copy-pasted in by hand | Same screen |
| "Cancel" (template editor) | Click | Closes modal | No save; template unchanged/not created | Same screen |
| "Save" (template editor) | Click | Persists the template | Fires `POST .../notifications/email`; template card now appears under its tab | Same screen |

## Behavior & States
- **Default/empty state:** no rule exists; only the "Configure emails to be sent when a response is added" prompt + Configure button.
- **Populated state:** one or more template cards per trigger tab, each independently toggleable on/off.
- **Save vs. autosave:** explicit Save required — nothing persists until Save is clicked. This is the **opposite** of the form builder canvas, where field changes land with no separate save step, and matches the same autosave-vs-explicit-save split already documented elsewhere in this product (compare [[theme-editor-split-pane-shell]], which is also explicit-save, vs. the builder canvas's autosave).
- **Validation error state:** a non-email recipient chip shows a red "Invalid email address specified" banner; this does not lock the rest of the modal from being edited.

## Rules & Validation
- Trigger condition is fixed to exactly two options (New Record / Updated Record) — not user-definable conditional logic.
- Recipient entry validates each chip as an email address independently; an invalid one is flagged but non-blocking for the rest of the form.
- Merge-field tokens are typed/pasted syntax only (`${zf:...}`), not inserted via a picker — see Merge-field picker below.

## Technical Data
> OBSERVATION, directly captured via browser DOM/JS/network inspection, Claude browser extension session, 2026-09-18.

- **Network:**

| Call | Fires | Notes |
|---|---|---|
| `POST /aicentilio2026gm1/form/CustomerSatisfactionSurvey/notifications/email` | once, only on the Save click | Status 200. Request/response bodies were not inspectable this pass (tripped this session's own cookie/query-string redaction), but the UI round-trip and the single POST-on-Save timing are directly confirmed. |

- **Merge-field picker ("Field Labels"):** a read-only reference popup, **not** a click-to-insert menu. A two-column list pairs each form question's exact text with its token — observed tokens: `${zf:Rating}`, `${zf:Dropdown}`, `${zf:Radio}`, `${zf:MultipleChoice}`, `${zf:DecisionBox}`, `${zf:MultiLine}`, plus a "System Fields" section: `${zf:REFERRER_NAME}`, `${zf:IP_ADDRESS}`, `${zf:ADDED_TIME}`, `${zf:ADDED_EMAILID}`. Clicking a row is a confirmed no-op (directly tested: clicked one row, watched Subject/body stay unchanged). Typed tokens render as **plain text** in the editor — no autocomplete, no chip conversion, confirmed by typing a token and observing it rendered as plain text with only a spellcheck squiggle, not converted to a chip.
- **State change:** template persistence happens entirely on the explicit `POST .../notifications/email` call triggered by Save; no request fires on any other interaction in the modal (typing, toggling recipient chips, opening Field Labels).

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| Paperform (see [[paperform-custom-pdf-designer]]) | Same *category* of feature — a merge-field reference for inserting question answers into generated content — but a genuinely different surface (PDF templates, not notification emails) | **Confirmed working click-to-insert** — Paperform's equivalent picker (in its Custom PDF designer) actually inserts a `{{ key }}` token at the caret on click, the direct positive counter-example to this record's confirmed-inert Field Labels popup; Paperform's picker also surfaces system fields (Submitted At, Submission ID, Total Amount), which Zoho's does not appear to for this notification-editor context | Not a true apples-to-apples comparison — no Paperform notification/email editor has been captured yet, so this compares a working picker in one context (PDF) against an inert one in another (email) rather than the same feature twice |

## Best Observed Approach
- TODO — needs at least one competitor's equivalent notification-settings editor captured before a comparative judgment can be made. Worth flagging as a candidate weak point regardless of competitor comparison: the "Field Labels" popup presents itself adjacent to a rich-text editor in a way that visually suggests click-to-insert, but is confirmed inert — a real usability gap between affordance and actual behavior.

## Cross-Component Pattern Note
1. **Explicit-save, not autosave** — this is at least the second confirmed instance of Zoho Forms' explicit-save pattern for settings-type surfaces, alongside [[theme-editor-split-pane-shell]]'s General tab, both distinct from the builder canvas's autosave.
2. **A picker that looks interactive but isn't** — the Field Labels popup is a second confirmed case in this product (after [[rating-star-field]]'s `aria-checked` bug and [[theme-icon-button-group-selector]]'s zero-ARIA controls) of UI affordance not matching actual behavior, though this one is a functional/UX gap rather than an accessibility one.

## Sources
- OBSERVATION: Live exploration of Zoho Forms (forms.zoho.in), Settings → Email & Notifications → Email, via Claude browser extension, 2026-09-18. Tested on throwaway form "Customer Satisfaction Survey." DOM/network data retrieved programmatically through the page's own JS context; a fetch/XHR interceptor was used for network capture.
