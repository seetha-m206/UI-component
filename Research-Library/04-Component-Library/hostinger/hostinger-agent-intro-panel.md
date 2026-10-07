---
component: "Hostinger Agent Intro Panel"
ui_category: "AI Assistance > Agent Panel"
source_product: "Hostinger Website Builder"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Hostinger Agent Intro Panel

## Location

- **OBSERVED:** Global Agent launcher over the authenticated Home route.

## Screenshot

- **NEEDS VERIFICATION:** The open panel was visually inspected in session, but no durable provider screenshot was exported.

## Structure

- **OBSERVED:** A right-side `role=dialog` panel labelled `Hostinger Agent` preserved the route behind it. Its header exposed Menu, Full page, and Close controls.
- **OBSERVED:** The inspected intro state promoted AI memory, listed three benefits, linked the privacy policy, and offered `Turn on AI memory` and `Maybe later`.
- **OBSERVED / CSS SAMPLE:** The panel measured 392 px wide with a 24 px radius and white background.

## Actions

- **OBSERVED:** Open and Close were exercised. No prompt, attachment, consent, task, or schedule was submitted.
- **NEEDS VERIFICATION:** Full-page transition, composer states, streaming, attachments, scheduled jobs, and file outputs.

## Technical Data

- **OBSERVED / DOM:** Container id `chatbot-float-box`, dialog role, accessible label `Hostinger Agent`, and explicit header buttons.
- **NEEDS VERIFICATION:** Model, context retrieval, tool execution, data retention, retries, and permission enforcement.

## Reconstruction Guidance

- **RECONSTRUCTION:** Use a persistent side panel with explicit surface controls and separate consent before memory is enabled.

## Sources

- **OBSERVED:** Authenticated Hostinger hPanel and `Internal/scratch-2026-10/hostinger/individual-component-evidence.json`.
## Preview & Fixtures

- **RECONSTRUCTION:** Registered preview id `hostinger-agent-intro-panel` uses fictional local data and sends no Hostinger request.
- `memory` — observed or observed-structure starting state.
- `closed` — observed or observed-structure starting state.
- **OBSERVED:** Component-to-provider evidence and state provenance are indexed in `Internal/scratch-2026-10/hostinger/component-evidence-index.json`.
- **NEEDS VERIFICATION:** Fixture rendering proves the local reconstruction only. It does not prove provider-side results, persistence, validation, authorization, or visual pixel fidelity.
