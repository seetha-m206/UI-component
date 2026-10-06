---
component: "Salesforce Service Navigation"
ui_category: "Navigation > Module Navigation"
source_product: "Salesforce Service (trial workspace)"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
status: "partial"
summary: "Cases, Contacts, Accounts, Quick Text, Messaging Sessions, Analytics and Knowledge tabs with per-object dropdown triggers.."
---

# Component: Salesforce Service Navigation

Product → Screen → Component → Action → Behavior → States → Rules → Technical Data

## Location

- **OBSERVED:** Authenticated Salesforce Lightning Service area on 2026-10-06. The catalogue slug identifies the requested Service Cloud research lane. The observed trial workspace does not establish a specific commercial edition or full Service Cloud entitlement.
- **OBSERVED:** Route pattern `/lightning/o/Case/list?filterName=AllOpenCases`. Exact authenticated origin and timestamp are retained in the private capture manifest.

## Screenshot

![Fictional local reconstruction](/research/salesforce-service-cloud/fixtures/salesforce-service-navigation.png)

- **RECONSTRUCTION:** Viewport screenshot recaptured on 2026-10-06 after detecting unreliable first-pass full-page pixels. Long content continues below the image. Original capture files and their historical receipts remain private.

- **RECONSTRUCTION:** Fictional local preview shown above. This is not a Salesforce screenshot.
- **OBSERVED:** Private source receipt `cases-baseline.png` and `cases-baseline.txt`, indexed by the dated evidence manifest under `Internal/scratch-2026-10/salesforce-service-cloud/provider/`. Raw captures stay outside public assets because some contain account identity.

## Structure

- **OBSERVED:** Cases, Contacts, Accounts, Quick Text, Messaging Sessions, Analytics and Knowledge tabs with per-object dropdown triggers.

## Actions

Every result in this table is an observation from the current session, except an explicitly untouched action.

| Element and action | Result or boundary |
| --- | --- |
| Navigate to Knowledge | Recently Viewed Knowledge list appears. |
| Navigate to Quick Text | Recent Quick Text library appears. |

## Behavior & States

- **OBSERVED:** The recorded state and safe disclosure behavior above are supported by the named provider receipt. Keyboard activation established the captured open states. Early pointer attempts did not consistently navigate, so a click attempt alone is not counted as success.
- **RECONSTRUCTION:** The local preview uses fictional context and local state. Changing values, transferring channels, simulating a blank required field or guarding Save in the preview does not establish provider behavior.
- **NOT OBSERVED:** Tab personalization, populated messaging conversations and persisted Analytics outcomes remain unobserved. Messaging and Analytics entry screens are documented in the continuation records.

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
- **NEEDS VERIFICATION:** Tab personalization, populated messaging conversations and persisted Analytics outcomes remain unobserved. Messaging and Analytics entry screens are documented in the continuation records.

## Best Observed Approach

- **RECOMMENDATION:** Use the component-specific structure and actions above as a reference. Do not infer superiority, complete workflow support or production readiness.

## Needs Verification

- **NEEDS VERIFICATION:** Tab personalization, populated messaging conversations and persisted Analytics outcomes remain unobserved. Messaging and Analytics entry screens are documented in the continuation records.
- **NEEDS VERIFICATION:** Populated data, error paths, access controls, mobile layout and enduring changes require their own evidence. No absence claim is made from an uninspected destination.

## Continuation observed 2026-10-06

- **OBSERVED:** Messaging Sessions, Analytics, Contacts and Accounts were inspected in the continuation. See [Messaging Sessions](salesforce-messaging-session-list.md), [Analytics Workspace](salesforce-analytics-workspace.md), [Contacts](salesforce-contacts-empty-table.md) and [Accounts](salesforce-accounts-empty-table.md). Original first-pass screenshots are retained privately for provenance. Public images were recaptured as described above.

## Sources

- **OBSERVED:** Authenticated Salesforce Service area inspected via Codex in-app browser on 2026-10-06. Private source receipt: `cases-baseline`.
- **OBSERVED:** Public sanitized capture index: `/research/salesforce-service-cloud/capture-manifest.json`.
- **RECONSTRUCTION:** `src/previews/salesforce-service-shared/` provides the fictional React preview and source view.

## Later screen and action observations

- **OBSERVED:** The screen/action pass on 2026-10-06 inspected the following disclosures. Earlier unobserved statements describe the earlier capture boundary. Provider saved outcomes remain unverified.
- [service navigation editor](salesforce-service-navigation-editor.md)
- [navigation item catalogue](salesforce-navigation-item-catalogue.md)
