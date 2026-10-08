---
component: 'LiveChat Total Chats Report'
ui_category: 'Analytics > Time Series Report'
source_product: 'Text LiveChat'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Detailed chat-volume report with date filter, benchmark boundary, table, heatmap and CSV exports.'
---

# Component: LiveChat Total Chats Report

## Source

- Product: Text LiveChat
- Authenticated route: `/reports/total-chats`
- Observation date: 2026-10-08
- Evidence class: authenticated read-only UI observation

## OBSERVED

Detailed chat-volume report with date filter, benchmark boundary, table, heatmap and CSV exports.

### Anatomy

Add-filter action; date chip; total metric; disabled benchmark; seven-day table; breakdown and heatmap export controls; Reports API link.

### State

All seven daily values and the total were zero.

## RECONSTRUCTION

The UI library preview recreates the observed hierarchy and interaction boundaries with fictional names, addresses, conversation content and metrics. Every preview action changes local React state only.

## NOT OBSERVED

CSV export, filters, benchmarks, saved views and Reports API access were not exercised.

## NEEDS VERIFICATION

Provider persistence, permission failures, responsive behavior, keyboard behavior, screen-reader announcements and post-action consequences require separate direct evidence.

## Reuse guidance

Reuse the structure and state hierarchy. Keep consequential controls visually distinct and require explicit product authorization before connecting them to provider mutations.

## Action evidence

- Action ledger: `Internal/scratch-2026-10/livechat/action-evidence-ledger.json`
- Fixture receipt: `Internal/scratch-2026-10/livechat/fixture-action-evidence.json`
- Provider and fixture evidence are separate. A local fixture action is not provider-behavior proof.

| Action | Provider evidence | Fixture evidence |
|---|---|---|
| Open observed route | provider_read_only_exercised: Authenticated route or supporting routes reached and the documented visible state was captured. | local_fixture_state_rendered: The target fixture rendered the captured state. No local interactive control was claimed for this action. |
| Save view | provider_control_presence_only_consequential: Control presence was observed. Provider consequence was not exercised. | local_fixture_state_rendered: The target fixture rendered the captured state. No local interactive control was claimed for this action. |
| Add filter | provider_control_presence_only_consequential: Control presence was observed. Provider consequence was not exercised. | local_fixture_state_rendered: The target fixture rendered the captured state. No local interactive control was claimed for this action. |
| Export CSV | provider_control_presence_only_consequential: Control presence was observed. Provider consequence was not exercised. | local_fixture_clicked: Local state changed. |

### Action boundary

Provider actions marked presence-only remain `NOT OBSERVED` at the consequence level. No provider write, save, export, install, upload, invitation, purchase, authorization or account change was performed.
