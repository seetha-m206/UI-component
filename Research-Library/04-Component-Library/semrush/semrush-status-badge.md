---
component: Semrush Status Badge
ui_category: 'Feedback > Status Badge'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Text-first semantic badge for health, attention, critical, setup, and updating states.
---

# Component: Semrush Status Badge

## Human View

Communicates compact health or processing state without relying on color alone.

## State Fixtures

Healthy, needs attention, critical, not configured, and updating.

## Technical View

- Uses a textual `role="status"` label.
- Pairs semantic copy with color and a dot marker.
- Keeps the same compact geometry across tones.

## AI Context

Treat the label as authoritative. The tone is presentation metadata, not a substitute for status text or evidence provenance.

## Evidence Boundary

- **OBSERVED:** Site Audit health, issue severity, setup, and loading language.
- **NOT OBSERVED:** A single shared internal badge API or token contract.
- **RECONSTRUCTION:** One reusable interface normalizes the observed labels.

## Sources

- [[semrush-site-audit-projects]]
- [[semrush-async-status-state]]
