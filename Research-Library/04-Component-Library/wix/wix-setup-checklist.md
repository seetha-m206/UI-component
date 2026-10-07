---
component: "Wix Business Setup Checklist"
ui_category: "Onboarding > Setup Checklist"
source_product: "Wix"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Wix Business Setup Checklist

## Location

- **OBSERVED:** Authenticated Setup page for an unpublished free portfolio site.

## Screenshot

- **NEEDS VERIFICATION:** Visually inspected in the in-app browser. No durable provider screenshot was archived.

## Structure

- **OBSERVED:** The rail summarizes progress as `1/6 completed`; the workspace repeats the progress in a “Let’s set up your business” checklist.
- **OBSERVED:** Tasks were Update site type, Connect custom domain, Get business email, Add project to portfolio, Design your website and Get found on Google.
- **OBSERVED:** Connect custom domain exposes an inline domain field and “Let’s Go” action. A premium-plan promotion appears as a separate banner.

## Actions

| Element | Safe action taken | Observed result |
| --- | --- | --- |
| Checklist container | Inspect only | Six tasks and progress were visible. |
| Domain field | Not edited | Entry and submit affordances were visible. |
| Design Site | Opened from the persistent rail | Loaded the Wix Harmony design entry screen. |

## Behavior & States

- **OBSERVED:** The checklist mixes completed progress, next actions and commercial upsells in the same onboarding surface.
- **NOT OBSERVED:** Completion persistence, domain validation, email purchase, SEO setup outcome or progress animation.

## Safety Boundary

- **OBSERVED:** No domain, email, payment, publication or external connection action was submitted.

## Human Context

- **RECOMMENDATION:** Keep task progress readable at a glance and separate actions requiring purchase or external configuration with explicit labels.

## Needs Verification

- **NEEDS VERIFICATION:** Error states, task completion rules, reordering, dismissal and paid-step transitions.

## Fixture Evidence

- **RECONSTRUCTION:** The registered local preview uses fictional data, preserves the observed evidence boundary and sends no Wix request.

## Local Preview Captures

- **RECONSTRUCTION:** These images capture the fictional local preview. They are not Wix provider screenshots.

### Observed checklist

![wix-setup-checklist — Observed checklist](/research/wix/fixtures/wix-setup-checklist--default.jpg)

- **RECONSTRUCTION / CAPTURE:** `default` at 1600 × 1200. SHA-256 `94efad219347d31242d4436c3e550650df5f4ca744a8e0034077a6cabc6c9ee1`.

## Sources

- **OBSERVED:** Authenticated Wix Setup route, inspected 2026-10-07.
