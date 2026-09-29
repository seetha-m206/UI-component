---
component: "Tooltip / Info-affordance (icon-only controls)"
ui_category: "Feedback > Tooltip"
source_product: "Paperform"
last_verified: "2026-09-28"
evidence_state: "source_reviewed"
status: 'complete'
summary: "Icon-only info affordances are confirmed click-only (a MuiPopover, not a MuiTooltip) -- hovering the icon for ~2 seconds, tested twice per icon, never revealed a tooltip. No genuine hover-delay tooltip exists anywhere tested in this product."
---

# Component: Tooltip / Info-affordance (icon-only controls)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **Pass ID: PF14 (Tooltip).** Split out from the Toast/Alert/Empty/Loading record ([[paperform-feedback-toast-alert-empty-loading]]) because this is a distinct interaction pattern (hover/click-to-reveal) rather than a transient status message. **No comparison baseline exists in this library for a true hover-tooltip** — no Zoho Forms or Typeform tooltip component is documented yet; compared instead against Google Forms' own tooltip finding in [[google-forms-feedback-patterns]] (also a confirmed non-observed/absent hover bubble, though via a different underlying cause).

## Location
- **Product:** Paperform
- **Screen(s) it appears on:** document-canvas builder — a question's config drawer, on questions using layout ("columns") or visibility-related options.

## Structure
- Two icon-only (ⓘ) info affordances tested: one next to a "columns" layout option, one next to a question-visibility-related option.
- On click, a small floating text box appears, anchored to the triggering icon.
- Screenshot: not captured this pass — captured via zoomed screenshots for precise hover targeting plus DOM inspection.

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| ⓘ icon (columns option) | Hover (~2s, verified via zoom tool for precise targeting, tested twice) | None | **No visible tooltip appears** | Same screen |
| ⓘ icon (columns option) | Click | Opens a `MuiPopover` | Text box: "Two questions must be next to each other for this to be enabled. Columns aren't visible in the editor." | Same screen, popover open |
| ⓘ icon (visibility option) | Hover (~2s, tested twice) | None | **No visible tooltip appears** | Same screen |
| ⓘ icon (visibility option) | Click | Opens a `MuiPopover` | Text box: "Question is always visible." | Same screen, popover open |
| Click elsewhere (either popover open) | Click | `MuiPopover` default click-away dismissal | Popover closes | Same screen |

## Behavior & States
- **Hover triggers nothing, on both icons tested, confirmed twice each** — ruling out a false negative from imprecise pointer targeting (verified via the `zoom` tool).
- **Click reveals a `MuiPopover-paper`**, not a `MuiTooltip` — confirmed via DOM inspection. This is the same underlying MUI primitive used by some of Paperform's account-settings surfaces (see [[paperform]] §12).
- **No delay applies to the click interaction** — the popover appears immediately on click (anchored open/close, not a timed reveal); "delay" as a concept only applies to a hover-triggered tooltip, which does not exist here.
- **Positioning:** anchored to the triggering icon (standard MUI Popover anchor behavior), directly adjacent to the clicked icon, not centered on screen.
- **Dismiss:** click-away (MuiPopover default), not a hover-out or auto-timeout.
- **No keyboard/focus-triggered variant tested** — whether Tab-focusing the icon and pressing Enter/Space opens the popover was not checked this pass.

## Rules & Validation
- N/A — purely a presentational info affordance, no validation logic involved.

## Technical Data
> OBSERVATION only, tagged per evidence-guidelines.md. Captured via zoomed screenshots for precise hover targeting and DOM inspection.
- **DOM:** click reveals a `MuiPopover-paper` element — confirmed not a `MuiTooltip` by class name.
- **JavaScript:** click/anchor-triggered open-close behavior consistent with MUI's standard `Popover` component API; no custom hover-delay logic found.
- **Network:** N/A — purely client-side presentational component.
- **Response/State change:** N/A.
- **Animation/transition:** not independently captured this pass.

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| Google Forms ([[google-forms-feedback-patterns]]) | Both products confirmed to have **no observable hover-tooltip**, but for different underlying reasons: Paperform's is confirmed **by design** to be click-only (a `MuiPopover`, not a `MuiTooltip` — the interaction pattern itself doesn't include hover-reveal at all); Google's `aria-label`/`data-tooltip` pairing suggests a hover-tooltip was intended, but no visual bubble could be triggered under simulated hover, which reads as a captured limitation of that pass's automation approach rather than a confirmed absence of the feature. These are two distinct findings and should not be conflated as "both products lack tooltips" — Paperform's negative finding is stronger/more confirmed. | Google's icon-only controls all carry a confirmed matching `aria-label`, giving screen-reader users the underlying information Paperform's click-only popover would deny them entirely without a click. | Paperform's click-to-reveal pattern denies a mouse-only "hover to peek" interaction — the user must commit to a click (a more interactive-feeling action for what's otherwise a static icon) just to see an explanation. |
| Zoho Forms | Not yet captured at this depth — no Zoho tooltip component documented in this library. Open gap. | | |
| Typeform | Not yet captured at this depth — queued as AL2 in `prompt-backlog-typeform-remaining.md`. | | |

## Best Observed Approach
- Neither product confirmed in this comparison offers a genuine, verifiably-working hover-tooltip. TODO — revisit once Zoho's and Typeform's own tooltip patterns are captured, and once Google's hover-bubble question is resolved with better automation/a human operator.

## Sources
- OBSERVATION: Live exploration of Paperform's document-canvas builder, testing two icon-only info affordances via zoomed-screenshot hover targeting (confirmed twice per icon) and click interaction, plus DOM inspection confirming `MuiPopover-paper`, via Claude browser extension, 2026-09-28.
