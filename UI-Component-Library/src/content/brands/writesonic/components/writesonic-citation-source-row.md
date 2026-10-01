---
component: 'Writesonic Citation Source Row'
ui_category: 'Enterprise Tables > Citation Row'
source_product: Writesonic
last_verified: 2026-10-01
evidence_state: source_reviewed
status: partial
summary: 'A source favicon, page-path title, URL and citing-answer count.'
---

# Component: Writesonic Citation Source Row

Product → Onboarding → AI Search Report → Citation Source Row → Safe observation → Fictional local preview

## Location

- **OBSERVATION:** Authenticated `https://app.writesonic.com/onboarding/new` on 2026-10-01, M5, Codex in-app browser.
- **Extraction level:** Independent component.
- **Scope:** Accessible onboarding report only. Main application shell and paid product access are NOT OBSERVED.

## Structure

A source favicon, page-path title, URL and citing-answer count.

- **OBSERVATION:** Source anchors exposed target blank and rel noopener noreferrer. Customer-specific sources are excluded from local fixtures.

## Actions

| Element             | User action                            | Observed result                                                                                             | Boundary                                                     |
| ------------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| Citation Source Row | Safe inspection or keyboard activation | Source navigation was not exercised. The local example link is intercepted and reports a local-only notice. | No provider write, purchase, invitation or publishing action |

## Behavior & States

- **OBSERVATION:** Safe interaction outcomes are listed in Actions. Local fixture transitions are separated below.
- **RECONSTRUCTION:** Local state and fictional Northstar Workspace, Cedar Desk and Beacon Suite data. No customer prompts, generated answers, citation URLs or recommendation copy are used.
- **NOT OBSERVED — needs verification:** Provider loading, empty, success, disabled, validation and error outcomes are not established by local state fixtures.

### State fixtures

| Fixture         | Evidence boundary                |
| --------------- | -------------------------------- |
| observed-layout | Observed layout · fictional data |
| loading         | Loading · local simulation only  |
| empty           | Empty · local simulation only    |
| error           | Error · local simulation only    |

### Screenshot

![Fictional local reconstruction of Writesonic Citation Source Row](/research/writesonic/writesonic-citation-source-row.png)

The image above is a viewport screenshot of the local reconstruction, not a Writesonic screenshot. The retained private provider crop `Internal/scratch-2026-10/writesonic/screenshots/03-citations-header.png` verifies report navigation and table-header context only. A component-specific provider image is NOT retained where its capture included customer report content. Direct DOM and interaction observations remain separately documented. All published preview screenshots contain fictional data. Full live-screen screenshot coverage is partial and needs verification with a sanitized source.

## Rules & Validation

- **RECOMMENDATION:** Keep observed state, mathematical validity and paid-access claims separate. The source report's blank brand heading and inconsistent ratios must not become trusted analytics.
- **RECONSTRUCTION:** Links use reserved fictional domains and are intercepted. Log out, plan and unlock actions show local notices. There are no provider API calls.
- **NOT OBSERVED — needs verification:** Actual subscription requirements, billing flow, server validation and mutation outcomes.

## Technical Data

- **HTML / ARIA OBSERVATION:** Report tabs are buttons with `role=tab` and `aria-selected`. Tables expose column headers. Citation anchors use `target=_blank` and `rel=noopener noreferrer`.
- **CSS OBSERVATION:** Geist font stack, 30px report heading with 600 weight, 14px navigation/buttons, 6px footer-button radius, 28px Log out control and 36px footer controls. The local preview falls back to Arial when Geist is unavailable.
- **JavaScript BEHAVIOR OBSERVATION:** Keyboard Enter changed report panels without changing pathname. Continue from Action items moved to Answers, Back reversed it, and answer disclosure toggled its text label. ArrowRight moved tab focus without selecting.
- **NETWORK:** Endpoint contracts, request payloads, response bodies and provider persistence are NOT OBSERVED. No cookies, tokens, storage, hidden application state or customer data were extracted.
- **CONSOLE OBSERVATION:** A missing Google Search Console connection error and third-party widget initialization errors were present. They do not prove the cause of the inconsistent report values.
- **RECONSTRUCTION:** React local state, scoped CSS and explicit action guards. No backend, storage, external fetch or external navigation.
- **Record-specific evidence:** See the unique observations in Structure and Actions. Repeated prose is omitted from generated accessibility notes.

## Accessibility

- **OBSERVATION:** Keyboard Enter was required for reliable tab activation in this tool session. Mouse/locator click attempts produced no visible tab change. This is an observation of this session, not a general browser compatibility claim.
- **OBSERVATION:** The expanded answer control did not expose `aria-expanded` or `aria-controls`. Metric-help spans had no role or tabindex.
- **RECOMMENDATION / LOCAL IMPROVEMENT:** Name help buttons, add disclosure relationships, keep visible keyboard focus, implement manual-selection arrow-key tabs and announce guarded local notices. These improvements do not claim provider equivalence.

## Human View

A source favicon, page-path title, URL and citing-answer count. Use it as a reference for the visible report experience. The account's report content is replaced with fictional examples. Missing full-product access and all unexercised provider outcomes remain needs verification.

## AI Context

- Product: Writesonic.
- Record: writesonic-citation-source-row.
- Source route: /onboarding/new.
- Evidence: direct authenticated onboarding observation, source reviewed on 2026-10-01.
- Fixture origin: fictional local React reconstruction.
- Provider mutation status: none exercised.
- Provider runtime limits: main application, network contracts, billing, tooltip opening and server outcomes need verification.

## Cross-Component Pattern Note

Part of [[writesonic-onboarding-report-shell]], [[writesonic-report-tabs]] and [[writesonic-guarded-report-action]]. Screen records retain their composition while leaf controls have independent previews.

## Competitor Comparisons

| Pattern                      | Observed use                                         | Seek design consideration                               |
| ---------------------------- | ---------------------------------------------------- | ------------------------------------------------------- |
| Writesonic onboarding report | Tabbed visibility, citation, action and answer story | Expose source scope and valid metric denominators       |
| Semrush reference method     | Separate screen and action records                   | Keep full-screen context alongside independent controls |

## Best Observed Approach

**RECOMMENDATION:** Carry a reader from summary metrics to cited evidence and actionable recommendations with reversible navigation. Make data-quality and access boundaries explicit.

## Sources

- **OBSERVATION:** [Writesonic authenticated onboarding report](https://app.writesonic.com/onboarding/new), 2026-10-01. Account access required. This is the exact inspected route.
- **OBSERVATION:** Retained provider navigation/footer crop, sanitized DOM/CSS receipt and interaction ledger in `Internal/scratch-2026-10/writesonic/evidence/`.
- **RECONSTRUCTION:** `UI-Component-Library/src/previews/writesonic-citation-source-row/` and shared `writesonic-shared/` implementation. Screenshot shown above contains fictional data only.
- **NOT OBSERVED — needs verification:** All other Writesonic product routes and provider outcomes not specifically listed here.
