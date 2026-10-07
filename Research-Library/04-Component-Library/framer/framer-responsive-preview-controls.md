---
component: "Framer Responsive Preview Controls"
ui_category: "Testing & Preview > Responsive Preview"
source_product: "Framer"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Framer Responsive Preview Controls

## Location

- **OBSERVED:** Canvas Preview, wide and narrow widths.

## Screenshot

- **OBSERVED:** Session screenshots captured 1088px and 390px previews of the existing blank Home page.
- **NEEDS VERIFICATION:** No durable repository image export was available in this pass.

## Structure

- **OBSERVED:** Preview replaces editing rails with a top bar holding Back, Reload, Fullscreen, Desktop preset, width and height fields, collaborator avatar, Close preview, Invite, and Publish. The page renders inside an embedded preview module surrounded by a dark workspace.

## Actions

| Element | Observed action and result |
| --- | --- |
| Preview | Opens view=preview with width 1088 and height 1000. |
| Desktop | Opens a menu showing only Desktop and disabled Next/Previous. |
| Width | Setting 390 and pressing Return visibly narrows the white page to 390px. Restoring 1088 widens it again. |
| Close preview | Returns to editing canvas. |

## Behavior & States

- **OBSERVED:** Width change affects preview dimensions. It did not create a project breakpoint. The selected project contains one Desktop breakpoint only.
- **OBSERVED:** Width was restored to 1088 before closing. The blank preview cannot establish responsive content reflow or interactive behavior.

## Technical Data

### Provider technical capture — 2026-10-07

- **OBSERVED:** Shared provider context only. This component was not independently technically sampled in this pass.. [Open sanitized DOM, computed CSS and network capture](/research/framer/technical/provider-technical-capture.html).
- **OBSERVED:** Selected live DOM/CSS values and network event metadata are now saved separately from the reconstruction. No copied provider handler code or complete API contract is claimed.
- **NEEDS VERIFICATION:** Uncaptured component internals, payload schemas, response bodies, durable screenshots and consequential outcomes remain open. Earlier no-trace statements describe the prior pass. This addendum supplies a bounded sanitized metadata capture.

- **OBSERVED:** Native editable width/height fields and disabled preset menu entries appear in accessibility evidence. Outer URL uses view=preview. The embedded page title is My Framer Site and loads a preview-module.html document on a project-specific framercanvas.com host.
- **NEEDS VERIFICATION:** Frame resizing implementation, viewport propagation, reload/fullscreen, preview APIs, and content breakpoints.



### Local implementation and accessibility

- **RECONSTRUCTION / HTML:** Semantic React sections, native buttons, labelled inputs/selects, fieldsets, menus and status regions. No copied Framer source code.
- **RECONSTRUCTION / CSS:** Scoped dark UI styling and container-responsive layout. Blue accents reflect observed styling but are not a recovered design-token system.
- **RECONSTRUCTION / JavaScript:** In-memory React state, fixture remounting and local feedback. No external requests or credential handling.
- **NEEDS VERIFICATION / Network:** No provider request/response trace. Service hostnames visible in original frame URLs are not verified API contracts.
- **RECONSTRUCTION / Accessibility:** Local controls expose accessible names, selected/expanded state where applicable, disabled fieldsets, aria-labelled menus and live status feedback. Automated behavior tests and browser observations are local evidence.
- **NEEDS VERIFICATION / Accessibility:** Provider screen-reader behavior, focus management and full WCAG conformance were not independently tested.

## Reconstruction Guidance

- **RECONSTRUCTION:** A fictional preview should have independent viewport controls and editing-state preservation. Show only available breakpoint presets and label synthetic content.

## Sources

- **OBSERVED:** [Provider technical capture](/research/framer/technical/provider-technical-capture.html). Shared provider context only. This component was not independently technically sampled in this pass..

- **OBSERVED:** Authenticated Framer in-app browser, 2026-10-07. No publication or project content change.



- **OBSERVED:** [Open this component’s evidence record](/research/framer/evidence/framer-responsive-preview-controls.html). It includes its observation excerpts, source record, date, fixture states and limitations.
- **OBSERVED:** [Official Framer entry](https://framer.com/login). Authentication was completed by Ravi. Public login is a source-origin reference, not evidence for the private screen.
- **RECONSTRUCTION:** [Open the interactive local preview](/framer/framer-responsive-preview-controls) and use its Preview, Props/Endpoint, Code, Technical Data, Accessibility and Source Files tabs.
- **RECONSTRUCTION:** Related primary control [[framer-preview-viewport-fields]].
- **NEEDS VERIFICATION:** Durable provider screenshots and raw technical traces remain open. Evidence JSON explicitly records that limit.

### Fixture coverage

| Local state | Evidence boundary |
| --- | --- |
| `default` | Fictional rendering. Refer to this component’s observation excerpts for verified structure. |
| `narrow` | Fictional rendering. Refer to this component’s observation excerpts for verified structure. |
| `disabled` | Fictional rendering. Refer to this component’s observation excerpts for verified structure. |
## Rules & Validation

- **OBSERVED:** Disabled, selected, empty and prerequisite states are documented in Behavior & States above and the linked evidence record. They are point-in-time UI observations.
- **RECONSTRUCTION:** Fixture selection remounts local state. Disabled mode prevents input. Actions never call Framer, upload, invite, publish, purchase, or save project data. Any local validation or completion message is a simulation.
- **NEEDS VERIFICATION:** Provider validation, permission enforcement, persistence, keyboard focus recovery, loading duration and submitted-error behavior were not observed. No inferred validation rule is certified.

## Cross-Component Pattern Note

- **RECONSTRUCTION:** Reuse native labelled inputs, explicit empty/disabled states, local-only action feedback and state reset. Composed screens reuse primary primitives while preserving screen-specific layout.
- **RECONSTRUCTION:** Small-screen layouts stack editor/workspace regions using container queries. Viewport controls resize a fictional page rather than create project breakpoints.

## Competitor Comparisons

- **NEEDS VERIFICATION:** No new scored comparison is asserted by this audit. Framer can be compared with Wix, Duda and Hostinger records using their separate evidence. Local visual resemblance does not establish feature parity.
