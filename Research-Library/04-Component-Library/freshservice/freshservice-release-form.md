---
component: "New Release Form"
ui_category: "Customer Support > Helpdesk > Forms > Creation Form"
source_product: "Freshservice"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
status: "complete"
---

# Component: New Release Form

Product → Screen → Component → Action → Behavior → States → Rules → Technical Data → Reference

## Location

- **OBSERVATION:** Authenticated Freshservice UI on 2026-10-05. This is a Freshservice reference for Centilio Care, not a Freshdesk observation.
- **OBSERVATION:** Source route: [Freshservice New Release Form](https://centilio.freshservice.com/a/releases/new).
- **RECONSTRUCTION:** The `complete` status means this bounded component record is documented. It does not assert every provider workflow state was exercised.

## Screenshot

![Observed New Release Form](/research/freshservice/source/release-form-default.png)

- **OBSERVATION:** Source screenshot from the authenticated provider. The private DOM receipt supplements clipping.
- **RECONSTRUCTION:** [Fictional local preview](/research/freshservice/fixtures/freshservice-release-form.png).

## Structure

- **OBSERVATION:** Subject, rich Description, planned start and end dates and times, Status, Priority, Release Type, assignment, Category, Planned Effort, CIs and attachments.

## Actions

| Action | Observed result or boundary |
| --- | --- |
| Safe navigation and disclosure | Release Type expanded with keyboard. No submission or upload occurred. |
| Consequential control in local preview | A boundary notice appears and no provider request is sent. |

## Behavior & States

- **OBSERVATION:** Defaults showed Open status, Low priority and Minor release type.
- **RECONSTRUCTION:** Inputs, selectors, tabs and disclosure controls only change local React state. Task examples use fictional rows.
- **NOT OBSERVED:** Validation, approval, scheduling and saved release behavior.

## Rules & Validation

- **OBSERVATION:** Required marks, default values, disabled controls and available choices are recorded only when visible in the source.
- **RECONSTRUCTION:** Submit, import, setup, attach, associate, update and apply actions are guarded in the preview.

## Technical Data

- **OBSERVATION / DOM:** The private DOM receipt records rendered roles, labels, choices and states.
- **RECONSTRUCTION:** Shared local implementation is `src/previews/freshservice-shared/FreshserviceRemaining.tsx` with component-specific wrapper and fixtures.
- **NOT OBSERVED / JavaScript and Network:** Provider handlers, request bodies, authorization and durable persistence were not inspected.
- **NOT OBSERVED / Motion:** Transition timing and reduced-motion behavior were not measured.

## Accessibility

- **OBSERVATION:** Visible names, roles and keyboard expansion were captured where stated. This is not a full accessibility audit.
- **RECONSTRUCTION:** Native labelled controls and a live boundary notice support local keyboard use.

## Human Context

- **RECOMMENDATION:** Inspect this forms > creation form as a concrete service desk pattern. Preserve the difference between a visible affordance and its completed effect.

## AI Context

- **FACT:** The source product is Freshservice and the capture date is October 5, 2026.
- **RECONSTRUCTION:** Writable values and task examples are fictional.
- **RECOMMENDATION:** Keep untested provider outcomes in Needs Verification when deriving a product design.

## Cross-Component Pattern Note

- **RECOMMENDATION:** Compare the related Problem, Change, Release, Task and Alert records by shared fields and distinct lifecycle controls.

## Competitor Comparisons

- **NOT OBSERVED:** No Freshdesk behavior was inspected.

## Best Observed Approach

- **RECOMMENDATION:** Keep the collection, form and action-state boundaries explicit.

## Related Components

- **RECOMMENDATION:** Compare [[freshservice-release-empty]] for adjacent structure and evidence boundaries.

## Needs Verification

- **NOT OBSERVED / NEEDS VERIFICATION:** Validation, approval, scheduling and saved release behavior.
- **NOT OBSERVED / NEEDS VERIFICATION:** Provider responsive and assistive-technology behavior beyond the captured state.

## Sources

- **OBSERVATION:** [Authenticated Freshservice route](https://centilio.freshservice.com/a/releases/new), inspected 2026-10-05.
- **OBSERVATION:** Private DOM receipt in `Internal/scratch-2026-10/freshservice/deep-2026-10-05/` and [capture manifest](/research/freshservice/capture-manifest.json).
- **RECONSTRUCTION:** Local source and fixture in the component library.
