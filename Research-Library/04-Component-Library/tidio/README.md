# Tidio component research

Evidence-led, read-only research for Centilio Greet, observed in an authenticated Tidio session on 2026-10-08.

## Evidence contract

- **OBSERVATION** means the screen text, structure or state was directly visible in the authenticated provider UI.
- **RECONSTRUCTION** means the React preview and its content are fictional local fixtures inspired by the observed pattern.
- **NOT OBSERVED** means the provider behavior was not exercised.
- **NEEDS VERIFICATION** means a product consequence, entitlement, persistence rule or responsive state requires separate evidence.

Provider state was not mutated. No message was sent, conversation or visitor was simulated, channel or integration was connected, Lyro feature was activated, flow or Help Center was created, file was uploaded, setting was saved, purchase was started or permission was changed. Direct same-origin route navigation was used only to inspect safely reachable read-only screens.

## Privacy and technical evidence

The runtime summary retains sanitized routes, screen names and visible state only. It excludes operator identifiers, account details, credentials, cookies, tokens, provider demo message bodies, personal data and opaque payloads. The browser's transient connection warning is recorded as a transient observed state, not as the normal settled experience.

## Components

- `tidio-application-shell` — Icon rail, account utilities, trial boundary and product navigation.
- `tidio-getting-started-onboarding` — Channel cards and a five-step onboarding checklist with zero completed tasks.
- `tidio-dashboard-overview` — Setup progress, quick actions, zero-data performance metrics and usage status.
- `tidio-inbox-empty-workspace` — Conversation and ticket folders, empty queue, integration prompts and browser-notification boundary.
- `tidio-lyro-setup-checklist` — Nested Lyro navigation and staged checklist for knowledge, tone, testing and channels.
- `tidio-flows-welcome` — Flows navigation, lead-generation introduction and reusable starter strategy cards.
- `tidio-customers-live-visitors-boundary` — Live visitor navigation and widget-installation empty state.
- `tidio-analytics-overview` — Paid analytics navigation, date range, KPI grid and no-activity visualization.
- `tidio-help-center-onboarding` — Beta Help Center entry with an empty onboarding state and create boundary.
- `tidio-integrations-catalogue` — Searchable integration catalogue grouped by business function with zero installed integrations.
- `tidio-widget-appearance-editor` — Settings catalogue, appearance form, content tabs and live widget preview.
- `tidio-lyro-data-sources-empty` — Empty knowledge source list with website, manual, file, Zendesk and product source options.
- `tidio-lyro-suggestions-empty` — Explanatory suggestions banner and empty list state.
- `tidio-lyro-guidance` — Communication-style table and emoji preference control.
- `tidio-lyro-handoff` — Default handoff overview and zero custom guidance state.
- `tidio-lyro-proactive-roles` — Empty role list with a template gallery for visitor and sales scenarios.
- `tidio-lyro-procedures-empty` — Procedure introduction and empty creation boundary.
- `tidio-lyro-actions-mcps` — Actions and beta MCP tabs, empty action inventory and reusable action templates.
- `tidio-lyro-channels` — Inactive Lyro channel configuration with prerequisite banner and connection states.
- `tidio-lyro-configure` — General, Audiences and Copilot tabs with identity, language and access settings.
- `tidio-connection-loading-state` — Full-screen connecting state and transient accessibility-only connection warning.
- `tidio-provider-action-boundaries` — Reusable local treatment for install, connect, create, simulate, activate and save actions that were visible but not exercised.

## Local fixtures

The shared React reconstruction is in `UI-Component-Library/src/previews/tidio-shared`. Public images under `/research/tidio/fixtures/` are fictional local screenshots, not provider captures.

## Internal evidence

The dated runtime summary, acceptance ledger and validation receipts are stored in `Internal/scratch-2026-10/tidio`.
