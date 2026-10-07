---
component: "Framer Site Plan Comparison"
ui_category: "Layouts > Settings Workspace"
source_product: "Framer"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Observed structural reference with three fictional local fixture states and explicit evidence limits."
---

# Framer Site Plan Comparison

## Location

- **OBSERVED:** Authenticated Framer, `settings:plans`, inspected on 2026-10-07. Project names are sanitized.

## Screenshot

- **OBSERVED:** Visual and accessibility snapshots inspected in the current browser session. Provider screenshot export remains unverified.
- **RECONSTRUCTION:** The linked interactive preview renders fictional local data at desktop and narrow widths.

## Structure

- **OBSERVED:** Yearly default: Basic CA$14, Pro CA$41 per month billed yearly. Additional editors CA$27 per month.
- **OBSERVED:** Monthly switch: Basic CA$20, Pro CA$60, additional editors CA$40 per month. Restored yearly.
- **OBSERVED:** Basic: 1,000 monthly credits, 2 CMS collections, 50 GB bandwidth, 30 site pages, password protect, localization add-on.
- **OBSERVED:** Pro: everything in Basic, 3,000 credits, 10 CMS collections, 100 GB bandwidth, 150 site pages, Branching, Staging, A/B testing and Advanced hosting add-ons.
- **OBSERVED:** Free custom domain and 2x credits first month display Annual only in monthly view.
- **OBSERVED:** Enterprise Custom, Annual only, custom limits, unlimited editors, uptime guarantee, enterprise security, SOC 2 Type 2, ISO 27001, SCIM, SSO and Request trial.

## Actions

- **OBSERVED:** Navigation and disclosure states listed in Structure were inspected. Consequential actions were not executed.
- **RECONSTRUCTION:** Local buttons select, filter, switch, close or show informational feedback in React memory. Inputs edit local values. No Framer request or external side effect occurs. Formatting only simulates pressed state. Table Add and Upgrade actions show information only.


### Provider action trace

| Element | User action | Result or boundary | Evidence |
| --- | --- | --- | --- |
| Switch to monthly | Click | Basic CA$20, Pro CA$60, editors CA$40 and Annual only annotations | OBSERVED |
| Switch to yearly | Click | Basic CA$14, Pro CA$41, editors CA$27 restored | OBSERVED |
| Subscribe or Request trial | Not used | Checkout and trial outcome unverified | NEEDS VERIFICATION |

## Behavior & States

| Fixture | Evidence boundary |
| --- | --- |
| `default` | OBSERVED structure: default. Rendering is a fictional local reconstruction. |
| `monthly` | OBSERVED structure: monthly. Rendering is a fictional local reconstruction. |
| `disabled` | RECONSTRUCTION: disabled. Rendering is a fictional local reconstruction. |

- **RECONSTRUCTION:** Fixture changes remount and discard local state. Disabled fieldsets prevent controls from being edited. Palette searching filters a static fictional list. Previous month, selected formatting and gradient previews are simulated unless explicitly marked observed.
- **NEEDS VERIFICATION:** No Subscribe or Request trial action used. Prices are a CA$ UI snapshot from 2026-10-07, not a current offer or verified invoice.

## Rules & Validation

- **OBSERVED:** Only the visible labels, counts, prerequisites and disclosed states above are established. A plan gate is visible UI evidence, not proof of server entitlement enforcement.
- **RECONSTRUCTION:** No save, upload, purchase, invitation, generation, publication or plugin installation occurs. Color inputs accept local text and only six hexadecimal digits update the solid swatch. This is local display validation, not a Framer rule.
- **NEEDS VERIFICATION:** Provider validation, errors, loading duration, persistence, permission checks and successful outcomes remain open.

## Technical Data

### Provider technical capture — 2026-10-07

- **OBSERVED:** Direct selected sample: plans-yearly. [Open sanitized DOM, computed CSS and network capture](/research/framer/technical/provider-technical-capture.html#plans-yearly).
- **OBSERVED:** Selected live DOM/CSS values and network event metadata are now saved separately from the reconstruction. No copied provider handler code or complete API contract is claimed.
- **NEEDS VERIFICATION:** Uncaptured component internals, payload schemas, response bodies, durable screenshots and consequential outcomes remain open. Earlier no-trace statements describe the prior pass. This addendum supplies a bounded sanitized metadata capture.

- **RECONSTRUCTION / HTML:** Semantic sections, buttons, labelled controls, fieldsets, dialog/toolbar roles, table headers and status feedback. No recovered provider source.
- **RECONSTRUCTION / CSS:** Scoped `remaining.module.css` dark styling with container-responsive layout. No verified provider design-token system.
- **RECONSTRUCTION / JavaScript:** `FramerRemaining.tsx` uses React state and an independent registry entry with three fixtures and documented props. No network or credentials.
- **RECONSTRUCTION / Accessibility:** Native accessible names, pressed states, disabled fieldsets, named dialogs, labelled inputs/selects and status feedback are locally tested. Narrow viewport is a local resize simulation.
- **NEEDS VERIFICATION / Accessibility:** Provider focus restoration, keyboard paths beyond observed Escape, screen-reader behavior and WCAG compliance were not certified.
- **NEEDS VERIFICATION / Network:** No raw provider request/response trace or API contract is attached.

## Cross-Component Pattern Note

- **RECONSTRUCTION:** Related [[framer-plan-billing-interval]] preserves the parent screen or reusable primitive. Keep scope, selected state and local-only information feedback visible when composing these components.

## Competitor Comparisons

- **NEEDS VERIFICATION:** No new feature-parity or scored competitor assertion. Compare with separately evidenced Wix, Duda and Hostinger records.

## Sources

- **OBSERVED:** [Provider technical capture](/research/framer/technical/provider-technical-capture.html). Direct selected sample: plans-yearly.

- **OBSERVED:** [Read component evidence and observation excerpts](/research/framer/evidence/framer-site-plan-comparison.html). Machine-readable companion: [JSON evidence](/research/framer/evidence/framer-site-plan-comparison.json).
- **OBSERVED:** [Official Framer entry](https://framer.com/login) is an origin reference. Private-screen evidence comes from authenticated browser observation, not that login page.
- **RECONSTRUCTION:** [Open interactive preview](/framer/framer-site-plan-comparison). Preview, Props/Endpoint, Code, Technical Data, Accessibility and Source Files expose local implementation details.
- **NEEDS VERIFICATION:** Durable screenshots, provider network traces and consequential outcomes remain open and are recorded in the evidence file.
