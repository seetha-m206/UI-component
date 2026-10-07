---
component: "Framer Pages Layers and Assets Navigation"
ui_category: "Navigation > Contextual Sidebar"
source_product: "Framer"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Observed pages layers and assets navigation. Provider writes and untested outcomes remain open."
---

# Framer Pages Layers and Assets Navigation

## Location

- **OBSERVED:** Canvas left sidebar.

## Screenshot

- **OBSERVED:** Session screenshots captured dashboard, search-empty, canvas, insertion rail, localization, locale dropdown, analytics, wide/narrow preview, and breakpoint inspector. See screen ledger in `Internal/scratch-2026-10/framer/provider-observation.json`.
- **NEEDS VERIFICATION:** Captures are session evidence. No durable image export path was provided by the browser API used in this pass. This record does not claim a repository screenshot file.

## Structure

- **OBSERVED:** Pages exposes Design and Pages groups with add affordances and a Home row. Layers shows Home selector, search, and Desktop marked Primary. Assets groups Templates, Components, Styles, Vectors, and Code, each with add affordances.

## Actions

- **OBSERVED:** Pages → shows page organization. Layers → shows primary breakpoint hierarchy. Assets → shows asset category headings. No add affordance was activated.

## Behavior & States

- **OBSERVED:** This blank project contains a single Home page and primary Desktop breakpoint. Empty asset groups are an observed project condition, not a claim that Framer lacks components or styles.

## Technical Data

### Provider technical capture — 2026-10-07

- **OBSERVED:** Direct selected sample: editor-toolbar. [Open sanitized DOM, computed CSS and network capture](/research/framer/technical/provider-technical-capture.html#editor-toolbar).
- **OBSERVED:** Selected live DOM/CSS values and network event metadata are now saved separately from the reconstruction. No copied provider handler code or complete API contract is claimed.
- **NEEDS VERIFICATION:** Uncaptured component internals, payload schemas, response bodies, durable screenshots and consequential outcomes remain open. Earlier no-trace statements describe the prior pass. This addendum supplies a bounded sanitized metadata capture.

- **OBSERVED:** Tab controls are buttons. Home in Layers is a collapsed combo box. Search fields are editable. Several add affordances are containers with images rather than named buttons in AX evidence.
- **NEEDS VERIFICATION:** Internal JavaScript handlers, network request/response contracts, backend rules, exact timing, and error recovery were not inspected. Rendered DOM/AX observations do not establish those details.



### Local implementation and accessibility

- **RECONSTRUCTION / HTML:** Semantic React sections, native buttons, labelled inputs/selects, fieldsets, menus and status regions. No copied Framer source code.
- **RECONSTRUCTION / CSS:** Scoped dark UI styling and container-responsive layout. Blue accents reflect observed styling but are not a recovered design-token system.
- **RECONSTRUCTION / JavaScript:** In-memory React state, fixture remounting and local feedback. No external requests or credential handling.
- **NEEDS VERIFICATION / Network:** No provider request/response trace. Service hostnames visible in original frame URLs are not verified API contracts.
- **RECONSTRUCTION / Accessibility:** Local controls expose accessible names, selected/expanded state where applicable, disabled fieldsets, aria-labelled menus and live status feedback. Automated behavior tests and browser observations are local evidence.
- **NEEDS VERIFICATION / Accessibility:** Provider screen-reader behavior, focus management and full WCAG conformance were not independently tested.

## Reconstruction Guidance

- **RECONSTRUCTION:** Use fictional Home and Desktop nodes. Preserve separation between page routing, layer hierarchy, and reusable project assets.
- **RECONSTRUCTION:** A fictional interactive local preview is now implemented. It is not an observed provider outcome.

## Verification Gaps

- **NEEDS VERIFICATION:** Nested layers, filtering, drag order, asset creation, template selection, component variants, variables, and populated-code behavior.

## Sources

- **OBSERVED:** [Provider technical capture](/research/framer/technical/provider-technical-capture.html). Direct selected sample: editor-toolbar.

- **OBSERVED:** Authenticated Framer in-app browser, 2026-10-07. Safe navigation, disclosure, selection, and preview-width operations only. Personal values and private project identifiers omitted.



- **OBSERVED:** [Open this component’s evidence record](/research/framer/evidence/framer-pages-layers-assets-navigation.html). It includes its observation excerpts, source record, date, fixture states and limitations.
- **OBSERVED:** [Official Framer entry](https://framer.com/login). Authentication was completed by Ravi. Public login is a source-origin reference, not evidence for the private screen.
- **RECONSTRUCTION:** [Open the interactive local preview](/framer/framer-pages-layers-assets-navigation) and use its Preview, Props/Endpoint, Code, Technical Data, Accessibility and Source Files tabs.
- **RECONSTRUCTION:** Related primary control [[framer-editor-mode-menu]].
- **NEEDS VERIFICATION:** Durable provider screenshots and raw technical traces remain open. Evidence JSON explicitly records that limit.

### Fixture coverage

| Local state | Evidence boundary |
| --- | --- |
| `default` | Fictional rendering. Refer to this component’s observation excerpts for verified structure. |
| `layers` | Fictional rendering. Refer to this component’s observation excerpts for verified structure. |
| `assets` | Fictional rendering. Refer to this component’s observation excerpts for verified structure. |
## Rules & Validation

- **OBSERVED:** Disabled, selected, empty and prerequisite states are documented in Behavior & States above and the linked evidence record. They are point-in-time UI observations.
- **RECONSTRUCTION:** Fixture selection remounts local state. Disabled mode prevents input. Actions never call Framer, upload, invite, publish, purchase, or save project data. Any local validation or completion message is a simulation.
- **NEEDS VERIFICATION:** Provider validation, permission enforcement, persistence, keyboard focus recovery, loading duration and submitted-error behavior were not observed. No inferred validation rule is certified.

## Cross-Component Pattern Note

- **RECONSTRUCTION:** Reuse native labelled inputs, explicit empty/disabled states, local-only action feedback and state reset. Composed screens reuse primary primitives while preserving screen-specific layout.
- **RECONSTRUCTION:** Small-screen layouts stack editor/workspace regions using container queries. Viewport controls resize a fictional page rather than create project breakpoints.

## Competitor Comparisons

- **NEEDS VERIFICATION:** No new scored comparison is asserted by this audit. Framer can be compared with Wix, Duda and Hostinger records using their separate evidence. Local visual resemblance does not establish feature parity.
