---
component: Semrush Report Recovery State
ui_category: 'Feedback & Status > Recoverable Report Error'
source_product: Semrush
last_verified: 2026-09-30
evidence_state: mixed_observed_reconstructed
status: complete
summary: Centered recoverable report error with support contact context and Try again action.
---

# Component: Semrush Report Recovery State

## Human View

Centered recoverable report error with support contact context and Try again action.

## State Fixtures

Observed error, local reloading, and synthetic restored state.

## Technical View

The report body is replaced by an error illustration, concise heading, recovery guidance, support contact, and one retry action while the surrounding shell remains intact.

## AI Context

Preserve the error as a failed data state. Do not reuse stale metrics or claim retry success unless the report visibly recovers.

## Evidence Boundary

- **OBSERVED:** Something went wrong copy, reload guidance, provider feedback email, and Try again control after the report failed.
- **RECONSTRUCTION:** Local loading transition and synthetic restored state.
- **NOT OBSERVED:** Root cause, response code, retry request, retry success, telemetry, or escalation workflow.

## Sources

- Authenticated Semrush Domain Overview entry and report screens, 2026-09-30.
- [[semrush-domain-overview-report]]
