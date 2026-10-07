---
component: "Hostinger Agent and AI Memory"
ui_category: "AI Assistance > Agent Panel"
source_product: "Hostinger Website Builder"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Global Agent onboarding introduces skills, schedules, and file creation while AI memory is handled as a separate explicit consent with concrete continuity benefits."
---

# Hostinger Agent and AI Memory

## Structure

- **OBSERVED:** Agent opens in a right-side overlay with menu, full-page, close, and start controls while preserving route context.
- **OBSERVED:** The introduction highlights Skills, Scheduled jobs, and File creation before chat begins.
- **OBSERVED:** AI memory is a dedicated profile screen with privacy context, one consent action, and benefits for project continuity, setup-aware help, and cross-chat continuation.

## Behavior & States

- **OBSERVED:** No Agent prompt, attachment, task, schedule, or file request was submitted. AI memory remained off.
- **NEEDS VERIFICATION:** Consent confirmation, memory inventory and deletion, tool execution, scheduled jobs, generated files, premium limits, model behavior, and failures.

## Reconstruction Guidance

- **RECONSTRUCTION:** Introduce capabilities before the composer and keep memory as a separate, explicit consent with a privacy link.

## Evidence

- **OBSERVED:** Authenticated Hostinger Agent and AI memory surfaces, inspected 2026-10-07.
## Preview & Fixtures

- **RECONSTRUCTION:** Registered preview id `hostinger-agent-and-ai-memory` uses fictional local data and sends no Hostinger request.
- `memory-prompt` — observed or observed-structure starting state.
- `closed` — observed or observed-structure starting state.
- **OBSERVED:** Component-to-provider evidence and state provenance are indexed in `Internal/scratch-2026-10/hostinger/component-evidence-index.json`.
- **NEEDS VERIFICATION:** Fixture rendering proves the local reconstruction only. It does not prove provider-side results, persistence, validation, authorization, or visual pixel fidelity.
