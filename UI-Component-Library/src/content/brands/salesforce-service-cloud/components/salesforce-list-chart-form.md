---
component: "Salesforce New List Chart Form"
ui_category: "Forms > Chart Configuration"
source_product: "Salesforce Lightning trial workspace"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
status: "partial"
summary: "New Chart contains required Chart Name, Chart Type, Aggregate Type, Aggregate Field and Grouping Field. Horizontal Bar Chart, Count and Account Name are the visible defaults."
---

# Component: Salesforce New List Chart Form

Product → Screen → Component → Action → Behavior → States → Rules → Technical Data

## Location

- **OBSERVED:** Salesforce Lightning trial workspace, cases surface, inspected on 2026-10-06 via Codex CUA. Service and its companion Automation area were inspected. Exact commercial edition and full Service Cloud entitlement remain unverified.
- **OBSERVED:** Section entry: `/lightning/o/Case/list?filterName=AllOpenCases`. The exact resulting route and timestamp are retained in private source receipts. This is not a claim that every component shares the section entry route.

## Screenshot

![Fictional local reconstruction](/research/salesforce-service-cloud/fixtures/salesforce-list-chart-form.png)

- **RECONSTRUCTION:** The image is an isolated local example. People, assets, connector examples, dates and non-empty rows are invented. It is not a provider screenshot.
- **RECONSTRUCTION:** This is a viewport screenshot at the browser default size. Long forms and catalogues continue below the captured area. The interactive preview supports scrolling. It is not a full-page capture.
- **OBSERVED:** Private receipt `new-list-chart-dialog` includes a screenshot and rendered DOM/AX text in `Internal/scratch-2026-10/salesforce-service-cloud/screens-actions-20261006/provider/`. Original screenshots remain private because some contain account identity.

## Structure

- **OBSERVED:** New Chart contains required Chart Name, Chart Type, Aggregate Type, Aggregate Field and Grouping Field. Horizontal Bar Chart, Count and Account Name are the visible defaults.

## Actions

| Element and action | Observed result or untouched boundary |
| --- | --- |
| Open New Chart and its type, aggregate and grouping pickers | Type offers Vertical Bar Chart, Horizontal Bar Chart and Donut Chart. Aggregate Type offers Count. Grouping exposes case fields. All pickers were closed and setup canceled without choosing or saving. |

## Behavior & States

- **OBSERVED:** Only the named capture and the action result above establish live behavior. Loading placeholders were allowed to settle before being treated as populated or empty states. An attempted action alone is not success evidence.
- **RECONSTRUCTION:** Local filtering, tabs, pickers, selection, calendar navigation and disclosure controls operate on fictional in-memory state. They are implementation demonstrations, not additional provider observations.
- **NOT OBSERVED:** Aggregate Field options, selected chart behavior, validation and chart saving are unobserved.

## Rules & Validation

- **OBSERVED:** Required markers, defaults, disabled controls and visible empty-field warnings are evidence only where explicitly described above.
- **NOT OBSERVED:** Provider submission, server validation and durable outcomes were not exercised. No relationship or permission rule is inferred from appearance.
- **RECONSTRUCTION:** Save, send, enable, export, connect, run, subscribe, share and delete controls only show a local boundary notice. Forms prevent submission. There is no provider request path.

## Technical Data

- **OBSERVED / DOM:** Rendered headings, dialog roles, labelled inputs, menus, list options, tab selections, table headers and disabled states support the documented structure. Action parameter tables are UI declarations only.
- **RECONSTRUCTION / CSS:** The example uses system fonts, blue actions, white cards, light gray surfaces, thin borders, compact tables and adaptive local layout based on the captured appearance. Dimensions and mobile breakpoints are local choices.
- **NOT OBSERVED / Network:** No request bodies, responses, cookies, credentials or API contracts were inspected or retained.
- **NOT OBSERVED / JavaScript:** Private framework state, event handlers, persistence logic and permission implementation were not inspected.
- **NOT OBSERVED / Motion:** Timing, reduced-motion behavior and provider transitions are unmeasured.

## Accessibility

- **OBSERVED:** Safe controls were activated with keyboard Enter or Space and resulting DOM was inspected. This is not a full provider accessibility audit.
- **RECONSTRUCTION:** Local controls have accessible names, visible focus and native inputs. Modal examples trap focus and restore the opener on dismissal. Native select styling is not a pixel-exact recreation of provider listboxes.

## Human Context

- **RECOMMENDATION:** Reuse the observed composition as a design reference while keeping fictional interactions and untested provider outcomes separate.

## AI Context

- **OBSERVED:** Authenticated Lightning trial interface, dated 2026-10-06. Catalogue grouping follows the Salesforce Service research lane, including its companion Automation surfaces.
- **RECONSTRUCTION:** All preview identities and data are fictional and stay local.
- **NEEDS VERIFICATION:** Aggregate Field options, selected chart behavior, validation and chart saving are unobserved.

## Best Observed Approach

- **RECOMMENDATION:** Preserve the component-specific grouping and disclosure hierarchy. Evidence does not establish superiority, production readiness or complete product support.

## Needs Verification

- **NEEDS VERIFICATION:** Aggregate Field options, selected chart behavior, validation and chart saving are unobserved.
- **NEEDS VERIFICATION:** Provider mobile behavior, error paths, access control and saved state require separate evidence. A zero-row view is not proof of absence across the workspace.

## Sources

- **OBSERVED:** Private provider receipt `new-list-chart-dialog`, screen/action batch 2026-10-06.
- **OBSERVED:** Sanitized public index `/research/salesforce-service-cloud/capture-manifest.json` contains receipt hashes, not private captures.
- **RECONSTRUCTION:** `src/previews/salesforce-service-shared/SalesforceActions.tsx` and `actionCatalogue.ts` back the local example.

## Additional observed states

- **OBSERVED:** Supplementary private receipt `list-chart-type-options` in the same screen/action batch.
- **OBSERVED:** Supplementary private receipt `list-chart-aggregate-options` in the same screen/action batch.
- **OBSERVED:** Supplementary private receipt `list-chart-grouping-options` in the same screen/action batch.

## Individual control follow-up — 6 October 2026

The following controls have separate source-bounded records and local previews. Their provider outcomes remain subject to the gaps in each record.

- [Chart Type Picker](./salesforce-chart-type-picker.md)
- [Chart Aggregate Type Picker](./salesforce-chart-aggregate-picker.md)
- [Chart Grouping Field Picker](./salesforce-chart-grouping-picker.md)
