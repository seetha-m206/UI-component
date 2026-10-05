---
component: "Freshservice Admin SLA Policies"
ui_category: "Customer Support > Helpdesk > Admin"
source_product: "Freshservice"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
status: "complete"
---

# Component: Freshservice Admin SLA Policies

Product → Screen → Component → Action → Behavior → States → Rules → Technical Data → Reference

## Location

- **OBSERVATION:** Authenticated Freshservice screen inspected on 2026-10-05. This is a Freshservice reference for Centilio Care, not a Freshdesk observation.
- **OBSERVATION:** Source route: [Freshservice Admin SLA Policies](https://centilio.freshservice.com/ws/2/admin/sla_policies).
- **RECONSTRUCTION:** Local React state using fictional content. No provider requests or durable changes.

## Screenshot

![Fictional local preview](/research/freshservice/fixtures/freshservice-admin-sla.png)

- **OBSERVATION:** Native source screenshot and DOM receipt were captured privately at `Internal/scratch-2026-10/freshservice/deep-2026-10-05/admin-sla.png` and `admin-sla.dom.txt`. Their hashes are indexed in the capture manifest. Source material is kept out of the public catalogue because account-specific information may be visible.
- **RECONSTRUCTION:** The screenshot above is a local fictional fixture, not a source screenshot.

## Structure

- **OBSERVATION:** The directory explains SLA and OLA and shows the Default SLA Policy with an enabled switch.

## Actions

| Action | Result or boundary |
| --- | --- |
| Observed safe action | The observed switch state was recorded. It was not toggled. |
| Local inputs, selections and disclosures | Update only the reconstruction state |
| Save, create, activate, apply, upload, delete or other consequential action | Boundary notice or disabled control. No provider request |

## Behavior & States

- **OBSERVATION:** The directory explains SLA and OLA and shows the Default SLA Policy with an enabled switch.
- **RECONSTRUCTION:** The fixture reproduces the bounded visible structure and safe local state changes.
- **NOT OBSERVED:** Provider completion, validation responses, permissions, persistence and downstream effects were not exercised.

## Rules & Validation

- **RECONSTRUCTION:** Consequential controls are guarded. No provider create, save, activation, import, upload or filter application occurs.
- **RECOMMENDATION:** Keep source observation, local behavior and unverified provider execution visibly distinct.

## Technical Data

- **OBSERVATION / DOM:** Visible labels, roles, options and selected states were captured from the authenticated UI.
- **NOT OBSERVED / JavaScript and Network:** Private handlers, payload contracts, authorization and persistence were not inspected.
- **RECONSTRUCTION:** Shared implementation is `src/previews/freshservice-shared/FreshserviceAdminKnowledge.tsx` with component-specific wrapper and fixtures.
- **NOT OBSERVED / Motion:** Timing and reduced-motion behavior were not measured.

## Accessibility

- **OBSERVATION:** Visible control names and roles were captured. This is not a full accessibility audit.
- **RECONSTRUCTION:** Native labelled controls, keyboard-operable local state and a live boundary notice are provided.

## Human Context

- **RECOMMENDATION:** Use this record to inspect the admin sla policies pattern while preserving action and evidence boundaries.

## AI Context

- **FACT:** Product identity is Freshservice, inspected on October 5, 2026.
- **RECONSTRUCTION:** People, inputs and writable values in the fixture are fictional.
- **RECOMMENDATION:** Do not infer provider action success from the interactive local fixture.

## Cross-Component Pattern Note

- **RECOMMENDATION:** Pair with the related Freshservice screen records. Treat shared visual patterns as observations and action results as separate evidence.

## Competitor Comparisons

- **NOT OBSERVED:** No Freshdesk behavior was inspected and no comparative ranking is established.

## Best Observed Approach

- **RECOMMENDATION:** Preserve the clear grouping of controls, progressive disclosure and explicit state labels shown in this source pattern.

## Related Components

- **RECOMMENDATION:** Compare [[freshservice-admin-business-hours]] for adjacent structure and evidence boundaries.

## Needs Verification

- **NOT OBSERVED / NEEDS VERIFICATION:** Provider action completion, error states, permission variants, responsive behavior and assistive-technology behavior remain unverified.

## Sources

- **OBSERVATION:** [Authenticated Freshservice source](https://centilio.freshservice.com/ws/2/admin/sla_policies), inspected 2026-10-05.
- **OBSERVATION:** Private screenshot and DOM receipt indexed in the [capture manifest](/research/freshservice/capture-manifest.json).
- **RECONSTRUCTION:** Local preview source and fixtures in this library.
