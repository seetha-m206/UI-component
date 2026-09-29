---
component: Semrush AI Visibility Shell
ui_category: "Application Layout > Two-Level Product Navigation"
source_product: Semrush
last_verified: 2026-09-29
status: complete
summary: Two-level Semrush shell combining the global product rail, AI Toolkit navigation, report header, and persistent analysis controls.
---

## Overview

- **OBSERVATION:** The authenticated app uses a dark global product rail plus a light, section-specific sidebar. AI is selected globally while the second rail groups AI Analysis, Brand Performance, and Boost & Monitor.
- **OBSERVATION:** Report pages preserve the global shell and swap the page title, controls, and report body.
- **INFERENCE:** This hierarchy reduces cross-product navigation cost without flattening a large suite into one menu.

## Structure

Global rail → AI Toolkit sidebar → report header → analysis controls → report body. The reconstructed preview covers Visibility Overview, Competitor Research, Prompt Research, and Brand Performance states.

## Behavior and Actions

| Element                  | Action | Result                                                |
| ------------------------ | ------ | ----------------------------------------------------- |
| AI Toolkit item          | Click  | Replaces the report body and updates the active state |
| Domain control           | Edit   | Changes the analysis target in the real product       |
| Region/platform controls | Select | Refines the active report                             |
| Export PDF               | Click  | Starts report export in supported reports             |

## States and Rules

- Active global area is distinct from active AI page.
- Secondary navigation groups are persistent.
- The reconstruction performs no navigation or network request.
- Mobile behavior was not directly observed. The preview collapses the secondary sidebar as an explicit responsive approximation.

## Technical Data

- **OBSERVATION:** Captured through the authenticated Semrush web application in the Codex in-app browser.
- **NOT OBSERVED:** Internal component framework, private API contracts, and exact responsive breakpoints.
- **RECOMMENDATION:** Seek should support this two-level suite navigation when several research tools share one workspace.

## Lessons

Keep product-area navigation, feature navigation, and report-level filters as separate layers. This makes orientation predictable while allowing each report to specialize.

## Sources

- Authenticated live application observation, Semrush AI Toolkit, 2026-09-29.
