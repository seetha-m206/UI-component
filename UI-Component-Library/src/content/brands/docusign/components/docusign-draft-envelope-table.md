---
component: "DocuSign Draft Envelope Table"
ui_category: "Data Display > Agreement Tables"
source_product: "DocuSign"
last_verified: "2026-10-09"
evidence_state: "runtime_observed"
status: "partial"
summary: "Persisted draft rows with recipients, status, last-change metadata and continuation actions."
---

# Component: DocuSign Draft Envelope Table

## Location

- **OBSERVED:** Authenticated DocuSign Agreements > Drafts, 2026-10-09.
- **RECONSTRUCTION:** The local preview contains only the fictional sample titles and names created for this research pass.

## Screenshot

![Fictional local preview](/research/docusign/fixtures/docusign-draft-envelope-table.png)

## Structure

- **OBSERVED:** The table exposed selection, name, recipient summary, status, last change, Continue and More Actions columns.
- **OBSERVED:** Two separately saved sample envelopes appeared as Draft after a full page reload.

## Behavior & States

- **OBSERVED:** Saving and closing returned to the filtered Drafts view and inserted the new row.
- **OBSERVED:** Reload preserved both fictional drafts.
- **NOT OBSERVED:** Cross-session persistence, collaboration, deletion, restoration and sent-envelope transitions.

## Actions

- **OBSERVED:** Continue reopens a draft. More Actions was visible but not opened.
- **RECONSTRUCTION:** Continue is disabled locally to prevent confusion with provider state.

### State boundaries

- **OBSERVED:** Draft and persisted-after-reload states.
- **NOT OBSERVED:** Error, stale-session, concurrent-edit and deleted-draft states.

## Rules & Validation

- Draft rows need a clear status, recipient summary and last-change cue before continuation.

## Best Observed Approach

- Keep document names and recipients scannable while separating continuation from secondary actions.

## Accessibility

- **OBSERVED / Accessibility:** The provider exposed a semantic table with rows, cells, checkboxes and labelled action buttons.
- **NEEDS VERIFICATION:** Full keyboard navigation, screen-reader announcements and narrow layout.

## Technical Data

- **OBSERVED:** The Drafts route preserved the two entries across a browser reload.
- **NOT OBSERVED:** Persistence API schema, cache policy, sync timing and concurrency contract.

## Cross-Component Pattern Note

- Useful for Centilio Sign as the resumable-work surface between preparation sessions.

## Sources

- Authenticated bounded DocuSign observation, 2026-10-09.
- Local evidence receipts under Internal/scratch-2026-10/docusign/.

## Related Components

- [[docusign-envelope-setup]]
- [[docusign-table-pagination]]
