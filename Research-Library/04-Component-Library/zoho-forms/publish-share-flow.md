---
component: "Publish & Share Flow"
ui_category: "Collaboration > Sharing/permissions"
source_product: "Zoho Forms"
last_verified: "2026-09-18"
evidence_state: "source_reviewed"
---

# Component: Publish & Share Flow

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

> **Relationship to [[publish-toggle-switch]]:** [[publish-toggle-switch]] (2026-09-15) first identified the Share screen's Enable/Disable switch (`ZFShare.zfShare` module) but stopped short of confirming the actual disable network request — that earlier session deliberately clicked "No" on the confirm modal to avoid leaving the test form disabled, so the real persistence call, its response, and the disabled-state visuals were left uncaptured. This record (2026-09-18) completes that trace on a throwaway form — the actual `PUT .../share/status` call, its request/response, and the confirm-modal's solid-red "Yes" button — and additionally documents the full three-level master-detail Share screen layout (sharing-method cards → sub-list → detail pane) that the earlier, toggle-focused capture didn't cover.

## Location
- **Product:** Zoho Forms
- **Screen(s) it appears on:** Share screen. Entry points previously confirmed (per [[publish-toggle-switch]] and `01-Zoho-Primary-Products/zoho-forms.md` §7, 2026-09-15): dashboard row's share icon, or the builder's left icon-rail "SHARE" item — both land on a dedicated Share screen replacing the builder canvas. Tested this session on a throwaway form, "Customer Satisfaction Survey."

## Structure
Zoho Forms has **no separate "Publish" button** — the Enable/Disable toggle on the Share screen is the publish mechanism itself, and a form is enabled (live) from the moment it's created; no explicit publish step is needed before the Share screen works.

Layout is not tabs and not one scrolling panel — a **three-level master-detail rail**:
- **Left column:** sharing-method cards — Share With, Embed, Email Campaigns, UTM Tracking, Google Tag Manager & Custom Tracking, plus more below the fold.
- **Middle sub-list:** changes per selected card — for "Share With": Public / Specific Users / Groups / All Users.
- **Right detail pane:** content for the selected middle sub-list item.

"Embed" nests a **second sub-list** inside its own detail pane: iframe / JavaScript / Hyperlink / Lightbox Pop-up Form / HTML & CSS / Website Builders, plus a separate "Embed Settings → Embed Location" group.

No dedicated social-share or email-body option was found; "Email Campaigns" only points at connecting an external email tool.

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| Enable/Disable toggle (currently Enabled) | Click | Opens confirmation dialog | "On disabling the public sharing, this form will no longer be accessible through its Permalink URL and social media links. Forms embedded on websites will also be disabled. Would you like to proceed?" (Yes / No) | Same screen, modal overlay |
| Confirmation dialog "Yes" | Click | `PUT .../share/status` `{"enable_perma":false}` | Form is disabled; Public and Embed panels desaturate/lock; amber banner replaces the green confirmation banner | Same screen, disabled state |
| Confirmation dialog "No" | Click | Dismisses dialog | No state change; form remains enabled | Same screen |
| Enable/Disable toggle (currently Disabled) | Click | `PUT .../share/status` `{"enable_perma":true}` — **no confirmation required** | Form is re-enabled; panels return to full-colour/interactive | Same screen, enabled state |
| Left sharing-method card (e.g. Embed) | Click | Client-side switch | Middle sub-list and right detail pane swap to that card's content; no network call | Same screen |
| Middle/nested sub-list item (e.g. Public, or Embed's iframe/JavaScript/etc.) | Click | Client-side switch | Right detail pane content swaps; no network call | Same screen |

## Behavior & States
- **Share screen availability:** always reachable regardless of enabled/disabled state — it is the screen's *contents* that lock, not the screen itself.
- **Enabled state:** full-colour Public panel (permalink field, "Shorten URL", QR code, "Download") and full-colour Embed panel, all interactive.
- **Disabled state:** an amber banner ("This form has been disabled for the public. Enable public access to use this option.") replaces the green confirmation banner; the toggle reads "Disabled" in grey; every option on both the Public and Embed panels — permalink text, Shorten URL button, QR image, Download button, all iframe/JS code blocks — renders desaturated/greyed and non-interactive. Nothing is hidden or removed, only locked in place.
- **Confirmation modal:** the "Yes" button is rendered as a **solid red** button — the one place in this session's audited UI where a destructive action used a solid fill rather than ghost/outline, because it's a modal confirmation rather than a menu item or row icon (see Cross-Component Pattern Note).
- Re-enabling requires no confirmation at all — asymmetric friction by direction.

## Rules & Validation
- **No separate "Publish" step exists** — the Enable/Disable toggle *is* the publish mechanism. A form is enabled (live) from the moment it's created.
- Disabling public access requires confirming a destructive modal; re-enabling does not — a deliberate one-directional safety gate.
- The Share screen itself is always reachable regardless of state; only its contents (Public/Embed panel interactivity) lock when disabled.

## Technical Data
> OBSERVATION, captured via a fetch/XHR interceptor, live exploration session, 2026-09-18, tested on a throwaway form ("Customer Satisfaction Survey").

- **DOM — embed code:** built client-side, not fetched per request. No network call fires when switching to Embed or between its iframe/JavaScript/etc. sub-options. The generated `<iframe src=...>` string reuses the exact permalink hash already loaded with the form (e.g. `.../formperma/s7muGVOX0nQE-tV-gLUMFGbcYtRWQkXPLDuYe8I4z_I`), just string-templated into markup in the browser.
- **Network:** one clean REST call, captured via a fetch/XHR interceptor:

| Call | Request body | Response | Status |
|---|---|---|---|
| `PUT /aicentilio2026gm1/form/CustomerSatisfactionSurvey/share/status` | `{"enable_perma":true}` (`false` to disable) | empty body | 200 |

  A single boolean flag, no polling, no separate "publish" endpoint distinct from this share-status toggle.
- **Response:** empty body on success (200).
- **State change:** the enable/disable call flips a single boolean flag on the form's share status; nothing else in the payload.
- **CSS:** the confirmation modal's "Yes" button uses a solid red fill rather than ghost/outline (see Behavior & States and Cross-Component Pattern Note). Disabled-state panels render desaturated/greyed via CSS, not removed from the DOM.
- **Animation/transition:** not captured this session — **NOT OBSERVED**.

## Cross-Component Pattern Note
- **OBSERVATION:** the disable-confirmation "Yes" button in this flow is a solid red fill, not ghost/outline — flagged in this session's capture as the one confirmed case within this component's own audit where a destructive action uses solid fill because it's a modal confirmation, not a menu item or row icon. Worth comparing against this library's other button-consistency findings: [[destructive-confirm-modal-comparison]] independently recorded the "Move to Trash?" modal's footer as "No (neutral, left) then Yes (solid red, right)" — i.e. also a solid-red destructive "Yes" button, in a different flow. That means the "one place in the product" framing may only hold within this component's own audit scope, not product-wide — flagged here for reconciliation in a future cross-component pass rather than asserted as resolved.

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| *(TODO — not yet researched)* | | | |

## Best Observed Approach
- TODO — needs at least one competitor's equivalent publish/share flow captured before a comparative judgment can be made.

## Sources
- OBSERVATION: Live exploration of Zoho Forms (forms.zoho.in), Share screen, tested on a throwaway form "Customer Satisfaction Survey," via Claude browser extension, 2026-09-18. Network requests captured via a fetch/XHR interceptor.
