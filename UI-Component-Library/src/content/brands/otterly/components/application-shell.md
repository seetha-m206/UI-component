---
component: OtterlyAI Application Shell
ui_category: "Application Layout > Sidebar and Report Header"
source_product: OtterlyAI
last_verified: 2026-10-01
evidence_state: mixed_observed_reconstructed
status: partial
summary: The authenticated workspace keeps a trial banner, workspace switcher, brand report tree, general tools, admin links, breadcrumb, and user menu around each page.
---

## Human View

**OBSERVATION:** The authenticated workspace keeps a trial banner, workspace switcher, brand report tree, general tools, admin links, breadcrumb, and user menu around each page.

**Safe interaction:** Selecting a visible report section changed the URL and content. The selected page remained highlighted. Collapsible sidebar groups exposed report and GEO audit subpages.

**Screenshot:** [Fictional local preview](/evidence/otterly/application-shell-preview.png). The live account screen was visually inspected in the Codex browser. Account-specific report values and prompt text are excluded from this record and fixture.

## AI Context

- **Component boundary:** Independent application layout > sidebar and report header pattern extracted from the authenticated application.
- **Action chain:** Visible control → local selection or navigation → resulting state described above. Unexercised submissions stay labelled needs verification.
- **Fixture:** A fictional Northstar Workspace shell with local-only navigation selection.
- **Seek lesson (RECOMMENDATION):** Keep user actions, data freshness, and evidence state explicit in the interface.

## Structure and States

- Default and observed states follow the Human View description.
- Local preview uses only fictional data and reversible state.
- **Needs verification:** Framework, responsive breakpoint, permissions, workspace switching, and whether collapsed nav state persists.

## Technical Data

- **OBSERVATION:** Observed menu groups: Brand Report, General, and Admin. Report subpages were Overview, Prompts, Citations, Recommendations, and Agent analytics. General included prompt research, Search prompts, GEO audit tools, and Data sources.
- **NOT OBSERVED:** DOM implementation details, JavaScript source, private network payloads, backend contracts, and responsive breakpoints. No such values are inferred from the visual structure.
- **RECONSTRUCTION:** A fictional Northstar Workspace shell with local-only navigation selection.

## Sources

- **OBSERVATION:** Authenticated OtterlyAI web application, observed 2026-10-01 through the Codex in-app browser. Screen route and interaction were observed directly.
- **SCREENSHOT:** Fictional local preview capture at the linked project scratch path.
- **EVIDENCE BOUNDARY:** Live account content is not copied into the catalogue. Simulated preview behavior is not a claim about provider behavior.
