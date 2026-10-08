---
component: 'Gorgias AI Agent Setup Boundary'
ui_category: 'AI Assistance > Setup Prerequisite'
source_product: 'Gorgias'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'AI Agent value proposition with disabled setup and connected-store prerequisite.'
---

# Component: Gorgias AI Agent Setup Boundary

## Location

- **OBSERVATION:** AI Agent workspace at `/app/ai-agent`.

## Screenshot

![Fictional local preview](/research/gorgias/fixtures/gorgias-ai-agent-setup-boundary.png)

## Structure

- **OBSERVATION:** Hero states that AI Agent can be trained on policy, catalogue and tone, previewed before launch and coached by Gaia.
- **OBSERVATION:** Start setup was disabled because a connected commerce store was required.

## Actions

| Action | Result or boundary |
| --- | --- |
| Start setup | Disabled in the observed state |
| Open connected-store prerequisite | Visible link only. No store connected |

## Behavior & States

- **OBSERVATION:** The prerequisite is presented inline below the disabled primary action.
- **RECONSTRUCTION:** The local fixture keeps setup disabled permanently.
- **NEEDS VERIFICATION:** Eligible setup, training, testing, coaching and activation flows.

## Technical Data

- **OBSERVATION / DOM:** Disabled button state and prerequisite link were semantic.

## Evidence Boundary

- **NOT OBSERVED:** No AI training, preview, prompt, commerce connection or activation occurred.

## Sources

- **OBSERVATION:** Authenticated Gorgias runtime, 2026-10-08.
