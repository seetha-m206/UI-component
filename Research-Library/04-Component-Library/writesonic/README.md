# Writesonic component extraction

Observed 2026-10-01 in the authenticated Codex in-app browser. This batch contains six screen compositions (five report views plus the subscription boundary) and twelve independent components. All previews use fictional data. This is not complete Writesonic product coverage.

## Subscription boundary

A read-only visit to the standard app root redirected to Select a plan. Live work stopped with no plan selection or checkout. Card requirement and auto-renewal are unverified. See [Plan Selection Boundary](writesonic-plan-selection-boundary.md).

## Available report coverage

- [Writesonic Onboarding Report Shell](writesonic-onboarding-report-shell.md)
- [Writesonic Competitive Analysis Report](writesonic-competitive-analysis-report.md)
- [Writesonic Citations Report](writesonic-citations-report.md)
- [Writesonic Action Items Report](writesonic-action-items-report.md)
- [Writesonic Answers Report](writesonic-answers-report.md)
- [Writesonic Report Page Header](writesonic-report-page-header.md)
- [Writesonic Report Tabs](writesonic-report-tabs.md)
- [Writesonic Visibility Metric Cards](writesonic-visibility-metric-cards.md)
- [Writesonic Metric Help Trigger](writesonic-metric-help-trigger.md)
- [Writesonic Competitor Ranking Table](writesonic-competitor-ranking-table.md)
- [Writesonic Sentiment Indicator](writesonic-sentiment-indicator.md)
- [Writesonic Citation Source Row](writesonic-citation-source-row.md)
- [Writesonic Recommendation Card](writesonic-recommendation-card.md)
- [Writesonic Answer Card](writesonic-answer-card.md)
- [Writesonic Answer Disclosure](writesonic-answer-disclosure.md)
- [Writesonic Report Step Footer](writesonic-report-step-footer.md)
- [Writesonic Guarded Report Action](writesonic-guarded-report-action.md)

## Live verification boundaries

All four report tabs, keyboard focus navigation, Action items Continue, Answers Back and first-answer expand/collapse were exercised. No plan, unlock, complete-report, logout, customer-data mutation or external citation navigation was performed. Click attempts were ineffective in this session, while keyboard Enter worked. Metric help opening was not observed.

The visible report had a blank brand heading and inconsistent ratios. Its calculations are not validated. Provider loading, empty, success, disabled, validation, and error states remain needs verification. Local examples are labelled simulations.

## Remaining coverage by owner

1. Ravi and Codex: permitted access to the main application shell beyond onboarding, with no purchase or renewal authorized.
2. Codex after access: GEO visibility workspace, AI Traffic Analytics, prompt monitoring, competitor matrices, sentiment, fact checking, engine/date/country filters, SEO AI Agent, research and planning, editor, optimizer, brand voice, audit, recommendations, integrations, approval, publishing guards and alerts.
3. Codex after access: pagination, notifications, tooltips, modal and server-result states where safe to observe.
4. Ravi: separate authorization before any commit, push, deployment, purchase or live mutation.

## Taxonomy checklist

| Category | Observed in current report | Needs verification outside this report |
|---|---|---|
| Application Layout | Onboarding shell, top bar, main content, page header | Full app shell and sidebar |
| Navigation | Tabs and step footer | Breadcrumbs, primary navigation, pagination |
| Actions | Buttons, button group, disclosure, access CTAs | Action menus, bulk and destructive actions |
| Forms | No form inputs visible in current report | Inputs, dropdowns, uploads and validation |
| Data Display | Metrics, cards, badge, sentiment bar | Other lists, charts and skeletons |
| Feedback | Closed help trigger and console error evidence | Visible provider tooltip, alert, toast, modal, empty/error/success states |
| Search and Filtering | No filters visible in current report | Global search, date/model/country filters and chips |
| Enterprise Tables | Competitor and citation tables | Sorting, row selection and pagination |
| Notifications | None visible in current report | Notification center and delivery preferences |
| Account/Settings | Log out and View Plans entry controls only | Settings, billing, roles and integrations |

Private captures and acceptance ledger: `Internal/scratch-2026-10/writesonic/`. Public preview images contain fictional data only.
