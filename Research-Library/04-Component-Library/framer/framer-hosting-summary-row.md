---
component: "Framer Hosting Summary Row"
ui_category: "Layouts > Settings Workspace"
source_product: "Framer"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Framer Hosting Summary Row

## Location

- **OBSERVED:** Authenticated Framer, `Headers > Default row`, inspected on 2026-10-07. Project names are sanitized.

## Screenshot

- **OBSERVED:** Visual and accessibility snapshots inspected in the current browser session. Provider screenshot export remains unverified.
- **RECONSTRUCTION:** The linked interactive preview renders fictional local data at desktop and narrow widths.

## Structure

- **OBSERVED:** Path, Name, Value table header. Default row with 11 headers and 11 values.
- **OBSERVED:** Only summary counts inspected. No header names or value content captured.

## Actions

- **OBSERVED:** Navigation and disclosure states listed in Structure were inspected. Consequential actions were not executed.
- **RECONSTRUCTION:** Local buttons select, filter, switch, close or show informational feedback in React memory. Inputs edit local values. No Framer request or external side effect occurs. Formatting only simulates pressed state. Table Add and Upgrade actions show information only.


### Provider action trace

| Element | User action | Result or boundary | Evidence |
| --- | --- | --- | --- |
| Default summary row | Inspected | 11 headers and 11 values only | OBSERVED |
| Expand or edit row | Not used | Names, values and editing outcome unverified | NEEDS VERIFICATION |

## Behavior & States

| Fixture | Evidence boundary |
| --- | --- |
| `default` | OBSERVED structure: default. Rendering is a fictional local reconstruction. |
| `information` | RECONSTRUCTION: information. Rendering is a fictional local reconstruction. |
| `disabled` | RECONSTRUCTION: disabled. Rendering is a fictional local reconstruction. |

- **RECONSTRUCTION:** Fixture changes remount and discard local state. Disabled fieldsets prevent controls from being edited. Palette searching filters a static fictional list. Previous month, selected formatting and gradient previews are simulated unless explicitly marked observed.
- **NEEDS VERIFICATION:** Row expansion and editing are unverified. Local information feedback is a simulation.

## Rules & Validation

- **OBSERVED:** Only the visible labels, counts, prerequisites and disclosed states above are established. A plan gate is visible UI evidence, not proof of server entitlement enforcement.
- **RECONSTRUCTION:** No save, upload, purchase, invitation, generation, publication or plugin installation occurs. Color inputs accept local text and only six hexadecimal digits update the solid swatch. This is local display validation, not a Framer rule.
- **NEEDS VERIFICATION:** Provider validation, errors, loading duration, persistence, permission checks and successful outcomes remain open.

## Technical Data

### Provider technical capture — 2026-10-07

- **OBSERVED:** Parent screen Add-control sample only. Default row markup was not technically sampled. [Open sanitized DOM, computed CSS and network capture](/research/framer/technical/provider-technical-capture.html#headers).
- **OBSERVED:** Selected live DOM/CSS values and network event metadata are now saved separately from the reconstruction. No copied provider handler code or complete API contract is claimed.
- **NEEDS VERIFICATION:** Uncaptured component internals, payload schemas, response bodies, durable screenshots and consequential outcomes remain open. Earlier no-trace statements describe the prior pass. This addendum supplies a bounded sanitized metadata capture.

- **RECONSTRUCTION / HTML:** Semantic sections, buttons, labelled controls, fieldsets, dialog/toolbar roles, table headers and status feedback. No recovered provider source.
- **RECONSTRUCTION / CSS:** Scoped `remaining.module.css` dark styling with container-responsive layout. No verified provider design-token system.
- **RECONSTRUCTION / JavaScript:** `FramerRemaining.tsx` uses React state and an independent registry entry with three fixtures and documented props. No network or credentials.
- **RECONSTRUCTION / Accessibility:** Native accessible names, pressed states, disabled fieldsets, named dialogs, labelled inputs/selects and status feedback are locally tested. Narrow viewport is a local resize simulation.
- **NEEDS VERIFICATION / Accessibility:** Provider focus restoration, keyboard paths beyond observed Escape, screen-reader behavior and WCAG compliance were not certified.
- **NEEDS VERIFICATION / Network:** No raw provider request/response trace or API contract is attached.

## Cross-Component Pattern Note

- **RECONSTRUCTION:** Related [[framer-hosting-headers-table]] preserves the parent screen or reusable primitive. Keep scope, selected state and local-only information feedback visible when composing these components.

## Competitor Comparisons

- **NEEDS VERIFICATION:** No new feature-parity or scored competitor assertion. Compare with separately evidenced Wix, Duda and Hostinger records.

## Sources

- **OBSERVED:** [Provider technical capture](/research/framer/technical/provider-technical-capture.html). Parent screen Add-control sample only. Default row markup was not technically sampled.

- **OBSERVED:** [Read component evidence and observation excerpts](/research/framer/evidence/framer-hosting-summary-row.html). Machine-readable companion: [JSON evidence](/research/framer/evidence/framer-hosting-summary-row.json).
- **OBSERVED:** [Official Framer entry](https://framer.com/login) is an origin reference. Private-screen evidence comes from authenticated browser observation, not that login page.
- **RECONSTRUCTION:** [Open interactive preview](/framer/framer-hosting-summary-row). Preview, Props/Endpoint, Code, Technical Data, Accessibility and Source Files expose local implementation details.
- **NEEDS VERIFICATION:** Durable screenshots, provider network traces and consequential outcomes remain open and are recorded in the evidence file.
