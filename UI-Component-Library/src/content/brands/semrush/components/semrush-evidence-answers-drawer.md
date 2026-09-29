---
component: Semrush Evidence Answers Drawer
ui_category: 'Overlays > Evidence Drawer'
source_product: Semrush
last_verified: 2026-09-29
status: complete
summary: Answer evidence drawer with scope selection, sources, brand mentions, paging, and loading state.
---

## Observed structure

Show answers trigger → right-side modal drawer → heading and count → brand scope → question and answer → citations → mentioned brands → collection date → previous/next.

## Behaviors and states

- The live drawer first shows loading placeholders, then resolved answer evidence.
- Scope defaults to the owned brand. Previous is disabled on the first answer and Next advances within the result set.
- Close returns focus to the originating report surface.

## Evidence boundary

Observed by opening a read-only Show answers interaction in Perception. The reconstruction uses fictional questions, answers, domains, and brands.
