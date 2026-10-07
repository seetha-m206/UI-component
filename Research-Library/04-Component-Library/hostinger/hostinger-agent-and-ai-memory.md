---
component: "Hostinger Agent and AI Memory"
ui_category: "AI Assistance > Agent Panel"
source_product: "Hostinger Website Builder"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Hostinger Agent and AI Memory

## Location

- **OBSERVED:** Global Agent panel and profile AI memory screen in authenticated hPanel.

## Agent Panel

- **OBSERVED:** The Agent opens as a right-side overlay that preserves the current route behind it.
- **OBSERVED:** Its introductory state promotes one chat for free help and premium work, with capability rows for Skills, Scheduled jobs, and File creation.
- **OBSERVED:** Panel controls include a menu, full-page mode, close, and `Start chatting`.
- **OBSERVED:** No chat was started and no prompt, attachment, task, schedule, or file request was submitted.

## AI Memory

- **OBSERVED:** The AI memory page explains that Agent can remember onboarding, conversations, and activity across Hostinger.
- **OBSERVED:** The off-state card pairs a privacy explanation with one `Turn on memory` action and three benefits: project continuity, setup-aware help, and continuation across Agent and human support.
- **OBSERVED:** Closing the introductory Agent panel exposed an additional memory-promotion state in accessibility output, with `Turn on AI memory` and `Maybe later` actions.
- **NEEDS VERIFICATION:** Consent confirmation, remembered-data inventory, edit/delete controls, retention, cross-surface behavior, scheduled-job creation, file output, and premium capability boundaries.

## Technical Data

- **OBSERVED / DOM:** The Agent is labelled as a popup with expanded state. The panel exposes buttons for menu, full page, close, and start. AI memory is a dedicated route under `/profile/ai-memory`.
- **NEEDS VERIFICATION:** Model selection, tool execution, streaming, retries, context sources, data export, and permission enforcement.

## Reconstruction Guidance

- **RECONSTRUCTION:** Introduce Agent capabilities before opening the composer. Keep memory as a separate explicit consent with concrete benefits and an accessible privacy-policy link.

## Sources

- **OBSERVED:** Authenticated Hostinger Agent and AI memory surfaces, inspected 2026-10-07.
## Preview & Fixtures

- **RECONSTRUCTION:** Registered preview id `hostinger-agent-and-ai-memory` uses fictional local data and sends no Hostinger request.
- `memory-prompt` — observed or observed-structure starting state.
- `closed` — observed or observed-structure starting state.
- **OBSERVED:** Component-to-provider evidence and state provenance are indexed in `Internal/scratch-2026-10/hostinger/component-evidence-index.json`.
- **NEEDS VERIFICATION:** Fixture rendering proves the local reconstruction only. It does not prove provider-side results, persistence, validation, authorization, or visual pixel fidelity.
