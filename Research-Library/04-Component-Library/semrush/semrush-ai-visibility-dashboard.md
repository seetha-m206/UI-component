---
component: Semrush AI Visibility Dashboard
ui_category: "Analytics & Reporting > AI Visibility Dashboard"
source_product: Semrush
last_verified: 2026-09-29
evidence_state: mixed_observed_reconstructed
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

## Interaction Evidence — authenticated screen review

| Reusable component | States and controls | Tested interaction | Observed result | Evidence |
|---|---|---|---|---|
| Report filter bar | Country pills, AI-platform selector, update-date selector | Switched Worldwide to US, then restored Worldwide | URL added `db=us`; the report changed to a country-specific no-presence state, then restored the populated report | Browser screenshot and accessibility state, 2026-09-29 |
| Trend metric switcher | Main Metrics, Monthly Audience, AI Visibility | Switched Monthly Audience and AI Visibility | KPI labels and chart series changed without navigation | Browser screenshots and checked radio state |
| Reporting range tabs | 1M, 6M, All time | Switched AI Visibility to 1M | Tabs entered a disabled loading state, then the chart resolved to a designed no-data state | Accessibility loading nodes followed by empty status |
| Distribution by LLM | Mentions and Cited Pages | Switched to Cited Pages | ChatGPT changed to a full-share bar and cited-page count while unavailable platforms remained `n/a` | Checked radio state and screenshot |
| Recommendation carousel | Expanded and collapsed | Collapsed the section | Recommendation cards were removed and control changed from Collapse to Expand | `aria-expanded` changed from true to false |
| How It Works drawer | Closed, open, accordion collapsed/expanded | Opened drawer and expanded the first item | Right-side drawer appeared with five explanation rows; selected row revealed explanatory copy | Dialog accessibility tree and screenshots |
| Topics / prompts table | Topics and Prompts | Switched to Prompts | URL added `table=prompts`; skeleton rows resolved to two prompt rows with response, citation, source, and action cells | Loading rows and resolved grid evidence |
| Full-response modal | Loading and resolved | Opened View full response | Modal first showed a loader, then prompt metadata, mentioned-brand tags, answer text, and grouped sources | Dialog accessibility tree and screenshot |
| Topics & Sources tabs | Performing Topics, Topic Opportunities, Cited Sources, Source Opportunities, Cited Pages | Switched to Cited Pages | URL added `preset=brandedSources`; table changed to URL and prompt-count columns | Checked radio and grid structure |

## Needs verification

- AI-platform and update-date dropdown option behavior was not changed.
- UK, DE, and overflow country states were not tested.
- 6M range behavior was not tested.
- Topic Opportunities, Cited Sources, and Source Opportunities data states were not opened in this pass.
- Cited-page row expansion did not produce a visible detail state and needs verification.
- Export PDF, table Export, Send feedback, Monitor, Create Content, Find Contacts, Analyze, recommendation CTAs, and brand-performance setup were intentionally not activated.
- Network endpoints, error responses, retry behavior, quota use, and permission failures need verification.
- No destructive, publishing, submission, creation, or account-setting action was performed.

## States and Rules

- Empty data is localized to the affected card.
- Selected tabs use a strong underline and color state.
- Report-level empty states can replace the primary analytics region while preserving navigation and recommendations.
- Loading is represented by disabled tabs plus skeleton content before the next state resolves.
- Read-only evidence opens in a modal with prompt context on the left and grouped sources on the right.
- The reconstructed fixture uses synthetic values and local state only.
- The reconstruction includes the captured recommendation cards, all five topic/source table views, prompt-table mode, the response modal, How It Works drawer, and filter-driven empty states with clearly synthetic rows.

## Technical Data

- **OBSERVED:** Country and table changes are represented in query parameters (`db`, `table`, and `preset`).
- **OBSERVED:** Range and table changes expose intermediate loading/skeleton accessibility states.
- **NOT OBSERVED:** Private network endpoints, cache behavior, charting library, and failure payloads.
- **INFERENCE:** Filter changes trigger asynchronous report refreshes in production.
- **RECOMMENDATION:** Seek should preserve partial report usefulness when one dimension has no data.

## Lessons

A broad visibility score needs adjacent diagnostic views. Pair the headline score with trends, channel distribution, and actionable next steps.

## Sources

- Authenticated live application observation, Semrush Visibility Overview for a user-entered domain, 2026-09-29.
