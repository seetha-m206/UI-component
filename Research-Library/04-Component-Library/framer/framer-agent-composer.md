---
component: "Framer Agent Composer"
ui_category: "AI & Automation > Prompt Composer"
source_product: "Framer"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Framer Agent Composer

## Location

- **OBSERVED:** Canvas Agent, CMS Agent, and Analytics composer.

## Screenshot

- **OBSERVED:** Session screenshots captured dashboard, search-empty, canvas, insertion rail, localization, locale dropdown, analytics, wide/narrow preview, and breakpoint inspector. See screen ledger in `Internal/scratch-2026-10/framer/provider-observation.json`.
- **NEEDS VERIFICATION:** Captures are session evidence. No durable image export path was provided by the browser API used in this pass. This record does not claim a repository screenshot file.

## Structure

- **OBSERVED:** Agent has New chat selector, Chat control, prompt field, model selector, attachment/Add affordance, and Send. Canvas additionally exposes Select. Analytics prompt says Ask about your site analytics.

## Actions

- **OBSERVED:** Canvas initial view → shows Ask Framer composer. CMS → retains Agent beside empty collection workspace. Analytics → changes prompt context. No prompt was submitted and no new chat was created.

## Behavior & States

- **OBSERVED:** Send is disabled when empty. The model label shown in this session was GPT 6.1 Sol. This documents visible UI text only, not model availability, quality, or provider execution.

## Technical Data

### Provider technical capture — 2026-10-07

- **OBSERVED:** Shared provider context only. This component was not independently technically sampled in this pass.. [Open sanitized DOM, computed CSS and network capture](/research/framer/technical/provider-technical-capture.html).
- **OBSERVED:** Selected live DOM/CSS values and network event metadata are now saved separately from the reconstruction. No copied provider handler code or complete API contract is claimed.
- **NEEDS VERIFICATION:** Uncaptured component internals, payload schemas, response bodies, durable screenshots and consequential outcomes remain open. Earlier no-trace statements describe the prior pass. This addendum supplies a bounded sanitized metadata capture.

- **OBSERVED:** Composer input has DOM ID agent-chat-input. Send exposes disabled state. Model and New chat controls are popup buttons.
- **NEEDS VERIFICATION:** Internal JavaScript handlers, network request/response contracts, backend rules, exact timing, and error recovery were not inspected. Rendered DOM/AX observations do not establish those details.



### Local implementation and accessibility

- **RECONSTRUCTION / HTML:** Semantic React sections, native buttons, labelled inputs/selects, fieldsets, menus and status regions. No copied Framer source code.
- **RECONSTRUCTION / CSS:** Scoped dark UI styling and container-responsive layout. Blue accents reflect observed styling but are not a recovered design-token system.
- **RECONSTRUCTION / JavaScript:** In-memory React state, fixture remounting and local feedback. No external requests or credential handling.
- **NEEDS VERIFICATION / Network:** No provider request/response trace. Service hostnames visible in original frame URLs are not verified API contracts.
- **RECONSTRUCTION / Accessibility:** Local controls expose accessible names, selected/expanded state where applicable, disabled fieldsets, aria-labelled menus and live status feedback. Automated behavior tests and browser observations are local evidence.
- **NEEDS VERIFICATION / Accessibility:** Provider screen-reader behavior, focus management and full WCAG conformance were not independently tested.

## Reconstruction Guidance

- **RECONSTRUCTION:** Use fictional prompt fixtures. Model label and generated responses must be labelled synthetic in any local interactive preview.
- **RECONSTRUCTION:** A fictional interactive local preview is now implemented. It is not an observed provider outcome.

## Verification Gaps

- **NEEDS VERIFICATION:** AI site generation, token/credit consumption, streaming, cancellation, failures, model changes, generated content, and chat persistence.

## Sources

- **OBSERVED:** [Provider technical capture](/research/framer/technical/provider-technical-capture.html). Shared provider context only. This component was not independently technically sampled in this pass..

- **OBSERVED:** Authenticated Framer in-app browser, 2026-10-07. Safe navigation, disclosure, selection, and preview-width operations only. Personal values and private project identifiers omitted.



- **OBSERVED:** [Open this component’s evidence record](/research/framer/evidence/framer-agent-composer.html). It includes its observation excerpts, source record, date, fixture states and limitations.
- **OBSERVED:** [Official Framer entry](https://framer.com/login). Authentication was completed by Ravi. Public login is a source-origin reference, not evidence for the private screen.
- **RECONSTRUCTION:** [Open the interactive local preview](/framer/framer-agent-composer) and use its Preview, Props/Endpoint, Code, Technical Data, Accessibility and Source Files tabs.
- **RECONSTRUCTION:** Related primary control [[framer-agent-prompt-composer]].
- **NEEDS VERIFICATION:** Durable provider screenshots and raw technical traces remain open. Evidence JSON explicitly records that limit.

### Fixture coverage

| Local state | Evidence boundary |
| --- | --- |
| `default` | Fictional rendering. Refer to this component’s observation excerpts for verified structure. |
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
