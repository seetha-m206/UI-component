---
component: Semrush Help and Support Panel
ui_category: 'Feedback > Support Drawer'
source_product: Semrush
last_verified: 2026-09-30
evidence_state: mixed_observed_reconstructed
status: complete
summary: Persistent help launcher opening a searchable support drawer with article cards, resource links, results, and guarded contact action.
---

# Component: Semrush Help and Support Panel

## Human View

Provides contextual self-service support without leaving the active product screen.

## State Fixtures

Closed launcher, open home, searched results, cleared search, and reconstructed no-results.

## Technical View

- The launcher label changes between Open and Close help panel.
- Search results replace the default getting-started and resource sections.
- Clear search restores the default panel content.
- Contact support and external destinations remain guarded in the preview.

## AI Context

Support content is contextual navigation, not confirmation that an action succeeded. Keep provider articles separate from product state.

## Evidence Boundary

- **OBSERVED:** Open and close, Help & Support heading, help search, clear action, article results, six getting-started cards, four resource links, and Contact support.
- **RECONSTRUCTION:** Fictional local result matching and no-results copy.
- **NOT OBSERVED:** Article navigation, contact workflow, support availability, loading, or error behavior.

## Sources

- Authenticated Semrush Home Help & Support panel, 2026-09-30.
- [[semrush-utility-header-actions]]
