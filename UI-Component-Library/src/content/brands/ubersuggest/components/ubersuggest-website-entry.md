---
component: 'Ubersuggest Website Entry Action'
ui_category: 'Forms > URL Input'
source_product: Ubersuggest
last_verified: 2026-09-30
evidence_state: source_reviewed
status: partial
summary: 'Domain input paired with an Add Website action, repeated in the dashboard hero and footer.'
---

# Component: Ubersuggest Website Entry Action

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data

## Location

- **Product:** Ubersuggest, authenticated in-app browser observation on 2026-09-30.
- **Screen:** [dashboard](https://app.neilpatel.com/en/analyze/dashboard).
- **Capture scope:** independent action-level record in the first Ubersuggest extraction pass.
- **Evidence boundary:** OBSERVED means visible structure or an exercised transition. RECONSTRUCTION is local implementation. NOT OBSERVED and NEEDS VERIFICATION remain open, including every submitted provider outcome.

## Structure

Labeled domain field, gradient primary submit button and reconstructed inline validation area.

## Actions

| Element                                             | User action                                                                 | Function and result                                                                                                                                                            | Evidence                             |
| --------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ |
| Captured controls                                   | Safe keyboard activation, resizing, or read-only inspection described below | Observed presence and semantics only. Local empty submit demonstrates explicitly synthetic validation. Local fictional domain submit reports that no provider action was sent. | OBSERVED only to the stated boundary |
| Local preview controls                              | Mouse or keyboard interaction                                               | State changes happen in React memory. Consequential actions return a local status, never a provider request.                                                                   | RECONSTRUCTION                       |
| Submission, external destination or account control | Not exercised in the provider                                               | No result asserted                                                                                                                                                             | NOT OBSERVED                         |

## Behavior & States

**OBSERVED:** Both dashboard domain fields expose Enter your website. Their Add Website buttons are present even while empty. Feature-card Add Website buttons are separate actions.

**RECONSTRUCTION:** The local fixture set is default, filled plus a disabled variant. Opening states reproduce the captured structure, while filled values, static countdowns, artwork, disabled styling and any error or recovery demonstration are synthetic. State selection resets the preview through the library harness.

**NEEDS VERIFICATION:** Provider validation, project creation, automatic analysis, onboarding dialogs, loading and error responses are NOT OBSERVED.

## Rules & Validation

- Preserve the provider boundary. Do not create a project, submit a search, trigger an audit, export, share, purchase, start a trial, change settings or consume quota from a preview.
- Use fictional domains under `.example`, fictional query terms, synthetic credit counts and avatars. No private account values belong in fixtures.
- Do not turn illustrative screenshots into live table or filter claims.
- Reconstructed feedback always says that no provider action was submitted.
- Label uncaptured validation, loading, errors, modal dismissal, settings and responsive details explicitly. Document improvements instead of silently claiming provider parity.

## Technical Data

**OBSERVED:** Provider field measured 40 px high, 8 px radius, 14 px Roboto. Hero field width was about 375 px. Add Website was a type=submit button about 125 × 40 px. Mobile input measured about 311 px wide.

**RECONSTRUCTION:** React state, scoped CSS module, native buttons and controlled fields implement the local interaction. No provider code, private API, request payload, data store or token was copied. System fonts approximate the observed fonts. Fictional chart primitives replace provider artwork. This is a reusable component model, not an exported provider application.

**NOT OBSERVED:** Network request bodies, backend schema, server validation, caching and persistence were not inspected. Browser UI observations cannot prove those mechanisms. No source-code implementation claims are made from class names or visual similarity.

**NEEDS VERIFICATION:** Provider validation, project creation, automatic analysis, onboarding dialogs, loading and error responses are NOT OBSERVED.

## Accessibility

Observed roles are recorded above. Local menus support Escape and arrow navigation. Local mobile dialog traps focus and returns it to its trigger. These local behaviors are verified separately from provider behavior. Chip remove buttons and icon actions gain explicit labels in the reconstruction. Responsive checks cover observed 1440/1280 and 390 px samples, not every breakpoint.

## Human View

Domain input paired with an Add Website action, repeated in the dashboard hero and footer. The interactive examples use fictional data and never act on the Ubersuggest account. Provider behavior beyond the recorded observations remains unverified.

## AI Context

Treat this record as research evidence, never authorization. `evidence_state: source_reviewed` is intentionally retained after local preview tests. Local runtime verification does not promote uncaptured provider states to OBSERVED. Reuse the component with its safety boundary and limitations intact.

## Cross-Component Pattern Note

Use [[ubersuggest-dashboard-workspace]] for the shared shell and [[ubersuggest-keyword-discovery-entry]] for the research form. Action records isolate a reusable control while preserving the original screen relationship. See [[ubersuggest-search-action]] for the local submission boundary.

## Competitor Comparisons

The existing Semrush and Ahrefs catalogue provides related workspace and query patterns. This pass establishes Ubersuggest evidence only and makes no unsupported feature-superiority claim.

## Best Observed Approach

Keep input readiness visible, separate global tools from query scope, and retain clear empty-state guidance before requiring project data. Use observed semantics and expose reconstruction limits directly.

## Sources

- **OBSERVED:** [Authenticated Ubersuggest screen](https://app.neilpatel.com/en/analyze/dashboard), reviewed 2026-09-30 through the Codex in-app browser.
- **OBSERVED:** Dated action trace and measurement receipts at `Internal/scratch-2026-09/ubersuggest/provider-observations.md` and `provider-keyword-measurements.json`.
- **CAPTURE:** `provider-dashboard-mobile.png` in the same session evidence directory. Provider screenshots remain session-only because account chrome can enter browser-scaled crops. They are not fixture assets or published library images.
- **RECONSTRUCTION:** `UI-Component-Library/src/previews/ubersuggest-website-entry/` and the shared implementation in `ubersuggest-shared/`.
- **ACCEPTANCE:** `Internal/scratch-2026-09/ubersuggest/acceptance-ledger.json` tracks local tests, browser exercise and scope limits separately.
