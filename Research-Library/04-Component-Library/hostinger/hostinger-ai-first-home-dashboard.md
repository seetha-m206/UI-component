---
component: "Hostinger AI-First Home Dashboard"
ui_category: "Application Layout > Dashboard"
source_product: "Hostinger Website Builder"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Hostinger AI-First Home Dashboard

## Location

- **OBSERVED:** Authenticated hPanel Home route on an account with no website plan or created site.

## Structure

- **OBSERVED:** The page leads with a personalized heading and a large Agent prompt area rather than a conventional resource grid.
- **OBSERVED:** Prompt context is selected through a `For you` chip and a `4 more` disclosure.
- **OBSERVED:** A horizontal recommendation carousel promotes website creation and AI-agent growth workflows.
- **OBSERVED:** A to-do section surfaces account setup work with unread status, a primary action, and a more-actions menu.

## Behavior & States

- **OBSERVED:** The prompt accepts text and attachments and exposes a send control. No prompt or file was submitted.
- **OBSERVED:** Recommendation cards use contextual `Get started` actions. The website-creation entry later resolved to a plan-gated flow.
- **OBSERVED:** The to-do item asked for a phone number and explained service-update, recovery, and WhatsApp-Agent benefits. No phone number was entered.
- **NEEDS VERIFICATION:** Prompt response states, attachment validation, Agent errors, carousel wrap behavior, and completed to-do states.

## Technical Data

- **OBSERVED / DOM:** The prompt rendered as a settable text area with attachment and send buttons. Recommendation navigation exposed previous and next controls plus slide position.
- **NEEDS VERIFICATION:** Message APIs, upload limits, streaming behavior, persistence, and analytics events.

## Reconstruction Guidance

- **RECONSTRUCTION:** For a fictional local fixture, lead with a goal prompt, then show account tasks and recommendations. Do not imitate the real account name, phone number, or other private values.

## Sources

- **OBSERVED:** Authenticated Hostinger Home route, inspected 2026-10-07.
## Preview & Fixtures

- **RECONSTRUCTION:** Registered preview id `hostinger-ai-first-home-dashboard` uses fictional local data and sends no Hostinger request.
- `default` — observed or observed-structure starting state.
- **OBSERVED:** Component-to-provider evidence and state provenance are indexed in `Internal/scratch-2026-10/hostinger/component-evidence-index.json`.
- **NEEDS VERIFICATION:** Fixture rendering proves the local reconstruction only. It does not prove provider-side results, persistence, validation, authorization, or visual pixel fidelity.
