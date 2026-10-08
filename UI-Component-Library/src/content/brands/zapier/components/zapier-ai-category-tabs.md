---
component: "Zapier AI Category Tabs"
ui_category: "AI Assistance > Action Category Navigation"
source_product: "Zapier"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "complete"
summary: "Authenticated read-only Zapier component with a fictional local reconstruction and provider consequences left unverified."
---

# Component: Zapier AI Category Tabs

## Location

- **OBSERVATION:** Authenticated Zapier route `/editor/sandbox/draft/2/setup` was inspected on 2026-10-08.
- **RECONSTRUCTION:** The local preview uses fictional labels and values and cannot contact Zapier.

## Screenshot

![Fictional local preview](/research/zapier/fixtures/zapier-ai-category-tabs.png)

## Structure

- **OBSERVATION:** AI action picker tabs for All, Popular, AI by Zapier, Human in the Loop, Productivity and Chatbots & Agents.

## Actions

| Action | Observed result or boundary |
| --- | --- |
| Switch categories | Read-only disclosure or local fixture state only |
| Inspect available app and quick-action choices | Read-only disclosure or local fixture state only |
| Return to the unchanged draft | Read-only disclosure or local fixture state only |

## Behavior & States

- **OBSERVATION:** The named screen, disclosure, selected tab, disabled control and empty state were recorded only when visible.
- **RECONSTRUCTION:** Preview controls change fictional local React state or show a boundary notice.
- **NOT OBSERVED:** No AI provider, action or prompt was selected.

## Rules & Validation

- **OBSERVATION:** Disabled controls and unavailable actions remain visibly disabled in the documented state.
- **RECONSTRUCTION:** Consequential controls cannot contact Zapier from the preview.

## Technical Data

- **OBSERVATION / DOM:** The inspected state exposed semantic headings, buttons, links, tabs, inputs, dialogs, lists or status text as applicable.
- **OBSERVATION / ROUTE:** Account identifiers, query identifiers and opaque draft identifiers are intentionally removed.
- **RECONSTRUCTION:** Shared renderer is `src/previews/zapier-shared/ZapierPreview.tsx`.
- **NOT OBSERVED / NETWORK:** Provider request bodies, response contracts, persistence and connected-app consequences were not inspected.

## Accessibility

- **OBSERVATION:** Visible controls exposed names and disabled, selected, expanded or checked states where applicable.
- **RECONSTRUCTION:** The fictional preview uses native labelled controls and live status messages.

## Evidence Boundary

- **NOT OBSERVED:** No AI provider, action or prompt was selected.
- **NEEDS VERIFICATION:** Provider responsive behavior, permission variants and completed workflow consequences remain open.

## Sources

- **OBSERVATION:** Authenticated, read-only Zapier inspection on 2026-10-08.
- **RECONSTRUCTION:** Fictional local fixture in this library.
