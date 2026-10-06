---
component: "Salesforce Quick Settings Drawer"
ui_category: "Account/Settings > Settings Navigation"
source_product: "Salesforce Service (trial workspace)"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
status: "partial"
summary: "Right-side panel groups Customization and Company links."
---

# Component: Salesforce Quick Settings Drawer

Product → Screen → Component → Action → Behavior → States → Rules → Technical Data

## Location

- **OBSERVED:** Authenticated Salesforce Lightning Service area on 2026-10-06. The catalogue slug identifies the requested Service Cloud research lane. The observed trial workspace does not establish a specific commercial edition or full Service Cloud entitlement.
- **OBSERVED:** Route pattern `/lightning/o/Case/list?filterName=AllOpenCases`. Exact authenticated origin and timestamp are retained in the private capture manifest.

## Screenshot

![Fictional local reconstruction](/research/salesforce-service-cloud/fixtures/salesforce-quick-settings.png)

- **RECONSTRUCTION:** Viewport screenshot recaptured on 2026-10-06 after detecting unreliable first-pass full-page pixels. Long content continues below the image. Original capture files and their historical receipts remain private.

- **RECONSTRUCTION:** Fictional local preview shown above. This is not a Salesforce screenshot.
- **OBSERVED:** Private source receipt `quick-settings.png` and `quick-settings.txt`, indexed by the dated evidence manifest under `Internal/scratch-2026-10/salesforce-service-cloud/provider/`. Raw captures stay outside public assets because some contain account identity.

## Structure

- **OBSERVED:** Right-side panel groups Customization and Company links. Visible destinations include Fields, Sales Stages, Users, Business Details, Fiscal Year, Billing and Purchases, Email Settings and Advanced Setup.

## Actions

Every result in this table is an observation from the current session, except an explicitly untouched action.

| Element and action | Result or boundary |
| --- | --- |
| Activate Quick Settings | Drawer appears. |
| Activate Close | Drawer closes. |

## Behavior & States

- **OBSERVED:** The recorded state and safe disclosure behavior above are supported by the named provider receipt. Keyboard activation established the captured open states. Early pointer attempts did not consistently navigate, so a click attempt alone is not counted as success.
- **RECONSTRUCTION:** The local preview uses fictional context and local state. Changing values, transferring channels, simulating a blank required field or guarding Save in the preview does not establish provider behavior.
- **NOT OBSERVED:** No settings destination or setting change was executed.

## Rules & Validation

- **OBSERVED:** Required markers and disabled states are recorded only where visible. Status is marked required in New Case. Title and URL Name are marked required in New Knowledge. Quick Text Name and Message are marked required in New Quick Text.
- **NOT OBSERVED:** No provider submit validation or durable outcome was exercised. Client and server rules must not be inferred from a required marker.
- **RECONSTRUCTION:** Local save, publish, purchase, configuration and related-record actions show a boundary notice and never perform a provider request. Local forms prevent native submission.

## Technical Data

- **OBSERVED / DOM:** Rendered accessibility tree and DOM show semantic headings, labelled controls, combobox/listbox options, table headers, modal dialogs and disabled state where described above.
- **OBSERVED / CSS sample:** The New Case form used system-ui with system fallbacks, 13px field text, 32px field and footer-button heights, 8px input radii, 20px section headings and a blue primary button `rgb(6,106,254)`. These sampled values are specific to that form, not a full product token inventory.
- **NOT OBSERVED / Network:** No provider request bodies, responses, headers, cookies, tokens or API contracts were inspected or retained. UI navigation alone does not establish a backend contract.
- **NOT OBSERVED / JavaScript:** Private application state, framework implementation, permission logic, persistence and event handlers were not inspected.
- **NOT OBSERVED / Motion:** Animation duration, reduced motion and transition timing remain unmeasured.

## Accessibility

- **OBSERVED:** Keyboard Enter opened the recorded dropdowns and drawers. Escape closed the recorded menus. Dialog cancellation returned to the corresponding collection. This is not a full accessibility audit.
- **RECONSTRUCTION:** Local examples use labelled native fields, keyboard-reachable buttons, visible focus and explicit local feedback. Native dropdown presentation differs from Salesforce custom lists.

## Human Context

- **RECOMMENDATION:** Reuse the visible structure for Centilio Care while keeping the provider evidence, fictional preview and unverified outcomes separate.

## AI Context

- **OBSERVED:** Identity is Salesforce Lightning, Service area, trial workspace. Verification date is 2026-10-06.
- **RECONSTRUCTION:** Local fixture data is invented and the implementation sends no provider requests. Public records omit account identity and tenant identifiers.
- **NEEDS VERIFICATION:** No settings destination or setting change was executed.

## Best Observed Approach

- **RECOMMENDATION:** Use the component-specific structure and actions above as a reference. Do not infer superiority, complete workflow support or production readiness.

## Needs Verification

- **NEEDS VERIFICATION:** No settings destination or setting change was executed.
- **NEEDS VERIFICATION:** Populated data, error paths, access controls, mobile layout and enduring changes require their own evidence. No absence claim is made from an uninspected destination.

## Sources

- **OBSERVED:** Authenticated Salesforce Service area inspected via Codex in-app browser on 2026-10-06. Private source receipt: `quick-settings`.
- **OBSERVED:** Public sanitized capture index: `/research/salesforce-service-cloud/capture-manifest.json`.
- **RECONSTRUCTION:** `src/previews/salesforce-service-shared/` provides the fictional React preview and source view.
