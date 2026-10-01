# OtterlyAI extraction batch: populated report revisit

**Source:** Authenticated OtterlyAI report observed 2026-10-01 in the Codex in-app browser. **Scope:** Interface anatomy and behavior, not account-performance analysis. No live account prompt text, brand names, citation URLs, or metric values are recorded here.

## Screen-level compositions

| Screen | Boundary and state | Individual patterns used | Evidence gap |
| --- | --- | --- | --- |
| Brand Report overview | Shared date, tag, engine, and country scope over several cards, charts, and tables. Coverage, ranking, prompt summary, visibility index, citation changes, domain coverage, and domain sources appeared together. | Report filters, coverage and ranking, top prompts summary, visibility index, citation changes, source categories | Cross-module refresh timing and complete filter behavior |
| Prompts report | Header and CSV action, common scope bar, searchable multi-metric table, row detail overlay, pagination. | Report filters, prompt report table, prompt detail panel | CSV payload and live search semantics |
| Citations report | Common scope bar, pending winners/losers above a populated all-cited-URLs table. | Citation trend status, citations table | Completed trend panels and download payload |
| Recommendations | Suggested tab and controls with analysis-in-progress state. To-Do and Archive disabled. | Recommendations processing | Completed recommendations after observation window |
| Agent analytics | Connection entry state. | Agent analytics gate | Connected-source result, requiring separate authorization |

## Independent components in this batch

| Record | Reuse boundary | Observed behavior | Local representation |
| --- | --- | --- | --- |
| Top prompts summary | Ranked short list plus full-report action | Visible on overview | Fictional prompts and local-only action |
| Domain source categories | Category distribution and linked domain table | Selecting a category filtered the table, clearing restored mixed categories | Reversible fictional filter |
| Citation trend status | Winners and losers freshness gate | Pending panels coexisted with a populated citations table | Pending state only |

**Volatility note:** Source-category percentages changed between browser visits within the nominal report window. This is an observation about displayed state, not evidence for a refresh interval or calculation rule.

## Reuse decision

The screen records preserve navigation, information order, and shared scope. Individual records preserve a control or data presentation pattern that can be evaluated independently. A screen's loaded state does not imply every module is fresh, and a preview's fictional result does not prove a provider operation.
