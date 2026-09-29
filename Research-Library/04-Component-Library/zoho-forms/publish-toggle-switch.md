---
component: "Publish Toggle (Labeled Two-Span Switch)"
ui_category: "Actions > Toggle"
source_product: "Zoho Forms"
last_verified: "2026-09-15"
evidence_state: "source_reviewed"
---

# Component: Publish Toggle (Labeled Two-Span Switch)

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location
- **Product:** Zoho Forms
- **Screen(s) it appears on:** Share workflow → "Share With" → Public tab (as "Share Publicly"), and repeated as a persistent status-banner control across every Share sub-screen (Public, Embed, etc.). Entry points: dashboard row's share icon, or the builder's left icon-rail "SHARE" item.

## Structure
```html
<label class="switchContainer" id="enableDisableFormperma" elname="enable_disable">
  <span class="textOn" onclick="ZFShare.zfShare.confirmDisablePerma()">Enabled</span>
  <span class="textOff" style="display:..." onclick="ZFShare.zfShare.enableFormPerma()">Disabled</span>
  <i elname="switch" class="switchOn"></i>
</label>
```
Three-part construct: two text-label `<span>`s (`textOn`/`textOff`, only one visible at a time via inline `display` style) plus a separate `<i>` "switch" element rendering the visual slider knob.

## Actions
| Element | User Action | Function | Result | Destination screen/state |
|---|---|---|---|---|
| `span.textOn` ("Enabled", when currently on) | Click | `ZFShare.zfShare.confirmDisablePerma()` | Opens a destructive-confirm modal (see Rules below) — **no network request fires yet** | Same screen, modal overlay |
| Modal "Yes" button | Click | *(not exercised — deliberately not confirmed, to avoid leaving the test form disabled)* | Presumed: disables public sharing, likely fires a request | Not observed |
| Modal "No" button | Click | Dismisses modal | No state change; form remains Enabled | Same screen |
| `span.textOff` ("Disabled", when currently off) | Click | `ZFShare.zfShare.enableFormPerma()` | Re-enables public sharing — **no confirmation gate** on this direction | Same screen, switch flips to Enabled |

## Behavior & States
- Enabled (default observed state): `textOn` span visible ("Enabled", green accent implied by screenshot), `textOff` hidden, `i.switchOn` reflects the "on" slider position.
- Disabled: inverse — not fully inspected since the disable path wasn't confirmed through to completion (see Rules).
- Confirm-modal state: appears only on the Enable→Disable direction.
- Loading/error states: not observed (disable path not completed).

## Rules & Validation
- **Asymmetric friction by design:** disabling public sharing requires confirming a modal warning ("this form will no longer be accessible through its Permalink URL and social media links. Forms embedded on websites will also be disabled."); re-enabling has no such gate. A deliberate UX choice to make the more disruptive direction harder to trigger accidentally.
- The confirm gate is **entirely client-side** — confirmed via a request-count hook showing `reqCount: 0` at the moment the modal appears, before any confirm/cancel choice is made.
- A duplicate instance of this same switch appears in a persistent status banner ("Public users can access this form and submit responses.") on every Share sub-screen — both instances presumably stay in sync, though this wasn't independently verified.

## Technical Data
> OBSERVATION, directly captured via browser DOM/JS/network inspection (2026-09-15). The actual disable network request was **not captured** — the flow was deliberately stopped at the confirm-modal stage (clicked "No") to avoid leaving the test form in a disabled state for future inspection sessions.

- **DOM:** see Structure above.
- **JavaScript:** `ZFShare.zfShare` module — `confirmDisablePerma()` (gated path, opens modal) vs. `enableFormPerma()` (direct, ungated path). Internal modal-triggering/disable logic not decoded beyond confirming the gating asymmetry.
- **Network:** Zero requests confirmed at modal-open time (`reqCount: 0`). The actual enable/disable persistence request was not captured (flow stopped before confirming).
- **Response:** Not captured (see above).
- **State change:** Not fully observed — only the pre-confirmation state (modal open, no request yet) was captured.
- **CSS:** Not captured in detail this pass (visible in screenshot as a standard green pill-switch with a sliding knob; computed values not pulled).
- **Animation/transition:** Not captured this pass.

## Cross-Component Pattern Note
- **OBSERVATION:** This is a **fourth distinct toggle/binary-switch implementation** found in Zoho Forms this session, extending the running comparison:
  1. [[toggle-radio-switch]] — Save & Resume settings toggle: native hidden `<input type="radio">` + `label::before/::after` pseudo-elements, 0.2s eased transition.
  2. [[yes-no-toggle-field]] — live-form Yes/No field: plain `<a role="radio">` pair, manual `aria-checked`, JS-enforced mutual exclusivity, no transition.
  3. [[rating-star-field]] — 5-star selector: index-comparison group fill, `aria-checked` present but never flips, 0.3s linear transition.
  4. **This component** — labeled two-span switch (`textOn`/`textOff` + separate `<i>` slider element), gated by an asymmetric confirm-dialog on only one direction, module namespace `ZFShare.zfShare` (distinct from the `ZFForm`/`ZFSettings` namespaces seen elsewhere).
  
  **Four different engineering approaches to "toggle something on/off" within one product** — a strong, repeated signal that Zoho Forms has no shared, reusable toggle component internally; each feature team appears to have built its own.

## Competitor Comparisons
| Competitor | Same component implementation | Strengths | Weaknesses |
|---|---|---|---|
| *(TODO — not yet researched)* | | | |

## Best Observed Approach
- TODO — needs competitor research; internally, this is the only toggle of the four with a deliberate confirm-before-disable safety pattern, worth noting as a UX strength even without a native-switch implementation.

## Sources
- OBSERVATION: Live exploration of Zoho Forms (forms.zoho.in), Share workflow → Share With → Public, via Claude browser extension, 2026-09-15. DOM/JS retrieved via the page's own JS context; a request-count hook confirmed zero network activity at modal-open time.
