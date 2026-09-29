---
component: Semrush AI Visibility Dashboard
ui_category: "Analytics & Reporting > AI Visibility Dashboard"
source_product: Semrush
last_verified: 2026-09-29
status: complete
summary: Filterable AI visibility report with a gauge, trend tabs, KPI summaries, LLM distribution, empty states, recommendations, and topic tables.
---

## Overview

- **OBSERVATION:** The authenticated overview combines region, AI-platform, and date controls with an AI Visibility gauge, trend card, LLM distribution, country coverage, recommendations, and topic/source tabs.
- **OBSERVATION:** The trend card switches among Main Metrics, Monthly Audience, and AI Visibility, with 1M, 6M, and All time ranges.
- **OBSERVATION:** Mentions by Country can render a designed empty state while other report cards remain populated.

## Structure

Report header → filter bar → score and trend cards → LLM/country cards → recommendation carousel → topic/source table.

## Behavior and Actions

Metric tabs replace the trend summary. Range controls alter the reporting horizon. Topic/source tabs change the table dimension. Export is report-wide.

## States and Rules

- Empty data is localized to the affected card.
- Selected tabs use a strong underline and color state.
- The reconstructed fixture uses synthetic values and local state only.
- The recommendation carousel and full data table are documented but outside this initial preview slice.

## Technical Data

- **NOT OBSERVED:** Private network endpoints, cache behavior, and charting library.
- **INFERENCE:** Filter changes likely trigger asynchronous report refreshes in production.
- **RECOMMENDATION:** Seek should preserve partial report usefulness when one dimension has no data.

## Lessons

A broad visibility score needs adjacent diagnostic views. Pair the headline score with trends, channel distribution, and actionable next steps.

## Sources

- Authenticated live application observation, Semrush Visibility Overview for a user-entered domain, 2026-09-29.
