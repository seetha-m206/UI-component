---
component: "Wix Dashboard Application Shell"
ui_category: "Application Layout > App Shell"
source_product: "Wix"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Wix Dashboard Application Shell

## Location

- **OBSERVED:** Authenticated Wix dashboard on the Setup, Website Overview, Settings, SEO and Analytics routes.

## Screenshot

- **NEEDS VERIFICATION:** Visually inspected in the Codex in-app browser. No durable provider screenshot was archived.

## Structure

- **OBSERVED:** A persistent white top bar sits above a dark left rail and light workspace. The top bar contains the Wix mark, site switcher, Explore, Hire a Professional, Help, Upgrade, global search, utility icons, account menu and AI entry.
- **OBSERVED:** The rail begins with Quick Actions and setup progress, then mixes direct links with expandable product groups. Add More Tools and Design Site remain fixed near the bottom.
- **OBSERVED:** Expanding Analytics reveals Highlights, Real-time, Traffic, Behavior, Marketing, Session Recordings, Insights & Benchmarks and All Reports without replacing the workspace.

## Actions

| Element | Observed behavior |
| --- | --- |
| Collapse sidebar | Visible control. Collapsed result was not tested. |
| Expandable rail group | Opens a nested list in place. Analytics was verified. |
| Direct rail link | Replaces the main workspace while preserving the shell. |
| Quick Actions | Opens an action catalogue panel. |

## Behavior & States

- **OBSERVED:** Active entries receive a darker selected row. Expanded groups retain their children in the rail.
- **OBSERVED:** The shell persists across business setup, website, settings and reporting contexts.
- **NOT OBSERVED:** Responsive shell, saved collapse state, complete keyboard order and mobile dashboard behavior.

## Technical Data

- **OBSERVED / DOM:** Rendered accessibility roles included buttons, links, content lists, text fields, expanded and collapsed states, progress indicators and a main labelled container.
- **NOT OBSERVED:** Internal APIs, source code, authorization checks, motion timing and design tokens.

## Human Context

- **RECOMMENDATION:** Reuse the shell as a stable orientation layer. Keep high-frequency creation and site-design actions visually separate from product navigation.

## Needs Verification

- **NEEDS VERIFICATION:** Durable screenshots, responsive layout, reduced-motion behavior and persistence of sidebar preferences.

## Fixture Evidence

- **RECONSTRUCTION:** The registered local preview uses fictional data, preserves the observed evidence boundary and sends no Wix request.

## Local Preview Captures

- **RECONSTRUCTION:** These images capture the fictional local preview. They are not Wix provider screenshots.

### Observed shell

![wix-dashboard-application-shell — Observed shell](/research/wix/fixtures/wix-dashboard-application-shell--default.jpg)

- **RECONSTRUCTION / CAPTURE:** `default` at 1600 × 1200. SHA-256 `2f8f9f51f00fc74c9cb05f60484f1836233d71aa157581c2d0e1534b66812a02`.

## Sources

- **OBSERVED:** Authenticated Wix dashboard routes under `/dashboard/{site-id}/`, inspected 2026-10-07.
