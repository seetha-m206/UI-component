---
component: "Builder Left-Rail Tabs + Top-Bar Preview Button"
ui_category: "Navigation > Tabs"
source_product: "Zoho Forms"
last_verified: "2026-09-18"
evidence_state: "source_reviewed"
status: 'complete'
summary: "Form builder's left-rail navigation (full page reload per click, zero ARIA) and its separately-implemented top-bar Preview overlay button, which stays enabled even on a zero-field form, refuting a disabled-until-populated hypothesis."
---

# Component: Builder Left-Rail Tabs + Top-Bar Preview Button

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **Relationship to [[theme-icon-button-group-selector]]:** both the left-rail tabs and the separate top-bar Preview button are confirmed zero-ARIA custom controls, the same accessibility gap already documented for the Theme editor's icon-button group selectors — a third and fourth confirmed instance of this pattern in the product, not an isolated case.

## Location
- **Product:** Zoho Forms
- **Screen(s) it appears on:** Form builder — the left-rail navigation (Builder / Rules / Settings / Themes / Share / Integrations / Approvals / Analytics / Audit) and, separately, a Preview button in the top bar. Tested on both a populated form and a fresh zero-field form.

## Structure
- **Left-rail tabs:** a bare `<ul><li><a href>` list of 9 items — Builder, Rules, Settings, Themes, Share, Integrations, Approvals, Analytics, Audit.
- **Preview button:** a separate top-bar control, structurally and behaviorally unrelated to the left rail.

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| A left-rail tab (e.g. "Settings") | Click | Navigates to that section | **Genuine full page reload** — confirmed via a JS marker that got wiped on navigation. No transition animation, since there is no client-side transition to animate. | New page (full navigation) |
| Preview button (top bar) | Click | Opens a same-page overlay | A device-frame preview + theme picker + close control opens in place. **No URL change, no reload.** | Same screen (overlay) |

## Behavior & States
- **Left-rail active state:** a plain `class="select"` swap (teal background vs. grey/transparent) — no ARIA state attribute backs this.
- **Left-rail on a zero-field form:** all 9 items stayed fully enabled — nothing here gets locked by a "zero fields" precondition.
- **Preview on a zero-field form:** fully clickable (no `aria-disabled`, a live `onclick`, opacity 1) — opening it rendered "This form is empty!" with a placeholder Submit button, rather than being disabled. This directly **refutes** the hypothesis that Preview is disabled until the form has at least one field.

## Rules & Validation
- No precondition gates either control in this product — both remain interactive regardless of form content.

## Technical Data
> OBSERVATION, directly captured via browser DOM/JS/network inspection, Claude browser extension session, 2026-09-18.

- **DOM (left-rail):** bare `<ul><li><a href></a></li></ul>` — no `role="tablist"`/`role="tab"` semantics, no `aria-selected`, no `aria-current`. Active tab is distinguished only by a `class="select"` toggle (visual only).
- **DOM (Preview button):** likewise carries no ARIA attributes — no `aria-haspopup`, no `aria-expanded` for the overlay it opens.
- **Behavior confirmed via a JS marker:** a marker set before clicking a left-rail tab was gone after navigation, confirming the click triggers a real full page reload rather than a client-side route change.
- **Architecturally distinct controls:** the left rail is server-navigation-based (full reload per click); the Preview button is a same-page client-side overlay (no navigation at all). These are two different implementation strategies for adjacent-looking "tab-like" navigation in the same screen.

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| *(TODO — not yet researched)* | | | |

## Best Observed Approach
- TODO — needs at least one competitor's equivalent builder navigation captured before a comparative judgment can be made.

## Cross-Component Pattern Note
1. **Zero ARIA on both controls** — a third ([[theme-icon-button-group-selector]]) and now fourth/fifth confirmed instance of interactive controls in this product shipping with no ARIA semantics at all, beyond the earlier `aria-checked`-never-flips bug on [[rating-star-field]] (which at least has the attribute present, just wrong).
2. **Full page reload for primary navigation** — the builder's own top-level sections (Builder/Rules/Settings/etc.) are not a single-page app in the way the in-page overlays (Preview, Theme editor, modals) are; this product mixes both navigation models on the same screen.
3. **A UI-level hypothesis from the brief (Preview disabled until ≥1 field) is directly refuted** — worth remembering as a caution against assuming standard SaaS-builder conventions apply here without testing.

## Sources
- OBSERVATION: Live exploration of Zoho Forms (forms.zoho.in), form builder left-rail and Preview button, tested on both a populated form and a fresh zero-field form, via Claude browser extension, 2026-09-18.
