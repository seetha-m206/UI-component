---
component: "Zendesk Knowledge Themes"
ui_category: "Account and Settings > Theme Workbench"
source_product: "Zendesk"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
summary: "Customize design opened the Themes workbench with Live theme and Theme library sections."
---

## Location

- **OBSERVATION:** [Authenticated Zendesk screen](https://centiliohelp.zendesk.com/theming/workbench), inspected 2026-10-05.
- **RECOMMENDATION:** Customize design opened the Themes workbench with Live theme and Theme library sections.

## Structure

- **OBSERVATION:** Add theme and a search field were visible above the two sections.
- **RECONSTRUCTION:** The local React preview uses fictional people, tickets, content and theme labels. Its responsive layout is illustrative.

## Actions and States

- **OBSERVATION:** Only visible read-only navigation and menu or drawer opening were used for this record.
- **NOT OBSERVED:** Adding, buying, importing, customizing or publishing a theme was not exercised. The local theme card is illustrative.
- **RECONSTRUCTION:** Local controls update local state only. Consequential entries show a local notice and do not call Zendesk.

## Technical Data

- **OBSERVATION:** Private accessibility snapshots and screenshots are stored in `Internal/scratch-2026-10/zendesk/evidence/screen-audit-2026-10-05/` with SHA-256 hashes in `source-manifest.json`.
- **RECONSTRUCTION:** Preview source is `UI-Component-Library/src/previews/zendesk/ZendeskScreens.tsx` and `zendesk-screens.css`.

## Accessibility

- **OBSERVATION:** The sampled screen exposed named buttons, headings and other roles in the captured accessibility tree where available.
- **NOT OBSERVED:** A complete provider screen-reader, keyboard order or assistive-technology audit.
- **RECONSTRUCTION:** The local preview uses labelled native controls and a labelled drawer dialog.

## Cross-Component Pattern Note

- **RECOMMENDATION:** Keep the screen-level context visible while a focused action menu or drawer is open.

## Competitor Comparisons

- **NOT OBSERVED:** No same-day side-by-side comparison with another support product was performed for this screen.

## Best Observed Approach

- **RECOMMENDATION:** Preserve the page shell and selected navigation state when moving into a focused action.

## Human Context

- **OBSERVATION:** Customize design opened the Themes workbench with Live theme and Theme library sections.
- **NOT OBSERVED:** Adding, buying, importing, customizing or publishing a theme was not exercised. The local theme card is illustrative.

## AI Context

- Product: Zendesk. Bounded screen observation verified 2026-10-05. Artifact: `zendesk-knowledge-themes`. Scope: `Account and Settings > Theme Workbench`.
- Preview: fictional local reconstruction. Provider mutation outcomes are outside this evidence.

## Sources

- **OBSERVATION:** [Authenticated Zendesk destination](https://centiliohelp.zendesk.com/theming/workbench).
- **OBSERVATION:** Private capture `knowledge-customize-design.ax.txt` and `knowledge-customize-design.png` in the dated evidence directory.
- **RECONSTRUCTION:** [Local fictional preview screenshot](/evidence/zendesk/zendesk-knowledge-themes.png).

## Evidence Boundary

The documented screen and visible states are complete for this bounded record. This does not certify every Zendesk behavior, entitlement or persisted outcome.
