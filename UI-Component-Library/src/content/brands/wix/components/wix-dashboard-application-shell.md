---
component: "Wix Dashboard Application Shell"
ui_category: "Application Layout > App Shell"
source_product: "Wix"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Persistent Wix top bar, dark product rail, nested navigation and light workspace observed across setup, website, settings, SEO and analytics."
---

# Wix Dashboard Application Shell

## Structure

- **OBSERVED:** A persistent white top bar contains the site switcher, Explore, Help, Upgrade, global search, utilities, account and AI. A dark left rail contains Quick Actions, setup progress, direct links, expandable product groups, Add More Tools and Design Site.
- **OBSERVED:** Main routes replace the light workspace while preserving the shell. Expanded Analytics revealed Highlights, Real-time, Traffic, Behavior, Marketing, Session Recordings, Insights & Benchmarks and All Reports.

## Behavior & States

- **OBSERVED:** Active rows are highlighted and expanded groups reveal nested links in place.
- **OBSERVED / DOM:** Rendered roles included buttons, links, lists, text fields, progress indicators and expanded or collapsed state.
- **NOT OBSERVED:** Responsive behavior, saved collapse state, full keyboard order, internal APIs and design tokens.

## Reconstruction Guidance

- **RECONSTRUCTION:** Use a fixed-height top bar, dark scrollable rail and route workspace. Keep creation and design actions visually distinct from navigation.

## Evidence

- **NEEDS VERIFICATION:** No durable provider screenshot was archived.
- **OBSERVED:** Authenticated Wix dashboard routes, inspected 2026-10-07.

## Local Preview Captures

- **RECONSTRUCTION:** These images capture the fictional local preview. They are not Wix provider screenshots.

### Observed shell

![wix-dashboard-application-shell — Observed shell](/research/wix/fixtures/wix-dashboard-application-shell--default.jpg)

- **RECONSTRUCTION / CAPTURE:** `default` at 1600 × 1200. SHA-256 `2f8f9f51f00fc74c9cb05f60484f1836233d71aa157581c2d0e1534b66812a02`.

## Sources

- **OBSERVED:** Authenticated Wix provider UI, inspected 2026-10-07. No durable provider screenshot or network trace was archived.
